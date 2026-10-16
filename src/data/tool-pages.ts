/*
 * The wording of the four tool pages, in both languages.
 *
 * The tools index, the quote comparison and the breadcrumb label live here rather than in the
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
      'Decision tools for intended parents: compare agency quotes line by line, work through a destination, and put questions to an agency in writing. Everything runs in your browser, with no account and no upload.',
    intro:
      'A guide tells you what to check. These are where you actually check it, on your own numbers and your own documents, and leave with a file you can hand to someone else.',
    localNote:
      '{n} tools here, all of them local. Nothing is submitted anywhere; your entries live in this browser and can be cleared at any time.',
    available: 'Available now',
    building: 'Being built',
    open: 'Open the tool',
    notLive: 'Not linked yet, because an unfinished checklist is worse than none.',
  },
  zh: {
    title: '工具',
    label: '工具',
    description:
      '给意向父母的决策工具：逐项对比机构报价、把一个目的地研究透、把问题书面提交给机构。全部在您的浏览器里运行，不需要账户，也不上传任何东西。',
    intro:
      '指南告诉您该核查什么。而这些页面是您真正动手核查的地方：用您自己的数字和您自己的文件，离开时带走一份可以交给别人的文件。',
    localNote: '这里有 {n} 个工具，全部在本地运行。没有任何内容会被提交；您的填写内容保存在这个浏览器里，随时可以清空。',
    available: '现在可用',
    building: '正在建设',
    open: '打开工具',
    notLive: '尚未链接，因为一份没写完的清单比没有清单更糟。',
  },
};

/**
 * Every word the comparison tool prints, including the ones its script assembles after the page
 * has loaded. The script is one bundle shared by both languages, so its copy has to arrive through
 * the DOM rather than be written into it, and a status label hardcoded in English would be the only
 * English on a Chinese row.
 */
export type QuoteChrome = {
  stays: string;
  currency: string;
  /** Sits under the currency selector: one amount column, so every quote must be stated in it. */
  currencyNote: string;
  addItem: string;
  addQuote: string;
  loadExample: string;
  clearAll: string;
  download: string;
  caption: string;
  lineItem: string;
  amount: string;
  /** {name} is the quote as the reader named it. */
  includedIn: string;
  includedFallback: string;
  diffHeading: string;
  diffBody: string;
  /** Split around the status word, which the page prints in a heavier weight. */
  footerA: string;
  footerB: string;
  noscript: string;
  statusIn: string;
  statusOut: string;
  statusVerify: string;
  /** {letter} is A, B or C. */
  quoteName: string;
  removeQuote: string;
  /** {name} is the quote as the reader named it. */
  srName: string;
  /** {item} and {plan}; both fall back to a generic noun when the field is still empty. */
  srAmount: string;
  srScope: string;
  noItem: string;
  noPlan: string;
  /** The generic word for one quote, used when a stored draft has no name. */
  quoteWord: string;
  emptyTitle: string;
  emptyBody: string;
  placeholderItem: string;
  remove: string;
  /** {n} is the count, {s} the plural suffix. */
  unconfirmed: string;
  notIncluded: string;
  unreadable: string;
  pluralS: string;
  oneS: string;
  exportTool: string;
  exportExample: string;
  exportEntered: string;
  exportFilename: string;
  /** The nine rows of the worked example, which is content and so is translated. */
  exampleLabels: [string, string, string, string, string, string, string, string, string];
  exampleQuoteA: string;
  exampleQuoteB: string;
};

export const QUOTE_CHROME: Record<Lang, QuoteChrome> = {
  en: {
    stays:
      'Everything here stays in this browser tab. No account, no upload, no server copy. Downloading gives you the data behind this comparison as a JSON file, written the way it is stored rather than laid out as a document.',
    currency: 'Currency',
    currencyNote: 'One currency for the whole table. Convert a quote stated in another before you enter it, so the columns stay comparable.',
    addItem: 'Add line item',
    addQuote: 'Add quote',
    loadExample: 'Load example',
    clearAll: 'Clear all',
    download: 'Download the data as JSON',
    caption:
      'Each line item is entered once, then recorded for every quote as an amount and whether that quote includes it.',
    lineItem: 'Line item',
    amount: 'Amount',
    includedIn: 'Included in {name}',
    includedFallback: 'this quote',
    diffHeading: 'Difference between the first two quotes',
    diffBody:
      'A gap between two totals is not a cost difference until the scope matches. Check what each quote includes, what it excludes, when payments fall due and what happens on a refund, then compare again.',
    footerA: 'Add anything the quote does not name as a line item. Amounts left blank with ',
    footerB: ' stay out of the totals on purpose, so a total never looks complete when it is not.',
    noscript:
      'This comparison needs JavaScript. Without it, print the same columns and fill them in by hand.',
    statusIn: 'Included',
    statusOut: 'Not included',
    statusVerify: 'Needs checking',
    quoteName: 'Quote {letter}',
    removeQuote: 'Remove quote',
    srName: 'Name for quote {letter}',
    srAmount: 'Amount for {item}, {plan}',
    srScope: 'Scope for {item}, {plan}',
    noItem: 'this item',
    noPlan: 'this quote',
    quoteWord: 'Quote',
    emptyTitle: 'No line items yet',
    emptyBody:
      'Add each cost the quote names as its own line item. Anything the quote does not mention is worth adding too, with its scope set to Needs checking.',
    placeholderItem: 'Line item name',
    remove: 'Remove',
    unconfirmed: '{n} item{s} unconfirmed',
    notIncluded: '{n} listed as not included',
    unreadable: '{n} amount{s} need a plain number, without a currency symbol or a range',
    pluralS: 's',
    oneS: '',
    exportTool: 'SurrogacyBase agency quote comparison',
    exportExample: 'Example figures. Invented for demonstration, not a real quote.',
    exportEntered:
      'Entered in your own browser. Totals exclude items marked Needs checking.',
    exportFilename: 'surrogacy-quote-comparison.json',
    exampleLabels: [
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
    exampleQuoteA: 'Example quote A',
    exampleQuoteB: 'Example quote B',
  },
  zh: {
    stays:
      '这里的一切只留在这个浏览器标签页里。没有账户，没有上传，服务器上没有副本。下载得到的是这份对比背后的数据，是一个 JSON 文件，按存储的原样写出，而不是一份排版好的文档。',
    currency: '货币',
    currencyNote: '整张表只用一种货币。报价若是别的货币开出的，请先换算再录入，各列才可比。',
    addItem: '添加条目',
    addQuote: '添加报价',
    loadExample: '载入示例',
    clearAll: '全部清空',
    download: '下载数据（JSON）',
    caption: '每个条目只录入一次，然后在每一份报价里记为金额，以及这份报价是否包含它。',
    lineItem: '条目',
    amount: '金额',
    includedIn: '是否包含于「{name}」',
    includedFallback: '这份报价',
    diffHeading: '前两份报价之间的差额',
    diffBody:
      '在范围一致之前，两个总额之间的差距并不等于成本的差异。先看清每份报价包含什么、排除什么、付款何时到期、退款时怎么处理，然后再来比较。',
    footerA: '报价没有列为条目的任何一项，都请补进来。留空且标为',
    footerB: '的金额会被有意排除在合计之外，于是一个总额永远不会在它并不完整的时候看起来完整。',
    noscript: '这个对比需要 JavaScript。没有它，请把这些列打印出来手工填写。',
    statusIn: '包含',
    statusOut: '不包含',
    statusVerify: '待核查',
    quoteName: '报价 {letter}',
    removeQuote: '移除这份报价',
    srName: '报价 {letter} 的名称',
    srAmount: '{plan}中「{item}」的金额',
    srScope: '{plan}中「{item}」的范围',
    noItem: '这一条目',
    noPlan: '这份报价',
    quoteWord: '报价',
    emptyTitle: '还没有条目',
    emptyBody:
      '把报价里列出的每一项成本都加成单独的条目。报价没有提到的东西也值得补上一条，并把范围设为待核查。',
    placeholderItem: '条目名称',
    remove: '移除',
    unconfirmed: '{n} 项尚未确认',
    notIncluded: '{n} 项列为不包含',
    unreadable: '{n} 个金额要写成纯数字，不带货币符号，也不带区间',
    pluralS: '',
    oneS: '',
    exportTool: 'SurrogacyBase 机构报价对比',
    exportExample: '示例数字。为演示而虚构，不是一份真实报价。',
    exportEntered: '由您自己在浏览器里填写。合计不包含标为待核查的条目。',
    exportFilename: 'surrogacy-quote-comparison-zh.json',
    exampleLabels: [
      '机构方案费',
      '代孕者补偿',
      '独立法律顾问（双方）',
      '试管诊所与药物',
      '资金监管费',
      '代孕者人寿保险',
      '孕期着装与差旅费用',
      '亲权裁定或法院立案',
      '备用金',
    ],
    exampleQuoteA: '示例报价 A',
    exampleQuoteB: '示例报价 B',
  },
};

export const QUOTE_PAGE: Record<Lang, QuotePage> = {
  en: {
    title: 'Agency quote comparison',
    description:
      'Compare two or three surrogacy quotes line by line: what each one includes, what it excludes, what is still unclear, and why the gap between two totals is not yet a cost difference.',
    h1: 'Agency quote comparison',
    intro:
      'Two quotes rarely differ because one agency is cheaper. They differ because one quote counts things the other left out. This tool puts the same line items side by side so you can see which totals are complete and which still have costs missing.',
    howToHeading: 'How to use it',
    howTo: [
      "Copy each quote in as its own column, keeping the provider's own wording for line items.",
      'Set every line item to included, not included, or needs checking. One you cannot place is information, not a failure.',
      'Add the costs neither quote mentions: independent legal counsel, escrow administration, insurance, contingency, parentage proceedings.',
      'Only read the difference once both columns cover the same line items.',
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
      '逐项对比两三份代孕报价：每份包含什么、排除什么、还有什么不确定，以及为什么两个总额之间的差额还算不上一笔成本差异。',
    h1: '机构报价对比',
    intro:
      '两份报价之所以不同，很少是因为某一家机构更便宜。它们的不同在于一份报价算了另一份没算的东西。这个工具把同样的条目并排放置，让您看清哪些总额是完整的，哪些还缺着成本。',
    howToHeading: '怎么使用',
    howTo: [
      '把每一份报价录入成单独的一列，条目沿用服务方自己的措辞。',
      '把每个条目设为包含、不包含或待核查。有一个条目放不进去，本身就是信息，不是失误。',
      '补上两份报价都没有提到的成本：独立法律顾问、资金监管费、保险、备用金、亲权程序。',
      '只有当两列覆盖同样的条目之后，再去读那个差额。',
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
