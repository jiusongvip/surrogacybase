/*
 * The explanatory half of the homepage: what the word means, how the arrangement works, and
 * the sequence a journey actually runs through.
 *
 * These blocks exist because a reader arriving on "surrogacy meaning" or "how does surrogacy
 * work" needs an answer before being asked to compare countries. The country records and the
 * enquiry band stay in src/data/home.ts.
 *
 * Two rules hold here as everywhere else on the site.
 *
 *   - A sentence that states a legal position, a published figure or a professional body's
 *     stance carries a citation number pointing into HOME_SOURCES (src/data/home-evidence.ts).
 *     A claim that cannot be cited is written as a question, not as a fact.
 *   - The Chinese is written rather than translated word for word: full-width punctuation, and
 *     the terms Chinese readers use (代孕者, 意向父母, 亲权) rather than calques.
 *
 * The English headings carry the phrases people search for ("what surrogacy means", "how
 * surrogacy works", "the surrogacy process"); the body then has to earn the heading, which is
 * why each block says something the heading alone does not.
 */
import type { Lang } from '@/i18n/config';

/* ---------------------------------------------------------------------------------------------
 * 1. Meaning and definition
 * ------------------------------------------------------------------------------------------- */

export const HOME_MEANING: Record<Lang, {
  heading: string;
  lede: string;
  /** The one sentence a reader (or a machine) can quote: written to stand alone. */
  definitionLabel: string;
  definition: string;
  paragraphs: string[];
  terms: { term: string; body: string }[];
  link: { label: string; href: string };
}> = {
  en: {
    heading: 'What surrogacy means',
    lede:
      'The word covers two arrangements that are not interchangeable. In one, an embryo made in a laboratory is transferred to the carrier. In the other, the carrier’s own egg is used. Which one you mean changes the medical procedure, the legal position and the price.',
    definitionLabel: 'Definition',
    definition:
      'Surrogacy is an arrangement in which a woman carries a pregnancy and gives birth to a child who will be raised by someone else, usually the intended parents who commissioned the pregnancy.',
    paragraphs: [
      'In ordinary use the word covers everything: treatment, contract, money, paperwork. In law it is narrower, and each legal system answers three questions separately: who the parent is on the day of birth, whether the agreement can be enforced, and what may be paid. A clinic can answer only for the country it operates in.',
      'A country can permit the arrangement and still name the carrier as the mother on the birth record. A contract cannot change that. What changes it is the court or registry step afterwards.',
    ],
    terms: [
      {
        term: 'Gestational surrogacy',
        body:
          'An embryo created by in vitro fertilisation is transferred to the carrier, who has no genetic link to the child.',
      },
      {
        term: 'Traditional surrogacy',
        body:
          'The carrier provides the egg and is genetically related to the child. Conception is usually by insemination rather than embryo transfer.',
      },
      {
        term: 'Intended parents',
        body:
          'The people who commission the pregnancy and will raise the child. They may be a couple or a single person, and the law where the birth happens decides whether the route is open to them.',
      },
      {
        term: 'Parentage',
        body:
          'Who the law treats as the child’s legal parents. Some systems settle it at birth; others move it afterwards by court order. Until it is settled, the documents that get the child home cannot be issued.',
      },
    ],
    link: { label: 'How the law treats each of these', href: '/guides/surrogacy-legal-considerations' },
  },
  zh: {
    heading: '代孕是什么',
    lede:
      '「代孕」其实指两种安排，两者不能混为一谈。一种是将实验室里形成的胚胎移植给代孕者；另一种使用代孕者本人的卵子。选择哪一种，手术方式、法律认定与费用都不同。',
    definitionLabel: '定义',
    definition:
      '代孕是一种安排：一位女性怀胎并分娩，孩子出生后由他人抚养，通常是委托这次怀孕的意向父母。',
    paragraphs: [
      '日常用法里，这个词涵盖治疗、合同、费用与证件的全部环节。法律上的含义窄得多，而且每个法律体系分开回答三个问题：孩子出生当天谁是父母、这份协议能不能被执行、允许支付什么。诊所只能回答它所在国家的那一部分。',
      '一个国家可以允许代孕，但出生记录的母亲一栏写的仍是代孕者。合同改变不了这一点，能改变它的是之后的法院或登记程序。',
    ],
    terms: [
      {
        term: '妊娠代孕',
        body: '通过体外受精形成胚胎后移植到代孕者体内，她与孩子没有基因关系。',
      },
      {
        term: '传统代孕',
        body: '由代孕者本人提供卵子，她与孩子存在基因关系。受孕通常通过人工授精完成，而不是胚胎移植。',
      },
      {
        term: '意向父母',
        body:
          '委托这次怀孕、并将抚养孩子的人。可能是一对伴侣，也可能是单身个人；孩子出生地的法律，决定这条路是否对他们开放。',
      },
      {
        term: '亲权',
        body: '法律认定谁是孩子的父母。有的体系在出生时一次确定，有的要在此后由法院裁定；认定完成之前，无法签发把孩子带回家所需的证件。',
      },
    ],
    link: { label: '法律如何看待这些差别', href: '/guides/surrogacy-legal-considerations' },
  },
};

/* ---------------------------------------------------------------------------------------------
 * 2. How it works
 * ------------------------------------------------------------------------------------------- */

export const HOME_MECHANICS: Record<Lang, {
  heading: string;
  lede: string;
  steps: { title: string; body: string; cite?: number }[];
  compare: {
    title: string;
    caption: string;
    gestational: string;
    traditional: string;
    rows: { label: string; gestational: string; traditional: string }[];
    note: string;
  };
  link: { label: string; href: string };
}> = {
  en: {
    heading: 'How surrogacy works',
    lede:
      'A surrogacy programme is five separate arrangements: the embryo, the screening, the contract, the birth, and the paperwork home. Different people handle each one, and each can fail on its own.',
    steps: [
      {
        title: 'An embryo is made in a laboratory',
        body:
          'In gestational surrogacy the eggs and sperm come from the intended parents, from one of them and a donor, or from two donors. Fertilisation happens in a laboratory and the resulting embryo is transferred to the carrier. No genetic material comes from her.',
      },
      {
        title: 'Screening comes before treatment, for both sides',
        body:
          'The intended parents complete a fertility work-up; the carrier completes medical and psychological screening. FIGO, the international obstetric body, treats psychological screening and continuing support for both parties as mandatory rather than optional.',
        cite: 1,
      },
      {
        title: 'The money is agreed in writing, then funded',
        body:
          'The agreement sets out the stages, the payments attached to them, what happens if the pregnancy does not start, and who decides what during it. US professional guidance is that the money sits in an escrow account named in the agreement, funded before the first transfer.',
        cite: 4,
      },
      {
        title: 'Who the mother is depends on the country',
        body:
          'In some systems the intended parents are named on the birth record at birth. In others the woman who gives birth is the legal mother whatever the agreement said, and parentage moves afterwards through a court. The United Kingdom is the second kind.',
        cite: 2,
      },
      {
        title: 'Getting home takes a court order and a passport',
        body:
          'After the birth comes an application, a hearing or a registry step, and then a passport or consular document for the child. In England and Wales that route typically takes six months to a year, so the date you can fly home is set by the court, not by the due date.',
        cite: 3,
      },
    ],
    compare: {
      title: 'The two arrangements, side by side',
      caption: 'How gestational and traditional surrogacy differ, and what each implies',
      gestational: 'Gestational surrogacy',
      traditional: 'Traditional surrogacy',
      rows: [
        { label: 'Whose egg', gestational: 'An intended parent’s, or a donor’s', traditional: 'The carrier’s own' },
        { label: 'Genetic link to the carrier', gestational: 'None', traditional: 'Yes' },
        { label: 'Usual route to pregnancy', gestational: 'IVF, then embryo transfer', traditional: 'Insemination' },
        {
          label: 'Professional position',
          gestational: 'Supported by FIGO as an arrangement',
          traditional: 'Discouraged, where the carrier agrees in advance to give up a child she is related to',
        },
      ],
      note:
        'Legality where you live, and whether you would be recognised as the parent, are not in this table. Both depend on the country, and the country records below take them one at a time.',
    },
    link: { label: 'Read the full process guide', href: '/guides/surrogacy-process' },
  },
  zh: {
    heading: '代孕是怎么运作的',
    lede:
      '一个代孕项目其实是五项分开的安排：胚胎、筛查、合同、分娩、回国手续。五项由不同的人负责，任何一项都可能单独出问题。',
    steps: [
      {
        title: '胚胎在实验室里形成',
        body:
          '在妊娠代孕中，卵子与精子来自意向父母、来自其中一方与一位捐赠者，或来自两位捐赠者。受精在实验室完成，形成的胚胎再移植到代孕者体内。她本人不提供任何遗传物质。',
      },
      {
        title: '筛查在治疗之前，双方都要做',
        body:
          '意向父母完成生育能力评估；代孕者完成医学与心理筛查。国际妇产科联盟（FIGO）认为，双方的心理筛查与持续支持应当为强制，而非可选项。',
        cite: 1,
      },
      {
        title: '钱先写进协议，再打款',
        body:
          '协议写明各阶段、与各阶段对应的付款、没有怀上时怎么处理，以及孕期中谁决定什么。美国的专业指引要求：钱放进协议指定的托管账户，并在第一次移植前完成注资。',
        cite: 4,
      },
      {
        title: '谁是母亲，取决于国家',
        body:
          '部分体系在出生时就把意向父母登记在出生记录上。另一些体系中，无论协议怎么写，分娩的女性都是法律上的母亲，亲权要在此后经法院转移。英国属于后一种。',
        cite: 2,
      },
      {
        title: '回家要一份法院裁定和一本护照',
        body:
          '出生之后是申请、开庭或登记手续，然后是孩子的护照或领事文件。在英格兰与威尔士，这道程序通常要六个月到一年，所以回程的日期由法院定，而不是由预产期定。',
        cite: 3,
      },
    ],
    compare: {
      title: '两种安排，并排对照',
      caption: '妊娠代孕与传统代孕的差别，以及各自意味着什么',
      gestational: '妊娠代孕',
      traditional: '传统代孕',
      rows: [
        { label: '卵子来自谁', gestational: '意向父母，或捐赠者', traditional: '代孕者本人' },
        { label: '与代孕者的基因关系', gestational: '没有', traditional: '有' },
        { label: '通常的受孕方式', gestational: '体外受精后移植胚胎', traditional: '人工授精' },
        {
          label: '专业立场',
          gestational: 'FIGO 支持这种安排',
          traditional: '不鼓励，尤其是代孕者事先同意放弃与其有基因关系的孩子',
        },
      ],
      note:
        '在您住的地方是否合法、您会不会被承认为孩子的父母，这两件事不在表里。它们取决于国家，下面逐个国家的记录会分别说明。',
    },
    link: { label: '阅读完整流程指南', href: '/guides/surrogacy-process' },
  },
};

/* ---------------------------------------------------------------------------------------------
 * 3. The process
 * ------------------------------------------------------------------------------------------- */

export const HOME_PROCESS: Record<Lang, {
  heading: string;
  lede: string;
  stages: { title: string; body: string }[];
  note: string;
  link: { label: string; href: string };
}> = {
  en: {
    heading: 'The surrogacy process, stage by stage',
    lede:
      'Nine stages, in the order the questions usually come up. The order changes with the destination, and with whether donor eggs or sperm are needed. What does not change is where the legal work sits: part of it comes before treatment, and the rest comes after the birth.',
    stages: [
      {
        title: 'Start with your own circumstances',
        body:
          'Medical history, the legal shape of your family, and the budget you can actually hold. Each one removes options before anything is booked.',
      },
      {
        title: 'Choose a destination before a clinic',
        body:
          'The country is chosen on legal grounds. A clinic cannot make a route available that the law where it operates does not recognise.',
      },
      {
        title: 'Screening, in both directions',
        body:
          'Your fertility work-up on one side, the carrier’s medical and psychological screening on the other, with independent counselling for both.',
      },
      {
        title: 'Matching',
        body:
          'How a programme pairs you with a carrier, who decides, how long it takes, and what happens if no match is reached inside the stated window.',
      },
      {
        title: 'The agreement and the escrow',
        body:
          'The written arrangement, the escrow that funds it, the schedule of payments, and the refund terms if the programme stops.',
      },
      {
        title: 'Treatment and transfer',
        body:
          'Medication, monitoring and the embryo transfer. From this point the schedule belongs to the clinic and to the carrier’s cycle, not to your diary.',
      },
      {
        title: 'Pregnancy',
        body:
          'Prenatal care, who attends appointments, who is told what, and which decisions belong to the carrier alone. Anything the agreement leaves open here will come up during the pregnancy.',
      },
      {
        title: 'Birth and parentage',
        body:
          'Registration at birth, then the application or court step that makes you the legal parent. It happens after the birth and can take months, so it belongs in the timeline and the budget from the start.',
      },
      {
        title: 'Bringing the child home',
        body:
          'A passport or consular document, exit formalities, and whatever your own country requires to recognise the arrangement. In a study of 40,177 US transfers to a carrier between 2014 and 2020, 32 per cent were for intended parents living outside the country.',
      },
    ],
    note:
      'Before you pay, ask who runs stage four (matching) and who runs stage eight (birth and parentage), and ask for the answer in writing.',
    link: { label: 'Walk through the process in full', href: '/guides/surrogacy-process' },
  },
  zh: {
    heading: '代孕流程，逐阶段说明',
    lede:
      '九个阶段，按问题通常出现的先后排列。次序会因目的地、以及是否需要捐赠卵子或精子而变化。不变化的是法律工作所在的位置：一部分在治疗之前，其余在出生之后。',
    stages: [
      {
        title: '先弄清自己的情况',
        body: '病史、您的家庭构成在法律上的认定，以及您实际能够承担的预算。这三项在预订任何服务之前，就会先排除一批选项。',
      },
      {
        title: '先定目的地，再定诊所',
        body: '国家是按法律理由选的。诊所无法提供一条它所在国家的法律不承认的路径。',
      },
      {
        title: '双向筛查',
        body: '一边是您的生育能力评估，另一边是代孕者的医学与心理筛查，双方都需要独立咨询。',
      },
      {
        title: '匹配',
        body: '项目如何把您与代孕者配到一起、由谁决定、需要多久，以及若在约定期限内没有匹配成功会怎样。',
      },
      {
        title: '协议与托管账户',
        body: '书面安排、为它注资的托管账户、付款时间表，以及项目中止时的退款条款。',
      },
      {
        title: '医疗与移植',
        body: '用药、监测与胚胎移植。从这里开始，时间安排取决于诊所与代孕者的周期，而不取决于您的日程。',
      },
      {
        title: '孕期',
        body: '产前检查、谁陪同就诊、谁接收什么信息，以及哪些决定只属于代孕者。协议没有写明的部分，都会在孕期出现。',
      },
      {
        title: '出生与亲权',
        body: '出生登记，然后是让您成为法律父母的申请或开庭。它在孩子出生之后，可能耗时数月，所以一开始就要放进时间表和预算里。',
      },
      {
        title: '把孩子带回家',
        body: '护照或领事文件、出境手续，以及您本国为承认这项安排所要求的材料。一项覆盖 2014 至 2020 年美国 40,177 例代孕移植的研究显示，32% 的意向父母居住在其他国家。',
      },
    ],
    note: '付款之前，问清楚第四阶段（匹配）与第八阶段（出生与亲权）分别由谁负责，并请对方以书面形式答复。',
    link: { label: '完整走一遍流程', href: '/guides/surrogacy-process' },
  },
};
