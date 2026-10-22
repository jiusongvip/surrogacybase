import type { Lang } from '@/i18n/config';
import { localizedPath } from '@/i18n/paths';

/**
 * Every tool the site offers, in one place.
 *
 * The homepage, the tools index and the content related-links all read this, so a
 * tool cannot be advertised in one place and missing in another. `live: false` means
 * the page does not exist yet: the entry stays visible and unlinked.
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
  en: ToolText;
  zh: ToolText;
};

export const toolPath = (tool: Tool) => `/tools/${tool.id}`;

export const toolHref = (tool: Tool, lang: Lang) => localizedPath(lang, toolPath(tool));

export const TOOLS: Tool[] = [
  {
    id: 'agency-quote-comparison',
    live: true,
    en: {
      name: 'Agency quote comparison',
      summary:
        'The nine costs a quote is usually built from are already printed as the table. Type what each quote states beside them, mark each included, not included or needs checking, and see what the totals still leave unanswered.',
      linkNote: 'Compare two quotes across the same nine costs, in your browser.',
      points: [
        'The nine costs are printed for you, so the table is ready before you type',
        'Amounts that are not confirmed stay out of the totals',
        'Download it as one document, or clear the amounts and start again: nothing is kept once the tab closes',
      ],
    },
    zh: {
      name: '机构报价对比',
      summary: '一份报价通常由九项成本搭成，这张表格已经把它们印好了。在每份报价旁填入它写明的金额，标注为包含、不包含或待核查，看看合计仍然没有回答什么。',
      linkNote: '在您的浏览器里，让两份报价落在同样的九项成本上对比。',
      points: ['九项成本已经印好，您不必先搭表格', '未经确认的金额不计入合计', '下载成一份文档，或清空金额重新开始；关掉标签页后这里不保留任何东西'],
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
      name: '已公布的费用数据',
      summary:
        '把本站公布的每一项费用数据归在它覆盖的费用条目下，而不是归在它所属的国家下：整个流程的数据归在一起，支付给代孕者的数据也归在一起。每一行都保留公布它的来源，以及数据对应的年份。',
      linkNote: '各来源公布过的费用数据，逐条列出，每条都附引用出处。',
      points: ['未公布费用数据的目的地会直接说明，而不是给出估算', '每一行都链接到公布该数据的来源，并注明数据年份', '不取平均值，不做货币换算，也不在本站推算任何数据'],
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
        'Download a document with an empty box beside every question',
        'Write the answer, the name and the date beside a question once a professional has given it about your own facts',
      ],
    },
    zh: {
      name: '目的地研究清单',
      summary: '决定一个目的地的那组问题：资格、亲权、国籍、医疗范围、资金、谁必须本人到场，以及发生争议时怎么办。把它们交给专业人士，答案写进您下载的那份文档。',
      linkNote: '三十三个问题，分七组，成为一份文档。',
      points: [
        '七组问题，从谁可以委托，一直到两位专业人士意见不合时会怎样',
        '下载成一份文档，每个问题前面都留着一个空的方框',
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

