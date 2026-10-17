/*
 * Checks the Chinese mirror on the things a translation can silently lose. For each content file
 * it compares against the English one it translates: a heading, a list item, a table row, a link,
 * a source, or a whole paragraph. For the data files that fill pages there is no twin to compare
 * with, so it checks completeness instead. Run with `node scripts/audit-zh.mjs` from the root.
 *
 * It does not judge wording. It answers a narrower question that is easy to check exactly:
 * does the Chinese page have the same parts as the English one, and is the Chinese typography
 * (no wrapped lines, no half-width punctuation between Han characters, no banned separators)
 * self-consistent.
 */
import { readFileSync, readdirSync, existsSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';

const root = new URL('..', import.meta.url).pathname.replace(/^\/(\w:\/)/, '$1');
const contentDir = join(root, 'src', 'content');
const problems = [];

function walk(dir, out = []) {
  for (const name of readdirSync(dir)) {
    if (name === 'zh') continue;
    const p = join(dir, name);
    if (statSync(p).isDirectory()) walk(p, out);
    else if (name.endsWith('.md')) out.push(p);
  }
  return out;
}

const FRONTMATTER = /^---\n([\s\S]*?)\n---\n([\s\S]*)$/;

function parse(file) {
  /* Windows checkouts hand back CRLF line endings, and every pattern below is written against
   * LF. Read as-is, a perfectly well-formed file reports "no frontmatter", which buries the real
   * findings under a page of false ones. Normalising here costs nothing: the script only reads. */
  const raw = readFileSync(file, 'utf8').replace(/\r\n/g, '\n');
  const m = raw.match(FRONTMATTER);
  if (!m) problems.push(`${relative(root, file)}: no frontmatter`);
  return { file, fm: m?.[1] ?? '', body: m?.[2] ?? '', raw };
}

/** Fields a translation must copy unchanged, because they are data rather than prose. */
const MUST_MATCH = ['type', 'category', 'evidence', 'published', 'reviewDueOn', 'jurisdictions'];

function fmField(fm, key) {
  const m = fm.match(new RegExp(`^${key}:(.*)$`, 'm'));
  return m ? m[1].trim() : undefined;
}

function structure(doc) {
  const lines = doc.body.split('\n');
  return {
    headings: lines.filter((l) => /^#{2,4} /.test(l)).map((l) => l.match(/^(#+) /)[1].length),
    bullets: lines.filter((l) => /^[-*] /.test(l)).length,
    numbered: lines.filter((l) => /^\d+\. /.test(l)).length,
    tableRows: lines.filter((l) => /^\|/.test(l)).length,
    links: [...doc.body.matchAll(/\]\(([^)]+)\)/g)].map((m) => m[1]),
    bolds: (doc.body.match(/\*\*/g) ?? []).length,
    paragraphs: lines.filter((l) => l.trim() !== '').length,
  };
}

/* The typography rules Chinese has and English does not. A soft line break prints a space,
 * which is invisible between Latin words and a visible gap between Han characters. */
const HAN = '\\u4e00-\\u9fff';
const HAN_RE = new RegExp(`[${HAN}]`);
/* The failure mode this actually catches: a closing ** that follows full-width punctuation and
 * runs straight into a Han letter is neither left- nor right-flanking, so CommonMark prints the
 * asterisks instead of bold. `**词**：内容` renders; `**词。**内容` does not. */
const checks = [
  { re: new RegExp(`[${HAN}][,.?!:;]|[,.?!:;][${HAN}]`), label: 'half-width punctuation beside Han' },
  { re: /[—–…]/, label: 'em dash, en dash or ellipsis' },
  { re: new RegExp(`\\*\\*[^\\n]*[\\u3002\\uff1a\\uff1b\\uff0c\\uff01\\uff1f\\u3001\\u300d\\uff09]\\*\\*[${HAN}]`), label: 'bold closed against a Han letter' },
];

for (const enFile of walk(contentDir)) {
  const rel = relative(contentDir, enFile);
  const zhFile = join(contentDir, 'zh', rel);
  if (!existsSync(zhFile)) continue;
  const en = parse(enFile);
  const zh = parse(zhFile);
  const tag = `zh/${rel.replace(/\\/g, '/')}`;

  for (const key of MUST_MATCH) {
    if (fmField(en.fm, key) !== fmField(zh.fm, key)) problems.push(`${tag}: ${key} differs from the English page`);
  }

  for (const key of ['title', 'description']) {
    if (!fmField(zh.fm, key)) problems.push(`${tag}: ${key} missing`);
  }
  /* Articles have no titleTag and guides do, so presence has to match the English page rather
   * than be required outright. */
  if (Boolean(fmField(en.fm, 'titleTag')) !== Boolean(fmField(zh.fm, 'titleTag'))) {
    problems.push(`${tag}: titleTag presence differs from the English page`);
  }
  const titleTag = fmField(zh.fm, 'titleTag') ?? fmField(zh.fm, 'title') ?? '';
  const width = [...titleTag].reduce((n, c) => n + (/[一-鿿 -〿＀-￯]/.test(c) ? 2 : 1), 0);
  if (width + ' | SurrogacyBase'.length > 62) problems.push(`${tag}: titleTag is ${width} half-width units`);

  const a = structure(en);
  const b = structure(zh);
  if (a.headings.join() !== b.headings.join()) problems.push(`${tag}: headings ${a.headings.join('/')} vs ${b.headings.join('/')}`);
  if (a.bullets !== b.bullets) problems.push(`${tag}: ${a.bullets} bullets vs ${b.bullets}`);
  if (a.numbered !== b.numbered) problems.push(`${tag}: ${a.numbered} numbered items vs ${b.numbered}`);
  if (a.tableRows !== b.tableRows) problems.push(`${tag}: ${a.tableRows} table lines vs ${b.tableRows}`);
  if (a.bolds !== b.bolds) problems.push(`${tag}: ${a.bolds} ** markers vs ${b.bolds}`);

  const enLinks = a.links.filter((l) => l.startsWith('/')).map((l) => (l === '/' ? '/zh' : `/zh${l}`)).sort();
  const zhLinks = b.links.filter((l) => l.startsWith('/')).sort();
  if (enLinks.join() !== zhLinks.join()) {
    problems.push(`${tag}: internal links differ (${enLinks.length} vs ${zhLinks.length})`);
  }
  const enExt = a.links.filter((l) => !l.startsWith('/')).sort();
  const zhExt = b.links.filter((l) => !l.startsWith('/')).sort();
  if (enExt.join() !== zhExt.join()) problems.push(`${tag}: external links differ`);
  for (const l of zhLinks) {
    const target = join(contentDir, l.replace(/^\//, '').replace(/\/$/, '') + '.md');
    const asDir = join(contentDir, l.replace(/^\//, ''), 'index.md');
    /* Tools and destinations are built from data, not from a markdown file, so their
     * existence is checked against the built output by scripts/audit-dist.mjs instead. */
    const dataDriven =
      l.startsWith('/zh/tools/') || l.startsWith('/zh/destinations') || l.startsWith('/zh/about') || l.startsWith('/zh/assessment');
    if (!dataDriven && !existsSync(target) && !existsSync(asDir)) {
      problems.push(`${tag}: link to a Chinese page that has no source file (${l})`);
    }
  }

  const enSources = (en.fm.match(/^  - label:/gm) ?? []).length;
  const zhSources = (zh.fm.match(/^  - label:/gm) ?? []).length;
  if (enSources !== zhSources) problems.push(`${tag}: ${enSources} sources vs ${zhSources}`);
  const urls = (s) => [...s.matchAll(/url: "([^"]+)"/g)].map((m) => m[1]).join();
  if (urls(en.fm) !== urls(zh.fm)) problems.push(`${tag}: source urls differ`);
  /* Only the dates inside the sources block have to match. The top-level publishedOn and
   * updatedOn are the Chinese page's own dates and legitimately differ from the English ones. */
  const dates = (s) =>
    [...s.replace(/^(publishedOn|updatedOn|reviewDueOn):.*$/gm, '').matchAll(/(publishedOn|verifiedOn): "([^"]+)"/g)]
      .map((m) => m[2])
      .join();
  if (dates(en.fm) !== dates(zh.fm)) problems.push(`${tag}: source dates differ`);
  for (const m of zh.fm.matchAll(/supports: "(.*)"/g)) {
    if (!HAN_RE.test(m[1])) problems.push(`${tag}: an English source note was left untranslated`);
  }

  /* Each paragraph, list item and table cell goes on one line, because a soft break inside them
   * prints a space and a space between Han characters is visible. */
  const ITEM = /^\s*(?:[-*]|\d+\.)\s|^>|^\|/;
  const wrapped = zh.body
    .trim()
    .split(/\n{2,}/)
    .flatMap((block) => block.split('\n').slice(1).filter((l) => l.trim() !== '' && !ITEM.test(l)));
  if (wrapped.length) {
    problems.push(`${tag}: ${wrapped.length} continuation line(s) after a first line (${wrapped[0].slice(0, 24)} is one)`);
  }
  typography(tag, zh.body);
  if (!HAN_RE.test(zh.body)) problems.push(`${tag}: body has no Chinese`);
}

const missing = walk(contentDir)
  .map((f) => relative(contentDir, f))
  .filter((rel) => !existsSync(join(contentDir, 'zh', rel)));

/*
 * The data files that fill whole pages, where there is no markdown twin to compare against: the
 * Chinese overlay for the jurisdiction records, and the bilingual dictionaries behind the tools
 * and the assessment.
 *
 * localize() already throws at build time when the overlay and a record disagree, but only for a
 * record that gets built. What nothing else catches is an English string pasted into a Chinese
 * slot, because that builds and reads as one English sentence inside a Chinese page.
 */
const dataDir = join(root, 'src', 'data');
const untranslatedRecords = [];

function typography(where, value) {
  for (const c of checks) {
    const hits = value.match(new RegExp(c.re, 'g'));
    if (hits) problems.push(`${where}: ${c.label} x${hits.length} (${hits[0].slice(0, 20)})`);
  }
}

/** The letters and digits of a string, so two spellings of one name compare equal. */
function asName(value) {
  return value.replace(/[^0-9A-Za-z]/g, '');
}

/*
 * Values that are written the same way in both languages because they are names rather than
 * sentences: the site's own brand, and two firms whose registered name is Latin script. The
 * comparison ignores punctuation, since the Chinese page restyles the brackets around a name.
 * Anything else with no Chinese in a Chinese slot went untranslated, so excusing a new value
 * means editing this list, which is a visible decision rather than a silent pass.
 */
const CARRIED_OVER = new Set(
  ['SurrogacyBase', 'Affirma Law (AGT Abogados S.A.S.)', 'Amoiridis Law Services', '/zh'].map(asName),
);

const overlay = JSON.parse(readFileSync(join(dataDir, 'jurisdictions-zh.json'), 'utf8'));
let recordsRead = 0;
for (const file of readdirSync(join(dataDir, 'jurisdictions'))) {
  const code = file.replace(/\.json$/, '');
  const en = JSON.parse(readFileSync(join(dataDir, 'jurisdictions', file), 'utf8'));
  /* The source files leave `published` out and the collection schema defaults it to true. */
  if (en.published === false) continue;
  recordsRead++;
  const zh = overlay[code];
  if (!zh) {
    untranslatedRecords.push(`jurisdictions/${code}`);
    continue;
  }
  const tag = `jurisdictions-zh.json: ${code}`;
  if (zh.facts.length !== en.facts.length) problems.push(`${tag}: ${en.facts.length} sourced facts in English, ${zh.facts.length} in Chinese`);
  if (zh.openQuestions.length !== en.openQuestions.length) {
    problems.push(`${tag}: ${en.openQuestions.length} open questions in English, ${zh.openQuestions.length} in Chinese`);
  }
  en.facts.forEach((fact, i) => {
    const zhFact = zh.facts[i];
    if (!zhFact) return;
    if (zhFact.url !== fact.source.url) problems.push(`${tag} fact ${i}: names ${zhFact.url}, the source names ${fact.source.url}`);
    for (const key of ['label', 'publisher', 'supports', 'claim']) {
      const value = String(zhFact[key] ?? '');
      /* A source's title and its publisher can be a registered name carried over as written;
       * the claim and the note about it are sentences, and a sentence has to be Chinese. */
      const carriedOver = (key === 'label' || key === 'publisher') && CARRIED_OVER.has(asName(value));
      if (!HAN_RE.test(value) && !carriedOver) problems.push(`${tag} fact ${i}: ${key} was left untranslated`);
      typography(`${tag} fact ${i} ${key}`, value);
    }
  });
  for (const key of ['name', 'region', 'eligibility', 'paymentModel', 'parentage']) {
    if (!HAN_RE.test(String(zh[key] ?? ''))) problems.push(`${tag}: ${key} was left untranslated`);
    typography(`${tag} ${key}`, String(zh[key] ?? ''));
  }
  for (const [i, q] of zh.openQuestions.entries()) {
    if (!HAN_RE.test(q)) problems.push(`${tag}: open question ${i} was left untranslated`);
    typography(`${tag} open question ${i}`, q);
  }
}
/* Without this the loop above can silently read nothing, which is how a broken overlay passes. */
if (recordsRead === 0) problems.push('jurisdictions: not one record was read, so the source files changed shape');

/*
 * The updates log works the same way, but keyed by each entry's English title rather than by a code:
 * an entry can be appended in the middle of the log, and a positional overlay would then translate
 * every entry by one without any count disagreeing.
 */
const logEn = JSON.parse(readFileSync(join(dataDir, 'updates.json'), 'utf8'));
const { _comment: logNote, ...logZh } = JSON.parse(readFileSync(join(dataDir, 'updates-zh.json'), 'utf8'));
for (const item of logEn) {
  const zh = logZh[item.title];
  if (!zh) {
    untranslatedRecords.push(`updates: ${item.title}`);
    continue;
  }
  const tag = `updates-zh.json: ${item.title}`;
  for (const key of ['title', 'change', 'reason']) {
    const value = String(zh[key] ?? '');
    if (!HAN_RE.test(value) && !CARRIED_OVER.has(asName(value))) problems.push(`${tag}: ${key} was left untranslated`);
    typography(`${tag} ${key}`, value);
  }
}
for (const key of Object.keys(logZh)) {
  if (!logEn.some((item) => item.title === key)) {
    problems.push(`updates-zh.json: wording for "${key}" but no such entry in updates.json`);
  }
}
if (logEn.length === 0) problems.push('updates: not one entry was read, so the log changed shape');

/*
 * The dictionaries that hold prose as `{ en: '...', zh: '...' }` pairs. Record<Lang, X> blocks
 * are not scanned for parity here because the compiler already demands every key of every
 * locale; what still needs a check is the wording inside them, so they join the sweep below.
 */
const pairFiles = [
  'src/data/concerns.ts',
  'src/data/home.ts',
  'src/data/intake.ts',
  'src/data/tools.ts',
  'src/data/checklists.ts',
  'src/data/destination-notes.ts',
];
const proseFiles = [
  ...pairFiles,
  'src/data/tool-pages.ts',
  'src/data/service-pages.ts',
  'src/data/policy-pages.ts',
  'src/i18n/ui.ts',
  'src/i18n/config.ts',
  'src/i18n/routes.ts',
];

for (const rel of proseFiles) {
  const file = join(root, ...rel.split('/'));
  if (!existsSync(file)) {
    problems.push(`${rel}: is not where the audit expects it, so nothing in it was checked`);
    continue;
  }
  const src = readFileSync(file, 'utf8').replace(/\r\n/g, '\n');
  const tag = rel;
  if (pairFiles.includes(rel)) {
    const pairs = [...src.matchAll(/\ben:\s*'([^']*)',\s*zh:\s*'([^']*)'/g)];
    /* Counted in any quoting style: a pair written with double quotes, or split over two lines,
     * becomes a pair the reader above skipped and a number that no longer matches. */
    const enMarks = (src.match(/\ben:\s*["']/g) ?? []).length;
    const zhMarks = (src.match(/\bzh:\s*["']/g) ?? []).length;
    if (pairs.length !== enMarks || pairs.length !== zhMarks) {
      problems.push(
        `${tag}: read ${pairs.length} pair(s) but the file holds ${enMarks} en: and ${zhMarks} zh: string(s), so a pair is written in a shape this does not read`,
      );
    }
    for (const [, en, zh] of pairs) {
      if (!HAN_RE.test(zh) && !CARRIED_OVER.has(asName(zh))) {
        problems.push(`${tag}: a Chinese half of a pair holds no Chinese (${zh.slice(0, 24)})`);
      }
      if (HAN_RE.test(en)) problems.push(`${tag}: an English half of a pair holds Chinese (${en.slice(0, 24)})`);
    }
  }
  for (const m of src.matchAll(/'([^'\\\n]*)'/g)) {
    if (HAN_RE.test(m[1])) typography(tag, m[1]);
  }
}


if (problems.length) {
  console.error(`${problems.length} problem(s):`);
  for (const p of problems) console.error(' - ' + p);
  process.exit(1);
}
const outstanding = [...missing, ...untranslatedRecords];
console.log(
  outstanding.length
    ? `clean: still untranslated: ${outstanding.join(', ')}`
    : 'clean: every English page and every jurisdiction record has a Chinese twin',
);
