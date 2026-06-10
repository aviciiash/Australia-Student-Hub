// Basic site search index (manual, lightweight)
// Loaded by index.html. Do not include secrets.
// Fields:
//  - title: page title
//  - description: one-line summary
//  - url: relative link
//  - keywords: extra match terms (Chinese/English aliases)

window.SEARCH_INDEX = [
	{ title: "📚 在澳学习（导航中心）", description: "教育体系、VCE/ATAR、学习方法、AI 工具与学习误区。", url: "study-hub.html", keywords: ["study", "学习", "在澳学习", "教育"] },
	{ title: "🏠 住宿与租房（导航中心）", description: "寄宿家庭、租房流程、合租、平台推荐与行李清单。", url: "housing-hub.html", keywords: ["housing", "住宿", "租房", "合租", "homestay"] },
	{ title: "💰 银行与财务（导航中心）", description: "银行卡、学费、生活成本、兼职税务、学生优惠与省钱。", url: "finance-hub.html", keywords: ["finance", "财务", "银行", "开支", "预算"] },
	{ title: "💼 工作与就业（导航中心）", description: "就业环境、兼职、实习、本地经验与求职误区。", url: "employment-hub.html", keywords: ["employment", "工作", "就业", "求职", "实习"] },
	{ title: "🦘 移民与PR（导航中心）", description: "PR 核心逻辑、485 工签、雇主担保与其他选择。", url: "pr-hub.html", keywords: ["pr", "移民", "永居", "485", "工签"] },

	{ title: "🦘 毕业后能拿澳洲 PR 吗？", description: "先给结论，再按需深入 PR 逻辑与误区。", url: "pr.html", keywords: ["PR", "永居", "移民", "EOI", "州担保", "技术移民"] },
	{ title: "🦘 毕业后能拿澳洲 PR 吗？（详细页）", description: "PR 影响因素、误区对照、时间线与建议。", url: "pr-detail.html", keywords: ["PR", "永居", "移民", "timeline", "误区"] },
	{ title: "485 毕业生工签", description: "毕业后的常见第一步（概览页）。", url: "pr-485.html", keywords: ["485", "工签", "毕业生工签", "post study work"] },
	{ title: "雇主担保简介", description: "除技术移民外的重要留澳路径（概览页）。", url: "pr-employer.html", keywords: ["雇主担保", "sponsor", "担保", "工作签"] },
	{ title: "其他发展选择", description: "回国发展、第三国发展与继续深造。", url: "pr-options.html", keywords: ["回国", "第三国", "深造", "选择"] },

	{ title: "💼 澳洲就业环境怎么样？", description: "先给结论，再按需深入就业逻辑与建议。", url: "jobs.html", keywords: ["就业", "工作", "找工作", "graduate", "intern"] },
	{ title: "💼 澳洲就业环境怎么样？（详细页）", description: "误区、影响因素、隐藏就业市场、收入参考与建议。", url: "jobs-detail.html", keywords: ["就业", "隐藏就业市场", "内推", "收入"] },

	{ title: "💼 学生兼职怎么找？", description: "重点提示 + 常见兼职类型 + 深入了解导航。", url: "part-time-guide.html", keywords: ["兼职", "打工", "part time", "casual", "job"] },
	{ title: "🔍 在哪里找兼职？", description: "Seek、Indeed、Jora、LinkedIn、Gumtree、线下投递与熟人推荐。", url: "part-time-platforms.html", keywords: ["兼职", "找工作", "Seek", "Indeed", "LinkedIn", "Gumtree"] },
	{ title: "📄 简历怎么写？（澳洲兼职）", description: "兼职简历格式、内容结构与注意事项。", url: "resume-guide.html", keywords: ["简历", "resume", "cv", "兼职"] },
	{ title: "💰 工资大概多少？", description: "最低工资、常见时薪范围与基础扣税说明。", url: "salary-guide.html", keywords: ["工资", "时薪", "最低工资", "tax", "扣税"] },
	{ title: "📜 打工合规须知", description: "学生签证工时、TFN、黑工风险与工作权益。", url: "visa-rule.html", keywords: ["合规", "签证", "工时", "TFN", "黑工"] },
	{ title: "🎤 兼职面试会问什么？", description: "常见兼职面试问题与准备建议。", url: "interview-guide.html", keywords: ["面试", "interview", "兼职"] },
	{ title: "☕ 常见兼职类型", description: "餐饮/零售/仓储/校园：门槛与优缺点概览。", url: "part-time-jobs.html", keywords: ["兼职", "餐饮", "零售", "仓储", "校园"] },
	{ title: "⚠️ 中国学生常见误区（兼职）", description: "求职高频踩坑点与避坑建议。", url: "mistakes-guide.html", keywords: ["误区", "踩坑", "黑工", "兼职"] },

	{ title: "💳 澳洲银行卡怎么办？", description: "到澳洲后具体怎么做：准备材料、步骤、FAQ。", url: "banking-guide.html", keywords: ["银行卡", "开户", "bank", "CommBank", "ANZ", "NAB", "Westpac"] },
	{ title: "📱 澳洲电话卡怎么办？", description: "Telstra、Boost、Optus、Vodafone 与办理流程。", url: "phone-plan-guide.html", keywords: ["电话卡", "sim", "telstra", "boost", "optus", "vodafone"] },

	{ title: "💰 如何减少留学开支？", description: "住宿、学费、消费习惯与真实省钱方式。", url: "save-money.html", keywords: ["省钱", "开支", "费用", "预算", "二手", "折扣"] },
	{ title: "🎒 出发前必须带什么？", description: "文件、药品、电子产品、住宿用品与入境注意事项。", url: "packing-list.html", keywords: ["行李", "清单", "出发前", "必带"] },

	{ title: "🚆 交通与生活成本", description: "生活开销结构、公共交通与预算差异（概览）。", url: "transport-cost.html", keywords: ["交通", "生活成本", "预算", "myki", "墨尔本"] },
	{ title: "🚆 墨尔本公共交通", description: "18 岁以下免费乘车、Myki、Free Tram Zone 与费用。", url: "transportation-guide.html", keywords: ["myki", "tram", "train", "bus", "free tram zone", "交通优惠"] },
	{ title: "🏠 墨尔本住宿成本", description: "寄宿家庭/合租/学生公寓/独立公寓：开销对比。", url: "housing-costs.html", keywords: ["住宿", "房租", "租房", "合租", "homestay"] },
	{ title: "🍜 饮食开销", description: "自己做饭 vs 外卖/餐厅：控制日常饮食支出。", url: "food-costs.html", keywords: ["饮食", "外卖", "做饭", "超市"] },
	{ title: "🛒 购物与生活用品", description: "Kmart、Big W、Target、IKEA 常用购买渠道。", url: "shopping-guide.html", keywords: ["购物", "生活用品", "kmart", "ikea", "big w", "target"] },
	{ title: "💰 每月生活费参考", description: "高中寄宿/大学合租/独居：快速估算预算。", url: "monthly-budget.html", keywords: ["预算", "生活费", "每月", "花费"] },

	{ title: "🤖 澳洲学生必备 AI 工具", description: "工具导航 + 学习场景导航，快速找到该用什么。", url: "ai-tools.html", keywords: ["AI", "ChatGPT", "Claude", "Perplexity", "Notion AI", "工具"] },
	{ title: "ChatGPT 使用指南", description: "理解课程内容、解释知识点、练习英语、头脑风暴。", url: "chatgpt-guide.html", keywords: ["ChatGPT", "写作", "解释", "头脑风暴"] },
	{ title: "Claude 使用指南", description: "阅读长论文/PDF、总结课程资料、分析长文。", url: "claude-guide.html", keywords: ["Claude", "论文", "PDF", "长文"] },
	{ title: "Perplexity 使用指南", description: "搜索资料、查找来源、获取最新信息。", url: "perplexity-guide.html", keywords: ["Perplexity", "搜索", "来源"] },
	{ title: "Notion AI 使用指南", description: "整理笔记、生成总结、管理学习计划。", url: "notion-ai-guide.html", keywords: ["Notion AI", "笔记", "总结", "计划"] },
	{ title: "AI：Essay 辅助", description: "正确用 AI 辅助论文写作（不代写）。", url: "ai-essay-guide.html", keywords: ["Essay", "论文", "写作", "AI"] },
	{ title: "AI：Exam Revision", description: "如何利用 AI 进行考前复习。", url: "ai-exam-guide.html", keywords: ["复习", "考试", "Exam", "AI"] },
	{ title: "AI：Academic Reading", description: "如何快速阅读论文与课程资料。", url: "ai-reading-guide.html", keywords: ["阅读", "论文", "课程资料", "AI"] },
	{ title: "AI：English Improvement", description: "如何利用 AI 提升英语能力。", url: "ai-english-guide.html", keywords: ["英语", "口语", "写作", "AI"] },
];
