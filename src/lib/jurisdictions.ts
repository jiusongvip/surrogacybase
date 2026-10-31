/*
 * Jurisdiction records in the language the page is being built in.
 *
 * Provenance lives in exactly one place: src/data/jurisdictions/<code>.json. The Chinese file
 * carries only wording, and each of its fact entries names the source url it translates, so a
 * drift between the two files fails the build rather than printing a Chinese sentence beside an
 * English citation.
 */
import { getCollection, type CollectionEntry } from 'astro:content';
import zhOverlay from '@/data/jurisdictions-zh.json';
import type { Lang } from '@/i18n/config';

type Jurisdiction = CollectionEntry<'jurisdictions'>['data'];

type ZhFact = { url: string; label: string; publisher: string; supports: string; claim: string };
/** The date is the same in both files; only the sentence around it is translated. */
type ZhEvent = { on: string; claim: string };
type ZhSubJurisdiction = {
  name: string;
  status: 'permitted' | 'restricted' | 'prohibited' | 'unlegislated';
  note?: string;
};
type ZhRecord = {
  name: string;
  region: string;
  eligibility: string;
  paymentModel: string;
  parentage: string;
  facts: ZhFact[];
  timeline?: ZhEvent[];
  openQuestions: string[];
  /**
   * The legality map for a divided jurisdiction, supplied in full when present. State/province
   * names are proper nouns and stay identical across languages; only the explanatory notes are
   * translated. When absent, the English record's own subJurisdictions is used unchanged.
   */
  subJurisdictions?: ZhSubJurisdiction[];
};

const overlays = zhOverlay as unknown as Record<string, ZhRecord>;

/** True when every prose field of this record has been written in Chinese. */
export function hasChineseRecord(code: string): boolean {
  return overlays[code] !== undefined;
}

function overlayFor(code: string): ZhRecord {
  const zh = overlays[code];
  if (!zh) throw new Error(`No Chinese record for jurisdiction "${code}". Add it to src/data/jurisdictions-zh.json.`);
  return zh;
}

/**
 * Returns the record with its prose fields replaced. Throws when the Chinese file and the source
 * file disagree about which facts exist, because that means one of them was edited alone.
 */
export function localize(data: Jurisdiction, lang: Lang): Jurisdiction {
  if (lang === 'en') return data;
  const zh = overlayFor(data.code);

  if (zh.facts.length !== data.facts.length) {
    throw new Error(`${data.code}: ${data.facts.length} sourced facts in English, ${zh.facts.length} in Chinese`);
  }
  if (zh.openQuestions.length !== data.openQuestions.length) {
    throw new Error(`${data.code}: ${data.openQuestions.length} open questions in English, ${zh.openQuestions.length} in Chinese`);
  }

  /*
   * The timeline is optional on the Chinese side because a record can gain one without every
   * other record gaining one. What is not optional is the date: if the English record carries an
   * event the Chinese file does not, the page would print a Chinese sentence beside a date nobody
   * checked, so the mismatch fails the build instead.
   */
  const timeline = data.timeline.map((event, i) => {
    const zhEvent = zh.timeline?.[i];
    if (!zhEvent) {
      throw new Error(`${data.code} event ${i} (${event.on}): no Chinese wording in jurisdictions-zh.json`);
    }
    if (zhEvent.on !== event.on) {
      throw new Error(`${data.code} event ${i}: Chinese record dates it ${zhEvent.on}, the source says ${event.on}`);
    }
    return { ...event, claim: zhEvent.claim };
  });

  const facts = data.facts.map((fact, i) => {
    const zhFact = zh.facts[i];
    if (zhFact.url !== fact.source.url) {
      throw new Error(`${data.code} fact ${i}: Chinese record names ${zhFact.url}, the source names ${fact.source.url}`);
    }
    return {
      ...fact,
      claim: zhFact.claim,
      source: { ...fact.source, label: zhFact.label, publisher: zhFact.publisher, supports: zhFact.supports },
    };
  });

  return {
    ...data,
    name: zh.name,
    region: zh.region,
    eligibility: zh.eligibility,
    paymentModel: zh.paymentModel,
    parentage: zh.parentage,
    facts,
    timeline,
    openQuestions: zh.openQuestions,
    /* The legality map: use the Chinese overlay when it carries one (it translates only the notes),
     * otherwise the English record's own array. A divided jurisdiction without a Chinese map would
     * print English notes, so any record that has subJurisdictions should carry them here too. */
    subJurisdictions: zh.subJurisdictions ?? data.subJurisdictions,
  };
}

/** Published records, sorted the way the comparison table sorts them. */
export async function getJurisdictions(lang: Lang = 'en') {
  const rows = await getCollection('jurisdictions', (e) => e.data.published);
  const localized = rows.map((row) => ({ ...row, data: localize(row.data, lang) }));
  /* English keeps the comparison's existing collation; Chinese sorts by the writing system. */
  return localized.sort((a, b) => {
    const order = lang === 'en' ? undefined : 'zh-Hans';
    return a.data.region.localeCompare(b.data.region, order) || a.data.name.localeCompare(b.data.name, order);
  });
}
