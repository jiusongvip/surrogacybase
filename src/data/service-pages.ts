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
  notHeading: string;
  statements: { q: string; a: string }[];
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
      "Who runs SurrogacyBase, what the site will not do for you, how each claim is sourced and dated, and what happens when you send a question or a correction.",
    h1: 'About {name}',
    tagline: SITE.tagline,
    body: [
      'Most of what a search returns on a surrogacy question is written by a party selling the service. An information source and a sales source should not be the same voice. So one rule decides what appears here: a claim earns its place by naming where it came from.',
      "What we publish is limited by what we can verify. When the only available account of a rule comes from a provider's own marketing, the page says so, or the page does not exist yet. The full version of that standard is written on the editorial policy page.",
    ],
    notHeading: 'What this site is, and what it is not',
    statements: [
      {
        q: 'Are you a surrogacy agency?',
        a: 'No. We do not screen or match intended parents with surrogates, we do not run programs, and we do not receive or hold money on anyone’s behalf.',
      },
      {
        q: 'Are you a law firm or a clinic?',
        a: 'No. Nothing here is legal advice, a medical opinion, or a diagnosis. Legal applicability depends on your jurisdiction, your situation and the professional you engage.',
      },
      {
        q: 'Do you recommend specific providers?',
        a: 'No. A destination page states what a legal system says and cites the source, which is a different activity from assessing any provider. Nothing here is ranked, scored or shortlisted.',
      },
      {
        q: 'How does the site make money?',
        a: 'No provider pays to appear anywhere on this site, and nothing you send us is a lead we sell. Reading these pages, sending an enquiry and the reply a consultant writes you all cost you nothing. If a commercial relationship ever reaches a page, that page labels it before the arrangement starts.',
      },
      {
        q: 'What happens when I send an enquiry?',
        a: 'A consultant on the editorial team reads it and replies within 24 hours on the channel you left. The enquiry stays with SurrogacyBase: it is not forwarded to a clinic, agency or lawyer, and no account is created for you. The reply separates three things: what the sources here support, what they leave unsettled, and which question only a lawyer or clinician in that jurisdiction can settle. Where public material cannot settle it, the reply says so instead of guessing.',
      },
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
    titleTag: '关于本站：由谁撰写，一条说法如何被核实',
    description:
      'SurrogacyBase 由谁撰写和维护、本站不会替您做什么、每条说法的来源与日期如何记录，以及您发来问题或更正之后会发生什么。',
    h1: '关于 {name}',
    tagline: SITE.taglineZh,
    body: [
      '关于代孕的搜索，返回的结果大多出自出售这项服务的一方之手。信息来源和销售来源不应当是同一种声音。所以决定内容能否出现在这里的只有一条规则：一条说法靠写明它来自哪里取得发表资格。',
      '我们发布什么，受限于我们能够核实什么。当一条规则仅有的说法来自服务方自己的宣传材料时，页面会这样写明，或者干脆还不存在。这条标准的完整写法在编辑方针上。',
    ],
    notHeading: '本站是什么，不是什么',
    statements: [
      {
        q: '本站是代孕机构吗？',
        a: '不是。我们不为意向父母筛查或匹配代孕者，不运行方案，也不替任何人收取或持有资金。',
      },
      {
        q: '本站是律师事务所或诊所吗？',
        a: '不是。这里没有任何内容构成法律意见、医学意见或诊断。法律上是否适用于您，取决于您的法域、您的处境，以及您委托的那位专业人士。',
      },
      {
        q: '本站会推荐具体的服务方吗？',
        a: '不会。目的地记录陈述的是某一法律体系的规定并列出来源，这与评价任何服务方属两项不同的活动。本站不作排名、不打分，也不提供推荐名单。',
      },
      {
        q: '本站的收入来源为何？',
        a: '任何服务方均无为出现在本站而付费者，您发来的问询亦不会被作为销售线索出售。阅读这些页面、发出问询，以及顾问给您的回复，均不向您收取费用。若某一页面日后涉及商业关系，该页将在此项安排开始之前予以标注。',
      },
      {
        q: '我发出问询之后会发生什么？',
        a: '编辑团队的顾问将予以阅读，并在 24 小时内通过您留下的联系方式作出回复。问询仅送达 SurrogacyBase 自身：不会转交诊所、机构或律师，亦不会为您建立任何账号。回复将三项内容分别写明：本站资料支持至何程度、资料未能解决什么，以及哪一问题只能由该法域具执业资格的律师或临床医生裁断。公开资料无法回答的，回复将直述无法回答，而非加以推测。',
      },
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
