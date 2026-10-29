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
    question: { en: 'Which places allow this at all, and does my own situation qualify?', zh: '哪些法域允许代孕，我方自身情况是否符合条件？' },
    body: { en: 'What each legal system actually states, who may commission under it, and where the sourced record goes quiet.', zh: '各法律体系实际载明何种内容、其中何者可以委托，以及附有出处的记录于何处缺失。' },
    action: { en: 'Compare destinations', zh: '比较目的地' },
    href: '/destinations',
    primary: true,
  },
  {
    id: 'parentage',
    label: { en: 'Citizenship and parentage', zh: '国籍与亲权' },
    question: { en: 'Whose child is this at birth, and what travels with it?', zh: '孩子于出生时归于何人，又可凭何种证件出行？' },
    body: { en: 'Parentage, birth registration, nationality and the documents that follow, kept apart as four separate questions.', zh: '亲权、出生登记、国籍及后续证件，作为四项独立问题分别处理。' },
    action: { en: 'Settle the four legal questions', zh: '厘清四项法律问题' },
    href: '/guides/surrogacy-legal-considerations',
    primary: true,
  },
  {
    id: 'gametes',
    label: { en: 'Eggs, sperm and the surrogate', zh: '卵子、精子与孕母' },
    question: { en: 'Can we use our own gametes, and who carries the pregnancy?', zh: '我们能否使用自己的配子，由谁完成妊娠？' },
    body: { en: 'What each gamete and carrier arrangement decides before you sign anything, and which professional owns each answer.', zh: '各项配子与妊娠安排于您签署任何文件之前即已确定何种内容，以及每项问题由哪一方专业人员答复。' },
    action: { en: 'Work through the options', zh: '逐项核对上述选择' },
    href: '/guides/gamete-and-surrogate-options',
  },
  {
    id: 'cost',
    label: { en: 'Cost and scope', zh: '费用与范围' },
    question: { en: 'What does this quote actually include, and what sits outside it?', zh: '该报价实际包含何种项目，又有何者位于其外？' },
    body: { en: 'Where a number comes from, which costs never appear in a quote, and how payment stages and refunds are arranged.', zh: '费用数据之来源、哪些费用不会呈现于报价之中，以及付款阶段与退款如何安排。' },
    action: { en: 'Break the budget down', zh: '拆分预算构成' },
    href: '/guides/surrogacy-cost',
    primary: true,
  },
  {
    id: 'presence',
    label: { en: 'Being there, and how long', zh: '到场，以及停留时长' },
    question: { en: 'Which stages need us present, and how much of our life does this interrupt?', zh: '哪些阶段须由我方本人到场，又将占用多少时间？' },
    body: { en: 'The process in order, who acts at each stage, and what you are expected to prepare or attend yourself.', zh: '依序排开的流程、各阶段由何人行动，以及哪些事项须由您自行准备或亲自办理。' },
    action: { en: 'See the stages in order', zh: '依序查看各阶段' },
    href: '/guides/surrogacy-process',
    primary: true,
  },
  {
    id: 'agency',
    label: { en: 'Agencies and contracts', zh: '机构与合同' },
    question: { en: 'How do we compare these firms without taking their word for it?', zh: '在不采信对方说法的前提下，如何比较这些机构？' },
    body: { en: 'What a fee buys, which duties stay with you, and the clauses to read before money moves.', zh: '一项费用涵盖的内容、哪些责任仍由您承担，以及在资金转移之前应当阅读何种条款。' },
    action: { en: 'Run the verification method', zh: '按核查方法逐项执行' },
    href: '/guides/choosing-a-surrogacy-agency',
  },
];
