/*
 * The words the brief tool needs at runtime.
 *
 * The brief itself is server-rendered from the destination records, so this file carries only the
 * tool's own chrome: the picker, the two exits, and the joiners the exported file needs to read as
 * sentences rather than as a dump. The labels over each line come from src/i18n/ui.ts, the same key
 * the destination page prints, so a line cannot be named one thing on the page and another in the
 * file a reader takes away.
 */
import type { Lang } from '@/i18n/config';

export type BriefChrome = {
  pickHeading: string;
  pickIntro: string;
  all: string;
  none: string;
  /** {n} is the count in the brief, {total} the count published. */
  count: string;
  copy: string;
  download: string;
  copied: string;
  clipboardBlocked: string;
  /** {file} is the name written. */
  downloaded: string;
  statusIdle: string;
  /** Printed as the h1 of the exported file. */
  fileTitle: string;
  filename: string;
  /** {date} is when the file was assembled. */
  savedLine: string;
  fileHint: string;
  exportFooter: string;
  empty: string;
  /** What separates a line's label from its content, in the exported file. */
  labelJoin: string;
  /** The line that names the page these lines were taken from. */
  sourcePage: string;
  /**
   * A qualifier is set off in brackets, and Chinese writes those brackets full-width with no space
   * in front of them. Half-width brackets touching 汉字 are a typography error, not a style choice.
   */
  noteGap: string;
  parenOpen: string;
  parenClose: string;
  /** The character a bracketed sentence loses at its end; English keeps its period inside brackets. */
  stop: string;
};

export const BRIEF_CHROME: Record<Lang, BriefChrome> = {
  en: {
    pickHeading: 'Choose the destinations the brief covers',
    pickIntro:
      'Each destination adds its own block below, and nothing is written into those blocks that the record for it does not already state.',
    all: 'Include every destination',
    none: 'Clear the selection',
    count: '{n} of {total} destinations in the brief',
    copy: 'Copy the brief',
    download: 'Download as a file',
    copied: 'Copied. The brief is on your clipboard.',
    clipboardBlocked:
      'Your browser would not give the page clipboard access. Select the brief below and copy it by hand, or download the file.',
    downloaded: 'Written to {file}.',
    statusIdle:
      'The brief is assembled from the blocks below, in the order they appear. Copy it or download it, then send it to whoever has to answer the questions in it.',
    fileTitle: 'Brief from SurrogacyBase',
    filename: 'surrogacybase-brief-en.md',
    savedLine: 'Assembled {date}.',
    fileHint:
      'Every position printed below is one a named source states, with the date that source was last read. Nothing you send leaves a copy here: this site has no server.',
    exportFooter:
      'Assembled from the destination pages on SurrogacyBase. Those pages carry the sources; this document adds none.',
    empty: 'No destination is selected, so there is nothing in the brief yet.',
    labelJoin: ': ',
    sourcePage: 'The page these lines come from',
    noteGap: ' ',
    parenOpen: '(',
    parenClose: ')',
    stop: '',
  },
  zh: {
    pickHeading: '选择这份简报要覆盖哪些目的地',
    pickIntro: '每选中一个目的地，下面就会多出属于它的一块内容；那块内容里不会写进它的记录本身没有说过的任何东西。',
    all: '全部目的地都纳入',
    none: '清空选择',
    count: '简报里有 {n} 个目的地，共有 {total} 个可选',
    copy: '复制这份简报',
    download: '下载为文件',
    copied: '已复制。这份简报现在在您的剪贴板里。',
    clipboardBlocked: '您的浏览器没有把剪贴板权限交给这个页面。请在下面选中这份简报后手动复制，或者下载为文件。',
    downloaded: '已写入 {file}。',
    statusIdle: '这份简报按下面各块出现的顺序组装。复制它或把它下载下来，再发给需要回答其中问题的那个人。',
    fileTitle: '来自 SurrogacyBase 的简报',
    filename: 'surrogacybase-brief-zh.md',
    savedLine: '组装于 {date}。',
    fileHint: '下面印出的每一条立场都由某个具名来源写明，并附上最后一次打开那个来源的日期。您发出去的内容不会在这里留下副本：本站没有服务器。',
    exportFooter: '本简报由 SurrogacyBase 的目的地页面组装而成。那些页面带着自己的来源，这份文件不另外添加。',
    empty: '当前没有选中任何目的地，所以简报里还没有内容。',
    labelJoin: '：',
    sourcePage: '这些内容出自哪个页面',
    noteGap: '',
    parenOpen: '（',
    parenClose: '）',
    stop: '。',
  },
};
