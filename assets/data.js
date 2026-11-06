const STYLES = [
  {
    id: "archive",
    index: "01",
    name: "暗室档案",
    en: "THE ARCHIVE DESK",
    accent: "#d8b36a",
    kind: "纸片拼贴 / 长文论证",
    tagline: "把观点摊开成一张证据桌",
    description: "深色木桌、米色档案纸、纸片人。把观点摊开成一张证据桌，每句话都落在一个可看的物件上。",
    medium: "2.5D 纸片拼贴",
    narrative: "论证式长文",
    mood: "冷静 · 博学 · 怀旧",
    ratio: "9:16",
    duration: "04:37",
    durationSec: 277.2,
    fps: "30",
    palette: ["#3B2418", "#E8DCC3", "#B64032", "#171310"],
    difficulty: 5,
    filmTitle: "AI 时代最吃香的 MBTI（复刻）",
    filmSub: "复刻成片 · 04:37",
    poster: "media/posters/archive-1.jpg",
    video: "media/archive.mp4",
    frames: [
      { src: "media/posters/archive-1.jpg", label: "达·芬奇 / 手稿" },
      { src: "media/posters/archive-2.jpg", label: "爱迪生 / 门洛帕克" },
      { src: "media/posters/archive-3.jpg", label: "排名 / INTJ 钩子" }
    ],
    sourceNote: "复刻自小红书「AI 时代最吃香的 MBTI」",
    tags: ["历史人物", "AI 时代", "排名钩子", "长文"],
    fit: ["AI 时代", "职业选择", "人格排名", "文化史", "书影评"],
    visual: [
      "俯拍胡桃木桌，左上硬光、四角压暗，画面像一页摊开的私人档案。",
      "米色纸签标题条：首词可红色，正文用黑边白字，手写批注做旁证。",
      "纸片人白边贴纸 + 投影，站在纸页边缘；每 6–8 秒换一次纸堆。",
      "镜头只做 1.00→1.05 慢推，转场靠换纸、推近、拉远，不靠特效。"
    ],
    sound: [
      "男声旁白约 6 字/秒，句间几乎不停。",
      "低音量 BGM 垫底，人声出现时自动下压。",
      "字幕与口播逐句对齐，音画误差 < 0.1s。"
    ],
    structure: [
      { time: "0:00", title: "钩子", desc: "达·芬奇：画不完" },
      { time: "0:32", title: "对照", desc: "爱迪生：一个人 vs 一个实验室" },
      { time: "0:58", title: "命题", desc: "AI = 每个人的门洛帕克" },
      { time: "1:08", title: "案例", desc: "苏轼：会写的人多得是" },
      { time: "2:05", title: "转折", desc: "有标准答案 vs 没有" },
      { time: "2:53", title: "理论", desc: "杜夫海纳：先被打动" },
      { time: "3:35", title: "收束", desc: "歌没变，变的是你" },
      { time: "4:07", title: "结算", desc: "ENTP / ENFP / INTJ 排名" },
      { time: "4:26", title: "署名", desc: "我是 KELE" }
    ],
    formula: "一张桌面 + 三张证据纸 + 一个纸片人；每 6–8 秒换一次纸堆；每个论点必须落在一个物件上。",
    migrate: [
      "把抽象判断换成一张可看的纸：数据、手稿、老照片、地图。",
      "用历史人物做钩子，再用现代命题回收。",
      "把排名留到结尾，制造下一期钩子。"
    ],
    avoid: [
      "不照搬原片文案与署名。",
      "公版图重新排版，角色重绘，不直接复用原片画面。",
      "不要让纸堆变成无意义的装饰，每张纸都要承担论据。"
    ],
    note: "适合长文、书影评、文化史、AI 时代判断。制作重点是素材考据与排版，不是运镜。"
  },
  {
    id: "cat",
    index: "02",
    name: "萌猫寓言",
    en: "THE CUTE FABLE",
    accent: "#e58a4a",
    kind: "3D 萌宠 / 寓言论证",
    tagline: "用最可爱的壳，讲最冷的事",
    description: "一只橘白小猫穿过冷灰城市与暖色猫村。萌宠负责让你停下来，寓言负责让你不舒服。",
    medium: "3D 萌宠 / 电影级渲染",
    narrative: "寓言式论证",
    mood: "可爱 · 冷峻 · 反问",
    ratio: "4:3",
    duration: "03:41",
    durationSec: 220.75,
    fps: "24",
    palette: ["#6F7F8C", "#E58A4A", "#F2D8B3", "#101214"],
    difficulty: 4,
    filmTitle: "什么是平庸之恶（小猫版）",
    filmSub: "定版成片 · 03:41",
    poster: "media/posters/cat1080-2.jpg",
    video: "media/cat-1080.mp4",
    frames: [
      { src: "media/posters/cat1080-1.jpg", label: "猫村 / 暖色寓言" },
      { src: "media/posters/cat1080-2.jpg", label: "书山 / 机制" },
      { src: "media/posters/cat1080-3.jpg", label: "结尾 / 反问" }
    ],
    sourceNote: "复刻自小红书「哲学的猫」",
    tags: ["萌宠", "哲学", "寓言", "章节卡"],
    fit: ["心理学", "哲学", "人际关系", "社会议题", "人格阴暗面"],
    visual: [
      "冷灰蓝“论文世界”与暖色“猫村寓言”双空间。",
      "同一只橘白小猫贯穿全片，角色设定图锁一致性。",
      "底部白字黑边字幕；橙色数字 + 红色标题章节卡。",
      "说话镜头固定半身，寓言段用中景/近景，硬切推进。"
    ],
    sound: [
      "低沉男声，句间 0.3s，段间 0.9s。",
      "BGM 低音量铺底，侧链压缩在人声出现时下压。",
      "字幕逐句烧录，章节大字落在论点转折处。"
    ],
    structure: [
      { time: "0:00", title: "定义", desc: "阿伦特 / 平庸之恶 / 倍速时代" },
      { time: "0:14", title: "标题", desc: "章节卡：平庸之恶" },
      { time: "0:40", title: "寓言", desc: "月光草、银鱼、七秒视频、审判" },
      { time: "1:43", title: "机制", desc: "道德优越感 / 责任稀释 / 思维懒惰" },
      { time: "2:36", title: "解法", desc: "推迟结论 / 警惕正义感 / 和真人对话" },
      { time: "3:37", title: "收束", desc: "把问题交回观众" }
    ],
    formula: "萌宠主角 + 一个道德困境 + 三段式寓言 + 三个心理机制 + 一个反问；可爱越真，残忍越冷。",
    migrate: [
      "先给定义，再用一个具体故事演一遍。",
      "让角色站在“正义”的一边，再揭示他就是施暴者。",
      "用章节卡把 4 分钟切成可呼吸的段落。"
    ],
    avoid: [
      "不复制原片猫村分镜、原句与角色造型。",
      "不要让萌宠只负责卖萌，它必须承担叙事动作。",
      "不要把结论讲满，最后留一个反问。"
    ],
    note: "适合心理学、哲学、社会议题。现有两个成片版本：03:41 的 1080×810 定版，和 04:50 的 960×720 长版；制作重点是角色一致性与寓言动作设计。"
  },
  {
    id: "puppet",
    index: "03",
    name: "木偶剧场",
    en: "THE PUPPET THEATRE",
    accent: "#c98a3e",
    kind: "木偶舞台 / 格言故事",
    tagline: "让木偶替你演一遍人性",
    description: "暖褐木偶、圆形舞台、皮影与灯箱。用一句格言开场，用一个历史故事落地，把心理机制演成可看的戏。",
    medium: "木偶 / 纸偶舞台",
    narrative: "格言 + 历史故事",
    mood: "旧戏台 · 宿命感 · 暖褐",
    ratio: "4:3",
    duration: "02:26",
    durationSec: 146,
    fps: "30",
    palette: ["#C98A3E", "#2A1A12", "#A63A2A", "#E8D8BD"],
    difficulty: 4,
    filmTitle: "投射效应",
    filmSub: "原创成片 · 02:26",
    poster: "media/posters/puppet-2.jpg",
    video: "media/puppet.mp4",
    frames: [
      { src: "media/posters/puppet-1.jpg", label: "圆形舞台 / 狼" },
      { src: "media/posters/puppet-2.jpg", label: "三只木偶 / 格言" },
      { src: "media/posters/puppet-3.jpg", label: "皮影 / 三国" }
    ],
    sourceNote: "本项目原创 · 木偶舞台风格",
    tags: ["投射", "关系筛选", "三国", "双语字幕"],
    fit: ["人格投射", "关系筛选", "认知偏差", "历史人物", "人性实验"],
    visual: [
      "圆形画框 / 舞台正面 / 灯箱剪影，像在看一出老戏。",
      "木偶角色固定发型与毛衣颜色，靠站位和影子区分关系。",
      "中文大字 + 英文小字双语字幕，顶部保留栏目标识。",
      "缓慢推拉与硬切结合，影子承担心理机制。"
    ],
    sound: [
      "旁白克制，句间留 0.4–0.7s 呼吸。",
      "低音铺底 + 环境底噪，不做强节奏。",
      "中英双语字幕同步，适合静音观看。"
    ],
    structure: [
      { time: "0:00", title: "钩子", desc: "有个很脏，但很准的真相" },
      { time: "0:15", title: "例证", desc: "对算计的人交底 / 对刻薄的人示好" },
      { time: "0:40", title: "命名", desc: "心理学上，这叫投射" },
      { time: "1:00", title: "故事", desc: "曹操误杀吕伯奢" },
      { time: "1:50", title: "方法", desc: "听他怎么猜别人" },
      { time: "2:20", title: "收束", desc: "你看见的别人，其实是你自己" }
    ],
    formula: "一个圆形舞台 + 一个木偶主角 + 一句格言 + 一个历史故事；用影子演心理机制。",
    migrate: [
      "把抽象心理机制交给影子、灯箱、道具，不让角色解释。",
      "用一个公版历史故事做中段，把观点变成情节。",
      "双语字幕可以同时服务中文流量与海外分发。"
    ],
    avoid: [
      "不复制原片木偶造型与画面。",
      "历史故事用公版叙事重讲，不加戏说式细节。",
      "不要让舞台感变成慢，句子必须短。"
    ],
    note: "适合关系、投射、认知偏差、历史人物。制作重点是舞台美术与光影。"
  },
  {
    id: "atlas",
    index: "04",
    name: "低多边形图鉴",
    en: "THE LOW-POLY ATLAS",
    accent: "#e8db18",
    kind: "矢量图鉴 / 目录循环",
    tagline: "16 次点名，16 次对号入座",
    description: "黑底、黄字、低多边形角色。16 个类型各走一遍「人 → 物 → 场」，观众会一直等自己的类型出现。",
    medium: "2D 矢量 / 低多边形",
    narrative: "目录式图鉴",
    mood: "明快 · 直接 · 系列感",
    ratio: "16:9",
    duration: "03:59",
    durationSec: 239.12,
    fps: "30",
    palette: ["#000000", "#E8DB18", "#4E8A96", "#6C5071", "#437853", "#81693A"],
    difficulty: 5,
    filmTitle: "16 型职场图鉴",
    filmSub: "复刻成片 · 03:59",
    poster: "media/posters/atlas-2.jpg",
    video: "media/atlas.mp4",
    frames: [
      { src: "media/posters/atlas-1.jpg", label: "钩子 / 角色蒙太奇" },
      { src: "media/posters/atlas-2.jpg", label: "INFJ / 职业场" },
      { src: "media/posters/atlas-3.jpg", label: "类型 / 职位卡" }
    ],
    sourceNote: "复刻自 B 站「16 型职场图鉴」",
    tags: ["16 型", "职业", "三镜循环", "编号倒计时"],
    fit: ["16 型职业", "副业", "恋爱", "学习", "穿搭", "旅行", "书单"],
    visual: [
      "恒定强调色黄 #E8DB18，黑描边；四组人格色只染角色与环境。",
      "hero 纯黑底单人，array 黑底道具横排，env 彩色场景横条。",
      "每个类型固定发型、服装、道具，同组同色系但轮廓可区分。",
      "全片硬切，hero 慢拉远，array 极慢拉远，env 完全静止。"
    ],
    sound: [
      "旁白 5.9 字/秒，句间几乎不停。",
      "BGM 99 BPM，平均 8 拍一镜。",
      "没有独立结尾，最后一个类型说完即停。"
    ],
    structure: [
      { time: "0:00", title: "钩子", desc: "6s：16 型 + 收益 + 角色蒙太奇" },
      { time: "0:06", title: "身份", desc: "hero 7.07s：黑底单人 + 编号 + 别名" },
      { time: "0:13", title: "证明", desc: "array 4.17s：道具横排 + 金句" },
      { time: "0:17", title: "落点", desc: "env 3.33s：场景横条 + 3–4 个职业" },
      { time: "0:17+", title: "循环", desc: "×16，每型 14.57s，说完即停" }
    ],
    formula: "黑底人 → 黑底物 → 彩色场；编号倒计时 + 四色分组；每型 3–4 个职业。",
    migrate: [
      "先定 16 个固定角色：同组同色系，靠发型/道具/轮廓区分。",
      "每块只写 3 行：标签 ≤12 字、行为证明 ≤24 字、3–4 个职业。",
      "开头 3 秒给数量 + 收益 + 对象；编号必须出现。"
    ],
    avoid: [
      "不复制原片角色、插画、原句、水印、BGM。",
      "不要让 16 块变成 16 种花样，固定循环才降低理解成本。",
      "不要加总结和 CTA，最后一块就是结尾。"
    ],
    note: "适合一切可枚举的 MBTI 清单。制作重点是 16 套角色资产与稳定排版。"
  }
];

// 参考原片仅用于本地拉片，不进入公开部署版本。
const REFERENCES = [];

const GOALS = {
  growth: {
    label: "涨粉 / 完播",
    styleId: "atlas",
    reason: "编号倒计时 + 四色分组，天然制造“等我的类型出现”。16 个块就是 16 次对号入座，适合做系列。",
    secondary: "cat",
    secondaryReason: "如果内容更偏情绪与关系，萌猫寓言更容易引发评论。"
  },
  depth: {
    label: "深度 / 人设",
    styleId: "archive",
    reason: "档案桌 + 证据链，适合建立“有文化底、有判断”的人设。每个观点都能落在一张纸上。",
    secondary: "puppet",
    secondaryReason: "如果想让表达更有作者性，木偶剧场可以接住更抽象的心理机制。"
  },
  emotion: {
    label: "情绪 / 评论",
    styleId: "cat",
    reason: "萌宠外壳降低门槛，寓言里的道德困境负责制造不舒服。可爱越真，最后那一下越冷。",
    secondary: "puppet",
    secondaryReason: "如果想更克制、更像作者电影，可以把猫换成木偶。"
  },
  series: {
    label: "低成本系列",
    styleId: "puppet",
    reason: "一个圆形舞台、一组木偶、一个隐喻，可以反复复用。单集只换故事和格言，资产压力最小。",
    secondary: "archive",
    secondaryReason: "如果素材库足够，档案桌也能稳定复用，而且更像“知识档案”。"
  }
};

const GROUPS = {
  NT: {
    label: "NT 理性组",
    styleId: "archive",
    reason: "NT 观众更吃“证据链”和“判断”，档案桌能把抽象观点变成可检查的物件。",
    secondary: "atlas",
    secondaryReason: "如果主题是可枚举的清单，低多边形图鉴会更直接。"
  },
  NF: {
    label: "NF 理想组",
    styleId: "cat",
    reason: "NF 观众更容易被寓言、关系和道德困境带走。萌猫寓言用可爱外壳装一个不舒服的问题。",
    secondary: "puppet",
    secondaryReason: "木偶剧场更克制，适合更私人、更宿命的表达。"
  },
  SJ: {
    label: "SJ 秩序组",
    styleId: "atlas",
    reason: "SJ 观众喜欢清楚的结构和落点。16 型图鉴用编号、分组、职位列表给出稳定预期。",
    secondary: "archive",
    secondaryReason: "档案桌也能提供秩序感，但更适合长文论证。"
  },
  SP: {
    label: "SP 体验组",
    styleId: "puppet",
    reason: "SP 观众对“现场感”和“戏”更敏感。木偶舞台把心理机制变成可看的动作与影子。",
    secondary: "cat",
    secondaryReason: "如果想要更轻、更可爱，萌猫寓言的观看门槛更低。"
  }
};

const TYPES = [
  { code: "INTJ", group: "NT", styleId: "archive", reason: "长线判断需要一张证据桌，把抽象战略落成可检查的纸。" },
  { code: "INTP", group: "NT", styleId: "atlas", reason: "分类癖的快乐：16 个格子、编号和定义，正好装下你的模型。" },
  { code: "ENTJ", group: "NT", styleId: "archive", reason: "结论先行、案例支撑，档案桌是最像“作战室”的影像。" },
  { code: "ENTP", group: "NT", styleId: "atlas", reason: "反差钩子加清单体，编号倒计时能把脑洞变成系列。" },
  { code: "INFJ", group: "NF", styleId: "cat", reason: "用一个寓言装道德困境，可爱外壳让沉重判断被听完。" },
  { code: "INFP", group: "NF", styleId: "puppet", reason: "私人的内心戏适合木偶舞台，影子比台词更能说出你。" },
  { code: "ENFJ", group: "NF", styleId: "cat", reason: "关系与伦理是主场，猫村故事让观众代入而不是被说教。" },
  { code: "ENFP", group: "NF", styleId: "atlas", reason: "把热情变成可枚举的清单，16 次对号入座就是 16 次转发。" },
  { code: "ISTJ", group: "SJ", styleId: "atlas", reason: "秩序感优先：编号、分组、职位列表，信息一眼可查。" },
  { code: "ISFJ", group: "SJ", styleId: "cat", reason: "照顾型叙事适合寓言，先让人喜欢角色，再让人理解处境。" },
  { code: "ESTJ", group: "SJ", styleId: "archive", reason: "结论、证据、排名，三段式最符合你的汇报本能。" },
  { code: "ESFJ", group: "SJ", styleId: "cat", reason: "群体关系与情绪流动，猫村的暖色能接住你的共情。" },
  { code: "ISTP", group: "SP", styleId: "puppet", reason: "少说话、多给机制，木偶舞台用动作把一件事讲清。" },
  { code: "ISFP", group: "SP", styleId: "puppet", reason: "审美与感受先行，克制的舞台让情绪有地方停。" },
  { code: "ESTP", group: "SP", styleId: "puppet", reason: "现场感和戏感，木偶的动作比长段旁白更快抓住人。" },
  { code: "ESFP", group: "SP", styleId: "cat", reason: "可爱、直接、有情绪，萌宠外壳最适合即时感染力。" }
];

const ALL_FILMS = [  ...STYLES.map((s) => ({
    id: s.id,
    kind: "final",
    kindLabel: "成片",
    styleId: s.id,
    accent: s.accent,
    name: s.filmTitle,
    en: s.name + " · " + s.en,
    meta: s.ratio + " · " + s.duration + " · " + s.fps + "fps",
    poster: s.poster,
    video: s.video,
    note: s.sourceNote
  })),
  {
    id: "cat-long",
    kind: "final",
    kindLabel: "成片",
    styleId: "cat",
    accent: "#e58a4a",
    name: "什么是平庸之恶（长版）",
    en: "萌猫寓言 · THE CUTE FABLE",
    meta: "4:3 · 04:50 · 30fps",
    poster: "media/posters/cat-2.jpg",
    video: "media/cat.mp4",
    note: "960×720 长版，82 镜 / 289.57s"
  },  ...REFERENCES.map((r) => ({
    id: r.id,
    kind: "reference",
    kindLabel: "参考原片",
    styleId: r.styleId,
    accent: r.accent,
    name: r.name,
    en: r.en,
    meta: r.meta,
    poster: r.poster,
    video: r.video,
    note: r.note
  }))
];





