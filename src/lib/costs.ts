/*
 * A cost figure in the form a reader sees it.
 *
 * The amount, its currency and the year it describes live in src/data/jurisdictions, because they
 * are the same in both languages and a translated number is a corrupted number. Only the words
 * around them are translated, from src/i18n/ui.ts, so the two languages print the same figure and
 * can disagree about nothing but the label.
 */
import type { CollectionEntry } from 'astro:content';
import type { Lang } from '@/i18n/config';
import { UI, fill } from '@/i18n/ui';

export type CostFigure = CollectionEntry<'jurisdictions'>['data']['costs'][number];

const amount = (value: number, lang: Lang) =>
  new Intl.NumberFormat(lang === 'zh' ? 'zh-CN' : 'en-US').format(value);

/** The figure as its source stated it: a span, a ceiling, a floor, or one amount. */
export function costText(figure: CostFigure, lang: Lang): string {
  const costs = UI[lang].costs;
  return fill(costs.shapes[figure.shape], {
    c: costs.currency[figure.currency],
    a: figure.low === null ? '' : amount(figure.low, lang),
    b: figure.high === null ? '' : amount(figure.high, lang),
  });
}

/**
 * The single figure worth a place in the comparison row. The whole program comes first because it
 * is the number a reader is looking for; a destination that only publishes what may be paid to the
 * carrier shows that instead rather than showing nothing.
 */
export function headlineCost(costs: CostFigure[]): CostFigure | undefined {
  return costs.find((f) => f.item === 'total') ?? costs.find((f) => f.item === 'carrier');
}
