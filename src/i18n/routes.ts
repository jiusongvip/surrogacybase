import { LOCALES, PREFIX, type Lang } from './config';
import { localizedPath, stripLocale } from './paths';
import registry from '@/data/zh-routes.json';

/*
 * Which pages have a Chinese twin.
 *
 * The language switch and the hreflang pair are emitted only for a path listed in
 * src/data/zh-routes.json. That matters more than it looks: a switch that sends a reader to a
 * 404 is worse than no switch, and a hreflang pointing at a missing page tells Google the two
 * languages are one document. So the file is the promise, and a path joins it when its Chinese
 * page exists and builds.
 *
 * A group prefix covers every page under it, and is only listed once the whole group is
 * translated, because the guide, article and jurisdiction pages come out of collections.
 * scripts/audit-dist.mjs fails the build if a listed path is missing from dist or if dist
 * holds a /zh page that is not listed here, so the list cannot drift from the site.
 * It reads the JSON rather than this module because the audit runs on Node without a
 * TypeScript loader.
 */

/** Static paths that exist in Chinese, written without the /zh prefix. */
export const TRANSLATED = new Set<string>(registry.paths);

/** Prefixes whose every page exists in Chinese. */
export const TRANSLATED_GROUPS: string[] = registry.groups;

export function isTranslated(path: string): boolean {
  const base = stripLocale(path);
  if (TRANSLATED.has(base)) return true;
  return TRANSLATED_GROUPS.some((group) => base.startsWith(group));
}

/**
 * The twin of a path, or null when there is none. Every locale other than the one asked for
 * is tested, so a page can find all of its alternates in one call.
 */
export function twinFor(lang: Lang, path: string): Partial<Record<Lang, string>> {
  const base = stripLocale(path);
  const out: Partial<Record<Lang, string>> = {};
  for (const locale of LOCALES) {
    if (locale === lang) continue;
    if (isTranslated(base)) out[locale] = localizedPath(locale, base);
  }
  return out;
}

export const HOME_BY_LANG: Record<Lang, string> = {
  en: PREFIX.en === '' ? '/' : `/${PREFIX.en}`,
  zh: '/zh',
};
