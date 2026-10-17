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
  en: ToolText;
  zh: ToolText;
};

export const toolHref = (id: string, lang: Lang) => localizedPath(lang, `/tools/${id}`);

export const TOOLS: Tool[] = [
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
