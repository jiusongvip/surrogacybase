/*
 * The homepage, in both languages.
 *
 * The section order, the headings and the call to action follow the layout the site owner
 * defined. Three rules keep that layout from turning into a claim the rest of the site cannot
 * support.
 *
 *   - Anything a reader sees lives in this file, including alt text. A description of a
 *     photograph is content, and a Chinese page with an English caption is half translated.
 *   - A card links to a page that exists. Where the mock shows a country with no sourced
 *     record, the built page shows the countries that do have one, and says what state the
 *     record is in.
 *   - A promise about an answer, a turnaround or a person is only made where the owner has
 *     actually committed to it. The form section below is the one place the site speaks for
 *     the service rather than for the research.
 *
 * Strings that sit against other markup carry their own separators. English needs a space
 * before a link; the Chinese full-width colon and 、 take none, so the space belongs in the
 * string rather than in the template.
 */
import type { Lang } from '@/i18n/config';
import type { Bilingual } from '@/i18n/ui';
import type { IconName } from '@/lib/icons';

export const HOME_META: Record<Lang, { titleTag: string; description: string }> = {
  en: {
    titleTag: 'Cross-Border Surrogacy: Law, Cost and Process',
    description:
      'Independent cross-border surrogacy information: compare destination eligibility, law and cost, and see which questions to settle before deciding what comes next.',
  },
  zh: {
    titleTag: '跨境代孕：比较目的地、法律与费用',
    description:
      '跨境代孕的独立信息与决策支持：比较各国申请条件、法律框架与费用构成，了解哪些问题需要先核实，再决定下一步。',
  },
};

export const HOME_HERO: Record<Lang, {
  h1: string;
  lead: string;
  ctaPrimary: string;
  ctaSecondary: string;
  /**
   * The owner's line, set under the lead in the copy column. It is not a claim about outcomes.
   * Restored from the owner's own design, where it is set in a handwritten face at the right of
   * the hero. The heading now states the three things a reader can do here rather than naming a
   * feeling, because the design's promise of "guidance" only holds if the page says what the
   * guidance consists of; the line below carries the register instead.
   */
  note: string;
}> = {
  en: {
    h1: 'Clear information at every step of cross-border surrogacy',
    lead: 'Destination, cost, law and process information for intended parents worldwide, so you can see the options, work out what you actually need, and be ready for the next step.',
    ctaPrimary: 'Explore destinations',
    ctaSecondary: 'Get personalized guidance',
    note: 'Let the important decisions rest on clear information',
  },
  zh: {
    h1: '让跨境代孕的每一步，都有清晰的信息参考',
    lead: '为全球准父母提供代孕目的地、费用、法律与流程信息，帮助您了解不同选择，梳理实际需求，为下一步做好准备。',
    ctaPrimary: '探索代孕目的地',
    ctaSecondary: '获取个性化咨询',
    note: '让重要决定建立在清晰信息之上',
  },
};

/*
 * Who we are. The owner's design pairs this with the four advantages in a two-column band: the
 * left column makes the case for the site, the right column says what that case is made of.
 *
 * One paragraph, because the band is read beside four cards rather than on its own. A second
 * paragraph made this column taller than the one beside it and turned a paired band into a block
 * of prose next to a grid; the sentence below states what the site gathers and what that is for,
 * and stops. Nothing here describes the team, the company or its history: a reader at this point
 * is deciding whether to keep reading, not whether to hire anyone.
 */
export const HOME_WHO_WE_ARE: Record<Lang, {
  heading: string;
  body: string[];
  link: { label: string; href: string };
}> = {
  en: {
    heading: 'An independent platform focused on surrogacy worldwide',
    body: [
      'Law, eligibility, cost structure and medical arrangements, gathered across countries and regions, so a complicated process is easier to understand.',
    ],
    link: { label: 'Learn more about us', href: '/about' },
  },
  zh: {
    heading: '一个专注全球代孕信息的独立平台',
    body: ['整理不同国家和地区的法律环境、适用条件、费用结构与医疗安排，让跨境代孕的复杂信息更容易理解。'],
    link: { label: '了解更多关于我们', href: '/about' },
  },
};

/*
 * The services band. The owner's design places it above the country records, because a reader who
 * has just been told what this site can do needs to know what the help consists of before being
 * asked to pick a country.
 *
 * Four cards, each one a thing the reader gets rather than a thing the site possesses. Each is a
 * title and one line: the four are scanned side by side, and a paragraph in each would turn a row
 * of choices into four blocks of prose. Nothing here names what the site will not do - the about
 * page carries those limits, and four cards that each spent a line on an exclusion would read as
 * a list of what is unavailable.
 */
export const HOME_SERVICES: Record<Lang, {
  heading: string;
  intro: string;
  items: { title: string; body: string }[];
  cta: string;
}> = {
  en: {
    heading: 'How we can help',
    intro: 'From choosing a destination to planning a budget, and on to the paperwork after birth.',
    items: [
      {
        title: 'Destination research and comparison',
        body: 'Policy, eligibility, law and process, country by country.',
      },
      {
        title: 'Cost and budget planning',
        body: 'The main cost lines, a quote, and what is usually left out.',
      },
      {
        title: 'Parentage and the paperwork after birth',
        body: 'How parentage is recognised, the birth certificate, and the documents to travel home.',
      },
      {
        title: 'Your situation, and the next step',
        body: 'Start from your circumstances, and what to confirm first.',
      },
    ],
    cta: 'Get guidance for your situation',
  },
  zh: {
    heading: '我们可以为您提供哪些帮助？',
    intro: '从选目的地到算预算，再到孩子出生后的亲权与手续。',
    items: [
      {
        title: '目的地研究与比较',
        body: '政策、资格、法律与流程的实际差异。',
      },
      {
        title: '费用与预算规划',
        body: '主要费用、报价，以及容易被漏算的支出。',
      },
      {
        title: '亲权与出生后的手续',
        body: '亲子关系如何认定，出生证明与回国文件。',
      },
      {
        title: '个人情况评估与下一步',
        body: '从您的处境出发，理清要先确认什么。',
      },
    ],
    cta: '获取针对性建议',
  },
};

/*
 * The four standards, one dimension each: can you open it, who put it out, what the number was
 * counted on, and whether it is current. The earlier drafts failed twice on the same section. One
 * handed the reader the checking as a task, which is homework nobody does while deciding whether to
 * keep scrolling. The next admitted what the edit had not found ("where there is no source we do
 * not print it", "where we got something wrong we fix it"), which reads as a team that could not
 * get the material. Both directions talk about the edit; these four lines talk about the document
 * in front of the reader, and state it positively. The intro names the categories once, so no item
 * below has to list them again.
 */
export const HOME_ADVANTAGES: Record<Lang, {
  heading: string;
  intro: string;
  items: { title: string; body: string }[];
  link: { label: string; href: string };
}> = {
  en: {
    heading: 'Our advantages',
    intro: '',
    items: [
      {
        title: 'Comprehensive coverage',
        body: 'Law, medicine, cost and process, in one place.',
      },
      {
        title: 'Clear side-by-side comparison',
        body: 'One set of dimensions, so the differences show.',
      },
      {
        title: 'Sources you can trace',
        body: 'Every claim has a publisher and a check date.',
      },
      {
        title: 'Built around your situation',
        body: 'Start from your circumstances, not a package.',
      },
    ],
    link: { label: 'The editorial policy', href: '/editorial-policy' },
  },
  zh: {
    heading: '我们的优势',
    intro: '',
    items: [
      {
        title: '全面的信息覆盖',
        body: '法律、医疗、费用、流程，集中在一处。',
      },
      {
        title: '清晰的横向比较',
        body: '同一组维度，差异一眼可见。',
      },
      {
        title: '可追溯的信息来源',
        body: '每条结论都有出处与核查日期。',
      },
      {
        title: '结合实际需求',
        body: '从您的处境出发，先解决最要紧的。',
      },
    ],
    link: { label: '编辑方针', href: '/editorial-policy' },
  },
};

export const HOME_COUNTRIES: Record<Lang, {
  /** The count no longer sits in the heading. A reader arriving here is choosing where to look
   * first, and "8 countries" answers a question nobody asked; the number is still printed on the
   * destinations index, where it describes the size of the archive rather than this section. */
  heading: string;
  /** One sentence under the heading. It has to stop a reader from reading eight cards as eight
   * interchangeable options, which is the mistake the row of flags invites on its own. */
  intro: string;
  cta: string;
  /**
   * One line per record on who can actually use the route, compressed from that record's own
   * eligibility field. It replaces "N facts · M open questions", which counted the edit instead of
   * answering the reader: how many sentences were sourced and how many are still loose is our
   * housekeeping, and printing it on every card said eight times over what the research had not
   * settled. A reader comparing countries wants one thing: is this open to someone like me. The
   * record page keeps the full eligibility statement; this is its headline, not a substitute for it.
   * A code with no entry here prints no line, so a new record cannot inherit a wrong one.
   */
  notes: Record<string, string>;
}> = {
  en: {
    heading: 'Surrogacy information by country and region',
    intro:
      'Countries and regions differ on surrogacy law, who may apply, cost, medical arrangements and how parentage is recognised. Knowing the local position is the first step in planning.',
    cta: 'View all destinations',
    notes: {
      us: 'Each state sets its own rules',
      ca: 'Federal law settles reimbursement, not eligibility',
      gb: 'Couples and singles, with a genetic link',
      co: 'Settled case by case in the courts',
      gr: 'Court approval, and permanent residence in Greece',
      ua: 'Married couples only; foreign parents accepted',
      ge: 'A man and a woman, married or cohabiting',
      kz: 'Closed to international intended parents',
    },
  },
  zh: {
    heading: '不同国家和地区的代孕信息',
    intro: '不同国家和地区在代孕法律、申请资格、费用、医疗安排及亲子关系认定方面存在差异。了解当地情况，是规划跨境代孕的重要一步。',
    cta: '查看所有目的地',
    notes: {
      us: '各州分别规定',
      ca: '联邦仅规定报销，不涉及资格',
      gb: '伴侣或个人均可；须存在基因联系',
      co: '由法院逐案认定',
      gr: '需法院许可，且需希腊永居',
      ua: '仅限已婚夫妇；接受外国父母',
      ge: '一男一女，已婚或同居',
      kz: '已对国际委托父母关闭',
    },
  },
};

/* The pieces the homepage opens with, in the order a reader meets the questions: what it costs,
 * where it is possible, what papers the child needs, how the process runs, how to judge an agency,
 * and what has to be signed before anything starts.
 *
 * Written the way frontmatter writes a reference (collection/slug), so one list resolves to the
 * English pages on / and to the Chinese pages on /zh. A ref with no live page in that language
 * drops out rather than linking somewhere that was never built, which means a half-translated
 * pair can never put a dead card on the homepage.
 *
 * The list is short on purpose. The homepage is a shop window, not a second archive: everything
 * else stays behind the one exit to /guides, and the order is an editorial claim about what
 * readers ask first, which no sort on a date could work out. */
export const HOME_PICKS = [
  'guides/surrogacy-cost',
  'guides/questions-to-ask-about-surrogacy-law-before-choosing-a-destination',
  'guides/bringing-your-child-home',
  'guides/surrogacy-process',
  'guides/choosing-a-surrogacy-agency',
  'guides/what-must-be-signed-before-the-first-transfer',
];

/* The content module's copy. No topic names appear here or on the cards: a card carries a
 * photograph, a title and one line, and which question a piece answers becomes clear once it is
 * open. The intro therefore describes the module rather than enumerating its parts. */
export const HOME_CONTENT: Record<Lang, {
  heading: string;
  intro: string;
  viewAll: string;
}> = {
  en: {
    heading: 'Where most readers start',
    intro:
      'The pieces readers open first. Each answers one question in full, and lists the sources behind its answer at the end. Everything else sits in the guide archive.',
    viewAll: 'All guides',
  },
  zh: {
    heading: '大多数读者从这里开始',
    intro:
      '这几篇是读者打开最多的文章。每篇只回答一个问题，并在文末列出答案所依据的来源。其余内容都在指南库里。',
    viewAll: '查看全部指南',
  },
};

/* The band's copy follows the register this category's sites use: a short noun heading, one sentence
 * saying what the reader gets and who gives it, then four terms, each a four- to six-character noun
 * label followed by one sentence that states the commitment and stops. It reads as a terms sheet,
 * not a conversation, so nothing here addresses the reader as though they had dropped by for a chat.
 *
 * Every term is a commitment the site already keeps. The enquiry lands in our own inbox — the
 * Feishu / WeCom workspace the owner reads and answers it in — and stops there, which is what lets
 * "never shared with third parties" stand as a statement of fact rather than a slogan. */
export const HOME_BAND: Record<Lang, {
  heading: string;
  para: string;
  /** Where the reader's words go, for a reader who wants to know before typing. */
  link: { label: string; href: string };
}> = {
  en: {
    heading: 'Not sure where to start?',
    para: 'Every family’s situation and plan is different. Tell us what you are thinking about, which destinations interest you, or what you are stuck on, and we will help you work out what to look at and which direction to consider next.',
    link: { label: 'How we use what you send', href: '/privacy' },
  },
  zh: {
    heading: '不确定从哪里开始？',
    para: '每个家庭的情况和计划都不一样。告诉我们您目前的想法、感兴趣的目的地或遇到的问题，我们将协助您梳理需要了解的重点，并说明可以进一步考虑的方向。',
    link: { label: '信息使用说明', href: '/privacy' },
  },
};

/*
 * Four terms, one commitment each, ordered the way a reader about to type personal details asks the
 * questions: where does this go, how fast is the answer, who else sees it, what will it ask of me.
 * The labels are noun phrases and the bodies stop after one sentence — a second clause only invites
 * the reader to audit the wording instead of the promise.
 */
export const HOME_BAND_TRUST: { icon: IconName; label: Bilingual; body: Bilingual }[] = [
  {
    icon: 'lock',
    label: { en: 'Information handled with care', zh: '信息谨慎处理' },
    body: {
      en: 'What you send is used to answer your question, and nothing else.',
      zh: '您填写的内容只用于答复您的咨询。',
    },
  },
  {
    icon: 'check',
    label: { en: 'No obligation', zh: '无强制承诺' },
    body: {
      en: 'Whether you go further is your decision, at every step.',
      zh: '了解之后是否继续，由您决定。',
    },
  },
  {
    icon: 'clock',
    label: { en: 'Reply within 1 to 2 working days', zh: '通常于 1 至 2 个工作日内回复' },
    body: {
      en: 'An advisor answers you directly after you submit.',
      zh: '提交后由顾问本人与您联系。',
    },
  },
];
