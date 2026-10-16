/*
 * The destination assessment, in both languages.
 *
 * Every piece of wording is a { en, zh } pair rather than two parallel files, because the
 * structure of the questionnaire is the argument it makes: ten questions, three steps, eighteen
 * conditional notes, three questions that never change. If a translation could omit a field, an
 * option or a note on its own, the Chinese form would ask something different from the English
 * one, and the roadmap a reader exports would not be comparable with the record it cites. The
 * compiler enforces both halves of every pair, so the two languages cannot drift apart.
 *
 * Two things are deliberately not here:
 *   - The source of each legal statement. `cite` is a pointer into src/data/jurisdictions, and
 *     the component resolves it, so a citation's url, publisher and date always come from the
 *     record rather than from a translation of it.
 *   - The internal links. `href` is written without a language prefix and localized on render,
 *     so a note on /zh points at the Chinese destination record and not at the English one.
 *
 * The strings under `chrome` include the ones the module script needs at runtime. They are
 * serialized into the DOM by the component, because a bundled script cannot import a dictionary
 * and still be shared between the two languages.
 */
import type { Lang } from '@/i18n/config';
import type { Bilingual } from '@/i18n/ui';

export type AssessmentOption = { value: string; label: Bilingual };

export type AssessmentField = {
  id: string;
  kind: 'radio' | 'check';
  /** Answering it is optional when the question touches on medical information. */
  optional?: boolean;
  legend: Bilingual;
  hint?: Bilingual;
  options: AssessmentOption[];
};

export type AssessmentStep = {
  num: string;
  title: Bilingual;
  purpose: Bilingual;
  fields: AssessmentField[];
};

export type AssessmentNote = {
  id: string;
  /** The field and the answers that surface this note; a check field matches on any value. */
  when: { field: string; values: string[] };
  title: Bilingual;
  body: Bilingual;
  link: Bilingual;
  href?: string;
  cite?: { code: string; fact: number };
};

export const ASSESSMENT_STEPS: AssessmentStep[] = [
  {
    num: '01',
    title: { en: 'Your family situation', zh: '你的家庭情况' },
    purpose: {
      en: 'These answers work out which access rules apply to you. They do not place you in a country, because "surrogacy is lawful here" and "this family may use it here" are two different findings.',
      zh: '这些回答用来确定哪些准入规则适用于你。它们不会把你安置到某个国家，因为「代孕在这里合法」和「这个家庭可以在这里使用它」是两个不同的结论。',
    },
    fields: [
      {
        id: 'family',
        kind: 'radio',
        legend: { en: 'Who is planning to be the parents?', zh: '谁打算成为父母？' },
        options: [
          { value: 'partner', label: { en: 'Two of us, as a couple', zh: '我们两个人，作为一对伴侣' } },
          { value: 'single', label: { en: 'I am planning as a single parent', zh: '我以单身父母的身份规划' } },
          { value: 'other', label: { en: 'Another arrangement, or still deciding', zh: '另一种安排，或者还在决定' } },
        ],
      },
      {
        id: 'relationship',
        kind: 'radio',
        legend: { en: 'What is your marital or partnership status?', zh: '你的婚姻或伴侣关系状况是什么？' },
        hint: {
          en: 'Asked separately from the question above: some systems test the relationship, and some test the number of parents.',
          zh: '与上面的问题分开询问：一些体系检验的是关系，一些检验的是父母的数量。',
        },
        options: [
          { value: 'married', label: { en: 'Married', zh: '已婚' } },
          { value: 'unmarried', label: { en: 'Unmarried, or not legally registered', zh: '未婚，或在法律上未登记' } },
          { value: 'private', label: { en: 'I would rather not say', zh: '我不愿说明' } },
        ],
      },
      {
        id: 'nationality',
        kind: 'radio',
        legend: { en: 'What is your nationality, or your main legal identity?', zh: '你的国籍，或者你的主要法律身份是什么？' },
        hint: {
          en: 'Nationality, residence and marital status answer three different legal questions. None of them substitutes for another.',
          zh: '国籍、居住地和婚姻状况回答的是三个不同的法律问题，任何一个都不能替代另一个。',
        },
        options: [
          { value: 'us', label: { en: 'United States', zh: '美国' } },
          { value: 'ca', label: { en: 'Canada', zh: '加拿大' } },
          { value: 'gb', label: { en: 'United Kingdom', zh: '英国' } },
          { value: 'ie', label: { en: 'Ireland', zh: '爱尔兰' } },
          { value: 'eu', label: { en: 'Another EU or EEA country', zh: '其他欧盟或欧洲经济区国家' } },
          { value: 'au', label: { en: 'Australia or New Zealand', zh: '澳大利亚或新西兰' } },
          { value: 'cn', label: { en: 'China', zh: '中国' } },
          { value: 'other', label: { en: 'Another country, or more than one nationality', zh: '其他国家，或者拥有不止一个国籍' } },
        ],
      },
      {
        id: 'residence',
        kind: 'radio',
        legend: { en: 'Where do you mainly live?', zh: '你主要居住在哪里？' },
        hint: {
          en: 'Kept apart from nationality on purpose. A rule about residents and a rule about citizens are not the same rule.',
          zh: '刻意与国籍分开。关于居民的规则和关于公民的规则不是同一条规则。',
        },
        options: [
          { value: 'us', label: { en: 'United States', zh: '美国' } },
          { value: 'ca', label: { en: 'Canada', zh: '加拿大' } },
          { value: 'gb', label: { en: 'United Kingdom', zh: '英国' } },
          { value: 'ie', label: { en: 'Ireland', zh: '爱尔兰' } },
          { value: 'eu', label: { en: 'Another EU or EEA country', zh: '其他欧盟或欧洲经济区国家' } },
          { value: 'au', label: { en: 'Australia or New Zealand', zh: '澳大利亚或新西兰' } },
          { value: 'cn', label: { en: 'China', zh: '中国' } },
          { value: 'other', label: { en: 'Another country or region', zh: '其他国家或地区' } },
        ],
      },
    ],
  },
  {
    num: '02',
    title: { en: 'What you are trying to settle', zh: '你想先确定什么' },
    purpose: {
      en: 'This step decides the order of the roadmap. A reader worried about paperwork after the birth and a reader worried about cost are not researching the same thing.',
      zh: '这一步决定路线图的顺序。担心出生之后文件的人，和担心费用的人，研究的不是同一件事。',
    },
    fields: [
      {
        id: 'stage',
        kind: 'radio',
        legend: { en: 'Where are you now?', zh: '你现在处于哪个阶段？' },
        options: [
          { value: 'exploring', label: { en: 'Early. I am working out what is possible', zh: '早期。我在弄清楚什么是可行的' } },
          { value: 'comparing', label: { en: 'Comparing countries or regions', zh: '在比较不同的国家或地区' } },
          {
            value: 'verifying',
            label: { en: 'I have a target and want its law, cost and process checked', zh: '我有一个目标地，希望核对它的法律、费用和流程' },
          },
        ],
      },
      {
        id: 'concerns',
        kind: 'check',
        legend: { en: 'What matters most to you right now?', zh: '对现在的你来说，什么最重要？' },
        hint: { en: 'Choose any that apply.', zh: '选择所有适用的项。' },
        options: [
          { value: 'eligibility', label: { en: 'Whether the law allows my situation', zh: '法律是否允许我的情况' } },
          { value: 'parentage', label: { en: 'Parentage, nationality and documents after the birth', zh: '出生之后的亲权、国籍与文件' } },
          { value: 'cost', label: { en: 'Total cost and what sits outside a quote', zh: '总费用，以及报价之外的部分' } },
          { value: 'presence', label: { en: 'Timings, travel and having to be there in person', zh: '时间、旅行，以及必须本人到场' } },
          { value: 'medical', label: { en: 'How a clinic or program is verified', zh: '诊所或疗程如何通过核验' } },
        ],
      },
      {
        id: 'genetic',
        kind: 'radio',
        optional: true,
        legend: { en: 'What is your current thinking on a genetic link?', zh: '关于遗传联系，你目前的想法是什么？' },
        hint: {
          en: 'Optional, because it can touch on sensitive medical information. A genetic arrangement can change the medical route and, in some places, the legal conditions. Do not type a diagnosis, a history or a test result here; none of that is needed to plan a research route.',
          zh: '这一项是可选的，因为它可能涉及敏感的医疗信息。遗传安排会改变医疗路径，在某些地方也会改变法律条件。请不要在这里填写诊断、病史或检查结果，规划一条研究路径并不需要这些。',
        },
        options: [
          { value: 'own', label: { en: 'We plan to use one or both of our own gametes', zh: '我们计划使用我们自己一方或双方的生殖细胞' } },
          { value: 'donor', label: { en: 'Donor eggs or donor sperm may be needed', zh: '可能需要供卵或供精' } },
          { value: 'undecided', label: { en: 'Not settled. I want to understand the options first', zh: '尚未确定。我想先了解有哪些选择' } },
          { value: 'skip', label: { en: 'I would rather not answer this', zh: '我不愿回答这个问题' } },
        ],
      },
    ],
  },
  {
    num: '03',
    title: { en: 'Your practical conditions', zh: '你的现实条件' },
    purpose: {
      en: 'No amounts, and nothing about income, assets or ability to pay. This step asks how you relate to cost and travel, because those two decide which part of a legal system you have to read first.',
      zh: '不问金额，也不问收入、资产或支付能力。这一步问的是你与费用和旅行的关系，因为这两项决定了你必须先读一个法律体系的哪一部分。',
    },
    fields: [
      {
        id: 'budget',
        kind: 'radio',
        legend: { en: 'How are you thinking about the budget?', zh: '你目前怎么考虑预算？' },
        options: [
          { value: 'unknown', label: { en: 'I do not yet know what the whole thing costs', zh: '我还不知道整件事需要多少钱' } },
          { value: 'limited', label: { en: 'Tight. I need the full cost before I compare places', zh: '紧张。我需要在比较地点之前知道完整费用' } },
          { value: 'set', label: { en: 'There is a figure, and I want to check what it covers', zh: '已经有一个数字，我想核实它覆盖什么' } },
          { value: 'flexible', label: { en: 'Flexible. My concern is legal and execution risk', zh: '有弹性。我关心的是法律与执行风险' } },
        ],
      },
      {
        id: 'travel',
        kind: 'radio',
        legend: { en: 'How flexible are you about travelling to the destination?', zh: '关于前往目的地旅行，你的灵活程度如何？' },
        options: [
          { value: 'flexible', label: { en: 'I can travel when the process requires it', zh: '流程需要时我就能前往' } },
          { value: 'limited', label: { en: 'Work or family means only a few windows are possible', zh: '工作或家庭意味着只有少数几个时间窗口可行' } },
          { value: 'remote', label: { en: 'I want to do as much of it remotely as the law allows', zh: '我想在法律允许的范围内尽量远程完成' } },
          { value: 'unsure', label: { en: 'Not sure yet', zh: '还不确定' } },
        ],
      },
      {
        id: 'timing',
        kind: 'radio',
        legend: { en: 'When do you want to move?', zh: '你希望什么时候推进？' },
        options: [
          { value: 'research', label: { en: 'Research and compare first. No decision is being pushed', zh: '先研究和比较。没有被催促的决定' } },
          { value: 'months', label: { en: 'Within the next 6 to 12 months', zh: '在未来 6 到 12 个月之内' } },
          { value: 'soon', label: { en: 'Soon. I want to speak to professionals', zh: '很快。我想和专业人士沟通' } },
          { value: 'unsure', label: { en: 'Undecided', zh: '尚未决定' } },
        ],
      },
    ],
  },
];

/** The three questions the roadmap always opens with, whatever was answered. */
export const ASSESSMENT_CORE: { title: Bilingual; body: Bilingual }[] = [
  {
    title: {
      en: 'Does the place you are looking at permit an arrangement like yours?',
      zh: '你在看的这个地方，是否允许你所处的这类安排？',
    },
    body: {
      en: 'Not whether surrogacy happens there, and not whether agencies advertise there. Whether the rule names families in your situation, and who decides that.',
      zh: '问的不是那里是否发生代孕，也不是机构是否在那里做广告。而是规则是否点名了你所处情况的家庭，以及由谁来判定。',
    },
  },
  {
    title: {
      en: 'Who is the legal parent at birth, and what has to happen afterwards?',
      zh: '孩子在出生时的法律父母是谁，之后必须发生什么？',
    },
    body: {
      en: 'The birth registration, the court route if there is one, the nationality the child takes, and the travel document the child leaves on are four separate answers that often come from four different bodies.',
      zh: '出生登记、是否存在法院路径、孩子取得哪国国籍，以及孩子凭以离境的旅行文件，是四个分开的答案，而且常常出自四个不同的机关。',
    },
  },
  {
    title: { en: 'What would the whole thing cost, item by item?', zh: '整件事逐项算下来需要多少钱？' },
    body: {
      en: 'Medical care, the surrogate’s own costs where the law permits them to be paid, two sets of lawyers, insurance, travel and stays, and the items that only appear when a cycle repeats or a birth arrives early.',
      zh: '医疗费用、法律允许支付时代孕者自身产生的费用、两组律师、保险、旅行与住宿，以及那些只有在周期重复或婴儿早产时才会出现的条目。',
    },
  },
];

export const ASSESSMENT_NOTES: AssessmentNote[] = [
  {
    id: 'family-structure',
    when: { field: 'family', values: ['single', 'other'] },
    title: {
      en: 'Family structure is a legal test in some places, not a preference',
      zh: '在某些地方，家庭结构是一项法律检验，而不是一种偏好',
    },
    body: {
      en: 'Where a rule names a couple, a single parent can fall outside it however the destination is described in a brochure. One United States state in the survey we checked writes the restriction the other way and adds two more tests: its route is confined to married, heterosexual intended parents who are genetic to the child.',
      zh: '如果一条规则点名的是伴侣，那么无论宣传册如何描述这个目的地，单身父母都可能落在规则之外。在我们核查的这项调查中，有一个美国州份把限制写成了相反的方向，并且额外增加两项检验：它的路径仅限于已婚的、异性恋的、且与孩子有遗传联系的意向父母。',
    },
    link: { en: 'Read the United States record', zh: '阅读美国记录' },
    href: '/destinations/us',
    cite: { code: 'us', fact: 3 },
  },
  {
    id: 'two-of-you',
    when: { field: 'family', values: ['partner'] },
    title: {
      en: 'Being a couple does not automatically make you two legal parents',
      zh: '是伴侣并不会自动让你们成为两个法律上的父母',
    },
    body: {
      en: 'Some systems name one intended parent at birth and require a second route for the other, and some write their rule around a heterosexual couple. The restriction we found in one United States state is exactly that: married, heterosexual intended parents, genetic to the child. Ask who is a parent at birth, then ask what the second parent has to do.',
      zh: '有些体系在出生时只确立一位意向父母，另一位需要另一条路径；有些体系把规则写在异性恋伴侣之上。我们在一个美国州份发现的限制正是如此：已婚、异性恋、并与孩子有遗传联系的意向父母。先问出生时谁是父母，再问第二位父母需要做什么。',
    },
    link: { en: 'Read the United States record', zh: '阅读美国记录' },
    href: '/destinations/us',
    cite: { code: 'us', fact: 3 },
  },
  {
    id: 'unmarried',
    when: { field: 'relationship', values: ['unmarried'] },
    title: {
      en: 'An unmarried partner may not be a parent in the eyes of the destination',
      zh: '未婚伴侣在目的地的法律眼中可能不是父母',
    },
    body: {
      en: 'Some systems recognise a spouse and not a partner, which changes who has to apply after the birth and whether a second parent can be named at all. Ask which status the rule is written against before assuming the answer follows the relationship.',
      zh: '有些体系承认配偶而不承认伴侣，这会改变出生之后必须由谁提出申请，以及第二位父母能否被确立。先问规则写的是哪一种身份，再假设答案会跟着你的关系走。',
    },
    link: { en: 'Eligibility and parentage, question by question', zh: '逐条核对资格与亲权' },
    href: '/guides/surrogacy-legal-considerations',
  },
  {
    id: 'outside-the-usual-list',
    when: { field: 'nationality', values: ['cn', 'eu', 'ie', 'other'] },
    title: {
      en: 'A nationality outside the usual list makes recognition the first question, not the last',
      zh: '国籍在常见名单之外，承认问题就是第一个问题，而不是最后一个',
    },
    body: {
      en: 'The destination decides what happens at birth. The country whose passport the child will claim, or the country you will return to, decides whether that birth result is accepted there. Those are two legal systems and two lawyers.',
      zh: '目的地决定出生时发生什么。孩子将要申领护照的那个国家，或者你们要返回的那个国家，决定那里是否接受这个出生结果。这是两套法律体系，也是两位律师。',
    },
    link: { en: 'What to ask before you shortlist', zh: '入围之前要问什么' },
    href: '/articles/questions-to-ask-about-surrogacy-law-before-choosing-a-destination',
  },
  {
    id: 'resident-not-citizen',
    when: { field: 'residence', values: ['eu', 'ie', 'cn', 'other'] },
    title: {
      en: 'Living somewhere and being a citizen of it change different rules',
      zh: '居住在某地和是那里的公民，改变的是不同的规则',
    },
    body: {
      en: 'A rule about residents and a rule about citizens are not the same rule. Where you live tends to decide who will treat you and where the birth gets registered; what passport you hold tends to decide what the child can claim. Answering both with one sentence is how a shortlist goes wrong.',
      zh: '关于居民的规则和关于公民的规则不是同一条规则。你住在哪里通常决定了由谁来处理你们、出生在哪里登记；你持有什么护照通常决定了孩子可以主张什么。用一句话回答这两个问题，入围名单就是这样出错的。',
    },
    link: { en: 'Recognition where you live', zh: '你居住地的承认问题' },
    href: '/guides/surrogacy-legal-considerations',
  },
  {
    id: 'donor-gametes',
    when: { field: 'genetic', values: ['donor', 'undecided'] },
    title: {
      en: 'A donor changes the medical route and can change the legal one',
      zh: '使用捐赠的生殖细胞会改变医疗路径，也可能改变法律路径',
    },
    body: {
      en: 'Whose egg, whose sperm and who carries the pregnancy are three separate decisions, and in some places a required genetic link is written into the rule itself. Settling this before a destination is shortlisted avoids committing to a route that closes on that question.',
      zh: '谁的卵子、谁的精子、谁来怀孕，是三个分开的决定，而在某些地方，必需的遗传联系本身就写在规则里。在确定入围目的地之前先想清楚这一点，可以避免承诺一条会在这一问上关闭的路径。',
    },
    link: { en: 'Gamete and surrogate options', zh: '生殖细胞与代孕者的选择' },
    href: '/guides/gamete-and-surrogate-options',
  },
  {
    id: 'parentage-concern',
    when: { field: 'concerns', values: ['parentage'] },
    title: {
      en: 'Where parentage moves after the birth, the wait is part of the plan',
      zh: '当亲权在出生之后才转移时，等待本身就是计划的一部分',
    },
    body: {
      en: 'In the United Kingdom the surrogate remains the legal mother at birth unless a parental order is obtained, and the arrangement itself is not enforceable. That is not a reason to rule the country out. It is a reason to know, before choosing anything, that a court application sits after the birth rather than before it.',
      zh: '在英国，除非取得亲权令，代孕者在出生时仍然是法律上的母亲，而且安排本身不具有可执行性。这不是把这个国家排除在外的理由。它是一个理由，让你在选定任何东西之前就知道：一份法院申请排在出生之后，而不是出生之前。',
    },
    link: { en: 'Read the United Kingdom record', zh: '阅读英国记录' },
    href: '/destinations/gb',
    cite: { code: 'gb', fact: 0 },
  },
  {
    id: 'cost-concern',
    when: { field: 'concerns', values: ['cost'] },
    title: { en: 'Compare item lists, not headline figures', zh: '比较条目清单，而不是头部数字' },
    body: {
      en: 'Two quotes that differ by forty per cent can contain the same medicine and differ on what happens after a failed transfer. What you are comparing is scope: which stages are covered, who bills outside them, and what comes back if the program stops.',
      zh: '两份相差百分之四十的报价可能包含同样的医疗内容，只是在移植失败之后如何处理上不同。你比较的是范围：覆盖哪些阶段、谁在其外另行计费，以及疗程停止时能退回什么。',
    },
    link: { en: 'Put two quotes side by side', zh: '把两份报价并排放' },
    href: '/tools/agency-quote-comparison',
  },
  {
    id: 'presence-concern',
    when: { field: 'concerns', values: ['presence'] },
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
    when: { field: 'concerns', values: ['medical'] },
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
    when: { field: 'concerns', values: ['eligibility'] },
    title: {
      en: 'Eligibility has to be read as a rule, not as a track record',
      zh: '资格必须当作规则来读，而不是当作业绩',
    },
    body: {
      en: 'A provider’s history of placing families in your situation is evidence about practice. It is not the rule, and it is not a promise about your case. Ask which provision says who may commission, then ask a lawyer in that jurisdiction to confirm it applies to you.',
      zh: '一个机构安置过多少个与你情况相同的家庭，是关于惯例的证据。它不是规则，也不是关于你这个案例的承诺。先问哪一条规定写明谁可以委托，再请该辖区的律师确认它适用于你。',
    },
    link: { en: 'The destination records', zh: '目的地记录' },
    href: '/destinations',
  },
  {
    id: 'budget-unknown',
    when: { field: 'budget', values: ['unknown', 'limited'] },
    title: { en: 'Build the cost list before the country list', zh: '先建费用清单，再建国家清单' },
    body: {
      en: 'Without an item list, every destination looks affordable and every quote looks complete. Canada shows why scope matters more than totals: paying a surrogate is prohibited, while reimbursement of her regulated expenses is permitted and documented, so the shape of the money is set by the law rather than by the market.',
      zh: '没有条目清单时，每个目的地都显得负担得起，每份报价都显得完整。加拿大说明了为什么范围比总额更要紧：向代孕者付款是被禁止的，而对她受监管的开支的报销是允许的、有文件依据的，因此金钱的形态由法律规定，而不是由市场决定。',
    },
    link: { en: 'The costs a quote leaves out', zh: '报价不包含的费用' },
    href: '/articles/surrogacy-costs-that-sit-outside-a-quote',
    cite: { code: 'ca', fact: 1 },
  },
  {
    id: 'budget-set',
    when: { field: 'budget', values: ['set'] },
    title: {
      en: 'A figure you already hold is worth testing against inclusions',
      zh: '你已经持有的那个数字，值得对着包含项检验一次',
    },
    body: {
      en: 'Write the number down next to what it is stated to cover, then list what it does not. The gap between those two columns is the budget you will actually need, and it is the part a comparison of headline prices hides.',
      zh: '把数字写下来，在旁边列出它据称覆盖的内容，然后再列出它不覆盖的内容。这两栏之间的差额才是你实际需要的预算，也正是头部价格比较会隐藏的那部分。',
    },
    link: { en: 'What to budget for and what to verify', zh: '该为什么做预算、该核实什么' },
    href: '/guides/surrogacy-cost',
  },
  {
    id: 'travel-limited',
    when: { field: 'travel', values: ['limited', 'remote', 'unsure'] },
    title: {
      en: 'Travel limits narrow the field faster than budget does',
      zh: '旅行限制比预算更快地缩小范围',
    },
    body: {
      en: 'A stay of weeks after the birth, or two attended visits, rules out options for people who cannot leave for long. That is a real constraint and worth stating plainly at the first conversation rather than discovering it at the fourth.',
      zh: '出生之后停留数周，或者两次必须本人出席的到访，会让无法长时间离开的人失去一些选项。这是一个真实的约束，值得在第一次沟通时就说明白，而不是到第四次才发现。',
    },
    link: { en: 'Ask how long the family must stay', zh: '问清家庭必须停留多久' },
    href: '/tools/destination-research-checklist',
  },
  {
    id: 'stage-exploring',
    when: { field: 'stage', values: ['exploring'] },
    title: {
      en: 'At this stage the goal is a shorter list of questions, not a shorter list of countries',
      zh: '在这一阶段，目标是问题清单变短，而不是国家清单变短',
    },
    body: {
      en: 'Learn how legal systems differ in shape first: which ones decide by statute, which by court decision, which region by region. Once the shapes make sense, a country name tells you what to expect instead of what to hope.',
      zh: '先了解法律体系在形态上有什么不同：哪些由成文法决定，哪些由法院判决决定，哪些按地区分别决定。一旦这些形态说得通，一个国家的名字就会告诉你该期待什么，而不是该希望什么。',
    },
    link: { en: 'The destination records', zh: '目的地记录' },
    href: '/destinations',
  },
  {
    id: 'stage-comparing',
    when: { field: 'stage', values: ['comparing'] },
    title: {
      en: 'Comparing places on price alone compares them on the wrong column',
      zh: '只按价格比较地点，比较的是错误的那一列',
    },
    body: {
      en: 'Two destinations at the same cost can differ on whether you can be named at birth, how many trips are needed, and whether the money is protected while you wait. Put the conditions in the same row before the totals go in.',
      zh: '两个费用相同的目的地，可能在你能否在出生时就被确立、需要出行几次、以及等待期间资金是否受到保护上完全不同。先把条件放进同一行，再把总额放进去。',
    },
    link: { en: 'Score them on the same rows', zh: '让它们在同一组行上打分' },
    href: '/tools/destination-research-checklist',
  },
  {
    id: 'stage-verifying',
    when: { field: 'stage', values: ['verifying'] },
    title: {
      en: 'With a target already named, work the checklist against it',
      zh: '已经点名了目标之后，就把清单对着它逐项过一遍',
    },
    body: {
      en: 'Take the destination you have in mind through every question that has an owner, and record who answered and when. A row you cannot get answered in writing is a finding in itself, and it is usually more informative than the answer a provider gives verbally.',
      zh: '带你心中的那个目的地过一遍每一个有归属人的问题，并记录由谁回答、在何时回答。某一行你无法以书面形式得到答案，这本身就是结论，而且它通常比机构口头给出的答案更有信息量。',
    },
    link: { en: 'Open the research checklist', zh: '打开研究清单' },
    href: '/tools/destination-research-checklist',
  },
  {
    id: 'timing-soon',
    when: { field: 'timing', values: ['soon'] },
    title: {
      en: 'If you want to move soon, the legal opinion is the long item',
      zh: '如果你想很快推进，法律意见才是那个耗时最长的项目',
    },
    body: {
      en: 'Medical scheduling is usually the thing people chase first and the thing that moves fastest. A written view from a lawyer in the destination, and a second one in your own country, take longer to obtain and change what you should even be scheduling.',
      zh: '医疗排期通常是人们最先追、也是推进最快的东西。而一份来自目的地律师的书面意见，加上另一份来自你自己国家的意见，取得起来更久，并且会改变你究竟应该安排什么。',
    },
    link: { en: 'How the assessment service works', zh: '评估服务如何运作' },
    href: '/assessment',
  },
];

export const ASSESSMENT_OWNERS: { who: Bilingual; owns: Bilingual }[] = [
  {
    who: { en: 'A reproductive lawyer in the destination', zh: '目的地当地的生殖法律师' },
    owns: {
      en: 'Whether the rule covers your family, what the contract can bind, what the court will do and how long it takes.',
      zh: '规则是否覆盖你的家庭、合同能够约束什么、法院会做什么，以及需要多长时间。',
    },
  },
  {
    who: { en: 'A lawyer where you are from or live', zh: '你来自或居住地的律师' },
    owns: {
      en: 'Whether your country accepts the birth result, who the legal parents are there, and what the child can enter on.',
      zh: '你的国家是否接受这个出生结果、在那里谁是法律上的父母，以及孩子凭什么入境。',
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
      zh: '附有来源的法律记录、要向上面每一方提出的问题，以及让他们的回答保持可比的比较工具。',
    },
  },
];

/** The strings the module script needs are serialized into the DOM, not imported by it. */
export type AssessmentChrome = {
  eyebrow: string;
  heading: string;
  intro: string;
  privacy: string;
  stepsLabel: string;
  lastStep: string;
  chooseAny: string;
  optional: string;
  back: string;
  next: string;
  submit: string;
  hintRequired: string;
  hintComplete: string;
  hintProgress: string;
  noscript: string;
  resultsHeading: string;
  resultsModeFull: string;
  resultsIntro: string;
  coreHeading: string;
  notesHeading: string;
  ownersHeading: string;
  ownersIntro: string;
  /**
   * Sits directly against the publisher link, so the space English needs is part of this string:
   * the full-width Chinese colon carries its own spacing and takes none.
   */
  sourceLabel: string;
  checkedLabel: string;
  notesEmpty: string;
  copyButton: string;
  downloadButton: string;
  checklistLink: string;
  copyExplanation: string;
  handoffTitle: string;
  handoffWithEmail: string;
  handoffNoEmail: string;
  handoffBrief: string;
  handoffStandards: string;
  modeNarrowed: string;
  summaryMatched: string;
  summaryUnmatched: string;
  errorStepComplete: string;
  errorStepOpen: string;
  copied: string;
  copyBlocked: string;
  export: {
    title: string;
    assembled: string;
    note: string;
    answers: string;
    core: string;
    changes: string;
    owners: string;
    /**
     * The document a reader hands to a lawyer. The markdown markers of that document (the `#`
     * headings, the `- ` list bullets, the autolink brackets) are assembled in the script, because
     * they are document syntax and the same in both languages; what is stored here is the wording
     * around them. No angle brackets appear in these templates, because the whole dictionary is
     * serialized into one HTML attribute. English separates a label from its value with ": "; the
     * Chinese full-width colon carries its own spacing, and where the label is a question it ends
     * in a question mark already, so the two halves need nothing between them.
     */
    answerLine: string;
    sourceLine: string;
    nextLine: string;
    ownerLine: string;
    /** Separates the chosen labels inside one answer line. */
    valueJoin: string;
    footer: string;
    filename: string;
    /** BCP 47 tag for the date stamped into the exported document. */
    dateLocale: string;
  };
};

export const ASSESSMENT_CHROME: Record<Lang, AssessmentChrome> = {
  en: {
    eyebrow: 'Preliminary assessment',
    heading: 'Which destinations should you research first?',
    intro:
      'Answer ten questions about your family, your goals and your practical conditions. The result is a roadmap of what to verify, in the order it tends to bite. It is not a legal opinion, it is not medical advice, and it will not name a country as suitable for you, because the verified material on this site describes how each legal system works rather than which family may use it.',
    privacy:
      'Nothing is submitted. Your answers are kept in this browser so a reload does not lose them, and clearing site data removes them. No name, contact details, identity documents, medical records or financial information are collected at any step.',
    stepsLabel: 'Assessment steps',
    lastStep: 'then your roadmap',
    chooseAny: 'choose any',
    optional: 'optional',
    back: 'Back',
    next: 'Next step',
    submit: 'Show my roadmap',
    hintRequired: '{n} required answers. The genetic question can be skipped.',
    hintComplete: 'All {n} answers are in. Nothing here is sent anywhere.',
    hintProgress: '{filled} of {total} answers given. Empty ones may be on another step.',
    noscript:
      'All ten questions are shown above in one list, and every roadmap note below is visible. There are no step buttons because there is nothing to step through: read the notes that match your situation and ignore the rest.',
    resultsHeading: 'Your destination research roadmap',
    resultsModeFull: 'Full list, nothing filtered',
    resultsIntro:
      'This is the whole roadmap. Answer the questions above and the version you get will drop the parts that do not apply to you.',
    coreHeading: 'The three questions to verify first',
    notesHeading: 'What your answers change',
    ownersHeading: 'Who owns each answer',
    ownersIntro:
      'The roadmap above is a research plan. These are the people who can actually settle the questions in it, and this site is not one of them.',
    sourceLabel: 'Source: ',
    checkedLabel: 'checked {date}',
    notesEmpty: 'Nothing in your answers narrowed the list, so every note is still in it.',
    copyButton: 'Copy the roadmap',
    downloadButton: 'Download as a document',
    checklistLink: 'Work through every question',
    copyExplanation:
      'Copying and downloading keep the roadmap on your side: it is assembled in this browser into a text file you can send to a lawyer or paste into a note. Nothing is uploaded to us when you use them.',
    handoffTitle: 'Want the same list as a written brief?',
    handoffWithEmail:
      'Optional, and it changes nothing about the roadmap above: you can send your answers to a lawyer, or to us, instead of retyping them.',
    handoffNoEmail:
      'The roadmap is the deliverable at this stage, and it is complete without contact details. When you are ready to put these questions to a person, the enquiry builder on the home page assembles the same answers into a brief that you send yourself.',
    handoffBrief: 'Build the enquiry brief',
    handoffStandards: 'How we source a claim',
    modeNarrowed: 'Narrowed from your {n} answer{s}',
    summaryMatched:
      '{n} note{s} below match the answers above. The three questions to verify first do not change: every route has to answer them.',
    summaryUnmatched:
      'None of your answers narrowed the notes, so the full list is still shown. The three questions to verify first apply whatever you answered.',
    errorStepComplete: 'Answer every required question on this step before moving on.',
    errorStepOpen: 'Step {num} still has a required question empty, and it is open now.',
    copied: 'Copied',
    copyBlocked: 'Copying is blocked here. Use Download instead.',
    export: {
      title: 'Destination research roadmap',
      assembled: 'Assembled from the SurrogacyBase assessment on {date}.',
      note: 'A research plan, not a legal opinion and not a shortlist.',
      answers: 'Your answers',
      core: 'The three questions to verify first',
      changes: 'What your answers change',
      owners: 'Who owns each answer',
      answerLine: '{question}: {answer}',
      sourceLine: 'Source: {label}',
      nextLine: 'Next: {label}',
      ownerLine: '{who}: {owns}',
      valueJoin: ', ',
      footer:
        'Generated in the browser by SurrogacyBase. These answers were entered by the reader and nothing was sent to a server.',
      filename: 'surrogacy-destination-roadmap.md',
      dateLocale: 'en-US',
    },
  },

  zh: {
    eyebrow: '初步评估',
    heading: '你应该先研究哪些目的地？',
    intro:
      '回答十个关于你的家庭、你的目标和你的现实条件的问题。结果是一份关于要核实什么的路线图，按它通常最先出问题的顺序排列。它不是法律意见，不是医疗建议，也不会点名某个国家对你合适，因为本站已核实的资料描述的是每个法律体系如何运作，而不是哪个家庭可以使用它。',
    privacy:
      '任何内容都不会被提交。你的答案保存在这个浏览器里，因此刷新页面不会丢失，清除站点数据即可删除。任何一步都不收集姓名、联系方式、身份证明、医疗记录或财务信息。',
    stepsLabel: '评估步骤',
    lastStep: '然后是你的路线图',
    chooseAny: '可多选',
    optional: '可选',
    back: '上一步',
    next: '下一步',
    submit: '显示我的路线图',
    hintRequired: '共 {n} 个必填回答。遗传联系那一题可以跳过。',
    hintComplete: '{n} 项必填回答已全部完成。这些内容不会发送到任何地方。',
    hintProgress: '已回答 {filled} / {total} 项。空着的那几项可能在其他步骤里。',
    noscript:
      '上面以一份列表展示了全部十个问题，下面每一条路线图备注也都可见。没有步骤按钮，因为不需要逐步翻页：阅读与你情况相符的备注，其余忽略即可。',
    resultsHeading: '你的目的地研究路线图',
    resultsModeFull: '完整列表，未经筛选',
    resultsIntro: '这是完整的路线图。回答上面的问题之后，你得到的版本会去掉不适用于你的部分。',
    coreHeading: '最先要核实的三个问题',
    notesHeading: '你的回答会改变什么',
    ownersHeading: '每个答案由谁负责',
    ownersIntro: '上面的路线图是一份研究计划。下面这些才是真正能确定其中问题的人，而本站不在其中。',
    sourceLabel: '来源：',
    checkedLabel: '核查于 {date}',
    notesEmpty: '你的回答没有缩小这个列表，所以每一条备注都还在里面。',
    copyButton: '复制路线图',
    downloadButton: '下载为文档',
    checklistLink: '逐题处理每一个问题',
    copyExplanation:
      '复制和下载都把路线图留在你这一侧：它是在这个浏览器里整理成一个文本文件的，你可以把它发给律师，或者粘贴进笔记。使用时没有任何内容上传给我们。',
    handoffTitle: '想要同一份清单的书面简报？',
    handoffWithEmail: '这是可选项，而且不会改变上面路线图的任何内容：你可以把自己的答案发给律师，或者发给我们，而不必重新打字。',
    handoffNoEmail:
      '在这一阶段，路线图就是交付物，而且它在没有联系方式的情况下也是完整的。当你准备好把这些问题交给一个真人时，首页上的问询生成器会把同样的答案整理成一份由你自己发出的简报。',
    handoffBrief: '生成问询简报',
    handoffStandards: '我们如何为一条结论列出来源',
    modeNarrowed: '已根据你的 {n} 项回答缩小',
    summaryMatched: '下面 {n} 条备注与上面的回答相符。最先要核实的那三个问题不会改变：每一条路径都必须回答它们。',
    summaryUnmatched: '你的回答没有缩小任何备注，所以仍然显示完整列表。最先要核实的那三个问题，无论你回答什么都适用。',
    errorStepComplete: '在继续之前，请回答本步骤中每一个必填问题。',
    errorStepOpen: '第 {num} 步仍有必填问题没有回答，现在已为你打开。',
    copied: '已复制',
    copyBlocked: '这里禁止复制。请改用下载。',
    export: {
      title: '目的地研究路线图',
      assembled: '由 SurrogacyBase 评估工具在 {date} 生成。',
      note: '这是一份研究计划，不是法律意见，也不是入围名单。',
      answers: '你的回答',
      core: '最先要核实的三个问题',
      changes: '你的回答会改变什么',
      owners: '每个答案由谁负责',
      answerLine: '{question}{answer}',
      sourceLine: '来源：{label}',
      nextLine: '下一步：{label}',
      ownerLine: '{who}：{owns}',
      valueJoin: '、',
      footer: '本文件由 SurrogacyBase 在浏览器中生成。这些答案由读者本人填写，没有任何内容被发送到服务器。',
      filename: 'surrogacy-destination-roadmap-zh.md',
      dateLocale: 'zh-CN',
    },
  },
};
