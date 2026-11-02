/*
 * The home page is published as the bare origin: https://www.{domain}, with no trailing slash.
 * The canonical says so, the internal links say so, and the sitemap has to agree.
 *
 * @astrojs/sitemap cannot express it: every entry goes through new URL(), which always writes a
 * '/' back onto a root path, so its serialize hook cannot remove one. Rewriting the built file
 * is the only place the difference can be corrected, and it runs as the last step of a build
 * so a regenerated sitemap cannot quietly undo it.
 *
 * Only URLs whose path is exactly '/' are touched. A page URL keeps its slash, because
 * trailingSlash is 'always'.
 */
import { existsSync, readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { join } from 'node:path';

const dist = fileURLToPath(new URL('../dist/', import.meta.url));
if (!existsSync(dist)) {
  console.error('[fix-sitemap-home] dist/ not found; run astro build first');
  process.exit(1);
}

const ROOT_LOC = /(<loc>)(https?:\/\/[^/<>]+)\/(<\/loc>)/g;
const ROOT_ALT = /(<xhtml:link[^>]*\bhref=")(https?:\/\/[^/"]+)\/(")/g;

let changed = 0;
for (const name of readdirSync(dist)) {
  if (!/^sitemap-.*\.xml$/.test(name)) continue;
  const file = join(dist, name);
  const before = readFileSync(file, 'utf8');
  const after = before.replace(ROOT_LOC, '$1$2$3').replace(ROOT_ALT, '$1$2$3');
  if (after !== before) {
    writeFileSync(file, after);
    changed++;
  }
}

console.log(
  changed
    ? `[fix-sitemap-home] ${changed} sitemap file(s) now spell the home page without a trailing slash`
    : '[fix-sitemap-home] home URL already correct',
);
