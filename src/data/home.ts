/*
 * The homepage, in both languages.
 *
 * The section order, the headings and the call to action follow the layout the site owner
 * defined. Three rules keep that layout from turning into a claim the rest of the site cannot
 * support.
 *
 *   - Anything a reader sees lives in this file, including alt text. A description of a
 *     photograph is content, and a Chinese page with an English caption is half translated.
 *   - A card links to a page that exists. Where the mock shows a country with no sourced
 *     record, the built page shows the countries that do have one, and says what state the
 *     record is in.
 *   - A promise about an answer, a turnaround or a person is only made where the owner has
 *     actually committed to it. The form section below is the one place the site speaks for
 *     the service rather than for the research.
 *
 * Strings that sit against other markup carry their own separators. English needs a space
 * before a link; the Chinese full-width colon and 、 take none, so the space belongs in the
 * string rather than in the template.
 */
import type { Lang } from '@/i18n/config';
import type { Bilingual } from '@/i18n/ui';
import type { IconName } from '@/lib/icons';

export const HOME_META: Record<Lang, { titleTag: string; description: string }> = {
  en: {
    titleTag: 'Cross-Border Surrogacy Guides & Tools',
    description:
      'Independent cross-border surrogacy guidance: compare destinations on the same terms, read sourced cost data, and use the tools on your own quote.',
  },
  zh: {
    titleTag: '跨境代孕指南与工具',
    description:
      '关于跨境代孕的独立指引：按同一套标准比较目的地，查看带来源和年份的费用数据，并用工具核对您自己的报价。',
  },
};

export const HOME_HERO: Record<Lang, {
  h1: string;
  lead: string;
  ctaPrimary: string;
  ctaSecondary: string;
  /** The owner's line, set under the lead in the copy column. It is not a claim about outcomes. */
  note: string;
}> = {
  en: {
    h1: 'Trusted guidance for your surrogacy journey',
    lead: 'Work out what your options actually are, compare destinations and costs side by side, and get the legal, medical and practical questions answered before you move forward.',
    ctaPrimary: 'Explore destinations',
    ctaSecondary: 'Free consultation',
    note: 'More clarity for your family’s future',
  },
  zh: {
    h1: '为您的代孕之旅提供可靠指引',
    lead: '帮助您理清可行的方案，系统比较各目的地与费用，并在迈出下一步之前，逐一梳理法律、医疗与实务层面的关键问题。',
    ctaPrimary: '查看目的地',
    ctaSecondary: '免费咨询',
    note: '为您一家人的未来，多一分清楚',
  },
};

/*
 * The four standards, one dimension each: can you open it, who put it out, what the number was
 * counted on, and whether it is current. The earlier drafts failed twice on the same section. One
 * handed the reader the checking as a task, which is homework nobody does while deciding whether to
 * keep scrolling. The next admitted what the edit had not found ("where there is no source we do
 * not print it", "where we got something wrong we fix it"), which reads as a team that could not
 * get the material. Both directions talk about the edit; these four lines talk about the document
 * in front of the reader, and state it positively. The intro names the categories once, so no item
 * below has to list them again.
 */
export const HOME_METHOD: Record<Lang, {
  heading: string;
  intro: string;
  items: { title: string; body: string }[];
  link: { label: string; href: string };
}> = {
  en: {
    heading: 'Every figure has a source',
    intro:
      'Costs, success rates and legal conditions each sit on a document, and each line names that document, who put it out, and when.',
    items: [
      {
        title: 'Open the original',
        body: 'Every figure carries the address of the document behind it, so you read the notice or the judgment itself rather than our summary of it.',
      },
      {
        title: 'Publisher named',
        body: 'Government, court, regulator or clinic annual report: the page says which of them put the figure out.',
      },
      {
        title: 'Rates with their basis',
        body: 'Each success rate carries the year it was counted and the sample behind it, so two clinics’ numbers never line up as though they matched.',
      },
      {
        title: 'A revision record',
        body: 'Every page shows when it was first published and when it was last revised. Figures move when their sources do.',
      },
    ],
    link: { label: 'The editorial policy', href: '/editorial-policy' },
  },
  zh: {
    heading: '每个数字都有出处',
    intro: '价格、成功率与法律条件，背后都对应一份原始文件；每一条都注明文件名称、发布方与发布日期。',
    items: [
      {
        title: '直接查原文',
        body: '每个数字后面都附原文地址，您点开看到的是那份公告或判决本身，不是我们的转述。',
      },
      {
        title: '标明发布方',
        body: '政府、法院、监管机构还是诊所年报，写明这个数字由哪一家发布。',
      },
      {
        title: '成功率带口径',
        body: '每条成功率注明统计年份与样本范围，两家的数字不会被并排成一回事。',
      },
      {
        title: '有修订记录',
        body: '每页标注首次发表与最后一次修订的日期，数字随来源更新。',
      },
    ],
    link: { label: '编辑方针', href: '/editorial-policy' },
  },
};

/* The guide index: one heading that answers the question a reader at the top of the list is
 * actually asking, and one exit. The count stays dynamic in the second half, so publishing a seventh
 * guide cannot leave a heading that says six behind.
 *
 * A question here is not the same thing as a question in the enquiry band. That band is a terms
 * sheet and must not chat; this heading names the state the reader is in and points at the fix,
 * which is the one place on the page where a second person earns its keep. What it must not do is
 * advertise a range the six rows do not cover: an earlier draft read "from the process to bringing
 * your child home", which described only the first and the last card and left the four in between
 * outside the promise. */
export const HOME_GUIDE_INDEX: Record<Lang, {
  /** {n} is the number of published guides. */
  heading: string;
  viewAll: { label: string; href: string };
}> = {
  en: {
    heading: 'Not sure where to start? Read these {n} first',
    viewAll: { label: 'All guides', href: '/guides' },
  },
  zh: {
    /* "当前所处阶段" was removed with the four situation cards: the rows below carry numbers but no
     * stage labels, so a heading about stages would ask the reader to map a state onto "03" with
     * nothing on the page to map it with. Name what is printed instead. */
    heading: '还没想好从哪开始？先看这 {n} 份',
    viewAll: { label: '全部指南', href: '/guides' },
  },
};

export const HOME_COUNTRIES: Record<Lang, {
  /** {n} is the number of published records. The count sits in the heading, the way a section
   * title in the reference sites carries its own size instead of leaving it to a line below. */
  heading: string;
  cta: string;
  /**
   * One line per record on who can actually use the route, compressed from that record's own
   * eligibility field. It replaces "N facts · M open questions", which counted the edit instead of
   * answering the reader: how many sentences were sourced and how many are still loose is our
   * housekeeping, and printing it on every card said eight times over what the research had not
   * settled. A reader comparing countries wants one thing: is this open to someone like me. The
   * record page keeps the full eligibility statement; this is its headline, not a substitute for it.
   * A code with no entry here prints no line, so a new record cannot inherit a wrong one.
   */
  notes: Record<string, string>;
}> = {
  en: {
    heading: '{n} countries',
    cta: 'All records',
    notes: {
      us: 'Each state sets its own rules',
      ca: 'Federal law settles reimbursement, not eligibility',
      gb: 'Couples and singles, with a genetic link',
      co: 'Settled case by case in the courts',
      gr: 'Court approval, and permanent residence in Greece',
      ua: 'Married couples only; foreign parents accepted',
      ge: 'A man and a woman, married or cohabiting',
      kz: 'Closed to international intended parents',
    },
  },
  zh: {
    heading: '{n} 个国家',
    cta: '全部记录',
    notes: {
      us: '各州分别规定',
      ca: '联邦只定报销，不管资格',
      gb: '伴侣或个人均可，需有基因联系',
      co: '由法院逐案认定',
      gr: '需法院许可，且需希腊永居',
      ua: '仅限已婚夫妇，外国人可做',
      ge: '一男一女，已婚或同居',
      kz: '已对国际委托父母关闭',
    },
  },
};

/* The heading is the label the reader scans for. What the four pieces are is already on every
 * card's summary, so a line above them would say that twice. The exit names the destination, not the
 * size of the archive: nine pieces is not a number that helps anyone decide to read one. */
export const HOME_READING: Record<Lang, {
  heading: string;
  viewAll: string;
  emptyTitle: string;
  emptyBody: string;
  emptyAction: string;
}> = {
  en: {
    heading: 'Explainers',
    viewAll: 'All explainers',
    emptyTitle: 'Nothing is published here yet',
    emptyBody: 'A piece appears here once its sources have been checked and it is ready to read.',
    emptyAction: 'Read the publication standards',
  },
  zh: {
    heading: '专题解读',
    viewAll: '全部解读',
    emptyTitle: '这里还没有已发布的内容',
    emptyBody: '这一节只列出已经发布的内容。一篇专题解读在来源核查完成、确实可以阅读之后，才会出现在这里。',
    emptyAction: '阅读发布标准',
  },
};

/* The band's copy follows the register this category's sites use: a short noun heading, one sentence
 * saying what the reader gets and who gives it, then four terms, each a four- to six-character noun
 * label followed by one sentence that states the commitment and stops. It reads as a terms sheet,
 * not a conversation, so nothing here addresses the reader as though they had dropped by for a chat.
 *
 * Every term is a commitment the site already keeps. The enquiry lands in our own inbox — the
 * Feishu / WeCom workspace the owner reads and answers it in — and stops there, which is what lets
 * "never shared with third parties" stand as a statement of fact rather than a slogan. */
export const HOME_BAND: Record<Lang, {
  heading: string;
  para: string;
  /** Where the reader's words go, for a reader who wants to know before typing. */
  link: { label: string; href: string };
}> = {
  en: {
    heading: 'Free consultation',
    para: 'Fill in where you are and what you want settled, even if it is not yet a finished question. Every enquiry is answered by one of our advisors.',
    link: { label: 'How we use what you send', href: '/privacy' },
  },
  zh: {
    heading: '免费咨询',
    para: '填写您目前的情况和想弄清的问题，不必先写成完整的表述。每一次咨询都由专业顾问本人回复。',
    link: { label: '信息使用说明', href: '/privacy' },
  },
};

/*
 * Four terms, one commitment each, ordered the way a reader about to type personal details asks the
 * questions: where does this go, how fast is the answer, who else sees it, what will it ask of me.
 * The labels are noun phrases and the bodies stop after one sentence — a second clause only invites
 * the reader to audit the wording instead of the promise.
 */
export const HOME_BAND_TRUST: { icon: IconName; label: Bilingual; body: Bilingual }[] = [
  {
    icon: 'lock',
    label: { en: 'Strictly confidential', zh: '信息严格保密' },
    body: {
      en: 'Your details are used only for your enquiry and are never shared with third parties.',
      zh: '个人信息仅用于咨询，绝不向第三方泄露。',
    },
  },
  {
    icon: 'clock',
    label: { en: 'Reply within 24 hours', zh: '24 小时快速响应' },
    body: {
      en: 'An advisor contacts you directly after you submit.',
      zh: '提交后由顾问本人与您联系。',
    },
  },
  {
    icon: 'check',
    label: { en: 'Never forwarded', zh: '咨询不外转' },
    body: {
      en: 'No clinic, agency or lawyer receives your enquiry.',
      zh: '您的咨询不会转给诊所、机构或律师。',
    },
  },
  {
    icon: 'list-check',
    label: { en: 'Nothing sensitive', zh: '不问证件与病历' },
    body: {
      en: 'We never ask for ID, medical records or a budget figure.',
      zh: '我们不会询问您的证件、病历或预算。',
    },
  },
];
