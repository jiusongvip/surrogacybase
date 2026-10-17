export const SITE = {
  name: 'SurrogacyBase',
  titleSuffix: 'SurrogacyBase',
  description:
    'Independent guidance for cross-border surrogacy: compare destinations, break costs into items, settle parentage, and verify a quote before money moves.',
  tagline: 'Clearer surrogacy decisions, in whichever country you are considering.',
  /** The same line in Chinese. Both locales keep exactly one copy of it. */
  taglineZh: '无论您正在考虑哪个国家，都把代孕的决定逐条弄清楚。',
  locale: 'en',
  ogImage: '/og/default.jpg',
  /**
   * Where an assessment enquiry is addressed. Left empty until the operator supplies
   * a real inbox: the intake form then composes the brief and offers copy or download,
   * and publishes no send button at all rather than one that goes nowhere.
   *
   * One line lights up two surfaces, because both read this value: the homepage enquiry
   * form, which is the only intake on the site, and the wording of the destination
   * assessment's closing step.
   */
  contactEmail: '' as string,
} as const;

/**
 * The category listing pages are keyed by these codes, and the code is part of the URL, so
 * it never changes per language. The words shown beside them do, and they live in
 * src/i18n/ui.ts under CATEGORY_LABELS.
 */
export const CATEGORY_KEYS = ['cost', 'destinations', 'agencies', 'process', 'preparation'] as const;
export type CategoryKey = (typeof CATEGORY_KEYS)[number];

export const CATEGORY_HREF: Record<CategoryKey, string> = {
  cost: '/articles/category/cost',
  destinations: '/articles/category/destinations',
  agencies: '/articles/category/agencies',
  process: '/articles/category/process',
  preparation: '/articles/category/preparation',
};
