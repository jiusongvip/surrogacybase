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
        'Put two or three quotes into the same rows, mark each line as included, excluded or unclear, and see what the totals still leave unanswered.',
      linkNote: 'Compare two quotes line by line, in your browser.',
      points: [
        'Line items you add yourself, one per row',
        'Amounts that are not confirmed stay out of the totals',
        'Save, download, and start over without an account',
      ],
    },
    zh: {
      name: '机构报价对比',
      summary: '把两三份报价填进同样的行，逐条标注为包含、不包含或不确定，看看合计仍然没有回答什么。',
      linkNote: '在你的浏览器里逐行对比两份报价。',
      points: ['条目由你自己添加，一行一条', '未经确认的金额不计入合计', '保存、下载、重新开始，无需账户'],
    },
  },
  {
    id: 'destination-research-checklist',
    live: true,
    en: {
      name: 'Destination research checklist',
      summary:
        'Work through eligibility, parentage, nationality, medical scope, money and presence for each country on your shortlist, and keep a note of who has to confirm each line.',
      linkNote: 'Record who answered what, for which destination.',
      points: [
        'One row per question, per destination you are weighing',
        'Mark each line unasked, asked or confirmed, and name who confirmed it',
        'Export the shortlist as a document you can hand to a lawyer',
      ],
    },
    zh: {
      name: '目的地研究清单',
      summary: '针对入围的每一个国家，逐项处理资格、亲权、国籍、医疗范围、资金与实地停留，并记下每一行需要由谁来确认。',
      linkNote: '记录谁在哪个目的地回答了什么。',
      points: [
        '每个目的地、每个问题各占一行',
        '把每一行标注为未询问、已询问或已确认，并写明确认人',
        '把入围名单导出为可以交给律师的文件',
      ],
    },
  },
  {
    id: 'agency-question-checklist',
    live: true,
    en: {
      name: 'Agency question checklist',
      summary:
        'The questions to put to an agency in writing before you sign, with each answer recorded against the date it arrived and the name that gave it.',
      linkNote: 'Put the questions in writing before you sign.',
      points: [
        'Grouped by what is being decided: scope, money, matching, failure, exit',
        'Answers recorded beside the question, not in a separate notebook',
        'Shows which questions are still unanswered when you export',
      ],
    },
    zh: {
      name: '机构提问清单',
      summary: '签约之前需要书面提交给机构的问题，每条回答都记录收到的日期和给出回答的人。',
      linkNote: '签约前把问题写成文字提出。',
      points: [
        '按待决事项分组：范围、资金、匹配、失败、退出',
        '回答记在问题旁边，而不是另外的笔记本里',
        '导出时列出仍然没有答复的问题',
      ],
    },
  },
];
