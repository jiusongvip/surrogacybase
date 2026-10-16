import { DEFAULT_LANG, LOCALES, PREFIX, type Lang } from './config';

/**
 * Path helpers. Everything works on site-relative paths without a trailing slash,
 * because the project is built with trailingSlash: 'never' and the home page is '/'.
 */

/** '/guides/cost' + zh = '/zh/guides/cost'. */
export function localizedPath(lang: Lang, path: string): string {
  const base = path === '/' ? '' : path;
  const prefix = PREFIX[lang];
  const out = `${prefix}${base}`;
  return out === '' ? '/' : out;
}

/** The locale a pathname belongs to. Anything without a known prefix is the default. */
export function langFromPath(pathname: string): Lang {
  for (const locale of LOCALES) {
    const prefix = PREFIX[locale];
    if (!prefix) continue;
    if (pathname === prefix || pathname.startsWith(`${prefix}/`)) return locale;
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

/** Absolute URL for one locale, used by canonical, og:url and hreflang. */
export function absoluteUrl(site: URL | undefined, lang: Lang, path: string): string {
  const origin = site?.origin ?? '';
  const localized = localizedPath(lang, path);
  return `${origin}${localized.startsWith('/') ? localized : `/${localized}`}`;
}
