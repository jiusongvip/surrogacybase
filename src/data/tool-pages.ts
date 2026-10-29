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
  /** Only an unbuilt tool prints this; a live tool needs no status line. */
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
      'What you do here: compare destinations and quotes, read the published cost figures, and turn what you find into a document you can hand to a lawyer or agency.',
    intro:
      'A guide explains a decision. The tools here work on the paper you already hold: a quote you were sent, the two countries you are choosing between, the questions a firm has not answered in writing.',
    countOne: '1 tool ready to use',
    countMany: '{n} tools ready to use',
    localNote:
      'No account, and nothing you type leaves your browser. The comparisons are gone when you close the tab, and everything else leaves your browser only as a file you download.',
    fitHeading: 'How the tools fit together',
    fitIntro: 'None of them decides for you. Each one carries a decision from reading into a conversation.',
    fitSteps: [
      {
        title: 'Read the guide behind it',
        body: 'A term you cannot place is usually defined in the guide that this tool belongs to.',
      },
      {
        title: 'Fill it with your own facts',
        body: 'Those gaps take your material: two families fill the same lines with quite different things.',
      },
      {
        title: 'Take the file into the conversation',
        body: 'Download it and bring it to the lawyer, clinic or agency, so the conversation has something specific to react to.',
      },
    ],
    leavesHeading: 'What you leave with',
    leaves: [
      {
        title: 'A shortlist on one board',
        body: 'Three places answering the same questions in the same order, so the one that cannot answer yours shows itself.',
      },
      {
        title: 'Two quotes on the same lines',
        body: 'The gap between two totals, with the lines still without a number listed beside it.',
      },
      {
        title: 'A document you fill in yourself',
        body: 'How far you have written in it is how much of the work is left.',
      },
      {
        title: 'A figure with its source and year',
        body: 'The same cost line across countries and across years, read side by side.',
      },
    ],
    beforeHeading: 'Before you start',
    before: [
      {
        title: 'Use the document, not the memory',
        body: 'Enter what the quote says rather than the total you remember from the call. The wording is what you are checking.',
      },
      {
        title: 'Write what it says before what it means',
        body: 'Put the provider’s words in first. The distance between their wording and your reading is the question to ask.',
      },
      {
        title: 'Keep the name and the date',
        body: 'An answer you cannot trace to a person and a day is a claim rather than a fact.',
      },
    ],
    guidesHeading: 'The guides behind these tools',
    guidesIntro: 'Three guides sit behind the five tools here, each one working through a decision the tool then asks you about.',
    allGuides: 'All guides',
    building: 'Coming soon',
    open: 'Open the tool',
    notLive: 'This tool is not ready yet. Its link will appear here when it is.',
  },
  zh: {
    title: '工具',
    titleTag: '代孕工具：比较报价、费用与目的地',
    label: '工具',
    description:
      '供意向父母使用的工具：并列对比目的地记录、对比两份机构报价、查阅已公布的费用数据、逐题研究目的地、以书面形式向机构提出问题。',
    purpose: '本页用途：对比目的地与报价、查阅已公布的费用数据，并将结果整理为一份可提交律师或机构的文件。',
    intro: '指南阐释一项决定；工具则作用于您既有的文件：一份已收到的报价、两处待取舍的目的地、一批机构尚未书面答复的问题。',
    countOne: '1 个工具可直接使用',
    countMany: '{n} 个工具可直接使用',
    localNote: '无须账户，您填入的内容亦不会离开本机浏览器。两个对比工具于关闭标签页后不再保留数据；其余内容仅在您下载时以文件形式离开浏览器。',
    fitHeading: '各工具之间的衔接方式',
    fitIntro: '上述工具均不代您作出决定，仅将一项决定由阅读推进至一次咨询。',
    fitSteps: [
      {
        title: '先行阅读其背后的指南',
        body: '您无法对应的术语，通常已在该工具所属指南中作出定义。',
      },
      {
        title: '以您自身的材料填写',
        body: '各空格填入的是您的材料：同一组条目，两个家庭所填内容往往差异显著。',
      },
      {
        title: '将文件带入沟通',
        body: '下载后携往律师、诊所或机构，即可在沟通中持有一张可当场逐条对照的表格。',
      },
    ],
    leavesHeading: '您可取得的结果',
    leaves: [
      {
        title: '并列呈现的候选名单',
        body: '三处目的地回答同一组问题，顺序亦相同；与所述情况不符的那一列会自行显现。',
      },
      {
        title: '两份报价，对应同样的条目',
        body: '两项合计之间的差额，以及旁侧尚无数字的条目。',
      },
      {
        title: '一份由您自行填写的文件',
        body: '填写至何行，其余即为尚未获得答复者。',
      },
      {
        title: '附有来源与年份标注的费用数据',
        body: '同一费用条目于不同国家、不同年份的数字并列呈现。',
      },
    ],
    beforeHeading: '开始之前',
    before: [
      {
        title: '依据文件，而非记忆',
        body: '应录入报价所载数字，而非通话中记下的总额；须核查者为其措辞。',
      },
      {
        title: '先记录原文表述，再记录您的理解',
        body: '应先录入对方的原始表述；对方措辞与您理解之间的差距，即为应予提出的问题。',
      },
      {
        title: '记录姓名与日期',
        body: '无法追溯答复人与日期的答复，仅为一项说法，而非事实。',
      },
    ],
    guidesHeading: '这些工具背后的指南',
    guidesIntro: '五个工具背后为三篇指南，每篇就其对应的决定自起点至终点完整论述。',
    allGuides: '全部指南',
    building: '即将上线',
    open: '打开工具',
    notLive: '该工具尚在准备之中，上线后链接将呈现于此。',
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
    unreadable: '{n} amount{s} could not be read; write it as a plain number, without a currency symbol or a range',
    pluralS: 's',
    oneS: '',
    totalLabel: 'Total so far',
    totalHint: 'Lines left blank or marked not included stay out of this total.',
    diffHeading: 'Difference between the two totals so far',
    diffBody:
      'A gap between two totals is not a cost difference until the scope matches. Check what each quote includes, what it excludes, when payments fall due and what happens on a refund, then compare again.',
    footer: 'These nine lines cover what a quote usually names, not everything a program costs.',
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
      '此处不收集任何信息：无须账户、不会上传，关闭本标签页后亦不保留任何内容。下载会将本表保存为一份可供您留存的文档，该文件即为唯一副本。',
    currency: '货币',
    currencyNote: '每份报价均须使用同一种货币。若报价以其他货币开列，请先换算再行录入，合计方具可比性。',
    currencies: ['USD', 'EUR', 'GBP', 'AUD', 'CAD', 'THB', 'INR', 'UAH', 'COP'],
    download: '下载这张表格',
    reset: '清空金额',
    statusHint: '填入金额后，该项即视为包含并计入合计。报价明确排除的，请改选不包含；报价未予提及的，金额留空即可。',
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
    unreadable: '{n} 项金额无法识别，请以纯数字填写，不含货币符号，亦不含区间',
    pluralS: '',
    oneS: '',
    totalLabel: '当前合计',
    totalHint: '留空或标为不包含的项目不计入本合计。',
    diffHeading: '两项当前合计之间的差额',
    diffBody:
      '在范围一致之前，两项总额之间的差距并不构成成本差异。请先核对每份报价的包含项与除外项、付款到期时点，以及退款处理方式，随后再作比较。',
    footer: '上述九项覆盖报价通常载明的成本，并不构成一项方案的全部开销。',
    exportTool: 'SurrogacyBase 机构报价对比',
    savedLine: '填写于',
    exportNote: '依据屏幕上当前的报价生成。留空或标为不包含的项目不计入合计。',
    totalLine: '合计',
    totalLineOne: '合计',
    diffLine: '差额',
    exportFooter: '出自 SurrogacyBase。于两份报价的范围一致之前，总额之差并不等同于成本差异。',
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
      'Fill against the document in front of you, one line at a time, rather than against the package total the agency named.',
      'Read a blank as "this quote did not name the line", not as "this line costs nothing".',
      'Add the second quote when it arrives; taking it away again leaves the first one untouched.',
      'Download the table and bring it to the agency. The lines still blank are the questions to ask.',
    ],
    limitsHeading: 'What this tool will not do',
    limits: [
      'It does not judge whether a price is fair. That depends on the services behind it and the market it sits in.',
      'It does not read the contract for you. "Included" covers different scopes at different firms, which is what the downloaded table is for.',
      'It records only what a quote puts in writing. A figure you were told on a call has no place in this table until the document states it.',
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
    titleTag: '代孕机构报价对比：并列查看九项成本',
    description:
      '将一份或两份代孕报价对应于同一组九项成本：各自包含与不含哪些项目，以及总额之差为何尚不构成成本差异。',
    h1: '机构报价对比',
    purpose: '本页用途：将您收到的一份或两份报价中的金额填入九项固定成本条目，并据此识别各合计尚未涵盖的内容。',
    intro:
      '两份报价之间存在差异，很少源于一家的价格更低，而更多源于一项成本在一份中计入、在另一份中未计入。请自您现有的那份报价开始。',
    howToHeading: '使用方法',
    howTo: [
      '应逐项对照手头文件填写，不得按机构报出的方案总额填写。',
      '条目留空表示「该报价未提及此项」，而非「此项不产生费用」。',
      '第二份报价到达后再行并入；移除它不会影响第一份已填入的内容。',
      '下载本表并与机构逐项核对：仍留空的各行，即为应予提出的问题。',
    ],
    limitsHeading: '本工具不承担的事项',
    limits: [
      '本工具不判断价格是否合理；该项判断取决于其背后的服务与所属市场。',
      '本工具不代您审阅合同；「包含」在不同机构所涵盖的范围往往不同，所下载的表格即为呈现该项差异之用。',
      '本工具仅记录报价以书面形式载明的内容；通话中获知的数字，未经文件载明即不得录入。',
    ],
    outsideHeading: '通常位于上述九项之外的成本',
    outsideIntro: '一项总额可能在其自身范围内完整，却仍不构成预算。下列成本最常位于方案报价之外，且每一项均有得以指明的收款方。',
    outsideItems: [
      '随治疗进程发生的医疗项目：第二次移植、供卵或供精、药物与监测、需重做的筛查、孕期保健、分娩与新生儿护理，往往按实际发生结算，或由另一主体另行开票。',
      '法律与行政事项：代孕者的独立法律顾问、法院与立案费用、资金托管、登记、翻译与认证，每一项各有其收款方。',
      '出行与可报销费用：行程、停留时长、代孕者的可报销费用及其对应票据，均位于方案费之外；在部分国家，超出该等费用的部分还须经法院批准。',
    ],
    outsideLink: '阅读报价之外的十二项成本',
    bandHeading: '阅读报价仅构成决定的一部分',
    bandBody: '费用指南说明代孕预算通常包含的项目，以及通常被排除的项目。',
    bandCostGuide: '费用指南',
    bandQuestions: '签约前应提出的问题',
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
      'Surrogacy cost figures grouped by the cost line they cover: whole program, medical step, carrier compensation, each with its source and the year it describes.',
    h1: 'Published cost figures',
    purpose: 'What you do here: look up a cost line and read every published figure that sits under it.',
    lede: 'A destination page shows the one figure that stands out there; the list here holds them all, one row per cost line.',
    note: 'Every figure was published by a named source, in the currency that source wrote it in, for the year the row states.',
    groupsHeading: 'Every published figure, by the line it covers',
    groupsIntro:
      'Figures under one line come from different countries, years and currencies. They can be read against each other; they cannot be added, and none of them is an average computed here.',
    destinationHead: 'Destination',
    sourceChecked: 'Source checked {date}',
    singleSource: 'Only one source has published a figure for this line.',
    noFigure: 'No source has published a figure for this line.',
    emptyHeading: 'Where no figure is published',
    emptyBody:
      'These destinations publish no cost figure. Their pages state what may be paid there under the local rules; the numbers themselves live in a quote, not in the law.',
    closing: {
      heading: 'What a published figure is for',
      body: 'A figure from a source is a reference point, not a budget. Set it against the matching line in your own quote and the gap between the two is the question to put to the provider.',
      links: ['How to read a surrogacy cost', 'Why no average exists', 'Compare two quotes'],
    },
  },
  zh: {
    title: '已公布的费用数据',
    titleTag: '已公布的代孕费用数据：按条目与来源查看',
    description: '按费用条目分组的代孕费用数据：整体方案、医疗环节、支付给代孕者的款项，每一数字均标明公布来源与对应年份。',
    h1: '已公布的费用数据',
    purpose: '本页用途：查阅某项费用条目，并读出其下所有已公布的数字。',
    lede: '目的地页面仅呈现当地最突出的一项费用数据；此处将其全部列出，每一费用条目占一行。',
    note: '每一项均由具名来源公布，沿用该来源所载币种，并对应该行标明的年份。',
    groupsHeading: '按费用条目分组',
    groupsIntro: '同一条目下的数字来自不同国家、年份与币种：可作对照阅读，不得相加；此处亦不存在计算得出的平均值。',
    destinationHead: '目的地',
    sourceChecked: '核查于 {date}',
    singleSource: '该条目仅有一个来源公布过数据。',
    noFigure: '目前尚无来源为该条目公布费用数据。',
    emptyHeading: '暂无已公布数据的目的地',
    emptyBody: '以下目的地未公布费用数据。相关记录已载明当地规则允许支付的项目；具体数额见于报价，而非法律。',
    closing: {
      heading: '上述数字的对照用途',
      body: '来源公布的数字系参照点，而非预算。将其与您报价中的同类条目并列后，两者之间的差距即为应向对方提出的问题。',
      links: ['如何阅读代孕费用数据', '为什么不存在平均费用', '对比两份报价'],
    },
  },
};



