/*
 * The page that describes what SurrogacyBase is and what it will do for you, in both languages.
 *
 * These are the pages a reader trusts before they trust anything else on the site, so the wording
 * has to survive being read next to the source code: every "we do not" here corresponds to a
 * mechanism that is actually absent. The Chinese halves repeat nothing from the English ones and
 * drop nothing, because a mirror that quietly omits a limitation is worse than no mirror.
 *
 * Hrefs stay out of both dictionaries. They are written once in the component and localized from
 * the URL, so a Chinese page cannot inherit an English address by accident.
 */
import { SITE } from '@/const';
import type { Lang } from '@/i18n/config';

export type AboutPage = {
  title: string;
  titleTag: string;
  description: string;
  /** {name} is the site name, which is the same in both languages. */
  h1: string;
  tagline: string;
  body: [string, string];
  whoHeading: string;
  whoBody: string;
  reviewHeading: string;
  reviewBody: string;
  reviewerReviewed: string;
  casesHeading: string;
  casesBody: string;
  caseConsent: string;
  correctionsHeading: string;
  correctionsBody: string;
};

export const ABOUT_PAGE: Record<Lang, AboutPage> = {
  en: {
    title: 'About',
    titleTag: 'About the site and how its claims are checked',
    description:
      'Who writes and reviews SurrogacyBase, how each claim is sourced and dated, and what happens when you send a correction.',
    h1: 'About {name}',
    tagline: SITE.tagline,
    body: [
      'Most of what a search returns on a surrogacy question is written by a party selling the service. An information source and a sales source should not be the same voice. So one rule decides what appears here: a claim earns its place by naming where it came from.',
      "What we publish is limited by what we can verify. When the only available account of a rule comes from a provider's own marketing, the page says so, or the page does not exist yet. The full version of that standard is written on the editorial policy page.",
    ],
    whoHeading: 'Who is behind it',
    whoBody:
      "These pages are written and maintained by the {team}, and the clinical review named in the byline is done by the {board}. Neither is a registered entity: no company name and no place of registration is claimed behind them, and none is published here.",
    reviewHeading: 'Clinical review',
    reviewBody:
      "Reviewing a page means checking each clinical claim against the source cited beside it and the limits that source states. The board carries that review, and it is not a sign-off on any reader's own situation. What is listed below is the credit list as it actually stands today: the board named collectively, with a link to its own review process. An individually named reviewer appears only after a completed review cycle and their agreement to be credited, with a link to that person's own public credential.",
    reviewerReviewed: 'Editorial policy last revised {date}.',
    casesHeading: 'Reader cases',
    casesBody:
      'A reader case is published only with written consent, after names and identifying details have been removed. Several readers are never combined into one story, and each published case links to the pages it draws on so the reasoning can be checked.',
    caseConsent: 'Consent recorded {date}.',
    correctionsHeading: 'Corrections',
    correctionsBody:
      'If a source on a page no longer supports the claim beside it, that is a defect worth writing down: the page address, the sentence, and what the source says instead. The fix is either to correct the claim or to take it off the page while the check is pending. Send it to {email}; the same address takes a question about the site itself, or about anything held about you.',
  },
  zh: {
    title: '关于我们',
    titleTag: '关于本站：内容如何撰写与核实',
    description:
      'SurrogacyBase 由谁撰写和维护、每条说法的来源与日期如何记录，以及您发来更正之后会发生什么。',
    h1: '关于 {name}',
    tagline: SITE.taglineZh,
    body: [
      '关于代孕的搜索，返回的结果大多出自出售这项服务的一方之手。信息来源和销售来源不应当是同一种声音。所以决定内容能否出现在这里的只有一条规则：一条说法靠写明它来自哪里取得发表资格。',
      '我们发布什么，受限于我们能够核实什么。当一条规则仅有的说法来自服务方自己的宣传材料时，页面会这样写明，或者干脆还不存在。这条标准的完整写法在编辑方针上。',
    ],
    whoHeading: '背后是谁',
    whoBody:
      '这些页面由 {team} 编写与维护，署名中的临床审阅由 {board} 完成。此二者均非注册主体：本站不宣称其背后存在任何公司名称或注册地，亦未公布过此类信息。',
    reviewHeading: '临床审阅',
    reviewBody:
      '此处的审阅，指将每一条临床说法对照其旁侧引用的来源，以及来源自身写明的限度。此项工作由委员会承担，其并非为任何读者自身处境背书。下文所列即此刻完整的署名名单：以集体名义列出的委员会，链接指向它自己的审阅流程。具名的个人审阅人只会在完成一轮审阅并同意署名之后加入，届时附上的是那位审阅人自己的公开资历链接。',
    reviewerReviewed: '编辑方针最近修订于 {date}。',
    casesHeading: '读者案例',
    casesBody:
      '读者案例只在取得书面同意、并移除姓名与可识别细节之后发表。不会把几位读者拼成一个故事；每一个发表的案例都链接到它所依据的页面，让推理可以被核对。',
    caseConsent: '同意记录于 {date}。',
    correctionsHeading: '更正',
    correctionsBody:
      '若某页面上的来源已不再支持其旁侧的说法，即为一个值得记录的缺陷：页面地址、该条说法，以及来源现在的实际表述。处理方式二选一：改正该说法，或在核查完成前将其从页面撤下。请发送至 {email}；关于本站本身、以及关于本站存有您的哪些信息的请求，亦走同一地址。',
  },
};
