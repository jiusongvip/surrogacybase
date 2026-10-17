/*
 * llms.txt, in each language the site publishes.
 *
 * The file is a table of contents for a machine reader: one line per document, each with a real
 * Markdown link and the sentence the page itself uses to describe what it is for. Nothing here is
 * written twice, because every title and summary is read back from the content frontmatter, the
 * jurisdiction records, the tool list and the page copy files, which are what the pages render
 * from. A description that was reworded for this file would be a second claim to keep true.
 *
 * The links are absolute on purpose. A relative path is resolved against whatever the reader
 * assumed about the origin, and a model that guesses will cite a page it never reached.
 */
import { ABOUT_PAGE, ASSESSMENT_PAGE } from '@/data/service-pages';
import { EDITORIAL_PAGE, UPDATES_PAGE } from '@/data/policy-pages';
import { SITE } from '@/const';
import { TOOLS } from '@/data/tools';
import type { Lang } from '@/i18n/config';
import { localizedPath } from '@/i18n/paths';
import { UI, fill } from '@/i18n/ui';
import { getLiveContent, pathOf, type ContentEntry } from '@/lib/content';
import { getJurisdictions } from '@/lib/jurisdictions';

/**
 * One bullet: the page's own title, its own summary, at its own URL.
 *
 * A content entry's path already carries its language, because the entry's id is the folder it
 * lives in; a hand-written route is locale-free and needs the prefix adding. Applying the prefix
 * to both is how /zh/zh/guides gets published.
 */
function bullet(title: string, description: string, url: URL) {
  return `- [${title}](${url.href}): ${description}`;
}

function page(site: URL, lang: Lang, path: string, title: string, description: string) {
  return bullet(title, description, new URL(localizedPath(lang, path), site));
}

function piece(site: URL, entry: ContentEntry) {
  return bullet(entry.data.title, entry.data.description, new URL(pathOf(entry), site));
}

function heading(lang: Lang, en: string, zh: string) {
  return `## ${lang === 'en' ? en : zh}`;
}

export async function buildLlmsTxt(site: URL, lang: Lang) {
  const copy = UI[lang];
  const entries = await getLiveContent(lang);
  const guides = entries.filter((e) => e.data.type === 'guide');
  const explainers = entries.filter((e) => e.data.type === 'article');
  const jurisdictions = await getJurisdictions(lang);
  const tools = TOOLS.filter((t) => t.live);

  return [
    `# ${SITE.name}`,
    '',
    `> ${copy.siteDescription}`,
    '',
    lang === 'en'
      ? `Independent information site, published under the signature ${SITE.team}. Not a clinic, not a law firm, not a surrogacy agency. No provider pays for a place here and no provider is listed. Every factual claim names its source, its publisher and the date it was last opened, and corrections are published.`
      : `以 ${SITE.team} 的署名发布的独立信息站点。不是诊所，不是律师事务所，也不是代孕机构。没有机构为位置付费，本站也不列机构名单。每条事实都写明来源、发布方与最近一次打开核查的日期，更正记录公开。`,
    '',
    lang === 'en'
      ? 'Published in English and Simplified Chinese. Every page listed here has a Chinese twin at the same path under /zh, and /zh/llms.txt lists that half.'
      : '以英文与简体中文发布。此处每一页在 /zh 下的同一路径都有对应版本，/zh/llms.txt 列出中文一侧。',
    '',
    heading(lang, 'Guides', '指南'),
    '',
    ...guides.map((e) => piece(site, e)),
    '',
    heading(lang, 'Explainers', '专题解读'),
    '',
    ...explainers.map((e) => piece(site, e)),
    '',
    heading(lang, 'Destinations', '目的地'),
    '',
    page(site, lang, '/destinations', copy.pages.destinations.title, copy.pages.destinations.description),
    ...jurisdictions.map((j) =>
      page(
        site,
        lang,
        `/destinations/${j.data.code}`,
        fill(copy.pages.jurisdiction.title, { name: j.data.name }),
        fill(copy.pages.jurisdiction.description, { name: j.data.name, region: j.data.region }),
      ),
    ),
    '',
    heading(lang, 'Tools', '工具'),
    '',
    ...tools.map((t) => page(site, lang, `/tools/${t.id}`, t[lang].name, t[lang].summary)),
    '',
    heading(lang, 'How this site is run', '本站如何运作'),
    '',
    page(site, lang, '/about', ABOUT_PAGE[lang].title, ABOUT_PAGE[lang].description),
    page(site, lang, '/editorial-policy', EDITORIAL_PAGE[lang].title, EDITORIAL_PAGE[lang].description),
    page(site, lang, '/updates', UPDATES_PAGE[lang].title, UPDATES_PAGE[lang].description),
    page(site, lang, '/assessment', ASSESSMENT_PAGE[lang].title, ASSESSMENT_PAGE[lang].description),
    '',
  ].join('\n');
}
