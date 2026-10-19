/*
 * The two pages that describe what SurrogacyBase is and what it will do for you, in both languages.
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

/** One flagged gap: the thing that is missing, and why it matters that it is missing. */
export type NeedsItem = { label: string; why?: string };

export type AboutPage = {
  title: string;
  description: string;
  /** {name} is the site name, which is the same in both languages. */
  h1: string;
  tagline: string;
  body: [string, string];
  notHeading: string;
  statements: { q: string; a: string }[];
  whoHeading: string;
  whoBody: string;
  whoNeeds: NeedsItem[];
  correctionsHeading: string;
  correctionsBody: string;
  correctionsNeeds: NeedsItem;
};

export type AssessmentPage = {
  title: string;
  description: string;
  h1: string;
  intro: string;
  partsHeading: string;
  /** What one destination block carries, in the order the block prints it. */
  parts: string[];
  toolHeading: string;
  toolIntro: string;
  neverHeading: string;
  never: { h: string; p: string }[];
  sendHeading: string;
  sendBody: string;
  /** Labels for the three pages that hold the rest of the question list; hrefs live in the component. */
  sendItems: string[];
  askHeading: string;
  askBody: string;
  askPrimary: string;
  askSecondary: string;
  /** {date} is the revision date, formatted for the page language. */
  revised: string;
};

export const ABOUT_PAGE: Record<Lang, AboutPage> = {
  en: {
    title: 'About',
    description:
      "Who runs SurrogacyBase, what the site does and does not do, how information is sourced, and how a correction is handled.",
    h1: 'About {name}',
    tagline: SITE.tagline,
    body: [
      'SurrogacyBase publishes guides, destination pages and decision tools for people considering surrogacy. The site exists because most of what surfaces on the first results page is written by the parties selling the service. An information source should not be the same voice as a sales source, so the rule here is simple: a claim earns its place by naming where it came from.',
      "What we publish is limited by what we can verify. When the only available account of a rule comes from a provider's own marketing, the page says so, or the page does not exist yet. That is why some sections are deliberately short.",
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
        a: 'No commercial model is in place yet, so there is nothing to disclose. If a paid relationship exists, it will be labelled on the page where it applies.',
      },
    ],
    whoHeading: 'Who is behind it',
    whoBody:
      'A site that asks for trust should say whose name stands behind it. These pages are written and maintained under the name {team}, and the review the byline claims is done by clinical members of that team. What {team} is in law, and where it is registered, is not stated yet, and neither are the names or the credentials of the people who wrote and checked a page.',
    whoNeeds: [
      { label: 'Registration or incorporation details, if any' },
      { label: 'Contact email for corrections' },
      {
        label: 'Member names and roles, and the credentials of its clinical members',
        why: 'the byline names a team, so you cannot yet check who wrote a page, who reviewed it, or what training they have',
      },
    ],
    correctionsHeading: 'Corrections',
    correctionsBody:
      'If a source on a page no longer supports the claim next to it, that is a defect worth writing down: the page address, the sentence, and what the source says instead. A correction is either fixed or the claim comes off the page while the check is pending. The one thing missing here is an address to send it to, which is the gap below.',
    correctionsNeeds: { label: 'Correction inbox', why: 'there is no address published yet for you to send a correction to' },
  },
  zh: {
    title: '关于我们',
    description:
      'SurrogacyBase 由谁运营、本站做什么与不做什么、信息如何取得来源，以及一条更正会怎样处理。',
    h1: '关于 {name}',
    tagline: SITE.taglineZh,
    body: [
      'SurrogacyBase 为正在考虑代孕的人发布指南、目的地页面和决策工具。本站之所以存在，是因为搜索结果第一页上的大部分内容，出自出售这项服务的一方之手。信息来源不应当与销售来源是同一种声音，所以这里的规则很简单：一条说法靠写明它来自哪里取得发表资格。',
      '我们发布什么，受限于我们能够核实什么。当一条规则仅有的说法来自服务方自己的宣传材料时，页面会这样写明，或者这个页面根本还不存在。这就是某些部分刻意写得很短的原因。',
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
        a: '目前还没有任何商业模式，所以没有可披露的内容。如果将来存在收费关系，它会在关系实际发生的那个页面上标注出来。',
      },
    ],
    whoHeading: '背后是谁',
    whoBody: '一个要求别人信任的网站，应当说出背后署的是谁的名字。这些页面的编写与维护，署的是 {team} 这个名字，而署名里的那句审阅，由这个团队中有临床背景的成员完成。{team} 在法律上是什么、注册在哪里，本站还没有写明；写下某一页、审下某一页的人叫什么、受过什么训练，同样没有写明。',
    whoNeeds: [
      { label: '登记或注册信息，如果有的话' },
      { label: '用于接收更正的邮箱地址' },
      { label: '成员姓名与各自的角色，以及临床成员的资质', why: '署名只到团队这一层，您还无法核对某一页是谁写的、谁审的，以及他们受过什么训练' },
    ],
    correctionsHeading: '更正',
    correctionsBody:
      '如果某个页面上的来源已经不再支持它旁边的那条说法，那就是一个值得写下来的缺陷：页面地址、那句话，以及来源实际写的是什么。一条更正要么被改正，要么在核查期间先把说法从页面上撤下。这里还缺的只有一件：可以寄送的收件地址，也就是下面列出的那项缺口。',
    correctionsNeeds: { label: '更正收件地址', why: '本站尚未公布可供您发送更正的地址' },
  },
};

/** The date the wording on this page last changed. Both languages carry the same stamp. */
export const ASSESSMENT_REVISION = '2026-10-19';

export const ASSESSMENT_PAGE: Record<Lang, AssessmentPage> = {
  en: {
    title: 'Build the brief yourself',
    description:
      'A written brief assembled from the sourced destination records on this site: who may commission, what may lawfully be paid, parentage at birth, published figures, and the questions no source settles.',
    h1: 'This assessment is a document you build yourself',
    intro:
      'A professional answers faster when the question arrives written down, sourced, and addressed to them. That document is what this page makes, in your browser, out of the records this site already publishes. It is not a service we perform, and nothing here is queued waiting for someone to read it.',
    partsHeading: 'What one destination block carries',
    parts: [
      'Which legal instrument the position rests on, named the way the record names it.',
      'Who may commission there: every family type a source listed on that page speaks about, and the types none of them settles.',
      'What may lawfully be paid, and what has to be authorised before a court will move parentage.',
      'Who the child’s legal parent is at birth.',
      'Every cost figure a named source published for it, in that source’s own currency, for the year those numbers describe.',
      'The questions its sources did not settle, which are the questions to put to a lawyer.',
    ],
    toolHeading: 'Pick the destinations, then take the brief',
    toolIntro:
      'The file is assembled from the blocks printed below, in that order. It carries no personal information, asks for none, and keeps nothing: this site has no server, so the copy button and the download are the only exits.',
    neverHeading: 'What this brief never is',
    never: [
      {
        h: 'Not legal advice',
        p: 'Parentage, citizenship, enforceability and eligibility are decided by legal systems and by professionals with standing in them. A block states what a source says and where its limits are. It decides nothing about your own facts.',
      },
      {
        h: 'Not a verification',
        p: 'Whether a provider is licensed, whether a clause will hold, whether a figure on a quote is honest: those are checked by someone able to check them. The brief hands over the list of checks and the order they have to happen in, not the results.',
      },
      {
        h: 'Not a medical opinion',
        p: 'Nothing here interprets a scan, a protocol, a success rate quoted by a clinic, or your chances.',
      },
      {
        h: 'Not a rating',
        p: 'No provider is recommended, ranked or certified, and none paid to appear. The figures on a block are what a named source printed, not what this site thinks a program should cost.',
      },
    ],
    sendHeading: 'Where the brief goes next',
    sendBody:
      'Each block ends with the open questions for its own destination, which is the part a lawyer can act on the same day. These are the pages on this site that carry the rest of a question list.',
    sendItems: [
      'The questions to put to an agency in writing',
      'The questions that settle a destination',
      'What has to be signed before the first transfer',
    ],
    askHeading: 'Asking us something',
    askBody:
      'The enquiry form on the homepage is the only form on this site. It writes your question out from what you type, shows it to you, and then leaves it with your clipboard, your mail app or a file. No address for receiving enquiries has been published yet, so an enquiry goes out from you rather than arriving here.',
    askPrimary: 'Open the enquiry form',
    askSecondary: 'Read how anything you send is handled',
    revised: 'Last revised {date}.',
  },
  zh: {
    title: '自己动手做这份简报',
    description:
      '由本站有来源的目的地记录组装成一份书面简报：谁可以委托、依法能支付什么、出生时的亲权、已发布的费用数字，以及没有来源确定的那些问题。',
    h1: '这份评估是您自己做出来的一份文档',
    intro:
      '当一个问题已经被写下、带上来源、并且点名交给该回答它的人时，专业人士回答得要快得多。这一页替您做的就是这份文档，在您的浏览器里完成，用的全是本站已经发布的记录。它不是我们代为执行的服务，这里也没有任何东西在排队等人来读。',
    partsHeading: '一个目的地的内容块里有什么',
    parts: [
      '这个立场落在哪一份法律文件上，按那份记录自己的叫法写出来。',
      '那里谁可以委托：该页面列出的每个来源分别谈到的家庭类型，以及没有任何来源能够确定的类型。',
      '依法可以支付什么，以及法院在把亲权移走之前必须先授权什么。',
      '孩子在出生时的法律父母是谁。',
      '某个具名来源为它发布过的每一个费用数字，沿用那个来源自己的币种，并写明这些数字对应的年份。',
      '那份记录的来源没有确定的问题，而这些才是要交给律师的问题。',
    ],
    toolHeading: '选出目的地，然后把简报带走',
    toolIntro:
      '这份文件由下面各块内容按出现顺序组装而成。它不含任何个人信息，也不向您索取任何信息，更不留存任何东西：本站没有服务器，所以复制按钮和下载就是仅有的两个出口。',
    neverHeading: '这份简报永远不会是什么',
    never: [
      {
        h: '不是法律意见',
        p: '亲权、国籍、协议能否强制执行、谁有资格委托，都由法律体系以及在其中有执业资格的专业人士判定。一个内容块只说明某个来源写了什么、它的边界在哪里，不就您自身的情况作出任何判定。',
      },
      {
        h: '不是核查',
        p: '一家服务方是否有牌照、某一条款站不站得住、报价上的一个数字是否诚实，这些都由有权核查的人来查。这份简报交出的是核查清单以及它们必须发生的顺序，不是核查结果。',
      },
      {
        h: '不是医学意见',
        p: '这里不解读任何影像、任何方案、任何一家诊所报出的成功率，也不谈您的机会。',
      },
      {
        h: '不是评级',
        p: '没有任何服务方在这里被推荐、排名或认证，也没有人为出现付费。内容块上的数字是某个具名来源印出来的，不是本站认为一个流程应当花多少。',
      },
    ],
    sendHeading: '这份简报接下来交给谁',
    sendBody:
      '每个内容块都以它那一个目的地尚未解决的问题收尾，而那正是律师当天就能着手的部分。本站还有几页承载着问题清单的其余部分。',
    sendItems: [
      '需要书面提交给机构的那些问题',
      '决定一个目的地的那些问题',
      '首次移植之前必须签署的内容',
    ],
    askHeading: '要问我们什么',
    askBody:
      '首页上的问询表单是本站唯一的表单。它用您填写的内容把问询写出来，先给您看，然后交给您的剪贴板、您的邮件应用或一个文件。本站还没有公布接收问询的地址，所以问询是从您那里发出去，而不是发到我们这里。',
    askPrimary: '打开问询表单',
    askSecondary: '阅读您发出去的东西会怎样处理',
    revised: '最后修订于 {date}。',
  },
};
