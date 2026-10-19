/*
 * The four pages that state how the site works on paper: editorial policy, privacy, terms, and the
 * updates log around them.
 *
 * These are the pages a lawyer or a regulator would read first, so the Chinese halves carry the same
 * commitments sentence for sentence. Nothing here softens a promise for the second language: a
 * policy that binds the English reader and merely suggests to the Chinese one is not a policy.
 *
 * Where an English paragraph wraps a link, it is split into before/link/after rather than stored
 * with markup inside a string, because the link's address is localized by the component and its
 * anchor text is not.
 */
import type { Lang } from '@/i18n/config';
import type { NeedsItem } from '@/data/service-pages';

export type EditorialPage = {
  title: string;
  description: string;
  eyebrow: string;
  h1: string;
  intro: string;
  levelsHeading: string;
  levelsIntro: string;
  levels: { name: string; body: string }[];
  sourceHeading: string;
  sourceIntro: string;
  sourceCaption: string;
  /** Named the way a reader names them, not by the key each one is stored under. */
  sourceFields: [string, string][];
  methodBody: string;
  supportsNote: string;
  rulesHeading: string;
  rules: { h: string; p: string }[];
  correctionsHeading: string;
  correctionsBody: string;
  /** Split around the link to the updates log. */
  updatesBefore: string;
  updatesLink: string;
  updatesAfter: string;
  correctionsNeeds: NeedsItem;
  moneyHeading: string;
  commercial: string[];
  moneyNeeds: NeedsItem;
  imageryHeading: string;
  imageryBody: string;
  revised: string;
};

export type PrivacyPage = {
  title: string;
  description: string;
  h1: string;
  intro: string;
  shortHeading: string;
  shortBody: string;
  storedHeading: string;
  stored: { h: string; body: string }[];
  avoidedHeading: string;
  avoided: string[];
  avoidedTail: string;
  strictHeading: string;
  strictBody: string;
  contactHeading: string;
  contact: string[];
  unsettledHeading: string;
  unsettledIntro: string;
  unsettledNeeds: NeedsItem[];
  rightsBody: string;
  requestNeeds: NeedsItem;
  revised: string;
};

export type TermsPage = {
  title: string;
  description: string;
  h1: string;
  intro: string;
  acceptance: string;
  boundaryHeading: string;
  terms: { h: string; body: string }[];
  openHeading: string;
  openIntro: string;
  openNeeds: NeedsItem[];
  revised: string;
};

export type UpdatesPage = {
  title: string;
  description: string;
  h1: string;
  intro: string;
  /** The five log kinds, printed as the label beside each entry. */
  kinds: Record<'published' | 'corrected' | 'decision' | 'withheld' | 'removed', string>;
  /** {n} numbers the outcome for a screen reader. */
  reasonLabel: string;
  openPage: string;
  /** {title} is the later entry's own title, {date} is its date. */
  supersededBy: string;
  emptyTitle: string;
  emptyBody: string;
  emptyAction: string;
};

/** The date the wording on this page last changed. Both languages carry the same stamp. */
export const EDITORIAL_REVISION = '2026-10-19';

export const EDITORIAL_PAGE: Record<Lang, EditorialPage> = {
  en: {
    title: 'Editorial policy',
    description:
      'The standards SurrogacyBase applies before a claim is published: evidence levels, source records, jurisdiction scoping, number handling, corrections and commercial disclosure.',
    eyebrow: 'Standards applied to every guide, explainer and destination page',
    h1: 'How we research',
    intro:
      'Most search results about surrogacy are written by the parties selling it. A source that is also a sales channel is not neutral, so the difference here has to be the bar a claim clears before it appears. That bar is written down so you can hold us to it.',
    levelsHeading: 'Three evidence levels',
    levelsIntro:
      'Every page declares which level it sits at, in a note under the title. This is the honest version of a badge: it tells you what kind of claim you are reading, not how confident we feel.',
    levels: [
      {
        name: 'Verified',
        body: 'Every factual claim in the body traces to a source listed under it. If a sentence cannot be traced, it is not published at that level.',
      },
      {
        name: 'Framework',
        body: 'The page teaches a method: what to ask, what to check, how to read a document. It asserts nothing about the outside world, so it needs no citation and cannot be out of date.',
      },
      {
        name: 'Draft',
        body: 'Written but not published. Drafts are excluded from listings, navigation, internal links and the sitemap, so an unfinished page can never be reached by accident.',
      },
    ],
    sourceHeading: 'What a source record contains',
    sourceIntro:
      'A citation is only useful if you can re-check it. Each source under a page carries six pieces of information.',
    sourceCaption: 'Recorded for every source on a verified page, including destination facts.',
    sourceFields: [
      ['The citation line', 'What you see in the citation.'],
      ['Link', 'An address that opens. A source behind a login is marked as such.'],
      ['Publisher', 'The organisation accountable for the statement, not the website that reposted it.'],
      ['Published on', 'When the publisher says the document was written or last revised.'],
      ['Checked on', 'The date a person opened the link and read it. This is what ages.'],
      ['What it supports', 'The specific claim the document backs, so you can check whether it actually does.'],
    ],
    methodBody:
      'How the check is done, stated plainly: each cited address is opened and read against the sentence it is attached to, using automated research tooling under editorial review, and the date of that check is recorded. Where a page could not be opened, or opened only behind a login, that is noted rather than worked around. No citation is added to make a page look researched.',
    supportsNote:
      'The last of these carries the most weight on its own, because a citation ages separately from the page using it. A document can still open and still say something while no longer supporting the sentence it was attached to. Checking that pairing is what a review does; re-reading the page alone is not enough.',
    rulesHeading: 'The rules that change what gets published',
    rules: [
      {
        h: 'No number without a dated source',
        p: 'Cost figures, success rates, waiting times and cycle counts appear only with the organisation that published them, the date, and the method if one is disclosed. Where the only available figure comes from a provider selling the service, the page labels it self-reported and says whether any method is disclosed. If no figure survives that test, the page explains how to find out instead of inventing a range.',
      },
      {
        h: 'Jurisdiction is part of the claim',
        p: 'A rule that holds in one state, province or country is never written as though it holds elsewhere. Destination pages scope each statement to the legal system it comes from, and intended parent eligibility is described only as far as the sourced material goes. Nothing on this site is a legal opinion about your situation.',
      },
      {
        h: 'We do not extrapolate from a legal system to you',
        p: 'Reading that a jurisdiction permits something does not establish that you may use that route, or that your home country will recognise the outcome. Cross-border parentage and documentation are questions for a qualified lawyer in the relevant system, and pages that touch them say so in the body rather than in a footnote.',
      },
      {
        h: 'No rankings, no lists of the best',
        p: 'Providers are not ranked, scored or shortlisted, because a defensible ranking would need audited data on programs, payments and outcomes that does not exist publicly. Where an official body names organisations, we report that naming and what it does and does not mean.',
      },
      {
        h: 'What the signature claims, and what it does not',
        p: 'These pages are signed with the name of the team that writes and maintains them, and each page states that the team reviewing them includes members with clinical backgrounds. That is the whole of the claim: no individual is named as an author or a reviewer anywhere on the site, and no credential is quoted. The About page lists the names and qualifications behind the signature as not yet published. Until they are, the review line is a claim you cannot match to a person, and it is presented here as exactly that rather than as a credential. Reviewer credits are still never added to borrow trust.',
      },
      {
        h: 'Silence is a valid editorial decision',
        p: 'Some subjects have no reliable public source. Rather than paraphrase marketing copy or a forum post, those pages are not published. Short sections in a large niche are usually a sign the sourcing bar held, not that the work was skipped.',
      },
    ],
    correctionsHeading: 'Updates, dates and corrections',
    correctionsBody:
      'If you find a claim that its own source no longer supports, tell us. The fix is either to correct the claim or to remove it while the check is pending, and the removal is logged.',
    updatesBefore:
      'A page shows the date it was first published and the date of its last substantive change. Refreshing the modification date without changing the content is not an update and does not happen here. Each page also carries a date by which its sources must be re-checked, and the ',
    updatesLink: 'updates log',
    updatesAfter: ' records what actually changed and why.',
    correctionsNeeds: {
      label: 'Correction inbox address',
      why: 'no address to send a correction to is published here yet',
    },
    moneyHeading: 'Independence and money',
    commercial: [
      'The name these pages are published under, and what has not been stated yet, are on the About page.',
      'Paid placements, referral fees and sponsorships are not accepted while the site presents itself as independent. If any commercial relationship is introduced, this page and the affected pages disclose it before the arrangement starts.',
      'Providers are not paid to be included, and inclusion is not an endorsement.',
      'Corrections from a named party are handled the same way as corrections from anyone else.',
    ],
    moneyNeeds: {
      label: 'Where an enquiry is received, and who reads it',
      why: 'no address for receiving enquiries has been published yet, so an enquiry travels from your own mail app',
    },
    imageryHeading: 'Imagery',
    imageryBody:
      'Illustration on this site is generated, not photographed from anyone’s situation. It shows documents and desk objects, travel and coastal scenes, and occasionally people seen from behind. No picture here is documentary photography, no real surrogate, intended parent or child appears in one, and none is stock photography of an unidentified person. The choice is deliberate: on this subject a family photograph either stages something that did not happen or uses a real family’s circumstances to sell something to a stranger, and a borrowed stock image leaves you looking at a face that belongs to nobody in the story.',
    revised: 'Policy last revised {date}.',
  },
  zh: {
    title: '编辑方针',
    description:
      'SurrogacyBase 在发表一条说法之前适用的标准：证据等级、来源记录、法域限定、数字处理、更正流程与商业披露。',
    eyebrow: '以下标准适用于每一篇指南、每一篇专题解读和每一个目的地页面',
    h1: '我们如何做研究',
    intro:
      '关于代孕的搜索结果，大多数出自出售这项服务的一方之手。一个既是信息来源又是销售渠道的主体并不中立，所以这里的差别必须体现在一条说法发表之前要跨过的门槛上。这道门槛写在下面，您可以据此问责我们。',
    levelsHeading: '三个证据等级',
    levelsIntro:
      '每个页面都在标题下方的一行注明自己处于哪个等级。这是徽章的诚实版本：它告诉您正在阅读的是哪一类说法，而不是我们对它有多有信心。',
    levels: [
      {
        name: '已核实',
        body: '正文里每一条事实性说法都可以追溯到它下方列出的某个来源。一句话如果追不出来源，就不会以这个等级发表。',
      },
      {
        name: '方法框架',
        body: '这个页面教的是方法：该问什么、该查什么、怎么读一份文件。它对外部世界不作任何断言，因此不需要引证，也不会过期。',
      },
      {
        name: '草稿',
        body: '已写完但未发表。草稿被排除在列表、导航、内部链接与站点地图之外，因此一个未完成的页面不可能被偶然访问到。',
      },
    ],
    sourceHeading: '一条来源记录包含什么',
    sourceIntro: '引证只有在您能重新核查它时才有用。每个页面下的每一条来源都带六项内容。',
    sourceCaption: '已核实页面上的每一条来源都要记录，目的地的具体事实同样如此。',
    sourceFields: [
      ['引证里的那行文字', '您在引证里看到的就是这一项。'],
      ['链接', '一个打得开的地址。需要登录才能看到的来源会照此标注。'],
      ['发布方', '对这条陈述负责的组织，而不是转载它的网站。'],
      ['发布日期', '发布方自己说明这份文件写成或最后修订的时间。'],
      ['核查日期', '有人打开这个链接并读过它的日期。会过期的正是这一项。'],
      ['它支持的说法', '这份文件具体支持的那条说法，以便您核对它是否真的支持。'],
    ],
    methodBody:
      '核查是怎么做的，直说：每一个被引用的地址都会被打开，并与它挂着的那句话逐句对照，使用自动化研究工具并在编辑审校之下完成，核查的日期会被记录。打不开、或者只能在登录后打开的页面，会照实写明，而不会绕过去。没有任何引证是为了让页面看起来做过研究而添加的。',
    supportsNote:
      '这六项里最要紧的是最后一项，因为引证的过期与页面的过期是两条独立的时间线。一份文件可以仍然打得开、仍然在说些什么，却已经不再支持当初挂在它旁边的句子。核对这一对关系才是审校要做的事，只重读页面本身并不够。',
    rulesHeading: '会改变发表结果的几条规则',
    rules: [
      {
        h: '没有带日期的来源，就不写数字',
        p: '费用数字、成功率、等待时间与周期次数，只在同时写明发布它的组织、日期以及（若披露）统计方法时才会出现。如果唯一可得的数字来自出售这项服务的乙方，页面会把它标为自我申报，并说明是否披露了方法。若没有任何数字能过这一关，页面会说明该如何自己去查，而不是编造一个区间。',
      },
      {
        h: '法域是说法的一部分',
        p: '在某个州、省或国家成立的规则，绝不写成好像在其他地方也成立。目的地页面把每一句话限定在它来源的那个法律体系内，意向父母的准入条件也只写到有来源的材料所覆盖的范围。本站没有任何内容是关于您自身情况的法律意见。',
      },
      {
        h: '我们不从某个法律体系推算到您个人',
        p: '读到某个法域允许某事，并不能确立您可以走这条路，也不能确立您的本国承认这一结果。跨国的亲权与证件问题，要交给相应体系里合格律师判断；触及这些内容的页面会在正文里说明，而不是放在脚注。',
      },
      {
        h: '不做排名，不做最佳名单',
        p: '服务方不被排名、打分或列入优选名单，因为一个站得住的排名需要关于方案、付款与结果的经审计数据，而这些数据并不公开存在。当某个官方机构点名列出组织时，我们报告那次点名，以及它意味着什么、不意味着什么。',
      },
      {
        h: '署名声称了什么，没有声称什么',
        p: '这些页面以编写并维护它们的团队名义署名，每一页还写明审阅它们的团队中有具备临床背景的成员。声称的全部内容到此为止：站内不以任何个人名义署名作者或审阅人，也不引用任何资历。关于页把署名背后的姓名与资历列为尚未发布。在这些信息公布之前，审阅行是一条您无法对应到具体个人的声称，本页就按这样陈述它，而不是把它当作资历。审阅人署名仍然从不为了借用信任而添加。',
      },
      {
        h: '不写，本身就是一种有效的编辑决定',
        p: '有些主题没有可靠的公开来源。我们宁可不做转述宣传稿或论坛帖子的页面，也不发表它们。一个大领域里出现很短的章节，通常说明来源门槛守住了，而不是工作被跳过了。',
      },
    ],
    correctionsHeading: '更新、日期与更正',
    correctionsBody:
      '如果您发现某条说法连它自己的来源都不再支持，请告诉我们。处理方式要么是改正这条说法，要么是在核查期间先把它撤下，而撤下这件事会被记录。',
    updatesBefore:
      '一个页面会显示它首次发表的日期，以及最后一次实质修改的日期。只把修改日期刷新而内容不变，不算更新，这里不会发生。每个页面还带一个必须重新核查其来源的期限日期，而',
    updatesLink: '更新日志',
    updatesAfter: '记录实际改了什么以及为什么改。',
    correctionsNeeds: { label: '更正收件地址', why: '本站尚未公布可供发送更正的地址' },
    moneyHeading: '独立性与金钱',
    commercial: [
      '这些页面以什么名字发布，以及哪些内容尚未写明，都写在关于页上。',
      '本站以独立自居期间，不接受付费排位、转介费与赞助。如果将来引入任何商业关系，本页与受影响的页面会在这项安排开始之前披露它。',
      '服务方不会付费换取被收录，被收录也不构成背书。',
      '来自具名一方的更正与其他任何人的更正走同样的流程。',
    ],
    moneyNeeds: {
      label: '问询由谁接收、由谁阅读',
      why: '本站还没有公布接收问询的地址，所以问询要从您自己的邮件应用发出去',
    },
    imageryHeading: '配图',
    imageryBody:
      '本站的插图是生成的，不是对任何家庭真实处境的拍摄。画面内容是文件与桌上的物件、旅途与海滨的场景，偶尔也有几个人朝海走去的背影。这里没有一张是纪实摄影，没有任何一张里出现真实的代孕者、意向父母或孩子，也没有一张是身份不明的图库照片。这个选择是刻意的：在代孕这个话题上，一张家庭照片要么摆拍出一个并没有发生过的场景，要么是拿一个真实家庭的处境向陌生人兜售东西；而借来的一张图库照片，只会让您盯着一张不属于这个故事里任何人的脸。',
    revised: '方针最近修订于 {date}。',
  },
};

/** The date the wording on this page last changed. Both languages carry the same stamp. */
export const PRIVACY_REVISION = '2026-10-17';

export const PRIVACY_PAGE: Record<Lang, PrivacyPage> = {
  en: {
    title: 'Privacy',
    description:
      'What SurrogacyBase stores and does not store: pages that set no cookies, a quote tool that keeps its data only in your browser, and how any information you send us is handled.',
    h1: 'Privacy',
    intro:
      'This page describes what actually happens when you read this site and use its tools. It promises only what the site really does, which is why it is shorter than most privacy policies.',
    shortHeading: 'The short version',
    shortBody:
      'Reading this site gives us nothing about you. Working with the tools gives us nothing either, because the work stays in your browser. The only information we hold is what you decide to send us.',
    storedHeading: 'What is stored, and where',
    stored: [
      {
        h: 'Browsing this site',
        body: 'This site has no system that watches which pages you read. It sets no cookies and stores nothing about you in your browser while you read. There is no account, no login, and no profile, so there is no identifier to link your reading history to.',
      },
      {
        h: 'The quote comparison tool',
        body: 'Everything you type is saved only in your own browser and read back from there. This site has no server that could receive it, so nothing the tool holds is sent to us or to anyone else. Clearing site data for this domain removes it permanently, and exporting gives you the only other copy.',
      },
      {
        h: 'The enquiry form',
        body: 'It is the only form on this site, and it asks three things: the email address to reply to, your question in your own words, and a name if you want the reply addressed to someone. Only the name is optional. Nothing asks for an identity document, a date of birth, a budget figure or a medical record, and there is nowhere in the form to attach a file. The site has no server that could receive your enquiry, so pressing a button sends nothing on its own: the form builds the enquiry in your browser and hands it to your own mail app, your clipboard, or a file you download, and the address you typed is written into that text so whoever receives it can answer. Until you send it, the only copy is the draft your browser keeps so a half-written enquiry is still there if you close and reopen the page. Clearing site data for this domain removes it, and deleting the file removes the rest.',
      },
      {
        h: 'Information you send us directly',
        body: 'Once you send an enquiry from your own mail client, we hold what you chose to include, for as long as we need to answer and record the outcome. Do not send anything you would not want repeated back to you in an email thread.',
      },
    ],
    avoidedHeading: 'What we deliberately do not do',
    avoided: [
      'No analytics, advertising, A/B or session-recording scripts are installed.',
      'No third-party embeds, videos, maps or fonts loaded from another company on your behalf.',
      'No collection of health, fertility, pregnancy or family details as a condition of reading or using the tools.',
      'No selling, renting or sharing of anything about you, because there is nothing about you being stored.',
    ],
    avoidedTail:
      "When links leave this site, the destination's own policy applies. Citations point at official registers, courts, agencies and clinics, and those pages can set cookies we do not control.",
    strictHeading: 'Why this site keeps your data to a minimum',
    strictBody:
      'Surrogacy questions sit close to medical, family and identity information, and an enquiry can expose you before you have decided anything. So the design choice is to avoid collecting it in the first place rather than to promise careful handling afterwards. Tools work without an email address; nothing is gated behind a signup; and this site does not ask why you are here.',
    contactHeading: 'If you contact us',
    contact: [
      'An enquiry should include only what is needed to understand the question. Names of other individuals, medical records, contract documents and payment details are not required to start a conversation about what to verify.',
      'The enquiry form collects none of that material and has no way to: there is nowhere in it to attach a file. Where an enquiry is delivered, who reads it, and how long it is kept are set out on this page before any address to send it to appears on the site.',
      'Documents about other people belong to those people. Do not send a surrogate’s, a clinic’s or another intended parent’s material without their agreement.',
    ],
    unsettledHeading: 'Not yet settled, and you should know',
    unsettledIntro:
      'Two things this page still cannot tell you honestly: who operates this site, and how and where it is hosted. Until both are settled, the privacy promises above rest on incomplete answers.',
    unsettledNeeds: [
      {
        label: 'Who operates the site and in which country',
        why: 'a privacy policy has to name the organisation answerable for your data and the law that governs it',
      },
      {
        label: 'The hosting provider and any server log retention it applies',
        why: 'who hosts the site and how long it keeps access logs decide what data leaves your browser',
      },
    ],
    rightsBody:
      "Subject to applicable law, you can ask what we hold about you, ask for it to be corrected, or ask for it to be deleted. If you use the tool, deletion is in your hands already: clear this site's data in your browser settings.",
    requestNeeds: {
      label: 'Where to send a data request',
      why: 'until there is an address to write to, you cannot ask us what we hold, to change it, or to delete it',
    },
    revised:
      'Privacy policy last revised {date}. Material changes get a dated note here, not a silent rewrite.',
  },
  zh: {
    title: '隐私',
    description:
      'SurrogacyBase 存了什么、没存什么：不设置 cookie 的页面、把数据只留在您浏览器里的报价工具，以及您主动发给我们的信息如何被处理。',
    h1: '隐私',
    intro:
      '本页描述您阅读本站、使用这些工具时实际发生的事情。它只承诺本站真正做到的部分，因此它比多数隐私政策更短。',
    shortHeading: '简短版',
    shortBody:
      '阅读本站，我们得不到关于您的任何信息。使用这些工具同样得不到，因为工作全部在您的浏览器里完成。我们唯一持有的信息，是您决定发给我们的那部分。',
    storedHeading: '存了什么，存在哪里',
    stored: [
      {
        h: '浏览本站',
        body: '本站没有任何系统会监视您读了哪些页面。它不设置任何 cookie，也不在您阅读时于您的浏览器里存储关于您的任何内容。这里没有账户、没有登录、没有个人档案，因此不存在一个可以用来关联您阅读历史的标识符。',
      },
      {
        h: '报价对比工具',
        body: '您键入的一切都只保存在您自己的浏览器里，并从那里读回。本站没有能够接收它的服务器，所以这个工具持有的任何内容都不会发给我们或任何其他人。清除这个域名的站点数据会永久移除它，而导出得到的那份是唯一的另一份副本。',
      },
      {
        h: '问询表单',
        body: '它是本站唯一的一个表单，只要三件事：回复用的邮箱地址、用您自己的话写下的问题，以及一个称呼（如果您希望回信称呼某个具体的人）。其中只有称呼是选填。没有任何一格要身份证件、出生日期、预算数字或病历，表单里也没有附上文件的位置。本站没有能够接收您问询的服务器，因此按下按钮本身不会发出任何东西：表单在您的浏览器里把问询组装好，交给您的邮件应用、剪贴板或一个您下载的文件，而您填写的地址会被写进那段文字，好让收到它的人能够回答。在您发出之前，唯一的副本就是您的浏览器保存的草稿，以便一份写了一半的问询在您关掉又重开这个页面之后仍然还在。清除这个域名的站点数据会移除它，删除那个文件会移除剩下的部分。',
      },
      {
        h: '您直接发给我们的信息',
        body: '一旦您从自己的邮件客户端发出一份问询，我们就持有您选择写入的内容，保留到足以回答并记录结果为止。不要发送任何您不希望在一封邮件往来中被复述回来的东西。',
      },
    ],
    avoidedHeading: '我们刻意不做的事',
    avoided: [
      '没有安装任何分析、广告、A/B 测试或会话录制脚本。',
      '没有任何第三方嵌入、视频、地图，也没有代您从另一家公司加载的字体。',
      '不以阅读或使用工具为条件，收集健康、生育、怀孕或家庭细节。',
      '不出售、不出租、不分享任何关于您的东西，因为根本没有关于您的东西被存储。',
    ],
    avoidedTail:
      '当链接离开本站时，适用目标网站自己的政策。引证指向官方登记机构、法院、代孕机构与诊所，而那些页面可以设置我们无法控制的 cookie。',
    strictHeading: '本站为什么尽量不收集您的数据',
    strictBody:
      '代孕问题紧邻医疗、家庭与身份信息，而一次问询可能在您还没有作出任何决定之前就把您的身份暴露出来。因此设计上的选择是一开始就不去收集，而不是事后承诺小心处理。工具无需邮箱地址即可使用；没有任何内容被挡在注册之后；本站也不问您来这里是为了什么。',
    contactHeading: '如果您联系我们',
    contact: [
      '一次问询只应包含理解这个问题所需的内容。其他人的姓名、病历、合同文件与付款信息，都不是开始一场「该核查什么」的对话所必需的。',
      '问询表单不收集那些材料，也没有收集它们的途径：里面没有任何可以附上文件的位置。一次问询会送达哪里、由谁阅读、保留多久，会在本站出现可供发送的收件地址之前，先写在本页上。',
      '关于他人的文件属于那些人本人。未经同意，不要发送代孕者的、诊所的或另一位意向父母的材料。',
    ],
    unsettledHeading: '尚未确定，而您应该知道',
    unsettledIntro: '有两件事本页现在还无法诚实告诉您：本站由谁运营，以及它托管在哪里、由谁托管。这两项确定之前，上面的隐私承诺建立在不完整的答案之上。',
    unsettledNeeds: [
      { label: '本站由谁运营、在哪个国家', why: '一份隐私政策必须点名对您数据负责的那个组织，以及管辖它的法律' },
      { label: '托管服务商，以及它所适用的服务器日志保留策略', why: '由谁托管本站、访问日志保留多久，决定了哪些数据会离开您的浏览器' },
    ],
    rightsBody:
      '在适用法律允许的范围内，您可以询问我们关于您持有什么、要求更正，或要求删除。如果您使用工具，删除其实已经在您自己手里：在浏览器设置里清除本站的数据。',
    requestNeeds: { label: '数据请求寄往何处', why: '在有可写的地址之前，您无法要求我们说明持有什么、改正它，或删除它' },
    revised: '隐私政策最近修订于 {date}。实质性变更会在本页留下一条带日期的说明，而不是悄悄改写。',
  },
};

/** The date the wording on this page last changed. Both languages carry the same stamp. */
export const TERMS_REVISION = '2026-10-16';

export const TERMS_PAGE: Record<Lang, TermsPage> = {
  en: {
    title: 'Terms',
    description:
      'The boundary of what SurrogacyBase material is: published information rather than advice, dated sources rather than guarantees, and tools that organise your own inputs.',
    h1: 'Terms of use',
    intro:
      'Written plainly because a page about high-stakes decisions should not hide its boundaries behind vocabulary you have to decode.',
    acceptance:
      'By using this site you accept these terms. If you do not accept them, the useful move is to leave, not to read carefully and use it anyway.',
    boundaryHeading: 'The boundary of what this is',
    terms: [
      {
        h: 'This is published information, not advice given to you',
        body: 'Guides, explainers and destination pages describe what a source states and where it applies. They are not legal advice, medical advice, psychological advice, or financial advice, and reading one does not create a client, patient or professional relationship with anyone. Whether a rule reaches your situation depends on your jurisdiction, your facts, and the qualified professional you engage.',
      },
      {
        h: 'Do not act on a page without checking the living source',
        body: 'Statutes, regulations, court decisions, agency policies and prices change, and pages describe what a document said on the date recorded next to it. Before you sign, pay, or travel on the strength of anything here, open the cited source, check whether it still says what the page reports, and confirm your own position with a professional in the relevant system.',
      },
      {
        h: 'Other people’s words belong to them',
        body: 'Quotations and summaries from courts, regulators, clinics, agencies and publishers are reproduced to identify what they state. A link or a citation is not an endorsement, and a provider quoted here has not agreed to anything unless it says so itself. Statements made by a provider remain that provider’s responsibility.',
      },
      {
        h: 'The tools organise your inputs; they do not judge a provider',
        body: 'The quote comparison tool arithmetic reflects what you enter. A difference between two totals is not a cost difference until the scope behind each number matches, and nothing produced by the tool is our opinion about whether a provider is legitimate, competent, or worth paying.',
      },
      {
        h: 'Use of the material',
        body: 'You may read, link to, quote and print this material for your own decisions and for discussion with your own lawyer or clinic, with attribution and a link. Do not republish it in bulk, present it as your own research, or use it to market a service. Pages we cite are chosen because they can be opened and re-checked; please keep the citation when you pass a claim on.',
      },
      {
        h: 'No guarantee, to the limit the law allows',
        body: 'The site is provided as it stands, without warranty that it is complete, current or suitable for your case. To the extent permitted by applicable law, the operator is not liable for decisions taken on the strength of it. That sentence does not reduce any statutory rights you have, and it does not excuse us from correcting a claim we got wrong.',
      },
    ],
    openHeading: 'Open questions this page cannot close yet',
    openIntro:
      'These pages are signed {team}, but no registered entity has been named as the operator of this site, so these terms do not bind you or anyone else to anything.',
    openNeeds: [
      {
        label: 'Operating entity, country and governing law',
        why: 'which courts and which consumer-protection rules apply depends on this',
      },
    ],
    revised: 'Terms last revised {date}. Changes apply from the date shown, not retroactively.',
  },
  zh: {
    title: '条款',
    description:
      'SurrogacyBase 的内容边界的说明：它是发布出来的信息而非建议，是带日期的来源而非保证，也是一组整理您自己输入的工具。',
    h1: '使用条款',
    intro: '用平实的话写，因为一个关于高风险决策的页面，不该把自己的边界藏在您需要破译的用词后面。',
    acceptance:
      '使用本站即表示您接受这些条款。如果您不接受，有用的动作是离开，而不是仔细读完之后照样使用。',
    boundaryHeading: '这是什么、不是什么的那条边界',
    terms: [
      {
        h: '这是发布出来的信息，不是给您的建议',
        body: '指南、专题解读与目的地页面描述某个来源说了什么、它适用于哪里。它们不是法律建议、医学建议、心理建议或财务建议，阅读其中任何一篇都不与任何人建立委托、医患或专业关系。一条规则是否触及您的情况，取决于您的法域、您的事实，以及您委托的那位合格专业人士。',
      },
      {
        h: '不核实活的来源，就不要据一个页面行事',
        body: '成文法、法规、法院裁判、机构政策与价格都会变化，而页面描述的是某份文件在它旁边记录的那个日期上说过什么。在您依据这里的任何内容签字、付款或出行之前，请打开被引用的来源，核对它是否仍然如页面所述，并与相应体系里的专业人士确认您自己的位置。',
      },
      {
        h: '别人的话属于别人',
        body: '来自法院、监管机构、诊所、机构与出版方的引文和摘要，被转载是为了辨明他们陈述了什么。一个链接或一条引证不是背书；被此处引用的服务方并未同意任何事情，除非它自己这样说。服务方作出的陈述，责任仍归该服务方。',
      },
      {
        h: '工具整理您的输入，不评判某个服务方',
        body: '报价对比工具的算术反映您填入的内容。在两个数字背后的范围一致之前，两个总额之间的差额并不等于成本差异；这个工具产出的任何东西，都不构成我们对某个服务方是否合法、是否胜任、是否值得付费的意见。',
      },
      {
        h: '材料的使用',
        body: '您可以阅读、链接、引用并打印这些材料，用于您自己的决定，或用于与您自己的律师或诊所的讨论，引用时请注明出处并附上链接。不要整批转载、不要当作您自己的研究呈现、也不要用来为某项服务做营销。我们引用的页面之所以被选中，是因为它们可以打开并重新核查；当您把一条说法转述给别人时，请保留那条引证。',
      },
      {
        h: '在法律允许的限度内，不作任何保证',
        body: '本站按其现状提供，不担保它完整、最新或适合您的情况。在适用法律允许的范围内，运营者不对依据本站作出的决定承担责任。这句话不削减您依法享有的任何权利，也不能免除我们改正一条写错了的说法的义务。',
      },
    ],
    openHeading: '本页现在还无法收口的开放问题',
    openIntro:
      '这些页面的署名是 {team}，但还没有任何注册主体被具名为本站的运营者，因此这些条款不约束您或任何其他人。',
    openNeeds: [{ label: '运营主体、国家与适用法', why: '哪一家法院、哪一套消费者保护规则适用，取决于这一项' }],
    revised: '条款最近修订于 {date}。变更从所显示的日期起适用，不溯及既往。',
  },
};

export const UPDATES_PAGE: Record<Lang, UpdatesPage> = {
  en: {
    title: 'Updates',
    description:
      'A dated log of what changed on SurrogacyBase, what was withheld for lack of a reliable source, and why. Every entry names the reason.',
    h1: 'Updates',
    intro:
      'A change log for a content site usually records what was added. This one also records what was refused: pages that were researched and then withheld because the only available source was a party selling the service.',
    kinds: {
      published: 'Published',
      corrected: 'Corrected',
      decision: 'Editorial decision',
      withheld: 'Withheld',
      removed: 'Removed',
    },
    reasonLabel: 'Why',
    openPage: 'Open the page',
    supersededBy: 'Superseded by the entry “{title}”, logged {date}.',
    emptyTitle: 'Nothing logged yet',
    emptyBody: 'Entries appear when a page is published, corrected, withheld or removed.',
    emptyAction: 'Read the editorial policy',
  },
  zh: {
    title: '更新记录',
    description:
      '一份带日期的日志：SurrogacyBase 上改了什么、因缺少可靠来源而扣下了什么，以及原因。每一条都写明它的理由。',
    h1: '更新记录',
    intro:
      '内容网站的变更日志通常只记录加了什么。这一份还记录拒绝了什么：那些做过研究、最终却被扣下的页面，因为唯一可得的来源是出售这项服务的一方。',
    kinds: {
      published: '已发表',
      corrected: '已更正',
      decision: '编辑决定',
      withheld: '暂扣未发',
      removed: '已撤下',
    },
    reasonLabel: '原因',
    openPage: '打开该页面',
    supersededBy: '已被{date}的记录「{title}」取代。',
    emptyTitle: '还没有记录',
    emptyBody: '当一个页面被发表、更正、扣下或撤下时，条目会出现在这里。',
    emptyAction: '阅读编辑方针',
  },
};
