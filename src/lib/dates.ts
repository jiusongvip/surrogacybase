import { LANG_META, type Lang } from '@/i18n/config';

/*
 * Dates are formatted per locale rather than run through one machine's default, because a
 * record that says when we last opened a source has to read the same way to the reader who
 * is checking it. UTC pins the day so a build in another timezone cannot move it.
 */
export function formatDate(value: string | undefined | null, lang: Lang = 'en'): string {
  if (!value) return lang === 'en' ? 'Not yet dated' : '暂无日期';
  const d = new Date(value);
  if (Number.isNaN(d.getTime())) return value;
  return d.toLocaleDateString(LANG_META[lang].dateLocale, {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    timeZone: 'UTC',
  });
}

export function formatShortDate(value: string | undefined | null, lang: Lang = 'en'): string {
  if (!value) return lang === 'en' ? 'undated' : '无日期';
  const d = new Date(value);
  if (Number.isNaN(d.getTime())) return value;
  return d.toLocaleDateString(LANG_META[lang].dateLocale, { month: 'short', year: 'numeric', timeZone: 'UTC' });
}

/** Days until a page must be re-checked. Negative means the check is overdue. */
export function daysUntil(value: string | undefined): number | null {
  if (!value) return null;
  const d = new Date(value);
  if (Number.isNaN(d.getTime())) return null;
  return Math.round((d.getTime() - Date.now()) / 86_400_000);
}

/**
 * Words per minute does not extend to Chinese: a sentence has no spaces in it, so counting
 * them would call a two thousand character page a one minute read. Chinese is measured in
 * characters at about 300 a minute, which is the rate the rest of the site's reading times
 * were calibrated against.
 */
export function readingTime(body: string): number {
  const cjk = (body.match(/[\u3400-\u9FFF\uF900-\uFAFF]/g) ?? []).length;
  if (cjk > body.length * 0.2) return Math.max(1, Math.round(cjk / 300));
  const words = body.replace(/[#*`>_~|-]/g, ' ').split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 210));
}
