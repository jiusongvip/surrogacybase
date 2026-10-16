/**
 * Markdown tables cannot fit a phone screen. Left in a normal block, a wide table
 * widens the grid track and pushes the whole page sideways, so every table is wrapped
 * in a scroll container. The class is styled in global.css.
 *
 * Typed structurally rather than through `hast`, which pnpm does not expose at the root.
 */
type Node = { type: string; tagName?: string; children?: Node[] };

export function rehypeTableScroll() {
  return (tree: { children: Node[] }) => {
    wrapTables(tree.children);
  };
}

function wrapTables(children: Node[]) {
  for (let i = 0; i < children.length; i++) {
    const child = children[i];
    if (child.type !== 'element') continue;
    if (child.tagName === 'table') {
      // Markdown cannot nest a table, so the wrapped node needs no further walking.
      children[i] = {
        type: 'element',
        tagName: 'div',
        properties: { className: ['table-scroll'] },
        children: [child],
      } as Node;
      continue;
    }
    if (child.children) wrapTables(child.children);
  }
}
