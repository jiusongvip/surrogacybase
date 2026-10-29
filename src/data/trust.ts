import type { Bilingual } from '@/i18n/ui';
import { SITE } from '@/const';
import { EDITORIAL_REVISION } from '@/data/policy-pages';

/*
 * The two trust subjects the About page carries: the reviewers who put their name to a page and
 * the readers who allow an anonymized case to be published.
 *
 * The reviewer list credits the standing board the byline already names, not a person invented to
 * fill a slot. Its credential is the site's own editorial policy — the public page that states what
 * the board checks and how — rather than a self-description. An individually named reviewer is only
 * added on top of this after a completed review cycle and a real agreement to be credited, with a
 * link to that person's own public credential.
 *
 * The case list starts empty on purpose. A case is only added after written consent and the removal
 * of identifying details, never from imagination and never combined from several readers, so the
 * About page renders the whole section only when a published case exists: an empty slot is not kept
 * on the page as a promise.
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

export const REVIEWERS: Reviewer[] = [
  {
    /** The standing board the byline already names, credited under its own collective name. */
    name: SITE.board,
    role: {
      en: 'The board named in every byline',
      zh: '各页署名所载明的委员会',
    },
    /** The site's own public page that documents the review process, not a self-description. */
    credentialUrl: '/editorial-policy',
    credentialLabel: {
      en: 'Read the editorial policy and review process',
      zh: '阅读编辑方针与审阅流程',
    },
    /** Kept in step with the editorial policy's own revision stamp, a real published date. */
    reviewedOn: EDITORIAL_REVISION,
  },
];

export const READER_CASES: ReaderCase[] = [];
