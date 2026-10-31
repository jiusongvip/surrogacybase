/*
 * The words the destination comparison prints, in both languages.
 *
 * The board itself is assembled from published jurisdiction records, so nothing here states a
 * legal position. What is written here is only the frame: what the columns are called, what the
 * board does not do, and how the downloaded file describes itself.
 *
 * The six dimensions are the six questions a destination record already answers. They are listed
 * in the order a reader works through them, and the component renders one dimension at a time so
 * that three long records can be read side by side without turning the page into a wall of text.
 */
import type { Lang } from '@/i18n/config';

export type CompareDimension = 'basis' | 'eligibility' | 'payment' | 'parentage' | 'costs' | 'record';

export type DestinationComparePage = {
  title: string;
  titleTag: string;
  description: string;
  h1: string;
  /** A plain first line under the H1: what the reader actually does on this page. */
  purpose: string;
  lede: string;
  note: string;
  pickerHeading: string;
  pickerIntro: string;
  /** {n} is the number of selected destinations. */
  selected: string;
  clear: string;
  empty: string;
  chooseDimension: string;
  /** Under the dimension buttons: why the board shows one part at a time. */
  dimensionHint: string;
  dimensions: Record<CompareDimension, string>;
  noCost: string;
  sourceLabel: string;
  /** {n} is the number of verified positions in the record. */
  factCount: string;
  /** {n} is the number of questions the record's sources did not settle. */
  openCount: string;
  openLink: string;
  recordLink: string;
  insufficient: string;
  /** {date} is the date the record's sources were last checked. */
  checked: string;
  limitsHeading: string;
  limits: [string, string, string];
  download: string;
  downloadNote: string;
  exportTitle: string;
  /** {date} is the day the file was assembled. */
  exportSaved: string;
  exportNote: string;
  exportFooter: string;
  exportFilename: string;
  closingHeading: string;
  closingBody: string;
  checklist: string;
  legalGuide: string;
  enquiry: string;
};

export const DESTINATION_COMPARE_PAGE: Record<Lang, DestinationComparePage> = {
  en: {
    title: 'Destination comparison',
    titleTag: 'Compare Surrogacy Destinations',
    description:
      'Put destination records side by side: legal basis, who may commission, parentage at birth, published cost figures and the date each record was last checked.',
    h1: 'Compare destination records side by side',
    purpose:
      'What you do here: pick the two or three places you are still choosing between, read their records against the same questions, and download what remains.',
    lede: 'Every column is one published record, read in the same order for every destination: legal basis, who may commission, payment, parentage at birth, the cost figures a source printed, and the questions the record did not settle.',
    note: 'Nothing here is scored or ordered. Two columns side by side means two places worth asking about, not two places that work the same way.',
    pickerHeading: 'Choose the destinations',
    pickerIntro: 'Tick a place to give it a column; untick the ones you have already ruled out.',
    selected: '{n} selected',
    clear: 'Clear the shortlist',
    empty: 'Choose at least one destination to see the comparison.',
    chooseDimension: 'Show one part of every selected record',
    dimensionHint: 'A record runs long: reading one part across all three columns is what makes a difference visible.',
    dimensions: {
      basis: 'Legal basis',
      eligibility: 'Who may commission',
      payment: 'Payment',
      parentage: 'Parentage at birth',
      costs: 'Published costs',
      record: 'The record',
    },
    noCost: 'No cost figure is published in this record.',
    sourceLabel: 'Source',
    factCount: '{n} verified positions',
    openCount: '{n} questions still needing local advice',
    openLink: 'Read those questions',
    recordLink: 'Open the full record',
    insufficient: 'Not fully verified',
    checked: 'Positions checked {date}',
    limitsHeading: 'What this comparison does not do',
    limits: [
      'It does not decide whether you qualify. That answer belongs to a lawyer qualified in that jurisdiction, on your facts.',
      'It does not fill a gap: where a record publishes no position, the column says so.',
      'It says nothing about the clinics and agencies inside each place, which is a separate check.',
    ],
    download: 'Download this comparison',
    downloadNote:
      'The file is assembled in your browser from the columns as they stand. Nothing is uploaded, and nothing is kept after the tab closes.',
    exportTitle: 'SurrogacyBase destination comparison',
    exportSaved: 'Assembled on {date}',
    exportNote:
      'Each section repeats a published destination record. Open the record for the source behind each position and the date it was checked.',
    exportFooter: 'From SurrogacyBase. The board shows a few columns; the record behind each one holds the rest.',
    exportFilename: 'surrogacy-destination-comparison.md',
    closingHeading: 'A comparison is a shortlist, not a decision',
    closingBody:
      'Remove a place as soon as a row shows it cannot answer the question you brought. What is left on the board is worth taking to a professional in that jurisdiction, question by question.',
    checklist: 'Open the destination research checklist',
    legalGuide: 'The four legal questions to settle first',
    enquiry: 'Talk to an advisor',
  },
  zh: {
    title: '目的地对比',
    titleTag: '目的地对比：并列查看法律、亲权与费用',
    description:
      '将目的地记录并列呈现：法律基础、委托资格、出生时的亲权、已公布的费用数据，以及每份记录最近一次核查的日期。',
    h1: '并排比较目的地记录',
    purpose: '本页用途：选出您仍在取舍的两至三个目的地，以同一组问题逐条阅读其记录，并将剩余部分下载留存。',
    lede: '每一列都是一份已发布的记录，每一目的地均按同一顺序阅读：法律基础、委托资格、付款安排、出生时的亲权、来源公布的费用数据，以及该记录未能回答的问题。',
    note: '本站不作评分，也不排序。两列并列所说明的是：两个目的地均值得进一步询问，而非其规则相同。',
    pickerHeading: '选择目的地',
    pickerIntro: '所选目的地各占一列；已排除的无需勾选。',
    selected: '已选 {n} 个',
    clear: '清空选择',
    empty: '至少选择一个目的地，才能查看对比。',
    chooseDimension: '每次仅查看所选记录的一个部分',
    dimensionHint: '单份记录的篇幅较长：须将同一部分横向读完三列，差别方得显现。',
    dimensions: {
      basis: '法律基础',
      eligibility: '委托资格',
      payment: '付款安排',
      parentage: '出生时的亲权',
      costs: '已公布的费用数据',
      record: '该份记录',
    },
    noCost: '该记录未公布费用数据。',
    sourceLabel: '来源',
    factCount: '{n} 项已核实的立场',
    openCount: '{n} 个问题仍需当地意见',
    openLink: '查看这些问题',
    recordLink: '打开完整记录',
    insufficient: '尚未核实完整',
    checked: '立场核查于 {date}',
    limitsHeading: '本对比不承担的事项',
    limits: [
      '本对比不判断您是否符合资格；该项答复应由在当地具执业资格的法律人士，依据您的事实作出。',
      '不填补空白：记录未公布之处，该列据实说明。',
      '不涉及各地的诊所与机构，该事项另属一节。',
    ],
    download: '下载这份对比',
    downloadNote: '文件于您的浏览器内按当前各列整理而成；不上传任何内容，关闭标签页后亦不保留。',
    exportTitle: 'SurrogacyBase 目的地对比',
    exportSaved: '整理于 {date}',
    exportNote: '每一节均复述一份已发布的目的地记录。各项立场的来源与核查日期，请开启记录查阅。',
    exportFooter: '出自 SurrogacyBase。表中仅列数栏，每栏背后的记录尚含更多内容。',
    exportFilename: 'surrogacy-destination-comparison-zh.md',
    closingHeading: '对比仅形成候选名单，尚不构成决定',
    closingBody: '任一行无法答复您提出的问题时，即可将该地排除。表中留存的部分，值得逐条提交当地法律人士确认。',
    checklist: '打开目的地研究清单',
    legalGuide: '最应先确定的四个法律问题',
    enquiry: '找顾问聊聊',
  },
};

/** The order the dimension buttons appear in. */
export const COMPARE_DIMENSIONS: CompareDimension[] = [
  'basis',
  'eligibility',
  'payment',
  'parentage',
  'costs',
  'record',
];
