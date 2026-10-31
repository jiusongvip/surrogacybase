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
  /** The single content type, spelled the way a card or a byline row shows it. */
  kinds: { guide: string };
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
    articles: {
      title: string;
      titleTag: string;
      description: string;
      intro: string;
      startHeading: string;
      startIntro: string;
      /**
       * The four ways in, each paired by position with the article refs in ArticlesIndex. The
       * titles name the situation the reader is in, not the subject, because a reader who is
       * already looking for a subject has the grouped list further down the page.
       */
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
      /**
       * The four cells printed above the prose. Each is read off a structured field of the record
       * rather than written by hand, so the strip cannot say something the record below does not
       * say, and a reader deciding whether to keep reading gets the answer before the argument.
       */
      atGlance: { basis: string; international: string; families: string; cost: string; noCost: string };
      /** The one-line qualifier under the family cell when the record admits nobody. */
      atGlanceNone: string;
      timelineTitle: string;
      timelineIntro: string;
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
      /**
       * The "related reading" block at the foot of a country page. It surfaces the articles whose
       * jurisdictions field names this record's code, so a reader who came for the country also sees
       * the deeper pieces scoped to it. Empty for a record no article is scoped to, so the block is
       * simply not printed rather than shown empty.
       */
      relatedTitle: string;
      relatedIntro: string;
      /**
       * The legality map shown at the top of a country page whose rules are set below the national
       * level (a federation, or a country of separate legal systems). Rendered only when the record
       * carries subJurisdictions; for every other record the country page simply does not show it,
       * so no destination is invented to fill the space.
       */
      legalMap: {
        title: string;
        intro: string;
        permittedLabel: string;
        restrictedLabel: string;
        prohibitedLabel: string;
        unlegislatedLabel: string;
        unlegislatedNote: string;
      };
      /**
       * Full-guide sections that sit between the sourced legal core and the sources list. They are
       * generic across destinations (the legal/data above is the country-specific part) and each
       * links through to the matching guide, so the page reads as one guide without duplicating the
       * guide prose. The FAQ is a fixed-length tuple so the two dictionaries cannot drift.
       */
      guide: {
        processHeading: string;
        processIntro: string;
        processLink: string;
        /** The nine stages, generic across destinations. The skeleton sits on the page; the detail
         * lives in the process guide. A fixed-length tuple so the two dictionaries cannot drift. */
        processStages: [
          { title: string; blurb: string },
          { title: string; blurb: string },
          { title: string; blurb: string },
          { title: string; blurb: string },
          { title: string; blurb: string },
          { title: string; blurb: string },
          { title: string; blurb: string },
          { title: string; blurb: string },
          { title: string; blurb: string },
        ];
        contractHeading: string;
        contractIntro: string;
        contractLink: string;
        agencyHeading: string;
        agencyIntro: string;
        agencyLink: string;
        faqHeading: string;
        faq: [
          { q: string; a: string },
          { q: string; a: string },
          { q: string; a: string },
          { q: string; a: string },
          { q: string; a: string },
          { q: string; a: string },
          { q: string; a: string },
        ];
      };
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
    disclaimerTerms: 'terms of use',
    disclaimerMid: ' and ',
    disclaimerStandards: 'editorial policy',
    disclaimerEnd: '.',
    siteDescription: SITE.description,
    nav: [
      { label: 'Guides', href: '/guides' },
      { label: 'Destinations', href: '/destinations' },
      { label: 'Tools', href: '/tools' },
      { label: 'About us', href: '/about' },
    ],
    cta: { label: 'Talk to an advisor', href: '/#assessment' },
    enquiryDialog: {
      title: 'Talk to an advisor',
      subtitle: 'It is free, and what happens next is your call. Leave a mobile number and one way to reach you; an advisor replies, and no clinic or agency sees it.',
      close: 'Close',
    },
    footerGroups: [
      {
        heading: 'Explore',
        links: [
          { label: 'Home', href: '/' },
          { label: 'Destinations', href: '/destinations' },
          { label: 'Services', href: '/#services' },
        ],
      },
      {
        heading: 'Guides',
        links: [
          { label: 'All guides', href: '/guides' },
          { label: 'Cost guide', href: '/guides/surrogacy-cost' },
          { label: 'Law and parentage', href: '/guides/surrogacy-legal-considerations' },
          { label: 'Tools', href: '/tools' },
        ],
      },
      {
        heading: 'About',
        links: [
          { label: 'About us', href: '/about' },
          { label: 'Contact us', href: '/about#contact' },
          { label: 'Editorial policy', href: '/editorial-policy' },
        ],
      },
      {
        heading: 'Legal',
        links: [
          { label: 'Privacy policy', href: '/privacy' },
          { label: 'Terms of use', href: '/terms' },
        ],
      },
    ],
    kinds: { guide: 'Guide' },
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
      note: 'Every entry names the sentence above it that it supports. Open the link to read the source yourself.',
      published: ', published {date}',
      checked: ' · checked {date}',
      supports: 'Supports: {text}',
    },
    evidence: {
      frameworkHeading: 'What is set out here is a method, not a finding',
      frameworkBody:
        'These questions are settled by your own case: a lawyer reading your facts, a clinic stating what it actually does, a contract putting it in writing.',
      draftHeading: 'Still being researched',
      draftBody:
        'The claims here have not yet been checked against a source you can open, so they are not published as findings.',
      listedOne: '1 source listed',
      listedMany: '{n} sources listed',
      verifiedBody: 'Every factual claim here traces to one of the entries in the source list below.',
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
      notEstablished: 'No source listed above settles the position for: {families}.',
      noneForRecord:
        'None of the sources behind this record states which family types may use this route, so no answer is claimed here for any of them.',
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
      articles: {
        title: 'Guides',
        titleTag: 'Surrogacy Guides: Law, Cost and Process',
        description:
          'Guides and explainers on surrogacy law, cost, destinations, agency selection, process and preparation, each written to one standard and citing a source you can open.',
        intro:
          'Every piece answers a question you actually face, from eligibility and cost to choosing an agency, the process and the paperwork a child needs, and names the source behind its answer.',
        startHeading: 'Start with the decision in front of you',
        startIntro: 'You do not have to read these in order. Pick the question you need answered now.',
        paths: [
          {
            title: 'You are building a budget',
            body: 'Why no average exists, what a quote leaves out, how the money moves, and what a guarantee actually covers.',
          },
          {
            title: 'You are choosing a destination',
            body: 'The questions a legal system has to answer, the paperwork your child needs, and the deadlines around it.',
          },
          {
            title: 'You are choosing who does the work',
            body: 'Agency, clinic and carrier are three different decisions: what a profile leaves out, and what has to be signed before the first transfer.',
          },
          {
            title: 'You are weighing the odds',
            body: 'How a clinic reports a success rate, what the largest US transfer study counts, and what a failed cycle changes.',
          },
        ],
        allHeading: 'All guides',
        standardsLink: 'How sources are checked',
        emptyTitle: 'No guides published yet',
        emptyBody:
          'A guide is published once every claim in it has been checked against a named source. They appear one at a time.',
        emptyAction: 'Read the research standards',
      },
      detail: {
        destinationConditions: 'Destination conditions',
        destinationConditionsNote: 'Compare what the law actually says.',
      },
      jurisdiction: {
        title: 'Surrogacy in {name}: a complete guide',
        description:
          'A complete surrogacy guide for {name}: legal basis, the process, costs, contracts and how parentage is set. Every position carries its source and check date.',
        heading: 'Surrogacy in {name}: the complete guide to law, process, cost and contract',
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
        atGlance: {
          basis: 'Legal basis',
          international: 'Intended parents from abroad',
          families: 'Families the route names',
          cost: 'Published cost',
          noCost: 'None published',
        },
        atGlanceNone: 'No family type is named',
        timelineTitle: 'What changed, and when',
        timelineIntro:
          'Dates come from the same sources as the positions below. An entry that says a bill was not adopted is there because the record would be misleading without it.',
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
        relatedTitle: 'Related reading for {name}',
        relatedIntro: 'Articles that focus on {name} and the questions people ask about going there.',
        legalMap: {
          title: 'Where surrogacy is legal',
          intro: 'This jurisdiction sets the rules below the national level, so whether surrogacy is open depends on where you go. The states named here are taken from the same sources as the positions below.',
          permittedLabel: 'Expressly permitted by statute',
          restrictedLabel: 'Restricted or unenforceable',
          prohibitedLabel: 'Prohibited',
          unlegislatedLabel: 'No specific statute or case law',
          unlegislatedNote:
            'The remaining states and territories have no statute or published case law that this record found specifically permitting or prohibiting surrogacy. Each still has to be checked on its own before any plan is made.',
        },
        guide: {
          processHeading: 'The process, stage by stage',
          processIntro:
            'A surrogacy programme is a run of separate stages, not one decision. The order shifts with the destination and with whether you need donated eggs or sperm. The full walkthrough, with the questions each stage raises:',
          processLink: 'Read the full process guide',
          processStages: [
            {
              title: 'Set out your own situation',
              blurb:
                'Your medical, legal and financial facts come first, because they decide which destinations are open to you at all.',
            },
            {
              title: 'Choose a destination before a clinic',
              blurb:
                'The place is chosen on legal grounds, before any money moves. The legal-considerations guide lists what to confirm.',
            },
            {
              title: 'Screening, both ways',
              blurb:
                'Your fertility work-up and the carrier’s medical and psychological screening. FIGO’s position is that psychological screening and ongoing support should be mandatory.',
            },
            {
              title: 'Matching',
              blurb:
                'How a programme pairs you with a carrier is where marketed and delivered service differ most. Ask in writing what happens if a match is not reached.',
            },
            {
              title: 'The agreement, and the money behind it',
              blurb:
                'Before treatment, the arrangement is set down in writing and should carry the funds, not just point at them. Escrow is usually funded before the first transfer.',
            },
            {
              title: 'Treatment and transfer',
              blurb:
                'Medication and monitoring, then the embryo transfer. From here the timeline is no longer yours: clinic schedule and the carrier’s cycle decide.',
            },
            {
              title: 'Pregnancy',
              blurb:
                'Prenatal care is the obstetrician’s. What you pay for, and who decides, are contract questions that should already be settled.',
            },
            {
              title: 'Birth and parentage',
              blurb:
                'The parentage path decides what happens in the delivery room and after. Only a lawyer in that jurisdiction can say which path applies to you.',
            },
            {
              title: 'Bringing the child home',
              blurb:
                'Registration, passport or consular documents, and whatever your home country requires. Cross-border parents are not rare: a third of US surrogate transfers involved them.',
            },
          ],
          contractHeading: 'The contract is the legal core',
          contractIntro:
            'Before any treatment begins, the arrangement should be written down and should carry the money, not merely point at it. What every contract must cover, and the clauses worth insisting on:',
          contractLink: 'Read the legal-considerations guide',
          agencyHeading: 'Choosing an agency',
          agencyIntro:
            'The agency is the one party whose incentives are not yours by default. We do not name agencies on this site: what follows is how to ask, and how to judge whether an agency is sound, before you sign.',
          agencyLink: 'Read the agency-evaluation guide',
          faqHeading: 'Questions people ask',
          faq: [
            {
              q: 'Is surrogacy legal everywhere?',
              a: 'No. It ranges from explicitly permitted to prohibited, and within federal countries it varies by state or province. The legal basis for each destination is set out at the top of this page, with its source and the date it was checked.',
            },
            {
              q: 'Can intended parents from another country use this route?',
              a: 'It depends on the destination. The "intended parents from abroad" cell in the summary strip above says whether the sources behind this record admit foreign commissioning parents, and the admissions section below names the family types each rule opens to.',
            },
            {
              q: 'When is parentage settled?',
              a: 'That is the single biggest planning difference between systems. Some name an intended parent at birth; others treat the woman who gives birth as the legal mother until a court moves parentage afterwards. Which one applies to you only a lawyer in that jurisdiction can say.',
            },
            {
              q: 'What does the price usually include?',
              a: 'A programme price is built from several lines, and scope matters more than the headline total. The figures a source has published for this destination are in the cost table above, and the full breakdown of what a quote usually leaves out is in the cost guide.',
            },
            {
              q: 'Do I have to travel there myself?',
              a: 'Usually, yes, at least for some steps. Signing before treatment, attending a court or registrar, collecting documents and staying after the birth are separate requirements that often come from clinic practice and the court rather than the statute. How many trips you can make often narrows the field before cost does.',
            },
            {
              q: 'Is there an average surrogacy cost?',
              a: 'No single figure applies. The total depends on the destination, on what the programme includes, and on what a quote leaves out, so an average would hide the differences that decide whether a plan is feasible. The per-line figures on this page and the cost guide show why.',
            },
            {
              q: 'How does the child come home?',
              a: 'Birth registration, a passport or consular documents, and whatever your home country requires to recognise the arrangement. The steps differ by where the child is born and where you live, and the documents guide walks through them.',
            },
          ],
        },
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
          'Four conditions decide whether a destination works: whether the rule names a family like yours, who is a legal parent at birth, what the money covers, and whether you have to attend in person. The records here set those four out for eight legal systems.',
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
              body: 'Every question raised above, collected in one file you can work through and keep.',
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
          enquiry: 'Talk to an advisor',
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
    disclaimerPre: '完整的免责声明见',
    disclaimerTerms: '使用条款',
    disclaimerMid: '与',
    disclaimerStandards: '编辑方针',
    disclaimerEnd: '。',
    siteDescription: '跨境代孕的独立指引：比较目的地，把费用拆成条目，厘清亲权与国籍，在付款之前核对报价。',
    nav: [
      { label: '指南', href: '/zh/guides' },
      { label: '全球代孕国家', href: '/zh/destinations' },
      { label: '工具', href: '/zh/tools' },
      { label: '关于我们', href: '/zh/about' },
    ],
    cta: { label: '找顾问聊聊', href: '/zh#assessment' },
    enquiryDialog: {
      title: '找顾问聊聊',
      subtitle: '免费的，之后要不要继续由您决定。留一个手机号和一种能联系到您的方式，回复由顾问本人写，不转给任何诊所或机构。',
      close: '关闭',
    },
    footerGroups: [
      {
        heading: '探索',
        links: [
          { label: '首页', href: '/zh' },
          { label: '全球代孕国家', href: '/zh/destinations' },
          { label: '服务', href: '/zh#services' },
        ],
      },
      {
        heading: '指南',
        links: [
          { label: '全部指南', href: '/zh/guides' },
          { label: '费用指南', href: '/zh/guides/surrogacy-cost' },
          { label: '法律与亲权', href: '/zh/guides/surrogacy-legal-considerations' },
          { label: '工具', href: '/zh/tools' },
        ],
      },
      {
        heading: '关于',
        links: [
          { label: '关于我们', href: '/zh/about' },
          { label: '联系我们', href: '/zh/about#contact' },
          { label: '编辑方针', href: '/zh/editorial-policy' },
        ],
      },
      {
        heading: '法律',
        links: [
          { label: '隐私政策', href: '/zh/privacy' },
          { label: '使用条款', href: '/zh/terms' },
        ],
      },
    ],
    kinds: { guide: '指南' },
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
      note: '每条来源均标明其所支撑的正文结论，点开链接即可自行核对。',
      published: '，发布于 {date}',
      checked: '，核查于 {date}',
      supports: '支撑的结论：{text}',
    },
    evidence: {
      frameworkHeading: '这里给出的是方法，不是结论',
      frameworkBody: '上述问题取决于您自身的情形：由律师审阅您的事实、由诊所说明其实际做法、由合同将其落于书面。',
      draftHeading: '仍在研究中',
      draftBody: '这里的结论还没有对照过您可以打开的来源，因此不作为结论发布。',
      listedOne: '已列出 1 条来源',
      listedMany: '已列出 {n} 条来源',
      verifiedBody: '这里的每一条事实性结论，都对得上文末来源列表中的某一条。',
      nextDue: '下次核查时间：{date}。',
    },
    table: {
      caption: '按目的地整理的已核查代孕规则，以及每一条立场的核查日期',
      destination: '目的地',
      legalBasis: '法律基础',
      payment: '费用模式',
      checked: '核查日期',
      insufficient: '可核实的材料不足，无法作为目的地推荐',
    },
    admits: {
      heading: '这条路径向哪些家庭开放',
      intro: '上述条目与其上的法律立场出自同一份记录，每一条均点名载明其来源。仅条文写明的家庭类型会列于此处。',
      notEstablished: '上面列出的来源没有就以下类型给出结论：{families}。',
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
        'bill-pending': '2026 年 8 月提交的一份法案拟将外国意向父母自该路径移除，尚未通过。',
        'residence-required': '意向父母双方与分娩的女性都必须持有希腊的永久居留。',
        'genetic-link': '至少一位申请人必须与孩子存在基因关系。',
      },
      matrix: {
        heading: '各个目的地允许哪些家庭',
        intro: '横向的一行为一个目的地，纵向的一列为一类家庭。标注「尚无结论」表明的是本站来源已核实的范围，而非该目的地本身。',
        caption: '各目的地允许的家庭类型，以本处所列来源所能确定为限',
        destination: '目的地',
        legend: '标记单元格所对应的条件，及其出自哪一份记录',
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
      keepReadingNote: '以下页面各自涉及同一项决定的另一个部分。',
      workingList: '将上述内容转化为一份可执行的清单',
      reviewedBy: '由 {name}（{role}）审阅。',
      reviewedByTeam: '由 {board} 审阅。',
      credential: '公开资历',
    },
    pages: {
      articles: {
        title: '指南',
        titleTag: '代孕指南：法律、费用、流程与解读',
        description: '关于代孕法律、费用、目的地、机构选择、流程与准备的指南与解读，均按同一标准撰写，并附上可开启的来源。',
        intro:
          '每篇都只回答一个您实际会遇到的问题：资格、费用、机构选择、流程，以及孩子出生后所需的证件，并写明其所依据的来源。',
        startHeading: '从眼前的决定开始',
        startIntro: '无须自第一篇读至末篇。请择取您当前最需要回答的一个问题。',
        paths: [
          {
            title: '正在编制预算',
            body: '为何不存在平均费用、报价通常不含哪些项目、资金如何流转，以及保障条款实际覆盖什么。',
          },
          {
            title: '正在选择目的地',
            body: '法律必须回答的问题，孩子须办理的证件，以及决定亲权的期限。',
          },
          {
            title: '正在选择由谁来办',
            body: '机构、诊所与代孕者是三个彼此独立的决定：简介不会告诉您什么，第一次移植前必须写明什么。',
          },
          {
            title: '正在掂量成功的可能',
            body: '诊所如何报告成功率、美国规模最大的移植研究统计了什么，以及周期失败会改变什么。',
          },
        ],
        allHeading: '全部指南',
        standardsLink: '来源如何核查',
        emptyTitle: '尚无已发布的指南',
        emptyBody: '仅在每一条结论均具备您可查阅的来源之后，指南方发布于此处。',
        emptyAction: '阅读研究标准',
      },
      detail: {
        destinationConditions: '目的地条件',
        destinationConditionsNote: '核对法律实际写了什么。',
      },
      jurisdiction: {
        title: '{name}代孕全攻略',
        description: '关于{name}代孕的完整攻略：法律基础、流程、费用、合同要点，以及亲权如何确定。每一项立场都附上来源与核查日期。',
        heading: '{name}代孕全攻略：法律、流程、费用与合同要点',
        intro: '每项立场都标着它的来源和最近一次核对的日期。规则取决于您的个人情况时，页面会直接写明这一点，而不是替您猜一个。',
        checked: '立场核查于 {date}',
        insufficient: '关于{name}，可核实的公开资料不足以将其作为可行目的地呈现。请将本记录作为问题清单阅读，并在作出任何计划之前交由当地有资格的律师处理。',
        positions: {
          legalBasis: '法律基础',
          whoMayCommission: '谁可以委托',
          payment: '付款',
          parentage: '亲权',
        },
        atGlance: {
          basis: '法律基础',
          international: '境外准父母',
          families: '条文写明的家庭',
          cost: '已公布费用',
          noCost: '未公布',
        },
        atGlanceNone: '未写明任何家庭类型',
        timelineTitle: '变了什么，什么时候变的',
        timelineIntro: '日期与下方的立场同源。某条写着「草案未获通过」，是因为少了这一句，整条记录就会误导人。',
        restsTitle: '每一项立场依据什么',
        citeChecked: '，核查于 {date}',
        openTitle: '仍需要当地法律意见的问题',
        openIntro: '上述问题未能由来自{name}的资料回答，也正是应付费请当地具执业资格的律师作答的部分。',
        compareTitle: '需比较多个目的地？',
        compareBody: '只有当每个目的地均按同一组问题加以阅读，比较方有意义：资格、亲权、付款规则，以及计划变更时的处理方式。',
        legalFramework: '法律框架',
        openChecklist: '逐条过一遍核查清单',
        compareBoard: '并排对比目的地',
        documentsGuide: '孩子出生后的证件',
        costFiguresLink: '查看全部已公布的费用数据',
        breadcrumb: '目的地',
        relatedTitle: '关于{name}的相关阅读',
        relatedIntro: '聚焦{name}、以及围绕前往该国而被反复问到的问题的文章。',
        legalMap: {
          title: '哪些地区可以合法代孕',
          intro: '这个国家的代孕规则由各地区自行决定，因此能否进行取决于您前往哪里。下面列出的地区，与下方各项立场出自同一批来源。',
          permittedLabel: '成文法明确允许',
          restrictedLabel: '受限或不可执行',
          prohibitedLabel: '禁止',
          unlegislatedLabel: '无专门立法或判例',
          unlegislatedNote:
            '其余各州与属地，本记录未发现任何专门允许或禁止代孕的成文法或已公布判例。在作出任何计划前，每地仍需单独核查。',
        },
        guide: {
          processHeading: '代孕流程，逐阶段说明',
          processIntro:
            '代孕项目是一连串各自独立的阶段，而非一个决定。先后顺序会因目的地、也因您是否需要捐赠卵子或精子而变化。完整的逐阶段说明，以及每个阶段抛出的问题：',
          processLink: '阅读完整流程攻略',
          processStages: [
            {
              title: '确定自身情形',
              blurb: '您自身的医学、法律与财务事实应当最先理清，因为它们决定哪些目的地对您根本开放。',
            },
            {
              title: '先于诊所选定目的地',
              blurb: '在资金开始流动之前，依据法律理由选定地点；法律考量攻略列明了需要确认的内容。',
            },
            {
              title: '双向筛查',
              blurb: '您自身的生育能力评估，以及代孕者的医学与心理筛查。FIGO 的立场是，心理筛查与持续支持应当为强制。',
            },
            {
              title: '匹配',
              blurb: '项目将您与代孕者对接的方式，正是宣传所说与实际交付差异最大之处。若未能达成匹配，应以书面形式问清如何处理。',
            },
            {
              title: '协议与协议背后的资金',
              blurb: '治疗开始前，安排应落于书面，且应承载资金而非仅指向资金；托管账户通常在第一次胚胎移植之前完成注资。',
            },
            {
              title: '医疗与移植',
              blurb: '用药与监测，然后是胚胎移植。至此时间表已不再由您掌控：取决于诊所日程与代孕者的周期。',
            },
            {
              title: '孕期',
              blurb: '产前护理由产科医生负责；您支付什么、由谁决定，是早应确定的合同问题。',
            },
            {
              title: '出生与亲权',
              blurb: '亲权路径决定产房内及之后发生的事；只有该辖区的律师能回答哪一种适用于您。',
            },
            {
              title: '把孩子带回家',
              blurb: '出生登记、护照或领事文件，以及您的母国所要求的任何材料。跨境意向父母并不罕见：美国的妊娠代孕移植中，有三分之一属于居住境外的意向父母。',
            },
          ],
          contractHeading: '合同是法律核心',
          contractIntro:
            '在开始任何治疗之前，这项安排应当落于书面，且应当承载资金，而非仅仅指向资金。每一份合同都必须涵盖的内容，以及值得坚持的条款：',
          contractLink: '阅读法律考量攻略',
          agencyHeading: '选择机构',
          agencyIntro:
            '机构是各方之中，利益默认不与您一致的一方。本站不点名任何机构：下文只说明该问什么、以及如何判断一家机构是否靠谱，供您签约前判断。',
          agencyLink: '阅读机构评估攻略',
          faqHeading: '常见问题',
          faq: [
            {
              q: '代孕在所有地方都合法吗？',
              a: '不。其跨度从明确允许到明令禁止；在联邦制国家，州或省之间亦不相同。每个目的地的法律基础，已在本页顶部列明。',
            },
            {
              q: '其他国家的意向父母能否走这条路径？',
              a: '取决于目的地。上方摘要条中的「境外准父母」一格，说明本记录的来源是否接纳外国委托父母；下方的准入部分，则逐一点名各条规定向哪些家庭开放。',
            },
            {
              q: '亲权何时确定？',
              a: '这是不同体系之间规划差异最大的一点。部分体系在出生时即将意向父母登记在内；另一些则将分娩的女性视为法律上的母亲，直至法院事后转移亲权。哪一种适用于您，唯有该辖区的律师能够作答。',
            },
            {
              q: '价格通常包含哪些内容？',
              a: '一项疗程的报价由若干条目构成，而范围比总额更关键。来源就本目的地公布过的数字，见上方费用表；一份报价通常漏掉什么，完整说明见费用攻略。',
            },
            {
              q: '必须本人亲自前往吗？',
              a: '通常需要，至少某些环节如此。治疗前签字、出庭或前往登记处、领取文件、以及孩子出生后停留，是彼此独立的要求，且多源自诊所惯例与法院，而非法律条文。您能出行几次，往往比费用更早地缩小可选范围。',
            },
            {
              q: '代孕有平均费用吗？',
              a: '不存在适用于所有情况的单一数字。总额取决于目的地、取决于一项疗程包含哪些内容、也取决于一份报价漏掉了什么，因此一个平均数字只会掩盖那些决定方案是否可行的差异。本页按条目的数字与费用攻略，正说明了原因。',
            },
            {
              q: '孩子出生后怎么回国？',
              a: '出生登记、护照或领事文件，以及您的母国为承认这项安排所要求的任何材料。具体步骤因孩子出生地、也因您居住地而异，携子回国的攻略逐步说明了它们。',
            },
          ],
        },
      },
      destinations: {
        title: '代孕目的地',
        titleTag: '代孕目的地：比较法律与费用',
        description: '按资格、出生时的亲权、付款规则、费用范围与到场要求比较代孕目的地，每一条法律立场都附有来源与日期。',
        breadcrumb: '目的地',
        eyebrow: '已核实的目的地记录',
        h1: '哪些代孕目的地适合您的情况？',
        lede: '一处目的地是否可行，取决于四项条件：条文是否载明您这类家庭、出生时谁是法律上的父母、资金涵盖至何范围，以及是否须由本人到场。此处即按上述四项对八个法律体系加以比较。',
        notice: '代孕法律因国家而异；在联邦制国家，州与省之间亦不相同。其另取决于婚姻状况、孩子与您是否存在基因关系，以及国籍与居住地，此数项属各自独立的检验。以下内容不构成针对您个人情况的法律意见：一国允许代孕，并不等于您可采用该路径，亦不等于您居住的国家会承认此次出生的结果。',
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
          intro: '一个地方一条记录：法律基础、来源公布过的费用数据、以及还没有结论的问题。点开看全部。',
          count: '{n} 条记录，按地区排列',
          open: '打开记录',
          noCost: '未公布',
          insufficient: '尚未核实完整',
          thinNote: '部分记录带有此标记，因可打开的来源尚不足以支撑一项可用的结论：{names}。其仍保留于列表之中；您在别处见过的名称，不应在此处毫无说明。',
          thinJoin: '、',
          costNote: '全部已公布数据按费用条目归类：',
          costLink: '按条目查看全部费用数据',
          emptyTitle: '尚无已核实的内容',
          emptyBody: '一处目的地须先有一份带日期的一手法律来源支持其立场，方会出现在此处。本名单依文件出现的速度而增长。',
        },
        factors: {
          heading: '四个条件，按它们生效的顺序',
          intro: '上述每一项均能以快于阅读介绍的速度排除若干地点，且均可归结为一个问题。该问题既可向机构提出，亦可向律师提出。',
          items: [
            {
              q: '条文里点名了您这样的家庭吗？',
              a: '某一目的地允许代孕，与您是否具备委托资格，属两件事。凡载明谁可委托的规定，通常以婚姻状况、与孩子是否存在基因关系，或家庭构成作为限制条件。被称作「对代孕友好」的国家，回答的并非这一问题。',
              test: '若能指出条文中的某一条规定，此即规则；若答案出自某家机构经手过多少类似家庭，此即惯例。',
            },
            {
              q: '孩子于出生时的法律父母为何人？',
              a: '部分体系于出生时即将意向父母登记在内。另一些体系中，无论协议载明何种内容，分娩的女性均为法律上的母亲，亲权仅可事后经法院转移。仅此一项差别，即决定您的规划止于孩子出生之时，抑或自彼处方才开始。',
              test: '应要求对方给出顺序：出生当日何者为父母、其后存在哪一种申请、由何人审理、一项裁定实际所需时长。',
            },
            {
              q: '资金可涵盖至何范围？',
              a: '超出预算的目的地不值得研究，但决定可行性的是范围而非总额：一项疗程包含哪些阶段、法律允许向代孕者支付何种款项、哪些账单在报价之外另行计费、以及疗程中止时有何款项退回给您。',
              test: '两份相差四成的报价，其医疗项目可能完全相同；应先比较条目，再比较总额。',
            },
            {
              q: '须到您到场之时，您能否抵达？',
              a: '治疗前签字、出庭、领取文件、孩子出生后停留，为四项彼此独立的要求，且多源自诊所惯例、登记处与法院，而非法律条文。可出行几次，往往比预算更快地缩小范围。',
              test: '应请各环节的负责人将到场时间表以书面形式提供，并先行说明您具备几个可行的出行窗口。',
            },
          ],
        },
        dimensions: {
          heading: '比较一个目的地要覆盖的十项',
          paraA: '多数家庭最终取得的是一张国家对照表加一列价格，而决定可行性的因素恰隐藏于该列价格之中：您能否于出生时被登记入父母栏、需出行几次、以及等待期间资金由何人保管。以下十项，即每一份目的地记录逐条对应的字段。',
          paraB: '凡有来源支持的项目均已填入，未能核实的则保留为空，未回答的问题印在那条记录下方。',
          link: '本站如何核查一份来源',
          items: [
            { q: '当地法律框架', ask: '成文法、法院判决、一部辅助生殖法，抑或各州互不相同的组合？' },
            { q: '何者可以委托', ask: '规则点名为何种意向父母，以及是否要求基因联系。' },
            { q: '国籍与居住', ask: '规则所规范者为公民、居民，抑或任何前往当地之人。' },
            { q: '出生时的法律亲权', ask: '于任何裁定成立之前，法律将何人视为母亲、将何人视为父亲。' },
            { q: '出生之后的程序', ask: '申请、受理它的法院或登记机关，以及实际所需的时间。' },
            { q: '孩子的国籍与文件', ask: '孩子取得何种国籍，以及凭何种文件离开该国。' },
            { q: '付款规则', ask: '得以支付何种款项、付予何人、金额如何，以及须经何人批准。' },
            { q: '牌照与监管', ask: '由何机构向诊所颁发牌照，该项牌照实际覆盖何种范围。' },
            { q: '到场要求', ask: '何人必须出席、出席多久、位于哪些阶段。' },
            { q: '来源与核查日期', ask: '此十项中的任何一条，其后均须有一份带日期的文件。' },
          ],
        },
        models: {
          heading: '法律体系有三种形态',
          intro: '一处目的地属于何种形态，决定其名称能够告知您的多寡。下文每一条均摘自一份记录，出处与查阅日期即标注于其旁。',
          cite: '发布于 {published}，阅读于 {verified}',
          items: [
            {
              name: '亲权在出生之后才转移',
              where: '英国，以及任何分娩后须经法院程序的体系',
              plan: '规划无法在分娩那一刻结束：其后仍有一份申请、一次庭审，以及一段孩子在法律上尚不属于您的等待期。',
              points: [
                '除非取得亲权令，分娩的女性即为法律上的母亲；书面安排不具法律约束力；付款以她的合理开支为限。',
                '支付超过合理开支的部分，必须在作出亲权令之前经家事法院批准；依《1985 年代孕安排法》，为代孕刊登广告或以代孕者身份刊登广告均属违法。',
                '意向父母要等孩子出生之后才向法院申请，法律委员会把这一步通常所需的时间描述为六个月到一年。它的改革建议仍会让安排不具可执行性，而草案法案目前还不是法律。',
              ],
            },
            {
              name: '付款受监管，亲权在别处决定',
              where: '加拿大，以及联邦层面仅规范资金、不规范出生的体系',
              plan: '一个国家可以合法进入，却未必是您亲权裁定的作出地。报销规则与省级出生规则，应作为两份独立的文件分别阅读。',
              points: [
                '依《辅助生育法》第 12(1) 条及据其制定的条例，代孕母亲因该代孕安排发生的开支可以被报销。',
                '监管机构列出的可报销项目包括交通、托育、辅导、律师费、药物、孕妇装、产前课程、分娩、保险，以及孕前与产后期间损失的工作收入；需要保留票据，记录保存六年。',
              ],
            },
            {
              name: '规则不在全国层面，由州或省来定',
              where: '美国，以及任何规则由州、省一级决定的国家',
              plan: '国名几乎不能说明任何信息。规则由州、省或地区制定；而您居住地的承认问题，是在此之上再加一整套法律体系。',
              points: [
                '各州对代孕是否允许、以及如何监管各有自己的法律；不存在联邦框架。',
                '在我们阅读的这项调查里，21 个州以成文法明确允许妊娠代孕，另有若干州既没有允许也没有禁止的成文法或公开判例。',
                '印第安纳州与内布拉斯加州的妊娠代孕合同不可强制执行且违背公共政策；亚利桑那州居民被禁止订立此类合同。',
              ],
            },
          ],
        },
        questions: {
          heading: '列入候选之前，应取得书面答复的五个问题',
          intro: '若某一目的地无法给出书面答复，它还不具备与其他目的地并列比较的条件。',
          items: [
            '哪一条规定写明此处谁可以委托，它发表在哪里？',
            '在任何裁定存在之前，出生时的法律母亲和法律父亲分别是谁？',
            '孩子凭哪种旅行文件离开该国，由哪个机关签发？',
            '可以向代孕者支付或报销什么，是否有事项需要法院或监管机构批准？',
            '哪些阶段要求本人到场，若本人无法到场将如何处理？',
          ],
          footnote: '完整清单共七组三十三个问题，每个问题旁均留有位置，用以记录答复人与答复日期。',
          cta: '打开完整清单',
        },
        next: {
          heading: '下一步前往何处',
          items: [
            {
              label: '法律与亲权',
              body: '可执行性、出生时的亲权、资格、可支付款项、您居住地的承认问题，依此顺序处理。',
            },
            { label: '费用指南', body: '预算的构成、报价通常不含哪些项目，以及资金的实际流转方式。' },
            { label: '研究清单', body: '上面提出的问题，集中在一份可以逐条填写、也能留下的清单里。' },
            { label: '报价对比', body: '将两个疗程填入相同的条目，逐行读出差异。' },
          ],
        },
        band: {
          heading: '将现有材料带去咨询',
          body: '本站不出具法律意见，也不代表任何诊所或机构。本站提供的是文件本身：请携带您的候选名单与已获得的报价前来，含糊之处随之变成可以具体向律师提出的问题。',
          enquiry: '找顾问聊聊',
        },
        standard: {
          heading: '一条目的地记录里有什么',
          items: [
            '法律基础：成文法、法院判决、一部辅助生殖法，还是没有全国统一规则。',
            '谁可以委托，按已核实材料所能达到的范围描述。',
            '每一项立场都附上它出自哪份文件、由谁发布，以及它的阅读日期。',
            '付款规则依照法律允许什么、禁止什么、要求谁批准来撰写，而非依照机构的通常做法。',
            '出生时的亲权与出生之后的亲权，作为两个分开的答案记录。',
            '尚未有结论的问题，包括无法打开或需要登录才能查看的来源。',
            '每一条结论均可对照它自己的原始文件核验：您核对的是一份来源，而不是接受一种说法。',
          ],
        },
        why: {
          heading: '如何阅读一条记录',
          body: '先看法律基础一行，再看出生时的父母身份，然后才看数字。费用条目按类别列于记录底部，来源无法覆盖之处即保留为空。',
          readTitle: '允许，不等于对您可行',
          readBody: '资格、亲权、由哪个法院处理、孩子凭哪一份文件出境，是四个各自独立的问题，其中任何一项单独都可能无法成立。',
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

/** The traffic-facing topic a piece belongs to on the homepage module (legal / choosing / process /
 * cost / accommodation). Distinct from CATEGORY_LABELS, which is the editorial content type. */
export const TOPIC_LABELS: Record<Lang, Record<string, string>> = {
  en: {
    legal: 'Legal & eligibility',
    choice: 'Agency & selection',
    process: 'Process & planning',
    cost: 'Costs & budget',
    accommodation: 'Accommodation',
  },
  zh: {
    legal: '法律与资格',
    choice: '机构与选择',
    process: '流程与安排',
    cost: '费用与预算',
    accommodation: '住宿',
  },
};

/** One line per topic, shown under the topic name in the homepage module's category index. */
export const TOPIC_BLURBS: Record<Lang, Record<string, string>> = {
  en: {
    legal: 'Who may commission, which family types are admitted, and how parentage is recognised.',
    choice: 'How to vet an agency and a carrier, and what a profile or donor page does not promise.',
    process: 'From matching and treatment to the paperwork after birth: the stages a journey moves through.',
    cost: 'What a quote usually includes, what it leaves out, and how to verify a budget.',
    accommodation: 'Where intended parents stay and what the trip itself involves.',
  },
  zh: {
    legal: '谁可以委托代孕、哪些家庭类型被允许，以及亲子关系如何认定。',
    choice: '如何筛选机构与代孕者，看清档案与供体页没有承诺什么。',
    process: '从匹配、医疗到出生后手续，代孕要经历哪些阶段。',
    cost: '报价通常包含什么、遗漏什么，以及如何核实一笔预算。',
    accommodation: '准父母住在何处，以及行程本身涉及什么。',
  },
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

/** The status of a sub-jurisdiction (a state, province or legal system) on the country page's
 * legality map. Distinct from BASIS_LABELS, which describes the national-level basis. */
export const SUB_STATUS_LABELS: Record<Lang, Record<string, string>> = {
  en: {
    permitted: 'Permitted',
    restricted: 'Restricted',
    prohibited: 'Prohibited',
    unlegislated: 'Not specifically legislated',
  },
  zh: {
    permitted: '允许',
    restricted: '受限',
    prohibited: '禁止',
    unlegislated: '无专门立法',
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

