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
  /** A plain first line under the H1: what the reader actually does on this page. */
  purpose: string;
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
  titleTag: string;
  description: string;
  h1: string;
  /** A plain first line under the H1: what the reader actually does on this page. */
  purpose: string;
  intro: string;
  howToHeading: string;
  howTo: [string, string, string, string];
  limitsHeading: string;
  limits: [string, string, string];
  outsideHeading: string;
  outsideIntro: string;
  outsideItems: [string, string, string];
  outsideLink: string;
  bandHeading: string;
  bandBody: string;
  bandCostGuide: string;
  bandQuestions: string;
};

export const TOOLS_INDEX_PAGE: Record<Lang, ToolsIndexPage> = {
  en: {
    title: 'Tools',
    titleTag: 'Surrogacy Tools: Costs, Quotes, Destinations',
    label: 'Tools',
    description:
      'Tools for intended parents: compare destinations and two agency quotes, read published cost figures, and put research questions to an agency in writing.',
    purpose:
      'What you do here: compare countries and quotes, read the published cost figures, and turn what you find into a document you can hand to a lawyer or agency.',
    intro:
      'A guide says what to check. These are where you do it, on your own numbers, and leave with something you can hand over.',
    countOne: '1 tool ready to use',
    countMany: '{n} tools ready to use',
    localNote:
      'No account, and nothing you type leaves your browser. The two comparisons hold nothing once you close the tab, the checklists download as files you fill in, and the cost figures page shows only what sources have already published.',
    fitHeading: 'How the tools fit together',
    fitIntro:
      'None of them decides for you. They carry a decision from reading into a conversation, in three steps.',
    fitSteps: [
      {
        title: 'Read the guide behind it',
        body: 'Each tool asks questions a guide has already explained. Read that guide if a term is unfamiliar.',
      },
      {
        title: 'Fill it with your own facts',
        body: 'Use the quote you were sent, the destination you are considering, or the questions you need answered.',
      },
      {
        title: 'Take the file into the conversation',
        body: 'Download it and bring it to the lawyer, clinic or agency. Your notes, names and dates stay in one file.',
      },
    ],
    leavesHeading: 'What you leave with',
    leaves: [
      {
        title: 'A shortlist on one board',
        body: 'The destination comparison repeats each selected record side by side, so a place that cannot answer your situation is easier to remove.',
      },
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
    titleTag: '代孕工具：比较报价、费用与目的地',
    label: '工具',
    description:
      '给意向父母的工具：并排对比目的地记录、对比两份机构报价、查阅已公布的费用数据、逐题研究目的地、把问题书面提交给机构。不需要账户，也不会上传您的内容。',
    purpose: '这一页做什么：对比国家和报价、查看已公布的费用数据，把结果整理成一份能交给律师或机构的文件。',
    intro:
      '指南告诉您该核查什么，这些页面是您动手的地方。用您自己的报价和文件，带走一份能直接出示的东西。',
    countOne: '1 个工具可直接使用',
    countMany: '{n} 个工具可直接使用',
    localNote: '不需要账户，您输入的内容也不会离开这台浏览器。两个对比工具关掉标签页就不保留内容；两份清单下载后由您自己填写；费用数据页只呈现来源已经公布的数据。',
    fitHeading: '这些工具怎么接在一起',
    fitIntro: '它们都不替您做决定，只是把一项决定从阅读带进一次谈话，分三步。',
    fitSteps: [
      {
        title: '先读它背后的指南',
        body: '每个工具问的问题，指南里都已经讲过。遇到不熟悉的词，先读那一篇。',
      },
      {
        title: '用您自己的材料填写',
        body: '用您收到的报价、正在考虑的目的地，或您需要得到回答的问题。',
      },
      {
        title: '把文件带进谈话',
        body: '下载下来，带去见律师、诊所或机构。笔记、名字和日期都在同一份文件里。',
      },
    ],
    leavesHeading: '您会带走什么',
    leaves: [
      {
        title: '一份并排的候选名单',
        body: '目的地对比把选中的记录并排复述，回答不了您情况的地方更容易被排除。',
      },
      {
        title: '两份报价，落在同样的条目上',
        body: '报价对比把报价通常列出的成本并排放好，并把未确认的金额排除在合计之外。',
      },
      {
        title: '每个问题旁边都有一个方框',
        body: '两份清单都会下载成由您自己填写的文档，一次回答一个问题。',
      },
      {
        title: '一项标注来源与年份的费用数据',
        body: '费用数据页面只呈现具名来源公布过的数据，沿用该来源的币种和年份。',
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
  /** Explains that typing an amount includes the line, and what a blank line means. */
  statusHint: string;
  addPlan: string;
  removePlan: string;
  /** {done} and {total}. */
  progress: string;
  lineItem: string;
  /** {letter} is A or B. */
  quoteName: string;
  /** {item} and {plan}. */
  srScope: string;
  statusIn: string;
  statusOut: string;
  statusVerify: string;
  /** Used in the file when an item is marked included but has no amount. */
  amountMissing: string;
  /** {n} is the count, {s} the plural suffix. */
  unconfirmed: string;
  notIncluded: string;
  unreadable: string;
  pluralS: string;
  oneS: string;
  totalLabel: string;
  totalHint: string;
  diffHeading: string;
  diffBody: string;
  footer: string;
  exportTool: string;
  savedLine: string;
  exportNote: string;
  totalLine: string;
  totalLineOne: string;
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
    currencyNote: 'One currency for every quote. Convert a quote stated in another before you enter it, so the totals stay comparable.',
    currencies: ['USD', 'EUR', 'GBP', 'AUD', 'CAD', 'THB', 'INR', 'UAH', 'COP'],
    download: 'Download this table',
    reset: 'Clear the amounts',
    statusHint:
      'Type an amount and that line counts as included in the total. Choose Not included where the quote excludes a line. Leave the amount blank where the quote does not mention it.',
    addPlan: 'Add a second quote',
    removePlan: 'Remove quote B',
    progress: '{done} of {total} filled',
    lineItem: 'Line item',
    quoteName: 'Quote {letter}',
    srScope: 'Scope for {item}, {plan}',
    statusIn: 'Included',
    statusOut: 'Not included',
    statusVerify: 'To check',
    amountMissing: 'amount not stated',
    unconfirmed: '{n} item{s} left out of the total',
    notIncluded: '{n} marked not included',
    unreadable: '{n} item{s} not written as a plain number, without a currency symbol or a range',
    pluralS: 's',
    oneS: '',
    totalLabel: 'Total so far',
    totalHint: 'Lines left blank or marked not included stay out of this total.',
    diffHeading: 'Difference between the two totals so far',
    diffBody:
      'A gap between two totals is not a cost difference until the scope matches. Check what each quote includes, what it excludes, when payments fall due and what happens on a refund, then compare again.',
    footer:
      'These nine lines cover what a quote usually names, not everything a program costs. A total can be complete on its own terms and still not be a budget.',
    exportTool: 'SurrogacyBase agency quote comparison',
    savedLine: 'Filled in on',
    exportNote: 'Written from the quotes on screen. Totals exclude lines that are blank or marked not included.',
    totalLine: 'Totals',
    totalLineOne: 'Total',
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
    currencyNote: '每份报价都用同一种货币。报价若是别的货币开出的，请先换算再录入，合计才可比。',
    currencies: ['USD', 'EUR', 'GBP', 'AUD', 'CAD', 'THB', 'INR', 'UAH', 'COP'],
    download: '下载这张表格',
    reset: '清空金额',
    statusHint: '填入金额，这一项就自动算作包含并计入合计。报价明确不包含的，改选不包含。报价没有提到的，金额留空即可。',
    addPlan: '添加第二份报价',
    removePlan: '移除报价 B',
    progress: '已填 {done}/{total} 项',
    lineItem: '条目',
    quoteName: '报价 {letter}',
    srScope: '{plan}中「{item}」的范围',
    statusIn: '包含',
    statusOut: '不包含',
    statusVerify: '待核查',
    amountMissing: '未填金额',
    unconfirmed: '{n} 项未计入合计',
    notIncluded: '{n} 项明确不包含',
    unreadable: '{n} 个金额要写成纯数字，不带货币符号，也不带区间',
    pluralS: '',
    oneS: '',
    totalLabel: '当前合计',
    totalHint: '留空或标为不包含的项目不计入这个合计。',
    diffHeading: '两个当前合计之间的差额',
    diffBody:
      '在范围一致之前，两个总额之间的差距并不等于成本的差异。先看清每份报价包含什么、排除什么、付款何时到期、退款时怎么处理，然后再来比较。',
    footer: '这九项覆盖报价通常会写明的成本，但不是一个方案的全部开销。一个总额可能在自己的范围内是完整的，却仍然算不上预算。',
    exportTool: 'SurrogacyBase 机构报价对比',
    savedLine: '填写于',
    exportNote: '按屏幕上当前的报价写出。留空或标为不包含的项目不计入合计。',
    totalLine: '合计',
    totalLineOne: '合计',
    diffLine: '差额',
    exportFooter: '来自 SurrogacyBase。在两份报价的范围一致之前，总额之差并不等于成本差异。',
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
    titleTag: 'Compare Two Surrogacy Agency Quotes',
    description:
      'Compare one or two surrogacy quotes across the same nine costs: what each includes, what it leaves out, and why a gap between totals is not yet a cost difference.',
    h1: 'Agency quote comparison',
    purpose:
      'What you do here: type the amounts from your quote into nine fixed cost lines and see what each total still leaves out.',
    intro:
      'Two quotes differ less because one agency is cheaper than because one counts things the other left out. Start with the quote you have.',
    howToHeading: 'How to use it',
    howTo: [
      'The nine costs a quote is usually built from are already printed. Type the amount the quote states beside each one; you do not need to build the table yourself.',
      'An amount is counted as included the moment you type it. Choose Not included only where the quote explicitly excludes a line.',
      'Leave an amount blank where the quote does not mention that line. A blank line stays out of the total, so the total never looks complete when it is not.',
      'Add a second quote when you have one. Only read the difference once both quotes cover the same costs.',
    ],
    limitsHeading: 'What this tool will not do',
    limits: [
      'It does not judge whether a price is fair. That depends on the services behind it and the market it sits in.',
      'It does not convert currencies. Compare quotes in the currency they were issued in, or exchange rates become part of the difference.',
      'It does not store anything on a server, and it does not send your quote to anyone.',
    ],
    outsideHeading: 'What usually sits outside the nine lines',
    outsideIntro:
      'A total can be complete on its own terms and still not be a budget. These are the costs that most often fall outside a package price, and each one has a payee you can name.',
    outsideItems: [
      'Medical scope that follows the treatment: a second transfer, donor eggs or sperm, pharmacy and monitoring, a repeated screening, prenatal care, delivery and neonatal care are often billed as they occur or by another provider.',
      'Legal and administrative work: independent counsel for the carrier, court and filing costs, escrow administration, registration, translation and apostille each have their own payee.',
      'Travel and reimbursable expenses: trips, length of stay, the carrier\'s reimbursable expenses and the receipts behind them sit outside a program fee, and in some countries a court must authorise anything beyond those expenses.',
    ],
    outsideLink: 'Read the twelve costs that sit outside a quote',
    bandHeading: 'Reading a quote is one part of the decision',
    bandBody:
      'The cost guide explains what normally sits inside a surrogacy budget and what is commonly excluded from it.',
    bandCostGuide: 'Cost guide',
    bandQuestions: 'Ask before you sign',
  },
  zh: {
    title: '机构报价对比',
    titleTag: '代孕机构报价对比：并排看九项成本',
    description:
      '把一份或两份代孕报价对在同一组九项成本上：各自包含什么、漏掉什么，以及为什么总额之差还算不上一笔成本差异。',
    h1: '机构报价对比',
    purpose: '这一页做什么：把您收到的一份（或两份）报价里的金额，填进九个固定成本项，然后看清每个合计还漏了什么。',
    intro:
      '两份报价之所以不同，很少是因为某一家更便宜，而是因为一份算了另一份没算的东西。先从手上这份报价开始。',
    howToHeading: '怎么使用',
    howTo: [
      '报价通常由九项成本搭成，这张表已经把它们印好了。在每一项旁填入报价写明的金额，不必自己搭表。',
      '填入金额的那一刻，这一项就自动算作包含。只有报价明确排除某一项时，才改选不包含。',
      '报价没有提到某一项时，金额留空。留空的条目不计入合计，合计也就不会在不完整的时候看起来完整。',
      '拿到第二份报价时再加进来。只有当两份报价覆盖同样的成本之后，再去读那个差额。',
    ],
    limitsHeading: '这个工具不会做什么',
    limits: [
      '它不判断一个价格是否公道。那取决于背后的服务和它所在的市场。',
      '它不做货币换算。请按报价原本使用的货币来比较，否则汇率会变成差额的一部分。',
      '它不在服务器上存任何东西，也不会把您的报价发给任何人。',
    ],
    outsideHeading: '通常落在这九项之外的成本',
    outsideIntro: '一个总额可能在自己的范围内是完整的，却仍然算不上预算。下面这些成本最常落在方案报价之外，而每一项都有可以指明名称的收款方。',
    outsideItems: [
      '跟随治疗产生的医疗项目：第二次移植、供卵或供精、药房与监测、需要重做的筛查、孕期保健、分娩与新生儿护理，往往按实际发生结算，或由另一家机构开票。',
      '法律与行政工作：代孕者的独立法律顾问、法院与立案费用、资金托管、登记、翻译与认证，每一项都有自己的收款方。',
      '出行与可报销费用：行程、停留时间、代孕者的可报销费用以及背后的票据，都在方案费之外；在一些国家，超出这些费用的部分还须经法院批准。',
    ],
    outsideLink: '阅读报价之外的十二项成本',
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
  titleTag: string;
  description: string;
  h1: string;
  /** A plain first line under the H1: what the reader actually does on this page. */
  purpose: string;
  lede: string;
  /** The line beside the document icon: what this page adds to a figure, which is nothing. */
  note: string;
  groupsHeading: string;
  groupsIntro: string;
  /** The one column head a destination page has no reason to carry. */
  destinationHead: string;
  /** {date} is when the source was read; printed under the source in a table cell. */
  sourceChecked: string;
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
    titleTag: 'Published Surrogacy Cost Figures',
    description:
      'Every cost figure this site publishes, grouped by the line it covers rather than by country, each with its source and the year it describes.',
    h1: 'Published cost figures',
    purpose:
      'What you do here: read every cost figure this site has published, grouped by the line it covers, each with its source and year.',
    lede: 'A destination page shows the one figure that stands out there. Here every published figure sits under the cost line it covers, so one line can be read across destinations and sources.',
    note: 'No figure here was worked out by us. Each one was published by a named source, in the currency that source wrote it in, for the year the row states.',
    groupsHeading: 'Every published figure, by the line it covers',
    groupsIntro:
      'These are the lines a quote is usually built from. A figure sits under the line it covers, so one line can be read across destinations and across the sources that wrote about them.',
    destinationHead: 'Destination',
    sourceChecked: 'Source checked {date}',
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
    title: '已公布的费用数据',
    titleTag: '已公布的代孕费用数据：按条目与来源查看',
    description: '把本站公布的每一项代孕费用数据按它覆盖的费用条目分组，而不是按国家；每项数据都标明公布来源与数据年份。',
    h1: '已公布的费用数据',
    purpose: '这一页做什么：按费用条目查看本站已公布的每一项费用数据，每条都附来源和年份。这里不需要您输入任何内容。',
    lede: '目的地页面只呈现对当地而言最突出的一项费用数据。在这个页面上，每一项已公布的数据都归在它覆盖的费用条目下：整个流程、医疗成本、支付给代孕者的数据各自归组，可以跨目的地、跨来源对照阅读。',
    note: '这里没有任何一项数据由本站推算。每一项都由具名来源公布，沿用该来源写下的币种，并对应这一行标明的年份。',
    groupsHeading: '按费用条目分组',
    groupsIntro: '这些费用条目正是一份报价通常包含的内容。每项数据归在它覆盖的条目下，因此同一条目可以跨目的地、跨来源对照。',
    destinationHead: '目的地',
    sourceChecked: '核查于 {date}',
    singleSource: '这一条目只有一个来源公布过数据，没有第二项公开数据可供对照。',
    noFigure: '目前没有来源为这一条目公布费用数据。',
    emptyHeading: '暂无已公布数据的目的地',
    emptyBody: '以下目的地没有已公布的费用数据。它们的页面写明了在当地规则下可以支付什么，公开记录目前能支持的结论仅限于此。',
    closing: {
      heading: '已公布的费用数据可以用来做什么',
      body: '来源公布的数据是参照点，不是预算。在您自己的报价中找出与这些条目对应的那一项，问清对方报价覆盖的范围与公开数据有何差异，并把回答连同回答人的姓名和日期写在问题旁边。',
      links: ['怎么读一份代孕费用', '为什么不存在平均费用', '对比两份报价'],
    },
  },
};



