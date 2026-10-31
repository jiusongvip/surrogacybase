/*
 * Reads dist/ and fails on the things this site promises: a dead internal link, a guide that no
 * other guide links to, a frontmatter reference that names a page which was never built, a
 * typographic separator the style guide forbids, a page with no H1 or a bloated title, or any
 * route whose HTML was never built. Run after `pnpm build`.
 */
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';

const dist = new URL('../dist/', import.meta.url).pathname.replace(/^\/(\w:\/)/, '$1');
const problems = [];

function walk(dir, out = []) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) walk(p, out);
    else if (name.endsWith('.html')) out.push(p);
  }
  return out;
}

const files = walk(dist);

/* The translation registry, which the pages read to decide whether to show a language
 * switch or an hreflang pair. Nothing else proves the two agree with what was built. */
const registry = JSON.parse(
  readFileSync(new URL('../src/data/zh-routes.json', import.meta.url), 'utf8'),
);
const listedPaths = new Set(registry.paths);
const listedGroups = registry.groups;
/** Planned but not built yet, so a half-finished mirror can be reported without being a lie. */
const pending = new Set(registry.pending ?? []);
if (listedPaths.size && pending.size) {
  problems.push(`registry opens ${listedPaths.size} translation(s) while ${pending.size} page(s) are still pending`);
}

/** '/guides/cost' -> '/zh/guides/cost', the way the paths are written in dist. */
const zhForm = (path) => (path === '/' ? '/zh' : `/zh${path}`);
const enForm = (path) => (path === '/zh' ? '/' : path.slice(3) || '/');
const isZh = (route) => route === '/zh' || route.startsWith('/zh/');
const isListed = (path) => listedPaths.has(path) || listedGroups.some((group) => path.startsWith(group));

/** Route path -> html, so an anchor can be checked against the page it points at. */
const byRoute = new Map(
  files.map((f) => {
    const rel = relative(dist, f).replace(/\\/g, '/');
    const route = ('/' + rel.replace(/(index\.html)?$/, '').replace(/\/$/, '')) || '/';
    return [route, readFileSync(f, 'utf8')];
  }),
);
const routes = new Set(byRoute.keys());

/** A guide detail page, in either language. The list page and the home page are not guides. */
const isGuideRoute = (route) => /^\/(zh\/)?guides\/[^/]+$/.test(route);

/* Route -> the routes that link to it. Built once, because "who names this page" is a question
 * the index cannot answer: the index names everyone, and so does the footer. */
const inbound = new Map();
for (const [route, html] of byRoute) {
  for (const raw of html.match(/href="([^"]+)"/g) ?? []) {
    const href = raw.slice(6, -1);
    if (!href.startsWith('/')) continue;
    const [path] = href.slice(1).split('#');
    if (/^(assets|_astro|images|og)\//.test(path) || /\.[a-z0-9]+$/i.test(path)) continue;
    const target = '/' + path.replace(/\/$/, '');
    if (!byRoute.has(target) || target === route) continue;
    if (!inbound.has(target)) inbound.set(target, new Set());
    inbound.get(target).add(route);
  }
}

/* Banned separators and non-Latin scripts, scanned in scripts as well as markup: the
 * checklist export lives in JS, and that document is what a reader hands to a lawyer.
 * Han characters are only a defect on an English route; on /zh they are the point.
 * The patterns are written as escapes so this file does not itself contain the characters
 * it fails the build for. */
const banned = [
  { re: new RegExp('[\\u2014\\u2013]', 'g'), label: 'em dash or en dash' },
  { re: new RegExp('\\u2026', 'g'), label: 'ellipsis' },
];
const CJK = '[\\u3000-\\u303f\\u4e00-\\u9fff\\uff00-\\uffef]';
const englishOnly = [{ re: new RegExp(CJK, 'g'), label: 'CJK punctuation or Han character' }];

/* Google cuts a title by pixel width, and a Han character is about twice a Latin one, so
 * the budget is measured in half-width units rather than characters. */
const wide = new RegExp(CJK);
const displayWidth = (text) => [...text].reduce((n, c) => n + (wide.test(c) ? 2 : 1), 0);

let pendingLinks = 0;
/** Title -> the first route that used it, so a duplicate can name the page it copies. */
const titles = new Map();
/** While any page is pending the mirror is mid-build, so the registry stays closed. */
const underConstruction = pending.size > 0;
let unopened = 0;

for (const [route, html] of byRoute) {
  for (const b of banned) {
    const hits = html.match(b.re);
    if (hits) problems.push(`${route}: ${b.label} x${hits.length}`);
  }
  if (!isZh(route)) {
    /* A language switch names its target in that target's own script, which is the whole
     * reason a reader can find it, so those elements are read before the Han ban is applied. */
    const ownScriptOut = html
      .replace(/<link[^>]*hreflang[^>]*>/g, '')
      .replace(/<a[^>]*hreflang[^>]*>[\s\S]*?<\/a>/g, '');
    for (const b of englishOnly) {
      const hits = ownScriptOut.match(b.re);
      if (hits) problems.push(`${route}: ${b.label} x${hits.length}`);
    }
  }

  const h1 = (html.match(/<h1[\s>]/g) ?? []).length;
  if (h1 !== 1) problems.push(`${route}: ${h1} h1 elements`);

  const title = html.match(/<title>([^<]*)<\/title>/)?.[1] ?? '';
  if (!title) problems.push(`${route}: no title`);
  else if (displayWidth(title) > 62) problems.push(`${route}: title is ${displayWidth(title)} half-width units`);
  else if (titles.has(title)) problems.push(`${route}: title is the same as ${titles.get(title)}`);
  else titles.set(title, route);

  /* Every piece carries one photograph from the shared catalogue. A page without one falls back
   * to a bare card in the index and a preview with no image on every social card. */
  if (isGuideRoute(route) && !html.includes('/images/content/')) {
    problems.push(`${route}: no content photograph`);
  }

  /* The same width rule as the title: a Chinese description of forty characters carries about
   * half the content of forty Latin ones, so the floor has to be measured in half-width units
   * or the check fails the page for being written in the language it was built for. */
  const description = html.match(/<meta name="description" content="([^"]*)"/)?.[1] ?? '';
  if (!description) problems.push(`${route}: no description`);
  else if (displayWidth(description) < 40) problems.push(`${route}: description is ${displayWidth(description)} half-width units`);
  if (!/rel="canonical"/.test(html)) problems.push(`${route}: no canonical`);
  if (!/property="og:title"/.test(html)) problems.push(`${route}: no og:title`);

  const htmlLang = isZh(route) ? 'zh-Hans' : 'en';
  if (!html.includes(`<html lang="${htmlLang}"`)) problems.push(`${route}: html lang is not ${htmlLang}`);

  /* The switch and the pair are only a promise the twin exists, so check both directions. */
  if (isZh(route)) {
    if (!isListed(enForm(route))) {
      /* A Chinese page built while the registry is closed carries no hreflang on purpose: the
       * pair opens with the registry, in one edit, once nothing is pending. Until then it is
       * counted so the count can be watched going to zero. */
      if (underConstruction) unopened++;
      else problems.push(`${route}: built in Chinese but not listed in src/data/zh-routes.json`);
    } else if (!/hreflang="en"/.test(html)) {
      problems.push(`${route}: no English alternate declared`);
    }
  } else {
    const twin = zhForm(route);
    if (isListed(route) && !routes.has(twin)) problems.push(`${route}: listed as translated but ${twin} was not built`);
    if (isListed(route) && !/hreflang="zh-Hans"/.test(html)) problems.push(`${route}: translation listed but no hreflang pair emitted`);
  }

  for (const raw of html.match(/href="([^"]+)"/g) ?? []) {
    const href = raw.slice(6, -1);
    if (!href.startsWith('/')) continue;
    const [path, fragment] = href.slice(1).split('#');
    if (/^(assets|_astro|images|og)\//.test(path) || /\.(xml|txt|webp|jpg|png|svg|ico|css|js)$/.test(path)) continue;
    const target = '/' + path.replace(/\/$/, '');
    const targetHtml = byRoute.get(target);
    if (targetHtml === undefined) {
      /* The Chinese chrome links to every mirror page, so while the mirror is being built its
       * pages point at ones that are planned but not written. Those are counted, not forgiven
       * silently: the registry cannot open a translation until the count reaches zero. */
      if (isZh(target) && pending.has(enForm(target))) {
        pendingLinks++;
        continue;
      }
      problems.push(`${route}: dead internal link ${href}`);
      continue;
    }
    if (fragment && !new RegExp(`id="${fragment}"`).test(targetHtml)) {
      problems.push(`${route}: dead anchor ${href}`);
    }
  }
}

/* A guide nobody else names is reachable only by scrolling the index, and the index is the one
 * page every visitor already has. Only links from other guides count: a sitewide footer or the
 * index itself would otherwise make every page look woven in. */
for (const route of byRoute.keys()) {
  if (!isGuideRoute(route)) continue;
  const fromGuides = [...(inbound.get(route) ?? [])].filter((from) => isGuideRoute(from));
  if (fromGuides.length === 0) problems.push(`${route}: no other guide links to it`);
}

/* resolveRefs drops a reference it cannot resolve, so a misspelled slug costs a page its link
 * and fails nothing anywhere else. The frontmatter is the only place that can prove the
 * spelling, so it is read and checked against the routes that were actually built. */
function collectMd(dir, out = []) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) collectMd(p, out);
    else if (name.endsWith('.md')) out.push(p);
  }
  return out;
}

const now = new Date();
const today = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
const overdue = [];
const contentRoot = new URL('../src/content/', import.meta.url).pathname.replace(/^\/(\w:\/)/, '$1');

/* relatedTools names a tool, not a page: toolLinksFor drops one whose live flag is still false on
 * purpose, so a route is the wrong thing to look for. The catalogue is TypeScript, so its ids are
 * read off the source rather than imported. */
const toolIds = new Set(
  [...readFileSync(new URL('../src/data/tools.ts', import.meta.url), 'utf8').matchAll(/^\s*id: '([^']+)'/gm)].map(
    (m) => m[1],
  ),
);

for (const file of collectMd(contentRoot)) {
  const frontmatter = readFileSync(file, 'utf8').split(/^---$/m)[1] ?? '';
  const zh = /[\\/]zh[\\/]/.test(file);
  const where = relative(process.cwd(), file).replace(/\\/g, '/');

  /* A related link is a route, and the built page is the only proof the slug was spelled right. */
  const listed = (key) =>
    (frontmatter.match(new RegExp(`^${key}:\\s*\\[(.*)\\]\\s*$`, 'm'))?.[1] ?? '').matchAll(/"([^"]+)"/g);

  for (const [, ref] of listed('related')) {
    const target = `/${zh ? 'zh/' : ''}${ref}`;
    if (!routes.has(target)) problems.push(`${where}: related names ${ref}, which was not built`);
  }
  for (const [, ref] of listed('relatedTools')) {
    if (!toolIds.has(ref.replace(/^tools\//, ''))) {
      problems.push(`${where}: relatedTools names ${ref}, which is not in the tool catalogue`);
    }
  }

  /* A review date is a promise to come back to a page, not a publish gate, so a date that has
   * passed is printed and the build stays green. */
  const due = frontmatter.match(/^reviewDueOn:\s*"?([\d-]+)"?/m)?.[1];
  if (due && due < today) overdue.push(`${where} was due ${due}`);
}

/* Every built route should be reachable from the nav or a page, and every route in the
 * sitemap should exist on disk. */
const sitemap = readFileSync(join(dist, 'sitemap-0.xml'), 'utf8');
for (const loc of sitemap.match(/<loc>([^<]+)<\/loc>/g) ?? []) {
  const path = new URL(loc.replace(/<\/?loc>/g, '')).pathname.replace(/\/$/, '') || '/';
  if (!routes.has(path)) problems.push(`sitemap: ${path} is not built`);
}

/* llms.txt is a promise to a machine reader that a document is here. A bullet pointing at a
 * page that was never built, or at the wrong language of a page, is the one failure mode this
 * file can have, and the build is exactly what proves it either way. */
for (const name of ['llms.txt', 'zh/llms.txt']) {
  const text = readFileSync(join(dist, name), 'utf8');
  const wantZh = name.startsWith('zh/');
  for (const href of text.match(/\]\((https?:[^)]+)\)/g) ?? []) {
    const url = new URL(href.slice(2, -1));
    if (url.origin !== new URL('https://surrogacybase.com').origin) {
      problems.push(`${name}: ${url.href} is not this site`);
      continue;
    }
    const path = url.pathname.replace(/\/$/, '') || '/';
    if (!routes.has(path)) problems.push(`${name}: ${path} is not built`);
    if (wantZh !== path.startsWith('/zh')) problems.push(`${name}: ${path} is the wrong language`);
  }
}

if (overdue.length) {
  console.log(`${overdue.length} piece(s) past their review date:`);
  for (const item of overdue) console.log(' - ' + item);
}

if (problems.length) {
  console.error(`${problems.length} problem(s):`);
  for (const p of problems) console.error(' - ' + p);
  process.exit(1);
}
console.log(
  `clean: ${files.length} html files, ${routes.size} routes` +
    (pendingLinks ? `, ${pendingLinks} link(s) to mirror pages still pending` : '') +
    (unopened ? `, ${unopened} Chinese page(s) built and not yet opened` : ''),
);
