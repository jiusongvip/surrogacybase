import type { Lang } from '@/i18n/config';

/*
 * The enquiry form's wording, in both languages.
 *
 * The form cannot submit anything: it assembles what you type into a message and hands it to
 * your own mail app, clipboard or file. Most of this dictionary is therefore rendered by the
 * page, but the lines that get written into that message are needed again at runtime, so the
 * component serializes them into the DOM rather than duplicating them in the script.
 *
 * Three fields, and no more: an address for the reply, the question, and a name for whoever
 * wants the reply addressed to someone. A topic list and a budget band used to sit here too.
 * Both sorted the enquiry for whoever receives it rather than for whoever writes it, and the
 * message text carries either whenever it actually matters.
 */

export type ConsultChrome = {
  nameLabel: string;
  namePlaceholder: string;
  emailLabel: string;
  emailPlaceholder: string;
  messageLabel: string;
  optional: string;
  required: string;
  messagePlaceholder: string;
  submit: string;
  previewHeading: string;
  copy: string;
  download: string;
  sendMail: string;
  statusIdle: string;
  lineName: string;
  lineEmail: string;
  lineMessage: string;
  lineFooter: string;
  exportHeading: string;
  filename: string;
  subjectFallback: string;
  needEmail: string;
  needMessage: string;
  badEmail: string;
  copied: string;
  clipboardBlocked: string;
  downloaded: string;
  submittedWithMail: string;
  submittedWithoutMail: string;
};

export const CONSULT_CHROME: Record<Lang, ConsultChrome> = {
  en: {
    nameLabel: 'Your name',
    namePlaceholder: 'How the reply should address you',
    emailLabel: 'Email address',
    emailPlaceholder: 'you@example.com',
    messageLabel: 'What would you like worked out?',
    optional: '(optional)',
    required: '*',
    messagePlaceholder:
      'For example: the destinations in view, the timeline, and the question you are stuck on',
    submit: 'Submit your inquiry',
    previewHeading: 'The exact message',
    copy: 'Copy it',
    download: 'Download as a file',
    sendMail: 'Open in my mail app',
    statusIdle:
      'Nothing is sent when you press this button, because this site has no server. It writes your enquiry below from what you entered, so you read it before it goes anywhere.',
    lineName: 'Name: {value}',
    lineEmail: 'Reply to: {value}',
    lineMessage: 'What I want worked out: {value}',
    lineFooter: 'Sent from SurrogacyBase. No identity documents, medical records or payment details are included.',
    exportHeading: 'Surrogacy enquiry',
    filename: 'surrogacybase-enquiry.md',
    subjectFallback: 'Surrogacy enquiry',
    needEmail: 'Add an email address so there is a reply route.',
    needMessage: 'Write the question. Without it there is nothing for a reply to answer.',
    badEmail: 'That does not look like an email address. Check it so the reply has somewhere to go.',
    copied: 'Copied. The enquiry is on your clipboard, and this browser still holds the draft.',
    clipboardBlocked:
      'Your browser would not give the page clipboard access. Select the message above and copy it by hand, or download the file.',
    downloaded: 'Downloaded as {file}. The draft stays in this browser.',
    submittedWithMail:
      'Your mail app has opened with the enquiry written below. Nothing is sent until you press send there.',
    submittedWithoutMail:
      'Nothing has been sent, because this site has no server. The message above is your enquiry: copy it or download it, and send it yourself.',
  },
  zh: {
    nameLabel: '您的称呼',
    namePlaceholder: '希望回信怎样称呼您',
    emailLabel: '邮箱地址',
    emailPlaceholder: '您会查看的邮箱',
    messageLabel: '您想理清什么？',
    optional: '（选填）',
    required: '*',
    messagePlaceholder: '例如：正在考虑的目的地、时间线，以及您卡住的那个问题',
    submit: '提交问询',
    previewHeading: '实际发送的正文',
    copy: '复制',
    download: '下载为文件',
    sendMail: '在我的邮件应用中打开',
    statusIdle: '按下这个按钮不会发出任何东西，因为本站没有服务器。它会先用您填的内容在下面组装好问询，让您在看过之后再决定它去哪里。',
    lineName: '称呼：{value}',
    lineEmail: '回复至：{value}',
    lineMessage: '想要理清的：{value}',
    lineFooter: '本邮件由 SurrogacyBase 发出，其中不包含身份证件、病历或付款信息。',
    exportHeading: '代孕问询',
    filename: 'surrogacybase-enquiry-zh.md',
    subjectFallback: '代孕问询',
    needEmail: '请填写邮箱地址，回复才有地方可去。',
    needMessage: '请写下您的问题。没有它，回复就无从回答。',
    badEmail: '这看起来不像一个邮箱地址。请核对一下，回复才有地方可去。',
    copied: '已复制。这封问询现在在您的剪贴板里，而这个浏览器仍然保留着草稿。',
    clipboardBlocked: '您的浏览器没有把剪贴板权限交给这个页面。请在上面选中正文后手动复制，或者下载为文件。',
    downloaded: '已下载为 {file}。草稿仍然留在这个浏览器里。',
    submittedWithMail: '您的邮件应用已经打开，里面写好了下面这份问询。在您于那里按下发送之前，什么都没有被发出。',
    submittedWithoutMail: '目前什么都没有发出，因为本站没有服务器。上面这份正文就是您的问询：复制它或把它下载下来，由您自己发出去。',
  },
};
