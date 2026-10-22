import type { Bilingual } from '@/i18n/ui';

/*
 * The two trust subjects the About page carries: the reviewers who put their name to a page and
 * the readers who allow an anonymized case to be published.
 *
 * Both lists start empty on purpose. A reviewer is only added after a completed review cycle and
 * an agreement to be credited; a case is only added after written consent and the removal of
 * identifying details. Neither is written from imagination or combined from several readers, so
 * the page shows its rule and its slots rather than a cast invented to fill them.
 */

export type Reviewer = {
  /** The name the reviewer has agreed to publish. */
  name: string;
  role: Bilingual;
  /** A public page that shows the credential, not a self-description. */
  credentialUrl: string;
  credentialLabel: Bilingual;
  /** The date the most recent review cycle was completed, ISO. */
  reviewedOn: string;
};

export type ReaderCase = {
  id: string;
  /** How the reader is named after identifying details are removed. */
  label: Bilingual;
  situation: Bilingual;
  /** What the reader set out to check, not an outcome claim. */
  checked: Bilingual;
  /** The date written consent was recorded, ISO. */
  consentOn: string;
  links: { label: Bilingual; href: string }[];
  published: boolean;
};

export const REVIEWERS: Reviewer[] = [];

export const READER_CASES: ReaderCase[] = [];
