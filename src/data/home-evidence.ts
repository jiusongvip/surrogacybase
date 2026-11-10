/*
 * The decision half of the homepage: what it costs, the pattern called "the surrogacy trap",
 * the questions readers send in, and the documents every figure and legal position rests on.
 *
 * The source list is deliberately on the homepage rather than only in the guides. A page that
 * quotes a 2025 clinic price and a 2024 peer-reviewed statement side by side has to show that
 * they are different kinds of number, and the only honest way to do that is to print the
 * document, the publisher and the date next to each one.
 *
 * Citation numbers here are the same numbers HOME_MEANING and HOME_MECHANICS use; they are
 * positions in HOME_SOURCES, and the template links each marker to its row.
 */
import type { Lang } from '@/i18n/config';
import type { Bilingual } from '@/i18n/ui';

/* ---------------------------------------------------------------------------------------------
 * 4. Cost
 * ------------------------------------------------------------------------------------------- */

export const HOME_COST: Record<Lang, {
  heading: string;
  lede: string;
  linesLabel: string;
  lines: { title: string; body: string; cite?: number }[];
  figuresLabel: string;
  figures: { value: string; label: string; note: string; cite: number }[];
  why: string;
  links: { label: string; href: string }[];
}> = {
  en: {
    heading: 'What surrogacy costs',
    lede:
      'No audited dataset counts what intended parents actually pay. Any single total you see is either a quote from someone selling the service, or a published figure with a year and a scope attached.',
    linesLabel: 'The five lines a budget is built from',
    lines: [
      {
        title: 'Agency or programme fee',
        body:
          'Matching, screening coordination and case management. What the fee covers matters more than its size: whether screening is done in house, and what happens to it if a match falls through.',
      },
      {
        title: 'Medical treatment and medication',
        body:
          'Monitoring, retrieval or transfer, laboratory work and prenatal care, billed by different providers on different schedules, and repeated if a transfer does not take.',
      },
      {
        title: 'Legal work, on both sides',
        body:
          'Separate representation for the intended parents and for the carrier is recommended and sometimes mandated, so this line is usually two invoices rather than one.',
        cite: 5,
      },
      {
        title: 'Payment or reimbursement to the carrier',
        body:
          'What a jurisdiction permits differs: a fee in some places, reimbursement of receipted expenses in others, and reasonable expenses only in the United Kingdom.',
        cite: 8,
      },
      {
        title: 'Pregnancy, birth and the paperwork after',
        body:
          'Insurance, travel, time away from work, the delivery itself, and the documents that bring the child home. These are the lines a programme quote most often excludes.',
      },
    ],
    figuresLabel: 'What each number measures',
    figures: [
      {
        value: 'US$100,000–140,000',
        label: 'United States, 2025',
        note:
          'A fertility clinic’s own blog, with no disclosed methodology. The same page says totals can pass US$250,000.',
        cite: 7,
      },
      {
        value: 'Above US$100,000',
        label: 'United States, 2017',
        note:
          'A peer-reviewed review of US gestational surrogacy regulation states that the cost passed this figure in 2017.',
        cite: 5,
      },
      {
        value: '£10,000–15,000',
        label: 'United Kingdom, reimbursement',
        note:
          'The range reported by Surrogacy UK and quoted by the fertility regulator, reflecting an expenses-only rule rather than a fee for the service.',
        cite: 8,
      },
    ],
    why:
      'A clinic’s price list, an academic statement about cost, and a reimbursement range under a law that forbids payment for the service itself are three different measurements. Set side by side as one number, or averaged, they produce a figure no source would stand behind.',
    links: [
      { label: 'How to build a budget, and what a quote leaves out', href: '/guides/surrogacy-cost' },
      { label: 'Every published cost figure, by destination', href: '/tools/cost-figures' },
    ],
  },
  zh: {
    heading: '代孕要花多少钱',
    lede:
      '目前没有任何经过审计的统计，说明意向父母实际支付了多少。因此您看到的任何一份总额，只可能来自两处：卖方给出的报价，或者一份标明年份与统计口径的公开数据。',
    linesLabel: '一份预算由这五项构成',
    lines: [
      {
        title: '机构费或项目费',
        body:
          '匹配、筛查协调与个案管理。这笔费用覆盖什么，比它标价多少更重要：筛查是否由机构自己完成，以及匹配失败时这笔钱如何处理。',
      },
      {
        title: '医疗费用与药物',
        body:
          '监测、取卵或移植、实验室操作与产前检查，由不同机构按不同周期分别计费；移植未成功时还要重来一遍。',
      },
      {
        title: '双方的法律费用',
        body:
          '意向父母与代孕者各自应有独立的法律代理，这在部分地方是建议，在部分地方是强制要求，所以这一项通常是两张账单，而不是一张。',
        cite: 5,
      },
      {
        title: '支付或报销给代孕者的款项',
        body:
          '各地允许的范围不同：有些地方是报酬，有些地方是凭票据报销开支，英国则只允许合理开支。',
        cite: 8,
      },
      {
        title: '孕期、分娩与出生后的手续',
        body:
          '保险、出行、误工时间、分娩本身，以及把孩子带回家所需的证件。这些正是项目报价最常漏掉的条目。',
      },
    ],
    figuresLabel: '三个数字分别代表什么',
    figures: [
      {
        value: '10 万–14 万美元',
        label: '美国，2025 年',
        note: '出自一家生育诊所自己的博客，未披露统计方法。同一页面还写明总额可能超过 25 万美元。',
        cite: 7,
      },
      {
        value: '超过 10 万美元',
        label: '美国，2017 年',
        note: '一篇经同行评议的美国妊娠代孕监管综述指出，2017 年该项费用已超过此数。',
        cite: 5,
      },
      {
        value: '1 万–1.5 万英镑',
        label: '英国，报销金额',
        note: '由 Surrogacy UK 报告、经生育监管机构引用。它反映的是「仅限开支」规则下的补偿，而不是服务报酬。',
        cite: 8,
      },
    ],
    why:
      '诊所的价格表、学术论文里的成本陈述、以及一条禁止为服务本身付费的法律下的报销区间，量的是三件不同的事。把它们并成一个数字来比较，或者求平均，得到的数字没有任何来源会为它负责。',
    links: [
      { label: '预算怎么列，报价漏了什么', href: '/guides/surrogacy-cost' },
      { label: '按目的地查看全部已公布费用', href: '/tools/cost-figures' },
    ],
  },
};

/* ---------------------------------------------------------------------------------------------
 * 5. The trap
 * ------------------------------------------------------------------------------------------- */

export const HOME_TRAP: Record<Lang, {
  heading: string;
  lede: string;
  definitionLabel: string;
  definition: string;
  testLabel: string;
  items: { title: string; body: string; test: string; cite?: number }[];
  closing: string;
}> = {
  en: {
    heading: 'The surrogacy trap',
    lede:
      'The surrogacy trap is not a legal term and appears in no statute. This page uses it for one pattern: a plan that looks settled because the country allows surrogacy, while the questions that decide the outcome are still open.',
    definitionLabel: 'What the phrase describes',
    definition:
      'A plan that answered the easy question, whether surrogacy is allowed there, and treated that answer as the answer to four harder ones: whether you qualify, what the money covers, whether the agreement can be enforced, and who is the child’s legal parent at the point it matters.',
    testLabel: 'Ask',
    items: [
      {
        title: 'Allowed in the country, closed to your family',
        body:
          'A country can allow surrogacy and still exclude your family. Provisions often turn on marital status, a genetic link, nationality or residence, and those tests are separate from legality.',
        test:
          'Which provision names a family like yours, and where is it published? Ask for the section itself, not the programme’s summary of it.',
      },
      {
        title: 'A quote covers less than the journey',
        body:
          'A programme price is a sales document. It states what the seller includes, not what the journey costs, and the excluded lines are where two quotes stop being comparable.',
        test:
          'Put both quotes into the same item list before comparing totals, and ask what returns if the programme stops.',
      },
      {
        title: 'The agreement may not be enforceable where the birth happens',
        body:
          'In some systems the agreement is binding. In others it is not enforceable at all, and parentage is decided by a court afterwards, so a signature carries no weight on its own.',
        test: 'What is the agreement worth in the country where the birth happens, rather than where it was signed?',
      },
      {
        title: 'Parentage is decided after the birth',
        body:
          'The delivery is a medical event; parentage and the child’s travel documents are legal ones. In England and Wales, an arrangement is not enforceable and parentage moves only after a court order, which typically takes six months to a year.',
        test: 'Who is the legal parent on the day of birth, and which authority issues the child’s travel document?',
        cite: 3,
      },
    ],
    closing:
      'None of these four is a reason to walk away. Ask each one in writing before any money moves, and keep the replies in one place. A year from now, they are the record of what you were told.',
  },
  zh: {
    heading: '代孕里的陷阱',
    lede:
      '「代孕陷阱」不是法律术语，也不在任何法条里。本站用它指一种情况：因为国家允许代孕，计划看起来已经确定，而真正决定结果的问题还没有解决。',
    definitionLabel: '这个说法指的是什么',
    definition:
      '有的计划只回答了最容易的那个问题：这个国家允许代孕吗。然后把这个答案，当成了另外四个问题的答案：您是否符合资格、费用覆盖到哪里、协议能不能被执行、孩子出生时谁是法律上的父母。',
    testLabel: '要问',
    items: [
      {
        title: '国家允许，但对您这样的家庭不开放',
        body:
          '一个国家可以允许代孕，同时把您这样的家庭排除在外。条文往往以婚姻状况、基因联系、国籍或居留为条件，而这些条件与「是否合法」是两件事。',
        test: '哪一条规定写明向您这样的家庭开放，它公布在哪里？请对方给出条款，而不是项目自己的总结。',
      },
      {
        title: '报价不等于总花费',
        body:
          '项目报价是一份销售文件。它写明卖方包含什么，不写明整件事实际要花多少。两份报价之所以无法直接比较，差别通常就在没有列出的条目上。',
        test: '先按同一份条目清单把两份报价填进去，再比总额；并问清项目中止时有什么会退回。',
      },
      {
        title: '协议在出生地未必能被执行',
        body:
          '部分体系里协议具有约束力；另一些体系里它完全不可执行，亲权要等法院裁定。在这种情况下，签了协议也不等于您就是孩子的父母。',
        test: '这份协议在分娩发生的国家值多少，而不只是在签署它的地方值多少？',
      },
      {
        title: '亲权在出生之后才确定',
        body:
          '分娩是医疗事件，亲权与孩子的旅行证件是法律事件。在英格兰与威尔士，代孕安排不具可执行性，亲权要经法院裁定之后才转移，通常需要六个月到一年。',
        test: '孩子出生当天，谁是法律上的父母？孩子的旅行证件由哪个机关签发？',
        cite: 3,
      },
    ],
    closing: '这四条都不是放弃计划的理由。付款之前，把四道题逐条以书面形式提出，并保存对方的答复。一年之后再翻出来，这些答复就是您当时得到过哪些说明的记录。',
  },
};

/* ---------------------------------------------------------------------------------------------
 * 6. Questions
 * ------------------------------------------------------------------------------------------- */

export const HOME_FAQ: Record<Lang, {
  heading: string;
  lede: string;
  items: { q: string; a: string; cite?: number }[];
}> = {
  en: {
    heading: 'Questions people ask',
    lede: 'A direct answer first; where an answer rests on a figure or a legal position, the marker beside it points to the document behind it.',
    items: [
      {
        q: 'Is surrogacy the same as adoption?',
        a: 'No. In adoption a child who already exists is placed with a family. In surrogacy the pregnancy is planned for the intended parents, so the legal question is parentage from birth rather than the ending of another family’s rights. Some systems still require an adoption-like step afterwards, which is a legal route rather than the same arrangement.',
      },
      {
        q: 'How long does the surrogacy process take?',
        a: 'There is no single duration. Screening and matching come before any treatment, the pregnancy itself runs about nine months, and the parentage step after birth can add six months to a year where it is decided in court, as in England and Wales.',
        cite: 3,
      },
      {
        q: 'Is surrogacy legal everywhere?',
        a: 'No. It ranges from expressly permitted by statute to prohibited, and in federal countries it varies by state or province. The United States has no federal framework; in the survey of state law this site reads, 21 states expressly permitted gestational surrogacy and several had no statute or case law either way.',
        cite: 5,
      },
      {
        q: 'Can a single person or same-sex couple use surrogacy?',
        a: 'It depends on the destination. Each country sets its own conditions — marital status, a genetic link to the child, nationality or residence — and those conditions are separate from whether surrogacy is allowed at all. This site lists, per country, which family types that record is open to, so check your own situation against it before going further.',
      },
      {
        q: 'What does a surrogacy quote usually leave out?',
        a: 'A programme quote tends to cover only the services it sells. Insurance, travel, time off work, the delivery itself, and the documents needed to bring the child home are often outside it; so is what happens to the money if a match is not reached. Comparing two quotes line by line beats comparing two totals.',
      },
      {
        q: 'How do I tell whether a surrogacy arrangement is sound?',
        a: 'Start with whether each claim it makes can be traced to a source; whether legal representation is independent for both sides; whether funds sit in an escrow named in the agreement; and whether refunds and disputes are written down. Treat any "guaranteed" or "risk-free" promise as a claim to check, not a conclusion — and have a lawyer who knows your own country review the specifics before you decide.',
      },
    ],
  },
  zh: {
    heading: '读者常问的问题',
    lede: '每题先给直接回答；用到数字或法律立场的，旁边标出它所依据的来源。',
    items: [
      {
        q: '代孕和收养是一回事吗？',
        a: '不是。收养是把一个已经存在的孩子安置到家庭中；代孕则是为意向父母计划一次怀孕，所以要解决的问题从孩子出生那天起就是亲权归属，而不是终止另一个家庭已有的亲权。部分体系在出生后仍要求走一道类似收养的程序，那是一条法律路径，而不是同一种安排。',
      },
      {
        q: '代孕流程需要多长时间？',
        a: '没有统一的时长。治疗之前有筛查与匹配，怀孕本身约九个月；在由法院裁定亲权的体系里（如英格兰与威尔士），出生后这一步还会再加六个月到一年。',
        cite: 3,
      },
      {
        q: '代孕在所有地方都合法吗？',
        a: '不。其跨度从成文法明确允许到明令禁止；在联邦制国家，州或省之间亦不相同。美国没有联邦层面的框架；在本站阅读的州法调查中，21 个州以成文法明确允许妊娠代孕，另有若干州既无允许也无禁止的成文法或判例。',
        cite: 5,
      },
      {
        q: '一个人或同性伴侣可以走代孕吗？',
        a: '这取决于目的地。每个国家对申请人有不同要求，常见条件包括婚姻状况、是否与孩子有基因联系、国籍或居留身份；这些条件和「是否允许代孕」是分开的两件事。本站每个国家记录里都单独列出了该地开放的家庭类型，需要先核对您自己的情况是否对得上，再继续。',
      },
      {
        q: '代孕报价通常漏掉了哪些费用？',
        a: '项目报价一般只覆盖它自己提供的服务。保险、往返出行、陪伴者的误工、分娩本身，以及把孩子带回国所需的证件和手续，常常不在报价里；匹配没有成功时的退款规则，也需要提前问清。把预算拆成具体条目再比总价，比直接比较两个数字更可靠。',
      },
      {
        q: '怎么判断一个代孕安排是否靠谱？',
        a: '先看它给出的结论能不能查到来源；法律代理是否双方独立、资金是否进入协议指定的托管账户、是否写明退款与争议处理。把任何「包成功」「零风险」这类承诺当作需要核实的说法，而不是结论。真正重要的决定，最终应由您本地的律师看过您的具体情况之后再做。',
      },
    ],
  },
};

/* ---------------------------------------------------------------------------------------------
 * 7. Sources
 * ------------------------------------------------------------------------------------------- */

export const HOME_SOURCES_COPY: Record<Lang, {
  heading: string;
  lede: string;
  checkedLabel: string;
  supportsLabel: string;
  openLabel: string;
}> = {
  en: {
    heading: 'Sources',
    lede:
      'Every figure and legal position on this page comes from one of these documents. Each row names what it supports and the date it was last opened.',
    checkedLabel: 'checked',
    supportsLabel: 'Supports',
    openLabel: 'Open the source',
  },
  zh: {
    heading: '来源',
    lede: '本页每一个数字与法律立场，都出自以下文件之一。每一行都写明它支撑的结论，以及最近一次查阅的日期。',
    checkedLabel: '查阅于',
    supportsLabel: '支撑的结论',
    openLabel: '打开来源',
  },
};

export type HomeSource = {
  n: number;
  label: string;
  publisher: string;
  url: string;
  checkedOn: string;
  supports: Bilingual;
};

/*
 * Ordered by first citation on the page, so a reader following a marker upwards or downwards
 * finds it in the same direction. Each entry reuses a document already cited in the guides, at
 * the date that guide last opened it, so the homepage cannot claim a checking the site did not do.
 */
export const HOME_SOURCES: HomeSource[] = [
  {
    n: 1,
    label: 'FIGO position statement on surrogacy',
    publisher: 'International Federation of Gynaecology and Obstetrics',
    url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC12553094/',
    checkedOn: '2026-10-14',
    supports: {
      en: 'That FIGO supports gestational surrogacy, discourages arrangements in which a woman agrees in advance to surrender a child she is genetically related to, and treats psychological screening and ongoing counselling for both parties as mandatory.',
      zh: 'FIGO 支持妊娠代孕；不鼓励代孕者事先同意放弃与其有基因关系的孩子的安排；并要求双方的心理筛查与持续咨询为强制。',
    },
  },
  {
    n: 2,
    label: 'Surrogacy (treatment information)',
    publisher: 'Human Fertilisation and Embryology Authority',
    url: 'https://www.hfea.gov.uk/treatments/explore-all-treatments/surrogacy/',
    checkedOn: '2026-10-14',
    supports: {
      en: 'That in the United Kingdom the surrogate is the legal mother at birth unless a parental order is obtained.',
      zh: '在英国，除非取得亲权令，分娩的代孕者即为法律上的母亲。',
    },
  },
  {
    n: 3,
    label: 'Surrogacy (law reform project)',
    publisher: 'Law Commission of England and Wales, with the Scottish Law Commission',
    url: 'https://lawcom.gov.uk/project/surrogacy/',
    checkedOn: '2026-10-14',
    supports: {
      en: 'That intended parents wait until the child is born and then apply to court, that the process typically takes six months to a year, and that arrangements remain unenforceable under the proposed reform.',
      zh: '意向父母须等孩子出生后再向法院申请，这一步通常需要六个月到一年；在改革建议之下，代孕安排仍然不具可执行性。',
    },
  },
  {
    n: 4,
    label: 'Financial terms and escrow accounts',
    publisher: 'Academy of Adoption and Assisted Reproduction Attorneys',
    url: 'https://adoptionart.org/assisted-reproduction/financial-terms-escrow-accounts/',
    checkedOn: '2026-10-14',
    supports: {
      en: 'That every arrangement should be formalised by a written agreement containing the complete financial terms, and that escrow is typically funded before the first embryo transfer.',
      zh: '每一项安排都应以书面协议形式确定完整的财务条款；托管账户通常在第一次胚胎移植之前完成注资。',
    },
  },
  {
    n: 5,
    label: 'Legal and regulatory considerations for gestational surrogacy in the United States',
    publisher: 'Journal of Assisted Reproduction and Genetics 41(11):3013–3037, Herweck, Manvelyan et al.',
    url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC11621256/',
    checkedOn: '2026-10-14',
    supports: {
      en: 'That separate legal representation is recommended and sometimes mandated, that US cost passed US$100,000 in 2017, that there is no federal framework, that 21 states expressly permitted gestational surrogacy in the survey read, and that contracts are unenforceable in Indiana and Nebraska and barred to Arizona residents.',
      zh: '各方独立法律代理为建议、有时为强制；美国该项费用在 2017 年已超过 10 万美元；不存在联邦框架；所阅读的调查中 21 个州以成文法明确允许妊娠代孕；印第安纳与内布拉斯加州的合同不可执行，亚利桑那州居民被禁止订立。',
    },
  },
  {
    n: 6,
    label: 'Gestational carrier embryo transfers in the United States',
    publisher: 'Fertility and Sterility, Herweck et al.',
    url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC10978240/',
    checkedOn: '2026-10-14',
    supports: {
      en: 'That of 40,177 embryo transfers to a gestational carrier from 2014 to 2020, 32 per cent were for intended parents living outside the United States.',
      zh: '2014 至 2020 年间 40,177 例代孕胚胎移植中，有 32% 的意向父母居住在美国境外。',
    },
  },
  {
    n: 7,
    label: 'Average cost of surrogacy in the United States (clinic blog)',
    publisher: 'Illume Fertility',
    url: 'https://www.illumefertility.com/fertility-blog/average-cost-of-surrogacy-in-the-united-states',
    checkedOn: '2026-10-14',
    supports: {
      en: 'The 2025 range of US$100,000 to 140,000 and the statement that costs can rise to US$250,000 or more. A provider’s own page, with no disclosed methodology, and cited here as exactly that.',
      zh: '2025 年 10 万至 14 万美元的区间，以及费用可能升至 25 万美元以上的说法。这是服务方自己的页面，未披露统计方法，本站正是按这一性质引用它。',
    },
  },
  {
    n: 8,
    label: 'Surrogacy: a factsheet',
    publisher: 'Human Fertilisation and Embryology Authority',
    url: 'https://www.hfea.gov.uk/about-us/media-centre/surrogacy-a-factsheet/',
    checkedOn: '2026-10-14',
    supports: {
      en: 'The UK rule that only reasonable expenses may be paid without authorisation, and the £10,000 to £15,000 reimbursement range reported by Surrogacy UK.',
      zh: '英国的规定：未经批准只能支付合理开支；以及 Surrogacy UK 报告的一万至一万五千英镑补偿区间。',
    },
  },
];
