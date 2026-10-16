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
  /** The line that admits which parts of the service are not settled. */
  statusNote: string;
  h1: string;
  intro: string;
  forHeading: string;
  forBody: string;
  bringHeading: string;
  brings: string[];
  /** Split around the link to the privacy page. */
  bringBefore: string;
  bringLink: string;
  bringAfter: string;
  receiveHeading: string;
  receives: string[];
  /** {n} numbers each outcome for a screen reader. */
  outcome: string;
  receiveBody: string;
  neverHeading: string;
  never: { h: string; p: string }[];
  settledHeading: string;
  settledBody: string;
  settledNeeds: NeedsItem[];
  startHeading: string;
  startBody: string;
  startPrimary: string;
  startSecondary: string;
  diyHeading: string;
  diyBody: string;
  diyPrimary: string;
  diySecondary: string;
  /** {date} is the revision date, formatted for the page language. */
  revised: string;
};

export const ABOUT_PAGE: Record<Lang, AboutPage> = {
  en: {
    title: 'About',
    description:
      "Who runs SurrogacyBase, what the site does and does not do, how information is sourced, and how to send a correction.",
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
        a: 'Disclosed on this page once it is decided. If a paid relationship exists, it is labelled on the page where it applies.',
      },
    ],
    whoHeading: 'Who is behind it',
    whoBody:
      'Named before launch, because a site that asks readers to trust it should say whose name is on it.',
    whoNeeds: [
      {
        label: 'Operating entity or individual',
        why: 'required on the footer, terms and privacy policy',
      },
      { label: 'Registration or incorporation details, if any' },
      { label: 'Contact email for corrections' },
      {
        label: 'Named author for each guide',
        why: 'no byline is shown until a real person accepts it',
      },
    ],
    correctionsHeading: 'Corrections',
    correctionsBody:
      'If a source on a page no longer supports the claim next to it, that is a defect and we want to know. Send the page address and the claim, and the entry is either fixed or the claim is removed while the check is pending.',
    correctionsNeeds: { label: 'Correction inbox', why: 'this page links here once it exists' },
  },
  zh: {
    title: '关于我们',
    description:
      'SurrogacyBase 由谁运营、这个站点做什么与不做什么、信息如何取得来源，以及如何向我们提交更正。',
    h1: '关于 {name}',
    tagline: '让代孕决策在世界任何地方都更清楚。',
    body: [
      'SurrogacyBase 为正在考虑代孕的人发布指南、目的地页面和决策工具。这个站点之所以存在，是因为搜索结果第一页上的大部分内容，出自出售这项服务的一方之手。信息来源不应当与销售来源是同一种声音，所以这里的规则很简单：一条说法靠写明它来自哪里取得发表资格。',
      '我们发布什么，受限于我们能够核实什么。当一条规则仅有的说法来自服务方自己的宣传材料时，页面会这样写明，或者这个页面根本还不存在。这就是某些部分刻意写得很短的原因。',
    ],
    notHeading: '这个站点不是什么',
    statements: [
      {
        q: '你们是代孕机构吗？',
        a: '不是。我们不为意向父母筛查或匹配代孕者，不运行方案，也不替任何人收取或持有资金。',
      },
      {
        q: '你们是律师事务所或诊所吗？',
        a: '不是。这里没有任何内容构成法律意见、医学意见或诊断。法律上是否适用于你，取决于你的法域、你的处境，以及你委托的那位专业人士。',
      },
      {
        q: '你们会推荐具体的服务方吗？',
        a: '目的地页面陈述某个法律体系怎么规定，并列出来源。它们不是排名，也没有任何服务方付费出现在这里。',
      },
      {
        q: '这个站点靠什么盈利？',
        a: '一旦确定，就在本页写明。如果存在收费关系，它会在关系实际发生的那个页面上标注出来。',
      },
    ],
    whoHeading: '背后是谁',
    whoBody: '上线之前会写明，因为一个要求读者信任的站点，应当说出上面署的是谁的名字。',
    whoNeeds: [
      { label: '运营主体或个人', why: '页脚、条款与隐私政策都要求写明' },
      { label: '登记或注册信息，如果有的话' },
      { label: '用于接收更正的邮箱地址' },
      { label: '每篇指南署名的作者', why: '在真人接受署名之前，页面不显示任何作者栏' },
    ],
    correctionsHeading: '更正',
    correctionsBody:
      '如果某个页面上的来源已经不再支持它旁边的那条说法，那就是缺陷，我们希望知道。把页面地址和那条说法发给我们，我们会要么改正这一条，要么在核查期间先把说法撤下。',
    correctionsNeeds: { label: '更正收件地址', why: '这个地址存在之后，本页会链接到它' },
  },
};

export const ASSESSMENT_PAGE: Record<Lang, AssessmentPage> = {
  en: {
    title: 'Assessment',
    description:
      'One-to-one consultation on the documents and options you already hold: a structured written read that names each gap and the professional who has to close it.',
    statusNote:
      'Enquiries are open. The fee and the person who performs the read are not settled yet, and are marked below rather than guessed at.',
    h1: 'What an assessment is, and what it is not',
    intro:
      'Reading gets you to a point where your own documents are the question. An assessment is the service for that point: not advice, not a match, not a rating of a provider. It is a structured read of what you already hold, in which each gap is written down together with the party who has to close it. The verification itself belongs to a lawyer, a clinic or an escrow provider, and is not something we do on your behalf.',
    forHeading: 'Who this is for',
    forBody:
      'Not for someone starting from zero. If you do not know what the stages are or what a quote contains, the guides answer that for free. This is for the stage after that, when a document is in front of you and the uncertainty is about what it leaves out. Legal exposure is one of those uncertainties: which countries have a route that can be documented here, what parentage and nationality turn on, and which of those questions belong to a lawyer rather than to a website.',
    bringHeading: 'What you bring',
    brings: [
      'A quote, proposal or contract you have received, and want set against a checklist of what should be in it.',
      'Two options that appear to cost different amounts, where you need to know whether the scope is even comparable.',
      'A shortlist of destinations where you want the sourced position, the open questions, and what a local lawyer would have to confirm for your facts.',
      'A question list for a meeting you already have scheduled, so the hour is spent on the things that matter.',
    ],
    bringBefore:
      'Send only what is needed to ask the question. Names of other individuals, medical records and payment details are not required for a quote to be read against a checklist, and ',
    bringLink: 'how anything you send is handled',
    bringAfter: ' is stated before you send it.',
    receiveHeading: 'What you receive',
    outcome: 'Outcome {n}',
    receives: [
      'A written map of what your documents answer, what they do not answer, and what they answer inconsistently.',
      'The specific exclusions and contingent costs in a quote, named as items to confirm rather than as a total.',
      'Questions addressed to the right party: which of these belong to a lawyer in a given jurisdiction, which to the clinic, which to the agency, which to an escrow provider.',
      'A comparison view you can read out loud in a meeting, with the source of each item next to it.',
    ],
    receiveBody:
      'The output is a document you keep and can hand to a lawyer. It does not depend on continuing with us, and it does not include a recommendation to engage any particular provider.',
    neverHeading: 'What an assessment never does',
    never: [
      {
        h: 'We do not give you a legal conclusion',
        p: 'Parentage, citizenship, enforceability and eligibility are decided by legal systems and professionals who can act in them. An assessment identifies the question and who can answer it. It does not answer it for you.',
      },
      {
        h: 'We do not perform the verification',
        p: 'A document can be read against a checklist, and each gap in it written out with the party who has to close it. Whether a provider is licensed, whether a clause will hold, whether a figure on a page is honest: those are checked by someone who has standing to check them. We give you the list of checks and the order they have to happen in, not the results.',
      },
      {
        h: 'We do not give medical opinions',
        p: 'Nothing here interprets a scan, a protocol, a success rate quoted by a clinic, or your chances. Those are conversations with your own clinician.',
      },
      {
        h: 'We do not guarantee outcomes or promise a path',
        p: 'No likelihood statements, no timelines presented as certain, no assurance that a program will work or that a child will be recognised as yours in the way you need.',
      },
      {
        h: 'We do not match, screen or supply surrogates',
        p: 'We are not an agency, we do not hold candidate lists, and we do not take money toward a match. If a service on this site were ever referral-based, that would be disclosed on the page where it applies.',
      },
      {
        h: 'We do not tell you which provider to choose',
        p: 'An assessment can show you what a document fails to state. It does not certify a business, and it is not a rating.',
      },
    ],
    settledHeading: 'What is settled, and what is not',
    settledBody:
      'The scope above is the part that can be written down honestly now. A service page that promises a price, a person or a channel that does not exist is a dead link with confident wording around it, so the missing parts are listed rather than papered over.',
    settledNeeds: [
      {
        label: 'Who performs an assessment',
        why: 'a person with a named background, or the service does not launch',
      },
      {
        label: 'Scope and price of each engagement',
        why: 'what is included, how long it takes, what happens if it cannot be answered',
      },
      {
        label: 'The address an enquiry is delivered to',
        why: 'set SITE.contactEmail in src/const.ts and the form on the homepage gains its mail button',
      },
      {
        label: 'Any commercial relationship with providers',
        why: 'if the model includes referrals, disclosure must exist before the first engagement',
      },
    ],
    startHeading: 'Start with the question you already have',
    startBody:
      'The enquiry form writes the question out in the shape an assessment answers: where you are, what is in view, who holds the document now, and the one thing it fails to state. It composes that in your browser and hands it to your mail app, your clipboard or a file, so nothing sits in a queue you cannot see.',
    startPrimary: 'Write an enquiry',
    startSecondary: 'Read how an enquiry is handled',
    diyHeading: 'Do the useful part yourself now',
    diyBody:
      'The work an assessment does is largely the work the free tools already structure. If you put your quotes into the comparison tool, the gaps are visible without paying anyone.',
    diyPrimary: 'Compare two quotes',
    diySecondary: 'Read what a contract should state',
    revised: 'Last revised {date}.',
  },
  zh: {
    title: '评估服务说明',
    description:
      '一对一咨询：把你已经持有的文件和选项做一次有结构的书面梳理，指出缺口，以及每一个问题必须由谁来回答。',
    statusNote: '咨询已经开放。费用，以及由谁来做这次梳理，尚未确定，因此在本页下方标注为待补充，而不是猜测填入。',
    h1: '评估是什么，以及它不是什么',
    intro:
      '阅读会把你带到一个地步：你自己的文件成了问题所在。评估就是为这个地步准备的服务。它不是建议，不是匹配，也不是对某个服务方的评级。它是对已经在你手里的东西做一次有结构的梳理，并把每一个缺口都写明该由谁来补上。核实属于律师、诊所或资金监管方，不由我们代你完成。',
    forHeading: '这项服务面向谁',
    forBody:
      '不面向从零开始的人。如果你还不清楚流程有哪些阶段、一份报价里应当有什么，指南会免费回答这些。这一项服务针对的是那之后的阶段：文件已经摆在你面前，不确定的地方在于它没有说什么。法律风险也属于这类不确定：哪些国家在这里有可核查的路径、亲权与孩子的国籍取决于什么，以及其中哪些问题属于律师，而不是属于一个网站。',
    bringHeading: '你会带着什么来',
    brings: [
      '一份你收到的报价、方案书或合同，希望对照一份「应当包含什么」的清单来读。',
      '两个看起来金额不同的选项，你需要知道它们的范围是否根本可以比较。',
      '一份目的地入围名单，你想要其中有来源的立场、尚未解决的问题，以及就你的情况而言本地律师必须确认什么。',
      '一次已经约好的会面所需的问题清单，让那一个小时花在真正要紧的事情上。',
    ],
    bringBefore:
      '只发送提出这个问题所必需的内容。把一份报价对照清单来读，不需要其他人的姓名、病历或付款信息，而',
    bringLink: '你发送的任何内容会如何被处理',
    bringAfter: '在你发送之前就已经写明在这里。',
    receiveHeading: '你会收到什么',
    outcome: '第 {n} 项产出',
    receives: [
      '一份书面地图：你的文件回答了哪些内容、没有回答哪些内容，以及在哪些地方自相矛盾。',
      '报价里具体的排除项与或有成本，逐条列为需要确认的项，而不是汇成一个总数。',
      '指向正确一方的问题：其中哪些属于某个法域的律师，哪些属于诊所，哪些属于机构，哪些属于资金监管方。',
      '一份可以在会议上当场读出来的对比视图，每一项旁边都放着它的来源。',
    ],
    receiveBody:
      '产出是一份由你保存、可以交给律师的文件。它不以继续与我们合作为前提，也不包含委托某个特定服务方的建议。',
    neverHeading: '评估永远不会做的事',
    never: [
      {
        h: '我们不给你法律结论',
        p: '亲权、国籍、可执行资格与准入条件，由法律体系以及能在其中行事的专业人士决定。评估负责找出问题，以及谁能回答它。它不替你回答。',
      },
      {
        h: '我们不代你做核实',
        p: '一份文件可以对照清单来读，其中每一个缺口都能写明它该由谁来补。某家服务方是否持有资质、某一条款是否站得住、纸面上的数字是否诚实，这些要由有资格核实它们的人去查。我们给你的是核查清单，以及它必须发生的顺序，不是核查结果。',
      },
      {
        h: '我们不给医学意见',
        p: '这里不解读任何检查影像、治疗方案、诊所报出的成功率，也不判断你的机会。这些是与你自己的临床医生进行的对话。',
      },
      {
        h: '我们不保证结果，也不承诺路径',
        p: '没有可能性陈述，没有当作确定来呈现的时间表，也没有某个方案会成功、或者孩子一定会以你需要的方式被认定为你的人的保证。',
      },
      {
        h: '我们不匹配、不筛查、不提供代孕者',
        p: '我们不是机构，不持有人选名单，也不朝匹配方向收取费用。如果这个站点上的某项服务将来涉及转介，它会在实际发生的那个页面上披露。',
      },
      {
        h: '我们不告诉你该选哪家服务方',
        p: '评估可以让你看见一份文件没有说什么。它不为一家企业作担保，也不构成评级。',
      },
    ],
    settledHeading: '已确定的，与尚未确定的',
    settledBody:
      '上面的范围是现在可以诚实写下的部分。一个服务页面如果承诺一个并不存在的价格、人物或渠道，就是一个被自信措辞包裹的失效链接，所以缺少的部分会列出来，而不是用纸糊过去。',
    settledNeeds: [
      { label: '由谁来执行一次评估', why: '需要一位有具名背景的人，否则这项服务不上线' },
      { label: '每次委托的范围与价格', why: '包含什么、需要多久、如果无法给出答案会怎样' },
      { label: '问询最终送达的地址', why: '在 src/const.ts 里设置 SITE.contactEmail，首页表单就会获得它的邮件按钮' },
      { label: '与服务方之间的任何商业关系', why: '如果模式包含转介，披露必须在第一次委托之前就存在' },
    ],
    startHeading: '从你已经有的那个问题开始',
    startBody:
      '问询表单会把你的问题写成评估能够回答的形状：你处在哪一步、视野里有什么、文件现在在谁手里，以及它唯一没有说明的那件事。它在你自己的浏览器里把这段文字组织好，再交给你的邮件应用、剪贴板或一个文件，因此不会有任何东西滞留在你看不见的队列里。',
    startPrimary: '写一份问询',
    startSecondary: '阅读问询会如何被处理',
    diyHeading: '现在自己动手完成有用的那部分',
    diyBody:
      '评估所做的工作，很大程度上就是免费工具已经结构化的那件工作。如果你把报价放进对比工具，缺口不需要付钱给任何人都能看见。',
    diyPrimary: '对比两份报价',
    diySecondary: '阅读合同应当写明什么',
    revised: '最近修订于 {date}。',
  },
};
