/*
 * One picture per published piece, keyed by slug.
 *
 * The homepage row, the article and guide listings and the article header all read from here, so a
 * piece cannot show one photograph on its card and another once you open it.
 * A piece with no entry renders text-only rather than borrowing a picture of something else.
 */
import type { ImageMetadata } from 'astro';
import type { Bilingual } from '@/i18n/ui';
import quotesDesk from '@/assets/images/quotes-desk.jpg';
import costLedger from '@/assets/images/cost-ledger.jpg';
import concernDocuments from '@/assets/images/concern-documents.jpg';
import verifyContract from '@/assets/images/verify-contract.jpg';
import articleParentage from '@/assets/images/article-parentage.jpg';
import articleVerifying from '@/assets/images/article-verifying.jpg';
import concernCalculator from '@/assets/images/concern-calculator.jpg';
import stageNotebook from '@/assets/images/stage-notebook.jpg';
import concernFlight from '@/assets/images/concern-flight.jpg';
import heroDeskMap from '@/assets/images/hero-desk-map.jpg';
import costBreakdown from '@/assets/images/cost-breakdown.jpg';
import threeDecisions from '@/assets/images/three-decisions.jpg';
import escrowStages from '@/assets/images/escrow-stages.jpg';
import transferCounts from '@/assets/images/transfer-counts.jpg';

export type ContentMedia = { src: ImageMetadata; alt: Bilingual };

export const CONTENT_MEDIA: Record<string, ContentMedia> = {
  'surrogacy-costs-that-sit-outside-a-quote': {
    src: costLedger,
    alt: {
      en: 'A page of handwritten columns of figures with three blank paper tags on strings and a pencil',
      zh: '一页手写的分栏数字，旁边是三枚系着细绳的空白纸标签和一支铅笔',
    },
  },
  'choosing-a-surrogacy-agency': {
    src: articleVerifying,
    alt: { en: 'A laptop open on a white desk beside printed documents', zh: '白色桌上一台打开的笔记本电脑，旁边是打印出来的文件' },
  },
  'the-six-month-limit-on-a-uk-parental-order': {
    src: verifyContract,
    alt: {
      en: 'A single document and a pen on a white desk beside a small balance scale and a glass vase holding a leafy sprig',
      zh: '白色桌上一份文件与一支笔，旁边是一架小小的天平，玻璃瓶里插着一枝绿叶',
    },
  },
  'getting-a-birth-certificate-accepted-abroad': {
    src: concernDocuments,
    alt: {
      en: 'Two blank forms, a brass seal and a fountain pen laid out on a pale desk beside a dark red booklet',
      zh: '浅色桌面上摊着两份空白表格、一枚黄铜印章和一支钢笔，旁边是一本深红色的小册子',
    },
  },
  'questions-to-ask-about-surrogacy-law-before-choosing-a-destination': {
    src: quotesDesk,
    alt: {
      en: 'Three open booklets printed with quotation marks beside a numbered list card, a pencil and a kraft envelope',
      zh: '三本摊开的小册子上印着引号与横线，旁边是一张编号一到五的清单卡、一支铅笔和一只牛皮纸信封',
    },
  },
  'why-no-average-surrogacy-cost-exists': {
    src: concernCalculator,
    alt: {
      en: 'A desktop calculator resting on a pad of paper beside a pen, with daylight beyond the edge of the table',
      zh: '一台台式计算器压在便签纸上，旁边是一支笔，桌沿外是白天的光',
    },
  },
  'what-must-be-signed-before-the-first-transfer': {
    src: stageNotebook,
    alt: {
      en: 'A loose sheet laid on a closed cloth-bound ledger, with a fountain pen resting across the paper',
      zh: '一张散页放在合上的布面账簿上，一支钢笔横压在纸上',
    },
  },
  'surrogacy-legal-considerations': {
    src: articleParentage,
    alt: { en: 'Three people seen from behind, walking at the edge of the sea on a flat beach', zh: '三个人的背影，在平缓的沙滩上朝海边走' },
  },
  'bringing-your-child-home': {
    src: concernFlight,
    alt: {
      en: 'The wing of an aircraft seen through a window at sunset, above a bank of cloud',
      zh: '黄昏时机舱窗外的机翼，下方是一片云海',
    },
  },
  'surrogacy-process': {
    src: heroDeskMap,
    alt: {
      en: 'An open map with a compass, a green notebook, a pencil and folded reading glasses on a desk',
      zh: '桌面上摊开的地图旁放着指南针、绿色笔记本、铅笔和折好的老花镜',
    },
  },
  'surrogacy-cost': {
    src: costBreakdown,
    alt: {
      en: 'An illustrated three-column cost sheet ruled on pale paper, with a brass ruler and a pencil beside it',
      zh: '插画：浅色纸上一张三栏分格的费用清单，旁边是一把黄铜直尺和一支铅笔',
    },
  },
  'gamete-and-surrogate-options': {
    src: threeDecisions,
    alt: {
      en: 'An illustrated set of three blank index cards fanned side by side, each with a heading line, and a pencil below',
      zh: '插画：三张空白索引卡并排摊开，每张都有一行标题线，下方放着一支铅笔',
    },
  },
  'surrogacy-escrow-accounts-and-payment-stages': {
    src: escrowStages,
    alt: {
      en: 'An illustrated row of four sealed kraft envelopes with brass seals, a receipt stub and a brass key',
      zh: '插画：一字排开的四只封口牛皮纸信封，带着黄铜封扣，旁边是一张收据存根和一把黄铜钥匙',
    },
  },
  'what-40177-transfers-do-not-promise-you': {
    src: transferCounts,
    alt: {
      en: 'An illustrated printed table of tallied counts with a brass magnifying glass resting over the middle rows',
      zh: '插画：一张打印的计数表格，一只黄铜放大镜压在中间几行上，角落放着一张便签卡',
    },
  },
};

/** Entries are namespaced by collection and language, so the slug is the last path segment. */
export const contentMedia = (id: string): ContentMedia | undefined => CONTENT_MEDIA[id.split('/').pop() ?? id];
