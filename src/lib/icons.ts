import icons from '@/lib/icons.json';

/**
 * The only icon names the vendored sprite carries. Data files type their icon fields
 * against this so a renamed glyph fails `astro check` instead of rendering an empty svg.
 */
export type IconName = keyof typeof icons.icons;
