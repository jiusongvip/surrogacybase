/*
 * The destination notes, in both languages.
 *
 * Each one is something the verified records actually said that a reader would otherwise
 * discover after committing: what a rule names rather than describes, what moves after the
 * birth rather than at it, and who has to be in the room. They used to be the output of a ten
 * question form. The form went; the findings did not, because none of them was about the person
 * answering.
 *
 * Every piece of wording is a { en, zh } pair rather than two parallel files, so the compiler
 * asks for a Chinese half of each note and cannot be handed a shortened translation. Two things
 * are deliberately not here:
 *   - The source of each legal statement. `cite` is a pointer into src/data/jurisdictions, and
 *     the component resolves it, so a citation url, publisher and date always come from the
 *     record rather than from a translation of it.
 *   - The internal links. `href` is written without a language prefix and localized on render,
 *     so a note on /zh points at the Chinese destination record and not at the English one.
 */
import type { Lang } from '@/i18n/config';
import type { Bilingual } from '@/i18n/ui';

export type DestinationNote = {
  id: string;
  title: Bilingual;
  body: Bilingual;
  /** Says what opening the linked page does for you, rather than naming the page. */
  link: Bilingual;
  href?: string;
  /** The jurisdiction record whose published fact this note rests on. */
  cite?: { code: string; fact: number };
};

export const DESTINATION_NOTES: DestinationNote[] = [
  {
    id: 'family-structure',
    title: {
      en: 'Family structure is a legal test in some places, not a preference',
      zh: '在某些地方，家庭结构是一项法律检验，而不是一种偏好',
    },
    body: {
      en: 'Where a rule names a couple, a single parent can fall outside it however the destination is described in a brochure. One United States state in the survey we checked writes the restriction the other way and adds two more tests: its route is confined to married, heterosexual intended parents who are genetic to the child.',
      zh: '如果一条规则点名的是伴侣，那么无论宣传册如何描述这个目的地，单身父母都可能落在规则之外。在我们核查的这项调查中，有一个美国州份把限制写成了相反的方向，并且额外增加两项检验：它的路径仅限于已婚的、异性恋的、且与孩子有基因联系的意向父母。',
    },
    link: { en: 'Read the United States record', zh: '阅读美国记录' },
    href: '/destinations/us',
    cite: { code: 'us', fact: 3 },
  },
  {
    id: 'two-of-you',
    title: {
      en: 'Being a couple does not automatically make you two legal parents',
      zh: '是伴侣并不会自动让您成为两个法律上的父母',
    },
    body: {
      en: 'Some systems name one intended parent at birth and require a second route for the other, and some write their rule around a heterosexual couple. The restriction we found in one United States state is exactly that: married, heterosexual intended parents, genetic to the child. Ask who is a parent at birth, then ask what the second parent has to do.',
      zh: '有些体系在出生时只确立一位意向父母，另一位需要另一条路径；有些体系把规则写在异性恋伴侣之上。我们在一个美国州份发现的限制正是如此：已婚、异性恋、并与孩子有基因联系的意向父母。先问出生时谁是父母，再问第二位父母需要做什么。',
    },
    link: { en: 'Read the United States record', zh: '阅读美国记录' },
    href: '/destinations/us',
    cite: { code: 'us', fact: 3 },
  },
  {
    id: 'unmarried',
    title: {
      en: 'An unmarried partner may not be a parent in the eyes of the destination',
      zh: '未婚伴侣在目的地的法律眼中可能不是父母',
    },
    body: {
      en: 'Some systems recognise a spouse and not a partner, which changes who has to apply after the birth and whether a second parent can be named at all. Ask which status the rule is written against before assuming the answer follows the relationship.',
      zh: '有些体系承认配偶而不承认伴侣，这会改变出生之后必须由谁提出申请，以及第二位父母能否被确立。先问规则写的是哪一种身份，再假设答案会跟着您的关系走。',
    },
    link: { en: 'Eligibility and parentage, question by question', zh: '逐条核对资格与亲权' },
    href: '/guides/surrogacy-legal-considerations',
  },
  {
    id: 'outside-the-usual-list',
    title: {
      en: 'A nationality outside the usual list makes recognition the first question, not the last',
      zh: '国籍在常见名单之外，承认问题就是第一个问题，而不是最后一个',
    },
    body: {
      en: 'The destination decides what happens at birth. The country whose passport the child will claim, or the country you will return to, decides whether that birth result is accepted there. Those are two legal systems and two lawyers.',
      zh: '目的地决定出生时发生什么。孩子将要申领护照的那个国家，或者您要返回的那个国家，决定那里是否接受这个出生结果。这是两套法律体系，也是两位律师。',
    },
    link: { en: 'What to ask before you shortlist', zh: '确定候选之前要问什么' },
    href: '/articles/questions-to-ask-about-surrogacy-law-before-choosing-a-destination',
  },
  {
    id: 'resident-not-citizen',
    title: {
      en: 'Living somewhere and being a citizen of it change different rules',
      zh: '居住在某地和是那里的公民，改变的是不同的规则',
    },
    body: {
      en: 'A rule about residents and a rule about citizens are not the same rule. Where you live tends to decide who will treat you and where the birth gets registered; what passport you hold tends to decide what the child can claim. Answering both with one sentence is how a shortlist goes wrong.',
      zh: '关于居民的规则和关于公民的规则不是同一条规则。您住在哪里通常决定了由谁来处理您、出生在哪里登记；您持有什么护照通常决定了孩子可以主张什么。用一句话回答这两个问题，候选名单就是这样出错的。',
    },
    link: { en: 'Recognition where you live', zh: '您居住地的承认问题' },
    href: '/guides/surrogacy-legal-considerations',
  },
  {
    id: 'donor-gametes',
    title: {
      en: 'A donor changes the medical route and can change the legal one',
      zh: '使用捐赠的生殖细胞会改变医疗路径，也可能改变法律路径',
    },
    body: {
      en: 'Whose egg, whose sperm and who carries the pregnancy are three separate decisions, and in some places a required genetic link is written into the rule itself. Settling this before a destination is shortlisted avoids committing to a route that closes on that question.',
      zh: '谁的卵子、谁的精子、谁来怀孕，是三个分开的决定，而在某些地方，必需的基因联系本身就写在规则里。在确定候选目的地之前先想清楚这一点，可以避免承诺一条会在这一问上关闭的路径。',
    },
    link: { en: 'Gamete and surrogate options', zh: '生殖细胞与代孕者的选择' },
    href: '/guides/gamete-and-surrogate-options',
  },
  {
    id: 'parentage-concern',
    title: {
      en: 'Where parentage moves after the birth, the wait is part of the plan',
      zh: '当亲权在出生之后才转移时，等待本身就是计划的一部分',
    },
    body: {
      en: 'In the United Kingdom the surrogate remains the legal mother at birth unless a parental order is obtained, and the arrangement itself is not enforceable. That is not a reason to rule the country out. It is a reason to know, before choosing anything, that a court application sits after the birth rather than before it.',
      zh: '在英国，除非取得亲权令，代孕者在出生时仍然是法律上的母亲，而且安排本身不具有可执行性。这不是把这个国家排除在外的理由。它是一个理由，让您在选定任何东西之前就知道：一份法院申请排在出生之后，而不是出生之前。',
    },
    link: { en: 'Read the United Kingdom record', zh: '阅读英国记录' },
    href: '/destinations/gb',
    cite: { code: 'gb', fact: 0 },
  },
  {
    id: 'cost-concern',
    title: { en: 'Compare item lists, not headline figures', zh: '比较费用条目，而不是报价总额' },
    body: {
      en: 'Two quotes that differ by forty per cent can contain the same medicine and differ on what happens after a failed transfer. What you are comparing is scope: which stages are covered, who bills outside them, and what comes back if the program stops.',
      zh: '两份相差百分之四十的报价可能包含同样的医疗内容，只是在移植失败之后如何处理上不同。您比较的是范围：覆盖哪些阶段、谁在其外另行计费，以及疗程停止时能退回什么。',
    },
    link: { en: 'Put two quotes side by side', zh: '把两份报价并排放' },
    href: '/tools/agency-quote-comparison',
  },
  {
    id: 'presence-concern',
    title: {
      en: 'Presence requirements are usually practice rather than published rule',
      zh: '到场要求通常是惯例，而不是公布的规则',
    },
    body: {
      en: 'How many trips, whose signature has to be witnessed, and how long the family must stay after the birth are rarely in the statute. They come from the clinic, the registrar and the court, and they change. Ask for them in writing from the person who will handle each step.',
      zh: '需要出行几次、谁的签字必须被见证、家庭在出生之后必须停留多久，这些很少写在法条里。它们来自诊所、登记处和法院，而且会变化。要求负责每一步的人把它们以书面形式给出。',
    },
    link: { en: 'The process, stage by stage', zh: '逐阶段看流程' },
    href: '/guides/surrogacy-process',
  },
  {
    id: 'medical-concern',
    title: {
      en: 'Verifying a provider is a documents exercise, not a website one',
      zh: '核实一个服务方靠的是文件，而不是网站',
    },
    body: {
      en: 'Who is accountable for the treatment, what the licence actually covers, what the clinic says happens after a failed cycle, and who the contract binds. Those are answerable questions, and the answers are documents rather than paragraphs of copy.',
      zh: '谁对治疗负责、牌照实际覆盖什么、诊所声称周期失败之后会怎样，以及合同约束的是谁。这些都是可以回答的问题，而答案是文件，不是一段段宣传文字。',
    },
    link: { en: 'How to evaluate an agency before you sign', zh: '签约之前如何评估一家机构' },
    href: '/guides/choosing-a-surrogacy-agency',
  },
  {
    id: 'eligibility-concern',
    title: {
      en: 'Eligibility has to be read as a rule, not as a track record',
      zh: '资格必须当作规则来读，而不是当作业绩',
    },
    body: {
      en: 'A provider’s history of placing families in your situation is evidence about practice. It is not the rule, and it is not a promise about your case. Ask which provision says who may commission, then ask a lawyer in that jurisdiction to confirm it applies to you.',
      zh: '一个机构安置过多少个与您情况相同的家庭，是关于惯例的证据。它不是规则，也不是关于您这个案例的承诺。先问哪一条规定写明谁可以委托，再请该辖区的律师确认它适用于您。',
    },
    link: { en: 'The destination records', zh: '目的地记录' },
    href: '/destinations',
  },
  {
    id: 'budget-unknown',
    title: { en: 'Build the cost list before the country list', zh: '先建费用清单，再建国家清单' },
    body: {
      en: 'Without an item list, every destination looks affordable and every quote looks complete. Canada shows why scope matters more than totals: paying a surrogate is prohibited, while reimbursement of her regulated expenses is permitted and documented, so the shape of the money is set by the law rather than by the market.',
      zh: '没有条目清单时，每个目的地都显得负担得起，每份报价都显得完整。加拿大说明了为什么范围比总额更要紧：向代孕者付款是被禁止的，而对她受监管的开支的报销是允许的、有文件依据的，因此资金结构由法律规定，而不是由市场决定。',
    },
    link: { en: 'The costs a quote leaves out', zh: '报价不包含的费用' },
    href: '/articles/surrogacy-costs-that-sit-outside-a-quote',
    cite: { code: 'ca', fact: 1 },
  },
  {
    id: 'budget-set',
    title: {
      en: 'A figure you already hold is worth testing against inclusions',
      zh: '您已拿到的报价总额，值得对照包含项核对一次',
    },
    body: {
      en: 'Write the number down next to what it is stated to cover, then list what it does not. The gap between those two lists is the budget you will actually need, and it is the part a comparison of headline prices hides.',
      zh: '把报价总额写下来，在旁边列出它声称覆盖的内容，再列出它不覆盖的内容。两份清单之间的差额才是您实际需要的预算，而这正是报价总额对比容易掩盖的部分。',
    },
    link: { en: 'What to budget for and what to verify', zh: '该为什么做预算、该核实什么' },
    href: '/guides/surrogacy-cost',
  },
  {
    id: 'travel-limited',
    title: {
      en: 'Travel limits narrow the field faster than budget does',
      zh: '旅行限制比预算更快地缩小范围',
    },
    body: {
      en: 'A stay of weeks after the birth, or two attended visits, rules out options for people who cannot leave for long. That is a real constraint and worth stating plainly at the first conversation rather than discovering it at the fourth.',
      zh: '出生之后停留数周，或者两次必须本人出席的到访，会让无法长时间离开的人失去一些选项。这是一个真实的约束，值得在第一次沟通时就明确提出，而不是到第四次才发现。',
    },
    link: { en: 'Ask how long the family must stay', zh: '问清家庭必须停留多久' },
    href: '/tools/destination-research-checklist',
  },
  {
    id: 'stage-exploring',
    title: {
      en: 'At this stage the goal is a shorter list of questions, not a shorter list of countries',
      zh: '在这一阶段，目标是问题清单变短，而不是国家清单变短',
    },
    body: {
      en: 'Learn how legal systems differ in shape first: which ones decide by statute, which by court decision, which region by region. Once the shapes make sense, a country name tells you what to expect instead of what to hope.',
      zh: '先了解法律体系在形态上有什么不同：哪些由成文法决定，哪些由法院判决决定，哪些按地区分别决定。一旦这些形态说得通，一个国家的名字就会告诉您该期待什么，而不是该希望什么。',
    },
    link: { en: 'The destination records', zh: '目的地记录' },
    href: '/destinations',
  },
  {
    id: 'stage-comparing',
    title: {
      en: 'Price alone is the wrong basis for comparing destinations',
      zh: '只按价格比较目的地，会忽略更关键的条件',
    },
    body: {
      en: 'Two destinations at the same cost can differ on whether you can be named at birth, how many trips are needed, and whether the money is protected while you wait. Compare the conditions one by one before you let the totals decide.',
      zh: '两个费用相同的目的地，可能在您能否在出生时就被确立、需要出行几次、以及等待期间资金是否受到保护上完全不同。先把条件逐条比完，再来比总额。',
    },
    link: { en: 'Compare them on the same questions', zh: '用同一组问题来比较它们' },
    href: '/tools/destination-research-checklist',
  },
  {
    id: 'stage-verifying',
    title: {
      en: 'With a target already named, work the checklist against it',
      zh: '已经点名了目标之后，就把清单对着它逐项过一遍',
    },
    body: {
      en: 'Take the destination you have in mind through every question that has an owner, and write beside each one who answered it and when, in the document you download from the checklist. A question you cannot get answered in writing is a finding in itself, and it is usually more informative than the answer a provider gives verbally.',
      zh: '带您心中的那个目的地过一遍每一个有归属人的问题，并在清单下载下来的文档里，于每个问题旁边写下它由谁回答、在何时回答。某个问题您无法以书面形式得到答案，这本身就是结论，而且它通常比机构口头给出的答案更有信息量。',
    },
    link: { en: 'Open the research checklist', zh: '打开研究清单' },
    href: '/tools/destination-research-checklist',
  },
  {
    id: 'timing-soon',
    title: {
      en: 'If you want to move soon, the legal opinion is the long item',
      zh: '如果您想很快推进，法律意见才是那个耗时最长的项目',
    },
    body: {
      en: 'Medical scheduling is usually the thing people chase first and the thing that moves fastest. A written view from a lawyer in the destination, and a second one in your own country, take longer to obtain and change what you should even be scheduling.',
      zh: '医疗排期通常是人们最先追、也是推进最快的东西。而一份来自目的地律师的书面意见，加上另一份来自您自己国家的意见，取得起来更久，并且会改变您究竟应该安排什么。',
    },
    link: { en: 'Download the questions to ask', zh: '下载要问的那些问题' },
    href: '/tools/destination-research-checklist',
  },
];

/** Who can actually settle each part of the list, including the part this site cannot. */
export const DESTINATION_OWNERS: { who: Bilingual; owns: Bilingual }[] = [
  {
    who: { en: 'A reproductive lawyer in the destination', zh: '目的地当地的生殖法律师' },
    owns: {
      en: 'Whether the rule covers your family, what the contract can bind, what the court will do and how long it takes.',
      zh: '规则是否覆盖您的家庭、合同能够约束什么、法院会做什么，以及需要多长时间。',
    },
  },
  {
    who: { en: 'A lawyer where you are from or live', zh: '您来自或居住地的律师' },
    owns: {
      en: 'Whether your country accepts the birth result, who the legal parents are there, and what the child can enter on.',
      zh: '您的国家是否接受这个出生结果、在那里谁是法律上的父母，以及孩子凭什么入境。',
    },
  },
  {
    who: { en: 'The clinic', zh: '诊所' },
    owns: {
      en: 'The medical route, how many attempts sit inside a program, and what happens to stored material if it ends early.',
      zh: '医疗路径、一个疗程内包含几次尝试，以及疗程提前结束时已保存的生殖材料会怎样。',
    },
  },
  {
    who: { en: 'SurrogacyBase', zh: 'SurrogacyBase' },
    owns: {
      en: 'Sourced legal records, the questions to put to each of the above, and the comparison tools that keep their answers level.',
      zh: '附有来源的法律记录、要向上面每一方提出的问题，以及让各方的回答可以相互比较的工具。',
    },
  },
];

/** The strings the module script needs are serialized into the DOM, not imported by it. */
export type DestinationNotesChrome = {
  eyebrow: string;
  heading: string;
  intro: string;
  ownersHeading: string;
  ownersIntro: string;
  /**
   * Sits directly against the publisher link, so the space English needs is part of this string:
   * the full-width Chinese colon carries its own spacing and takes none.
   */
  sourceLabel: string;
  checkedLabel: string;
  copyButton: string;
  downloadButton: string;
  checklistLink: string;
  copyExplanation: string;
  copied: string;
  copyBlocked: string;
  export: {
    title: string;
    /** {date} is formatted with dateLocale below. */
    assembled: string;
    note: string;
    sourceLine: string;
    nextLine: string;
    ownerLine: string;
    /**
     * The markdown markers of the exported document (the `#` headings, the `- ` list bullets, the
     * autolink brackets) are assembled in the script, because they are document syntax and the same
     * in both languages; what is stored here is the wording around them. No angle brackets appear in
     * these templates, because the whole dictionary is serialized into one HTML attribute.
     */
    footer: string;
    filename: string;
    /** BCP 47 tag for the date stamped into the exported document. */
    dateLocale: string;
  };
};

export const DESTINATION_NOTES_CHROME: Record<Lang, DestinationNotesChrome> = {
  en: {
    eyebrow: 'Read from the records',
    heading: 'What to verify before you choose a destination',
    intro:
      'The table on this page says what each destination permits. The notes below come out of the same records and cover the part that bites later: who a rule names as a parent, what has to happen after the birth, who must attend in person, and what the money is allowed to look like. Each note links to the page holding the detail, and a note that rests on a legal provision names it and the date we read it.',
    ownersHeading: 'Who settles each of these',
    ownersIntro:
      'Every note above ends at a person who can settle it. These are the four, and the last row is the part this site does hold.',
    sourceLabel: 'Source: ',
    checkedLabel: 'checked {date}',
    copyButton: 'Copy the notes',
    downloadButton: 'Download as a document',
    checklistLink: 'Work through every question',
    copyExplanation:
      'Copying and downloading keep this list on your side: it is assembled in this browser into a text file you can send to a lawyer or paste into a note. Nothing is uploaded to us when you use them.',
    copied: 'Copied',
    copyBlocked: 'Copying is blocked here. Use Download instead.',
    export: {
      title: 'Destination research notes',
      assembled: 'Taken from the SurrogacyBase destination page on {date}.',
      note: 'A research plan, not a legal opinion and not a shortlist.',
      sourceLine: 'Source: {label}',
      nextLine: 'Next: {label}',
      ownerLine: '{who}: {owns}',
      footer: 'Assembled in the browser by SurrogacyBase from its own sourced records. Nothing was sent to a server.',
      filename: 'surrogacy-destination-notes.md',
      dateLocale: 'en-US',
    },
  },

  zh: {
    eyebrow: '来自已核实的记录',
    heading: '选定目的地之前，您应当先核实什么',
    intro:
      '这一页的对照表写的是每个目的地允许什么。下面的备注出自同一批记录，讲的是更晚才生效的那部分：一条规则把谁认定为父母、出生之后必须办完什么、哪些环节必须本人到场，以及钱允许以什么形态存在。每条备注都链到承载细节的那个页面；落在某一条法律规定上的备注，会写明是哪一条，以及我们读到它的日期。',
    ownersHeading: '每一条由谁来确定',
    ownersIntro: '上面每一条备注，最终都落在一个能够确定它的人身上。下面就是这四方，最后那一行是本站确实持有的那部分。',
    sourceLabel: '来源：',
    checkedLabel: '核查于 {date}',
    copyButton: '复制这些备注',
    downloadButton: '下载为文档',
    checklistLink: '逐题处理每一个问题',
    copyExplanation:
      '复制和下载都把这份清单留在您这一侧：它是在这个浏览器里整理成一个文本文件的，您可以把它发给律师，或者粘贴进笔记。使用时没有任何内容上传给我们。',
    copied: '已复制',
    copyBlocked: '这里禁止复制。请改用下载。',
    export: {
      title: '目的地研究备注',
      assembled: '由 SurrogacyBase 目的地页面在 {date} 导出。',
      note: '这是一份研究计划，不是法律意见，也不是候选名单。',
      sourceLine: '来源：{label}',
      nextLine: '下一步：{label}',
      ownerLine: '{who}：{owns}',
      footer: '本文件由 SurrogacyBase 在浏览器中依据它自己带来源的记录整理而成。没有任何内容被发送到服务器。',
      filename: 'surrogacy-destination-notes-zh.md',
      dateLocale: 'zh-CN',
    },
  },
};

