import { DEFAULT_LANG, LOCALES, PREFIX, type Lang } from './config';

/**
 * Path helpers.
 *
 * The site is built with trailingSlash: 'always', so every page URL carries a trailing slash
 * and the site root is the only one that does not (it is published as the bare origin). Every
 * helper below keeps that rule in one place, because a link, a canonical and a sitemap entry
 * that disagree about the slash are three different URLs to a crawler.
 */

/** Adds the trailing slash a page URL carries, leaving the root and any query/hash intact. */
export function withSlash(path: string): string {
  if (!path || path === '/') return path;
  const hashAt = path.indexOf('#');
  const hash = hashAt === -1 ? '' : path.slice(hashAt);
  const rest = hashAt === -1 ? path : path.slice(0, hashAt);
  const queryAt = rest.indexOf('?');
  const query = queryAt === -1 ? '' : rest.slice(queryAt);
  const pathname = queryAt === -1 ? rest : rest.slice(0, queryAt);
  const next = pathname.endsWith('/') ? pathname : `${pathname}/`;
  return `${next}${query}${hash}`;
}

/** '/guides/cost' + zh = '/zh/guides/cost/'. The root stays '/'. */
export function localizedPath(lang: Lang, path: string): string {
  const base = path === '/' ? '' : path;
  const prefix = PREFIX[lang];
  const out = `${prefix}${base}`;
  return out === '' ? '/' : withSlash(out);
}

/** The locale a pathname belongs to. Anything without a known prefix is the default. */
export function langFromPath(pathname: string): Lang {
  for (const locale of LOCALES) {
    const prefix = PREFIX[locale];
    if (!prefix) continue;
    if (pathname === prefix || pathname === `${prefix}/` || pathname.startsWith(`${prefix}/`)) return locale;
  }
  return DEFAULT_LANG;
}

/** The same path with the locale prefix removed, so twins can be compared. */
export function stripLocale(pathname: string): string {
  for (const locale of LOCALES) {
    const prefix = PREFIX[locale];
    if (!prefix) continue;
    if (pathname === prefix) return '/';
    if (pathname.startsWith(`${prefix}/`)) return pathname.slice(prefix.length) || '/';
  }
  return pathname || '/';
}

/** The locale this page is served in, resolved from the URL rather than a prop. */
export function currentLang(pathname: string): Lang {
  return langFromPath(pathname);
}

/**
 * Absolute URL for one locale, used by canonical, og:url and hreflang.
 * The root is the bare origin: https://www.{domain}, not https://www.{domain}/.
 */
export function absoluteUrl(site: URL | undefined, lang: Lang, path: string): string {
  const origin = site?.origin ?? '';
  const localized = localizedPath(lang, path);
  if (localized === '/') return origin || '/';
  return `${origin}${localized.startsWith('/') ? localized : `/${localized}`}`;
}

/** Absolute URL for a path that already carries its locale prefix (e.g. '/zh/guides/x/'). */
export function absoluteFromPath(site: URL | undefined, path: string): string {
  const origin = site?.origin ?? '';
  const slashed = withSlash(path || '/');
  return slashed === '/' ? origin || '/' : `${origin}${slashed.startsWith('/') ? slashed : `/${slashed}`}`;
}
