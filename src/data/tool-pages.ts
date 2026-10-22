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
  titleTag: string;
  /** The short form the breadcrumb and the tools index h1 both use. */
  label: string;
  description: string;
  intro: string;
  countOne: string;
  countMany: string;
  /** {n} is the count of tools on the page. */
  localNote: string;
  fitHeading: string;
  fitIntro: string;
  fitSteps: { title: string; body: string }[];
  leavesHeading: string;
  leaves: { title: string; body: string }[];
  beforeHeading: string;
  before: { title: string; body: string }[];
  guidesHeading: string;
  guidesIntro: string;
  allGuides: string;
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
    titleTag: 'Surrogacy Tools',
    label: 'Tools',
    description:
      'Tools for intended parents: compare agency quotes, read published cost figures, research a destination, and put questions to an agency in writing.',
    intro:
      'A guide tells you what to check. These are where you actually do it, on your own numbers and your own documents, and what you leave with is something you can show someone: a filled-in document, or a figure with its source attached.',
    countOne: '1 tool ready to use',
    countMany: '{n} tools ready to use',
    localNote:
      'None of them asks you to create an account or sends what you type anywhere. The quote comparison holds nothing once you close the tab, the two checklists download as documents you fill in yourself, and the cost figures page shows numbers that sources have already published, with nothing for you to enter.',
    fitHeading: 'How the tools fit together',
    fitIntro:
      'None of them decides for you. They carry a decision from reading to a conversation, in three steps.',
    fitSteps: [
      {
        title: 'Read the guide behind it',
        body: 'Each tool asks questions a guide has already explained. Read that guide first when a term or a step is unfamiliar.',
      },
      {
        title: 'Fill it with your own facts',
        body: 'Use the quote you were sent, the destination you are considering, or the questions you need answered. The tool works on your material, not a sample.',
      },
      {
        title: 'Take the file into the conversation',
        body: 'Download the table or document and bring it to the lawyer, clinic or agency. Your notes, names and dates stay together in one file.',
      },
    ],
    leavesHeading: 'What you leave with',
    leaves: [
      {
        title: 'Two quotes on the same lines',
        body: 'The quote comparison puts the common costs a quote usually names side by side and keeps unconfirmed amounts out of the total.',
      },
      {
        title: 'A box beside every question',
        body: 'Both checklists download as a document you fill in yourself, one question at a time.',
      },
      {
        title: 'A figure with its source and year',
        body: 'The cost figures page repeats only numbers a named source has published, in that source’s currency and year.',
      },
    ],
    beforeHeading: 'Before you start',
    before: [
      {
        title: 'Use the real document',
        body: 'Enter the quote or contract you actually received, not a remembered total. The wording is what you are checking.',
      },
      {
        title: 'Write what it says before what it means',
        body: 'Put the provider’s words in first. The distance between their wording and your reading is the question to ask.',
      },
      {
        title: 'Keep the name and the date',
        body: 'An answer becomes checkable when you record who gave it, on what date, and for which of your questions.',
      },
    ],
    guidesHeading: 'The guides behind these tools',
    guidesIntro:
      'Each tool belongs to a decision a guide works through from start to finish. Start with the guide when you want the reasoning before the form.',
    allGuides: 'All guides',
    available: 'Available now',
    building: 'Coming soon',
    open: 'Open the tool',
    notLive: 'This tool is not ready yet. Its link will appear here when it is.',
  },
  zh: {
    title: '工具',
    titleTag: '代孕工具',
    label: '工具',
    description:
      '给意向父母的工具：对比两份机构报价、查阅已发布的费用数字、逐题研究目的地、把问题书面提交给机构。不需要账户，也不会上传您的内容。',
    intro:
      '指南告诉您该核查什么。而这些页面才是您真正动手的地方：用您自己的数字和您自己的文件。您带走的东西都拿得给别人看：一份填好的文档，或者一个带着来源的数字。',
    countOne: '1 个工具可直接使用',
    countMany: '{n} 个工具可直接使用',
    localNote: '这些工具都不需要账户，也不会把您输入的内容发送到任何地方。报价对比在您关掉标签页后不保留任何东西；两份清单会下载成由您自己填写的文档；费用数字页面展示的是各个来源早已发布的数字，您什么都不必输入。',
    fitHeading: '这些工具怎么接在一起',
    fitIntro: '它们都不替您做决定，而是把一项决定从阅读带到一次谈话里，分三步走。',
    fitSteps: [
      {
        title: '先读它背后的指南',
        body: '每个工具问的问题，指南里都已经讲过。遇到不熟悉的词或步骤，先读那一篇。',
      },
      {
        title: '用您自己的材料填写',
        body: '用您收到的报价、您正在考虑的目的地，或您需要得到回答的问题。工具处理的是您的材料，不是示例。',
      },
      {
        title: '把文件带进谈话',
        body: '把表格或文档下载下来，带去见律师、诊所或机构。您的笔记、名字和日期都留在同一份文件里。',
      },
    ],
    leavesHeading: '您会带走什么',
    leaves: [
      {
        title: '两份报价，落在同样的条目上',
        body: '报价对比把报价通常列出的成本并排放好，并把未确认的金额排除在合计之外。',
      },
      {
        title: '每个问题旁边都有一个方框',
        body: '两份清单都会下载成由您自己填写的文档，一次回答一个问题。',
      },
      {
        title: '一个带着来源和年份的数字',
        body: '费用数字页面只重复具名来源发布过的数字，沿用那份来源的货币和年份。',
      },
    ],
    beforeHeading: '开始之前',
    before: [
      {
        title: '用真实的那份文件',
        body: '录入您实际收到的报价或合同，而不是记忆中的总额。您要核查的是它的措辞。',
      },
      {
        title: '先写它说了什么，再写您怎么理解',
        body: '先把对方的原话放进去。对方的措辞和您的理解之间的距离，就是您要问的问题。',
      },
      {
        title: '留下名字和日期',
        body: '记下是谁、在哪一天、针对哪个问题给出了回答，这个回答才可以再次核对。',
      },
    ],
    guidesHeading: '这些工具背后的指南',
    guidesIntro: '每个工具都属于一个决定，而指南会把这个决定从头讲到尾。想先弄懂理由，再动表格，就从指南开始。',
    allGuides: '全部指南',
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



