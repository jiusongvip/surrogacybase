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
      'Nothing is sent when you press this button, because this site has no server. It writes your enquiry below from what you entered, so you read it before it goes anywhere.',
    needsLabel: 'the address enquiries are sent to',
    needsWhy:
      'No address for receiving enquiries has been published yet. Copy the enquiry below or download it, and send it yourself.',
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
    namePlaceholder: '您的称呼',
    emailLabel: '邮箱地址',
    emailPlaceholder: '您会查看的邮箱',
    interestLabel: '您最想了解哪一项？',
    budgetLabel: '您的预算区间（美元）',
    budgetHint: '这是您自己规划用的区间，不是本站估算出来的数字。选「暂不方便说」也是一个回答。',
    messageLabel: '再多说说您的情况或问题',
    optional: '（选填）',
    required: '*',
    messagePlaceholder: '例如：正在考虑的目的地、时间线，以及您卡住的那个问题',
    selectPlaceholder: '请选择',
    submit: '提交问询',
    previewHeading: '实际发送的正文',
    copy: '复制',
    download: '下载为文件',
    sendMail: '在我的邮件应用中打开',
    statusIdle: '按下这个按钮不会发出任何东西，因为本站没有服务器。它会先用您填的内容在下面组装好问询，让您在看过之后再决定它去哪里。',
    needsLabel: '问询的收件地址',
    needsWhy: '本站还没有公布接收问询的地址。请复制下面的问询或把它下载下来，自己发出去。',
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
    needName: '请填写希望我们如何称呼您。',
    needEmail: '请填写邮箱地址，回复才有地方可去。',
    needInterest: '请选择一个主题。它决定了回复要针对您的哪个问题来写。',
    needBudget: '选一个区间，或者选「暂不方便说」。回复并不取决于这个数字。',
    badEmail: '这看起来不像一个邮箱地址。请核对一下，回复才有地方可去。',
    copied: '已复制。这封问询现在在您的剪贴板里，而这个浏览器仍然保留着草稿。',
    clipboardBlocked: '您的浏览器没有把剪贴板权限交给这个页面。请在上面选中正文后手动复制，或者下载为文件。',
    downloaded: '已下载为 {file}。草稿仍然留在这个浏览器里。',
    submittedWithMail: '您的邮件应用已经打开，里面写好了下面这份问询。在您于那里按下发送之前，什么都没有被发出。',
    submittedWithoutMail: '目前什么都没有发出，因为本站没有服务器，而且尚未登记问询地址。复制上面的正文或把它下载下来，同样能交到我们手里。',
  },
};
