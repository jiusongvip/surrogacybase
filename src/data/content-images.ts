import type { Lang } from '@/i18n/config';

/*
 * One photograph per published piece, keyed by slug.
 *
 * These replaced a set of generated diagrams that drew the quantities a piece states. A photograph
 * asserts nothing about those quantities, so it cannot go stale the way a diagram of a number can;
 * what it has to hold to instead is the rule in the imagery clause of the editorial policy: no
 * person whose identity a reader could form a view about, and nothing that reads as documentation
 * of anyone's actual surrogacy. Landscapes, buildings, documents and desk objects only.
 *
 * `photo` is the Pexels id the crops were cut from, kept here so the licence of each asset can be
 * pointed at. It is never rendered. Where a crop was cut from a file that was already sitting in
 * src/assets/images before this file existed, the catalogue id was never recorded, so the field
 * holds null and the note on the entry says so rather than a number standing in for it. The crops
 * themselves live in public: two 16:9 widths for the page, and a 1200x630 JPEG that doubles as the
 * social preview.
 */

export type ContentImage = {
  photo: number | null;
  /** 640 and 1280 CSS px wide crops of the same 16:9 frame. */
  small: string;
  src: string;
  og: string;
  alt: Record<Lang, string>;
};

const image = (slug: string, photo: number | null, alt: Record<Lang, string>): ContentImage => ({
  photo,
  small: `/images/content/${slug}-640.webp`,
  src: `/images/content/${slug}-1280.webp`,
  og: `/og/${slug}.jpg`,
  alt,
});

export const CONTENT_IMAGES: Record<string, ContentImage> = {
  'surrogacy-process': image('surrogacy-process', 13003822, {
    en: 'A colonnaded corridor in a public building, with steps rising to a doorway at the far end',
    zh: '公共建筑里的一条柱廊走廊，尽头有台阶通向一处门口',
  }),

  'surrogacy-legal-considerations': image('surrogacy-legal-considerations', 5668882, {
    en: "A brass weighing scale and a judge's gavel resting on a wooden desk",
    zh: '木桌上放着一架黄铜天平和一把法槌',
  }),

  'surrogacy-cost': image('surrogacy-cost', 7680361, {
    en: 'A five dollar note and two printed receipts laid out on a white surface',
    zh: '白色台面上摆着一张五美元纸币和两张打印收据',
  }),

  'choosing-a-surrogacy-agency': image('choosing-a-surrogacy-agency', 9300765, {
    en: 'Empty chairs arranged around the tables of a meeting room',
    zh: '会议室的长桌旁摆着一圈空椅',
  }),

  'egg-sperm-and-surrogate-options': image('egg-sperm-and-surrogate-options', 9629680, {
    en: 'A glass laboratory dish with tools resting in it on a pale stone surface',
    zh: '浅色石面上放着一只玻璃实验皿，皿中搁着器具',
  }),

  'bringing-your-child-home': image('bringing-your-child-home', 35254758, {
    en: 'The interior of an airport terminal, with seating below a curved glass roof',
    zh: '机场航站楼内部，弧形玻璃顶棚下是一排排座椅',
  }),

  'how-to-read-a-clinic-published-success-rate': image('how-to-read-a-clinic-published-success-rate', 14438833, {
    en: 'A magnifying glass and a pen lying on a blank sheet of aged paper',
    zh: '一张空白的旧纸上放着放大镜和一支笔',
  }),

  'surrogacy-success-rates-40177-transfers': image('surrogacy-success-rates-40177-transfers', 3861957, {
    en: 'An open laptop on a desk, its screen showing an unreadable spiky line chart',
    zh: '桌上一台打开的笔记本电脑，屏幕上是一条起伏的折线图',
  }),

  'uk-parental-order-six-month-limit': image('uk-parental-order-six-month-limit', 38499281, {
    en: 'The gothic stone facade of the Royal Courts of Justice in London',
    zh: '伦敦皇家司法大楼的哥特式石质正立面',
  }),

  'surrogacy-costs-outside-a-quote': image('surrogacy-costs-outside-a-quote', 1764956, {
    en: 'A stack of empty white document folders bound with string',
    zh: '一叠用细绳捆着的空白白色文件夹',
  }),

  'why-no-average-surrogacy-cost': image('why-no-average-surrogacy-cost', 4025825, {
    en: 'A United States one dollar note laid on top of banknotes from several other countries',
    zh: '一张美元纸币压在多个国家的纸币之上',
  }),

  'birth-certificate-after-surrogacy-abroad': image('birth-certificate-after-surrogacy-abroad', 17262454, {
    en: 'Black envelopes closed with gold wax seals',
    zh: '几只黑色信封，封口处盖着金色火漆印',
  }),

  'surrogacy-law-questions-by-destination': image(
    'surrogacy-law-questions-by-destination',
    4611591,
    {
      en: 'A printed political world map with national borders drawn in colour',
      zh: '一张彩色政区世界地图，国界以颜色区分',
    }
  ),

  'surrogacy-escrow-accounts-and-payment-stages': image('surrogacy-escrow-accounts-and-payment-stages', 14866072, {
    en: 'An open circular vault door in an empty bank treasury room',
    zh: '空旷的银行金库房内，一扇圆形保险库门敞开着',
  }),

  'how-to-read-a-carrier-profile': image('how-to-read-a-carrier-profile', 7789616, {
    en: 'A bright empty examination room with a treatment couch, a desk and two chairs',
    zh: '一间明亮的空诊室，里面有诊疗床、一张书桌和两把椅子',
  }),

  'anonymous-egg-donor-information': image(
    'anonymous-egg-donor-information',
    6550462,
    {
      en: 'An open wooden drawer of index cards set in a wall of archive catalogue drawers',
      zh: '一整面档案目录柜中，一只装满索引卡的木抽屉被拉开',
    }
  ),

  'failed-surrogacy-cycle': image('failed-surrogacy-cycle', 10514991, {
    en: 'Small capped vials held in the circular tray of a laboratory instrument',
    zh: '实验室仪器的圆形托盘上排列着带盖的小样品瓶',
  }),

  'documents-before-embryo-transfer': image('documents-before-embryo-transfer', 955394, {
    en: 'A hand signing a printed document with a fountain pen',
    zh: '一只手正用钢笔在打印文件上签字',
  }),

  /* Cut from src/assets/images/verify-contract.jpg, which was already in the repository; its
   * catalogue id went unrecorded, hence the null. */
  'surrogacy-quote-insurance': image(
    'surrogacy-quote-insurance',
    null,
    {
      en: 'A printed contract with a pen laid across it, white books and a small weighing scale beside it on a sunlit desk',
      zh: '阳光照亮的书桌上，一份打印合同上搁着一支笔，旁边是几本白色的书和一架小天秤',
    }
  ),

  /* Cut from src/assets/images/concern-documents.jpg, likewise already in the repository. */
  'surrogacy-clinic-vs-agency': image('surrogacy-clinic-vs-agency', null, {
    en: 'Blank printed forms with a round seal stamp and a fountain pen, beside a dark red notebook',
    zh: '几张空白表格上搁着一枚圆形印章和一支钢笔，旁边是一册深红色的笔记本',
  }),

  /* The four below are cut from src/assets/images files that were already here, so the catalogue
   * id they were never stamped with stays null rather than being guessed. Each entry is cut from a
   * different one of those files: no two pages share a source photograph, because a reader
   * scrolling the index reads the same desk twice as a template. Before adding an entry, pick a
   * file in src/assets/images that no entry above already names. */
  'fertility-tests-at-a-new-clinic': image(
    'fertility-tests-at-a-new-clinic',
    null,
    {
      en: 'An open book and a closed notebook on a sunlit window sill, with a cup of coffee beside them',
      zh: '阳光照到的窗台上摊着一本打开的书，旁边是合起的记事本和一杯咖啡',
    }
  ),

  'male-fertility-checks-before-surrogacy': image('male-fertility-checks-before-surrogacy', null, {
    en: 'A single blank sheet resting on a closed hardback notebook, with a fountain pen laid across it',
    zh: '一本合起的硬面笔记本上放着一张空白纸，纸上搁着一支钢笔',
  }),

  /* Cut from src/assets/images/hero-desk-map.jpg, the widest frame in that folder, so the index
   * does not run four desk close-ups of paper and pens one after another. */
  'changing-clinics-after-a-failed-transfer': image(
    'changing-clinics-after-a-failed-transfer',
    null,
    {
      en: 'A brass compass on an open atlas, beside a cloth-bound notebook, reading glasses and a pencil',
      zh: '摊开的地图册上放着一只黄铜罗盘，旁边是布面笔记本、眼镜和一支铅笔',
    }
  ),

  /* Cut from src/assets/images/cost-ledger.jpg, likewise already here with no recorded id. */
  'surrogacy-refund-guarantee': image('surrogacy-refund-guarantee', null, {
    en: 'A handwritten ledger page with three blank price tags tied on and a pencil laid beside it',
    zh: '一张手写的账页，页边系着三张空白标签，旁边搁着一支铅笔',
  }),
};

/** Entries are namespaced by collection and language, so the slug is the last path segment. */
export const contentImage = (id: string): ContentImage | undefined => CONTENT_IMAGES[id.split('/').pop() ?? id];
