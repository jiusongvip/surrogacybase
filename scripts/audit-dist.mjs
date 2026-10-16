/*
 * Reads dist/ and fails on the things this site promises: a dead internal link, a
 * typographic separator the style guide forbids, a page with no H1 or a bloated title,
 * or any route whose HTML was never built. Run after `pnpm build`.
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

/* Every built route should be reachable from the nav or a page, and every route in the
 * sitemap should exist on disk. */
const sitemap = readFileSync(join(dist, 'sitemap-0.xml'), 'utf8');
for (const loc of sitemap.match(/<loc>([^<]+)<\/loc>/g) ?? []) {
  const path = new URL(loc.replace(/<\/?loc>/g, '')).pathname.replace(/\/$/, '') || '/';
  if (!routes.has(path)) problems.push(`sitemap: ${path} is not built`);
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
