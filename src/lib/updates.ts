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
  /**
   * The English title of a later entry that overtakes this one. The log is read in the order
   * things happened, so an entry saying a page does not exist keeps saying it after that page is
   * published. The pointer is what closes the contradiction; the older wording stays because it is
   * itself the record of what was decided on its date.
   */
  supersededBy?: string;
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

/** A logged entry plus what the page needs to anchor it and to point forward from it. */
export type RenderedUpdate = Update & {
  slug: string;
  /** The later entry, in the language this page is rendered in. */
  supersession?: { title: string; date: string; slug: string };
};

/**
 * The log with each supersession resolved against the list it comes from.
 *
 * The pointer is an English title, because that is what identifies an entry in the only file that
 * records them. The label beside it is taken from the same position in the language being rendered,
 * so the Chinese page points at the Chinese title of the later entry while the anchor comes from an
 * index both languages share.
 */
export function getRenderedUpdates(lang: Lang): RenderedUpdate[] {
  const english = updates as unknown as Update[];
  const list = getUpdates(lang);
  const position = new Map(english.map((item, index) => [item.title, index]));
  return list.map((item, index) => {
    const entry: RenderedUpdate = { ...item, slug: `entry-${index}` };
    const pointer = english[index].supersededBy;
    if (!pointer) return entry;
    const target = position.get(pointer);
    if (target === undefined) {
      throw new Error(
        `The update "${english[index].title}" points at "${pointer}", which is not a title in src/data/updates.json.`,
      );
    }
    return { ...entry, supersession: { title: list[target].title, date: list[target].date, slug: `entry-${target}` } };
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
