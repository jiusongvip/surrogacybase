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
import type { ImageMetadata } from 'astro';
import type { Lang } from '@/i18n/config';
import type { Bilingual } from '@/i18n/ui';
import type { IconName } from '@/lib/icons';
import stageCompass from '@/assets/images/stage-compass.jpg';
import concernFlight from '@/assets/images/concern-flight.jpg';
import concernPassport from '@/assets/images/concern-passport.jpg';
import articleDestinations from '@/assets/images/article-destinations.jpg';
import concernDestinationTown from '@/assets/images/concern-destination-town.jpg';
import concernDestinations from '@/assets/images/concern-destinations.jpg';
import concernPresence from '@/assets/images/concern-presence.jpg';
import heroDeskMap from '@/assets/images/hero-desk-map.jpg';

export const HOME_META: Record<Lang, { titleTag: string; description: string }> = {
  en: {
    titleTag: 'Cross-Border Surrogacy Guides & Tools',
    description:
      'Independent cross-border surrogacy guidance: compare destinations on the same terms, read sourced cost data, and use the tools on your own quote.',
  },
  zh: {
    titleTag: '跨境代孕指南与工具',
    description:
      '关于跨境代孕的独立指引：用同样的四个问题比较目的地，查看带来源和年份的费用数据，并用工具核对您自己的报价。',
  },
};

export const HOME_HERO: Record<Lang, {
  h1: string;
  lead: string;
  ctaPrimary: string;
  ctaSecondary: string;
  /** A claim about how the site is funded, not about outcomes. */
  note: string;
}> = {
  en: {
    h1: 'Surrogacy, compared item by item',
    lead: 'Compare what each destination allows, who the child’s legal parents are at birth, and what a published figure actually covers. Every claim names its source, and anything unconfirmed is marked as such.',
    ctaPrimary: 'Compare destinations',
    ctaSecondary: 'Start with the guides',
    note: 'Independent information. No provider pays to appear, and no destination is ranked for revenue.',
  },
  zh: {
    h1: '代孕，逐项比较',
    lead: '比较每个目的地允许什么、孩子出生时的法律父母是谁，以及公布出来的一个金额到底覆盖哪些环节。每条说法都写明来源，无法确认的部分会直接标出。',
    ctaPrimary: '比较目的地',
    ctaSecondary: '从指南开始',
    note: '独立信息。没有服务方付费出现在这里，也没有目的地因营收被排名。',
  },
};

export const HOME_WHO: Record<Lang, {
  eyebrow: string;
  heading: string;
  para: string;
  link: string;
  advantagesHeading: string;
}> = {
  en: {
    eyebrow: 'Why this site exists',
    heading: 'Independent research, written to be checked',
    para: 'SurrogacyBase publishes guides, destination records and tools for people comparing cross-border surrogacy. It does not match surrogates, run programs or hold money. Each page separates what a source states, what it leaves unsettled, and what only a professional in that jurisdiction can answer.',
    link: 'More about how we work',
    advantagesHeading: 'What you can check on every page',
  },
  zh: {
    eyebrow: '本站为什么存在',
    heading: '每一句都能核对',
    para: 'SurrogacyBase 为正在比较跨境代孕的人发布指南、目的地记录和工具。本站不匹配代孕者、不运营项目，也不代管资金。每一页都把三件事分开写：来源说明了什么、来源没有解决什么，以及哪些问题只有当地专业人士才能回答。',
    link: '进一步了解我们',
    advantagesHeading: '每一页都可以核对什么',
  },
};

/* Four claims, each written so the reader can go and test it on the page it points to. */
export const HOME_ADVANTAGES: { icon: IconName; title: Bilingual; body: Bilingual }[] = [
  {
    icon: 'book',
    title: { en: 'One decision, four sides', zh: '一个决定，四个面' },
    body: {
      en: 'Legal, medical, financial and practical, because a plan that answers three of them is not a plan.',
      zh: '法律、医疗、财务与实操。只回答其中三项的方案，算不上方案。',
    },
  },
  {
    icon: 'scale',
    title: { en: 'The same questions everywhere', zh: '同样的问题，问每个目的地' },
    body: {
      en: 'Eligibility, parentage, payment and cost are asked the same way of every destination, so two places can be compared on the same terms.',
      zh: '准入、亲权、付款与费用，对每个目的地都按同样的方式提问，两个目的地才是在同样的口径上比较。',
    },
  },
  {
    icon: 'check',
    title: { en: 'A source and a date', zh: '来源和日期' },
    body: {
      en: 'Every figure names its publisher and the year it applies to. Where no source exists, the page says so instead of estimating.',
      zh: '每一个金额都写明公布方与对应的年份。没有来源时，页面直接说明，而不是给出估算。',
    },
  },
  {
    icon: 'arrow-up-right',
    title: { en: 'Tools that use your papers', zh: '工具用您自己的材料' },
    body: {
      en: 'Two quote totals can be put on the same lines, or a checklist taken into a meeting. Nothing you type is uploaded.',
      zh: '两份报价可以逐项并排，一份清单可以直接带进会面。您输入的内容不会被上传。',
    },
  },
];

export const HOME_STAGES: Record<Lang, {
  eyebrow: string;
  heading: string;
  intro: string;
  ctaPrimary: string;
  ctaSecondary: string;
}> = {
  en: {
    eyebrow: 'Start where you are',
    heading: 'Which step are you on?',
    intro:
      'The pages are grouped by the decision in front of you, not by the kind of page. Choose the point that sounds closest to where you are.',
    ctaPrimary: 'Browse every guide',
    ctaSecondary: 'Open the tools',
  },
  zh: {
    eyebrow: '从您现在的处境开始',
    heading: '您正处在哪一步？',
    intro: '以下按您面前要做的决定来分，而不是按页面类型。选一个最接近您现在处境的位置。',
    ctaPrimary: '浏览全部指南',
    ctaSecondary: '打开工具',
  },
};

/* Each card points at pages that exist, and each link names the job it does. */
export const HOME_STAGE_ITEMS: {
  icon: IconName;
  title: Bilingual;
  body: Bilingual;
  links: { label: Bilingual; href: string }[];
}[] = [
  {
    icon: 'book',
    title: { en: 'I am still working out whether this is possible', zh: '我还在确认这件事是否可行' },
    body: {
      en: 'Start with the process, then the four legal questions it raises. You do not need a destination yet.',
      zh: '先看流程，再看它带出的四个法律问题。这一步还不需要选定目的地。',
    },
    links: [
      { label: { en: 'Read the process guide', zh: '阅读流程指南' }, href: '/guides/surrogacy-process' },
      {
        label: { en: 'See the four legal questions', zh: '看四个法律问题' },
        href: '/guides/surrogacy-legal-considerations',
      },
    ],
  },
  {
    icon: 'map-pin',
    title: { en: 'I am comparing countries', zh: '我正在比较国家' },
    body: {
      en: 'Each destination record answers the same questions: the legal basis, who may commission, parentage at birth, and what has been published on cost.',
      zh: '每一份目的地记录都回答同样的问题：法律依据、谁可以委托、出生时的亲权，以及已公布的费用数据。',
    },
    links: [
      { label: { en: 'Compare destinations', zh: '比较目的地' }, href: '/destinations' },
      {
        label: { en: 'Open the research checklist', zh: '打开目的地研究清单' },
        href: '/tools/destination-research-checklist',
      },
    ],
  },
  {
    icon: 'receipt',
    title: { en: 'I have a quote and need to compare it', zh: '我拿到了报价，需要对比' },
    body: {
      en: 'Put two quotes on the same nine cost lines, then read what usually sits outside a quote before you treat either total as a budget.',
      zh: '先把两份报价放在同样的九项费用上，再看报价之外通常还有什么，最后才把任何一个总额当成预算。',
    },
    links: [
      {
        label: { en: 'Compare two quotes', zh: '对比两份报价' },
        href: '/tools/agency-quote-comparison',
      },
      {
        label: { en: 'Read what sits outside a quote', zh: '看报价之外的成本' },
        href: '/articles/surrogacy-costs-that-sit-outside-a-quote',
      },
    ],
  },
  {
    icon: 'list-check',
    title: { en: 'I am close to signing', zh: '我准备签约了' },
    body: {
      en: 'Take the questions that belong in writing into the meeting, and check what has to be signed before the first transfer.',
      zh: '把该写进书面文件的问题带进会面，并核对第一次付款前必须签什么。',
    },
    links: [
      {
        label: { en: 'Open the agency checklist', zh: '打开机构提问清单' },
        href: '/tools/agency-question-checklist',
      },
      {
        label: { en: 'Read what must be signed', zh: '看签约前必须写清什么' },
        href: '/articles/what-must-be-signed-before-the-first-transfer',
      },
    ],
  },
];

export const HOME_COUNTRIES: Record<Lang, {
  eyebrow: string;
  heading: string;
  intro: string;
  cta: string;
  learnMore: string;
  /** {date} is the day the record's sources were last opened. */
  checked: string;
  incomplete: string;
  more: string;
}> = {
  en: {
    eyebrow: 'Destinations',
    heading: 'Surrogacy, country by country',
    intro: 'Each card opens a record that names its sources, the date they were read, and the questions those sources did not settle.',
    cta: 'View all destinations',
    learnMore: 'Learn more',
    checked: 'Record checked {date}',
    incomplete: 'Sources incomplete',
    more: 'More destinations',
  },
  zh: {
    eyebrow: '目的地',
    heading: '代孕，一个国家一个国家地看',
    intro: '每张卡片打开的是一份记录，它会写明自己的来源、阅读这些来源的日期，以及这些来源没能确定的问题。',
    cta: '查看全部目的地',
    learnMore: '了解更多',
    checked: '记录核查于{date}',
    incomplete: '来源尚不完整',
    more: '更多目的地',
  },
};

/**
 * One photograph per country card, keyed by jurisdiction code. These are the site's own
 * editorial images, so the alt text describes what is in the frame and never claims the
 * picture was taken in the country named under it.
 */
export const HOME_COUNTRY_MEDIA: Record<string, { src: ImageMetadata; alt: Bilingual }> = {
  us: {
    src: stageCompass,
    alt: { en: 'A brass compass resting on a folded paper map', zh: '一把黄铜指南针放在折叠的纸质地图上' },
  },
  ca: {
    src: concernFlight,
    alt: {
      en: 'The wing of an aircraft above a bank of cloud at sunset',
      zh: '日落时分飞机机翼越过一片云层',
    },
  },
  gb: {
    src: concernPassport,
    alt: {
      en: 'A passport lying on top of a stack of official forms on a wooden desk',
      zh: '一本护照放在木桌上叠着的官方表格上面',
    },
  },
  co: {
    src: articleDestinations,
    alt: { en: 'An old walled town running down to the sea at sunset', zh: '日落时分一座带城墙的老城一路延伸到海边' },
  },
  gr: {
    src: concernDestinationTown,
    alt: {
      en: 'A coastal town built up a hillside above a harbour of small boats',
      zh: '一座海滨小镇沿山坡向上铺开，山下是停满小船的港口',
    },
  },
  ua: {
    src: concernPresence,
    alt: {
      en: 'A blank month calendar laid out beside two boarding passes, a key and a luggage tag',
      zh: '一张空白的月历与两张登机牌、一把钥匙和一只行李牌并排摆着',
    },
  },
  ge: {
    src: heroDeskMap,
    alt: {
      en: 'A world map spread out with a brass compass, a green notebook, a pencil and a pair of glasses',
      zh: '一张摊开的地图上放着黄铜指南针、一本绿色笔记本、一支铅笔和一副眼镜',
    },
  },
  kz: {
    src: concernDestinations,
    alt: {
      en: 'Three sailboats moored in a still bay at dusk, with low hills and a few white houses on the shore',
      zh: '黄昏时分三艘帆船停在平静的海湾里，对岸是低矮的山丘和几栋白房子',
    },
  },
};

export const HOME_READING: Record<Lang, {
  eyebrow: string;
  heading: string;
  intro: string;
  viewAll: string;
  readMore: string;
  emptyTitle: string;
  emptyBody: string;
  emptyAction: string;
}> = {
  en: {
    eyebrow: 'Guides and explainers',
    heading: 'Before you talk to anyone, these are the questions',
    intro: 'Three things usually have to be settled before a first conversation means anything: how to read a quote, what to ask a provider, and what parentage and nationality actually turn on.',
    viewAll: 'View all explainers',
    readMore: 'Read more',
    emptyTitle: 'Nothing is published here yet',
    emptyBody: 'A piece appears here once its sources have been checked and it is ready to read.',
    emptyAction: 'Read the publication standards',
  },
  zh: {
    eyebrow: '指南与专题解读',
    heading: '开口谈之前，先弄清这几个问题',
    intro: '第一次开口谈之前，通常要先弄清三件事：怎么读一份报价、该问服务方什么，以及亲权与国籍究竟取决于什么。',
    viewAll: '查看全部专题解读',
    readMore: '阅读全文',
    emptyTitle: '这里还没有已发布的内容',
    emptyBody: '这一节只列出已经发布的内容。一篇专题解读在来源核查完成、确实可以阅读之后，才会出现在这里。',
    emptyAction: '阅读发布标准',
  },
};

export const HOME_BAND: Record<Lang, {
  eyebrow: string;
  heading: string;
  para: string;
}> = {
  en: {
    eyebrow: 'Write your enquiry',
    heading: 'Not sure where to start?',
    para:
      'Write down the priorities and the questions you already have. A clear question is what makes the first reply useful, whoever you end up asking.',
  },
  zh: {
    eyebrow: '写下您的问询',
    heading: '不确定该从哪里开始？',
    para: '把您已经在意的优先级和手上已有的问题写下来。问题写得清楚，第一封回复才可能有用，无论您最后问的是谁。',
  },
};

/*
 * Three lines under the heading. No turnaround is promised because none is measured. Each line
 * describes a property of the form the reader can verify: what leaves the browser, what is not
 * collected, and which contact details are required.
 */
export const HOME_BAND_TRUST: { icon: IconName; label: Bilingual; body: Bilingual }[] = [
  {
    icon: 'lock',
    label: { en: 'Confidential and secure', zh: '保密且安全' },
    body: { en: 'Nothing leaves your browser until you send it.', zh: '在您自己发送之前，任何内容都不会离开您的浏览器。' },
  },
  {
    icon: 'check',
    label: { en: 'No obligation', zh: '没有任何义务' },
    body: { en: 'No account, no payment detail, no mailing list.', zh: '不建账号、不填付款信息、不进邮件列表。' },
  },
  {
    icon: 'route',
    label: { en: 'You choose how to reply', zh: '您决定回复方式' },
    body: {
      en: 'An email address is required; a phone number or messaging handle is optional.',
      zh: '邮箱地址为必填；电话或即时通讯账号为选填。',
    },
  },
];
