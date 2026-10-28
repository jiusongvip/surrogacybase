/*
 * The one place a page asks the reader to start a conversation, and the tool that belongs beside
 * the page they were just reading.
 *
 * The wording is kept here rather than repeated in each layout because the same band appears on
 * every guide, article and destination record: a CTA that says something different on each page
 * would read like a different site. The primary action opens the same single enquiry dialog the
 * header and homepage use; nothing is posted until the reader sends it.
 */
import type { Lang } from '@/i18n/config';

export type NextStepCopy = {
  eyebrow: string;
  heading: string;
  body: string;
  primary: string;
  /** The secondary link on a destination record, where the next question is usually money. */
  costGuide: string;
};

export const NEXT_STEP: Record<Lang, NextStepCopy> = {
  en: {
    eyebrow: 'Your own situation',
    heading: 'The general answer is only the start',
    body:
      'Tell us about your situation. A consultant on the editorial team replies within 24 hours, and nothing you send goes to a clinic or agency.',
    primary: 'Free consultation',
    costGuide: 'Read the cost guide',
  },
  zh: {
    eyebrow: '您自己的情况',
    heading: '通用答案只是起点',
    body:
      '告诉我们您的情况。编辑团队的顾问会在 24 小时内回复，您发来的内容不会转给诊所或机构。',
    primary: '免费咨询',
    costGuide: '阅读费用指南',
  },
};

/**
 * The tool each content category hands off to. A guide about agencies ends at the agency
 * checklist; a guide about cost ends at the quote comparison. The link label names the action
 * rather than the tool, so the reader knows what will happen when they open it.
 */
export const CONTENT_NEXT: Record<Lang, Record<string, { href: string; label: string }>> = {
  en: {
    cost: { href: '/tools/agency-quote-comparison', label: 'Compare two quotes' },
    destinations: { href: '/tools/destination-comparison', label: 'Compare a shortlist' },
    agencies: { href: '/tools/agency-question-checklist', label: 'Open the agency checklist' },
    process: { href: '/tools/destination-research-checklist', label: 'Open the research checklist' },
    preparation: { href: '/tools/destination-research-checklist', label: 'Open the research checklist' },
  },
  zh: {
    cost: { href: '/tools/agency-quote-comparison', label: '对比两份报价' },
    destinations: { href: '/tools/destination-comparison', label: '并排对比候选目的地' },
    agencies: { href: '/tools/agency-question-checklist', label: '打开机构提问清单' },
    process: { href: '/tools/destination-research-checklist', label: '打开目的地研究清单' },
    preparation: { href: '/tools/destination-research-checklist', label: '打开目的地研究清单' },
  },
};
