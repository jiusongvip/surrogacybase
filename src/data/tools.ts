import type { Lang } from '@/i18n/config';
import { localizedPath } from '@/i18n/paths';

/**
 * Every tool the site offers, in one place.
 *
 * The homepage, the tools index and the content related-links all read this, so a
 * tool cannot be advertised in one place and missing in another. `live: false` means
 * the page does not exist yet: the entry stays visible and unlinked, which is the
 * same rule the updates log applies to withheld pages.
 *
 * The wording is per language because a Chinese guide's sidebar has to name the same tool in
 * Chinese, and the URL differs by prefix. `live` stays a single flag: the English and Chinese
 * tool pages open together, since a switch that lands on a missing page is the failure this
 * file exists to prevent.
 */
export type ToolText = {
  name: string;
  /** The job the tool does, in the user's terms rather than a feature list. */
  summary: string;
  /** One line for the sidebar slot on content pages, where a summary is too long. */
  linkNote: string;
  points: string[];
};

export type Tool = {
  id: string;
  live: boolean;
  /**
   * Where the tool actually lives, when the route is not `/tools/<id>`. The brief builder is
   * reached at /assessment, a route three changelog entries already carry; registering it here as
   * well is what keeps it from being advertised on the tools index and missing from a guide sidebar.
   */
  path?: string;
  en: ToolText;
  zh: ToolText;
};

export const toolPath = (tool: Tool) => tool.path ?? `/tools/${tool.id}`;

export const toolHref = (tool: Tool, lang: Lang) => localizedPath(lang, toolPath(tool));

export const TOOLS: Tool[] = [
  {
    id: 'destination-brief',
    live: true,
    path: '/assessment',
    en: {
      name: 'Destination brief',
      summary:
        'Choose the destinations you are weighing and take away one document assembled from their records here: the legal instrument each position rests on, who may commission, what may lawfully be paid, who the child’s legal parent is at birth, every published figure with the source that printed it, and the questions those sources did not settle.',
      linkNote: 'Build one document out of the destination records, in your browser.',
      points: [
        'One block per destination, in the order the page prints them',
        'Every position and every figure carries the source it came from',
        'Copy it or download it; the brief asks for no personal information and keeps nothing',
      ],
    },
    zh: {
      name: '目的地简报',
      summary:
        '选出您正在权衡的目的地，带走一份由它们的记录组装成的文档：每一项立场落在哪份法律文件上、谁可以委托、依法能支付什么、孩子出生时的法律父母是谁、每个已发布的数字连同印出它的那个来源，以及那些来源没有确定的问题。',
      linkNote: '用目的地记录做出一份文档，在您的浏览器里完成。',
      points: ['每个目的地一个内容块，按页面印出的顺序排列', '每一条立场、每一个数字都带着它出自哪个来源', '复制或下载它；这份简报不向您索取任何个人信息，也不留存任何东西'],
    },
  },
  {
    id: 'agency-quote-comparison',
    live: true,
    en: {
      name: 'Agency quote comparison',
      summary:
        'Set two or three quotes against the same line items, mark each one as included, not included or needs checking, and see what the totals still leave unanswered.',
      linkNote: 'Compare two quotes line by line, in your browser.',
      points: [
        'You add the line items yourself, one for each cost',
        'Amounts that are not confirmed stay out of the totals',
        'Save, download, and start over without an account',
      ],
    },
    zh: {
      name: '机构报价对比',
      summary: '把两三份报价对在同一组条目上，逐条标注为包含、不包含或待核查，看看合计仍然没有回答什么。',
      linkNote: '在您的浏览器里逐项对比两份报价。',
      points: ['条目由您自己添加，每项成本一条', '未经确认的金额不计入合计', '保存、下载、重新开始，无需账户'],
    },
  },
  {
    id: 'cost-figures',
    live: true,
    en: {
      name: 'Published cost figures',
      summary:
        'Every cost figure this site publishes, under the line it covers rather than the country it belongs to, so whole-program numbers sit together and what is paid to a carrier sits together. Each row keeps the source that printed it and the year those figures describe.',
      linkNote: 'The figures sources have published, line by line, each with its citation.',
      points: [
        'A destination with no published figure says so instead of showing an estimate',
        'Every row links to the source that printed the number and states the year it describes',
        'No average, no currency conversion, and no figure worked out here',
      ],
    },
    zh: {
      name: '已发布的费用数字',
      summary:
        '把本站发布的每一个费用数字放在它覆盖的那一行下面，而不是放在它所属的国家下面：整个流程的数字聚在一起，支付给代孕者的数字也聚在一起。每一行都保留发布它的那份来源，以及这些数字对应的年份。',
      linkNote: '各个来源发布过的数字，逐条列出，每一条都带着引用出处。',
      points: ['没有发布数字的目的地会直接说明，而不是摆出一个估算', '每一行都链接到发布这个数字的来源，并写明它对应的年份', '不做平均值，不做货币换算，这里也不算出任何数字'],
    },
  },
  {
    id: 'destination-research-checklist',
    live: true,
    en: {
      name: 'Destination research checklist',
      summary:
        'The questions that settle a destination: eligibility, parentage, nationality, medical scope, money, who has to attend in person, and what happens in a dispute. Take them to a professional and write the answers in the document you download.',
      linkNote: 'Thirty-three questions in seven groups, as a document.',
      points: [
        'Seven groups, from who may commission through to what happens when two professionals disagree',
        'Download as a Markdown document with an empty box beside every question',
        'Write the answer, the name and the date beside a question once a professional has given it about your own facts',
      ],
    },
    zh: {
      name: '目的地研究清单',
      summary: '决定一个目的地的那组问题：资格、亲权、国籍、医疗范围、资金、谁必须本人到场，以及发生争议时怎么办。把它们交给专业人士，答案写进您下载的那份文档。',
      linkNote: '三十三个问题，分七组，成为一份文档。',
      points: [
        '七组问题，从谁可以委托，一直到两位专业人士意见不合时会怎样',
        '下载为 Markdown 文档，每个问题前面都留着一个空的方框',
        '一旦某位专业人士针对您自身的情况作出了回答，就在它旁边写下答案、名字和日期',
      ],
    },
  },
  {
    id: 'agency-question-checklist',
    live: true,
    en: {
      name: 'Agency question checklist',
      summary:
        'The questions to put to an agency in writing before you sign, about the fee, the money, the surrogate’s position, the medical program, the legal work, a failed cycle, and the claims you can check.',
      linkNote: 'Thirty-one questions to send before you sign.',
      points: [
        'Grouped by what is being decided: the fee, money, the surrogate’s position, medical, legal, failure, verifiable claims',
        'Paste the document into an email so each answer arrives beside its own question',
        'Keep the file, and mark beside each answer the date it arrived and the name that gave it',
      ],
    },
    zh: {
      name: '机构提问清单',
      summary: '签约之前需要书面提交给机构的问题，涉及费用、资金、代孕者的处境、医疗方案、法律工作、周期失败，以及可以去核实的说法。',
      linkNote: '三十一个问题，签约前发出去。',
      points: [
        '按待决事项分成七组：费用买到什么、资金、代孕者的处境、医疗、法律工作、周期失败、可以去核实的说法',
        '把这份文档粘贴进邮件，每一条回答就都落在它自己的问题旁边',
        '把文件留存，在每条回答旁边标下它到达的日期和给出回答的人',
      ],
    },
  },
];

