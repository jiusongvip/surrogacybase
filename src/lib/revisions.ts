/*
 * The date a page was last revised, for the sitemap's <lastmod>.
 *
 * A lastmod that is guessed is worse than no lastmod: a crawler that stops trusting the
 * value ignores it site-wide. So this derives the date from the three places the site
 * already records one, and a page with no record there gets no lastmod at all rather than
 * the build date.
 *
 *   - guide and article frontmatter, where updatedOn is what the page itself prints;
 *   - a jurisdiction record's statusVerifiedOn, the date its legal position was re-checked;
 *   - the public changelog, whose entries name the page each change touched.
 *
 * The Chinese page of a pair carries the same date, because a revision here is one event
 * written into both languages, and the two files are checked against each other at build.
 *
 * This runs while Astro reads its config, before any content collection exists, so it reads
 * the files themselves instead of importing the collection layer.
 */
import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const CONTENT = 'src/content';
const JURISDICTIONS = 'src/data/jurisdictions';
const UPDATES = 'src/data/updates.json';

/** locale-free path -> ISO date, newest record wins. */
export type Revisions = Map<string, string>;

function newer(revisions: Revisions, path: string, date: string | undefined) {
  if (!date || !/^\d{4}-\d{2}-\d{2}$/.test(date)) return;
  const current = revisions.get(path);
  if (!current || date > current) revisions.set(path, date);
}

function markdownFiles(dir: string, out: string[] = []) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) markdownFiles(p, out);
    else if (name.endsWith('.md')) out.push(p);
  }
  return out;
}

function frontmatterValue(markdown: string, key: string): string | undefined {
  const block = markdown.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!block) return undefined;
  return block[1].match(new RegExp(`^${key}:\\s*"?([\\d-]+)"?`, 'm'))?.[1];
}

/** '/guides/surrogacy-cost', from the file's location under src/content. */
function contentPathOf(contentDir: string, file: string): string {
  return file.slice(contentDir.length).replace(/\\/g, '/').replace(/\.md$/, '');
}

export function collectRevisions(cwd = process.cwd()): Revisions {
  const revisions: Revisions = new Map();
  const contentDir = join(cwd, CONTENT);
  if (!existsSync(contentDir)) return revisions;

  /* English content only: the Chinese mirror is the same revision, and its own directory
   * would otherwise put /zh/... keys into a map the pages are looked up in by base path. */
  for (const file of markdownFiles(contentDir)) {
    const path = contentPathOf(contentDir, file);
    if (path.startsWith('/zh/')) continue;
    /* Only these two folders map onto routes; nothing else in src/content is a page. */
    if (!/^\/(guides|articles)\//.test(path)) continue;
    const markdown = readFileSync(file, 'utf8');
    newer(revisions, path, frontmatterValue(markdown, 'updatedOn') ?? frontmatterValue(markdown, 'publishedOn'));
  }

  for (const name of readdirSync(join(cwd, JURISDICTIONS))) {
    if (!name.endsWith('.json')) continue;
    const record = JSON.parse(readFileSync(join(cwd, JURISDICTIONS, name), 'utf8'));
    if (record.published === false || typeof record.code !== 'string') continue;
    newer(revisions, `/destinations/${record.code}`, record.statusVerifiedOn);
  }

  for (const entry of JSON.parse(readFileSync(join(cwd, UPDATES), 'utf8')) as {
    date: string;
    kind: string;
    path: string;
  }[]) {
    /* A withheld entry records a decision not to publish something, so it is not a revision
     * of the page named beside it. Anchors are stripped: the sitemap lists documents, and an
     * entry with no path at all describes the site rather than one page of it. */
    if (entry.kind === 'withheld' || !entry.path) continue;
    const path = entry.path.split('#')[0];
    if (!path) continue;
    newer(revisions, path, entry.date);
  }

  return revisions;
}

/**
 * A sitemap URL is absolute and the records are locale-free paths, so the /zh prefix comes
 * and goes. Both languages get the date of the one revision they share.
 */
export function lastmodFor(url: string, revisions: Revisions, site: string): string | undefined {
  const pathname = new URL(url, site).pathname;
  const base = pathname.startsWith('/zh') ? pathname.slice(3) || '/' : pathname;
  const key = base.replace(/\/$/, '') || '/';
  return revisions.get(key) ? `${revisions.get(key)}T00:00:00Z` : undefined;
}
