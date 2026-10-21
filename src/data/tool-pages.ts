/*
 * The wording of the five tool pages, in both languages.
 *
 * The tools index, the quote comparison, the cost figures page and the breadcrumb label live here rather than in the
 * route files, because one route now serves both languages and a page assembled from English
 * headings on a Chinese URL is the exact failure the rest of this site is built to prevent.
 *
 * `chrome` blocks are Record<Lang, X>, so the compiler asks for every key in both languages. The
 * one thing that is *not* here is the checklist question list, which lives with its own answers in
 * src/data/checklists.
 */
import type { Lang } from '@/i18n/config';

export type ToolsIndexPage = {
  title: string;
  /** The short form the breadcrumb and the tools index h1 both use. */
  label: string;
  description: string;
  intro: string;
  /** {n} is the count of tools on the page. */
  localNote: string;
  available: string;
  building: string;
  open: string;
  notLive: string;
};

export type QuotePage = {
  title: string;
  description: string;
  h1: string;
  intro: string;
  howToHeading: string;
  howTo: [string, string, string, string];
  limitsHeading: string;
  limits: [string, string, string];
  bandHeading: string;
  bandBody: string;
  bandCostGuide: string;
  bandQuestions: string;
};

export const TOOLS_INDEX_PAGE: Record<Lang, ToolsIndexPage> = {
  en: {
    title: 'Tools',
    label: 'Tools',
    description:
      'Decision tools for intended parents: compare two agency quotes across the nine costs a quote normally names, take a destination apart question by question, put your questions to an agency in writing, and read the cost figures sources have published. Nothing is uploaded and nothing is kept after you close the page. No account.',
    intro:
      'A guide tells you what to check. These are where you actually do it, on your own numbers and your own documents, and what you leave with is something you can show someone: a filled-in document, or a figure with its source attached.',
    localNote:
      '{n} tools here, and none of them asks you to create an account or sends what you type anywhere. The quote comparison holds nothing once you close the tab, the two checklists download as documents you fill in yourself, and the cost figures page shows numbers that sources have already published, with nothing for you to enter.',
    available: 'Available now',
    building: 'Coming soon',
    open: 'Open the tool',
    notLive: 'This tool is not ready yet. Its link will appear here when it is.',
  },
  zh: {
    title: '工具',
    label: '工具',
    description:
      '给意向父母的决策工具：让两份机构报价落在代孕报价通常列出的九项成本上逐一对比、把一个目的地逐题拆开、把您的问题书面提交给机构，并阅读各个来源已经发布的费用数字。没有任何内容会被上传，关掉页面后也不保留任何东西。不需要账户。',
    intro:
      '指南告诉您该核查什么。而这些页面才是您真正动手的地方：用您自己的数字和您自己的文件。您带走的东西都拿得给别人看：一份填好的文档，或者一个带着来源的数字。',
    localNote: '这里有 {n} 个工具，都不需要账户，也不会把您输入的内容发送到任何地方。报价对比在您关掉标签页后不保留任何东西；两份清单会下载成由您自己填写的文档；费用数字页面展示的是各个来源早已发布的数字，您什么都不必输入。',
    available: '现在可用',
    building: '即将上线',
    open: '打开工具',
    notLive: '这个工具还在准备中，上线后链接会出现在这里。',
  },
};

/**
 * Every word the comparison tool prints, including the ones its script assembles after the page
 * has loaded. The script is one bundle shared by both languages, so its copy has to arrive through
 * the DOM rather than be written into it, and a status label hardcoded in English would be the only
 * English on a Chinese row.
 *
 * `items` is the fixed set of rows the table is printed with: the costs a surrogacy quote is
 * usually built from are known in advance, so the tool asks the reader to fill two columns
 * instead of assembling the grid first.
 */
export type QuoteChrome = {
  stays: string;
  currency: string;
  /** Sits under the currency selector: one amount column, so every quote must be stated in it. */
  currencyNote: string;
  currencies: string[];
  download: string;
  reset: string;
  caption: string;
  lineItem: string;
  amount: string;
  /** {letter} is A or B. */
  quoteName: string;
  /** {item} and {plan}. */
  srAmount: string;
  srScope: string;
  statusIn: string;
  statusOut: string;
  statusVerify: string;
  /** {n} is the count, {s} the plural suffix. */
  unconfirmed: string;
  notIncluded: string;
  unreadable: string;
  pluralS: string;
  oneS: string;
  diffHeading: string;
  diffBody: string;
  footer: string;
  exportTool: string;
  savedLine: string;
  exportNote: string;
  totalLine: string;
  diffLine: string;
  exportFooter: string;
  exportFilename: string;
  /** The fixed items of the table, which is content and so is translated. */
  items: [string, string, string, string, string, string, string, string, string];
};

export const QUOTE_CHROME: Record<Lang, QuoteChrome> = {
  en: {
    stays:
      'Nothing here is collected: no account, no upload, and nothing kept after this tab closes. The download saves the table as a file you can keep; that file is the only copy.',
    currency: 'Currency',
    currencyNote: 'One currency for the whole table. Convert a quote stated in another before you enter it, so the columns stay comparable.',
    currencies: ['USD', 'EUR', 'GBP', 'AUD', 'CAD', 'THB', 'INR', 'UAH', 'COP'],
    download: 'Download this table',
    reset: 'Clear the amounts',
    caption:
      'The common costs a surrogacy quote is built from, printed as fixed items. For each quote, enter the amount it states and set whether that quote includes it.',
    lineItem: 'Line item',
    amount: 'Amount',
    quoteName: 'Quote {letter}',
    srAmount: 'Amount for {item}, {plan}',
    srScope: 'Scope for {item}, {plan}',
    statusIn: 'Included',
    statusOut: 'Not included',
    statusVerify: 'Needs checking',
    unconfirmed: '{n} item{s} unconfirmed',
    notIncluded: '{n} listed as not included',
    unreadable: '{n} item{s} not written as a plain number, without a currency symbol or a range',
    pluralS: 's',
    oneS: '',
    diffHeading: 'Difference between the two quotes',
    diffBody:
      'A gap between two totals is not a cost difference until the scope matches. Check what each quote includes, what it excludes, when payments fall due and what happens on a refund, then compare again.',
    footer:
      'These nine costs cover what a quote usually names. Where one of them plays no role in your program, set it to Not included. Amounts left blank with Needs checking stay out of the totals on purpose, so a total never looks complete when it is not.',
    exportTool: 'SurrogacyBase agency quote comparison',
    savedLine: 'Filled in on',
    exportNote: 'Written from the table as it stands. Totals exclude items that are not marked Included.',
    totalLine: 'Totals',
    diffLine: 'Difference',
    exportFooter:
      'From SurrogacyBase. A difference between two totals is not a cost difference until the scope behind each number matches.',
    exportFilename: 'surrogacy-quote-comparison.md',
    items: [
      'Agency program fee',
      'Surrogate compensation',
      'Independent legal counsel (both sides)',
      'IVF clinic and medication',
      'Escrow administration',
      'Life insurance for the surrogate',
      'Maternity garment and travel costs',
      'Parentage order or court filing',
      'Contingency reserve',
    ],
  },
  zh: {
    stays:
      '这里不收集任何内容：没有账户，没有上传，关掉这个标签页后也不保留任何东西。下载会把这张表保存成一份您可以留存的文档，那个文件就是唯一的副本。',
    currency: '货币',
    currencyNote: '整张表只用一种货币。报价若是别的货币开出的，请先换算再录入，各列才可比。',
    currencies: ['USD', 'EUR', 'GBP', 'AUD', 'CAD', 'THB', 'INR', 'UAH', 'COP'],
    download: '下载这张表格',
    reset: '清空金额',
    caption: '代孕报价通常由这些成本搭成，它们已印成固定的行。请为每份报价填入它写明的金额，并标注这份报价是否包含它。',
    lineItem: '条目',
    amount: '金额',
    quoteName: '报价 {letter}',
    srAmount: '{plan}中「{item}」的金额',
    srScope: '{plan}中「{item}」的范围',
    statusIn: '包含',
    statusOut: '不包含',
    statusVerify: '待核查',
    unconfirmed: '{n} 项尚未确认',
    notIncluded: '{n} 项列为不包含',
    unreadable: '{n} 个金额要写成纯数字，不带货币符号，也不带区间',
    pluralS: '',
    oneS: '',
    diffHeading: '两份报价之间的差额',
    diffBody:
      '在范围一致之前，两个总额之间的差距并不等于成本的差异。先看清每份报价包含什么、排除什么、付款何时到期、退款时怎么处理，然后再来比较。',
    footer:
      '这些行覆盖了报价通常会写明的项目。您的方案里确实用不到哪一行，就把它设为不包含。留空且标为待核查的金额会被有意排除在合计之外，于是一个总额永远不会在它并不完整的时候看起来完整。',
    exportTool: 'SurrogacyBase 机构报价对比',
    savedLine: '填写于',
    exportNote: '按表格当前的样子写出。合计不包含未标为包含的条目。',
    totalLine: '合计',
    diffLine: '差额',
    exportFooter: '来自 SurrogacyBase。在两个数字背后的范围一致之前，总额之差并不等于成本差异。',
    exportFilename: 'surrogacy-quote-comparison-zh.md',
    items: [
      '机构方案费',
      '代孕者补偿',
      '独立法律顾问（双方）',
      '试管诊所与药物',
      '资金托管费',
      '代孕者人寿保险',
      '孕期着装与差旅费用',
      '亲权裁定或法院立案',
      '备用金',
    ],
  },
};
export const QUOTE_PAGE: Record<Lang, QuotePage> = {
  en: {
    title: 'Agency quote comparison',
    description:
      'Compare two surrogacy quotes across the same nine costs: what each one includes, what it excludes, what is still unclear, and why the gap between two totals is not yet a cost difference.',
    h1: 'Agency quote comparison',
    intro:
      'Two quotes rarely differ because one agency is cheaper. They differ because one quote counts things the other left out. This tool puts the same line items side by side so you can see which totals are complete and which still have costs missing.',
    howToHeading: 'How to use it',
    howTo: [
      'Copy each quote into its own column. The nine costs printed here are the ones a quote is usually built from.',
      'Set every cost to included, not included, or needs checking. One you cannot place is information, not a failure.',
      'A cost that plays no role in your program is marked not included, so the table says so rather than going quiet.',
      'Only read the difference once both columns cover the same costs.',
    ],
    limitsHeading: 'What this tool will not do',
    limits: [
      'It does not judge whether a price is fair. That depends on the services behind it and the market it sits in.',
      'It does not convert currencies. Compare quotes in the currency they were issued in, or exchange rates become part of the difference.',
      'It does not store anything on a server, and it does not send your quote to anyone.',
    ],
    bandHeading: 'Reading a quote is one part of the decision',
    bandBody:
      'The cost guide explains what normally sits inside a surrogacy budget and what is commonly excluded from it.',
    bandCostGuide: 'Cost guide',
    bandQuestions: 'Ask before you sign',
  },
  zh: {
    title: '机构报价对比',
    description:
      '把两份代孕报价对在同一组九项成本上对比：每份包含什么、排除什么、还有什么不确定，以及为什么两个总额之间的差额还算不上一笔成本差异。',
    h1: '机构报价对比',
    intro:
      '两份报价之所以不同，很少是因为某一家机构更便宜。它们的不同在于一份报价算了另一份没算的东西。这个工具把同样的条目并排放置，让您看清哪些总额是完整的，哪些还缺着成本。',
    howToHeading: '怎么使用',
    howTo: [
      '把每一份报价录入成单独的一列。这里印出的九项成本，正是一份报价通常由以搭成的。',
      '把每一项设为包含、不包含或待核查。有一项放不进去，本身就是信息，不是失误。',
      '您的方案里确实用不到的一项，就标为不包含，让表格明确说出这一点，而不是默默跳过。',
      '只有当两列覆盖同样的项目之后，再去读那个差额。',
    ],
    limitsHeading: '这个工具不会做什么',
    limits: [
      '它不判断一个价格是否公道。那取决于背后的服务和它所在的市场。',
      '它不做货币换算。请按报价原本使用的货币来比较，否则汇率会变成差额的一部分。',
      '它不在服务器上存任何东西，也不会把您的报价发给任何人。',
    ],
    bandHeading: '读懂一份报价只是决定的一部分',
    bandBody: '费用指南解释了代孕预算里通常包含什么，以及什么通常被排除在外。',
    bandCostGuide: '费用指南',
    bandQuestions: '签约前先提问',
  },
};

/**
 * The cost figures page. The amounts, currencies and years are data in src/data/jurisdictions and are
 * identical in both languages, and the labels a destination page already prints beside a figure (the line
 * names, the column heads, the year, the date a source was read) come from UI[lang], so what is written
 * here is only the wording this page has no twin for.
 */
export type CostToolPage = {
  title: string;
  description: string;
  h1: string;
  lede: string;
  /** The line beside the document icon: what this page adds to a figure, which is nothing. */
  note: string;
  groupsHeading: string;
  groupsIntro: string;
  /** The one column head a destination page has no reason to carry. */
  destinationHead: string;
  /** Under a line whose every figure came from one source. */
  singleSource: string;
  /** Under a line no source has put a figure on. */
  noFigure: string;
  emptyHeading: string;
  emptyBody: string;
  closing: { heading: string; body: string; links: [string, string, string] };
};

export const COST_TOOL_PAGE: Record<Lang, CostToolPage> = {
  en: {
    title: 'Published cost figures',
    description:
      'Every cost figure this site publishes, grouped by the line it covers rather than by country, each with its source and the year it describes.',
    h1: 'Published cost figures',
    lede: 'A destination page shows the one figure that stands out for that place. Here every published figure sits under the line it covers, so whole-program numbers, medical costs and what is paid to a carrier can each be read across destinations and across the sources that wrote them.',
    note: 'No figure here was worked out by us. Each one was published by a named source, in the currency that source wrote it in, for the year the row states.',
    groupsHeading: 'Every published figure, by the line it covers',
    groupsIntro:
      'These are the lines a quote is usually built from. A figure sits under the line it covers, so one line can be read across destinations and across the sources that wrote about them.',
    destinationHead: 'Destination',
    singleSource: 'Only one source published a figure for this line, so there is no second published figure to read it against.',
    noFigure: 'No source has published a figure for this line.',
    emptyHeading: 'Where no figure is published',
    emptyBody:
      'These destinations publish no cost figure. Their pages state what may be paid there under the local rules, and that is as far as the published record currently goes.',
    closing: {
      heading: 'What a published figure is for',
      body: 'A figure from a source is a reference point rather than a budget. Find the line in your own quote that matches one of these rows, ask the provider what its own figure covers that the published one does not, and write the answer beside the question with the name and the date that gave it.',
      links: ['How to read a surrogacy cost', 'Why no average exists', 'Compare two quotes'],
    },
  },
  zh: {
    title: '已发布的费用数字',
    description: '把本站发布的每一个费用数字按它覆盖的条目来分组，而不是按国家；每个数字都带着发布它的那份来源，以及这些数字所对应的年份。',
    h1: '已发布的费用数字',
    lede: '目的地页面只给出对那里而言最显眼的一个数字。在这个页面上，每个已发布的数字都落在它自己覆盖的那一行下面：整个流程的数字、医疗成本、支付给代孕者的数字各自放在一起，可以跨目的地、跨写出它们的各个来源来读。',
    note: '这里的数字没有一个是我们算出来的。每一个都由某个具名来源发布，沿用那个来源写下的货币，并对应这一行标明的年份。',
    groupsHeading: '每一个已发布的数字，按它覆盖的条目排列',
    groupsIntro: '这些条目正是一份报价通常搭起来的方式。一个数字落在它覆盖的那一行下面，于是同一行可以跨目的地、跨写出它的各个来源来读。',
    destinationHead: '目的地',
    singleSource: '这一行只有一个来源发布过数字，所以没有第二个已发布的数字可以与它对照。',
    noFigure: '还没有任何来源为这一行发布过数字。',
    emptyHeading: '没有发布数字的地方',
    emptyBody: '下面这些目的地没有发布任何数字。它们的页面写明了在当地规则之下可以支付什么，而已发布的记录目前能走到的也就是这里。',
    closing: {
      heading: '一个已发布的数字能用来做什么',
      body: '来自某个来源的数字是一个参照点，不是一份预算。在您自己的报价里找出与这些行对得上的那一条，问清对方报的范围与这个已发布的数字之间差在哪里，并把回答写在问题旁边，附上给出回答的人名和日期。',
      links: ['怎么读一份代孕费用', '为什么不存在平均费用', '对比两份报价'],
    },
  },
};



