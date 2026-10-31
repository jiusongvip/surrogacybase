export const SITE = {
  name: 'SurrogacyBase',
  titleSuffix: 'SurrogacyBase',
  description:
    'Independent guidance for cross-border surrogacy: compare destinations, break costs into items, settle parentage, and verify a quote before money moves.',
  tagline: 'Cross-border surrogacy information, and the guidance to decide what comes next.',
  /** The same line in Chinese. Both locales keep exactly one copy of it. */
  taglineZh: '全球代孕信息与跨境生育决策参考平台。',
  /**
   * The two names these pages publish under, in both languages: a team that writes and maintains
   * them, and a board that carries the clinical review the byline claims. Both stay a single Latin
   * string shared by the English and Chinese sides.
   *
   * A team name is not a registered entity. The operator publishes no registered company name and
   * no jurisdiction, by choice, and the site does not claim either.
   */
  team: 'SurrogacyBase Medical Editorial Team',
  board: 'SurrogacyBase Medical Advisory Board',
  locale: 'en',
  ogImage: '/og/default.jpg',
  /**
   * Where an enquiry, a correction or a data request is addressed. The intake form lights up its
   * send button when there is an address behind it, and offers only copy and download when there
   * is not.
   */
  contactEmail: 'hello@surrogacybase.com' as string,
} as const;
