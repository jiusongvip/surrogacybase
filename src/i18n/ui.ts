import type { Lang } from './config';
import { SITE } from '@/const';

/*
 * The chrome: navigation, footer, and the small labels every page repeats.
 *
 * English values are copied from the files that used to hold them, so turning the bilingual
 * on does not silently restate a sentence on the indexed pages. Chinese is written here
 * rather than generated from a dictionary elsewhere, because these strings are the site's
 * own voice and a mistranslated nav label is a broken promise about what a page contains.
 *
 * Hrefs are per locale instead of computed, including the fragment cases (/#assessment,
 * /about#contact). A single helper that appended prefixes would have to special-case the
 * home page and every anchor, and getting it wrong produces a link that scrolls nowhere.
 *
 * Chinese uses full-width punctuation (，。：、) because that is how a Chinese sentence is
 * written; a half-width comma inside Han text reads as a typo to the reader this language
 * exists for. English keeps its own spacing, and each string carries its separators, so the
 * templates in the components stay one line in both languages.
 */

export type NavItem = { label: string; href: string };
export type FooterGroup = { heading: string; links: NavItem[] };

/**
 * One string in two languages, written together so a half cannot be added without the other.
 * `Record<Lang, …>` does the same job for a block of related strings; this is for a single
 * sentence sitting inside a list of items that are otherwise identical in both languages.
 */
export type Bilingual = { en: string; zh: string };

export const pick = (pair: Bilingual, lang: Lang) => pair[lang];

export const UI: Record<Lang, {
  skipLink: string;
  primaryNavLabel: string;
  openNav: string;
  languageLabel: string;
  /** Tooltip on a greyed language entry: this page exists in no other language. */
  languageUnavailable: string;
  breadcrumbLabel: string;
  home: string;
  /** The alt text for the brand mark, which is a link to the home page in both languages. */
  brandAlt: string;
  needsInput: string;
  undated: string;
  notYetDated: string;
  tagline: string;
  /** {year} and {site} are filled in by the footer. */
  copyright: string;
  /** Wraps the team signature link in the footer so both locales keep one sentence. */
  bylinePre: string;
  bylinePost: string;
  /**
   * The closing sentence, cut around its two links. Each piece carries its own spacing,
   * because English needs a space before "and" and Chinese needs none, and that belongs to
   * the language rather than to the template.
   */
  disclaimerPre: string;
  disclaimerTerms: string;
  disclaimerMid: string;
  disclaimerStandards: string;
  disclaimerEnd: string;
  siteDescription: string;
  /** The name the syndication feed signs itself with, in its own language. */
  feedTitle: string;
  nav: NavItem[];
  cta: NavItem;
  footerGroups: FooterGroup[];
  /** The two content types, spelled the way a card or a byline row shows them. */
  kinds: { guide: string; article: string };
  labels: {
    updated: string;
    firstPublished: string;
    readingTime: string;
    by: string;
  };
  time: {
    /** {n} is the estimated minutes. */
    minRead: string;
    minutes: string;
  };
  toc: { heading: string };
  sources: {
    heading: string;
    note: string;
    /** {date} is the formatted publication or check date, separators included. */
    published: string;
    checked: string;
    supports: string;
  };
  evidence: {
    frameworkHeading: string;
    frameworkBody: string;
    draftHeading: string;
    draftBody: string;
    /** English needs the singular at one; Chinese has no plural ending, so it repeats. */
    listedOne: string;
    listedMany: string;
    verifiedBody: string;
    nextDue: string;
  };
  table: {
    caption: string;
    destination: string;
    legalBasis: string;
    payment: string;
    checked: string;
    insufficient: string;
  };
  /**
   * The words printed around a cost figure. The number, its currency and its year are data in
   * src/data/jurisdictions, identical in both languages, so only these labels are translated.
   */
  costs: {
    heading: string;
    intro: string;
    none: string;
    table: string;
    tableNone: string;
    columns: { item: string; figure: string; source: string };
    /** The column head over the year a source's own numbers describe. */
    asOfYear: string;
    asOf: string;
    items: {
      medical: string;
      legal: string;
      recruiting: string;
      carrier: string;
      total: string;
    };
    /** {c} is the currency, {a} the lower figure and {b} the upper one. */
    shapes: {
      range: string;
      ceiling: string;
      floor: string;
      single: string;
    };
    currency: Record<'USD' | 'GBP' | 'EUR' | 'CAD' | 'COP', string>;
  };
  content: {
    keepReading: string;
    keepReadingNote: string;
    workingList: string;
    reviewedBy: string;
  };
  /**
   * The wording of the guide and article listing pages, which used to live inside the route
   * files. They live here because one route file now serves both languages, and a page whose
   * chrome is assembled from a dictionary cannot have its headings written in one language.
   */
  pages: {
    guides: {
      title: string;
      description: string;
      intro: string;
      readGuide: string;
      relatedOne: string;
      relatedMany: string;
      open: string;
      /** The lowercase word beside a date on the lead card, kept out of the label set. */
      updated: string;
      emptyTitle: string;
      emptyBody: string;
      emptyAction: string;
    };
    articles: {
      title: string;
      description: string;
      intro: string;
      mostRecent: string;
      browseByTopic: string;
      guidesPitch: string;
      allGuides: string;
      emptyTitle: string;
      emptyBody: string;
      emptyAction: string;
    };
    category: {
      /** {label} is the category word; English templates use {labelLower} where the case matters. */
      title: string;
      descriptionFull: string;
      descriptionEmpty: string;
      introOne: string;
      introMany: string;
      introEmpty: string;
      allArticles: string;
      emptyTitle: string;
      emptyBody: string;
      emptyAction: string;
    };
    detail: {
      destinationConditions: string;
      destinationConditionsNote: string;
    };
    /** One jurisdiction record, built from src/data/jurisdictions. */
    jurisdiction: {
      /** {name} is the country as the record writes it. */
      title: string;
      description: string;
      heading: string;
      intro: string;
      checked: string;
      insufficient: string;
      positions: {
        legalBasis: string;
        whoMayCommission: string;
        payment: string;
        parentage: string;
      };
      restsTitle: string;
      citeChecked: string;
      openTitle: string;
      openIntro: string;
      compareTitle: string;
      compareBody: string;
      legalFramework: string;
      openChecklist: string;
      breadcrumb: string;
    };
    /**
     * The destinations index. The counts below are tuple lengths on purpose: this page's four
     * factors, ten items, three legal shapes, five questions, four next steps and seven
     * standards are the structure of the argument, and a language that drops one of them is not
     * a shorter translation but a different page. The compiler fails the build on the mismatch,
     * so the shape cannot drift between the two dictionaries.
     *
     * The three model cards are not keyed by country, because each one is cited from a record by
     * index in the component. A point list shorter or longer than the citations would put a
     * translated sentence beside the wrong source.
     */
    destinations: {
      title: string;
      titleTag: string;
      description: string;
      /** The breadcrumb trail names this page in its short form, not in its title form. */
      breadcrumb: string;
      eyebrow: string;
      h1: string;
      lede: string;
      notice: string;
      ctaNotes: string;
      ctaRecords: string;
      stats: { recorded: string; sourced: string; lastCheck: string };
      factors: {
        heading: string;
        intro: string;
        items: [
          { q: string; a: string; test: string },
          { q: string; a: string; test: string },
          { q: string; a: string; test: string },
          { q: string; a: string; test: string },
        ];
      };
      records: {
        heading: string;
        intro: string;
        emptyTitle: string;
        emptyBody: string;
        /** The line under the comparison table: the same figures, grouped another way. */
        costNote: string;
        costLink: string;
        /** {names} is the flagged destinations joined with {join}; {verb} is one or many. */
        thinNote: string;
        thinJoin: string;
        thinOne: string;
        thinMany: string;
      };
      dimensions: {
        heading: string;
        paraA: string;
        paraB: string;
        link: string;
        items: [
          { q: string; ask: string },
          { q: string; ask: string },
          { q: string; ask: string },
          { q: string; ask: string },
          { q: string; ask: string },
          { q: string; ask: string },
          { q: string; ask: string },
          { q: string; ask: string },
          { q: string; ask: string },
          { q: string; ask: string },
        ];
      };
      models: {
        heading: string;
        intro: string;
        /** {published} and {verified} are formatted dates. */
        cite: string;
        items: [
          { name: string; where: string; plan: string; points: [string, string, string] },
          { name: string; where: string; plan: string; points: [string, string] },
          { name: string; where: string; plan: string; points: [string, string, string] },
        ];
      };
      questions: {
        heading: string;
        intro: string;
        items: [string, string, string, string, string];
        footnote: string;
        cta: string;
      };
      next: {
        heading: string;
        items: [
          { label: string; body: string },
          { label: string; body: string },
          { label: string; body: string },
          { label: string; body: string },
        ];
      };
      band: { heading: string; body: string; brief: string; service: string };
      standard: {
        heading: string;
        items: [string, string, string, string, string, string, string];
      };
      why: { heading: string; body: string; readTitle: string; readBody: string; link: string };
    };
  };
}> = {
  en: {
    skipLink: 'Skip to content',
    primaryNavLabel: 'Primary',
    openNav: 'Open navigation',
    languageLabel: 'Language',
    languageUnavailable: 'This page is not available in this language yet',
    breadcrumbLabel: 'Breadcrumb',
    home: 'Home',
    brandAlt: 'SurrogacyBase home',
    needsInput: 'Not yet in place',
    undated: 'undated',
    notYetDated: 'Not yet dated',
    tagline: `${SITE.tagline} Independent information and decision tools. Not a clinic, not a law firm, not a surrogacy agency.`,
    copyright: '© {year} {site}. Informational content, not legal or medical advice.',
    bylinePre: 'Written and maintained by ',
    bylinePost: '.',
    disclaimerPre: 'The full disclaimer is in our ',
    disclaimerTerms: 'terms',
    disclaimerMid: ' and ',
    disclaimerStandards: 'research standards',
    disclaimerEnd: '.',
    siteDescription: SITE.description,
    feedTitle: 'SurrogacyBase guides and explainers',
    nav: [
      { label: 'Explainers', href: '/articles' },
      { label: 'Destinations', href: '/destinations' },
      { label: 'Services', href: '/assessment' },
      { label: 'Guides', href: '/guides' },
      { label: 'About us', href: '/about' },
    ],
    cta: { label: 'Get a consultation', href: '/#assessment' },
    footerGroups: [
      {
        heading: 'Guides',
        links: [
          { label: 'All guides', href: '/guides' },
          { label: 'Cost guide', href: '/guides/surrogacy-cost' },
          { label: 'Law and parentage', href: '/guides/surrogacy-legal-considerations' },
          { label: 'Choosing an agency', href: '/guides/choosing-a-surrogacy-agency' },
          { label: 'Process', href: '/guides/surrogacy-process' },
        ],
      },
      {
        heading: 'Research',
        links: [
          { label: 'Explainers', href: '/articles' },
          { label: 'Destinations', href: '/destinations' },
          { label: 'Tools', href: '/tools' },
          { label: 'Updates', href: '/updates' },
          { label: 'New pages by RSS', href: '/rss.xml' },
        ],
      },
      {
        heading: 'Standards',
        links: [
          { label: 'How we research', href: '/editorial-policy' },
          { label: 'About the site', href: '/about' },
          { label: 'Assessment service', href: '/assessment' },
          { label: 'Contact', href: '/about#contact' },
        ],
      },
      {
        heading: 'Legal',
        links: [
          { label: 'Privacy', href: '/privacy' },
          { label: 'Terms', href: '/terms' },
        ],
      },
    ],
    kinds: { guide: 'Guide', article: 'Explainer' },
    labels: {
      updated: 'Updated',
      firstPublished: 'First published',
      readingTime: 'Reading time',
      by: 'By',
    },
    time: { minRead: '{n} min read', minutes: '{n} min' },
    toc: { heading: 'On this page' },
    sources: {
      heading: 'Sources',
      note: 'Each entry records what it supports and the date we last opened it, so an out-of-date claim is easy to trace.',
      published: ', published {date}',
      checked: ' · checked {date}',
      supports: 'Supports: {text}',
    },
    evidence: {
      frameworkHeading: 'This page sets out a method, not a finding',
      frameworkBody:
        'It lists questions and categories to work through. It does not state legal, medical or price facts, so there is nothing here to cite.',
      draftHeading: 'Still being researched',
      draftBody:
        'Claims on this page have not yet been checked against a source you can open, so they are not published as findings.',
      listedOne: '1 source listed',
      listedMany: '{n} sources listed',
      verifiedBody: 'Every factual claim below is tied to a named source with the date we last opened it.',
      nextDue: 'Next verification due {date}.',
    },
    table: {
      caption: 'Verified surrogacy rules by destination, with the date each position was checked',
      destination: 'Destination',
      legalBasis: 'Legal basis',
      payment: 'Payment',
      checked: 'Checked',
      insufficient: 'Not enough verified material to recommend it',
    },
    costs: {
      heading: 'Cost figures published for this destination',
      intro:
        "Each number below is one a named source published, in that source's own currency, for the year stated. It is a published figure with a citation rather than a quote, and the source that printed it is linked from the row.",
      none:
        'No cost figure is published here. The payment position above says what may be paid under the rules of this destination, and the questions below say what no source settled.',
      table: 'Cost figures',
      tableNone: 'None published',
      columns: { item: 'What the line covers', figure: 'Figure', source: 'Published by' },
      asOfYear: 'Year the figures describe',
      asOf: '{year} figures',
      items: {
        medical: 'Medical treatment',
        legal: 'Legal work',
        recruiting: 'Recruiting a carrier',
        carrier: 'Paid to the carrier',
        total: 'Whole program',
      },
      shapes: {
        range: '{c}{a} to {b}',
        ceiling: '{c} up to {b}',
        floor: '{c}{a} or more',
        single: '{c}{a}',
      },
      currency: { USD: 'US$', GBP: '£', EUR: '€', CAD: 'C$', COP: 'COL$' },
    },
    content: {
      keepReading: 'Keep reading',
      keepReadingNote: 'Chosen because they answer the question this page could not.',
      workingList: 'Turn this into a working list',
      reviewedBy: 'Reviewed by {name}, {role}.',
    },
    pages: {
      guides: {
        title: 'Guides',
        description:
          'Framework guides on surrogacy cost, process, agency selection and legal considerations, written so each claim can be traced to a source.',
        intro:
          'A guide holds the framework for one decision area. Explainers stay narrow and link back to the guide that frames them.',
        readGuide: 'Read the guide',
        relatedOne: '1 related explainer',
        relatedMany: '{n} related explainers',
        open: 'Open',
        updated: 'updated',
        emptyTitle: 'No guides published yet',
        emptyBody:
          'A guide is published once every claim in it has been checked against a source you can open. They appear one at a time.',
        emptyAction: 'How we verify content',
      },
      articles: {
        title: 'Explainers',
        description:
          'Explainers on surrogacy cost, destinations, agency selection, process and preparation, each tied to the guide it supports.',
        intro:
          'One question per explainer, with the source listed at the bottom. Guides hold the framework; explainers answer the specific question that came up while reading it.',
        mostRecent: 'Most recent',
        browseByTopic: 'Browse by topic',
        guidesPitch: "Looking for the long version of a topic? Guides cover the framework; explainers stay narrow. ",
        allGuides: 'All guides',
        emptyTitle: 'No explainers published yet',
        emptyBody:
          'An explainer is published once each of its claims has a source you can open. They appear one at a time.',
        emptyAction: 'Read the research standards',
      },
      category: {
        title: '{label} explainers',
        descriptionFull:
          'Explainers on surrogacy {labelLower} for intended parents, with the sources and verification dates behind each claim.',
        descriptionEmpty: 'Explainers on surrogacy {labelLower} are still being researched.',
        introOne: '1 published explainer in this topic, each linked to the guide it supports.',
        introMany: '{n} published explainers in this topic, each linked to the guide it supports.',
        introEmpty:
          'Nothing published in this topic has cleared source verification yet, so there is nothing here to read.',
        allArticles: 'All explainers',
        emptyTitle: 'Not written yet',
        emptyBody:
          'This topic is on the research list. A page appears here once its claims can be cited.',
        emptyAction: 'See what is published',
      },
      detail: {
        destinationConditions: 'Destination conditions',
        destinationConditionsNote: 'Compare what the law actually says.',
      },
      jurisdiction: {
        title: 'Surrogacy in {name}: what the law says',
        description:
          'Verified positions on surrogacy in {name} ({region}): legal basis, who may commission, payment rules and parentage, each with its source and check date.',
        heading: 'Surrogacy in {name}',
        intro:
          'Every position below comes from a source listed with it, and was last opened on the date shown. Where a rule depends on your personal circumstances, that is stated instead of guessed.',
        checked: 'Positions checked {date}',
        insufficient:
          'There is not enough verifiable public material on {name} for us to present it as a workable destination. Read it as a list of open questions, and take it to a lawyer qualified there before making any plan.',
        positions: {
          legalBasis: 'Legal basis',
          whoMayCommission: 'Who may commission',
          payment: 'Payment',
          parentage: 'Parentage',
        },
        restsTitle: 'What each position rests on',
        citeChecked: ', checked {date}',
        openTitle: 'What still needs local advice',
        openIntro:
          'These are the questions a source in {name} did not settle. They are the ones worth paying a locally qualified lawyer for.',
        compareTitle: 'Comparing more than one place?',
        compareBody:
          'The comparison only means something when each destination is read against the same set of questions: eligibility, parentage, payment rules and what happens if the plan changes.',
        legalFramework: 'Legal framework',
        openChecklist: 'Work through the checklist',
        breadcrumb: 'Destinations',
      },
      destinations: {
        title: 'Surrogacy Destinations',
        titleTag: 'Surrogacy Destinations: Compare Laws and Costs',
        description:
          'Compare surrogacy destinations on eligibility, parentage at birth, payment rules, cost scope and attendance requirements, with every legal position sourced and dated.',
        breadcrumb: 'Destinations',
        eyebrow: 'Independent destination research',
        h1: 'Which surrogacy destinations suit your situation?',
        lede: 'This page does not name a best country. It helps you decide which places are worth research time and which to exclude first, from four things: whether the rule covers your family, who is a legal parent at birth, whether the money covers the whole process, and whether you can be there when it is needed.',
        notice:
          'Surrogacy law differs between countries, and inside federal countries between states and provinces. It also differs by marital status, by whether a child is genetically yours, and by nationality and residence, and those three are separate tests rather than one. Nothing below is legal advice about your situation, and a country that permits an arrangement does not establish that you may use it or that your own country will accept the result.',
        ctaNotes: 'What to verify first',
        ctaRecords: 'Compare the verified records',
        stats: {
          recorded: 'Destinations recorded',
          sourced: 'Backed by an openable source',
          lastCheck: 'Last check',
        },
        factors: {
          heading: 'Four things decide a destination before any preference does',
          intro:
            'Work through these in order. Each one removes places faster than reading about them does, and each has a test you can put to a provider or a lawyer.',
          items: [
            {
              q: 'Does the rule name a family like yours?',
              a: 'Permission in principle is not eligibility. Where a provision says who may commission, it usually turns on marital status, a genetic link to the child, or the composition of the family. A country described as surrogacy-friendly has answered a different question from this one.',
              test:
                'The answer is a rule when someone can point at the provision. It is practice when it comes from how many families like yours a provider has placed.',
            },
            {
              q: 'Who is the legal parent at birth?',
              a: 'In some systems an intended parent is named at birth; in others the woman who gives birth is the legal mother whatever the agreement said, and parentage only moves afterwards through a court. That single difference decides whether your planning ends at the delivery room or begins there.',
              test:
                'Ask for the sequence: who is a parent on the day of birth, what application exists afterwards, who hears it, and how long a determination takes.',
            },
            {
              q: 'Does the budget cover the whole process?',
              a: 'A destination you cannot afford is not a destination you should research. But the number that matters is scope, not total: which stages a program includes, what may lawfully be paid to the carrier, who bills outside the quote, and what returns to you if the program stops.',
              test:
                'Two quotes forty per cent apart can contain the same medicine. Compare item lists before comparing headline figures.',
            },
            {
              q: 'Can you be there when it is needed?',
              a: 'Signing before treatment, attending a court, collecting documents, and staying after the birth are separate requirements, and they are usually set by clinic practice, the registrar and the court rather than by the statute. Travel limits narrow a field faster than budget does.',
              test:
                'Get the attendance schedule in writing from the person who will handle each step, and say plainly how many windows you have.',
            },
          ],
        },
        records: {
          heading: 'The verified records',
          intro:
            'A record states what a specific legal system says, who it appears to apply to, and when we last read the source behind it. Open a record to see each position beside its citation and the questions we could not settle.',
          emptyTitle: 'Nothing verified yet',
          emptyBody:
            "Each destination needs a primary legal source with a date before it appears here. A list of places copied from agency blogs would be the fastest way to publish something wrong.",
          costNote: 'One number per destination is what the column above can show. ',
          costLink: 'Read every published figure by the line it covers',
          thinNote:
            '{names} {verb} listed with a flag because the sources we could open do not support a usable position. They stay on the page so that a name you have already seen in a brochure is not missing without explanation.',
          thinJoin: ' and ',
          thinOne: 'is',
          thinMany: 'are',
        },
        dimensions: {
          heading: 'The ten things a destination comparison has to cover',
          paraA:
            'Most families end up with a table of countries and one figure for price, and that figure hides the three things which decide whether a destination works at all. These are the ten we hold every destination to.',
          paraB:
            'A position is published only where there is a source behind it, which is why the records above carry some of these ten and list the rest as open questions. A gap you can see on a record is a finding in itself, not a formatting accident.',
          link: 'How a claim gets sourced here',
          items: [
            {
              q: 'Local legal framework',
              ask: 'Statute, case law, an assisted-reproduction act, or a state-by-state patchwork?',
            },
            {
              q: 'Who may commission',
              ask: 'Which intended parents the rule names, and whether a genetic link is required.',
            },
            {
              q: 'Nationality and residence',
              ask: 'Whether the rule reaches citizens, residents, or anyone who travels there.',
            },
            {
              q: 'Legal parentage at birth',
              ask: 'Who the law treats as the mother and the father before any order exists.',
            },
            {
              q: 'Procedure after the birth',
              ask: 'The application, the court or registry that hears it, and the realistic duration.',
            },
            {
              q: "The child's nationality and documents",
              ask: 'What nationality the child acquires, and what they leave the country on.',
            },
            {
              q: 'Payment rules',
              ask: 'What may be paid, to whom, in what amounts, and who has to authorise it.',
            },
            {
              q: 'Medical and service verification',
              ask: 'Which body licenses the clinic, and what that license actually covers.',
            },
            {
              q: 'Attendance requirements',
              ask: 'Who must be present, for how long, and at which stages.',
            },
            {
              q: 'Source and verification date',
              ask: 'The document each answer comes from, its publisher, and the date it was read.',
            },
          ],
        },
        models: {
          heading: 'Legal systems come in three shapes',
          intro:
            'Knowing which shape a place has tells you what to expect from its name. Each sentence below is quoted from a record, with the document it came from and the date that document was opened.',
          cite: 'published {published}, read {verified}',
          items: [
            {
              name: 'Parentage is transferred after the birth',
              where: 'United Kingdom, and any system with a similar court route',
              plan:
                'Your planning cannot finish at the delivery. There is an application, a hearing, and a waiting period in which the child legally belongs to someone else.',
              points: [
                'The surrogate is the legal mother unless a parental order is obtained, a written arrangement is not legally binding, and payment is limited to her reasonable expenses.',
                'Paying more than reasonable expenses has to be authorised by the family court before a parental order can be made, and advertising for or as a surrogate is illegal under the Surrogacy Arrangements Act 1985.',
                'Intended parents wait until the child is born and then apply to court, which the Law Commission describes as typically taking six months to a year. Its reform proposals would keep arrangements unenforceable, and the draft Bill is not law.',
              ],
            },
            {
              name: 'Payment is restricted, and parentage sits elsewhere',
              where: 'Canada, and any federal system that legislates on money but not on birth',
              plan:
                'A country can be lawful to enter and still not be where your parentage order comes from. Read the reimbursement rules and the provincial birth rules as two separate documents.',
              points: [
                'Expenditures incurred by a surrogate mother in relation to her surrogacy may be reimbursed under the federal regulations. Regulated reimbursement is permitted; the line between that and a prohibited payment turns on the specifics of an arrangement.',
                'Our Canada record makes no eligibility statement, because the verified federal sources govern reimbursement rather than who may commission, and no claim about parentage, because provincial and territorial law sets it and we have not verified those rules.',
              ],
            },
            {
              name: 'No single national rule, so the layer you land in decides',
              where: 'United States, and any country where sub-national law governs',
              plan:
                'A country name tells you almost nothing. The state, province or region sets the rule, and recognition where you live is a further legal system on top of it.',
              points: [
                'Each state has its own laws about whether surrogacy is permitted and how it is regulated; there is no federal framework.',
                'Gestational surrogacy is expressly permitted by statute in 21 states in the survey we read, while several states have no statutes or published case law either permitting or prohibiting it.',
                'In Indiana and Nebraska gestational carrier contracts are unenforceable and against public policy, and Arizona residents are prohibited from entering into them.',
              ],
            },
          ],
        },
        questions: {
          heading: 'Five questions to answer before you shortlist a destination',
          intro:
            'If a destination cannot answer these in writing, it is not ready to be compared with another one.',
          items: [
            'Which provision says who may commission here, and where is it published?',
            'Who is the legal mother and the legal father at birth, before any order exists?',
            'What travel document does the child leave on, and which authority issues it?',
            'What may be paid to the carrier, and does anything require a court or regulator to authorise it?',
            'Which stages require me in person, and what happens if I cannot attend one of them?',
          ],
          footnote:
            'The full checklist holds thirty-three questions across seven groups. Download it, and write the name and the date beside a question once a professional has answered it for your own facts.',
          cta: 'Open the full checklist',
        },
        next: {
          heading: 'Where to go next',
          items: [
            {
              label: 'Law and parentage',
              body: 'Enforceability, parentage at birth, eligibility, what may be paid, and recognition where you live, in that order.',
            },
            {
              label: 'Cost guide',
              body: 'What a budget is made of, what a quote usually leaves out, and how the money actually moves.',
            },
            {
              label: 'Research checklist',
              body: 'Thirty-three questions across seven groups, each with an empty box beside it in the file you download.',
            },
            {
              label: 'Quote comparison',
              body: 'Put two programs in the same rows so the difference is scope rather than a headline figure.',
            },
          ],
        },
        band: {
          heading: 'No destination has been chosen for you here',
          body:
            "That is deliberate. A page that named a best country would be repeating a provider's claim without the standing to test it. What this site can do is hold each legal system to its sources and keep the comparison honest.",
          brief: 'Write the enquiry out',
          service: 'What the assessment service is',
        },
        standard: {
          heading: 'What every destination record on this site has to carry',
          items: [
            'The legal basis is named: statute, case law, an assisted-reproduction act, or no single national rule.',
            'Eligibility is described only as far as the sourced material goes, and where it does not reach, the page says so instead of guessing.',
            'Every position carries the document it came from, the publisher, and the date we opened it.',
            'Payment rules are stated as what the law permits, prohibits, or requires to be authorised, never as what providers normally do.',
            'Parentage at birth and parentage afterwards are recorded as two separate answers.',
            'Open questions are listed on the page, including sources we tried and could not open.',
            'No page is marked open, safe, recommended or best for anyone.',
          ],
        },
        why: {
          heading: 'Why the list is short',
          body:
            "We add a destination when we can cite the rule rather than repeat a provider's summary. Where the only material available is marketing, or a citation that does not check out once it is opened, the record says so rather than tidying the gap. Each record below lists the questions its own sources did not settle.",
          readTitle: 'How to read a record',
          readBody:
            'Permitted in principle is not the same as workable for you. Eligibility, parentage, which court handles it and what documentation the child leaves on are separate questions, and any one of them can fail on its own.',
          link: 'The five legal questions',
        },
      },
    },
  },

  zh: {
    skipLink: '跳到主要内容',
    primaryNavLabel: '主导航',
    openNav: '打开导航',
    languageLabel: '语言',
    languageUnavailable: '该页面暂无此语言版本',
    breadcrumbLabel: '位置导航',
    home: '首页',
    brandAlt: 'SurrogacyBase 首页',
    needsInput: '尚未确定',
    undated: '无日期',
    notYetDated: '暂无日期',
    tagline: `${SITE.taglineZh}独立的信息与决策工具。不是诊所，不是律师事务所，也不是代孕机构。`,
    copyright: '© {year} {site}。内容为信息参考，不构成法律或医疗意见。',
    bylinePre: '本站由 ',
    bylinePost: ' 编写与维护。',
    disclaimerPre: '完整的免责声明见我们的',
    disclaimerTerms: '服务条款',
    disclaimerMid: '与',
    disclaimerStandards: '研究标准',
    disclaimerEnd: '。',
    siteDescription: '跨境代孕的独立指引：比较目的地，把费用拆成条目，厘清亲权与国籍，在付款之前核对报价。',
    feedTitle: 'SurrogacyBase 指南与专题解读',
    nav: [
      { label: '专题解读', href: '/zh/articles' },
      { label: '目的地', href: '/zh/destinations' },
      { label: '服务', href: '/zh/assessment' },
      { label: '指南', href: '/zh/guides' },
      { label: '关于我们', href: '/zh/about' },
    ],
    cta: { label: '获取咨询', href: '/zh#assessment' },
    footerGroups: [
      {
        heading: '指南',
        links: [
          { label: '全部指南', href: '/zh/guides' },
          { label: '费用指南', href: '/zh/guides/surrogacy-cost' },
          { label: '法律与亲权', href: '/zh/guides/surrogacy-legal-considerations' },
          { label: '如何选择机构', href: '/zh/guides/choosing-a-surrogacy-agency' },
          { label: '流程', href: '/zh/guides/surrogacy-process' },
        ],
      },
      {
        heading: '研究',
        links: [
          { label: '专题解读', href: '/zh/articles' },
          { label: '目的地', href: '/zh/destinations' },
          { label: '工具', href: '/zh/tools' },
          { label: '更新记录', href: '/zh/updates' },
          { label: 'RSS 订阅', href: '/zh/rss.xml' },
        ],
      },
      {
        heading: '标准',
        links: [
          { label: '我们如何做研究', href: '/zh/editorial-policy' },
          { label: '关于本站', href: '/zh/about' },
          { label: '评估服务说明', href: '/zh/assessment' },
          { label: '联系我们', href: '/zh/about#contact' },
        ],
      },
      {
        heading: '法律',
        links: [
          { label: '隐私', href: '/zh/privacy' },
          { label: '条款', href: '/zh/terms' },
        ],
      },
    ],
    kinds: { guide: '指南', article: '专题解读' },
    labels: {
      updated: '更新于',
      firstPublished: '首次发布',
      readingTime: '阅读时长',
      by: '作者',
    },
    time: { minRead: '约 {n} 分钟', minutes: '{n} 分钟' },
    toc: { heading: '本页内容' },
    sources: {
      heading: '来源',
      note: '每条来源都标明它支撑哪一句结论，以及我们最后一次打开它的日期。这样一旦某句话过期，可以立刻追查。',
      published: '，发布于 {date}',
      checked: '，核查于 {date}',
      supports: '支撑的结论：{text}',
    },
    evidence: {
      frameworkHeading: '这一页给出的是方法，不是结论',
      frameworkBody: '它列出需要逐一处理的问题与分类。它不陈述法律、医疗或价格事实，因此这里没有需要引用的外部来源。',
      draftHeading: '仍在研究中',
      draftBody: '这一页的结论还没有对照过您可以打开的来源，因此不作为结论发布。',
      listedOne: '已列出 1 条来源',
      listedMany: '已列出 {n} 条来源',
      verifiedBody: '下面每一条事实性结论都对应一个具名来源，并标注我们最后一次打开它的日期。',
      nextDue: '下次核查时间：{date}。',
    },
    table: {
      caption: '按目的地整理的已核查代孕规则，以及每一条立场的核查日期',
      destination: '目的地',
      legalBasis: '法律依据',
      payment: '费用模式',
      checked: '核查日期',
      insufficient: '可核实的材料不足，无法作为目的地推荐',
    },
    costs: {
      heading: '本目的地已发布的费用数字',
      intro:
        '下面每一个数字都由某个具名来源发布，沿用该来源自己的币种，并注明这些数字描述的是哪一年。它是有引证的已发布数字，不是一份报价；发布它的那份来源就在这一行里链接出来。',
      none:
        '这里没有发布任何数字。上面的付款立场写明了这个目的地的规则允许支付什么，下面的问题写明了哪些内容没有来源能够回答。',
      table: '费用数字',
      tableNone: '未发布',
      columns: { item: '这一行覆盖什么', figure: '数字', source: '发布方' },
      asOfYear: '数字对应的年份',
      asOf: '{year} 年的数字',
      items: {
        medical: '医疗环节',
        legal: '法律环节',
        recruiting: '招募代孕者',
        carrier: '支付给代孕者',
        total: '整个流程',
      },
      shapes: {
        range: '{c} {a} 至 {b}',
        ceiling: '{c}不超过 {b}',
        floor: '{c} {a} 以上',
        single: '{c} {a}',
      },
      currency: { USD: '美元', GBP: '英镑', EUR: '欧元', CAD: '加元', COP: '哥伦比亚比索' },
    },
    content: {
      keepReading: '继续阅读',
      keepReadingNote: '入选理由：它们回答了这一页没有回答的问题。',
      workingList: '把这一页变成一份可执行的清单',
      reviewedBy: '由 {name}（{role}）审阅。',
    },
    pages: {
      guides: {
        title: '指南',
        description: '关于代孕费用、流程、机构选择与法律要点的框架性指南，每一条结论都可以追溯到来源。',
        intro: '一篇指南承载一个决策领域的框架。专题解读保持窄口径，并回链到为它提供框架的那篇指南。',
        readGuide: '阅读指南',
        relatedOne: '关联专题解读 1 篇',
        relatedMany: '关联专题解读 {n} 篇',
        open: '打开',
        updated: '更新于',
        emptyTitle: '尚无已发布的指南',
        emptyBody: '每一篇结论核对完成后的指南都会逐篇发布。这里暂时还没有。',
        emptyAction: '我们如何核查内容',
      },
      articles: {
        title: '专题解读',
        description: '关于代孕费用、目的地、机构选择、流程与准备的专题解读，每一篇都连接到它所支撑的指南。',
        intro: '一篇专题解读回答一个问题，来源列在页面底部。指南承载框架；专题解读回答您在阅读指南时遇到的具体问题。',
        mostRecent: '最新发布',
        browseByTopic: '按主题浏览',
        guidesPitch: '想要一个主题的完整论述？指南承载框架，专题解读保持窄口径。',
        allGuides: '全部指南',
        emptyTitle: '尚无已发布的专题解读',
        emptyBody: '每一条结论都有您可以打开的来源之后，专题解读才会发布在这里。',
        emptyAction: '阅读研究标准',
      },
      category: {
        title: '{label}专题解读',
        descriptionFull: '关于代孕{label}的专题解读，面向意向父母，每一条结论都附有来源与核查日期。',
        descriptionEmpty: '关于代孕{label}的专题解读仍在研究之中。任何一页通过来源核查之后，会立刻出现在这个列表与站点地图里。',
        introOne: '这一主题已发布 1 篇专题解读，并连接到它所支撑的指南。',
        introMany: '这一主题已发布 {n} 篇专题解读，每篇都连接到它所支撑的指南。',
        introEmpty: '这一主题还没有内容通过来源核查，所以这里暂时没有条目。',
        allArticles: '全部专题解读',
        emptyTitle: '尚未撰写',
        emptyBody: '这一主题在研究清单上。当这里的页面能够为它的结论列出来源时，它就会出现在这个列表里。',
        emptyAction: '查看已发布内容',
      },
      detail: {
        destinationConditions: '目的地条件',
        destinationConditionsNote: '核对法律实际写了什么。',
      },
      jurisdiction: {
        title: '{name}代孕：法律实际写了什么',
        description: '关于{name}（{region}）代孕的四项已核实立场：法律基础、谁可以委托、付款规则与亲权，每一条都附上来源与核查日期。',
        heading: '{name}的代孕法律',
        intro: '下面每一项立场都来自与它一同列出的来源，并在标注的日期被最后一次打开。凡是一条规则取决于您的个人情况，页面就直接说明，而不是猜测。',
        checked: '立场核查于 {date}',
        insufficient: '关于{name}，我们没有找到足够的可核实公开资料，不足以把它作为一个可行目的地呈现。请把它当作一份待回答问题清单来读，并在作出任何计划之前交给当地有资格的律师。',
        positions: {
          legalBasis: '法律基础',
          whoMayCommission: '谁可以委托',
          payment: '付款',
          parentage: '亲权',
        },
        restsTitle: '每一项立场依据什么',
        citeChecked: '，核查于 {date}',
        openTitle: '仍需要当地法律意见的问题',
        openIntro: '这些是来自{name}的资料未能回答的问题，也正是值得付费请当地有资格的律师回答的部分。',
        compareTitle: '要比较的地点不止一个？',
        compareBody: '只有当每个目的地都按同一组问题来读，比较才有意义：资格、亲权、付款规则，以及计划改变时会怎样。',
        legalFramework: '法律框架',
        openChecklist: '逐条过一遍核查清单',
        breadcrumb: '目的地',
      },
      destinations: {
        title: '代孕目的地',
        titleTag: '代孕目的地：比较法律与费用',
        description: '按资格、出生时的亲权、付款规则、费用范围与到场要求比较代孕目的地，每一条法律立场都附有来源与日期。',
        breadcrumb: '目的地',
        eyebrow: '独立的目的地研究',
        h1: '哪些代孕目的地适合您的情况？',
        lede: '这一页不点名最好的国家。它帮您判断哪些地方值得花时间研究、哪些应当先排除，依据的是四件事：规则是否覆盖您的家庭，孩子在出生时的法律父母是谁，预算是否覆盖整个过程，以及您需要到场的时候您能不能到场。',
        notice: '代孕法律在不同国家之间不同，在联邦国家内部也因州和省而异。它还因婚姻状况、孩子与您是否有基因关系、以及国籍和居住地而不同，而这三项是各自独立的检验，不是同一个。下面没有任何内容是关于您个人情况的法律意见；一个国家允许某种安排，并不能证明您可以使用它，也不能证明您自己的国家会接受这个结果。',
        ctaNotes: '先核实什么',
        ctaRecords: '比较已核实的记录',
        stats: {
          recorded: '已记录的目的地',
          sourced: '附有可打开的来源',
          lastCheck: '最近一次核查',
        },
        factors: {
          heading: '在偏好起作用之前，先由四件事决定目的地',
          intro: '按顺序逐项处理。每一条都比阅读介绍更快地排除地点，而且每一条都有一个您可以拿去问机构、或者拿去问律师的检验方法。',
          items: [
            {
              q: '规则是否点名了像您这样的家庭？',
              a: '原则上允许并不等于您有资格。凡是一条规定写明谁可以委托，它通常取决于婚姻状况、与孩子是否有基因关系，或者家庭的构成。一个被描述为「对代孕友好」的国家，回答的不是这个问题。',
              test: '当有人能指向那条规定时，答案是规则。当答案来自某家机构已经安置过多少个类似的家庭时，那是惯例。',
            },
            {
              q: '孩子在出生时的法律父母是谁？',
              a: '在一些体系里，意向父母在出生时就被确立；在另一些体系里，分娩的女性无论协议写了什么仍然在法律上是母亲，亲权只能在之后通过法院转移。仅此一项差别，就决定了您的规划是在产房结束，还是在产房开始。',
              test: '要求给出顺序：出生当天谁是父母，之后存在哪一种申请，由谁审理，以及一项裁定实际需要多久。',
            },
            {
              q: '预算是否覆盖整个过程？',
              a: '一个您负担不起的目的地，不是您应该研究的目的地。但真正要紧的数字是范围而不是总额：一个疗程包含哪些阶段，法律允许向代孕者支付什么，哪些费用在报价之外另行计费，以及疗程中止时有什么会退回给您。',
              test: '两份相差百分之四十的报价可能包含同样的医疗内容。先比较条目清单，再比较头部数字。',
            },
            {
              q: '您能在它需要的时候到场吗？',
              a: '治疗前签署文件、出席法院、领取文件、以及分娩之后的停留，是分开的几项要求，而且它们通常由诊所惯例、登记处和法院决定，而不是由法条决定。出行限制比预算更快地缩小范围。',
              test: '让负责每一步的人把到场时间表以书面形式交给您，并清楚说明您有几个可用的时间窗口。',
            },
          ],
        },
        records: {
          heading: '已核实的记录',
          intro: '一条记录说明某个具体法律体系写了什么、它看起来适用于谁，以及我们最后一次阅读其背后来源的日期。打开一条记录，可以看到每一项立场与它的引用并列，以及我们未能确定的问题。',
          emptyTitle: '尚无已核实的内容',
          emptyBody: '每个目的地都要先有一份带日期的一手法律来源，才会出现在这里。把机构博客上的地点清单抄过来，是发布错误内容最快的方式。',
          costNote: '上面这一列每个目的地只能显示一个数字。',
          costLink: '按每个数字覆盖的那一行去读全部已发布的数字',
          thinNote: '{names}带着标记列出，因为我们能打开的来源并不支持一个可用的结论。它们保留在页面上，是为了让您在宣传册里已经见过的名字，不至于没有任何说明就消失。',
          thinJoin: '、',
          thinOne: '',
          thinMany: '',
        },
        dimensions: {
          heading: '比较一个目的地，必须覆盖的十项内容',
          paraA: '多数家庭最后拿到的是一张国家对照表，加上一列价格，而那个价格恰好隐藏了真正决定一个目的地是否可行的那三项内容。下面这十项，是我们要求每个目的地逐项应答的。',
          paraB: '只有在某一项背后有来源时我们才发布结论，所以上面的记录只承载这十项中的一部分，其余的以未回答的问题列出。您在一条记录上看得见的空缺，本身就是一个结论，不是排版上的意外。',
          link: '本站如何为一条结论列出来源',
          items: [
            { q: '当地法律框架', ask: '成文法、法院判决、一部辅助生殖法，还是各州各异的拼贴？' },
            { q: '谁可以委托', ask: '规则点名了哪些意向父母，以及是否要求基因联系。' },
            { q: '国籍与居住', ask: '规则触及的是公民、居民，还是任何前往当地的人。' },
            { q: '出生时的法律亲权', ask: '在任何裁定存在之前，法律把谁视为母亲、把谁视为父亲。' },
            { q: '出生之后的程序', ask: '申请、受理它的法院或登记机关，以及实际所需的时间。' },
            { q: '孩子的国籍与文件', ask: '孩子取得什么国籍，以及凭借什么文件离开该国。' },
            { q: '付款规则', ask: '可以支付什么、付给谁、金额如何，以及必须由谁批准。' },
            { q: '医疗与服务的核实', ask: '由哪个机构给诊所发牌，那张牌照实际覆盖什么。' },
            { q: '到场要求', ask: '谁必须出席、出席多久、在哪些阶段。' },
            { q: '来源与核查日期', ask: '每个答案出自哪份文件、由谁发布，以及它是在哪一天被阅读的。' },
          ],
        },
        models: {
          heading: '法律体系有三种形态',
          intro: '知道一个地方属于哪种形态，就知道它的名字意味着什么。下面每一句都摘自一条记录，并附上它出自哪份文件、那份文件是何时被打开的。',
          cite: '发布于 {published}，阅读于 {verified}',
          items: [
            {
              name: '亲权在出生之后才转移',
              where: '英国，以及任何有类似法院路径的体系',
              plan: '您的规划无法在分娩时收尾。之后还有一份申请、一次庭审，以及一段孩子在法律上属于别人的等待期。',
              points: [
                '除非取得亲权令，代孕者在法律上仍是母亲；书面安排不具有法律约束力；并且付款限于她的合理开支。',
                '支付超过合理开支的部分，必须先经家事法院批准才能作出亲权令；依《1985年代孕安排法》，为代孕刊登广告或者以代孕者身份刊登广告均属违法。',
                '意向父母要等到孩子出生之后才向法院申请，法律委员会描述这一步通常需要六个月到一年。它的改革建议仍会让安排不具可执行性，而草案法案目前还不是法律。',
              ],
            },
            {
              name: '付款受限，而亲权在别处决定',
              where: '加拿大，以及任何只就金钱立法、不就出生立法的联邦体系',
              plan: '一个国家可以合法进入，却未必是您的亲权裁定的来源地。把报销规则和省级出生规则当作两份分开的文件来读。',
              points: [
                '依联邦法规，代孕母亲因代孕而产生的支出可以被报销。受规范约束的报销是允许的；它与被禁止的付款之间的界线，取决于某项安排的具体内容。',
                '我们的加拿大记录没有就资格作出陈述，因为已核实的联邦来源规范的是报销而不是谁可以委托；也没有就亲权作出任何主张，因为亲权由省级与地区法律决定，而那些规则我们尚未核实。',
              ],
            },
            {
              name: '没有全国统一规则，由您落地的那一层决定',
              where: '美国，以及任何由次国家法律管辖的国家',
              plan: '国家名几乎不告诉您什么。规则由州、省或地区制定，而您居住地的承认问题，是在其上再加一整套法律体系。',
              points: [
                '各州对代孕是否允许、以及如何监管各有自己的法律；不存在联邦框架。',
                '在我们阅读的这项调查中，有 21 个州以成文法明确允许妊娠代孕，另有若干州既没有允许也没有禁止的成文法或公开判例。',
                '在印第安纳州和内布拉斯加州，妊娠代孕合同不可强制执行并且违背公共政策；亚利桑那州居民则被禁止订立此类合同。',
              ],
            },
          ],
        },
        questions: {
          heading: '确定候选目的地之前要回答的五个问题',
          intro: '如果一个目的地无法以书面形式回答这几个问题，它就还没有准备好与另一个目的地放在一起比较。',
          items: [
            '哪一条规定写明此处谁可以委托，它发表在哪里？',
            '在任何裁定存在之前，出生时的法律母亲和法律父亲分别是谁？',
            '孩子凭哪种旅行文件离开该国，由哪个机关签发？',
            '可以向代孕者支付什么，是否有事项需要法院或监管机构批准？',
            '哪些阶段必须我本人到场，如果我无法出席其中一项会怎样？',
          ],
          footnote: '完整的清单共有七组三十三个问题。把它下载下来；一旦某位专业人士针对您自身的情况回答了某个问题，就在它旁边写下名字和日期。',
          cta: '打开完整清单',
        },
        next: {
          heading: '接下来去哪里',
          items: [
            {
              label: '法律与亲权',
              body: '按顺序处理可执行性、出生时的亲权、资格、可以支付什么，以及您居住地的承认问题。',
            },
            { label: '费用指南', body: '一份预算由什么构成，报价通常漏掉什么，以及钱实际是怎么流转的。' },
            { label: '研究清单', body: '七组共三十三个问题，下载的文件里每个问题前面都留着一个空的方框。' },
            { label: '报价对比', body: '把两个疗程填进同样的行里，让差别落在范围上，而不是落在头部数字上。' },
          ],
        },
        band: {
          heading: '这里没有替您选定任何目的地',
          body: '这是刻意的。一个点名最佳国家的页面，等于在没有任何验证资格的情况下重复机构的主张。本站能做的是把每个法律体系对着它的来源核对，并让比较保持诚实。',
          brief: '把问询写出来',
          service: '评估服务是什么',
        },
        standard: {
          heading: '本站每一条目的地记录都必须具备的内容',
          items: [
            '写明法律基础：成文法、法院判决、一部辅助生殖法，还是没有全国统一规则。',
            '资格只按材料所能核实的范围描述；材料到不了的地方，页面直接说明，而不是猜测。',
            '每一项立场都附上它出自哪份文件、由谁发布，以及我们打开它的日期。',
            '付款规则按法律允许什么、禁止什么、要求批准什么来陈述，绝不写成机构通常怎么做。',
            '出生时的亲权与之后的亲权，作为两个分开的答案记录。',
            '在页面上列出尚未确定的问题，包括我们试过却打不开的来源。',
            '任何页面都不会替任何人标注为开放、安全、推荐或最佳。',
          ],
        },
        why: {
          heading: '为什么这份名单很短',
          body: '只有当我们能引用规则本身、而不是复述机构的概述时，我们才添加一个目的地。当可获得的材料只有营销内容，或者一条引用打开之后发现对不上时，记录会直接这样写明，而不是把空缺抹平。下面每条记录都列出自己的来源没能确定的问题。',
          readTitle: '怎么读一条记录',
          readBody: '原则上允许，和对您可行，不是一回事。资格、亲权、由哪个法院处理、孩子凭什么文件离开，是各自独立的问题，其中任何一个单独都可能不成立。',
          link: '五个法律问题',
        },
      },
    },
  },
};

/** The categories, spelled the way each language's listing pages show them. */
export const CATEGORY_LABELS: Record<Lang, Record<string, string>> = {
  en: { cost: 'Cost', destinations: 'Destinations', agencies: 'Agencies', process: 'Process', preparation: 'Preparation' },
  zh: { cost: '费用', destinations: '目的地', agencies: '机构', process: '流程', preparation: '准备' },
};

/** How a legal system arrives at its surrogacy position. */
export const BASIS_LABELS: Record<Lang, Record<string, string>> = {
  en: {
    'mixed-patchwork': 'No single national rule; set region by region',
    'explicit-statute': 'Surrogacy set out in statute',
    'case-law': 'Reached through court decisions',
    'assisted-reproduction-law': 'Inside an assisted-reproduction law',
    'no-specific-statute': 'No dedicated surrogacy statute',
    restricted: 'Permitted with restrictions',
    prohibited: 'Prohibited',
  },
  zh: {
    'mixed-patchwork': '没有全国统一规则，按地区分别规定',
    'explicit-statute': '成文法明确规定代孕',
    'case-law': '通过法院判决确立',
    'assisted-reproduction-law': '规定在辅助生殖法之内',
    'no-specific-statute': '没有专门的代孕立法',
    restricted: '允许，但有条件限制',
    prohibited: '禁止',
  },
};

/**
 * Substitutes {tokens} in a dictionary string. Unknown tokens are left as written, so a
 * typo shows itself on the page instead of quietly deleting the sentence around it.
 */
export function fill(template: string, vars: Record<string, string | number>): string {
  return template.replace(/\{(\w+)\}/g, (match, key: string) =>
    key in vars ? String(vars[key]) : match,
  );
}

