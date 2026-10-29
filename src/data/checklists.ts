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
  /** A plain first line under the H1: what the reader actually does on this page. */
  purpose: string;
  /** The three moves a reader makes, printed as a numbered strip under the purpose. */
  howTo: [string, string, string];
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
          'The questions to get answered for each destination on a surrogacy shortlist: eligibility, parentage, nationality, medical scope, money, presence and dispute routes.',
        h1: 'Destination research checklist',
        purpose:
          'What you do here: put the questions below to the local lawyer, clinic or agency for one candidate destination at a time.',
        howTo: [
          'Pick one candidate destination. Use one copy of this list for each place.',
          'Download the file and send the questions out, asking for answers in writing.',
          'Write each answer back beside its question, with the name and the date. Leave a question blank until it is answered.',
        ],
        note: 'Nothing is collected here and no one is contacted for you: the questions are the whole of it, and the answers belong in the file you download.',
        closing: {
          heading: 'Where the answers belong',
          body:
            'A list of questions cannot stand in for an opinion. Who may commission, who the child is at birth, and what the money covers get answered by someone who has read your facts. The lines still blank in the file are the work left to do.',
        },
        links: ['Browse the destination records', 'The four legal questions to settle first'],
      },
      zh: {
        title: '目的地研究清单',
        description:
          '每一候选目的地均须获得答复的问题：资格、亲权、国籍、医疗范围、资金、本人停留，以及争议的处理途径。',
        h1: '目的地研究清单',
        purpose: '本页用途：每次仅针对一个候选目的地，将下述问题提交给当地的律师、诊所或机构。',
        howTo: [
          '首先确定一个候选目的地，每份清单仅对照一处。',
          '下载文件并发出上述问题，要求以书面答复。',
          '将答复记录于对应问题旁，并写明答复人姓名与日期。未获得答复的题目保持空白。',
        ],
        note: '此处不收集任何信息，亦不代您联系任何一方：问题本身即为全部内容，答复应填入您下载的那份文件。',
        closing: {
          heading: '答复应记录于何处',
          body:
            '一份问题清单无法替代一项意见：何者可以委托、孩子于出生时归于何人、资金涵盖至何范围，均须由阅读过您实际情况的人作出判断。文件之中仍然空白的那几行，即为尚未完成的工作。',
        },
        links: ['查看目的地记录', '最应先确定的四个法律问题'],
      },
    },
    groups: [
      {
        id: 'eligibility',
        title: {
          en: 'Who may commission, and whether we are inside that',
          zh: '谁得以委托，以及我方是否属于该范围',
        },
        hint: {
          en: 'A rule often names some family types plainly and leaves others to draft text. Find out which one you are in.',
          zh: '规则对某些家庭类型往往表述明确，对另一些则仅存在于草案文字之中。应予厘清的是您所属的那一类。',
        },
        items: [
          {
            id: 'who-may',
            question: {
              en: 'Who is permitted to commission a surrogacy here, stated as a rule rather than as practice?',
              zh: '此目的地允许何者委托代孕？请依规则而非惯例表述。',
            },
          },
          {
            id: 'our-facts',
            question: {
              en: 'Do our marital status, age, sexual orientation, existing children or health history fall inside or outside that?',
              zh: '我方的婚姻状况、年龄、性取向、既有子女或健康史，系落于该规则之内还是之外？',
            },
          },
          {
            id: 'genetic',
            question: {
              en: 'Is a genetic link to at least one intended parent required, and what changes if it is?',
              zh: '是否要求与至少一位意向父母存在基因联系？若存在该项要求，将产生何种变化？',
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
        title: { en: 'Who the child belongs to at birth', zh: '孩子于出生时归于何人' },
        hint: {
          en: 'Parentage and nationality are two different questions that people routinely merge into one.',
          zh: '亲权与国籍系两项不同的问题，实践中却常被合而为一。',
        },
        items: [
          {
            id: 'mother',
            question: {
              en: 'Who is the legal mother at birth, regardless of whose egg was used?',
              zh: '无论卵子源自何人，出生时的法律母亲为谁？',
            },
          },
          {
            id: 'route',
            question: {
              en: 'By what order or registration does parentage move to us, and what is it called?',
              zh: '亲权通过哪一项裁定或登记转移至我方？该项程序的法律名称为何？',
            },
          },
          {
            id: 'timing',
            question: {
              en: 'When can that order be applied for, and how long does a determination take?',
              zh: '该裁定可在何时申请？作出裁定需要多长时间？',
            },
          },
          {
            id: 'certificate',
            question: {
              en: 'Which names appear on the birth certificate we are able to obtain, and on the one issued later?',
              zh: '我方可取得的出生证明上登记何人姓名？其后签发的那一份又登记何人？',
            },
          },
          {
            id: 'consent',
            question: {
              en: 'Does the surrogate have to consent after birth, and can that consent be withheld?',
              zh: '代孕者是否须于分娩后表示同意？该项同意能否不予给出？',
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
              zh: '孩子于出生时取得哪一国国籍？依据为何？',
            },
          },
          {
            id: 'travel',
            question: {
              en: 'What travel document can the child leave the country on, and which authority issues it?',
              zh: '孩子可持何种旅行证件离开该国？由何机关签发？',
            },
          },
          {
            id: 'recognition',
            question: {
              en: 'Will our own country recognise the parentage established here, and through what process?',
              zh: '我方本国是否会承认于此确立的亲权？依何种程序？',
            },
          },
          {
            id: 'stay',
            question: {
              en: 'How long must the family remain in country after birth, and who can state that in writing?',
              zh: '出生之后全家须于当地停留多久？何者得以书面写明此点？',
            },
          },
          {
            id: 'registration',
            question: {
              en: 'What has to be registered at home after arrival, and within what deadline?',
              zh: '返抵国内之后尚须登记何种事项？登记的期限为何？',
            },
          },
        ],
      },
      {
        id: 'medical',
        title: { en: 'What the medical program actually covers', zh: '医疗方案实际涵盖的范围' },
        items: [
          {
            id: 'clinic',
            question: {
              en: 'Which clinic runs the treatment, and who is accountable for it?',
              zh: '由何诊所执行治疗？何者对其负责？',
            },
          },
          {
            id: 'material',
            question: {
              en: 'Whose eggs, whose sperm and whose uterus, and what screening applies to each?',
              zh: '卵子、精子与完成妊娠者分属何人？每一项分别适用何种筛查？',
            },
          },
          {
            id: 'counselling',
            question: {
              en: 'Is counselling provided, to whom, and is it independent of the program?',
              zh: '是否提供心理咨询？面向对象为何？其是否独立于该方案之外？',
            },
          },
          {
            id: 'attempts',
            question: {
              en: 'How many transfer attempts are inside the quoted program before it is treated as unsuccessful?',
              zh: '报价所含方案之内包含多少次移植？超出之后即视为未成功？',
            },
          },
          {
            id: 'storage',
            question: {
              en: 'What happens to stored embryos if the program ends before a pregnancy?',
              zh: '若方案在怀孕之前即已结束，冷冻保存的胚胎将如何处理？',
            },
          },
        ],
      },
      {
        id: 'money',
        title: { en: 'Money, stages and what comes back', zh: '资金、阶段与可退回的部分' },
        hint: {
          en: 'Ask about money by stage: which payment falls due when, which parts come back, and who holds the account.',
          zh: '资金须按阶段询问：每一笔于何时到期、哪些可予退回、账户由何人持有。',
        },
        items: [
          {
            id: 'included',
            question: {
              en: 'What is inside the quoted fee, and what is billed later by a third party?',
              zh: '报价之内包含何种项目？何者将由第三方于事后另行计费？',
            },
          },
          {
            id: 'stages',
            question: {
              en: 'When is each payment due against each stage, and how much is refundable at that point?',
              zh: '每一笔付款对应哪一阶段、于何时到期？该时点可退回的金额为多少？',
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
              zh: '代孕者由何种保险覆盖？哪些部分须由我方自身的保险支付？',
            },
          },
          {
            id: 'overrun',
            question: {
              en: 'What is the stated process when a cost falls outside the quote, and who approves it first?',
              zh: '若一项支出落于报价之外，条文规定的流程为何？由何者先行批准？',
            },
          },
        ],
      },
      {
        id: 'presence',
        title: { en: 'Being there, and for how long', zh: '本人到场，以及停留时长' },
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
              zh: '需几次行程？每次时长为何？分别位于流程的哪一节点？',
            },
          },
          {
            id: 'documents',
            question: {
              en: 'What visas, appointments and documents does each trip require?',
              zh: '每次行程需备妥何种签证、预约与文件？',
            },
          },
          {
            id: 'disruption',
            question: {
              en: 'If a travel restriction or illness lands mid-program, what does the contract say happens next?',
              zh: '若旅行限制或疾病出现于方案中途，合同所载明的后续处理为何？',
            },
          },
        ],
      },
      {
        id: 'advice',
        title: {
          en: 'Independent advice and what happens in a dispute',
          zh: '独立意见，以及发生争议时的处理方式',
        },
        items: [
          {
            id: 'our-lawyer',
            question: {
              en: 'Which lawyer will read the contract for us, in whose jurisdiction, and who pays?',
              zh: '由何律师为我方审阅合同？其在何法域执业？费用由谁承担？',
            },
          },
          {
            id: 'their-lawyer',
            question: {
              en: 'Is the surrogate independently advised, and is that advice paid for from our money?',
              zh: '代孕者是否已获得独立的法律意见？该意见是否由我方资金支付？',
            },
          },
          {
            id: 'disagreement',
            question: {
              en: 'What happens if we and the provider disagree on something material, and what is the first step?',
              zh: '若我方与服务方就实质性事项存在分歧，将如何处理？第一步为何？',
            },
          },
          {
            id: 'forum',
            question: {
              en: 'Which court, register or body would hear a dispute, and in which country?',
              zh: '争议将由何法院、登记机关或机构受理？位于何国？',
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
          'Questions to put to a surrogacy agency in writing before signing: fee scope, payment stages, refunds, screening, legal work, and what happens if a cycle fails.',
        h1: 'Agency question checklist',
        purpose:
          'What you do here: before you sign anything, get written answers to the questions below from an agency you are weighing.',
        howTo: [
          'Pick one agency you are considering.',
          'Download the file and put the questions to them in your own words.',
          'Write each answer back beside its question, with the name and the date. Leave a question blank until it is answered.',
        ],
        note: 'Nothing you write here is stored, and no firm is contacted for you.',
        closing: {
          heading: 'Then put the answers next to the numbers',
          body:
            'With the answers written back in, a quote stops being an explanation and becomes a document to check line by line. Two quotes entered into the comparison tool sit on the same nine cost lines, and the lines still without a number show themselves.',
        },
        links: ['Compare the quotes', 'What a contract should state'],
      },
      zh: {
        title: '机构提问清单',
        description:
          '签约之前应要求代孕机构书面答复的问题：费用范围、付款阶段、退款安排、筛查、法律工作，以及周期失败之后的处理方式。',
        h1: '机构提问清单',
        purpose: '本页用途：在签署任何协议之前，要求您正在考虑的一家机构就下列问题作出书面答复。',
        howTo: [
          '首先确定一家您正在考虑的机构。',
          '下载文件，以您自己的表述发出上述问题。',
          '将每条答复记录于对应问题旁，并写明答复人姓名与日期。未获得答复的题目保持空白。',
        ],
        note: '您在此填写的内容不会被存储，本站亦不会代您联系相关机构。',
        closing: {
          heading: '再将答复与金额并列',
          body:
            '将答复逐项记录之后，一份报价即不再只是一段说明，而成为一份可逐行核对的文件。两份报价填入对比工具后，会落在同一组九项成本之上；仍无数字的那几行会自行显现。',
        },
        links: ['对比这些报价', '合同应当写明什么'],
      },
    },
    groups: [
      {
        id: 'scope',
        title: { en: 'What the fee buys, and who does the work', zh: '费用涵盖的内容，以及由谁执行工作' },
        hint: {
          en: 'Two firms can describe a program almost identically out loud. Written down, their “included” turns out to cover different things.',
          zh: '两家机构口头介绍方案时可能近乎一致；落成书面之后才会发现，两项「包含」各自涵盖的项目并不相同。',
        },
        items: [
          {
            id: 'services',
            question: {
              en: 'Which services does the fee cover, listed individually rather than as a program?',
              zh: '该费用覆盖哪些服务？请逐项列出，而非打包为一项方案。',
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
              zh: '我方的指定联络人为何人？其资历如何？若其无法联系，将如何处理？',
            },
          },
          {
            id: 'staffing',
            question: {
              en: 'How many families is that person carrying at once?',
              zh: '该人员同时负责多少个家庭？',
            },
          },
          {
            id: 'responsibility',
            question: {
              en: 'Which responsibilities stay with us throughout?',
              zh: '哪些责任自始至终均由我方自行承担？',
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
              zh: '报价排除了哪些我方仍将支付的费用？',
            },
          },
          {
            id: 'schedule',
            question: {
              en: 'Which payment falls due at which stage, and against what trigger?',
              zh: '哪一笔付款对应哪一阶段？以何种事件为触发条件？',
            },
          },
          {
            id: 'refund',
            question: {
              en: 'If we withdraw at each stage, what is refundable and within how long?',
              zh: '若我方于各阶段退出，哪些部分可予退回？退回期限为多久？',
            },
          },
          {
            id: 'holdings',
            question: {
              en: 'Where is our money held before it is spent, and in whose name?',
              zh: '我方资金于支出之前存放于何处？以何人名义持有？',
            },
          },
          {
            id: 'overrun',
            question: {
              en: 'When a cost exceeds the estimate, who has to approve it before it is incurred?',
              zh: '若一项支出超出估算，发生之前须经何人批准？',
            },
          },
        ],
      },
      {
        id: 'surrogate',
        title: { en: 'The surrogate’s own position', zh: '代孕者自身的处境' },
        hint: {
          en: 'A program is usually judged by what a firm does when one of these actually happens.',
          zh: '一项方案的优劣，通常须待这几种情形实际发生之后方能判断。',
        },
        items: [
          {
            id: 'recruitment',
            question: {
              en: 'How are candidates recruited, and what do you tell them about us?',
              zh: '人选以何种方式招募？您将向我方作何描述？',
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
              zh: '代孕者于签署之前是否已自聘律师并取得独立意见？',
            },
          },
          {
            id: 'existing',
            question: {
              en: 'Has she been pregnant before and does she have her own children, and what has she been told about future fertility?',
              zh: '其此前是否妊娠过、是否育有子女？关于日后的生育能力，其已获告知何种内容？',
            },
          },
          {
            id: 'withdrawing',
            question: {
              en: 'At what points can she withdraw, and what does that do to our money and our timeline?',
              zh: '其可于哪些节点退出？该情形将对我方资金与时间表产生何种影响？',
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
              zh: '系何诊所、何实验室？临床责任由谁承担？',
            },
          },
          {
            id: 'attempts',
            question: {
              en: 'How many transfer attempts does the quoted program include?',
              zh: '报价所含方案包括多少次移植尝试？',
            },
          },
          {
            id: 'reduction',
            question: {
              en: 'What is the stated position on selective reduction and who decides?',
              zh: '就选择性减胎的书面立场为何？由何人决定？',
            },
          },
          {
            id: 'multiples',
            question: {
              en: 'How do you limit the risk of a multiple pregnancy, and does that change the cost?',
              zh: '以何种方式控制多胎妊娠的风险？此项是否影响费用？',
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
              zh: '我方能否自行委托自身律师？该费用是否已假定我方将作此安排？',
            },
          },
          {
            id: 'parentage',
            question: {
              en: 'Which order or registration will make us the legal parents, and in whose name does the child exist until then?',
              zh: '哪一项裁定或登记将使我方成为法律上的父母？在此之前，孩子登记于何人名下？',
            },
          },
          {
            id: 'enforceability',
            question: {
              en: 'Is the agreement itself enforceable where we are, and if not, what protects either side?',
              zh: '协议本身于我方所在地能否强制执行？若不能，以何种机制保障任何一方？',
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
              zh: '若在所列的移植次数之后仍未妊娠，该笔费用将如何处理？后续步骤为何？',
            },
          },
          {
            id: 'loss',
            question: {
              en: 'If a pregnancy ends, who covers the surrogate’s medical and related costs, and for how long?',
              zh: '若妊娠终止，由谁承担代孕者的医疗及相关费用？承担多久？',
            },
          },
          {
            id: 'health',
            question: {
              en: 'If the surrogate’s health is affected, what has the program committed to and what has it not?',
              zh: '若代孕者的健康受到影响，方案已作出何种承诺？何种事项未作承诺？',
            },
          },
          {
            id: 'agency-failure',
            question: {
              en: 'If your organisation stops operating, what happens to our funds, our embryos and our file?',
              zh: '若贵机构停止运营，我方资金、胚胎与档案将作何处理？',
            },
          },
        ],
      },
      {
        id: 'evidence',
        title: { en: 'Claims you can check', zh: '可供核实的说法' },
        hint: {
          en: 'A figure a firm quotes about itself is advertising. Write it down anyway, and put beside it something you can check without going back to them.',
          zh: '机构述及自身时给出的数字属于宣传性质。仍应将其记录在案，并于旁侧附一项无须再向对方询问即可核对的材料。',
        },
        items: [
          {
            id: 'registration',
            question: {
              en: 'Under what registration, licence or regulation does the organisation operate, and what is its number?',
              zh: '该机构依据何种登记、许可或监管规定运营？其编号为何？',
            },
          },
          {
            id: 'history',
            question: {
              en: 'How many programs have you run here, and over what period?',
              zh: '您于此地已执行过多少项方案？跨越多长时间？',
            },
          },
          {
            id: 'references',
            question: {
              en: 'Can we speak to previous families directly, rather than to families you have selected for us?',
              zh: '我方能否径行与此前的家庭交谈，而非与您为我方挑选的家庭交谈？',
            },
          },
          {
            id: 'writing',
            question: {
              en: 'Will the answers to everything on this list arrive in writing, and can we keep them?',
              zh: '本清单全部问题的答复将以书面形式送达吗？我方可否予以留存？',
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
  /** Heading over the group index, so a long list can be entered at any group. */
  contentsHeading: string;
  /** {groups} and {questions}. */
  totalCount: string;
  /** {n} is the number of questions in one group. */
  questionCount: string;
  /** Beside the second download button, after the last group. */
  bottomNote: string;
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
      'The file holds every question above with an empty box before it, in the language you are reading.',
    contentsHeading: 'Contents',
    totalCount: '{groups} groups, {questions} questions',
    questionCount: '{n} questions',
    bottomNote: 'The list goes out, the answers come back, and the same file holds both.',
    fileHint:
      'Tick a box once a named professional has answered that question for your own situation, and write the name and the date beside it.',
    fallbackTitle: 'Checklist',
    savedLine: 'Saved',
    exportFooter: 'Written by SurrogacyBase from the questions above, to record who answered and when.',
  },
  zh: {
    exportButton: '下载为文档',
    exportNote: '文件内含上述全部问题，每一问题之前留有空白选择框，语言与您正在阅读的版本一致。',
    contentsHeading: '目录',
    totalCount: '{groups} 组，{questions} 个问题',
    questionCount: '{n} 个问题',
    bottomNote: '清单发出，答复收回，两者均留存于同一份文件之中。',
    fileHint: '当某位具名专业人士就您自身情况答复某项问题后，勾选其前方的方框，并在旁侧记录该姓名与日期。',
    fallbackTitle: '清单',
    savedLine: '保存于',
    exportFooter: '本文件由 SurrogacyBase 依据上述问题生成，用于记录答复人与答复日期。',
  },
};
