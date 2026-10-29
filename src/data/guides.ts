import type { Bilingual } from '@/i18n/ui';
import type { IconName } from '@/lib/icons';

/*
 * The order the guides are read in: process, the legal questions it raises, money, the agency that
 * spends it, the choices inside the program, then coming home.
 *
 * The homepage and /guides both read this list, so the two cannot disagree about which guide comes
 * second. A guide added later and left out of the list still appears — callers append whatever the
 * collection holds after these entries rather than dropping it.
 */
export const GUIDE_ORDER = [
  'guides/surrogacy-process',
  'guides/surrogacy-legal-considerations',
  'guides/surrogacy-cost',
  'guides/choosing-a-surrogacy-agency',
  'guides/gamete-and-surrogate-options',
  'guides/bringing-your-child-home',
];

/*
 * What a homepage card needs and a content record cannot supply: an icon, and one line short enough
 * to take in without reading. Both travel with the guide rather than sitting in the template, so a
 * card cannot be labelled in one language and left in the other, and a renamed guide fails here.
 *
 * Every line is lifted from that guide's own description — nine stages, four legal questions, what
 * a quote leaves out — so the card adds no claim the page behind it does not already make. A guide
 * published later and missing from this map still appears; it falls back to its description.
 */
export const GUIDE_CARDS: Record<string, { icon: IconName; line: Bilingual }> = {
  'surrogacy-process': {
    icon: 'route',
    line: { en: 'Nine stages, and who controls each', zh: '九个阶段，每段由谁控制' },
  },
  'surrogacy-legal-considerations': {
    icon: 'scale',
    line: { en: 'Four legal questions, taken one at a time', zh: '四个法律问题，逐项拆开' },
  },
  'surrogacy-cost': {
    icon: 'receipt',
    line: { en: 'What a quote usually leaves out', zh: '报价通常不含哪些项目' },
  },
  'choosing-a-surrogacy-agency': {
    icon: 'building',
    line: { en: 'The five documents to ask for before signing', zh: '签约前应索取的五份文件' },
  },
  'gamete-and-surrogate-options': {
    icon: 'list-check',
    line: { en: 'Three decisions, and what each one locks in', zh: '三个决定，各自锁定哪些内容' },
  },
  'bringing-your-child-home': {
    icon: 'file-text',
    line: { en: 'Which document lets the child cross', zh: '孩子过境所凭的文件' },
  },
};
