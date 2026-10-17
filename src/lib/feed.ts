/*
 * One feed per language.
 *
 * A reader who subscribes in Chinese must not be handed English titles, and the two languages
 * are separate documents at separate URLs, so they get separate feeds. What they share is this:
 * the same live entries and the same selection the pages are built from, so a draft or an
 * unpublished piece cannot appear in a feed while it is absent from the site.
 */
import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { LANG_META, type Lang } from '@/i18n/config';
import { UI } from '@/i18n/ui';
import { getLiveContent, pathOf, type ContentEntry } from '@/lib/content';

/** Guides and explainers alike, newest publication first. */
const RECENT_LIMIT = 40;

function feedItem(entry: ContentEntry, site: URL) {
  return {
    title: entry.data.title,
    description: entry.data.description,
    link: new URL(pathOf(entry), site).href,
    /* The feed says when a piece came out. What has changed since is what /updates is for. */
    pubDate: new Date(entry.data.publishedOn),
    categories: [entry.data.type, entry.data.category],
  };
}

export async function buildFeed(context: APIContext, lang: Lang) {
  const site = context.site ?? new URL('https://surrogacybase.com');
  const own = lang === 'en' ? '/rss.xml' : '/zh/rss.xml';
  const other = lang === 'en' ? '/zh/rss.xml' : '/rss.xml';
  const items = (await getLiveContent(lang))
    .slice()
    .sort((a, b) => b.data.publishedOn.localeCompare(a.data.publishedOn))
    .slice(0, RECENT_LIMIT)
    .map((entry) => feedItem(entry, site));

  return rss({
    title: UI[lang].feedTitle,
    description: UI[lang].siteDescription,
    site: site.href,
    items,
    /* The self and alternate links below are Atom elements inside an RSS 2.0 document, which is
     * legal only while the prefix is declared on the root. */
    xmlns: { atom: 'http://www.w3.org/2005/Atom' },
    customData: [
      `<language>${LANG_META[lang].htmlLang}</language>`,
      `<atom:link href="${new URL(own, site).href}" rel="self" type="application/rss+xml"/>`,
      /* The other language is a different document about the same body of work, and a feed
       * reader can subscribe to either half of it. */
      `<atom:link href="${new URL(other, site).href}" rel="alternate" type="application/rss+xml" hreflang="${
        LANG_META[lang === 'en' ? 'zh' : 'en'].htmlLang
      }"/>`,
    ].join(''),
    trailingSlash: false,
  });
}
