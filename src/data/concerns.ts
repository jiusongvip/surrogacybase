import type { Bilingual } from '@/i18n/ui';

/**
 * The reader's six blocking questions, and the one page that has to answer each.
 *
 * This is the contract between the homepage and the rest of the site: a concern is
 * only allowed to link out once the route exists. `src/components/pages/Home.astro` resolves
 * every href below against the live collections and this file, so a concern added
 * before its page is written renders as withheld instead of as a dead link.
 *
 * Each field is bilingual because the Chinese homepage asks the same six questions, and a
 * question that reaches a reader in one language only is not the same question.
 */
export type Concern = {
  id: string;
  /** The topic in the reader's own words, not a site section name. */
  label: Bilingual;
  /** The question a person actually arrives holding. */
  question: Bilingual;
  /** What the landing page settles, so the choice is made on content, not on a title. */
  body: Bilingual;
  action: Bilingual;
  /** Written without a language prefix. The page that renders it adds the one it is in. */
  href: string;
  /**
   * The four questions that block a decision before anything else can be priced or
   * planned. The homepage gives them their own layout; the rest are linked beneath it.
   */
  primary?: boolean;
};

export const CONCERNS: Concern[] = [
  {
    id: 'destinations',
    label: { en: 'Destinations and legality', zh: '目的地与合法性' },
    question: { en: 'Which places allow this at all, and does my own situation qualify?', zh: '哪些地方根本允许这件事，我自己的情况是否符合条件？' },
    body: { en: 'What each legal system actually states, who may commission under it, and where the sourced record goes quiet.', zh: '每个法律体系实际写明了什么、其中谁可以委托，以及有出处的记录在哪里沉默。' },
    action: { en: 'Compare destinations', zh: '比较目的地' },
    href: '/destinations',
    primary: true,
  },
  {
    id: 'parentage',
    label: { en: 'Citizenship and parentage', zh: '国籍与亲权' },
    question: { en: 'Whose child is this at birth, and what travels with it?', zh: '孩子出生时是谁的孩子，又能带着什么身份出行？' },
    body: { en: 'Parentage, birth registration, nationality and the documents that follow, kept apart as four separate questions.', zh: '亲权、出生登记、国籍以及随后的证件，作为四个独立的问题分开对待。' },
    action: { en: 'Settle the four legal questions', zh: '把四个法律问题分清' },
    href: '/guides/surrogacy-legal-considerations',
    primary: true,
  },
  {
    id: 'gametes',
    label: { en: 'Eggs, sperm and the surrogate', zh: '卵子、精子与孕母' },
    question: { en: 'Can we use our own gametes, and who carries the pregnancy?', zh: '我们能否使用自己的配子，由谁完成妊娠？' },
    body: { en: 'What each gamete and carrier arrangement decides before you sign anything, and which professional owns each answer.', zh: '每一种配子与妊娠安排在你签署任何文件之前就已经决定了什么，以及每个问题由哪一方专业人员回答。' },
    action: { en: 'Work through the options', zh: '逐项看清这些选择' },
    href: '/guides/gamete-and-surrogate-options',
  },
  {
    id: 'cost',
    label: { en: 'Cost and scope', zh: '费用与范围' },
    question: { en: 'What does this quote actually include, and what sits outside it?', zh: '这份报价实际包含什么，又有什么在它之外？' },
    body: { en: 'Where a number comes from, which costs never appear in a quote, and how payment stages and refunds are arranged.', zh: '数字从何而来、哪些费用永远不会出现在报价里，以及付款节点与退款如何安排。' },
    action: { en: 'Break the budget down', zh: '把预算拆开' },
    href: '/guides/surrogacy-cost',
    primary: true,
  },
  {
    id: 'presence',
    label: { en: 'Being there, and how long', zh: '到场，以及要停留多久' },
    question: { en: 'Which stages need us present, and how much of our life does this interrupt?', zh: '哪些阶段需要我们本人到场，这又会打断我们的生活多久？' },
    body: { en: 'The process in order, who acts at each stage, and what you are expected to prepare or attend yourself.', zh: '按顺序排开的流程、每个阶段由谁行动，以及哪些事需要你自行准备或亲自办理。' },
    action: { en: 'See the stages in order', zh: '按顺序看这些阶段' },
    href: '/guides/surrogacy-process',
    primary: true,
  },
  {
    id: 'agency',
    label: { en: 'Agencies and contracts', zh: '机构与合同' },
    question: { en: 'How do we compare these firms without taking their word for it?', zh: '不采信对方的说法，我们怎么比较这些机构？' },
    body: { en: 'What a fee buys, which duties stay with you, and the clauses to read before money moves.', zh: '一笔费用买到什么、哪些责任仍然在你身上，以及在钱动之前要读哪些条款。' },
    action: { en: 'Run the verification method', zh: '按核查方法走一遍' },
    href: '/guides/choosing-a-surrogacy-agency',
  },
];
