import type { Lang } from '@/i18n/config';

/*
 * The enquiry form's wording, in both languages.
 *
 * Only the structure is borrowed from the consultation forms in this category: a mobile number,
 * one messaging account to reach the reader on, then a name and a question if they want to add
 * them. Both contact fields are required and the two extras are not. That layout is a convention
 * readers already know, so following it costs nothing.
 *
 * The sentences are this site's own, and deliberately not the ones those forms use. Their copy
 * sells a service — "an advisor answers all your concerns", "fill it in with confidence" — and
 * this site publishes information rather than advice and answers enquiries from an advisor who
 * writes it. Repeating their lines would promise something the rest of the site spends its words
 * refusing to promise.
 *
 * The form posts to /api/enquiry. When delivery is not configured or fails, it does not claim the
 * message was sent: it composes the enquiry in the browser and offers the reader a mail app, the
 * clipboard or a downloaded file. The lines the script needs at runtime are serialized into the
 * DOM, so both languages share one bundle.
 *
 * Two lines were dropped rather than reworded. The optional marker no longer repeats on the two
 * labels under the rule that already says "the following are optional", and the consent line stops
 * at the consent: it used to hang a clause about what the details are used for off a semicolon, and
 * that clause was already printed under the contact fields.
 */

export type ConsultChannel = { value: string; label: string; hint: string };

export type ConsultChrome = {
  phoneLabel: string;
  dialLabel: string;
  dials: string[];
  phonePlaceholder: string;
  channelLabel: string;
  channelHint: string;
  /** The accessible name of the account field, which carries no visible label of its own. */
  handleLabel: string;
  channelNotice: string;
  channels: ConsultChannel[];
  optionalHeading: string;
  /** The way out for a reader who uses none of the five apps, printed under the send button. */
  mailNoteBefore: string;
  mailNoteAfter: string;
  nameLabel: string;
  namePlaceholder: string;
  messageLabel: string;
  messagePlaceholder: string;
  required: string;
  consentBefore: string;
  consentLink: string;
  consentAfter: string;
  submit: string;
  submitting: string;
  previewHeading: string;
  copy: string;
  download: string;
  sendMail: string;
  successHeading: string;
  successBody: string;
  sendAnother: string;
  lineName: string;
  linePhone: string;
  lineChannel: string;
  lineHandle: string;
  lineMessage: string;
  lineSource: string;
  lineFooter: string;
  exportHeading: string;
  filename: string;
  subjectFallback: string;
  invalidStatus: string;
  needPhone: string;
  badPhone: string;
  needChannel: string;
  needHandle: string;
  needConsent: string;
  fallbackStatus: string;
  copied: string;
  clipboardBlocked: string;
  downloaded: string;
};

export const CONSULT_CHROME: Record<Lang, ConsultChrome> = {
  en: {
    phoneLabel: 'Mobile number',
    dialLabel: 'Country code',
    dials: ['+1', '+44', '+61', '+852', '+65', '+86', '+886'],
    phonePlaceholder: 'Your mobile number',
    channelLabel: 'How to reach you',
    channelHint: '(choose one)',
    handleLabel: 'Your account or number on the app you chose',
    channelNotice: 'The number and account you leave are used to answer this enquiry, and nothing else.',
    channels: [
      { value: 'whatsapp', label: 'WhatsApp', hint: 'Number with country code' },
      { value: 'telegram', label: 'Telegram', hint: '@username' },
      { value: 'line', label: 'LINE', hint: 'LINE ID' },
      { value: 'messenger', label: 'Messenger', hint: 'Profile name or link' },
      { value: 'wechat', label: 'WeChat', hint: 'WeChat ID' },
    ],
    optionalHeading: 'The following are optional',
    mailNoteBefore: 'Not on any of these apps? Write to',
    mailNoteAfter: ' instead.',
    nameLabel: 'Your name',
    namePlaceholder: 'What the reply should call you',
    messageLabel: 'What would you like to know?',
    messagePlaceholder:
      'The countries or timeline you are weighing, or the question you have not settled yet',
    required: '*',
    consentBefore: 'I have read the ',
    consentLink: 'privacy policy',
    consentAfter: '.',
    submit: 'Get a free consultation',
    submitting: 'Sending',
    previewHeading: 'The message',
    copy: 'Copy it',
    download: 'Download as a file',
    sendMail: 'Open in my mail app',
    successHeading: 'Your enquiry has been received',
    successBody:
      'It is in our inbox. An advisor reads every enquiry and contacts you within 24 hours on the number or account you left. You will not be added to a mailing list.',
    sendAnother: 'Send another enquiry',
    lineName: 'Name: {value}',
    linePhone: 'Mobile: {value}',
    lineChannel: 'Reach me on: {value}',
    lineHandle: 'Account: {value}',
    lineMessage: 'What I want worked out: {value}',
    lineSource: 'Sent from: {value}',
    lineFooter:
      'Sent from SurrogacyBase. No identity documents, medical records or payment details are included.',
    exportHeading: 'Surrogacy enquiry',
    filename: 'surrogacybase-enquiry.md',
    subjectFallback: 'Surrogacy enquiry',
    invalidStatus: 'Check the marked fields.',
    needPhone: 'Add a mobile number: it is how the advisor reaches you.',
    badPhone: 'Check the number, including the country code.',
    needChannel: 'Choose one way to be reached.',
    needHandle: 'Add the number or account for the app you chose.',
    needConsent: 'Confirm that we may use these details to reply.',
    fallbackStatus:
      'Automatic delivery did not confirm receipt, so this enquiry has not been marked as sent. The message below is ready: open it in your mail app, copy it, or download it.',
    copied: 'Copied. The enquiry is on your clipboard.',
    clipboardBlocked:
      'Your browser would not give the page clipboard access. Select the message above and copy it by hand, or download the file.',
    downloaded: 'Downloaded as {file}.',
  },
  zh: {
    phoneLabel: '手机号',
    dialLabel: '国家/地区代码',
    dials: ['+86', '+852', '+886', '+65', '+1', '+44', '+61'],
    phonePlaceholder: '您的手机号码',
    channelLabel: '联系方式',
    channelHint: '（选一种）',
    handleLabel: '您所选应用里的账号或号码',
    channelNotice: '留下的手机号和账号，只用来回复您的咨询。',
    channels: [
      { value: 'wechat', label: '微信', hint: '微信号' },
      { value: 'whatsapp', label: 'WhatsApp', hint: '带国家代码的号码' },
      { value: 'line', label: 'LINE', hint: 'LINE ID' },
      { value: 'telegram', label: 'Telegram', hint: '@用户名' },
      { value: 'messenger', label: 'Messenger', hint: '昵称或主页链接' },
    ],
    optionalHeading: '以下几项为选填',
    mailNoteBefore: '没有任何一种即时通讯？也可以直接写信到',
    mailNoteAfter: '。',
    nameLabel: '姓名',
    namePlaceholder: '回信时怎么称呼您',
    messageLabel: '咨询内容',
    messagePlaceholder: '正在考虑的国家、时间线，或者还没想清楚的那个问题',
    required: '*',
    consentBefore: '我已阅读并同意',
    consentLink: '隐私政策',
    consentAfter: '。',
    submit: '立即免费咨询',
    submitting: '正在提交',
    previewHeading: '咨询正文',
    copy: '复制',
    download: '下载为文件',
    sendMail: '在我的邮件应用中打开',
    successHeading: '您的咨询已收到',
    successBody: '它已经进入我们的收件箱。顾问会阅读每一封咨询，并在 24 小时内通过您留下的号码或账号与您联系。您不会被加入任何邮件列表。',
    sendAnother: '再发一份咨询',
    lineName: '称呼：{value}',
    linePhone: '手机：{value}',
    lineChannel: '联系方式：{value}',
    lineHandle: '账号：{value}',
    lineMessage: '想要理清的：{value}',
    lineSource: '来自页面：{value}',
    lineFooter: '本咨询由 SurrogacyBase 发出，其中不包含身份证件、病历或付款信息。',
    exportHeading: '代孕咨询',
    filename: 'surrogacybase-enquiry-zh.md',
    subjectFallback: '代孕咨询',
    invalidStatus: '请检查标出的栏目。',
    needPhone: '请填写手机号码，顾问需要通过它联系您。',
    badPhone: '请核对手机号码，包括国家/地区代码。',
    needChannel: '请选择一种联系方式。',
    needHandle: '请填写该方式下可以联系到您的号码或账号。',
    needConsent: '请确认我们可以使用这些信息回复您。',
    fallbackStatus:
      '自动投递未能确认送达，因此这份咨询尚未被标记为已发送。下面这份正文已经准备好：用您的邮件应用打开、复制，或下载它。',
    copied: '已复制。咨询现在在您的剪贴板里。',
    clipboardBlocked: '您的浏览器没有把剪贴板权限交给这个页面。请在上面选中正文后手动复制，或者下载为文件。',
    downloaded: '已下载为 {file}。',
  },
};
