/**
 * Every page URL on this site ends with a slash (trailingSlash: 'always'), and the site root
 * is the only one that does not. A link written in markdown is the one place that rule gets
 * forgotten, because the author is naming a destination rather than a URL spelling: a sentence
 * pointing at /guides/surrogacy-cost is the same sentence a reader already understands.
 *
 * Left alone, those links reach the page through a redirect on a host that normalises the
 * directory, which means every internal reference in the body costs a hop and, worse, names a
 * URL that is not the one the canonical declares. Adding the slash here keeps the markdown
 * readable and the HTML exact, and it applies to links added later without anyone remembering.
 *
 * Typed structurally rather than through `hast`, which pnpm does not expose at the root.
 */
type Node = {
  type: string;
  tagName?: string;
  properties?: Record<string, unknown>;
  children?: Node[];
};

/** An asset or a document, not a page: these keep whatever spelling the author chose. */
const NON_PAGE = /\.(?:pdf|xml|txt|png|jpe?g|svg|ico|webp|avif|gif|css|js|json|zip|docx?|xlsx?|csv)(?:[?#]|$)/i;

export function rehypeTrailingSlashLinks() {
  return (tree: { children: Node[] }) => {
    addSlash(tree.children);
  };
}

function addSlash(children: Node[]) {
  for (const child of children) {
    if (child.type !== 'element') continue;
    if (child.tagName === 'a' && typeof child.properties?.href === 'string') {
      child.properties.href = pageHref(child.properties.href);
    }
    if (child.children) addSlash(child.children);
  }
}

function pageHref(href: string): string {
  if (!href.startsWith('/') || href.startsWith('//') || href === '/') return href;
  if (NON_PAGE.test(href)) return href;
  const hashAt = href.indexOf('#');
  const hash = hashAt === -1 ? '' : href.slice(hashAt);
  const rest = hashAt === -1 ? href : href.slice(0, hashAt);
  const queryAt = rest.indexOf('?');
  const query = queryAt === -1 ? '' : rest.slice(queryAt);
  const path = queryAt === -1 ? rest : rest.slice(0, queryAt);
  return `${path.endsWith('/') ? path : `${path}/`}${query}${hash}`;
}
