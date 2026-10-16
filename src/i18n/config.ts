/*
 * Two locales, one prefix.
 *
 * English is the default and keeps the URLs it already has; Chinese sits under /zh.
 * That asymmetry is deliberate: 31 live English routes are indexed, linked and cited
 * from the jurisdiction records, and moving them to /en would break all of it for no
 * gain to a reader who is already where they were.
 *
 * Slugs are identical across the two languages (a Chinese guide is /zh/guides/surrogacy-cost,
 * not a transliterated path). The alternative, translated slugs, means every hreflang pair
 * has to be looked up in a mapping table and every new page can silently miss its twin.
 * Same-slug pairs make "does a Chinese version of this page exist" a prefix test.
 */
export const LOCALES = ['en', 'zh'] as const;
export type Lang = (typeof LOCALES)[number];

export const DEFAULT_LANG: Lang = 'en';

/**
 * The English entries below are the formats the English site already prints. They are
 * pinned rather than derived from a British default because 31 indexed pages would
 * otherwise have their visible dates restyled by a translation project that was not
 * supposed to touch them.
 */
export const LANG_META: Record<Lang, {
  /** Written on <html lang>. zh-Hans, not zh: the site writes simplified. */
  htmlLang: string;
  /** What the language switch calls this language in its own words. */
  selfName: string;
  ogLocale: string;
  /** BCP 47 for Intl, used by the date formatters. */
  dateLocale: string;
}> = {
  en: { htmlLang: 'en', selfName: 'English', ogLocale: 'en', dateLocale: 'en-US' },
  zh: { htmlLang: 'zh-Hans', selfName: '中文', ogLocale: 'zh-CN', dateLocale: 'zh-CN' },
};

/** The URL prefix per locale. The default locale has none. */
export const PREFIX: Record<Lang, string> = { en: '', zh: '/zh' };
