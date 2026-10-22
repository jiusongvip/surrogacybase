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
  lede: string;
  note: string;
  pickerHeading: string;
  pickerIntro: string;
  /** {n} is the number of selected destinations. */
  selected: string;
  clear: string;
  empty: string;
  chooseDimension: string;
  dimensions: Record<CompareDimension, string>;
  noCost: string;
  sourceLabel: string;
  /** {n} is the number of sourced facts in the record. */
  factCount: string;
  /** {n} is the number of open questions in the record. */
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
    h1: 'Compare destinations on the same record',
    lede: 'Choose the places on your shortlist. Each column repeats a published destination record: the legal basis, who may commission, parentage at birth, the cost figures a source has published, and what the record leaves open.',
    note: 'No destination is scored or ranked. A record that does not publish a position says so, and opening it shows the source and the date behind every sentence.',
    pickerHeading: 'Choose the destinations',
    pickerIntro: 'Pick the places you are actually considering. On a wide screen the cards sit side by side; on a narrow one they stack.',
    selected: '{n} selected',
    clear: 'Clear the shortlist',
    empty: 'Choose at least one destination to see the comparison.',
    chooseDimension: 'Show one part of every selected record',
    dimensions: {
      basis: 'Legal basis',
      eligibility: 'Who may commission',
      payment: 'Payment',
      parentage: 'Parentage at birth',
      costs: 'Published costs',
      record: 'Record',
    },
    noCost: 'No cost figure is published in this record.',
    sourceLabel: 'Source',
    factCount: '{n} sourced facts',
    openCount: '{n} open questions',
    openLink: 'Read the open questions',
    recordLink: 'Open the full record',
    insufficient: 'Sourcing incomplete',
    checked: 'Record checked {date}',
    limitsHeading: 'What this comparison does not do',
    limits: [
      'It does not score, rank or recommend a destination.',
      'It does not fill a gap: where a record publishes no position, the column says so.',
      'It does not decide whether you qualify. That answer belongs to a lawyer qualified in that jurisdiction, on your facts.',
    ],
    download: 'Download this comparison',
    downloadNote:
      'The file is assembled in your browser from the columns as they stand. Nothing is uploaded, and nothing is kept after the tab closes.',
    exportTitle: 'SurrogacyBase destination comparison',
    exportSaved: 'Assembled on {date}',
    exportNote:
      'Each section repeats a published destination record. Open the record for the source behind each position and the date it was checked.',
    exportFooter: 'From SurrogacyBase. A comparison is a shortlist, not a legal opinion.',
    exportFilename: 'surrogacy-destination-comparison.md',
    closingHeading: 'A comparison is a shortlist, not a decision',
    closingBody:
      'Use the board to remove places that cannot answer your situation, then take what remains to a professional in each jurisdiction.',
    checklist: 'Open the destination research checklist',
    legalGuide: 'Read the four legal questions',
    enquiry: 'Write your enquiry',
  },
  zh: {
    title: '目的地对比',
    titleTag: '目的地对比：并排看法律、亲权与费用',
    description:
      '把目的地记录并排放在一起：法律依据、谁可以委托、出生时的亲权、已公布的费用数据，以及每份记录最近一次核查的日期。',
    h1: '在同样的记录上比较目的地',
    lede: '选出您候选名单上的地方。每一列都复述一份已发布的目的地记录：法律依据、谁可以委托、出生时的亲权、来源公布过的费用数据，以及这份记录仍未解决的问题。',
    note: '本站不打分，也不排名。记录没有公布的内容会照实说明；打开记录，就能看到每一句话背后的来源和核查日期。',
    pickerHeading: '选择目的地',
    pickerIntro: '选您真正在考虑的地方。宽屏上并排显示，窄屏上逐张显示。',
    selected: '已选 {n} 个',
    clear: '清空选择',
    empty: '至少选择一个目的地，才能查看对比。',
    chooseDimension: '每次只看所选记录的一个部分',
    dimensions: {
      basis: '法律依据',
      eligibility: '谁可以委托',
      payment: '付款',
      parentage: '出生时的亲权',
      costs: '已公布的费用数据',
      record: '记录',
    },
    noCost: '这份记录没有公布费用数据。',
    sourceLabel: '来源',
    factCount: '{n} 条有来源的事实',
    openCount: '{n} 个待解决的问题',
    openLink: '查看待解决的问题',
    recordLink: '打开完整记录',
    insufficient: '来源尚不完整',
    checked: '记录核查于 {date}',
    limitsHeading: '这份对比不做什么',
    limits: [
      '它不打分、不排名，也不推荐目的地。',
      '它不补空白：记录没有公布的内容，这一列就照实说明。',
      '它不判断您是否符合资格。这个答案应由在当地有执业资格的法律人士，针对您的事实作出。',
    ],
    download: '下载这份对比',
    downloadNote: '文件在您的浏览器里按当前各列整理而成。不上传任何内容，关掉标签页后也不保留。',
    exportTitle: 'SurrogacyBase 目的地对比',
    exportSaved: '整理于 {date}',
    exportNote: '每一节都复述一份已发布的目的地记录。每个立场的来源与核查日期，请打开记录查看。',
    exportFooter: '来自 SurrogacyBase。对比只是一份候选名单，不是法律意见。',
    exportFilename: 'surrogacy-destination-comparison-zh.md',
    closingHeading: '对比只是一份候选名单，还不是决定',
    closingBody: '用这块对比排除那些回答不了您情况的地方，再把剩下的问题交给当地的专业人士。',
    checklist: '打开目的地研究清单',
    legalGuide: '阅读四个法律问题',
    enquiry: '发送您的问询',
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
