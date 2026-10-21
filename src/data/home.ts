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
import articleCostLines from '@/assets/images/article-cost-lines.jpg';
import articleParentage from '@/assets/images/article-parentage.jpg';
import articleVerifying from '@/assets/images/article-verifying.jpg';
import concernDocuments from '@/assets/images/concern-documents.jpg';
import verifyContract from '@/assets/images/verify-contract.jpg';
import stageNotebook from '@/assets/images/stage-notebook.jpg';
import concernPresence from '@/assets/images/concern-presence.jpg';
import stageReading from '@/assets/images/stage-reading.jpg';

export const HOME_META: Record<Lang, { titleTag: string; description: string }> = {
  en: {
    titleTag: 'Cross-Border Surrogacy Guides & Tools',
    description:
      'Independent guidance for cross-border surrogacy: compare destinations, break a quote into items, settle parentage and nationality, then send the question you cannot answer.',
  },
  zh: {
    titleTag: '跨境代孕指南与工具',
    description:
      '关于跨境代孕的独立指引：比较目的地、把报价拆成条目、分清亲权与国籍，然后把您答不出来的那个问题发出去。',
  },
};

export const HOME_HERO: Record<Lang, {
  h1: string;
  lead: string;
  ctaPrimary: string;
  ctaSecondary: string;
  /** The owner's line, set under the lead in the copy column. It is not a claim about outcomes. */
  note: string;
}> = {
  en: {
    h1: 'Trusted guidance for your surrogacy journey',
    lead: 'Work out what your options actually are, compare destinations and costs side by side, and get the legal, medical and practical questions answered before you move forward.',
    ctaPrimary: 'Explore destinations',
    ctaSecondary: 'Contact us',
    note: 'More clarity for your family’s future',
  },
  zh: {
    h1: '为您的代孕之旅提供可靠指引',
    lead: '弄清您实际有哪些选择，把目的地和费用放在一起比较，并在往前走之前，把法律、医疗和实操上的问题逐个问清楚。',
    ctaPrimary: '查看目的地',
    ctaSecondary: '联系我们',
    note: '为您一家人的未来，多一分清楚',
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
    eyebrow: 'Who we are',
    heading: 'Independent information for cross-border surrogacy',
    para: 'SurrogacyBase is an independent resource for cross-border surrogacy. It exists so you can work out what applies to your own situation: which places allow the arrangement at all, what a quote actually covers, and which questions only a professional in that jurisdiction can settle.',
    link: 'Learn more about us',
    advantagesHeading: 'Our advantages',
  },
  zh: {
    eyebrow: '我们是谁',
    heading: '跨境代孕的独立信息资源',
    para: 'SurrogacyBase 是一个关于跨境代孕的独立资源。它存在的目的，是让您能弄清哪些内容适用于自己的情况：哪些地方根本允许这种安排、一份报价实际覆盖什么，以及哪些问题只有该法域的专业人士才能确定。',
    link: '进一步了解我们',
    advantagesHeading: '我们的优势',
  },
};

/* Four claims, each written so the reader can go and test it on the page it points to. */
export const HOME_ADVANTAGES: { icon: IconName; title: Bilingual; body: Bilingual }[] = [
  {
    icon: 'book',
    title: { en: 'The decision end to end', zh: '从头到尾讲清这个决定' },
    body: {
      en: 'Legal, medical, financial and practical sides of one decision, because a plan that answers three of them and skips the fourth is not a plan.',
      zh: '同一个决定的法律、医疗、财务与实操四个面，因为一个回答了其中三项、跳过第四项的方案根本算不上方案。',
    },
  },
  {
    icon: 'scale',
    title: { en: 'Comparable and transparent', zh: '可比且透明' },
    body: {
      en: 'The same questions asked of every destination, provider and quote. Two things only sit side by side once each item means the same thing on both.',
      zh: '对每个目的地、每家服务方、每份报价问同样的问题。只有当每一项含义相同时，两样东西才真的能并排放在一起。',
    },
  },
  {
    icon: 'check',
    title: { en: 'Verified sources', zh: '经过核实的来源' },
    body: {
      en: 'A statement names its publisher, its date and the sentence it rests on. What could not be sourced is marked unconfirmed instead of averaged into a figure.',
      zh: '一条表述会写明发布方、日期以及它所依据的那句原话。无法核实的内容会被标为未确认，而不是被平均成一个数字。',
    },
  },
  {
    icon: 'arrow-up-right',
    title: { en: 'Real support', zh: '真实的支持' },
    body: {
      en: 'The enquiry is written against the situation you are actually in, rather than a general answer sent to everyone who asks.',
      zh: '问询是按您实际所处的情况写出来的，而不是把一份通用答复发给所有提问的人。',
    },
  },
];

export const HOME_SERVICES: Record<Lang, {
  eyebrow: string;
  heading: string;
  intro: string;
  cta: string;
}> = {
  en: {
    eyebrow: 'What you can do here',
    heading: 'Three kinds of help, all of them on the decision',
    intro:
      'None of it depends on anyone here working on your behalf: which destination applies, what the whole thing costs, and what to ask the people you will meet.',
    cta: 'Open the tools',
  },
  zh: {
    eyebrow: '您在这里能做什么',
    heading: '三种帮助，全都落在决定本身之上',
    intro: '它们都不需要这里有任何人替您办事：哪个目的地适用、整件事要花多少，以及见到那些人时该问什么。',
    cta: '打开工具',
  },
};

/* Each card is a page that exists, not a category waiting for one. */
export const HOME_SERVICE_ITEMS: { icon: IconName; title: Bilingual; body: Bilingual; href: string }[] = [
  {
    icon: 'map-pin',
    title: { en: 'Destination research and comparison', zh: '目的地调研与比较' },
    body: {
      en: 'Eligibility, parentage at birth, costs and the practical constraints of each country that has a sourced record here.',
      zh: '凡是这里有带出处记录的，都会写明准入条件、出生时的亲权、费用以及实操上的限制。',
    },
    href: '/destinations',
  },
  {
    icon: 'receipt',
    title: { en: 'Costs and budget planning', zh: '费用与预算规划' },
    body: {
      en: 'Break a quote into items, see what sits outside it entirely, and put two programs onto the same basis before you compare them.',
      zh: '把一份报价拆成条目，看清哪些费用完全在它之外，并在比较之前把两个项目放到同一个口径上。',
    },
    href: '/guides/surrogacy-cost',
  },
  {
    icon: 'list-check',
    title: { en: 'Questions for the meetings you already have', zh: '已有的会面前该问什么' },
    body: {
      en: 'The list that decides how an hour gets spent: which question belongs to a lawyer in that jurisdiction, which to the clinic, which to the agency, which to an escrow provider.',
      zh: '决定一个小时怎么花的那份清单：哪个问题属于当地的律师，哪个属于诊所，哪个属于机构，哪个属于托管机构。',
    },
    href: '/tools/agency-question-checklist',
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
    src: stageNotebook,
    alt: {
      en: 'A fountain pen resting on a loose sheet of paper on top of a closed book',
      zh: '一支钢笔放在合上的书本上的一张散页纸上',
    },
  },
  ge: {
    src: concernPresence,
    alt: {
      en: 'A blank month calendar laid out beside two boarding passes, a key and a luggage tag',
      zh: '一张空白的月历与两张登机牌、一把钥匙和一只行李牌并排摆着',
    },
  },
  kz: {
    src: stageReading,
    alt: {
      en: 'An open book and a cup of coffee on a windowsill beside a jar of wildflowers',
      zh: '窗台上摊着一本书、放着一杯咖啡，旁边是一只插着野花的玻璃瓶',
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
    emptyBody: 'This section lists only what is live. A piece appears here once its sources have been checked and it can be read.',
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

/* Keyed by slug so a card whose piece has no photograph of its own renders text-only. */
export const HOME_READING_IMAGES: Record<string, { src: ImageMetadata; alt: Bilingual }> = {
  'questions-to-ask-about-surrogacy-law-before-choosing-a-destination': {
    src: articleDestinations,
    alt: { en: 'An old walled town running down to the sea at sunset', zh: '日落时分一座带城墙的老城一路延伸到海边' },
  },
  'surrogacy-costs-that-sit-outside-a-quote': {
    src: articleCostLines,
    alt: {
      en: 'An open notebook with a pen resting on the page beside small white flowers',
      zh: '一本摊开的笔记本，页面上搁着一支笔，旁边是几朵小白花',
    },
  },
  'surrogacy-legal-considerations': {
    src: articleParentage,
    alt: { en: 'Three people seen from behind, walking at the edge of the sea on a flat beach', zh: '三个人的背影，在平缓的沙滩上朝海边走' },
  },
  'choosing-a-surrogacy-agency': {
    src: articleVerifying,
    alt: { en: 'A laptop open on a white desk beside printed documents', zh: '白色桌上一台打开的笔记本电脑，旁边是打印出来的文件' },
  },
  'the-six-month-limit-on-a-uk-parental-order': {
    src: concernDocuments,
    alt: {
      en: 'Two blank forms, a brass seal and a fountain pen laid out on a pale desk beside a dark red booklet',
      zh: '浅色桌面上摊着两份空白表格、一枚黄铜印章和一支钢笔，旁边是一本深红色的小册子',
    },
  },
  'getting-a-birth-certificate-accepted-abroad': {
    src: verifyContract,
    alt: {
      en: 'A single document and a pen on a white desk beside a small balance scale and a glass vase holding a leafy sprig',
      zh: '白色桌上一份文件与一支笔，旁边是一架小小的天平，玻璃瓶里插着一枝绿叶',
    },
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
      'Write out the priorities and the questions you already have. The form puts them into one message on your screen, word for word, so what you send says what you actually need checked.',
  },
  zh: {
    eyebrow: '写下您的问询',
    heading: '不确定该从哪里开始？',
    para: '把您已经在意的优先级和您手上已有的问题写下来。表单会把它们逐字组装成屏幕上的一封正文，让您发出去的东西说清楚您真正需要核查的是什么。',
  },
};

/*
 * Three lines under the heading. The mock listed a turnaround here; a turnaround is a
 * commitment the site has no inbox to keep yet, so the third line states what the form
 * demonstrably does instead, which the reader can verify by pressing the button.
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
    icon: 'file-text',
    label: { en: 'You see the message', zh: '您会看到正文' },
    body: {
      en: 'The form assembles your enquiry on screen before it goes anywhere.',
      zh: '表单会先把您的问询在屏幕上组装出来，再决定它去哪里。',
    },
  },
];
