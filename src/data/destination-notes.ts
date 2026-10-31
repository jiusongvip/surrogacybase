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
      zh: '若一条规则所点名为伴侣，则无论宣传册如何描述该目的地，单身父母均可能落于规则之外。在本站核查的该项调查中，有一个美国州份将限制写为相反的方向，并额外增设两项检验：其路径仅限已婚、异性恋、且与孩子存在基因联系的意向父母。',
    },
    link: { en: 'Read the United States record', zh: '阅读美国记录' },
    href: '/destinations/us',
    cite: { code: 'us', fact: 3 },
  },
  {
    id: 'two-of-you',
    title: {
      en: 'Being a couple does not automatically make you two legal parents',
      zh: '同为伴侣，并不等于二人同时成为法律上的父母',
    },
    body: {
      en: 'Some systems name one intended parent at birth and leave the other a separate route, which may be a court application, a second registration, or nothing at all. The two questions have different answers, so ask them separately: who is a parent on the day of birth, and what does the second parent have to do after it.',
      zh: '某些体系于出生时仅确立一位意向父母，另一位须另循一条路径：或为一份法院申请，或为一次单独的登记，亦或并无路径可循。此两项问题的答案并不相同，故应分别询问：出生当日何者为父母，以及第二位父母此后须履行何种手续。',
    },
    link: { en: 'Parentage, step by step', zh: '逐条看亲权的转移步骤' },
    href: '/guides/surrogacy-legal-considerations',
  },
  {
    id: 'unmarried',
    title: {
      en: 'A spouse and a partner are two different words in these rules',
      zh: '在这些规则里，「配偶」与「伴侣」是两个不同的词',
    },
    body: {
      en: 'Where a rule recognises a spouse and not a partner, it changes who has to apply after the birth and whether a second parent can be named at all. Marital status is a fact a provision can test, so it gets tested whether or not anybody mentioned it to you.',
      zh: '一条规则若承认配偶而不承认伴侣，其改变的是出生之后必须由谁提出申请，以及第二位父母能否得以确立。婚姻状况是条文可以检验的事实，因此无论是否有人向您提及，该项均会被检验。',
    },
    link: { en: 'Eligibility and parentage, question by question', zh: '逐条核对资格与亲权' },
    href: '/guides/surrogacy-legal-considerations',
  },
  {
    id: 'outside-the-usual-list',
    title: {
      en: 'A nationality outside the usual list makes recognition the first question, not the last',
      zh: '国籍处于常见名单之外时，承认问题即是第一个问题，而非最后一个',
    },
    body: {
      en: 'The destination decides what happens at birth. The country whose passport the child will claim, or the country you will return to, decides whether that birth result is accepted there. Those are two legal systems and two lawyers.',
      zh: '目的地决定出生时会发生什么。孩子将申领护照的国家，或您拟返回的国家，决定其是否接受这一出生结果。此为两套法律体系，亦须两位律师。',
    },
    link: { en: 'What to ask before you shortlist', zh: '列入候选之前应问什么' },
    href: '/guides/questions-to-ask-about-surrogacy-law-before-choosing-a-destination',
  },
  {
    id: 'resident-not-citizen',
    title: {
      en: 'Living somewhere and holding its passport test different things',
      zh: '居住地与所持护照，检验的是两项不同的事实',
    },
    body: {
      en: 'A rule about residents and a rule about citizens are not the same rule. Where you live tends to decide who treats you and where the birth gets registered; what passport you hold tends to decide what the child can claim. One sentence covering both is where a shortlist starts going wrong.',
      zh: '关于居民的规则与关于公民的规则并非同一条规则。您的居住地通常决定由何处受理您、孩子在何处登记出生；您所持的护照通常决定孩子能够主张何种身份。若试图以一句话同时回答这两个问题，候选名单即自此处开始出现偏差。',
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
      zh: '卵子取自何人、精子取自何人、由谁完成妊娠，系三项彼此独立的决定；而在某些法域，必需的基因联系即载明于条文本身。上述结构须在列入候选目的地之前确定，因为一条路径可能恰恰在此一项问题上无法通行。',
    },
    link: { en: 'Gamete and surrogate options', zh: '生殖细胞与代孕者的选择' },
    href: '/guides/gamete-and-surrogate-options',
  },
  {
    id: 'parentage-concern',
    title: {
      en: 'Where parentage moves after the birth, the wait is part of the plan',
      zh: '亲权于出生之后方转移的法域，等待时间应计入计划',
    },
    body: {
      en: 'In the United Kingdom the surrogate remains the legal mother at birth unless a parental order is obtained, and the arrangement itself is not enforceable. None of that rules the country out; it does mean a court application sits after the delivery, and the dates around it belong in your planning from the first conversation.',
      zh: '在英国，除非取得亲权令，代孕者于出生时仍为法律上的母亲，且该项安排本身不具可执行性。上述各项均不构成排除该国之理由；但其意味着一项法院申请位于分娩之后，与之相关的时间节点自首次沟通起即应计入您的计划。',
    },
    link: { en: 'Read the United Kingdom record', zh: '阅读英国记录' },
    href: '/destinations/gb',
    cite: { code: 'gb', fact: 0 },
  },
  {
    id: 'cost-concern',
    title: { en: 'The same medicine, two different totals', zh: '同一疗程，两种总额' },
    body: {
      en: 'What pulls two figures apart is usually outside the headline: who bills beyond the program itself, whose account holds the money while you wait, and what comes back if it stops midway. The published figures collected here are split line by line so those three can be read across two destinations.',
      zh: '使两项总额产生差异的因素，通常位于总额之外：何者在疗程本身之外另行计费、等待期间资金由何人账户持有、以及疗程中途终止时可退回何种款项。此处汇集的已公布数据按条目逐项拆分，正是为使上述三项得以在两个目的地之间并列对照。',
    },
    link: { en: 'Put two quotes side by side', zh: '将两份报价并列对照' },
    href: '/tools/agency-quote-comparison',
  },
  {
    id: 'presence-concern',
    title: {
      en: 'The attendance schedule comes from three different offices',
      zh: '到场时间表由三处各自主导',
    },
    body: {
      en: 'How many trips, whose signature has to be witnessed, and how long the family must stay after the birth are three separate schedules, set by the clinic, the registrar and the court. They also change between programmes, so ask each office for its own list in writing.',
      zh: '需出行几次、何人的签字须经见证、家庭于出生之后须停留多久，系三份彼此独立的时间表，分别由诊所、登记处与法院设定。其亦因疗程而异，故应请每一环节各自提供书面清单。',
    },
    link: { en: 'The process, stage by stage', zh: '逐阶段看流程' },
    href: '/guides/surrogacy-process',
  },
  {
    id: 'medical-concern',
    title: {
      en: 'Verifying a provider means asking for documents',
      zh: '核实服务方，须以索取文件为起点',
    },
    body: {
      en: 'Who is accountable for the treatment, what the licence actually covers, what the clinic says happens after a failed cycle, and who the contract binds. All four have answers, and the answers are documents rather than paragraphs of copy.',
      zh: '何者对治疗负责、牌照实际覆盖何种范围、诊所声称周期失败之后将如何处理、以及合同约束的对象为何。此四项问题均有答案，而答案体现为文件，并非一段段宣传文字。',
    },
    link: { en: 'How to evaluate an agency before you sign', zh: '签约之前如何评估一家机构' },
    href: '/guides/choosing-a-surrogacy-agency',
  },
  {
    id: 'eligibility-concern',
    title: {
      en: 'Ask for the provision, not the number of families placed',
      zh: '应索取该条规定，而非「我们经手过多少家庭」',
    },
    body: {
      en: 'How many families in your situation a provider has placed tells you something about that provider. It cannot tell you what a provision says, and it cannot promise anything about your case. Get the citation for who may commission, then have a lawyer in that jurisdiction confirm it reaches you.',
      zh: '一家机构经手过多少个与您情形相同的家庭，所描述者系该机构自身的情况。其无法说明一条规定的内容，亦不能对您的案例作出任何承诺。应先取得关于何者可以委托的条文出处，再请该辖区的律师确认其适用于您。',
    },
    link: { en: 'The destination records', zh: '目的地记录' },
    href: '/destinations',
  },
  {
    id: 'budget-unknown',
    title: { en: 'Build the cost list before the country list', zh: '先行编制费用清单，再行编制目的地清单' },
    body: {
      en: 'Without an item list, every destination looks affordable and every quote looks complete. Canada shows what scope can do on its own: paying a surrogate is prohibited there, while reimbursement of her regulated expenses is permitted and documented, so the shape of the money comes out of the law rather than out of the market.',
      zh: '缺乏条目清单时，每一目的地看似均可负担，每份报价看似均无遗漏。加拿大说明了范围本身的作用：向代孕者付款在该国被禁止，而对其受监管开支的报销则属允许、且有文件依据；因此资金的构成方式出自法律，而非市场。',
    },
    link: { en: 'The costs a quote leaves out', zh: '报价不包含的费用' },
    href: '/guides/surrogacy-costs-that-sit-outside-a-quote',
    cite: { code: 'ca', fact: 1 },
  },
  {
    id: 'budget-set',
    title: {
      en: 'Test a figure you already hold against what it includes',
      zh: '取得一项总额后，应对照其包含项逐项核验',
    },
    body: {
      en: 'Write the number down, list what it states it covers, then list what it does not. The gap between those two lists is the budget you will actually need, and it is the part a comparison of two headline figures never shows.',
      zh: '先将总额写下，列出其声称覆盖的内容，再列出其未覆盖的内容。两份清单之间的差额方是您实际所需的预算，而此项差额为仅比较总额所无法呈现的。',
    },
    link: { en: 'What to budget for and what to verify', zh: '应编制预算的项目与应核实的事项' },
    href: '/guides/surrogacy-cost',
  },
  {
    id: 'travel-limited',
    title: {
      en: 'How long you can stay is a constraint on your side of the table',
      zh: '可停留的时长构成您一侧的刚性约束',
    },
    body: {
      en: 'Some routes need two attended visits; some need the family in the country for weeks after the birth. Work out what you can actually commit before you read a destination as expensive or slow, and say it at the first conversation rather than discovering it at the fourth.',
      zh: '部分路径需两次本人到场；部分则要求家庭于孩子出生后在该国停留数周。应先厘清您确实可投入的时间，再判断某一目的地成本偏高或周期偏长；此项信息宜于首次沟通时即予说明，而非至第四次沟通方才披露。',
    },
    link: { en: 'Ask how long the family must stay', zh: '应询问家庭须停留的时长' },
    href: '/tools/destination-research-checklist',
  },
  {
    id: 'stage-exploring',
    title: {
      en: 'Learn the three shapes before you learn the countries',
      zh: '应先理解三种形态，再记忆具体国家',
    },
    body: {
      en: 'Legal systems decide their surrogacy positions in different ways: by statute, by court decision, or region by region. Once those shapes make sense to you, a country name starts telling you what to expect instead of what to hope.',
      zh: '各法律体系形成其代孕立场的方式并不相同：或依据成文法，或依据法院判决，或按地区分别确定。上述形态得以理解之后，一国之名方能提示您应期待什么，而非应希望什么。',
    },
    link: { en: 'The destination records', zh: '目的地记录' },
    href: '/destinations',
  },
  {
    id: 'stage-comparing',
    title: {
      en: 'Two destinations at the same price are not the same choice',
      zh: '费用相同的两个目的地，并不构成同一项选择',
    },
    body: {
      en: 'At an identical cost, one destination may name you at birth and another may not; one may need a single visit and another three; one may hold the money in escrow while another leaves it with a clinic. Set those beside the figures before you let the totals decide.',
      zh: '在相同费用之下，一目的地可能于出生证明上登记您的姓名，另一则否；一者可能仅需一次到场，另一者需三次；一者将资金留存于托管账户，另一者将其交由诊所保管。应将这些事项与数字并列，再据总额作出判断。',
    },
    link: { en: 'Compare them on the same questions', zh: '以同一组问题加以比较' },
    href: '/tools/destination-research-checklist',
  },
  {
    id: 'stage-verifying',
    title: {
      en: 'With a destination named, run the checklist against it',
      zh: '已选定目标后，应依清单对其逐项核对',
    },
    body: {
      en: 'Take the destination you have in mind through every question that has an owner, and write beside each one who answered it and when, in the document you download from the checklist. A question nobody will answer in writing is itself a finding, and usually a clearer one than whatever the provider says out loud.',
      zh: '将您属意的目的地逐一置于那些有责任主体的问题之下，并在清单所下载的文档中，于每道问题旁记录其由何人作答、于何时作答。某道问题无人愿以书面作答，此项本身即为一项结论，且通常较机构口头所述更为明确。',
    },
    link: { en: 'Open the research checklist', zh: '打开研究清单' },
    href: '/tools/destination-research-checklist',
  },
  {
    id: 'timing-soon',
    title: {
      en: 'If you want to move soon, start with the lawyers',
      zh: '若需尽快推进，应自律师开始',
    },
    body: {
      en: 'Medical scheduling is usually the thing people chase first and the thing that moves fastest. A written view from a lawyer in the destination, and a second one in your own country, take longer to obtain, and they change what you should even be scheduling.',
      zh: '医疗排期通常是人们最先着手、也是推进最快的一项。而一份来自目的地律师的书面意见，连同另一份来自您本国的意见，取得所需时间更久，且会改变您究竟应当安排什么。',
    },
    link: { en: 'Download the questions to ask', zh: '下载应询问的问题清单' },
    href: '/tools/destination-research-checklist',
  },
];

/** Who can actually settle each part of the list, including the part this site cannot. */
export const DESTINATION_OWNERS: { who: Bilingual; owns: Bilingual }[] = [
  {
    who: { en: 'A reproductive lawyer in the destination', zh: '目的地当地的生殖法律师' },
    owns: {
      en: 'Whether the rule covers your family, what the contract can bind, what the court will do and how long it takes.',
      zh: '规则是否覆盖您的家庭、合同得以约束何种事项、法院将作出何种处理，以及所需时长。',
    },
  },
  {
    who: { en: 'A lawyer where you are from or live', zh: '您来自或居住地的律师' },
    owns: {
      en: 'Whether your country accepts the birth result, who the legal parents are there, and what the child can enter on.',
      zh: '您所属的国家是否接受此项出生结果、在该国何者为法律上的父母，以及孩子凭何种证件入境。',
    },
  },
  {
    who: { en: 'The clinic', zh: '诊所' },
    owns: {
      en: 'The medical route, how many attempts sit inside a program, and what happens to stored material if it ends early.',
      zh: '医疗路径、一项疗程之内包含几次尝试，以及疗程提前结束时已冷冻保存的生殖材料将如何处理。',
    },
  },
  {
    who: { en: 'SurrogacyBase', zh: 'SurrogacyBase' },
    owns: {
      en: 'Sourced legal records, the questions to put to each of the above, and the comparison tools that keep their answers level.',
      zh: '附有来源的法律记录、应向前述各方提出的问题，以及使各方回答得以相互比较的工具。',
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
    eyebrow: '后续才浮现的细节',
    heading: '一国之名无法呈现的事项',
    intro:
      '上述对照表列出的是各目的地所允许的事项。以下备注述及在那之后方才浮现的部分：一条规则将何人认定为父母、出生之后必须完成何种手续、哪些环节必须有人到场，以及资金得以何种形态存在。每条备注均链接至载有细节的页面；以某一条法律规定为依据的备注，会写明系哪一条规定，以及核查该规定的日期。',
    ownersHeading: '各条事项由谁确定',
    ownersIntro: '每条备注最终均由某一有责任主体予以确定。下列四方之中，本站所能确定者置于最后。',
    sourceLabel: '来源：',
    checkedLabel: '核查于 {date}',
    copyButton: '复制以下备注',
    downloadButton: '下载为文档',
    checklistLink: '逐题处理全部问题',
    copyExplanation:
      '复制与下载均使本清单留存于您一侧：其内容于本浏览器内整理为一个文本文件，您可将其发送给律师，或粘贴至笔记。整理与使用过程中不会有任何内容上传。',
    copied: '已复制',
    copyBlocked: '这里禁止复制。请改用下载。',
    export: {
      title: '目的地研究备注',
      assembled: '由 SurrogacyBase 目的地页面在 {date} 导出。',
      note: '本文件为研究计划，非法律意见，亦非候选名单。',
      sourceLine: '来源：{label}',
      nextLine: '下一步：{label}',
      ownerLine: '{who}：{owns}',
      footer: '本文件由 SurrogacyBase 在浏览器中依据本站自有之带来源记录整理而成，无任何内容被发送至服务器。',
      filename: 'surrogacy-destination-notes-zh.md',
      dateLocale: 'zh-CN',
    },
  },
};

