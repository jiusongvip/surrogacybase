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
      en: 'Some rules name a family type instead of describing one',
      zh: '有些规则直接点名家庭类型，而不是泛泛描述',
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
      zh: '是伴侣，不等于两个人同时成为法律上的父母',
    },
    body: {
      en: 'Some systems name one intended parent at birth and leave the other a separate route, which may be a court application, a second registration, or nothing at all. The two questions have different answers, so ask them separately: who is a parent on the day of birth, and what does the second parent have to do after it.',
      zh: '有些体系在出生时只确立一位意向父母，另一位要另走一条路径：可能是一份法院申请，可能是一次单独的登记，也可能什么都没有。这两个问题的答案不同，所以要分开问：出生当天谁是父母，以及第二位父母之后要做什么。',
    },
    link: { en: 'Parentage, step by step', zh: '逐条看亲权的转移步骤' },
    href: '/guides/surrogacy-legal-considerations',
  },
  {
    id: 'unmarried',
    title: {
      en: 'A spouse and a partner are two different words in these rules',
      zh: '在这些规则里，“配偶”和“伴侣”是两个不同的词',
    },
    body: {
      en: 'Where a rule recognises a spouse and not a partner, it changes who has to apply after the birth and whether a second parent can be named at all. Marital status is a fact a provision can test, so it gets tested whether or not anybody mentioned it to you.',
      zh: '一条规则如果承认配偶而不承认伴侣，它会改变出生之后必须由谁提出申请，以及第二位父母到底能不能被确立。婚姻状况是条文可以检验的事实，所以不管有没有人跟您提过，它都会被检验。',
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
      en: 'Living somewhere and holding its passport test different things',
      zh: '住在那里和拿那里的护照，检验的是两件不同的事',
    },
    body: {
      en: 'A rule about residents and a rule about citizens are not the same rule. Where you live tends to decide who treats you and where the birth gets registered; what passport you hold tends to decide what the child can claim. One sentence covering both is where a shortlist starts going wrong.',
      zh: '关于居民的规则和关于公民的规则不是同一条规则。您住在哪里，通常决定了由谁来处理您、出生在哪里登记；您持有什么护照，通常决定了孩子能主张什么。想用一句话同时回答这两个问题，候选名单就是从这里开始走形的。',
    },
    link: { en: 'Recognition where you live', zh: '您居住地的承认问题' },
    href: '/guides/surrogacy-legal-considerations',
  },
  {
    id: 'donor-gametes',
    title: {
      en: 'A donor changes the medical route, and sometimes the legal one',
      zh: '使用捐赠的生殖细胞会改变医疗路径，有时也改变法律路径',
    },
    body: {
      en: 'Whose egg, whose sperm and who carries the pregnancy are three separate decisions, and in some places a required genetic link is written into the provision itself. Decide that shape before you shortlist, because a route can close on exactly that question.',
      zh: '谁的卵子、谁的精子、谁来怀孕，是三个分开的决定；而在某些地方，必需的基因联系就写在条文本身里。这个形状要在列候选之前定下来，因为一条路径可能恰恰卡在这一个问题上。',
    },
    link: { en: 'Gamete and surrogate options', zh: '生殖细胞与代孕者的选择' },
    href: '/guides/gamete-and-surrogate-options',
  },
  {
    id: 'parentage-concern',
    title: {
      en: 'Where parentage moves after the birth, the wait is part of the plan',
      zh: '亲权在出生之后才转移的地方，等待要算进计划里',
    },
    body: {
      en: 'In the United Kingdom the surrogate remains the legal mother at birth unless a parental order is obtained, and the arrangement itself is not enforceable. None of that rules the country out; it does mean a court application sits after the delivery, and the dates around it belong in your planning from the first conversation.',
      zh: '在英国，除非取得亲权令，代孕者在出生时仍然是法律上的母亲，而且安排本身不具有可执行性。这些都不构成把这个国家排除的理由；但它们意味着一份法院申请排在分娩之后，围绕它的那些时间点从第一次沟通起就该算进您的计划。',
    },
    link: { en: 'Read the United Kingdom record', zh: '阅读英国记录' },
    href: '/destinations/gb',
    cite: { code: 'gb', fact: 0 },
  },
  {
    id: 'cost-concern',
    title: { en: 'The same medicine, two different totals', zh: '同样的医疗，两个总额' },
    body: {
      en: 'What pulls two figures apart is usually outside the headline: who bills beyond the program itself, whose account holds the money while you wait, and what comes back if it stops midway. The published figures collected here are split line by line so those three can be read across two destinations.',
      zh: '把两个数字拉开的差距，通常就在总额之外：谁在疗程本身之外另行计费、等待期间钱在谁的账户里、以及疗程中途停止时能退回什么。这里汇集的已公布数据按条目逐条拆开，就是为了让这三项能在两个目的地之间对照着读。',
    },
    link: { en: 'Put two quotes side by side', zh: '把两份报价并排放' },
    href: '/tools/agency-quote-comparison',
  },
  {
    id: 'presence-concern',
    title: {
      en: 'The attendance schedule comes from three different offices',
      zh: '到场时间表来自三个不同的地方',
    },
    body: {
      en: 'How many trips, whose signature has to be witnessed, and how long the family must stay after the birth are three separate schedules, set by the clinic, the registrar and the court. They also change between programmes, so ask each office for its own list in writing.',
      zh: '需要出行几次、谁的签字必须被见证、家庭在出生之后要停留多久，是三份分开的时间表，分别来自诊所、登记处和法院。它们也因疗程而异，所以请每一个环节各自给出书面的清单。',
    },
    link: { en: 'The process, stage by stage', zh: '逐阶段看流程' },
    href: '/guides/surrogacy-process',
  },
  {
    id: 'medical-concern',
    title: {
      en: 'Verifying a provider means asking for documents',
      zh: '核实一个服务方，开口要文件才算',
    },
    body: {
      en: 'Who is accountable for the treatment, what the licence actually covers, what the clinic says happens after a failed cycle, and who the contract binds. All four have answers, and the answers are documents rather than paragraphs of copy.',
      zh: '谁对治疗负责、牌照实际覆盖什么、诊所声称周期失败之后会怎样、以及合同约束的是谁。这四个问题都有答案，而答案是文件，不是一段段宣传文字。',
    },
    link: { en: 'How to evaluate an agency before you sign', zh: '签约之前如何评估一家机构' },
    href: '/guides/choosing-a-surrogacy-agency',
  },
  {
    id: 'eligibility-concern',
    title: {
      en: 'Ask for the provision, not the number of families placed',
      zh: '要那条规定，不要“我们做过多少家”',
    },
    body: {
      en: 'How many families in your situation a provider has placed tells you something about that provider. It cannot tell you what a provision says, and it cannot promise anything about your case. Get the citation for who may commission, then have a lawyer in that jurisdiction confirm it reaches you.',
      zh: '一家机构经手过多少个与您情况相同的家庭，说的是这家机构自己的事。它说不出一条规定写了什么，也不能对您的案例作任何承诺。先拿到关于谁可以委托的那个出处，再请该辖区的律师确认它覆盖到您。',
    },
    link: { en: 'The destination records', zh: '目的地记录' },
    href: '/destinations',
  },
  {
    id: 'budget-unknown',
    title: { en: 'Build the cost list before the country list', zh: '先建费用清单，再建国家清单' },
    body: {
      en: 'Without an item list, every destination looks affordable and every quote looks complete. Canada shows what scope can do on its own: paying a surrogate is prohibited there, while reimbursement of her regulated expenses is permitted and documented, so the shape of the money comes out of the law rather than out of the market.',
      zh: '没有条目清单时，每个目的地都显得负担得起，每份报价都显得完整。加拿大展示了范围本身能起的作用：向代孕者付款在那里被禁止，而对她受监管开支的报销是允许的、有文件依据的，所以钱的形状出自法律，不是出自市场。',
    },
    link: { en: 'The costs a quote leaves out', zh: '报价不包含的费用' },
    href: '/articles/surrogacy-costs-that-sit-outside-a-quote',
    cite: { code: 'ca', fact: 1 },
  },
  {
    id: 'budget-set',
    title: {
      en: 'Test a figure you already hold against what it includes',
      zh: '拿到一个总额，就对照它的包含项验一次',
    },
    body: {
      en: 'Write the number down, list what it states it covers, then list what it does not. The gap between those two lists is the budget you will actually need, and it is the part a comparison of two headline figures never shows.',
      zh: '把总额写下来，列出它声称覆盖的内容，再列出它不覆盖的内容。两份清单之间的差额才是您实际需要的预算，而这部分是只看总额看不出来的。',
    },
    link: { en: 'What to budget for and what to verify', zh: '该为什么做预算、该核实什么' },
    href: '/guides/surrogacy-cost',
  },
  {
    id: 'travel-limited',
    title: {
      en: 'How long you can stay is a constraint on your side of the table',
      zh: '您能停留多久，是您自己这边的硬条件',
    },
    body: {
      en: 'Some routes need two attended visits; some need the family in the country for weeks after the birth. Work out what you can actually commit before you read a destination as expensive or slow, and say it at the first conversation rather than discovering it at the fourth.',
      zh: '有的路径需要两次本人到场；有的需要一家人在孩子出生后在那国停留数周。先把您真能投入的时间算清楚，再去判断一个目的地是贵还是慢；这件事在第一通沟通里就该说明，不要到第四次才发现。',
    },
    link: { en: 'Ask how long the family must stay', zh: '问清家庭必须停留多久' },
    href: '/tools/destination-research-checklist',
  },
  {
    id: 'stage-exploring',
    title: {
      en: 'Learn the three shapes before you learn the countries',
      zh: '先弄清三种形态，再去记国家',
    },
    body: {
      en: 'Legal systems decide their surrogacy positions in different ways: by statute, by court decision, or region by region. Once those shapes make sense to you, a country name starts telling you what to expect instead of what to hope.',
      zh: '法律体系得出自己的代孕立场的方式并不相同：有的靠成文法，有的靠法院判决，有的按地区分别决定。这些形态说得通了，一个国家的名字就会开始告诉您该期待什么，而不是该希望什么。',
    },
    link: { en: 'The destination records', zh: '目的地记录' },
    href: '/destinations',
  },
  {
    id: 'stage-comparing',
    title: {
      en: 'Two destinations at the same price are not the same choice',
      zh: '两个价格相同的目的地，并不是同一个选择',
    },
    body: {
      en: 'At an identical cost, one destination may name you at birth and another may not; one may need a single visit and another three; one may hold the money in escrow while another leaves it with a clinic. Set those beside the figures before you let the totals decide.',
      zh: '在同样的费用下，一个目的地可能在出生时就写上您的名字，另一个不；一个可能只需一次到场，另一个要三次；一个把钱放在托管账户，另一个把钱留在诊所。把这些与数字并排摆好，再让总额说话。',
    },
    link: { en: 'Compare them on the same questions', zh: '用同一组问题来比较它们' },
    href: '/tools/destination-research-checklist',
  },
  {
    id: 'stage-verifying',
    title: {
      en: 'With a destination named, run the checklist against it',
      zh: '已经选定一个目标，就把清单对着它逐项过一遍',
    },
    body: {
      en: 'Take the destination you have in mind through every question that has an owner, and write beside each one who answered it and when, in the document you download from the checklist. A question nobody will answer in writing is itself a finding, and usually a clearer one than whatever the provider says out loud.',
      zh: '带您心中的那个目的地过一遍每一个有归属人的问题，并在清单下载下来的文档里，于每个问题旁边写下它由谁回答、在何时回答。一个问题无人愿意书面回答，这本身就是一个结论，而且通常比机构口头说的那些更明白。',
    },
    link: { en: 'Open the research checklist', zh: '打开研究清单' },
    href: '/tools/destination-research-checklist',
  },
  {
    id: 'timing-soon',
    title: {
      en: 'If you want to move soon, start with the lawyers',
      zh: '想尽快推进，就从律师开始',
    },
    body: {
      en: 'Medical scheduling is usually the thing people chase first and the thing that moves fastest. A written view from a lawyer in the destination, and a second one in your own country, take longer to obtain, and they change what you should even be scheduling.',
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
    eyebrow: 'Details that arrive later',
    heading: 'What a country name does not tell you',
    intro:
      'The table above prints what each destination permits. These notes cover what shows up after that: who a rule names as a parent, what has to happen after the birth, who has to be in the room, and what the money is allowed to look like. Each note links to the page holding the detail, and a note that rests on a legal provision names it and the date we read it.',
    ownersHeading: 'Who settles each of these',
    ownersIntro:
      'Each note ends at a person who can settle it. The four are named below, with the part this site holds listed last.',
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
    eyebrow: '更晚才出现的细节',
    heading: '一个国家名不会告诉您的事',
    intro:
      '上面的对照表印的是每个目的地允许什么。这些备注讲的是在那之后才浮现的部分：一条规则把谁认定为父母、出生之后必须办完什么、哪些环节必须有人到场，以及钱允许以什么形态存在。每条备注都链到承载细节的那个页面；落在某一条法律规定上的备注，会写明是哪一条，以及我们读到它的日期。',
    ownersHeading: '每一条由谁来确定',
    ownersIntro: '每一条备注最终都落在一个能够确定它的人身上。下面列出这四方，本站能确定的那部分排在最后。',
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

