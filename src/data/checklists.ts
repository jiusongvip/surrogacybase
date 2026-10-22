/*
 * The two working checklists, in both languages.
 *
 * Each question is a { en, zh } pair rather than two parallel files, because the list itself is
 * the argument: thirty-three questions across seven groups, in the order the answers stop being
 * interchangeable. If a translation were allowed to drop a group or an item, the Chinese reader
 * would be handed a shorter enquiry and the export would no longer match the one a lawyer
 * compares it against. The compiler demands both halves of every pair, so the two lists cannot
 * drift apart.
 *
 * Three things are deliberately not bilingual here:
 *   - `id` values, which are data rather than wording.
 *   - The export filename, which the page stamps with the locale so a Chinese document does not
 *     arrive with an English name on it.
 *   - The hrefs, written without a language prefix and localized on render.
 */
import type { Lang } from '@/i18n/config';
import type { Bilingual } from '@/i18n/ui';

export type ChecklistItem = { id: string; question: Bilingual };

export type ChecklistGroup = {
  id: string;
  title: Bilingual;
  /** Why this group is answered by a named person rather than looked up. */
  hint?: Bilingual;
  items: ChecklistItem[];
};

export type ChecklistPageCopy = {
  /** The browser and search-result title, which is title case in English. */
  title: string;
  description: string;
  h1: string;
  /** Split around the emphasized word so the English page keeps its own `<em>`. */
  ledeBefore: string;
  ledeEm: string;
  ledeAfter: string;
  /** The line beside the lock icon, which states where the entries go. */
  note: string;
  closing: { heading: string; body: string };
  links: [string, string];
};

export type Checklist = {
  id: string;

  /** The export filename without its locale stamp or extension. */
  stem: string;
  /** The two links are buttons or text links per page, and the second is primary on neither. */
  cta: 'text' | 'button';
  hrefs: [string, string];
  page: Record<Lang, ChecklistPageCopy>;
  groups: ChecklistGroup[];
};

/*
 * Questions only. Nothing in either list states what any country's law requires or how any agency
 * behaves, because the page's job is to make the reader ask a person who can say it.
 */
export const CHECKLISTS: Checklist[] = [
  {
    id: 'destination-research-checklist',
    stem: 'surrogacy-destination-research',
    cta: 'text',
    hrefs: ['/destinations', '/guides/surrogacy-legal-considerations'],
    page: {
      en: {
        title: 'Destination Research Checklist',
        description:
          'Every question to have answered for each country on a surrogacy shortlist: eligibility, parentage, nationality, medical scope, money, presence and dispute routes.',
        h1: 'Destination research checklist',
        ledeBefore:
          'A country is not a decision. It is a set of questions that have to be answered for ',
        ledeEm: 'your',
        ledeAfter:
          ' situation by a person who can answer them. This list is those questions, grouped by who usually owns the answer.',
        note: 'Work through it once per destination. This page collects nothing: the questions are the page, and the file you download is a document you keep.',
        closing: {
          heading: 'What this list will not do for you',
          body:
            'It does not state what any country requires, and it holds no answers. An answer is one named professional saying something about your own facts, in writing. That sentence belongs beside the question in the file you download, with the date it arrived, and the list stays honest about the questions still without one.',
        },
        links: ['Read the sourced destination record', 'The four legal questions to settle first'],
      },
      zh: {
        title: '目的地研究清单',
        description:
          '每一个候选目的地都需要有人回答的问题：资格、亲权、国籍、医疗范围、资金、实地停留，以及争议的处理途径。',
        h1: '目的地研究清单',
        ledeBefore: '一个国家不是一个决定。它是一组问题，必须由能够回答的人，针对',
        ledeEm: '您自己',
        ledeAfter: '的情况逐条回答。这份清单就是那些问题，按通常由谁负责回答来分组。',
        note: '每个目的地都用这一份。这个页面不收集任何东西：问题就是这份页面本身，而您下载到的文件由您自己保存。',
        closing: {
          heading: '这份清单不会替您做什么',
          body:
            '它不说明任何国家的要求，里面也没有答案。答案是一位具名的专业人士针对您自身的情况写下的那句话。那句话应当落在您下载的文件里，写在对应问题的旁边，并记下它收到的日期；而那些仍然没有答案的问题，这份清单会照实留着。',
        },
        links: ['阅读有来源的目的地记录', '最先要确定的四个法律问题'],
      },
    },
    groups: [
      {
        id: 'eligibility',
        title: {
          en: 'Who may commission, and whether we are inside that',
          zh: '谁可以委托，以及我们是否在其中',
        },
        hint: {
          en: 'A line counts as answered when one named professional has said it about your own facts, in writing.',
          zh: '一条问题算作有了答案，是在一位具名的专业人士针对您自身的情况以书面形式说过之后。',
        },
        items: [
          {
            id: 'who-may',
            question: {
              en: 'Who is permitted to commission a surrogacy here, stated as a rule rather than as practice?',
              zh: '在这里谁被允许委托代孕？请以规则而非惯例来表述。',
            },
          },
          {
            id: 'our-facts',
            question: {
              en: 'Do our marital status, age, sexual orientation, existing children or health history fall inside or outside that?',
              zh: '我们的婚姻状况、年龄、性取向、已有的孩子或健康史，落在这一规则的里面还是外面？',
            },
          },
          {
            id: 'genetic',
            question: {
              en: 'Is a genetic link to at least one intended parent required, and what changes if it is?',
              zh: '是否要求与至少一位意向父母存在基因联系？如果有这一要求，会有什么变化？',
            },
          },
          {
            id: 'approval',
            question: {
              en: 'Whose approval must be given before treatment starts, and how long does that take in practice?',
              zh: '治疗开始之前必须由谁批准？实际操作中这需要多长时间？',
            },
          },
          {
            id: 'embryos',
            question: {
              en: 'Are there rules on the number of embryos transferred, or on selective reduction?',
              zh: '对移植胚胎的数量，或者对减胎选择，是否另有限制性的规则？',
            },
          },
        ],
      },
      {
        id: 'parentage',
        title: { en: 'Who the child belongs to at birth', zh: '孩子出生时属于谁' },
        hint: {
          en: 'Parentage and nationality are two different questions that people routinely merge into one.',
          zh: '亲权和国籍是两个不同的问题，人们却常常把它们并成一个。',
        },
        items: [
          {
            id: 'mother',
            question: {
              en: 'Who is the legal mother at birth, regardless of whose egg was used?',
              zh: '无论使用的是谁的卵子，出生时的法律母亲是谁？',
            },
          },
          {
            id: 'route',
            question: {
              en: 'By what order or registration does parentage move to us, and what is it called?',
              zh: '亲权通过哪一项裁定或登记转移给我们？它在法律上叫什么？',
            },
          },
          {
            id: 'timing',
            question: {
              en: 'When can that order be applied for, and how long does a determination take?',
              zh: '那项裁定可以在什么时候申请？作出裁定需要多长时间？',
            },
          },
          {
            id: 'certificate',
            question: {
              en: 'Which names appear on the birth certificate we are able to obtain, and on the one issued later?',
              zh: '我们能够拿到的出生证明上写着谁的名字？之后签发的那一份又写着谁的名字？',
            },
          },
          {
            id: 'consent',
            question: {
              en: 'Does the surrogate have to consent after birth, and can that consent be withheld?',
              zh: '代孕者是否必须在分娩后表示同意？这份同意可以被拒绝给出吗？',
            },
          },
        ],
      },
      {
        id: 'nationality',
        title: { en: 'Nationality, documents and getting home', zh: '国籍、文件与回国' },
        items: [
          {
            id: 'basis',
            question: {
              en: 'What nationality does the child acquire at birth, and on which basis?',
              zh: '孩子在出生时取得哪一国国籍？依据是什么？',
            },
          },
          {
            id: 'travel',
            question: {
              en: 'What travel document can the child leave the country on, and which authority issues it?',
              zh: '孩子可以持哪种旅行证件离开这个国家？由哪一个机关签发？',
            },
          },
          {
            id: 'recognition',
            question: {
              en: 'Will our own country recognise the parentage established here, and through what process?',
              zh: '我们自己的国家是否会承认在这里确立的亲权？通过什么程序？',
            },
          },
          {
            id: 'stay',
            question: {
              en: 'How long must the family remain in country after birth, and who can state that in writing?',
              zh: '出生后全家必须在当地停留多久？谁能够把这一点书面写明？',
            },
          },
          {
            id: 'registration',
            question: {
              en: 'What has to be registered at home after arrival, and within what deadline?',
              zh: '回到国内之后需要登记什么？登记的期限是多久？',
            },
          },
        ],
      },
      {
        id: 'medical',
        title: { en: 'What the medical program actually covers', zh: '医疗方案实际覆盖到什么' },
        items: [
          {
            id: 'clinic',
            question: {
              en: 'Which clinic runs the treatment, and who is accountable for it?',
              zh: '由哪家诊所执行治疗？谁对它负责？',
            },
          },
          {
            id: 'material',
            question: {
              en: 'Whose eggs, whose sperm and whose uterus, and what screening applies to each?',
              zh: '用的是谁的卵子、谁的精子、谁的子宫？每一项分别适用什么筛查？',
            },
          },
          {
            id: 'counselling',
            question: {
              en: 'Is counselling provided, to whom, and is it independent of the program?',
              zh: '是否提供心理咨询？提供给谁？它是否独立于这个方案之外？',
            },
          },
          {
            id: 'attempts',
            question: {
              en: 'How many transfer attempts are inside the quoted program before it is treated as unsuccessful?',
              zh: '报价所含的方案里包含多少次移植？超过之后就被视为未成功？',
            },
          },
          {
            id: 'storage',
            question: {
              en: 'What happens to stored embryos if the program ends before a pregnancy?',
              zh: '如果方案在怀孕之前就结束，冷冻保存的胚胎会怎么处理？',
            },
          },
        ],
      },
      {
        id: 'money',
        title: { en: 'Money, stages and what comes back', zh: '资金、阶段与可退回的部分' },
        hint: {
          en: 'The numbers go into the comparison tool. What belongs beside each question here is a name and a date.',
          zh: '金额填入对比工具。这里每个问题旁边应保留的，是一个名字和一个日期。',
        },
        items: [
          {
            id: 'included',
            question: {
              en: 'What is inside the quoted fee, and what is billed later by a third party?',
              zh: '报价之内包含什么？什么会由第三方在之后另行计费？',
            },
          },
          {
            id: 'stages',
            question: {
              en: 'When is each payment due against each stage, and how much is refundable at that point?',
              zh: '每一笔付款对应哪一个阶段、何时到期？在那个时点有多少可以退回？',
            },
          },
          {
            id: 'escrow',
            question: {
              en: 'Is an escrow or managed account used, who administers it, and what do they charge?',
              zh: '是否使用第三方资金托管账户？由谁管理？收取多少费用？',
            },
          },
          {
            id: 'insurance',
            question: {
              en: 'What insurance covers the surrogate, and what would our own cover have to pay for?',
              zh: '代孕者由什么保险覆盖？哪些部分要由我们自己的保险来支付？',
            },
          },
          {
            id: 'overrun',
            question: {
              en: 'What is the stated process when a cost falls outside the quote, and who approves it first?',
              zh: '当一项支出落在报价之外时，书面规定的流程是什么？由谁先批准？',
            },
          },
        ],
      },
      {
        id: 'presence',
        title: { en: 'Being there, and for how long', zh: '到场，以及停留多久' },
        items: [
          {
            id: 'attendance',
            question: {
              en: 'Which stages require our physical presence and which can be handled by a representative?',
              zh: '哪些阶段必须本人到场？哪些可以由代理人办理？',
            },
          },
          {
            id: 'trips',
            question: {
              en: 'How many trips, of what length, at which points in the process?',
              zh: '需要几次行程？每次多长？分别在流程的哪个节点？',
            },
          },
          {
            id: 'documents',
            question: {
              en: 'What visas, appointments and documents does each trip require?',
              zh: '每次行程需要什么签证、预约和文件？',
            },
          },
          {
            id: 'disruption',
            question: {
              en: 'If a travel restriction or illness lands mid-program, what does the contract say happens next?',
              zh: '如果旅行限制或疾病出现在方案中途，合同写明的下一步是什么？',
            },
          },
        ],
      },
      {
        id: 'advice',
        title: {
          en: 'Independent advice and what happens in a dispute',
          zh: '独立意见，以及发生争议时怎么办',
        },
        items: [
          {
            id: 'our-lawyer',
            question: {
              en: 'Which lawyer will read the contract for us, in whose jurisdiction, and who pays?',
              zh: '由哪位律师为我们审阅合同？在谁的法域执业？费用由谁承担？',
            },
          },
          {
            id: 'their-lawyer',
            question: {
              en: 'Is the surrogate independently advised, and is that advice paid for from our money?',
              zh: '代孕者是否获得了独立的法律意见？这份意见是不是用我们的钱支付的？',
            },
          },
          {
            id: 'disagreement',
            question: {
              en: 'What happens if we and the provider disagree on something material, and what is the first step?',
              zh: '如果我们与服务方在实质性事项上不一致，会发生什么？第一步是什么？',
            },
          },
          {
            id: 'forum',
            question: {
              en: 'Which court, register or body would hear a dispute, and in which country?',
              zh: '争议会由哪个法院、登记机关或机构受理？在哪个国家？',
            },
          },
        ],
      },
    ],
  },
  {
    id: 'agency-question-checklist',
    stem: 'surrogacy-agency-questions',
    cta: 'button',
    hrefs: ['/tools/agency-quote-comparison', '/guides/choosing-a-surrogacy-agency'],
    page: {
      en: {
        title: 'Agency Question Checklist',
        description:
          'The questions to put to a surrogacy agency in writing before signing: scope of the fee, payment stages, refunds, screening, legal work, and what happens if a cycle fails.',
        h1: 'Agency question checklist',
        ledeBefore: '',
        ledeEm: '',
        ledeAfter:
          'Two firms can quote the same total and be selling different things. What makes the difference visible is an answer you can read again, in writing, beside the date it arrived and the name that gave it.',
        note: 'This page collects nothing and contacts no one for you. Download the list, put it to a firm in your own words, and keep what comes back in that file.',
        closing: {
          heading: 'Then put the answers next to the numbers',
          body:
            'Once the answers are in, the quote becomes comparable rather than merely readable. The comparison tool sets two quotes against the same nine costs and keeps unconfirmed amounts out of the totals, so a total never looks finished when it is not.',
        },
        links: ['Compare the quotes', 'What a contract should state'],
      },
      zh: {
        title: '机构提问清单',
        description:
          '签约之前要书面提交给代孕机构的问题：费用的范围、付款阶段、退款、筛查、法律工作，以及一次周期失败之后会怎样。',
        h1: '机构提问清单',
        ledeBefore: '',
        ledeEm: '',
        ledeAfter:
          '两家机构可以报出同一个总额，卖的却是不同的东西。让差别显现出来的，是一份您可以再读一遍的书面回答，旁边写着它收到的日期和给出回答的人。',
        note: '这个页面不收集任何内容，也不会代您联系任何人。把清单下载下来，用您自己的话提给机构，再把对方的答复留在那份文件里。',
        closing: {
          heading: '然后将答案记在金额旁边',
          body:
            '答案到位之后，报价就变得可以对比，而不只是可以阅读。对比工具把两份报价对在同一组九项成本上，并且让未经确认的金额不进合计，于是一个总额永远不会在它并不完整的时候看起来已经完整。',
        },
        links: ['对比这些报价', '合同应当写明什么'],
      },
    },
    groups: [
      {
        id: 'scope',
        title: { en: 'What the fee buys, and who does the work', zh: '这笔费用买到什么，由谁来做事' },
        hint: {
          en: 'Ask for this in writing before the first payment. A verbal walk-through cannot be compared.',
          zh: '在第一笔付款之前就要书面索取这些内容。口头讲解无法被对比。',
        },
        items: [
          {
            id: 'services',
            question: {
              en: 'Which services does the fee cover, listed individually rather than as a program?',
              zh: '这笔费用覆盖哪些服务？请逐项列出，而不是打包成一个方案。',
            },
          },
          {
            id: 'outsourced',
            question: {
              en: 'Which of those are performed by a third party, and who selects and pays that party?',
              zh: '其中哪些由第三方执行？该第三方由谁选择、由谁支付？',
            },
          },
          {
            id: 'contact',
            question: {
              en: 'Who is our named contact, what are their qualifications, and what happens when they are unavailable?',
              zh: '我们指定的对接人是谁？其资历如何？当其无法联系时会发生什么？',
            },
          },
          {
            id: 'staffing',
            question: {
              en: 'How many families is that person carrying at once?',
              zh: '这个人同时接手多少个家庭？',
            },
          },
          {
            id: 'responsibility',
            question: {
              en: 'Which responsibilities stay with us throughout?',
              zh: '哪些责任自始至终都由我们自己承担？',
            },
          },
        ],
      },
      {
        id: 'money',
        title: { en: 'Money, stages and what comes back', zh: '资金、阶段与可退回的部分' },
        items: [
          {
            id: 'estimate',
            question: {
              en: 'What is excluded from the quote that we should expect to pay anyway?',
              zh: '报价排除了哪些我们仍然预期要支付的费用？',
            },
          },
          {
            id: 'schedule',
            question: {
              en: 'Which payment falls due at which stage, and against what trigger?',
              zh: '哪一笔付款落在哪一个阶段？以什么事件为触发条件？',
            },
          },
          {
            id: 'refund',
            question: {
              en: 'If we withdraw at each stage, what is refundable and within how long?',
              zh: '如果我们在各个阶段退出，哪些部分可以退回？在多长时间内退回？',
            },
          },
          {
            id: 'holdings',
            question: {
              en: 'Where is our money held before it is spent, and in whose name?',
              zh: '我们的钱在支出之前存放在哪里？以谁的名义持有？',
            },
          },
          {
            id: 'overrun',
            question: {
              en: 'When a cost exceeds the estimate, who has to approve it before it is incurred?',
              zh: '当一项支出超出估算时，在发生之前必须由谁批准？',
            },
          },
        ],
      },
      {
        id: 'surrogate',
        title: { en: 'The surrogate’s own position', zh: '代孕者自身的处境' },
        hint: {
          en: 'How this is answered usually tells you more about a program than any brochure does.',
          zh: '这一组问题的回答，通常比任何宣传册都更能说明一个方案。',
        },
        items: [
          {
            id: 'recruitment',
            question: {
              en: 'How are candidates recruited, and what do you tell them about us?',
              zh: '人选是如何招募的？您会向他们如何描述我们？',
            },
          },
          {
            id: 'screening',
            question: {
              en: 'What medical, psychological and background screening applies, who performs it, and who pays?',
              zh: '适用哪些医学、心理与背景筛查？由谁执行？由谁支付？',
            },
          },
          {
            id: 'independent',
            question: {
              en: 'Does the surrogate have her own lawyer and her own independent advice before signing?',
              zh: '代孕者在签署之前是否有自己的律师和自己的独立意见？',
            },
          },
          {
            id: 'existing',
            question: {
              en: 'Has she been pregnant before and does she have her own children, and what has she been told about future fertility?',
              zh: '她此前是否怀孕过、是否有自己的孩子？关于日后的生育能力，她被告知了什么？',
            },
          },
          {
            id: 'withdrawing',
            question: {
              en: 'At what points can she withdraw, and what does that do to our money and our timeline?',
              zh: '她可以在哪些节点退出？那会对我们的资金和时间表造成什么影响？',
            },
          },
        ],
      },
      {
        id: 'medical',
        title: { en: 'The medical program and its limits', zh: '医疗方案及其限度' },
        items: [
          {
            id: 'clinic',
            question: {
              en: 'Which clinic, which laboratory, and who is clinically responsible?',
              zh: '是哪家诊所、哪家实验室？临床责任由谁承担？',
            },
          },
          {
            id: 'attempts',
            question: {
              en: 'How many transfer attempts does the quoted program include?',
              zh: '报价的方案包含多少次移植尝试？',
            },
          },
          {
            id: 'reduction',
            question: {
              en: 'What is the stated position on selective reduction and who decides?',
              zh: '关于选择性减胎的书面立场是什么？由谁决定？',
            },
          },
          {
            id: 'multiples',
            question: {
              en: 'How do you limit the risk of a multiple pregnancy, and does that change the cost?',
              zh: '您如何控制多胎妊娠的风险？这会改变费用吗？',
            },
          },
        ],
      },
      {
        id: 'legal',
        title: { en: 'Legal work, and who instructs whom', zh: '法律工作，以及谁委托谁' },
        items: [
          {
            id: 'firms',
            question: {
              en: 'Which law firms are involved, in which jurisdictions, and for which specific documents?',
              zh: '涉及哪些律师事务所？在哪些法域？分别负责哪些具体文件？',
            },
          },
          {
            id: 'ours',
            question: {
              en: 'Are we free to instruct our own lawyer, and does the fee assume we will?',
              zh: '我们是否可以自行委托自己的律师？这笔费用是否已经假定我们会这样做？',
            },
          },
          {
            id: 'parentage',
            question: {
              en: 'Which order or registration will make us the legal parents, and in whose name does the child exist until then?',
              zh: '哪一项裁定或登记会让我们成为法律上的父母？在此之前孩子登记在谁的名下？',
            },
          },
          {
            id: 'enforceability',
            question: {
              en: 'Is the agreement itself enforceable where we are, and if not, what protects either side?',
              zh: '协议本身在我们所在地是否可以强制执行？如果不行，是什么在保护任何一方？',
            },
          },
        ],
      },
      {
        id: 'failure',
        title: { en: 'When a cycle fails or the program ends', zh: '周期失败或方案终止时' },
        items: [
          {
            id: 'no-pregnancy',
            question: {
              en: 'If there is no pregnancy after the included attempts, what happens to the fee and what comes next?',
              zh: '如果包含在内的移植次数之后没有怀孕，这笔费用会怎样？下一步是什么？',
            },
          },
          {
            id: 'loss',
            question: {
              en: 'If a pregnancy ends, who covers the surrogate’s medical and related costs, and for how long?',
              zh: '如果妊娠终止，谁来承担代孕者的医疗及相关费用？承担多久？',
            },
          },
          {
            id: 'health',
            question: {
              en: 'If the surrogate’s health is affected, what has the program committed to and what has it not?',
              zh: '如果代孕者的健康受到影响，方案已经承诺了什么？又有什么没有承诺？',
            },
          },
          {
            id: 'agency-failure',
            question: {
              en: 'If your organisation stops operating, what happens to our funds, our embryos and our file?',
              zh: '如果您的机构停止运营，我们的资金、我们的胚胎和我们的档案会怎样？',
            },
          },
        ],
      },
      {
        id: 'evidence',
        title: { en: 'Claims you can check', zh: '可以去核实的说法' },
        hint: {
          en: 'A figure a provider gives about itself is a marketing claim. Record it as one, beside the evidence.',
          zh: '服务方给出的关于自身的数据是一条宣传说法。把它记成一条说法，旁边放证据。',
        },
        items: [
          {
            id: 'registration',
            question: {
              en: 'Under what registration, licence or regulation does the organisation operate, and what is its number?',
              zh: '该机构依据什么登记、许可或监管运营？其编号是什么？',
            },
          },
          {
            id: 'history',
            question: {
              en: 'How many programs have you run here, and over what period?',
              zh: '您在这里运行过多少个方案？跨越多长时间？',
            },
          },
          {
            id: 'references',
            question: {
              en: 'Can we speak to previous families directly, rather than to families you have selected for us?',
              zh: '我们能否直接与此前的家庭交谈，而不是与您替我们挑选的家庭交谈？',
            },
          },
          {
            id: 'writing',
            question: {
              en: 'Will the answers to everything on this list arrive in writing, and can we keep them?',
              zh: '这份清单上所有问题的回答会以书面形式送达吗？我们可以留存它们吗？',
            },
          },
        ],
      },
    ],
  },
];

/**
 * The one line the checklist tool prints that is not a question. It lives here rather than in the
 * component because the component's script is one bundle shared by both languages, so the Chinese
 * page has to hand its own words to it through the DOM.
 */
export type ChecklistChrome = {
  exportButton: string;
  /** Says what the file holds and what this page does not do with it. */
  exportNote: string;
  /** Printed at the head of the exported document, where the boxes are explained. */
  fileHint: string;
  fallbackTitle: string;
  savedLine: string;
  exportFooter: string;
};

export const CHECKLIST_CHROME: Record<Lang, ChecklistChrome> = {
  en: {
    exportButton: 'Download as a document',
    exportNote:
      'The file holds every question above with an empty box beside it, in the language this page is written in. Nothing here is collected, saved on a server, or sent anywhere.',
    fileHint:
      'Tick a box once a named professional has answered that question for your own situation, and write the name and the date beside it.',
    fallbackTitle: 'Checklist',
    savedLine: 'Saved',
    exportFooter:
      'Written to the file by SurrogacyBase, from the questions on the page. Nothing on the page is collected, and nothing was sent to a server.',
  },
  zh: {
    exportButton: '下载为文档',
    exportNote: '下载到的文件会带上上面每一个问题，每个问题前面留一个空的选择框，语言与本页一致。这里不会收集任何内容，没有保存在服务器上的东西，也不会发出任何东西。',
    fileHint: '当一位具名的专业人士针对您自身的情况回答了某个问题，就勾上它前面的方框，并在旁边写下这个名字和日期。',
    fallbackTitle: '清单',
    savedLine: '保存于',
    exportFooter: '本文件由 SurrogacyBase 依据页面上的问题写就。页面上不收集任何内容，也没有任何东西被发送到服务器。',
  },
};
