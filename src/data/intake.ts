import type { Lang } from '@/i18n/config';
import type { Bilingual } from '@/i18n/ui';

/*
 * The intake form's wording, in both languages.
 *
 * The form cannot submit anything: it assembles what you type into a message and hands it to
 * your own mail app, clipboard or file. Most of this dictionary is therefore rendered by the
 * page, but the lines that get written into that message are needed again at runtime, so the
 * component serializes them into the DOM rather than duplicating them in the script.
 *
 * The option labels are bilingual here and read back off the DOM by the script, which is why
 * there is no second copy of them keyed by value code. A code stays a code in both languages;
 * only the words around it change.
 */

export type IntakeOption = { value: string; label: Bilingual };

export const INTAKE_STAGES: IntakeOption[] = [
  {
    value: 'research',
    label: { en: 'Still reading up on what is possible', zh: '还在了解哪些事是可能的' },
  },
  {
    value: 'shortlist',
    label: { en: 'Comparing two or three destinations', zh: '正在比较两三个目的地' },
  },
  {
    value: 'quotes',
    label: { en: 'Holding quotes or a contract to be read', zh: '手上已有报价或合同，需要有人读' },
  },
  {
    value: 'medical',
    label: { en: 'Medical steps already started', zh: '医疗步骤已经开始' },
  },
  {
    value: 'birth',
    label: { en: 'A birth is near or has happened', zh: '孩子即将出生或已经出生' },
  },
];

export const INTAKE_HOLDERS: IntakeOption[] = [
  { value: 'agency', label: { en: 'An agency or program', zh: '一家机构或项目方' } },
  { value: 'clinic', label: { en: 'A fertility clinic', zh: '一家生育诊所' } },
  { value: 'lawyer', label: { en: 'A lawyer', zh: '一位律师' } },
  { value: 'escrow', label: { en: 'An escrow or payment provider', zh: '托管或付款服务方' } },
  { value: 'none', label: { en: 'Nothing yet', zh: '暂时还没有' } },
];

/*
 * The homepage enquiry. It asks who you are, because the owner is answering it personally,
 * and it asks a budget *band* rather than a figure, because a band is what a first reply needs
 * and an income statement is not. "Prefer not to say" is a selectable answer to both optional
 * judgements, so no field here can become the reason somebody does not ask.
 */
export const CONSULT_INTERESTS: IntakeOption[] = [
  { value: 'destinations', label: { en: 'Destinations, and who qualifies in each', zh: '目的地，以及每个地方谁符合条件' } },
  { value: 'cost', label: { en: 'Costs, and what a quote covers', zh: '费用，以及一份报价覆盖什么' } },
  { value: 'provider', label: { en: 'Providers, contracts and payment stages', zh: '服务方、合同与付款阶段' } },
  { value: 'parentage', label: { en: 'Parentage, nationality and travel documents', zh: '亲权、国籍与出行证件' } },
  { value: 'assessment', label: { en: 'An assessment of what I already hold', zh: '对我已经掌握的材料的评估' } },
  { value: 'other', label: { en: 'Something else', zh: '其他' } },
];

export const CONSULT_BUDGETS: IntakeOption[] = [
  { value: 'under50', label: { en: 'Under 50,000', zh: '5 万美元以内' } },
  { value: '50to100', label: { en: '50,000 to 100,000', zh: '5 万至 10 万美元' } },
  { value: '100to150', label: { en: '100,000 to 150,000', zh: '10 万至 15 万美元' } },
  { value: 'over150', label: { en: 'Over 150,000', zh: '15 万美元以上' } },
  { value: 'unknown', label: { en: 'Not sure yet', zh: '还不确定' } },
  { value: 'skip', label: { en: 'Prefer not to say', zh: '暂不方便说' } },
];

export type ConsultChrome = {
  nameLabel: string;
  namePlaceholder: string;
  emailLabel: string;
  emailPlaceholder: string;
  interestLabel: string;
  budgetLabel: string;
  /** Says whose number it is, so the list is not read as a price published by this site. */
  budgetHint: string;
  messageLabel: string;
  optional: string;
  required: string;
  messagePlaceholder: string;
  selectPlaceholder: string;
  submit: string;
  previewHeading: string;
  copy: string;
  download: string;
  sendMail: string;
  statusIdle: string;
  needsLabel: string;
  needsWhy: string;
  lineName: string;
  lineEmail: string;
  lineInterest: string;
  lineBudget: string;
  lineMessage: string;
  lineNoMessage: string;
  lineFooter: string;
  exportHeading: string;
  filename: string;
  subjectFallback: string;
  needName: string;
  needEmail: string;
  needInterest: string;
  needBudget: string;
  badEmail: string;
  copied: string;
  clipboardBlocked: string;
  downloaded: string;
  submittedWithMail: string;
  submittedWithoutMail: string;
};

export const CONSULT_CHROME: Record<Lang, ConsultChrome> = {
  en: {
    nameLabel: 'Full name',
    namePlaceholder: 'Your name',
    emailLabel: 'Email address',
    emailPlaceholder: 'you@example.com',
    interestLabel: 'What are you most interested in?',
    budgetLabel: 'Your budget range (USD)',
    budgetHint: 'The band you are planning around, not a figure this site estimates. Prefer not to say is an answer.',
    messageLabel: 'Tell us more about your situation or questions',
    optional: '(optional)',
    required: '*',
    messagePlaceholder: 'For example: the destinations in view, the timeline, and the question you are stuck on',
    selectPlaceholder: 'Select an option',
    submit: 'Submit your inquiry',
    previewHeading: 'The exact message',
    copy: 'Copy it',
    download: 'Download as a file',
    sendMail: 'Open in my mail app',
    statusIdle:
      'This site is a static build with no server, so pressing the button cannot send anything. It assembles your enquiry below, where you read it before it goes anywhere.',
    needsLabel: 'the address enquiries are sent to',
    needsWhy: 'set SITE.contactEmail in src/const.ts and the button opens your mail app with this enquiry already written',
    lineName: 'Name: {value}',
    lineEmail: 'Reply to: {value}',
    lineInterest: 'Most interested in: {value}',
    lineBudget: 'Planning band (USD): {value}',
    lineMessage: 'What I want worked out: {value}',
    lineNoMessage: 'What I want worked out: stated above, in the topic I picked.',
    lineFooter: 'Sent from SurrogacyBase. No identity documents, medical records or payment details are included.',
    exportHeading: 'Surrogacy enquiry',
    filename: 'surrogacybase-enquiry.md',
    subjectFallback: 'Surrogacy enquiry',
    needName: 'Add the name the reply should address.',
    needEmail: 'Add an email address so there is a reply route.',
    needInterest: 'Pick the topic. It decides which of your questions the reply is written against.',
    needBudget: 'Pick a band, or pick Prefer not to say. The reply does not depend on the figure.',
    badEmail: 'That does not look like an email address. Check it so the reply has somewhere to go.',
    copied: 'Copied. The enquiry is on your clipboard, and this browser still holds the draft.',
    clipboardBlocked:
      'Your browser would not give the page clipboard access. Select the message above and copy it by hand, or download the file.',
    downloaded: 'Downloaded as {file}. The draft stays in this browser.',
    submittedWithMail:
      'Your mail app has opened with the enquiry written below. Nothing is sent until you press send there.',
    submittedWithoutMail:
      'Nothing has been sent, because this site has no server and no enquiry address is listed yet. Copy the message above or download it, and it will reach us the same way.',
  },
  zh: {
    nameLabel: '姓名',
    namePlaceholder: '你的称呼',
    emailLabel: '邮箱地址',
    emailPlaceholder: '你会查看的邮箱',
    interestLabel: '你最想了解哪一项？',
    budgetLabel: '你的预算区间（美元）',
    budgetHint: '这是你自己规划用的区间，不是本站估算出来的数字。选「暂不方便说」也是一个回答。',
    messageLabel: '再多说说你的情况或问题',
    optional: '（选填）',
    required: '必填',
    messagePlaceholder: '例如：正在考虑的目的地、时间线，以及你卡住的那个问题',
    selectPlaceholder: '请选择',
    submit: '提交问询',
    previewHeading: '实际发送的正文',
    copy: '复制',
    download: '下载为文件',
    sendMail: '在我的邮件应用中打开',
    statusIdle: '本站是一个静态构建，没有服务器，所以按下按钮不会发出任何东西。它会先在下面组装好你的问询，让你在看过之后再决定它去哪里。',
    needsLabel: '问询的收件地址',
    needsWhy: '在 src/const.ts 里设置 SITE.contactEmail，这个按钮就会带着下面这份写好的问询打开你的邮件应用',
    lineName: '姓名：{value}',
    lineEmail: '回复至：{value}',
    lineInterest: '最想了解：{value}',
    lineBudget: '规划区间（美元）：{value}',
    lineMessage: '想要理清的：{value}',
    lineNoMessage: '想要理清的：见上面我选择的那个主题。',
    lineFooter: '本邮件由 SurrogacyBase 发出，其中不包含身份证件、病历或付款信息。',
    exportHeading: '代孕问询',
    filename: 'surrogacybase-enquiry-zh.md',
    subjectFallback: '代孕问询',
    needName: '请填写希望我们如何称呼你。',
    needEmail: '请填写邮箱地址，回复才有地方可去。',
    needInterest: '请选择一个主题。它决定了回复要针对你的哪个问题来写。',
    needBudget: '选一个区间，或者选「暂不方便说」。回复并不取决于这个数字。',
    badEmail: '这看起来不像一个邮箱地址。请核对一下，回复才有地方可去。',
    copied: '已复制。这封问询现在在你的剪贴板里，而这个浏览器仍然保留着草稿。',
    clipboardBlocked: '你的浏览器没有把剪贴板权限交给这个页面。请在上面选中正文后手动复制，或者下载为文件。',
    downloaded: '已下载为 {file}。草稿仍然留在这个浏览器里。',
    submittedWithMail: '你的邮件应用已经打开，里面写好了下面这份问询。在你于那里按下发送之前，什么都没有被发出。',
    submittedWithoutMail: '目前什么都没有发出，因为本站没有服务器，而且尚未登记问询地址。复制上面的正文或把它下载下来，同样能交到我们手里。',
  },
};

export type IntakeChrome = {
  title: string;
  intro: string;
  stageLabel: string;
  placesLabel: string;
  optional: string;
  placesPlaceholder: string;
  holderLabel: string;
  holderHint: string;
  questionLabel: string;
  questionPlaceholder: string;
  questionHelp: string;
  replyLabel: string;
  replyNote: string;
  replyPlaceholder: string;
  replyHelp: string;
  /** Wraps the list of things that must not be included. */
  doNotInclude: string;
  excluded: string[];
  /**
   * Sits between the excluded items. English uses a semicolon and a space; the Chinese
   * enumeration comma already carries its own spacing.
   */
  excludedJoin: string;
  sendMail: string;
  copy: string;
  download: string;
  statusIdle: string;
  previewHeading: string;
  needsLabel: string;
  needsWhy: string;
  /** The lines written into the assembled message. */
  lineStage: string;
  lineInview: string;
  lineHolder: string;
  lineQuestion: string;
  lineReply: string;
  lineFooter: string;
  /** Headings and file names are assembled in the script; only the wording lives here. */
  exportHeading: string;
  filename: string;
  subjectFallback: string;
  needQuestion: string;
  needReply: string;
  copied: string;
  clipboardBlocked: string;
  downloaded: string;
};

export const INTAKE_CHROME: Record<Lang, IntakeChrome> = {
  en: {
    title: 'Write the enquiry down first',
    intro:
      'Four fields, and no personal identifiers. What you type is assembled into a message you send yourself, so the question reaches the right party in a form they can answer.',
    stageLabel: 'Where you are now',
    placesLabel: 'Countries or programs in view',
    optional: '(optional)',
    placesPlaceholder: 'For example: Georgia and Canada, or one named program',
    holderLabel: 'Who holds the answer now',
    holderHint: 'The party you are already dealing with decides which of your questions are theirs to answer.',
    questionLabel: 'What you need worked out',
    questionPlaceholder:
      'One or two sentences: the decision you are stuck on, and what the document in front of you fails to state.',
    questionHelp:
      'Write the question, not the case file. Anything you would not want repeated back to you in an email belongs outside this box.',
    replyLabel: 'Reply address',
    replyNote: '(used only to answer you)',
    replyPlaceholder: 'An address you read',
    replyHelp: 'Kept in this browser until you send the enquiry. No list, no newsletter, no account.',
    doNotInclude: 'Do not include: {list}.',
    excluded: [
      'identity documents or passport numbers',
      'medical records, scans or treatment protocols',
      'embryo, donor or surrogate identifying details',
      'bank, card or account information',
    ],
    excludedJoin: '; ',
    sendMail: 'Open in my mail app',
    copy: 'Copy the enquiry',
    download: 'Download as a file',
    statusIdle:
      'Nothing has been sent yet. The draft is kept in this browser so it survives a reload, and these buttons hand it to your mail app, your clipboard or a file.',
    previewHeading: 'The exact message',
    needsLabel: 'the address enquiries are sent to',
    needsWhy:
      'set SITE.contactEmail in src/const.ts and the mail button goes live; copy and download already work',
    lineStage: 'Where I am: {value}',
    lineInview: 'In view: {value}',
    lineHolder: 'Who holds it now: {value}',
    lineQuestion: 'What I need worked out: {value}',
    lineReply: 'Reply to: {value}',
    lineFooter: 'Sent from SurrogacyBase. No identity, medical or payment details are included.',
    exportHeading: 'Assessment enquiry',
    filename: 'surrogacy-assessment-enquiry.md',
    subjectFallback: 'Assessment enquiry',
    needQuestion: 'Write the question first. An enquiry with no question in it cannot be answered.',
    needReply: 'Add the address to reply to. Without it the enquiry has nowhere to go back to.',
    copied: 'Copied. The enquiry is on your clipboard, and this browser still holds the draft.',
    clipboardBlocked:
      'Your browser would not give the page clipboard access. Select the message below and copy it by hand, or download the file.',
    downloaded: 'Downloaded as {file}. The draft stays in this browser.',
  },
  zh: {
    title: '先把问询写成文字',
    intro: '一共四项，不收集任何身份信息。你填写的内容会被组装成一封由你自己发送的邮件，这样问题才会以对方能够回答的形式，交到对的那一方手里。',
    stageLabel: '你此刻在哪个阶段',
    placesLabel: '正在考虑的国家或项目',
    optional: '（选填）',
    placesPlaceholder: '例如：格鲁吉亚与加拿大，或某一个点名项目',
    holderLabel: '现在由谁持有答案',
    holderHint: '你已经在和哪一方打交道，决定了你的哪些问题本该由他来回答。',
    questionLabel: '你需要有人帮你理清什么',
    questionPlaceholder: '一两句话：你卡住的那个决定，以及你手上那份文件没有写明什么。',
    questionHelp: '写下问题，不要写案卷。任何你不希望在邮件里被复述一遍的内容，都不要放进这个框。',
    replyLabel: '回复地址',
    replyNote: '（仅用于回复你）',
    replyPlaceholder: '一个你会查看的地址',
    replyHelp: '在你发出问询之前，它只保存在这个浏览器里。不进列表、不发简报、不建账号。',
    doNotInclude: '请勿包含：{list}。',
    excluded: ['身份证件或护照号码', '病历、检查影像或治疗方案', '胚胎、供体或孕母的身份信息', '银行、卡片或账户信息'],
    excludedJoin: '、',
    sendMail: '在我的邮件应用中打开',
    copy: '复制这封问询',
    download: '下载为文件',
    statusIdle: '目前还没有发出任何内容。草稿保存在这个浏览器里，重新加载页面也不会丢失；下面这几个按钮会把它交给你的邮件应用、剪贴板或一个文件。',
    previewHeading: '实际发送的正文',
    needsLabel: '问询的收件地址',
    needsWhy: '在 src/const.ts 里设置 SITE.contactEmail，邮件按钮就会启用；复制与下载现在已经可用',
    lineStage: '我此刻的阶段：{value}',
    lineInview: '正在考虑：{value}',
    lineHolder: '目前由谁持有：{value}',
    lineQuestion: '需要理清的问题：{value}',
    lineReply: '回复至：{value}',
    lineFooter: '本邮件由 SurrogacyBase 发出，其中不包含身份、医疗或付款信息。',
    exportHeading: '评估服务问询',
    filename: 'surrogacy-assessment-enquiry-zh.md',
    subjectFallback: '评估服务问询',
    needQuestion: '请先写下问题。一封没有问题在里面的问询，没有人能够回答。',
    needReply: '请补上要回复到的地址。没有它，这封问询就没有可以回信的地方。',
    copied: '已复制。这封问询现在在你的剪贴板里，而这个浏览器仍然保留着草稿。',
    clipboardBlocked: '你的浏览器没有把剪贴板权限交给这个页面。请在下面选中正文后手动复制，或者下载为文件。',
    downloaded: '已下载为 {file}。草稿仍然留在这个浏览器里。',
  },
};
