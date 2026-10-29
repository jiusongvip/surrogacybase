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

/*
 * One card per tool: the summary says what the tool does with material the reader already holds,
 * and the three points say three things the summary does not. That division is the whole discipline
 * here. When the points paraphrase the summary, a reader scanning five cards reads one sentence
 * five times, and the privacy line in particular used to be printed on every card as well as in the
 * note above them - a page that keeps insisting nothing is collected starts to sound like a page
 * that knows it should not be trusted.
 */
export const TOOLS: Tool[] = [
  {
    id: 'agency-quote-comparison',
    live: true,
    en: {
      name: 'Agency quote comparison',
      summary:
        'Enter the amounts from the quote you hold against nine fixed cost lines, and see what that total is actually made of, and which lines the quote never mentioned. Add the second quote when it arrives.',
      linkNote: 'Put one or two quotes on the same nine costs, in your browser.',
      points: [
        'Nine lines are printed for you, from the agency fee through to a contingency reserve',
        'A line you leave blank stays out of the total, so an incomplete quote cannot look complete',
        'One or two quotes download as a single document to take into the conversation',
      ],
    },
    zh: {
      name: '机构报价对比',
      summary:
        '将现有报价中的金额填入九项固定的成本条目，即可看清这一合计的构成，以及报价自始未提及的条目；获得第二份报价时再并入比较。',
      linkNote: '于您的浏览器内，将一份或两份报价按同一组九项成本加以对比。',
      points: [
        '九项条目已预先列示，自机构方案费起至备用金止',
        '金额留空的条目不计入合计，故并不完整的报价不会呈现为完整',
        '一份或两份报价可下载为同一份文档，供沟通时使用',
      ],
    },
  },
  {
    id: 'destination-comparison',
    live: true,
    en: {
      name: 'Destination comparison',
      summary:
        'Put two or three candidates on the same fields: legal basis, who may commission, payment, parentage at birth, published costs. Each column is a destination read against the same questions as the others.',
      linkNote: 'Put a shortlist side by side, record against record.',
      points: [
        'Each column repeats a published record rather than a fresh summary',
        'Where a record has no position, the column stays open instead of borrowing one from elsewhere',
        'Download the board, or carry the shortlist straight into the research checklist',
      ],
    },
    zh: {
      name: '目的地对比',
      summary:
        '将两至三个候选目的地置于同一组条目之上：法律基础、委托资格、付款安排、出生时的亲权、已公布的费用数据。每一列均为以同一组问题核对一处目的地。',
      linkNote: '将候选目的地并列呈现，逐条记录相互对照。',
      points: [
        '每一列均为一份已发布的记录，而非另行撰写的摘要',
        '记录未含结论之处即行留白，不自别处引入数字或说法加以填补',
        '可下载该对照表，亦可直接将候选名单带入研究清单',
      ],
    },
  },
  {
    id: 'cost-figures',
    live: true,
    en: {
      name: 'Published cost figures',
      summary:
        'Each figure sits under the cost line it covers, not under a country, so a whole-program number is read against whole-program numbers.',
      linkNote: 'Every figure a source has published, in one table, with its citation.',
      points: [
        'Five lines: the whole program, then medical, legal, recruiting, and what goes to the carrier',
        'Each row states the year and the currency the figure was published in',
        'No averaging and no conversion into a single currency',
      ],
    },
    zh: {
      name: '已公布的费用数据',
      summary:
        '每一数字均列于其所覆盖的费用条目之下，而非列于某一国家之下：整套方案的数字仅与整套方案的数字并列。',
      linkNote: '各来源公布的数字集中于一张表内，每条均附引用出处。',
      points: [
        '五个条目：整体方案，及其项下的医疗、法律、招募与支付给代孕者的款项',
        '每一行均标明该数字公布时所依据的年份与币种',
        '不求平均值，亦不折算为同一币种',
      ],
    },
  },
  {
    id: 'destination-research-checklist',
    live: true,
    en: {
      name: 'Destination research checklist',
      summary:
        'The questions that settle a destination: eligibility, parentage, nationality, medical scope, money, attendance, disputes. They go to a local professional, and the answers come back into the file you keep.',
      linkNote: 'Thirty-three questions in seven groups, as a document.',
      points: [
        'Seven groups, thirty-three questions, ending with what happens when two professionals disagree',
        'Downloaded as a document with an empty box before every question',
        'Who answered, and on what date, goes beside that box',
      ],
    },
    zh: {
      name: '目的地研究清单',
      summary: '用于确定目的地的各组问题：资格、亲权、国籍、医疗范围、资金、到场与停留、争议处理。应将其提交给当地的专业人士，答复记录于您所留存的文档之中。',
      linkNote: '三十三项问题，分为七组，汇为一份文档。',
      points: [
        '七组共三十三项问题，末一组所述为两位专业人士意见不一致时的处理方式',
        '可下载为文档，每项问题之前留有空白方框',
        '答复人与答复日期，记录于该方框旁侧',
      ],
    },
  },
  {
    id: 'agency-question-checklist',
    live: true,
    en: {
      name: 'Agency question checklist',
      summary:
        'Thirty-one questions to put to an agency in writing before you sign, from what the fee actually buys through to what happens when a cycle fails.',
      linkNote: 'Thirty-one questions to send before you sign.',
      points: [
        'Seven groups, each standing on one decision: fee, money, the surrogate, medical, legal, failure, evidence',
        'Paste the document into an email so each answer arrives under its own question',
        'Keep the replies: an answer without a name and a date cannot be checked later',
      ],
    },
    zh: {
      name: '机构提问清单',
      summary: '签约前应以书面形式提交机构的三十一项问题，从该费用实际涵盖的内容，到一个周期失败之后的处理方式。',
      linkNote: '三十一项问题，供签约前以书面发出。',
      points: [
        '七组，各自对应一项待决事项：费用、资金、代孕者的处境、医疗、法律工作、周期失败、可供核实的说法',
        '将本文档粘贴进邮件发出，答复即落在对应的问题下方',
        '答复须留存：凡未署名、未注明日期的，日后均无法复核',
      ],
    },
  },
];

