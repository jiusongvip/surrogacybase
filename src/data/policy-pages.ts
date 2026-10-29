/*
 * The three pages that state how the site works on paper: editorial policy, privacy and terms.
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

export type EditorialPage = {
  title: string;
  titleTag: string;
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
  datesBody: string;
  moneyHeading: string;
  commercial: string[];
  imageryHeading: string;
  imageryBody: string;
  revised: string;
};

export type PrivacyPage = {
  title: string;
  titleTag: string;
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
  operatorHeading: string;
  operatorIntro: string;
  rightsBody: string;
  revised: string;
};

export type TermsPage = {
  title: string;
  titleTag: string;
  description: string;
  h1: string;
  intro: string;
  acceptance: string;
  boundaryHeading: string;
  terms: { h: string; body: string }[];
  sourceHeading: string;
  sourceIntro: string;
  revised: string;
};

/** The date the wording on this page last changed. Both languages carry the same stamp. */
export const EDITORIAL_REVISION = '2026-10-26';

export const EDITORIAL_PAGE: Record<Lang, EditorialPage> = {
  en: {
    title: 'Editorial policy',
    titleTag: 'Editorial Policy: How We Research and Verify',
    description:
      'How SurrogacyBase clears a claim before publishing it: evidence levels, source records, jurisdiction scoping, corrections and commercial disclosure.',
    eyebrow: 'Standards applied to every guide, explainer and destination page',
    h1: 'How we research',
    intro:
      'Most search results about surrogacy are written by the parties selling it. A source that is also a sales channel is not neutral, so the difference here has to be the bar a claim clears before it appears. That bar is written down so you can hold us to it.',
    levelsHeading: 'Three evidence levels',
    levelsIntro:
      'Every page declares which level it sits at, in a note under the title. The note says what kind of claim you are reading, not how confident we feel.',
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
        body: 'Written but not published. You will not encounter a draft on this site: a page appears only once it can stand at one of the two levels above.',
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
        p: 'These pages are signed with the name of the team that writes and maintains them, and each page states that the medical advisory board carries the clinical review. Where an individual reviewer is named, the About page lists that person with their role and a public credential, and the credit is used only after they have completed a review cycle and agreed to it. The review checks what a source says and where it applies; it is not an endorsement of a reader’s own plan.',
      },
      {
        h: 'Not publishing is also a decision',
        p: 'Some subjects have no reliable public source. Rather than paraphrase marketing copy or a forum post, those pages are not published.',
      },
    ],
    correctionsHeading: 'Updates, dates and corrections',
    correctionsBody:
      'If you find a claim that its own source no longer supports, tell us. The fix is either to correct the claim or to remove it while the check is pending.',
    datesBody:
      'A page shows the date it was first published and the date of its last substantive change. Refreshing the modification date without changing the content is not an update and does not happen here. Each page also carries a date by which its sources must be re-checked.',
    moneyHeading: 'Independence and money',
    commercial: [
      'These pages are published by the editorial team and reviewed by the medical advisory board, both named on the About page.',
      'While the site operates independently it takes no paid placement, referral fee or sponsorship. If any commercial relationship is introduced, the affected pages disclose it before the arrangement starts.',
      'Providers are not paid to be included, and inclusion is not an endorsement.',
      'Corrections from a named party are handled the same way as corrections from anyone else.',
    ],
    imageryHeading: 'Imagery',
    imageryBody:
      'Where a page carries a picture, it is a stock photograph chosen for that page’s subject: documents, a courthouse, a bank vault, an airport hall. No picture claims to document anyone’s own surrogacy, no surrogate, intended parent or child appears in one, and no photograph of an identifiable person is used at all. The photographs come from a library whose licence allows commercial use without crediting the photographer, and the source of each is kept on record. On this subject a staged family photograph would either depict something that did not happen or borrow a real family’s circumstances to sell something to a stranger, so the pictures here stay with the documents and the places a decision actually involves.',
    revised: 'Policy last revised {date}.',
  },
  zh: {
    title: '编辑方针',
    titleTag: '编辑方针：本站如何核实一条陈述',
    description:
      'SurrogacyBase 在发表一条陈述之前适用的标准：证据等级、来源记录、法域限定、费用数据、更正流程与商业披露。',
    eyebrow: '以下标准适用于每一篇指南、每一篇专题解读和每一个目的地页面',
    h1: '我们如何开展研究',
    intro:
      '关于代孕的搜索结果，多数出自出售该项服务的一方。一个既为信息来源又为销售渠道的主体并不中立，因此此处的差别必须体现于一条陈述发表之前所须跨过的门槛。该标准列于下文，您可据此核对本站的做法。',
    levelsHeading: '三个证据等级',
    levelsIntro:
      '每个页面均在标题下方的一行注明其所处等级。该行标明的是您阅读的是哪一类陈述，而非我们对其所持的信心程度。',
    levels: [
      {
        name: '已核实',
        body: '正文中每一条事实性陈述均可追溯至其下方所列的某一来源。无法追溯来源的陈述，不会以此等级发表。',
      },
      {
        name: '方法框架',
        body: '此类页面教授的是方法：应提出哪些问题、应核查哪些来源、如何阅读一份文件。其不对外部世界作出任何断言，因此无须引证，亦不会过期。',
      },
      {
        name: '草稿',
        body: '已撰写完成但尚未发表。站内不会出现草稿：一个页面仅在达到上述两个等级之一后方才发布。',
      },
    ],
    sourceHeading: '一条来源记录包含什么',
    sourceIntro: '引证只有在您能够重新核查它时才具备价值。每一页面下的每条来源均包含六项内容。',
    sourceCaption: '已核实页面上的每条来源均须记录，目的地的具体事实亦然。',
    sourceFields: [
      ['引证中的该行文字', '您在引证中所见即为该项内容。'],
      ['链接', '一个可以打开的地址。需登录方可查阅的来源会照此标注。'],
      ['发布方', '对该条陈述负责的组织，而非转载它的网站。'],
      ['发布日期', '发布方自身说明该文件写成或最后修订的时间。'],
      ['核查日期', '有人打开该链接并加以阅读的日期。会过期的正是这一项。'],
      ['该文件具体支持的论断', '文件所支持的那一条论断，以便您核对它是否确实予以支持。'],
    ],
    methodBody:
      '核查的做法为：每一个被引用的地址均会被打开，并与其所支撑的陈述逐句对照；此一步骤以自动化研究工具完成，并在编辑审校之下进行，核查日期会被记录。无法打开或仅能在登录后查阅的页面，会照实写明，而不会加以规避。不会为使页面呈现经过研究的表象而添加引证。',
    supportsNote:
      '上述六项中最为关键的是最后一项，因引证的过期与页面的过期属两条独立的时间线。一份文件可以仍然打得开、仍然表述某些内容，却已不再支持当初置于其旁的陈述。核对这一对应关系才是审校应做的事，仅重读页面本身并不充分。',
    rulesHeading: '会改变发表结果的几条规则',
    rules: [
      {
        h: '无带日期的来源，即不引用费用数据',
        p: '费用数据、成功率、等待时间与周期次数，仅在同时写明公布该数据的组织、日期以及（若已披露）统计方法时方予呈现。若唯一可得的数据出自出售该项服务的乙方，页面会将其标注为自我申报，并说明是否披露了方法。若无数据能够满足上述标准，页面会说明应如何自行核实，而非编造一个区间。',
      },
      {
        h: '法域属于陈述本身的一部分',
        p: '在某一州、省或国家成立的规则，绝不表述为在其他地方同样成立。目的地页面将每一条陈述限定于其来源所属的法律体系之内，意向父母的准入条件亦仅写至有来源的材料所覆盖的范围。本站不存在任何针对您自身情况的法律意见。',
      },
      {
        h: '本站不从某一法律体系推定至您的个人情形',
        p: '读到某一法域允许某事，并不能确立您可采用该路径，亦不能确立您的本国将承认这一结果。跨国的亲权与证件问题，应交由相应体系内具执业资格的律师判断；触及上述内容的页面会在正文中予以说明，而非置于脚注。',
      },
      {
        h: '不做排名，不做最佳名单',
        p: '本站不对服务方进行排名、打分或列入优选名单，因一项站得住的排名需要有关方案、付款与结果的经审计数据，而此类数据并不公开存在。当某一官方机构点名列出相关组织时，本站报告该次点名，以及其意味着什么、不意味着什么。',
      },
      {
        h: '署名声称了什么，没有声称什么',
        p: '这些页面以编写并维护它们的团队名义署名，每一页另写明临床审阅由医学顾问委员会承担。若署名为某位个人审阅人，关于页将列出其姓名、职务与一项可公开核对的资历，并且仅在本人完成一轮审阅并表示同意之后方使用该项署名。审阅所核对的是来源表述了什么、适用于何处，而非为任何读者自身的方案背书。',
      },
      {
        h: '不发表亦是一项决定',
        p: '部分主题不存在可靠的公开来源。此类页面不予发表，亦不转述宣传稿或论坛帖子。',
      },
    ],
    correctionsHeading: '更新、日期与更正',
    correctionsBody:
      '若您发现某条陈述连其自身的来源亦不再支持，请告知本站。处理方式为改正该条陈述，或在核查期间将其暂时撤下。',
    datesBody: '每个页面均显示其首次发表的日期，以及最后一次实质修改的日期。仅刷新修改日期而内容不变，不构成更新，本站不会如此处理。每个页面另附一个必须重新核查其来源的期限日期。',
    moneyHeading: '独立性与资金',
    commercial: [
      '这些页面由编辑团队发布、由医学顾问委员会审阅，两者的名称均载于关于页。',
      '只要本站保持独立运营，即不接受付费排位、转介费与赞助。若日后引入任何商业关系，受影响的页面将在此项安排开始之前予以披露。',
      '服务方不会付费换取被收录，被收录亦不构成背书。',
      '来自具名一方的更正与其他任何人的更正适用同样的流程。',
    ],
    imageryHeading: '配图',
    imageryBody:
      '若某一页面配图，该图选取的是与该页主题相关的图库照片：文件、法院建筑、银行金库、机场候机楼。所有照片均不声称记录任何家庭的真实处境，画面中不出现代孕者、意向父母或孩子，亦不使用任何可被识别身份的人像。照片取自允许商用、无需署名的图库，每一张的来源与授权均有留存记录。就代孕这一主题而言，一张摆拍的家庭照片要么呈现的是并未发生的场景，要么是以一个真实家庭的处境向陌生人作推销，因此本站的画面仅呈现该项决定实际涉及的文件与场所。',
    revised: '方针最近修订于 {date}。',
  },
};

/** The date the wording on this page last changed. Both languages carry the same stamp. */
export const PRIVACY_REVISION = '2026-10-29';

export const PRIVACY_PAGE: Record<Lang, PrivacyPage> = {
  en: {
    title: 'Privacy',
    titleTag: 'Privacy Policy: What This Site Stores',
    description:
      'What SurrogacyBase stores and does not store: pages that set no cookies, a quote tool that keeps nothing at all, and how any information you send us is handled.',
    h1: 'Privacy',
    intro:
      'What follows describes what actually happens when you read this site and use its tools, and claims nothing beyond that.',
    shortHeading: 'The short version',
    shortBody:
      'Nothing you read here is stored about you. Working with the tools gives us nothing either, because the work stays in your browser. The only information we hold is what you choose to send us through the enquiry form or by email.',
    storedHeading: 'What is stored, and where',
    stored: [
      {
        h: 'Browsing this site',
        body: 'This site has no system that watches which pages you read. It sets no cookies and stores nothing about you in your browser while you read. There is no account, no login, and no profile, so there is no identifier to link your reading history to. The one thing the enquiry form asks this site is which country your request appears to come from, and only once the form is on your screen; that answer returns to your browser and ends there, used to put a dial code and a likely messaging app first. It is not written down anywhere, and it is never attached to an enquiry.',
      },
      {
        h: 'The quote comparison tool',
        body: 'Every cost is printed on the page; you type two columns of amounts into it. Nothing you type leaves that tab and nothing is written down: there is no storage behind this tool, so closing the page discards the amounts, and the document you download is the only copy that exists.',
      },
      {
        h: 'The enquiry form',
        body: 'It is the only form on this site. It asks for a mobile number, one messaging account to reach you on (WhatsApp, WeChat, LINE, Messenger or Telegram), and, optionally, a name and what you want worked out. Nothing asks for an identity document, a date of birth, a budget figure or a medical record, and there is nowhere in the form to attach a file. When you press send, the form sends those fields, the page you were on and the language you were reading to our own enquiry inbox, which we receive through Feishu or WeCom. Those are the tools the owner reads and answers enquiries in; nothing in an enquiry is passed to a clinic, agency, lawyer or advertiser. If delivery is not configured or fails, the form shows the enquiry in your browser instead and offers three ways to send it: your mail app, the clipboard, or a downloaded file. A draft stays in this browser so a half-written enquiry survives a reload; clearing site data for this domain removes it.',
      },
      {
        h: 'Information you send us directly',
        body: 'Once you send an enquiry from your own mail client, we hold what you chose to include, for as long as we need to answer and record the outcome. Do not send anything you would not want repeated back to you in an email thread.',
      },
    ],
    avoidedHeading: 'What this site does not do',
    avoided: [
      'No analytics, advertising, A/B or session-recording scripts are installed.',
      'No third-party embeds, videos, maps or fonts loaded from another company on your behalf.',
      'No collection of health, fertility, pregnancy or family details as a condition of reading or using the tools.',
      'No selling or renting of anything about you, and no sharing beyond the business tools that receive and hold enquiries.',
    ],
    avoidedTail:
      "When links leave this site, the destination's own policy applies. Citations point at official registers, courts, agencies and clinics, and those pages can set cookies we do not control.",
    strictHeading: 'Why this site keeps your data to a minimum',
    strictBody:
      'Surrogacy questions sit close to medical, family and identity information, and an enquiry can expose you before you have decided anything. So the design choice is to avoid collecting it in the first place rather than to promise careful handling afterwards. Tools work without an email address; nothing is gated behind a signup; and this site does not ask why you are here.',
    contactHeading: 'If you contact us',
    contact: [
      'An enquiry should include only what is needed to understand the question. Names of other individuals, medical records, contract documents and payment details are not required to start a conversation about what to verify.',
      'The enquiry form asks only for what is needed to start the conversation: a mobile number, one messaging account, and optionally a name and the question in your own words. It has no way to attach a file. When delivery is configured, pressing send delivers those fields to our internal inbox through Feishu or WeCom; when it is not, the form hands the enquiry to your own mail app, clipboard or a downloaded file.',
      'Documents about other people belong to those people. Do not send a surrogate’s, a clinic’s or another intended parent’s material without their agreement.',
    ],
    operatorHeading: 'Who runs this site',
    operatorIntro:
      'SurrogacyBase is published by the {team}, and the clinical review behind each byline is done by the {board}. Enquiries, corrections and any request about information you send reach one address, {email}. Enquiries submitted through the form are also held in our internal inbox through Feishu or WeCom for as long as needed to answer and record the outcome.',
    rightsBody:
      "Subject to applicable law, you can ask what we hold about you, ask for it to be corrected, or ask for it to be deleted. If you sent an enquiry through the form, ask us to delete it from the internal inbox. If you used a tool, deletion is in your hands already: clear this site's data in your browser settings.",
    revised:
      'Privacy policy last revised {date}. Material changes get a dated note here, not a silent rewrite.',
  },
  zh: {
    title: '隐私',
    titleTag: '隐私政策：本站保存什么、不保存什么',
    description:
      'SurrogacyBase 保存了什么、未保存什么：不设置 cookie 的页面、不留存任何数据的报价工具，以及您主动发送的信息如何被处理。',
    h1: '隐私',
    intro:
      '以下内容陈述您阅读本站、使用这些工具时的实际数据处理情形，不作超出此范围的承诺。',
    shortHeading: '简短版',
    shortBody:
      '您在本站阅读的内容不会被保存为任何关于您的信息。使用这些工具同样不会，因为全部运算均在您的浏览器内完成。我们唯一持有的信息，为您通过问询表单或电子邮件主动发送的内容。',
    storedHeading: '保存了什么，保存在哪里',
    stored: [
      {
        h: '浏览本站',
        body: '本站不设任何监测您阅读行为的系统。它不安装任何 cookie，也不在您阅读时于您的浏览器内存储任何关于您的内容。本站不提供账户、登录或个人档案，因此不存在可用于关联您阅读历史的标识符。问询表单仅有一项信息会向本站查询一次，即本次请求看似来自哪一国家，且仅在表单展示于您的屏幕时才查询。该答案返回您的浏览器后即终止，仅用于将区号及更可能适用的联系方式前置排列。它不会被写入任何位置，也不会随问询附带。',
      },
      {
        h: '报价对比工具',
        body: '表格中的成本项已预置于页面，您只需键入两列金额。您键入的内容不会离开该标签页，也不会被记录：该工具背后没有任何存储，关闭页面后这些金额即不再存在，您下载的文档是其唯一副本。',
      },
      {
        h: '问询表单',
        body: '它是本站唯一的表单。它会询问一个手机号码、一个可联系到您的即时通讯账号（WhatsApp、微信、LINE、Messenger 或 Telegram），以及选填的称呼与需要澄清的问题。没有任何一格要求身份证件、出生日期、预算金额或病历，表单也不提供文件附件途径。按下发送后，表单会将上述内容、您所在的页面以及您阅读的界面语言发送至我们自己的问询收件箱。该收件箱经由飞书或企业微信接收，二者仅为站长本人读取与回复问询的工具，问询内容不会转给任何诊所、机构、律师或广告商。若投递尚未配置或投递失败，表单将改为在您的浏览器内展示问询，并提供三种发送方式：邮件应用、复制或下载为文件。草稿留存于该浏览器，以便未完成的问询在重新打开页面后仍然存在；清除该域名的站点数据即可将其移除。',
      },
      {
        h: '您直接发送给我们的信息',
        body: '一旦您从自己的邮件客户端发出一份问询，我们即持有您选择写入的内容，保留至足以回答并记录结果为止。请勿写入您不希望出现在邮件往来中的内容。',
      },
    ],
    avoidedHeading: '本站不做的事',
    avoided: [
      '没有安装任何分析、广告、A/B 测试或会话录制脚本。',
      '没有任何第三方嵌入、视频、地图，也没有代您从另一家公司加载的字体。',
      '不以阅读或使用工具为条件，收集健康、生育、怀孕或家庭细节。',
      '任何关于您的信息都不出售、不出租，也不会分享给接收与保存问询的业务工具之外的任何一方。',
    ],
    avoidedTail:
      '当链接指向站外时，适用目标网站自身的政策。引证指向官方登记机构、法院、代孕机构与诊所，相关页面可设置我们无法控制的 cookie。',
    strictHeading: '本站为何尽量不收集您的数据',
    strictBody:
      '代孕议题紧邻医疗、家庭与身份信息，一次问询可能在您尚未作出任何决定之前即暴露您的身份。因此设计上的选择是自始不收集，而非事后承诺审慎处理。工具无需邮箱地址即可使用；没有任何内容置于注册之后；本站亦不询问您的来意。',
    contactHeading: '如果您联系我们',
    contact: [
      '问询应仅包含理解该问题所需的内容。其他人的姓名、病历、合同文件与付款信息，均非开启「应核查什么」这一对话所必需。',
      '问询表单只询问开启这场对话所需的内容：一个手机号码、一个即时通讯账号，以及选填的称呼与以您自己的表述写下的问题。该表单不提供文件附件途径。投递已配置时，按下发送会将上述内容送达我们通过飞书或企业微信接收的内部收件箱；未配置时，表单会将问询交给您的邮件应用、剪贴板或一个下载的文件。',
      '关于他人的文件属于那些人本人。未经同意，请勿发送代孕者的、诊所的或另一位意向父母的材料。',
    ],
    operatorHeading: '本站由谁运营',
    operatorIntro:
      'SurrogacyBase 由 {team} 发布，署名里的临床审阅由 {board} 完成。问询、更正，以及关于您发送的任何信息的请求，均寄往同一地址：{email}。通过表单提交的问询也会保存在我们通过飞书或企业微信接收的内部收件箱里，保留至足以回答并记录结果为止。',
    rightsBody:
      '在适用法律允许的范围内，您可以询问我们关于您持有什么、要求更正，或要求删除。若您曾通过表单提交问询，可要求我们自内部收件箱中删除。若您使用的是工具，删除实际上已由您掌握：在浏览器设置中清除本站的数据。',
    revised: '隐私政策最近修订于 {date}。实质性变更会在此留下带日期的说明，而非无声改写。',
  },
};

/** The date the wording on this page last changed. Both languages carry the same stamp. */
export const TERMS_REVISION = '2026-10-20';

export const TERMS_PAGE: Record<Lang, TermsPage> = {
  en: {
    title: 'Terms',
    titleTag: 'Terms of Use for SurrogacyBase Content',
    description:
      'What SurrogacyBase material is: published information rather than advice, dated sources rather than guarantees, and tools that organise your own inputs.',
    h1: 'Terms of use',
    intro:
      'These terms are written in plain language, and each limit is stated where it applies.',
    acceptance:
      'By using this site you accept these terms. If you do not accept them, please do not use the site.',
    boundaryHeading: 'What these pages are, and what they are not',
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
    sourceHeading: 'Who these terms come from',
    sourceIntro:
      'These terms are published by the {team}, reviewed by the {board}, and reachable at {email}. They govern how this material may be used. They are not advice, and every factual claim on the site answers to the dated source beside it.',
    revised: 'Terms last revised {date}. Changes apply from the date shown, not retroactively.',
  },
  zh: {
    title: '条款',
    titleTag: '使用条款：SurrogacyBase 内容的定位',
    description:
      'SurrogacyBase 内容边界的说明：其定位为发布的信息而非建议，为带日期的来源而非保证，亦为一组仅整理您自身输入的工具。',
    h1: '使用条款',
    intro: '本条款以平实语言书写，每一项限制均在其适用之处予以载明。',
    acceptance:
      '使用本站即视为您接受本条款；若您不接受，请勿使用本站。',
    boundaryHeading: '这些页面是什么，不是什么',
    terms: [
      {
        h: '本内容为发布的信息，而非向您提供的建议',
        body: '指南、专题解读与目的地页面陈述某一来源的内容及其适用范围。它们不构成法律、医学、心理或财务建议，阅读其中任何一篇均不成立与任何人之间的委托、医患或专业关系。一条规则是否适用于您的情形，取决于您的法域、您的事实，以及您所委托的合格专业人士。',
      },
      {
        h: '在核对现行来源之前，请勿依据页面行事',
        body: '成文法、法规、法院裁判、机构政策与价格均会变动，而页面陈述的是某份文件在其旁所记录日期上的内容。在您依据本站内容签署、付款或出行之前，请查阅被引用的来源，核对其是否仍与页面所述一致，并与相应体系中的专业人士确认您自身的处境。',
      },
      {
        h: '第三方言论的归属与责任',
        body: '来自法院、监管机构、诊所、机构与出版方的引文和摘要，转载或摘要仅为还原其陈述内容。一个链接或一条引证不构成背书；除其自身明确表示外，被本站引用的服务方并未对任何内容表示同意；服务方所作陈述的责任仍由该服务方承担。',
      },
      {
        h: '工具仅整理您的输入，不评价任何服务方',
        body: '报价对比工具的计算结果反映您所填入的内容。在两份报价的涵盖范围趋于一致之前，两个总额之间的差额并不等同于成本差异；本工具产出的任何内容，均不构成我们对某一服务方是否合法、是否胜任或是否值得付费的意见。',
      },
      {
        h: '材料的使用',
        body: '您可以阅读、链接、引用并打印这些材料，用于您自身的决策，或用于与您自己的律师或诊所的讨论，引用时请注明出处并附上链接。请勿整批转载、不得将其作为您自己的研究成果呈现，亦不得用于为某项服务进行营销。本站所选引用页面均可打开并重新核查；转述任何说法时，请保留相应引证。',
      },
      {
        h: '在法律允许的限度内，不作任何保证',
        body: '本站按其现状提供，不担保其完整、最新或适合您的情况。在适用法律允许的范围内，运营者不对依据本站作出的决定承担责任。本条不削减您依法享有的任何权利，亦不免除我们更正错误陈述的义务。',
      },
    ],
    sourceHeading: '这些条款由谁发布',
    sourceIntro:
      '本条款由 {team} 发布、由 {board} 审阅，可通过 {email} 与我们取得联系。本条款约束的是这份材料的使用方式。本条款不构成建议；本站每一条事实性陈述均对应其旁侧带日期的来源。',
    revised: '条款最近修订于 {date}。变更从所显示的日期起适用，不溯及既往。',
  },
};
