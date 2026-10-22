import type { Lang } from '@/i18n/config';

/*
 * The enquiry form's wording, in both languages.
 *
 * The form posts to /api/enquiry. When delivery is not configured or fails, it does not claim
 * the message was sent: it composes the enquiry in the browser and offers the reader a mail
 * app, the clipboard or a downloaded file. The lines the script needs at runtime are
 * serialized into the DOM, so both languages share one bundle.
 *
 * The field set follows the one a reader arrives with: a reply address, the question, and how
 * they prefer to be reached. Only the email address and the question are required. A phone
 * number and a messaging handle are optional, because asking for a channel the reader does not
 * use is a reason to abandon the form, not a way to make the reply more likely.
 */

export type ConsultChrome = {
  nameLabel: string;
  namePlaceholder: string;
  emailLabel: string;
  emailPlaceholder: string;
  phoneLabel: string;
  phonePlaceholder: string;
  platformLabel: string;
  platformNone: string;
  platformOptions: { value: string; label: string }[];
  handleLabel: string;
  handlePlaceholder: string;
  messageLabel: string;
  optional: string;
  required: string;
  messagePlaceholder: string;
  consentBefore: string;
  consentLink: string;
  consentAfter: string;
  submit: string;
  submitting: string;
  statusIdle: string;
  previewSummary: string;
  previewHeading: string;
  copy: string;
  download: string;
  sendMail: string;
  successHeading: string;
  successBody: string;
  sendAnother: string;
  lineName: string;
  lineEmail: string;
  linePhone: string;
  linePlatform: string;
  lineHandle: string;
  lineMessage: string;
  lineSource: string;
  lineFooter: string;
  exportHeading: string;
  filename: string;
  subjectFallback: string;
  invalidStatus: string;
  needEmail: string;
  badEmail: string;
  badPhone: string;
  needPlatform: string;
  needHandle: string;
  needMessage: string;
  needConsent: string;
  fallbackStatus: string;
  copied: string;
  clipboardBlocked: string;
  downloaded: string;
};

export const CONSULT_CHROME: Record<Lang, ConsultChrome> = {
  en: {
    nameLabel: 'Your name',
    namePlaceholder: 'How the reply should address you',
    emailLabel: 'Email address',
    emailPlaceholder: 'you@example.com',
    phoneLabel: 'Phone',
    phonePlaceholder: 'Include the country code',
    platformLabel: 'Messaging app',
    platformNone: 'No messaging app',
    platformOptions: [
      { value: 'wechat', label: 'WeChat' },
      { value: 'whatsapp', label: 'WhatsApp' },
      { value: 'telegram', label: 'Telegram' },
      { value: 'line', label: 'LINE' },
      { value: 'signal', label: 'Signal' },
      { value: 'other', label: 'Other' },
    ],
    handleLabel: 'Handle or number',
    handlePlaceholder: 'The name or number to reach you on',
    messageLabel: 'What would you like worked out?',
    optional: '(optional)',
    required: '*',
    messagePlaceholder:
      'For example: the destinations in view, the timeline, and the question you are stuck on',
    consentBefore: 'I agree to SurrogacyBase using these details to reply to this enquiry, as described in the ',
    consentLink: 'privacy policy',
    consentAfter: '.',
    submit: 'Send enquiry',
    submitting: 'Sending',
    statusIdle: 'Nothing is sent until you press send. Your draft stays in this browser.',
    previewSummary: 'Review the text before sending',
    previewHeading: 'The message',
    copy: 'Copy it',
    download: 'Download as a file',
    sendMail: 'Open in my mail app',
    successHeading: 'Your enquiry has been received',
    successBody: 'It is in our internal inbox. You will not be added to a mailing list.',
    sendAnother: 'Send another enquiry',
    lineName: 'Name: {value}',
    lineEmail: 'Reply to: {value}',
    linePhone: 'Phone: {value}',
    linePlatform: 'Messaging app: {value}',
    lineHandle: 'Handle: {value}',
    lineMessage: 'What I want worked out: {value}',
    lineSource: 'Sent from: {value}',
    lineFooter:
      'Sent from SurrogacyBase. No identity documents, medical records or payment details are included.',
    exportHeading: 'Surrogacy enquiry',
    filename: 'surrogacybase-enquiry.md',
    subjectFallback: 'Surrogacy enquiry',
    invalidStatus: 'Check the marked fields.',
    needEmail: 'Add an email address so there is a reply route.',
    badEmail: 'That does not look like an email address.',
    badPhone: 'Check the phone number, including the country code.',
    needPlatform: 'Choose the app this handle belongs to.',
    needHandle: 'Add the handle for the app you chose.',
    needMessage: 'Write the question you want answered.',
    needConsent: 'Confirm that we may use these details to reply.',
    fallbackStatus:
      'Automatic delivery did not confirm receipt, so this enquiry has not been marked as sent. The message below is ready: open it in your mail app, copy it, or download it.',
    copied: 'Copied. The enquiry is on your clipboard.',
    clipboardBlocked:
      'Your browser would not give the page clipboard access. Select the message above and copy it by hand, or download the file.',
    downloaded: 'Downloaded as {file}.',
  },
  zh: {
    nameLabel: '您的称呼',
    namePlaceholder: '希望回信怎样称呼您',
    emailLabel: '邮箱地址',
    emailPlaceholder: '您会查看的邮箱',
    phoneLabel: '电话',
    phonePlaceholder: '请包含国家代码',
    platformLabel: '即时通讯',
    platformNone: '不使用即时通讯',
    platformOptions: [
      { value: 'wechat', label: '微信' },
      { value: 'whatsapp', label: 'WhatsApp' },
      { value: 'telegram', label: 'Telegram' },
      { value: 'line', label: 'LINE' },
      { value: 'signal', label: 'Signal' },
      { value: 'other', label: '其他' },
    ],
    handleLabel: '账号或号码',
    handlePlaceholder: '用于联系您的账号或号码',
    messageLabel: '您想理清什么？',
    optional: '（选填）',
    required: '*',
    messagePlaceholder: '例如：正在考虑的目的地、时间线，以及您卡住的那个问题',
    consentBefore: '我同意 SurrogacyBase 依据',
    consentLink: '隐私政策',
    consentAfter: '，使用这些信息回复本次问询。',
    submit: '发送问询',
    submitting: '正在发送',
    statusIdle: '在您按下发送之前，什么都不会发出。草稿会留在这个浏览器里。',
    previewSummary: '发送前查看正文',
    previewHeading: '问询正文',
    copy: '复制',
    download: '下载为文件',
    sendMail: '在我的邮件应用中打开',
    successHeading: '您的问询已收到',
    successBody: '它已经进入我们的内部收件箱。您不会被加入任何邮件列表。',
    sendAnother: '再发一份问询',
    lineName: '称呼：{value}',
    lineEmail: '回复至：{value}',
    linePhone: '电话：{value}',
    linePlatform: '即时通讯：{value}',
    lineHandle: '账号：{value}',
    lineMessage: '想要理清的：{value}',
    lineSource: '来自页面：{value}',
    lineFooter: '本问询由 SurrogacyBase 发出，其中不包含身份证件、病历或付款信息。',
    exportHeading: '代孕问询',
    filename: 'surrogacybase-enquiry-zh.md',
    subjectFallback: '代孕问询',
    invalidStatus: '请检查标出的栏目。',
    needEmail: '请填写邮箱地址，回复才有地方可去。',
    badEmail: '这看起来不像一个邮箱地址。',
    badPhone: '请核对电话号码，包括国家代码。',
    needPlatform: '请选择这个账号所属的应用。',
    needHandle: '请填写您所选应用的账号。',
    needMessage: '请写下您希望得到回答的问题。',
    needConsent: '请确认我们可以使用这些信息回复您。',
    fallbackStatus:
      '自动投递未能确认送达，因此这份问询尚未被标记为已发送。下面这份正文已经准备好：用您的邮件应用打开、复制，或下载它。',
    copied: '已复制。问询现在在您的剪贴板里。',
    clipboardBlocked: '您的浏览器没有把剪贴板权限交给这个页面。请在上面选中正文后手动复制，或者下载为文件。',
    downloaded: '已下载为 {file}。',
  },
};
