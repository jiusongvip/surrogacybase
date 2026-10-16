/*
 * The updates log in the language the page is being built in.
 *
 * The English file stays the only record of what happened: dates, kinds, page paths and the entry
 * itself live there. src/data/updates-zh.json carries wording alone and is keyed by the English
 * title, so an entry whose wording goes missing fails the build instead of printing one English
 * paragraph in the middle of a Chinese log. A key rather than a position, because a new entry can
 * be appended anywhere in the file and a shifted translation would still pass a length check.
 */
import updates from '@/data/updates.json';
import zhOverlay from '@/data/updates-zh.json';
import { LANG_META, type Lang } from '@/i18n/config';

export type Update = {
  date: string;
  kind: string;
  path: string | null;
  title: string;
  change: string;
  reason: string;
};

type ZhEntry = { title: string; change: string; reason: string };

const overlay = zhOverlay as unknown as Record<string, ZhEntry>;

/** True when every logged entry has Chinese wording, which is what closes the mirror. */
export function updatesTranslated(): boolean {
  return (updates as unknown as Update[]).every((item) => overlay[item.title] !== undefined);
}

export function getUpdates(lang: Lang): Update[] {
  if (lang === 'en') return updates as unknown as Update[];
  return (updates as unknown as Update[]).map((item) => {
    const zh = overlay[item.title];
    if (!zh) {
      throw new Error(`No Chinese wording for the update "${item.title}". Add it to src/data/updates-zh.json.`);
    }
    return { ...item, title: zh.title, change: zh.change, reason: zh.reason };
  });
}

/** The month label above each group, in the page's own date format. */
export function monthHeading(month: string, lang: Lang): string {
  return new Date(`${month}-01T00:00:00Z`).toLocaleDateString(LANG_META[lang].dateLocale, {
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  });
}
