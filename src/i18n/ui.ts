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
  /** Accessible name for the floating control that returns the page to its top. */
  backToTop: string;
  primaryNavLabel: string;
  openNav: string;
  languageLabel: string;
  /** Tooltip on a greyed language entry: this page exists in no other language. */
  languageUnavailable: string;
  breadcrumbLabel: string;
  home: string;
  /** The alt text for the brand mark, which is a link to the home page in both languages. */
  brandAlt: string;
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
  nav: NavItem[];
  cta: NavItem;
  /** The header action, which opens the enquiry form in a dialog over the page you are on. */
  enquiryDialog: { title: string; subtitle: string; close: string };
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
   * The words printed around an admission row. Which family, which status and which qualification
   * are codes in src/data/jurisdictions, identical in both languages, so only these labels move.
   */
  admits: {
    heading: string;
    intro: string;
    /** {families} lists the types no source on the page settles. */
    notEstablished: string;
    /** Printed whole in place of the rows when a record carries none. */
    noneForRecord: string;
    /** The separator used when those types are named in one sentence. */
    join: string;
    family: {
      married: string;
      cohabiting: string;
      single: string;
      maleCouple: string;
      femaleCouple: string;
      international: string;
    };
    status: { open: string; closed: string; conditional: string };
    /** The short text a matrix cell carries, with `none` for a type no source settles. */
    cell: { open: string; closed: string; conditional: string; none: string };
    note: Record<'cohabit-one-year' | 'citizen-only' | 'bill-pending' | 'residence-required' | 'genetic-link', string>;
    matrix: {
      heading: string;
      intro: string;
      caption: string;
      destination: string;
      /**
       * The line above the list of qualifications behind the marked cells. A cell reading "on
       * conditions" or "open" is only half an answer when the record attaches a condition to it, and
       * that condition used to be printed on the destination page alone, so the matrix invited a
       * reader to act on the half.
       */
      legend: string;
    };
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
    /** The board that carries the clinical review when no individual is named. */
    reviewedByTeam: string;
    /** The link text that opens a named reviewer's public credential. */
    credential: string;
  };
  /**
   * The wording of the guide and article listing pages, which used to live inside the route
   * files. They live here because one route file now serves both languages, and a page whose
   * chrome is assembled from a dictionary cannot have its headings written in one language.
   */
  pages: {
    guides: {
      title: string;
      titleTag: string;
      description: string;
      intro: string;
      countOne: string;
      countMany: string;
      startHeading: string;
      startIntro: string;
      /** The three ways in, each paired by position with the guide refs in GuidesIndex. */
      paths: { title: string; body: string }[];
      howHeading: string;
      howIntro: string;
      howPoints: { title: string; body: string }[];
      standardsLink: string;
      explainerHeading: string;
      explainerBody: string;
      explainerLink: string;
      toolsHeading: string;
      toolsBody: string;
      toolsLink: string;
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
      titleTag: string;
      description: string;
      intro: string;
      startHeading: string;
      startIntro: string;
      /** The four ways in, each paired by position with the article refs in ArticlesIndex. */
      paths: { title: string; body: string }[];
      allHeading: string;
      /**
       * The way out to the editorial policy. This page used to carry a whole section here, under a
       * heading that read "how each explainer is built", with three points: one question each, the
       * source beside the claim, a stated edge. The section is gone for two reasons. It restated the
       * intro one screen above it, and its framing - every piece written to one specification -
       * advertised a production line, which is the last thing a page of independent research should
       * put in front of a reader deciding whether to believe a figure. The substance survives in the
       * intro below; this link is for the reader who wants to see the checking itself.
       */
      standardsLink: string;
      /**
       * A bare label over the list of guides at the foot of the page. This block used to pitch: a
       * heading about reading a whole subject, a sentence under it, and a button to /guides. All of
       * that is gone and the six titles speak for themselves - a closing call to action that has to
       * explain itself reads as unsure of the guides it is selling, and /guides is already in the
       * header on every page, so the button was a second way to say the same nothing.
       */
      guidesHeading: string;
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
      compareBoard: string;
      documentsGuide: string;
      costFiguresLink: string;
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
      ctaPick: string;
      ctaFactors: string;
      ctaCompare: string;
      /**
       * The three figures under the intro. The middle one counts sourced positions, not records: it
       * used to read "destinations backed by an openable source", which always printed the same
       * number as the first cell, since a record without a source is not published at all. Two
       * identical figures side by side advertise that one of them measures nothing.
       */
      stats: { recorded: string; sourced: string; lastCheck: string };
      picker: {
        heading: string;
        intro: string;
        /** {n} is the number of verified records. */
        count: string;
        open: string;
        noCost: string;
        insufficient: string;
        /** {names} is the flagged destinations joined with {join}. */
        thinNote: string;
        thinJoin: string;
        costNote: string;
        costLink: string;
        emptyTitle: string;
        emptyBody: string;
      };
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
      band: { heading: string; body: string; enquiry: string };
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
    backToTop: 'Back to top',
    primaryNavLabel: 'Primary',
    openNav: 'Open navigation',
    languageLabel: 'Language',
    languageUnavailable: 'This page is not available in this language yet',
    breadcrumbLabel: 'Breadcrumb',
    home: 'Home',
    brandAlt: 'SurrogacyBase home',
    undated: 'undated',
    notYetDated: 'Not yet dated',
    tagline: SITE.tagline,
    copyright: '© {year} {site}. Informational content, not legal or medical advice.',
    bylinePre: 'Written and maintained by the ',
    bylinePost: '.',
    disclaimerPre: 'The full disclaimer is in our ',
    disclaimerTerms: 'terms',
    disclaimerMid: ' and ',
    disclaimerStandards: 'research standards',
    disclaimerEnd: '.',
    siteDescription: SITE.description,
    nav: [
      { label: 'Explainers', href: '/articles' },
      { label: 'Destinations', href: '/destinations' },
      { label: 'Tools', href: '/tools' },
      { label: 'Guides', href: '/guides' },
      { label: 'About us', href: '/about' },
    ],
    cta: { label: 'Free consultation', href: '/#assessment' },
    enquiryDialog: {
      title: 'Free consultation',
      subtitle: 'Leave a mobile number and one way to reach you. An advisor writes the reply; no clinic or agency sees it.',
      close: 'Close',
    },
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
        ],
      },
      {
        heading: 'Standards',
        links: [
          { label: 'How we research', href: '/editorial-policy' },
          { label: 'About the site', href: '/about' },
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
    admits: {
      heading: 'Which families this route is open to',
      intro:
        'These rows come from the same record as the legal position above, and each one names the source that states it. A family type appears only where that type is written into the provision.',
      notEstablished: 'No source listed on this page settles the position for: {families}.',
      noneForRecord:
        'None of the sources behind this record states which family types may use this route, so this page claims no answer for any of them.',
      join: ', ',
      family: {
        married: 'A married couple',
        cohabiting: 'A couple living together',
        single: 'A single person',
        maleCouple: 'Two men as intended parents',
        femaleCouple: 'Two women as intended parents',
        international: 'Intended parents living abroad',
      },
      /**
       * Stated as a verdict on the family type, since the family type is what sits beside it. The
       * old pair read "open" and "not open", which is a description of a door rather than of a
       * rule, and it invited a reader to take "not open" for a refusal the sources had made.
       */
      status: { open: 'Permitted', closed: 'Not permitted', conditional: 'Permitted on conditions' },
      cell: { open: 'Permitted', closed: 'Not permitted', conditional: 'On conditions', none: 'Not settled' },
      note: {
        'cohabit-one-year': 'The same rule reaches a man and a woman who have lived together for at least one year.',
        'citizen-only': 'Marriage is not enough by itself: the rule names Kazakh citizenship as well.',
        'bill-pending': 'A bill registered in August 2026 would remove foreign intended parents from this route. It has not been adopted.',
        'residence-required': 'Both the intending parents and the woman carrying must hold permanent residence in Greece.',
        'genetic-link': 'At least one applicant has to be genetically related to the child.',
      },
      matrix: {
        heading: 'Who each destination admits',
        intro:
          'Read across a row for one destination, down a column for one kind of family. A cell reading "not settled" describes how far this site\'s sources go, not the destination itself.',
        caption: 'Which family types each destination admits, limited to what the sources listed here establish',
        destination: 'Destination',
        legend: 'The conditions behind a marked cell, with the record they come from',
      },
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
      keepReadingNote: 'Each of these pages covers another part of the same decision.',
      workingList: 'Turn this into a working list',
      reviewedBy: 'Reviewed by {name}, {role}.',
      reviewedByTeam: 'Reviewed by the {board}.',
      credential: 'Public credential',
    },
    pages: {
      guides: {
        title: 'Guides',
        titleTag: 'Surrogacy Guides: Law, Cost and Process',
        description:
          'Guides on surrogacy law, process, cost, agencies and bringing a child home, each claim traceable to a source you can open.',
        intro: 'A guide works through one subject, from the first question to the last step.',
        countOne: '1 published guide',
        countMany: '{n} published guides',
        startHeading: 'Where to start',
        startIntro: 'Each path runs in the order the questions arrive. You can also read the full list.',
        paths: [
          {
            title: 'The law and the paperwork',
            body: 'The four legal questions, and the documents your child needs to come home.',
          },
          {
            title: 'The process and who carries',
            body: 'The stages a program runs, and whose egg, sperm and pregnancy each one involves.',
          },
          {
            title: 'The money and the agency',
            body: 'What to budget, what a quote leaves out, and what to ask before you sign.',
          },
        ],
        howHeading: 'How a guide works',
        howIntro: 'A guide is meant to be used, not read once. Each one leaves you three things.',
        howPoints: [
          {
            title: 'A decision from end to end',
            body: 'From the first choice in the subject to the document or conversation that closes it.',
          },
          {
            title: 'A source beside the claim',
            body: 'Where a guide states a fact, its source and the date it was last checked sit beside it.',
          },
          {
            title: 'A next step you can use',
            body: 'Each guide ends at the explainers that go deeper and the tools you can fill in.',
          },
        ],
        standardsLink: 'How sources are checked',
        explainerHeading: 'One question at a time',
        explainerBody: 'An explainer answers a single question and names the source behind its answer.',
        explainerLink: 'Read the explainers',
        toolsHeading: 'Put a guide to work',
        toolsBody:
          'The tools turn these questions into a form you can take to a lawyer, clinic or agency.',
        toolsLink: 'Open the tools',
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
        titleTag: 'Surrogacy Explainers: One Question Each',
        description:
          'Explainers on surrogacy cost, destinations, agency selection, process and preparation, each answering one question for intended parents.',
        intro:
          'Each explainer answers one question about cost, destinations, law or the paperwork a child needs after birth, and names the source behind its answer.',
        startHeading: 'Start with the decision in front of you',
        startIntro: 'You do not have to read these in order. Pick the question you need answered now.',
        paths: [
          {
            title: 'You are building a budget',
            body: 'Why no average exists, what a quote leaves out, and how the money moves.',
          },
          {
            title: 'You are choosing a destination',
            body: 'The questions a legal system has to answer, then the paperwork your child needs and the deadlines around it.',
          },
          {
            title: 'You are close to signing',
            body: 'What has to be in writing before the first transfer, and what each payment stage depends on.',
          },
          {
            title: 'You are reading success rates',
            body: 'What the largest published study of US transfers counts, and whose cases it covers.',
          },
        ],
        allHeading: 'All explainers',
        standardsLink: 'How sources are checked',
        guidesHeading: 'Guides',
        emptyTitle: 'No explainers published yet',
        emptyBody:
          'An explainer is published once each of its claims has a source you can open. They appear one at a time.',
        emptyAction: 'Read the research standards',
      },
      detail: {
        destinationConditions: 'Destination conditions',
        destinationConditionsNote: 'Compare what the law actually says.',
      },
      jurisdiction: {
        title: 'Surrogacy in {name}: what the law says',
        description:
          'Verified positions on surrogacy in {name}: legal basis, who may commission, payment rules and parentage, each with its source and check date.',
        heading: 'Surrogacy in {name}',
        intro:
          'Each position below names its source and the date it was last checked. Where a rule depends on your circumstances, it says so instead of guessing.',
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
        compareBoard: 'Compare destinations side by side',
        documentsGuide: 'Documents after birth',
        costFiguresLink: 'See every published cost figure',
        breadcrumb: 'Destinations',
      },
      destinations: {
        title: 'Surrogacy Destinations',
        titleTag: 'Surrogacy Destinations: Compare Laws and Costs',
        description:
          'Compare surrogacy destinations on eligibility, parentage at birth, payment rules, cost scope and attendance, with every legal position sourced and dated.',
        breadcrumb: 'Destinations',
        eyebrow: 'Verified destination records',
        h1: 'Which surrogacy destinations suit your situation?',
        lede:
          'Four conditions decide whether a destination works: whether the rule names a family like yours, who is a legal parent at birth, what the money covers, and whether you have to attend in person. This page sets those four out for eight legal systems.',
        notice:
          'Surrogacy law varies between countries, and inside federal countries between states and provinces. It also turns on marital status, on whether a child is genetically yours, and on nationality and residence, and those are separate tests. Nothing here is legal advice about your situation: a country that permits surrogacy has not established that you may use that route, or that the country you live in will accept the birth result.',
        ctaPick: 'Read the records',
        ctaFactors: 'The four conditions',
        ctaCompare: 'Compare side by side',
        stats: {
          recorded: 'Destination records',
          sourced: 'Positions with an openable source',
          lastCheck: 'Last checked',
        },
        picker: {
          heading: 'Choose a destination',
          intro:
            'One record per place: the legal basis, the cost figures a source has published, and the questions still open. Open a record to read the whole of it.',
          count: '{n} records, sorted by region',
          open: 'Open the record',
          noCost: 'None published',
          insufficient: 'Not fully verified',
          thinNote:
            'A flagged record is one whose openable sources do not yet establish a usable position: {names}. It stays listed so that a name you have seen elsewhere is not simply missing.',
          thinJoin: ' and ',
          costNote: 'Every published figure, grouped by the cost line it covers: ',
          costLink: 'Cost figures by line',
          emptyTitle: 'Nothing published yet',
          emptyBody:
            'A destination appears here once a dated primary legal source supports its position. The list grows at the pace of that.',
        },
        factors: {
          heading: 'The four conditions, in order',
          intro:
            'Each one removes candidates faster than reading about it does, and each comes down to a single question you can put to a provider or to a lawyer.',
          items: [
            {
              q: 'Does the rule name a family like yours?',
              a: 'That surrogacy is permitted there and that you are eligible are two different things. Where a provision says who may commission, it usually turns on marital status, a genetic link to the child, or the make-up of the family. A country described as surrogacy-friendly has answered another question.',
              test:
                'Something a person can point at in the text of a rule is a rule. Something that comes from how many families like yours a provider has placed is practice.',
            },
            {
              q: 'Who is the legal parent at birth?',
              a: 'In some systems an intended parent is named at birth. In others the woman who gives birth is the legal mother whatever the agreement said, and parentage only moves afterwards through a court. That one difference decides whether your planning ends at the delivery room or starts there.',
              test:
                'Ask for the sequence: who is a parent on the day of birth, what application exists afterwards, who hears it, and how long a determination actually takes.',
            },
            {
              q: 'How far does the money go?',
              a: 'A destination outside your budget is not worth researching, but what decides feasibility is scope rather than the total: which stages a program includes, what may lawfully be paid to the carrier, what bills outside the quote, and what returns to you if the program stops.',
              test:
                'Two quotes forty per cent apart can contain the same medicine. Compare item lists before comparing headline figures.',
            },
            {
              q: 'Can you be where you are needed?',
              a: 'Signing before treatment, attending a court, collecting documents and staying after the birth are four separate requirements, and they usually come from clinic practice, the registrar and the court rather than from the statute. How much you can travel often settles the field before the budget does.',
              test:
                'Get the attendance schedule in writing from whoever handles each step, and say up front how many travel windows you have.',
            },
          ],
        },
        dimensions: {
          heading: 'The ten things a comparison has to cover',
          paraA:
            'Most families end up with a table of countries and one price column, and that column hides what actually decides feasibility: whether you can be named at birth, how many trips are required, and who holds the money while you wait. These are the ten fields every destination page here is written against.',
          paraB:
            'A field is filled where a source supports it and left open where one does not, with the unanswered question printed under the record.',
          link: 'How this site checks a source',
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
              q: 'Licensing and oversight',
              ask: 'Which body licenses the clinic, and what that license actually covers.',
            },
            {
              q: 'Attendance requirements',
              ask: 'Who must be present, for how long, and at which stages.',
            },
            {
              q: 'Source and check date',
              ask: 'Nothing in the column is left without a document behind it, dated.',
            },
          ],
        },
        models: {
          heading: 'Legal systems come in three shapes',
          intro: 'The shape a system has decides how much its name can tell you. Every sentence below is quoted from a record and carries its own citation.',
          cite: 'published {published}, read {verified}',
          items: [
            {
              name: 'Parentage is transferred after the birth',
              where: 'United Kingdom, and any system with a court route after delivery',
              plan:
                'Planning cannot finish at the delivery. There is an application, a hearing, and a period in which the child is legally someone else\'s.',
              points: [
                'The surrogate is the legal mother unless a parental order is obtained, a written arrangement is not legally binding, and payment is limited to her reasonable expenses.',
                'Paying more than reasonable expenses has to be authorised by the family court before a parental order can be made, and advertising for or as a surrogate is illegal under the Surrogacy Arrangements Act 1985.',
                'Intended parents wait until the child is born and then apply to court, which the Law Commission describes as typically taking six months to a year. Its reform proposals would keep arrangements unenforceable, and the draft Bill is not law.',
              ],
            },
            {
              name: 'Payment is regulated, parentage sits elsewhere',
              where: 'Canada, and any federal system that legislates on money but not on birth',
              plan:
                'A country can be lawful to enter and still not be where your parentage order comes from. Read the reimbursement rules and the provincial birth rules as two separate documents.',
              points: [
                'Expenditures a surrogate incurs in relation to her surrogacy may be reimbursed, under subsection 12(1) of the Assisted Human Reproduction Act and the regulations made under it.',
                'The regulator lists what counts as reimbursable: travel, childcare, counselling, legal fees, medications, maternity clothing, prenatal classes, delivery, insurance, and lost work-related income before and after birth, with receipts required and records kept for six years.',
              ],
            },
            {
              name: 'No single national rule; the state or province sets it',
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
          heading: 'Five questions that need written answers before a shortlist',
          intro:
            'A destination that cannot answer these in writing is not ready to sit beside another one.',
          items: [
            'Which provision says who may commission here, and where is it published?',
            'Who is the legal mother and the legal father at birth, before any order exists?',
            'What travel document does the child leave on, and which authority issues it?',
            'What may be paid or reimbursed to the carrier, and what needs a court or regulator to authorise it?',
            'Which stages require me in person, and what happens if I cannot attend one of them?',
          ],
          footnote:
            'The full checklist holds thirty-three questions across seven groups, each with room beside it for who answered and when.',
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
              body: 'Every question this page raises, collected in one file you can work through and keep.',
            },
            {
              label: 'Quote comparison',
              body: 'Put two programs into the same rows and read the difference line by line.',
            },
          ],
        },
        band: {
          heading: 'Bring what you have found to a consultation',
          body:
            'This site issues no legal opinion and represents no clinic or agency. What it does hold is the documents: bring your shortlist and any quote you already have, and the unclear parts turn into specific questions to put to a lawyer.',
          enquiry: 'Free consultation',
        },
        standard: {
          heading: 'What is inside a destination record',
          items: [
            'The legal basis: statute, case law, an assisted-reproduction act, or no single national rule.',
            'Who may commission, described as far as the sourced material goes.',
            'Each position with the document it came from, its publisher, and the date it was read.',
            'Payment rules stated as what the law permits, prohibits, or requires to be authorised.',
            'Parentage at birth and parentage afterwards, as two separate answers.',
            'The questions no source settled, including sources that would not open or sat behind a login.',
            'Every conclusion readable against its own document, so you are checking a source rather than accepting a finding.',
          ],
        },
        why: {
          heading: 'How to read a record',
          body:
            'Read the legal basis first, then who is a parent at birth, then the figures. The cost lines are grouped at the foot of a record, and a field no source reaches is left as it stands.',
          readTitle: 'Permitted is not the same as workable',
          readBody:
            'Eligibility, parentage, which court handles it, and what the child leaves the country on are four separate questions, and any one of them can fail alone.',
          link: 'Open the legal considerations guide',
        },
      },
    },
  },

  zh: {
    skipLink: '跳到主要内容',
    backToTop: '返回顶部',
    primaryNavLabel: '主导航',
    openNav: '打开导航',
    languageLabel: '语言',
    languageUnavailable: '该页面暂无此语言版本',
    breadcrumbLabel: '位置导航',
    home: '首页',
    brandAlt: 'SurrogacyBase 首页',
    undated: '无日期',
    notYetDated: '暂无日期',
    tagline: SITE.taglineZh,
    copyright: '© {year} {site}。内容为信息参考，不构成法律或医疗意见。',
    bylinePre: '本站由 ',
    bylinePost: ' 编写与维护。',
    disclaimerPre: '完整的免责声明见我们的',
    disclaimerTerms: '服务条款',
    disclaimerMid: '与',
    disclaimerStandards: '研究标准',
    disclaimerEnd: '。',
    siteDescription: '跨境代孕的独立指引：比较目的地，把费用拆成条目，厘清亲权与国籍，在付款之前核对报价。',
    nav: [
      { label: '专题解读', href: '/zh/articles' },
      { label: '目的地', href: '/zh/destinations' },
      { label: '工具', href: '/zh/tools' },
      { label: '指南', href: '/zh/guides' },
      { label: '关于我们', href: '/zh/about' },
    ],
    cta: { label: '免费咨询', href: '/zh#assessment' },
    enquiryDialog: {
      title: '免费咨询',
      subtitle: '留下手机号和一种联系方式。回信由顾问本人写，不转给任何诊所或机构。',
      close: '关闭',
    },
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
        ],
      },
      {
        heading: '标准',
        links: [
          { label: '我们如何做研究', href: '/zh/editorial-policy' },
          { label: '关于本站', href: '/zh/about' },
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
    admits: {
      heading: '这条路径向哪些家庭开放',
      intro: '这些条目与上面的法律立场出自同一份记录，每一条都点名写明它的那个来源。只有条文里写明的家庭类型才会印在这里。',
      notEstablished: '本页列出的来源没有就以下类型给出结论：{families}。',
      noneForRecord: '这份记录背后的来源都没有写明这条路径向哪些家庭类型开放，因此这里不为其中任何一类给出答案。',
      join: '、',
      family: {
        married: '已婚伴侣',
        cohabiting: '共同生活的伴侣',
        single: '单身个人',
        maleCouple: '两位男性作为意向父母',
        femaleCouple: '两位女性作为意向父母',
        international: '居住在国外的意向父母',
      },
      status: { open: '允许', closed: '不允许', conditional: '允许，但有条件' },
      cell: { open: '允许', closed: '不允许', conditional: '有条件', none: '尚无结论' },
      note: {
        'cohabit-one-year': '同一条规则也覆盖共同生活至少一年的男女。',
        'citizen-only': '仅有婚姻并不足够：这条规则同时写明哈萨克斯坦国籍。',
        'bill-pending': '2026 年 8 月提交的一份法案会把外国意向父母从这条路径上移除，它尚未通过。',
        'residence-required': '意向父母双方与分娩的女性都必须持有希腊的永久居留。',
        'genetic-link': '至少一位申请人必须与孩子存在基因关系。',
      },
      matrix: {
        heading: '各个目的地允许哪些家庭',
        intro: '横着读一行是一个目的地，竖着读一列是一类家庭。写着「尚无结论」，说的是本站来源查到多少，不是那个目的地本身。',
        caption: '各目的地允许的家庭类型，以这里列出的来源所能确定为限',
        destination: '目的地',
        legend: '带标记的格子背后的条件，以及它出自哪一份记录',
      },
    },
    costs: {
      heading: '本目的地已公布的费用数据',
      intro:
        '下面每一项费用数据都由具名来源公布，沿用该来源的币种，并注明数据对应的年份。它是附有引证的公开数据，不是报价；公布该数据的来源就链接在这一行。',
      none:
        '这里没有已公布的费用数据。上面的付款立场写明了该目的地规则允许支付什么，下面的问题列出了来源无法回答的内容。',
      table: '费用数据',
      tableNone: '未公布',
      columns: { item: '费用条目', figure: '金额', source: '公布来源' },
      asOfYear: '数据年份',
      asOf: '{year} 年数据',
      items: {
        medical: '医疗环节',
        legal: '法律环节',
        recruiting: '招募代孕者',
        carrier: '支付给代孕者',
        total: '整个流程',
      },
      shapes: {
        range: '{a} 至 {b} {c}',
        ceiling: '不超过 {b} {c}',
        floor: '{a} {c}以上',
        single: '{a} {c}',
      },
      currency: { USD: '美元', GBP: '英镑', EUR: '欧元', CAD: '加元', COP: '哥伦比亚比索' },
    },
    content: {
      keepReading: '继续阅读',
      keepReadingNote: '这些页面各自讲的是同一个决定的另一部分。',
      workingList: '把这一页变成一份可执行的清单',
      reviewedBy: '由 {name}（{role}）审阅。',
      reviewedByTeam: '由 {board} 审阅。',
      credential: '公开资历',
    },
    pages: {
      guides: {
        title: '指南',
        titleTag: '代孕指南：法律、费用与流程',
        description: '关于代孕法律、流程、费用、机构选择与带孩子回国的指南，每一条结论都能追溯到您可以打开的来源。',
        intro: '一份指南讲清一件事，从第一个问题讲到最后一步。',
        countOne: '已发布 1 篇指南',
        countMany: '已发布 {n} 篇指南',
        startHeading: '从哪里开始',
        startIntro: '每条路径按问题出现的先后排列。您也可以直接看全部篇目。',
        paths: [
          {
            title: '法律与文件',
            body: '四个法律问题，以及孩子回国要办的文件。',
          },
          {
            title: '流程与谁来孕育',
            body: '方案要经过哪些阶段，卵子、精子和怀孕分别由谁提供。',
          },
          {
            title: '费用与机构',
            body: '预算怎么搭、报价漏了什么、签约前该问什么。',
          },
        ],
        howHeading: '一篇指南是怎么搭起来的',
        howIntro: '指南是用起来的，不只是读一遍。每一篇都给您留下三样东西。',
        howPoints: [
          {
            title: '把决定从头讲到尾',
            body: '从所在领域的第一个选择，一路讲到收尾时要用到的文件或对话。',
          },
          {
            title: '结论旁边就是来源',
            body: '写到事实的地方，旁边就是来源和最近一次核对的日期。',
          },
          {
            title: '读完能接着做下一步',
            body: '每篇指南末尾都接上更深的专题解读，和可以直接填写的工具。',
          },
        ],
        standardsLink: '来源如何核查',
        explainerHeading: '一次只回答一个问题',
        explainerBody: '专题解读只回答指南里的某一个具体问题，并写明它的来源。',
        explainerLink: '阅读专题解读',
        toolsHeading: '把指南变成手上的文件',
        toolsBody: '这些工具把指南里的问题变成一张表，您可以带去见律师、诊所或机构。',
        toolsLink: '打开工具',
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
        titleTag: '代孕专题解读：每篇回答一个问题',
        description: '关于代孕费用、目的地、机构选择、流程与准备的专题解读，每一篇为意向父母回答一个问题。',
        intro:
          '每一篇只回答一个问题：费用、目的地、法律，或孩子出生后需要的证件，并写明它依据的来源。',
        startHeading: '从眼前的决定开始',
        startIntro: '不必从头读到尾。选一个您现在最需要回答的问题。',
        paths: [
          {
            title: '正在做预算',
            body: '为什么不存在平均费用，报价漏掉了什么，钱怎么走。',
          },
          {
            title: '正在挑目的地',
            body: '法律必须回答的问题，孩子要办的文件，以及决定亲权的期限。',
          },
          {
            title: '准备签约',
            body: '第一次移植前必须有哪些书面文件，每笔钱在什么条件下支付。',
          },
          {
            title: '正在看成功率',
            body: '美国最大规模的移植研究统计的是什么，适用于哪些人。',
          },
        ],
        allHeading: '全部专题解读',
        standardsLink: '来源如何核查',
        guidesHeading: '指南',
        emptyTitle: '尚无已发布的专题解读',
        emptyBody: '每一条结论都有您可以打开的来源之后，专题解读才会发布在这里。',
        emptyAction: '阅读研究标准',
      },
      detail: {
        destinationConditions: '目的地条件',
        destinationConditionsNote: '核对法律实际写了什么。',
      },
      jurisdiction: {
        title: '{name}代孕：法律实际写了什么',
        description: '关于{name}（{region}）代孕的四项已核实立场：法律基础、谁可以委托、付款规则与亲权，每一条都附上来源与核查日期。',
        heading: '{name}的代孕法律',
        intro: '每项立场都标着它的来源和最近一次核对的日期。规则取决于您的个人情况时，页面直接写明，不做猜测。',
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
        compareBoard: '并排对比目的地',
        documentsGuide: '孩子出生后的证件',
        costFiguresLink: '查看全部已公布的费用数据',
        breadcrumb: '目的地',
      },
      destinations: {
        title: '代孕目的地',
        titleTag: '代孕目的地：比较法律与费用',
        description: '按资格、出生时的亲权、付款规则、费用范围与到场要求比较代孕目的地，每一条法律立场都附有来源与日期。',
        breadcrumb: '目的地',
        eyebrow: '已核实的目的地记录',
        h1: '哪些代孕目的地适合您的情况？',
        lede: '一个目的地能不能走，看四件事：条文有没有写明您这样的家庭、出生时谁是法律父母、钱覆盖到哪一步、要不要本人到场。本页按这四项比较八个法律体系。',
        notice: '代孕法律各国不同；在联邦国家，州与省之间也不同。它还分别看婚姻状况、孩子与您是否有基因关系、以及国籍和居住地，这几项是各自独立的检验。以下内容不构成针对您个人情况的法律意见：一个国家允许代孕，并不等于您可以走这条路，也不等于您住的国家会承认这次出生的结果。',
        ctaPick: '阅读这些记录',
        ctaFactors: '四个条件',
        ctaCompare: '并排对比候选目的地',
        stats: {
          recorded: '目的地记录',
          sourced: '附有出处的立场',
          lastCheck: '最近一次核查',
        },
        picker: {
          heading: '选择目的地',
          intro: '一个地方一条记录：法律依据、来源公布过的费用数据、以及还没有结论的问题。点开看全部。',
          count: '{n} 条记录，按地区排列',
          open: '打开记录',
          noCost: '未公布',
          insufficient: '尚未核实完整',
          thinNote: '有些记录带着这个标记，因为能打开的来源还支撑不了一个可用的结论：{names}。它们仍留在列表里，您在别处见过的名字不该在这里连一句交代都没有。',
          thinJoin: '、',
          costNote: '全部已公布数据按费用条目归类：',
          costLink: '按条目查看全部费用数据',
          emptyTitle: '尚无已核实的内容',
          emptyBody: '一个目的地要先有一份带日期的一手法律来源支持它的立场，才会出现在这里。名单就按文件出现的速度增长。',
        },
        factors: {
          heading: '四个条件，按它们生效的顺序',
          intro: '每一条都比阅读介绍更快地排除地点，也都能落到一个问题上，那个问题可以拿去问机构，也可以拿去问律师。',
          items: [
            {
              q: '条文里点名了您这样的家庭吗？',
              a: '一个地方允许代孕，和您有资格委托，是两件事。凡是写明谁可以委托的规定，通常卡在婚姻状况、与孩子是否有基因关系、或者家庭构成上。被称作「对代孕友好」的国家，回答的不是这个问题。',
              test: '有人能指着条文里的某一句，那是规则。答案来自某家机构经手过多少个类似的家庭，那是惯例。',
            },
            {
              q: '孩子在出生时的法律父母是谁？',
              a: '有的体系在出生时就把意向父母写进去。有的体系里，分娩的女性无论协议写了什么都是法律上的母亲，亲权只能事后经法院转移。只这一项差别，就决定您的规划在孩子出生时结束，还是从那里才开始。',
              test: '要求对方给出顺序：出生当天谁是父母、之后存在哪一种申请、由谁审理、一项裁定实际要多久。',
            },
            {
              q: '钱能覆盖到哪一步？',
              a: '超出预算的目的地不值得研究，但决定可行性的是范围而不是总额：一个疗程包含哪些阶段、法律允许向代孕者支付什么、哪些账单在报价之外另行计费、以及疗程中止时有什么会退回给您。',
              test: '两份相差四成的报价，里面的医疗项目可能完全一样。先比条目，再比总额。',
            },
            {
              q: '需要您到场的时候，您到得了吗？',
              a: '治疗前签字、出庭、领取文件、孩子出生后停留，是分开的四项要求，而且它们多来自诊所惯例、登记处和法院，不是来自法条。能飞多少趟，往往比预算更快地缩小范围。',
              test: '让负责每一步的人把到场时间表写成书面交给您，并先说清您有几个可行的出行窗口。',
            },
          ],
        },
        dimensions: {
          heading: '比较一个目的地要覆盖的十项',
          paraA: '多数家庭最后拿到的是一张国家对照表加一列价格，而正是这一列价格藏住了决定可行性的东西：您能不能在出生时被写进父母栏、要飞几趟、以及等待期间钱由谁保管。下面十项，是这里每一份目的地记录都对着写的。',
          paraB: '有来源支持的项目就填上，没有的就留着，未回答的问题印在那条记录下面。',
          link: '本站如何核查一份来源',
          items: [
            { q: '当地法律框架', ask: '成文法、法院判决、一部辅助生殖法，还是各州各异的拼贴？' },
            { q: '谁可以委托', ask: '规则点名了哪些意向父母，以及是否要求基因联系。' },
            { q: '国籍与居住', ask: '规则管的是公民、居民，还是任何前往当地的人。' },
            { q: '出生时的法律亲权', ask: '在任何裁定存在之前，法律把谁视为母亲、把谁视为父亲。' },
            { q: '出生之后的程序', ask: '申请、受理它的法院或登记机关，以及实际所需的时间。' },
            { q: '孩子的国籍与文件', ask: '孩子取得什么国籍，以及凭借什么文件离开该国。' },
            { q: '付款规则', ask: '可以支付什么、付给谁、金额如何，以及必须由谁批准。' },
            { q: '牌照与监管', ask: '由哪个机构给诊所发牌，那张牌照实际覆盖什么。' },
            { q: '到场要求', ask: '谁必须出席、出席多久、在哪些阶段。' },
            { q: '来源与核查日期', ask: '这十项里任何一句，背后都得有一份带日期的文件。' },
          ],
        },
        models: {
          heading: '法律体系有三种形态',
          intro: '一个地方属于哪种形态，决定它的名字能告诉您多少。下面每一句都摘自一条记录，出处与阅读它的日期就标在句子旁边。',
          cite: '发布于 {published}，阅读于 {verified}',
          items: [
            {
              name: '亲权在出生之后才转移',
              where: '英国，以及任何分娩后需要走法院路径的体系',
              plan: '规划没办法在分娩那一刻收尾：之后还有一份申请、一次庭审，以及一段孩子在法律上属于别人的等待期。',
              points: [
                '除非取得亲权令，分娩的女性就是法律上的母亲；书面安排不具法律约束力；付款以她的合理开支为限。',
                '支付超过合理开支的部分，必须在作出亲权令之前经家事法院批准；依《1985 年代孕安排法》，为代孕刊登广告或以代孕者身份刊登广告均属违法。',
                '意向父母要等孩子出生之后才向法院申请，法律委员会把这一步通常所需的时间描述为六个月到一年。它的改革建议仍会让安排不具可执行性，而草案法案目前还不是法律。',
              ],
            },
            {
              name: '付款受监管，亲权在别处决定',
              where: '加拿大，以及联邦层面只管钱、不管出生的体系',
              plan: '一个国家可以合法进入，却未必是您的亲权裁定的出处。报销规则和省级出生规则要当作两份分开的文件来读。',
              points: [
                '依《辅助生育法》第 12(1) 条及据其制定的条例，代孕母亲因该代孕安排发生的开支可以被报销。',
                '监管机构列出的可报销项目包括交通、托育、辅导、律师费、药物、孕妇装、产前课程、分娩、保险，以及孕前与产后期间损失的工作收入；需要保留票据，记录保存六年。',
              ],
            },
            {
              name: '规则不在全国层面，由州或省来定',
              where: '美国，以及任何规则由州、省一级决定的国家',
              plan: '国家名几乎说明不了什么。规则由州、省或地区制定，而您居住地的承认问题，是在这之上再加一整套法律体系。',
              points: [
                '各州对代孕是否允许、以及如何监管各有自己的法律；不存在联邦框架。',
                '在我们阅读的这项调查里，21 个州以成文法明确允许妊娠代孕，另有若干州既没有允许也没有禁止的成文法或公开判例。',
                '印第安纳州与内布拉斯加州的妊娠代孕合同不可强制执行且违背公共政策；亚利桑那州居民被禁止订立此类合同。',
              ],
            },
          ],
        },
        questions: {
          heading: '列进候选之前，要拿到书面答案的五个问题',
          intro: '一个目的地如果给不出书面答案，就还没准备好与另一个放在一起比较。',
          items: [
            '哪一条规定写明此处谁可以委托，它发表在哪里？',
            '在任何裁定存在之前，出生时的法律母亲和法律父亲分别是谁？',
            '孩子凭哪种旅行文件离开该国，由哪个机关签发？',
            '可以向代孕者支付或报销什么，是否有事项需要法院或监管机构批准？',
            '哪些阶段必须我本人到场，如果我到不了会怎样？',
          ],
          footnote: '完整清单共有七组三十三个问题，每个问题旁边都留了位置，写下是谁、在哪一天回答的。',
          cta: '打开完整清单',
        },
        next: {
          heading: '接下来去哪里',
          items: [
            {
              label: '法律与亲权',
              body: '可执行性、出生时的亲权、资格、可以支付什么、您居住地的承认问题，按这个顺序处理。',
            },
            { label: '费用指南', body: '一份预算由什么构成、报价通常不涵盖什么，以及钱实际是怎么流转的。' },
            { label: '研究清单', body: '这一页提出的问题，集中在一份可以逐条填写、也能留下的清单里。' },
            { label: '报价对比', body: '把两个疗程填进同样的行里，一行一行读差别。' },
          ],
        },
        band: {
          heading: '把手上的材料带去咨询',
          body: '本站不出具法律意见，也不代表任何诊所或机构。这里有的是文件本身：把您的候选名单和已经拿到的报价带来，含糊的部分就变成可以具体问律师的问题。',
          enquiry: '免费咨询',
        },
        standard: {
          heading: '一条目的地记录里有什么',
          items: [
            '法律基础：成文法、法院判决、一部辅助生殖法，还是没有全国统一规则。',
            '谁可以委托，按已核实材料所能达到的范围描述。',
            '每一项立场都附上它出自哪份文件、由谁发布，以及它的阅读日期。',
            '付款规则按法律允许什么、禁止什么、要求谁批准来写，不写成机构通常怎么做。',
            '出生时的亲权与出生之后的亲权，作为两个分开的答案记录。',
            '还没有结论的问题，包括打不开、或需要登录才能看到的来源。',
            '每一条结论都可以对着它自己的文件读，您核对的是一份来源，不是接受一个说法。',
          ],
        },
        why: {
          heading: '怎么读一条记录',
          body: '先看法条基础那一行，再看出生时谁是父母，然后才看数字。费用条目按类别列在记录底部，来源到不了的地方就留在那里。',
          readTitle: '允许，不等于对您可行',
          readBody: '资格、亲权、由哪个法院处理、孩子凭什么文件离开，是四个各自独立的问题，任何一个单独都可能不成立。',
          link: '打开《代孕的法律考量》指南',
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

