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
  correctionsHeading: string;
  correctionsBody: string;
  /**
   * The register. Every other page that used to carry its own gap notice points here instead, so a
   * missing address is stated once, with what it blocks, rather than six times in six wordings.
   */
  openHeading: string;
  openIntro: string;
  openNeeds: NeedsItem[];
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
      'A site that asks for trust should say whose name stands behind it. These pages are written and maintained under the name {team}, and the review the byline claims is done by clinical members of that team. What {team} is in law, and where it is registered, is not stated yet, and neither are the names or the credentials of the people who wrote and checked a page. The register at the bottom of this page lists what is still missing, and what each missing piece blocks.',
    correctionsHeading: 'Corrections',
    correctionsBody:
      'If a source on a page no longer supports the claim next to it, that is a defect worth writing down: the page address, the sentence, and what the source says instead. A correction is either fixed or the claim comes off the page while the check is pending. The one thing missing here is an address to send it to, which is the gap below.',
    openHeading: 'What this site has not settled',
    openIntro:
      'Everything this page cannot answer yet is on this list, with what each missing piece blocks. A gap stays here until the thing behind it exists.',
    openNeeds: [
      {
        label: 'An address for receiving enquiries',
        why: 'the form on the homepage has nowhere to send to, so an enquiry leaves from your own mail app, clipboard or file',
      },
      {
        label: 'An address for corrections',
        why: 'a correction has nowhere to arrive, which is the one part of the process above that is not in place',
      },
      {
        label: 'A route for a data request',
        why: 'until there is an address to write to, you cannot ask what is held about you, change it, or ask for it to be gone',
      },
      {
        label: 'Who operates this site, and its registration or incorporation if it has any',
        why: 'which law governs, which court answers, and who is answerable for a page all turn on this, and a privacy policy has to name it',
      },
      {
        label: 'The hosting provider, and how long its server logs are kept',
        why: 'who hosts the site and what it records about a visit decides what leaves your browser',
      },
      {
        label: 'Member names and roles, and the credentials of its clinical members',
        why: 'the byline names a team, so you cannot yet check who wrote a page, who reviewed it, or what training they have',
      },
    ],
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
    whoBody:
      '一个要求别人信任的网站，应当说出背后署的是谁的名字。这些页面的编写与维护，署的是 {team} 这个名字，而署名里的那句审阅，由这个团队中有临床背景的成员完成。{team} 在法律上是什么、注册在哪里，本站还没有写明；写下某一页、审下某一页的人叫什么、受过什么训练，同样没有写明。本页末尾的那份清单列出了还缺什么，以及每一项缺口各自挡住的是什么。',
    correctionsHeading: '更正',
    correctionsBody:
      '如果某个页面上的来源已经不再支持它旁边的那条说法，那就是一个值得写下来的缺陷：页面地址、那句话，以及来源实际写的是什么。一条更正要么被改正，要么在核查期间先把说法从页面上撤下。这里还缺的只有一件：可以寄送的收件地址，也就是下面那份清单里的一项。',
    openHeading: '本站还没有确定的事项',
    openIntro:
      '这一页还回答不了的东西都列在这份清单上，并且写明每一项缺口各自挡住什么。缺口会一直留在这里，直到它背后那件事真的存在。',
    openNeeds: [
      {
        label: '接收问询的地址',
        why: '首页的表单没有地方可以投递，所以问询要从您自己的邮件应用、剪贴板或一个文件离开',
      },
      {
        label: '接收更正的地址',
        why: '一条更正现在无处可到，上面那套流程里只有这一环还没有落实',
      },
      {
        label: '提交数据请求的渠道',
        why: '在有可以写信的地址之前，您无法询问这里存有您的什么、要求改正，或者要求删除',
      },
      {
        label: '本站由谁运营，以及它有没有登记或注册信息',
        why: '适用哪一套法律、由哪家法院管辖、一页内容由谁负责，全都取决于这一项，而隐私政策必须把它写明',
      },
      {
        label: '托管方，以及它的服务器日志保存多久',
        why: '网站由谁托管、它记录一次访问的哪些内容，决定了有什么会离开您的浏览器',
      },
      {
        label: '成员姓名与各自的角色，以及临床成员的资质',
        why: '署名只到团队这一层，您还无法核对某一页是谁写的、谁审的，以及他们受过什么训练',
      },
    ],
  },
};
