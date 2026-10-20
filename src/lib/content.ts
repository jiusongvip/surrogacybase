import { getCollection, render, type CollectionEntry } from 'astro:content';
import { TOOLS, toolHref } from '@/data/tools';
import { PREFIX, type Lang } from '@/i18n/config';

export type ContentEntry = CollectionEntry<'content'>;

/** A draft or unpublished page never enters listings, links or the sitemap. */
export function isLive(entry: ContentEntry): boolean {
  return entry.data.published && entry.data.evidence !== 'draft';
}

/*
 * The language of a content entry is its folder, not a frontmatter field: a file under
 * src/content/zh is Chinese and nothing else, so the two languages cannot disagree with the
 * path they are served from. pathOf() relies on the same fact, since '/zh/guides/x' is both
 * the entry id and the URL the Chinese mirror is built at.
 *
 * Entry ids are paths under src/content with no leading slash, so the URL prefix '/zh' loses
 * its slash here. Comparing ids against PREFIX.zh directly would silently call every Chinese
 * file English, and the Chinese guide would then build the English URL.
 */
const ID_PREFIX = PREFIX.zh.slice(1);
const ID_SEP = `${ID_PREFIX}/`;

export function langOfEntry(entry: { id: string }): Lang {
  return entry.id.startsWith(ID_SEP) ? 'zh' : 'en';
}

/** 'zh/guides/x' -> 'guides/x', so a reference written for one language finds the other. */
function unprefixed(id: string): string {
  return id.startsWith(ID_SEP) ? id.slice(ID_SEP.length) : id;
}

/** The string a frontmatter reference is written against: the same in both languages. */
export function refKeyOf(entry: { id: string }): string {
  return unprefixed(entry.id);
}

function sameLang(lang: Lang) {
  return (entry: ContentEntry) => langOfEntry(entry) === lang;
}

export function pathOf(entry: ContentEntry): string {
  return `/${entry.id}`;
}

/** entry.id is the file path under src/content, so slugs stay one-to-one with files. */
export function idFor(type: 'guide' | 'article', slug: string, lang: Lang = 'en'): string {
  const base = `${type === 'guide' ? 'guides' : 'articles'}/${slug}`;
  return lang === 'en' ? base : `${ID_SEP}${base}`;
}

export async function getLiveContent(lang: Lang = 'en'): Promise<ContentEntry[]> {
  const all = await getCollection('content', (e) => isLive(e) && langOfEntry(e) === lang);
  return all.sort((a, b) => b.data.updatedOn.localeCompare(a.data.updatedOn));
}

export async function getGuides(lang: Lang = 'en'): Promise<ContentEntry[]> {
  const all = await getCollection('content', (e) => e.data.type === 'guide' && isLive(e) && langOfEntry(e) === lang);
  return all.sort((a, b) => a.data.category.localeCompare(b.data.category));
}

export async function getArticles(lang: Lang = 'en'): Promise<ContentEntry[]> {
  const all = await getCollection('content', (e) => e.data.type === 'article' && isLive(e) && langOfEntry(e) === lang);
  return all.sort((a, b) => b.data.publishedOn.localeCompare(a.data.publishedOn));
}

/**
 * Resolve a list of ids or bare slugs to live entries, dropping anything missing. Only the
 * caller's own language is searched, so a Chinese article that names 'surrogacy-cost' links
 * to the Chinese guide rather than to the English one it was translated from.
 */
export async function resolveRefs(refs: string[], lang: Lang = 'en'): Promise<ContentEntry[]> {
  const all = (await getCollection('content', isLive)).filter(sameLang(lang));
  const byId = new Map<string, ContentEntry>();
  const bySlug = new Map<string, ContentEntry>();
  for (const e of all) {
    const id = unprefixed(e.id);
    byId.set(e.id, e);
    byId.set(id, e);
    const slug = id.split('/').pop() as string;
    if (!bySlug.has(slug)) bySlug.set(slug, e);
  }
  const out: ContentEntry[] = [];
  for (const ref of refs) {
    const hit = byId.get(ref) ?? byId.get(`articles/${ref}`) ?? byId.get(`guides/${ref}`) ?? bySlug.get(ref);
    if (hit && !out.includes(hit)) out.push(hit);
  }
  return out;
}

/**
 * A related link is a claim that the other page is worth the reader's next minute, and a claim
 * that only one page makes is a claim the destination page has never agreed to. So frontmatter
 * keeps the deliberate half, what a page chooses to point at, and the pages pointing *here* are
 * inverted at render. A hub that ten articles name cannot then be the one page that never names
 * any of them back.
 *
 * The declared links stay first and in the order they were written, because those are the ones
 * someone chose; the returned ones follow, ordered by path so the list cannot shift between
 * builds.
 */
export async function relatedFor(
  entry: ContentEntry,
  lang: Lang = 'en'
): Promise<{ guides: ContentEntry[]; articles: ContentEntry[] }> {
  const guides = await resolveRefs(entry.data.relatedGuides, lang);
  const articles = await resolveRefs(entry.data.relatedArticles, lang);
  const chosen = [...guides, ...articles];
  const others = (await getLiveContent(lang)).filter((e) => e.id !== entry.id);
  const returned: ContentEntry[] = [];
  for (const other of others) {
    const refs = await resolveRefs([...other.data.relatedGuides, ...other.data.relatedArticles], lang);
    if (refs.some((r) => r.id === entry.id) && !chosen.some((c) => c.id === other.id)) returned.push(other);
  }
  returned.sort((a, b) => a.id.localeCompare(b.id));
  return {
    guides: [...guides, ...returned.filter((e) => e.data.type === 'guide')],
    articles: [...articles, ...returned.filter((e) => e.data.type === 'article')],
  };
}

/**
 * A piece of content declares which tools answer its next step, and this turns those
 * ids into links. Anything naming a tool that is not live drops out, so a guide can
 * promise a checklist only once the checklist exists.
 */
export function toolLinksFor(refs: string[], lang: Lang = 'en') {
  return refs
    .map((ref) => TOOLS.find((t) => t.id === ref.replace(/^tools\//, '')))
    .filter((t): t is (typeof TOOLS)[number] => t !== undefined && t.live)
    .map((t) => ({ label: t[lang].name, href: toolHref(t, lang), note: t[lang].linkNote }));
}

/**
 * Astro assigns every heading an id and reports the same slug here, so the table of
 * contents can never link to an anchor the body does not contain.
 */
export type Heading = { depth: number; slug: string; text: string };

export async function renderContent(entry: ContentEntry) {
  const { Content, headings } = await render(entry);
  return { Content, headings: headings as Heading[] };
}

export type RenderedContent = Awaited<ReturnType<typeof renderContent>>;
