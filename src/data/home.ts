/*
 * The homepage shell, in both languages: metadata, hero, the country band and the enquiry band.
 *
 * The sections that answer "what surrogacy means", "how it works", "the process", "the cost" and
 * "the surrogacy trap" live in src/data/home-guide.ts and src/data/home-evidence.ts. They were
 * split out because they are long, and because each claim in them has to sit beside the source
 * that supports it, which is easier to keep honest in a file of its own.
 *
 * Three rules still hold for everything here.
 *
 *   - Anything a reader sees lives in this file, including alt text. A description of a
 *     photograph is content, and a Chinese page with an English caption is half translated.
 *   - A card links to a page that exists. The country cards are the published jurisdiction
 *     records, so a card cannot appear for a country nobody has sourced.
 *   - A promise about an answer, a turnaround or a person is only made where the owner has
 *     actually committed to it. The enquiry band is the one place the site speaks for the
 *     service rather than for the research.
 *
 * Strings that sit against other markup carry their own separators. English needs a space
 * before a link; the Chinese full-width colon and 、 take none.
 */
import type { Lang } from '@/i18n/config';
import type { Bilingual } from '@/i18n/ui';
import type { IconName } from '@/lib/icons';

export const HOME_META: Record<Lang, { titleTag: string; description: string }> = {
  en: {
    titleTag: 'Surrogacy Meaning, Process and Cost, Explained',
    description:
      'What surrogacy means, how the two forms differ, the nine stages, what the money covers, and the four questions to settle before you pay.',
  },
  zh: {
    titleTag: '代孕是什么：定义、流程与费用全解析',
    description:
      '代孕的定义，妊娠代孕与传统代孕的区别，九个阶段，费用包含什么，以及付款之前需要确认的四个问题。每个数字都附来源。',
  },
};

export const HOME_HERO: Record<Lang, {
  /** The brand line above the eyebrow. Names the site before the reader is asked anything. */
  brand: string;
  /**
   * The line above the heading, in the eyebrow style. It carries three verifiable anchors rather
   * than a description of the reader: who compiled this, how many records it holds, and when the
   * material was last opened. The count and the date arrive as the {n} and {date} tokens filled in
   * by Home.astro from the collection and the source list, so this line cannot drift from either.
   */
  kicker: string;
  h1: string;
  /**
   * One sentence on what the page lets a reader compare. It names the kinds of question the
   * records answer without listing them in full — the four questions are the opening of the
   * explanatory run below, and printing them here as well said the same thing twice.
   */
  lead: string;
  ctaPrimary: string;
  ctaSecondary: string;
  /**
   * The hero photograph is the only content image on the page, so it carries a description rather
   * than an empty alt. It says what is in the picture and stops: the picture illustrates the
   * moment of looking ahead, and inventing a claim about it would be the page asserting something
   * it cannot source.
   */
  imageAlt: string;
}> = {
  en: {
    brand: 'SURROGACYBASE · GLOBAL SURROGACY INFORMATION',
    kicker: 'Independently compiled · {n} countries and regions · checked {date}',
    h1: 'Surrogacy law and cost by country',
    lead: 'Each record answers four questions: who may apply, what may be paid, whether the agreement can be enforced, and who the legal parent is at birth. Each answer cites its provision.',
    ctaPrimary: 'View all records',
    ctaSecondary: 'Talk to an advisor',
    imageAlt:
      'A woman in a white dress at a terrace balustrade at sunset, looking out over a calm bay with a moored yacht and a wooded headland',
  },
  zh: {
    brand: 'SURROGACYBASE · 全球代孕信息',
    kicker: '独立整理 · {n} 个国家与地区 · 资料核对至 {date}',
    h1: '代孕是什么：含义、流程、费用与各国规定',
    lead: '比较不同国家的法律、申请条件与费用口径，弄清孩子出生后谁是法律上的父母。',
    ctaPrimary: '提交咨询',
    ctaSecondary: '按国家查看',
    imageAlt: '日落时分，一位身穿白裙的女士倚在露台栏杆前，望向平静的海湾、停泊的游艇与远处的山峦',
  },
};

export const HOME_COUNTRIES: Record<Lang, {
  /** The count no longer sits in the heading. A reader arriving here is choosing where to look
   * first, and "8 countries" answers a question nobody asked; the number is still printed on the
   * destinations index, where it describes the size of the archive rather than this section. */
  heading: string;
  /** One sentence under the heading. It has to stop a reader from reading eight cards as eight
   * interchangeable options, which is the mistake the row of flags invites on its own. */
  intro: string;
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
    heading: 'Surrogacy information by country and region',
    intro:
      'Surrogacy law is national, and in the United States it is written state by state. It settles more than whether the arrangement is allowed: who may apply, what may be paid, and whose names go on the birth record. Each record lists the documents it was written from.',
    cta: 'View all destinations',
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
    heading: '不同国家和地区的代孕信息',
    intro: '代孕规则以国家为单位确定，美国则由各州分别立法。它规定的不只是是否允许，还有谁可以申请、可以支付什么、出生记录上写谁的名字。每条记录均列出所依据的文件。',
    cta: '查看所有目的地',
    notes: {
      us: '各州分别规定',
      ca: '联邦仅规定报销，不涉及资格',
      gb: '伴侣或个人均可；须存在基因联系',
      co: '由法院逐案认定',
      gr: '需法院许可，且需希腊永居',
      ua: '仅限已婚夫妇；接受外国父母',
      ge: '一男一女，已婚或同居',
      kz: '已对国际委托父母关闭',
    },
  },
};

/* The band's copy follows the register this category's sites use: a short noun heading, one sentence
 * saying what the reader gets and who gives it, then the terms, each a short noun label followed by
 * one sentence that states the commitment and stops. It reads as a terms sheet, not a conversation.
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
    heading: 'Not sure where to start?',
    para: 'Set out your situation, the countries you are comparing, and the questions still open. The reply works through them in order: what the published sources establish for each country, and what needs confirming before the next step.',
    link: { label: 'How we use what you send', href: '/privacy' },
  },
  zh: {
    heading: '不确定从哪里开始？',
    para: '请写明您的情况、正在比较的国家，以及尚未厘清的问题。回复将逐项对应：公开资料对该国的规定，与进入下一步前需要确认的事项。',
    link: { label: '信息使用说明', href: '/privacy' },
  },
};

/*
 * Three terms, one commitment each, ordered the way a reader about to type personal details asks
 * the questions: where does this go, what am I committing to, how fast is the answer. The labels
 * are noun phrases and the bodies stop after one sentence — a second clause only invites the
 * reader to audit the wording instead of the promise.
 */
export const HOME_BAND_TRUST: { icon: IconName; label: Bilingual; body: Bilingual }[] = [
  {
    icon: 'lock',
    label: { en: 'What you send', zh: '您填写的内容' },
    body: {
      en: 'It is used to answer your question. The privacy page covers the rest.',
      zh: '仅用于答复您的咨询，其余说明见隐私政策。',
    },
  },
  {
    icon: 'check',
    label: { en: 'No obligation', zh: '无需承诺' },
    body: {
      en: 'Sending the form commits you to nothing and costs nothing.',
      zh: '提交表单不构成任何约定，也不产生费用。',
    },
  },
  {
    icon: 'clock',
    label: { en: 'Reply within 1 to 2 working days', zh: '通常于 1 至 2 个工作日内回复' },
    body: {
      en: 'The advisor handling your question writes back.',
      zh: '由负责您这个问题的顾问本人回复。',
    },
  },
];
