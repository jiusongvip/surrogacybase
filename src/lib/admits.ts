/*
 * An admission row in the form a reader sees it.
 *
 * Which family, which status and which qualification are codes in src/data/jurisdictions, because
 * a translated status is a status two languages can disagree about. Only the words printed around
 * them are translated, from src/i18n/ui.ts, and a family type the record does not carry is reported
 * as unsettled here rather than guessed at by whoever renders the page.
 */
import type { CollectionEntry } from 'astro:content';
import type { Lang } from '@/i18n/config';
import { UI } from '@/i18n/ui';

export type AdmissionRow = CollectionEntry<'jurisdictions'>['data']['admits'][number];

/** The types every record is read against, in the order the matrix prints its columns. */
export const ADMISSION_FAMILIES = ['married', 'cohabiting', 'single', 'maleCouple', 'femaleCouple', 'international'] as const;

export type AdmissionFamily = (typeof ADMISSION_FAMILIES)[number];

export function familyLabel(family: AdmissionFamily, lang: Lang): string {
  return UI[lang].admits.family[family];
}

/** The row this record carries for one family type, if it carries one. */
export function admissionFor(admits: AdmissionRow[], family: AdmissionFamily): AdmissionRow | undefined {
  return admits.find((row) => row.family === family);
}

/** The types no source on this record settles, which is what the page has to say out loud. */
export function unadmitted(admits: AdmissionRow[]): AdmissionFamily[] {
  return ADMISSION_FAMILIES.filter((family) => !admissionFor(admits, family));
}
