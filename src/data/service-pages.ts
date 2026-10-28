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
    titleTag: 'About SurrogacyBase and How We Source It',
    description:
      "Who runs SurrogacyBase, what the site does and does not do, how information is sourced, and how a correction is handled.",
    h1: 'About {name}',
    tagline: SITE.tagline,
    body: [
      'SurrogacyBase is an independent information site, publishing guides, destination pages and decision tools for people considering surrogacy, and it is run by its own editorial team. It exists because most of what surfaces on the first results page is written by the parties selling the service: an information source should not be the same voice as a sales source. So the rule here is simple: a claim earns its place by naming where it came from.',
      "What we publish is limited by what we can verify. When the only available account of a rule comes from a provider's own marketing, the page says so, or the page does not exist yet.",
    ],
    notHeading: 'What this site is not',
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
        a: 'The destination pages state what a legal system says and cite the source. They are not rankings, and no provider pays to appear.',
      },
      {
        q: 'How does the site make money?',
        a: 'No provider pays to appear anywhere on this site, and your question is not something we sell. Reading these pages, sending an enquiry and the reply a consultant writes you all cost you nothing. The site is published by its editorial team under a team name rather than a commercial banner, and no destination is ranked for revenue. If a commercial relationship ever reaches a page, that page labels it before the arrangement starts.',
      },
      {
        q: 'What happens when I send an enquiry?',
        a: 'A consultant on the editorial team reads it and replies within 24 hours on the channel you left. The enquiry goes to SurrogacyBase only: it is not forwarded to a clinic, agency or lawyer, and no account is created. A reply separates three things: what the sources on this site support, what they leave unsettled, and which question only a professional in that jurisdiction can settle for you. Where the answer is that we cannot answer it, the reply says so rather than guessing.',
      },
    ],
    whoHeading: 'Who is behind it',
    whoBody:
      'These pages are written and maintained by the {team}, and the clinical review in the byline is done by the {board}. The work is published under a team name, not sold under a commercial banner.',
    reviewHeading: 'Clinical review',
    reviewBody:
      'Every page that makes a clinical claim is reviewed by the {board}. The board checks the claim against the source cited beside it and the limits that source states; it does not sign off on a reader’s own situation. A named reviewer is listed below once they have completed a review cycle and agreed to be credited, with a link to a public credential.',
    reviewerReviewed: 'Last review cycle completed {date}.',
    casesHeading: 'Reader cases',
    casesBody:
      'A reader case is published only with written consent, after names and identifying details have been removed. We do not combine several readers into one story, and a published case links to the pages it draws on so the reasoning can be checked.',
    caseConsent: 'Consent recorded {date}.',
    correctionsHeading: 'Corrections',
    correctionsBody:
      'If a source on a page no longer supports the claim next to it, that is a defect worth writing down: the page address, the sentence, and what the source says instead. A correction is either fixed or the claim comes off the page while the check is pending. Send it to {email}, the same address for a question about the site itself or about anything held about you.',
  },
  zh: {
    title: '关于我们',
    titleTag: '关于 SurrogacyBase：由谁撰写、内容如何核实',
    description:
      'SurrogacyBase 由谁运营、本站做什么与不做什么、信息如何取得来源，以及一条更正会怎样处理。',
    h1: '关于 {name}',
    tagline: SITE.taglineZh,
    body: [
      'SurrogacyBase 是一个独立的信息站点，为正在考虑代孕的人提供指南、目的地页面和决策工具，由自己的编辑团队运营。本站之所以存在，是因为搜索结果第一页上的大部分内容，出自出售这项服务的一方之手：信息来源不应当与销售来源是同一种声音。所以这里的规则很简单：一条说法靠写明它来自哪里取得发表资格。',
      '我们发布什么，受限于我们能够核实什么。当一条规则仅有的说法来自服务方自己的宣传材料时，页面会这样写明，或者这个页面根本还不存在。',
    ],
    notHeading: '本站不是什么',
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
        a: '目的地页面陈述某个法律体系怎么规定，并列出来源。它们不是排名，也没有任何服务方付费出现在这里。',
      },
      {
        q: '本站靠什么盈利？',
        a: '没有任何服务方为出现在本站付费，您的问询也不是我们出售的东西。阅读这些页面、发出一封问询、以及顾问写给您的回复，都不向您收取费用。本站由编辑团队以团队之名发布，而不是挂在商业招牌之下，也没有目的地因营收被排名。若某个页面真的出现商业关系，那会在这项安排开始前于该页标注出来。',
      },
      {
        q: '我发出问询之后会发生什么？',
        a: '编辑团队的顾问会阅读它，并在 24 小时内通过您留下的联系方式回复。问询只到达 SurrogacyBase 自己：不会转给诊所、机构或律师，也不会为您建立任何账号。回复会把三件事分开写清：本站的资料支持到哪一步、资料没有解决什么、以及哪一个问题只能由该法域的专业人士替您定夺。如果答案是这个问题我们回答不了，回复会直接这样说，而不是猜测。',
      },
    ],
    whoHeading: '背后是谁',
    whoBody:
      '这些页面由 {team} 编写与维护，署名中的临床审阅由 {board} 完成。内容以团队之名发表，而不是挂在商业招牌之下出售。',
    reviewHeading: '临床审阅',
    reviewBody:
      '每一篇涉及临床说法的页面都由 {board} 审阅。委员会核对的是说法与它引用的来源、以及来源本身写明的限度，而不是为某位读者自己的处境背书。具名审阅人在完成一轮审阅、并同意被署名之后，会连同职务与可公开核对的资历链接出现在下面。',
    reviewerReviewed: '最近一轮审阅完成于 {date}。',
    casesHeading: '读者案例',
    casesBody:
      '读者案例只在取得书面同意、并移除姓名与可识别细节之后发表。我们不会把几位读者拼成一个故事；已发表的案例会链接到它所依据的页面，让您能核对推理。',
    caseConsent: '同意记录于 {date}。',
    correctionsHeading: '更正',
    correctionsBody:
      '如果某个页面上的来源已经不再支持它旁边的那条说法，那就是一个值得写下来的缺陷：页面地址、那句话，以及来源实际写的是什么。一条更正要么被改正，要么在核查期间先把说法从页面上撤下。请把它发到 {email}，同一个地址也受理关于本站本身、以及关于这里存有您的哪些信息的请求。',
  },
};
