/**
 * A markdown task list renders each box as a bare `<input type="checkbox" disabled>`, which
 * leaves a screen reader announcing "checkbox" with nothing to say what the item is, and a
 * checklist whose items cannot be read is not a checklist. The item's own text already sits in
 * the list item, so the box and that text are wrapped in a `<label>`: the name is the item, in
 * whichever language the page is written in, and no copy has to be duplicated here.
 *
 * Typed structurally rather than through `hast`, which pnpm does not expose at the root.
 */
type Node = {
  type: string;
  tagName?: string;
  properties?: Record<string, unknown>;
  children?: Node[];
};

export function rehypeTaskListLabels() {
  return (tree: { children: Node[] }) => {
    labelTaskItems(tree.children);
  };
}

function labelTaskItems(children: Node[]) {
  for (const child of children) {
    if (child.type !== 'element') continue;
    if (isTaskItem(child)) {
      child.children = [
        {
          type: 'element',
          tagName: 'label',
          properties: { className: ['task-list-item-label'] },
          children: child.children ?? [],
        } as Node,
      ];
      continue;
    }
    if (child.children) labelTaskItems(child.children);
  }
}

function isTaskItem(node: Node): boolean {
  const classes = (node.properties?.className as string[] | undefined) ?? [];
  if (node.tagName !== 'li' || !classes.includes('task-list-item')) return false;
  const first = (node.children ?? []).find((c) => c.type === 'element');
  return first?.tagName === 'input' && first.properties?.type === 'checkbox';
}
