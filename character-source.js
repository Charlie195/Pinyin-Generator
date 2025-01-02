const characterSource = [
    {
        "Character": "的",
        "Pinyin": "de"
    },
    {
        "Pinyin": "possessive, adjectival suffix"
    },
    {
        "Character": "是",
        "Pinyin": "shì"
    },
    {
        "Pinyin": "indeed, yes, right; to be; demonstrative pronoun, this, that"
    },
    {
        "Character": "不",
        "Pinyin": "bù"
    },
    {
        "Pinyin": "no, not; un-; negative prefix"
    },
    {
        "Character": "我",
        "Pinyin": "wǒ"
    },
    {
        "Pinyin": "our, us, i, me, my, we"
    },
    {
        "Character": "一",
        "Pinyin": "yī"
    },
    {
        "Pinyin": "one; a, an; alone"
    },
    {
        "Character": "有",
        "Pinyin": "yǒu"
    },
    {
        "Pinyin": "have, own, possess; exist"
    },
    {
        "Character": "大",
        "Pinyin": "dà"
    },
    {
        "Pinyin": "big, great, vast, large, high"
    },
    {
        "Character": "在",
        "Pinyin": "zài"
    },
    {
        "Pinyin": "be at, in, on; consist in, rest"
    },
    {
        "Character": "人",
        "Pinyin": "rén"
    },
    {
        "Pinyin": "man; people; mankind; someone else"
    },
    {
        "Character": "了",
        "Pinyin": "liǎo"
    },
    {
        "Pinyin": "to finish; particle of completed action"
    },
    {
        "Character": "中",
        "Pinyin": "zhōng"
    },
    {
        "Pinyin": "central; center, middle; in the midst of; hit (target); attain"
    },
    {
        "Character": "到",
        "Pinyin": "dào"
    },
    {
        "Pinyin": "go to, arrive, been to"
    },
    {
        "Character": "资",
        "Pinyin": "zī"
    },
    {
        "Pinyin": "property; wealth; capital"
    },
    {
        "Character": "要",
        "Pinyin": "yào"
    },
    {
        "Pinyin": "necessary, essential; necessity"
    },
    {
        "Character": "可",
        "Pinyin": "kě"
    },
    {
        "Pinyin": "may, can, -able; possibly"
    },
    {
        "Character": "以",
        "Pinyin": "yǐ"
    },
    {
        "Pinyin": "by means of; thereby, therefore; consider as; in order to"
    },
    {
        "Character": "这",
        "Pinyin": "zhè"
    },
    {
        "Pinyin": "this, the, here"
    },
    {
        "Character": "个",
        "Pinyin": "gè"
    },
    {
        "Pinyin": "numerary adjunct, piece; single"
    },
    {
        "Character": "你",
        "Pinyin": "nǐ"
    },
    {
        "Pinyin": "you, second person pronoun"
    },
    {
        "Character": "会",
        "Pinyin": "huì"
    },
    {
        "Pinyin": "to assemble, meet together; a meeting; an organization"
    },
    {
        "Character": "好",
        "Pinyin": "hǎo"
    },
    {
        "Pinyin": "good, excellent, fine; well"
    },
    {
        "Character": "为",
        "Pinyin": "wèi"
    },
    {
        "Pinyin": "do, handle, govern, act; be"
    },
    {
        "Character": "上",
        "Pinyin": "shàng"
    },
    {
        "Pinyin": "top; superior, highest; go up, send up"
    },
    {
        "Character": "来",
        "Pinyin": "lái"
    },
    {
        "Pinyin": "come, coming; return, returning"
    },
    {
        "Character": "就",
        "Pinyin": "jiù"
    },
    {
        "Pinyin": "just, simply; to come, go to; to approach, near"
    },
    {
        "Character": "学",
        "Pinyin": "xué"
    },
    {
        "Pinyin": "learning, knowledge; school"
    },
    {
        "Character": "交",
        "Pinyin": "jiāo"
    },
    {
        "Pinyin": "mix; intersect; exchange, communicate; deliver"
    },
    {
        "Character": "也",
        "Pinyin": "yě"
    },
    {
        "Pinyin": "also; classical final particle of strong affirmation or identity"
    },
    {
        "Character": "用",
        "Pinyin": "yòng"
    },
    {
        "Pinyin": "use, employ, apply, operate; use"
    },
    {
        "Character": "能",
        "Pinyin": "néng"
    },
    {
        "Pinyin": "to be able; can, permitted to; ability"
    },
    {
        "Character": "如",
        "Pinyin": "rú"
    },
    {
        "Pinyin": "if, supposing; as if; like, as"
    },
    {
        "Character": "文",
        "Pinyin": "wén"
    },
    {
        "Pinyin": "literature, culture, writing"
    },
    {
        "Character": "时",
        "Pinyin": "shí"
    },
    {
        "Pinyin": "time, season; era, age, period"
    },
    {
        "Character": "没",
        "Pinyin": "méi"
    },
    {
        "Pinyin": "not, have not, none; to drown, sink"
    },
    {
        "Character": "说",
        "Pinyin": "shuō"
    },
    {
        "Pinyin": "speak"
    },
    {
        "Character": "他",
        "Pinyin": "tā"
    },
    {
        "Pinyin": "other, another; he, she, it"
    },
    {
        "Character": "看",
        "Pinyin": "kàn"
    },
    {
        "Pinyin": "look, see; examine, scrutinize"
    },
    {
        "Character": "提",
        "Pinyin": "tí"
    },
    {
        "Pinyin": "hold in hand; lift in hand"
    },
    {
        "Character": "那",
        "Pinyin": "nà"
    },
    {
        "Pinyin": "that, that one, those"
    },
    {
        "Character": "问",
        "Pinyin": "wèn"
    },
    {
        "Pinyin": "ask (about), inquire after"
    },
    {
        "Character": "生",
        "Pinyin": "shēng"
    },
    {
        "Pinyin": "life, living, lifetime; birth"
    },
    {
        "Character": "过",
        "Pinyin": "guò"
    },
    {
        "Pinyin": "pass, pass through, go across"
    },
    {
        "Character": "下",
        "Pinyin": "xià"
    },
    {
        "Pinyin": "under, underneath, below; down; inferior; bring down"
    },
    {
        "Character": "请",
        "Pinyin": "qǐng"
    },
    {
        "Pinyin": "ask, request; invite; please"
    },
    {
        "Character": "天",
        "Pinyin": "tiān"
    },
    {
        "Pinyin": "sky, heaven; god, celestial"
    },
    {
        "Character": "们",
        "Pinyin": "men"
    },
    {
        "Pinyin": "adjunct pronoun indicate plural"
    },
    {
        "Character": "所",
        "Pinyin": "suǒ"
    },
    {
        "Pinyin": "place, location; numerary adjunct"
    },
    {
        "Character": "多",
        "Pinyin": "duō"
    },
    {
        "Pinyin": "much, many; more than, over"
    },
    {
        "Character": "麽",
        "Pinyin": "mó"
    },
    {
        "Pinyin": "dimi."
    },
    {
        "Character": "小",
        "Pinyin": "xiǎo"
    },
    {
        "Pinyin": "small, tiny, insignificant"
    },
    {
        "Character": "想",
        "Pinyin": "xiǎng"
    },
    {
        "Pinyin": "think, speculate, plan, consider"
    },
    {
        "Character": "得",
        "Pinyin": "dé"
    },
    {
        "Pinyin": "obtain, get, gain, acquire"
    },
    {
        "Character": "之",
        "Pinyin": "zhī"
    },
    {
        "Pinyin": "'s (marks preceding phrase as modifier of following phrase); it, him her, them; go to"
    },
    {
        "Character": "还",
        "Pinyin": "huán"
    },
    {
        "Pinyin": "still, yet, also, besides"
    },
    {
        "Character": "电",
        "Pinyin": "diàn"
    },
    {
        "Pinyin": "electricity, electric; lightning"
    },
    {
        "Character": "出",
        "Pinyin": "chū"
    },
    {
        "Pinyin": "go out, send out; stand; produce"
    },
    {
        "Character": "工",
        "Pinyin": "gōng"
    },
    {
        "Pinyin": "labor, work; worker, laborer"
    },
    {
        "Character": "对",
        "Pinyin": "duì"
    },
    {
        "Pinyin": "correct, right; facing, opposed"
    },
    {
        "Character": "都",
        "Pinyin": "dū"
    },
    {
        "Pinyin": "metropolis, capital; all, the whole; elegant, refined"
    },
    {
        "Character": "机",
        "Pinyin": "jī"
    },
    {
        "Pinyin": "machine; moment, chance"
    },
    {
        "Character": "自",
        "Pinyin": "zì"
    },
    {
        "Pinyin": "self, private, personal; from"
    },
    {
        "Character": "后",
        "Pinyin": "hòu"
    },
    {
        "Pinyin": "behind, rear, after; descendents"
    },
    {
        "Character": "子",
        "Pinyin": "zǐ"
    },
    {
        "Pinyin": "offspring, child; fruit, seed of; 1st terrestrial branch"
    },
    {
        "Character": "而",
        "Pinyin": "ér"
    },
    {
        "Pinyin": "and; and then; and yet; but"
    },
    {
        "Character": "讯",
        "Pinyin": "xùn"
    },
    {
        "Pinyin": "inquire; ask; examine; reproach"
    },
    {
        "Character": "站",
        "Pinyin": "zhàn"
    },
    {
        "Pinyin": "stand up; a stand, station"
    },
    {
        "Character": "去",
        "Pinyin": "qù"
    },
    {
        "Pinyin": "go away, leave, depart"
    },
    {
        "Character": "心",
        "Pinyin": "xīn"
    },
    {
        "Pinyin": "heart; mind, intelligence; soul"
    },
    {
        "Character": "只",
        "Pinyin": "zhī"
    },
    {
        "Pinyin": "single, one of pair, lone"
    },
    {
        "Character": "家",
        "Pinyin": "jiā"
    },
    {
        "Pinyin": "house, home, residence; family"
    },
    {
        "Character": "知",
        "Pinyin": "zhī"
    },
    {
        "Pinyin": "know, perceive, comprehend"
    },
    {
        "Character": "国",
        "Pinyin": "guó"
    },
    {
        "Pinyin": "nation, country, nation-state"
    },
    {
        "Character": "台",
        "Pinyin": "tái"
    },
    {
        "Pinyin": "taiphoon"
    },
    {
        "Character": "很",
        "Pinyin": "hěn"
    },
    {
        "Pinyin": "very, quite, much"
    },
    {
        "Character": "信",
        "Pinyin": "xìn"
    },
    {
        "Pinyin": "trust, believe; letter"
    },
    {
        "Character": "成",
        "Pinyin": "chéng"
    },
    {
        "Pinyin": "completed, finished, fixed"
    },
    {
        "Character": "章",
        "Pinyin": "zhāng"
    },
    {
        "Pinyin": "composition; chapter, section"
    },
    {
        "Character": "何",
        "Pinyin": "hé"
    },
    {
        "Pinyin": "what, why, where, which, how"
    },
    {
        "Character": "同",
        "Pinyin": "tòng"
    },
    {
        "Pinyin": "alley, lane"
    },
    {
        "Character": "道",
        "Pinyin": "dào"
    },
    {
        "Pinyin": "path, road, street; method, way"
    },
    {
        "Character": "地",
        "Pinyin": "dì"
    },
    {
        "Pinyin": "earth; soil, ground; region"
    },
    {
        "Character": "发",
        "Pinyin": "fǎ"
    },
    {
        "Pinyin": "hair"
    },
    {
        "Character": "法",
        "Pinyin": "fǎ"
    },
    {
        "Pinyin": "law, rule, regulation, statute; France, French"
    },
    {
        "Character": "无",
        "Pinyin": "wú"
    },
    {
        "Pinyin": "negative, no, not; lack, have no"
    },
    {
        "Character": "然",
        "Pinyin": "rán"
    },
    {
        "Pinyin": "yes, certainly; pledge, promise"
    },
    {
        "Character": "但",
        "Pinyin": "dàn"
    },
    {
        "Pinyin": "only; but, however, yet, still"
    },
    {
        "Character": "吗",
        "Pinyin": "ma"
    },
    {
        "Pinyin": "final interrogative particle"
    },
    {
        "Character": "当",
        "Pinyin": "dāng"
    },
    {
        "Pinyin": "bear, accept, undertake; just"
    },
    {
        "Character": "于",
        "Pinyin": "yú"
    },
    {
        "Pinyin": "in, at, on; interjection alas!"
    },
    {
        "Character": "本",
        "Pinyin": "běn"
    },
    {
        "Pinyin": "root, origin, source; basis"
    },
    {
        "Character": "现",
        "Pinyin": "xiàn"
    },
    {
        "Pinyin": "appear, manifest, become visible"
    },
    {
        "Character": "年",
        "Pinyin": "nián"
    },
    {
        "Pinyin": "year; new-years; person's age"
    },
    {
        "Character": "前",
        "Pinyin": "qián"
    },
    {
        "Pinyin": "in front, forward; preceding"
    },
    {
        "Character": "真",
        "Pinyin": "zhēn"
    },
    {
        "Pinyin": "real, actual, true, genuine"
    },
    {
        "Character": "最",
        "Pinyin": "zuì"
    },
    {
        "Pinyin": "most, extremely, exceedingly"
    },
    {
        "Character": "和",
        "Pinyin": "hé"
    },
    {
        "Pinyin": "harmony, peace; peaceful, calm"
    },
    {
        "Character": "新",
        "Pinyin": "xīn"
    },
    {
        "Pinyin": "new, recent, fresh, modern"
    },
    {
        "Character": "因",
        "Pinyin": "yīn"
    },
    {
        "Pinyin": "cause, reason; by; because (of)"
    },
    {
        "Character": "果",
        "Pinyin": "guǒ"
    },
    {
        "Pinyin": "fruit; result"
    },
    {
        "Character": "定",
        "Pinyin": "dìng"
    },
    {
        "Pinyin": "decide, settle, fix"
    },
    {
        "Character": "意",
        "Pinyin": "yì"
    },
    {
        "Pinyin": "thought, idea, opinion; think"
    },
    {
        "Character": "情",
        "Pinyin": "qíng"
    },
    {
        "Pinyin": "feeling, sentiment, emotion"
    },
    {
        "Character": "点",
        "Pinyin": "diǎn"
    },
    {
        "Pinyin": "dot, speck, spot; point, degree"
    },
    {
        "Character": "题",
        "Pinyin": "tí"
    },
    {
        "Pinyin": "forehead; title, headline; theme"
    },
    {
        "Character": "其",
        "Pinyin": "qí"
    },
    {
        "Pinyin": "his, her, its, their; that"
    },
    {
        "Character": "事",
        "Pinyin": "shì"
    },
    {
        "Pinyin": "affair, matter, business; to serve; accident, incident"
    },
    {
        "Character": "方",
        "Pinyin": "fāng"
    },
    {
        "Pinyin": "a square, rectangle; a region; local"
    },
    {
        "Character": "清",
        "Pinyin": "qīng"
    },
    {
        "Pinyin": "clear, pure, clean; peaceful"
    },
    {
        "Character": "科",
        "Pinyin": "kē"
    },
    {
        "Pinyin": "section, department, science"
    },
    {
        "Character": "样",
        "Pinyin": "yàng"
    },
    {
        "Pinyin": "shape, form, pattern, style"
    },
    {
        "Character": "些",
        "Pinyin": "xiē"
    },
    {
        "Pinyin": "little, few; rather, somewhat"
    },
    {
        "Character": "吧",
        "Pinyin": "ba"
    },
    {
        "Pinyin": "emphatic final particle"
    },
    {
        "Character": "叁",
        "Pinyin": "cān"
    },
    {
        "Pinyin": "take part in, intervene; ginseng"
    },
    {
        "Character": "此",
        "Pinyin": "cǐ"
    },
    {
        "Pinyin": "this, these; in this case, then"
    },
    {
        "Character": "位",
        "Pinyin": "wèi"
    },
    {
        "Pinyin": "throne; position, post; rank, status; seat"
    },
    {
        "Character": "理",
        "Pinyin": "lǐ"
    },
    {
        "Pinyin": "reason, logic; manage"
    },
    {
        "Character": "行",
        "Pinyin": "xíng"
    },
    {
        "Pinyin": "go; walk; move, travel; circulate"
    },
    {
        "Character": "作",
        "Pinyin": "zuò"
    },
    {
        "Pinyin": "make; work; compose, write; act, perform"
    },
    {
        "Character": "经",
        "Pinyin": "jīng"
    },
    {
        "Pinyin": "classic works; pass through"
    },
    {
        "Character": "者",
        "Pinyin": "zhě"
    },
    {
        "Pinyin": "that which; he who; those who"
    },
    {
        "Character": "什",
        "Pinyin": "shí"
    },
    {
        "Pinyin": "file of ten soldiers; mixed, miscellaneous"
    },
    {
        "Character": "谢",
        "Pinyin": "xiè"
    },
    {
        "Pinyin": "thank; decline"
    },
    {
        "Character": "名",
        "Pinyin": "míng"
    },
    {
        "Pinyin": "name, rank, title, position"
    },
    {
        "Character": "日",
        "Pinyin": "rì"
    },
    {
        "Pinyin": "sun; day; daytime"
    },
    {
        "Character": "正",
        "Pinyin": "zhèng"
    },
    {
        "Pinyin": "right, proper, correct"
    },
    {
        "Character": "华",
        "Pinyin": "huá"
    },
    {
        "Pinyin": "flowery; illustrious; Chinese"
    },
    {
        "Character": "话",
        "Pinyin": "huà"
    },
    {
        "Pinyin": "speech, talk, language; dialect"
    },
    {
        "Character": "开",
        "Pinyin": "kāi"
    },
    {
        "Pinyin": "open; initiate, begin, start"
    },
    {
        "Character": "实",
        "Pinyin": "shí"
    },
    {
        "Pinyin": "real, true, solid, honest"
    },
    {
        "Character": "再",
        "Pinyin": "zài"
    },
    {
        "Pinyin": "again, twice, re-"
    },
    {
        "Character": "城",
        "Pinyin": "chéng"
    },
    {
        "Pinyin": "castle; city, town; municipality"
    },
    {
        "Character": "爱",
        "Pinyin": "ài"
    },
    {
        "Pinyin": "love, be fond of, like"
    },
    {
        "Character": "与",
        "Pinyin": "yǔ"
    },
    {
        "Pinyin": "and; with; to; for; give, grant"
    },
    {
        "Character": "二",
        "Pinyin": "èr"
    },
    {
        "Pinyin": "two; twice"
    },
    {
        "Character": "动",
        "Pinyin": "dòng"
    },
    {
        "Pinyin": "move, happen; movement, action"
    },
    {
        "Character": "比",
        "Pinyin": "bǐ"
    },
    {
        "Pinyin": "to compare, liken; comparison; than"
    },
    {
        "Character": "高",
        "Pinyin": "gāo"
    },
    {
        "Pinyin": "high, tall; lofty, elevated"
    },
    {
        "Character": "面",
        "Pinyin": "miàn"
    },
    {
        "Pinyin": "flour, dough, noodles"
    },
    {
        "Character": "又",
        "Pinyin": "yòu"
    },
    {
        "Pinyin": "and, also, again, in addition"
    },
    {
        "Character": "车",
        "Pinyin": "chē"
    },
    {
        "Pinyin": "cart, vehicle; carry in cart"
    },
    {
        "Character": "力",
        "Pinyin": "lì"
    },
    {
        "Pinyin": "power, capability, influence"
    },
    {
        "Character": "或",
        "Pinyin": "huò"
    },
    {
        "Pinyin": "or, either, else; perhaps, maybe"
    },
    {
        "Character": "种",
        "Pinyin": "zhǒng"
    },
    {
        "Pinyin": "seed; race; offspring; to plant"
    },
    {
        "Character": "像",
        "Pinyin": "xiàng"
    },
    {
        "Pinyin": "a picture, image, figure; to resemble"
    },
    {
        "Character": "应",
        "Pinyin": "yìng"
    },
    {
        "Pinyin": "should, ought to, must"
    },
    {
        "Character": "女",
        "Pinyin": "nǚ"
    },
    {
        "Pinyin": "woman, girl; feminine; rad. 38"
    },
    {
        "Character": "教",
        "Pinyin": "jiào"
    },
    {
        "Pinyin": "teach, class"
    },
    {
        "Character": "分",
        "Pinyin": "fēn"
    },
    {
        "Pinyin": "divide; small unit of time etc."
    },
    {
        "Character": "手",
        "Pinyin": "shǒu"
    },
    {
        "Pinyin": "hand"
    },
    {
        "Character": "打",
        "Pinyin": "dǎ"
    },
    {
        "Pinyin": "strike, hit, beat; fight; attack"
    },
    {
        "Character": "已",
        "Pinyin": "yǐ"
    },
    {
        "Pinyin": "already; finished; stop"
    },
    {
        "Character": "次",
        "Pinyin": "cì"
    },
    {
        "Pinyin": "order, sequence; next"
    },
    {
        "Character": "长",
        "Pinyin": "cháng"
    },
    {
        "Pinyin": "long; length; excel in; leader"
    },
    {
        "Character": "太",
        "Pinyin": "tài"
    },
    {
        "Pinyin": "very, too, much; big; extreme"
    },
    {
        "Character": "明",
        "Pinyin": "míng"
    },
    {
        "Pinyin": "bright, light, brilliant; clear"
    },
    {
        "Character": "己",
        "Pinyin": "jǐ"
    },
    {
        "Pinyin": "self, oneself; personal, private; 6th heavenly stem"
    },
    {
        "Character": "路",
        "Pinyin": "lù"
    },
    {
        "Pinyin": "road, path, street; journey"
    },
    {
        "Character": "起",
        "Pinyin": "qǐ"
    },
    {
        "Pinyin": "rise, stand up; go up; begin"
    },
    {
        "Character": "相",
        "Pinyin": "xiāng"
    },
    {
        "Pinyin": "mutual, reciprocal, each other"
    },
    {
        "Character": "主",
        "Pinyin": "zhǔ"
    },
    {
        "Pinyin": "master, chief owner; host; lord"
    },
    {
        "Character": "关",
        "Pinyin": "guān"
    },
    {
        "Pinyin": "frontier pass; close; relation"
    },
    {
        "Character": "凤",
        "Pinyin": "fèng"
    },
    {
        "Pinyin": "male phoenix; symbol of joy"
    },
    {
        "Character": "间",
        "Pinyin": "jiān"
    },
    {
        "Pinyin": "interval, space; place, between"
    },
    {
        "Character": "呢",
        "Pinyin": "ní"
    },
    {
        "Pinyin": "interrogative or emphatic final; (Cant.) this"
    },
    {
        "Character": "觉",
        "Pinyin": "jué"
    },
    {
        "Pinyin": "to wake up from sleep; conscious"
    },
    {
        "Character": "该",
        "Pinyin": "gāi"
    },
    {
        "Pinyin": "should, ought to, need to"
    },
    {
        "Character": "十",
        "Pinyin": "shí"
    },
    {
        "Pinyin": "pick up, collect, tidy up; accounting form of the numeral ten"
    },
    {
        "Character": "外",
        "Pinyin": "wài"
    },
    {
        "Pinyin": "out, outside, external; foreign"
    },
    {
        "Character": "凰",
        "Pinyin": "huáng"
    },
    {
        "Pinyin": "female phoenix"
    },
    {
        "Character": "友",
        "Pinyin": "yǒu"
    },
    {
        "Pinyin": "friend, companion; fraternity"
    },
    {
        "Character": "才",
        "Pinyin": "cái"
    },
    {
        "Pinyin": "talent, ability; just, only"
    },
    {
        "Character": "民",
        "Pinyin": "mín"
    },
    {
        "Pinyin": "people, subjects, citizens"
    },
    {
        "Character": "系",
        "Pinyin": "xì"
    },
    {
        "Pinyin": "attach, connect, unite, fasten"
    },
    {
        "Character": "进",
        "Pinyin": "jìn"
    },
    {
        "Pinyin": "advance, make progress, enter"
    },
    {
        "Character": "使",
        "Pinyin": "shǐ"
    },
    {
        "Pinyin": "cause, send on a mission, order; envoy, messenger, ambassador"
    },
    {
        "Character": "她",
        "Pinyin": "tā"
    },
    {
        "Pinyin": "she, her"
    },
    {
        "Character": "着",
        "Pinyin": "zhù"
    },
    {
        "Pinyin": "manifest; (Cant.) to wear"
    },
    {
        "Character": "各",
        "Pinyin": "gè"
    },
    {
        "Pinyin": "each, individually, every, all"
    },
    {
        "Character": "少",
        "Pinyin": "shǎo"
    },
    {
        "Pinyin": "few, less, inadequate"
    },
    {
        "Character": "全",
        "Pinyin": "quán"
    },
    {
        "Pinyin": "maintain, keep whole or intact"
    },
    {
        "Character": "两",
        "Pinyin": "liǎng"
    },
    {
        "Pinyin": "two, both, pair, couple; ounce"
    },
    {
        "Character": "回",
        "Pinyin": "huí"
    },
    {
        "Pinyin": "return, turn around; a time"
    },
    {
        "Character": "加",
        "Pinyin": "jiā"
    },
    {
        "Pinyin": "add to, increase, augment"
    },
    {
        "Character": "将",
        "Pinyin": "jiāng"
    },
    {
        "Pinyin": "will, going to, future; general"
    },
    {
        "Character": "感",
        "Pinyin": "gǎn"
    },
    {
        "Pinyin": "feel, perceive, emotion"
    },
    {
        "Character": "第",
        "Pinyin": "dì"
    },
    {
        "Pinyin": "sequence, number; grade, degree"
    },
    {
        "Character": "性",
        "Pinyin": "xìng"
    },
    {
        "Pinyin": "nature, character, sex"
    },
    {
        "Character": "球",
        "Pinyin": "qiú"
    },
    {
        "Pinyin": "ball, sphere, globe; round"
    },
    {
        "Character": "式",
        "Pinyin": "shì"
    },
    {
        "Pinyin": "style, system, formula, rule"
    },
    {
        "Character": "把",
        "Pinyin": "bǎ"
    },
    {
        "Pinyin": "hold, take; guard; regard as"
    },
    {
        "Character": "被",
        "Pinyin": "bèi"
    },
    {
        "Pinyin": "passive indicator 'by'; bedding"
    },
    {
        "Character": "老",
        "Pinyin": "lǎo"
    },
    {
        "Pinyin": "old, aged; experienced"
    },
    {
        "Character": "公",
        "Pinyin": "gōng"
    },
    {
        "Pinyin": "fair, equitable; public; duke"
    },
    {
        "Character": "龙",
        "Pinyin": "lóng"
    },
    {
        "Pinyin": "dragon; symbolic of emperor"
    },
    {
        "Character": "程",
        "Pinyin": "chéng"
    },
    {
        "Pinyin": "journey, trip; schedule, agenda"
    },
    {
        "Character": "论",
        "Pinyin": "lùn"
    },
    {
        "Pinyin": "debate; discuss; discourse"
    },
    {
        "Character": "及",
        "Pinyin": "jí"
    },
    {
        "Pinyin": "extend; reach; come up to; and"
    },
    {
        "Character": "别",
        "Pinyin": "bié"
    },
    {
        "Pinyin": "separate, other; do not"
    },
    {
        "Character": "给",
        "Pinyin": "gěi"
    },
    {
        "Pinyin": "give; by, for"
    },
    {
        "Character": "听",
        "Pinyin": "tīng"
    },
    {
        "Pinyin": "hear, listen; understand; obey"
    },
    {
        "Character": "水",
        "Pinyin": "shuǐ"
    },
    {
        "Pinyin": "water, liquid, lot5on, juice"
    },
    {
        "Character": "重",
        "Pinyin": "zhòng"
    },
    {
        "Pinyin": "heavy, weighty; double"
    },
    {
        "Character": "体",
        "Pinyin": "tǐ"
    },
    {
        "Pinyin": "body; group, class, body, unit"
    },
    {
        "Character": "做",
        "Pinyin": "zuò"
    },
    {
        "Pinyin": "work, make; act"
    },
    {
        "Character": "校",
        "Pinyin": "xiào"
    },
    {
        "Pinyin": "school; military field officer"
    },
    {
        "Character": "里",
        "Pinyin": "lǐ"
    },
    {
        "Pinyin": "inside, interior, within"
    },
    {
        "Character": "常",
        "Pinyin": "cháng"
    },
    {
        "Pinyin": "common, normal, frequent, regular"
    },
    {
        "Character": "东",
        "Pinyin": "dōng"
    },
    {
        "Pinyin": "east, eastern, eastward"
    },
    {
        "Character": "风",
        "Pinyin": "fēng"
    },
    {
        "Pinyin": "wind; air; manners, atmosphere"
    },
    {
        "Character": "您",
        "Pinyin": "nín"
    },
    {
        "Pinyin": "honorific for 'you'"
    },
    {
        "Character": "湾",
        "Pinyin": "wān"
    },
    {
        "Pinyin": "a bay, cove, inlet, bend of stream"
    },
    {
        "Character": "啦",
        "Pinyin": "la"
    },
    {
        "Pinyin": "final particle of assertion"
    },
    {
        "Character": "见",
        "Pinyin": "jiàn"
    },
    {
        "Pinyin": "see, observe, behold; perceive"
    },
    {
        "Character": "解",
        "Pinyin": "jiě"
    },
    {
        "Pinyin": "loosen, unfasten, untie; explain"
    },
    {
        "Character": "等",
        "Pinyin": "děng"
    },
    {
        "Pinyin": "rank, grade; wait; equal; 'etc.'"
    },
    {
        "Character": "部",
        "Pinyin": "bù"
    },
    {
        "Pinyin": "part, division, section"
    },
    {
        "Character": "原",
        "Pinyin": "yuán"
    },
    {
        "Pinyin": "source, origin, beginning"
    },
    {
        "Character": "月",
        "Pinyin": "yuè"
    },
    {
        "Pinyin": "moon; month; KangXi radical 74"
    },
    {
        "Character": "美",
        "Pinyin": "měi"
    },
    {
        "Pinyin": "beautiful, pretty; pleasing"
    },
    {
        "Character": "先",
        "Pinyin": "xiān"
    },
    {
        "Pinyin": "first, former, previous"
    },
    {
        "Character": "管",
        "Pinyin": "guǎn"
    },
    {
        "Pinyin": "pipe, tube, duct; woodwind music"
    },
    {
        "Character": "区",
        "Pinyin": "qū"
    },
    {
        "Pinyin": "area, district, region, ward; surname"
    },
    {
        "Character": "错",
        "Pinyin": "cuò"
    },
    {
        "Pinyin": "error, blunder, mistake, wrong"
    },
    {
        "Character": "音",
        "Pinyin": "yīn"
    },
    {
        "Pinyin": "sound, tone, pitch, pronunciation"
    },
    {
        "Character": "否",
        "Pinyin": "fǒu"
    },
    {
        "Pinyin": "not, no, negative; final particle"
    },
    {
        "Character": "啊",
        "Pinyin": "a"
    },
    {
        "Pinyin": "exclamatory particle"
    },
    {
        "Character": "找",
        "Pinyin": "zhǎo"
    },
    {
        "Pinyin": "search, seek, look for; find"
    },
    {
        "Character": "网",
        "Pinyin": "wǎng"
    },
    {
        "Pinyin": "net, web; network"
    },
    {
        "Character": "乐",
        "Pinyin": "yuè"
    },
    {
        "Pinyin": "happy, glad; enjoyable; music"
    },
    {
        "Character": "让",
        "Pinyin": "ràng"
    },
    {
        "Pinyin": "allow, permit, yield, concede"
    },
    {
        "Character": "通",
        "Pinyin": "tōng"
    },
    {
        "Pinyin": "pass through, common, communicate"
    },
    {
        "Character": "入",
        "Pinyin": "rù"
    },
    {
        "Pinyin": "enter, come in(to), join"
    },
    {
        "Character": "期",
        "Pinyin": "qí"
    },
    {
        "Pinyin": "period of time; date; time limit"
    },
    {
        "Character": "选",
        "Pinyin": "xuǎn"
    },
    {
        "Pinyin": "choose, select; elect; election"
    },
    {
        "Character": "较",
        "Pinyin": "jiào"
    },
    {
        "Pinyin": "compare; comparatively, more"
    },
    {
        "Character": "四",
        "Pinyin": "sì"
    },
    {
        "Pinyin": "four"
    },
    {
        "Character": "场",
        "Pinyin": "cháng"
    },
    {
        "Pinyin": "open space, field, market"
    },
    {
        "Character": "由",
        "Pinyin": "yóu"
    },
    {
        "Pinyin": "cause, reason; from"
    },
    {
        "Character": "书",
        "Pinyin": "shū"
    },
    {
        "Pinyin": "book, letter, document; writings"
    },
    {
        "Character": "它",
        "Pinyin": "tā"
    },
    {
        "Pinyin": "it; other"
    },
    {
        "Character": "快",
        "Pinyin": "kuài"
    },
    {
        "Pinyin": "rapid, quick, speedy, fast; soon"
    },
    {
        "Character": "从",
        "Pinyin": "cóng"
    },
    {
        "Pinyin": "from, by, since, whence, through"
    },
    {
        "Character": "欢",
        "Pinyin": "huān"
    },
    {
        "Pinyin": "happy, pleased, glad; joy; to enjoy"
    },
    {
        "Character": "数",
        "Pinyin": "shù"
    },
    {
        "Pinyin": "number; several; count; fate"
    },
    {
        "Character": "表",
        "Pinyin": "biǎo"
    },
    {
        "Pinyin": "a watch, clock"
    },
    {
        "Character": "怎",
        "Pinyin": "zěn"
    },
    {
        "Pinyin": "what? why? how?"
    },
    {
        "Character": "至",
        "Pinyin": "zhì"
    },
    {
        "Pinyin": "reach, arrive; extremely, very"
    },
    {
        "Character": "立",
        "Pinyin": "lì"
    },
    {
        "Pinyin": "stand; let stand; establish, set"
    },
    {
        "Character": "内",
        "Pinyin": "nèi"
    },
    {
        "Pinyin": "inside, interior; domestic"
    },
    {
        "Character": "合",
        "Pinyin": "hé"
    },
    {
        "Pinyin": "combine, unite, join; gather"
    },
    {
        "Character": "目",
        "Pinyin": "mù"
    },
    {
        "Pinyin": "eye; look, see; division, topic"
    },
    {
        "Character": "望",
        "Pinyin": "wàng"
    },
    {
        "Pinyin": "to look at, look forward; to hope, expect"
    },
    {
        "Character": "认",
        "Pinyin": "rèn"
    },
    {
        "Pinyin": "recognize, know, understand"
    },
    {
        "Character": "几",
        "Pinyin": "jǐ"
    },
    {
        "Pinyin": "how many? how much?; a few, some"
    },
    {
        "Character": "社",
        "Pinyin": "shè"
    },
    {
        "Pinyin": "god of the soil and altars to him; group of families; company, society"
    },
    {
        "Character": "告",
        "Pinyin": "gào"
    },
    {
        "Pinyin": "tell, announce, inform; accuse"
    },
    {
        "Character": "更",
        "Pinyin": "gèng"
    },
    {
        "Pinyin": "more, still further, much more"
    },
    {
        "Character": "版",
        "Pinyin": "bǎn"
    },
    {
        "Pinyin": "printing blocks; edition"
    },
    {
        "Character": "度",
        "Pinyin": "dù"
    },
    {
        "Pinyin": "degree, system; manner; to consider"
    },
    {
        "Character": "考",
        "Pinyin": "kǎo"
    },
    {
        "Pinyin": "examine, test; investigate"
    },
    {
        "Character": "喜",
        "Pinyin": "xǐ"
    },
    {
        "Pinyin": "like, love, enjoy; joyful thing"
    },
    {
        "Character": "头",
        "Pinyin": "tóu"
    },
    {
        "Pinyin": "head; top; chief, first; boss"
    },
    {
        "Character": "难",
        "Pinyin": "nán"
    },
    {
        "Pinyin": "difficult, arduous, hard; unable"
    },
    {
        "Character": "光",
        "Pinyin": "guāng"
    },
    {
        "Pinyin": "light, brilliant, shine; only"
    },
    {
        "Character": "买",
        "Pinyin": "mǎi"
    },
    {
        "Pinyin": "buy, purchase; bribe, persuade"
    },
    {
        "Character": "今",
        "Pinyin": "jīn"
    },
    {
        "Pinyin": "now, today, modern era"
    },
    {
        "Character": "身",
        "Pinyin": "shēn"
    },
    {
        "Pinyin": "body; trunk, hull; rad. no. 158"
    },
    {
        "Character": "许",
        "Pinyin": "xǔ"
    },
    {
        "Pinyin": "allow, permit; promise; betroth"
    },
    {
        "Character": "弟",
        "Pinyin": "dì"
    },
    {
        "Pinyin": "young brother; junior; i, me"
    },
    {
        "Character": "若",
        "Pinyin": "ruò"
    },
    {
        "Pinyin": "if, supposing, assuming; similar"
    },
    {
        "Character": "算",
        "Pinyin": "suàn"
    },
    {
        "Pinyin": "count, calculate, figure; plan"
    },
    {
        "Character": "记",
        "Pinyin": "jì"
    },
    {
        "Pinyin": "record; keep in mind, remember"
    },
    {
        "Character": "代",
        "Pinyin": "dài"
    },
    {
        "Pinyin": "replace, replacement (of person or generation >); era, generation"
    },
    {
        "Character": "统",
        "Pinyin": "tǒng"
    },
    {
        "Pinyin": "govern, command, control; unite"
    },
    {
        "Character": "处",
        "Pinyin": "chù"
    },
    {
        "Pinyin": "place, locale; department"
    },
    {
        "Character": "完",
        "Pinyin": "wán"
    },
    {
        "Pinyin": "complete, finish, settle; whole"
    },
    {
        "Character": "号",
        "Pinyin": "hào"
    },
    {
        "Pinyin": "mark, sign; symbol; number"
    },
    {
        "Character": "接",
        "Pinyin": "jiē"
    },
    {
        "Pinyin": "receive; continue; catch; connect"
    },
    {
        "Character": "言",
        "Pinyin": "yán"
    },
    {
        "Pinyin": "words, speech; speak, say"
    },
    {
        "Character": "政",
        "Pinyin": "zhèng"
    },
    {
        "Pinyin": "government, political affairs"
    },
    {
        "Character": "玩",
        "Pinyin": "wán"
    },
    {
        "Pinyin": "play with, joke, enjoy"
    },
    {
        "Character": "师",
        "Pinyin": "shī"
    },
    {
        "Pinyin": "teacher, master, specialist; multitude, troops"
    },
    {
        "Character": "字",
        "Pinyin": "zì"
    },
    {
        "Pinyin": "letter, character, word"
    },
    {
        "Character": "并",
        "Pinyin": "bìng"
    },
    {
        "Pinyin": "combine, annex"
    },
    {
        "Character": "男",
        "Pinyin": "nán"
    },
    {
        "Pinyin": "male, man; son; baron; surname"
    },
    {
        "Character": "计",
        "Pinyin": "jì"
    },
    {
        "Pinyin": "plan, plot; strategem; scheme"
    },
    {
        "Character": "谁",
        "Pinyin": "shuí"
    },
    {
        "Pinyin": "who? whom? whose? anyone?"
    },
    {
        "Character": "山",
        "Pinyin": "shān"
    },
    {
        "Pinyin": "mountain, hill, peak"
    },
    {
        "Character": "张",
        "Pinyin": "zhāng"
    },
    {
        "Pinyin": "stretch, extend, expand; sheet"
    },
    {
        "Character": "党",
        "Pinyin": "dǎng"
    },
    {
        "Pinyin": "political party, gang, faction"
    },
    {
        "Character": "每",
        "Pinyin": "měi"
    },
    {
        "Pinyin": "every, each"
    },
    {
        "Character": "且",
        "Pinyin": "qiě"
    },
    {
        "Pinyin": "moreover, also (post-subject); about to, will soon (pre-verb)"
    },
    {
        "Character": "结",
        "Pinyin": "jié"
    },
    {
        "Pinyin": "knot, tie; join, connect"
    },
    {
        "Character": "改",
        "Pinyin": "gǎi"
    },
    {
        "Pinyin": "change, alter; improve, remodel"
    },
    {
        "Character": "非",
        "Pinyin": "fēi"
    },
    {
        "Pinyin": "not, negative, non-; oppose"
    },
    {
        "Character": "星",
        "Pinyin": "xīng"
    },
    {
        "Pinyin": "a star, planet; any point of light"
    },
    {
        "Character": "连",
        "Pinyin": "lián"
    },
    {
        "Pinyin": "join, connect; continuous; even"
    },
    {
        "Character": "哈",
        "Pinyin": "hā"
    },
    {
        "Pinyin": "sound of laughter"
    },
    {
        "Character": "建",
        "Pinyin": "jiàn"
    },
    {
        "Pinyin": "build, establish, erect, found"
    },
    {
        "Character": "放",
        "Pinyin": "fàng"
    },
    {
        "Pinyin": "put, release, free, liberate"
    },
    {
        "Character": "直",
        "Pinyin": "zhí"
    },
    {
        "Pinyin": "straight, erect, vertical"
    },
    {
        "Character": "转",
        "Pinyin": "zhuǎn"
    },
    {
        "Pinyin": "shift, move, turn"
    },
    {
        "Character": "报",
        "Pinyin": "bào"
    },
    {
        "Pinyin": "report, tell, announce"
    },
    {
        "Character": "活",
        "Pinyin": "huó"
    },
    {
        "Pinyin": "live, exist, survive; lively"
    },
    {
        "Character": "设",
        "Pinyin": "shè"
    },
    {
        "Pinyin": "build; establish; display; particle of hypothesis, supposing"
    },
    {
        "Character": "变",
        "Pinyin": "biàn"
    },
    {
        "Pinyin": "change, transform, alter; rebel"
    },
    {
        "Character": "指",
        "Pinyin": "zhǐ"
    },
    {
        "Pinyin": "finger, toe; point, indicate"
    },
    {
        "Character": "气",
        "Pinyin": "qì"
    },
    {
        "Pinyin": "air, gas, steam, vapor; spirit"
    },
    {
        "Character": "研",
        "Pinyin": "yán"
    },
    {
        "Pinyin": "grind, rub; study, research"
    },
    {
        "Character": "陈",
        "Pinyin": "chén"
    },
    {
        "Pinyin": "exhibit, display; plead; surname"
    },
    {
        "Character": "试",
        "Pinyin": "shì"
    },
    {
        "Pinyin": "test, try, experiment"
    },
    {
        "Character": "西",
        "Pinyin": "xī"
    },
    {
        "Pinyin": "west(ern); westward, occident"
    },
    {
        "Character": "五",
        "Pinyin": "wǔ"
    },
    {
        "Pinyin": "five; surname"
    },
    {
        "Character": "希",
        "Pinyin": "xī"
    },
    {
        "Pinyin": "rare; hope, expect, strive for"
    },
    {
        "Character": "取",
        "Pinyin": "qū"
    },
    {
        "Pinyin": "take, receive, obtain; select"
    },
    {
        "Character": "神",
        "Pinyin": "shén"
    },
    {
        "Pinyin": "spirit, god, supernatural being"
    },
    {
        "Character": "化",
        "Pinyin": "huà"
    },
    {
        "Pinyin": "change, convert, reform; -ize"
    },
    {
        "Character": "物",
        "Pinyin": "wù"
    },
    {
        "Pinyin": "thing, substance, creature"
    },
    {
        "Character": "王",
        "Pinyin": "wáng"
    },
    {
        "Pinyin": "king, ruler; royal; surname"
    },
    {
        "Character": "战",
        "Pinyin": "zhàn"
    },
    {
        "Pinyin": "war, fighting, battle"
    },
    {
        "Character": "近",
        "Pinyin": "jìn"
    },
    {
        "Pinyin": "near, close; approach; intimate"
    },
    {
        "Character": "世",
        "Pinyin": "shì"
    },
    {
        "Pinyin": "generation; world; era"
    },
    {
        "Character": "受",
        "Pinyin": "shòu"
    },
    {
        "Pinyin": "receive, accept, get; bear, stand"
    },
    {
        "Character": "义",
        "Pinyin": "yì"
    },
    {
        "Pinyin": "right conduct, righteousness"
    },
    {
        "Character": "反",
        "Pinyin": "fǎn"
    },
    {
        "Pinyin": "reverse, opposite, contrary, anti"
    },
    {
        "Character": "单",
        "Pinyin": "dān"
    },
    {
        "Pinyin": "single, individual, only; lone"
    },
    {
        "Character": "死",
        "Pinyin": "sǐ"
    },
    {
        "Pinyin": "die; dead; death"
    },
    {
        "Character": "任",
        "Pinyin": "rèn"
    },
    {
        "Pinyin": "trust to, rely on, appoint; to bear, duty, office; allow"
    },
    {
        "Character": "跟",
        "Pinyin": "gēn"
    },
    {
        "Pinyin": "heel; to follow, accompany; with"
    },
    {
        "Character": "便",
        "Pinyin": "biàn"
    },
    {
        "Pinyin": "convenience, ease; expedient"
    },
    {
        "Character": "空",
        "Pinyin": "kōng"
    },
    {
        "Pinyin": "empty, hollow, bare, deserted"
    },
    {
        "Character": "林",
        "Pinyin": "lín"
    },
    {
        "Pinyin": "forest, grove; surname"
    },
    {
        "Character": "士",
        "Pinyin": "shì"
    },
    {
        "Pinyin": "scholar, gentleman; soldier"
    },
    {
        "Character": "台",
        "Pinyin": "tái"
    },
    {
        "Pinyin": "taiphoon"
    },
    {
        "Character": "却",
        "Pinyin": "què"
    },
    {
        "Pinyin": "still, but; decline; retreat"
    },
    {
        "Character": "北",
        "Pinyin": "běi"
    },
    {
        "Pinyin": "north; northern; northward"
    },
    {
        "Character": "队",
        "Pinyin": "duì"
    },
    {
        "Pinyin": "team, group; army unit"
    },
    {
        "Character": "功",
        "Pinyin": "gōng"
    },
    {
        "Pinyin": "achievement, merit, good result"
    },
    {
        "Character": "必",
        "Pinyin": "bì"
    },
    {
        "Pinyin": "surely, most certainly; must"
    },
    {
        "Character": "声",
        "Pinyin": "shēng"
    },
    {
        "Pinyin": "sound, voice, noise; tone; music"
    },
    {
        "Character": "写",
        "Pinyin": "xiě"
    },
    {
        "Pinyin": "write; draw, sketch; compose"
    },
    {
        "Character": "平",
        "Pinyin": "píng"
    },
    {
        "Pinyin": "flat, level, even; peaceful"
    },
    {
        "Character": "影",
        "Pinyin": "yǐng"
    },
    {
        "Pinyin": "shadow; image, reflection; photograph"
    },
    {
        "Character": "业",
        "Pinyin": "yè"
    },
    {
        "Pinyin": "profession, business, trade"
    },
    {
        "Character": "金",
        "Pinyin": "jīn"
    },
    {
        "Pinyin": "gold; metals in general; money"
    },
    {
        "Character": "档",
        "Pinyin": "dǎng"
    },
    {
        "Pinyin": "shelf; frame, crosspiece"
    },
    {
        "Character": "片",
        "Pinyin": "piàn"
    },
    {
        "Pinyin": "slice, splinter, strip; rad. 91"
    },
    {
        "Character": "讨",
        "Pinyin": "tǎo"
    },
    {
        "Pinyin": "to discuss; ask for, beg; demand; dun; marry"
    },
    {
        "Character": "色",
        "Pinyin": "sè"
    },
    {
        "Pinyin": "color, tint, hue, shade; form, body; beauty, desire for beauty"
    },
    {
        "Character": "容",
        "Pinyin": "róng"
    },
    {
        "Pinyin": "looks, appearance; figure, form"
    },
    {
        "Character": "央",
        "Pinyin": "yāng"
    },
    {
        "Pinyin": "center, conclude, run out; beg"
    },
    {
        "Character": "妳",
        "Pinyin": "nǎi"
    },
    {
        "Pinyin": "you (f.)"
    },
    {
        "Character": "向",
        "Pinyin": "xiàng"
    },
    {
        "Pinyin": "once upon time; period of time"
    },
    {
        "Character": "市",
        "Pinyin": "shì"
    },
    {
        "Pinyin": "market, fair; city, town; trade"
    },
    {
        "Character": "则",
        "Pinyin": "zé"
    },
    {
        "Pinyin": "rule, law, regulation; grades"
    },
    {
        "Character": "员",
        "Pinyin": "yuán"
    },
    {
        "Pinyin": "member; personnel, staff member"
    },
    {
        "Character": "兴",
        "Pinyin": "xīng"
    },
    {
        "Pinyin": "thrive, prosper, flourish"
    },
    {
        "Character": "利",
        "Pinyin": "lì"
    },
    {
        "Pinyin": "gains, advantage, profit, merit"
    },
    {
        "Character": "强",
        "Pinyin": "qiáng"
    },
    {
        "Pinyin": "strong, powerful, energetic"
    },
    {
        "Character": "白",
        "Pinyin": "bái"
    },
    {
        "Pinyin": "white; pure, unblemished; bright"
    },
    {
        "Character": "价",
        "Pinyin": "jià"
    },
    {
        "Pinyin": "price, value"
    },
    {
        "Character": "安",
        "Pinyin": "ān"
    },
    {
        "Pinyin": "peaceful, tranquil, quiet"
    },
    {
        "Character": "呵",
        "Pinyin": "hē"
    },
    {
        "Pinyin": "scold; laughing sound; yawn"
    },
    {
        "Character": "特",
        "Pinyin": "tè"
    },
    {
        "Pinyin": "special, unique, distinguished"
    },
    {
        "Character": "思",
        "Pinyin": "sī"
    },
    {
        "Pinyin": "think, consider, ponder; final particle"
    },
    {
        "Character": "叫",
        "Pinyin": "jiào"
    },
    {
        "Pinyin": "cry, shout; hail, greet, call"
    },
    {
        "Character": "总",
        "Pinyin": "zǒng"
    },
    {
        "Pinyin": "collect; overall, altogether"
    },
    {
        "Character": "办",
        "Pinyin": "bàn"
    },
    {
        "Pinyin": "manage, do, handle; deal with"
    },
    {
        "Character": "保",
        "Pinyin": "bǎo"
    },
    {
        "Pinyin": "protect, safeguard, defend, care"
    },
    {
        "Character": "花",
        "Pinyin": "huā"
    },
    {
        "Pinyin": "flower; blossoms"
    },
    {
        "Character": "议",
        "Pinyin": "yì"
    },
    {
        "Pinyin": "consult, talk over, discuss"
    },
    {
        "Character": "传",
        "Pinyin": "chuán"
    },
    {
        "Pinyin": "summon; propagate, transmit"
    },
    {
        "Character": "元",
        "Pinyin": "yuán"
    },
    {
        "Pinyin": "first; dollar; origin; head"
    },
    {
        "Character": "求",
        "Pinyin": "qiú"
    },
    {
        "Pinyin": "seek; demand, request; beseech"
    },
    {
        "Character": "份",
        "Pinyin": "fèn"
    },
    {
        "Pinyin": "portion, part; duty"
    },
    {
        "Character": "件",
        "Pinyin": "jiàn"
    },
    {
        "Pinyin": "numerary adjunct for article; matter"
    },
    {
        "Character": "持",
        "Pinyin": "chí"
    },
    {
        "Pinyin": "sustain, support; hold, grasp"
    },
    {
        "Character": "万",
        "Pinyin": "wàn"
    },
    {
        "Pinyin": "ten thousand; innumerable"
    },
    {
        "Character": "未",
        "Pinyin": "wèi"
    },
    {
        "Pinyin": "not yet; 8th terrestrial branch"
    },
    {
        "Character": "究",
        "Pinyin": "jiù"
    },
    {
        "Pinyin": "examine, investigate"
    },
    {
        "Character": "决",
        "Pinyin": "jué"
    },
    {
        "Pinyin": "decide, determine, judge"
    },
    {
        "Character": "投",
        "Pinyin": "tóu"
    },
    {
        "Pinyin": "throw, cast, fling, pitch; jump"
    },
    {
        "Character": "哪",
        "Pinyin": "nǎ"
    },
    {
        "Pinyin": "which? where? how?"
    },
    {
        "Character": "喔",
        "Pinyin": "wō"
    },
    {
        "Pinyin": "descriptive of crying or of crowing"
    },
    {
        "Character": "笑",
        "Pinyin": "xiào"
    },
    {
        "Pinyin": "smile, laugh, giggle; snicker"
    },
    {
        "Character": "猫",
        "Pinyin": "māo"
    },
    {
        "Pinyin": "cat"
    },
    {
        "Character": "组",
        "Pinyin": "zǔ"
    },
    {
        "Pinyin": "class; section, department"
    },
    {
        "Character": "独",
        "Pinyin": "dú"
    },
    {
        "Pinyin": "alone, single, solitary, only"
    },
    {
        "Character": "级",
        "Pinyin": "jí"
    },
    {
        "Pinyin": "level, rank, class; grade"
    },
    {
        "Character": "走",
        "Pinyin": "zǒu"
    },
    {
        "Pinyin": "walk, go on foot; run; leave"
    },
    {
        "Character": "支",
        "Pinyin": "zhī"
    },
    {
        "Pinyin": "disperse, pay; support; branch"
    },
    {
        "Character": "曾",
        "Pinyin": "céng"
    },
    {
        "Pinyin": "already; sign of past"
    },
    {
        "Character": "标",
        "Pinyin": "biāo"
    },
    {
        "Pinyin": "a mark, symbol, label, sign; standard"
    },
    {
        "Character": "流",
        "Pinyin": "liú"
    },
    {
        "Pinyin": "flow, circulate, drift; class"
    },
    {
        "Character": "竹",
        "Pinyin": "zhú"
    },
    {
        "Pinyin": "bamboo; flute; KangXi radical 118"
    },
    {
        "Character": "兄",
        "Pinyin": "xiōng"
    },
    {
        "Pinyin": "elder brother"
    },
    {
        "Character": "阿",
        "Pinyin": "ā"
    },
    {
        "Pinyin": "prefix for people's names; used in transliteration"
    },
    {
        "Character": "室",
        "Pinyin": "shì"
    },
    {
        "Pinyin": "room, home, house, chamber"
    },
    {
        "Character": "卡",
        "Pinyin": "qiǎ"
    },
    {
        "Pinyin": "card, punch card; calorie"
    },
    {
        "Character": "马",
        "Pinyin": "mǎ"
    },
    {
        "Pinyin": "horse; surname; KangXi radical 187"
    },
    {
        "Character": "共",
        "Pinyin": "gòng"
    },
    {
        "Pinyin": "together with, all, total; to share"
    },
    {
        "Character": "需",
        "Pinyin": "xū"
    },
    {
        "Pinyin": "need, require, must"
    },
    {
        "Character": "海",
        "Pinyin": "hǎi"
    },
    {
        "Pinyin": "sea, ocean; maritime"
    },
    {
        "Character": "口",
        "Pinyin": "kǒu"
    },
    {
        "Pinyin": "mouth; open end; entrance, gate"
    },
    {
        "Character": "门",
        "Pinyin": "mén"
    },
    {
        "Pinyin": "gate, door, entrance, opening"
    },
    {
        "Character": "般",
        "Pinyin": "bān"
    },
    {
        "Pinyin": "sort, manner, kind, category"
    },
    {
        "Character": "线",
        "Pinyin": "xiàn"
    },
    {
        "Pinyin": "thread, line, wire; clue"
    },
    {
        "Character": "语",
        "Pinyin": "yǔ"
    },
    {
        "Pinyin": "language, words; saying, expression"
    },
    {
        "Character": "命",
        "Pinyin": "mìng"
    },
    {
        "Pinyin": "life; destiny, fate, luck; an order, instruction"
    },
    {
        "Character": "观",
        "Pinyin": "guān"
    },
    {
        "Pinyin": "see, observe, view; appearance"
    },
    {
        "Character": "视",
        "Pinyin": "shì"
    },
    {
        "Pinyin": "look at, inspect, observe, see"
    },
    {
        "Character": "朋",
        "Pinyin": "péng"
    },
    {
        "Pinyin": "friend, pal, acquaintance"
    },
    {
        "Character": "联",
        "Pinyin": "lián"
    },
    {
        "Pinyin": "connect, join; associate, ally"
    },
    {
        "Character": "参",
        "Pinyin": "cān"
    },
    {
        "Pinyin": "take part in, intervene; ginseng"
    },
    {
        "Character": "格",
        "Pinyin": "gé"
    },
    {
        "Pinyin": "pattern, standard, form; style"
    },
    {
        "Character": "黄",
        "Pinyin": "huáng"
    },
    {
        "Pinyin": "yellow; surname"
    },
    {
        "Character": "钱",
        "Pinyin": "qián"
    },
    {
        "Pinyin": "money, currency, coins"
    },
    {
        "Character": "修",
        "Pinyin": "xiū"
    },
    {
        "Pinyin": "study; repair; cultivate"
    },
    {
        "Character": "失",
        "Pinyin": "shī"
    },
    {
        "Pinyin": "lose; make mistake, neglect"
    },
    {
        "Character": "儿",
        "Pinyin": "ér"
    },
    {
        "Pinyin": "son, child, oneself; final part"
    },
    {
        "Character": "住",
        "Pinyin": "zhù"
    },
    {
        "Pinyin": "reside, live at, dwell, lodge; stop"
    },
    {
        "Character": "八",
        "Pinyin": "bā"
    },
    {
        "Pinyin": "eight; all around, all sides"
    },
    {
        "Character": "脑",
        "Pinyin": "nǎo"
    },
    {
        "Pinyin": "brain"
    },
    {
        "Character": "板",
        "Pinyin": "bǎn"
    },
    {
        "Pinyin": "boss, the owner, person in charge"
    },
    {
        "Character": "吃",
        "Pinyin": "chī"
    },
    {
        "Pinyin": "eat; drink; suffer, endure, bear"
    },
    {
        "Character": "另",
        "Pinyin": "lìng"
    },
    {
        "Pinyin": "another, separate, other"
    },
    {
        "Character": "换",
        "Pinyin": "huàn"
    },
    {
        "Pinyin": "change, exchange; substitute"
    },
    {
        "Character": "即",
        "Pinyin": "jí"
    },
    {
        "Pinyin": "promptly, quickly, immediately"
    },
    {
        "Character": "象",
        "Pinyin": "xiàng"
    },
    {
        "Pinyin": "elephant; ivory; figure, image"
    },
    {
        "Character": "料",
        "Pinyin": "liào"
    },
    {
        "Pinyin": "consider, conjecture; materials, ingredients"
    },
    {
        "Character": "录",
        "Pinyin": "lù"
    },
    {
        "Pinyin": "copy"
    },
    {
        "Character": "拿",
        "Pinyin": "ná"
    },
    {
        "Pinyin": "take, hold, grasp; bring; with"
    },
    {
        "Character": "专",
        "Pinyin": "zhuān"
    },
    {
        "Pinyin": "monopolize, take sole possession"
    },
    {
        "Character": "远",
        "Pinyin": "yuǎn"
    },
    {
        "Pinyin": "distant, remote, far; profound"
    },
    {
        "Character": "速",
        "Pinyin": "sù"
    },
    {
        "Pinyin": "quick, prompt, speedy"
    },
    {
        "Character": "基",
        "Pinyin": "jī"
    },
    {
        "Pinyin": "foundation, base"
    },
    {
        "Character": "帮",
        "Pinyin": "bāng"
    },
    {
        "Pinyin": "to help, assist; to defend; shoe upper"
    },
    {
        "Character": "形",
        "Pinyin": "xíng"
    },
    {
        "Pinyin": "form, shape, appearance"
    },
    {
        "Character": "确",
        "Pinyin": "què"
    },
    {
        "Pinyin": "sure, certain; real, true"
    },
    {
        "Character": "候",
        "Pinyin": "hòu"
    },
    {
        "Pinyin": "wait; expect; visit; greet"
    },
    {
        "Character": "装",
        "Pinyin": "zhuāng"
    },
    {
        "Pinyin": "dress, clothes; decorate; fill"
    },
    {
        "Character": "孩",
        "Pinyin": "hái"
    },
    {
        "Pinyin": "baby, child; children"
    },
    {
        "Character": "备",
        "Pinyin": "bèi"
    },
    {
        "Pinyin": "prepare, ready, perfect"
    },
    {
        "Character": "歌",
        "Pinyin": "gē"
    },
    {
        "Pinyin": "song, lyrics; sing, chant; praise"
    },
    {
        "Character": "界",
        "Pinyin": "jiè"
    },
    {
        "Pinyin": "boundary, limit; domain; society; the world"
    },
    {
        "Character": "除",
        "Pinyin": "chú"
    },
    {
        "Pinyin": "eliminate, remove, except"
    },
    {
        "Character": "南",
        "Pinyin": "nán"
    },
    {
        "Pinyin": "south; southern part; southward"
    },
    {
        "Character": "器",
        "Pinyin": "qì"
    },
    {
        "Pinyin": "receptacle, vessel; instrument"
    },
    {
        "Character": "画",
        "Pinyin": "huà"
    },
    {
        "Pinyin": "painting"
    },
    {
        "Character": "诉",
        "Pinyin": "sù"
    },
    {
        "Pinyin": "accuse; sue; inform; narrate"
    },
    {
        "Character": "差",
        "Pinyin": "chāi"
    },
    {
        "Pinyin": "to differ; different, wrong; nearly, almost; an officer"
    },
    {
        "Character": "讲",
        "Pinyin": "jiǎng"
    },
    {
        "Pinyin": "explain; discuss; talk"
    },
    {
        "Character": "类",
        "Pinyin": "lèi"
    },
    {
        "Pinyin": "class, group, kind, category"
    },
    {
        "Character": "英",
        "Pinyin": "yīng"
    },
    {
        "Pinyin": "petal, flower, leaf; brave, a hero; England, English"
    },
    {
        "Character": "案",
        "Pinyin": "àn"
    },
    {
        "Pinyin": "table, bench; legal case"
    },
    {
        "Character": "带",
        "Pinyin": "dài"
    },
    {
        "Pinyin": "belt, girdle, band, strap, zone"
    },
    {
        "Character": "久",
        "Pinyin": "jiǔ"
    },
    {
        "Pinyin": "long time (ago); time passage, grow late"
    },
    {
        "Character": "乎",
        "Pinyin": "hū"
    },
    {
        "Pinyin": "interrogative or exclamatory final particle"
    },
    {
        "Character": "掉",
        "Pinyin": "diào"
    },
    {
        "Pinyin": "turn, move; shake, wag; drop down"
    },
    {
        "Character": "迷",
        "Pinyin": "mí"
    },
    {
        "Pinyin": "bewitch, charm, infatuate"
    },
    {
        "Character": "量",
        "Pinyin": "liàng"
    },
    {
        "Pinyin": "measure, quantity, capacity"
    },
    {
        "Character": "引",
        "Pinyin": "yǐn"
    },
    {
        "Pinyin": "to pull, draw out, attract; to stretch"
    },
    {
        "Character": "整",
        "Pinyin": "zhěng"
    },
    {
        "Pinyin": "orderly, neat, tidy; whole"
    },
    {
        "Character": "似",
        "Pinyin": "sì"
    },
    {
        "Pinyin": "resemble, similar to; as if, seem"
    },
    {
        "Character": "耶",
        "Pinyin": "yé"
    },
    {
        "Pinyin": "used in transliteration"
    },
    {
        "Character": "奇",
        "Pinyin": "qí"
    },
    {
        "Pinyin": "strange, unusual, uncanny, occult"
    },
    {
        "Character": "制",
        "Pinyin": "zhì"
    },
    {
        "Pinyin": "make, manufacture; produce"
    },
    {
        "Character": "边",
        "Pinyin": "biān"
    },
    {
        "Pinyin": "edge, margin, side, border"
    },
    {
        "Character": "型",
        "Pinyin": "xíng"
    },
    {
        "Pinyin": "pattern, model, type; law; mold"
    },
    {
        "Character": "超",
        "Pinyin": "chāo"
    },
    {
        "Pinyin": "jump over, leap over; surpass"
    },
    {
        "Character": "识",
        "Pinyin": "shì"
    },
    {
        "Pinyin": "recognize, understand, know"
    },
    {
        "Character": "虽",
        "Pinyin": "suī"
    },
    {
        "Pinyin": "although, even if"
    },
    {
        "Character": "怪",
        "Pinyin": "guài"
    },
    {
        "Pinyin": "strange, unusual, peculiar"
    },
    {
        "Character": "飞",
        "Pinyin": "fēi"
    },
    {
        "Pinyin": "fly; go quickly; dart; high"
    },
    {
        "Character": "始",
        "Pinyin": "shǐ"
    },
    {
        "Pinyin": "begin, start; then, only then"
    },
    {
        "Character": "品",
        "Pinyin": "pǐn"
    },
    {
        "Pinyin": "article, product, commodity"
    },
    {
        "Character": "运",
        "Pinyin": "yùn"
    },
    {
        "Pinyin": "luck, fortune; ship, transport"
    },
    {
        "Character": "赛",
        "Pinyin": "sài"
    },
    {
        "Pinyin": "compete, contend; contest, race"
    },
    {
        "Character": "费",
        "Pinyin": "fèi"
    },
    {
        "Pinyin": "expenses, expenditures, fee"
    },
    {
        "Character": "梦",
        "Pinyin": "mèng"
    },
    {
        "Pinyin": "dream; visionary; wishful"
    },
    {
        "Character": "故",
        "Pinyin": "gù"
    },
    {
        "Pinyin": "ancient, old; reason, because"
    },
    {
        "Character": "班",
        "Pinyin": "bān"
    },
    {
        "Pinyin": "class, group, grade; squad; job"
    },
    {
        "Character": "权",
        "Pinyin": "quán"
    },
    {
        "Pinyin": "power, right, authority"
    },
    {
        "Character": "破",
        "Pinyin": "pò"
    },
    {
        "Pinyin": "break, ruin, destroy; rout"
    },
    {
        "Character": "验",
        "Pinyin": "yàn"
    },
    {
        "Pinyin": "test, examine, inspect; verify"
    },
    {
        "Character": "眼",
        "Pinyin": "yǎn"
    },
    {
        "Pinyin": "eye; eyelet, hole, opening"
    },
    {
        "Character": "满",
        "Pinyin": "mǎn"
    },
    {
        "Pinyin": "fill; full, satisfied"
    },
    {
        "Character": "念",
        "Pinyin": "niàn"
    },
    {
        "Pinyin": "think of, recall, study"
    },
    {
        "Character": "造",
        "Pinyin": "zào"
    },
    {
        "Pinyin": "construct, build, make, begin; prepare"
    },
    {
        "Character": "军",
        "Pinyin": "jūn"
    },
    {
        "Pinyin": "army, military; soldiers, troops"
    },
    {
        "Character": "精",
        "Pinyin": "jīng"
    },
    {
        "Pinyin": "essence; semen; spirit"
    },
    {
        "Character": "务",
        "Pinyin": "wù"
    },
    {
        "Pinyin": "affairs, business; must, should"
    },
    {
        "Character": "留",
        "Pinyin": "liú"
    },
    {
        "Pinyin": "stop, halt; stay, detain, keep"
    },
    {
        "Character": "服",
        "Pinyin": "fú"
    },
    {
        "Pinyin": "clothes; wear, dress"
    },
    {
        "Character": "六",
        "Pinyin": "liù"
    },
    {
        "Pinyin": "number six"
    },
    {
        "Character": "图",
        "Pinyin": "tú"
    },
    {
        "Pinyin": "diagram; chart, map, picture"
    },
    {
        "Character": "收",
        "Pinyin": "shōu"
    },
    {
        "Pinyin": "gather together, collect; harvest"
    },
    {
        "Character": "舍",
        "Pinyin": "shě"
    },
    {
        "Pinyin": "discard, give up willingly; give alms"
    },
    {
        "Character": "半",
        "Pinyin": "bàn"
    },
    {
        "Pinyin": "half"
    },
    {
        "Character": "读",
        "Pinyin": "dú"
    },
    {
        "Pinyin": "read, study; pronounce"
    },
    {
        "Character": "愿",
        "Pinyin": "yuàn"
    },
    {
        "Pinyin": "desire, want; wish; ambition"
    },
    {
        "Character": "李",
        "Pinyin": "lǐ"
    },
    {
        "Pinyin": "plum; judge; surname"
    },
    {
        "Character": "底",
        "Pinyin": "dǐ"
    },
    {
        "Pinyin": "bottom, underneath, underside"
    },
    {
        "Character": "约",
        "Pinyin": "yuē"
    },
    {
        "Pinyin": "treaty, agreement, covenant"
    },
    {
        "Character": "雄",
        "Pinyin": "xióng"
    },
    {
        "Pinyin": "male of species; hero; manly"
    },
    {
        "Character": "课",
        "Pinyin": "kè"
    },
    {
        "Pinyin": "lesson; course; classwork"
    },
    {
        "Character": "答",
        "Pinyin": "dá"
    },
    {
        "Pinyin": "answer, reply; return; assent to"
    },
    {
        "Character": "令",
        "Pinyin": "lìng"
    },
    {
        "Pinyin": "command, order; 'commandant', magistrate; allow, cause"
    },
    {
        "Character": "深",
        "Pinyin": "shēn"
    },
    {
        "Pinyin": "deep; depth; far; very, extreme"
    },
    {
        "Character": "票",
        "Pinyin": "piào"
    },
    {
        "Pinyin": "slip of paper or bamboo; ticket"
    },
    {
        "Character": "达",
        "Pinyin": "dá"
    },
    {
        "Pinyin": "arrive at, reach; intelligent"
    },
    {
        "Character": "演",
        "Pinyin": "yǎn"
    },
    {
        "Pinyin": "perform, put on; exercise"
    },
    {
        "Character": "早",
        "Pinyin": "zǎo"
    },
    {
        "Pinyin": "early; soon; morning"
    },
    {
        "Character": "卖",
        "Pinyin": "mài"
    },
    {
        "Pinyin": "sell; betray; show off"
    },
    {
        "Character": "棒",
        "Pinyin": "bàng"
    },
    {
        "Pinyin": "stick, club, truncheon; hit"
    },
    {
        "Character": "够",
        "Pinyin": "gòu"
    },
    {
        "Pinyin": "enough, adequate"
    },
    {
        "Character": "黑",
        "Pinyin": "hēi"
    },
    {
        "Pinyin": "black; dark; evil, sinister"
    },
    {
        "Character": "院",
        "Pinyin": "yuàn"
    },
    {
        "Pinyin": "courtyard, yard, court; school"
    },
    {
        "Character": "假",
        "Pinyin": "jiǎ"
    },
    {
        "Pinyin": "falsehood, deception; vacation"
    },
    {
        "Character": "曲",
        "Pinyin": "qǔ"
    },
    {
        "Pinyin": "crooked, bent; wrong, false"
    },
    {
        "Character": "火",
        "Pinyin": "huǒ"
    },
    {
        "Pinyin": "fire, flame; burn; anger, rage"
    },
    {
        "Character": "准",
        "Pinyin": "zhǔn"
    },
    {
        "Pinyin": "rule, guideline, standard"
    },
    {
        "Character": "百",
        "Pinyin": "bǎi"
    },
    {
        "Pinyin": "one hundred; numerous, many"
    },
    {
        "Character": "谈",
        "Pinyin": "tán"
    },
    {
        "Pinyin": "talk; conversation; surname"
    },
    {
        "Character": "胜",
        "Pinyin": "shèng"
    },
    {
        "Pinyin": "victory; excel, be better than"
    },
    {
        "Character": "碟",
        "Pinyin": "dié"
    },
    {
        "Pinyin": "small dish, plate"
    },
    {
        "Character": "术",
        "Pinyin": "shù"
    },
    {
        "Pinyin": "art, skill, special feat; method, technique"
    },
    {
        "Character": "推",
        "Pinyin": "tuī"
    },
    {
        "Pinyin": "push, expel; push forward"
    },
    {
        "Character": "存",
        "Pinyin": "cún"
    },
    {
        "Pinyin": "exist, live, be; survive; remain"
    },
    {
        "Character": "治",
        "Pinyin": "zhì"
    },
    {
        "Pinyin": "govern, regulate, administer"
    },
    {
        "Character": "离",
        "Pinyin": "lí"
    },
    {
        "Pinyin": "leave, depart; go away; separate"
    },
    {
        "Character": "易",
        "Pinyin": "yì"
    },
    {
        "Pinyin": "change; easy"
    },
    {
        "Character": "往",
        "Pinyin": "wǎng"
    },
    {
        "Pinyin": "go, depart; past, formerly"
    },
    {
        "Character": "况",
        "Pinyin": "kuàng"
    },
    {
        "Pinyin": "condition, situation; furthermore"
    },
    {
        "Character": "晚",
        "Pinyin": "wǎn"
    },
    {
        "Pinyin": "night, evening; late"
    },
    {
        "Character": "示",
        "Pinyin": "shì"
    },
    {
        "Pinyin": "show, manifest; demonstrate"
    },
    {
        "Character": "证",
        "Pinyin": "zhèng"
    },
    {
        "Pinyin": "proof, evidence; testify, verify"
    },
    {
        "Character": "段",
        "Pinyin": "duàn"
    },
    {
        "Pinyin": "section, piece, division"
    },
    {
        "Character": "导",
        "Pinyin": "dǎo"
    },
    {
        "Pinyin": "direct, guide, lead, conduct"
    },
    {
        "Character": "伤",
        "Pinyin": "shāng"
    },
    {
        "Pinyin": "wound, injury; fall ill from"
    },
    {
        "Character": "调",
        "Pinyin": "diào"
    },
    {
        "Pinyin": "transfer, move, change; tune"
    },
    {
        "Character": "团",
        "Pinyin": "tuán"
    },
    {
        "Pinyin": "sphere, ball, circle; mass, lump"
    },
    {
        "Character": "七",
        "Pinyin": "qī"
    },
    {
        "Pinyin": "seven"
    },
    {
        "Character": "永",
        "Pinyin": "yǒng"
    },
    {
        "Pinyin": "long, perpetual, eternal, forever"
    },
    {
        "Character": "刚",
        "Pinyin": "gāng"
    },
    {
        "Pinyin": "hard, tough, rigid, strong"
    },
    {
        "Character": "哥",
        "Pinyin": "gē"
    },
    {
        "Pinyin": "elder brother"
    },
    {
        "Character": "甚",
        "Pinyin": "shén"
    },
    {
        "Pinyin": "great extent; considerably"
    },
    {
        "Character": "德",
        "Pinyin": "dé"
    },
    {
        "Pinyin": "ethics, morality, virtue"
    },
    {
        "Character": "杀",
        "Pinyin": "shā"
    },
    {
        "Pinyin": "kill, slaughter, murder; hurt; to pare off, reduce, clip"
    },
    {
        "Character": "怕",
        "Pinyin": "pà"
    },
    {
        "Pinyin": "to fear, be afraid of; apprehensive"
    },
    {
        "Character": "包",
        "Pinyin": "bāo"
    },
    {
        "Pinyin": "wrap, pack, bundle; package"
    },
    {
        "Character": "列",
        "Pinyin": "liè"
    },
    {
        "Pinyin": "a line; to arrange in order, classify"
    },
    {
        "Character": "概",
        "Pinyin": "gài"
    },
    {
        "Pinyin": "generally, approximately"
    },
    {
        "Character": "照",
        "Pinyin": "zhào"
    },
    {
        "Pinyin": "shine, illumine, reflect"
    },
    {
        "Character": "夜",
        "Pinyin": "yè"
    },
    {
        "Pinyin": "night, dark; in night; by night"
    },
    {
        "Character": "排",
        "Pinyin": "pái"
    },
    {
        "Pinyin": "row, rank, line"
    },
    {
        "Character": "客",
        "Pinyin": "kè"
    },
    {
        "Pinyin": "guest, traveller; customer"
    },
    {
        "Character": "绝",
        "Pinyin": "jué"
    },
    {
        "Pinyin": "cut"
    },
    {
        "Character": "软",
        "Pinyin": "ruǎn"
    },
    {
        "Pinyin": "soft, flexible, pliable; weak"
    },
    {
        "Character": "商",
        "Pinyin": "shāng"
    },
    {
        "Pinyin": "commerce, business, trade"
    },
    {
        "Character": "根",
        "Pinyin": "gēn"
    },
    {
        "Pinyin": "root, base(d on); foundation"
    },
    {
        "Character": "九",
        "Pinyin": "jiǔ"
    },
    {
        "Pinyin": "nine"
    },
    {
        "Character": "切",
        "Pinyin": "qiē"
    },
    {
        "Pinyin": "cut, mince, slice, carve"
    },
    {
        "Character": "条",
        "Pinyin": "tiáo"
    },
    {
        "Pinyin": "clause, condition; string, stripe"
    },
    {
        "Character": "集",
        "Pinyin": "jí"
    },
    {
        "Pinyin": "assemble, collect together"
    },
    {
        "Character": "千",
        "Pinyin": "qiān"
    },
    {
        "Pinyin": "thousand; many, numerous; very; (Cant.) a cheater, swindler"
    },
    {
        "Character": "落",
        "Pinyin": "luò"
    },
    {
        "Pinyin": "fall, drop; net income, surplus"
    },
    {
        "Character": "竟",
        "Pinyin": "jìng"
    },
    {
        "Pinyin": "finally, after all, at last"
    },
    {
        "Character": "越",
        "Pinyin": "yuè"
    },
    {
        "Pinyin": "exceed, go beyond; the more ..."
    },
    {
        "Character": "待",
        "Pinyin": "dài"
    },
    {
        "Pinyin": "treat, entertain, receive; wait"
    },
    {
        "Character": "忘",
        "Pinyin": "wàng"
    },
    {
        "Pinyin": "forget; neglect; miss, omit"
    },
    {
        "Character": "尽",
        "Pinyin": "jìn"
    },
    {
        "Pinyin": "exhaust, use up; deplete"
    },
    {
        "Character": "据",
        "Pinyin": "jù"
    },
    {
        "Pinyin": "to occupy, take possession of; a base"
    },
    {
        "Character": "双",
        "Pinyin": "shuāng"
    },
    {
        "Pinyin": "set of two, pair, couple; both"
    },
    {
        "Character": "供",
        "Pinyin": "gōng"
    },
    {
        "Pinyin": "supply, provide for; offer in worship"
    },
    {
        "Character": "称",
        "Pinyin": "chēng"
    },
    {
        "Pinyin": "call; name, brand; address; say"
    },
    {
        "Character": "座",
        "Pinyin": "zuò"
    },
    {
        "Pinyin": "seat; stand, base"
    },
    {
        "Character": "值",
        "Pinyin": "zhí"
    },
    {
        "Pinyin": "price"
    },
    {
        "Character": "消",
        "Pinyin": "xiāo"
    },
    {
        "Pinyin": "vanish, die out; melt away"
    },
    {
        "Character": "产",
        "Pinyin": "chǎn"
    },
    {
        "Pinyin": "give birth"
    },
    {
        "Character": "红",
        "Pinyin": "hóng"
    },
    {
        "Pinyin": "red, vermillion; blush, flush"
    },
    {
        "Character": "跑",
        "Pinyin": "pǎo"
    },
    {
        "Pinyin": "run, flee, leave in hurry"
    },
    {
        "Character": "嘛",
        "Pinyin": "ma"
    },
    {
        "Pinyin": "final exclamatory particle"
    },
    {
        "Character": "园",
        "Pinyin": "yuán"
    },
    {
        "Pinyin": "garden; park, orchard"
    },
    {
        "Character": "附",
        "Pinyin": "fù"
    },
    {
        "Pinyin": "adhere to, append; rely on near to"
    },
    {
        "Character": "硬",
        "Pinyin": "yìng"
    },
    {
        "Pinyin": "hard, firm, strong; obstinate"
    },
    {
        "Character": "云",
        "Pinyin": "yún"
    },
    {
        "Pinyin": "clouds; Yunnan province"
    },
    {
        "Character": "游",
        "Pinyin": "yóu"
    },
    {
        "Pinyin": "to swim; float, drift; wander, roam"
    },
    {
        "Character": "展",
        "Pinyin": "zhǎn"
    },
    {
        "Pinyin": "open, unfold; stretch, extend"
    },
    {
        "Character": "执",
        "Pinyin": "zhí"
    },
    {
        "Pinyin": "hold in hand; keep; carry out"
    },
    {
        "Character": "闻",
        "Pinyin": "wén"
    },
    {
        "Pinyin": "hear; smell; make known; news"
    },
    {
        "Character": "唱",
        "Pinyin": "chàng"
    },
    {
        "Pinyin": "sing, chant, call; ditty, song"
    },
    {
        "Character": "育",
        "Pinyin": "yù"
    },
    {
        "Pinyin": "produce, give birth to; educate"
    },
    {
        "Character": "斯",
        "Pinyin": "sī"
    },
    {
        "Pinyin": "this, thus, such; to lop off; emphatic particle"
    },
    {
        "Character": "某",
        "Pinyin": "mǒu"
    },
    {
        "Pinyin": "certain thing or person"
    },
    {
        "Character": "技",
        "Pinyin": "jì"
    },
    {
        "Pinyin": "skill, ability, talent, ingenuity"
    },
    {
        "Character": "唉",
        "Pinyin": "āi"
    },
    {
        "Pinyin": "alas, exclamation of surprise or pain"
    },
    {
        "Character": "息",
        "Pinyin": "xī"
    },
    {
        "Pinyin": "rest, put stop to, end, cease"
    },
    {
        "Character": "苦",
        "Pinyin": "kǔ"
    },
    {
        "Pinyin": "bitter; hardship, suffering"
    },
    {
        "Character": "质",
        "Pinyin": "zhí"
    },
    {
        "Pinyin": "matter, material, substance"
    },
    {
        "Character": "油",
        "Pinyin": "yóu"
    },
    {
        "Pinyin": "oil, fat, grease, lard; paints"
    },
    {
        "Character": "救",
        "Pinyin": "jiù"
    },
    {
        "Pinyin": "save, rescue, relieve; help, aid"
    },
    {
        "Character": "效",
        "Pinyin": "xiào"
    },
    {
        "Pinyin": "result, effect; effectiveness"
    },
    {
        "Character": "须",
        "Pinyin": "xū"
    },
    {
        "Pinyin": "beard, whiskers; whisker-like"
    },
    {
        "Character": "介",
        "Pinyin": "jiè"
    },
    {
        "Pinyin": "forerunner, herald, harbinger; to lie between; sea shell; to wear armor"
    },
    {
        "Character": "首",
        "Pinyin": "shǒu"
    },
    {
        "Pinyin": "head; first; leader, chief; a poem"
    },
    {
        "Character": "助",
        "Pinyin": "zhù"
    },
    {
        "Pinyin": "help, aid, assist"
    },
    {
        "Character": "职",
        "Pinyin": "zhí"
    },
    {
        "Pinyin": "duty, profession; office, post"
    },
    {
        "Character": "例",
        "Pinyin": "lì"
    },
    {
        "Pinyin": "precedent, example; regulation"
    },
    {
        "Character": "热",
        "Pinyin": "rè"
    },
    {
        "Pinyin": "hot; heat; fever; restless; zeal"
    },
    {
        "Character": "毕",
        "Pinyin": "bì"
    },
    {
        "Pinyin": "end, finish, conclude; completed"
    },
    {
        "Character": "节",
        "Pinyin": "jié"
    },
    {
        "Pinyin": "knot, node, joint; section"
    },
    {
        "Character": "害",
        "Pinyin": "hài"
    },
    {
        "Pinyin": "injure, harm; destroy, kill"
    },
    {
        "Character": "击",
        "Pinyin": "jí"
    },
    {
        "Pinyin": "strike, hit, beat; attack, fight"
    },
    {
        "Character": "乱",
        "Pinyin": "luàn"
    },
    {
        "Pinyin": "confusion, state of chaos; create chaos, revolt"
    },
    {
        "Character": "态",
        "Pinyin": "tài"
    },
    {
        "Pinyin": "manner, bearing, attitude"
    },
    {
        "Character": "嗯",
        "Pinyin": "ēn"
    },
    {
        "Pinyin": "(a groaning sound)"
    },
    {
        "Character": "宝",
        "Pinyin": "bǎo"
    },
    {
        "Pinyin": "treasure, jewel; precious, rare"
    },
    {
        "Character": "倒",
        "Pinyin": "dǎo"
    },
    {
        "Pinyin": "fall over; lie down; take turns"
    },
    {
        "Character": "注",
        "Pinyin": "zhù"
    },
    {
        "Pinyin": "explain; annotate; make entry"
    },
    {
        "Character": "停",
        "Pinyin": "tíng"
    },
    {
        "Pinyin": "stop, suspend, delay; suitable"
    },
    {
        "Character": "古",
        "Pinyin": "gǔ"
    },
    {
        "Pinyin": "old, classic, ancient"
    },
    {
        "Character": "输",
        "Pinyin": "shū"
    },
    {
        "Pinyin": "transport, carry, haul"
    },
    {
        "Character": "规",
        "Pinyin": "guī"
    },
    {
        "Pinyin": "rules, regulations, customs, law"
    },
    {
        "Character": "福",
        "Pinyin": "fú"
    },
    {
        "Pinyin": "happiness, good fortune, blessing"
    },
    {
        "Character": "亲",
        "Pinyin": "qīn"
    },
    {
        "Pinyin": "relatives, parents; intimate"
    },
    {
        "Character": "查",
        "Pinyin": "chá"
    },
    {
        "Pinyin": "investigate, examine, seek into"
    },
    {
        "Character": "复",
        "Pinyin": "fù"
    },
    {
        "Pinyin": "cover; tip over; return; reply"
    },
    {
        "Character": "步",
        "Pinyin": "bù"
    },
    {
        "Pinyin": "step, pace; walk, stroll"
    },
    {
        "Character": "举",
        "Pinyin": "jǔ"
    },
    {
        "Pinyin": "raise, lift up; recommend"
    },
    {
        "Character": "鱼",
        "Pinyin": "yú"
    },
    {
        "Pinyin": "fish; surname; KangXi radical 195"
    },
    {
        "Character": "断",
        "Pinyin": "duàn"
    },
    {
        "Pinyin": "sever, cut off; interrupt"
    },
    {
        "Character": "终",
        "Pinyin": "zhōng"
    },
    {
        "Pinyin": "end; finally, in the end"
    },
    {
        "Character": "轻",
        "Pinyin": "qīng"
    },
    {
        "Pinyin": "light; easy, simple; gentle"
    },
    {
        "Character": "环",
        "Pinyin": "huán"
    },
    {
        "Pinyin": "jade ring or bracelet; ring"
    },
    {
        "Character": "练",
        "Pinyin": "liàn"
    },
    {
        "Pinyin": "practice, drill, exercise, train"
    },
    {
        "Character": "印",
        "Pinyin": "yìn"
    },
    {
        "Pinyin": "print, seal, stamp, chop, mark"
    },
    {
        "Character": "随",
        "Pinyin": "suí"
    },
    {
        "Pinyin": "follow, listen to, submit; to accompany; subsequently, then"
    },
    {
        "Character": "依",
        "Pinyin": "yī"
    },
    {
        "Pinyin": "rely on, be set in; consent, obey a wish"
    },
    {
        "Character": "趣",
        "Pinyin": "qù"
    },
    {
        "Pinyin": "what attracts one's attention"
    },
    {
        "Character": "限",
        "Pinyin": "xiàn"
    },
    {
        "Pinyin": "boundary, limit, line"
    },
    {
        "Character": "响",
        "Pinyin": "xiǎng"
    },
    {
        "Pinyin": "make sound, make noise; sound"
    },
    {
        "Character": "省",
        "Pinyin": "shěng"
    },
    {
        "Pinyin": "province; save, economize"
    },
    {
        "Character": "局",
        "Pinyin": "jú"
    },
    {
        "Pinyin": "bureau, office; circumstance"
    },
    {
        "Character": "续",
        "Pinyin": "xù"
    },
    {
        "Pinyin": "continue, carry on; succeed"
    },
    {
        "Character": "司",
        "Pinyin": "sī"
    },
    {
        "Pinyin": "take charge of, control, manage; officer"
    },
    {
        "Character": "角",
        "Pinyin": "jiǎo"
    },
    {
        "Pinyin": "horn; angle, corner; point"
    },
    {
        "Character": "简",
        "Pinyin": "jiǎn"
    },
    {
        "Pinyin": "simple, terse, succinct; letter"
    },
    {
        "Character": "极",
        "Pinyin": "jí"
    },
    {
        "Pinyin": "extreme, utmost, furthest, final"
    },
    {
        "Character": "干",
        "Pinyin": "gàn"
    },
    {
        "Pinyin": "trunk of tree or of human body"
    },
    {
        "Character": "篇",
        "Pinyin": "piān"
    },
    {
        "Pinyin": "chapter, section, essay, article"
    },
    {
        "Character": "罗",
        "Pinyin": "luó"
    },
    {
        "Pinyin": "net for catching birds; gauze"
    },
    {
        "Character": "佛",
        "Pinyin": "fó"
    },
    {
        "Pinyin": "Buddha; of Buddhism; merciful percon; Buddhist image; the dead (Jap.)"
    },
    {
        "Character": "克",
        "Pinyin": "kè"
    },
    {
        "Pinyin": "subdue, overcome; cut down"
    },
    {
        "Character": "阳",
        "Pinyin": "yáng"
    },
    {
        "Pinyin": "'male' principle; light; sun"
    },
    {
        "Character": "武",
        "Pinyin": "wǔ"
    },
    {
        "Pinyin": "military; martial, warlike"
    },
    {
        "Character": "疑",
        "Pinyin": "yí"
    },
    {
        "Pinyin": "doubt, question, suspect"
    },
    {
        "Character": "送",
        "Pinyin": "sòng"
    },
    {
        "Pinyin": "see off, send off; dispatch, give"
    },
    {
        "Character": "拉",
        "Pinyin": "lā"
    },
    {
        "Pinyin": "pull, drag; seize, hold; lengthen"
    },
    {
        "Character": "习",
        "Pinyin": "xí"
    },
    {
        "Pinyin": "practice; flapping wings"
    },
    {
        "Character": "源",
        "Pinyin": "yuán"
    },
    {
        "Pinyin": "spring; source, head; surname"
    },
    {
        "Character": "免",
        "Pinyin": "miǎn"
    },
    {
        "Pinyin": "spare; excuse from; evade"
    },
    {
        "Character": "志",
        "Pinyin": "zhì"
    },
    {
        "Pinyin": "write down; record; magazine"
    },
    {
        "Character": "鸟",
        "Pinyin": "niǎo"
    },
    {
        "Pinyin": "bird; KangXi radical 196"
    },
    {
        "Character": "烦",
        "Pinyin": "fán"
    },
    {
        "Pinyin": "bother, vex, trouble; troublesome"
    },
    {
        "Character": "足",
        "Pinyin": "zú"
    },
    {
        "Pinyin": "foot; attain, satisfy, enough"
    },
    {
        "Character": "馆",
        "Pinyin": "guǎn"
    },
    {
        "Pinyin": "public building"
    },
    {
        "Character": "仍",
        "Pinyin": "réng"
    },
    {
        "Pinyin": "yet, still, as ever; again; keep -ing, continuing"
    },
    {
        "Character": "低",
        "Pinyin": "dī"
    },
    {
        "Pinyin": "low; to lower, hang, bend, bow"
    },
    {
        "Character": "广",
        "Pinyin": "guǎng"
    },
    {
        "Pinyin": "broad, wide, extensive"
    },
    {
        "Character": "土",
        "Pinyin": "tǔ"
    },
    {
        "Pinyin": "soil, earth; items made of earth"
    },
    {
        "Character": "呀",
        "Pinyin": "yā"
    },
    {
        "Pinyin": "particle used to express surprise or mild emphasis; (Cant.) slurred form of the number ten"
    },
    {
        "Character": "楼",
        "Pinyin": "lóu"
    },
    {
        "Pinyin": "building of two or more stories"
    },
    {
        "Character": "坏",
        "Pinyin": "huài"
    },
    {
        "Pinyin": "bad, spoil(ed), ruin, destroy"
    },
    {
        "Character": "兵",
        "Pinyin": "bīng"
    },
    {
        "Pinyin": "soldier, troops"
    },
    {
        "Character": "显",
        "Pinyin": "xiǎn"
    },
    {
        "Pinyin": "manifest, display; evident, clear"
    },
    {
        "Character": "率",
        "Pinyin": "lǖ"
    },
    {
        "Pinyin": "to lead; ratio; rate; limit"
    },
    {
        "Character": "圣",
        "Pinyin": "shèng"
    },
    {
        "Pinyin": "holy, sacred; sage"
    },
    {
        "Character": "码",
        "Pinyin": "mǎ"
    },
    {
        "Pinyin": "number, numerals; yard; symbol"
    },
    {
        "Character": "众",
        "Pinyin": "zhòng"
    },
    {
        "Pinyin": "multitude, crowd; masses, public"
    },
    {
        "Character": "争",
        "Pinyin": "zhēng"
    },
    {
        "Pinyin": "to dispute, fight, contend, strive"
    },
    {
        "Character": "初",
        "Pinyin": "chū"
    },
    {
        "Pinyin": "beginning, initial, primary"
    },
    {
        "Character": "误",
        "Pinyin": "wù"
    },
    {
        "Pinyin": "err, make mistake; interfere"
    },
    {
        "Character": "楚",
        "Pinyin": "chǔ"
    },
    {
        "Pinyin": "name of feudal state; clear"
    },
    {
        "Character": "责",
        "Pinyin": "zé"
    },
    {
        "Pinyin": "one's responsibility, duty"
    },
    {
        "Character": "境",
        "Pinyin": "jìng"
    },
    {
        "Pinyin": "boundary, frontier; area, region"
    },
    {
        "Character": "野",
        "Pinyin": "yě"
    },
    {
        "Pinyin": "open country, field; wilderness"
    },
    {
        "Character": "预",
        "Pinyin": "yù"
    },
    {
        "Pinyin": "prepare, arrange; in advance"
    },
    {
        "Character": "具",
        "Pinyin": "jù"
    },
    {
        "Pinyin": "tool, implement; draw up, write"
    },
    {
        "Character": "智",
        "Pinyin": "zhì"
    },
    {
        "Pinyin": "wisdom, knowledge, intelligence"
    },
    {
        "Character": "压",
        "Pinyin": "yā"
    },
    {
        "Pinyin": "press; oppress; crush; pressure"
    },
    {
        "Character": "系",
        "Pinyin": "xì"
    },
    {
        "Pinyin": "attach, connect, unite, fasten"
    },
    {
        "Character": "青",
        "Pinyin": "qīng"
    },
    {
        "Pinyin": "blue, green, black; young"
    },
    {
        "Character": "贵",
        "Pinyin": "guì"
    },
    {
        "Pinyin": "expensive, costly, valuable"
    },
    {
        "Character": "顺",
        "Pinyin": "shùn"
    },
    {
        "Pinyin": "obey, submit to, go along with"
    },
    {
        "Character": "负",
        "Pinyin": "fù"
    },
    {
        "Pinyin": "load, burden; carry, bear"
    },
    {
        "Character": "魔",
        "Pinyin": "mó"
    },
    {
        "Pinyin": "demon, evil spirits; magic power"
    },
    {
        "Character": "适",
        "Pinyin": "shì"
    },
    {
        "Pinyin": "match, comfortable; just"
    },
    {
        "Character": "哇",
        "Pinyin": "wā"
    },
    {
        "Pinyin": "vomit; cry of an infant"
    },
    {
        "Character": "测",
        "Pinyin": "cè"
    },
    {
        "Pinyin": "measure, estimate, conjecture"
    },
    {
        "Character": "慢",
        "Pinyin": "màn"
    },
    {
        "Pinyin": "slow(ly), leisurely, sluggish"
    },
    {
        "Character": "怀",
        "Pinyin": "huái"
    },
    {
        "Pinyin": "bosom, breast; carry in bosom"
    },
    {
        "Character": "懂",
        "Pinyin": "dǒng"
    },
    {
        "Pinyin": "understand, comprehend"
    },
    {
        "Character": "史",
        "Pinyin": "shǐ"
    },
    {
        "Pinyin": "history, chronicle, annals"
    },
    {
        "Character": "配",
        "Pinyin": "pèi"
    },
    {
        "Pinyin": "match, pair; equal; blend"
    },
    {
        "Character": "呜",
        "Pinyin": "wū"
    },
    {
        "Pinyin": "sound of crying, sobbing"
    },
    {
        "Character": "味",
        "Pinyin": "wèi"
    },
    {
        "Pinyin": "taste, smell, odor; delicacy"
    },
    {
        "Character": "亦",
        "Pinyin": "yì"
    },
    {
        "Pinyin": "also, too; likewise"
    },
    {
        "Character": "医",
        "Pinyin": "yī"
    },
    {
        "Pinyin": "cure, heal; doctor, medical"
    },
    {
        "Character": "迎",
        "Pinyin": "yíng"
    },
    {
        "Pinyin": "receive, welcome, greet"
    },
    {
        "Character": "舞",
        "Pinyin": "wǔ"
    },
    {
        "Pinyin": "dance, posture, prance; brandish"
    },
    {
        "Character": "恋",
        "Pinyin": "liàn"
    },
    {
        "Pinyin": "love; long for, yearn for; love"
    },
    {
        "Character": "细",
        "Pinyin": "xì"
    },
    {
        "Pinyin": "fine, tiny; slender, thin"
    },
    {
        "Character": "灌",
        "Pinyin": "guàn"
    },
    {
        "Pinyin": "pour; water; irrigate, flood"
    },
    {
        "Character": "甲",
        "Pinyin": "jiǎ"
    },
    {
        "Pinyin": "armor, shell; fingernails; 1st heavenly stem"
    },
    {
        "Character": "帝",
        "Pinyin": "dì"
    },
    {
        "Pinyin": "supreme ruler, emperor; god"
    },
    {
        "Character": "句",
        "Pinyin": "jù"
    },
    {
        "Pinyin": "sentence"
    },
    {
        "Character": "属",
        "Pinyin": "shǔ"
    },
    {
        "Pinyin": "class, category, type; to belong to"
    },
    {
        "Character": "灵",
        "Pinyin": "líng"
    },
    {
        "Pinyin": "spirit, soul; spiritual world"
    },
    {
        "Character": "评",
        "Pinyin": "píng"
    },
    {
        "Pinyin": "appraise, criticize, evaluate"
    },
    {
        "Character": "骑",
        "Pinyin": "qí"
    },
    {
        "Pinyin": "ride horseback; mount; cavalry"
    },
    {
        "Character": "宜",
        "Pinyin": "yí"
    },
    {
        "Pinyin": "suitable, right, fitting, proper"
    },
    {
        "Character": "败",
        "Pinyin": "bài"
    },
    {
        "Pinyin": "be defeated, decline, fail"
    },
    {
        "Character": "左",
        "Pinyin": "zuǒ"
    },
    {
        "Pinyin": "left; east; unorthodox, improper"
    },
    {
        "Character": "追",
        "Pinyin": "zhuī"
    },
    {
        "Pinyin": "pursue, chase after; expel"
    },
    {
        "Character": "狂",
        "Pinyin": "kuáng"
    },
    {
        "Pinyin": "insane, mad; violent; wild"
    },
    {
        "Character": "敢",
        "Pinyin": "gǎn"
    },
    {
        "Pinyin": "to dare, venture; bold, brave"
    },
    {
        "Character": "春",
        "Pinyin": "chūn"
    },
    {
        "Pinyin": "spring; wanton"
    },
    {
        "Character": "狗",
        "Pinyin": "gǒu"
    },
    {
        "Pinyin": "dog, canis familiaris"
    },
    {
        "Character": "际",
        "Pinyin": "jì"
    },
    {
        "Pinyin": "border, boundary, juncture"
    },
    {
        "Character": "遇",
        "Pinyin": "yù"
    },
    {
        "Pinyin": "meet, come across, encounter"
    },
    {
        "Character": "族",
        "Pinyin": "zú"
    },
    {
        "Pinyin": "a family clan, ethnic group, tribe"
    },
    {
        "Character": "群",
        "Pinyin": "qún"
    },
    {
        "Pinyin": "(same as U+7FA3 羣) group, crowd, multitude, mob"
    },
    {
        "Character": "痛",
        "Pinyin": "tòng"
    },
    {
        "Pinyin": "pain, ache; sorry, sad; bitter"
    },
    {
        "Character": "右",
        "Pinyin": "yòu"
    },
    {
        "Pinyin": "right; west; right-wing"
    },
    {
        "Character": "康",
        "Pinyin": "kāng"
    },
    {
        "Pinyin": "peaceful, quiet; happy, healthy"
    },
    {
        "Character": "佳",
        "Pinyin": "jia"
    },
    {
        "Pinyin": "good, auspicious; beautiful; delightful"
    },
    {
        "Character": "杨",
        "Pinyin": "yáng"
    },
    {
        "Pinyin": "willow, poplar, aspen; surname"
    },
    {
        "Character": "木",
        "Pinyin": "mù"
    },
    {
        "Pinyin": "tree; wood, lumber; wooden"
    },
    {
        "Character": "病",
        "Pinyin": "bìng"
    },
    {
        "Pinyin": "illness, sickness, disease"
    },
    {
        "Character": "戏",
        "Pinyin": "xì"
    },
    {
        "Pinyin": "theatrical play, show"
    },
    {
        "Character": "项",
        "Pinyin": "xiàng"
    },
    {
        "Pinyin": "neck, nape of neck; sum; funds"
    },
    {
        "Character": "抓",
        "Pinyin": "zhuā"
    },
    {
        "Pinyin": "scratch; clutch, seize, grab"
    },
    {
        "Character": "征",
        "Pinyin": "zhēng"
    },
    {
        "Pinyin": "summon, recruit; musical note"
    },
    {
        "Character": "善",
        "Pinyin": "shàn"
    },
    {
        "Pinyin": "good, virtuous, charitable, kind"
    },
    {
        "Character": "官",
        "Pinyin": "guān"
    },
    {
        "Pinyin": "official, public servant"
    },
    {
        "Character": "护",
        "Pinyin": "hù"
    },
    {
        "Pinyin": "protect, guard, defend, shelter"
    },
    {
        "Character": "博",
        "Pinyin": "bó"
    },
    {
        "Pinyin": "gamble, play games; wide, broad"
    },
    {
        "Character": "补",
        "Pinyin": "bǔ"
    },
    {
        "Pinyin": "mend, patch, fix, repair, restore"
    },
    {
        "Character": "石",
        "Pinyin": "shí"
    },
    {
        "Pinyin": "stone, rock, mineral; rad. 112"
    },
    {
        "Character": "尔",
        "Pinyin": "ěr"
    },
    {
        "Pinyin": "you; that, those; final particle"
    },
    {
        "Character": "营",
        "Pinyin": "yíng"
    },
    {
        "Pinyin": "encampment, barracks; manage"
    },
    {
        "Character": "历",
        "Pinyin": "lì"
    },
    {
        "Pinyin": "take place, past, history"
    },
    {
        "Character": "只",
        "Pinyin": "zhī"
    },
    {
        "Pinyin": "single, one of pair, lone"
    },
    {
        "Character": "按",
        "Pinyin": "àn"
    },
    {
        "Pinyin": "put hand on, press down with hand"
    },
    {
        "Character": "妹",
        "Pinyin": "mèi"
    },
    {
        "Pinyin": "younger sister"
    },
    {
        "Character": "里",
        "Pinyin": "lǐ"
    },
    {
        "Pinyin": "inside, interior, within"
    },
    {
        "Character": "编",
        "Pinyin": "biān"
    },
    {
        "Pinyin": "knit, weave; arrange; compile"
    },
    {
        "Character": "岁",
        "Pinyin": "suì"
    },
    {
        "Pinyin": "year; age; harvest"
    },
    {
        "Character": "择",
        "Pinyin": "zé"
    },
    {
        "Pinyin": "select, choose, pick out"
    },
    {
        "Character": "温",
        "Pinyin": "wēn"
    },
    {
        "Pinyin": "lukewarm, warm; tepid, mild"
    },
    {
        "Character": "守",
        "Pinyin": "shǒu"
    },
    {
        "Pinyin": "defend, protect, guard, conserve"
    },
    {
        "Character": "血",
        "Pinyin": "xiě"
    },
    {
        "Pinyin": "blood; radical number 143"
    },
    {
        "Character": "领",
        "Pinyin": "lǐng"
    },
    {
        "Pinyin": "neck; collar; lead, guide"
    },
    {
        "Character": "寻",
        "Pinyin": "xún"
    },
    {
        "Pinyin": "seek, search, look for; ancient"
    },
    {
        "Character": "田",
        "Pinyin": "tián"
    },
    {
        "Pinyin": "field, arable land, cultivated"
    },
    {
        "Character": "养",
        "Pinyin": "yǎng"
    },
    {
        "Pinyin": "raise, rear, bring up; support"
    },
    {
        "Character": "谓",
        "Pinyin": "wèi"
    },
    {
        "Pinyin": "say, tell; call, name; be called"
    },
    {
        "Character": "居",
        "Pinyin": "jū"
    },
    {
        "Pinyin": "live, dwell, reside, sit"
    },
    {
        "Character": "异",
        "Pinyin": "yì"
    },
    {
        "Pinyin": "different, unusual, strange"
    },
    {
        "Character": "雨",
        "Pinyin": "yǔ"
    },
    {
        "Pinyin": "rain; rainy; KangXi radical 173"
    },
    {
        "Character": "止",
        "Pinyin": "zhǐ"
    },
    {
        "Pinyin": "stop, halt, desist; detain"
    },
    {
        "Character": "跳",
        "Pinyin": "tiào"
    },
    {
        "Pinyin": "jump, leap, vault, bounce; dance"
    },
    {
        "Character": "君",
        "Pinyin": "jūn"
    },
    {
        "Pinyin": "sovereign, monarch, ruler, chief, prince"
    },
    {
        "Character": "烂",
        "Pinyin": "làn"
    },
    {
        "Pinyin": "rotten, spoiled, decayed"
    },
    {
        "Character": "优",
        "Pinyin": "yōu"
    },
    {
        "Pinyin": "superior, excellent; actor"
    },
    {
        "Character": "封",
        "Pinyin": "fēng"
    },
    {
        "Pinyin": "letter, envelope; feudal"
    },
    {
        "Character": "拜",
        "Pinyin": "bài"
    },
    {
        "Pinyin": "do obeisance, bow, kowtow"
    },
    {
        "Character": "恶",
        "Pinyin": "è"
    },
    {
        "Pinyin": "evil, wicked, bad, foul"
    },
    {
        "Character": "啥",
        "Pinyin": "shà"
    },
    {
        "Pinyin": "what?"
    },
    {
        "Character": "浪",
        "Pinyin": "làng"
    },
    {
        "Pinyin": "wave; wasteful, reckless"
    },
    {
        "Character": "核",
        "Pinyin": "hé"
    },
    {
        "Pinyin": "seed, kernel, core, nut; atom"
    },
    {
        "Character": "聊",
        "Pinyin": "liáo"
    },
    {
        "Pinyin": "somewhat, slightly, at least"
    },
    {
        "Character": "急",
        "Pinyin": "jí"
    },
    {
        "Pinyin": "quick, quickly; urgent, pressing"
    },
    {
        "Character": "状",
        "Pinyin": "zhuàng"
    },
    {
        "Pinyin": "form; appearance; shape; official"
    },
    {
        "Character": "陆",
        "Pinyin": "lù"
    },
    {
        "Pinyin": "land, continental; army; an accounting form of U+516D 六 (six)"
    },
    {
        "Character": "激",
        "Pinyin": "jī"
    },
    {
        "Pinyin": "arouse, excite, incite; quickly"
    },
    {
        "Character": "模",
        "Pinyin": "mó"
    },
    {
        "Pinyin": "model, standard, pattern; copy"
    },
    {
        "Character": "攻",
        "Pinyin": "gōng"
    },
    {
        "Pinyin": "attack, assault; criticize"
    },
    {
        "Character": "忙",
        "Pinyin": "máng"
    },
    {
        "Pinyin": "busy, pressed for time; hustling"
    },
    {
        "Character": "良",
        "Pinyin": "liáng"
    },
    {
        "Pinyin": "good, virtuous, respectable"
    },
    {
        "Character": "剧",
        "Pinyin": "jù"
    },
    {
        "Pinyin": "theatrical plays, opera, drama"
    },
    {
        "Character": "牛",
        "Pinyin": "niú"
    },
    {
        "Pinyin": "cow, ox, bull; KangXi radical93"
    },
    {
        "Character": "垒",
        "Pinyin": "lěi"
    },
    {
        "Pinyin": "rampart, military wall"
    },
    {
        "Character": "增",
        "Pinyin": "zēng"
    },
    {
        "Pinyin": "increase, add to, augment"
    },
    {
        "Character": "维",
        "Pinyin": "wéi"
    },
    {
        "Pinyin": "maintain, preserve, safeguard"
    },
    {
        "Character": "静",
        "Pinyin": "jìng"
    },
    {
        "Pinyin": "quiet, still, motionless; gentle"
    },
    {
        "Character": "阵",
        "Pinyin": "zhèn"
    },
    {
        "Pinyin": "column, row or file of troops"
    },
    {
        "Character": "抱",
        "Pinyin": "bào"
    },
    {
        "Pinyin": "embrace, hold in arms, enfold"
    },
    {
        "Character": "势",
        "Pinyin": "shì"
    },
    {
        "Pinyin": "power, force; tendency"
    },
    {
        "Character": "严",
        "Pinyin": "yán"
    },
    {
        "Pinyin": "strict, rigorous, rigid; stern"
    },
    {
        "Character": "词",
        "Pinyin": "cí"
    },
    {
        "Pinyin": "words; phrase, expression"
    },
    {
        "Character": "亚",
        "Pinyin": "yà"
    },
    {
        "Pinyin": "Asia; second; used as a prefix to names"
    },
    {
        "Character": "夫",
        "Pinyin": "fū"
    },
    {
        "Pinyin": "man, male adult, husband; those"
    },
    {
        "Character": "签",
        "Pinyin": "qiān"
    },
    {
        "Pinyin": "sign, endorse; slip of paper"
    },
    {
        "Character": "悲",
        "Pinyin": "bēi"
    },
    {
        "Pinyin": "sorrow, grief; sorry, sad"
    },
    {
        "Character": "密",
        "Pinyin": "mì"
    },
    {
        "Pinyin": "dense, thick, close; intimate"
    },
    {
        "Character": "幕",
        "Pinyin": "mù"
    },
    {
        "Pinyin": "curtain, screen, tent"
    },
    {
        "Character": "毒",
        "Pinyin": "dú"
    },
    {
        "Pinyin": "poison, venom; poisonous"
    },
    {
        "Character": "厂",
        "Pinyin": "chǎng"
    },
    {
        "Pinyin": "factory, plant, workshop, mill"
    },
    {
        "Character": "爽",
        "Pinyin": "shuǎng"
    },
    {
        "Pinyin": "happy, cheerful; refreshing"
    },
    {
        "Character": "缘",
        "Pinyin": "yuán"
    },
    {
        "Pinyin": "hem, margin; reason, cause; karma, fate"
    },
    {
        "Character": "店",
        "Pinyin": "diàn"
    },
    {
        "Pinyin": "shop, store; inn, hotel"
    },
    {
        "Character": "吴",
        "Pinyin": "wú"
    },
    {
        "Pinyin": "one of warring states; surname"
    },
    {
        "Character": "兰",
        "Pinyin": "lán"
    },
    {
        "Pinyin": "orchid; elegant, graceful"
    },
    {
        "Character": "睡",
        "Pinyin": "shuì"
    },
    {
        "Pinyin": "sleep, doze"
    },
    {
        "Character": "致",
        "Pinyin": "zhì"
    },
    {
        "Pinyin": "delicate, fine; dense"
    },
    {
        "Character": "江",
        "Pinyin": "jiāng"
    },
    {
        "Pinyin": "large river; yangzi; surname"
    },
    {
        "Character": "宿",
        "Pinyin": "sù"
    },
    {
        "Pinyin": "stop, rest, lodge, stay overnight; constellation"
    },
    {
        "Character": "翻",
        "Pinyin": "fān"
    },
    {
        "Pinyin": "flip over, upset, capsize"
    },
    {
        "Character": "香",
        "Pinyin": "xiāng"
    },
    {
        "Pinyin": "fragrant, sweet smelling, incense"
    },
    {
        "Character": "蛮",
        "Pinyin": "mán"
    },
    {
        "Pinyin": "barbarians; barbarous, savage"
    },
    {
        "Character": "警",
        "Pinyin": "jǐng"
    },
    {
        "Pinyin": "guard, watch; alert, alarm"
    },
    {
        "Character": "控",
        "Pinyin": "kòng"
    },
    {
        "Pinyin": "accuse, charge; control"
    },
    {
        "Character": "赵",
        "Pinyin": "zhào"
    },
    {
        "Pinyin": "surname; ancient state"
    },
    {
        "Character": "冷",
        "Pinyin": "lěng"
    },
    {
        "Pinyin": "cold, cool; lonely"
    },
    {
        "Character": "威",
        "Pinyin": "wēi"
    },
    {
        "Pinyin": "pomp, power; powerful; dominate"
    },
    {
        "Character": "微",
        "Pinyin": "wēi"
    },
    {
        "Pinyin": "small, prefix micro-, trifling"
    },
    {
        "Character": "坐",
        "Pinyin": "zuò"
    },
    {
        "Pinyin": "sit; seat; ride, travel by"
    },
    {
        "Character": "周",
        "Pinyin": "zhōu"
    },
    {
        "Pinyin": "Zhou dynasty; circumference"
    },
    {
        "Character": "宗",
        "Pinyin": "zōng"
    },
    {
        "Pinyin": "lineage, ancestry; ancestor, clan"
    },
    {
        "Character": "普",
        "Pinyin": "pǔ"
    },
    {
        "Pinyin": "universal, general, widespread"
    },
    {
        "Character": "登",
        "Pinyin": "dēng"
    },
    {
        "Pinyin": "rise, mount, board, climb"
    },
    {
        "Character": "母",
        "Pinyin": "mǔ"
    },
    {
        "Pinyin": "mother; female elders; female"
    },
    {
        "Character": "络",
        "Pinyin": "luò"
    },
    {
        "Pinyin": "enmesh, wrap around; web, net"
    },
    {
        "Character": "午",
        "Pinyin": "wǔ"
    },
    {
        "Pinyin": "noon; 7th terrestrial branch"
    },
    {
        "Character": "恐",
        "Pinyin": "kǒng"
    },
    {
        "Pinyin": "fear; fearful, apprehensive"
    },
    {
        "Character": "套",
        "Pinyin": "tào"
    },
    {
        "Pinyin": "case, cover, wrapper, envelope"
    },
    {
        "Character": "巴",
        "Pinyin": "bā"
    },
    {
        "Pinyin": "greatly desire, anxiously hope"
    },
    {
        "Character": "杂",
        "Pinyin": "zá"
    },
    {
        "Pinyin": "mixed, blended; mix, mingle"
    },
    {
        "Character": "创",
        "Pinyin": "chuàng"
    },
    {
        "Pinyin": "establish, create; knife cut"
    },
    {
        "Character": "旧",
        "Pinyin": "jiù"
    },
    {
        "Pinyin": "old, ancient; former, past"
    },
    {
        "Character": "辑",
        "Pinyin": "jí"
    },
    {
        "Pinyin": "gather up, collect; edit, compile"
    },
    {
        "Character": "幸",
        "Pinyin": "xìng"
    },
    {
        "Pinyin": "luck(ily), favor, fortunately"
    },
    {
        "Character": "剑",
        "Pinyin": "jiàn"
    },
    {
        "Pinyin": "sword, dagger, saber"
    },
    {
        "Character": "亮",
        "Pinyin": "liàng"
    },
    {
        "Pinyin": "bright, brilliant, radiant, light"
    },
    {
        "Character": "述",
        "Pinyin": "shù"
    },
    {
        "Pinyin": "narrate, state, express"
    },
    {
        "Character": "堂",
        "Pinyin": "táng"
    },
    {
        "Pinyin": "hall; government office"
    },
    {
        "Character": "酒",
        "Pinyin": "jiǔ"
    },
    {
        "Pinyin": "wine, spirits, liquor, alcoholic beverage"
    },
    {
        "Character": "丽",
        "Pinyin": "lì"
    },
    {
        "Pinyin": "beautiful, magnificent, elegant"
    },
    {
        "Character": "牌",
        "Pinyin": "pái"
    },
    {
        "Pinyin": "signboard, placard"
    },
    {
        "Character": "仔",
        "Pinyin": "zǐ"
    },
    {
        "Pinyin": "small thing, child; young animal"
    },
    {
        "Character": "脚",
        "Pinyin": "jiǎo"
    },
    {
        "Pinyin": "foot; base, leg, foundation"
    },
    {
        "Character": "突",
        "Pinyin": "tú"
    },
    {
        "Pinyin": "suddenly, abruptly, unexpectedly"
    },
    {
        "Character": "搞",
        "Pinyin": "gǎo"
    },
    {
        "Pinyin": "to clear, clarify"
    },
    {
        "Character": "父",
        "Pinyin": "fù"
    },
    {
        "Pinyin": "father; KangXi radical 88"
    },
    {
        "Character": "俊",
        "Pinyin": "jùn"
    },
    {
        "Pinyin": "talented, capable; handsome"
    },
    {
        "Character": "暴",
        "Pinyin": "bào"
    },
    {
        "Pinyin": "violent, brutal, tyrannical"
    },
    {
        "Character": "防",
        "Pinyin": "fáng"
    },
    {
        "Pinyin": "defend; prevent; embankment"
    },
    {
        "Character": "吉",
        "Pinyin": "jí"
    },
    {
        "Pinyin": "lucky, propitious, good"
    },
    {
        "Character": "礼",
        "Pinyin": "lǐ"
    },
    {
        "Pinyin": "social custom; manners; courtesy; rites"
    },
    {
        "Character": "素",
        "Pinyin": "sù"
    },
    {
        "Pinyin": "white (silk); plain; vegetarian; formerly; normally"
    },
    {
        "Character": "招",
        "Pinyin": "zhāo"
    },
    {
        "Pinyin": "beckon, summon; recruit, levy"
    },
    {
        "Character": "草",
        "Pinyin": "cǎo"
    },
    {
        "Pinyin": "grass, straw, thatch, herbs"
    },
    {
        "Character": "周",
        "Pinyin": "zhōu"
    },
    {
        "Pinyin": "Zhou dynasty; circumference"
    },
    {
        "Character": "房",
        "Pinyin": "fáng"
    },
    {
        "Pinyin": "house, building; room"
    },
    {
        "Character": "餐",
        "Pinyin": "cān"
    },
    {
        "Pinyin": "eat, dine; meal; food"
    },
    {
        "Character": "虑",
        "Pinyin": "lǖ"
    },
    {
        "Pinyin": "be concerned, worry about"
    },
    {
        "Character": "充",
        "Pinyin": "chōng"
    },
    {
        "Pinyin": "fill, be full, supply"
    },
    {
        "Character": "府",
        "Pinyin": "fǔ"
    },
    {
        "Pinyin": "prefecture; prefect; government"
    },
    {
        "Character": "背",
        "Pinyin": "bèi"
    },
    {
        "Pinyin": "back; back side; behind; betray"
    },
    {
        "Character": "典",
        "Pinyin": "diǎn"
    },
    {
        "Pinyin": "law, canon; documentation; classic, scripture"
    },
    {
        "Character": "仁",
        "Pinyin": "rén"
    },
    {
        "Pinyin": "humaneness, benevolence, kindness"
    },
    {
        "Character": "漫",
        "Pinyin": "màn"
    },
    {
        "Pinyin": "overflow of water; spreading"
    },
    {
        "Character": "景",
        "Pinyin": "jǐng"
    },
    {
        "Pinyin": "scenery, view; conditions"
    },
    {
        "Character": "绍",
        "Pinyin": "shào"
    },
    {
        "Pinyin": "continue, carry on; hand down; to join"
    },
    {
        "Character": "诸",
        "Pinyin": "zhū"
    },
    {
        "Pinyin": "several, various"
    },
    {
        "Character": "琴",
        "Pinyin": "qín"
    },
    {
        "Pinyin": "Chinese lute or guitar"
    },
    {
        "Character": "忆",
        "Pinyin": "yì"
    },
    {
        "Pinyin": "remember, reflect upon; memory"
    },
    {
        "Character": "援",
        "Pinyin": "yuán"
    },
    {
        "Pinyin": "aid, assist; lead; cite"
    },
    {
        "Character": "尤",
        "Pinyin": "yóu"
    },
    {
        "Pinyin": "especially, particularly"
    },
    {
        "Character": "缺",
        "Pinyin": "quē"
    },
    {
        "Pinyin": "be short of, lack; gap, deficit"
    },
    {
        "Character": "扁",
        "Pinyin": "biǎn"
    },
    {
        "Pinyin": "flat; tablet, signboard"
    },
    {
        "Character": "骂",
        "Pinyin": "mà"
    },
    {
        "Pinyin": "accuse, blame, curse, scold"
    },
    {
        "Character": "纯",
        "Pinyin": "chún"
    },
    {
        "Pinyin": "pure, clean, simple"
    },
    {
        "Character": "惜",
        "Pinyin": "xī"
    },
    {
        "Pinyin": "pity, regret, rue, begrudge"
    },
    {
        "Character": "授",
        "Pinyin": "shòu"
    },
    {
        "Pinyin": "give to, transmit; confer"
    },
    {
        "Character": "皮",
        "Pinyin": "pí"
    },
    {
        "Pinyin": "skin, hide, fur, feather; outer"
    },
    {
        "Character": "松",
        "Pinyin": "sōng"
    },
    {
        "Pinyin": "lax, loose; loosen, relax"
    },
    {
        "Character": "委",
        "Pinyin": "wěi"
    },
    {
        "Pinyin": "appoint, send, commission"
    },
    {
        "Character": "湖",
        "Pinyin": "hú"
    },
    {
        "Pinyin": "a lake; Hubei, Hunan; bluish-green"
    },
    {
        "Character": "诚",
        "Pinyin": "chéng"
    },
    {
        "Pinyin": "sincere, honest; true, real"
    },
    {
        "Character": "麻",
        "Pinyin": "má"
    },
    {
        "Pinyin": "hemp, jute, flax; sesame"
    },
    {
        "Character": "置",
        "Pinyin": "zhì"
    },
    {
        "Pinyin": "place, lay out; set aside"
    },
    {
        "Character": "靠",
        "Pinyin": "kào"
    },
    {
        "Pinyin": "lean on, trust, depend on; near"
    },
    {
        "Character": "继",
        "Pinyin": "jì"
    },
    {
        "Pinyin": "continue, maintain, carry on"
    },
    {
        "Character": "判",
        "Pinyin": "pàn"
    },
    {
        "Pinyin": "judge; discriminate; conclude"
    },
    {
        "Character": "益",
        "Pinyin": "yì"
    },
    {
        "Pinyin": "profit, benefit; advantage"
    },
    {
        "Character": "波",
        "Pinyin": "bō"
    },
    {
        "Pinyin": "waves, breakers; undulations"
    },
    {
        "Character": "姐",
        "Pinyin": "jiě"
    },
    {
        "Pinyin": "elder sister, young lady"
    },
    {
        "Character": "既",
        "Pinyin": "jì"
    },
    {
        "Pinyin": "already; de facto; since; then"
    },
    {
        "Character": "射",
        "Pinyin": "shè"
    },
    {
        "Pinyin": "shoot, eject, issue forth, emit"
    },
    {
        "Character": "欲",
        "Pinyin": "yù"
    },
    {
        "Pinyin": "desire, want, long for; intend"
    },
    {
        "Character": "刻",
        "Pinyin": "kè"
    },
    {
        "Pinyin": "carve, engrave; quarter hour"
    },
    {
        "Character": "堆",
        "Pinyin": "duī"
    },
    {
        "Pinyin": "heap, pile, crowd; pile up"
    },
    {
        "Character": "释",
        "Pinyin": "shì"
    },
    {
        "Pinyin": "interprete, elucidate; release"
    },
    {
        "Character": "含",
        "Pinyin": "hán"
    },
    {
        "Pinyin": "hold in mouth; cherish; contain"
    },
    {
        "Character": "承",
        "Pinyin": "chéng"
    },
    {
        "Pinyin": "inherit, receive; succeed"
    },
    {
        "Character": "退",
        "Pinyin": "tuì"
    },
    {
        "Pinyin": "step back, retreat, withdraw"
    },
    {
        "Character": "莫",
        "Pinyin": "mò"
    },
    {
        "Pinyin": "do not, is not, can not; negative"
    },
    {
        "Character": "刘",
        "Pinyin": "liú"
    },
    {
        "Pinyin": "surname; kill, destroy"
    },
    {
        "Character": "昨",
        "Pinyin": "zuó"
    },
    {
        "Pinyin": "yesterday; in former times, past"
    },
    {
        "Character": "旁",
        "Pinyin": "páng"
    },
    {
        "Pinyin": "side; by side, close by, near"
    },
    {
        "Character": "纪",
        "Pinyin": "jì"
    },
    {
        "Pinyin": "record, annal, historical account"
    },
    {
        "Character": "赶",
        "Pinyin": "gǎn"
    },
    {
        "Pinyin": "pursue, follow; expel, drive away"
    },
    {
        "Character": "制",
        "Pinyin": "zhì"
    },
    {
        "Pinyin": "make, manufacture; produce"
    },
    {
        "Character": "尚",
        "Pinyin": "shàng"
    },
    {
        "Pinyin": "still, yet; even; fairly, rather"
    },
    {
        "Character": "艺",
        "Pinyin": "yì"
    },
    {
        "Pinyin": "art; talent, ability; craft"
    },
    {
        "Character": "肉",
        "Pinyin": "ròu"
    },
    {
        "Pinyin": "flesh; meat; KangXi radical 130"
    },
    {
        "Character": "律",
        "Pinyin": "lǖ"
    },
    {
        "Pinyin": "statute, principle, regulation"
    },
    {
        "Character": "铁",
        "Pinyin": "tiě"
    },
    {
        "Pinyin": "iron; strong, solid, firm"
    },
    {
        "Character": "奏",
        "Pinyin": "zòu"
    },
    {
        "Pinyin": "memorialize emperor; report"
    },
    {
        "Character": "树",
        "Pinyin": "shù"
    },
    {
        "Pinyin": "tree; plant; set up, establish"
    },
    {
        "Character": "毛",
        "Pinyin": "máo"
    },
    {
        "Pinyin": "hair, fur, feathers; coarse"
    },
    {
        "Character": "罪",
        "Pinyin": "zuì"
    },
    {
        "Pinyin": "crime, sin, vice; evil; hardship"
    },
    {
        "Character": "笔",
        "Pinyin": "bǐ"
    },
    {
        "Pinyin": "writing brush; write; stroke"
    },
    {
        "Character": "彩",
        "Pinyin": "cǎi"
    },
    {
        "Pinyin": "hue, color; variegated colors"
    },
    {
        "Character": "注",
        "Pinyin": "zhù"
    },
    {
        "Pinyin": "explain; annotate; make entry"
    },
    {
        "Character": "归",
        "Pinyin": "guī"
    },
    {
        "Pinyin": "return; return to, revert to"
    },
    {
        "Character": "弹",
        "Pinyin": "dàn"
    },
    {
        "Pinyin": "pellet, bullet, shot, shell"
    },
    {
        "Character": "虎",
        "Pinyin": "hǔ"
    },
    {
        "Pinyin": "tiger; brave, fierce; surname"
    },
    {
        "Character": "卫",
        "Pinyin": "wèi"
    },
    {
        "Pinyin": "guard, protect, defend"
    },
    {
        "Character": "刀",
        "Pinyin": "dāo"
    },
    {
        "Pinyin": "knife; old coin; measure"
    },
    {
        "Character": "皆",
        "Pinyin": "jiē"
    },
    {
        "Pinyin": "all, every, everybody"
    },
    {
        "Character": "键",
        "Pinyin": "jiàn"
    },
    {
        "Pinyin": "door bolt, lock bolt; key"
    },
    {
        "Character": "售",
        "Pinyin": "shòu"
    },
    {
        "Pinyin": "sell"
    },
    {
        "Character": "块",
        "Pinyin": "kuài"
    },
    {
        "Pinyin": "piece, lump; dollar"
    },
    {
        "Character": "险",
        "Pinyin": "xiǎn"
    },
    {
        "Pinyin": "narrow pass, strategic point, dangerous"
    },
    {
        "Character": "荣",
        "Pinyin": "róng"
    },
    {
        "Pinyin": "glory, honor; flourish, prosper"
    },
    {
        "Character": "播",
        "Pinyin": "bò"
    },
    {
        "Pinyin": "sow, spread; broadcast; case away, reject"
    },
    {
        "Character": "施",
        "Pinyin": "shī"
    },
    {
        "Pinyin": "grant, bestow; give; act; name"
    },
    {
        "Character": "铭",
        "Pinyin": "míng"
    },
    {
        "Pinyin": "inscribe, engrave; unforgettably"
    },
    {
        "Character": "罗",
        "Pinyin": "luó"
    },
    {
        "Pinyin": "net for catching birds; gauze"
    },
    {
        "Character": "汉",
        "Pinyin": "hàn"
    },
    {
        "Pinyin": "the Chinese people, Chinese language"
    },
    {
        "Character": "赏",
        "Pinyin": "shǎng"
    },
    {
        "Pinyin": "reward, grant, bestow; appreciate"
    },
    {
        "Character": "欣",
        "Pinyin": "xīn"
    },
    {
        "Pinyin": "happy, joyous, delighted"
    },
    {
        "Character": "升",
        "Pinyin": "shēng"
    },
    {
        "Pinyin": "arise, go up; hoist; advance"
    },
    {
        "Character": "叶",
        "Pinyin": "xié"
    },
    {
        "Pinyin": "leaf, petal; page of book; period"
    },
    {
        "Character": "萤",
        "Pinyin": "yíng"
    },
    {
        "Pinyin": "glow-worm, luminous insect"
    },
    {
        "Character": "载",
        "Pinyin": "zài"
    },
    {
        "Pinyin": "load; carry; transport, convey"
    },
    {
        "Character": "嘿",
        "Pinyin": "mò"
    },
    {
        "Pinyin": "be silent, be quiet"
    },
    {
        "Character": "弄",
        "Pinyin": "nòng"
    },
    {
        "Pinyin": "do, play or fiddle with; alley"
    },
    {
        "Character": "钟",
        "Pinyin": "zhōng"
    },
    {
        "Pinyin": "clock; bell"
    },
    {
        "Character": "付",
        "Pinyin": "fù"
    },
    {
        "Pinyin": "give, deliver, pay, hand over; entrust"
    },
    {
        "Character": "寄",
        "Pinyin": "jì"
    },
    {
        "Pinyin": "send, transmit, mail; rely on"
    },
    {
        "Character": "鬼",
        "Pinyin": "guǐ"
    },
    {
        "Pinyin": "ghost; spirit of dead; devil"
    },
    {
        "Character": "哦",
        "Pinyin": "é"
    },
    {
        "Pinyin": "oh? really? is that so?"
    },
    {
        "Character": "灯",
        "Pinyin": "dēng"
    },
    {
        "Pinyin": "lantern, lamp"
    },
    {
        "Character": "呆",
        "Pinyin": "ái"
    },
    {
        "Pinyin": "dull; dull-minded, simple, stupid"
    },
    {
        "Character": "洋",
        "Pinyin": "yáng"
    },
    {
        "Pinyin": "ocean, sea; foreign; western"
    },
    {
        "Character": "嘻",
        "Pinyin": "xī"
    },
    {
        "Pinyin": "mirthful, happy; interjection"
    },
    {
        "Character": "布",
        "Pinyin": "bù"
    },
    {
        "Pinyin": "cotton cloth, textiles, linen"
    },
    {
        "Character": "磁",
        "Pinyin": "cí"
    },
    {
        "Pinyin": "magnetic; magnetism; porcelain"
    },
    {
        "Character": "荐",
        "Pinyin": "jiàn"
    },
    {
        "Pinyin": "offer, present; recommend"
    },
    {
        "Character": "检",
        "Pinyin": "jiǎn"
    },
    {
        "Pinyin": "check; examine"
    },
    {
        "Character": "派",
        "Pinyin": "pài"
    },
    {
        "Pinyin": "school of thought, sect, branch"
    },
    {
        "Character": "构",
        "Pinyin": "gòu"
    },
    {
        "Pinyin": "frame, building, structure"
    },
    {
        "Character": "妈",
        "Pinyin": "mā"
    },
    {
        "Pinyin": "mother, mama"
    },
    {
        "Character": "蓝",
        "Pinyin": "lán"
    },
    {
        "Pinyin": "blue; indigo plant; surname"
    },
    {
        "Character": "贴",
        "Pinyin": "tiē"
    },
    {
        "Pinyin": "paste to, stick on; attached to"
    },
    {
        "Character": "猪",
        "Pinyin": "zhū"
    },
    {
        "Pinyin": "pig, hog"
    },
    {
        "Character": "策",
        "Pinyin": "cè"
    },
    {
        "Pinyin": "scheme, plan; to whip; urge"
    },
    {
        "Character": "纸",
        "Pinyin": "zhǐ"
    },
    {
        "Pinyin": "paper"
    },
    {
        "Character": "暗",
        "Pinyin": "àn"
    },
    {
        "Pinyin": "dark; obscure; in secret, covert"
    },
    {
        "Character": "巧",
        "Pinyin": "qiǎo"
    },
    {
        "Pinyin": "skillful, ingenious, clever"
    },
    {
        "Character": "努",
        "Pinyin": "nǔ"
    },
    {
        "Pinyin": "to exert, strive, make an effort; to pout"
    },
    {
        "Character": "雷",
        "Pinyin": "léi"
    },
    {
        "Pinyin": "thunder"
    },
    {
        "Character": "架",
        "Pinyin": "jià"
    },
    {
        "Pinyin": "rack, stand, prop; prop up"
    },
    {
        "Character": "享",
        "Pinyin": "xiǎng"
    },
    {
        "Pinyin": "enjoy"
    },
    {
        "Character": "宣",
        "Pinyin": "xuān"
    },
    {
        "Pinyin": "declare, announce, proclaim"
    },
    {
        "Character": "逢",
        "Pinyin": "féng"
    },
    {
        "Pinyin": "come upon, happen meet; flatter"
    },
    {
        "Character": "均",
        "Pinyin": "jūn"
    },
    {
        "Pinyin": "equal, even, fair; all, also"
    },
    {
        "Character": "担",
        "Pinyin": "dān"
    },
    {
        "Pinyin": "carry, bear, undertake"
    },
    {
        "Character": "启",
        "Pinyin": "qǐ"
    },
    {
        "Pinyin": "open; begin"
    },
    {
        "Character": "济",
        "Pinyin": "jì"
    },
    {
        "Pinyin": "to help, aid, relieve; to ferry, cross"
    },
    {
        "Character": "罢",
        "Pinyin": "bà"
    },
    {
        "Pinyin": "cease, finish, stop; give up"
    },
    {
        "Character": "呼",
        "Pinyin": "hū"
    },
    {
        "Pinyin": "breathe sigh, exhale; call, shout"
    },
    {
        "Character": "划",
        "Pinyin": "huà"
    },
    {
        "Pinyin": "delineate, painting, picture, drawing; draw"
    },
    {
        "Character": "伟",
        "Pinyin": "wěi"
    },
    {
        "Pinyin": "great, robust; extraordinary"
    },
    {
        "Character": "岛",
        "Pinyin": "dǎo"
    },
    {
        "Pinyin": "island"
    },
    {
        "Character": "歉",
        "Pinyin": "qiàn"
    },
    {
        "Pinyin": "deficient, lacking, insufficient"
    },
    {
        "Character": "郭",
        "Pinyin": "guō"
    },
    {
        "Pinyin": "outer part (of a city); surname"
    },
    {
        "Character": "训",
        "Pinyin": "xùn"
    },
    {
        "Pinyin": "teach, instruct; exegesis"
    },
    {
        "Character": "穿",
        "Pinyin": "chuān"
    },
    {
        "Pinyin": "penetrate, pierce, drill; wear"
    },
    {
        "Character": "详",
        "Pinyin": "xiáng"
    },
    {
        "Pinyin": "detailed, complete, thorough"
    },
    {
        "Character": "沙",
        "Pinyin": "shā"
    },
    {
        "Pinyin": "sand, gravel, pebbles; granulated"
    },
    {
        "Character": "督",
        "Pinyin": "dū"
    },
    {
        "Pinyin": "supervise, oversee, direct"
    },
    {
        "Character": "梅",
        "Pinyin": "méi"
    },
    {
        "Pinyin": "plums; prunes; surname"
    },
    {
        "Character": "顾",
        "Pinyin": "gù"
    },
    {
        "Pinyin": "look back; look at; look after"
    },
    {
        "Character": "敌",
        "Pinyin": "dí"
    },
    {
        "Pinyin": "enemy, foe, rival; resist"
    },
    {
        "Character": "协",
        "Pinyin": "xié"
    },
    {
        "Pinyin": "be united; cooperate"
    },
    {
        "Character": "轮",
        "Pinyin": "lún"
    },
    {
        "Pinyin": "wheel; revolve, turn; recur"
    },
    {
        "Character": "略",
        "Pinyin": "lvè"
    },
    {
        "Pinyin": "approximately, roughly; outline"
    },
    {
        "Character": "慧",
        "Pinyin": "huì"
    },
    {
        "Pinyin": "bright, intelligent; intelligence"
    },
    {
        "Character": "幻",
        "Pinyin": "huàn"
    },
    {
        "Pinyin": "illusion, fantasy, mirage"
    },
    {
        "Character": "脸",
        "Pinyin": "liǎn"
    },
    {
        "Pinyin": "face; cheek; reputation"
    },
    {
        "Character": "短",
        "Pinyin": "duǎn"
    },
    {
        "Pinyin": "short; brief; deficient, lacking"
    },
    {
        "Character": "鹰",
        "Pinyin": "yīng"
    },
    {
        "Pinyin": "eagle, falcon; Accipiter species (various)"
    },
    {
        "Character": "冲",
        "Pinyin": "chōng"
    },
    {
        "Pinyin": "rush against, charge ahead"
    },
    {
        "Character": "朝",
        "Pinyin": "zhāo"
    },
    {
        "Pinyin": "dynasty; morning"
    },
    {
        "Character": "忍",
        "Pinyin": "rěn"
    },
    {
        "Pinyin": "endure, bear, suffer; forbear"
    },
    {
        "Character": "游",
        "Pinyin": "yóu"
    },
    {
        "Pinyin": "to swim; float, drift; wander, roam"
    },
    {
        "Character": "河",
        "Pinyin": "hé"
    },
    {
        "Pinyin": "river; stream; yellow river"
    },
    {
        "Character": "批",
        "Pinyin": "pī"
    },
    {
        "Pinyin": "comment, criticize; wholesale"
    },
    {
        "Character": "混",
        "Pinyin": "hǔn"
    },
    {
        "Pinyin": "to mix, blend, mingle; to bumble along"
    },
    {
        "Character": "窗",
        "Pinyin": "chuāng"
    },
    {
        "Pinyin": "window"
    },
    {
        "Character": "乡",
        "Pinyin": "xiāng"
    },
    {
        "Pinyin": "country; rural; village"
    },
    {
        "Character": "蛋",
        "Pinyin": "dàn"
    },
    {
        "Pinyin": "eggs; term of abuse"
    },
    {
        "Character": "季",
        "Pinyin": "jì"
    },
    {
        "Pinyin": "quarter of year; season; surname"
    },
    {
        "Character": "散",
        "Pinyin": "sàn"
    },
    {
        "Pinyin": "scatter, disperse, break up"
    },
    {
        "Character": "册",
        "Pinyin": "cè"
    },
    {
        "Pinyin": "book, volume"
    },
    {
        "Character": "弃",
        "Pinyin": "qì"
    },
    {
        "Pinyin": "reject, abandon, discard"
    },
    {
        "Character": "熟",
        "Pinyin": "shóu"
    },
    {
        "Pinyin": "well-cooked; ripe; familiar with"
    },
    {
        "Character": "奖",
        "Pinyin": "jiǎng"
    },
    {
        "Pinyin": "prize, reward; give award to"
    },
    {
        "Character": "唯",
        "Pinyin": "wéi"
    },
    {
        "Pinyin": "only; yes"
    },
    {
        "Character": "藏",
        "Pinyin": "cáng"
    },
    {
        "Pinyin": "hide, conceal; hoard, store up"
    },
    {
        "Character": "婚",
        "Pinyin": "hūn"
    },
    {
        "Pinyin": "get married; marriage, wedding"
    },
    {
        "Character": "镜",
        "Pinyin": "jìng"
    },
    {
        "Pinyin": "mirror; lens; glass; glasses"
    },
    {
        "Character": "紧",
        "Pinyin": "jǐn"
    },
    {
        "Pinyin": "tense, tight, taut; firm, secure"
    },
    {
        "Character": "猜",
        "Pinyin": "cāi"
    },
    {
        "Pinyin": "guess, conjecture, suppose; feel"
    },
    {
        "Character": "喝",
        "Pinyin": "hē"
    },
    {
        "Pinyin": "drink; shout, call out"
    },
    {
        "Character": "尊",
        "Pinyin": "zūn"
    },
    {
        "Pinyin": "respect, revere, venerate; honor"
    },
    {
        "Character": "干",
        "Pinyin": "gān"
    },
    {
        "Pinyin": "dry; first hexagram; warming principle of the sun, penetrating and fertilizing, heavenly generative principle (male)"
    },
    {
        "Character": "县",
        "Pinyin": "xiàn"
    },
    {
        "Pinyin": "county, district, subdivision"
    },
    {
        "Character": "伯",
        "Pinyin": "bó"
    },
    {
        "Pinyin": "older brother; father's elder brother; senior male 'sire'; feudal rank 'count'"
    },
    {
        "Character": "偏",
        "Pinyin": "piān"
    },
    {
        "Pinyin": "inclined one side; slanting"
    },
    {
        "Character": "偷",
        "Pinyin": "tōu"
    },
    {
        "Pinyin": "to steal, burglar, thief"
    },
    {
        "Character": "秋",
        "Pinyin": "qiū"
    },
    {
        "Pinyin": "autumn, fall; year"
    },
    {
        "Character": "层",
        "Pinyin": "céng"
    },
    {
        "Pinyin": "storey, layer, floor, stratum"
    },
    {
        "Character": "颗",
        "Pinyin": "kē"
    },
    {
        "Pinyin": "grain, kernel"
    },
    {
        "Character": "食",
        "Pinyin": "shí"
    },
    {
        "Pinyin": "eat; meal; food; KangXi radical number 184"
    },
    {
        "Character": "淡",
        "Pinyin": "dàn"
    },
    {
        "Pinyin": "weak, watery; insipid, tasteless"
    },
    {
        "Character": "申",
        "Pinyin": "shēn"
    },
    {
        "Pinyin": "to state to a superior, report; extend; 9th terrestrial branch"
    },
    {
        "Character": "冠",
        "Pinyin": "guān"
    },
    {
        "Pinyin": "cap, crown, headgear"
    },
    {
        "Character": "衣",
        "Pinyin": "yī"
    },
    {
        "Pinyin": "clothes, clothing; cover, skin"
    },
    {
        "Character": "仅",
        "Pinyin": "jǐn"
    },
    {
        "Pinyin": "only, merely, solely, just"
    },
    {
        "Character": "帐",
        "Pinyin": "zhàng"
    },
    {
        "Pinyin": "tent; screen, mosquito net"
    },
    {
        "Character": "赞",
        "Pinyin": "zàn"
    },
    {
        "Pinyin": "help, support, assist, aid"
    },
    {
        "Character": "购",
        "Pinyin": "gòu"
    },
    {
        "Pinyin": "buy, purchase; hire"
    },
    {
        "Character": "犯",
        "Pinyin": "fàn"
    },
    {
        "Pinyin": "commit crime, violate; criminal"
    },
    {
        "Character": "敬",
        "Pinyin": "jìng"
    },
    {
        "Pinyin": "respect, honor; respectfully"
    },
    {
        "Character": "勇",
        "Pinyin": "yǒng"
    },
    {
        "Pinyin": "brave, courageous, fierce"
    },
    {
        "Character": "洲",
        "Pinyin": "zhōu"
    },
    {
        "Pinyin": "continent; island; islet"
    },
    {
        "Character": "束",
        "Pinyin": "shù"
    },
    {
        "Pinyin": "bind, control, restrain; bale"
    },
    {
        "Character": "斗",
        "Pinyin": "dòu"
    },
    {
        "Pinyin": "struggle, fight, compete, contend"
    },
    {
        "Character": "徒",
        "Pinyin": "tú"
    },
    {
        "Pinyin": "disciple, follower; go on foot"
    },
    {
        "Character": "嘉",
        "Pinyin": "jiā"
    },
    {
        "Pinyin": "excellent; joyful; auspicious"
    },
    {
        "Character": "柔",
        "Pinyin": "róu"
    },
    {
        "Pinyin": "soft; gentle, pliant"
    },
    {
        "Character": "绩",
        "Pinyin": "jī"
    },
    {
        "Pinyin": "spin; achievements"
    },
    {
        "Character": "笨",
        "Pinyin": "bèn"
    },
    {
        "Pinyin": "foolish, stupid, dull; awkward"
    },
    {
        "Character": "拥",
        "Pinyin": "yǒng"
    },
    {
        "Pinyin": "embrace, hug, squeeze; crowd"
    },
    {
        "Character": "漂",
        "Pinyin": "piāo"
    },
    {
        "Pinyin": "float, drift; tossed about"
    },
    {
        "Character": "狮",
        "Pinyin": "shī"
    },
    {
        "Pinyin": "lion"
    },
    {
        "Character": "诗",
        "Pinyin": "shī"
    },
    {
        "Pinyin": "poetry; poem, verse, ode"
    },
    {
        "Character": "围",
        "Pinyin": "wéi"
    },
    {
        "Pinyin": "surround, encircle, corral"
    },
    {
        "Character": "乖",
        "Pinyin": "guāi"
    },
    {
        "Pinyin": "rebel; crafty, shrewd"
    },
    {
        "Character": "孤",
        "Pinyin": "gū"
    },
    {
        "Pinyin": "orphan, fatherless; solitary"
    },
    {
        "Character": "姓",
        "Pinyin": "xìng"
    },
    {
        "Pinyin": "one's family name; clan, people"
    },
    {
        "Character": "吸",
        "Pinyin": "xī"
    },
    {
        "Pinyin": "inhale, suck in; absorb; attract"
    },
    {
        "Character": "私",
        "Pinyin": "sī"
    },
    {
        "Pinyin": "private, personal; secret"
    },
    {
        "Character": "避",
        "Pinyin": "bì"
    },
    {
        "Pinyin": "avoid; turn aside; escape; hide"
    },
    {
        "Character": "范",
        "Pinyin": "fàn"
    },
    {
        "Pinyin": "pattern, model, rule, law"
    },
    {
        "Character": "抗",
        "Pinyin": "kàng"
    },
    {
        "Pinyin": "resist, oppose, defy, reject"
    },
    {
        "Character": "盖",
        "Pinyin": "gài"
    },
    {
        "Pinyin": "cover, hide, protect"
    },
    {
        "Character": "祝",
        "Pinyin": "zhù"
    },
    {
        "Pinyin": "pray for happiness or blessings"
    },
    {
        "Character": "序",
        "Pinyin": "xù"
    },
    {
        "Pinyin": "series, serial order, sequence"
    },
    {
        "Character": "晓",
        "Pinyin": "xiǎo"
    },
    {
        "Pinyin": "dawn, daybreak; clear, explicit"
    },
    {
        "Character": "富",
        "Pinyin": "fù"
    },
    {
        "Pinyin": "abundant, ample; rich, wealthy"
    },
    {
        "Character": "译",
        "Pinyin": "yì"
    },
    {
        "Pinyin": "translate; decode; encode"
    },
    {
        "Character": "巨",
        "Pinyin": "jù"
    },
    {
        "Pinyin": "large, great, enormous; chief"
    },
    {
        "Character": "秀",
        "Pinyin": "xiù"
    },
    {
        "Pinyin": "ear of grain; flowering, luxuriant; refined, elegant, graceful"
    },
    {
        "Character": "馀",
        "Pinyin": "yú"
    },
    {
        "Pinyin": "remainder"
    },
    {
        "Character": "辉",
        "Pinyin": "huī"
    },
    {
        "Pinyin": "brightness, luster, brilliance"
    },
    {
        "Character": "插",
        "Pinyin": "chā"
    },
    {
        "Pinyin": "insert, stick into; plant"
    },
    {
        "Character": "察",
        "Pinyin": "chá"
    },
    {
        "Pinyin": "examine, investigate; notice"
    },
    {
        "Character": "庆",
        "Pinyin": "qìng"
    },
    {
        "Pinyin": "congratulate, celebrate"
    },
    {
        "Character": "积",
        "Pinyin": "jī"
    },
    {
        "Pinyin": "accumulate, store up, amass"
    },
    {
        "Character": "愈",
        "Pinyin": "yù"
    },
    {
        "Pinyin": "more and more, even more"
    },
    {
        "Character": "端",
        "Pinyin": "duān"
    },
    {
        "Pinyin": "end, extreme; head; beginning"
    },
    {
        "Character": "移",
        "Pinyin": "yí"
    },
    {
        "Pinyin": "change place, shift; move about"
    },
    {
        "Character": "宫",
        "Pinyin": "gōng"
    },
    {
        "Pinyin": "palace, temple, dwelling, enclose"
    },
    {
        "Character": "挥",
        "Pinyin": "huī"
    },
    {
        "Pinyin": "direct; wipe away; squander"
    },
    {
        "Character": "爆",
        "Pinyin": "bào"
    },
    {
        "Pinyin": "crackle, pop, burst, explode"
    },
    {
        "Character": "港",
        "Pinyin": "gǎng"
    },
    {
        "Pinyin": "port, harbor; small stream; bay"
    },
    {
        "Character": "雪",
        "Pinyin": "xuě"
    },
    {
        "Pinyin": "snow; wipe away shame, avenge"
    },
    {
        "Character": "硕",
        "Pinyin": "shuò"
    },
    {
        "Pinyin": "great, eminent; large, big"
    },
    {
        "Character": "借",
        "Pinyin": "jiè"
    },
    {
        "Pinyin": "borrow; lend; make pretext of"
    },
    {
        "Character": "帅",
        "Pinyin": "shuài"
    },
    {
        "Pinyin": "commander, commander-in-chief"
    },
    {
        "Character": "丢",
        "Pinyin": "diū"
    },
    {
        "Pinyin": "discard, reject, lose"
    },
    {
        "Character": "括",
        "Pinyin": "guā"
    },
    {
        "Pinyin": "include, embrace, enclose"
    },
    {
        "Character": "挂",
        "Pinyin": "guà"
    },
    {
        "Pinyin": "hang, suspend; suspense"
    },
    {
        "Character": "盘",
        "Pinyin": "pán"
    },
    {
        "Pinyin": "tray, plate, dish; examine"
    },
    {
        "Character": "偶",
        "Pinyin": "ǒu"
    },
    {
        "Pinyin": "accidentally, coincidently; an idol"
    },
    {
        "Character": "末",
        "Pinyin": "mò"
    },
    {
        "Pinyin": "final, last, end; insignificant"
    },
    {
        "Character": "厅",
        "Pinyin": "tīng"
    },
    {
        "Pinyin": "hall, central room"
    },
    {
        "Character": "朱",
        "Pinyin": "zhū"
    },
    {
        "Pinyin": "cinnabar, vermilion; surname"
    },
    {
        "Character": "凡",
        "Pinyin": "fán"
    },
    {
        "Pinyin": "all, any, every; ordinary, common"
    },
    {
        "Character": "惊",
        "Pinyin": "jīng"
    },
    {
        "Pinyin": "frighten, surprise, startle"
    },
    {
        "Character": "货",
        "Pinyin": "huò"
    },
    {
        "Pinyin": "goods, commodities, products"
    },
    {
        "Character": "灭",
        "Pinyin": "miè"
    },
    {
        "Pinyin": "extinguish; wipe out, exterminate"
    },
    {
        "Character": "醒",
        "Pinyin": "xǐng"
    },
    {
        "Pinyin": "wake up; sober up; startle"
    },
    {
        "Character": "虚",
        "Pinyin": "xū"
    },
    {
        "Pinyin": "false, worthless; empty, hollow"
    },
    {
        "Character": "瑞",
        "Pinyin": "ruì"
    },
    {
        "Pinyin": "felicitous omen; auspicious"
    },
    {
        "Character": "拍",
        "Pinyin": "pāi"
    },
    {
        "Pinyin": "clap, tap, beat; beat or rhythm"
    },
    {
        "Character": "遗",
        "Pinyin": "yí"
    },
    {
        "Pinyin": "lose; articles lost; omit"
    },
    {
        "Character": "忠",
        "Pinyin": "zhōng"
    },
    {
        "Pinyin": "loyalty, devotion, fidelity"
    },
    {
        "Character": "志",
        "Pinyin": "zhì"
    },
    {
        "Pinyin": "write down; record; magazine"
    },
    {
        "Character": "透",
        "Pinyin": "tòu"
    },
    {
        "Pinyin": "penetrate, pass through"
    },
    {
        "Character": "烈",
        "Pinyin": "liè"
    },
    {
        "Pinyin": "fiery, violent, vehement, ardent"
    },
    {
        "Character": "银",
        "Pinyin": "yín"
    },
    {
        "Pinyin": "silver; cash, money, wealth"
    },
    {
        "Character": "顶",
        "Pinyin": "dǐng"
    },
    {
        "Pinyin": "top, peak; carry on head; very"
    },
    {
        "Character": "雅",
        "Pinyin": "yǎ"
    },
    {
        "Pinyin": "elegant, graceful, refined"
    },
    {
        "Character": "诺",
        "Pinyin": "nuò"
    },
    {
        "Pinyin": "promise; assent, approve"
    },
    {
        "Character": "圆",
        "Pinyin": "yuán"
    },
    {
        "Pinyin": "circle; round, circular; complete"
    },
    {
        "Character": "熊",
        "Pinyin": "xióng"
    },
    {
        "Pinyin": "a bear; brilliant; bright; surname"
    },
    {
        "Character": "替",
        "Pinyin": "tì"
    },
    {
        "Pinyin": "change, replace, substitute for"
    },
    {
        "Character": "休",
        "Pinyin": "xiū"
    },
    {
        "Pinyin": "rest, stop; retire; do not!"
    },
    {
        "Character": "材",
        "Pinyin": "cái"
    },
    {
        "Pinyin": "material, stuff; timber; talent"
    },
    {
        "Character": "挑",
        "Pinyin": "tiāo"
    },
    {
        "Pinyin": "a load carried on the shoulders; to carry"
    },
    {
        "Character": "侠",
        "Pinyin": "xiá"
    },
    {
        "Pinyin": "chivalrous person; knight-errant"
    },
    {
        "Character": "鸡",
        "Pinyin": "jī"
    },
    {
        "Pinyin": "chicken"
    },
    {
        "Character": "累",
        "Pinyin": "léi"
    },
    {
        "Pinyin": "bind, wind about; link, join"
    },
    {
        "Character": "互",
        "Pinyin": "hù"
    },
    {
        "Pinyin": "mutually, reciprocally"
    },
    {
        "Character": "掌",
        "Pinyin": "zhǎng"
    },
    {
        "Pinyin": "palm of hand, sole of foot, paw"
    },
    {
        "Character": "念",
        "Pinyin": "niàn"
    },
    {
        "Pinyin": "think of, recall, study"
    },
    {
        "Character": "米",
        "Pinyin": "mǐ"
    },
    {
        "Pinyin": "hulled or husked uncooked rice"
    },
    {
        "Character": "伴",
        "Pinyin": "bàn"
    },
    {
        "Pinyin": "companion, comrade, partner; accompany"
    },
    {
        "Character": "辅",
        "Pinyin": "fǔ"
    },
    {
        "Pinyin": "cheek bone; protective; assist"
    },
    {
        "Character": "降",
        "Pinyin": "jiàng"
    },
    {
        "Pinyin": "descend, fall, drop; lower, down"
    },
    {
        "Character": "豪",
        "Pinyin": "háo"
    },
    {
        "Pinyin": "brave, heroic, chivalrous"
    },
    {
        "Character": "篮",
        "Pinyin": "lán"
    },
    {
        "Pinyin": "basket"
    },
    {
        "Character": "洗",
        "Pinyin": "xǐ"
    },
    {
        "Pinyin": "wash, rinse; clean, purify"
    },
    {
        "Character": "健",
        "Pinyin": "jiàn"
    },
    {
        "Pinyin": "strong, robust, healthy; strength"
    },
    {
        "Character": "饭",
        "Pinyin": "fàn"
    },
    {
        "Pinyin": "cooked rice; food; meal"
    },
    {
        "Character": "怜",
        "Pinyin": "lián"
    },
    {
        "Pinyin": "pity, sympathize"
    },
    {
        "Character": "疯",
        "Pinyin": "fēng"
    },
    {
        "Pinyin": "crazy, insane, mentally ill"
    },
    {
        "Character": "宏",
        "Pinyin": "hóng"
    },
    {
        "Pinyin": "wide, spacious, great, vast"
    },
    {
        "Character": "困",
        "Pinyin": "kùn"
    },
    {
        "Pinyin": "be tired, sleepy"
    },
    {
        "Character": "址",
        "Pinyin": "zhǐ"
    },
    {
        "Pinyin": "site, location, land for house"
    },
    {
        "Character": "兮",
        "Pinyin": "xī"
    },
    {
        "Pinyin": "exclamatory particle"
    },
    {
        "Character": "操",
        "Pinyin": "cāo"
    },
    {
        "Pinyin": "conduct, run, control, manage"
    },
    {
        "Character": "临",
        "Pinyin": "lín"
    },
    {
        "Pinyin": "draw near, approach; descend"
    },
    {
        "Character": "骗",
        "Pinyin": "piàn"
    },
    {
        "Pinyin": "swindle, cheat out of, defraud"
    },
    {
        "Character": "咧",
        "Pinyin": "liě"
    },
    {
        "Pinyin": "stretch mouth, grimace, grin"
    },
    {
        "Character": "药",
        "Pinyin": "yào"
    },
    {
        "Pinyin": "drugs, pharmaceuticals, medicine"
    },
    {
        "Character": "绿",
        "Pinyin": "lǖ"
    },
    {
        "Pinyin": "green; chlorine"
    },
    {
        "Character": "尼",
        "Pinyin": "ní"
    },
    {
        "Pinyin": "Buddhist nun; transliteration"
    },
    {
        "Character": "蔡",
        "Pinyin": "cài"
    },
    {
        "Pinyin": "surname; species of tortoise"
    },
    {
        "Character": "玉",
        "Pinyin": "yù"
    },
    {
        "Pinyin": "jade, precious stone, gem"
    },
    {
        "Character": "辛",
        "Pinyin": "xīn"
    },
    {
        "Pinyin": "bitter; toilsome, laborious; 8th heavenly stem"
    },
    {
        "Character": "辈",
        "Pinyin": "bèi"
    },
    {
        "Pinyin": "generation, lifetime; class"
    },
    {
        "Character": "敏",
        "Pinyin": "mǐn"
    },
    {
        "Pinyin": "fast, quick, clever, smart"
    },
    {
        "Character": "减",
        "Pinyin": "jiǎn"
    },
    {
        "Pinyin": "decrease, subtract, diminish"
    },
    {
        "Character": "彼",
        "Pinyin": "bǐ"
    },
    {
        "Pinyin": "that, there, those"
    },
    {
        "Character": "街",
        "Pinyin": "jiē"
    },
    {
        "Pinyin": "street, road, thoroughfare"
    },
    {
        "Character": "聚",
        "Pinyin": "jù"
    },
    {
        "Pinyin": "assemble, meet together, collect"
    },
    {
        "Character": "郎",
        "Pinyin": "láng"
    },
    {
        "Pinyin": "gentleman, young man; husband"
    },
    {
        "Character": "泡",
        "Pinyin": "pào"
    },
    {
        "Pinyin": "bubbles, suds; blister; soak"
    },
    {
        "Character": "恨",
        "Pinyin": "hèn"
    },
    {
        "Pinyin": "hatred, dislike; resent, hate"
    },
    {
        "Character": "苏",
        "Pinyin": "sū"
    },
    {
        "Pinyin": "revive, resurrect; a species of thyme; transliteration of 'Soviet'"
    },
    {
        "Character": "缩",
        "Pinyin": "suō"
    },
    {
        "Pinyin": "contract, draw in, reduce"
    },
    {
        "Character": "枢",
        "Pinyin": "shū"
    },
    {
        "Pinyin": "door hinge; pivot; center of power"
    },
    {
        "Character": "碰",
        "Pinyin": "pèng"
    },
    {
        "Pinyin": "collide, bump into"
    },
    {
        "Character": "采",
        "Pinyin": "cǎi"
    },
    {
        "Pinyin": "gather, collect; pick, select"
    },
    {
        "Character": "默",
        "Pinyin": "mò"
    },
    {
        "Pinyin": "silent; quiet, still; dark"
    },
    {
        "Character": "婆",
        "Pinyin": "pó"
    },
    {
        "Pinyin": "old woman; grandmother"
    },
    {
        "Character": "股",
        "Pinyin": "gǔ"
    },
    {
        "Pinyin": "thighs, haunches, rump; share"
    },
    {
        "Character": "童",
        "Pinyin": "tóng"
    },
    {
        "Pinyin": "child, boy, servant boy; virgin"
    },
    {
        "Character": "符",
        "Pinyin": "fú"
    },
    {
        "Pinyin": "i.d. tag, tally, symbol, charm"
    },
    {
        "Character": "抽",
        "Pinyin": "chōu"
    },
    {
        "Pinyin": "draw out, pull out; sprout"
    },
    {
        "Character": "获",
        "Pinyin": "huò"
    },
    {
        "Pinyin": "harvest, cut grain"
    },
    {
        "Character": "宇",
        "Pinyin": "yǔ"
    },
    {
        "Pinyin": "house; building, structure; eaves"
    },
    {
        "Character": "废",
        "Pinyin": "fèi"
    },
    {
        "Pinyin": "abrogate, terminate, discard"
    },
    {
        "Character": "赢",
        "Pinyin": "yíng"
    },
    {
        "Pinyin": "win; surplus, gain, profit"
    },
    {
        "Character": "肯",
        "Pinyin": "kěn"
    },
    {
        "Pinyin": "willing; consent to, permit"
    },
    {
        "Character": "砍",
        "Pinyin": "kǎn"
    },
    {
        "Pinyin": "hack, chop, cut, fell"
    },
    {
        "Character": "钢",
        "Pinyin": "gāng"
    },
    {
        "Pinyin": "steel; hard, strong, tough"
    },
    {
        "Character": "欧",
        "Pinyin": "ōu"
    },
    {
        "Pinyin": "used in transliterating non-Chinese words such as Europe, ohm; surname"
    },
    {
        "Character": "届",
        "Pinyin": "jiè"
    },
    {
        "Pinyin": "numerary adjunct for time, term"
    },
    {
        "Character": "禁",
        "Pinyin": "jìn"
    },
    {
        "Pinyin": "restrict, prohibit, forbid"
    },
    {
        "Character": "苍",
        "Pinyin": "cāng"
    },
    {
        "Pinyin": "blue; green"
    },
    {
        "Character": "脱",
        "Pinyin": "tuō"
    },
    {
        "Pinyin": "take off, peel off, strip"
    },
    {
        "Character": "渐",
        "Pinyin": "jiàn"
    },
    {
        "Pinyin": "gradually"
    },
    {
        "Character": "仙",
        "Pinyin": "xiān"
    },
    {
        "Pinyin": "Taoist super-being, transcendent, immortal"
    },
    {
        "Character": "泪",
        "Pinyin": "lèi"
    },
    {
        "Pinyin": "tears; weep, cry"
    },
    {
        "Character": "触",
        "Pinyin": "chù"
    },
    {
        "Pinyin": "touch; butt, ram, gore"
    },
    {
        "Character": "途",
        "Pinyin": "tú"
    },
    {
        "Pinyin": "way, road, path, journey; course"
    },
    {
        "Character": "财",
        "Pinyin": "cái"
    },
    {
        "Pinyin": "wealth, valuables, riches"
    },
    {
        "Character": "箱",
        "Pinyin": "xiāng"
    },
    {
        "Pinyin": "case, box, chest, trunk"
    },
    {
        "Character": "厌",
        "Pinyin": "yàn"
    },
    {
        "Pinyin": "dislike, detest, reject; satiate"
    },
    {
        "Character": "籍",
        "Pinyin": "jí"
    },
    {
        "Pinyin": "record, register, list; census"
    },
    {
        "Character": "冰",
        "Pinyin": "bīng"
    },
    {
        "Pinyin": "ice; ice-cold"
    },
    {
        "Character": "涛",
        "Pinyin": "tāo"
    },
    {
        "Pinyin": "large waves"
    },
    {
        "Character": "订",
        "Pinyin": "dìng"
    },
    {
        "Pinyin": "draw up agreement; arrange"
    },
    {
        "Character": "哭",
        "Pinyin": "kū"
    },
    {
        "Pinyin": "weep, cry, wail"
    },
    {
        "Character": "稳",
        "Pinyin": "wěn"
    },
    {
        "Pinyin": "stable, firm, solid, steady"
    },
    {
        "Character": "析",
        "Pinyin": "xī"
    },
    {
        "Pinyin": "split wood; break apart; divide"
    },
    {
        "Character": "杰",
        "Pinyin": "jié"
    },
    {
        "Pinyin": "hero; outstanding, remarkable"
    },
    {
        "Character": "坚",
        "Pinyin": "jiān"
    },
    {
        "Pinyin": "hard, strong, firm; resolute"
    },
    {
        "Character": "桥",
        "Pinyin": "qiáo"
    },
    {
        "Pinyin": "bridge; beam, crosspiece"
    },
    {
        "Character": "懒",
        "Pinyin": "lǎn"
    },
    {
        "Pinyin": "lazy, languid, listless"
    },
    {
        "Character": "贤",
        "Pinyin": "xián"
    },
    {
        "Pinyin": "virtuous, worthy, good; able"
    },
    {
        "Character": "丝",
        "Pinyin": "sī"
    },
    {
        "Pinyin": "silk; fine thread; wire; strings"
    },
    {
        "Character": "露",
        "Pinyin": "lù"
    },
    {
        "Pinyin": "dew; bare, open, exposed"
    },
    {
        "Character": "森",
        "Pinyin": "sēn"
    },
    {
        "Pinyin": "forest; luxuriant vegetation"
    },
    {
        "Character": "危",
        "Pinyin": "wēi"
    },
    {
        "Pinyin": "dangerous, precarious; high"
    },
    {
        "Character": "占",
        "Pinyin": "zhān"
    },
    {
        "Pinyin": "divine; observe; versify"
    },
    {
        "Character": "茶",
        "Pinyin": "chá"
    },
    {
        "Pinyin": "tea"
    },
    {
        "Character": "惯",
        "Pinyin": "guàn"
    },
    {
        "Pinyin": "habit, custom; habitually, usually"
    },
    {
        "Character": "尘",
        "Pinyin": "chén"
    },
    {
        "Pinyin": "dust, dirt, ashes, cinders"
    },
    {
        "Character": "布",
        "Pinyin": "bù"
    },
    {
        "Pinyin": "cotton cloth, textiles, linen"
    },
    {
        "Character": "爸",
        "Pinyin": "bà"
    },
    {
        "Pinyin": "father, papa"
    },
    {
        "Character": "阶",
        "Pinyin": "jiē"
    },
    {
        "Pinyin": "stairs, steps; rank, degree"
    },
    {
        "Character": "夏",
        "Pinyin": "xià"
    },
    {
        "Pinyin": "summer; great, grand, big"
    },
    {
        "Character": "谊",
        "Pinyin": "yí"
    },
    {
        "Pinyin": "friendship; appropriate, suitable"
    },
    {
        "Character": "瓶",
        "Pinyin": "píng"
    },
    {
        "Pinyin": "jug, pitcher, vase, jar, bottle"
    },
    {
        "Character": "哩",
        "Pinyin": "lī"
    },
    {
        "Pinyin": "mile"
    },
    {
        "Character": "惨",
        "Pinyin": "cǎn"
    },
    {
        "Pinyin": "sad, pitiful, wretched; cruel"
    },
    {
        "Character": "械",
        "Pinyin": "jiè"
    },
    {
        "Pinyin": "weapons; implements, instruments"
    },
    {
        "Character": "隐",
        "Pinyin": "yǐn"
    },
    {
        "Pinyin": "hide, conceal; hidden, secret"
    },
    {
        "Character": "丰",
        "Pinyin": "fēng"
    },
    {
        "Pinyin": "abundant, lush, bountiful, plenty"
    },
    {
        "Character": "旅",
        "Pinyin": "lǚ"
    },
    {
        "Pinyin": "trip, journey; travel; traveler"
    },
    {
        "Character": "椰",
        "Pinyin": "yé"
    },
    {
        "Pinyin": "palm tree, coconut palm"
    },
    {
        "Character": "亡",
        "Pinyin": "wáng"
    },
    {
        "Pinyin": "death, destroyed; lose, perish"
    },
    {
        "Character": "汽",
        "Pinyin": "qì"
    },
    {
        "Pinyin": "steam, vapor, gas"
    },
    {
        "Character": "贝",
        "Pinyin": "bèi"
    },
    {
        "Pinyin": "sea shell; money, currency"
    },
    {
        "Character": "娘",
        "Pinyin": "niáng"
    },
    {
        "Pinyin": "mother; young girl; woman; wife"
    },
    {
        "Character": "寒",
        "Pinyin": "hán"
    },
    {
        "Pinyin": "cold, wintry, chilly"
    },
    {
        "Character": "遭",
        "Pinyin": "zāo"
    },
    {
        "Pinyin": "come across, meet with, encounter"
    },
    {
        "Character": "吹",
        "Pinyin": "chuī"
    },
    {
        "Pinyin": "blow; puff; brag, boast"
    },
    {
        "Character": "暑",
        "Pinyin": "shǔ"
    },
    {
        "Pinyin": "hot"
    },
    {
        "Character": "珍",
        "Pinyin": "zhēn"
    },
    {
        "Pinyin": "precious, valuable, rare"
    },
    {
        "Character": "零",
        "Pinyin": "líng"
    },
    {
        "Pinyin": "zero; fragment, fraction"
    },
    {
        "Character": "刊",
        "Pinyin": "kān"
    },
    {
        "Pinyin": "publication, periodical; publish"
    },
    {
        "Character": "邮",
        "Pinyin": "yóu"
    },
    {
        "Pinyin": "postal, mail; post office"
    },
    {
        "Character": "村",
        "Pinyin": "cūn"
    },
    {
        "Pinyin": "village, hamlet; uncouth, vulgar"
    },
    {
        "Character": "乃",
        "Pinyin": "nǎi"
    },
    {
        "Pinyin": "then; really, indeed; as it turned out, after all; namely"
    },
    {
        "Character": "予",
        "Pinyin": "yú"
    },
    {
        "Pinyin": "I, me; to give"
    },
    {
        "Character": "赖",
        "Pinyin": "lài"
    },
    {
        "Pinyin": "rely, depend on; accuse falsely"
    },
    {
        "Character": "摇",
        "Pinyin": "yáo"
    },
    {
        "Pinyin": "wag, swing, wave; shake; scull"
    },
    {
        "Character": "纳",
        "Pinyin": "nà"
    },
    {
        "Pinyin": "admit, take, receive, accept"
    },
    {
        "Character": "烟",
        "Pinyin": "yān"
    },
    {
        "Pinyin": "smoke, soot; opium; tobacco, cigarettes"
    },
    {
        "Character": "伦",
        "Pinyin": "lún"
    },
    {
        "Pinyin": "normal human relationships"
    },
    {
        "Character": "尾",
        "Pinyin": "wěi"
    },
    {
        "Pinyin": "tail, extremity; end, stern"
    },
    {
        "Character": "狼",
        "Pinyin": "láng"
    },
    {
        "Pinyin": "wolf"
    },
    {
        "Character": "浮",
        "Pinyin": "fú"
    },
    {
        "Pinyin": "to float, drift, waft; to exceed; superfluous"
    },
    {
        "Character": "骨",
        "Pinyin": "gǔ"
    },
    {
        "Pinyin": "bone; skeleton; frame, framework"
    },
    {
        "Character": "杯",
        "Pinyin": "bēi"
    },
    {
        "Pinyin": "cup, glass"
    },
    {
        "Character": "隔",
        "Pinyin": "gé"
    },
    {
        "Pinyin": "separate, partition"
    },
    {
        "Character": "洪",
        "Pinyin": "hóng"
    },
    {
        "Pinyin": "vast, immense; flood, deluge"
    },
    {
        "Character": "织",
        "Pinyin": "zhī"
    },
    {
        "Pinyin": "weave, knit; organize, unite"
    },
    {
        "Character": "询",
        "Pinyin": "xún"
    },
    {
        "Pinyin": "inquire into, ask about; consult"
    },
    {
        "Character": "振",
        "Pinyin": "zhèn"
    },
    {
        "Pinyin": "raise, excite, arouse action"
    },
    {
        "Character": "忽",
        "Pinyin": "hū"
    },
    {
        "Pinyin": "suddenly, abruptly; neglect"
    },
    {
        "Character": "索",
        "Pinyin": "suǒ"
    },
    {
        "Pinyin": "large rope, cable; rules, laws; to demand, to exact; to search, inquire; isolated"
    },
    {
        "Character": "惠",
        "Pinyin": "huì"
    },
    {
        "Pinyin": "favor, benefit, confer kindness"
    },
    {
        "Character": "峰",
        "Pinyin": "fēng"
    },
    {
        "Pinyin": "peak, summit; hump of camel"
    },
    {
        "Character": "席",
        "Pinyin": "xí"
    },
    {
        "Pinyin": "seat; mat; take seat; banquet"
    },
    {
        "Character": "喵",
        "Pinyin": "miāo"
    },
    {
        "Pinyin": "the mew of the cat"
    },
    {
        "Character": "胡",
        "Pinyin": "hú"
    },
    {
        "Pinyin": "beard, mustache, whiskers"
    },
    {
        "Character": "租",
        "Pinyin": "zū"
    },
    {
        "Pinyin": "rent, lease; rental; tax"
    },
    {
        "Character": "款",
        "Pinyin": "kuǎn"
    },
    {
        "Pinyin": "item, article; clause; fund"
    },
    {
        "Character": "扰",
        "Pinyin": "rǎo"
    },
    {
        "Pinyin": "disturb, annoy, agitate"
    },
    {
        "Character": "企",
        "Pinyin": "qǐ"
    },
    {
        "Pinyin": "plan a project; stand on tiptoe"
    },
    {
        "Character": "刺",
        "Pinyin": "cì"
    },
    {
        "Pinyin": "stab; prick, irritate; prod"
    },
    {
        "Character": "芳",
        "Pinyin": "fāng"
    },
    {
        "Pinyin": "fragrant; virtuous; beautiful"
    },
    {
        "Character": "鼠",
        "Pinyin": "shǔ"
    },
    {
        "Pinyin": "rat, mouse; KangXi radical 208"
    },
    {
        "Character": "折",
        "Pinyin": "zhé"
    },
    {
        "Pinyin": "break off, snap; bend"
    },
    {
        "Character": "频",
        "Pinyin": "pín"
    },
    {
        "Pinyin": "frequently, again and again"
    },
    {
        "Character": "冒",
        "Pinyin": "mòu"
    },
    {
        "Pinyin": "risk, brave, dare"
    },
    {
        "Character": "痴",
        "Pinyin": "chī"
    },
    {
        "Pinyin": "foolish, stupid, dumb, silly"
    },
    {
        "Character": "阴",
        "Pinyin": "yīn"
    },
    {
        "Pinyin": "'female' principle; dark; secret"
    },
    {
        "Character": "哲",
        "Pinyin": "zhé"
    },
    {
        "Pinyin": "wise, sagacious; wise man, sage"
    },
    {
        "Character": "针",
        "Pinyin": "zhēn"
    },
    {
        "Pinyin": "needle; pin; tack; acupuncture"
    },
    {
        "Character": "伊",
        "Pinyin": "yī"
    },
    {
        "Pinyin": "third person pronoun; he, she, this, that"
    },
    {
        "Character": "寂",
        "Pinyin": "jì"
    },
    {
        "Pinyin": "still, silent, quiet, desolate"
    },
    {
        "Character": "嘴",
        "Pinyin": "zuǐ"
    },
    {
        "Pinyin": "mouth, lips"
    },
    {
        "Character": "倚",
        "Pinyin": "yǐ"
    },
    {
        "Pinyin": "rely on, depend on; lean heavily"
    },
    {
        "Character": "霸",
        "Pinyin": "bà"
    },
    {
        "Pinyin": "rule by might rather than right"
    },
    {
        "Character": "扬",
        "Pinyin": "yáng"
    },
    {
        "Pinyin": "scatter, spread; praise"
    },
    {
        "Character": "沉",
        "Pinyin": "chén"
    },
    {
        "Pinyin": "sink, submerge; addicted to"
    },
    {
        "Character": "悔",
        "Pinyin": "huǐ"
    },
    {
        "Pinyin": "repent, show remorse, regret"
    },
    {
        "Character": "虫",
        "Pinyin": "chóng"
    },
    {
        "Pinyin": "worms; insects"
    },
    {
        "Character": "菜",
        "Pinyin": "cài"
    },
    {
        "Pinyin": "vegetables; dish, order; food"
    },
    {
        "Character": "距",
        "Pinyin": "jù"
    },
    {
        "Pinyin": "distance; bird's spur"
    },
    {
        "Character": "复",
        "Pinyin": "fù"
    },
    {
        "Pinyin": "cover; tip over; return; reply"
    },
    {
        "Character": "鼓",
        "Pinyin": "gǔ"
    },
    {
        "Pinyin": "drum; beat, top, strike"
    },
    {
        "Character": "摩",
        "Pinyin": "mó"
    },
    {
        "Pinyin": "rub, scour, grind; friction"
    },
    {
        "Character": "郑",
        "Pinyin": "zhèng"
    },
    {
        "Pinyin": "state in today's Henan; surname"
    },
    {
        "Character": "庄",
        "Pinyin": "zhuāng"
    },
    {
        "Pinyin": "village, hamlet; villa; surname"
    },
    {
        "Character": "副",
        "Pinyin": "fù"
    },
    {
        "Pinyin": "assist; supplement; assistant"
    },
    {
        "Character": "页",
        "Pinyin": "yè"
    },
    {
        "Pinyin": "page, sheet, leaf; rad. no. 181"
    },
    {
        "Character": "烧",
        "Pinyin": "shāo"
    },
    {
        "Pinyin": "burn; bake; heat; roast"
    },
    {
        "Character": "弱",
        "Pinyin": "ruò"
    },
    {
        "Pinyin": "weak; fragile, delicate"
    },
    {
        "Character": "暂",
        "Pinyin": "zàn"
    },
    {
        "Pinyin": "temporary"
    },
    {
        "Character": "剩",
        "Pinyin": "shèng"
    },
    {
        "Pinyin": "leftovers, residue, remains"
    },
    {
        "Character": "豆",
        "Pinyin": "dòu"
    },
    {
        "Pinyin": "beans, peas; bean-shaped"
    },
    {
        "Character": "探",
        "Pinyin": "tàn"
    },
    {
        "Pinyin": "find, locate; search, grope for"
    },
    {
        "Character": "耐",
        "Pinyin": "nài"
    },
    {
        "Pinyin": "endure, bear; resist; patient"
    },
    {
        "Character": "祖",
        "Pinyin": "zǔ"
    },
    {
        "Pinyin": "ancestor, forefather; grandfather"
    },
    {
        "Character": "遍",
        "Pinyin": "biàn"
    },
    {
        "Pinyin": "everywhere, all over, throughout"
    },
    {
        "Character": "萧",
        "Pinyin": "xiāo"
    },
    {
        "Pinyin": "common artemisia; soughing of wind > mournful; dejected"
    },
    {
        "Character": "握",
        "Pinyin": "wò"
    },
    {
        "Pinyin": "grasp, hold fast, take by hand"
    },
    {
        "Character": "愁",
        "Pinyin": "chóu"
    },
    {
        "Pinyin": "anxiety; to worry about, be anxious"
    },
    {
        "Character": "龟",
        "Pinyin": "guī"
    },
    {
        "Pinyin": "turtle or tortoise; cuckold"
    },
    {
        "Character": "哀",
        "Pinyin": "āi"
    },
    {
        "Pinyin": "sad, mournful, pitiful; pity"
    },
    {
        "Character": "发",
        "Pinyin": "fǎ"
    },
    {
        "Pinyin": "hair"
    },
    {
        "Character": "延",
        "Pinyin": "yán"
    },
    {
        "Pinyin": "delay, postpone, defer"
    },
    {
        "Character": "库",
        "Pinyin": "kù"
    },
    {
        "Pinyin": "armory, treasury, storehouse"
    },
    {
        "Character": "隆",
        "Pinyin": "lóng"
    },
    {
        "Pinyin": "prosperous, plentiful, abundant"
    },
    {
        "Character": "盟",
        "Pinyin": "méng"
    },
    {
        "Pinyin": "swear; oath, covenant, alliance"
    },
    {
        "Character": "傻",
        "Pinyin": "shǎ"
    },
    {
        "Pinyin": "foolish, silly, stupid; an imbecile"
    },
    {
        "Character": "眉",
        "Pinyin": "méi"
    },
    {
        "Pinyin": "eyebrows; upper margin of book"
    },
    {
        "Character": "固",
        "Pinyin": "gù"
    },
    {
        "Pinyin": "to become solid, solidify; strength"
    },
    {
        "Character": "秘",
        "Pinyin": "mì"
    },
    {
        "Pinyin": "secret, mysterious, abstruse"
    },
    {
        "Character": "卷",
        "Pinyin": "juàn"
    },
    {
        "Pinyin": "scroll; curl; make a comeback"
    },
    {
        "Character": "搭",
        "Pinyin": "dā"
    },
    {
        "Pinyin": "join together, attach to; add to"
    },
    {
        "Character": "昭",
        "Pinyin": "zhāo"
    },
    {
        "Pinyin": "bright, luminous; illustrious"
    },
    {
        "Character": "宁",
        "Pinyin": "zhù"
    },
    {
        "Pinyin": "repose, serenity, peace; peaceful"
    },
    {
        "Character": "托",
        "Pinyin": "tuō"
    },
    {
        "Pinyin": "to hold up with palm; to support, rely on"
    },
    {
        "Character": "辩",
        "Pinyin": "biàn"
    },
    {
        "Pinyin": "dispute, argue, debate, discuss"
    },
    {
        "Character": "复",
        "Pinyin": "fù"
    },
    {
        "Pinyin": "cover; tip over; return; reply"
    },
    {
        "Character": "吵",
        "Pinyin": "chǎo"
    },
    {
        "Pinyin": "argue, dispute; disturb, annoy"
    },
    {
        "Character": "耳",
        "Pinyin": "ěr"
    },
    {
        "Pinyin": "ear; merely, only; handle"
    },
    {
        "Character": "閒",
        "Pinyin": "xián"
    },
    {
        "Pinyin": "peaceful, tranquil, calm"
    },
    {
        "Character": "拨",
        "Pinyin": "bō"
    },
    {
        "Pinyin": "move; dispel; distribute; plectrum, play stringed instrument"
    },
    {
        "Character": "沈",
        "Pinyin": "shěn"
    },
    {
        "Pinyin": "juice; liquid; water; leak, pour"
    },
    {
        "Character": "升",
        "Pinyin": "shēng"
    },
    {
        "Pinyin": "arise, go up; hoist; advance"
    },
    {
        "Character": "胖",
        "Pinyin": "pàng"
    },
    {
        "Pinyin": "fat, obese; fatty"
    },
    {
        "Character": "丁",
        "Pinyin": "dīng"
    },
    {
        "Pinyin": "male adult; robust, vigorous; 4th heavenly stem"
    },
    {
        "Character": "妙",
        "Pinyin": "miào"
    },
    {
        "Pinyin": "mysterious, subtle; exquisite"
    },
    {
        "Character": "残",
        "Pinyin": "cán"
    },
    {
        "Pinyin": "injure, spoil; oppress; broken"
    },
    {
        "Character": "违",
        "Pinyin": "wéi"
    },
    {
        "Pinyin": "disobey, violate, defy; be apart from"
    },
    {
        "Character": "稍",
        "Pinyin": "shāo"
    },
    {
        "Pinyin": "little, slightly; rather"
    },
    {
        "Character": "媒",
        "Pinyin": "méi"
    },
    {
        "Pinyin": "go-between, matchmaker; medium"
    },
    {
        "Character": "忧",
        "Pinyin": "yōu"
    },
    {
        "Pinyin": "sad, grieved; grief, melancholy"
    },
    {
        "Character": "销",
        "Pinyin": "xiāo"
    },
    {
        "Pinyin": "melt, fuse; market, sell; to pass time, finish, cancel"
    },
    {
        "Character": "恩",
        "Pinyin": "ēn"
    },
    {
        "Pinyin": "kindness, mercy, charity"
    },
    {
        "Character": "颜",
        "Pinyin": "yán"
    },
    {
        "Pinyin": "face, facial appearance"
    },
    {
        "Character": "船",
        "Pinyin": "chuán"
    },
    {
        "Pinyin": "ship, boat, vessel"
    },
    {
        "Character": "奈",
        "Pinyin": "nài"
    },
    {
        "Pinyin": "but, how; bear, stand, endure"
    },
    {
        "Character": "映",
        "Pinyin": "yìng"
    },
    {
        "Pinyin": "project; reflect light"
    },
    {
        "Character": "井",
        "Pinyin": "jǐng"
    },
    {
        "Pinyin": "well, mine shaft, pit"
    },
    {
        "Character": "拼",
        "Pinyin": "pīn"
    },
    {
        "Pinyin": "join together, link, incorporate"
    },
    {
        "Character": "屋",
        "Pinyin": "wū"
    },
    {
        "Pinyin": "house; room; building, shelter"
    },
    {
        "Character": "乘",
        "Pinyin": "chéng"
    },
    {
        "Pinyin": "ride, ascend; avail oneself of; numerary adjunct for vehicles"
    },
    {
        "Character": "京",
        "Pinyin": "jīng"
    },
    {
        "Pinyin": "capital city"
    },
    {
        "Character": "藉",
        "Pinyin": "jiè"
    },
    {
        "Pinyin": "mat, pad; rely on; pretext"
    },
    {
        "Character": "洞",
        "Pinyin": "dòng"
    },
    {
        "Pinyin": "cave, grotto; ravine; hole"
    },
    {
        "Character": "川",
        "Pinyin": "chuān"
    },
    {
        "Pinyin": "stream, river; flow; boil"
    },
    {
        "Character": "宪",
        "Pinyin": "xiàn"
    },
    {
        "Pinyin": "constitution, statute, law"
    },
    {
        "Character": "拟",
        "Pinyin": "nǐ"
    },
    {
        "Pinyin": "draft; intend, plan, propose"
    },
    {
        "Character": "寝",
        "Pinyin": "qǐn"
    },
    {
        "Pinyin": "sleep, rest; bed chamber"
    },
    {
        "Character": "塞",
        "Pinyin": "sāi"
    },
    {
        "Pinyin": "stop up, block, seal, cork; pass, frontier; fortress"
    },
    {
        "Character": "倍",
        "Pinyin": "bèi"
    },
    {
        "Pinyin": "times, fold, multiple times"
    },
    {
        "Character": "户",
        "Pinyin": "hù"
    },
    {
        "Pinyin": "door; family, household"
    },
    {
        "Character": "摆",
        "Pinyin": "bǎi"
    },
    {
        "Pinyin": "put, place; display; swing, sway"
    },
    {
        "Character": "桌",
        "Pinyin": "zhuō"
    },
    {
        "Pinyin": "table, desk, stand"
    },
    {
        "Character": "域",
        "Pinyin": "yù"
    },
    {
        "Pinyin": "district, region, boundary; land"
    },
    {
        "Character": "劳",
        "Pinyin": "láo"
    },
    {
        "Pinyin": "labor, toil, do manual work"
    },
    {
        "Character": "赚",
        "Pinyin": "zhuàn"
    },
    {
        "Pinyin": "make money, earn; gain, profit"
    },
    {
        "Character": "皇",
        "Pinyin": "huáng"
    },
    {
        "Pinyin": "royal, imperial; ruler, superior"
    },
    {
        "Character": "逃",
        "Pinyin": "táo"
    },
    {
        "Pinyin": "escape, flee; abscond, dodge"
    },
    {
        "Character": "鸿",
        "Pinyin": "hóng"
    },
    {
        "Pinyin": "species of wild swan; vast"
    },
    {
        "Character": "横",
        "Pinyin": "héng"
    },
    {
        "Pinyin": "across, horizontal, lateral"
    },
    {
        "Character": "牙",
        "Pinyin": "yá"
    },
    {
        "Pinyin": "tooth, molars, teeth; serrated"
    },
    {
        "Character": "拖",
        "Pinyin": "tuō"
    },
    {
        "Pinyin": "drag, tow, haul; delay, prolong"
    },
    {
        "Character": "齐",
        "Pinyin": "qí"
    },
    {
        "Pinyin": "even, uniform, of equal length"
    },
    {
        "Character": "农",
        "Pinyin": "nóng"
    },
    {
        "Pinyin": "agriculture, farming; farmer"
    },
    {
        "Character": "滚",
        "Pinyin": "gǔn"
    },
    {
        "Pinyin": "turn, roll, rotate; boil"
    },
    {
        "Character": "障",
        "Pinyin": "zhàng"
    },
    {
        "Pinyin": "separate; shield; barricade"
    },
    {
        "Character": "搬",
        "Pinyin": "bān"
    },
    {
        "Pinyin": "transfer, move, remove, shift"
    },
    {
        "Character": "奶",
        "Pinyin": "nǎi"
    },
    {
        "Pinyin": "milk; woman's breasts; nurse"
    },
    {
        "Character": "乌",
        "Pinyin": "wū"
    },
    {
        "Pinyin": "crow, rook, raven; black, dark"
    },
    {
        "Character": "了",
        "Pinyin": "liǎo"
    },
    {
        "Pinyin": "to finish; particle of completed action"
    },
    {
        "Character": "松",
        "Pinyin": "sōng"
    },
    {
        "Pinyin": "lax, loose; loosen, relax"
    },
    {
        "Character": "戴",
        "Pinyin": "dài"
    },
    {
        "Pinyin": "wear on top; support"
    },
    {
        "Character": "谱",
        "Pinyin": "pǔ"
    },
    {
        "Pinyin": "register, list, table; musical score"
    },
    {
        "Character": "酷",
        "Pinyin": "kù"
    },
    {
        "Pinyin": "strong, stimulating; very"
    },
    {
        "Character": "棋",
        "Pinyin": "qí"
    },
    {
        "Pinyin": "chess; any game similar to chess"
    },
    {
        "Character": "吓",
        "Pinyin": "xià"
    },
    {
        "Pinyin": "scare, frighten; intimidate"
    },
    {
        "Character": "摸",
        "Pinyin": "mō"
    },
    {
        "Pinyin": "gently touch with hand; caress"
    },
    {
        "Character": "额",
        "Pinyin": "é"
    },
    {
        "Pinyin": "forehead; tablet, plaque; fixed"
    },
    {
        "Character": "瓜",
        "Pinyin": "guā"
    },
    {
        "Pinyin": "melon, gourd, cucumber; rad. 97"
    },
    {
        "Character": "役",
        "Pinyin": "yì"
    },
    {
        "Pinyin": "service; a servant, laborer; to serve"
    },
    {
        "Character": "怨",
        "Pinyin": "yuàn"
    },
    {
        "Pinyin": "hatred, enmity, resentment"
    },
    {
        "Character": "染",
        "Pinyin": "rǎn"
    },
    {
        "Pinyin": "dye; be contagious; infect"
    },
    {
        "Character": "迫",
        "Pinyin": "pò"
    },
    {
        "Pinyin": "coerce, force, compel; urgent"
    },
    {
        "Character": "醉",
        "Pinyin": "zuì"
    },
    {
        "Pinyin": "intoxicated, drunk; addicted to"
    },
    {
        "Character": "锁",
        "Pinyin": "suǒ"
    },
    {
        "Pinyin": "lock, padlock; shackles, chains"
    },
    {
        "Character": "震",
        "Pinyin": "zhèn"
    },
    {
        "Pinyin": "shake, quake, tremor; excite"
    },
    {
        "Character": "床",
        "Pinyin": "chuáng"
    },
    {
        "Pinyin": "bed, couch; framework, chassis"
    },
    {
        "Character": "闹",
        "Pinyin": "nào"
    },
    {
        "Pinyin": "quarrel; dispute hotly"
    },
    {
        "Character": "佩",
        "Pinyin": "pèi"
    },
    {
        "Pinyin": "belt ornament, pendant; wear at waist, tie to the belt; respect"
    },
    {
        "Character": "牠",
        "Pinyin": "tuō"
    },
    {
        "Pinyin": "it; polled cattle"
    },
    {
        "Character": "徐",
        "Pinyin": "xú"
    },
    {
        "Pinyin": "slowly, quietly, calmly; composed, dignified"
    },
    {
        "Character": "尺",
        "Pinyin": "chǐ"
    },
    {
        "Pinyin": "Chinese measure approx. 'foot'"
    },
    {
        "Character": "干",
        "Pinyin": "gàn"
    },
    {
        "Pinyin": "trunk of tree or of human body"
    },
    {
        "Character": "潮",
        "Pinyin": "cháo"
    },
    {
        "Pinyin": "tide; moist, wet, damp; flow"
    },
    {
        "Character": "帽",
        "Pinyin": "mào"
    },
    {
        "Pinyin": "hat, cap; cap-like tops"
    },
    {
        "Character": "盛",
        "Pinyin": "shèng"
    },
    {
        "Pinyin": "abundant, flourishing; contain; fill"
    },
    {
        "Character": "孙",
        "Pinyin": "sūn"
    },
    {
        "Pinyin": "grandchild, descendent; surname"
    },
    {
        "Character": "屁",
        "Pinyin": "pì"
    },
    {
        "Pinyin": "break wind; fart; buttocks"
    },
    {
        "Character": "净",
        "Pinyin": "jìng"
    },
    {
        "Pinyin": "clean, pure; cleanse"
    },
    {
        "Character": "凯",
        "Pinyin": "kǎi"
    },
    {
        "Pinyin": "triumphant; triumph, victory"
    },
    {
        "Character": "撞",
        "Pinyin": "zhuàng"
    },
    {
        "Pinyin": "knock against, bump into, collide"
    },
    {
        "Character": "迴",
        "Pinyin": "huí"
    },
    {
        "Pinyin": "revolve, rotate; curving, zigzag"
    },
    {
        "Character": "损",
        "Pinyin": "sǔn"
    },
    {
        "Pinyin": "diminish; impair; injure"
    },
    {
        "Character": "伙",
        "Pinyin": "huǒ"
    },
    {
        "Pinyin": "companion, colleague; utensils"
    },
    {
        "Character": "牵",
        "Pinyin": "qiān"
    },
    {
        "Pinyin": "drag, pull, lead by hand"
    },
    {
        "Character": "厉",
        "Pinyin": "lì"
    },
    {
        "Pinyin": "whetstone; grind, sharpen; whet"
    },
    {
        "Character": "惑",
        "Pinyin": "huò"
    },
    {
        "Pinyin": "confuse, mislead, baffle; doubt"
    },
    {
        "Character": "羊",
        "Pinyin": "yáng"
    },
    {
        "Pinyin": "sheep, goat; KangXi radical 123"
    },
    {
        "Character": "冬",
        "Pinyin": "dōng"
    },
    {
        "Pinyin": "winter, 11th lunar month"
    },
    {
        "Character": "桃",
        "Pinyin": "táo"
    },
    {
        "Pinyin": "peach; marriage; surname"
    },
    {
        "Character": "舰",
        "Pinyin": "jiàn"
    },
    {
        "Pinyin": "warship"
    },
    {
        "Character": "眠",
        "Pinyin": "mián"
    },
    {
        "Pinyin": "close eyes, sleep; hibernate"
    },
    {
        "Character": "伍",
        "Pinyin": "wǔ"
    },
    {
        "Pinyin": "five, company of five; troops"
    },
    {
        "Character": "溪",
        "Pinyin": "xī"
    },
    {
        "Pinyin": "mountain stream, creek"
    },
    {
        "Character": "飘",
        "Pinyin": "piāo"
    },
    {
        "Pinyin": "whirlwind, cyclone; floating"
    },
    {
        "Character": "泰",
        "Pinyin": "tài"
    },
    {
        "Pinyin": "great, exalted, superior; big"
    },
    {
        "Character": "宋",
        "Pinyin": "sòng"
    },
    {
        "Pinyin": "Song dynasty; surname"
    },
    {
        "Character": "圈",
        "Pinyin": "quān"
    },
    {
        "Pinyin": "to circle; a circle; corral"
    },
    {
        "Character": "竞",
        "Pinyin": "jìng"
    },
    {
        "Pinyin": "contend, vie, compete"
    },
    {
        "Character": "闪",
        "Pinyin": "shǎn"
    },
    {
        "Pinyin": "flash; avoid, dodge, evade"
    },
    {
        "Character": "纵",
        "Pinyin": "zòng"
    },
    {
        "Pinyin": "indulge in, give free reign to"
    },
    {
        "Character": "崇",
        "Pinyin": "chóng"
    },
    {
        "Pinyin": "esteem, honor, revere, venerate"
    },
    {
        "Character": "滑",
        "Pinyin": "huá"
    },
    {
        "Pinyin": "slip, slide; slippery, polished"
    },
    {
        "Character": "乙",
        "Pinyin": "yǐ"
    },
    {
        "Pinyin": "second; 2nd heavenly stem"
    },
    {
        "Character": "俗",
        "Pinyin": "sú"
    },
    {
        "Pinyin": "social customs; vulgar, unrefined"
    },
    {
        "Character": "浅",
        "Pinyin": "qiǎn"
    },
    {
        "Pinyin": "shallow, not deep; superficial"
    },
    {
        "Character": "莲",
        "Pinyin": "lián"
    },
    {
        "Pinyin": "lotus, water lily; paradise"
    },
    {
        "Character": "紫",
        "Pinyin": "zǐ"
    },
    {
        "Pinyin": "purple, violet; amethyst; surname"
    },
    {
        "Character": "沟",
        "Pinyin": "gōu"
    },
    {
        "Pinyin": "ditch, drain, narrow waterway"
    },
    {
        "Character": "旋",
        "Pinyin": "xuán"
    },
    {
        "Pinyin": "revolve, move in orbit; return"
    },
    {
        "Character": "摄",
        "Pinyin": "shè"
    },
    {
        "Pinyin": "take in, absorb; act as deputy; administer, assist"
    },
    {
        "Character": "聪",
        "Pinyin": "cōng"
    },
    {
        "Pinyin": "intelligent, clever, bright"
    },
    {
        "Character": "毁",
        "Pinyin": "huǐ"
    },
    {
        "Pinyin": "destroy, ruin, injure; slander"
    },
    {
        "Character": "庭",
        "Pinyin": "tíng"
    },
    {
        "Pinyin": "courtyard; spacious hall or yard"
    },
    {
        "Character": "麦",
        "Pinyin": "mài"
    },
    {
        "Pinyin": "wheat, barley, oats; KangXi radical number 199"
    },
    {
        "Character": "描",
        "Pinyin": "miáo"
    },
    {
        "Pinyin": "copy, trace, sketch; depict"
    },
    {
        "Character": "妨",
        "Pinyin": "fáng"
    },
    {
        "Pinyin": "interfere with, impede, obstruct"
    },
    {
        "Character": "勒",
        "Pinyin": "lè"
    },
    {
        "Pinyin": "strangle, tighten"
    },
    {
        "Character": "仪",
        "Pinyin": "yí"
    },
    {
        "Pinyin": "ceremony, rites gifts; admire"
    },
    {
        "Character": "陪",
        "Pinyin": "péi"
    },
    {
        "Pinyin": "accompany, be with, keep company"
    },
    {
        "Character": "榜",
        "Pinyin": "bǎng"
    },
    {
        "Pinyin": "placard; list of successful exam candidates"
    },
    {
        "Character": "板",
        "Pinyin": "bǎn"
    },
    {
        "Pinyin": "boss, the owner, person in charge"
    },
    {
        "Character": "慕",
        "Pinyin": "mù"
    },
    {
        "Pinyin": "long for, desire; admire"
    },
    {
        "Character": "耀",
        "Pinyin": "yào"
    },
    {
        "Pinyin": "shine, sparkle, dazzle; glory"
    },
    {
        "Character": "献",
        "Pinyin": "xiàn"
    },
    {
        "Pinyin": "offer, present; show, display"
    },
    {
        "Character": "审",
        "Pinyin": "shěn"
    },
    {
        "Pinyin": "examine, investigate; judge"
    },
    {
        "Character": "蟹",
        "Pinyin": "xiè"
    },
    {
        "Pinyin": "crab, brachyura"
    },
    {
        "Character": "巷",
        "Pinyin": "xiàng"
    },
    {
        "Pinyin": "alley, lane"
    },
    {
        "Character": "谅",
        "Pinyin": "liàng"
    },
    {
        "Pinyin": "excuse, forgive; guess, presume"
    },
    {
        "Character": "姊",
        "Pinyin": "zǐ"
    },
    {
        "Pinyin": "elder sister"
    },
    {
        "Character": "逐",
        "Pinyin": "zhú"
    },
    {
        "Pinyin": "chase, expel; one by one"
    },
    {
        "Character": "踏",
        "Pinyin": "tà"
    },
    {
        "Pinyin": "step on, trample, tread on, walk"
    },
    {
        "Character": "岸",
        "Pinyin": "àn"
    },
    {
        "Pinyin": "bank, shore; beach, coast"
    },
    {
        "Character": "葛",
        "Pinyin": "gě"
    },
    {
        "Pinyin": "edible bean; surname"
    },
    {
        "Character": "卧",
        "Pinyin": "wò"
    },
    {
        "Pinyin": "lie down; crouch"
    },
    {
        "Character": "洽",
        "Pinyin": "qià"
    },
    {
        "Pinyin": "to blend with, be in harmony; to penetrate; to cover; a river in Shenxi"
    },
    {
        "Character": "寞",
        "Pinyin": "mò"
    },
    {
        "Pinyin": "silent, still, lonely, solitary"
    },
    {
        "Character": "邦",
        "Pinyin": "bāng"
    },
    {
        "Pinyin": "nation, country, state"
    },
    {
        "Character": "藤",
        "Pinyin": "téng"
    },
    {
        "Pinyin": "rattan, cane; creeper plant"
    },
    {
        "Character": "拳",
        "Pinyin": "quán"
    },
    {
        "Pinyin": "fist; various forms of boxing"
    },
    {
        "Character": "阻",
        "Pinyin": "zǔ"
    },
    {
        "Pinyin": "impede, hinder, obstruct; oppose"
    },
    {
        "Character": "蝎",
        "Pinyin": "hé"
    },
    {
        "Pinyin": "scorpion"
    },
    {
        "Character": "面",
        "Pinyin": "miàn"
    },
    {
        "Pinyin": "flour, dough, noodles"
    },
    {
        "Character": "殊",
        "Pinyin": "shū"
    },
    {
        "Pinyin": "different, special, unusual"
    },
    {
        "Character": "凭",
        "Pinyin": "píng"
    },
    {
        "Pinyin": "lean on, depend on, rely on"
    },
    {
        "Character": "拒",
        "Pinyin": "jù"
    },
    {
        "Pinyin": "ward off with hand, defend"
    },
    {
        "Character": "池",
        "Pinyin": "chí"
    },
    {
        "Pinyin": "pool, pond; moat; cistern"
    },
    {
        "Character": "邪",
        "Pinyin": "xié"
    },
    {
        "Pinyin": "wrong, evil, depraved, vicious, perverse, heterodox"
    },
    {
        "Character": "航",
        "Pinyin": "háng"
    },
    {
        "Pinyin": "sail; navigate; ship, boat"
    },
    {
        "Character": "驱",
        "Pinyin": "qū"
    },
    {
        "Pinyin": "spur a horse on; expel, drive away"
    },
    {
        "Character": "裁",
        "Pinyin": "cái"
    },
    {
        "Pinyin": "cut out; decrease"
    },
    {
        "Character": "翔",
        "Pinyin": "xiáng"
    },
    {
        "Pinyin": "soar, glide, hover; detailed"
    },
    {
        "Character": "填",
        "Pinyin": "tián"
    },
    {
        "Pinyin": "fill in, fill up; make good"
    },
    {
        "Character": "奥",
        "Pinyin": "ào"
    },
    {
        "Pinyin": "mysterious, obscure, profound"
    },
    {
        "Character": "函",
        "Pinyin": "hán"
    },
    {
        "Pinyin": "correspondence; a case; a box"
    },
    {
        "Character": "镇",
        "Pinyin": "zhèn"
    },
    {
        "Pinyin": "town, market place; suppress"
    },
    {
        "Character": "丌",
        "Pinyin": "jī"
    },
    {
        "Pinyin": "table"
    },
    {
        "Character": "宽",
        "Pinyin": "kuān"
    },
    {
        "Pinyin": "broad, wide; spacious, vast"
    },
    {
        "Character": "颇",
        "Pinyin": "pǒ"
    },
    {
        "Pinyin": "lean one side; very, rather"
    },
    {
        "Character": "枪",
        "Pinyin": "qiāng"
    },
    {
        "Pinyin": "spear, lance; gun, rifle"
    },
    {
        "Character": "遥",
        "Pinyin": "yáo"
    },
    {
        "Pinyin": "far away, distant, remote"
    },
    {
        "Character": "穹",
        "Pinyin": "qiōng"
    },
    {
        "Pinyin": "high and vast; elevated; arched"
    },
    {
        "Character": "啪",
        "Pinyin": "pā"
    },
    {
        "Pinyin": "syllable"
    },
    {
        "Character": "阅",
        "Pinyin": "yuè"
    },
    {
        "Pinyin": "examine"
    },
    {
        "Character": "锋",
        "Pinyin": "fēng"
    },
    {
        "Pinyin": "point of spear, sharp point"
    },
    {
        "Character": "砂",
        "Pinyin": "shā"
    },
    {
        "Pinyin": "sand; pebbles, gravel; gritty"
    },
    {
        "Character": "恭",
        "Pinyin": "gōng"
    },
    {
        "Pinyin": "respectful, polite, reverent"
    },
    {
        "Character": "塔",
        "Pinyin": "tǎ"
    },
    {
        "Pinyin": "tower, spire, tall building"
    },
    {
        "Character": "贺",
        "Pinyin": "hè"
    },
    {
        "Pinyin": "congratulate; send present"
    },
    {
        "Character": "魂",
        "Pinyin": "hún"
    },
    {
        "Pinyin": "soul, spirit"
    },
    {
        "Character": "睛",
        "Pinyin": "jīng"
    },
    {
        "Pinyin": "eyeball; pupil of eye"
    },
    {
        "Character": "逸",
        "Pinyin": "yì"
    },
    {
        "Pinyin": "flee, escape, break loose"
    },
    {
        "Character": "旗",
        "Pinyin": "qí"
    },
    {
        "Pinyin": "banner, flag, streamer"
    },
    {
        "Character": "萨",
        "Pinyin": "sà"
    },
    {
        "Pinyin": "transliteration of 'sat' in 'bodhisattva,' etc."
    },
    {
        "Character": "丸",
        "Pinyin": "wán"
    },
    {
        "Pinyin": "small round object; pellet, pill"
    },
    {
        "Character": "厚",
        "Pinyin": "hòu"
    },
    {
        "Pinyin": "thick; substantial; greatly"
    },
    {
        "Character": "斋",
        "Pinyin": "zhāi"
    },
    {
        "Pinyin": "vegetarian diet; study; to fast, abstain"
    },
    {
        "Character": "芬",
        "Pinyin": "fēn"
    },
    {
        "Pinyin": "fragrance, aroma; perfume"
    },
    {
        "Character": "革",
        "Pinyin": "gé"
    },
    {
        "Pinyin": "leather, animal hides; rad. 177"
    },
    {
        "Character": "庸",
        "Pinyin": "yōng"
    },
    {
        "Pinyin": "usual, common, ordinary, mediocre"
    },
    {
        "Character": "舒",
        "Pinyin": "shū"
    },
    {
        "Pinyin": "open up, unfold, stretch out; comfortable, easy"
    },
    {
        "Character": "饮",
        "Pinyin": "yǐn"
    },
    {
        "Pinyin": "drink; swallow; kind of drink"
    },
    {
        "Character": "闭",
        "Pinyin": "bì"
    },
    {
        "Pinyin": "shut, close; obstruct, block up"
    },
    {
        "Character": "励",
        "Pinyin": "lì"
    },
    {
        "Pinyin": "strive; encourage"
    },
    {
        "Character": "顿",
        "Pinyin": "dùn"
    },
    {
        "Pinyin": "pause, stop; bow, kowtow; arrange"
    },
    {
        "Character": "仰",
        "Pinyin": "yǎng"
    },
    {
        "Pinyin": "raise the head to look; look up to, rely on, admire"
    },
    {
        "Character": "阁",
        "Pinyin": "gé"
    },
    {
        "Pinyin": "chamber, pavilion; cabinet"
    },
    {
        "Character": "孟",
        "Pinyin": "mèng"
    },
    {
        "Pinyin": "first in series; great, eminent"
    },
    {
        "Character": "昌",
        "Pinyin": "chāng"
    },
    {
        "Pinyin": "light of sun; good, proper"
    },
    {
        "Character": "访",
        "Pinyin": "fǎng"
    },
    {
        "Pinyin": "visit; ask, inquire"
    },
    {
        "Character": "绪",
        "Pinyin": "xù"
    },
    {
        "Pinyin": "end of thread; thread"
    },
    {
        "Character": "裕",
        "Pinyin": "yù"
    },
    {
        "Pinyin": "abundant, rich, plentiful"
    },
    {
        "Character": "勿",
        "Pinyin": "wù"
    },
    {
        "Pinyin": "must not, do not; without, never"
    },
    {
        "Character": "州",
        "Pinyin": "zhōu"
    },
    {
        "Pinyin": "administrative division, state"
    },
    {
        "Character": "阐",
        "Pinyin": "chǎn"
    },
    {
        "Pinyin": "explain, clarify, elucidate"
    },
    {
        "Character": "抢",
        "Pinyin": "qiǎng"
    },
    {
        "Pinyin": "plunder, rob, take by force"
    },
    {
        "Character": "扫",
        "Pinyin": "sǎo"
    },
    {
        "Pinyin": "sweep, clear away; exterminate"
    },
    {
        "Character": "糊",
        "Pinyin": "hú"
    },
    {
        "Pinyin": "paste, stick on with paste"
    },
    {
        "Character": "宙",
        "Pinyin": "zhòu"
    },
    {
        "Pinyin": "time as concept; infinite time"
    },
    {
        "Character": "尝",
        "Pinyin": "cháng"
    },
    {
        "Pinyin": "taste; experience, experiment"
    },
    {
        "Character": "菩",
        "Pinyin": "pú"
    },
    {
        "Pinyin": "herb, aromatic plant"
    },
    {
        "Character": "赐",
        "Pinyin": "sì"
    },
    {
        "Pinyin": "give, bestow favors; appoint"
    },
    {
        "Character": "赤",
        "Pinyin": "chì"
    },
    {
        "Pinyin": "red; communist, 'red'; bare"
    },
    {
        "Character": "喊",
        "Pinyin": "hǎn"
    },
    {
        "Pinyin": "shout, call out, yell; howl; cry"
    },
    {
        "Character": "盗",
        "Pinyin": "dào"
    },
    {
        "Pinyin": "rob, steal; thief, bandit"
    },
    {
        "Character": "擎",
        "Pinyin": "qíng"
    },
    {
        "Pinyin": "lift up, hold up, support"
    },
    {
        "Character": "劝",
        "Pinyin": "quàn"
    },
    {
        "Pinyin": "recommend, advise, urge"
    },
    {
        "Character": "奋",
        "Pinyin": "fèn"
    },
    {
        "Pinyin": "strive, exert effort; arouse"
    },
    {
        "Character": "慈",
        "Pinyin": "cí"
    },
    {
        "Pinyin": "kind, charitable, benevolent"
    },
    {
        "Character": "尽",
        "Pinyin": "jìn"
    },
    {
        "Pinyin": "exhaust, use up; deplete"
    },
    {
        "Character": "污",
        "Pinyin": "wū"
    },
    {
        "Pinyin": "filthy, dirty, impure, polluted"
    },
    {
        "Character": "狐",
        "Pinyin": "hú"
    },
    {
        "Pinyin": "species of fox"
    },
    {
        "Character": "罚",
        "Pinyin": "fá"
    },
    {
        "Pinyin": "penalty, fine; punish, penalize"
    },
    {
        "Character": "幽",
        "Pinyin": "yōu"
    },
    {
        "Pinyin": "quiet, secluded, tranquil; dark"
    },
    {
        "Character": "准",
        "Pinyin": "zhǔn"
    },
    {
        "Pinyin": "rule, guideline, standard"
    },
    {
        "Character": "兼",
        "Pinyin": "jiān"
    },
    {
        "Pinyin": "unite, combine; connect; and"
    },
    {
        "Character": "尖",
        "Pinyin": "jiān"
    },
    {
        "Pinyin": "sharp, pointed, acute, keen"
    },
    {
        "Character": "彰",
        "Pinyin": "zhāng"
    },
    {
        "Pinyin": "clear, manifest, obvious"
    },
    {
        "Character": "灰",
        "Pinyin": "huī"
    },
    {
        "Pinyin": "ashes; dust; lime, mortar"
    },
    {
        "Character": "番",
        "Pinyin": "fān"
    },
    {
        "Pinyin": "to take turns; a turn, a time; to repeat"
    },
    {
        "Character": "衡",
        "Pinyin": "héng"
    },
    {
        "Pinyin": "measure, weigh, judge, consider"
    },
    {
        "Character": "鲜",
        "Pinyin": "xiān"
    },
    {
        "Pinyin": "fresh, new, delicious; rare, few"
    },
    {
        "Character": "扩",
        "Pinyin": "kuò"
    },
    {
        "Pinyin": "expand, enlarge, stretch"
    },
    {
        "Character": "毫",
        "Pinyin": "háo"
    },
    {
        "Pinyin": "fine hair; measure of length"
    },
    {
        "Character": "夸",
        "Pinyin": "kuā"
    },
    {
        "Pinyin": "exaggerate; brag, boast; flaunt"
    },
    {
        "Character": "炮",
        "Pinyin": "pào"
    },
    {
        "Pinyin": "large gun, cannon; artillery"
    },
    {
        "Character": "拆",
        "Pinyin": "chāi"
    },
    {
        "Pinyin": "to break up, split apart, rip open; to destroy"
    },
    {
        "Character": "监",
        "Pinyin": "jiān"
    },
    {
        "Pinyin": "supervise, control, direct"
    },
    {
        "Character": "栏",
        "Pinyin": "lán"
    },
    {
        "Pinyin": "railing, balustrade; animal pan"
    },
    {
        "Character": "迟",
        "Pinyin": "chí"
    },
    {
        "Pinyin": "late, tardy; slow; delay"
    },
    {
        "Character": "证",
        "Pinyin": "zhèng"
    },
    {
        "Pinyin": "proof, evidence; testify, verify"
    },
    {
        "Character": "倾",
        "Pinyin": "qīng"
    },
    {
        "Pinyin": "upset, pour out, overflow"
    },
    {
        "Character": "郁",
        "Pinyin": "yù"
    },
    {
        "Pinyin": "luxuriant; dense, thick; moody"
    },
    {
        "Character": "汪",
        "Pinyin": "wāng"
    },
    {
        "Pinyin": "vast, extensive, deep; surname"
    },
    {
        "Character": "纷",
        "Pinyin": "fēn"
    },
    {
        "Pinyin": "in disorder, scattered, tangled"
    },
    {
        "Character": "托",
        "Pinyin": "tuō"
    },
    {
        "Pinyin": "to hold up with palm; to support, rely on"
    },
    {
        "Character": "漏",
        "Pinyin": "lòu"
    },
    {
        "Pinyin": "leak, drip; funnel; hour glass"
    },
    {
        "Character": "渡",
        "Pinyin": "dù"
    },
    {
        "Pinyin": "cross, ferry over; ferry"
    },
    {
        "Character": "姑",
        "Pinyin": "gū"
    },
    {
        "Pinyin": "father's sister; husband's mother"
    },
    {
        "Character": "秒",
        "Pinyin": "miǎo"
    },
    {
        "Pinyin": "beard of grain or corn; a second"
    },
    {
        "Character": "吾",
        "Pinyin": "wú"
    },
    {
        "Pinyin": "i, my, our; resist, impede"
    },
    {
        "Character": "窝",
        "Pinyin": "wō"
    },
    {
        "Pinyin": "nest; cave, den; hiding place"
    },
    {
        "Character": "辆",
        "Pinyin": "liàng"
    },
    {
        "Pinyin": "numerary adjunct for vehicles"
    },
    {
        "Character": "龄",
        "Pinyin": "líng"
    },
    {
        "Pinyin": "age; years"
    },
    {
        "Character": "跌",
        "Pinyin": "diē"
    },
    {
        "Pinyin": "stumble, slip, fall down; stamp"
    },
    {
        "Character": "浩",
        "Pinyin": "hào"
    },
    {
        "Pinyin": "great, numerous, vast, abundant"
    },
    {
        "Character": "肥",
        "Pinyin": "féi"
    },
    {
        "Pinyin": "fat, plump, obese; fertile"
    },
    {
        "Character": "兽",
        "Pinyin": "shòu"
    },
    {
        "Pinyin": "beast, animal; bestial"
    },
    {
        "Character": "煞",
        "Pinyin": "shà"
    },
    {
        "Pinyin": "malignant deity; baleful, noxious; strike dead"
    },
    {
        "Character": "抹",
        "Pinyin": "mǒ"
    },
    {
        "Pinyin": "smear, apply, wipe off, erase"
    },
    {
        "Character": "酸",
        "Pinyin": "suān"
    },
    {
        "Pinyin": "tart, sour; acid; stiff; spoiled"
    },
    {
        "Character": "税",
        "Pinyin": "shuì"
    },
    {
        "Pinyin": "taxes, revenue, duty; tax"
    },
    {
        "Character": "陷",
        "Pinyin": "xiàn"
    },
    {
        "Pinyin": "submerge, sink, plunge; trap"
    },
    {
        "Character": "谷",
        "Pinyin": "gǔ"
    },
    {
        "Pinyin": "corn, grain, cereal; lucky"
    },
    {
        "Character": "冲",
        "Pinyin": "chōng"
    },
    {
        "Pinyin": "rush against, charge ahead"
    },
    {
        "Character": "杜",
        "Pinyin": "dù"
    },
    {
        "Pinyin": "stop, prevent; restrict; surname"
    },
    {
        "Character": "胸",
        "Pinyin": "xiōng"
    },
    {
        "Pinyin": "breast, bosom, chest; thorax"
    },
    {
        "Character": "甘",
        "Pinyin": "gān"
    },
    {
        "Pinyin": "sweetness; sweet, tasty"
    },
    {
        "Character": "胞",
        "Pinyin": "bāo"
    },
    {
        "Pinyin": "womb, placenta, fetal membrane"
    },
    {
        "Character": "诞",
        "Pinyin": "dàn"
    },
    {
        "Pinyin": "to bear children, give birth; birth"
    },
    {
        "Character": "岂",
        "Pinyin": "qǐ"
    },
    {
        "Pinyin": "how? what?"
    },
    {
        "Character": "辞",
        "Pinyin": "cí"
    },
    {
        "Pinyin": "words, speech, expression, phrase"
    },
    {
        "Character": "墙",
        "Pinyin": "qiáng"
    },
    {
        "Pinyin": "wall"
    },
    {
        "Character": "凉",
        "Pinyin": "liáng"
    },
    {
        "Pinyin": "cool, cold; disheartened"
    },
    {
        "Character": "碎",
        "Pinyin": "suì"
    },
    {
        "Pinyin": "break, smash; broken, busted"
    },
    {
        "Character": "晶",
        "Pinyin": "jīng"
    },
    {
        "Pinyin": "crystal; clear, bright; radiant"
    },
    {
        "Character": "邱",
        "Pinyin": "qiū"
    },
    {
        "Pinyin": "surname; hill; mound; grave"
    },
    {
        "Character": "逻",
        "Pinyin": "luó"
    },
    {
        "Pinyin": "patrol; inspect; watch"
    },
    {
        "Character": "脆",
        "Pinyin": "cuì"
    },
    {
        "Pinyin": "crisp; fragile, frail; brittle"
    },
    {
        "Character": "喷",
        "Pinyin": "pēn"
    },
    {
        "Pinyin": "spurt, blow out, puff out"
    },
    {
        "Character": "玫",
        "Pinyin": "méi"
    },
    {
        "Pinyin": "rose"
    },
    {
        "Character": "娃",
        "Pinyin": "wá"
    },
    {
        "Pinyin": "baby; doll; pretty girl"
    },
    {
        "Character": "培",
        "Pinyin": "péi"
    },
    {
        "Pinyin": "bank up with dirt; cultivate"
    },
    {
        "Character": "咱",
        "Pinyin": "zán"
    },
    {
        "Pinyin": "us"
    },
    {
        "Character": "潜",
        "Pinyin": "qián"
    },
    {
        "Pinyin": "hide; hidden, secret, latent"
    },
    {
        "Character": "祥",
        "Pinyin": "xiáng"
    },
    {
        "Pinyin": "good luck, good omen; happiness"
    },
    {
        "Character": "筑",
        "Pinyin": "zhú"
    },
    {
        "Pinyin": "build, erect; building"
    },
    {
        "Character": "孔",
        "Pinyin": "kǒng"
    },
    {
        "Pinyin": "opening, hole, orifice; great"
    },
    {
        "Character": "柏",
        "Pinyin": "bó"
    },
    {
        "Pinyin": "cypress, cedar"
    },
    {
        "Character": "叭",
        "Pinyin": "bā"
    },
    {
        "Pinyin": "trumpet"
    },
    {
        "Character": "邀",
        "Pinyin": "yāo"
    },
    {
        "Pinyin": "invite, welcome; meet, intercept"
    },
    {
        "Character": "犹",
        "Pinyin": "yóu"
    },
    {
        "Pinyin": "like, similar to, just like, as"
    },
    {
        "Character": "妻",
        "Pinyin": "qī"
    },
    {
        "Pinyin": "wife"
    },
    {
        "Character": "估",
        "Pinyin": "gū"
    },
    {
        "Pinyin": "merchant; estimate, guess, presume"
    },
    {
        "Character": "荒",
        "Pinyin": "huāng"
    },
    {
        "Pinyin": "wasteland, desert; uncultivated"
    },
    {
        "Character": "袋",
        "Pinyin": "dài"
    },
    {
        "Pinyin": "pocket, bag, sack, pouch"
    },
    {
        "Character": "径",
        "Pinyin": "jìng"
    },
    {
        "Pinyin": "narrow path; diameter; direct"
    },
    {
        "Character": "垃",
        "Pinyin": "lā"
    },
    {
        "Pinyin": "garbage, refuse, waste"
    },
    {
        "Character": "傲",
        "Pinyin": "ào"
    },
    {
        "Pinyin": "proud, haughty, overbearing"
    },
    {
        "Character": "淑",
        "Pinyin": "shú"
    },
    {
        "Pinyin": "good, pure, virtuous, charming"
    },
    {
        "Character": "圾",
        "Pinyin": "jí"
    },
    {
        "Pinyin": "garbage, rubbish; shaking; danger"
    },
    {
        "Character": "旦",
        "Pinyin": "dàn"
    },
    {
        "Pinyin": "dawn; morning; day"
    },
    {
        "Character": "亿",
        "Pinyin": "yì"
    },
    {
        "Pinyin": "hundred million; many"
    },
    {
        "Character": "截",
        "Pinyin": "jié"
    },
    {
        "Pinyin": "cut off, stop, obstruct, intersect"
    },
    {
        "Character": "币",
        "Pinyin": "bì"
    },
    {
        "Pinyin": "currency, coins, legal tender"
    },
    {
        "Character": "羽",
        "Pinyin": "yǔ"
    },
    {
        "Pinyin": "feather, plume; wings; rad. 124"
    },
    {
        "Character": "妇",
        "Pinyin": "fù"
    },
    {
        "Pinyin": "married women; woman; wife"
    },
    {
        "Character": "泥",
        "Pinyin": "ní"
    },
    {
        "Pinyin": "mud, mire; earth, clay; plaster"
    },
    {
        "Character": "欺",
        "Pinyin": "qī"
    },
    {
        "Pinyin": "cheat, doublecross, deceive"
    },
    {
        "Character": "弦",
        "Pinyin": "xián"
    },
    {
        "Pinyin": "string; hypotenuse, crescent"
    },
    {
        "Character": "筹",
        "Pinyin": "chóu"
    },
    {
        "Pinyin": "chip, tally, token; raise money"
    },
    {
        "Character": "舍",
        "Pinyin": "shě"
    },
    {
        "Pinyin": "discard, give up willingly; give alms"
    },
    {
        "Character": "忌",
        "Pinyin": "jì"
    },
    {
        "Pinyin": "jealous, envious; fear"
    },
    {
        "Character": "串",
        "Pinyin": "chuàn"
    },
    {
        "Pinyin": "string; relatives; conspire"
    },
    {
        "Character": "伸",
        "Pinyin": "shēn"
    },
    {
        "Pinyin": "extend, stretch out, open up; trust"
    },
    {
        "Character": "喇",
        "Pinyin": "lǎ"
    },
    {
        "Pinyin": "horn, bugle; lama; final particle"
    },
    {
        "Character": "耻",
        "Pinyin": "chǐ"
    },
    {
        "Pinyin": "shame, humiliation; ashamed"
    },
    {
        "Character": "繁",
        "Pinyin": "fán"
    },
    {
        "Pinyin": "complicated, complex, difficult"
    },
    {
        "Character": "廖",
        "Pinyin": "liào"
    },
    {
        "Pinyin": "surname; name of an ancient state"
    },
    {
        "Character": "逛",
        "Pinyin": "guàng"
    },
    {
        "Pinyin": "ramble, stroll, roam, wander"
    },
    {
        "Character": "劲",
        "Pinyin": "jìng"
    },
    {
        "Pinyin": "strong, unyielding, tough, powerful"
    },
    {
        "Character": "臭",
        "Pinyin": "chòu"
    },
    {
        "Pinyin": "smell, stink, emit foul odor"
    },
    {
        "Character": "鲁",
        "Pinyin": "lǔ"
    },
    {
        "Pinyin": "foolish, stupid, rash; vulgar"
    },
    {
        "Character": "壮",
        "Pinyin": "zhuàng"
    },
    {
        "Pinyin": "big, large; robust; name of tribe"
    },
    {
        "Character": "捕",
        "Pinyin": "bǔ"
    },
    {
        "Pinyin": "arrest, catch, seize"
    },
    {
        "Character": "穷",
        "Pinyin": "qióng"
    },
    {
        "Pinyin": "poor, destitute, impoverished"
    },
    {
        "Character": "拔",
        "Pinyin": "bá"
    },
    {
        "Pinyin": "uproot, pull out"
    },
    {
        "Character": "于",
        "Pinyin": "yú"
    },
    {
        "Pinyin": "in, at, on; interjection alas!"
    },
    {
        "Character": "丑",
        "Pinyin": "chǒu"
    },
    {
        "Pinyin": "ugly looking, homely; disgraceful"
    },
    {
        "Character": "莉",
        "Pinyin": "lì"
    },
    {
        "Pinyin": "white jasmine"
    },
    {
        "Character": "糟",
        "Pinyin": "zāo"
    },
    {
        "Pinyin": "sediment, dregs; pickle"
    },
    {
        "Character": "炸",
        "Pinyin": "zhà"
    },
    {
        "Pinyin": "to fry in oil; to scald; to explode"
    },
    {
        "Character": "坡",
        "Pinyin": "pō"
    },
    {
        "Pinyin": "slope, bank, hillside"
    },
    {
        "Character": "蒙",
        "Pinyin": "méng"
    },
    {
        "Pinyin": "cover; ignorant; suffer; mongolia"
    },
    {
        "Character": "腿",
        "Pinyin": "tuǐ"
    },
    {
        "Pinyin": "legs, thighs"
    },
    {
        "Character": "坦",
        "Pinyin": "tǎn"
    },
    {
        "Pinyin": "flat, smooth; self-possessed"
    },
    {
        "Character": "怒",
        "Pinyin": "nù"
    },
    {
        "Pinyin": "anger, rage, passion; angry"
    },
    {
        "Character": "甜",
        "Pinyin": "tián"
    },
    {
        "Pinyin": "sweet, sweetness"
    },
    {
        "Character": "韩",
        "Pinyin": "hán"
    },
    {
        "Pinyin": "fence; surname; Korea"
    },
    {
        "Character": "缓",
        "Pinyin": "huǎn"
    },
    {
        "Pinyin": "slow, leisurely; to postpone, delay"
    },
    {
        "Character": "悉",
        "Pinyin": "xī"
    },
    {
        "Pinyin": "know, learn about, comprehend"
    },
    {
        "Character": "扯",
        "Pinyin": "chě"
    },
    {
        "Pinyin": "rip up, tear down; raise; haul"
    },
    {
        "Character": "割",
        "Pinyin": "gē"
    },
    {
        "Pinyin": "cut, divide, partition; cede"
    },
    {
        "Character": "艾",
        "Pinyin": "ài"
    },
    {
        "Pinyin": "artemisia, mugwort; translit."
    },
    {
        "Character": "胎",
        "Pinyin": "tāi"
    },
    {
        "Pinyin": "unborn child, embryo, fetus"
    },
    {
        "Character": "恒",
        "Pinyin": "héng"
    },
    {
        "Pinyin": "constant, regular, persistent"
    },
    {
        "Character": "玲",
        "Pinyin": "líng"
    },
    {
        "Pinyin": "tinkling of jade"
    },
    {
        "Character": "朵",
        "Pinyin": "duǒ"
    },
    {
        "Pinyin": "cluster of flowers; earlobe"
    },
    {
        "Character": "泉",
        "Pinyin": "quán"
    },
    {
        "Pinyin": "spring, fountain; wealth, money"
    },
    {
        "Character": "汤",
        "Pinyin": "tāng"
    },
    {
        "Pinyin": "hot water; soup, gravy, broth"
    },
    {
        "Character": "猛",
        "Pinyin": "měng"
    },
    {
        "Pinyin": "violent, savage, cruel; bold"
    },
    {
        "Character": "驾",
        "Pinyin": "jià"
    },
    {
        "Pinyin": "to drive, sail, fly; a cart, carriage"
    },
    {
        "Character": "幼",
        "Pinyin": "yòu"
    },
    {
        "Pinyin": "infant, young child; immature"
    },
    {
        "Character": "坪",
        "Pinyin": "píng"
    },
    {
        "Pinyin": "level ground; Japanese measure"
    },
    {
        "Character": "巫",
        "Pinyin": "wū"
    },
    {
        "Pinyin": "wizard, sorcerer, witch, shaman"
    },
    {
        "Character": "弯",
        "Pinyin": "wān"
    },
    {
        "Pinyin": "bend, curve"
    },
    {
        "Character": "胆",
        "Pinyin": "dǎn"
    },
    {
        "Pinyin": "gall bladder; bravery, courage"
    },
    {
        "Character": "昏",
        "Pinyin": "hūn"
    },
    {
        "Pinyin": "dusk, nightfall, twilight, dark"
    },
    {
        "Character": "鞋",
        "Pinyin": "xié"
    },
    {
        "Pinyin": "shoes, footwear in general"
    },
    {
        "Character": "怡",
        "Pinyin": "yí"
    },
    {
        "Pinyin": "harmony; pleasure, joy; be glad"
    },
    {
        "Character": "吐",
        "Pinyin": "tǔ"
    },
    {
        "Pinyin": "vomit, spew out, cough up"
    },
    {
        "Character": "唐",
        "Pinyin": "táng"
    },
    {
        "Pinyin": "Tang dynasty; Chinese"
    },
    {
        "Character": "悠",
        "Pinyin": "yōu"
    },
    {
        "Pinyin": "long, far, remote, distant; liesurely"
    },
    {
        "Character": "盾",
        "Pinyin": "dùn"
    },
    {
        "Pinyin": "shield; dutch guilder; Indonesia"
    },
    {
        "Character": "跃",
        "Pinyin": "yuè"
    },
    {
        "Pinyin": "skip, jump, frolic"
    },
    {
        "Character": "侵",
        "Pinyin": "qīn"
    },
    {
        "Pinyin": "invade, encroach upon, raid"
    },
    {
        "Character": "丹",
        "Pinyin": "dān"
    },
    {
        "Pinyin": "cinnabar (native HgS); vermilion (artificial HgS used as pigment)"
    },
    {
        "Character": "鑑",
        "Pinyin": "jiàn"
    },
    {
        "Pinyin": "mirror, looking glass; reflect"
    },
    {
        "Character": "泽",
        "Pinyin": "zé"
    },
    {
        "Pinyin": "marsh, swamp; grace, brilliance; damp, moist; fertile"
    },
    {
        "Character": "薪",
        "Pinyin": "xīn"
    },
    {
        "Pinyin": "fuel, firewood; salary"
    },
    {
        "Character": "逝",
        "Pinyin": "shì"
    },
    {
        "Pinyin": "pass away; die"
    },
    {
        "Character": "彦",
        "Pinyin": "yàn"
    },
    {
        "Pinyin": "elegant, handsome; learned"
    },
    {
        "Character": "后",
        "Pinyin": "hòu"
    },
    {
        "Pinyin": "behind, rear, after; descendents"
    },
    {
        "Character": "召",
        "Pinyin": "zhào"
    },
    {
        "Pinyin": "imperial decree; summon"
    },
    {
        "Character": "吕",
        "Pinyin": "lǚ"
    },
    {
        "Pinyin": "surname; a musical note"
    },
    {
        "Character": "碧",
        "Pinyin": "bì"
    },
    {
        "Pinyin": "jade; green, blue"
    },
    {
        "Character": "晨",
        "Pinyin": "chén"
    },
    {
        "Pinyin": "early morning, daybreak"
    },
    {
        "Character": "辨",
        "Pinyin": "biàn"
    },
    {
        "Pinyin": "distinguish, discriminate"
    },
    {
        "Character": "植",
        "Pinyin": "zhí"
    },
    {
        "Pinyin": "plant, trees, plants; grow"
    },
    {
        "Character": "痴",
        "Pinyin": "chī"
    },
    {
        "Pinyin": "foolish, stupid, dumb, silly"
    },
    {
        "Character": "瑰",
        "Pinyin": "guī"
    },
    {
        "Pinyin": "extraordinary, fabulous; rose"
    },
    {
        "Character": "钓",
        "Pinyin": "diào"
    },
    {
        "Pinyin": "fish; fishhook; tempt, lure"
    },
    {
        "Character": "轩",
        "Pinyin": "xuān"
    },
    {
        "Pinyin": "carriage; high; wide; balcony; surname of the Yellow Emperor"
    },
    {
        "Character": "勤",
        "Pinyin": "qín"
    },
    {
        "Pinyin": "industrious, diligent, attentive"
    },
    {
        "Character": "珠",
        "Pinyin": "zhū"
    },
    {
        "Pinyin": "precious stone, gem, jewel, pearl"
    },
    {
        "Character": "浓",
        "Pinyin": "nóng"
    },
    {
        "Pinyin": "thick, strong, concentrated"
    },
    {
        "Character": "悟",
        "Pinyin": "wù"
    },
    {
        "Pinyin": "to apprehend, realize, become aware"
    },
    {
        "Character": "磨",
        "Pinyin": "mó"
    },
    {
        "Pinyin": "grind; polish; rub; wear out; a millstone"
    },
    {
        "Character": "剪",
        "Pinyin": "jiǎn"
    },
    {
        "Pinyin": "scissors; cut, divide, separate"
    },
    {
        "Character": "逼",
        "Pinyin": "bī"
    },
    {
        "Pinyin": "compel, pressure, force; bother"
    },
    {
        "Character": "玄",
        "Pinyin": "xuán"
    },
    {
        "Pinyin": "deep, profound, abstruse"
    },
    {
        "Character": "暖",
        "Pinyin": "nuǎn"
    },
    {
        "Pinyin": "warm, genial"
    },
    {
        "Character": "躲",
        "Pinyin": "duǒ"
    },
    {
        "Pinyin": "hide, secrete; avoid, escape"
    },
    {
        "Character": "洛",
        "Pinyin": "luò"
    },
    {
        "Pinyin": "river in Shanxi province; city"
    },
    {
        "Character": "症",
        "Pinyin": "zhēng"
    },
    {
        "Pinyin": "obstruction of bowels"
    },
    {
        "Character": "挡",
        "Pinyin": "dǎng"
    },
    {
        "Pinyin": "obstruct, impede; stop; resist"
    },
    {
        "Character": "敝",
        "Pinyin": "bì"
    },
    {
        "Pinyin": "break, destroy; broken, tattered"
    },
    {
        "Character": "碍",
        "Pinyin": "ài"
    },
    {
        "Pinyin": "obstruct, hinder, block, deter"
    },
    {
        "Character": "亨",
        "Pinyin": "hēng"
    },
    {
        "Pinyin": "smoothly, progressing, no trouble"
    },
    {
        "Character": "逊",
        "Pinyin": "xùn"
    },
    {
        "Pinyin": "humble, modest; yield"
    },
    {
        "Character": "蜜",
        "Pinyin": "mì"
    },
    {
        "Pinyin": "honey; sweet; nectar"
    },
    {
        "Character": "盼",
        "Pinyin": "pàn"
    },
    {
        "Pinyin": "look, gaze; expect, hope for"
    },
    {
        "Character": "姆",
        "Pinyin": "mǔ"
    },
    {
        "Pinyin": "child's governess; matron"
    },
    {
        "Character": "赋",
        "Pinyin": "fù"
    },
    {
        "Pinyin": "tax; give; endow; army; diffuse"
    },
    {
        "Character": "彬",
        "Pinyin": "bīn"
    },
    {
        "Pinyin": "cultivated, well-bred"
    },
    {
        "Character": "壁",
        "Pinyin": "bì"
    },
    {
        "Pinyin": "partition wall; walls of a house"
    },
    {
        "Character": "缴",
        "Pinyin": "jiǎo"
    },
    {
        "Pinyin": "deliver, submit; hand over"
    },
    {
        "Character": "捷",
        "Pinyin": "jié"
    },
    {
        "Pinyin": "win, victory, triumph"
    },
    {
        "Character": "乏",
        "Pinyin": "fá"
    },
    {
        "Pinyin": "lack; poor"
    },
    {
        "Character": "戒",
        "Pinyin": "jiè"
    },
    {
        "Pinyin": "warn, caution, admonish"
    },
    {
        "Character": "憾",
        "Pinyin": "hàn"
    },
    {
        "Pinyin": "to regret, remorse; dissatisfied"
    },
    {
        "Character": "滴",
        "Pinyin": "dī"
    },
    {
        "Pinyin": "drip; drop of water"
    },
    {
        "Character": "桑",
        "Pinyin": "sāng"
    },
    {
        "Pinyin": "mulberry tree; surname"
    },
    {
        "Character": "菲",
        "Pinyin": "fēi"
    },
    {
        "Pinyin": "fragrant, luxuriant; the Philippines"
    },
    {
        "Character": "嫌",
        "Pinyin": "xián"
    },
    {
        "Pinyin": "hate, detest; suspect; criticize"
    },
    {
        "Character": "愉",
        "Pinyin": "yú"
    },
    {
        "Pinyin": "pleasant, delightful; please"
    },
    {
        "Character": "爬",
        "Pinyin": "pá"
    },
    {
        "Pinyin": "crawl, creep; climb; scramble"
    },
    {
        "Character": "恼",
        "Pinyin": "nǎo"
    },
    {
        "Pinyin": "angered, filled with hate"
    },
    {
        "Character": "删",
        "Pinyin": "shān"
    },
    {
        "Pinyin": "to cut; delete, erase; to geld"
    },
    {
        "Character": "叹",
        "Pinyin": "tàn"
    },
    {
        "Pinyin": "sigh, admire"
    },
    {
        "Character": "抵",
        "Pinyin": "dǐ"
    },
    {
        "Pinyin": "resist, oppose; deny; off-set"
    },
    {
        "Character": "棚",
        "Pinyin": "péng"
    },
    {
        "Pinyin": "tent, awning; booth; shed"
    },
    {
        "Character": "摘",
        "Pinyin": "zhāi"
    },
    {
        "Pinyin": "pluck, pick; select; specify"
    },
    {
        "Character": "蒋",
        "Pinyin": "jiǎng"
    },
    {
        "Pinyin": "surname; hydropyrum latifalium"
    },
    {
        "Character": "箭",
        "Pinyin": "jiàn"
    },
    {
        "Pinyin": "arrow; type of bamboo"
    },
    {
        "Character": "夕",
        "Pinyin": "xī"
    },
    {
        "Pinyin": "evening, night, dusk; slanted"
    },
    {
        "Character": "翁",
        "Pinyin": "wēng"
    },
    {
        "Pinyin": "old man; father, father-in-law"
    },
    {
        "Character": "牲",
        "Pinyin": "shēng"
    },
    {
        "Pinyin": "sacrificial animal; animal"
    },
    {
        "Character": "迹",
        "Pinyin": "jī"
    },
    {
        "Pinyin": "search, track, trace"
    },
    {
        "Character": "勉",
        "Pinyin": "miǎn"
    },
    {
        "Pinyin": "endeavor, make effort; urge"
    },
    {
        "Character": "莱",
        "Pinyin": "lái"
    },
    {
        "Pinyin": "goosefoot, weed; fallow field"
    },
    {
        "Character": "洁",
        "Pinyin": "jié"
    },
    {
        "Pinyin": "clean, purify, pure"
    },
    {
        "Character": "贪",
        "Pinyin": "tān"
    },
    {
        "Pinyin": "greedy, covet; covetous"
    },
    {
        "Character": "恰",
        "Pinyin": "qià"
    },
    {
        "Pinyin": "just, exactly, precisely; proper"
    },
    {
        "Character": "曰",
        "Pinyin": "yuē"
    },
    {
        "Pinyin": "say; KangXi radical 73"
    },
    {
        "Character": "侨",
        "Pinyin": "qiáo"
    },
    {
        "Pinyin": "sojourn, lodge"
    },
    {
        "Character": "沧",
        "Pinyin": "cāng"
    },
    {
        "Pinyin": "blue, dark green; cold"
    },
    {
        "Character": "咖",
        "Pinyin": "kā"
    },
    {
        "Pinyin": "coffee; a phonetic"
    },
    {
        "Character": "唷",
        "Pinyin": "yō"
    },
    {
        "Pinyin": "final particle"
    },
    {
        "Character": "扣",
        "Pinyin": "kòu"
    },
    {
        "Pinyin": "knock, strike, rap, tap; button"
    },
    {
        "Character": "采",
        "Pinyin": "cǎi"
    },
    {
        "Pinyin": "gather, collect; pick, select"
    },
    {
        "Character": "奔",
        "Pinyin": "bēn"
    },
    {
        "Pinyin": "run fast, flee; rush about; run"
    },
    {
        "Character": "泳",
        "Pinyin": "yǒng"
    },
    {
        "Pinyin": "dive; swim"
    },
    {
        "Character": "迹",
        "Pinyin": "jī"
    },
    {
        "Pinyin": "search, track, trace"
    },
    {
        "Character": "涯",
        "Pinyin": "yá"
    },
    {
        "Pinyin": "shore, bank, water's edge"
    },
    {
        "Character": "夺",
        "Pinyin": "duó"
    },
    {
        "Pinyin": "take by force, rob, snatch"
    },
    {
        "Character": "抄",
        "Pinyin": "chāo"
    },
    {
        "Pinyin": "copy, confiscate, seize"
    },
    {
        "Character": "疗",
        "Pinyin": "liáo"
    },
    {
        "Pinyin": "be healed, cured, recover"
    },
    {
        "Character": "署",
        "Pinyin": "shǔ"
    },
    {
        "Pinyin": "public office"
    },
    {
        "Character": "誓",
        "Pinyin": "shì"
    },
    {
        "Pinyin": "swear, pledge; oath"
    },
    {
        "Character": "盃",
        "Pinyin": "bēi"
    },
    {
        "Pinyin": "glass, cup"
    },
    {
        "Character": "骚",
        "Pinyin": "sāo"
    },
    {
        "Pinyin": "harass, bother, annoy, disturb, agitate; sad, grieved"
    },
    {
        "Character": "翼",
        "Pinyin": "yì"
    },
    {
        "Pinyin": "wings; fins on fish; shelter"
    },
    {
        "Character": "屠",
        "Pinyin": "tú"
    },
    {
        "Pinyin": "butcher, slaughter, massacre"
    },
    {
        "Character": "咪",
        "Pinyin": "mī"
    },
    {
        "Pinyin": "sound of cat, cat's meow; meter; (Cant.) don't!"
    },
    {
        "Character": "雾",
        "Pinyin": "wù"
    },
    {
        "Pinyin": "fog, mist, vapor, fine spray"
    },
    {
        "Character": "涉",
        "Pinyin": "shè"
    },
    {
        "Pinyin": "ford stream, wade across"
    },
    {
        "Character": "锺",
        "Pinyin": "zhōng"
    },
    {
        "Pinyin": "(surname)"
    },
    {
        "Character": "踢",
        "Pinyin": "tī"
    },
    {
        "Pinyin": "kick"
    },
    {
        "Character": "谋",
        "Pinyin": "móu"
    },
    {
        "Pinyin": "plan, scheme; strategem"
    },
    {
        "Character": "牺",
        "Pinyin": "xī"
    },
    {
        "Pinyin": "sacrifice, give up; sacrificial"
    },
    {
        "Character": "焦",
        "Pinyin": "jiāo"
    },
    {
        "Pinyin": "burned, scorched; anxious, vexed"
    },
    {
        "Character": "涵",
        "Pinyin": "hán"
    },
    {
        "Pinyin": "soak, wet; tolerate, be lenient"
    },
    {
        "Character": "础",
        "Pinyin": "chǔ"
    },
    {
        "Pinyin": "foundation stone, plinth"
    },
    {
        "Character": "绕",
        "Pinyin": "rào"
    },
    {
        "Pinyin": "entwine; wind around; surround"
    },
    {
        "Character": "俱",
        "Pinyin": "jù"
    },
    {
        "Pinyin": "all, together; accompany"
    },
    {
        "Character": "霹",
        "Pinyin": "pī"
    },
    {
        "Pinyin": "thunder, crashing thunder"
    },
    {
        "Character": "坜",
        "Pinyin": "lì"
    },
    {
        "Character": "唬",
        "Pinyin": "hǔ"
    },
    {
        "Pinyin": "to intimidate; to scare"
    },
    {
        "Character": "氏",
        "Pinyin": "shì"
    },
    {
        "Pinyin": "clan, family; mister"
    },
    {
        "Character": "彻",
        "Pinyin": "chè"
    },
    {
        "Pinyin": "penetrate, pervade; penetrating"
    },
    {
        "Character": "吝",
        "Pinyin": "lìn"
    },
    {
        "Pinyin": "stingy, miserly, parsimonious"
    },
    {
        "Character": "曼",
        "Pinyin": "màn"
    },
    {
        "Pinyin": "long, extended, vast; beautiful"
    },
    {
        "Character": "寿",
        "Pinyin": "shòu"
    },
    {
        "Pinyin": "old age, long life; lifespan"
    },
    {
        "Character": "粉",
        "Pinyin": "fěn"
    },
    {
        "Pinyin": "powder, face powder; plaster"
    },
    {
        "Character": "廉",
        "Pinyin": "lián"
    },
    {
        "Pinyin": "upright, honorable, honest"
    },
    {
        "Character": "炎",
        "Pinyin": "yán"
    },
    {
        "Pinyin": "flame, blaze; hot"
    },
    {
        "Character": "祸",
        "Pinyin": "huò"
    },
    {
        "Pinyin": "misfortune, calamity, disaster"
    },
    {
        "Character": "耗",
        "Pinyin": "hào"
    },
    {
        "Pinyin": "consume, use up; waste, squander"
    },
    {
        "Character": "炮",
        "Pinyin": "pào"
    },
    {
        "Pinyin": "large gun, cannon; artillery"
    },
    {
        "Character": "啡",
        "Pinyin": "pēi"
    },
    {
        "Pinyin": "morphine; coffee"
    },
    {
        "Character": "肚",
        "Pinyin": "dù"
    },
    {
        "Pinyin": "belly; abdomen; bowels"
    },
    {
        "Character": "贡",
        "Pinyin": "gòng"
    },
    {
        "Pinyin": "offer tribute; tribute, gifts"
    },
    {
        "Character": "鼻",
        "Pinyin": "bí"
    },
    {
        "Pinyin": "nose; first; KangXi radical 209"
    },
    {
        "Character": "挖",
        "Pinyin": "wā"
    },
    {
        "Pinyin": "dig, dig out, gouge out, scoop"
    },
    {
        "Character": "貌",
        "Pinyin": "mào"
    },
    {
        "Pinyin": "countenance, appearance"
    },
    {
        "Character": "捐",
        "Pinyin": "juān"
    },
    {
        "Pinyin": "contribute; give up, renounce"
    },
    {
        "Character": "融",
        "Pinyin": "róng"
    },
    {
        "Pinyin": "melt, fuse; blend, harmonize"
    },
    {
        "Character": "筋",
        "Pinyin": "jīn"
    },
    {
        "Pinyin": "muscles; tendons"
    },
    {
        "Character": "云",
        "Pinyin": "yún"
    },
    {
        "Pinyin": "clouds; Yunnan province"
    },
    {
        "Character": "稣",
        "Pinyin": "sū"
    },
    {
        "Pinyin": "revive, to rise again; collect"
    },
    {
        "Character": "捡",
        "Pinyin": "jiǎn"
    },
    {
        "Pinyin": "to pick up"
    },
    {
        "Character": "饱",
        "Pinyin": "bǎo"
    },
    {
        "Pinyin": "eat heartily; eat one's fill"
    },
    {
        "Character": "铃",
        "Pinyin": "líng"
    },
    {
        "Pinyin": "bell"
    },
    {
        "Character": "雳",
        "Pinyin": "lì"
    },
    {
        "Pinyin": "thunderclap, crashing thunder"
    },
    {
        "Character": "鸣",
        "Pinyin": "míng"
    },
    {
        "Pinyin": "cry of bird or animal; make sound"
    },
    {
        "Character": "奉",
        "Pinyin": "fèng"
    },
    {
        "Pinyin": "offer; receive; serve; respect"
    },
    {
        "Character": "燃",
        "Pinyin": "rán"
    },
    {
        "Pinyin": "burn; light fire, ignite"
    },
    {
        "Character": "饰",
        "Pinyin": "shì"
    },
    {
        "Pinyin": "decorate, ornament, adorn; to deceive"
    },
    {
        "Character": "绘",
        "Pinyin": "huì"
    },
    {
        "Pinyin": "draw, sketch, paint"
    },
    {
        "Character": "黎",
        "Pinyin": "lí"
    },
    {
        "Pinyin": "surname; numerous, many; black"
    },
    {
        "Character": "卷",
        "Pinyin": "juàn"
    },
    {
        "Pinyin": "scroll; curl; make a comeback"
    },
    {
        "Character": "恢",
        "Pinyin": "huī"
    },
    {
        "Pinyin": "restore; big, great, immense, vast"
    },
    {
        "Character": "瞧",
        "Pinyin": "qiáo"
    },
    {
        "Pinyin": "glance at, look at, see"
    },
    {
        "Character": "茫",
        "Pinyin": "máng"
    },
    {
        "Pinyin": "vast, boundless, widespread"
    },
    {
        "Character": "幅",
        "Pinyin": "fú"
    },
    {
        "Pinyin": "piece, strip, breadth of, hem"
    },
    {
        "Character": "迪",
        "Pinyin": "dí"
    },
    {
        "Pinyin": "enlighten, advance; progress"
    },
    {
        "Character": "柳",
        "Pinyin": "liǔ"
    },
    {
        "Pinyin": "willow tree; pleasure"
    },
    {
        "Character": "瑜",
        "Pinyin": "yú"
    },
    {
        "Pinyin": "flawless gem or jewel"
    },
    {
        "Character": "矛",
        "Pinyin": "máo"
    },
    {
        "Pinyin": "spear, lance; KangXi radical 110"
    },
    {
        "Character": "吊",
        "Pinyin": "diào"
    },
    {
        "Pinyin": "condole, mourn, pity; hang"
    },
    {
        "Character": "侯",
        "Pinyin": "hóu"
    },
    {
        "Pinyin": "marquis, lord; target in archery"
    },
    {
        "Character": "玛",
        "Pinyin": "mǎ"
    },
    {
        "Pinyin": "agate; cornelian"
    },
    {
        "Character": "撑",
        "Pinyin": "chēng"
    },
    {
        "Pinyin": "prop up, support; brace; to push off (with a pole)"
    },
    {
        "Character": "薄",
        "Pinyin": "bó"
    },
    {
        "Pinyin": "thin, slight, weak; poor, stingy"
    },
    {
        "Character": "敦",
        "Pinyin": "dūn"
    },
    {
        "Pinyin": "esteem; honest, candid, sincere"
    },
    {
        "Character": "挤",
        "Pinyin": "jǐ"
    },
    {
        "Pinyin": "crowd, squeeze, push against"
    },
    {
        "Character": "墨",
        "Pinyin": "mò"
    },
    {
        "Pinyin": "ink; writing"
    },
    {
        "Character": "琪",
        "Pinyin": "qí"
    },
    {
        "Pinyin": "type of jade"
    },
    {
        "Character": "凌",
        "Pinyin": "líng"
    },
    {
        "Pinyin": "pure; virtuous; insult; maltreat"
    },
    {
        "Character": "侧",
        "Pinyin": "cè"
    },
    {
        "Pinyin": "side; incline, slant, lean"
    },
    {
        "Character": "枫",
        "Pinyin": "fēng"
    },
    {
        "Pinyin": "maple tree"
    },
    {
        "Character": "嗨",
        "Pinyin": "hǎi"
    },
    {
        "Pinyin": "hi"
    },
    {
        "Character": "梯",
        "Pinyin": "tī"
    },
    {
        "Pinyin": "ladder, steps, stairs; lean"
    },
    {
        "Character": "梁",
        "Pinyin": "liáng"
    },
    {
        "Pinyin": "bridge; beam; rafters; surname"
    },
    {
        "Character": "廷",
        "Pinyin": "tíng"
    },
    {
        "Pinyin": "court"
    },
    {
        "Character": "儒",
        "Pinyin": "rú"
    },
    {
        "Pinyin": "Confucian scholar"
    },
    {
        "Character": "咬",
        "Pinyin": "yǎo"
    },
    {
        "Pinyin": "bite, gnaw"
    },
    {
        "Character": "岚",
        "Pinyin": "lán"
    },
    {
        "Pinyin": "mountain mist, mountain haze"
    },
    {
        "Character": "览",
        "Pinyin": "lǎn"
    },
    {
        "Pinyin": "look at, inspect; perceive"
    },
    {
        "Character": "兔",
        "Pinyin": "tù"
    },
    {
        "Pinyin": "rabbit, hare"
    },
    {
        "Character": "怖",
        "Pinyin": "bù"
    },
    {
        "Pinyin": "terror, fear; frighten; terrified"
    },
    {
        "Character": "稿",
        "Pinyin": "gǎo"
    },
    {
        "Pinyin": "draft, manuscript, rough copy"
    },
    {
        "Character": "齿",
        "Pinyin": "chǐ"
    },
    {
        "Pinyin": "teeth; gears, cogs; age; KangXi radical 211"
    },
    {
        "Character": "狱",
        "Pinyin": "yù"
    },
    {
        "Pinyin": "prison, jail; case; lawsuit"
    },
    {
        "Character": "爷",
        "Pinyin": "yé"
    },
    {
        "Pinyin": "father, grandfather"
    },
    {
        "Character": "迈",
        "Pinyin": "mài"
    },
    {
        "Pinyin": "take a big stride; pass by"
    },
    {
        "Character": "闷",
        "Pinyin": "mèn"
    },
    {
        "Pinyin": "gloomy, depressed, melancholy"
    },
    {
        "Character": "乔",
        "Pinyin": "qiáo"
    },
    {
        "Pinyin": "tall, lofty; proud, stately"
    },
    {
        "Character": "姿",
        "Pinyin": "zī"
    },
    {
        "Pinyin": "one's manner, carriage, bearing"
    },
    {
        "Character": "踪",
        "Pinyin": "zōng"
    },
    {
        "Pinyin": "footprints, traces, tracks"
    },
    {
        "Character": "宾",
        "Pinyin": "bīn"
    },
    {
        "Pinyin": "guest, visitor; surname; submit"
    },
    {
        "Character": "家",
        "Pinyin": "jiā"
    },
    {
        "Pinyin": "house, home, residence; family"
    },
    {
        "Character": "弘",
        "Pinyin": "hóng"
    },
    {
        "Pinyin": "enlarge, expand; liberal, great"
    },
    {
        "Character": "韵",
        "Pinyin": "yùn"
    },
    {
        "Pinyin": "rhyme; vowel"
    },
    {
        "Character": "岭",
        "Pinyin": "lǐng"
    },
    {
        "Pinyin": "mountain ridge, mountain peak"
    },
    {
        "Character": "咦",
        "Pinyin": "yí"
    },
    {
        "Pinyin": "expression of surprise"
    },
    {
        "Character": "裤",
        "Pinyin": "kù"
    },
    {
        "Pinyin": "trousers, pants"
    },
    {
        "Character": "壳",
        "Pinyin": "ké"
    },
    {
        "Pinyin": "casing, shell, husk, hull, skin"
    },
    {
        "Character": "孝",
        "Pinyin": "xiào"
    },
    {
        "Pinyin": "filial piety, obedience; mourning"
    },
    {
        "Character": "仇",
        "Pinyin": "chóu"
    },
    {
        "Pinyin": "enemy, hate, hatred, enmity"
    },
    {
        "Character": "誉",
        "Pinyin": "yù"
    },
    {
        "Pinyin": "fame, reputation; praise"
    },
    {
        "Character": "妮",
        "Pinyin": "nī"
    },
    {
        "Pinyin": "maid, servant girl; cute girl"
    },
    {
        "Character": "惧",
        "Pinyin": "jù"
    },
    {
        "Pinyin": "fear, be afraid of, dread"
    },
    {
        "Character": "促",
        "Pinyin": "cù"
    },
    {
        "Pinyin": "urge, press, hurry; close"
    },
    {
        "Character": "驶",
        "Pinyin": "shǐ"
    },
    {
        "Pinyin": "sail, drive, pilot; fast, quick"
    },
    {
        "Character": "疼",
        "Pinyin": "téng"
    },
    {
        "Pinyin": "aches, pains; be fond of; love"
    },
    {
        "Character": "凶",
        "Pinyin": "xiōng"
    },
    {
        "Pinyin": "culprit; murder; bad, sad"
    },
    {
        "Character": "粗",
        "Pinyin": "cū"
    },
    {
        "Pinyin": "rough, thick, course; rude"
    },
    {
        "Character": "耍",
        "Pinyin": "shuǎ"
    },
    {
        "Pinyin": "frolic, play, amuse, play with"
    },
    {
        "Character": "糕",
        "Pinyin": "gāo"
    },
    {
        "Pinyin": "cakes, pastry"
    },
    {
        "Character": "仲",
        "Pinyin": "zhòng"
    },
    {
        "Pinyin": "middle brother; go between, mediator; surname"
    },
    {
        "Character": "裂",
        "Pinyin": "liè"
    },
    {
        "Pinyin": "split, crack, break open; rend"
    },
    {
        "Character": "吟",
        "Pinyin": "yín"
    },
    {
        "Pinyin": "sing, hum; recite; type of poetry"
    },
    {
        "Character": "陀",
        "Pinyin": "tuó"
    },
    {
        "Pinyin": "steep bank, rough terrain"
    },
    {
        "Character": "赌",
        "Pinyin": "dǔ"
    },
    {
        "Pinyin": "bet, gamble, wager; compete"
    },
    {
        "Character": "爵",
        "Pinyin": "jué"
    },
    {
        "Pinyin": "feudal title or rank"
    },
    {
        "Character": "哉",
        "Pinyin": "zāi"
    },
    {
        "Pinyin": "final exclamatory particle"
    },
    {
        "Character": "亏",
        "Pinyin": "kuī"
    },
    {
        "Pinyin": "lose, fail; damage; deficient"
    },
    {
        "Character": "锅",
        "Pinyin": "guō"
    },
    {
        "Pinyin": "cooking-pot, saucepan"
    },
    {
        "Character": "刷",
        "Pinyin": "shuā"
    },
    {
        "Pinyin": "brush; clean with brush, scrub"
    },
    {
        "Character": "旭",
        "Pinyin": "xù"
    },
    {
        "Pinyin": "rising sun; brilliance; radiant"
    },
    {
        "Character": "晴",
        "Pinyin": "qíng"
    },
    {
        "Pinyin": "clear weather, fine weather"
    },
    {
        "Character": "蝶",
        "Pinyin": "dié"
    },
    {
        "Pinyin": "butterfly"
    },
    {
        "Character": "阔",
        "Pinyin": "kuò"
    },
    {
        "Pinyin": "broad, ample, wide; be apart"
    },
    {
        "Character": "洩",
        "Pinyin": "xiè"
    },
    {
        "Pinyin": "leak, drip; vent or release"
    },
    {
        "Character": "顽",
        "Pinyin": "wán"
    },
    {
        "Pinyin": "obstinate, stubborn; recalcitrant"
    },
    {
        "Character": "牧",
        "Pinyin": "mù"
    },
    {
        "Pinyin": "tend cattle, shepherd"
    },
    {
        "Character": "契",
        "Pinyin": "qì"
    },
    {
        "Pinyin": "deed, contract, bond; engrave"
    },
    {
        "Character": "轰",
        "Pinyin": "hōng"
    },
    {
        "Pinyin": "rumble, explosion, blast"
    },
    {
        "Character": "羞",
        "Pinyin": "xiū"
    },
    {
        "Pinyin": "disgrace, shame; ashamed; shy"
    },
    {
        "Character": "十",
        "Pinyin": "shí"
    },
    {
        "Pinyin": "pick up, collect, tidy up; accounting form of the numeral ten"
    },
    {
        "Character": "锦",
        "Pinyin": "jǐn"
    },
    {
        "Pinyin": "brocade, tapestry; embroidered"
    },
    {
        "Character": "逆",
        "Pinyin": "nì"
    },
    {
        "Pinyin": "disobey, rebel; rebel, traitor"
    },
    {
        "Character": "堕",
        "Pinyin": "duò"
    },
    {
        "Pinyin": "fall, sink, let fall; degenerate"
    },
    {
        "Character": "夹",
        "Pinyin": "jiā"
    },
    {
        "Pinyin": "be wedged or inserted between"
    },
    {
        "Character": "枝",
        "Pinyin": "zhī"
    },
    {
        "Pinyin": "branches, limbs; branch off"
    },
    {
        "Character": "瓦",
        "Pinyin": "wǎ"
    },
    {
        "Pinyin": "tile; earthenware pottery; girl"
    },
    {
        "Character": "舟",
        "Pinyin": "zhōu"
    },
    {
        "Pinyin": "boat, ship; KangXi radical 137"
    },
    {
        "Character": "悦",
        "Pinyin": "yuè"
    },
    {
        "Pinyin": "pleased"
    },
    {
        "Character": "惹",
        "Pinyin": "rě"
    },
    {
        "Pinyin": "irritate, vex, offend, incite"
    },
    {
        "Character": "疏",
        "Pinyin": "shū"
    },
    {
        "Pinyin": "neglect; careless, lax"
    },
    {
        "Character": "锐",
        "Pinyin": "ruì"
    },
    {
        "Pinyin": "sharp"
    },
    {
        "Character": "翘",
        "Pinyin": "qiáo"
    },
    {
        "Pinyin": "turn up, lift, elevate, raise"
    },
    {
        "Character": "哎",
        "Pinyin": "āi"
    },
    {
        "Pinyin": "interjection of surprise"
    },
    {
        "Character": "综",
        "Pinyin": "zòng"
    },
    {
        "Pinyin": "arrange threads for weaving"
    },
    {
        "Character": "纲",
        "Pinyin": "gāng"
    },
    {
        "Pinyin": "heavy rope, hawser; main points"
    },
    {
        "Character": "扇",
        "Pinyin": "shàn"
    },
    {
        "Pinyin": "fan; door panel"
    },
    {
        "Character": "驻",
        "Pinyin": "zhù"
    },
    {
        "Pinyin": "to be stationed at, reside at; to stop"
    },
    {
        "Character": "屏",
        "Pinyin": "píng"
    },
    {
        "Pinyin": "folding screen, shield"
    },
    {
        "Character": "堪",
        "Pinyin": "kān"
    },
    {
        "Pinyin": "adequately capable of, worthy of"
    },
    {
        "Character": "弥",
        "Pinyin": "mí"
    },
    {
        "Pinyin": "extensive, full; fill; complete"
    },
    {
        "Character": "贯",
        "Pinyin": "guàn"
    },
    {
        "Pinyin": "a string of 1000 coins; to go through"
    },
    {
        "Character": "愚",
        "Pinyin": "yú"
    },
    {
        "Pinyin": "stupid, doltish, foolish"
    },
    {
        "Character": "抬",
        "Pinyin": "tái"
    },
    {
        "Pinyin": "lift, carry"
    },
    {
        "Character": "喂",
        "Pinyin": "wèi"
    },
    {
        "Pinyin": "interjection to call attention"
    },
    {
        "Character": "靖",
        "Pinyin": "jìng"
    },
    {
        "Pinyin": "pacify; appease; calm, peaceful"
    },
    {
        "Character": "狠",
        "Pinyin": "hěn"
    },
    {
        "Pinyin": "vicious, cruel; severely, extreme"
    },
    {
        "Character": "饼",
        "Pinyin": "bǐng"
    },
    {
        "Pinyin": "rice-cakes, biscuits"
    },
    {
        "Character": "凝",
        "Pinyin": "níng"
    },
    {
        "Pinyin": "coagulate; congeal; freeze"
    },
    {
        "Character": "邻",
        "Pinyin": "lín"
    },
    {
        "Pinyin": "neighbor; neighborhood"
    },
    {
        "Character": "擦",
        "Pinyin": "cā"
    },
    {
        "Pinyin": "wipe, scrub, rub, scour; brush"
    },
    {
        "Character": "滋",
        "Pinyin": "zī"
    },
    {
        "Pinyin": "grow, multiply, increase; thrive"
    },
    {
        "Character": "坤",
        "Pinyin": "kūn"
    },
    {
        "Pinyin": "earth; feminine, female"
    },
    {
        "Character": "蛙",
        "Pinyin": "wā"
    },
    {
        "Pinyin": "frog"
    },
    {
        "Character": "灾",
        "Pinyin": "zāi"
    },
    {
        "Pinyin": "calamity, disaster, catastrophe"
    },
    {
        "Character": "莎",
        "Pinyin": "shā"
    },
    {
        "Pinyin": "kind of sedge grass, used anciently for raincoats"
    },
    {
        "Character": "毅",
        "Pinyin": "yì"
    },
    {
        "Pinyin": "resolute, decisive, firm, persist"
    },
    {
        "Character": "卒",
        "Pinyin": "zú"
    },
    {
        "Pinyin": "soldier; servant; at last, finally"
    },
    {
        "Character": "汝",
        "Pinyin": "rǔ"
    },
    {
        "Pinyin": "you"
    },
    {
        "Character": "征",
        "Pinyin": "zhēng"
    },
    {
        "Pinyin": "summon, recruit; musical note"
    },
    {
        "Character": "赠",
        "Pinyin": "zèng"
    },
    {
        "Pinyin": "give present; bestow, confer"
    },
    {
        "Character": "斗",
        "Pinyin": "dòu"
    },
    {
        "Pinyin": "struggle, fight, compete, contend"
    },
    {
        "Character": "抛",
        "Pinyin": "pāo"
    },
    {
        "Pinyin": "throw (away), abandon, reject"
    },
    {
        "Character": "秦",
        "Pinyin": "qín"
    },
    {
        "Pinyin": "feudal state of Qin; the Qin dynasty (from which the name 'China' comes)"
    },
    {
        "Character": "辱",
        "Pinyin": "rù"
    },
    {
        "Pinyin": "humiliate, insult, abuse"
    },
    {
        "Character": "涂",
        "Pinyin": "tú"
    },
    {
        "Pinyin": "smear, daub, apply, spread; paint"
    },
    {
        "Character": "披",
        "Pinyin": "pī"
    },
    {
        "Pinyin": "wear; split; crack"
    },
    {
        "Character": "允",
        "Pinyin": "yǔn"
    },
    {
        "Pinyin": "to grant, to allow, to consent"
    },
    {
        "Character": "侦",
        "Pinyin": "zhēn"
    },
    {
        "Pinyin": "spy, reconnoiter; detective"
    },
    {
        "Character": "欲",
        "Pinyin": "yù"
    },
    {
        "Pinyin": "desire, want, long for; intend"
    },
    {
        "Character": "夥",
        "Pinyin": "huǒ"
    },
    {
        "Pinyin": "companion; partner; assistant"
    },
    {
        "Character": "朗",
        "Pinyin": "lǎng"
    },
    {
        "Pinyin": "clear, bright; distinct"
    },
    {
        "Character": "笛",
        "Pinyin": "dí"
    },
    {
        "Pinyin": "bamboo flute; whistle"
    },
    {
        "Character": "劫",
        "Pinyin": "jié"
    },
    {
        "Pinyin": "take by force, coerce; disaster"
    },
    {
        "Character": "魅",
        "Pinyin": "mèi"
    },
    {
        "Pinyin": "kind of forest demon, elf"
    },
    {
        "Character": "钦",
        "Pinyin": "qīn"
    },
    {
        "Pinyin": "respect, admire; respectful"
    },
    {
        "Character": "慰",
        "Pinyin": "wèi"
    },
    {
        "Pinyin": "comfort, console, calm"
    },
    {
        "Character": "荷",
        "Pinyin": "hé"
    },
    {
        "Pinyin": "lotus, water lily, holland"
    },
    {
        "Character": "挺",
        "Pinyin": "tǐng"
    },
    {
        "Pinyin": "to stand upright, straighten; rigid"
    },
    {
        "Character": "矣",
        "Pinyin": "yǐ"
    },
    {
        "Pinyin": "particle of completed action"
    },
    {
        "Character": "迅",
        "Pinyin": "xùn"
    },
    {
        "Pinyin": "quick, hasty, rapid, sudden"
    },
    {
        "Character": "禅",
        "Pinyin": "chán"
    },
    {
        "Pinyin": "meditation, contemplation (dhyana); to level ground for altar; abdicate"
    },
    {
        "Character": "迁",
        "Pinyin": "qiān"
    },
    {
        "Pinyin": "move, shift, change; transfer"
    },
    {
        "Character": "鹿",
        "Pinyin": "lù"
    },
    {
        "Pinyin": "deer; surname; KangXi radical 198"
    },
    {
        "Character": "秤",
        "Pinyin": "chèng"
    },
    {
        "Pinyin": "balance, scale, steelyard"
    },
    {
        "Character": "彭",
        "Pinyin": "péng"
    },
    {
        "Pinyin": "name of ancient country; surname"
    },
    {
        "Character": "肩",
        "Pinyin": "jiān"
    },
    {
        "Pinyin": "shoulders; to shoulder; bear"
    },
    {
        "Character": "赞",
        "Pinyin": "zàn"
    },
    {
        "Pinyin": "help, support, assist, aid"
    },
    {
        "Character": "丙",
        "Pinyin": "bǐng"
    },
    {
        "Pinyin": "third; 3rd heavenly stem"
    },
    {
        "Character": "鹅",
        "Pinyin": "é"
    },
    {
        "Pinyin": "goose"
    },
    {
        "Character": "痕",
        "Pinyin": "hén"
    },
    {
        "Pinyin": "scar; mark; trace"
    },
    {
        "Character": "液",
        "Pinyin": "yè"
    },
    {
        "Pinyin": "sap, juice, liquid, fluid"
    },
    {
        "Character": "涨",
        "Pinyin": "zhǎng"
    },
    {
        "Pinyin": "rise in price"
    },
    {
        "Character": "巡",
        "Pinyin": "xún"
    },
    {
        "Pinyin": "patrol, go on circuit, cruise"
    },
    {
        "Character": "烤",
        "Pinyin": "kǎo"
    },
    {
        "Pinyin": "bake, roast, toast, cook"
    },
    {
        "Character": "贱",
        "Pinyin": "jiàn"
    },
    {
        "Pinyin": "mean, low; cheap, worthless"
    },
    {
        "Character": "丈",
        "Pinyin": "zhàng"
    },
    {
        "Pinyin": "unit of length equal 3.3 meters; gentleman, man, husband"
    },
    {
        "Character": "趋",
        "Pinyin": "qū"
    },
    {
        "Pinyin": "hasten, hurry; be attracted to"
    },
    {
        "Character": "沿",
        "Pinyin": "yán"
    },
    {
        "Pinyin": "follow course, go along"
    },
    {
        "Character": "滥",
        "Pinyin": "làn"
    },
    {
        "Pinyin": "flood, overflow; excessive"
    },
    {
        "Character": "措",
        "Pinyin": "cuò"
    },
    {
        "Pinyin": "place; collect, arrange; employ"
    },
    {
        "Character": "么",
        "Pinyin": "mo"
    },
    {
        "Pinyin": "interrogative final particle; insignificant, small, tiny"
    },
    {
        "Character": "扭",
        "Pinyin": "niǔ"
    },
    {
        "Pinyin": "turn, twist, wrench; seize, grasp"
    },
    {
        "Character": "捉",
        "Pinyin": "zhuō"
    },
    {
        "Pinyin": "grasp, clutch; catch, seize"
    },
    {
        "Character": "碗",
        "Pinyin": "wǎn"
    },
    {
        "Pinyin": "bowl, small dish"
    },
    {
        "Character": "炉",
        "Pinyin": "lú"
    },
    {
        "Pinyin": "fireplace, stove, oven, furnace"
    },
    {
        "Character": "脏",
        "Pinyin": "zāng"
    },
    {
        "Pinyin": "dirty; firm; fat"
    },
    {
        "Character": "叔",
        "Pinyin": "shū"
    },
    {
        "Pinyin": "father's younger brother"
    },
    {
        "Character": "秘",
        "Pinyin": "mì"
    },
    {
        "Pinyin": "secret, mysterious, abstruse"
    },
    {
        "Character": "腰",
        "Pinyin": "yāo"
    },
    {
        "Pinyin": "waist; kidney"
    },
    {
        "Character": "漠",
        "Pinyin": "mò"
    },
    {
        "Pinyin": "desert; aloof, indifferent, cool"
    },
    {
        "Character": "翅",
        "Pinyin": "chì"
    },
    {
        "Pinyin": "wings; fin"
    },
    {
        "Character": "余",
        "Pinyin": "yú"
    },
    {
        "Pinyin": "surplus, excess, remainder"
    },
    {
        "Character": "胶",
        "Pinyin": "jiāo"
    },
    {
        "Pinyin": "glue, gum, resin, rubber"
    },
    {
        "Character": "妥",
        "Pinyin": "tuǒ"
    },
    {
        "Pinyin": "satisfactory, appropriate"
    },
    {
        "Character": "谣",
        "Pinyin": "yáo"
    },
    {
        "Pinyin": "sing; folksong, ballad; rumor"
    },
    {
        "Character": "缸",
        "Pinyin": "gāng"
    },
    {
        "Pinyin": "earthen jug, crock, cistern"
    },
    {
        "Character": "芒",
        "Pinyin": "máng"
    },
    {
        "Pinyin": "Miscanthus sinensis"
    },
    {
        "Character": "陵",
        "Pinyin": "líng"
    },
    {
        "Pinyin": "hill, mound; mausoleum"
    },
    {
        "Character": "雯",
        "Pinyin": "wén"
    },
    {
        "Pinyin": "cloud patterns, coloring of cloud"
    },
    {
        "Character": "轨",
        "Pinyin": "guǐ"
    },
    {
        "Pinyin": "track, rut, path"
    },
    {
        "Character": "虾",
        "Pinyin": "xiā"
    },
    {
        "Pinyin": "shrimp, prawn"
    },
    {
        "Character": "寸",
        "Pinyin": "cùn"
    },
    {
        "Pinyin": "inch; small, tiny; rad. no. 41"
    },
    {
        "Character": "呦",
        "Pinyin": "yōu"
    },
    {
        "Pinyin": "the bleating of the deer"
    },
    {
        "Character": "洒",
        "Pinyin": "sǎ"
    },
    {
        "Pinyin": "sprinkle, splash; scatter, throw"
    },
    {
        "Character": "贞",
        "Pinyin": "zhēn"
    },
    {
        "Pinyin": "virtuous, chaste, pure; loyal"
    },
    {
        "Character": "蜂",
        "Pinyin": "fēng"
    },
    {
        "Pinyin": "bee, wasp, hornet"
    },
    {
        "Character": "钻",
        "Pinyin": "zuàn"
    },
    {
        "Pinyin": "drill, bore; pierce; diamond"
    },
    {
        "Character": "厕",
        "Pinyin": "cè"
    },
    {
        "Pinyin": "toilet, lavatory; mingle with"
    },
    {
        "Character": "鹤",
        "Pinyin": "hè"
    },
    {
        "Pinyin": "crane; Grus species (various)"
    },
    {
        "Character": "摔",
        "Pinyin": "shuāi"
    },
    {
        "Pinyin": "fall ground, stumble, trip"
    },
    {
        "Character": "盒",
        "Pinyin": "hé"
    },
    {
        "Pinyin": "small box or case; casket"
    },
    {
        "Character": "虫",
        "Pinyin": "chóng"
    },
    {
        "Pinyin": "worms; insects"
    },
    {
        "Character": "氛",
        "Pinyin": "fēn"
    },
    {
        "Pinyin": "gas, vapor, air"
    },
    {
        "Character": "悄",
        "Pinyin": "qiǎo"
    },
    {
        "Pinyin": "silent, quiet, still; anxious"
    },
    {
        "Character": "霖",
        "Pinyin": "lín"
    },
    {
        "Pinyin": "long spell of rain, copious rain"
    },
    {
        "Character": "愧",
        "Pinyin": "kuì"
    },
    {
        "Pinyin": "ashamed, conscience-stricken"
    },
    {
        "Character": "斜",
        "Pinyin": "xié"
    },
    {
        "Pinyin": "slanting, sloping, inclined"
    },
    {
        "Character": "尸",
        "Pinyin": "shī"
    },
    {
        "Pinyin": "corpse, carcass"
    },
    {
        "Character": "循",
        "Pinyin": "xún"
    },
    {
        "Pinyin": "obey, comply with, follow"
    },
    {
        "Character": "俩",
        "Pinyin": "liǎ"
    },
    {
        "Pinyin": "clever, skilled; two, pair"
    },
    {
        "Character": "堡",
        "Pinyin": "bǎo"
    },
    {
        "Pinyin": "fort, fortress; town, village"
    },
    {
        "Character": "旺",
        "Pinyin": "wàng"
    },
    {
        "Pinyin": "prosper; prosperous; increase"
    },
    {
        "Character": "恶",
        "Pinyin": "è"
    },
    {
        "Pinyin": "evil, wicked, bad, foul"
    },
    {
        "Character": "叉",
        "Pinyin": "cha"
    },
    {
        "Pinyin": "crotch; fork, prong"
    },
    {
        "Character": "燕",
        "Pinyin": "yàn"
    },
    {
        "Pinyin": "swallow (bird); comfort, enjoy"
    },
    {
        "Character": "津",
        "Pinyin": "jīn"
    },
    {
        "Pinyin": "ferry; saliva; ford"
    },
    {
        "Character": "臣",
        "Pinyin": "chén"
    },
    {
        "Pinyin": "minister, statesman, official"
    },
    {
        "Character": "丧",
        "Pinyin": "sāng"
    },
    {
        "Pinyin": "mourning; mourn; funeral"
    },
    {
        "Character": "茂",
        "Pinyin": "mào"
    },
    {
        "Pinyin": "thick, lush, dense; talented"
    },
    {
        "Character": "椅",
        "Pinyin": "yǐ"
    },
    {
        "Pinyin": "chair, seat"
    },
    {
        "Character": "缠",
        "Pinyin": "chán"
    },
    {
        "Pinyin": "wrap, wind around; tie, bind"
    },
    {
        "Character": "刑",
        "Pinyin": "xíng"
    },
    {
        "Pinyin": "punishment, penalty; law"
    },
    {
        "Character": "脉",
        "Pinyin": "mò"
    },
    {
        "Pinyin": "blood vessels, veins, arteries"
    },
    {
        "Character": "杉",
        "Pinyin": "shān"
    },
    {
        "Pinyin": "various species of pine and fir"
    },
    {
        "Character": "泊",
        "Pinyin": "bó"
    },
    {
        "Pinyin": "anchor vessel; lie at anchor"
    },
    {
        "Character": "撒",
        "Pinyin": "sǎ"
    },
    {
        "Pinyin": "release, cast away, let go; disperse; relax"
    },
    {
        "Character": "递",
        "Pinyin": "dì"
    },
    {
        "Pinyin": "hand over, deliver; substitute"
    },
    {
        "Character": "疲",
        "Pinyin": "pí"
    },
    {
        "Pinyin": "feel tired, be exhausted; weak"
    },
    {
        "Character": "杆",
        "Pinyin": "gǎn"
    },
    {
        "Pinyin": "pole; stick; club; pole as unit"
    },
    {
        "Character": "趁",
        "Pinyin": "chèn"
    },
    {
        "Pinyin": "take advantage of, avail oneself"
    },
    {
        "Character": "欠",
        "Pinyin": "qiàn"
    },
    {
        "Pinyin": "owe, lack, be deficient; KangXi radical number 76"
    },
    {
        "Character": "盈",
        "Pinyin": "yíng"
    },
    {
        "Pinyin": "fill; full, overflowing; surplus"
    },
    {
        "Character": "晃",
        "Pinyin": "huǎng"
    },
    {
        "Pinyin": "bright, dazzling; to sway, shake"
    },
    {
        "Character": "蛇",
        "Pinyin": "shé"
    },
    {
        "Pinyin": "snake"
    },
    {
        "Character": "牡",
        "Pinyin": "mǔ"
    },
    {
        "Pinyin": "male of animals; bolt of door"
    },
    {
        "Character": "慎",
        "Pinyin": "shèn"
    },
    {
        "Pinyin": "act with care, be cautious"
    },
    {
        "Character": "粒",
        "Pinyin": "lì"
    },
    {
        "Pinyin": "grain; small particle"
    },
    {
        "Character": "系",
        "Pinyin": "xì"
    },
    {
        "Pinyin": "attach, connect, unite, fasten"
    },
    {
        "Character": "倦",
        "Pinyin": "juàn"
    },
    {
        "Pinyin": "be tired of, weary"
    },
    {
        "Character": "溜",
        "Pinyin": "liū"
    },
    {
        "Pinyin": "slide, glide, slip; slippery"
    },
    {
        "Character": "遵",
        "Pinyin": "zūn"
    },
    {
        "Pinyin": "obey, comply with, follow; honor"
    },
    {
        "Character": "腐",
        "Pinyin": "fǔ"
    },
    {
        "Pinyin": "rot, decay, spoil; rotten"
    },
    {
        "Character": "疾",
        "Pinyin": "jí"
    },
    {
        "Pinyin": "illness, disease, sickness; to hate"
    },
    {
        "Character": "鸭",
        "Pinyin": "yā"
    },
    {
        "Pinyin": "duck; Anas species (various)"
    },
    {
        "Character": "璃",
        "Pinyin": "lí"
    },
    {
        "Pinyin": "glass"
    },
    {
        "Character": "牢",
        "Pinyin": "láo"
    },
    {
        "Pinyin": "prison; stable, pen; secure"
    },
    {
        "Character": "劣",
        "Pinyin": "liè"
    },
    {
        "Pinyin": "bad, inferior; slightly"
    },
    {
        "Character": "患",
        "Pinyin": "huàn"
    },
    {
        "Pinyin": "suffer, worry about; suffering"
    },
    {
        "Character": "祂",
        "Pinyin": "tā"
    },
    {
        "Pinyin": "he"
    },
    {
        "Character": "呈",
        "Pinyin": "chéng"
    },
    {
        "Pinyin": "submit, show; appear; petition"
    },
    {
        "Character": "浑",
        "Pinyin": "hún"
    },
    {
        "Pinyin": "muddy, turbid; blend, merge, mix"
    },
    {
        "Character": "剂",
        "Pinyin": "jì"
    },
    {
        "Pinyin": "medicinal preparation"
    },
    {
        "Character": "妖",
        "Pinyin": "yāo"
    },
    {
        "Pinyin": "strange, weird, supernatural"
    },
    {
        "Character": "玻",
        "Pinyin": "bō"
    },
    {
        "Pinyin": "glass"
    },
    {
        "Character": "塑",
        "Pinyin": "sù"
    },
    {
        "Pinyin": "model in clay, sculpt; plastics"
    },
    {
        "Character": "飙",
        "Pinyin": "biāo"
    },
    {
        "Pinyin": "whirlwind, stormy gale"
    },
    {
        "Character": "伏",
        "Pinyin": "fú"
    },
    {
        "Pinyin": "crouch, crawl, lie hidden, conceal"
    },
    {
        "Character": "弊",
        "Pinyin": "bì"
    },
    {
        "Pinyin": "evil, wrong, bad; criminal"
    },
    {
        "Character": "扮",
        "Pinyin": "bàn"
    },
    {
        "Pinyin": "dress up; dress up as"
    },
    {
        "Character": "侬",
        "Pinyin": "nóng"
    },
    {
        "Pinyin": "I; you; family name"
    },
    {
        "Character": "渴",
        "Pinyin": "kě"
    },
    {
        "Pinyin": "thirsty, parched; yearn, pine"
    },
    {
        "Character": "歪",
        "Pinyin": "wāi"
    },
    {
        "Pinyin": "slant; inclined; askewd, awry"
    },
    {
        "Character": "苗",
        "Pinyin": "miáo"
    },
    {
        "Pinyin": "sprouts; Miao nationality"
    },
    {
        "Character": "汗",
        "Pinyin": "hàn"
    },
    {
        "Pinyin": "perspiration, sweat"
    },
    {
        "Character": "陶",
        "Pinyin": "táo"
    },
    {
        "Pinyin": "pottery, ceramics"
    },
    {
        "Character": "栋",
        "Pinyin": "dòng"
    },
    {
        "Pinyin": "the main beams supporting a house"
    },
    {
        "Character": "琳",
        "Pinyin": "lín"
    },
    {
        "Pinyin": "beautiful jade, gem"
    },
    {
        "Character": "蓉",
        "Pinyin": "róng"
    },
    {
        "Pinyin": "hibiscus; Chengdu, Sichuan"
    },
    {
        "Character": "埋",
        "Pinyin": "mái"
    },
    {
        "Pinyin": "bury, secrete, conceal"
    },
    {
        "Character": "叡",
        "Pinyin": "ruì"
    },
    {
        "Pinyin": "astute, profound, shrewd"
    },
    {
        "Character": "澎",
        "Pinyin": "péng"
    },
    {
        "Pinyin": "splatter"
    },
    {
        "Character": "并",
        "Pinyin": "bìng"
    },
    {
        "Pinyin": "combine, annex"
    },
    {
        "Character": "泣",
        "Pinyin": "qì"
    },
    {
        "Pinyin": "cry, sob, weep"
    },
    {
        "Character": "腾",
        "Pinyin": "téng"
    },
    {
        "Pinyin": "fly; gallop; run; prance; rise"
    },
    {
        "Character": "柯",
        "Pinyin": "kē"
    },
    {
        "Pinyin": "axe-handle; stalk, bough; surname"
    },
    {
        "Character": "催",
        "Pinyin": "cuī"
    },
    {
        "Pinyin": "press, urge"
    },
    {
        "Character": "畅",
        "Pinyin": "chàng"
    },
    {
        "Pinyin": "smoothly, freely, unrestrained"
    },
    {
        "Character": "勾",
        "Pinyin": "gōu"
    },
    {
        "Pinyin": "hook, join, connect; entice"
    },
    {
        "Character": "樱",
        "Pinyin": "yīng"
    },
    {
        "Pinyin": "cherry, cherry blossom"
    },
    {
        "Character": "阮",
        "Pinyin": "ruǎn"
    },
    {
        "Pinyin": "ancient musical instrument: surname"
    },
    {
        "Character": "斥",
        "Pinyin": "chì"
    },
    {
        "Pinyin": "to scold, upbraid, accuse, reproach"
    },
    {
        "Character": "搜",
        "Pinyin": "sōu"
    },
    {
        "Pinyin": "search, seek; investigate"
    },
    {
        "Character": "踩",
        "Pinyin": "cǎi"
    },
    {
        "Pinyin": "step on"
    },
    {
        "Character": "返",
        "Pinyin": "fǎn"
    },
    {
        "Pinyin": "return, revert to, restore"
    },
    {
        "Character": "坛",
        "Pinyin": "tán"
    },
    {
        "Pinyin": "an earthenware jar, a jug"
    },
    {
        "Character": "垂",
        "Pinyin": "chuí"
    },
    {
        "Pinyin": "let down; suspend, hand; down"
    },
    {
        "Character": "唤",
        "Pinyin": "huàn"
    },
    {
        "Pinyin": "call, summon; invite; be called"
    },
    {
        "Character": "储",
        "Pinyin": "chǔ"
    },
    {
        "Pinyin": "to save money, store, reserve; an heir"
    },
    {
        "Character": "贩",
        "Pinyin": "fàn"
    },
    {
        "Pinyin": "peddler, hawker, street merchant"
    },
    {
        "Character": "匆",
        "Pinyin": "cōng"
    },
    {
        "Pinyin": "hastily, in haste, hurriedly"
    },
    {
        "Character": "添",
        "Pinyin": "tiān"
    },
    {
        "Pinyin": "append, add to; increase"
    },
    {
        "Character": "坑",
        "Pinyin": "kēng"
    },
    {
        "Pinyin": "pit, hole; bury, trap; harry"
    },
    {
        "Character": "柴",
        "Pinyin": "chái"
    },
    {
        "Pinyin": "firewood, faggots, fuel"
    },
    {
        "Character": "邓",
        "Pinyin": "dèng"
    },
    {
        "Pinyin": "surname"
    },
    {
        "Character": "糖",
        "Pinyin": "táng"
    },
    {
        "Pinyin": "sugar; candy; sweets"
    },
    {
        "Character": "昆",
        "Pinyin": "kūn"
    },
    {
        "Pinyin": "elder brother; descendants"
    },
    {
        "Character": "暮",
        "Pinyin": "mù"
    },
    {
        "Pinyin": "evening, dusk, sunset; ending"
    },
    {
        "Character": "柜",
        "Pinyin": "guì"
    },
    {
        "Pinyin": "cupboard, wardrobe, counter"
    },
    {
        "Character": "娟",
        "Pinyin": "juān"
    },
    {
        "Pinyin": "beautiful, graceful"
    },
    {
        "Character": "腹",
        "Pinyin": "fù"
    },
    {
        "Pinyin": "stomach, belly, abdomen; inside"
    },
    {
        "Character": "煮",
        "Pinyin": "zhǔ"
    },
    {
        "Pinyin": "cook"
    },
    {
        "Character": "泛",
        "Pinyin": "fàn"
    },
    {
        "Pinyin": "to drift, float; careless, reckless"
    },
    {
        "Character": "稀",
        "Pinyin": "xī"
    },
    {
        "Pinyin": "rare, unusual, scarce; sparse"
    },
    {
        "Character": "兹",
        "Pinyin": "zī"
    },
    {
        "Pinyin": "now, here; this; time, year"
    },
    {
        "Character": "抑",
        "Pinyin": "yì"
    },
    {
        "Pinyin": "press down, repress; curb, hinder"
    },
    {
        "Character": "携",
        "Pinyin": "xī"
    },
    {
        "Pinyin": "lead by hand, take with; carry"
    },
    {
        "Character": "芭",
        "Pinyin": "bā"
    },
    {
        "Pinyin": "plantain or banana palm; fragrant"
    },
    {
        "Character": "框",
        "Pinyin": "kuàng"
    },
    {
        "Pinyin": "frame; framework; door frame"
    },
    {
        "Character": "彷",
        "Pinyin": "páng"
    },
    {
        "Pinyin": "like, resembling; resemble"
    },
    {
        "Character": "罐",
        "Pinyin": "guàn"
    },
    {
        "Pinyin": "jar, jug, pitcher, pot"
    },
    {
        "Character": "虹",
        "Pinyin": "hóng"
    },
    {
        "Pinyin": "rainbow"
    },
    {
        "Character": "拷",
        "Pinyin": "kǎo"
    },
    {
        "Pinyin": "torture and interrogate; hit"
    },
    {
        "Character": "萍",
        "Pinyin": "píng"
    },
    {
        "Pinyin": "duckweed; wandering, traveling"
    },
    {
        "Character": "臂",
        "Pinyin": "bì"
    },
    {
        "Pinyin": "arm"
    },
    {
        "Character": "袭",
        "Pinyin": "xí"
    },
    {
        "Pinyin": "raid, attack; inherit"
    },
    {
        "Character": "叙",
        "Pinyin": "xù"
    },
    {
        "Pinyin": "express, state, relate, narrate"
    },
    {
        "Character": "吻",
        "Pinyin": "wěn"
    },
    {
        "Pinyin": "kiss; the lips; coinciding"
    },
    {
        "Character": "仿",
        "Pinyin": "fǎng"
    },
    {
        "Pinyin": "imitate, copy; as if"
    },
    {
        "Character": "贼",
        "Pinyin": "zéi"
    },
    {
        "Pinyin": "thief, traitor"
    },
    {
        "Character": "羯",
        "Pinyin": "jié"
    },
    {
        "Pinyin": "wether, castrated ram; deer skin"
    },
    {
        "Character": "浴",
        "Pinyin": "yù"
    },
    {
        "Pinyin": "bathe, wash; bath"
    },
    {
        "Character": "体",
        "Pinyin": "tǐ"
    },
    {
        "Pinyin": "body; group, class, body, unit"
    },
    {
        "Character": "翠",
        "Pinyin": "cuì"
    },
    {
        "Pinyin": "color green; kingfisher"
    },
    {
        "Character": "灿",
        "Pinyin": "càn"
    },
    {
        "Pinyin": "vivid, illuminating; bright"
    },
    {
        "Character": "敲",
        "Pinyin": "qiāo"
    },
    {
        "Pinyin": "strike, beat, pound, hammer; rap"
    },
    {
        "Character": "胁",
        "Pinyin": "xié"
    },
    {
        "Pinyin": "ribs; armpits; flank; threaten"
    },
    {
        "Character": "侣",
        "Pinyin": "lǚ"
    },
    {
        "Pinyin": "companion; associate with"
    },
    {
        "Character": "蚁",
        "Pinyin": "yǐ"
    },
    {
        "Pinyin": "ants"
    },
    {
        "Character": "秩",
        "Pinyin": "zhì"
    },
    {
        "Pinyin": "order; orderly; salary; decade"
    },
    {
        "Character": "佑",
        "Pinyin": "yòu"
    },
    {
        "Pinyin": "help, protect, bless"
    },
    {
        "Character": "谨",
        "Pinyin": "jǐn"
    },
    {
        "Pinyin": "prudent, cautious; attentive"
    },
    {
        "Character": "寡",
        "Pinyin": "guǎ"
    },
    {
        "Pinyin": "widowed; alone, friendless"
    },
    {
        "Character": "岳",
        "Pinyin": "yuè"
    },
    {
        "Pinyin": "mountain peak; surname"
    },
    {
        "Character": "赔",
        "Pinyin": "péi"
    },
    {
        "Pinyin": "indemnify, suffer loss"
    },
    {
        "Character": "掩",
        "Pinyin": "yǎn"
    },
    {
        "Pinyin": "to cover (with the hand); shut, conceal; ambush"
    },
    {
        "Character": "匙",
        "Pinyin": "chí"
    },
    {
        "Pinyin": "spoon; surname"
    },
    {
        "Character": "曹",
        "Pinyin": "cáo"
    },
    {
        "Pinyin": "ministry officials; surname"
    },
    {
        "Character": "纽",
        "Pinyin": "niǔ"
    },
    {
        "Pinyin": "knot; button; handle, knob; tie"
    },
    {
        "Character": "签",
        "Pinyin": "qiān"
    },
    {
        "Pinyin": "sign, endorse; slip of paper"
    },
    {
        "Character": "晋",
        "Pinyin": "jìn"
    },
    {
        "Pinyin": "advance, increase; promote"
    },
    {
        "Character": "喻",
        "Pinyin": "yù"
    },
    {
        "Pinyin": "metaphor, analogy; example; like"
    },
    {
        "Character": "绵",
        "Pinyin": "mián"
    },
    {
        "Pinyin": "cotton wad; wool; soft, downy"
    },
    {
        "Character": "咏",
        "Pinyin": "yǒng"
    },
    {
        "Pinyin": "sing, hum, chant"
    },
    {
        "Character": "摊",
        "Pinyin": "tān"
    },
    {
        "Pinyin": "spread out, open; apportion"
    },
    {
        "Character": "馨",
        "Pinyin": "xīn"
    },
    {
        "Pinyin": "fragrant, aromatic; distant fragrance"
    },
    {
        "Character": "珊",
        "Pinyin": "shān"
    },
    {
        "Pinyin": "coral"
    },
    {
        "Character": "孕",
        "Pinyin": "yùn"
    },
    {
        "Pinyin": "be pregnant, pregnancy"
    },
    {
        "Character": "杰",
        "Pinyin": "jié"
    },
    {
        "Pinyin": "hero; outstanding, remarkable"
    },
    {
        "Character": "拘",
        "Pinyin": "jū"
    },
    {
        "Pinyin": "restrain, seize, detain"
    },
    {
        "Character": "哟",
        "Pinyin": "yo"
    },
    {
        "Pinyin": "ah, final particle"
    },
    {
        "Character": "羡",
        "Pinyin": "xiàn"
    },
    {
        "Pinyin": "envy, admire; praise; covet"
    },
    {
        "Character": "肤",
        "Pinyin": "fū"
    },
    {
        "Pinyin": "skin; superficial, shallow"
    },
    {
        "Character": "肝",
        "Pinyin": "gān"
    },
    {
        "Pinyin": "liver"
    },
    {
        "Character": "袍",
        "Pinyin": "páo"
    },
    {
        "Pinyin": "long gown, robe, cloak"
    },
    {
        "Character": "罩",
        "Pinyin": "zhào"
    },
    {
        "Pinyin": "basket for catching fish; cover"
    },
    {
        "Character": "叛",
        "Pinyin": "pàn"
    },
    {
        "Pinyin": "rebel; rebellion; rebellious"
    },
    {
        "Character": "御",
        "Pinyin": "yù"
    },
    {
        "Pinyin": "defend, resist, hold out against"
    },
    {
        "Character": "谜",
        "Pinyin": "mí"
    },
    {
        "Pinyin": "riddle, conundrum; puzzle"
    },
    {
        "Character": "嫁",
        "Pinyin": "jià"
    },
    {
        "Pinyin": "to marry, give a daughter in marriage"
    },
    {
        "Character": "庙",
        "Pinyin": "miào"
    },
    {
        "Pinyin": "temple, shrine; imperial court"
    },
    {
        "Character": "肠",
        "Pinyin": "cháng"
    },
    {
        "Pinyin": "intestines; emotions; sausage"
    },
    {
        "Character": "谎",
        "Pinyin": "huǎng"
    },
    {
        "Pinyin": "lie"
    },
    {
        "Character": "潘",
        "Pinyin": "pān"
    },
    {
        "Pinyin": "surname; water in which rice has been rinsed; a river that flows into the Han"
    },
    {
        "Character": "埔",
        "Pinyin": "bù"
    },
    {
        "Pinyin": "plain, arena; port, market"
    },
    {
        "Character": "卜",
        "Pinyin": "bó"
    },
    {
        "Pinyin": "radish"
    },
    {
        "Character": "占",
        "Pinyin": "zhān"
    },
    {
        "Pinyin": "divine; observe; versify"
    },
    {
        "Character": "拦",
        "Pinyin": "lán"
    },
    {
        "Pinyin": "obstruct, impede, bar, hinder"
    },
    {
        "Character": "煌",
        "Pinyin": "huáng"
    },
    {
        "Pinyin": "bright, shining, luminous"
    },
    {
        "Character": "俄",
        "Pinyin": "é"
    },
    {
        "Pinyin": "sudden(ly), soon; Russian"
    },
    {
        "Character": "札",
        "Pinyin": "zhá"
    },
    {
        "Pinyin": "letter, note; correspondence"
    },
    {
        "Character": "骤",
        "Pinyin": "zòu"
    },
    {
        "Pinyin": "procedure; gallop; sudden(ly)"
    },
    {
        "Character": "陌",
        "Pinyin": "mò"
    },
    {
        "Pinyin": "foot path between rice fields"
    },
    {
        "Character": "澄",
        "Pinyin": "chéng"
    },
    {
        "Pinyin": "purify water by allowing sediment to settle; clear, pure"
    },
    {
        "Character": "仓",
        "Pinyin": "cāng"
    },
    {
        "Pinyin": "granary; berth; sea"
    },
    {
        "Character": "匪",
        "Pinyin": "fěi"
    },
    {
        "Pinyin": "bandits, robbers, gangsters"
    },
    {
        "Character": "宵",
        "Pinyin": "xiāo"
    },
    {
        "Pinyin": "night, evening, dark"
    },
    {
        "Character": "钮",
        "Pinyin": "niǔ"
    },
    {
        "Pinyin": "button, knob; surname"
    },
    {
        "Character": "岗",
        "Pinyin": "gǎng"
    },
    {
        "Pinyin": "post; position"
    },
    {
        "Character": "荡",
        "Pinyin": "dàng"
    },
    {
        "Pinyin": "pond, pool; wash away, cleanse"
    },
    {
        "Character": "卸",
        "Pinyin": "xiè"
    },
    {
        "Pinyin": "lay down; retire from office"
    },
    {
        "Character": "旨",
        "Pinyin": "zhǐ"
    },
    {
        "Pinyin": "purpose, aim; excellent"
    },
    {
        "Character": "粽",
        "Pinyin": "zòng"
    },
    {
        "Pinyin": "dumpling made of glutinous rice"
    },
    {
        "Character": "贸",
        "Pinyin": "mào"
    },
    {
        "Pinyin": "trade, barter; mixed; rashly"
    },
    {
        "Character": "舌",
        "Pinyin": "shé"
    },
    {
        "Pinyin": "tongue; clapper of bell; KangXi radical 135"
    },
    {
        "Character": "历",
        "Pinyin": "lì"
    },
    {
        "Pinyin": "take place, past, history"
    },
    {
        "Character": "叮",
        "Pinyin": "dīng"
    },
    {
        "Pinyin": "exhort or enjoin repeatedly"
    },
    {
        "Character": "咒",
        "Pinyin": "zhòu"
    },
    {
        "Pinyin": "curse, damn, incantation"
    },
    {
        "Character": "钥",
        "Pinyin": "yào"
    },
    {
        "Pinyin": "key; lock"
    },
    {
        "Character": "苹",
        "Pinyin": "pín"
    },
    {
        "Pinyin": "apple"
    },
    {
        "Character": "祭",
        "Pinyin": "jì"
    },
    {
        "Pinyin": "sacrifice to, worship"
    },
    {
        "Character": "屈",
        "Pinyin": "qū"
    },
    {
        "Pinyin": "bend, flex; bent, crooked; crouch"
    },
    {
        "Character": "陋",
        "Pinyin": "lòu"
    },
    {
        "Pinyin": "narrow; crude, coarse; ugly"
    },
    {
        "Character": "雀",
        "Pinyin": "què"
    },
    {
        "Pinyin": "sparrow"
    },
    {
        "Character": "睹",
        "Pinyin": "dǔ"
    },
    {
        "Pinyin": "look at, gaze at; observe"
    },
    {
        "Character": "媚",
        "Pinyin": "mèi"
    },
    {
        "Pinyin": "charming, attractive; flatter"
    },
    {
        "Character": "娜",
        "Pinyin": "nuó"
    },
    {
        "Pinyin": "elegant, graceful, delicate"
    },
    {
        "Character": "诱",
        "Pinyin": "yòu"
    },
    {
        "Pinyin": "persuade, entice, induce; guide"
    },
    {
        "Character": "衷",
        "Pinyin": "zhōng"
    },
    {
        "Pinyin": "heart, from bottom of one's heart"
    },
    {
        "Character": "菁",
        "Pinyin": "jīng"
    },
    {
        "Pinyin": "flower of leek family; turnip"
    },
    {
        "Character": "殿",
        "Pinyin": "diàn"
    },
    {
        "Pinyin": "hall; palace; temple"
    },
    {
        "Character": "撕",
        "Pinyin": "sī"
    },
    {
        "Pinyin": "rip, tear; buy cloth"
    },
    {
        "Character": "蠢",
        "Pinyin": "chǔn"
    },
    {
        "Pinyin": "wriggle; stupid; silly; fat"
    },
    {
        "Character": "惟",
        "Pinyin": "wéi"
    },
    {
        "Pinyin": "but, however, nevertheless; only"
    },
    {
        "Character": "嚣",
        "Pinyin": "xiāo"
    },
    {
        "Pinyin": "be noisy; treat with contempt"
    },
    {
        "Character": "踊",
        "Pinyin": "yǒng"
    },
    {
        "Pinyin": "leap, jump"
    },
    {
        "Character": "跨",
        "Pinyin": "kuà"
    },
    {
        "Pinyin": "straddle, bestride, ride; carry"
    },
    {
        "Character": "膀",
        "Pinyin": "bǎng"
    },
    {
        "Pinyin": "upper arm; shoulder; wing"
    },
    {
        "Character": "筒",
        "Pinyin": "tǒng"
    },
    {
        "Pinyin": "thick piece of bamboo; pipe"
    },
    {
        "Character": "纹",
        "Pinyin": "wén"
    },
    {
        "Pinyin": "line, streak, stripe; wrinkle"
    },
    {
        "Character": "乳",
        "Pinyin": "rǔ"
    },
    {
        "Pinyin": "breast, nipples; milk, suckle"
    },
    {
        "Character": "仗",
        "Pinyin": "zhàng"
    },
    {
        "Pinyin": "rely upon; protector; fight; war, weaponry"
    },
    {
        "Character": "轴",
        "Pinyin": "zhóu"
    },
    {
        "Pinyin": "axle, axletree; pivot; axis"
    },
    {
        "Character": "撤",
        "Pinyin": "chè"
    },
    {
        "Pinyin": "omit; remove; withdraw"
    },
    {
        "Character": "潭",
        "Pinyin": "tán"
    },
    {
        "Pinyin": "deep pool, lake; deep, profound"
    },
    {
        "Character": "佛",
        "Pinyin": "fó"
    },
    {
        "Pinyin": "Buddha; of Buddhism; merciful percon; Buddhist image; the dead (Jap.)"
    },
    {
        "Character": "桂",
        "Pinyin": "guì"
    },
    {
        "Pinyin": "cassia or cinnamon"
    },
    {
        "Character": "愤",
        "Pinyin": "fèn"
    },
    {
        "Pinyin": "resent, hate; indignant"
    },
    {
        "Character": "捧",
        "Pinyin": "pěng"
    },
    {
        "Pinyin": "hold up in two hands"
    },
    {
        "Character": "袖",
        "Pinyin": "xiù"
    },
    {
        "Pinyin": "sleeve; put something in sleeve"
    },
    {
        "Character": "埃",
        "Pinyin": "āi"
    },
    {
        "Pinyin": "fine dust, dirt"
    },
    {
        "Character": "壹",
        "Pinyin": "yī"
    },
    {
        "Pinyin": "number one"
    },
    {
        "Character": "赫",
        "Pinyin": "hè"
    },
    {
        "Pinyin": "bright, radiant, glowing"
    },
    {
        "Character": "谦",
        "Pinyin": "qiān"
    },
    {
        "Pinyin": "humble, modest"
    },
    {
        "Character": "汇",
        "Pinyin": "huì"
    },
    {
        "Pinyin": "collect, compile, assemble; hedgehog"
    },
    {
        "Character": "魏",
        "Pinyin": "wèi"
    },
    {
        "Pinyin": "kingdom of Wei; surname"
    },
    {
        "Character": "粹",
        "Pinyin": "cuì"
    },
    {
        "Pinyin": "pure; unadulterated; select"
    },
    {
        "Character": "傅",
        "Pinyin": "fù"
    },
    {
        "Pinyin": "tutor, teacher; assist; surname"
    },
    {
        "Character": "寮",
        "Pinyin": "liáo"
    },
    {
        "Pinyin": "shanty, hut, shack"
    },
    {
        "Character": "猴",
        "Pinyin": "hóu"
    },
    {
        "Pinyin": "monkey, ape; monkey-like"
    },
    {
        "Character": "衰",
        "Pinyin": "shuāi"
    },
    {
        "Pinyin": "decline, falter, decrease; weaken"
    },
    {
        "Character": "辜",
        "Pinyin": "gū"
    },
    {
        "Pinyin": "crime, criminal offense"
    },
    {
        "Character": "恳",
        "Pinyin": "kěn"
    },
    {
        "Pinyin": "sincere, earnest, cordial"
    },
    {
        "Character": "桶",
        "Pinyin": "tǒng"
    },
    {
        "Pinyin": "pail, bucket, tub; cask, keg"
    },
    {
        "Character": "吋",
        "Pinyin": "cùn"
    },
    {
        "Pinyin": "inch"
    },
    {
        "Character": "衫",
        "Pinyin": "shān"
    },
    {
        "Pinyin": "shirt; robe; gown; jacket"
    },
    {
        "Character": "瞬",
        "Pinyin": "shùn"
    },
    {
        "Pinyin": "wink, blink; in a wink, a flash"
    },
    {
        "Character": "冻",
        "Pinyin": "dòng"
    },
    {
        "Pinyin": "freeze; cold, congeal; jelly"
    },
    {
        "Character": "猎",
        "Pinyin": "liè"
    },
    {
        "Pinyin": "hunt; field sports"
    },
    {
        "Character": "琼",
        "Pinyin": "qióng"
    },
    {
        "Pinyin": "jade; rare, precious; elegant"
    },
    {
        "Character": "卿",
        "Pinyin": "qīng"
    },
    {
        "Pinyin": "noble, high officer"
    },
    {
        "Character": "戚",
        "Pinyin": "qī"
    },
    {
        "Pinyin": "relative; be related to; sad"
    },
    {
        "Character": "卓",
        "Pinyin": "zhuō"
    },
    {
        "Pinyin": "profound, brilliant, lofty"
    },
    {
        "Character": "殖",
        "Pinyin": "zhí"
    },
    {
        "Pinyin": "breed, spawn; increase; prosper"
    },
    {
        "Character": "泼",
        "Pinyin": "pō"
    },
    {
        "Pinyin": "pour, splash, water, sprinkle; violent, malignant"
    },
    {
        "Character": "譬",
        "Pinyin": "pì"
    },
    {
        "Pinyin": "metaphor, simile, example"
    },
    {
        "Character": "翰",
        "Pinyin": "hàn"
    },
    {
        "Pinyin": "writing brush, pen, pencil"
    },
    {
        "Character": "刮",
        "Pinyin": "guā"
    },
    {
        "Pinyin": "to blow"
    },
    {
        "Character": "斌",
        "Pinyin": "bīn"
    },
    {
        "Pinyin": "refined, having both appearance"
    },
    {
        "Character": "枉",
        "Pinyin": "wǎng"
    },
    {
        "Pinyin": "useless, in vain; bent, crooked"
    },
    {
        "Character": "梁",
        "Pinyin": "liáng"
    },
    {
        "Pinyin": "bridge; beam; rafters; surname"
    },
    {
        "Character": "庞",
        "Pinyin": "páng"
    },
    {
        "Pinyin": "disorderly, messy; huge, big"
    },
    {
        "Character": "闽",
        "Pinyin": "mǐn"
    },
    {
        "Pinyin": "fujian province; a river; a tribe"
    },
    {
        "Character": "宅",
        "Pinyin": "zhái"
    },
    {
        "Pinyin": "residence, dwelling, home; grave"
    },
    {
        "Character": "麟",
        "Pinyin": "lín"
    },
    {
        "Pinyin": "female of Chinese unicorn"
    },
    {
        "Character": "宰",
        "Pinyin": "zǎi"
    },
    {
        "Pinyin": "to slaughter; to rule"
    },
    {
        "Character": "梭",
        "Pinyin": "suō"
    },
    {
        "Pinyin": "weaver's shuttle; go to and fro"
    },
    {
        "Character": "纠",
        "Pinyin": "jiǎo"
    },
    {
        "Pinyin": "investigate, inspect"
    },
    {
        "Character": "丛",
        "Pinyin": "cóng"
    },
    {
        "Pinyin": "bush, shrub; thicket; collection"
    },
    {
        "Character": "雕",
        "Pinyin": "diāo"
    },
    {
        "Pinyin": "engrave, inlay, carve; exhaust; used for U+9D70 鵰 an eagle, vulture"
    },
    {
        "Character": "澳",
        "Pinyin": "ào"
    },
    {
        "Pinyin": "inlet, bay; dock, bank"
    },
    {
        "Character": "毙",
        "Pinyin": "bì"
    },
    {
        "Pinyin": "kill; die violent death"
    },
    {
        "Character": "颖",
        "Pinyin": "yǐng"
    },
    {
        "Pinyin": "rice tassel; sharp point; clever"
    },
    {
        "Character": "腔",
        "Pinyin": "qiāng"
    },
    {
        "Pinyin": "chest cavity; hollow in body"
    },
    {
        "Character": "伫",
        "Pinyin": "zhù"
    },
    {
        "Pinyin": "wait; look towards; turn one's back on"
    },
    {
        "Character": "躺",
        "Pinyin": "tǎng"
    },
    {
        "Pinyin": "lie down, recline"
    },
    {
        "Character": "划",
        "Pinyin": "huà"
    },
    {
        "Pinyin": "delineate, painting, picture, drawing; draw"
    },
    {
        "Character": "寺",
        "Pinyin": "sì"
    },
    {
        "Pinyin": "court, office; temple, monastery"
    },
    {
        "Character": "炼",
        "Pinyin": "liàn"
    },
    {
        "Pinyin": "smelt, refine; distill, condense"
    },
    {
        "Character": "胃",
        "Pinyin": "wèi"
    },
    {
        "Pinyin": "stomach; gizzard of fowl"
    },
    {
        "Character": "昂",
        "Pinyin": "áng"
    },
    {
        "Pinyin": "rise, raise; proud, bold; upright"
    },
    {
        "Character": "勋",
        "Pinyin": "xūn"
    },
    {
        "Pinyin": "meritorious deed; merits; rank"
    },
    {
        "Character": "骄",
        "Pinyin": "jiāo"
    },
    {
        "Pinyin": "spirited horse; haughty"
    },
    {
        "Character": "卑",
        "Pinyin": "bēi"
    },
    {
        "Pinyin": "humble, low, inferior; despise"
    },
    {
        "Character": "蚂",
        "Pinyin": "mǎ"
    },
    {
        "Pinyin": "ant; leech"
    },
    {
        "Character": "墓",
        "Pinyin": "mù"
    },
    {
        "Pinyin": "grave, tomb"
    },
    {
        "Character": "冥",
        "Pinyin": "míng"
    },
    {
        "Pinyin": "dark, gloomy, night; deep"
    },
    {
        "Character": "妄",
        "Pinyin": "wàng"
    },
    {
        "Pinyin": "absurd, foolish, reckless; false"
    },
    {
        "Character": "董",
        "Pinyin": "dǒng"
    },
    {
        "Pinyin": "direct, supervise; surname"
    },
    {
        "Character": "淋",
        "Pinyin": "lín"
    },
    {
        "Pinyin": "drip, soak, drench; perfectly"
    },
    {
        "Character": "卢",
        "Pinyin": "lú"
    },
    {
        "Pinyin": "cottage, hut; surname; black"
    },
    {
        "Character": "偿",
        "Pinyin": "cháng"
    },
    {
        "Pinyin": "repay, recompense; restitution"
    },
    {
        "Character": "姻",
        "Pinyin": "yīn"
    },
    {
        "Pinyin": "relatives by marriage"
    },
    {
        "Character": "砸",
        "Pinyin": "zá"
    },
    {
        "Pinyin": "smash, crush, break; pound, mash"
    },
    {
        "Character": "践",
        "Pinyin": "jiàn"
    },
    {
        "Pinyin": "trample, tread upon, walk on"
    },
    {
        "Character": "殷",
        "Pinyin": "yīn"
    },
    {
        "Pinyin": "many, great; abundant, flourishing"
    },
    {
        "Character": "润",
        "Pinyin": "rùn"
    },
    {
        "Pinyin": "soft, moist; sleek; freshen"
    },
    {
        "Character": "铜",
        "Pinyin": "tóng"
    },
    {
        "Pinyin": "copper, brass, bronze cuprum"
    },
    {
        "Character": "盲",
        "Pinyin": "máng"
    },
    {
        "Pinyin": "blind; unperceptive, shortsighted"
    },
    {
        "Character": "扎",
        "Pinyin": "zhā"
    },
    {
        "Pinyin": "pull up; pierce; struggle free"
    },
    {
        "Character": "驳",
        "Pinyin": "bó"
    },
    {
        "Pinyin": "varicolored, variegated; mixed; contradict, argue; suddenly"
    },
    {
        "Character": "湿",
        "Pinyin": "shī"
    },
    {
        "Pinyin": "wet, moist, humid, damp; an illness"
    },
    {
        "Character": "凑",
        "Pinyin": "còu"
    },
    {
        "Pinyin": "piece together, assemble"
    },
    {
        "Character": "炒",
        "Pinyin": "chǎo"
    },
    {
        "Pinyin": "fry, saute, roast, boil, cook"
    },
    {
        "Character": "尿",
        "Pinyin": "niào"
    },
    {
        "Pinyin": "urine; urinate"
    },
    {
        "Character": "穴",
        "Pinyin": "xuè"
    },
    {
        "Pinyin": "cave, den, hole; rad. no. 116"
    },
    {
        "Character": "蟑",
        "Pinyin": "zhāng"
    },
    {
        "Pinyin": "cockroach"
    },
    {
        "Character": "拓",
        "Pinyin": "tuò"
    },
    {
        "Pinyin": "expand; open up; support or push"
    },
    {
        "Character": "诡",
        "Pinyin": "guǐ"
    },
    {
        "Pinyin": "deceive, cheat, defraud; sly"
    },
    {
        "Character": "谬",
        "Pinyin": "miù"
    },
    {
        "Pinyin": "error, exaggeration; erroneous"
    },
    {
        "Character": "淫",
        "Pinyin": "yín"
    },
    {
        "Pinyin": "obscene, licentious, lewd"
    },
    {
        "Character": "荡",
        "Pinyin": "dàng"
    },
    {
        "Pinyin": "pond, pool; wash away, cleanse"
    },
    {
        "Character": "鼎",
        "Pinyin": "dǐng"
    },
    {
        "Pinyin": "large, three-legged bronze caldron"
    },
    {
        "Character": "斩",
        "Pinyin": "zhǎn"
    },
    {
        "Pinyin": "cut, chop, sever; behead"
    },
    {
        "Character": "尧",
        "Pinyin": "yáo"
    },
    {
        "Pinyin": "a legendary ancient emperor-sage"
    },
    {
        "Character": "伪",
        "Pinyin": "wěi"
    },
    {
        "Pinyin": "false, counterfeit, bogus"
    },
    {
        "Character": "饿",
        "Pinyin": "è"
    },
    {
        "Pinyin": "hungry; greedy for; hunger"
    },
    {
        "Character": "驰",
        "Pinyin": "chí"
    },
    {
        "Pinyin": "go quickly or swiftly; hurry"
    },
    {
        "Character": "蚊",
        "Pinyin": "wén"
    },
    {
        "Pinyin": "mosquito; gnat"
    },
    {
        "Character": "瘟",
        "Pinyin": "wēn"
    },
    {
        "Pinyin": "epidemic, plague, pestilence"
    },
    {
        "Character": "肢",
        "Pinyin": "zhī"
    },
    {
        "Pinyin": "human limbs; animal feet"
    },
    {
        "Character": "挫",
        "Pinyin": "cuò"
    },
    {
        "Pinyin": "push down; chop down; grind"
    },
    {
        "Character": "槽",
        "Pinyin": "cáo"
    },
    {
        "Pinyin": "trough; manger; vat, tank; groove; a distillery"
    },
    {
        "Character": "扶",
        "Pinyin": "fú"
    },
    {
        "Pinyin": "support, help; protect; hold on"
    },
    {
        "Character": "兆",
        "Pinyin": "zhào"
    },
    {
        "Pinyin": "omen; million; mega; also trillion. China = million; Japan and Taiwan = trillion"
    },
    {
        "Character": "僧",
        "Pinyin": "sēng"
    },
    {
        "Pinyin": "Buddhist priest, monk; san of Sanskrit sangha"
    },
    {
        "Character": "昧",
        "Pinyin": "mèi"
    },
    {
        "Pinyin": "obscure, dark; darken"
    },
    {
        "Character": "螂",
        "Pinyin": "láng"
    },
    {
        "Pinyin": "mantis, dung beetle"
    },
    {
        "Character": "匹",
        "Pinyin": "pǐ"
    },
    {
        "Pinyin": "bolt of cloth; counter for horses"
    },
    {
        "Character": "芝",
        "Pinyin": "zhī"
    },
    {
        "Pinyin": "sesame; a purplish or brown mushroom thought to have miraculous powers; 'a divine and relicitous plant' (Karlgren)"
    },
    {
        "Character": "奸",
        "Pinyin": "jiān"
    },
    {
        "Pinyin": "adultery, debauchery; debauch"
    },
    {
        "Character": "聘",
        "Pinyin": "pìn"
    },
    {
        "Pinyin": "engage, employ; betroth"
    },
    {
        "Character": "眷",
        "Pinyin": "juàn"
    },
    {
        "Pinyin": "take interest in, care for"
    },
    {
        "Character": "熙",
        "Pinyin": "xī"
    },
    {
        "Pinyin": "bright, splendid, glorious"
    },
    {
        "Character": "猩",
        "Pinyin": "xīng"
    },
    {
        "Pinyin": "species of orangutan"
    },
    {
        "Character": "痒",
        "Pinyin": "yǎng"
    },
    {
        "Pinyin": "itch"
    },
    {
        "Character": "帖",
        "Pinyin": "tiē"
    },
    {
        "Pinyin": "invitation card; notice"
    },
    {
        "Character": "贫",
        "Pinyin": "pín"
    },
    {
        "Pinyin": "poor, impoverished, needy"
    },
    {
        "Character": "贿",
        "Pinyin": "huì"
    },
    {
        "Pinyin": "bribe; bribes; riches, wealth"
    },
    {
        "Character": "扑",
        "Pinyin": "pū"
    },
    {
        "Pinyin": "pound, beat, strike; attack"
    },
    {
        "Character": "笼",
        "Pinyin": "lóng"
    },
    {
        "Pinyin": "cage; cage-like basket"
    },
    {
        "Character": "丘",
        "Pinyin": "qiū"
    },
    {
        "Pinyin": "hill; elder; empty; a name"
    },
    {
        "Character": "颠",
        "Pinyin": "diān"
    },
    {
        "Pinyin": "top, peak, summit; upset"
    },
    {
        "Character": "讶",
        "Pinyin": "yà"
    },
    {
        "Pinyin": "express surprise, be surprised"
    },
    {
        "Character": "玮",
        "Pinyin": "wěi"
    },
    {
        "Pinyin": "type of jade; rare, valuable"
    },
    {
        "Character": "尹",
        "Pinyin": "yǐn"
    },
    {
        "Pinyin": "govern; oversee; director"
    },
    {
        "Character": "诇",
        "Pinyin": "xiòng"
    },
    {
        "Pinyin": "to spy; to give information; shrewd"
    },
    {
        "Character": "柱",
        "Pinyin": "zhù"
    },
    {
        "Pinyin": "pillar, post; support; lean on"
    },
    {
        "Character": "袁",
        "Pinyin": "yuán"
    },
    {
        "Pinyin": "robe; surname"
    },
    {
        "Character": "漆",
        "Pinyin": "qī"
    },
    {
        "Pinyin": "varnish, lacquer, paint"
    },
    {
        "Character": "毋",
        "Pinyin": "wú"
    },
    {
        "Pinyin": "do not; not; surname; rad. 80"
    },
    {
        "Character": "辣",
        "Pinyin": "là"
    },
    {
        "Pinyin": "peppery, pungent, hot; cruel"
    },
    {
        "Character": "棍",
        "Pinyin": "gùn"
    },
    {
        "Pinyin": "stick, cudgel; scoundrel"
    },
    {
        "Character": "矩",
        "Pinyin": "jǔ"
    },
    {
        "Pinyin": "carpenter's square, ruler, rule"
    },
    {
        "Character": "佐",
        "Pinyin": "zuǒ"
    },
    {
        "Pinyin": "assist, aid, second; subordinate"
    },
    {
        "Character": "澡",
        "Pinyin": "zǎo"
    },
    {
        "Pinyin": "wash, bathe"
    },
    {
        "Character": "渊",
        "Pinyin": "yuān"
    },
    {
        "Pinyin": "gulf, abyss, deep"
    },
    {
        "Character": "痞",
        "Pinyin": "pǐ"
    },
    {
        "Pinyin": "dyspepsia, spleen infection"
    },
    {
        "Character": "矮",
        "Pinyin": "ǎi"
    },
    {
        "Pinyin": "short, dwarf; low"
    },
    {
        "Character": "戈",
        "Pinyin": "gē"
    },
    {
        "Pinyin": "halberd, spear, lance; rad. 62"
    },
    {
        "Character": "勃",
        "Pinyin": "bó"
    },
    {
        "Pinyin": "suddenly, sudden, quick"
    },
    {
        "Character": "吞",
        "Pinyin": "tūn"
    },
    {
        "Pinyin": "swallow; absorb, annex, engulf"
    },
    {
        "Character": "肆",
        "Pinyin": "sì"
    },
    {
        "Pinyin": "indulge; excess; numeral four; particle meaning now, therefore; shop"
    },
    {
        "Character": "抖",
        "Pinyin": "dǒu"
    },
    {
        "Pinyin": "tremble, shake, rouse; give shake"
    },
    {
        "Character": "咳",
        "Pinyin": "ké"
    },
    {
        "Pinyin": "cough"
    },
    {
        "Character": "亭",
        "Pinyin": "tíng"
    },
    {
        "Pinyin": "pavilion; erect"
    },
    {
        "Character": "淘",
        "Pinyin": "táo"
    },
    {
        "Pinyin": "wash in sieve; weed out"
    },
    {
        "Character": "穗",
        "Pinyin": "suì"
    },
    {
        "Pinyin": "ear of grain; tassel; Guangzhou"
    },
    {
        "Character": "黏",
        "Pinyin": "nián"
    },
    {
        "Pinyin": "stick to; glutinous, sticky; glue"
    },
    {
        "Character": "冈",
        "Pinyin": "gāng"
    },
    {
        "Pinyin": "ridge or crest of hill"
    },
    {
        "Character": "歧",
        "Pinyin": "qí"
    },
    {
        "Pinyin": "fork of road; branching off"
    },
    {
        "Character": "屑",
        "Pinyin": "xiè"
    },
    {
        "Pinyin": "bits, scraps, crumbs, fragments"
    },
    {
        "Character": "拢",
        "Pinyin": "lǒng"
    },
    {
        "Pinyin": "collect, bring together"
    },
    {
        "Character": "潇",
        "Pinyin": "xiāo"
    },
    {
        "Pinyin": "sound of beating wind and rain; light, ethereal"
    },
    {
        "Character": "谐",
        "Pinyin": "xié"
    },
    {
        "Pinyin": "harmonize, agree; joke, jest"
    },
    {
        "Character": "遣",
        "Pinyin": "qiǎn"
    },
    {
        "Pinyin": "send, dispatch; send off, exile"
    },
    {
        "Character": "诊",
        "Pinyin": "zhěn"
    },
    {
        "Pinyin": "examine patient, diagnose"
    },
    {
        "Character": "祈",
        "Pinyin": "qí"
    },
    {
        "Pinyin": "pray; entreat, beseech"
    },
    {
        "Character": "霜",
        "Pinyin": "shuāng"
    },
    {
        "Pinyin": "frost; crystallized; candied"
    },
    {
        "Character": "熬",
        "Pinyin": "áo"
    },
    {
        "Pinyin": "cook down, to boil; endure"
    },
    {
        "Character": "饶",
        "Pinyin": "ráo"
    },
    {
        "Pinyin": "bountiful, abundant, plentiful"
    },
    {
        "Character": "闯",
        "Pinyin": "chuǎng"
    },
    {
        "Pinyin": "rush in, burst in, charge in"
    },
    {
        "Character": "婉",
        "Pinyin": "wǎn"
    },
    {
        "Pinyin": "amiable, congenial; restrained"
    },
    {
        "Character": "致",
        "Pinyin": "zhì"
    },
    {
        "Pinyin": "delicate, fine; dense"
    },
    {
        "Character": "雁",
        "Pinyin": "yàn"
    },
    {
        "Pinyin": "wild goose"
    },
    {
        "Character": "觅",
        "Pinyin": "mì"
    },
    {
        "Pinyin": "seek; search"
    },
    {
        "Character": "讽",
        "Pinyin": "fēng"
    },
    {
        "Pinyin": "recite, incant; satirize"
    },
    {
        "Character": "膜",
        "Pinyin": "mò"
    },
    {
        "Pinyin": "membrane; to kneel and worship"
    },
    {
        "Character": "挣",
        "Pinyin": "zhēng"
    },
    {
        "Pinyin": "to strive, endeavor, struggle; to earn; to pierce; to wedge in"
    },
    {
        "Character": "斤",
        "Pinyin": "jīn"
    },
    {
        "Pinyin": "a catty (approximately 500 g); an axe; keen, shrewd; KangXi radical number 69"
    },
    {
        "Character": "帆",
        "Pinyin": "fān"
    },
    {
        "Pinyin": "sail; boat"
    },
    {
        "Character": "铺",
        "Pinyin": "pū"
    },
    {
        "Pinyin": "spread out, arrange; shop, store; place to sleep, bed"
    },
    {
        "Character": "凄",
        "Pinyin": "qī"
    },
    {
        "Pinyin": "bitter cold, miserable, dreary"
    },
    {
        "Character": "瑟",
        "Pinyin": "sè"
    },
    {
        "Pinyin": "large stringed musical instrument; dignified, massive; sound of wind"
    },
    {
        "Character": "艇",
        "Pinyin": "tǐng"
    },
    {
        "Pinyin": "small boat, dugout, punt"
    },
    {
        "Character": "壶",
        "Pinyin": "hú"
    },
    {
        "Pinyin": "jar, pot, jug, vase; surname"
    },
    {
        "Character": "苑",
        "Pinyin": "yuàn"
    },
    {
        "Pinyin": "pasture, park, garden; mansion"
    },
    {
        "Character": "悬",
        "Pinyin": "xuán"
    },
    {
        "Pinyin": "hang, suspend, hoist; be hung"
    },
    {
        "Character": "詹",
        "Pinyin": "zhān"
    },
    {
        "Pinyin": "surname; talk too much, verbose"
    },
    {
        "Character": "诠",
        "Pinyin": "quán"
    },
    {
        "Pinyin": "explain, expound, comment on"
    },
    {
        "Character": "滤",
        "Pinyin": "lǖ"
    },
    {
        "Pinyin": "strain out, filter"
    },
    {
        "Character": "掰",
        "Pinyin": "bāi"
    },
    {
        "Character": "稚",
        "Pinyin": "zhì"
    },
    {
        "Pinyin": "young, immature; childhood"
    },
    {
        "Character": "辰",
        "Pinyin": "chén"
    },
    {
        "Pinyin": "early morning; 5th terrestrial branch"
    },
    {
        "Character": "募",
        "Pinyin": "mù"
    },
    {
        "Pinyin": "levy, raise; summon; recruit"
    },
    {
        "Character": "懿",
        "Pinyin": "yì"
    },
    {
        "Pinyin": "virtuous, admirable, esteemed"
    },
    {
        "Character": "慨",
        "Pinyin": "kǎi"
    },
    {
        "Pinyin": "sigh, regret; generous"
    },
    {
        "Character": "哼",
        "Pinyin": "hēng"
    },
    {
        "Pinyin": "hum; sing softly; groan, moan"
    },
    {
        "Character": "汁",
        "Pinyin": "zhī"
    },
    {
        "Pinyin": "juice, liquor, fluid, sap, gravy, sauce"
    },
    {
        "Character": "佬",
        "Pinyin": "lǎo"
    },
    {
        "Pinyin": "(Cant.) man, person; mature"
    },
    {
        "Character": "纤",
        "Pinyin": "xiān"
    },
    {
        "Pinyin": "fine, delicate; minute; graceful"
    },
    {
        "Character": "肃",
        "Pinyin": "sù"
    },
    {
        "Pinyin": "pay respects; reverently"
    },
    {
        "Character": "遨",
        "Pinyin": "áo"
    },
    {
        "Pinyin": "ramble, roam; travel for pleasure"
    },
    {
        "Character": "渔",
        "Pinyin": "yú"
    },
    {
        "Pinyin": "to fish; seize; pursue; surname"
    },
    {
        "Character": "恕",
        "Pinyin": "shù"
    },
    {
        "Pinyin": "forgive, excuse, show mercy"
    },
    {
        "Character": "蝴",
        "Pinyin": "hú"
    },
    {
        "Pinyin": "butterfly"
    },
    {
        "Character": "垫",
        "Pinyin": "diàn"
    },
    {
        "Pinyin": "advance money, pay for another"
    },
    {
        "Character": "昱",
        "Pinyin": "yù"
    },
    {
        "Pinyin": "bright light, sunlight; dazzling"
    },
    {
        "Character": "竿",
        "Pinyin": "gān"
    },
    {
        "Pinyin": "bamboo pole; penis"
    },
    {
        "Character": "缝",
        "Pinyin": "féng"
    },
    {
        "Pinyin": "sew, mend"
    },
    {
        "Character": "蹈",
        "Pinyin": "dào"
    },
    {
        "Pinyin": "stamp feet; dance"
    },
    {
        "Character": "鞭",
        "Pinyin": "biān"
    },
    {
        "Pinyin": "whip; whip; string of firecrackers"
    },
    {
        "Character": "仆",
        "Pinyin": "pú"
    },
    {
        "Pinyin": "slave, servant, I"
    },
    {
        "Character": "豫",
        "Pinyin": "yù"
    },
    {
        "Pinyin": "relaxed, comfortable, at ease"
    },
    {
        "Character": "岩",
        "Pinyin": "yán"
    },
    {
        "Pinyin": "cliff; rocks; mountain"
    },
    {
        "Character": "辐",
        "Pinyin": "fú"
    },
    {
        "Pinyin": "spokes of wheel"
    },
    {
        "Character": "歹",
        "Pinyin": "dǎi"
    },
    {
        "Pinyin": "bad, vicious, depraved, wicked"
    },
    {
        "Character": "甄",
        "Pinyin": "zhēn"
    },
    {
        "Pinyin": "to examine, discern; to grade; a surname"
    },
    {
        "Character": "斑",
        "Pinyin": "bān"
    },
    {
        "Pinyin": "mottled, striped, freckle"
    },
    {
        "Character": "淹",
        "Pinyin": "yān"
    },
    {
        "Pinyin": "drown; cover with liquid, steep"
    },
    {
        "Character": "崎",
        "Pinyin": "qí"
    },
    {
        "Pinyin": "rough, uneven, jagged, rugged"
    },
    {
        "Character": "骏",
        "Pinyin": "jùn"
    },
    {
        "Pinyin": "excellent horse, noble steed"
    },
    {
        "Character": "薰",
        "Pinyin": "xūn"
    },
    {
        "Pinyin": "a medicinal herb; to cauterize"
    },
    {
        "Character": "婷",
        "Pinyin": "tíng"
    },
    {
        "Pinyin": "pretty; attractive; graceful"
    },
    {
        "Character": "宠",
        "Pinyin": "chǒng"
    },
    {
        "Pinyin": "favorite, concubine; favor"
    },
    {
        "Character": "棵",
        "Pinyin": "kē"
    },
    {
        "Pinyin": "numerary adjunct for trees"
    },
    {
        "Character": "弓",
        "Pinyin": "gōng"
    },
    {
        "Pinyin": "bow; curved, arched; KangXi radical number 57"
    },
    {
        "Character": "犬",
        "Pinyin": "quǎn"
    },
    {
        "Pinyin": "dog; radical number 94"
    },
    {
        "Character": "涂",
        "Pinyin": "tú"
    },
    {
        "Pinyin": "smear, daub, apply, spread; paint"
    },
    {
        "Character": "刹",
        "Pinyin": "chà"
    },
    {
        "Pinyin": "temple"
    },
    {
        "Character": "郁",
        "Pinyin": "yù"
    },
    {
        "Pinyin": "luxuriant; dense, thick; moody"
    },
    {
        "Character": "坎",
        "Pinyin": "kǎn"
    },
    {
        "Pinyin": "pit, hole; snare, trap; crisis"
    },
    {
        "Character": "煎",
        "Pinyin": "jiān"
    },
    {
        "Pinyin": "fry in fat or oil; boil in water"
    },
    {
        "Character": "螺",
        "Pinyin": "luó"
    },
    {
        "Pinyin": "spiral shell; conch; spiral"
    },
    {
        "Character": "遮",
        "Pinyin": "zhē"
    },
    {
        "Pinyin": "cover, shield, protect"
    },
    {
        "Character": "枯",
        "Pinyin": "kū"
    },
    {
        "Pinyin": "dried out, withered, decayed"
    },
    {
        "Character": "台",
        "Pinyin": "tái"
    },
    {
        "Pinyin": "taiphoon"
    },
    {
        "Character": "昔",
        "Pinyin": "xí"
    },
    {
        "Pinyin": "formerly; ancient; in beginning"
    },
    {
        "Character": "瘾",
        "Pinyin": "yǐn"
    },
    {
        "Pinyin": "rash; addiction, craving, habit"
    },
    {
        "Character": "蒂",
        "Pinyin": "dì"
    },
    {
        "Pinyin": "peduncle or stem of plants"
    },
    {
        "Character": "坠",
        "Pinyin": "zhuì"
    },
    {
        "Pinyin": "fall down, drop, sink, go to ruin"
    },
    {
        "Character": "唔",
        "Pinyin": "wú"
    },
    {
        "Pinyin": "hold in mouth; bite"
    },
    {
        "Character": "瞎",
        "Pinyin": "xiā"
    },
    {
        "Pinyin": "blind, reckless; rash"
    },
    {
        "Character": "筝",
        "Pinyin": "zhēng"
    },
    {
        "Pinyin": "stringed musical instrument; kite"
    },
    {
        "Character": "唇",
        "Pinyin": "chún"
    },
    {
        "Pinyin": "lips"
    },
    {
        "Character": "表",
        "Pinyin": "biǎo"
    },
    {
        "Pinyin": "a watch, clock"
    },
    {
        "Character": "吁",
        "Pinyin": "xū"
    },
    {
        "Pinyin": "interjection 'Alas!'; to sigh"
    },
    {
        "Character": "冤",
        "Pinyin": "yuān"
    },
    {
        "Pinyin": "grievance, injustice, wrong"
    },
    {
        "Character": "祷",
        "Pinyin": "dǎo"
    },
    {
        "Pinyin": "pray; entreat, beg, plead; prayer"
    },
    {
        "Character": "甩",
        "Pinyin": "shuǎi"
    },
    {
        "Pinyin": "throw away, discard"
    },
    {
        "Character": "伞",
        "Pinyin": "sǎn"
    },
    {
        "Pinyin": "umbrella, parasol, parachute"
    },
    {
        "Character": "酱",
        "Pinyin": "jiàng"
    },
    {
        "Pinyin": "any jam-like or paste-like food"
    },
    {
        "Character": "范",
        "Pinyin": "fàn"
    },
    {
        "Pinyin": "pattern, model, rule, law"
    },
    {
        "Character": "焉",
        "Pinyin": "yān"
    },
    {
        "Pinyin": "thereupon, then; how? why? where?"
    },
    {
        "Character": "娇",
        "Pinyin": "jiāo"
    },
    {
        "Pinyin": "seductive and loveable; tender"
    },
    {
        "Character": "驼",
        "Pinyin": "tuó"
    },
    {
        "Pinyin": "a camel; humpbacked; to carry on the back"
    },
    {
        "Character": "沦",
        "Pinyin": "lún"
    },
    {
        "Pinyin": "be lost; sink, be submerged"
    },
    {
        "Character": "碳",
        "Pinyin": "tàn"
    },
    {
        "Pinyin": "carbon"
    },
    {
        "Character": "沾",
        "Pinyin": "zhān"
    },
    {
        "Pinyin": "moisten, wet, soak; touch"
    },
    {
        "Character": "抚",
        "Pinyin": "fǔ"
    },
    {
        "Pinyin": "pat, console, comfort; pacify"
    },
    {
        "Character": "溶",
        "Pinyin": "róng"
    },
    {
        "Pinyin": "to melt, dissolve; overflowing with"
    },
    {
        "Character": "叠",
        "Pinyin": "dié"
    },
    {
        "Pinyin": "repeat, duplicate; repetitious"
    },
    {
        "Character": "几",
        "Pinyin": "jǐ"
    },
    {
        "Pinyin": "how many? how much?; a few, some"
    },
    {
        "Character": "蜡",
        "Pinyin": "là"
    },
    {
        "Pinyin": "wax; candle; waxy, glazed"
    },
    {
        "Character": "涌",
        "Pinyin": "yǒng"
    },
    {
        "Pinyin": "surge up, bubble up, gush forth"
    },
    {
        "Character": "氧",
        "Pinyin": "yǎng"
    },
    {
        "Pinyin": "oxygen"
    },
    {
        "Character": "弦",
        "Pinyin": "xián"
    },
    {
        "Pinyin": "string; hypotenuse, crescent"
    },
    {
        "Character": "娱",
        "Pinyin": "yú"
    },
    {
        "Pinyin": "pleasure, enjoyment, amusement"
    },
    {
        "Character": "皓",
        "Pinyin": "hào"
    },
    {
        "Pinyin": "bright, luminous; clear; hoary"
    },
    {
        "Character": "奴",
        "Pinyin": "nú"
    },
    {
        "Pinyin": "slave, servant"
    },
    {
        "Character": "颓",
        "Pinyin": "tuí"
    },
    {
        "Pinyin": "ruined"
    },
    {
        "Character": "嘎",
        "Pinyin": "gā"
    },
    {
        "Pinyin": "sound of laughter; bad, malevolent"
    },
    {
        "Character": "趟",
        "Pinyin": "tàng"
    },
    {
        "Pinyin": "time, occasion; take journey"
    },
    {
        "Character": "揭",
        "Pinyin": "jiē"
    },
    {
        "Pinyin": "raise, lift up; surname"
    },
    {
        "Character": "当",
        "Pinyin": "dāng"
    },
    {
        "Pinyin": "sound of bells"
    },
    {
        "Character": "剥",
        "Pinyin": "bō"
    },
    {
        "Pinyin": "peel, peel off, to shell, strip"
    },
    {
        "Character": "垦",
        "Pinyin": "kěn"
    },
    {
        "Pinyin": "cultivate, reclaim, to farm land"
    },
    {
        "Character": "狭",
        "Pinyin": "xiá"
    },
    {
        "Pinyin": "narrow, limited; narrow-minded; to pinch"
    },
    {
        "Character": "魁",
        "Pinyin": "kuí"
    },
    {
        "Pinyin": "chief; leader; best; monstrous"
    },
    {
        "Character": "坊",
        "Pinyin": "fāng"
    },
    {
        "Pinyin": "neighborhood, urban subdivision"
    },
    {
        "Character": "盐",
        "Pinyin": "yán"
    },
    {
        "Pinyin": "variant of 塩 U+5869, salt"
    },
    {
        "Character": "屎",
        "Pinyin": "shǐ"
    },
    {
        "Pinyin": "excrement, dung"
    },
    {
        "Character": "郝",
        "Pinyin": "hǎo"
    },
    {
        "Pinyin": "surname; place in modern Shanxi"
    },
    {
        "Character": "佩",
        "Pinyin": "pèi"
    },
    {
        "Pinyin": "belt ornament, pendant; wear at waist, tie to the belt; respect"
    },
    {
        "Character": "摧",
        "Pinyin": "cuī"
    },
    {
        "Pinyin": "destroy, break, injure"
    },
    {
        "Character": "栗",
        "Pinyin": "lì"
    },
    {
        "Pinyin": "shiver, shudder, tremble; tremble"
    },
    {
        "Character": "菊",
        "Pinyin": "jú"
    },
    {
        "Pinyin": "chrysanthemum"
    },
    {
        "Character": "瘦",
        "Pinyin": "shòu"
    },
    {
        "Pinyin": "thin, emaciated, lean; meager"
    },
    {
        "Character": "钧",
        "Pinyin": "jūn"
    },
    {
        "Pinyin": "unit of measure equivalent to thirty catties"
    },
    {
        "Character": "匿",
        "Pinyin": "nì"
    },
    {
        "Pinyin": "hide; go into hiding"
    },
    {
        "Character": "砖",
        "Pinyin": "zhuān"
    },
    {
        "Pinyin": "tile, brick"
    },
    {
        "Character": "嘘",
        "Pinyin": "xū"
    },
    {
        "Pinyin": "exhale; blow out; deep sigh; hiss; praise, flatter; lie"
    },
    {
        "Character": "缚",
        "Pinyin": "fú"
    },
    {
        "Pinyin": "to tie"
    },
    {
        "Character": "嘟",
        "Pinyin": "dū"
    },
    {
        "Pinyin": "sound of horn tooting"
    },
    {
        "Character": "盆",
        "Pinyin": "pén"
    },
    {
        "Pinyin": "basin, tub, pot, bowl"
    },
    {
        "Character": "债",
        "Pinyin": "zhài"
    },
    {
        "Pinyin": "debt, loan, liabilities"
    },
    {
        "Character": "霞",
        "Pinyin": "xiá"
    },
    {
        "Pinyin": "rosy clouds"
    },
    {
        "Character": "挽",
        "Pinyin": "wǎn"
    },
    {
        "Pinyin": "mourn; pull; draw"
    },
    {
        "Character": "逍",
        "Pinyin": "xiāo"
    },
    {
        "Pinyin": "ramble, stroll, jaunt, loiter"
    },
    {
        "Character": "畔",
        "Pinyin": "pàn"
    },
    {
        "Pinyin": "boundary path dividing fields"
    },
    {
        "Character": "蕴",
        "Pinyin": "yùn"
    },
    {
        "Pinyin": "collect, gather, store; profound; (Budd.) skandha"
    },
    {
        "Character": "颈",
        "Pinyin": "jǐng"
    },
    {
        "Pinyin": "neck, throat"
    },
    {
        "Character": "获",
        "Pinyin": "huò"
    },
    {
        "Pinyin": "harvest, cut grain"
    },
    {
        "Character": "畏",
        "Pinyin": "wèi"
    },
    {
        "Pinyin": "fear, dread, awe, reverence"
    },
    {
        "Character": "喂",
        "Pinyin": "wèi"
    },
    {
        "Pinyin": "interjection to call attention"
    },
    {
        "Character": "脾",
        "Pinyin": "pí"
    },
    {
        "Pinyin": "spleen, pancreas; disposition"
    },
    {
        "Character": "姬",
        "Pinyin": "jī"
    },
    {
        "Pinyin": "beauty; imperial concubine"
    },
    {
        "Character": "赴",
        "Pinyin": "fù"
    },
    {
        "Pinyin": "go to; attend, be present"
    },
    {
        "Character": "囊",
        "Pinyin": "náng"
    },
    {
        "Pinyin": "bag, purse, sack; put in bag"
    },
    {
        "Character": "噪",
        "Pinyin": "zào"
    },
    {
        "Pinyin": "be noisy; chirp loudly"
    },
    {
        "Character": "熄",
        "Pinyin": "xí"
    },
    {
        "Pinyin": "put out, extinguish, quash"
    },
    {
        "Character": "锡",
        "Pinyin": "xí"
    },
    {
        "Pinyin": "tin, stannum; bestow, confer"
    },
    {
        "Character": "诀",
        "Pinyin": "jué"
    },
    {
        "Pinyin": "take leave of, bid farewell"
    },
    {
        "Character": "肇",
        "Pinyin": "zhào"
    },
    {
        "Pinyin": "begin, commence, originate"
    },
    {
        "Character": "璋",
        "Pinyin": "zhāng"
    },
    {
        "Pinyin": "jade plaything; jade ornament"
    },
    {
        "Character": "晕",
        "Pinyin": "yūn"
    },
    {
        "Pinyin": "halo in sky; fog; dizzy, faint"
    },
    {
        "Character": "浊",
        "Pinyin": "zhuó"
    },
    {
        "Pinyin": "muddy, turbid, dirty, filthy"
    },
    {
        "Character": "伐",
        "Pinyin": "fá"
    },
    {
        "Pinyin": "cut down, subjugate, attack"
    },
    {
        "Character": "峡",
        "Pinyin": "xiá"
    },
    {
        "Pinyin": "gorge, strait, ravine; isthmus"
    },
    {
        "Character": "窃",
        "Pinyin": "qiè"
    },
    {
        "Pinyin": "secretly, stealthily; steal; thief"
    },
    {
        "Character": "枕",
        "Pinyin": "zhěn"
    },
    {
        "Pinyin": "pillow"
    },
    {
        "Character": "倘",
        "Pinyin": "tǎng"
    },
    {
        "Pinyin": "if, supposing, in event of"
    },
    {
        "Character": "慌",
        "Pinyin": "huāng"
    },
    {
        "Pinyin": "nervous, panicky, frantic"
    },
    {
        "Character": "垮",
        "Pinyin": "kuǎ"
    },
    {
        "Pinyin": "be defeated, fail, collapse"
    },
    {
        "Character": "帕",
        "Pinyin": "pà"
    },
    {
        "Pinyin": "turban, kerchief, veil; wrap"
    },
    {
        "Character": "莹",
        "Pinyin": "yíng"
    },
    {
        "Pinyin": "lustre of gems; bright, lustrous"
    },
    {
        "Character": "琦",
        "Pinyin": "qí"
    },
    {
        "Pinyin": "gem, precious stone, jade"
    },
    {
        "Character": "厢",
        "Pinyin": "xiāng"
    },
    {
        "Pinyin": "side-room, wing; theatre box"
    },
    {
        "Character": "渺",
        "Pinyin": "miǎo"
    },
    {
        "Pinyin": "endlessly long, boundless, vast"
    },
    {
        "Character": "脏",
        "Pinyin": "zāng"
    },
    {
        "Pinyin": "dirty; firm; fat"
    },
    {
        "Character": "削",
        "Pinyin": "xuē"
    },
    {
        "Pinyin": "scrape off, pare, trim"
    },
    {
        "Character": "锣",
        "Pinyin": "luó"
    },
    {
        "Pinyin": "gong"
    },
    {
        "Character": "虐",
        "Pinyin": "nvè"
    },
    {
        "Pinyin": "cruel, harsh, oppressive"
    },
    {
        "Character": "豔",
        "Pinyin": "yàn"
    },
    {
        "Pinyin": "plump, voluptuous, beautiful"
    },
    {
        "Character": "薇",
        "Pinyin": "wéi"
    },
    {
        "Pinyin": "Osmunda regalis, a species of fern"
    },
    {
        "Character": "霉",
        "Pinyin": "méi"
    },
    {
        "Pinyin": "mildew, mold; moldy, mildewed"
    },
    {
        "Character": "衍",
        "Pinyin": "yǎn"
    },
    {
        "Pinyin": "overflow, spill over, spread out"
    },
    {
        "Character": "腊",
        "Pinyin": "là"
    },
    {
        "Pinyin": "year end sacrifice; dried meat"
    },
    {
        "Character": "喧",
        "Pinyin": "xuǎn"
    },
    {
        "Pinyin": "lively, noisy; clamor, talk loudly"
    },
    {
        "Character": "娶",
        "Pinyin": "qǔ"
    },
    {
        "Pinyin": "marry, take wife"
    },
    {
        "Character": "遂",
        "Pinyin": "suì"
    },
    {
        "Pinyin": "comply with, follow along; thereupon"
    },
    {
        "Character": "睁",
        "Pinyin": "zhēng"
    },
    {
        "Pinyin": "to open the eyes; stare"
    },
    {
        "Character": "裙",
        "Pinyin": "qún"
    },
    {
        "Pinyin": "skirt, apron, petticoat"
    },
    {
        "Character": "韦",
        "Pinyin": "wéi"
    },
    {
        "Pinyin": "tanned leather; surname; KangXi radical number 178"
    },
    {
        "Character": "矢",
        "Pinyin": "shǐ"
    },
    {
        "Pinyin": "arrow, dart; vow, swear"
    },
    {
        "Character": "伺",
        "Pinyin": "sì"
    },
    {
        "Pinyin": "serve, wait upon, attend; examine"
    },
    {
        "Character": "钉",
        "Pinyin": "dīng"
    },
    {
        "Pinyin": "nail, spike; pursue closely"
    },
    {
        "Character": "婴",
        "Pinyin": "yīng"
    },
    {
        "Pinyin": "baby, infant; bother"
    },
    {
        "Character": "蓄",
        "Pinyin": "xù"
    },
    {
        "Pinyin": "store, save, hoard, gather"
    },
    {
        "Character": "奸",
        "Pinyin": "jiān"
    },
    {
        "Pinyin": "adultery, debauchery; debauch"
    },
    {
        "Character": "廿",
        "Pinyin": "niàn"
    },
    {
        "Pinyin": "twenty, twentieth"
    },
    {
        "Character": "堵",
        "Pinyin": "dǔ"
    },
    {
        "Pinyin": "wall; stop, prevent; stop up"
    },
    {
        "Character": "葬",
        "Pinyin": "zàng"
    },
    {
        "Pinyin": "bury, inter"
    },
    {
        "Character": "蓬",
        "Pinyin": "péng"
    },
    {
        "Pinyin": "type of raspberry; fairyland"
    },
    {
        "Character": "鸦",
        "Pinyin": "yā"
    },
    {
        "Pinyin": "crow, raven; Corvus species (various)"
    },
    {
        "Character": "尝",
        "Pinyin": "cháng"
    },
    {
        "Pinyin": "taste; experience, experiment"
    },
    {
        "Character": "挨",
        "Pinyin": "āi"
    },
    {
        "Pinyin": "near, close by, next to, towards, against; to wait; to lean on"
    },
    {
        "Character": "蕾",
        "Pinyin": "lěi"
    },
    {
        "Pinyin": "buds, unopened flowers"
    },
    {
        "Character": "璿",
        "Pinyin": "xuán"
    },
    {
        "Pinyin": "fine jade"
    },
    {
        "Character": "挚",
        "Pinyin": "zhì"
    },
    {
        "Pinyin": "sincere, warm, cordial; surname"
    },
    {
        "Character": "券",
        "Pinyin": "quàn"
    },
    {
        "Pinyin": "certificate, ticket; title deeds"
    },
    {
        "Character": "厨",
        "Pinyin": "chú"
    },
    {
        "Pinyin": "kitchen; closet; cupboard"
    },
    {
        "Character": "醇",
        "Pinyin": "chún"
    },
    {
        "Pinyin": "rich, good as wine; pure, unmixed"
    },
    {
        "Character": "呻",
        "Pinyin": "shēn"
    },
    {
        "Pinyin": "groan, moan; recite with intonation"
    },
    {
        "Character": "霍",
        "Pinyin": "huò"
    },
    {
        "Pinyin": "quickly, suddenly; surname"
    },
    {
        "Character": "剃",
        "Pinyin": "tì"
    },
    {
        "Pinyin": "shave"
    },
    {
        "Character": "浆",
        "Pinyin": "jiāng"
    },
    {
        "Pinyin": "any thick fluid; starch; broth"
    },
    {
        "Character": "葡",
        "Pinyin": "pú"
    },
    {
        "Pinyin": "grapes"
    },
    {
        "Character": "暨",
        "Pinyin": "jì"
    },
    {
        "Pinyin": "and; attain, reach; confines"
    },
    {
        "Character": "滨",
        "Pinyin": "bīn"
    },
    {
        "Pinyin": "beach, sea coast; river bank"
    },
    {
        "Character": "履",
        "Pinyin": "lǚ"
    },
    {
        "Pinyin": "footwear, shoes; walk on, tread"
    },
    {
        "Character": "捞",
        "Pinyin": "lāo"
    },
    {
        "Pinyin": "scoop out of water; dredge, fish"
    },
    {
        "Character": "咕",
        "Pinyin": "gū"
    },
    {
        "Pinyin": "mumble, mutter, murmur; rumble"
    },
    {
        "Character": "耕",
        "Pinyin": "gēng"
    },
    {
        "Pinyin": "plow, cultivate"
    },
    {
        "Character": "棉",
        "Pinyin": "mián"
    },
    {
        "Pinyin": "cotton; cotton padded"
    },
    {
        "Character": "烁",
        "Pinyin": "shuò"
    },
    {
        "Pinyin": "shine, glitter, sparkle"
    },
    {
        "Character": "尉",
        "Pinyin": "wèi"
    },
    {
        "Pinyin": "officer, military rank"
    },
    {
        "Character": "艰",
        "Pinyin": "jiān"
    },
    {
        "Pinyin": "difficult, hard; distressing"
    },
    {
        "Character": "妓",
        "Pinyin": "jì"
    },
    {
        "Pinyin": "prostitute"
    },
    {
        "Character": "棺",
        "Pinyin": "guān"
    },
    {
        "Pinyin": "coffin"
    },
    {
        "Character": "鹏",
        "Pinyin": "péng"
    },
    {
        "Pinyin": "fabulous bird of enormous size"
    },
    {
        "Character": "蒸",
        "Pinyin": "zhēng"
    },
    {
        "Pinyin": "steam; evaporate"
    },
    {
        "Character": "癌",
        "Pinyin": "yán"
    },
    {
        "Pinyin": "cancer; marmoset"
    },
    {
        "Character": "纬",
        "Pinyin": "wěi"
    },
    {
        "Pinyin": "woof; parallels of latitude"
    },
    {
        "Character": "菌",
        "Pinyin": "jùn"
    },
    {
        "Pinyin": "mushroom; germ, microbe"
    },
    {
        "Character": "撇",
        "Pinyin": "piě"
    },
    {
        "Pinyin": "discard, abandon, throw away"
    },
    {
        "Character": "惩",
        "Pinyin": "chéng"
    },
    {
        "Pinyin": "punish, reprimand; warn"
    },
    {
        "Character": "绑",
        "Pinyin": "bǎng"
    },
    {
        "Pinyin": "bind, tie, fasten"
    },
    {
        "Character": "甫",
        "Pinyin": "fǔ"
    },
    {
        "Pinyin": "begin; man, father; great"
    },
    {
        "Character": "崩",
        "Pinyin": "bēng"
    },
    {
        "Pinyin": "rupture, split apart, collapse"
    },
    {
        "Character": "魄",
        "Pinyin": "pò"
    },
    {
        "Pinyin": "vigor; body; dark part of moon"
    },
    {
        "Character": "拂",
        "Pinyin": "fú"
    },
    {
        "Pinyin": "shake off, brush away; dust"
    },
    {
        "Character": "汰",
        "Pinyin": "tài"
    },
    {
        "Pinyin": "excessive; scour, wash out"
    },
    {
        "Character": "氓",
        "Pinyin": "máng"
    },
    {
        "Pinyin": "people; subjects; vassals"
    },
    {
        "Character": "歇",
        "Pinyin": "xiē"
    },
    {
        "Pinyin": "rest, stop, lodge"
    },
    {
        "Character": "萝",
        "Pinyin": "luó"
    },
    {
        "Pinyin": "type of creeping plant; turnip"
    },
    {
        "Character": "呒",
        "Pinyin": "fǔ"
    },
    {
        "Pinyin": "unclear; an expletive"
    },
    {
        "Character": "萄",
        "Pinyin": "táo"
    },
    {
        "Pinyin": "grapes"
    },
    {
        "Character": "蕃",
        "Pinyin": "fán"
    },
    {
        "Pinyin": "foreign things"
    },
    {
        "Character": "曝",
        "Pinyin": "pù"
    },
    {
        "Pinyin": "sun, air in sun, expose or dry in the sun"
    },
    {
        "Character": "疋",
        "Pinyin": "pǐ"
    },
    {
        "Pinyin": "roll, bolt of cloth; foot"
    },
    {
        "Character": "向",
        "Pinyin": "xiàng"
    },
    {
        "Pinyin": "once upon time; period of time"
    },
    {
        "Character": "胏",
        "Pinyin": "zǐ"
    },
    {
        "Pinyin": "meat"
    },
    {
        "Character": "烛",
        "Pinyin": "zhú"
    },
    {
        "Pinyin": "candle, taper; to shine, illuminate"
    },
    {
        "Character": "腻",
        "Pinyin": "nì"
    },
    {
        "Pinyin": "greasy, oily, dirty; smooth"
    },
    {
        "Character": "襄",
        "Pinyin": "xiāng"
    },
    {
        "Pinyin": "aid, help, assist; undress"
    },
    {
        "Character": "妆",
        "Pinyin": "zhuāng"
    },
    {
        "Pinyin": "to adorn oneself, dress up, use make-up"
    },
    {
        "Character": "髓",
        "Pinyin": "suǐ"
    },
    {
        "Pinyin": "bone marrow; essences, substances"
    },
    {
        "Character": "朴",
        "Pinyin": "pú"
    },
    {
        "Pinyin": "simple, honest; plain; rough"
    },
    {
        "Character": "薯",
        "Pinyin": "shǔ"
    },
    {
        "Pinyin": "yam, tuber, potato"
    },
    {
        "Character": "颂",
        "Pinyin": "sòng"
    },
    {
        "Pinyin": "laud, acclaim; hymn; ode"
    },
    {
        "Character": "薛",
        "Pinyin": "xiē"
    },
    {
        "Pinyin": "kind of marsh grass; feudal state"
    },
    {
        "Character": "滩",
        "Pinyin": "tān"
    },
    {
        "Pinyin": "bank, a sandbar, shoal; rapids"
    },
    {
        "Character": "橘",
        "Pinyin": "jú"
    },
    {
        "Pinyin": "orange, tangerine"
    },
    {
        "Character": "贰",
        "Pinyin": "èr"
    },
    {
        "Pinyin": "number two"
    },
    {
        "Character": "嘲",
        "Pinyin": "cháo"
    },
    {
        "Pinyin": "ridicule, deride, scorn, jeer at"
    },
    {
        "Character": "叹",
        "Pinyin": "tàn"
    },
    {
        "Pinyin": "sigh, admire"
    },
    {
        "Character": "枚",
        "Pinyin": "méi"
    },
    {
        "Pinyin": "stalk of shrub, trunk of tree"
    },
    {
        "Character": "侮",
        "Pinyin": "wǔ"
    },
    {
        "Pinyin": "insult, ridicule, disgrace"
    },
    {
        "Character": "豹",
        "Pinyin": "bào"
    },
    {
        "Pinyin": "leopard, panther; surname"
    },
    {
        "Character": "巢",
        "Pinyin": "cháo"
    },
    {
        "Pinyin": "nest, living quarter in tree"
    },
    {
        "Character": "酬",
        "Pinyin": "chóu"
    },
    {
        "Pinyin": "toast; reward, recompense"
    },
    {
        "Character": "碑",
        "Pinyin": "bēi"
    },
    {
        "Pinyin": "stone tablet; gravestone"
    },
    {
        "Character": "翩",
        "Pinyin": "piān"
    },
    {
        "Pinyin": "fly, flutter"
    },
    {
        "Character": "蚕",
        "Pinyin": "cán"
    },
    {
        "Pinyin": "silkworms"
    },
    {
        "Character": "辽",
        "Pinyin": "liáo"
    },
    {
        "Pinyin": "distant, far"
    },
    {
        "Character": "矿",
        "Pinyin": "kuàng"
    },
    {
        "Pinyin": "mine; mineral, ore"
    },
    {
        "Character": "屡",
        "Pinyin": "lǚ"
    },
    {
        "Pinyin": "frequently, often, again and again"
    },
    {
        "Character": "谴",
        "Pinyin": "qiǎn"
    },
    {
        "Pinyin": "reprimand, scold, abuse"
    },
    {
        "Character": "卵",
        "Pinyin": "luǎn"
    },
    {
        "Pinyin": "egg; ovum; roe; spawn"
    },
    {
        "Character": "撰",
        "Pinyin": "zhuàn"
    },
    {
        "Pinyin": "compose, write, compile"
    },
    {
        "Character": "攀",
        "Pinyin": "pān"
    },
    {
        "Pinyin": "climb; pull; hang on to"
    },
    {
        "Character": "肌",
        "Pinyin": "jī"
    },
    {
        "Pinyin": "muscle tissue; meat on bones"
    },
    {
        "Character": "冯",
        "Pinyin": "féng"
    },
    {
        "Pinyin": "surname; gallop; by dint of"
    },
    {
        "Character": "宴",
        "Pinyin": "yàn"
    },
    {
        "Pinyin": "to entertain, feast; a feast, banquet"
    },
    {
        "Character": "盏",
        "Pinyin": "zhǎn"
    },
    {
        "Pinyin": "small cup or container; classifier for lamps, etc."
    },
    {
        "Character": "坂",
        "Pinyin": "bǎn"
    },
    {
        "Pinyin": "hillside farmland; slope"
    },
    {
        "Character": "浦",
        "Pinyin": "pǔ"
    },
    {
        "Pinyin": "bank of river, shore; surname"
    },
    {
        "Character": "迦",
        "Pinyin": "jiā"
    },
    {
        "Pinyin": "character for transliteration"
    },
    {
        "Character": "颁",
        "Pinyin": "bān"
    },
    {
        "Pinyin": "confer, bestow; publish, promulgate"
    },
    {
        "Character": "炼",
        "Pinyin": "liàn"
    },
    {
        "Pinyin": "smelt, refine; distill, condense"
    },
    {
        "Character": "尬",
        "Pinyin": "gà"
    },
    {
        "Pinyin": "limp, staggering gait; embarrass"
    },
    {
        "Character": "胀",
        "Pinyin": "zhàng"
    },
    {
        "Pinyin": "swell, inflate, expand"
    },
    {
        "Character": "辟",
        "Pinyin": "pì"
    },
    {
        "Pinyin": "law, rule; open up, develop"
    },
    {
        "Character": "艘",
        "Pinyin": "sāo"
    },
    {
        "Pinyin": "counter for ships, vessels"
    },
    {
        "Character": "株",
        "Pinyin": "zhū"
    },
    {
        "Pinyin": "numerary adjunct for trees; root"
    },
    {
        "Character": "只",
        "Pinyin": "zhī"
    },
    {
        "Pinyin": "single, one of pair, lone"
    },
    {
        "Character": "湘",
        "Pinyin": "xiāng"
    },
    {
        "Pinyin": "Hunan province"
    },
    {
        "Character": "饲",
        "Pinyin": "sì"
    },
    {
        "Pinyin": "raise animals; feed; nourish"
    },
    {
        "Character": "爹",
        "Pinyin": "diē"
    },
    {
        "Pinyin": "father, daddy"
    },
    {
        "Character": "梨",
        "Pinyin": "lí"
    },
    {
        "Pinyin": "pear; opera; cut, slash"
    },
    {
        "Character": "喽",
        "Pinyin": "lou"
    },
    {
        "Pinyin": "used in onomatopoetic expressions"
    },
    {
        "Character": "侍",
        "Pinyin": "shì"
    },
    {
        "Pinyin": "serve, attend upon; attendant, servant; samurai"
    },
    {
        "Character": "疫",
        "Pinyin": "yì"
    },
    {
        "Pinyin": "epidemic, plague, pestilence"
    },
    {
        "Character": "雕",
        "Pinyin": "diāo"
    },
    {
        "Pinyin": "engrave, inlay, carve; exhaust; used for U+9D70 鵰 an eagle, vulture"
    },
    {
        "Character": "黯",
        "Pinyin": "àn"
    },
    {
        "Pinyin": "dark, black; sullen, dreary"
    },
    {
        "Character": "并",
        "Pinyin": "bìng"
    },
    {
        "Pinyin": "combine, annex"
    },
    {
        "Character": "铝",
        "Pinyin": "lǚ"
    },
    {
        "Pinyin": "aluminum"
    },
    {
        "Character": "弗",
        "Pinyin": "fú"
    },
    {
        "Pinyin": "not, negative"
    },
    {
        "Character": "爪",
        "Pinyin": "zhuǎ"
    },
    {
        "Pinyin": "claw, nail, talon; animal feet"
    },
    {
        "Character": "鄙",
        "Pinyin": "bǐ"
    },
    {
        "Pinyin": "mean; low"
    },
    {
        "Character": "钗",
        "Pinyin": "chāi"
    },
    {
        "Pinyin": "ornamental hairpin"
    },
    {
        "Character": "栽",
        "Pinyin": "zāi"
    },
    {
        "Pinyin": "to cultivate, plant; to care for plants"
    },
    {
        "Character": "狸",
        "Pinyin": "lí"
    },
    {
        "Pinyin": "fox"
    },
    {
        "Character": "谘",
        "Pinyin": "zī"
    },
    {
        "Pinyin": "consult, confer; communicate in"
    },
    {
        "Character": "柄",
        "Pinyin": "bǐng"
    },
    {
        "Pinyin": "handle, lever, knob; authority"
    },
    {
        "Character": "悸",
        "Pinyin": "jì"
    },
    {
        "Pinyin": "fearful, apprehensive, perturbed"
    },
    {
        "Character": "喉",
        "Pinyin": "hóu"
    },
    {
        "Pinyin": "throat, gullet, larynx; guttural"
    },
    {
        "Character": "擅",
        "Pinyin": "shàn"
    },
    {
        "Pinyin": "monopolize; claim; arbitrarily; to dare"
    },
    {
        "Character": "劈",
        "Pinyin": "pī"
    },
    {
        "Pinyin": "cut apart, split, chop"
    },
    {
        "Character": "秉",
        "Pinyin": "bǐng"
    },
    {
        "Pinyin": "grasp, hold; bundle; authority"
    },
    {
        "Character": "芷",
        "Pinyin": "zhǐ"
    },
    {
        "Pinyin": "angelica, type of iris"
    },
    {
        "Character": "裸",
        "Pinyin": "luǒ"
    },
    {
        "Pinyin": "bare, nude; undress, strip"
    },
    {
        "Character": "锵",
        "Pinyin": "qiāng"
    },
    {
        "Pinyin": "tinkle, clang, jingle"
    },
    {
        "Character": "贾",
        "Pinyin": "jiǎ"
    },
    {
        "Pinyin": "surname; merchant; buy, trade"
    },
    {
        "Character": "逗",
        "Pinyin": "dòu"
    },
    {
        "Pinyin": "tempt, allure, arouse, stir"
    },
    {
        "Character": "寓",
        "Pinyin": "yù"
    },
    {
        "Pinyin": "residence; lodge; dwell"
    },
    {
        "Character": "咚",
        "Pinyin": "dōng"
    },
    {
        "Pinyin": "used as description of sound"
    },
    {
        "Character": "璞",
        "Pinyin": "pú"
    },
    {
        "Pinyin": "unpolished gem, uncarved gem"
    },
    {
        "Character": "烫",
        "Pinyin": "tàng"
    },
    {
        "Pinyin": "scald, heat; wash; iron clothes"
    },
    {
        "Character": "铅",
        "Pinyin": "qiān"
    },
    {
        "Pinyin": "lead plumbum"
    },
    {
        "Character": "啸",
        "Pinyin": "xiào"
    },
    {
        "Pinyin": "roar, howl, scream; whistle"
    },
    {
        "Character": "炳",
        "Pinyin": "bǐng"
    },
    {
        "Pinyin": "bright, luminous; glorious"
    },
    {
        "Character": "屿",
        "Pinyin": "yǔ"
    },
    {
        "Pinyin": "island"
    },
    {
        "Character": "竖",
        "Pinyin": "shù"
    },
    {
        "Pinyin": "vertical; perpendicular; upright"
    },
    {
        "Character": "惶",
        "Pinyin": "huáng"
    },
    {
        "Pinyin": "fearful, afraid, anxious, nervous"
    },
    {
        "Character": "仕",
        "Pinyin": "shì"
    },
    {
        "Pinyin": "official; serve government"
    },
    {
        "Character": "挪",
        "Pinyin": "nuó"
    },
    {
        "Pinyin": "move, shift on one side"
    },
    {
        "Character": "栅",
        "Pinyin": "zhà"
    },
    {
        "Pinyin": "fence; palisade; grid"
    },
    {
        "Character": "迄",
        "Pinyin": "qì"
    },
    {
        "Pinyin": "extend, reach; until; till"
    },
    {
        "Character": "顷",
        "Pinyin": "qǐng"
    },
    {
        "Pinyin": "a moment; a measure of area equal to 100 mu or 6.7 hectares; to lean"
    },
    {
        "Character": "窄",
        "Pinyin": "zhǎi"
    },
    {
        "Pinyin": "narrow, tight; narrow-minded"
    },
    {
        "Character": "鸥",
        "Pinyin": "ōu"
    },
    {
        "Pinyin": "seagull, tern; Larus species (various)"
    },
    {
        "Character": "鲢",
        "Pinyin": "lián"
    },
    {
        "Pinyin": "silver carp, hypophthalmiathys"
    },
    {
        "Character": "郊",
        "Pinyin": "jiāo"
    },
    {
        "Pinyin": "suburbs; waste land, open spaces"
    },
    {
        "Character": "倩",
        "Pinyin": "qiàn"
    },
    {
        "Pinyin": "beautiful, lovely; son-in-law"
    },
    {
        "Character": "兜",
        "Pinyin": "dōu"
    },
    {
        "Pinyin": "pouch"
    },
    {
        "Character": "茧",
        "Pinyin": "jiǎn"
    },
    {
        "Pinyin": "cocoon; callus, blister"
    },
    {
        "Character": "磊",
        "Pinyin": "lěi"
    },
    {
        "Pinyin": "pile of rocks or stones; great"
    },
    {
        "Character": "抒",
        "Pinyin": "shū"
    },
    {
        "Pinyin": "express; eliminate; relieve"
    },
    {
        "Character": "夷",
        "Pinyin": "yí"
    },
    {
        "Pinyin": "ancient barbarian tribes"
    },
    {
        "Character": "绰",
        "Pinyin": "chuò"
    },
    {
        "Pinyin": "graceful, delicate; spacious"
    },
    {
        "Character": "溯",
        "Pinyin": "sù"
    },
    {
        "Pinyin": "go upstream, go against current; formerly"
    },
    {
        "Character": "拙",
        "Pinyin": "zhuó"
    },
    {
        "Pinyin": "stupid, clumsy, crude; convention"
    },
    {
        "Character": "僚",
        "Pinyin": "liáo"
    },
    {
        "Pinyin": "companion, colleague; officials; bureaucracy; a pretty face"
    },
    {
        "Character": "芙",
        "Pinyin": "fú"
    },
    {
        "Pinyin": "hibiscus"
    },
    {
        "Character": "杖",
        "Pinyin": "zhàng"
    },
    {
        "Pinyin": "cane, walking stick"
    },
    {
        "Character": "溃",
        "Pinyin": "kuì"
    },
    {
        "Pinyin": "flooding river; militarily defeat"
    },
    {
        "Character": "凶",
        "Pinyin": "xiōng"
    },
    {
        "Pinyin": "culprit; murder; bad, sad"
    },
    {
        "Character": "鸽",
        "Pinyin": "gē"
    },
    {
        "Pinyin": "pigeon, dove; Columba species (various)"
    },
    {
        "Character": "妒",
        "Pinyin": "dù"
    },
    {
        "Pinyin": "jealous, envious"
    },
    {
        "Character": "沌",
        "Pinyin": "dùn"
    },
    {
        "Pinyin": "chaotic, confused; turbid, murky"
    },
    {
        "Character": "祺",
        "Pinyin": "qí"
    },
    {
        "Pinyin": "good luck, good fortune"
    },
    {
        "Character": "呐",
        "Pinyin": "nè"
    },
    {
        "Pinyin": "raise voice, yell out loud, shout; stammer"
    },
    {
        "Character": "卦",
        "Pinyin": "guà"
    },
    {
        "Pinyin": "fortune telling; tell fortunes"
    },
    {
        "Character": "聆",
        "Pinyin": "líng"
    },
    {
        "Pinyin": "listen, hear"
    },
    {
        "Character": "栖",
        "Pinyin": "qī"
    },
    {
        "Pinyin": "perch; roost; stay"
    },
    {
        "Character": "蝇",
        "Pinyin": "yíng"
    },
    {
        "Pinyin": "flies"
    },
    {
        "Character": "佮",
        "Pinyin": "gé"
    },
    {
        "Pinyin": "(Cant.) intensive particle"
    },
    {
        "Character": "唾",
        "Pinyin": "tuò"
    },
    {
        "Pinyin": "spit, spit on; saliva"
    },
    {
        "Character": "汇",
        "Pinyin": "huì"
    },
    {
        "Pinyin": "collect, compile, assemble; hedgehog"
    },
    {
        "Character": "楣",
        "Pinyin": "méi"
    },
    {
        "Pinyin": "crossbeam above or under gate"
    },
    {
        "Character": "匠",
        "Pinyin": "jiàng"
    },
    {
        "Pinyin": "craftsman, artisan; workman"
    },
    {
        "Character": "蛛",
        "Pinyin": "zhū"
    },
    {
        "Pinyin": "spider"
    },
    {
        "Character": "悼",
        "Pinyin": "dào"
    },
    {
        "Pinyin": "grieve, mourn, lament; grieved"
    },
    {
        "Character": "舜",
        "Pinyin": "shùn"
    },
    {
        "Pinyin": "legendary ruler"
    },
    {
        "Character": "耿",
        "Pinyin": "gěng"
    },
    {
        "Pinyin": "bright, shining; have guts"
    },
    {
        "Character": "瞄",
        "Pinyin": "miáo"
    },
    {
        "Pinyin": "take aim at; look at"
    },
    {
        "Character": "芋",
        "Pinyin": "yù"
    },
    {
        "Pinyin": "taro"
    },
    {
        "Character": "瞒",
        "Pinyin": "mán"
    },
    {
        "Pinyin": "deceive, lie; eyes half-closed"
    },
    {
        "Character": "竭",
        "Pinyin": "jié"
    },
    {
        "Pinyin": "put forth great effort; exhaust"
    },
    {
        "Character": "茵",
        "Pinyin": "yīn"
    },
    {
        "Pinyin": "a cushion, mattress; wormwood; Skimmia japon"
    },
    {
        "Character": "吼",
        "Pinyin": "hǒu"
    },
    {
        "Pinyin": "roar, shout; bark, howl"
    },
    {
        "Character": "苛",
        "Pinyin": "kē"
    },
    {
        "Pinyin": "small, petty; harsh, rigorous"
    },
    {
        "Character": "浸",
        "Pinyin": "jìn"
    },
    {
        "Pinyin": "soak, immerse, dip, percolate"
    },
    {
        "Character": "拯",
        "Pinyin": "zhěng"
    },
    {
        "Pinyin": "help, save, aid; lift, raise"
    },
    {
        "Character": "克",
        "Pinyin": "kè"
    },
    {
        "Pinyin": "subdue, overcome; cut down"
    },
    {
        "Character": "豆",
        "Pinyin": "dòu"
    },
    {
        "Pinyin": "beans, peas; bean-shaped"
    },
    {
        "Character": "沛",
        "Pinyin": "pèi"
    },
    {
        "Pinyin": "abundant, full, copious; sudden"
    },
    {
        "Character": "掠",
        "Pinyin": "lvè"
    },
    {
        "Pinyin": "rob, ransack, plunder; pass by"
    },
    {
        "Character": "廊",
        "Pinyin": "láng"
    },
    {
        "Pinyin": "corridor, porch, veranda"
    },
    {
        "Character": "凸",
        "Pinyin": "tū"
    },
    {
        "Pinyin": "protrude, bulge out, convex"
    },
    {
        "Character": "搅",
        "Pinyin": "jiǎo"
    },
    {
        "Pinyin": "disturb, agitate, stir up"
    },
    {
        "Character": "俺",
        "Pinyin": "ǎn"
    },
    {
        "Pinyin": "personal pronoun, I"
    },
    {
        "Character": "酌",
        "Pinyin": "zhuó"
    },
    {
        "Pinyin": "serve wine; feast; deliberate"
    },
    {
        "Character": "倡",
        "Pinyin": "chàng"
    },
    {
        "Pinyin": "guide, leader; lead, introduce"
    },
    {
        "Character": "朦",
        "Pinyin": "méng"
    },
    {
        "Pinyin": "condition or appearance of moon"
    },
    {
        "Character": "蕉",
        "Pinyin": "jiāo"
    },
    {
        "Pinyin": "banana; plantain"
    },
    {
        "Character": "暱",
        "Pinyin": "nì"
    },
    {
        "Pinyin": "intimate, close; approach"
    },
    {
        "Character": "焕",
        "Pinyin": "huàn"
    },
    {
        "Pinyin": "shining, brilliant, lustrous"
    },
    {
        "Character": "掏",
        "Pinyin": "tāo"
    },
    {
        "Pinyin": "take out; pull out; clean out"
    },
    {
        "Character": "蝉",
        "Pinyin": "chán"
    },
    {
        "Pinyin": "cicada; continuous"
    },
    {
        "Character": "焰",
        "Pinyin": "yàn"
    },
    {
        "Pinyin": "flame, blaze; glowing, blazing"
    },
    {
        "Character": "狄",
        "Pinyin": "dí"
    },
    {
        "Pinyin": "tribe from northern china; surnam"
    },
    {
        "Character": "绳",
        "Pinyin": "shéng"
    },
    {
        "Pinyin": "rope, string, cord; measure, restrain"
    },
    {
        "Character": "惰",
        "Pinyin": "duò"
    },
    {
        "Pinyin": "indolent, careless, lazy, idle"
    },
    {
        "Character": "芽",
        "Pinyin": "yá"
    },
    {
        "Pinyin": "bud, sprout, shoot"
    },
    {
        "Character": "裹",
        "Pinyin": "guǒ"
    },
    {
        "Pinyin": "wrap, bind; encircle, confine"
    },
    {
        "Character": "宛",
        "Pinyin": "wǎn"
    },
    {
        "Pinyin": "seem, as if, crooked"
    },
    {
        "Character": "御",
        "Pinyin": "yù"
    },
    {
        "Pinyin": "defend, resist, hold out against"
    },
    {
        "Character": "赎",
        "Pinyin": "shú"
    },
    {
        "Pinyin": "buy, redeem; ransome; atone for"
    },
    {
        "Character": "燥",
        "Pinyin": "zào"
    },
    {
        "Pinyin": "dry, parched, arid; quick-tempered"
    },
    {
        "Character": "滔",
        "Pinyin": "tāo"
    },
    {
        "Pinyin": "overflow; rushing water, a torrent"
    },
    {
        "Character": "贬",
        "Pinyin": "biǎn"
    },
    {
        "Pinyin": "decrease, lower; censure, criticize"
    },
    {
        "Character": "悍",
        "Pinyin": "hàn"
    },
    {
        "Pinyin": "courageous, brave; violent"
    },
    {
        "Character": "袂",
        "Pinyin": "mèi"
    },
    {
        "Pinyin": "sleeves"
    },
    {
        "Character": "坟",
        "Pinyin": "fén"
    },
    {
        "Pinyin": "grave, mound; bulge; bulging"
    },
    {
        "Character": "颉",
        "Pinyin": "jié"
    },
    {
        "Pinyin": "fly upward, soar; contest; to rob"
    },
    {
        "Character": "啤",
        "Pinyin": "pí"
    },
    {
        "Pinyin": "beer"
    },
    {
        "Character": "押",
        "Pinyin": "yā"
    },
    {
        "Pinyin": "mortgage, pledge; deposit; to pawn; to arrest, detain, guard"
    },
    {
        "Character": "尴",
        "Pinyin": "gān"
    },
    {
        "Pinyin": "embarrassed; ill at ease"
    },
    {
        "Character": "颤",
        "Pinyin": "zhàn"
    },
    {
        "Pinyin": "shiver, tremble; trembling"
    },
    {
        "Character": "钝",
        "Pinyin": "dùn"
    },
    {
        "Pinyin": "blunt, obtuse; dull; flat; dull-witted"
    },
    {
        "Character": "腥",
        "Pinyin": "xīng"
    },
    {
        "Pinyin": "raw meat; rank, strong-smelling"
    },
    {
        "Character": "缔",
        "Pinyin": "dì"
    },
    {
        "Pinyin": "tie, join, connect; connection"
    },
    {
        "Character": "粮",
        "Pinyin": "liáng"
    },
    {
        "Pinyin": "food, grain, provisions"
    },
    {
        "Character": "哑",
        "Pinyin": "yǎ"
    },
    {
        "Pinyin": "dumb, mute; become hoarse"
    },
    {
        "Character": "槟",
        "Pinyin": "bīn"
    },
    {
        "Pinyin": "betelnut, areca nut"
    },
    {
        "Character": "簿",
        "Pinyin": "bó"
    },
    {
        "Pinyin": "register, account book, notebook"
    },
    {
        "Character": "斧",
        "Pinyin": "fǔ"
    },
    {
        "Pinyin": "axe, hatchet; chop, hew"
    },
    {
        "Character": "肿",
        "Pinyin": "zhǒng"
    },
    {
        "Pinyin": "swell; swollen; swelling"
    },
    {
        "Character": "纶",
        "Pinyin": "lún"
    },
    {
        "Pinyin": "green silk thread or tassel"
    },
    {
        "Character": "僵",
        "Pinyin": "jiāng"
    },
    {
        "Pinyin": "stiff and motionless, stock still"
    },
    {
        "Character": "齣",
        "Pinyin": "chū"
    },
    {
        "Pinyin": "act; stanza; time, occasion"
    },
    {
        "Character": "辖",
        "Pinyin": "xiá"
    },
    {
        "Pinyin": "linchpin of wheel; control"
    },
    {
        "Character": "蹲",
        "Pinyin": "dūn"
    },
    {
        "Pinyin": "squat, crouch; idle about"
    },
    {
        "Character": "敷",
        "Pinyin": "fū"
    },
    {
        "Pinyin": "spread, diffuse; apply, paint"
    },
    {
        "Character": "喘",
        "Pinyin": "chuǎn"
    },
    {
        "Pinyin": "pant, gasp, breathe heavily"
    },
    {
        "Character": "扎",
        "Pinyin": "zhā"
    },
    {
        "Pinyin": "pull up; pierce; struggle free"
    },
    {
        "Character": "酿",
        "Pinyin": "niàng"
    },
    {
        "Pinyin": "brew, ferment"
    },
    {
        "Character": "佑",
        "Pinyin": "yòu"
    },
    {
        "Pinyin": "help, protect, bless"
    },
    {
        "Character": "肖",
        "Pinyin": "xiào"
    },
    {
        "Pinyin": "look like, resemble, be like"
    },
    {
        "Character": "愈",
        "Pinyin": "yù"
    },
    {
        "Pinyin": "more and more, even more"
    },
    {
        "Character": "隧",
        "Pinyin": "suì"
    },
    {
        "Pinyin": "tunnel, underground passageway, path to a tomb"
    },
    {
        "Character": "嗜",
        "Pinyin": "shì"
    },
    {
        "Pinyin": "be fond of, have weakness for"
    },
    {
        "Character": "檬",
        "Pinyin": "méng"
    },
    {
        "Pinyin": "type of locust oracacia"
    },
    {
        "Character": "迳",
        "Pinyin": "jìng"
    },
    {
        "Pinyin": "pass by, approach; direct"
    },
    {
        "Character": "碌",
        "Pinyin": "lù"
    },
    {
        "Pinyin": "rough, uneven, rocky; mediocre"
    },
    {
        "Character": "襟",
        "Pinyin": "jīn"
    },
    {
        "Pinyin": "lapel, collar"
    },
    {
        "Character": "凋",
        "Pinyin": "diāo"
    },
    {
        "Pinyin": "be withered, fallen; exhausted"
    },
    {
        "Character": "圭",
        "Pinyin": "guī"
    },
    {
        "Pinyin": "jade pointed at top"
    },
    {
        "Character": "寇",
        "Pinyin": "kòu"
    },
    {
        "Pinyin": "bandits, thieves; enemy; invade"
    },
    {
        "Character": "污",
        "Pinyin": "wū"
    },
    {
        "Pinyin": "filthy, dirty, impure, polluted"
    },
    {
        "Character": "哨",
        "Pinyin": "shào"
    },
    {
        "Pinyin": "whistle, blow whistle; chirp"
    },
    {
        "Character": "倪",
        "Pinyin": "ní"
    },
    {
        "Pinyin": "feeble, tiny, young and weak"
    },
    {
        "Character": "筠",
        "Pinyin": "yún"
    },
    {
        "Pinyin": "bamboo skin; bamboo"
    },
    {
        "Character": "桦",
        "Pinyin": "huà"
    },
    {
        "Pinyin": "type of birch"
    },
    {
        "Character": "诈",
        "Pinyin": "zhà"
    },
    {
        "Pinyin": "cheat, defraud, swindle; trick; to feign"
    },
    {
        "Character": "姜",
        "Pinyin": "jiāng"
    },
    {
        "Pinyin": "surname; ginger"
    },
    {
        "Character": "旬",
        "Pinyin": "xún"
    },
    {
        "Pinyin": "ten-day period; period of time"
    },
    {
        "Character": "秃",
        "Pinyin": "tū"
    },
    {
        "Pinyin": "bald, bare, stripped"
    },
    {
        "Character": "脂",
        "Pinyin": "zhī"
    },
    {
        "Pinyin": "fat, grease, lard; grease"
    },
    {
        "Character": "噢",
        "Pinyin": "yǔ"
    },
    {
        "Pinyin": "moan; interjection for pain, sad"
    },
    {
        "Character": "撼",
        "Pinyin": "hàn"
    },
    {
        "Pinyin": "move, shake; (Cant.) to fight"
    },
    {
        "Character": "衅",
        "Pinyin": "xìn"
    },
    {
        "Pinyin": "smear with blood in sacrifice; rift, quarrel"
    },
    {
        "Character": "庚",
        "Pinyin": "gēng"
    },
    {
        "Pinyin": "7th heavenly stem"
    },
    {
        "Character": "炫",
        "Pinyin": "xuàn"
    },
    {
        "Pinyin": "shine, glitter; show off, flaunt"
    },
    {
        "Character": "谭",
        "Pinyin": "tán"
    },
    {
        "Pinyin": "surname; to talk"
    },
    {
        "Character": "惭",
        "Pinyin": "cán"
    },
    {
        "Pinyin": "ashamed, humiliated; shameful"
    },
    {
        "Character": "涩",
        "Pinyin": "sè"
    },
    {
        "Pinyin": "astringent; harsh; uneven, rough"
    },
    {
        "Character": "崔",
        "Pinyin": "cuī"
    },
    {
        "Pinyin": "high, lofty, towering; surname"
    },
    {
        "Character": "贷",
        "Pinyin": "dài"
    },
    {
        "Pinyin": "lend; borrow; pardon"
    },
    {
        "Character": "胡",
        "Pinyin": "hú"
    },
    {
        "Pinyin": "beard, mustache, whiskers"
    },
    {
        "Character": "晒",
        "Pinyin": "shài"
    },
    {
        "Pinyin": "dry in sun, expose to sun"
    },
    {
        "Character": "琉",
        "Pinyin": "liú"
    },
    {
        "Pinyin": "sparkling stone; glazed, opaque"
    },
    {
        "Character": "捏",
        "Pinyin": "niē"
    },
    {
        "Pinyin": "pick with fingers; knead; mold"
    },
    {
        "Character": "绮",
        "Pinyin": "qǐ"
    },
    {
        "Pinyin": "fine thin silk; elegant, beautifu"
    },
    {
        "Character": "膝",
        "Pinyin": "xī"
    },
    {
        "Pinyin": "knee"
    },
    {
        "Character": "拭",
        "Pinyin": "shì"
    },
    {
        "Pinyin": "wipe away stains with cloth"
    },
    {
        "Character": "暗",
        "Pinyin": "àn"
    },
    {
        "Pinyin": "dark; obscure; in secret, covert"
    },
    {
        "Character": "醋",
        "Pinyin": "cù"
    },
    {
        "Pinyin": "vinegar; jealousy, envy"
    },
    {
        "Character": "膨",
        "Pinyin": "péng"
    },
    {
        "Pinyin": "to swell; swollen, bloated, inflated"
    },
    {
        "Character": "杠",
        "Pinyin": "gāng"
    },
    {
        "Pinyin": "lever, pole, crowbar; sharpen"
    },
    {
        "Character": "鑫",
        "Pinyin": "xīn"
    },
    {
        "Pinyin": "used in names"
    },
    {
        "Character": "瀑",
        "Pinyin": "pù"
    },
    {
        "Pinyin": "waterfall, cascade; heavy rain"
    },
    {
        "Character": "喃",
        "Pinyin": "nán"
    },
    {
        "Pinyin": "keep talking, chattering; mumble"
    },
    {
        "Character": "剖",
        "Pinyin": "pōu"
    },
    {
        "Pinyin": "split in two, slice; dissect"
    },
    {
        "Character": "袜",
        "Pinyin": "wà"
    },
    {
        "Pinyin": "socks, stockings"
    },
    {
        "Character": "逾",
        "Pinyin": "yú"
    },
    {
        "Pinyin": "go over, pass over, exceed"
    },
    {
        "Character": "涅",
        "Pinyin": "niè"
    },
    {
        "Pinyin": "blacken; black mud, slime; tatto"
    },
    {
        "Character": "扳",
        "Pinyin": "bān"
    },
    {
        "Pinyin": "pull; drag; right itself"
    },
    {
        "Character": "惘",
        "Pinyin": "wǎng"
    },
    {
        "Pinyin": "disconcerted, dejected, discouraged"
    },
    {
        "Character": "凳",
        "Pinyin": "dèng"
    },
    {
        "Pinyin": "bench; stool"
    },
    {
        "Character": "呃",
        "Pinyin": "è"
    },
    {
        "Pinyin": "belch; hiccup"
    },
    {
        "Character": "掘",
        "Pinyin": "jué"
    },
    {
        "Pinyin": "dig, excavate; excavate cave"
    },
    {
        "Character": "捍",
        "Pinyin": "hàn"
    },
    {
        "Pinyin": "ward off, guard against, defend"
    },
    {
        "Character": "榔",
        "Pinyin": "láng"
    },
    {
        "Pinyin": "betel-nut tree"
    },
    {
        "Character": "窍",
        "Pinyin": "qiào"
    },
    {
        "Pinyin": "hole, opening, aperture"
    },
    {
        "Character": "蜗",
        "Pinyin": "guā"
    },
    {
        "Pinyin": "a snail, Eulota callizoma"
    },
    {
        "Character": "旷",
        "Pinyin": "kuàng"
    },
    {
        "Pinyin": "extensive, wide, broad; empty"
    },
    {
        "Character": "梵",
        "Pinyin": "fàn"
    },
    {
        "Pinyin": "Buddhist, Sanskrit"
    },
    {
        "Character": "暇",
        "Pinyin": "xiá"
    },
    {
        "Pinyin": "leisure, relaxation, spare time"
    },
    {
        "Character": "稻",
        "Pinyin": "dào"
    },
    {
        "Pinyin": "rice growing in field, rice plant"
    },
    {
        "Character": "柠",
        "Pinyin": "níng"
    },
    {
        "Pinyin": "lemon"
    },
    {
        "Character": "抉",
        "Pinyin": "jué"
    },
    {
        "Pinyin": "choose, select; gouge, pluck out"
    },
    {
        "Character": "辗",
        "Pinyin": "zhǎn"
    },
    {
        "Pinyin": "turn over, roll"
    },
    {
        "Character": "蔚",
        "Pinyin": "wèi"
    },
    {
        "Pinyin": "luxuriant, thick; ornamental"
    },
    {
        "Character": "钩",
        "Pinyin": "gōu"
    },
    {
        "Pinyin": "hook, barb; sickle; stroke with"
    },
    {
        "Character": "卜",
        "Pinyin": "bó"
    },
    {
        "Pinyin": "radish"
    },
    {
        "Character": "莺",
        "Pinyin": "yīng"
    },
    {
        "Pinyin": "oriole, green finch; Sylvia species (various)"
    },
    {
        "Character": "匡",
        "Pinyin": "kuāng"
    },
    {
        "Pinyin": "correct, restore, revise"
    },
    {
        "Character": "蜘",
        "Pinyin": "zhī"
    },
    {
        "Pinyin": "spider"
    },
    {
        "Character": "祯",
        "Pinyin": "zhēn"
    },
    {
        "Pinyin": "lucky, auspicious, good omen"
    },
    {
        "Character": "哔",
        "Pinyin": "bì"
    },
    {
        "Pinyin": "used in transliterations"
    },
    {
        "Character": "窟",
        "Pinyin": "kū"
    },
    {
        "Pinyin": "hole, cave; cellar; underground"
    },
    {
        "Character": "亟",
        "Pinyin": "jí"
    },
    {
        "Pinyin": "urgently, immediately, extremely"
    },
    {
        "Character": "谛",
        "Pinyin": "dì"
    },
    {
        "Pinyin": "careful, attentive"
    },
    {
        "Character": "溢",
        "Pinyin": "yì"
    },
    {
        "Pinyin": "overflow, brim over; full"
    },
    {
        "Character": "黛",
        "Pinyin": "dài"
    },
    {
        "Pinyin": "blacken eyebrows; black"
    },
    {
        "Character": "晦",
        "Pinyin": "huì"
    },
    {
        "Pinyin": "dark, unclear, obscure; night"
    },
    {
        "Character": "伶",
        "Pinyin": "líng"
    },
    {
        "Pinyin": "lonely, solitary; actor"
    },
    {
        "Character": "逮",
        "Pinyin": "dài"
    },
    {
        "Pinyin": "seize, catch; reach, arrive"
    },
    {
        "Character": "傍",
        "Pinyin": "bàng"
    },
    {
        "Pinyin": "by side of, beside, near, close"
    },
    {
        "Character": "葱",
        "Pinyin": "cōng"
    },
    {
        "Pinyin": "scallions, onions, leeks"
    },
    {
        "Character": "刁",
        "Pinyin": "diāo"
    },
    {
        "Pinyin": "tricky, sly, crafty, cunning"
    },
    {
        "Character": "堤",
        "Pinyin": "dī"
    },
    {
        "Pinyin": "dike"
    },
    {
        "Character": "恍",
        "Pinyin": "huǎng"
    },
    {
        "Pinyin": "seemingly; absent-minded"
    },
    {
        "Character": "匣",
        "Pinyin": "xiá"
    },
    {
        "Pinyin": "small box, case, coffer"
    },
    {
        "Character": "谍",
        "Pinyin": "dié"
    },
    {
        "Pinyin": "an intelligence report; to spy; spying"
    },
    {
        "Character": "禧",
        "Pinyin": "xī"
    },
    {
        "Pinyin": "happiness; congratulations"
    },
    {
        "Character": "轿",
        "Pinyin": "jiào"
    },
    {
        "Pinyin": "sedan-chair, palanquin"
    },
    {
        "Character": "耸",
        "Pinyin": "sǒng"
    },
    {
        "Pinyin": "urge on; rise up; stir, excite; to raise up; lofty"
    },
    {
        "Character": "瀚",
        "Pinyin": "hàn"
    },
    {
        "Pinyin": "vast, wide, extensive"
    },
    {
        "Character": "斐",
        "Pinyin": "fěi"
    },
    {
        "Pinyin": "graceful, elegant, beautiful"
    },
    {
        "Character": "忿",
        "Pinyin": "fèn"
    },
    {
        "Pinyin": "get angry; fury, exasperation"
    },
    {
        "Character": "泓",
        "Pinyin": "hóng"
    },
    {
        "Pinyin": "clear, deep pool of water"
    },
    {
        "Character": "拐",
        "Pinyin": "guǎi"
    },
    {
        "Pinyin": "kidnap, abduct; turn"
    },
    {
        "Character": "驴",
        "Pinyin": "lǘ"
    },
    {
        "Pinyin": "donkey, ass"
    },
    {
        "Character": "罕",
        "Pinyin": "hǎn"
    },
    {
        "Pinyin": "rare, scarce; surname"
    },
    {
        "Character": "沫",
        "Pinyin": "mò"
    },
    {
        "Pinyin": "froth, foam, bubbles, suds"
    },
    {
        "Character": "绽",
        "Pinyin": "zhàn"
    },
    {
        "Pinyin": "ripped seam, rend, crack"
    },
    {
        "Character": "刃",
        "Pinyin": "rèn"
    },
    {
        "Pinyin": "edged tool, cutlery, knife edge"
    },
    {
        "Character": "窈",
        "Pinyin": "yǎo"
    },
    {
        "Pinyin": "obscure, secluded; refined"
    },
    {
        "Character": "渝",
        "Pinyin": "yú"
    },
    {
        "Pinyin": "change; chongqing"
    },
    {
        "Character": "仄",
        "Pinyin": "zè"
    },
    {
        "Pinyin": "slanting, oblique; oblique tones"
    },
    {
        "Character": "瑛",
        "Pinyin": "yīng"
    },
    {
        "Pinyin": "luster of gem; crystal"
    },
    {
        "Character": "葵",
        "Pinyin": "kuí"
    },
    {
        "Pinyin": "sunflower; measure"
    },
    {
        "Character": "噜",
        "Pinyin": "lū"
    },
    {
        "Pinyin": "verbose, talkative; mumbling"
    },
    {
        "Character": "绣",
        "Pinyin": "xiù"
    },
    {
        "Pinyin": "embroider; embroidery; ornament"
    },
    {
        "Character": "奕",
        "Pinyin": "yì"
    },
    {
        "Pinyin": "in sequence, orderly; abundant"
    },
    {
        "Character": "窥",
        "Pinyin": "kuī"
    },
    {
        "Pinyin": "peep, watch, spy on, pry"
    },
    {
        "Character": "浏",
        "Pinyin": "liú"
    },
    {
        "Pinyin": "clear; bright; whistling"
    },
    {
        "Character": "隶",
        "Pinyin": "lì"
    },
    {
        "Pinyin": "be subservient to; servant"
    },
    {
        "Character": "蔽",
        "Pinyin": "bì"
    },
    {
        "Pinyin": "cover, hide, conceal; shelter"
    },
    {
        "Character": "仟",
        "Pinyin": "qiān"
    },
    {
        "Pinyin": "one thousand; leader of one thousand men"
    },
    {
        "Character": "敛",
        "Pinyin": "liàn"
    },
    {
        "Pinyin": "draw back, fold back; collect"
    },
    {
        "Character": "丞",
        "Pinyin": "chéng"
    },
    {
        "Pinyin": "assist, aid, rescue"
    },
    {
        "Character": "诘",
        "Pinyin": "jié"
    },
    {
        "Pinyin": "question, interrogate"
    },
    {
        "Character": "鳖",
        "Pinyin": "biē"
    },
    {
        "Pinyin": "turtle"
    },
    {
        "Character": "疤",
        "Pinyin": "bā"
    },
    {
        "Pinyin": "scar, cicatrix; birthmark"
    },
    {
        "Character": "膏",
        "Pinyin": "gāo"
    },
    {
        "Pinyin": "grease, fat; paste, ointment"
    },
    {
        "Character": "锥",
        "Pinyin": "zhuī"
    },
    {
        "Pinyin": "gimlet, awl, drill, auger; bore"
    },
    {
        "Character": "窕",
        "Pinyin": "tiǎo"
    },
    {
        "Pinyin": "slender; quiet and modest, charming"
    },
    {
        "Character": "皱",
        "Pinyin": "zhòu"
    },
    {
        "Pinyin": "wrinkles, creases, folds"
    },
    {
        "Character": "晰",
        "Pinyin": "xī"
    },
    {
        "Pinyin": "clear, evident; clearly"
    },
    {
        "Character": "晖",
        "Pinyin": "huī"
    },
    {
        "Pinyin": "sunshine; light, bright, radiant"
    },
    {
        "Character": "舅",
        "Pinyin": "jiù"
    },
    {
        "Pinyin": "mother's brother, uncle"
    },
    {
        "Character": "孰",
        "Pinyin": "shú"
    },
    {
        "Pinyin": "who? which? what? which one?"
    },
    {
        "Character": "煽",
        "Pinyin": "shān"
    },
    {
        "Pinyin": "stir up, incite, agitate, provoke"
    },
    {
        "Character": "姚",
        "Pinyin": "yáo"
    },
    {
        "Pinyin": "handsome, elegant; surname"
    },
    {
        "Character": "钞",
        "Pinyin": "chāo"
    },
    {
        "Pinyin": "paper money, bank notes; copy"
    },
    {
        "Character": "袱",
        "Pinyin": "fú"
    },
    {
        "Pinyin": "a piece of cloth used wrap bundles"
    },
    {
        "Character": "绊",
        "Pinyin": "bàn"
    },
    {
        "Pinyin": "loop, catch; fetter, shackle"
    },
    {
        "Character": "焚",
        "Pinyin": "fén"
    },
    {
        "Pinyin": "burn"
    },
    {
        "Character": "芦",
        "Pinyin": "lú"
    },
    {
        "Pinyin": "rushes, reeds"
    },
    {
        "Character": "咸",
        "Pinyin": "xián"
    },
    {
        "Pinyin": "salty, briny; salted; pickled"
    },
    {
        "Character": "沮",
        "Pinyin": "jū"
    },
    {
        "Pinyin": "stop, prevent; defeated, dejected"
    },
    {
        "Character": "呕",
        "Pinyin": "ōu"
    },
    {
        "Pinyin": "to vomit; annoy, enrage"
    },
    {
        "Character": "瞪",
        "Pinyin": "dèng"
    },
    {
        "Pinyin": "stare at"
    },
    {
        "Character": "淳",
        "Pinyin": "chún"
    },
    {
        "Pinyin": "honest, simple, unsophisticated; cyanogen; ethane dinitrile"
    },
    {
        "Character": "丐",
        "Pinyin": "gài"
    },
    {
        "Pinyin": "beggar; beg; give"
    },
    {
        "Character": "茹",
        "Pinyin": "rú"
    },
    {
        "Pinyin": "roots; vegetables; eat; bear"
    },
    {
        "Character": "盘",
        "Pinyin": "pán"
    },
    {
        "Pinyin": "tray, plate, dish; examine"
    },
    {
        "Character": "菱",
        "Pinyin": "líng"
    },
    {
        "Pinyin": "water-chestnut, water caltrop"
    },
    {
        "Character": "篠",
        "Pinyin": "xiǎo"
    },
    {
        "Pinyin": "dwarf bamboo; diminutive in person's name"
    },
    {
        "Character": "涕",
        "Pinyin": "tì"
    },
    {
        "Pinyin": "tear; snivel, nasal mucus"
    },
    {
        "Character": "衬",
        "Pinyin": "chèn"
    },
    {
        "Pinyin": "underwear; inner garments"
    },
    {
        "Character": "蚀",
        "Pinyin": "shí"
    },
    {
        "Pinyin": "nibble away; erode; eclipse"
    },
    {
        "Character": "溉",
        "Pinyin": "gài"
    },
    {
        "Pinyin": "water, irrigate, flood; wash"
    },
    {
        "Character": "瑄",
        "Pinyin": "xuān"
    },
    {
        "Pinyin": "a ornamental piece of jade several inches across with a hole in the center"
    },
    {
        "Character": "翟",
        "Pinyin": "dí"
    },
    {
        "Pinyin": "surname; a kind of pheasant; plumes"
    },
    {
        "Character": "怠",
        "Pinyin": "dài"
    },
    {
        "Pinyin": "idle, remiss, negligent; neglect"
    },
    {
        "Character": "钰",
        "Pinyin": "yù"
    },
    {
        "Pinyin": "rare treasure"
    },
    {
        "Character": "躯",
        "Pinyin": "qū"
    },
    {
        "Pinyin": "body"
    },
    {
        "Character": "肺",
        "Pinyin": "fèi"
    },
    {
        "Pinyin": "lungs"
    },
    {
        "Character": "掷",
        "Pinyin": "zhí"
    },
    {
        "Pinyin": "throw (down), hurl, cast, fling"
    },
    {
        "Character": "丑",
        "Pinyin": "chǒu"
    },
    {
        "Pinyin": "ugly looking, homely; disgraceful"
    },
    {
        "Character": "奢",
        "Pinyin": "shē"
    },
    {
        "Pinyin": "extravagant, wasteful; exaggerate"
    },
    {
        "Character": "荫",
        "Pinyin": "yìn"
    },
    {
        "Pinyin": "shade, shelter; protect"
    },
    {
        "Character": "靶",
        "Pinyin": "bǎ"
    },
    {
        "Pinyin": "target; splashboard on chariot"
    },
    {
        "Character": "纱",
        "Pinyin": "shā"
    },
    {
        "Pinyin": "gauze, thin silk; yarn, thread"
    },
    {
        "Character": "芸",
        "Pinyin": "yún"
    },
    {
        "Pinyin": "rue, an herb used keep insects away"
    },
    {
        "Character": "佰",
        "Pinyin": "bǎi"
    },
    {
        "Pinyin": "hundred"
    },
    {
        "Character": "峻",
        "Pinyin": "jùn"
    },
    {
        "Pinyin": "high, steep, towering; stern"
    },
    {
        "Character": "阱",
        "Pinyin": "jǐng"
    },
    {
        "Pinyin": "pitfall, trap, snare"
    },
    {
        "Character": "哄",
        "Pinyin": "hōng"
    },
    {
        "Pinyin": "coax; beguile, cheat, deceive"
    },
    {
        "Character": "肾",
        "Pinyin": "shèn"
    },
    {
        "Pinyin": "kidneys; testes, gizzard"
    },
    {
        "Character": "庄",
        "Pinyin": "zhuāng"
    },
    {
        "Pinyin": "village, hamlet; villa; surname"
    },
    {
        "Character": "囡",
        "Pinyin": "nān"
    },
    {
        "Pinyin": "one's daughter; to filch; to secrete"
    },
    {
        "Character": "阑",
        "Pinyin": "lán"
    },
    {
        "Pinyin": "door screen; railing fence"
    },
    {
        "Character": "戳",
        "Pinyin": "chuō"
    },
    {
        "Pinyin": "prick, stab; stamp, seal, chop"
    },
    {
        "Character": "腕",
        "Pinyin": "wàn"
    },
    {
        "Pinyin": "wrist"
    },
    {
        "Character": "菸",
        "Pinyin": "yān"
    },
    {
        "Pinyin": "to fade; withered or dried leaves; tobacco (used for U+70DF and U+7159)"
    },
    {
        "Character": "凹",
        "Pinyin": "āo"
    },
    {
        "Pinyin": "concave, hollow, depressed; a pass, valley"
    },
    {
        "Character": "蟾",
        "Pinyin": "chán"
    },
    {
        "Pinyin": "toad"
    },
    {
        "Character": "蒐",
        "Pinyin": "sōu"
    },
    {
        "Pinyin": "collect, gather, assemble; seek; spring hunt; assemble for war"
    },
    {
        "Character": "呱",
        "Pinyin": "gū"
    },
    {
        "Pinyin": "wail, crying of child; swear at"
    },
    {
        "Character": "巾",
        "Pinyin": "jīn"
    },
    {
        "Pinyin": "kerchief; towel; turban; KangXi radical number 50"
    },
    {
        "Character": "雏",
        "Pinyin": "chú"
    },
    {
        "Pinyin": "chick, fledging; infant, toddler"
    },
    {
        "Character": "螃",
        "Pinyin": "páng"
    },
    {
        "Pinyin": "crab"
    },
    {
        "Character": "盯",
        "Pinyin": "chéng"
    },
    {
        "Pinyin": "rivet gaze upon, keep eyes on"
    },
    {
        "Character": "馈",
        "Pinyin": "kuì"
    },
    {
        "Pinyin": "offer food superior; send gift"
    },
    {
        "Character": "垄",
        "Pinyin": "lǒng"
    },
    {
        "Pinyin": "grave, mound; ridge in field"
    },
    {
        "Character": "毓",
        "Pinyin": "yù"
    },
    {
        "Pinyin": "give birth to; bring up, educate"
    },
    {
        "Character": "犀",
        "Pinyin": "xī"
    },
    {
        "Pinyin": "rhinoceros; sharp, well-tempered"
    },
    {
        "Character": "逞",
        "Pinyin": "chěng"
    },
    {
        "Pinyin": "indulge oneself; brag, show off"
    },
    {
        "Character": "姨",
        "Pinyin": "yí"
    },
    {
        "Pinyin": "mother/wife's sister; concubine"
    },
    {
        "Character": "穆",
        "Pinyin": "mù"
    },
    {
        "Pinyin": "majestic, solemn, reverent; calm"
    },
    {
        "Character": "樵",
        "Pinyin": "qiáo"
    },
    {
        "Pinyin": "woodcutter; firewood; gather wood"
    },
    {
        "Character": "阀",
        "Pinyin": "fá"
    },
    {
        "Pinyin": "powerful and influential group"
    },
    {
        "Character": "弥",
        "Pinyin": "mí"
    },
    {
        "Pinyin": "extensive, full; fill; complete"
    },
    {
        "Character": "跷",
        "Pinyin": "qiāo"
    },
    {
        "Pinyin": "raise one's foot"
    },
    {
        "Character": "搁",
        "Pinyin": "gē"
    },
    {
        "Pinyin": "place, put, lay down; delay"
    },
    {
        "Character": "隙",
        "Pinyin": "xì"
    },
    {
        "Pinyin": "crack, split, fissure; grudge"
    },
    {
        "Character": "疵",
        "Pinyin": "cī"
    },
    {
        "Pinyin": "flaw, fault, defect; disease"
    },
    {
        "Character": "憧",
        "Pinyin": "chōng"
    },
    {
        "Pinyin": "irresolute, indecisive; yearn for"
    },
    {
        "Character": "忏",
        "Pinyin": "chàn"
    },
    {
        "Pinyin": "regret, repent; confess sins"
    },
    {
        "Character": "琨",
        "Pinyin": "kūn"
    },
    {
        "Pinyin": "beautiful jade, precious stones"
    },
    {
        "Character": "阙",
        "Pinyin": "què"
    },
    {
        "Pinyin": "watch tower; palace"
    },
    {
        "Character": "萱",
        "Pinyin": "xuān"
    },
    {
        "Pinyin": "day-lily, hemerocallisflava"
    },
    {
        "Character": "怅",
        "Pinyin": "chàng"
    },
    {
        "Pinyin": "disappointed, dissatisfied"
    },
    {
        "Character": "辄",
        "Pinyin": "zhé"
    },
    {
        "Pinyin": "sides of chariot where weapons"
    },
    {
        "Character": "搏",
        "Pinyin": "bó"
    },
    {
        "Pinyin": "seize; spring upon; strike"
    },
    {
        "Character": "榕",
        "Pinyin": "róng"
    },
    {
        "Pinyin": "banyan tree"
    },
    {
        "Character": "饥",
        "Pinyin": "jī"
    },
    {
        "Pinyin": "starve, be hungry; famine"
    },
    {
        "Character": "捣",
        "Pinyin": "dǎo"
    },
    {
        "Pinyin": "hull; thresh; beat, attack"
    },
    {
        "Character": "渣",
        "Pinyin": "zhā"
    },
    {
        "Pinyin": "refuse, dregs, lees, sediment"
    },
    {
        "Character": "眺",
        "Pinyin": "tiào"
    },
    {
        "Pinyin": "look at, gaze at, scan, survey"
    },
    {
        "Character": "虞",
        "Pinyin": "yú"
    },
    {
        "Pinyin": "concerned about, anxious, worried"
    },
    {
        "Character": "俯",
        "Pinyin": "fǔ"
    },
    {
        "Pinyin": "bow down, face down, look down"
    },
    {
        "Character": "绅",
        "Pinyin": "shēn"
    },
    {
        "Pinyin": "girdle; tie, bind; gentry"
    },
    {
        "Character": "谤",
        "Pinyin": "bàng"
    },
    {
        "Pinyin": "slander, libel"
    },
    {
        "Character": "珑",
        "Pinyin": "lóng"
    },
    {
        "Pinyin": "a gem cut like dragon"
    },
    {
        "Character": "咫",
        "Pinyin": "zhǐ"
    },
    {
        "Pinyin": "foot measure of Zhou dynasty"
    },
    {
        "Character": "俏",
        "Pinyin": "qiào"
    },
    {
        "Pinyin": "like, similar; resemble; pretty"
    },
    {
        "Character": "淆",
        "Pinyin": "yáo"
    },
    {
        "Pinyin": "confused, in disarray, mixed up"
    },
    {
        "Character": "蜀",
        "Pinyin": "shǔ"
    },
    {
        "Pinyin": "name of an ancient state"
    },
    {
        "Character": "楠",
        "Pinyin": "nán"
    },
    {
        "Pinyin": "name of tree, machilus nanmu"
    },
    {
        "Character": "乞",
        "Pinyin": "qǐ"
    },
    {
        "Pinyin": "beg; request"
    },
    {
        "Character": "诅",
        "Pinyin": "zǔ"
    },
    {
        "Pinyin": "curse; swear, pledge"
    },
    {
        "Character": "匀",
        "Pinyin": "yún"
    },
    {
        "Pinyin": "equal, impartially, uniform, even"
    },
    {
        "Character": "貂",
        "Pinyin": "diāo"
    },
    {
        "Pinyin": "marten, sable, mink"
    },
    {
        "Character": "寰",
        "Pinyin": "huán"
    },
    {
        "Pinyin": "great domain, country, world"
    },
    {
        "Character": "迋",
        "Pinyin": "wàng"
    },
    {
        "Pinyin": "travel, go to; deceive; scare"
    },
    {
        "Character": "敞",
        "Pinyin": "chǎng"
    },
    {
        "Pinyin": "roomy, spacious, open, broad"
    },
    {
        "Character": "跪",
        "Pinyin": "guì"
    },
    {
        "Pinyin": "kneel"
    },
    {
        "Character": "囚",
        "Pinyin": "qiú"
    },
    {
        "Pinyin": "prisoner, convict; confine"
    },
    {
        "Character": "溺",
        "Pinyin": "nì"
    },
    {
        "Pinyin": "drown; submerge in water; indulge"
    },
    {
        "Character": "骆",
        "Pinyin": "luò"
    },
    {
        "Pinyin": "a white horse with black mane; a camel"
    },
    {
        "Character": "憬",
        "Pinyin": "jǐng"
    },
    {
        "Pinyin": "rouse, awaken; become conscious"
    },
    {
        "Character": "苇",
        "Pinyin": "wěi"
    },
    {
        "Pinyin": "reed"
    },
    {
        "Character": "脊",
        "Pinyin": "jí"
    },
    {
        "Pinyin": "spine, backbone; ridge"
    },
    {
        "Character": "瑶",
        "Pinyin": "yáo"
    },
    {
        "Pinyin": "precious jade"
    },
    {
        "Character": "疆",
        "Pinyin": "jiāng"
    },
    {
        "Pinyin": "boundary, border, frontier"
    },
    {
        "Character": "乍",
        "Pinyin": "zhà"
    },
    {
        "Pinyin": "first time, for the first time"
    },
    {
        "Character": "杆",
        "Pinyin": "gǎn"
    },
    {
        "Pinyin": "pole; stick; club; pole as unit"
    },
    {
        "Character": "眸",
        "Pinyin": "móu"
    },
    {
        "Pinyin": "pupil of eye; eye"
    },
    {
        "Character": "窜",
        "Pinyin": "cuàn"
    },
    {
        "Pinyin": "run away; revise, edit; expel"
    },
    {
        "Character": "孽",
        "Pinyin": "niè"
    },
    {
        "Pinyin": "evil; son of concubine; ghost"
    },
    {
        "Character": "卅",
        "Pinyin": "sà"
    },
    {
        "Pinyin": "thirty, thirtieth"
    },
    {
        "Character": "夭",
        "Pinyin": "yǎo"
    },
    {
        "Pinyin": "young, fresh-looking; die young"
    },
    {
        "Character": "簧",
        "Pinyin": "huáng"
    },
    {
        "Pinyin": "reed of woodwind instrument"
    },
    {
        "Character": "徘",
        "Pinyin": "pái"
    },
    {
        "Pinyin": "walk back and forth, hesitate"
    },
    {
        "Character": "馒",
        "Pinyin": "mán"
    },
    {
        "Pinyin": "steamed bread; steamed dumplings"
    },
    {
        "Character": "趴",
        "Pinyin": "pā"
    },
    {
        "Pinyin": "lying prone, leaning over"
    },
    {
        "Character": "鎚",
        "Pinyin": "chuí"
    },
    {
        "Pinyin": "hammer, mallet; club"
    },
    {
        "Character": "啼",
        "Pinyin": "tí"
    },
    {
        "Pinyin": "weep, whimper; howl, twitter"
    },
    {
        "Character": "冗",
        "Pinyin": "rǒng"
    },
    {
        "Pinyin": "excessive; superfluous"
    },
    {
        "Character": "缉",
        "Pinyin": "qì"
    },
    {
        "Pinyin": "to sew in close stitches"
    },
    {
        "Character": "絮",
        "Pinyin": "xù"
    },
    {
        "Pinyin": "waste cotton, raw silk or cotton"
    },
    {
        "Character": "啄",
        "Pinyin": "zhuó"
    },
    {
        "Pinyin": "to peck; (Cant.) to slander"
    },
    {
        "Character": "沸",
        "Pinyin": "fèi"
    },
    {
        "Pinyin": "boil, bubble up, gush"
    },
    {
        "Character": "萃",
        "Pinyin": "cuì"
    },
    {
        "Pinyin": "dense, thick, close-set; to collect together"
    },
    {
        "Character": "嘶",
        "Pinyin": "sī"
    },
    {
        "Pinyin": "neighing of a horse; gravel voiced, husky throated"
    },
    {
        "Character": "鸳",
        "Pinyin": "yuān"
    },
    {
        "Pinyin": "male mandarin duck (Aix galericulata)"
    },
    {
        "Character": "禽",
        "Pinyin": "qín"
    },
    {
        "Pinyin": "birds, fowl; surname;; capture"
    },
    {
        "Character": "惫",
        "Pinyin": "bèi"
    },
    {
        "Pinyin": "tired, weary, fatigued"
    },
    {
        "Character": "徨",
        "Pinyin": "huáng"
    },
    {
        "Pinyin": "doubtful, irresolute, vacillating"
    },
    {
        "Character": "屐",
        "Pinyin": "jī"
    },
    {
        "Pinyin": "wooden shoes, clogs"
    },
    {
        "Character": "舆",
        "Pinyin": "yú"
    },
    {
        "Pinyin": "cart, palanquin; public opinion"
    },
    {
        "Character": "邂",
        "Pinyin": "xiè"
    },
    {
        "Pinyin": "unexpected meeting; encounter by"
    },
    {
        "Character": "掀",
        "Pinyin": "xiān"
    },
    {
        "Pinyin": "lift, raise; stir"
    },
    {
        "Character": "嫖",
        "Pinyin": "piào"
    },
    {
        "Pinyin": "patronize prostitutes, frequent"
    },
    {
        "Character": "苟",
        "Pinyin": "gǒu"
    },
    {
        "Pinyin": "careless, frivolous; illicit; grammatical particle: if, but, if only; surname; grass name; distinguish DKW 30853 (ji4)"
    },
    {
        "Character": "台",
        "Pinyin": "tái"
    },
    {
        "Pinyin": "table"
    },
    {
        "Character": "矫",
        "Pinyin": "jiǎo"
    },
    {
        "Pinyin": "correct, rectify, straighten out"
    },
    {
        "Character": "铎",
        "Pinyin": "duó"
    },
    {
        "Pinyin": "bell; surname"
    },
    {
        "Character": "棱",
        "Pinyin": "léng"
    },
    {
        "Pinyin": "squared timber; angle, edge"
    },
    {
        "Character": "哗",
        "Pinyin": "huā"
    },
    {
        "Pinyin": "rushing sound; gush forward"
    },
    {
        "Character": "徊",
        "Pinyin": "huái"
    },
    {
        "Pinyin": "linger, walk to and fro, hesitain"
    },
    {
        "Character": "拱",
        "Pinyin": "gǒng"
    },
    {
        "Pinyin": "fold hands on breast; bow, salute"
    },
    {
        "Character": "蕙",
        "Pinyin": "huì"
    },
    {
        "Pinyin": "species of fragrant orchid"
    },
    {
        "Character": "徬",
        "Pinyin": "páng"
    },
    {
        "Pinyin": "to wander about, walk along side of; to be next to"
    },
    {
        "Character": "滞",
        "Pinyin": "zhì"
    },
    {
        "Pinyin": "block up, obstruct; stagnant"
    },
    {
        "Character": "吠",
        "Pinyin": "fèi"
    },
    {
        "Pinyin": "bark"
    },
    {
        "Character": "妞",
        "Pinyin": "niū"
    },
    {
        "Pinyin": "girl"
    },
    {
        "Character": "氾",
        "Pinyin": "fàn"
    },
    {
        "Pinyin": "overflow, flood, inundate"
    },
    {
        "Character": "芹",
        "Pinyin": "qín"
    },
    {
        "Pinyin": "celery"
    },
    {
        "Character": "叩",
        "Pinyin": "kòu"
    },
    {
        "Pinyin": "knock, ask; kowtow, bow"
    },
    {
        "Character": "朽",
        "Pinyin": "xiǔ"
    },
    {
        "Pinyin": "decayed, rotten; rot, decay"
    },
    {
        "Character": "侪",
        "Pinyin": "chái"
    },
    {
        "Pinyin": "a company, companion; together"
    },
    {
        "Character": "赦",
        "Pinyin": "shè"
    },
    {
        "Pinyin": "forgive, remit, pardon"
    },
    {
        "Character": "汐",
        "Pinyin": "xì"
    },
    {
        "Pinyin": "night tides, evening ebb tide"
    },
    {
        "Character": "丰",
        "Pinyin": "fēng"
    },
    {
        "Pinyin": "abundant, lush, bountiful, plenty"
    },
    {
        "Character": "虔",
        "Pinyin": "qián"
    },
    {
        "Pinyin": "act with reverence; reverent"
    },
    {
        "Character": "茅",
        "Pinyin": "máo"
    },
    {
        "Pinyin": "reeds, rushes, grass; surname"
    },
    {
        "Character": "棠",
        "Pinyin": "táng"
    },
    {
        "Pinyin": "crab apple tree; wild plums"
    },
    {
        "Character": "仑",
        "Pinyin": "lún"
    },
    {
        "Pinyin": "logical reasons, logical order"
    },
    {
        "Character": "膳",
        "Pinyin": "shàn"
    },
    {
        "Pinyin": "meals, provisions, board"
    },
    {
        "Character": "魉",
        "Pinyin": "liǎng"
    },
    {
        "Pinyin": "a kind of monster"
    },
    {
        "Character": "儡",
        "Pinyin": "lěi"
    },
    {
        "Pinyin": "puppet, dummy"
    },
    {
        "Character": "鸯",
        "Pinyin": "yāng"
    },
    {
        "Pinyin": "female mandarin duck (Aix galericulata)"
    },
    {
        "Character": "懦",
        "Pinyin": "nuò"
    },
    {
        "Pinyin": "weak, timid, cowardly"
    },
    {
        "Character": "渗",
        "Pinyin": "shèn"
    },
    {
        "Pinyin": "soak through, infiltrate"
    },
    {
        "Character": "邵",
        "Pinyin": "shào"
    },
    {
        "Pinyin": "surname; various place names"
    },
    {
        "Character": "筱",
        "Pinyin": "xiǎo"
    },
    {
        "Pinyin": "dwarf bamboo; diminutive in person's name"
    },
    {
        "Character": "畜",
        "Pinyin": "chù"
    },
    {
        "Pinyin": "livestock, domestic animals"
    },
    {
        "Character": "崖",
        "Pinyin": "yá"
    },
    {
        "Pinyin": "cliff, precipice; precipitous"
    },
    {
        "Character": "瑕",
        "Pinyin": "xiá"
    },
    {
        "Pinyin": "flaw in gem; fault, defect"
    },
    {
        "Character": "蕊",
        "Pinyin": "ruǐ"
    },
    {
        "Pinyin": "unopened flowers, flower buds"
    },
    {
        "Character": "揣",
        "Pinyin": "chuǎi"
    },
    {
        "Pinyin": "put things under clothes"
    },
    {
        "Character": "擒",
        "Pinyin": "qín"
    },
    {
        "Pinyin": "catch, capture, seize, arrest"
    },
    {
        "Character": "挂",
        "Pinyin": "guà"
    },
    {
        "Pinyin": "hang, suspend; suspense"
    },
    {
        "Character": "屯",
        "Pinyin": "tún"
    },
    {
        "Pinyin": "village, hamlet; camp; station"
    },
    {
        "Character": "莽",
        "Pinyin": "mǎng"
    },
    {
        "Pinyin": "thicket, underbrush; poisonous"
    },
    {
        "Character": "矽",
        "Pinyin": "xì"
    },
    {
        "Pinyin": "silicon"
    },
    {
        "Character": "侏",
        "Pinyin": "zhū"
    },
    {
        "Pinyin": "small, little, tiny, dwarf"
    },
    {
        "Character": "弧",
        "Pinyin": "hú"
    },
    {
        "Pinyin": "wooden bow; arc, crescent"
    },
    {
        "Character": "澈",
        "Pinyin": "chè"
    },
    {
        "Pinyin": "thoroughly, completely"
    },
    {
        "Character": "饺",
        "Pinyin": "jiǎo"
    },
    {
        "Pinyin": "stuffed dumplings"
    },
    {
        "Character": "奎",
        "Pinyin": "kuí"
    },
    {
        "Pinyin": "stride of man; one of the twenty-eight lunar mansions"
    },
    {
        "Character": "裘",
        "Pinyin": "qiú"
    },
    {
        "Pinyin": "fur garments; surname"
    },
    {
        "Character": "塌",
        "Pinyin": "tā"
    },
    {
        "Pinyin": "fall in ruins, collapse"
    },
    {
        "Character": "饵",
        "Pinyin": "ěr"
    },
    {
        "Pinyin": "bait; bait, entice; dumplings"
    },
    {
        "Character": "偎",
        "Pinyin": "wēi"
    },
    {
        "Pinyin": "cling to, cuddle, embrace, fondle"
    },
    {
        "Character": "泻",
        "Pinyin": "xiè"
    },
    {
        "Pinyin": "drain off, leak; flow, pour down"
    },
    {
        "Character": "蔓",
        "Pinyin": "màn"
    },
    {
        "Pinyin": "creeping plants, tendrils, vines"
    },
    {
        "Character": "彗",
        "Pinyin": "huì"
    },
    {
        "Pinyin": "broomstick; comet"
    },
    {
        "Character": "樽",
        "Pinyin": "zūn"
    },
    {
        "Pinyin": "goblet; jar, jug; lush"
    },
    {
        "Character": "衔",
        "Pinyin": "xián"
    },
    {
        "Pinyin": "bit; hold in mouth, bite; gag"
    },
    {
        "Character": "茍",
        "Pinyin": "jì"
    },
    {
        "Pinyin": "to be circumspect, cautious in ones behaviour (distinguish DKW 30790 gou3)"
    },
    {
        "Character": "磋",
        "Pinyin": "cuō"
    },
    {
        "Pinyin": "polish, buff; scrutinize"
    },
    {
        "Character": "萎",
        "Pinyin": "wēi"
    },
    {
        "Pinyin": "wither, wilt"
    },
    {
        "Character": "廓",
        "Pinyin": "kuò"
    },
    {
        "Pinyin": "broad, wide, open, empty; to expand"
    },
    {
        "Character": "悯",
        "Pinyin": "mǐn"
    },
    {
        "Pinyin": "pity, sympathize with, grieve for"
    },
    {
        "Character": "铸",
        "Pinyin": "zhù"
    },
    {
        "Pinyin": "melt, cast; coin, mint"
    },
    {
        "Character": "茎",
        "Pinyin": "jīng"
    },
    {
        "Pinyin": "stem, stalk"
    },
    {
        "Character": "歼",
        "Pinyin": "jiān"
    },
    {
        "Pinyin": "annihilate, wipe out, kill off"
    },
    {
        "Character": "壤",
        "Pinyin": "rǎng"
    },
    {
        "Pinyin": "soil, loam, earth; rich"
    },
    {
        "Character": "浇",
        "Pinyin": "jiāo"
    },
    {
        "Pinyin": "spray, water, sprinkle"
    },
    {
        "Character": "蚤",
        "Pinyin": "zǎo"
    },
    {
        "Pinyin": "flea; louse"
    },
    {
        "Character": "恃",
        "Pinyin": "shì"
    },
    {
        "Pinyin": "rely on, presume on, trust to"
    },
    {
        "Character": "瞻",
        "Pinyin": "zhān"
    },
    {
        "Pinyin": "look; look out for; respect"
    },
    {
        "Character": "拚",
        "Pinyin": "pàn"
    },
    {
        "Pinyin": "risk, disregard; go all out for"
    },
    {
        "Character": "汀",
        "Pinyin": "tīng"
    },
    {
        "Pinyin": "sandbar, beach, bank, shore"
    },
    {
        "Character": "椒",
        "Pinyin": "jiāo"
    },
    {
        "Pinyin": "pepper, spices"
    },
    {
        "Character": "嚼",
        "Pinyin": "jiáo"
    },
    {
        "Pinyin": "prattle, be glib"
    },
    {
        "Character": "粥",
        "Pinyin": "zhōu"
    },
    {
        "Pinyin": "rice gruel, congee"
    },
    {
        "Character": "磅",
        "Pinyin": "bàng"
    },
    {
        "Pinyin": "pound; weigh"
    },
    {
        "Character": "佫",
        "Pinyin": "hè"
    },
    {
        "Character": "勘",
        "Pinyin": "kān"
    },
    {
        "Pinyin": "investigate; compare; collate"
    },
    {
        "Character": "脖",
        "Pinyin": "bó"
    },
    {
        "Pinyin": "neck"
    },
    {
        "Character": "吨",
        "Pinyin": "dūn"
    },
    {
        "Pinyin": "metric ton"
    },
    {
        "Character": "澜",
        "Pinyin": "lán"
    },
    {
        "Pinyin": "overflowing; waves, ripples"
    },
    {
        "Character": "锻",
        "Pinyin": "duàn"
    },
    {
        "Pinyin": "forge metal; temper, refine"
    },
    {
        "Character": "笙",
        "Pinyin": "shēng"
    },
    {
        "Pinyin": "small gourd-shaped musical instrument"
    },
    {
        "Character": "厄",
        "Pinyin": "è"
    },
    {
        "Pinyin": "adversity, difficulty, distress"
    },
    {
        "Character": "嚷",
        "Pinyin": "rǎng"
    },
    {
        "Pinyin": "shout, brawl, make uproar, cry"
    },
    {
        "Character": "伽",
        "Pinyin": "jiā"
    },
    {
        "Pinyin": "transcription of sanskrit 'gha' in buddhist texts ('samgha', etc.); (nursing; attending; entertainer) (Jap.); tample; in Chinese this character is not used alone"
    },
    {
        "Character": "徽",
        "Pinyin": "huī"
    },
    {
        "Pinyin": "a badge, insignia"
    },
    {
        "Character": "隅",
        "Pinyin": "yú"
    },
    {
        "Pinyin": "corner, nook, remote place"
    },
    {
        "Character": "寥",
        "Pinyin": "liáo"
    },
    {
        "Pinyin": "few, scarce; empty, deserted"
    },
    {
        "Character": "缤",
        "Pinyin": "bīn"
    },
    {
        "Pinyin": "flourishing, thriving, abundant"
    },
    {
        "Character": "帘",
        "Pinyin": "lián"
    },
    {
        "Pinyin": "a blind, screen, curtain"
    },
    {
        "Character": "烘",
        "Pinyin": "hōng"
    },
    {
        "Pinyin": "bake, roast; dry by fire"
    },
    {
        "Character": "茜",
        "Pinyin": "qiàn"
    },
    {
        "Pinyin": "madder, rubia cordifolia; reeds"
    },
    {
        "Character": "驯",
        "Pinyin": "xún"
    },
    {
        "Pinyin": "tame, docile, obedient"
    },
    {
        "Character": "噎",
        "Pinyin": "yē"
    },
    {
        "Pinyin": "choke; hiccup"
    },
    {
        "Character": "厦",
        "Pinyin": "shà"
    },
    {
        "Pinyin": "big building, mansion"
    },
    {
        "Character": "闰",
        "Pinyin": "rùn"
    },
    {
        "Pinyin": "intercalary; extra, surplus"
    },
    {
        "Character": "煤",
        "Pinyin": "méi"
    },
    {
        "Pinyin": "coal, coke, charcoal, carbon"
    },
    {
        "Character": "链",
        "Pinyin": "liàn"
    },
    {
        "Pinyin": "chain, wire, cable; chain, shack"
    },
    {
        "Character": "锈",
        "Pinyin": "xiù"
    },
    {
        "Pinyin": "rust, corrode"
    },
    {
        "Character": "诫",
        "Pinyin": "jiè"
    },
    {
        "Pinyin": "warn, admonish; warning"
    },
    {
        "Character": "颊",
        "Pinyin": "jiá"
    },
    {
        "Pinyin": "cheeks, jaw"
    },
    {
        "Character": "俐",
        "Pinyin": "lì"
    },
    {
        "Pinyin": "smooth; active; clever, sharp"
    },
    {
        "Character": "曳",
        "Pinyin": "yì"
    },
    {
        "Pinyin": "trail, tow, drag, pull"
    },
    {
        "Character": "蓓",
        "Pinyin": "bèi"
    },
    {
        "Pinyin": "bud"
    },
    {
        "Character": "暧",
        "Pinyin": "ài"
    },
    {
        "Pinyin": "obscure, dim, ambiguous, vague"
    },
    {
        "Character": "郤",
        "Pinyin": "xì"
    },
    {
        "Pinyin": "crack, opening; surname"
    },
    {
        "Character": "淌",
        "Pinyin": "tǎng"
    },
    {
        "Pinyin": "trickle; flow down; drip"
    },
    {
        "Character": "喀",
        "Pinyin": "kè"
    },
    {
        "Pinyin": "vomit; used in transliterations"
    },
    {
        "Character": "昆",
        "Pinyin": "kūn"
    },
    {
        "Pinyin": "elder brother; descendants"
    },
    {
        "Character": "蔑",
        "Pinyin": "miè"
    },
    {
        "Pinyin": "disdain, disregard; slight"
    },
    {
        "Character": "峙",
        "Pinyin": "zhì"
    },
    {
        "Pinyin": "stand erect, stand up; pile up"
    },
    {
        "Character": "躁",
        "Pinyin": "zào"
    },
    {
        "Pinyin": "tense, excited, irritable"
    },
    {
        "Character": "菇",
        "Pinyin": "gū"
    },
    {
        "Pinyin": "mushrooms"
    },
    {
        "Character": "逅",
        "Pinyin": "hòu"
    },
    {
        "Pinyin": "meet unexpectedly"
    },
    {
        "Character": "雇",
        "Pinyin": "gù"
    },
    {
        "Pinyin": "employ, to hire"
    },
    {
        "Character": "殴",
        "Pinyin": "ōu"
    },
    {
        "Pinyin": "beat, fight with fists, hit; to strike, brawl"
    },
    {
        "Character": "泌",
        "Pinyin": "mì"
    },
    {
        "Pinyin": "to seep out, excrete"
    },
    {
        "Character": "酥",
        "Pinyin": "sū"
    },
    {
        "Pinyin": "butter; flaky, crispy, light, fluffy"
    },
    {
        "Character": "缮",
        "Pinyin": "shàn"
    },
    {
        "Pinyin": "repair, mend; rewrite, transcribe"
    },
    {
        "Character": "莓",
        "Pinyin": "méi"
    },
    {
        "Pinyin": "moss; edible berries"
    },
    {
        "Character": "辕",
        "Pinyin": "yuán"
    },
    {
        "Pinyin": "axle; magistrate's office; surname"
    },
    {
        "Character": "骇",
        "Pinyin": "hài"
    },
    {
        "Pinyin": "terrify, frighten, scare; shock"
    },
    {
        "Character": "巍",
        "Pinyin": "wēi"
    },
    {
        "Pinyin": "high, lofty, majestic, eminent"
    },
    {
        "Character": "糗",
        "Pinyin": "qiǔ"
    },
    {
        "Pinyin": "parched wheat or rice; broken grain"
    },
    {
        "Character": "扛",
        "Pinyin": "káng"
    },
    {
        "Pinyin": "carry on shoulders; lift"
    },
    {
        "Character": "杏",
        "Pinyin": "xìng"
    },
    {
        "Pinyin": "apricot; almond"
    },
    {
        "Character": "茁",
        "Pinyin": "zhuó"
    },
    {
        "Pinyin": "to sprout, flourish; sprouts appearing above-ground; vigorous"
    },
    {
        "Character": "琵",
        "Pinyin": "pí"
    },
    {
        "Pinyin": "guitar-like instrument"
    },
    {
        "Character": "礁",
        "Pinyin": "jiāo"
    },
    {
        "Pinyin": "reef; jetty; submerged rocks"
    },
    {
        "Character": "秽",
        "Pinyin": "huì"
    },
    {
        "Pinyin": "dirty, unclean; immoral, obscene"
    },
    {
        "Character": "岔",
        "Pinyin": "chà"
    },
    {
        "Pinyin": "diverge, branch off; fork in road"
    },
    {
        "Character": "僻",
        "Pinyin": "pì"
    },
    {
        "Pinyin": "out-of-the-way, remote; unorthodox"
    },
    {
        "Character": "焊",
        "Pinyin": "hàn"
    },
    {
        "Pinyin": "weld, solder"
    },
    {
        "Character": "嗡",
        "Pinyin": "wēng"
    },
    {
        "Pinyin": "sound of flying bees, airplanes"
    },
    {
        "Character": "诵",
        "Pinyin": "sòng"
    },
    {
        "Pinyin": "recite, chant, repeat"
    },
    {
        "Character": "瞌",
        "Pinyin": "kē"
    },
    {
        "Pinyin": "doze off; sleepy"
    },
    {
        "Character": "捌",
        "Pinyin": "bā"
    },
    {
        "Pinyin": "break open, split open; an accounting version of the numeral eight"
    },
    {
        "Character": "遁",
        "Pinyin": "dùn"
    },
    {
        "Pinyin": "hide, conceal oneself; escape"
    },
    {
        "Character": "赃",
        "Pinyin": "zāng"
    },
    {
        "Pinyin": "booty, loot, stolen goods; bribe"
    },
    {
        "Character": "涡",
        "Pinyin": "wō"
    },
    {
        "Pinyin": "swirl, whirlpool, eddy"
    },
    {
        "Character": "琮",
        "Pinyin": "cóng"
    },
    {
        "Pinyin": "octagonal piece of jade with hole in middle"
    },
    {
        "Character": "卯",
        "Pinyin": "mǎo"
    },
    {
        "Pinyin": "4th terrestrial branch; period from 5-7 a.m."
    },
    {
        "Character": "锯",
        "Pinyin": "jù"
    },
    {
        "Pinyin": "a saw; to saw; amputate"
    },
    {
        "Character": "扔",
        "Pinyin": "rēng"
    },
    {
        "Pinyin": "throw, hurl; throw away, cast"
    },
    {
        "Character": "苏",
        "Pinyin": "sū"
    },
    {
        "Pinyin": "revive, resurrect; a species of thyme; transliteration of 'Soviet'"
    },
    {
        "Character": "邹",
        "Pinyin": "zōu"
    },
    {
        "Pinyin": "name of an ancient state; surname"
    },
    {
        "Character": "莅",
        "Pinyin": "lì"
    },
    {
        "Pinyin": "reach, arrive; manage"
    },
    {
        "Character": "隘",
        "Pinyin": "ài"
    },
    {
        "Pinyin": "narrow, confined; a strategic pass"
    },
    {
        "Character": "蹋",
        "Pinyin": "tà"
    },
    {
        "Pinyin": "step on, tread on; stumble, slip"
    },
    {
        "Character": "湛",
        "Pinyin": "zhàn"
    },
    {
        "Pinyin": "deep; profound; clear; tranquil, placid"
    },
    {
        "Character": "昼",
        "Pinyin": "zhòu"
    },
    {
        "Pinyin": "daytime, daylight"
    },
    {
        "Character": "岫",
        "Pinyin": "xiù"
    },
    {
        "Pinyin": "mountain peak; cave, cavern"
    },
    {
        "Character": "蛰",
        "Pinyin": "zhí"
    },
    {
        "Pinyin": "to hibernate"
    },
    {
        "Character": "桩",
        "Pinyin": "zhuāng"
    },
    {
        "Pinyin": "stake, post; affair, matter"
    },
    {
        "Character": "藐",
        "Pinyin": "miǎo"
    },
    {
        "Pinyin": "disregard, slight, disdain"
    },
    {
        "Character": "汲",
        "Pinyin": "jí"
    },
    {
        "Pinyin": "draw water from well; imbibe"
    },
    {
        "Character": "禄",
        "Pinyin": "lù"
    },
    {
        "Pinyin": "blessing, happiness, prosperity"
    },
    {
        "Character": "皂",
        "Pinyin": "zào"
    },
    {
        "Pinyin": "soap; black; menial servant"
    },
    {
        "Character": "濑",
        "Pinyin": "lài"
    },
    {
        "Pinyin": "swift current; rapids"
    },
    {
        "Character": "绒",
        "Pinyin": "róng"
    },
    {
        "Pinyin": "silk, cotton, or woolen fabric"
    },
    {
        "Character": "耽",
        "Pinyin": "dān"
    },
    {
        "Pinyin": "indulge in; be negligent"
    },
    {
        "Character": "粪",
        "Pinyin": "fèn"
    },
    {
        "Pinyin": "manure, dung, night soil"
    },
    {
        "Character": "粤",
        "Pinyin": "yuè"
    },
    {
        "Pinyin": "Guangdong and Guangxi provinces; initial particle"
    },
    {
        "Character": "卤",
        "Pinyin": "lǔ"
    },
    {
        "Pinyin": "saline soil; natural salt, rock"
    },
    {
        "Character": "曜",
        "Pinyin": "yào"
    },
    {
        "Pinyin": "glorious, as sun; daylight, sunlight"
    },
    {
        "Character": "懋",
        "Pinyin": "mào"
    },
    {
        "Pinyin": "splendid, grand, majestic"
    },
    {
        "Character": "咎",
        "Pinyin": "jiù"
    },
    {
        "Pinyin": "fault, defect; error, mistake"
    },
    {
        "Character": "痘",
        "Pinyin": "dòu"
    },
    {
        "Pinyin": "smallpox"
    },
    {
        "Character": "聂",
        "Pinyin": "niè"
    },
    {
        "Pinyin": "whisper; surname"
    },
    {
        "Character": "垢",
        "Pinyin": "gòu"
    },
    {
        "Pinyin": "dirt, filth, stains; dirty"
    },
    {
        "Character": "瞳",
        "Pinyin": "tóng"
    },
    {
        "Pinyin": "pupil of eye"
    },
    {
        "Character": "闵",
        "Pinyin": "mǐn"
    },
    {
        "Pinyin": "mourn, grieve; urge on, incite"
    },
    {
        "Character": "睿",
        "Pinyin": "ruì"
    },
    {
        "Pinyin": "shrewd, astute, clever, keen"
    },
    {
        "Character": "跤",
        "Pinyin": "jiāo"
    },
    {
        "Pinyin": "stumble, fall down; wrestle"
    },
    {
        "Character": "鉴",
        "Pinyin": "jiàn"
    },
    {
        "Pinyin": "mirror, looking glass; reflect"
    },
    {
        "Character": "躬",
        "Pinyin": "gōng"
    },
    {
        "Pinyin": "body; personally, in person"
    },
    {
        "Character": "斟",
        "Pinyin": "zhēn"
    },
    {
        "Pinyin": "to pour wine or tea into a cup; to gauge"
    },
    {
        "Character": "淇",
        "Pinyin": "qí"
    },
    {
        "Pinyin": "river in Henan province"
    },
    {
        "Character": "莒",
        "Pinyin": "jǔ"
    },
    {
        "Pinyin": "hemp-like plant; taro; herb"
    },
    {
        "Character": "毯",
        "Pinyin": "tǎn"
    },
    {
        "Pinyin": "rug, carpet, blanket"
    },
    {
        "Character": "幸",
        "Pinyin": "xìng"
    },
    {
        "Pinyin": "luck(ily), favor, fortunately"
    },
    {
        "Character": "骋",
        "Pinyin": "chěng"
    },
    {
        "Pinyin": "gallop horse; hasten, hurry"
    },
    {
        "Character": "岱",
        "Pinyin": "dài"
    },
    {
        "Pinyin": "Daishan, one of the Five Sacred Mountains in China"
    },
    {
        "Character": "庐",
        "Pinyin": "lú"
    },
    {
        "Pinyin": "hut, cottage; name of a mountain"
    },
    {
        "Character": "殃",
        "Pinyin": "yāng"
    },
    {
        "Pinyin": "misfortune, disaster, calamity"
    },
    {
        "Character": "橄",
        "Pinyin": "gǎn"
    },
    {
        "Pinyin": "olive"
    },
    {
        "Character": "恤",
        "Pinyin": "xù"
    },
    {
        "Pinyin": "show pity; relieve, help"
    },
    {
        "Character": "叽",
        "Pinyin": "jī"
    },
    {
        "Pinyin": "sigh in disapproval; take small"
    },
    {
        "Character": "鳞",
        "Pinyin": "lín"
    },
    {
        "Pinyin": "fish scales"
    },
    {
        "Character": "蒙",
        "Pinyin": "méng"
    },
    {
        "Pinyin": "cover; ignorant; suffer; mongolia"
    },
    {
        "Character": "芥",
        "Pinyin": "jiè"
    },
    {
        "Pinyin": "mustard plant; mustard; tiny"
    },
    {
        "Character": "榄",
        "Pinyin": "lǎn"
    },
    {
        "Pinyin": "olive"
    },
    {
        "Character": "楷",
        "Pinyin": "kǎi"
    },
    {
        "Pinyin": "model style of Chinese writing"
    },
    {
        "Character": "硫",
        "Pinyin": "liú"
    },
    {
        "Pinyin": "sulfur"
    },
    {
        "Character": "苔",
        "Pinyin": "tái"
    },
    {
        "Pinyin": "moss, lichen"
    },
    {
        "Character": "麒",
        "Pinyin": "qí"
    },
    {
        "Pinyin": "legendary auspicious animal"
    },
    {
        "Character": "椎",
        "Pinyin": "zhuī"
    },
    {
        "Pinyin": "hammer, mallet; vertebra"
    },
    {
        "Character": "禹",
        "Pinyin": "yǔ"
    },
    {
        "Pinyin": "legendary hsia dynasty founder"
    },
    {
        "Character": "喙",
        "Pinyin": "huì"
    },
    {
        "Pinyin": "beak, bill, snout; pant"
    },
    {
        "Character": "厘",
        "Pinyin": "lí"
    },
    {
        "Pinyin": "manage, control; 1/1000 of a foot"
    },
    {
        "Character": "袅",
        "Pinyin": "niǎo"
    },
    {
        "Pinyin": "curling upwards; wavering gently"
    },
    {
        "Character": "亥",
        "Pinyin": "hài"
    },
    {
        "Pinyin": "12th terrestrial branch"
    },
    {
        "Character": "倌",
        "Pinyin": "guān"
    },
    {
        "Pinyin": "assistant in wine shop, groom"
    },
    {
        "Character": "吭",
        "Pinyin": "háng"
    },
    {
        "Pinyin": "throat"
    },
    {
        "Character": "诃",
        "Pinyin": "hē"
    },
    {
        "Pinyin": "scold loudly, curse, abuse"
    },
    {
        "Character": "裔",
        "Pinyin": "yì"
    },
    {
        "Pinyin": "progeny, descendants, posterity"
    },
    {
        "Character": "梓",
        "Pinyin": "zǐ"
    },
    {
        "Pinyin": "catalpa ovata"
    },
    {
        "Character": "蓦",
        "Pinyin": "mò"
    },
    {
        "Pinyin": "suddenly, quickly, abruptly"
    },
    {
        "Character": "岩",
        "Pinyin": "yán"
    },
    {
        "Pinyin": "cliff; rocks; mountain"
    },
    {
        "Character": "帜",
        "Pinyin": "zhì"
    },
    {
        "Pinyin": "flag, pennant; sign; fasten"
    },
    {
        "Character": "瓣",
        "Pinyin": "bàn"
    },
    {
        "Pinyin": "petal; segment; valves"
    },
    {
        "Character": "狡",
        "Pinyin": "jiǎo"
    },
    {
        "Pinyin": "cunning, deceitful, treacherous"
    },
    {
        "Character": "惕",
        "Pinyin": "tì"
    },
    {
        "Pinyin": "be cautious, careful, alert"
    },
    {
        "Character": "蒙",
        "Pinyin": "méng"
    },
    {
        "Pinyin": "cover; ignorant; suffer; mongolia"
    },
    {
        "Character": "怯",
        "Pinyin": "qiè"
    },
    {
        "Pinyin": "lacking in courage, afraid"
    },
    {
        "Character": "嫩",
        "Pinyin": "nèn"
    },
    {
        "Pinyin": "soft, tender, delicate; young"
    },
    {
        "Character": "龚",
        "Pinyin": "gōng"
    },
    {
        "Pinyin": "give, present; reverential"
    },
    {
        "Character": "嚎",
        "Pinyin": "háo"
    },
    {
        "Pinyin": "cry loudly, yell, scream"
    },
    {
        "Character": "豚",
        "Pinyin": "tún"
    },
    {
        "Pinyin": "small pig, suckling pig; suffle"
    },
    {
        "Character": "埠",
        "Pinyin": "bù"
    },
    {
        "Pinyin": "port city"
    },
    {
        "Character": "暸",
        "Pinyin": "liáo"
    },
    {
        "Pinyin": "bright, clear"
    },
    {
        "Character": "唆",
        "Pinyin": "suō"
    },
    {
        "Pinyin": "make mischief, incite, instigate"
    },
    {
        "Character": "妃",
        "Pinyin": "fēi"
    },
    {
        "Pinyin": "wife, spouse; imperial concubine"
    },
    {
        "Character": "瓢",
        "Pinyin": "piáo"
    },
    {
        "Pinyin": "ladle made from dried gourd"
    },
    {
        "Character": "蹄",
        "Pinyin": "tí"
    },
    {
        "Pinyin": "hoof; leg of pork; little witch"
    },
    {
        "Character": "厮",
        "Pinyin": "sī"
    },
    {
        "Pinyin": "servant"
    },
    {
        "Character": "讥",
        "Pinyin": "jī"
    },
    {
        "Pinyin": "ridicule, jeer, mock; inspect"
    },
    {
        "Character": "啃",
        "Pinyin": "kěn"
    },
    {
        "Pinyin": "gnaw, chew, bite"
    },
    {
        "Character": "琶",
        "Pinyin": "pá"
    },
    {
        "Pinyin": "guitar-like instrument"
    },
    {
        "Character": "愿",
        "Pinyin": "yuàn"
    },
    {
        "Pinyin": "desire, want; wish; ambition"
    },
    {
        "Character": "噱",
        "Pinyin": "jué"
    },
    {
        "Pinyin": "laugh heartily, laugh aloud"
    },
    {
        "Character": "狷",
        "Pinyin": "juàn"
    },
    {
        "Pinyin": "rash, impetuous, impulsive"
    },
    {
        "Character": "搪",
        "Pinyin": "táng"
    },
    {
        "Pinyin": "ward off, evade; parry; block"
    },
    {
        "Character": "氢",
        "Pinyin": "qīng"
    },
    {
        "Pinyin": "amonia; hydrogen nitride"
    },
    {
        "Character": "橙",
        "Pinyin": "chéng"
    },
    {
        "Pinyin": "orange"
    },
    {
        "Character": "咆",
        "Pinyin": "páo"
    },
    {
        "Pinyin": "roar"
    },
    {
        "Character": "靡",
        "Pinyin": "mǐ"
    },
    {
        "Pinyin": "divide, disperse, scatter"
    },
    {
        "Character": "砌",
        "Pinyin": "qì"
    },
    {
        "Pinyin": "stone steps, brick walk"
    },
    {
        "Character": "筷",
        "Pinyin": "kuài"
    },
    {
        "Pinyin": "chopsticks"
    },
    {
        "Character": "兑",
        "Pinyin": "duì"
    },
    {
        "Pinyin": "cash; exchange, barter; weight"
    },
    {
        "Character": "溼",
        "Pinyin": "shī"
    },
    {
        "Pinyin": "damp, moist; dampness, moisture"
    },
    {
        "Character": "呸",
        "Pinyin": "pēi"
    },
    {
        "Pinyin": "expression of reprimand"
    },
    {
        "Character": "镀",
        "Pinyin": "dù"
    },
    {
        "Pinyin": "plate, coat, gild"
    },
    {
        "Character": "踹",
        "Pinyin": "chuài"
    },
    {
        "Pinyin": "trample, tread on, kick; to crush"
    },
    {
        "Character": "冢",
        "Pinyin": "zhǒng"
    },
    {
        "Pinyin": "burial mound, mausoleum; grand"
    },
    {
        "Character": "祟",
        "Pinyin": "suì"
    },
    {
        "Pinyin": "evil spirit; evil influence"
    },
    {
        "Character": "懈",
        "Pinyin": "xiè"
    },
    {
        "Pinyin": "idle, relaxed, remiss"
    },
    {
        "Character": "术",
        "Pinyin": "shù"
    },
    {
        "Pinyin": "art, skill, special feat; method, technique"
    },
    {
        "Character": "搓",
        "Pinyin": "cuō"
    },
    {
        "Pinyin": "to rub or roll between the hands"
    },
    {
        "Character": "攸",
        "Pinyin": "yōu"
    },
    {
        "Pinyin": "distant, far; adverbial prefix"
    },
    {
        "Character": "橡",
        "Pinyin": "xiàng"
    },
    {
        "Pinyin": "chestnut oak; rubber tree; rubber"
    },
    {
        "Character": "膛",
        "Pinyin": "táng"
    },
    {
        "Pinyin": "chest; hollow space, cavity"
    },
    {
        "Character": "俞",
        "Pinyin": "yú"
    },
    {
        "Pinyin": "surname; consent, approve"
    },
    {
        "Character": "祉",
        "Pinyin": "zhǐ"
    },
    {
        "Pinyin": "happiness, blessings, good luck"
    },
    {
        "Character": "冀",
        "Pinyin": "jì"
    },
    {
        "Pinyin": "hope for; wish; Hebei province"
    },
    {
        "Character": "炊",
        "Pinyin": "chuī"
    },
    {
        "Pinyin": "cook; meal"
    },
    {
        "Character": "瓷",
        "Pinyin": "cí"
    },
    {
        "Pinyin": "crockery, porcelain, chinaware"
    },
    {
        "Character": "遐",
        "Pinyin": "xiá"
    },
    {
        "Pinyin": "afar, distant; old, advanced in"
    },
    {
        "Character": "揽",
        "Pinyin": "lǎn"
    },
    {
        "Pinyin": "grasp, take hold of; monopolize"
    },
    {
        "Character": "鹭",
        "Pinyin": "lù"
    },
    {
        "Pinyin": "heron, egret; Ardea species (various)"
    },
    {
        "Character": "茄",
        "Pinyin": "qié"
    },
    {
        "Pinyin": "eggplant"
    },
    {
        "Character": "蜢",
        "Pinyin": "měng"
    },
    {
        "Pinyin": "grasshopper"
    },
    {
        "Character": "塘",
        "Pinyin": "táng"
    },
    {
        "Pinyin": "pond; tank; dike, embankment"
    },
    {
        "Character": "郡",
        "Pinyin": "jùn"
    },
    {
        "Pinyin": "administrative division"
    },
    {
        "Character": "韬",
        "Pinyin": "tāo"
    },
    {
        "Pinyin": "sheath, scabbard, bow case"
    },
    {
        "Character": "挟",
        "Pinyin": "xié"
    },
    {
        "Pinyin": "clasp under arm; hold to bosom"
    },
    {
        "Character": "牟",
        "Pinyin": "móu"
    },
    {
        "Pinyin": "make; seek, get; barley; low"
    },
    {
        "Character": "糙",
        "Pinyin": "cāo"
    },
    {
        "Pinyin": "coarse, harsh, rough, unpolished rice"
    },
    {
        "Character": "阎",
        "Pinyin": "yán"
    },
    {
        "Pinyin": "village gate; surname"
    },
    {
        "Character": "旻",
        "Pinyin": "mín"
    },
    {
        "Pinyin": "heaven"
    },
    {
        "Character": "赘",
        "Pinyin": "zhuì"
    },
    {
        "Pinyin": "unnecessary, superfluous"
    },
    {
        "Character": "霆",
        "Pinyin": "tíng"
    },
    {
        "Pinyin": "a sudden peal of thunder"
    },
    {
        "Character": "呎",
        "Pinyin": "chǐ"
    },
    {
        "Pinyin": "foot"
    },
    {
        "Character": "炭",
        "Pinyin": "tàn"
    },
    {
        "Pinyin": "charcoal; coal; carbon"
    },
    {
        "Character": "霄",
        "Pinyin": "xiāo"
    },
    {
        "Pinyin": "sky; clouds, mist; night"
    },
    {
        "Character": "媳",
        "Pinyin": "xí"
    },
    {
        "Pinyin": "daughter-in-law"
    },
    {
        "Character": "瘤",
        "Pinyin": "liú"
    },
    {
        "Pinyin": "tumor, lump, goiter"
    },
    {
        "Character": "猿",
        "Pinyin": "yuán"
    },
    {
        "Pinyin": "ape"
    },
    {
        "Character": "飏",
        "Pinyin": "yáng"
    },
    {
        "Pinyin": "soar, fly, float; scatter"
    },
    {
        "Character": "煚",
        "Pinyin": "jiǒng"
    },
    {
        "Character": "铠",
        "Pinyin": "kǎi"
    },
    {
        "Pinyin": "armor, chain mail"
    },
    {
        "Character": "蝠",
        "Pinyin": "fú"
    },
    {
        "Pinyin": "kind of bat"
    },
    {
        "Character": "钜",
        "Pinyin": "jù"
    },
    {
        "Pinyin": "steel, iron; great"
    },
    {
        "Character": "苓",
        "Pinyin": "líng"
    },
    {
        "Pinyin": "fungus, tuber; licorice"
    },
    {
        "Character": "傀",
        "Pinyin": "guī"
    },
    {
        "Pinyin": "great, gigantic; puppet"
    },
    {
        "Character": "烬",
        "Pinyin": "jìn"
    },
    {
        "Pinyin": "cinders, ashes, embers; remnants"
    },
    {
        "Character": "墅",
        "Pinyin": "shù"
    },
    {
        "Pinyin": "villa, country house"
    },
    {
        "Character": "璇",
        "Pinyin": "xuán"
    },
    {
        "Pinyin": "beautiful jade; star"
    },
    {
        "Character": "困",
        "Pinyin": "kùn"
    },
    {
        "Pinyin": "be tired, sleepy"
    },
    {
        "Character": "愣",
        "Pinyin": "léng"
    },
    {
        "Pinyin": "be in a daze"
    },
    {
        "Character": "恬",
        "Pinyin": "tián"
    },
    {
        "Pinyin": "quiet, calm, tranquil, peaceful"
    },
    {
        "Character": "嫉",
        "Pinyin": "jí"
    },
    {
        "Pinyin": "jealousy; be jealous of"
    },
    {
        "Character": "琐",
        "Pinyin": "suǒ"
    },
    {
        "Pinyin": "fragments; trifling, petty; troublesome"
    },
    {
        "Character": "嫂",
        "Pinyin": "sǎo"
    },
    {
        "Pinyin": "sister-in-law, elder brother's wife"
    },
    {
        "Character": "淼",
        "Pinyin": "miǎo"
    },
    {
        "Pinyin": "a wide expanse of water"
    },
    {
        "Character": "梳",
        "Pinyin": "shū"
    },
    {
        "Pinyin": "comb; brush"
    },
    {
        "Character": "憎",
        "Pinyin": "zēng"
    },
    {
        "Pinyin": "hate, detest, abhor; hatred"
    },
    {
        "Character": "搂",
        "Pinyin": "lǒu"
    },
    {
        "Pinyin": "hug, embrace; drag, pull"
    },
    {
        "Character": "藻",
        "Pinyin": "zǎo"
    },
    {
        "Pinyin": "splendid, magnificent; algae"
    },
    {
        "Character": "酵",
        "Pinyin": "xiào"
    },
    {
        "Pinyin": "yeast, leaven"
    },
    {
        "Character": "屉",
        "Pinyin": "tì"
    },
    {
        "Pinyin": "drawer; tray; pad; screen"
    },
    {
        "Character": "陡",
        "Pinyin": "dǒu"
    },
    {
        "Pinyin": "steep, sloping; abruptly, sudden"
    },
    {
        "Character": "摺",
        "Pinyin": "zhé"
    },
    {
        "Pinyin": "fold, bend; twisted, curved"
    },
    {
        "Character": "箫",
        "Pinyin": "xiāo"
    },
    {
        "Pinyin": "musical instrument like pan-pipes, bamboo flute"
    },
    {
        "Character": "飨",
        "Pinyin": "xiǎng"
    },
    {
        "Pinyin": "host banquet; banquet"
    },
    {
        "Character": "桐",
        "Pinyin": "tóng"
    },
    {
        "Pinyin": "name applied various trees"
    },
    {
        "Character": "蚱",
        "Pinyin": "zhà"
    },
    {
        "Pinyin": "grasshopper; (edible) locust; cicada"
    },
    {
        "Character": "曦",
        "Pinyin": "xī"
    },
    {
        "Pinyin": "sunlight, sunshine, early dawn"
    },
    {
        "Character": "璧",
        "Pinyin": "bì"
    },
    {
        "Pinyin": "piece of jade with hole in it"
    },
    {
        "Character": "偈",
        "Pinyin": "jié"
    },
    {
        "Pinyin": "brave; martial; hasty; scudding"
    },
    {
        "Character": "蹦",
        "Pinyin": "bèng"
    },
    {
        "Pinyin": "hop, leap, jump; bright"
    },
    {
        "Character": "昶",
        "Pinyin": "chǎng"
    },
    {
        "Pinyin": "a long day. bright. extended. clear"
    },
    {
        "Character": "咙",
        "Pinyin": "lóng"
    },
    {
        "Pinyin": "throat"
    },
    {
        "Character": "铮",
        "Pinyin": "zhēng"
    },
    {
        "Pinyin": "clanging sound; small gong"
    },
    {
        "Character": "嗤",
        "Pinyin": "chī"
    },
    {
        "Pinyin": "laugh at, ridicule, sneer; snort"
    },
    {
        "Character": "戌",
        "Pinyin": "xū"
    },
    {
        "Pinyin": "11th terrestrial branch"
    },
    {
        "Character": "屌",
        "Pinyin": "diǎo"
    },
    {
        "Character": "耘",
        "Pinyin": "yún"
    },
    {
        "Pinyin": "weed"
    },
    {
        "Character": "裳",
        "Pinyin": "cháng"
    },
    {
        "Pinyin": "clothes; skirt; beautiful"
    },
    {
        "Character": "啾",
        "Pinyin": "jiū"
    },
    {
        "Pinyin": "wailing of child; chirp"
    },
    {
        "Character": "嵘",
        "Pinyin": "róng"
    },
    {
        "Pinyin": "high, steep; lofty, towering"
    },
    {
        "Character": "胺",
        "Pinyin": "è"
    },
    {
        "Pinyin": "amine"
    },
    {
        "Character": "笃",
        "Pinyin": "dǔ"
    },
    {
        "Pinyin": "deep, true, sincere, genuine"
    },
    {
        "Character": "烹",
        "Pinyin": "pēng"
    },
    {
        "Pinyin": "boil, cook; quick fry, stir fry"
    },
    {
        "Character": "巩",
        "Pinyin": "gǒng"
    },
    {
        "Pinyin": "bind; firm, secure, strong"
    },
    {
        "Character": "厝",
        "Pinyin": "cuò"
    },
    {
        "Pinyin": "cut or engrave; a grave or tombstone"
    },
    {
        "Character": "疚",
        "Pinyin": "jiù"
    },
    {
        "Pinyin": "chronic disease, chronic illness; sorrow"
    },
    {
        "Character": "鸶",
        "Pinyin": "sī"
    },
    {
        "Pinyin": "egret; Egretta garzetta"
    },
    {
        "Character": "汹",
        "Pinyin": "xiōng"
    },
    {
        "Pinyin": "the rush of water; turbulent; noisy, restless"
    },
    {
        "Character": "蔷",
        "Pinyin": "qiáng"
    },
    {
        "Pinyin": "rose"
    },
    {
        "Character": "沐",
        "Pinyin": "mù"
    },
    {
        "Pinyin": "bathe, cleanse, wash, shampoo"
    },
    {
        "Character": "咽",
        "Pinyin": "yān"
    },
    {
        "Pinyin": "throat; pharynx"
    },
    {
        "Character": "烙",
        "Pinyin": "luò"
    },
    {
        "Pinyin": "brand, burn; branding iron"
    },
    {
        "Character": "畸",
        "Pinyin": "jī"
    },
    {
        "Pinyin": "odd, fractional, remainder, odds"
    },
    {
        "Character": "讳",
        "Pinyin": "huì"
    },
    {
        "Pinyin": "conceal; shun; regard as taboo"
    },
    {
        "Character": "揍",
        "Pinyin": "zòu"
    },
    {
        "Pinyin": "hit, beat; smash, break"
    },
    {
        "Character": "曙",
        "Pinyin": "shù"
    },
    {
        "Pinyin": "bright, light of rising sun"
    },
    {
        "Character": "铐",
        "Pinyin": "kào"
    },
    {
        "Pinyin": "shackles, manacle"
    },
    {
        "Character": "朔",
        "Pinyin": "shuò"
    },
    {
        "Pinyin": "first day of lunar month; the north"
    },
    {
        "Character": "涓",
        "Pinyin": "juān"
    },
    {
        "Pinyin": "brook, stream; select; pure"
    },
    {
        "Character": "睬",
        "Pinyin": "cǎi"
    },
    {
        "Pinyin": "notice; pay attention to"
    },
    {
        "Character": "矶",
        "Pinyin": "jī"
    },
    {
        "Pinyin": "jetty; submerged rock; eddy"
    },
    {
        "Character": "岐",
        "Pinyin": "qí"
    },
    {
        "Pinyin": "high; majestic; fork in road"
    },
    {
        "Character": "凄",
        "Pinyin": "qī"
    },
    {
        "Pinyin": "bitter cold, miserable, dreary"
    },
    {
        "Character": "鲫",
        "Pinyin": "jì"
    },
    {
        "Pinyin": "carassius auratus, crucian carp"
    },
    {
        "Character": "楞",
        "Pinyin": "léng"
    },
    {
        "Pinyin": "used for Ceylon in Buddhist texts"
    },
    {
        "Character": "鲤",
        "Pinyin": "lǐ"
    },
    {
        "Pinyin": "carp"
    },
    {
        "Character": "荆",
        "Pinyin": "jīng"
    },
    {
        "Pinyin": "thorns; brambles; my wife; cane"
    },
    {
        "Character": "偕",
        "Pinyin": "xié"
    },
    {
        "Pinyin": "together; be in order"
    },
    {
        "Character": "徜",
        "Pinyin": "cháng"
    },
    {
        "Pinyin": "walking and fro; lingering"
    },
    {
        "Character": "饥",
        "Pinyin": "jī"
    },
    {
        "Pinyin": "starve, be hungry; famine"
    },
    {
        "Character": "肮",
        "Pinyin": "āng"
    },
    {
        "Pinyin": "dirty"
    },
    {
        "Character": "蔼",
        "Pinyin": "ǎi"
    },
    {
        "Pinyin": "lush; affable, friendly"
    },
    {
        "Character": "辙",
        "Pinyin": "chè"
    },
    {
        "Pinyin": "wagon ruts, wheel tracks"
    },
    {
        "Character": "恁",
        "Pinyin": "rèn"
    },
    {
        "Pinyin": "that, like this, thus, so, such"
    },
    {
        "Character": "霈",
        "Pinyin": "pèi"
    },
    {
        "Pinyin": "torrential rains, flow of water"
    },
    {
        "Character": "诛",
        "Pinyin": "zhū"
    },
    {
        "Pinyin": "execute, kill, put to death; punish"
    },
    {
        "Character": "鞠",
        "Pinyin": "jú"
    },
    {
        "Pinyin": "bow, bend; rear, raise, nourish"
    },
    {
        "Character": "茉",
        "Pinyin": "mò"
    },
    {
        "Pinyin": "white jasmine"
    },
    {
        "Character": "煜",
        "Pinyin": "yù"
    },
    {
        "Pinyin": "bright, shining, brilliant"
    },
    {
        "Character": "佣",
        "Pinyin": "yōng"
    },
    {
        "Pinyin": "hire, employ, charter; servant"
    },
    {
        "Character": "嗓",
        "Pinyin": "sǎng"
    },
    {
        "Pinyin": "voice; throat"
    },
    {
        "Character": "酹",
        "Pinyin": "lèi"
    },
    {
        "Pinyin": "to pour out a libation; to sprinkle"
    },
    {
        "Character": "昙",
        "Pinyin": "tán"
    },
    {
        "Pinyin": "become cloudy, overcast"
    },
    {
        "Character": "铨",
        "Pinyin": "quán"
    },
    {
        "Pinyin": "weigh, measure; select officials"
    },
    {
        "Character": "艳",
        "Pinyin": "yàn"
    },
    {
        "Pinyin": "beautiful, sexy, voluptuous"
    },
    {
        "Character": "绷",
        "Pinyin": "bēng"
    },
    {
        "Pinyin": "bind, draw firmly, strap"
    },
    {
        "Character": "峨",
        "Pinyin": "é"
    },
    {
        "Pinyin": "lofty"
    },
    {
        "Character": "揉",
        "Pinyin": "róu"
    },
    {
        "Pinyin": "rub, massage; crush by hand"
    },
    {
        "Character": "珈",
        "Pinyin": "jiā"
    },
    {
        "Pinyin": "an ornament attached to a woman's hairpin"
    },
    {
        "Character": "鹃",
        "Pinyin": "juān"
    },
    {
        "Pinyin": "cuckoo"
    },
    {
        "Character": "诲",
        "Pinyin": "huì"
    },
    {
        "Pinyin": "teach, instruct; encourage, urge"
    },
    {
        "Character": "臆",
        "Pinyin": "yì"
    },
    {
        "Pinyin": "chest, breast, bosom; thought"
    },
    {
        "Character": "焰",
        "Pinyin": "yàn"
    },
    {
        "Pinyin": "flame, blaze; glowing, blazing"
    },
    {
        "Character": "隽",
        "Pinyin": "jùn"
    },
    {
        "Pinyin": "superior, outstanding, talented"
    },
    {
        "Character": "熔",
        "Pinyin": "róng"
    },
    {
        "Pinyin": "melt, smelt, fuse; mold"
    },
    {
        "Character": "堇",
        "Pinyin": "jǐn"
    },
    {
        "Pinyin": "yellow loam; clay; season; few"
    },
    {
        "Character": "韧",
        "Pinyin": "rèn"
    },
    {
        "Pinyin": "strong and pliable, resilient"
    },
    {
        "Character": "扒",
        "Pinyin": "bā"
    },
    {
        "Pinyin": "scratch; dig up; crawl; crouch"
    },
    {
        "Character": "憨",
        "Pinyin": "hān"
    },
    {
        "Pinyin": "foolish, silly, coquettish"
    },
    {
        "Character": "舵",
        "Pinyin": "duò"
    },
    {
        "Pinyin": "rudder, helm"
    },
    {
        "Character": "肛",
        "Pinyin": "gāng"
    },
    {
        "Pinyin": "anus"
    },
    {
        "Character": "戊",
        "Pinyin": "wù"
    },
    {
        "Pinyin": "5th heavenly stem"
    },
    {
        "Character": "坝",
        "Pinyin": "bà"
    },
    {
        "Pinyin": "embankment; dam"
    },
    {
        "Character": "抠",
        "Pinyin": "kōu"
    },
    {
        "Pinyin": "raise, lift up; tight-fisted"
    },
    {
        "Character": "骷",
        "Pinyin": "kū"
    },
    {
        "Pinyin": "skeleton"
    },
    {
        "Character": "碘",
        "Pinyin": "diǎn"
    },
    {
        "Pinyin": "iodine"
    },
    {
        "Character": "鞍",
        "Pinyin": "ān"
    },
    {
        "Pinyin": "saddle; any saddle-shaped object"
    },
    {
        "Character": "冕",
        "Pinyin": "miǎn"
    },
    {
        "Pinyin": "crown; ceremonial cap"
    },
    {
        "Character": "榨",
        "Pinyin": "zhà"
    },
    {
        "Pinyin": "to press or extract juices; a press to extract juices; a vegetable"
    },
    {
        "Character": "肘",
        "Pinyin": "zhǒu"
    },
    {
        "Pinyin": "the elbow; help a person shoulder a load"
    },
    {
        "Character": "羔",
        "Pinyin": "gāo"
    },
    {
        "Pinyin": "lamb, kid"
    },
    {
        "Character": "哺",
        "Pinyin": "bǔ"
    },
    {
        "Pinyin": "chew food; feed"
    },
    {
        "Character": "霓",
        "Pinyin": "ní"
    },
    {
        "Pinyin": "rainbow; variegated, colored"
    },
    {
        "Character": "巳",
        "Pinyin": "sì"
    },
    {
        "Pinyin": "the hours from 9 to 11; 6th terrestrial branch"
    },
    {
        "Character": "铲",
        "Pinyin": "chǎn"
    },
    {
        "Pinyin": "spade, shovel, trowel, scoop"
    },
    {
        "Character": "蚵",
        "Pinyin": "hé"
    },
    {
        "Pinyin": "oyster"
    },
    {
        "Character": "惆",
        "Pinyin": "chóu"
    },
    {
        "Pinyin": "distressed, regretful, sad"
    },
    {
        "Character": "驹",
        "Pinyin": "jū"
    },
    {
        "Pinyin": "colt; fleet, swift; sun; surname"
    },
    {
        "Character": "撷",
        "Pinyin": "xié"
    },
    {
        "Pinyin": "pick up, gather up; hold in lap"
    },
    {
        "Character": "稽",
        "Pinyin": "jī"
    },
    {
        "Pinyin": "examine, investigate; delay"
    },
    {
        "Character": "羹",
        "Pinyin": "gēng"
    },
    {
        "Pinyin": "soup, broth"
    },
    {
        "Character": "纺",
        "Pinyin": "fǎng"
    },
    {
        "Pinyin": "spin, reel, weave; reeled pongee"
    },
    {
        "Character": "蜕",
        "Pinyin": "shuì"
    },
    {
        "Pinyin": "molt, exuviate, shed"
    },
    {
        "Character": "趾",
        "Pinyin": "zhǐ"
    },
    {
        "Pinyin": "toe; tracks, footprints"
    },
    {
        "Character": "吊",
        "Pinyin": "diào"
    },
    {
        "Pinyin": "condole, mourn, pity; hang"
    },
    {
        "Character": "豁",
        "Pinyin": "huò"
    },
    {
        "Pinyin": "open up, clear; exempt"
    },
    {
        "Character": "褪",
        "Pinyin": "tùn"
    },
    {
        "Pinyin": "strip, undress; fall off; fade"
    },
    {
        "Character": "癸",
        "Pinyin": "guǐ"
    },
    {
        "Pinyin": "10th heavenly stem"
    },
    {
        "Character": "眨",
        "Pinyin": "zhǎ"
    },
    {
        "Pinyin": "wink"
    },
    {
        "Character": "臻",
        "Pinyin": "zhēn"
    },
    {
        "Pinyin": "reach, arrive; utmost, superior"
    },
    {
        "Character": "慷",
        "Pinyin": "kāng"
    },
    {
        "Pinyin": "ardent; generous, magnanimous"
    },
    {
        "Character": "蝙",
        "Pinyin": "biān"
    },
    {
        "Pinyin": "bat"
    },
    {
        "Character": "胧",
        "Pinyin": "lóng"
    },
    {
        "Pinyin": "condition or appearance of moon"
    },
    {
        "Character": "沼",
        "Pinyin": "zhǎo"
    },
    {
        "Pinyin": "lake, fishpond, swamps"
    },
    {
        "Character": "舱",
        "Pinyin": "cāng"
    },
    {
        "Pinyin": "hold of ship; cabin"
    },
    {
        "Character": "柚",
        "Pinyin": "yòu"
    },
    {
        "Pinyin": "pomelo, grapefruit"
    },
    {
        "Character": "抨",
        "Pinyin": "pēng"
    },
    {
        "Pinyin": "impeach, censure; attack"
    },
    {
        "Character": "葭",
        "Pinyin": "jiā"
    },
    {
        "Pinyin": "bulrush, reed; flute, whistle"
    },
    {
        "Character": "枷",
        "Pinyin": "jiā"
    },
    {
        "Pinyin": "cangue scaffold"
    },
    {
        "Character": "靥",
        "Pinyin": "yè"
    },
    {
        "Pinyin": "dimples"
    },
    {
        "Character": "硝",
        "Pinyin": "xiāo"
    },
    {
        "Pinyin": "saltpeter, niter; > to tan"
    },
    {
        "Character": "绚",
        "Pinyin": "xuàn"
    },
    {
        "Pinyin": "variegated, adorned; brilliant"
    },
    {
        "Character": "绞",
        "Pinyin": "jiǎo"
    },
    {
        "Pinyin": "twist, wring; intertwine; winch"
    },
    {
        "Character": "缆",
        "Pinyin": "làn"
    },
    {
        "Pinyin": "hawser, heavy-duty rope, cable"
    },
    {
        "Character": "讪",
        "Pinyin": "shàn"
    },
    {
        "Pinyin": "abuse, slander; vilify; ridicule"
    },
    {
        "Character": "褚",
        "Pinyin": "chǔ"
    },
    {
        "Pinyin": "bag, valise; stuff, pad; surname"
    },
    {
        "Character": "砗",
        "Pinyin": "chē"
    },
    {
        "Pinyin": "giant clam, tridacna gigas"
    },
    {
        "Character": "嫣",
        "Pinyin": "yān"
    },
    {
        "Pinyin": "charming, fascinating; gay"
    },
    {
        "Character": "蒲",
        "Pinyin": "pú"
    },
    {
        "Pinyin": "type of rush; vine"
    },
    {
        "Character": "丫",
        "Pinyin": "yā"
    },
    {
        "Pinyin": "forked; bifurcation"
    },
    {
        "Character": "鹦",
        "Pinyin": "yīng"
    },
    {
        "Pinyin": "parrot"
    },
    {
        "Character": "蒹",
        "Pinyin": "jiān"
    },
    {
        "Pinyin": "reed, phragmites communis"
    },
    {
        "Character": "憩",
        "Pinyin": "qì"
    },
    {
        "Pinyin": "rest, take rest"
    },
    {
        "Character": "懊",
        "Pinyin": "ào"
    },
    {
        "Pinyin": "vexed, worried, nervous; regret"
    },
    {
        "Character": "聋",
        "Pinyin": "lóng"
    },
    {
        "Pinyin": "deaf"
    },
    {
        "Character": "盎",
        "Pinyin": "àng"
    },
    {
        "Pinyin": "cup; pot; bowl; abundant"
    },
    {
        "Character": "婊",
        "Pinyin": "biǎo"
    },
    {
        "Pinyin": "whore, prostitute"
    },
    {
        "Character": "盔",
        "Pinyin": "kuī"
    },
    {
        "Pinyin": "helmet; bowl; basin"
    },
    {
        "Character": "峦",
        "Pinyin": "luán"
    },
    {
        "Pinyin": "mountain range; pointed mountain"
    },
    {
        "Character": "矜",
        "Pinyin": "jīn"
    },
    {
        "Pinyin": "pity, feel sorry for, show sympat"
    },
    {
        "Character": "凛",
        "Pinyin": "lǐn"
    },
    {
        "Pinyin": "shiver with cold or fear, fearful"
    },
    {
        "Character": "铺",
        "Pinyin": "pū"
    },
    {
        "Pinyin": "spread out, arrange; shop, store; place to sleep, bed"
    },
    {
        "Character": "鹉",
        "Pinyin": "wǔ"
    },
    {
        "Pinyin": "species of parrot"
    },
    {
        "Character": "蜴",
        "Pinyin": "yì"
    },
    {
        "Pinyin": "lizard"
    },
    {
        "Character": "惚",
        "Pinyin": "bū"
    },
    {
        "Pinyin": "absent-minded, confused"
    },
    {
        "Character": "畴",
        "Pinyin": "chóu"
    },
    {
        "Pinyin": "farmland, arable land; category"
    },
    {
        "Character": "羁",
        "Pinyin": "jī"
    },
    {
        "Pinyin": "halter; restrain, hold, control"
    },
    {
        "Character": "媛",
        "Pinyin": "yuàn"
    },
    {
        "Pinyin": "beauty, beautiful woman"
    },
    {
        "Character": "堑",
        "Pinyin": "qiàn"
    },
    {
        "Pinyin": "moat, trench, pit, cavity"
    },
    {
        "Character": "泛",
        "Pinyin": "fàn"
    },
    {
        "Pinyin": "to drift, float; careless, reckless"
    },
    {
        "Character": "疮",
        "Pinyin": "chuāng"
    },
    {
        "Pinyin": "tumor, boil, sore, wound"
    },
    {
        "Character": "韶",
        "Pinyin": "sháo"
    },
    {
        "Pinyin": "music of the emperor Shun; beautiful"
    },
    {
        "Character": "憋",
        "Pinyin": "biē"
    },
    {
        "Pinyin": "to suppress inner feelings; hasty"
    },
    {
        "Character": "祁",
        "Pinyin": "qí"
    },
    {
        "Pinyin": "pray; numerous, ample, abundant"
    },
    {
        "Character": "诟",
        "Pinyin": "gòu"
    },
    {
        "Pinyin": "abuse, scold, berate, insult"
    },
    {
        "Character": "搔",
        "Pinyin": "sāo"
    },
    {
        "Pinyin": "to scratch"
    },
    {
        "Character": "蜥",
        "Pinyin": "xī"
    },
    {
        "Pinyin": "lizard"
    },
    {
        "Character": "袒",
        "Pinyin": "tǎn"
    },
    {
        "Pinyin": "strip; lay bare; bared; naked"
    },
    {
        "Character": "奄",
        "Pinyin": "yǎn"
    },
    {
        "Pinyin": "ere long; remain, tarry; feeble"
    },
    {
        "Character": "忱",
        "Pinyin": "chén"
    },
    {
        "Pinyin": "truth, sincerity; sincere"
    },
    {
        "Character": "玖",
        "Pinyin": "jiǔ"
    },
    {
        "Pinyin": "black-colored jade"
    },
    {
        "Character": "拌",
        "Pinyin": "bàn"
    },
    {
        "Pinyin": "mix"
    },
    {
        "Character": "悴",
        "Pinyin": "cuì"
    },
    {
        "Pinyin": "suffer, become emaciated, haggard"
    },
    {
        "Character": "祠",
        "Pinyin": "cí"
    },
    {
        "Pinyin": "ancestral temple; offer sacrifice"
    },
    {
        "Character": "扼",
        "Pinyin": "è"
    },
    {
        "Pinyin": "grasp, clutch; choke, strangle"
    },
    {
        "Character": "髅",
        "Pinyin": "lóu"
    },
    {
        "Pinyin": "skull; skeleton"
    },
    {
        "Character": "筑",
        "Pinyin": "zhú"
    },
    {
        "Pinyin": "build, erect; building"
    },
    {
        "Character": "蛤",
        "Pinyin": "há"
    },
    {
        "Pinyin": "clam"
    },
    {
        "Character": "茱",
        "Pinyin": "zhū"
    },
    {
        "Pinyin": "dogwood"
    },
    {
        "Character": "骐",
        "Pinyin": "qí"
    },
    {
        "Pinyin": "piebald horse; excellent horse"
    },
    {
        "Character": "捶",
        "Pinyin": "chuí"
    },
    {
        "Pinyin": "strike with stick, lash, beat"
    },
    {
        "Character": "须",
        "Pinyin": "xū"
    },
    {
        "Pinyin": "beard, whiskers; whisker-like"
    },
    {
        "Character": "亢",
        "Pinyin": "kàng"
    },
    {
        "Pinyin": "high, proud; violent, excessive; skilled; name"
    },
    {
        "Character": "葔",
        "Pinyin": "hóu"
    },
    {
        "Character": "艸",
        "Pinyin": "cǎo"
    },
    {
        "Pinyin": "grass; KangXi radical 140"
    },
    {
        "Character": "筛",
        "Pinyin": "shāi"
    },
    {
        "Pinyin": "sieve, filter, screen; sift"
    },
    {
        "Character": "岳",
        "Pinyin": "yuè"
    },
    {
        "Pinyin": "mountain peak; surname"
    },
    {
        "Character": "岳",
        "Pinyin": "yuè"
    },
    {
        "Pinyin": "mountain peak; surname"
    },
    {
        "Character": "慵",
        "Pinyin": "yōng"
    },
    {
        "Pinyin": "indolent, easy-going, lazy"
    },
    {
        "Character": "戮",
        "Pinyin": "lù"
    },
    {
        "Pinyin": "kill, massacre; oppress"
    },
    {
        "Character": "跎",
        "Pinyin": "tuó"
    },
    {
        "Pinyin": "slip, stumble, falter; vacillate"
    },
    {
        "Character": "砰",
        "Pinyin": "pēng"
    },
    {
        "Pinyin": "sound of crashing stones, bang!"
    },
    {
        "Character": "仑",
        "Pinyin": "lún"
    },
    {
        "Pinyin": "logical reasons, logical order"
    },
    {
        "Character": "炜",
        "Pinyin": "wěi"
    },
    {
        "Pinyin": "brilliant red; glowing"
    },
    {
        "Character": "篱",
        "Pinyin": "lí"
    },
    {
        "Pinyin": "bamboo or wooden fence; hedge"
    },
    {
        "Character": "笈",
        "Pinyin": "jí"
    },
    {
        "Pinyin": "bamboo box used carry books"
    },
    {
        "Character": "瘫",
        "Pinyin": "tān"
    },
    {
        "Pinyin": "paralysis, palsy, numbness"
    },
    {
        "Character": "吏",
        "Pinyin": "lì"
    },
    {
        "Pinyin": "government official, magistrate"
    },
    {
        "Character": "痊",
        "Pinyin": "quán"
    },
    {
        "Pinyin": "be healed, be cured; recover"
    },
    {
        "Character": "庶",
        "Pinyin": "shù"
    },
    {
        "Pinyin": "numerous, various; multitude"
    },
    {
        "Character": "厥",
        "Pinyin": "jué"
    },
    {
        "Pinyin": "personal pronoun he, she, it"
    },
    {
        "Character": "棘",
        "Pinyin": "jí"
    },
    {
        "Pinyin": "jujube tree; thorns, brambles"
    },
    {
        "Character": "娑",
        "Pinyin": "suō"
    },
    {
        "Pinyin": "dance, frolic; lounge; saunter"
    },
    {
        "Character": "沁",
        "Pinyin": "qìn"
    },
    {
        "Pinyin": "soak into, seep in, percolate"
    },
    {
        "Character": "窘",
        "Pinyin": "jiǒng"
    },
    {
        "Pinyin": "embarrassed; hard-pressed"
    },
    {
        "Character": "鲸",
        "Pinyin": "jīng"
    },
    {
        "Pinyin": "whale"
    },
    {
        "Character": "缕",
        "Pinyin": "lǚ"
    },
    {
        "Pinyin": "thread; detailed, precise"
    },
    {
        "Character": "硷",
        "Pinyin": "jiǎn"
    },
    {
        "Pinyin": "alkaline, alkali, lye, salt"
    },
    {
        "Character": "俨",
        "Pinyin": "yǎn"
    },
    {
        "Pinyin": "grave, respectful, majestic"
    },
    {
        "Character": "栈",
        "Pinyin": "zhàn"
    },
    {
        "Pinyin": "warehouse; tavern, inn"
    },
    {
        "Character": "蔬",
        "Pinyin": "shū"
    },
    {
        "Pinyin": "vegetables, greens"
    },
    {
        "Character": "鸠",
        "Pinyin": "jiū"
    },
    {
        "Pinyin": "pigeon, dove; collect, assemble"
    },
    {
        "Character": "闲",
        "Pinyin": "xián"
    },
    {
        "Pinyin": "fence, barrier; defend; idle time"
    },
    {
        "Character": "迢",
        "Pinyin": "tiáo"
    },
    {
        "Pinyin": "far; distant"
    },
    {
        "Character": "恣",
        "Pinyin": "zì"
    },
    {
        "Pinyin": "indulge oneself, unrestrained"
    },
    {
        "Character": "昀",
        "Pinyin": "yún"
    },
    {
        "Pinyin": "sun light; used in personal names"
    },
    {
        "Character": "泠",
        "Pinyin": "líng"
    },
    {
        "Pinyin": "nice and cool, mild and comfortable"
    },
    {
        "Character": "涟",
        "Pinyin": "lián"
    },
    {
        "Pinyin": "flowing water; ripples; weeping"
    },
    {
        "Character": "眩",
        "Pinyin": "xuàn"
    },
    {
        "Pinyin": "to confuse; dizzy, dazed, disoriented"
    },
    {
        "Character": "噫",
        "Pinyin": "yī"
    },
    {
        "Pinyin": "belch; alas"
    },
    {
        "Character": "娥",
        "Pinyin": "é"
    },
    {
        "Pinyin": "be beautiful; good; surname"
    },
    {
        "Character": "荼",
        "Pinyin": "tú"
    },
    {
        "Pinyin": "bitter vegetable"
    },
    {
        "Character": "鳄",
        "Pinyin": "è"
    },
    {
        "Pinyin": "crocodile, alligator"
    },
    {
        "Character": "镖",
        "Pinyin": "biāo"
    },
    {
        "Pinyin": "dart, spear, harpoon; escort"
    },
    {
        "Character": "侃",
        "Pinyin": "kǎn"
    },
    {
        "Pinyin": "upright and strong; amiable"
    },
    {
        "Character": "虏",
        "Pinyin": "lǔ"
    },
    {
        "Pinyin": "to capture, imprison, seize; a prison"
    },
    {
        "Character": "俾",
        "Pinyin": "bǐ"
    },
    {
        "Pinyin": "so that, in order that; cause"
    },
    {
        "Character": "樟",
        "Pinyin": "zhāng"
    },
    {
        "Pinyin": "camphor tree"
    },
    {
        "Character": "榴",
        "Pinyin": "liú"
    },
    {
        "Pinyin": "pomegranate"
    },
    {
        "Character": "咛",
        "Pinyin": "níng"
    },
    {
        "Pinyin": "enjoin, instruct; charge"
    },
    {
        "Character": "炬",
        "Pinyin": "jù"
    },
    {
        "Pinyin": "torch"
    },
    {
        "Character": "窦",
        "Pinyin": "dòu"
    },
    {
        "Pinyin": "surname; hole, burrow; corrupt"
    },
    {
        "Character": "笠",
        "Pinyin": "lì"
    },
    {
        "Pinyin": "bamboo hat; bamboo covering"
    },
    {
        "Character": "翱",
        "Pinyin": "áo"
    },
    {
        "Pinyin": "soar, roam"
    },
    {
        "Character": "莘",
        "Pinyin": "xīn"
    },
    {
        "Pinyin": "long; numerous; a marsh plant whose root is used for medicine"
    },
    {
        "Character": "躇",
        "Pinyin": "chú"
    },
    {
        "Pinyin": "hesitate, falter, be undecided"
    },
    {
        "Character": "翡",
        "Pinyin": "fěi"
    },
    {
        "Pinyin": "kingfisher; emerald, jade"
    },
    {
        "Character": "姜",
        "Pinyin": "jiāng"
    },
    {
        "Pinyin": "surname; ginger"
    },
    {
        "Character": "枭",
        "Pinyin": "xiāo"
    },
    {
        "Pinyin": "owl thus, something evil"
    },
    {
        "Character": "匕",
        "Pinyin": "bǐ"
    },
    {
        "Pinyin": "spoon, ladle; knife, dirk"
    },
    {
        "Character": "藩",
        "Pinyin": "fán"
    },
    {
        "Pinyin": "fence; boundary; outlying border"
    },
    {
        "Character": "徉",
        "Pinyin": "yáng"
    },
    {
        "Pinyin": "wonder, rove, stray; hesitating"
    },
    {
        "Character": "觞",
        "Pinyin": "shāng"
    },
    {
        "Pinyin": "wine vessel; propose toast; feast"
    },
    {
        "Character": "拣",
        "Pinyin": "jiǎn"
    },
    {
        "Pinyin": "choose; select; pick up; gather"
    },
    {
        "Character": "吱",
        "Pinyin": "zhī"
    },
    {
        "Pinyin": "chirping, squeaking, hissing"
    },
    {
        "Character": "皈",
        "Pinyin": "guī"
    },
    {
        "Pinyin": "follow, comply with"
    },
    {
        "Character": "墉",
        "Pinyin": "yōng"
    },
    {
        "Pinyin": "wall; fortified wall; small wall"
    },
    {
        "Character": "傌",
        "Pinyin": "mà"
    },
    {
        "Pinyin": "to curse, to revile, to abuse; to scold"
    },
    {
        "Character": "梢",
        "Pinyin": "shāo"
    },
    {
        "Pinyin": "pointed tip of something long like a branch; rudder"
    },
    {
        "Character": "巅",
        "Pinyin": "diān"
    },
    {
        "Pinyin": "summit of mountain, mountain top"
    },
    {
        "Character": "踌",
        "Pinyin": "chóu"
    },
    {
        "Pinyin": "hesitate, falter; smug, self-satisfied"
    },
    {
        "Character": "萌",
        "Pinyin": "méng"
    },
    {
        "Pinyin": "bud, sprout"
    },
    {
        "Character": "幌",
        "Pinyin": "huǎng"
    },
    {
        "Pinyin": "curtain, cloth screen"
    },
    {
        "Character": "杭",
        "Pinyin": "háng"
    },
    {
        "Pinyin": "cross stream; navigate"
    },
    {
        "Character": "侥",
        "Pinyin": "jiǎo"
    },
    {
        "Pinyin": "be lucky; by chance, by luck"
    },
    {
        "Character": "栾",
        "Pinyin": "luán"
    },
    {
        "Pinyin": "name of tree; a part of cornice"
    },
    {
        "Character": "奠",
        "Pinyin": "diàn"
    },
    {
        "Pinyin": "pay respect; settle"
    },
    {
        "Character": "痲",
        "Pinyin": "má"
    },
    {
        "Pinyin": "pock-marked; leprosy; measles"
    },
    {
        "Character": "夸",
        "Pinyin": "kuā"
    },
    {
        "Pinyin": "exaggerate; brag, boast; flaunt"
    },
    {
        "Character": "瘖",
        "Pinyin": "yīn"
    },
    {
        "Pinyin": "dumb, mute, unable speak"
    },
    {
        "Character": "芯",
        "Pinyin": "xīn"
    },
    {
        "Pinyin": "pith from rush (juncus effusus)"
    },
    {
        "Character": "蟀",
        "Pinyin": "shuài"
    },
    {
        "Pinyin": "cricket"
    },
    {
        "Character": "驿",
        "Pinyin": "yì"
    },
    {
        "Pinyin": "relay station"
    },
    {
        "Character": "耨",
        "Pinyin": "nòu"
    },
    {
        "Pinyin": "hoe, rake; weed"
    },
    {
        "Character": "禾",
        "Pinyin": "hé"
    },
    {
        "Pinyin": "grain still on stalk; rice plant"
    },
    {
        "Character": "瑾",
        "Pinyin": "jǐn"
    },
    {
        "Pinyin": "brilliance of gems; fine jade"
    },
    {
        "Character": "塾",
        "Pinyin": "shú"
    },
    {
        "Pinyin": "village school; private tutorage"
    },
    {
        "Character": "俭",
        "Pinyin": "jiǎn"
    },
    {
        "Pinyin": "temperate, frugal, economical"
    },
    {
        "Character": "沱",
        "Pinyin": "tuó"
    },
    {
        "Pinyin": "rivers, streams, waterways; flow"
    },
    {
        "Character": "腺",
        "Pinyin": "xiàn"
    },
    {
        "Pinyin": "gland"
    },
    {
        "Character": "橱",
        "Pinyin": "chú"
    },
    {
        "Pinyin": "cabinet, wardrobe, cupboard"
    },
    {
        "Character": "僵",
        "Pinyin": "jiāng"
    },
    {
        "Pinyin": "stiff and motionless, stock still"
    },
    {
        "Character": "惋",
        "Pinyin": "wǎn"
    },
    {
        "Pinyin": "regret, be sorry; alarmed"
    },
    {
        "Character": "擞",
        "Pinyin": "sǒu"
    },
    {
        "Pinyin": "shake, tremble, quake; flutter"
    },
    {
        "Character": "噗",
        "Pinyin": "pū"
    },
    {
        "Pinyin": "burst"
    },
    {
        "Character": "呛",
        "Pinyin": "qiāng"
    },
    {
        "Pinyin": "choke by smoke; irritates nose"
    },
    {
        "Character": "抴",
        "Pinyin": "yì"
    },
    {
        "Character": "蛀",
        "Pinyin": "zhù"
    },
    {
        "Pinyin": "insects that eat books, clothes"
    },
    {
        "Character": "渲",
        "Pinyin": "xuàn"
    },
    {
        "Pinyin": "add repeated washes of color"
    },
    {
        "Character": "酋",
        "Pinyin": "qiú"
    },
    {
        "Pinyin": "chief of tribe, chieftain"
    },
    {
        "Character": "跆",
        "Pinyin": "tái"
    },
    {
        "Pinyin": "trample"
    },
    {
        "Character": "埸",
        "Pinyin": "yì"
    },
    {
        "Pinyin": "a border; a limit; a dike; a frontier; a boundary"
    },
    {
        "Character": "嬉",
        "Pinyin": "xī"
    },
    {
        "Pinyin": "enjoy; play, amuse oneself"
    },
    {
        "Character": "怆",
        "Pinyin": "chuàng"
    },
    {
        "Pinyin": "sad, broken-hearted, disconsolate"
    },
    {
        "Character": "噶",
        "Pinyin": "gé"
    },
    {
        "Pinyin": "used in transliterations"
    },
    {
        "Character": "耙",
        "Pinyin": "pá"
    },
    {
        "Pinyin": "rake"
    },
    {
        "Character": "憔",
        "Pinyin": "qiáo"
    },
    {
        "Pinyin": "be worn-out, emaciated, haggard"
    },
    {
        "Character": "挠",
        "Pinyin": "náo"
    },
    {
        "Pinyin": "scratch; disturb, bother; submit"
    },
    {
        "Character": "羲",
        "Pinyin": "xī"
    },
    {
        "Pinyin": "ancient emperor; breath, vapor"
    },
    {
        "Character": "扑",
        "Pinyin": "pū"
    },
    {
        "Pinyin": "pound, beat, strike; attack"
    },
    {
        "Character": "眶",
        "Pinyin": "kuàng"
    },
    {
        "Pinyin": "eye socket; rim of eye"
    },
    {
        "Character": "蛎",
        "Pinyin": "lì"
    },
    {
        "Pinyin": "oyster"
    },
    {
        "Character": "蹉",
        "Pinyin": "cuō"
    },
    {
        "Pinyin": "error, mistake, slip; failure"
    },
    {
        "Character": "孵",
        "Pinyin": "fū"
    },
    {
        "Pinyin": "sit on eggs, hatch"
    },
    {
        "Character": "淀",
        "Pinyin": "diàn"
    },
    {
        "Pinyin": "sediment, dregs, precipitate"
    },
    {
        "Character": "恸",
        "Pinyin": "tòng"
    },
    {
        "Pinyin": "sadness, grief; mourn; be moved"
    },
    {
        "Character": "灸",
        "Pinyin": "jiǔ"
    },
    {
        "Pinyin": "cauterize with moxa; moxibustion"
    },
    {
        "Character": "愕",
        "Pinyin": "è"
    },
    {
        "Pinyin": "startled, alarmed, astonished"
    },
    {
        "Character": "淤",
        "Pinyin": "yū"
    },
    {
        "Pinyin": "mud, sediment; clog up, silt up"
    },
    {
        "Character": "狙",
        "Pinyin": "jū"
    },
    {
        "Pinyin": "an ape, monkey; to spy, watch for; to lie"
    },
    {
        "Character": "槛",
        "Pinyin": "jiàn"
    },
    {
        "Pinyin": "threshold, door-sill"
    },
    {
        "Character": "嗈",
        "Pinyin": "yōng"
    },
    {
        "Pinyin": "oh"
    },
    {
        "Character": "霎",
        "Pinyin": "shà"
    },
    {
        "Pinyin": "light rain, drizzle; an instant; passing"
    },
    {
        "Character": "嗽",
        "Pinyin": "sòu"
    },
    {
        "Pinyin": "cough, gargle, clear throat"
    },
    {
        "Character": "兢",
        "Pinyin": "jīng"
    },
    {
        "Pinyin": "fearful, cautious, wary"
    },
    {
        "Character": "瑚",
        "Pinyin": "hú"
    },
    {
        "Pinyin": "coral; person of virtue"
    },
    {
        "Character": "冉",
        "Pinyin": "rǎn"
    },
    {
        "Pinyin": "tender; weak; proceed gradually"
    },
    {
        "Character": "甸",
        "Pinyin": "diàn"
    },
    {
        "Pinyin": "suburbs of capital; govern; crops"
    },
    {
        "Character": "怔",
        "Pinyin": "zhēng"
    },
    {
        "Pinyin": "a disease resembling neurosis"
    },
    {
        "Character": "蠹",
        "Pinyin": "dù"
    },
    {
        "Pinyin": "moth; insects which eat into clot"
    },
    {
        "Character": "缀",
        "Pinyin": "zhuì"
    },
    {
        "Pinyin": "patch together, link, connect"
    },
    {
        "Character": "谄",
        "Pinyin": "chǎn"
    },
    {
        "Pinyin": "flatter, truckle, toady"
    },
    {
        "Character": "灼",
        "Pinyin": "zhuó"
    },
    {
        "Pinyin": "burn; broil; cauterize; bright"
    },
    {
        "Character": "紊",
        "Pinyin": "wèn"
    },
    {
        "Pinyin": "confused, disorder"
    },
    {
        "Character": "彤",
        "Pinyin": "tóng"
    },
    {
        "Pinyin": "red, vermilion; name of ancient"
    },
    {
        "Character": "荐",
        "Pinyin": "jiàn"
    },
    {
        "Pinyin": "offer, present; recommend"
    },
    {
        "Character": "诣",
        "Pinyin": "yì"
    },
    {
        "Pinyin": "reach; achievement, accomplishment"
    },
    {
        "Character": "眛",
        "Pinyin": "mèi"
    },
    {
        "Pinyin": "dim, dark, obscure; blind"
    },
    {
        "Character": "禀",
        "Pinyin": "bǐng"
    },
    {
        "Pinyin": "report to, petition"
    },
    {
        "Character": "馏",
        "Pinyin": "liù"
    },
    {
        "Pinyin": "distill, distillation"
    },
    {
        "Character": "蒜",
        "Pinyin": "suàn"
    },
    {
        "Pinyin": "garlic"
    },
    {
        "Character": "窑",
        "Pinyin": "yáo"
    },
    {
        "Pinyin": "kiln; coal mine pit"
    },
    {
        "Character": "讦",
        "Pinyin": "jié"
    },
    {
        "Pinyin": "expose other's secrets, pry"
    },
    {
        "Character": "机",
        "Pinyin": "jī"
    },
    {
        "Pinyin": "machine; moment, chance"
    },
    {
        "Character": "炯",
        "Pinyin": "jiǒng"
    },
    {
        "Pinyin": "bright, brilliant, clear; hot"
    },
    {
        "Character": "颐",
        "Pinyin": "yí"
    },
    {
        "Pinyin": "cheeks; jaw; chin; rear; to nourish"
    },
    {
        "Character": "缪",
        "Pinyin": "móu"
    },
    {
        "Pinyin": "wind around, bind; prepare"
    },
    {
        "Character": "扉",
        "Pinyin": "fēi"
    },
    {
        "Pinyin": "door panel"
    },
    {
        "Character": "嵩",
        "Pinyin": "sōng"
    },
    {
        "Pinyin": "high, lofty; one of the 5 peaks, situated in Hunan"
    },
    {
        "Character": "缅",
        "Pinyin": "miǎn"
    },
    {
        "Pinyin": "distant, remote; think of"
    },
    {
        "Character": "朕",
        "Pinyin": "zhèn"
    },
    {
        "Pinyin": "pronoun 'I'"
    },
    {
        "Character": "蟋",
        "Pinyin": "xī"
    },
    {
        "Pinyin": "cricket"
    },
    {
        "Character": "濒",
        "Pinyin": "bīn"
    },
    {
        "Pinyin": "approach, be on verge of; near"
    },
    {
        "Character": "剔",
        "Pinyin": "tī"
    },
    {
        "Pinyin": "pick out; scrape off; scrape meat"
    },
    {
        "Character": "局",
        "Pinyin": "jú"
    },
    {
        "Pinyin": "bureau, office; circumstance"
    },
    {
        "Character": "钍",
        "Pinyin": "tǔ"
    },
    {
        "Pinyin": "thorium"
    },
    {
        "Character": "肋",
        "Pinyin": "lè"
    },
    {
        "Pinyin": "ribs; chest"
    },
    {
        "Character": "噩",
        "Pinyin": "è"
    },
    {
        "Pinyin": "bad, ill-omened, unlucky"
    },
    {
        "Character": "佢",
        "Pinyin": "qú"
    },
    {
        "Pinyin": "he (Cant.)"
    },
    {
        "Character": "揖",
        "Pinyin": "yī"
    },
    {
        "Pinyin": "salute, bow; defer to, yield"
    },
    {
        "Character": "圳",
        "Pinyin": "zhèn"
    },
    {
        "Pinyin": "furrow in field, small drainage"
    },
    {
        "Character": "芜",
        "Pinyin": "wú"
    },
    {
        "Pinyin": "luxurious growth of weeds"
    },
    {
        "Character": "亵",
        "Pinyin": "xiè"
    },
    {
        "Pinyin": "dirty, ragged; slight, insult, treat with disrespect"
    },
    {
        "Character": "崭",
        "Pinyin": "zhǎn"
    },
    {
        "Pinyin": "high, steep, precipitous; new"
    },
    {
        "Character": "踅",
        "Pinyin": "chì"
    },
    {
        "Character": "蜻",
        "Pinyin": "qīng"
    },
    {
        "Pinyin": "dragonfly"
    },
    {
        "Character": "坞",
        "Pinyin": "wù"
    },
    {
        "Pinyin": "entrenchment, bank, low wall"
    },
    {
        "Character": "绫",
        "Pinyin": "líng"
    },
    {
        "Pinyin": "thin silk, damask silk"
    },
    {
        "Character": "冶",
        "Pinyin": "yě"
    },
    {
        "Pinyin": "smelt, fuse metals; cast, found"
    },
    {
        "Character": "惦",
        "Pinyin": "diàn"
    },
    {
        "Pinyin": "think of, remember, miss"
    },
    {
        "Character": "梧",
        "Pinyin": "wú"
    },
    {
        "Pinyin": "Sterculia platanifolia"
    },
    {
        "Character": "罣",
        "Pinyin": "guà"
    },
    {
        "Pinyin": "hinder, disturb, obstruct"
    },
    {
        "Character": "殆",
        "Pinyin": "dài"
    },
    {
        "Pinyin": "dangerous, perilous; endanger"
    },
    {
        "Character": "兀",
        "Pinyin": "wù"
    },
    {
        "Pinyin": "to cut off the feet"
    },
    {
        "Character": "讼",
        "Pinyin": "sòng"
    },
    {
        "Pinyin": "accuse; argue, dispute; litigate"
    },
    {
        "Character": "臼",
        "Pinyin": "jiù"
    },
    {
        "Pinyin": "mortar; bone joint socket"
    },
    {
        "Character": "踮",
        "Pinyin": "diǎn"
    },
    {
        "Pinyin": "tip toe"
    },
    {
        "Character": "炙",
        "Pinyin": "zhì"
    },
    {
        "Pinyin": "roast, broil; toast; cauterize"
    },
    {
        "Character": "雌",
        "Pinyin": "cí"
    },
    {
        "Pinyin": "female; feminine; gentle, soft"
    },
    {
        "Character": "啧",
        "Pinyin": "zé"
    },
    {
        "Pinyin": "interjection of approval or admiration"
    },
    {
        "Character": "褒",
        "Pinyin": "bāo"
    },
    {
        "Pinyin": "praise, commend, honor, cite"
    },
    {
        "Character": "竺",
        "Pinyin": "zhú"
    },
    {
        "Pinyin": "India; bamboo; surname"
    },
    {
        "Character": "匈",
        "Pinyin": "xiōng"
    },
    {
        "Pinyin": "breast, chest, thorax; clamor; the Hsiung Nu 'Huns'"
    },
    {
        "Character": "葳",
        "Pinyin": "wēi"
    },
    {
        "Pinyin": "luxuriant, flourishing; used for various plants"
    },
    {
        "Character": "旱",
        "Pinyin": "hàn"
    },
    {
        "Pinyin": "drought; dry; dry land"
    },
    {
        "Character": "骰",
        "Pinyin": "tóu"
    },
    {
        "Pinyin": "die, dice"
    },
    {
        "Character": "阉",
        "Pinyin": "yān"
    },
    {
        "Pinyin": "castrate; eunuch"
    },
    {
        "Character": "甭",
        "Pinyin": "béng"
    },
    {
        "Pinyin": "there is no need"
    },
    {
        "Character": "欣",
        "Pinyin": "xīn"
    },
    {
        "Pinyin": "happy, joyous, delighted"
    },
    {
        "Character": "霏",
        "Pinyin": "fēi"
    },
    {
        "Pinyin": "falling of snow and rain"
    },
    {
        "Character": "酪",
        "Pinyin": "luò"
    },
    {
        "Pinyin": "cream, cheese; koumiss"
    },
    {
        "Character": "雍",
        "Pinyin": "yōng"
    },
    {
        "Pinyin": "harmony, union; harmonious"
    },
    {
        "Character": "饪",
        "Pinyin": "rèn"
    },
    {
        "Pinyin": "cooked food; cook until well done"
    },
    {
        "Character": "勋",
        "Pinyin": "xūn"
    },
    {
        "Pinyin": "meritorious deed; merits; rank"
    },
    {
        "Character": "煦",
        "Pinyin": "xǔ"
    },
    {
        "Pinyin": "kind, gentle, gracious, genial"
    },
    {
        "Character": "漓",
        "Pinyin": "lí"
    },
    {
        "Pinyin": "short name for Guangxi province"
    },
    {
        "Character": "娴",
        "Pinyin": "xián"
    },
    {
        "Pinyin": "elegant, refined; skillful"
    },
    {
        "Character": "揪",
        "Pinyin": "jiū"
    },
    {
        "Pinyin": "grasp with hand, pinch"
    },
    {
        "Character": "囝",
        "Pinyin": "jiǎn"
    },
    {
        "Pinyin": "baby, infant"
    },
    {
        "Character": "婵",
        "Pinyin": "chán"
    },
    {
        "Pinyin": "beautiful, lovely, pretty, graceful"
    },
    {
        "Character": "佼",
        "Pinyin": "jiǎo"
    },
    {
        "Pinyin": "beautiful, handsome, good-looking"
    },
    {
        "Character": "玟",
        "Pinyin": "wén"
    },
    {
        "Pinyin": "streaks in jade; gem"
    },
    {
        "Character": "荤",
        "Pinyin": "hūn"
    },
    {
        "Pinyin": "meat diet; strong smelling"
    },
    {
        "Character": "俘",
        "Pinyin": "fú"
    },
    {
        "Pinyin": "prisoner of war; take as prisoner"
    },
    {
        "Character": "癖",
        "Pinyin": "pǐ"
    },
    {
        "Pinyin": "craving, weakness for; indigestion"
    },
    {
        "Character": "瞋",
        "Pinyin": "chēn"
    },
    {
        "Pinyin": "glare with anger"
    },
    {
        "Character": "咄",
        "Pinyin": "duō"
    },
    {
        "Pinyin": "noise of rage, cry out in anger"
    },
    {
        "Character": "幢",
        "Pinyin": "chuáng"
    },
    {
        "Pinyin": "carriage curtain; sun screen"
    },
    {
        "Character": "迂",
        "Pinyin": "yū"
    },
    {
        "Pinyin": "doctrinaire, abstruse, unrealistic"
    },
    {
        "Character": "蓊",
        "Pinyin": "wěng"
    },
    {
        "Pinyin": "luxuriant vegetation; lush"
    },
    {
        "Character": "疹",
        "Pinyin": "zhěn"
    },
    {
        "Pinyin": "measles; rash; fever"
    },
    {
        "Character": "儸",
        "Pinyin": "luó"
    },
    {
        "Pinyin": "bandit, daredevil"
    },
    {
        "Character": "桔",
        "Pinyin": "jié"
    },
    {
        "Pinyin": "Chinese bellflower; well-swept; the inner fibers of corn-stalks"
    },
    {
        "Character": "讹",
        "Pinyin": "é"
    },
    {
        "Pinyin": "swindle, cheat; erroneous, wrong"
    },
    {
        "Character": "籐",
        "Pinyin": "téng"
    },
    {
        "Pinyin": "climbing plants, vines, cane"
    },
    {
        "Character": "眯",
        "Pinyin": "mǐ"
    },
    {
        "Pinyin": "be blinded"
    },
    {
        "Character": "猖",
        "Pinyin": "chāng"
    },
    {
        "Pinyin": "mad, wild, reckless, unruly"
    },
    {
        "Character": "泄",
        "Pinyin": "xiè"
    },
    {
        "Pinyin": "leak; vent; flow; reveal"
    },
    {
        "Character": "凿",
        "Pinyin": "záo"
    },
    {
        "Pinyin": "chisel; bore, pierce"
    },
    {
        "Character": "咻",
        "Pinyin": "xiū"
    },
    {
        "Pinyin": "shout"
    },
    {
        "Character": "晏",
        "Pinyin": "yàn"
    },
    {
        "Pinyin": "peaceful, quiet; clear; late in the day"
    },
    {
        "Character": "诬",
        "Pinyin": "wú"
    },
    {
        "Pinyin": "make false accusation; defame"
    },
    {
        "Character": "漪",
        "Pinyin": "yī"
    },
    {
        "Pinyin": "ripples on water; swirling"
    },
    {
        "Character": "辫",
        "Pinyin": "biàn"
    },
    {
        "Pinyin": "braid; pigtail, plait, queue"
    },
    {
        "Character": "蔺",
        "Pinyin": "lìn"
    },
    {
        "Pinyin": "rush used in making mats; surname"
    },
    {
        "Character": "症",
        "Pinyin": "zhēng"
    },
    {
        "Pinyin": "obstruction of bowels"
    },
    {
        "Character": "妾",
        "Pinyin": "qiè"
    },
    {
        "Pinyin": "concubine"
    },
    {
        "Character": "琇",
        "Pinyin": "xiù"
    },
    {
        "Pinyin": "coarse variety of jasper or jade"
    },
    {
        "Character": "蜓",
        "Pinyin": "tíng"
    },
    {
        "Pinyin": "dragonfly"
    },
    {
        "Character": "烽",
        "Pinyin": "fēng"
    },
    {
        "Pinyin": "signal fire; tower where signal"
    },
    {
        "Character": "舔",
        "Pinyin": "tiǎn"
    },
    {
        "Pinyin": "lick with tongue; taste"
    },
    {
        "Character": "娣",
        "Pinyin": "dì"
    },
    {
        "Pinyin": "younger sister, sister-in-law"
    },
    {
        "Character": "汶",
        "Pinyin": "wèn"
    },
    {
        "Pinyin": "a river in Shandong province"
    },
    {
        "Character": "诏",
        "Pinyin": "zhào"
    },
    {
        "Pinyin": "decree, proclaim; imperial decree"
    },
    {
        "Character": "侈",
        "Pinyin": "chǐ"
    },
    {
        "Pinyin": "luxurious, extravagant"
    },
    {
        "Character": "膺",
        "Pinyin": "yīng"
    },
    {
        "Pinyin": "breast, chest; undertake, bear"
    },
    {
        "Character": "渚",
        "Pinyin": "zhǔ"
    },
    {
        "Pinyin": "small sand bank, islet"
    },
    {
        "Character": "槌",
        "Pinyin": "chuí"
    },
    {
        "Pinyin": "hammer, mallet; strike, beat"
    },
    {
        "Character": "鞘",
        "Pinyin": "qiào"
    },
    {
        "Pinyin": "scabbard, sheath"
    },
    {
        "Character": "噬",
        "Pinyin": "shì"
    },
    {
        "Pinyin": "bite; gnaw; snap at"
    },
    {
        "Character": "咐",
        "Pinyin": "fù"
    },
    {
        "Pinyin": "instruct, order"
    },
    {
        "Character": "璀",
        "Pinyin": "cuǐ"
    },
    {
        "Pinyin": "lustre of gems; glitter; shine"
    },
    {
        "Character": "肪",
        "Pinyin": "fáng"
    },
    {
        "Pinyin": "animal fat"
    },
    {
        "Character": "羚",
        "Pinyin": "líng"
    },
    {
        "Pinyin": "species of antelope"
    },
    {
        "Character": "羿",
        "Pinyin": "yì"
    },
    {
        "Pinyin": "legendary archer"
    },
    {
        "Character": "葫",
        "Pinyin": "hú"
    },
    {
        "Pinyin": "bottle-gourd"
    },
    {
        "Character": "箔",
        "Pinyin": "bó"
    },
    {
        "Pinyin": "reed screen; frame for growing silkworms"
    },
    {
        "Character": "庇",
        "Pinyin": "bì"
    },
    {
        "Pinyin": "cover, shield, shelter, protect"
    },
    {
        "Character": "俪",
        "Pinyin": "lì"
    },
    {
        "Pinyin": "spouse, couple, pair"
    },
    {
        "Character": "嘱",
        "Pinyin": "zhǔ"
    },
    {
        "Pinyin": "order, tell, instruct, leave word"
    },
    {
        "Character": "颅",
        "Pinyin": "lú"
    },
    {
        "Pinyin": "skull"
    },
    {
        "Character": "玺",
        "Pinyin": "xǐ"
    },
    {
        "Pinyin": "imperial signet, royal signet"
    },
    {
        "Character": "褐",
        "Pinyin": "hé"
    },
    {
        "Pinyin": "coarse woolen cloth; dull, dark"
    },
    {
        "Character": "擂",
        "Pinyin": "léi"
    },
    {
        "Pinyin": "rub, grind; grind with a mortar and pestle; triturate"
    },
    {
        "Character": "遑",
        "Pinyin": "huáng"
    },
    {
        "Pinyin": "leisure, leisurely; hurry about"
    },
    {
        "Character": "萦",
        "Pinyin": "yíng"
    },
    {
        "Pinyin": "entangle, entwine, coil"
    },
    {
        "Character": "罹",
        "Pinyin": "lí"
    },
    {
        "Pinyin": "sorrow, grief; incur, meet with"
    },
    {
        "Character": "粘",
        "Pinyin": "nián"
    },
    {
        "Pinyin": "viscous, mucous; glutinous"
    },
    {
        "Character": "栗",
        "Pinyin": "lì"
    },
    {
        "Pinyin": "shiver, shudder, tremble; tremble"
    },
    {
        "Character": "钊",
        "Pinyin": "zhāo"
    },
    {
        "Pinyin": "endeavor, strive; encourage; cut"
    },
    {
        "Character": "彪",
        "Pinyin": "biāo"
    },
    {
        "Pinyin": "tiger; tiger stripes; tiger-like"
    },
    {
        "Character": "瘀",
        "Pinyin": "yū"
    },
    {
        "Pinyin": "a hematoma, contusion; extravasted blood"
    },
    {
        "Character": "蛾",
        "Pinyin": "é"
    },
    {
        "Pinyin": "moth"
    },
    {
        "Character": "馁",
        "Pinyin": "něi"
    },
    {
        "Pinyin": "hungry, starving, famished"
    },
    {
        "Character": "洹",
        "Pinyin": "huán"
    },
    {
        "Pinyin": "river in Henan province"
    },
    {
        "Character": "谕",
        "Pinyin": "yù"
    },
    {
        "Pinyin": "proclaim, instruct; edict"
    },
    {
        "Character": "胚",
        "Pinyin": "pēi"
    },
    {
        "Pinyin": "embryo; unfinished things"
    },
    {
        "Character": "卉",
        "Pinyin": "huì"
    },
    {
        "Pinyin": "general term for plants; myriads"
    },
    {
        "Character": "拇",
        "Pinyin": "mǔ"
    },
    {
        "Pinyin": "thumb; big toe"
    },
    {
        "Character": "炽",
        "Pinyin": "chì"
    },
    {
        "Pinyin": "burning-hot, intense; to burn, blaze; splendid, illustrious"
    },
    {
        "Character": "睦",
        "Pinyin": "mù"
    },
    {
        "Pinyin": "friendly, amiable, peaceful"
    },
    {
        "Character": "鲨",
        "Pinyin": "shā"
    },
    {
        "Pinyin": "shark"
    },
    {
        "Character": "碴",
        "Pinyin": "chá"
    },
    {
        "Pinyin": "chipped edge of a container"
    },
    {
        "Character": "辟",
        "Pinyin": "pì"
    },
    {
        "Pinyin": "law, rule; open up, develop"
    },
    {
        "Character": "漱",
        "Pinyin": "shù"
    },
    {
        "Pinyin": "gargle, rinse; wash, scour"
    },
    {
        "Character": "窒",
        "Pinyin": "zhì"
    },
    {
        "Pinyin": "stop up, obstruct"
    },
    {
        "Character": "惺",
        "Pinyin": "xīng"
    },
    {
        "Pinyin": "intelligent, clever, astute"
    },
    {
        "Character": "谲",
        "Pinyin": "jué"
    },
    {
        "Pinyin": "cunning, crafty, sly, wily"
    },
    {
        "Character": "勦",
        "Pinyin": "jiǎo"
    },
    {
        "Pinyin": "destroy, exterminate, annihilate"
    },
    {
        "Character": "迺",
        "Pinyin": "nǎi"
    },
    {
        "Pinyin": "then, thereupon, only then"
    },
    {
        "Character": "臀",
        "Pinyin": "tún"
    },
    {
        "Pinyin": "buttocks"
    },
    {
        "Character": "痪",
        "Pinyin": "huàn"
    },
    {
        "Pinyin": "paralysis, numbness of limbs"
    },
    {
        "Character": "褔",
        "Pinyin": "fù"
    },
    {
        "Character": "渠",
        "Pinyin": "qú"
    },
    {
        "Pinyin": "ditch, canal, channel, gutter"
    },
    {
        "Character": "弋",
        "Pinyin": "yì"
    },
    {
        "Pinyin": "catch, arrest; shoot with bow"
    },
    {
        "Character": "咸",
        "Pinyin": "xián"
    },
    {
        "Pinyin": "salty, briny; salted; pickled"
    },
    {
        "Character": "狸",
        "Pinyin": "lí"
    },
    {
        "Pinyin": "fox"
    },
    {
        "Character": "吽",
        "Pinyin": "óu"
    },
    {
        "Pinyin": "'OM'; bellow; (Cant.) dull, stupid"
    },
    {
        "Character": "痔",
        "Pinyin": "zhì"
    },
    {
        "Pinyin": "hemorrhoids, piles"
    },
    {
        "Character": "霭",
        "Pinyin": "ǎi"
    },
    {
        "Pinyin": "cloudy sky, haze; calm, peaceful"
    },
    {
        "Character": "轼",
        "Pinyin": "shì"
    },
    {
        "Pinyin": "horizontal wooden bar in front of a sedan chair"
    },
    {
        "Character": "姥",
        "Pinyin": "mǔ"
    },
    {
        "Pinyin": "maternal grandmother; midwife"
    },
    {
        "Character": "璁",
        "Pinyin": "cōng"
    },
    {
        "Character": "钙",
        "Pinyin": "gài"
    },
    {
        "Pinyin": "calcium"
    },
    {
        "Character": "漾",
        "Pinyin": "yàng"
    },
    {
        "Pinyin": "overflow; swirl, ripple; to be tosssed by waves"
    },
    {
        "Character": "跛",
        "Pinyin": "bǒ"
    },
    {
        "Pinyin": "lame"
    },
    {
        "Character": "翎",
        "Pinyin": "líng"
    },
    {
        "Pinyin": "feather; plume; wing"
    },
    {
        "Character": "磷",
        "Pinyin": "lìn"
    },
    {
        "Pinyin": "phosphorus; water rushing between"
    },
    {
        "Character": "嗳",
        "Pinyin": "ài"
    },
    {
        "Pinyin": "interjection; exclamation"
    },
    {
        "Character": "吩",
        "Pinyin": "fēn"
    },
    {
        "Pinyin": "order, command, instruct"
    },
    {
        "Character": "敕",
        "Pinyin": "chì"
    },
    {
        "Pinyin": "an imperial order or decree"
    },
    {
        "Character": "氮",
        "Pinyin": "dàn"
    },
    {
        "Pinyin": "xenon"
    },
    {
        "Character": "鲍",
        "Pinyin": "bào"
    },
    {
        "Pinyin": "abalone; dried fish; surname"
    },
    {
        "Character": "俟",
        "Pinyin": "sì"
    },
    {
        "Pinyin": "wait for, wait until, as soon as"
    },
    {
        "Character": "婿",
        "Pinyin": "xù"
    },
    {
        "Pinyin": "son-in-law; husband"
    },
    {
        "Character": "尪",
        "Pinyin": "wāng"
    },
    {
        "Pinyin": "lame"
    },
    {
        "Character": "谚",
        "Pinyin": "yàn"
    },
    {
        "Pinyin": "proverb, maxim"
    },
    {
        "Character": "恺",
        "Pinyin": "kǎi"
    },
    {
        "Pinyin": "enjoy, be contented, joyful"
    },
    {
        "Character": "裴",
        "Pinyin": "péi"
    },
    {
        "Pinyin": "surname; look of a flowing gown"
    },
    {
        "Character": "汞",
        "Pinyin": "gǒng"
    },
    {
        "Pinyin": "element mercury"
    },
    {
        "Character": "剿",
        "Pinyin": "jiǎo"
    },
    {
        "Pinyin": "destroy, exterminate, annihilate"
    },
    {
        "Character": "瞥",
        "Pinyin": "piē"
    },
    {
        "Pinyin": "take fleeting glance at"
    },
    {
        "Character": "氯",
        "Pinyin": "lǖ"
    },
    {
        "Pinyin": "chlorine"
    },
    {
        "Character": "桨",
        "Pinyin": "jiǎng"
    },
    {
        "Pinyin": "oar, paddle"
    },
    {
        "Character": "仝",
        "Pinyin": "tóng"
    },
    {
        "Pinyin": "together, same; surname"
    },
    {
        "Character": "瀛",
        "Pinyin": "yíng"
    },
    {
        "Pinyin": "sea, ocean"
    },
    {
        "Character": "骸",
        "Pinyin": "hái"
    },
    {
        "Pinyin": "skeleton, body; leg bone"
    },
    {
        "Character": "钳",
        "Pinyin": "qián"
    },
    {
        "Pinyin": "pincers, pliers, tongs"
    },
    {
        "Character": "镕",
        "Pinyin": "róng"
    },
    {
        "Pinyin": "fuse, melt, smelt; mold"
    },
    {
        "Character": "靓",
        "Pinyin": "jìng"
    },
    {
        "Pinyin": "make up face; ornament; quiet; (Cant.) pretty"
    },
    {
        "Character": "漩",
        "Pinyin": "xuán"
    },
    {
        "Pinyin": "eddy, whirlpool"
    },
    {
        "Character": "攘",
        "Pinyin": "ráng"
    },
    {
        "Pinyin": "seize, take by force; repel"
    },
    {
        "Character": "垣",
        "Pinyin": "yuán"
    },
    {
        "Pinyin": "low wall"
    },
    {
        "Character": "荻",
        "Pinyin": "dí"
    },
    {
        "Pinyin": "reed, miscanthus sacchariflorus"
    },
    {
        "Character": "咯",
        "Pinyin": "gē"
    },
    {
        "Pinyin": "final particle"
    },
    {
        "Character": "篑",
        "Pinyin": "kuì"
    },
    {
        "Pinyin": "a bamboo basket for carrying earth"
    },
    {
        "Character": "茗",
        "Pinyin": "mǐng"
    },
    {
        "Pinyin": "tea; tea plant"
    },
    {
        "Character": "桓",
        "Pinyin": "huán"
    },
    {
        "Pinyin": "variety of tree; surname"
    },
    {
        "Character": "浒",
        "Pinyin": "hǔ"
    },
    {
        "Pinyin": "riverbank, shore"
    },
    {
        "Character": "桠",
        "Pinyin": "yā"
    },
    {
        "Pinyin": "the forking branch of a tree"
    },
    {
        "Character": "珀",
        "Pinyin": "pò"
    },
    {
        "Pinyin": "amber"
    },
    {
        "Character": "痠",
        "Pinyin": "suān"
    },
    {
        "Pinyin": "aching of limbs, muscular pains"
    },
    {
        "Character": "靴",
        "Pinyin": "xuē"
    },
    {
        "Pinyin": "boots"
    },
    {
        "Character": "咀",
        "Pinyin": "jǔ"
    },
    {
        "Pinyin": "suck; chew, masticate"
    },
    {
        "Character": "谷",
        "Pinyin": "gǔ"
    },
    {
        "Pinyin": "corn, grain, cereal; lucky"
    },
    {
        "Character": "矗",
        "Pinyin": "chù"
    },
    {
        "Pinyin": "straight, upright, erect, lofty"
    },
    {
        "Character": "瘴",
        "Pinyin": "zhàng"
    },
    {
        "Pinyin": "malaria pestilential vapors"
    },
    {
        "Character": "璟",
        "Pinyin": "jǐng"
    },
    {
        "Pinyin": "luster of gem"
    },
    {
        "Character": "籽",
        "Pinyin": "zǐ"
    },
    {
        "Pinyin": "seed, pip, pit, stone"
    },
    {
        "Character": "晒",
        "Pinyin": "shài"
    },
    {
        "Pinyin": "dry in sun, expose to sun"
    },
    {
        "Character": "沥",
        "Pinyin": "lì"
    },
    {
        "Pinyin": "trickle, drip; strain; dregs"
    },
    {
        "Character": "弩",
        "Pinyin": "nǔ"
    },
    {
        "Pinyin": "cross-bow, bow; downward stroke"
    },
    {
        "Character": "洸",
        "Pinyin": "guāng"
    },
    {
        "Pinyin": "sparkle, glitter"
    },
    {
        "Character": "婪",
        "Pinyin": "lán"
    },
    {
        "Pinyin": "covet; covetous, avaricious"
    },
    {
        "Character": "翊",
        "Pinyin": "yì"
    },
    {
        "Pinyin": "flying; assist, help; respect"
    },
    {
        "Character": "背",
        "Pinyin": "bèi"
    },
    {
        "Pinyin": "back; back side; behind; betray"
    },
    {
        "Character": "俑",
        "Pinyin": "yǒng"
    },
    {
        "Pinyin": "wooden figure buried with dead"
    },
    {
        "Character": "磕",
        "Pinyin": "kē"
    },
    {
        "Pinyin": "hit; collide, knock into; sound"
    },
    {
        "Character": "暐",
        "Pinyin": "wěi"
    },
    {
        "Pinyin": "the bright shining of the sun"
    },
    {
        "Character": "撩",
        "Pinyin": "liáo"
    },
    {
        "Pinyin": "lift up, raise; leave, depart"
    },
    {
        "Character": "峥",
        "Pinyin": "zhēng"
    },
    {
        "Pinyin": "high, lofty, noble; steep, perilous"
    },
    {
        "Character": "鹊",
        "Pinyin": "què"
    },
    {
        "Pinyin": "magpie; Pica species (various)"
    },
    {
        "Character": "昕",
        "Pinyin": "xīn"
    },
    {
        "Pinyin": "dawn; early morning; day"
    },
    {
        "Character": "寐",
        "Pinyin": "mèi"
    },
    {
        "Pinyin": "sleep; be asleep"
    },
    {
        "Character": "徙",
        "Pinyin": "xǐ"
    },
    {
        "Pinyin": "move one's abode, shift, migrate"
    },
    {
        "Character": "遴",
        "Pinyin": "lín"
    },
    {
        "Pinyin": "select, choose; surname"
    },
    {
        "Character": "濯",
        "Pinyin": "zhuó"
    },
    {
        "Pinyin": "wash out, rinse; cleanse"
    },
    {
        "Character": "堉",
        "Pinyin": "yù"
    },
    {
        "Pinyin": "ground, fertile land"
    },
    {
        "Character": "跋",
        "Pinyin": "bá"
    },
    {
        "Pinyin": "go by foot; epilogue, colophon"
    },
    {
        "Character": "陨",
        "Pinyin": "yǔn"
    },
    {
        "Pinyin": "fall, slip; let fall; die"
    },
    {
        "Character": "丕",
        "Pinyin": "pī"
    },
    {
        "Pinyin": "great, grand, glorious, distinguished"
    },
    {
        "Character": "簇",
        "Pinyin": "cù"
    },
    {
        "Pinyin": "swarm, crowd together, cluster"
    },
    {
        "Character": "鹂",
        "Pinyin": "lí"
    },
    {
        "Pinyin": "Chinese oriole; Oriolus oriolus"
    },
    {
        "Character": "笋",
        "Pinyin": "sǔn"
    },
    {
        "Pinyin": "bamboo shoot; joint; tendon"
    },
    {
        "Character": "鬓",
        "Pinyin": "bìn"
    },
    {
        "Pinyin": "hair on temples"
    },
    {
        "Character": "竑",
        "Pinyin": "hóng"
    },
    {
        "Pinyin": "be vast and endless; broad"
    },
    {
        "Character": "绎",
        "Pinyin": "yì"
    },
    {
        "Pinyin": "to unravel or unreel silk; to interpret, explain"
    },
    {
        "Character": "镍",
        "Pinyin": "niè"
    },
    {
        "Pinyin": "nickel"
    },
    {
        "Character": "阕",
        "Pinyin": "què"
    },
    {
        "Pinyin": "close, shut; watch tower"
    },
    {
        "Character": "燿",
        "Pinyin": "yào"
    },
    {
        "Pinyin": "shine, dazzle; brilliant, radiant"
    },
    {
        "Character": "胥",
        "Pinyin": "xū"
    },
    {
        "Pinyin": "all, together, mutually"
    },
    {
        "Character": "蚓",
        "Pinyin": "yǐn"
    },
    {
        "Pinyin": "earthworm"
    },
    {
        "Character": "嗔",
        "Pinyin": "tián"
    },
    {
        "Pinyin": "be angry at, scold, rebuke"
    },
    {
        "Character": "嬴",
        "Pinyin": "yíng"
    },
    {
        "Pinyin": "to win; to have a surplus; surname"
    },
    {
        "Character": "榷",
        "Pinyin": "què"
    },
    {
        "Pinyin": "footbridge; toll, levy; monopoly"
    },
    {
        "Character": "尸",
        "Pinyin": "shī"
    },
    {
        "Pinyin": "corpse, carcass"
    },
    {
        "Character": "蜍",
        "Pinyin": "chú"
    },
    {
        "Pinyin": "toad"
    },
    {
        "Character": "夙",
        "Pinyin": "sù"
    },
    {
        "Pinyin": "early in morning, dawn; previous"
    },
    {
        "Character": "睐",
        "Pinyin": "lài"
    },
    {
        "Pinyin": "squint at; sidelong glance"
    },
    {
        "Character": "蚯",
        "Pinyin": "qiū"
    },
    {
        "Pinyin": "earthworm"
    },
    {
        "Character": "谩",
        "Pinyin": "mán"
    },
    {
        "Pinyin": "deceive, insult"
    },
    {
        "Character": "璜",
        "Pinyin": "huáng"
    },
    {
        "Pinyin": "a semicircular jade ornament used as a pendant"
    },
    {
        "Character": "湄",
        "Pinyin": "méi"
    },
    {
        "Pinyin": "water's edge, shore, bank"
    },
    {
        "Character": "鳗",
        "Pinyin": "mán"
    },
    {
        "Pinyin": "eel"
    },
    {
        "Character": "棕",
        "Pinyin": "zōng"
    },
    {
        "Pinyin": "hemp palm; palm tree"
    },
    {
        "Character": "笺",
        "Pinyin": "jiān"
    },
    {
        "Pinyin": "note, memo; stationery; comments"
    },
    {
        "Character": "垚",
        "Pinyin": "yáo"
    },
    {
        "Pinyin": "mound, roundish mass"
    },
    {
        "Character": "蛊",
        "Pinyin": "gǔ"
    },
    {
        "Pinyin": "poison; venom; harm; bewitch"
    },
    {
        "Character": "讷",
        "Pinyin": "nè"
    },
    {
        "Pinyin": "slow of speech; mumble; stammer"
    },
    {
        "Character": "鸵",
        "Pinyin": "tuó"
    },
    {
        "Pinyin": "ostrich; Struthio camelus"
    },
    {
        "Character": "痹",
        "Pinyin": "bì"
    },
    {
        "Pinyin": "paralysis, numbness"
    },
    {
        "Character": "殉",
        "Pinyin": "xùn"
    },
    {
        "Pinyin": "die for cause, be martyr for"
    },
    {
        "Character": "墟",
        "Pinyin": "xū"
    },
    {
        "Pinyin": "high mound; hilly countryside; wasteland"
    },
    {
        "Character": "旄",
        "Pinyin": "máo"
    },
    {
        "Pinyin": "a kind of ancient flag; old"
    },
    {
        "Character": "檀",
        "Pinyin": "tán"
    },
    {
        "Pinyin": "sandalwood, hardwood; surname"
    },
    {
        "Character": "竣",
        "Pinyin": "jùn"
    },
    {
        "Pinyin": "terminate, end, finish; quit"
    },
    {
        "Character": "熹",
        "Pinyin": "xī"
    },
    {
        "Pinyin": "dim light, glimmer; warm, bright"
    },
    {
        "Character": "沂",
        "Pinyin": "yí"
    },
    {
        "Pinyin": "river in southeast Shandong"
    },
    {
        "Character": "峭",
        "Pinyin": "qiào"
    },
    {
        "Pinyin": "steep, precipitous, rugged"
    },
    {
        "Character": "葾",
        "Pinyin": "yuān"
    },
    {
        "Pinyin": "(Cant.) a bad smell"
    },
    {
        "Character": "拈",
        "Pinyin": "nián"
    },
    {
        "Pinyin": "pick up with fingers; draw lots"
    },
    {
        "Character": "隍",
        "Pinyin": "huáng"
    },
    {
        "Pinyin": "dry ditch, dry moat"
    },
    {
        "Character": "鞑",
        "Pinyin": "dá"
    },
    {
        "Pinyin": "tatars"
    },
    {
        "Character": "嗅",
        "Pinyin": "xiù"
    },
    {
        "Pinyin": "smell, scent, sniff; olfactive"
    },
    {
        "Character": "佯",
        "Pinyin": "yáng"
    },
    {
        "Pinyin": "pretend, feign; false, deceitful"
    },
    {
        "Character": "蚣",
        "Pinyin": "gōng"
    },
    {
        "Pinyin": "centipede"
    },
    {
        "Character": "躏",
        "Pinyin": "lìn"
    },
    {
        "Pinyin": "trample down, oppress, overrun"
    },
    {
        "Character": "雇",
        "Pinyin": "gù"
    },
    {
        "Pinyin": "employ, to hire"
    },
    {
        "Character": "乩",
        "Pinyin": "jī"
    },
    {
        "Pinyin": "to divine"
    },
    {
        "Character": "麓",
        "Pinyin": "lù"
    },
    {
        "Pinyin": "foot of hill; foothill"
    },
    {
        "Character": "酗",
        "Pinyin": "xù"
    },
    {
        "Pinyin": "drunk, to become violent under the influence of alcohol"
    },
    {
        "Character": "寅",
        "Pinyin": "yín"
    },
    {
        "Pinyin": "to respect, reverence; respectfully; 3rd terrestrial branch"
    },
    {
        "Character": "洒",
        "Pinyin": "sǎ"
    },
    {
        "Pinyin": "sprinkle, splash; scatter, throw"
    },
    {
        "Character": "媲",
        "Pinyin": "pì"
    },
    {
        "Pinyin": "marry off, pair, match; compare"
    },
    {
        "Character": "瞩",
        "Pinyin": "zhǔ"
    },
    {
        "Pinyin": "watch carefully, stare at, focus on"
    },
    {
        "Character": "钡",
        "Pinyin": "bèi"
    },
    {
        "Pinyin": "barium"
    },
    {
        "Character": "诽",
        "Pinyin": "fěi"
    },
    {
        "Pinyin": "slander, vilify, condemn"
    },
    {
        "Character": "拗",
        "Pinyin": "ǎo"
    },
    {
        "Pinyin": "to pull, drag, break off, to pluck (a flower); bent, warped; perverse, obstinate"
    },
    {
        "Character": "朴",
        "Pinyin": "pú"
    },
    {
        "Pinyin": "simple, honest; plain; rough"
    },
    {
        "Character": "罔",
        "Pinyin": "wǎng"
    },
    {
        "Pinyin": "net; deceive; libel; negative"
    },
    {
        "Character": "螳",
        "Pinyin": "táng"
    },
    {
        "Pinyin": "mantis"
    },
    {
        "Character": "撮",
        "Pinyin": "cuō"
    },
    {
        "Pinyin": "little bit, small amount, pinch"
    },
    {
        "Character": "睽",
        "Pinyin": "kuí"
    },
    {
        "Pinyin": "staring"
    },
    {
        "Character": "渍",
        "Pinyin": "zì"
    },
    {
        "Pinyin": "soak, steep; dye; stains; sodden"
    },
    {
        "Character": "摹",
        "Pinyin": "mó"
    },
    {
        "Pinyin": "trace, copy, duplicate; pattern"
    },
    {
        "Character": "扪",
        "Pinyin": "mén"
    },
    {
        "Pinyin": "stoke, pat, feel by hand, grope"
    },
    {
        "Character": "搧",
        "Pinyin": "shān"
    },
    {
        "Pinyin": "fan; strike on face; stir up"
    },
    {
        "Character": "蹂",
        "Pinyin": "róu"
    },
    {
        "Pinyin": "trample under foot, tread on"
    },
    {
        "Character": "媄",
        "Pinyin": "měi"
    },
    {
        "Character": "纾",
        "Pinyin": "shū"
    },
    {
        "Pinyin": "loosen, relax, relieve; extricate"
    },
    {
        "Character": "蔗",
        "Pinyin": "zhè"
    },
    {
        "Pinyin": "sugar cane"
    },
    {
        "Character": "晔",
        "Pinyin": "yè"
    },
    {
        "Pinyin": "bright; radiant; thriving"
    },
    {
        "Character": "隼",
        "Pinyin": "zhǔn"
    },
    {
        "Pinyin": "aquiline (nose); a falcon"
    },
    {
        "Character": "惮",
        "Pinyin": "dàn"
    },
    {
        "Pinyin": "dread, shrink from, shirk, fear"
    },
    {
        "Character": "睭",
        "Pinyin": "zhǒu"
    },
    {
        "Character": "箍",
        "Pinyin": "gū"
    },
    {
        "Pinyin": "hoop; bind, surround"
    },
    {
        "Character": "奚",
        "Pinyin": "xī"
    },
    {
        "Pinyin": "where? what? how? why?; servant"
    },
    {
        "Character": "掳",
        "Pinyin": "lǔ"
    },
    {
        "Pinyin": "capture, seize"
    },
    {
        "Character": "咿",
        "Pinyin": "yī"
    },
    {
        "Pinyin": "descriptive of creaking; laugh"
    },
    {
        "Character": "渎",
        "Pinyin": "dú"
    },
    {
        "Pinyin": "ditch, sluice, gutter, drain"
    },
    {
        "Character": "霾",
        "Pinyin": "mái"
    },
    {
        "Pinyin": "misty, foggy; dust storm"
    },
    {
        "Character": "叨",
        "Pinyin": "tāo"
    },
    {
        "Pinyin": "talkative; quarrelous"
    },
    {
        "Character": "邃",
        "Pinyin": "suì"
    },
    {
        "Pinyin": "profound, detailed; deep"
    },
    {
        "Character": "稠",
        "Pinyin": "chóu"
    },
    {
        "Pinyin": "dense, crowded, packed; soupy"
    },
    {
        "Character": "淮",
        "Pinyin": "huái"
    },
    {
        "Pinyin": "river in Anhui province"
    },
    {
        "Character": "骁",
        "Pinyin": "xiāo"
    },
    {
        "Pinyin": "excellent horse; brave, valiant"
    },
    {
        "Character": "咩",
        "Pinyin": "miē"
    },
    {
        "Pinyin": "the bleating of sheep; (Cant.) an interrogative particle"
    },
    {
        "Character": "岑",
        "Pinyin": "cén"
    },
    {
        "Pinyin": "steep, precipitous; peak"
    },
    {
        "Character": "聿",
        "Pinyin": "yù"
    },
    {
        "Pinyin": "writing brush, pencil; thereupon"
    },
    {
        "Character": "吮",
        "Pinyin": "shǔn"
    },
    {
        "Pinyin": "suck with mouth, sip, lick"
    },
    {
        "Character": "铳",
        "Pinyin": "chòng"
    },
    {
        "Pinyin": "ancient weapon, blunderbuss"
    },
    {
        "Character": "癫",
        "Pinyin": "diān"
    },
    {
        "Pinyin": "crazy, mad; madness, mania, insanity"
    },
    {
        "Character": "敖",
        "Pinyin": "áo"
    },
    {
        "Pinyin": "ramble, play about; leisurely"
    },
    {
        "Character": "蜈",
        "Pinyin": "wú"
    },
    {
        "Pinyin": "centipede"
    },
    {
        "Character": "钣",
        "Pinyin": "bǎn"
    },
    {
        "Pinyin": "plate"
    },
    {
        "Character": "滂",
        "Pinyin": "pāng"
    },
    {
        "Pinyin": "torrential; voluminous"
    },
    {
        "Character": "酉",
        "Pinyin": "yǒu"
    },
    {
        "Pinyin": "10th terrestrial branch; a wine vessel"
    },
    {
        "Character": "刍",
        "Pinyin": "chú"
    },
    {
        "Pinyin": "mow, cut grass; hay, fodder"
    },
    {
        "Character": "谙",
        "Pinyin": "ān"
    },
    {
        "Pinyin": "versed in, fully acquainted with"
    },
    {
        "Character": "虱",
        "Pinyin": "shī"
    },
    {
        "Pinyin": "louse; bug; parasite"
    },
    {
        "Character": "坷",
        "Pinyin": "kě"
    },
    {
        "Pinyin": "clod of earth, lump of soil"
    },
    {
        "Character": "笆",
        "Pinyin": "bā"
    },
    {
        "Pinyin": "bamboo fence"
    },
    {
        "Character": "竽",
        "Pinyin": "yú"
    },
    {
        "Pinyin": "ancient woodwind instrument"
    },
    {
        "Character": "梖",
        "Pinyin": "bèi"
    },
    {
        "Pinyin": "a palm-tree"
    },
    {
        "Character": "賏",
        "Pinyin": "yìng"
    },
    {
        "Pinyin": "pearls or shells strung together"
    },
    {
        "Character": "闺",
        "Pinyin": "guī"
    },
    {
        "Pinyin": "small entrance; women's quarters"
    },
    {
        "Character": "浙",
        "Pinyin": "zhè"
    },
    {
        "Pinyin": "Zhejiang province; river"
    },
    {
        "Character": "疙",
        "Pinyin": "gē"
    },
    {
        "Pinyin": "pimple, sore, boil, wart, pustule"
    },
    {
        "Character": "蓁",
        "Pinyin": "zhēn"
    },
    {
        "Pinyin": "abundant, luxuriant vegetation"
    },
    {
        "Character": "烷",
        "Pinyin": "wán"
    },
    {
        "Pinyin": "alkane"
    },
    {
        "Character": "喈",
        "Pinyin": "jiē"
    },
    {
        "Pinyin": "music; melody"
    },
    {
        "Character": "跩",
        "Pinyin": "zhuǎi"
    },
    {
        "Pinyin": "to waddle, to limp"
    },
    {
        "Character": "酣",
        "Pinyin": "hān"
    },
    {
        "Pinyin": "enjoy intoxicants"
    },
    {
        "Character": "卍",
        "Pinyin": "wàn"
    },
    {
        "Pinyin": "swastika fourth of auspicious"
    },
    {
        "Character": "遏",
        "Pinyin": "è"
    },
    {
        "Pinyin": "stop, suppress, curb, check; a bar"
    },
    {
        "Character": "亘",
        "Pinyin": "gèn"
    },
    {
        "Pinyin": "extend across, through; from"
    },
    {
        "Character": "赑",
        "Pinyin": "bì"
    },
    {
        "Pinyin": "strong"
    },
    {
        "Character": "万",
        "Pinyin": "wàn"
    },
    {
        "Pinyin": "ten thousand; innumerable"
    },
    {
        "Character": "掐",
        "Pinyin": "qiā"
    },
    {
        "Pinyin": "hold; gather with hand; choke"
    },
    {
        "Character": "蛹",
        "Pinyin": "yǒng"
    },
    {
        "Pinyin": "chrysalis, larva"
    },
    {
        "Character": "骥",
        "Pinyin": "jì"
    },
    {
        "Pinyin": "thoroughbred horse; refined and"
    },
    {
        "Character": "樊",
        "Pinyin": "fán"
    },
    {
        "Pinyin": "a railing; a fence an enclosed place"
    },
    {
        "Character": "雱",
        "Pinyin": "páng"
    },
    {
        "Pinyin": "snowing heavily"
    },
    {
        "Character": "戾",
        "Pinyin": "lì"
    },
    {
        "Pinyin": "perverse, recalcitrant, rebellious"
    },
    {
        "Character": "别",
        "Pinyin": "bié"
    },
    {
        "Pinyin": "separate, other; do not"
    },
    {
        "Character": "匮",
        "Pinyin": "guì"
    },
    {
        "Pinyin": "to lack"
    },
    {
        "Character": "崛",
        "Pinyin": "jué"
    },
    {
        "Pinyin": "towering, eminent; rise abruptly"
    },
    {
        "Character": "咨",
        "Pinyin": "zī"
    },
    {
        "Pinyin": "inquire, consult, discuss; plan"
    },
    {
        "Character": "湃",
        "Pinyin": "pài"
    },
    {
        "Pinyin": "sound of waves; turbulent"
    },
    {
        "Character": "账",
        "Pinyin": "zhàng"
    },
    {
        "Pinyin": "accounts; bill, debt; credit"
    },
    {
        "Character": "粟",
        "Pinyin": "sù"
    },
    {
        "Pinyin": "unhusked millet; grain"
    },
    {
        "Character": "谯",
        "Pinyin": "qiáo"
    },
    {
        "Pinyin": "tower; surname"
    },
    {
        "Character": "骖",
        "Pinyin": "cān"
    },
    {
        "Pinyin": "two outside ones in three horse"
    },
    {
        "Character": "焜",
        "Pinyin": "kūn"
    },
    {
        "Pinyin": "fire, flames; bright, shining"
    },
    {
        "Character": "溅",
        "Pinyin": "jiàn"
    },
    {
        "Pinyin": "sprinkle, spray; spill, splash"
    },
    {
        "Character": "漳",
        "Pinyin": "zhāng"
    },
    {
        "Pinyin": "name of a river in Henan"
    },
    {
        "Character": "欸",
        "Pinyin": "ǎi"
    },
    {
        "Pinyin": "sighs; an exclamatory sound"
    },
    {
        "Character": "葆",
        "Pinyin": "bǎo"
    },
    {
        "Pinyin": "reserve, preserve; conceal"
    },
    {
        "Character": "瘩",
        "Pinyin": "dā"
    },
    {
        "Pinyin": "pimples"
    },
    {
        "Character": "剷",
        "Pinyin": "chǎn"
    },
    {
        "Pinyin": "to level off, cut off, pare down, raze"
    },
    {
        "Character": "恙",
        "Pinyin": "yàng"
    },
    {
        "Pinyin": "illness, sickness; indisposition"
    },
    {
        "Character": "陞",
        "Pinyin": "shēng"
    },
    {
        "Pinyin": "promote, rise, ascend"
    },
    {
        "Character": "榻",
        "Pinyin": "tà"
    },
    {
        "Pinyin": "cot, couch, bed"
    },
    {
        "Character": "潞",
        "Pinyin": "lù"
    },
    {
        "Pinyin": "river in northern china"
    },
    {
        "Character": "哞",
        "Pinyin": "mōu"
    },
    {
        "Character": "锤",
        "Pinyin": "chuí"
    },
    {
        "Pinyin": "balance weight on scale; hammer"
    },
    {
        "Character": "琢",
        "Pinyin": "zhuó"
    },
    {
        "Pinyin": "polish jade; cut jade"
    },
    {
        "Character": "簷",
        "Pinyin": "yán"
    },
    {
        "Pinyin": "eaves of house; brim"
    },
    {
        "Character": "仆",
        "Pinyin": "pú"
    },
    {
        "Pinyin": "slave, servant, I"
    },
    {
        "Character": "厘",
        "Pinyin": "lí"
    },
    {
        "Pinyin": "manage, control; 1/1000 of a foot"
    },
    {
        "Character": "篷",
        "Pinyin": "péng"
    },
    {
        "Pinyin": "awning, covering; sail; boat"
    },
    {
        "Character": "揆",
        "Pinyin": "kuí"
    },
    {
        "Pinyin": "prime minister; to guess, estimate"
    },
    {
        "Character": "遽",
        "Pinyin": "jù"
    },
    {
        "Pinyin": "suddenly, unexpectedly; at once"
    },
    {
        "Character": "峘",
        "Pinyin": "hū"
    },
    {
        "Character": "圃",
        "Pinyin": "pǔ"
    },
    {
        "Pinyin": "garden, cultivated field"
    },
    {
        "Character": "町",
        "Pinyin": "tǐng"
    },
    {
        "Pinyin": "raised path between fields"
    },
    {
        "Character": "馊",
        "Pinyin": "sōu"
    },
    {
        "Pinyin": "spoiled, rotten, stale, rancid"
    },
    {
        "Character": "潢",
        "Pinyin": "huáng"
    },
    {
        "Pinyin": "expanse of water, lake, pond"
    },
    {
        "Character": "岖",
        "Pinyin": "qū"
    },
    {
        "Pinyin": "steep, sheer; rugged, rough"
    },
    {
        "Character": "蟆",
        "Pinyin": "má"
    },
    {
        "Pinyin": "frog, toad"
    },
    {
        "Character": "嚥",
        "Pinyin": "yàn"
    },
    {
        "Pinyin": "swallow, gulp"
    },
    {
        "Character": "怂",
        "Pinyin": "sǒng"
    },
    {
        "Pinyin": "to alarm; to instigate, arouse, incite"
    },
    {
        "Character": "琬",
        "Pinyin": "wǎn"
    },
    {
        "Pinyin": "the virtue of a gentleman; jade"
    },
    {
        "Character": "镶",
        "Pinyin": "xiāng"
    },
    {
        "Pinyin": "insert, inlay, set, mount; fill"
    },
    {
        "Character": "侄",
        "Pinyin": "zhí"
    },
    {
        "Pinyin": "nephew"
    },
    {
        "Character": "庵",
        "Pinyin": "ān"
    },
    {
        "Pinyin": "Buddhist monastery or nunnery"
    },
    {
        "Character": "瞑",
        "Pinyin": "míng"
    },
    {
        "Pinyin": "close eyes"
    },
    {
        "Character": "赂",
        "Pinyin": "lù"
    },
    {
        "Pinyin": "bribe; give present"
    },
    {
        "Character": "澹",
        "Pinyin": "dàn"
    },
    {
        "Pinyin": "calm, quiet, tranquil"
    },
    {
        "Character": "杵",
        "Pinyin": "chǔ"
    },
    {
        "Pinyin": "pestle; baton used beat clothes"
    },
    {
        "Character": "苯",
        "Pinyin": "běn"
    },
    {
        "Pinyin": "benzene; luxuriant"
    },
    {
        "Character": "劭",
        "Pinyin": "shào"
    },
    {
        "Pinyin": "encourage; to excel; excellent"
    },
    {
        "Character": "忡",
        "Pinyin": "chōng"
    },
    {
        "Pinyin": "a sad, uneasy countenance"
    },
    {
        "Character": "枣",
        "Pinyin": "zǎo"
    },
    {
        "Pinyin": "date tree; dates, jujubes; surname"
    },
    {
        "Character": "佗",
        "Pinyin": "tuō"
    },
    {
        "Pinyin": "other, he; surname; a load"
    },
    {
        "Character": "掺",
        "Pinyin": "xiān"
    },
    {
        "Pinyin": "a delicate hand; mix, blend, adulterate"
    },
    {
        "Character": "捅",
        "Pinyin": "tǒng"
    },
    {
        "Pinyin": "jab"
    },
    {
        "Character": "迩",
        "Pinyin": "ěr"
    },
    {
        "Pinyin": "be near, be close; recently"
    },
    {
        "Character": "衿",
        "Pinyin": "jīn"
    },
    {
        "Pinyin": "collar or lapel of garment"
    },
    {
        "Character": "饕",
        "Pinyin": "tāo"
    },
    {
        "Pinyin": "gluttonous, greedy, covetous"
    },
    {
        "Character": "皎",
        "Pinyin": "jiǎo"
    },
    {
        "Pinyin": "white; bright, brilliant; clear"
    },
    {
        "Character": "娓",
        "Pinyin": "wěi"
    },
    {
        "Pinyin": "comply; complying, agreeable"
    },
    {
        "Character": "镉",
        "Pinyin": "gé"
    },
    {
        "Pinyin": "cadmium"
    },
    {
        "Character": "糯",
        "Pinyin": "nuò"
    },
    {
        "Pinyin": "glutinous rice; glutinous, sticky"
    },
    {
        "Character": "垠",
        "Pinyin": "yín"
    },
    {
        "Pinyin": "boundary, bank of stream or river"
    },
    {
        "Character": "潺",
        "Pinyin": "chán"
    },
    {
        "Pinyin": "sound of flowing water"
    },
    {
        "Character": "佣",
        "Pinyin": "yōng"
    },
    {
        "Pinyin": "hire, employ, charter; servant"
    },
    {
        "Character": "柿",
        "Pinyin": "shì"
    },
    {
        "Pinyin": "persimmon"
    },
    {
        "Character": "绸",
        "Pinyin": "chóu"
    },
    {
        "Pinyin": "silk cloth, satin damask"
    },
    {
        "Character": "庠",
        "Pinyin": "xiáng"
    },
    {
        "Pinyin": "village school; teach"
    },
    {
        "Character": "濂",
        "Pinyin": "lián"
    },
    {
        "Pinyin": "a waterfall; a river in Hunan"
    },
    {
        "Character": "逑",
        "Pinyin": "qiú"
    },
    {
        "Pinyin": "collect, unite; match, pair"
    },
    {
        "Character": "狈",
        "Pinyin": "bèi"
    },
    {
        "Pinyin": "a legendary animal with short forelegs which rode a wolf"
    },
    {
        "Character": "踝",
        "Pinyin": "huái"
    },
    {
        "Pinyin": "ankle"
    },
    {
        "Character": "鲶",
        "Pinyin": "nián"
    },
    {
        "Pinyin": "sheat"
    },
    {
        "Character": "傜",
        "Pinyin": "yáo"
    },
    {
        "Pinyin": "a minority tribe"
    },
    {
        "Character": "叱",
        "Pinyin": "chì"
    },
    {
        "Pinyin": "scold, shout at, bawl out"
    },
    {
        "Character": "缇",
        "Pinyin": "tí"
    },
    {
        "Pinyin": "reddish color, red, brown"
    },
    {
        "Character": "懵",
        "Pinyin": "méng"
    },
    {
        "Pinyin": "stupid, ignorant, dull"
    },
    {
        "Character": "椭",
        "Pinyin": "tuǒ"
    },
    {
        "Pinyin": "oval-shaped, elliptical, tubular"
    },
    {
        "Character": "贻",
        "Pinyin": "yí"
    },
    {
        "Pinyin": "give to, hand down, bequeath"
    },
    {
        "Character": "猥",
        "Pinyin": "wěi"
    },
    {
        "Pinyin": "vulgar, low, cheap; wanton; obscene"
    },
    {
        "Character": "哄",
        "Pinyin": "hōng"
    },
    {
        "Pinyin": "coax; beguile, cheat, deceive"
    },
    {
        "Character": "咁",
        "Pinyin": "gem4"
    },
    {
        "Pinyin": "so (Cantonese)"
    },
    {
        "Character": "粱",
        "Pinyin": "liáng"
    },
    {
        "Pinyin": "better varieties of millet"
    },
    {
        "Character": "迭",
        "Pinyin": "dié"
    },
    {
        "Pinyin": "repeatedly, frequently"
    },
    {
        "Character": "邰",
        "Pinyin": "tái"
    },
    {
        "Pinyin": "surname; state in modern Shanxi"
    },
    {
        "Character": "悚",
        "Pinyin": "sǒng"
    },
    {
        "Pinyin": "afraid, scared, frightened"
    },
    {
        "Character": "榆",
        "Pinyin": "yú"
    },
    {
        "Pinyin": "elm tree"
    },
    {
        "Character": "脓",
        "Pinyin": "nóng"
    },
    {
        "Pinyin": "pus"
    },
    {
        "Character": "冇",
        "Pinyin": "mǎo"
    },
    {
        "Pinyin": "(Cant.) have not"
    },
    {
        "Character": "寨",
        "Pinyin": "zhài"
    },
    {
        "Pinyin": "stockade, stronghold, outpost; brothel"
    },
    {
        "Character": "镁",
        "Pinyin": "měi"
    },
    {
        "Pinyin": "magnesium"
    },
    {
        "Character": "摒",
        "Pinyin": "bìng"
    },
    {
        "Pinyin": "expel, cast off; arrange"
    },
    {
        "Character": "徕",
        "Pinyin": "lái"
    },
    {
        "Pinyin": "induce, encourage to come"
    },
    {
        "Character": "嗦",
        "Pinyin": "suō"
    },
    {
        "Pinyin": "suck"
    },
    {
        "Character": "烜",
        "Pinyin": "xuǎn"
    },
    {
        "Pinyin": "light of the sun; to dry in the sun"
    },
    {
        "Character": "萼",
        "Pinyin": "è"
    },
    {
        "Pinyin": "the stem and calyx of a flower; a younger brother"
    },
    {
        "Character": "壬",
        "Pinyin": "rén"
    },
    {
        "Pinyin": "9th heavenly stem"
    },
    {
        "Character": "诧",
        "Pinyin": "chà"
    },
    {
        "Pinyin": "to brag; exaggerated; to wonder at"
    },
    {
        "Character": "碇",
        "Pinyin": "dìng"
    },
    {
        "Pinyin": "anchor"
    },
    {
        "Character": "镳",
        "Pinyin": "biāo"
    },
    {
        "Pinyin": "bit, bridle; ride"
    },
    {
        "Character": "锚",
        "Pinyin": "máo"
    },
    {
        "Pinyin": "anchor"
    },
    {
        "Character": "迥",
        "Pinyin": "jiǒng"
    },
    {
        "Pinyin": "distant, far; separated; different"
    },
    {
        "Character": "孚",
        "Pinyin": "fú"
    },
    {
        "Pinyin": "brood over eggs; have confidence"
    },
    {
        "Character": "陇",
        "Pinyin": "lǒng"
    },
    {
        "Pinyin": "mountain located between Shanxi"
    },
    {
        "Character": "豺",
        "Pinyin": "chái"
    },
    {
        "Pinyin": "wolf; cruel, wicked, mean"
    },
    {
        "Character": "悖",
        "Pinyin": "bèi"
    },
    {
        "Pinyin": "be contradictory to, go counter"
    },
    {
        "Character": "搥",
        "Pinyin": "chuí"
    },
    {
        "Pinyin": "beat, pound, strike, throw; shampoo"
    },
    {
        "Character": "钛",
        "Pinyin": "tài"
    },
    {
        "Pinyin": "titanium"
    },
    {
        "Character": "肄",
        "Pinyin": "yì"
    },
    {
        "Pinyin": "learn, practice, study; toil"
    },
    {
        "Character": "脐",
        "Pinyin": "qí"
    },
    {
        "Pinyin": "abdominal area of crab; navel"
    },
    {
        "Character": "唢",
        "Pinyin": "suǒ"
    },
    {
        "Pinyin": "flute-like musical instrument"
    },
    {
        "Character": "诙",
        "Pinyin": "huī"
    },
    {
        "Pinyin": "tease, joke with; ridicule, mock"
    },
    {
        "Character": "拎",
        "Pinyin": "līng"
    },
    {
        "Pinyin": "to haul; to lift; to take"
    },
    {
        "Character": "戎",
        "Pinyin": "róng"
    },
    {
        "Pinyin": "arms, armaments; military affair"
    },
    {
        "Character": "崚",
        "Pinyin": "léng"
    },
    {
        "Pinyin": "hilly, steep, rugged"
    },
    {
        "Character": "喳",
        "Pinyin": "zhā"
    },
    {
        "Pinyin": "whispering"
    },
    {
        "Character": "鳕",
        "Pinyin": "xuě"
    },
    {
        "Pinyin": "codfish"
    },
    {
        "Character": "嗣",
        "Pinyin": "sì"
    },
    {
        "Pinyin": "to connect, inherit; descendants, heirs"
    },
    {
        "Character": "砥",
        "Pinyin": "dǐ"
    },
    {
        "Pinyin": "a whetstone; to polish"
    },
    {
        "Character": "枋",
        "Pinyin": "fāng"
    },
    {
        "Pinyin": "sandalwood; tree used as timber"
    },
    {
        "Character": "沽",
        "Pinyin": "gū"
    },
    {
        "Pinyin": "buy and sell; inferior in quality"
    },
    {
        "Character": "渥",
        "Pinyin": "wò"
    },
    {
        "Pinyin": "moisten, soak; great, deep; dye; to enrich"
    },
    {
        "Character": "黝",
        "Pinyin": "yǒu"
    },
    {
        "Pinyin": "black"
    },
    {
        "Character": "鱿",
        "Pinyin": "yóu"
    },
    {
        "Pinyin": "cuttlefish"
    },
    {
        "Character": "殇",
        "Pinyin": "shāng"
    },
    {
        "Pinyin": "die young; national mourning"
    },
    {
        "Character": "蔫",
        "Pinyin": "yān"
    },
    {
        "Pinyin": "withered, faded, decayed; calm"
    },
    {
        "Character": "爻",
        "Pinyin": "yáo"
    },
    {
        "Pinyin": "diagrams for divination"
    },
    {
        "Character": "籁",
        "Pinyin": "lài"
    },
    {
        "Pinyin": "bamboo flute; pipe; various sound"
    },
    {
        "Character": "孜",
        "Pinyin": "zī"
    },
    {
        "Pinyin": "be as diligent as possible"
    },
    {
        "Character": "恿",
        "Pinyin": "yǒng"
    },
    {
        "Pinyin": "instigate, incite; to alarm"
    },
    {
        "Character": "衙",
        "Pinyin": "yá"
    },
    {
        "Pinyin": "public office; official residence"
    },
    {
        "Character": "痣",
        "Pinyin": "zhì"
    },
    {
        "Pinyin": "spots, moles; birthmark"
    },
    {
        "Character": "骧",
        "Pinyin": "xiāng"
    },
    {
        "Pinyin": "gallop about with head uplifted"
    },
    {
        "Character": "攒",
        "Pinyin": "zǎn"
    },
    {
        "Pinyin": "save, hoard"
    },
    {
        "Character": "鎗",
        "Pinyin": "qiāng"
    },
    {
        "Pinyin": "rifle, small arms, hand gun"
    },
    {
        "Character": "闸",
        "Pinyin": "zhá"
    },
    {
        "Pinyin": "sluice; flood gate, canal lock"
    },
    {
        "Character": "孺",
        "Pinyin": "rú"
    },
    {
        "Pinyin": "child; blood relation; affection"
    },
    {
        "Character": "洄",
        "Pinyin": "huí"
    },
    {
        "Pinyin": "a back-water; an eddy a whirlpool"
    },
    {
        "Character": "昊",
        "Pinyin": "hào"
    },
    {
        "Pinyin": "summer time; sky; heaven"
    },
    {
        "Character": "踼",
        "Pinyin": "táng"
    },
    {
        "Pinyin": "to fall flat; to fall on the face"
    },
    {
        "Character": "沃",
        "Pinyin": "wò"
    },
    {
        "Pinyin": "water, irrigate; fertile, rich"
    },
    {
        "Character": "妍",
        "Pinyin": "yán"
    },
    {
        "Pinyin": "beautiful, handsome; seductive"
    },
    {
        "Character": "拽",
        "Pinyin": "zhuāi"
    },
    {
        "Pinyin": "drag, tow; throw; twist"
    },
    {
        "Character": "牯",
        "Pinyin": "gǔ"
    },
    {
        "Pinyin": "cow; bull; ox"
    },
    {
        "Character": "逵",
        "Pinyin": "kuí"
    },
    {
        "Pinyin": "thoroughfare, crossroads"
    },
    {
        "Character": "泯",
        "Pinyin": "mǐn"
    },
    {
        "Pinyin": "destroy, eliminate; perish"
    },
    {
        "Character": "龌",
        "Pinyin": "wò"
    },
    {
        "Pinyin": "narrow, small; dirty"
    },
    {
        "Character": "銮",
        "Pinyin": "luán"
    },
    {
        "Pinyin": "bells hung on horse; bells hung"
    },
    {
        "Character": "镛",
        "Pinyin": "yōng"
    },
    {
        "Pinyin": "a large bell used as a musical instrument"
    },
    {
        "Character": "雉",
        "Pinyin": "zhì"
    },
    {
        "Pinyin": "pheasant; crenellated wall"
    },
    {
        "Character": "梗",
        "Pinyin": "gěng"
    },
    {
        "Pinyin": "stem of flower, branch of plant"
    },
    {
        "Character": "麾",
        "Pinyin": "huī"
    },
    {
        "Pinyin": "a pennant, flag, banner; to signal to"
    },
    {
        "Character": "胤",
        "Pinyin": "yìn"
    },
    {
        "Pinyin": "heir, successor; progeny, posterity"
    },
    {
        "Character": "馥",
        "Pinyin": "fù"
    },
    {
        "Pinyin": "fragrance, scent, aroma"
    },
    {
        "Character": "髦",
        "Pinyin": "máo"
    },
    {
        "Pinyin": "flowing hair of young child"
    },
    {
        "Character": "璨",
        "Pinyin": "càn"
    },
    {
        "Pinyin": "gems; luster of gems; lustrous"
    },
    {
        "Character": "浣",
        "Pinyin": "wǎn"
    },
    {
        "Pinyin": "to wash, to rinse"
    },
    {
        "Character": "鼐",
        "Pinyin": "nài"
    },
    {
        "Pinyin": "incense tripod"
    },
    {
        "Character": "呗",
        "Pinyin": "bài"
    },
    {
        "Pinyin": "final particle of assertion pathaka"
    },
    {
        "Character": "腑",
        "Pinyin": "fǔ"
    },
    {
        "Pinyin": "bowels, entrails, internal organs"
    },
    {
        "Character": "吁",
        "Pinyin": "xū"
    },
    {
        "Pinyin": "interjection 'Alas!'; to sigh"
    },
    {
        "Character": "牒",
        "Pinyin": "dié"
    },
    {
        "Pinyin": "documents, records; dispatch"
    },
    {
        "Character": "狒",
        "Pinyin": "fèi"
    },
    {
        "Pinyin": "baboon"
    },
    {
        "Character": "痰",
        "Pinyin": "tán"
    },
    {
        "Pinyin": "phlegm, mucus, spittle"
    },
    {
        "Character": "剌",
        "Pinyin": "là"
    },
    {
        "Pinyin": "slash, cut in two; contradict"
    },
    {
        "Character": "剽",
        "Pinyin": "piào"
    },
    {
        "Pinyin": "rob, plunder; slice off; fast"
    },
    {
        "Character": "篡",
        "Pinyin": "cuàn"
    },
    {
        "Pinyin": "usurp"
    },
    {
        "Character": "沬",
        "Pinyin": "mèi"
    },
    {
        "Pinyin": "dusk; Mei river; Zhou dynasty place-name; (Cant.) to go underwater, to dive"
    },
    {
        "Character": "驭",
        "Pinyin": "yù"
    },
    {
        "Pinyin": "drive, ride; manage, control"
    },
    {
        "Character": "辇",
        "Pinyin": "niǎn"
    },
    {
        "Pinyin": "a hand-cart; to transport by carriage"
    },
    {
        "Character": "贮",
        "Pinyin": "zhǔ"
    },
    {
        "Pinyin": "store, stockpile, hoard"
    },
    {
        "Character": "妲",
        "Pinyin": "dá"
    },
    {
        "Pinyin": "concubine of last ruler of the Shang dynasty"
    },
    {
        "Character": "盥",
        "Pinyin": "guàn"
    },
    {
        "Pinyin": "wash"
    },
    {
        "Character": "莞",
        "Pinyin": "wǎn"
    },
    {
        "Pinyin": "smiling; a kind of aquatic herb"
    },
    {
        "Character": "阖",
        "Pinyin": "hé"
    },
    {
        "Pinyin": "close; whole, entire; all; leaf"
    },
    {
        "Character": "筏",
        "Pinyin": "fá"
    },
    {
        "Pinyin": "raft"
    },
    {
        "Character": "炖",
        "Pinyin": "dùn"
    },
    {
        "Pinyin": "heat with fire; stew"
    },
    {
        "Character": "纭",
        "Pinyin": "yún"
    },
    {
        "Pinyin": "confused, in disorder; numerous"
    },
    {
        "Character": "雩",
        "Pinyin": "yú"
    },
    {
        "Pinyin": "offer sacrifice for rain"
    },
    {
        "Character": "涧",
        "Pinyin": "jiàn"
    },
    {
        "Pinyin": "brook, mountain stream"
    },
    {
        "Character": "筐",
        "Pinyin": "kuāng"
    },
    {
        "Pinyin": "bamboo basket or chest"
    },
    {
        "Character": "藕",
        "Pinyin": "ǒu"
    },
    {
        "Pinyin": "lotus root"
    },
    {
        "Character": "垓",
        "Pinyin": "gāi"
    },
    {
        "Pinyin": "border, boundary, frontier"
    },
    {
        "Character": "垛",
        "Pinyin": "duǒ"
    },
    {
        "Pinyin": "heap, pile; pile up, heap up"
    },
    {
        "Character": "齁",
        "Pinyin": "hóu"
    },
    {
        "Pinyin": "snore loudly; very, extremely"
    },
    {
        "Character": "鐽",
        "Pinyin": "dá"
    },
    {
        "Character": "馅",
        "Pinyin": "xiàn"
    },
    {
        "Pinyin": "pastry filling, stuffing"
    },
    {
        "Character": "芮",
        "Pinyin": "ruì"
    },
    {
        "Pinyin": "tiny, small; water's edge"
    },
    {
        "Character": "菠",
        "Pinyin": "bō"
    },
    {
        "Pinyin": "spinach and similar greens"
    },
    {
        "Character": "绥",
        "Pinyin": "suī"
    },
    {
        "Pinyin": "soothe, appease, pacify; carriage harness"
    },
    {
        "Character": "躄",
        "Pinyin": "bì"
    },
    {
        "Pinyin": "cripple, lame"
    },
    {
        "Character": "谆",
        "Pinyin": "zhūn"
    },
    {
        "Pinyin": "patient, earnest; earnestly"
    },
    {
        "Character": "琅",
        "Pinyin": "láng"
    },
    {
        "Pinyin": "a variety of white carnelian; pure"
    },
    {
        "Character": "汨",
        "Pinyin": "mì"
    },
    {
        "Pinyin": "Mi(luo) river in Hunan province where Qu Yuan drowned himself; to sink; used (erroneously) for U+6C69 汩"
    },
    {
        "Character": "鲑",
        "Pinyin": "guī"
    },
    {
        "Pinyin": "salmon; spheroides vermicularis"
    },
    {
        "Character": "啜",
        "Pinyin": "chuò"
    },
    {
        "Pinyin": "sip, suck up; sob, weep"
    },
    {
        "Character": "晤",
        "Pinyin": "wù"
    },
    {
        "Pinyin": "have interview with; meet"
    },
    {
        "Character": "惬",
        "Pinyin": "qiè"
    },
    {
        "Pinyin": "be satisfied, be comfortable"
    },
    {
        "Character": "苞",
        "Pinyin": "bāo"
    },
    {
        "Pinyin": "a variety of rush; firm, enduring; to burst forth"
    },
    {
        "Character": "毗",
        "Pinyin": "pí"
    },
    {
        "Pinyin": "help, assist; connect, adjoin"
    },
    {
        "Character": "倏",
        "Pinyin": "shū"
    },
    {
        "Pinyin": "hastily, suddenly, abruptly"
    },
    {
        "Character": "哮",
        "Pinyin": "xiāo"
    },
    {
        "Pinyin": "cough; pant; roar"
    },
    {
        "Character": "伎",
        "Pinyin": "jì"
    },
    {
        "Pinyin": "talent, skill, ability"
    },
    {
        "Character": "杞",
        "Pinyin": "qǐ"
    },
    {
        "Pinyin": "willow; medlar tree; a small feudal state (Qi)"
    },
    {
        "Character": "歛",
        "Pinyin": "liàn"
    },
    {
        "Pinyin": "draw back, fold back; collect"
    },
    {
        "Character": "荃",
        "Pinyin": "quán"
    },
    {
        "Pinyin": "aromatic herb; fine cloth"
    },
    {
        "Character": "呷",
        "Pinyin": "xiā"
    },
    {
        "Pinyin": "suck, swallow, drink"
    },
    {
        "Character": "麴",
        "Pinyin": "qú"
    },
    {
        "Pinyin": "yeast, leaven; surname"
    },
    {
        "Character": "糜",
        "Pinyin": "mí"
    },
    {
        "Pinyin": "rice gruel, congee; mashed"
    },
    {
        "Character": "旳",
        "Pinyin": "dì"
    },
    {
        "Character": "绯",
        "Pinyin": "fēi"
    },
    {
        "Pinyin": "scarlet, dark red, crimson; purpl"
    },
    {
        "Character": "饯",
        "Pinyin": "jiàn"
    },
    {
        "Pinyin": "farewell party; see off, send off"
    },
    {
        "Character": "颦",
        "Pinyin": "pín"
    },
    {
        "Pinyin": "frown, knit brows; with knitted"
    },
    {
        "Character": "煇",
        "Pinyin": "huī"
    },
    {
        "Pinyin": "weld, solder"
    },
    {
        "Character": "荀",
        "Pinyin": "xún"
    },
    {
        "Pinyin": "surname; ancient state; plant"
    },
    {
        "Character": "悱",
        "Pinyin": "fěi"
    },
    {
        "Pinyin": "to be desirous of speaking"
    },
    {
        "Character": "鸾",
        "Pinyin": "luán"
    },
    {
        "Pinyin": "fabulous bird"
    },
    {
        "Character": "亩",
        "Pinyin": "mǔ"
    },
    {
        "Pinyin": "Chinese land measure; fields"
    },
    {
        "Character": "龊",
        "Pinyin": "chuò"
    },
    {
        "Pinyin": "narrow, small; dirty"
    },
    {
        "Character": "仞",
        "Pinyin": "rèn"
    },
    {
        "Pinyin": "ancient unit of measure (8 feet); 'fathom'"
    },
    {
        "Character": "愫",
        "Pinyin": "sù"
    },
    {
        "Pinyin": "guileless, sincere, honest"
    },
    {
        "Character": "灶",
        "Pinyin": "zào"
    },
    {
        "Pinyin": "furnace; kitchen range"
    },
    {
        "Character": "栩",
        "Pinyin": "xǔ"
    },
    {
        "Pinyin": "species of oak; be glad, be pleased"
    },
    {
        "Character": "浬",
        "Pinyin": "lǐ"
    },
    {
        "Pinyin": "nautical mile"
    },
    {
        "Character": "腼",
        "Pinyin": "tiǎn"
    },
    {
        "Pinyin": "timid, shy, bashful"
    },
    {
        "Character": "坍",
        "Pinyin": "tān"
    },
    {
        "Pinyin": "collapse; landslide"
    },
    {
        "Character": "嗖",
        "Pinyin": "sōu"
    },
    {
        "Character": "冽",
        "Pinyin": "liè"
    },
    {
        "Pinyin": "cold and raw; pure, clear"
    },
    {
        "Character": "偌",
        "Pinyin": "ruò"
    },
    {
        "Pinyin": "thus, so, like, such"
    },
    {
        "Character": "巿",
        "Pinyin": "fú"
    },
    {
        "Pinyin": "revolve, make circuit, turn"
    },
    {
        "Character": "蒨",
        "Pinyin": "qiàn"
    },
    {
        "Pinyin": "lush vegetation, luxuriant growth"
    },
    {
        "Character": "隋",
        "Pinyin": "suí"
    },
    {
        "Pinyin": "Sui dynasty; surname"
    },
    {
        "Character": "劾",
        "Pinyin": "hé"
    },
    {
        "Pinyin": "examine into, impeach, charge"
    },
    {
        "Character": "裱",
        "Pinyin": "biǎo"
    },
    {
        "Pinyin": "to mount maps or scrolls to paste"
    },
    {
        "Character": "蜃",
        "Pinyin": "shèn"
    },
    {
        "Pinyin": "marine monster which can change its shape; water spouts; clams"
    },
    {
        "Character": "蚌",
        "Pinyin": "bàng"
    },
    {
        "Pinyin": "oysters, mussels; mother-of-pearl"
    },
    {
        "Character": "吆",
        "Pinyin": "yāo"
    },
    {
        "Pinyin": "bawl, yell, shout, cry out"
    },
    {
        "Character": "毘",
        "Pinyin": "pí"
    },
    {
        "Pinyin": "help, assist; connect, adjoin"
    },
    {
        "Character": "鳍",
        "Pinyin": "qí"
    },
    {
        "Pinyin": "fin"
    },
    {
        "Character": "钏",
        "Pinyin": "chuàn"
    },
    {
        "Pinyin": "bracelet, armlet"
    },
    {
        "Character": "潦",
        "Pinyin": "liáo"
    },
    {
        "Pinyin": "to flood; a puddle; without care"
    },
    {
        "Character": "钵",
        "Pinyin": "bō"
    },
    {
        "Pinyin": "earthenware basin; alms bowl (Sanskrit paatra)"
    },
    {
        "Character": "嗙",
        "Pinyin": "pǎng"
    },
    {
        "Pinyin": "boast"
    },
    {
        "Character": "龈",
        "Pinyin": "kěn"
    },
    {
        "Pinyin": "gums"
    },
    {
        "Character": "柒",
        "Pinyin": "qī"
    },
    {
        "Pinyin": "number seven"
    },
    {
        "Character": "娼",
        "Pinyin": "chāng"
    },
    {
        "Pinyin": "prostitute, harlot"
    },
    {
        "Character": "脕",
        "Pinyin": "wǎn"
    },
    {
        "Character": "徛",
        "Pinyin": "qì"
    },
    {
        "Pinyin": "to cross over"
    },
    {
        "Character": "倔",
        "Pinyin": "jué"
    },
    {
        "Pinyin": "stubborn, obstinate, intransigent; firm"
    },
    {
        "Character": "唏",
        "Pinyin": "xī"
    },
    {
        "Pinyin": "weep or sob; grieve"
    },
    {
        "Character": "黴",
        "Pinyin": "méi"
    },
    {
        "Pinyin": "mold, mildew; bacteria, fungi"
    },
    {
        "Character": "碾",
        "Pinyin": "niàn"
    },
    {
        "Pinyin": "roller, crush; roll"
    },
    {
        "Character": "瞰",
        "Pinyin": "kàn"
    },
    {
        "Pinyin": "watch, spy; overlook; look down"
    },
    {
        "Character": "蝗",
        "Pinyin": "huáng"
    },
    {
        "Pinyin": "kind of locust"
    },
    {
        "Character": "魇",
        "Pinyin": "yǎn"
    },
    {
        "Pinyin": "nightmare, bad dreams"
    },
    {
        "Character": "譁",
        "Pinyin": "huá"
    },
    {
        "Pinyin": "noise, uproar; clamor, hubbub"
    },
    {
        "Character": "钿",
        "Pinyin": "diàn"
    },
    {
        "Pinyin": "hairpin; gold inlaid work, filigree"
    },
    {
        "Character": "悻",
        "Pinyin": "xìng"
    },
    {
        "Pinyin": "anger, vexation; angry, indignant"
    },
    {
        "Character": "螫",
        "Pinyin": "zhē"
    },
    {
        "Pinyin": "poison; sting; poisonous insect"
    },
    {
        "Character": "唧",
        "Pinyin": "jī"
    },
    {
        "Pinyin": "chirping of insects; pump; (Cant.) a final particle"
    },
    {
        "Character": "觑",
        "Pinyin": "qù"
    },
    {
        "Pinyin": "peep at; watch, spy on"
    },
    {
        "Character": "箩",
        "Pinyin": "luó"
    },
    {
        "Pinyin": "bamboo basket"
    },
    {
        "Character": "窠",
        "Pinyin": "kē"
    },
    {
        "Pinyin": "nest; hole, indention; den"
    },
    {
        "Character": "薏",
        "Pinyin": "yì"
    },
    {
        "Pinyin": "seed of job's tears; lotus seed"
    },
    {
        "Character": "踱",
        "Pinyin": "duò"
    },
    {
        "Pinyin": "stroll, pace, walk slowly"
    },
    {
        "Character": "浯",
        "Pinyin": "wú"
    },
    {
        "Character": "腆",
        "Pinyin": "tiǎn"
    },
    {
        "Pinyin": "prosperous; good; protruding"
    },
    {
        "Character": "烸",
        "Pinyin": "hǎi"
    },
    {
        "Character": "睫",
        "Pinyin": "jié"
    },
    {
        "Pinyin": "eyelashes"
    },
    {
        "Character": "谧",
        "Pinyin": "mì"
    },
    {
        "Pinyin": "calm, quiet, still; cautious"
    },
    {
        "Character": "舫",
        "Pinyin": "fǎng"
    },
    {
        "Pinyin": "fancy boat, yacht"
    },
    {
        "Character": "瘪",
        "Pinyin": "piē"
    },
    {
        "Pinyin": "shrivelled up, dried up; vexed"
    },
    {
        "Character": "晌",
        "Pinyin": "shǎng"
    },
    {
        "Pinyin": "noon, midday; moment; unit land measurement equal to seven mou (U+755D 畝), or the area that can be sown in one day"
    },
    {
        "Character": "埵",
        "Pinyin": "duǒ"
    },
    {
        "Pinyin": "hardened dirt or clay; cluster"
    },
    {
        "Character": "乒",
        "Pinyin": "pīng"
    },
    {
        "Pinyin": "used with pong for ping pong"
    },
    {
        "Character": "刽",
        "Pinyin": "guì"
    },
    {
        "Pinyin": "amputate, cut off"
    },
    {
        "Character": "娉",
        "Pinyin": "pīng"
    },
    {
        "Pinyin": "beautiful, attractive, charming, graceful"
    },
    {
        "Character": "捻",
        "Pinyin": "niǎn"
    },
    {
        "Pinyin": "to twist or nip with the fingers"
    },
    {
        "Character": "谟",
        "Pinyin": "mó"
    },
    {
        "Pinyin": "scheme, plan; plan; be without"
    },
    {
        "Character": "锄",
        "Pinyin": "chú"
    },
    {
        "Pinyin": "hoe; eradicate"
    },
    {
        "Character": "閤",
        "Pinyin": "gé"
    },
    {
        "Pinyin": "small side door; chamber"
    },
    {
        "Character": "屹",
        "Pinyin": "yì"
    },
    {
        "Pinyin": "to rise high; to stand erect"
    },
    {
        "Character": "哽",
        "Pinyin": "gěng"
    },
    {
        "Pinyin": "choke (with grief)"
    },
    {
        "Character": "蜿",
        "Pinyin": "wān"
    },
    {
        "Pinyin": "creep, crawl"
    },
    {
        "Character": "逄",
        "Pinyin": "páng"
    },
    {
        "Pinyin": "a surname"
    },
    {
        "Character": "姗",
        "Pinyin": "shān"
    },
    {
        "Pinyin": "slander; ridicule; proceed slowly"
    },
    {
        "Character": "獗",
        "Pinyin": "jué"
    },
    {
        "Pinyin": "unruly, wild, violent, lawless"
    },
    {
        "Character": "帑",
        "Pinyin": "tǎng"
    },
    {
        "Pinyin": "a treasury; public funds"
    },
    {
        "Character": "蹶",
        "Pinyin": "jué"
    },
    {
        "Pinyin": "stumble, fall down; trample"
    },
    {
        "Character": "桧",
        "Pinyin": "kuài"
    },
    {
        "Pinyin": "Chinese cypress, Chinese juniper"
    },
    {
        "Character": "鼾",
        "Pinyin": "hān"
    },
    {
        "Pinyin": "snore loudly"
    },
    {
        "Character": "陲",
        "Pinyin": "chuí"
    },
    {
        "Pinyin": "frontier, border"
    },
    {
        "Character": "窿",
        "Pinyin": "lóng"
    },
    {
        "Pinyin": "mine shaft; cavity, hole"
    },
    {
        "Character": "箇",
        "Pinyin": "gè"
    },
    {
        "Pinyin": "numerary adjunct, piece; single"
    },
    {
        "Character": "呆",
        "Pinyin": "ái"
    },
    {
        "Pinyin": "dull; dull-minded, simple, stupid"
    },
    {
        "Character": "蝌",
        "Pinyin": "kē"
    },
    {
        "Pinyin": "tadpole"
    },
    {
        "Character": "砺",
        "Pinyin": "lì"
    },
    {
        "Pinyin": "whetstone; sharpen"
    },
    {
        "Character": "蛟",
        "Pinyin": "jiāo"
    },
    {
        "Pinyin": "scaly dragon with four legs"
    },
    {
        "Character": "桢",
        "Pinyin": "zhēn"
    },
    {
        "Pinyin": "hardwood; supports, posts"
    },
    {
        "Character": "匝",
        "Pinyin": "zā"
    },
    {
        "Pinyin": "full circle; encircle"
    },
    {
        "Character": "夯",
        "Pinyin": "hāng"
    },
    {
        "Pinyin": "heavy load, burden; lift up"
    },
    {
        "Character": "乓",
        "Pinyin": "pang"
    },
    {
        "Pinyin": "used with ping for ping pong"
    },
    {
        "Character": "偬",
        "Pinyin": "zǒng"
    },
    {
        "Pinyin": "urgent"
    },
    {
        "Character": "谏",
        "Pinyin": "jiàn"
    },
    {
        "Pinyin": "remonstrate, admonish"
    },
    {
        "Character": "弭",
        "Pinyin": "mǐ"
    },
    {
        "Pinyin": "stop, desist, end, quell"
    },
    {
        "Character": "俸",
        "Pinyin": "fèng"
    },
    {
        "Pinyin": "wages, salary, official emolument"
    },
    {
        "Character": "烨",
        "Pinyin": "yè"
    },
    {
        "Pinyin": "bright, glorious, splendid, flame"
    },
    {
        "Character": "弼",
        "Pinyin": "bì"
    },
    {
        "Pinyin": "aid, assist, help; correct"
    },
    {
        "Character": "磺",
        "Pinyin": "huáng"
    },
    {
        "Pinyin": "sulphur; brimstone"
    },
    {
        "Character": "捆",
        "Pinyin": "kǔn"
    },
    {
        "Pinyin": "tie up; bind, truss up; bundle"
    },
    {
        "Character": "磐",
        "Pinyin": "pán"
    },
    {
        "Pinyin": "large rock, boulder; firm"
    },
    {
        "Character": "荏",
        "Pinyin": "rěn"
    },
    {
        "Pinyin": "beans; soft, pliable; herb"
    },
    {
        "Character": "咤",
        "Pinyin": "zhà"
    },
    {
        "Pinyin": "shout, roar, bellow; scold"
    },
    {
        "Character": "崁",
        "Pinyin": "kǎn"
    },
    {
        "Pinyin": "a place in Taiwan Tainan"
    },
    {
        "Character": "泱",
        "Pinyin": "yāng"
    },
    {
        "Pinyin": "great, expansive; agitated"
    },
    {
        "Character": "谑",
        "Pinyin": "nvè"
    },
    {
        "Pinyin": "jeer"
    },
    {
        "Character": "洼",
        "Pinyin": "wā"
    },
    {
        "Pinyin": "hollow; pit; depression; swamp"
    },
    {
        "Character": "嵌",
        "Pinyin": "qiàn"
    },
    {
        "Pinyin": "inlay, set in; fall into; rugged"
    },
    {
        "Character": "栓",
        "Pinyin": "shuān"
    },
    {
        "Pinyin": "wooden peg, post or stick"
    },
    {
        "Character": "踵",
        "Pinyin": "zhǒng"
    },
    {
        "Pinyin": "heel; follow; visit, call on"
    },
    {
        "Character": "鞦",
        "Pinyin": "qiū"
    },
    {
        "Pinyin": "leather stap; swing"
    },
    {
        "Character": "酯",
        "Pinyin": "zhǐ"
    },
    {
        "Character": "钾",
        "Pinyin": "jiǎ"
    },
    {
        "Pinyin": "potassium kalium"
    },
    {
        "Character": "茸",
        "Pinyin": "róng"
    },
    {
        "Pinyin": "soft, downy; buds, sprouts"
    },
    {
        "Character": "弛",
        "Pinyin": "chí"
    },
    {
        "Pinyin": "loosen, relax, unstring a bow"
    },
    {
        "Character": "药",
        "Pinyin": "yào"
    },
    {
        "Pinyin": "orris root; leaf of the iris; medicine"
    },
    {
        "Character": "萏",
        "Pinyin": "dàn"
    },
    {
        "Character": "滢",
        "Pinyin": "yìng"
    },
    {
        "Pinyin": "clear, pure water; lucid; glossy"
    },
    {
        "Character": "玠",
        "Pinyin": "jiè"
    },
    {
        "Pinyin": "large jade tablet used by officials at court to indicate their ranks"
    },
    {
        "Character": "鹬",
        "Pinyin": "yù"
    },
    {
        "Pinyin": "snipe, kingfisher; Tringa species (various)"
    },
    {
        "Character": "钲",
        "Pinyin": "zhēng"
    },
    {
        "Pinyin": "kind of gong used in ancient times by troops on the march"
    },
    {
        "Character": "跻",
        "Pinyin": "jī"
    },
    {
        "Pinyin": "ascend, go up, rise"
    },
    {
        "Character": "嬷",
        "Pinyin": "mā"
    },
    {
        "Pinyin": "mother"
    },
    {
        "Character": "蚪",
        "Pinyin": "dǒu"
    },
    {
        "Pinyin": "tadpole"
    },
    {
        "Character": "鳅",
        "Pinyin": "qiū"
    },
    {
        "Pinyin": "loach"
    },
    {
        "Character": "燊",
        "Pinyin": "shēn"
    },
    {
        "Pinyin": "luxuriant"
    },
    {
        "Character": "捱",
        "Pinyin": "ái"
    },
    {
        "Pinyin": "put off, procrastinate; endure"
    },
    {
        "Character": "狩",
        "Pinyin": "shòu"
    },
    {
        "Pinyin": "winter hunting; imperial tour"
    },
    {
        "Character": "骼",
        "Pinyin": "gé"
    },
    {
        "Pinyin": "bone; skeleton; corpse"
    },
    {
        "Character": "掬",
        "Pinyin": "jú"
    },
    {
        "Pinyin": "to grasp or hold with both hands"
    },
    {
        "Character": "酝",
        "Pinyin": "yùn"
    },
    {
        "Pinyin": "liquor, spirits, wine; ferment"
    },
    {
        "Character": "祀",
        "Pinyin": "sì"
    },
    {
        "Pinyin": "to sacrifice, worship"
    },
    {
        "Character": "琛",
        "Pinyin": "chēn"
    },
    {
        "Pinyin": "treasure, valuables"
    },
    {
        "Character": "獭",
        "Pinyin": "tà"
    },
    {
        "Pinyin": "otter"
    },
    {
        "Character": "箝",
        "Pinyin": "qián"
    },
    {
        "Pinyin": "tweezers, pliers, tongs, pincers"
    },
    {
        "Character": "菡",
        "Pinyin": "hàn"
    },
    {
        "Pinyin": "buds, lotus buds"
    },
    {
        "Character": "隹",
        "Pinyin": "zhuī"
    },
    {
        "Pinyin": "bird; KangXi radical 172"
    },
    {
        "Character": "邝",
        "Pinyin": "kuàng"
    },
    {
        "Pinyin": "surname"
    },
    {
        "Character": "楔",
        "Pinyin": "xiè"
    },
    {
        "Pinyin": "wedge; gatepost; foreword"
    },
    {
        "Character": "缱",
        "Pinyin": "qiǎn"
    },
    {
        "Pinyin": "attached to, inseparable; entangled"
    },
    {
        "Character": "诒",
        "Pinyin": "yí"
    },
    {
        "Pinyin": "bequeath, pass on to future generations"
    },
    {
        "Character": "婶",
        "Pinyin": "shěn"
    },
    {
        "Pinyin": "wife of father's younger brother"
    },
    {
        "Character": "擘",
        "Pinyin": "bò"
    },
    {
        "Pinyin": "thumb; break, tear open, rip"
    },
    {
        "Character": "愠",
        "Pinyin": "yùn"
    },
    {
        "Pinyin": "angry, indignant, resentful"
    },
    {
        "Character": "釆",
        "Pinyin": "biàn"
    },
    {
        "Pinyin": "distinguish; KangXi radical 165"
    },
    {
        "Character": "稔",
        "Pinyin": "rěn"
    },
    {
        "Pinyin": "ripe grain; harvest; to know, be familiar with"
    },
    {
        "Character": "槭",
        "Pinyin": "cù"
    },
    {
        "Pinyin": "maple"
    },
    {
        "Character": "摃",
        "Pinyin": "káng"
    },
    {
        "Character": "帷",
        "Pinyin": "wéi"
    },
    {
        "Pinyin": "tent; curtain, screen"
    },
    {
        "Character": "黉",
        "Pinyin": "héng"
    },
    {
        "Pinyin": "school"
    },
    {
        "Character": "镰",
        "Pinyin": "lián"
    },
    {
        "Pinyin": "sickle"
    },
    {
        "Character": "鼹",
        "Pinyin": "yǎn"
    },
    {
        "Pinyin": "a kind of insectivorous rodent"
    },
    {
        "Character": "芎",
        "Pinyin": "qiōng"
    },
    {
        "Pinyin": "a kind of herb"
    },
    {
        "Character": "埤",
        "Pinyin": "pí"
    },
    {
        "Pinyin": "add, increase, attach; low fence"
    },
    {
        "Character": "邢",
        "Pinyin": "xíng"
    },
    {
        "Pinyin": "surname; state in today's Hebei"
    },
    {
        "Character": "呓",
        "Pinyin": "yì"
    },
    {
        "Pinyin": "talk in one's sleep, somniloquy"
    },
    {
        "Character": "缥",
        "Pinyin": "piǎo"
    },
    {
        "Pinyin": "light blue silk; dim; misty"
    },
    {
        "Character": "骛",
        "Pinyin": "wù"
    },
    {
        "Pinyin": "gallop; rush about; pursue, run"
    },
    {
        "Character": "铀",
        "Pinyin": "yóu"
    },
    {
        "Pinyin": "uranium"
    },
    {
        "Character": "偃",
        "Pinyin": "yǎn"
    },
    {
        "Pinyin": "cease, lay off, lay down"
    },
    {
        "Character": "闾",
        "Pinyin": "lǘ"
    },
    {
        "Pinyin": "village of twenty-five families"
    },
    {
        "Character": "恫",
        "Pinyin": "tōng"
    },
    {
        "Pinyin": "in pain, sorrowful"
    },
    {
        "Character": "瞿",
        "Pinyin": "qū"
    },
    {
        "Pinyin": "surname"
    },
    {
        "Character": "蟒",
        "Pinyin": "mǎng"
    },
    {
        "Pinyin": "python, boa constrictor"
    },
    {
        "Character": "淦",
        "Pinyin": "gàn"
    },
    {
        "Pinyin": "river in Jiangxi province; water leaking into a boat"
    },
    {
        "Character": "湮",
        "Pinyin": "yīn"
    },
    {
        "Pinyin": "bury, sink, block up; stain"
    },
    {
        "Character": "涤",
        "Pinyin": "dí"
    },
    {
        "Pinyin": "wash, cleanse, purify; sweep"
    },
    {
        "Character": "琥",
        "Pinyin": "hǔ"
    },
    {
        "Pinyin": "jewel in shape of tiger; amber"
    },
    {
        "Character": "轧",
        "Pinyin": "yà"
    },
    {
        "Pinyin": "crush by weight; grind"
    },
    {
        "Character": "槙",
        "Pinyin": "diān"
    },
    {
        "Pinyin": "a twig; an ornamental evergreen"
    },
    {
        "Character": "忝",
        "Pinyin": "tiǎn"
    },
    {
        "Pinyin": "disgraced; ashamed; self-deprecating"
    },
    {
        "Character": "崧",
        "Pinyin": "sōng"
    },
    {
        "Pinyin": "high mountain; lofty, eminent"
    },
    {
        "Character": "诌",
        "Pinyin": "zōu"
    },
    {
        "Pinyin": "play with words, quip; talk nonse"
    },
    {
        "Character": "飒",
        "Pinyin": "sà"
    },
    {
        "Pinyin": "the sound of the wind; bleak; melancholy"
    },
    {
        "Character": "喋",
        "Pinyin": "dié"
    },
    {
        "Pinyin": "nag; chatter, babble, twitter"
    },
    {
        "Character": "舶",
        "Pinyin": "bó"
    },
    {
        "Pinyin": "large, ocean-going vessel"
    },
    {
        "Character": "箕",
        "Pinyin": "jī"
    },
    {
        "Pinyin": "sieve; dust pan, garbage bag"
    },
    {
        "Character": "墩",
        "Pinyin": "dūn"
    },
    {
        "Pinyin": "heap, mound, block of stone"
    },
    {
        "Character": "哒",
        "Pinyin": "dā"
    },
    {
        "Pinyin": "sound made to get a horse to move forward"
    },
    {
        "Character": "晾",
        "Pinyin": "liàng"
    },
    {
        "Pinyin": "air-dry; sun-dry"
    },
    {
        "Character": "砷",
        "Pinyin": "shēn"
    },
    {
        "Pinyin": "arsenic"
    },
    {
        "Character": "濡",
        "Pinyin": "rú"
    },
    {
        "Pinyin": "immerse, moisten; wet, damp"
    },
    {
        "Character": "猾",
        "Pinyin": "huá"
    },
    {
        "Pinyin": "crafty, cunning, shrewd; deceitful"
    },
    {
        "Character": "阂",
        "Pinyin": "hé"
    },
    {
        "Pinyin": "blocked or separated; to prevent"
    },
    {
        "Character": "韆",
        "Pinyin": "qiān"
    },
    {
        "Pinyin": "swing"
    },
    {
        "Character": "琍",
        "Pinyin": "lì"
    },
    {
        "Character": "宦",
        "Pinyin": "huàn"
    },
    {
        "Pinyin": "officialdom, government official"
    },
    {
        "Character": "樕",
        "Pinyin": "sù"
    },
    {
        "Pinyin": "shrub"
    },
    {
        "Character": "鲷",
        "Pinyin": "diāo"
    },
    {
        "Pinyin": "pagrosomus major, porgy"
    },
    {
        "Character": "佞",
        "Pinyin": "nìng"
    },
    {
        "Pinyin": "flattery; glib"
    },
    {
        "Character": "叟",
        "Pinyin": "sǒu"
    },
    {
        "Pinyin": "old man; elder"
    },
    {
        "Character": "团",
        "Pinyin": "tuán"
    },
    {
        "Pinyin": "sphere, ball, circle; mass, lump"
    },
    {
        "Character": "沅",
        "Pinyin": "yuán"
    },
    {
        "Pinyin": "name of a river in western Hunan that flows into Dongting lake"
    },
    {
        "Character": "疡",
        "Pinyin": "yáng"
    },
    {
        "Pinyin": "ulcers, sores; infection"
    },
    {
        "Character": "啬",
        "Pinyin": "sè"
    },
    {
        "Pinyin": "miserly, thrifty, stingy; stopped up, constipated"
    },
    {
        "Character": "眈",
        "Pinyin": "dān"
    },
    {
        "Pinyin": "gloat, stare at; to delay, to loiter, to hinder"
    },
    {
        "Character": "肴",
        "Pinyin": "yáo"
    },
    {
        "Pinyin": "prepared meat; food"
    },
    {
        "Character": "豨",
        "Pinyin": "xī"
    },
    {
        "Pinyin": "pig, hog"
    },
    {
        "Character": "囤",
        "Pinyin": "dùn"
    },
    {
        "Pinyin": "grain basket, bin for grain"
    },
    {
        "Character": "裆",
        "Pinyin": "dāng"
    },
    {
        "Pinyin": "crotch or seat of pants; pants"
    },
    {
        "Character": "蕨",
        "Pinyin": "jué"
    },
    {
        "Pinyin": "pteris aquilina, common bracken"
    },
    {
        "Character": "胱",
        "Pinyin": "guāng"
    },
    {
        "Pinyin": "bladder"
    },
    {
        "Character": "愎",
        "Pinyin": "bì"
    },
    {
        "Pinyin": "obstinate, stubborn, headstrong"
    },
    {
        "Character": "稼",
        "Pinyin": "jià"
    },
    {
        "Pinyin": "sow grain; sheaves of grain"
    },
    {
        "Character": "嵋",
        "Pinyin": "méi"
    },
    {
        "Pinyin": "Omei mountain in Sichuan"
    },
    {
        "Character": "瑙",
        "Pinyin": "nǎo"
    },
    {
        "Pinyin": "agate; cornelian"
    },
    {
        "Character": "稷",
        "Pinyin": "jì"
    },
    {
        "Pinyin": "god of cereals; minister of agriculture"
    },
    {
        "Character": "忖",
        "Pinyin": "cǔn"
    },
    {
        "Pinyin": "guess, suppose, conjecture"
    },
    {
        "Character": "荟",
        "Pinyin": "huì"
    },
    {
        "Pinyin": "luxuriant, flourishing, abundant"
    },
    {
        "Character": "妩",
        "Pinyin": "wǔ"
    },
    {
        "Pinyin": "charming, enchanting"
    },
    {
        "Character": "嚏",
        "Pinyin": "tì"
    },
    {
        "Pinyin": "sneeze"
    },
    {
        "Character": "箴",
        "Pinyin": "zhēn"
    },
    {
        "Pinyin": "needle, probe; admon"
    },
    {
        "Character": "绻",
        "Pinyin": "quǎn"
    },
    {
        "Pinyin": "affectionate, solicitous"
    },
    {
        "Character": "湍",
        "Pinyin": "tuān"
    },
    {
        "Pinyin": "rapid water current, rapids"
    },
    {
        "Character": "爰",
        "Pinyin": "yuán"
    },
    {
        "Pinyin": "lead on to; therefore, then"
    },
    {
        "Character": "颔",
        "Pinyin": "hàn"
    },
    {
        "Pinyin": "chin, jowl; give nod"
    },
    {
        "Character": "痧",
        "Pinyin": "shā"
    },
    {
        "Pinyin": "cholera; colic"
    },
    {
        "Character": "戕",
        "Pinyin": "qiāng"
    },
    {
        "Pinyin": "kill, slay; wound, injure, hurt"
    },
    {
        "Character": "绢",
        "Pinyin": "juàn"
    },
    {
        "Pinyin": "kind of thick stiff silk"
    },
    {
        "Character": "嗝",
        "Pinyin": "gé"
    },
    {
        "Pinyin": "cackling of fowls to gag, to vomit"
    },
    {
        "Character": "褓",
        "Pinyin": "bǎo"
    },
    {
        "Pinyin": "swaddling cloth; infancy"
    },
    {
        "Character": "梆",
        "Pinyin": "bāng"
    },
    {
        "Pinyin": "watchman's rattle"
    },
    {
        "Character": "晞",
        "Pinyin": "xī"
    },
    {
        "Pinyin": "dry, expose sun; dawn"
    },
    {
        "Character": "锢",
        "Pinyin": "gù"
    },
    {
        "Pinyin": "run metal into cracks; confine"
    },
    {
        "Character": "剁",
        "Pinyin": "duò"
    },
    {
        "Pinyin": "chop by pounding, mince, hash"
    },
    {
        "Character": "慑",
        "Pinyin": "shè"
    },
    {
        "Pinyin": "afraid, scared, fearful"
    },
    {
        "Character": "嗟",
        "Pinyin": "jiē"
    },
    {
        "Pinyin": "sigh, alas"
    },
    {
        "Character": "泷",
        "Pinyin": "lóng"
    },
    {
        "Pinyin": "raining; wet; soaked; a river in Guangdong"
    },
    {
        "Character": "诤",
        "Pinyin": "zhēng"
    },
    {
        "Pinyin": "to expostulate; to remonstrate"
    },
    {
        "Character": "暝",
        "Pinyin": "míng"
    },
    {
        "Pinyin": "dark, obscure"
    },
    {
        "Character": "帼",
        "Pinyin": "guó"
    },
    {
        "Pinyin": "women's headgear; mourning cap"
    },
    {
        "Character": "牴",
        "Pinyin": "dǐ"
    },
    {
        "Pinyin": "gore, butt; resist"
    },
    {
        "Character": "琏",
        "Pinyin": "lián"
    },
    {
        "Pinyin": "a vessel used hold grain offerings"
    },
    {
        "Character": "昴",
        "Pinyin": "mǎo"
    },
    {
        "Pinyin": "one of the 28 constellations"
    },
    {
        "Character": "诩",
        "Pinyin": "xǔ"
    },
    {
        "Pinyin": "boast, brag; popular, well known; to flatter"
    },
    {
        "Character": "篆",
        "Pinyin": "zhuàn"
    },
    {
        "Pinyin": "seal script; seal, official stamp"
    },
    {
        "Character": "攫",
        "Pinyin": "jué"
    },
    {
        "Pinyin": "snatch away, seize; catch with"
    },
    {
        "Character": "甯",
        "Pinyin": "níng"
    },
    {
        "Pinyin": "peaceful"
    },
    {
        "Character": "睨",
        "Pinyin": "nì"
    },
    {
        "Pinyin": "look askance at, glare at; squint"
    },
    {
        "Character": "缎",
        "Pinyin": "duàn"
    },
    {
        "Pinyin": "satin"
    },
    {
        "Character": "蹬",
        "Pinyin": "dèng"
    },
    {
        "Pinyin": "step on, tread on; lose energy"
    },
    {
        "Character": "犁",
        "Pinyin": "lí"
    },
    {
        "Pinyin": "plow"
    },
    {
        "Character": "蛆",
        "Pinyin": "qū"
    },
    {
        "Pinyin": "maggots"
    },
    {
        "Character": "诋",
        "Pinyin": "dǐ"
    },
    {
        "Pinyin": "slander, condemn, reproach"
    },
    {
        "Character": "缨",
        "Pinyin": "yīng"
    },
    {
        "Pinyin": "a chin strap, tassel; to annoy, bother"
    },
    {
        "Character": "睾",
        "Pinyin": "gāo"
    },
    {
        "Pinyin": "testicle"
    },
    {
        "Character": "婢",
        "Pinyin": "bì"
    },
    {
        "Pinyin": "servant girl; your servant"
    },
    {
        "Character": "傥",
        "Pinyin": "tǎng"
    },
    {
        "Pinyin": "if"
    },
    {
        "Character": "霁",
        "Pinyin": "jì"
    },
    {
        "Pinyin": "to clear up after rain; to cease be angry"
    },
    {
        "Character": "琅",
        "Pinyin": "láng"
    },
    {
        "Pinyin": "a variety of white carnelian; pure"
    },
    {
        "Character": "熏",
        "Pinyin": "xūn"
    },
    {
        "Pinyin": "smoke, fog, vapor; smoke, cure"
    },
    {
        "Character": "啻",
        "Pinyin": "chì"
    },
    {
        "Pinyin": "only, merely; just like; stop at"
    },
    {
        "Character": "捎",
        "Pinyin": "shāo"
    },
    {
        "Pinyin": "to select; to take; to carry"
    },
    {
        "Character": "皿",
        "Pinyin": "mǐn"
    },
    {
        "Pinyin": "shallow container; rad. no. 108"
    },
    {
        "Character": "暄",
        "Pinyin": "xuān"
    },
    {
        "Pinyin": "warm, comfortable; warm, genial"
    },
    {
        "Character": "躅",
        "Pinyin": "zhú"
    },
    {
        "Pinyin": "walk carefully; hesitate, falter"
    },
    {
        "Character": "吃",
        "Pinyin": "chī"
    },
    {
        "Pinyin": "eat; drink; suffer, endure, bear"
    },
    {
        "Character": "宥",
        "Pinyin": "yòu"
    },
    {
        "Pinyin": "forgive, pardon, indulge"
    },
    {
        "Character": "埕",
        "Pinyin": "chéng"
    },
    {
        "Pinyin": "a large, pear-shaped earthenware jar"
    },
    {
        "Character": "涣",
        "Pinyin": "huàn"
    },
    {
        "Pinyin": "scatter; scattered, dispersed"
    },
    {
        "Character": "怦",
        "Pinyin": "pēng"
    },
    {
        "Pinyin": "eager, ardent, impulsive; anxious"
    },
    {
        "Character": "傧",
        "Pinyin": "bìn"
    },
    {
        "Pinyin": "entertain guests"
    },
    {
        "Character": "鲥",
        "Pinyin": "shí"
    },
    {
        "Pinyin": "reeves' shad; hilsa herring"
    },
    {
        "Character": "迸",
        "Pinyin": "bèng"
    },
    {
        "Pinyin": "gush out; burst forth; split"
    },
    {
        "Character": "釜",
        "Pinyin": "fǔ"
    },
    {
        "Pinyin": "cauldron, pot, kettle"
    },
    {
        "Character": "踯",
        "Pinyin": "zhí"
    },
    {
        "Pinyin": "waver, hesitate, be irresolute"
    },
    {
        "Character": "簑",
        "Pinyin": "suō"
    },
    {
        "Pinyin": "a coat raincoat"
    },
    {
        "Character": "僮",
        "Pinyin": "tóng"
    },
    {
        "Pinyin": "page, boy servant"
    },
    {
        "Character": "玆",
        "Pinyin": "zī"
    },
    {
        "Pinyin": "now, here; this; time, year"
    },
    {
        "Character": "衲",
        "Pinyin": "nà"
    },
    {
        "Pinyin": "mend, sew, patch; line; quilt"
    },
    {
        "Character": "杳",
        "Pinyin": "yǎo"
    },
    {
        "Pinyin": "obscure, dark, mysterious, deep"
    },
    {
        "Character": "姒",
        "Pinyin": "sì"
    },
    {
        "Pinyin": "wife of elder brother"
    },
    {
        "Character": "嬿",
        "Pinyin": "yàn"
    },
    {
        "Pinyin": "lovely"
    },
    {
        "Character": "忪",
        "Pinyin": "zhōng"
    },
    {
        "Pinyin": "quiet, calm, tranquil, peaceful"
    },
    {
        "Character": "鲲",
        "Pinyin": "kūn"
    },
    {
        "Pinyin": "spawn; roe; fy"
    },
    {
        "Character": "槁",
        "Pinyin": "gǎo"
    },
    {
        "Pinyin": "wither; withered, rotten, dead"
    },
    {
        "Character": "馋",
        "Pinyin": "chán"
    },
    {
        "Pinyin": "gluttonous, greedy; lewd, lecherous"
    },
    {
        "Character": "甡",
        "Pinyin": "shēng"
    },
    {
        "Pinyin": "abundant, numerous; crowd"
    },
    {
        "Character": "癞",
        "Pinyin": "lài"
    },
    {
        "Pinyin": "leprosy, scabies, mange; shoddy"
    },
    {
        "Character": "咋",
        "Pinyin": "zhà"
    },
    {
        "Pinyin": "question-forming particle, why? how? what?; to bite; loud"
    },
    {
        "Character": "翌",
        "Pinyin": "yì"
    },
    {
        "Pinyin": "bright; daybreak, dawn; the next day"
    },
    {
        "Character": "栱",
        "Pinyin": "gǒng"
    },
    {
        "Pinyin": "large peg, stake; post, pillar"
    },
    {
        "Character": "唠",
        "Pinyin": "láo"
    },
    {
        "Pinyin": "chat, jaw, gossip, talk"
    },
    {
        "Character": "轶",
        "Pinyin": "yì"
    },
    {
        "Pinyin": "rush forth; surpass, excel"
    },
    {
        "Character": "驮",
        "Pinyin": "tuó"
    },
    {
        "Pinyin": "carry on back"
    },
    {
        "Character": "铬",
        "Pinyin": "gè"
    },
    {
        "Pinyin": "chromium"
    },
    {
        "Character": "驽",
        "Pinyin": "nú"
    },
    {
        "Pinyin": "tired, old horse; old, weak"
    },
    {
        "Character": "阜",
        "Pinyin": "fù"
    },
    {
        "Pinyin": "mound; abundant, ample, numerous"
    },
    {
        "Character": "啐",
        "Pinyin": "cuì"
    },
    {
        "Pinyin": "to taste, to sip; to spit; the sound of sipping; to surprise"
    },
    {
        "Character": "猷",
        "Pinyin": "yóu"
    },
    {
        "Pinyin": "plan, scheme; plan, plot; way"
    },
    {
        "Character": "癈",
        "Pinyin": "fèi"
    },
    {
        "Pinyin": "abrogate, terminate, discard"
    },
    {
        "Character": "蝨",
        "Pinyin": "shī"
    },
    {
        "Pinyin": "louse; bed bug"
    },
    {
        "Character": "淂",
        "Pinyin": "dé"
    },
    {
        "Character": "楹",
        "Pinyin": "yíng"
    },
    {
        "Pinyin": "column, pillar; numerary adjunct"
    },
    {
        "Character": "氨",
        "Pinyin": "ān"
    },
    {
        "Pinyin": "ammonia; hydrogen nitride"
    },
    {
        "Character": "菅",
        "Pinyin": "jiān"
    },
    {
        "Pinyin": "coarse grass, themedia forskali"
    },
    {
        "Character": "泞",
        "Pinyin": "nìng"
    },
    {
        "Pinyin": "mud; miry, muddy, stagnant"
    },
    {
        "Character": "戟",
        "Pinyin": "jǐ"
    },
    {
        "Pinyin": "halberd with crescent blade"
    },
    {
        "Character": "拮",
        "Pinyin": "jié"
    },
    {
        "Pinyin": "laboring hard, occupied; pursue"
    },
    {
        "Character": "踞",
        "Pinyin": "jù"
    },
    {
        "Pinyin": "crouch, squat; sit, occupy"
    },
    {
        "Character": "忐",
        "Pinyin": "tǎn"
    },
    {
        "Pinyin": "timorous; nervous"
    },
    {
        "Character": "骅",
        "Pinyin": "huá"
    },
    {
        "Pinyin": "an excellent horse"
    },
    {
        "Character": "彧",
        "Pinyin": "yù"
    },
    {
        "Pinyin": "refined, cultured, polished"
    },
    {
        "Character": "纰",
        "Pinyin": "pí"
    },
    {
        "Pinyin": "spoiled silk; hem of dress; mista"
    },
    {
        "Character": "坛",
        "Pinyin": "tán"
    },
    {
        "Pinyin": "an earthenware jar, a jug"
    },
    {
        "Character": "郢",
        "Pinyin": "yǐng"
    },
    {
        "Pinyin": "state in today's Hubei province"
    },
    {
        "Character": "聒",
        "Pinyin": "guā"
    },
    {
        "Pinyin": "clamor, din, hubbub"
    },
    {
        "Character": "跚",
        "Pinyin": "shān"
    },
    {
        "Pinyin": "stagger, limp"
    },
    {
        "Character": "犛",
        "Pinyin": "lí"
    },
    {
        "Pinyin": "a black ox, a yak"
    },
    {
        "Character": "驷",
        "Pinyin": "sì"
    },
    {
        "Pinyin": "team of four horses"
    },
    {
        "Character": "姣",
        "Pinyin": "jiāo"
    },
    {
        "Pinyin": "beautiful, handsome, pretty"
    },
    {
        "Character": "谪",
        "Pinyin": "zhé"
    },
    {
        "Pinyin": "charge, blame; disgrace; demote; punish"
    },
    {
        "Character": "堐",
        "Pinyin": "yá"
    },
    {
        "Character": "忑",
        "Pinyin": "tè"
    },
    {
        "Pinyin": "fearful; nervous; timid"
    },
    {
        "Character": "焊",
        "Pinyin": "hàn"
    },
    {
        "Pinyin": "weld, solder"
    },
    {
        "Character": "饷",
        "Pinyin": "xiǎng"
    },
    {
        "Pinyin": "rations and pay for soldiers"
    },
    {
        "Character": "钠",
        "Pinyin": "nà"
    },
    {
        "Pinyin": "sodium, natrium; sharpen wood"
    },
    {
        "Character": "娄",
        "Pinyin": "lóu"
    },
    {
        "Pinyin": "surname; a constellation; to wear"
    },
    {
        "Character": "倭",
        "Pinyin": "wēi"
    },
    {
        "Pinyin": "dwarf; dwarfish, short"
    },
    {
        "Character": "胭",
        "Pinyin": "yān"
    },
    {
        "Pinyin": "rouge, cosmetics"
    },
    {
        "Character": "邋",
        "Pinyin": "lá"
    },
    {
        "Pinyin": "rags"
    },
    {
        "Character": "秧",
        "Pinyin": "yāng"
    },
    {
        "Pinyin": "rice seedlings, young rice plants"
    },
    {
        "Character": "恻",
        "Pinyin": "cè"
    },
    {
        "Pinyin": "feel anguish, feel compassion"
    },
    {
        "Character": "宸",
        "Pinyin": "chén"
    },
    {
        "Pinyin": "imperial; imperial palace"
    },
    {
        "Character": "鲈",
        "Pinyin": "lú"
    },
    {
        "Pinyin": "sea perch, sea bass"
    },
    {
        "Character": "妤",
        "Pinyin": "yú"
    },
    {
        "Pinyin": "beautiful, fair, handsome"
    },
    {
        "Character": "椿",
        "Pinyin": "chūn"
    },
    {
        "Pinyin": "father; a plant with white flowers"
    },
    {
        "Character": "锂",
        "Pinyin": "lǐ"
    },
    {
        "Pinyin": "lithium"
    },
    {
        "Character": "猬",
        "Pinyin": "wèi"
    },
    {
        "Pinyin": "hedgehog"
    },
    {
        "Character": "嶙",
        "Pinyin": "lín"
    },
    {
        "Pinyin": "precipitous"
    },
    {
        "Character": "醺",
        "Pinyin": "xūn"
    },
    {
        "Pinyin": "get drunk, be intoxicated"
    },
    {
        "Character": "啵",
        "Pinyin": "bo"
    },
    {
        "Character": "嘈",
        "Pinyin": "cáo"
    },
    {
        "Pinyin": "noisy"
    },
    {
        "Character": "逖",
        "Pinyin": "tì"
    },
    {
        "Pinyin": "far, distant; keep at distance"
    },
    {
        "Character": "涘",
        "Pinyin": "sì"
    },
    {
        "Pinyin": "river bank; water's edge"
    },
    {
        "Character": "爿",
        "Pinyin": "qiáng"
    },
    {
        "Pinyin": "half of tree trunk; rad. no. 90"
    },
    {
        "Character": "卤",
        "Pinyin": "lǔ"
    },
    {
        "Pinyin": "saline soil; natural salt, rock"
    },
    {
        "Character": "鮀",
        "Pinyin": "tuó"
    },
    {
        "Pinyin": "snakefish"
    },
    {
        "Character": "滕",
        "Pinyin": "téng"
    },
    {
        "Pinyin": "an ancient state in Shandong province; water bursting forth"
    },
    {
        "Character": "荪",
        "Pinyin": "sūn"
    },
    {
        "Pinyin": "aromatic grass; iris, flower"
    },
    {
        "Character": "殡",
        "Pinyin": "bìn"
    },
    {
        "Pinyin": "encoffin; embalm; funeral"
    },
    {
        "Character": "嫦",
        "Pinyin": "cháng"
    },
    {
        "Pinyin": "name of a moon goddess"
    },
    {
        "Character": "臧",
        "Pinyin": "záng"
    },
    {
        "Pinyin": "good, right, generous; command"
    },
    {
        "Character": "峋",
        "Pinyin": "xún"
    },
    {
        "Pinyin": "ranges of hills stretching on beyond another irregular peaks"
    },
    {
        "Character": "坻",
        "Pinyin": "chí"
    },
    {
        "Pinyin": "an islet, a rock in a river; an embankment; to stop"
    },
    {
        "Character": "暾",
        "Pinyin": "tūn"
    },
    {
        "Pinyin": "morning sun, sunrise"
    },
    {
        "Character": "阋",
        "Pinyin": "xì"
    },
    {
        "Pinyin": "feud, fight, quarrel"
    },
    {
        "Character": "钘",
        "Pinyin": "xíng"
    },
    {
        "Pinyin": "ancient wine vessel"
    },
    {
        "Character": "俎",
        "Pinyin": "zǔ"
    },
    {
        "Pinyin": "chopping board or block; painted"
    },
    {
        "Character": "据",
        "Pinyin": "jù"
    },
    {
        "Pinyin": "to occupy, take possession of; a base"
    },
    {
        "Character": "蜒",
        "Pinyin": "yán"
    },
    {
        "Pinyin": "millipede"
    },
    {
        "Character": "褉",
        "Pinyin": "xiē"
    },
    {
        "Pinyin": "short garments"
    },
    {
        "Character": "邑",
        "Pinyin": "yì"
    },
    {
        "Pinyin": "area, district, city, state"
    },
    {
        "Character": "缈",
        "Pinyin": "miǎo"
    },
    {
        "Pinyin": "indistinct, dim; minute; distant"
    },
    {
        "Character": "涎",
        "Pinyin": "xián"
    },
    {
        "Pinyin": "saliva"
    },
    {
        "Character": "沚",
        "Pinyin": "zhǐ"
    },
    {
        "Pinyin": "islet in stream; small sandbar"
    },
    {
        "Character": "沪",
        "Pinyin": "hù"
    },
    {
        "Pinyin": "Shanghai; river near Shanghai"
    },
    {
        "Character": "綵",
        "Pinyin": "cǎi"
    },
    {
        "Pinyin": "varicolored silk; variegated"
    },
    {
        "Character": "袓",
        "Pinyin": "jǔ"
    },
    {
        "Character": "轫",
        "Pinyin": "rèn"
    },
    {
        "Pinyin": "a block that keeps a wheel from moving"
    },
    {
        "Character": "蛢",
        "Pinyin": "píng"
    },
    {
        "Character": "捺",
        "Pinyin": "nà"
    },
    {
        "Pinyin": "to press down heavily with the fingers"
    },
    {
        "Character": "拴",
        "Pinyin": "shuān"
    },
    {
        "Pinyin": "bind with rope, fasten"
    },
    {
        "Character": "耆",
        "Pinyin": "qí"
    },
    {
        "Pinyin": "man of sixty; aged, old"
    },
    {
        "Character": "柑",
        "Pinyin": "gān"
    },
    {
        "Pinyin": "tangerine, loose-skinned orange"
    },
    {
        "Character": "颍",
        "Pinyin": "yǐng"
    },
    {
        "Pinyin": "river in Anhui"
    },
    {
        "Character": "浚",
        "Pinyin": "jùn"
    },
    {
        "Pinyin": "dredge"
    },
    {
        "Character": "喟",
        "Pinyin": "kuì"
    },
    {
        "Pinyin": "heave sigh, sigh"
    },
    {
        "Character": "棣",
        "Pinyin": "dì"
    },
    {
        "Pinyin": "kerria japonica plant, cherry"
    },
    {
        "Character": "嗷",
        "Pinyin": "áo"
    },
    {
        "Pinyin": "loud clamor; sound of wailing"
    },
    {
        "Character": "熨",
        "Pinyin": "yùn"
    },
    {
        "Pinyin": "iron, press"
    },
    {
        "Character": "挓",
        "Pinyin": "zhā"
    },
    {
        "Pinyin": "to open out; to expand"
    },
    {
        "Character": "甕",
        "Pinyin": "wèng"
    },
    {
        "Pinyin": "earthen jar; jar for ashes"
    },
    {
        "Character": "槐",
        "Pinyin": "huái"
    },
    {
        "Pinyin": "locust tree"
    },
    {
        "Character": "娩",
        "Pinyin": "miǎn"
    },
    {
        "Pinyin": "give birth child; complaisant"
    },
    {
        "Character": "镴",
        "Pinyin": "là"
    },
    {
        "Pinyin": "solder; tin"
    },
    {
        "Character": "蕤",
        "Pinyin": "ruí"
    },
    {
        "Pinyin": "drooping leaves; fringe soft, delicate"
    },
    {
        "Character": "腋",
        "Pinyin": "yì"
    },
    {
        "Pinyin": "armpit"
    },
    {
        "Character": "瘁",
        "Pinyin": "cuì"
    },
    {
        "Pinyin": "feel tired, be weary, be worn out"
    },
    {
        "Character": "铿",
        "Pinyin": "kēng"
    },
    {
        "Pinyin": "strike, beat, stroke; jingling"
    },
    {
        "Character": "澍",
        "Pinyin": "shù"
    },
    {
        "Pinyin": "timely rain, life-giving rain"
    },
    {
        "Character": "莠",
        "Pinyin": "yǒu"
    },
    {
        "Pinyin": "weeds, tares; undesirable, evil"
    },
    {
        "Character": "糸",
        "Pinyin": "mì"
    },
    {
        "Pinyin": "silk; KangXi radical 120"
    },
    {
        "Character": "悌",
        "Pinyin": "tì"
    },
    {
        "Pinyin": "brotherly, respectful"
    },
    {
        "Character": "勺",
        "Pinyin": "sháo"
    },
    {
        "Pinyin": "spoon, ladle; unit of volume"
    },
    {
        "Character": "涌",
        "Pinyin": "yǒng"
    },
    {
        "Pinyin": "surge up, bubble up, gush forth"
    },
    {
        "Character": "枰",
        "Pinyin": "píng"
    },
    {
        "Pinyin": "smooth board; chessboard; chess"
    },
    {
        "Character": "伝",
        "Pinyin": "chuán"
    },
    {
        "Pinyin": "summon; propagate, transmit"
    },
    {
        "Character": "锌",
        "Pinyin": "xīn"
    },
    {
        "Pinyin": "zincum"
    },
    {
        "Character": "饴",
        "Pinyin": "yí"
    },
    {
        "Pinyin": "sweet-meats; sweet-cakes; syrup"
    },
    {
        "Character": "幡",
        "Pinyin": "fān"
    },
    {
        "Pinyin": "pennant, banner, streamer, flag"
    },
    {
        "Character": "铄",
        "Pinyin": "shuò"
    },
    {
        "Pinyin": "melt, smelt; shine"
    },
    {
        "Character": "胯",
        "Pinyin": "kuà"
    },
    {
        "Pinyin": "pelvis; groin; thighs"
    },
    {
        "Character": "岌",
        "Pinyin": "jí"
    },
    {
        "Pinyin": "perilous, hazardous; high, steep"
    },
    {
        "Character": "痢",
        "Pinyin": "lì"
    },
    {
        "Pinyin": "dysentery"
    },
    {
        "Character": "姝",
        "Pinyin": "shū"
    },
    {
        "Pinyin": "a beautiful girl"
    },
    {
        "Character": "诳",
        "Pinyin": "kuáng"
    },
    {
        "Pinyin": "deceive, lie, delude, cheat"
    },
    {
        "Character": "醃",
        "Pinyin": "yān"
    },
    {
        "Pinyin": "marinate, pickle; salt"
    },
    {
        "Character": "瞠",
        "Pinyin": "chēng"
    },
    {
        "Pinyin": "look at, stare at, gaze at"
    },
    {
        "Character": "晡",
        "Pinyin": "bū"
    },
    {
        "Pinyin": "late afternoon"
    },
    {
        "Character": "獠",
        "Pinyin": "liáo"
    },
    {
        "Pinyin": "to hunt at night by torches"
    },
    {
        "Character": "膫",
        "Pinyin": "liáo"
    },
    {
        "Pinyin": "the fat covering the intestines; the omentum"
    },
    {
        "Character": "腮",
        "Pinyin": "sāi"
    },
    {
        "Pinyin": "lower part of face; jaw; gills of a fish"
    },
    {
        "Character": "唰",
        "Pinyin": "shuā"
    },
    {
        "Character": "榛",
        "Pinyin": "zhēn"
    },
    {
        "Pinyin": "hazelnut; thicket, underbrush"
    },
    {
        "Character": "烯",
        "Pinyin": "xī"
    },
    {
        "Pinyin": "alkene"
    },
    {
        "Character": "膊",
        "Pinyin": "bó"
    },
    {
        "Pinyin": "shoulders, upper arms"
    },
    {
        "Character": "淅",
        "Pinyin": "xī"
    },
    {
        "Pinyin": "water used wash rice; to wash ric"
    },
    {
        "Character": "纣",
        "Pinyin": "zhòu"
    },
    {
        "Pinyin": "name of an emperor; saddle part"
    },
    {
        "Character": "佶",
        "Pinyin": "jí"
    },
    {
        "Pinyin": "strong, robust; exact, correct"
    },
    {
        "Character": "葩",
        "Pinyin": "pā"
    },
    {
        "Pinyin": "flowers"
    },
    {
        "Character": "嫡",
        "Pinyin": "dí"
    },
    {
        "Pinyin": "legal wife, child of legal wife"
    },
    {
        "Character": "狞",
        "Pinyin": "níng"
    },
    {
        "Pinyin": "ferocious appearance; hideous"
    },
    {
        "Character": "缄",
        "Pinyin": "jiān"
    },
    {
        "Pinyin": "seal, close; bind; letter"
    },
    {
        "Character": "诿",
        "Pinyin": "wěi"
    },
    {
        "Pinyin": "pass buck, lay blame on others"
    },
    {
        "Character": "帛",
        "Pinyin": "bó"
    },
    {
        "Pinyin": "silks, fabrics; wealth, property"
    },
    {
        "Character": "甬",
        "Pinyin": "yǒng"
    },
    {
        "Pinyin": "path; river in Ningbo; Ningbo"
    },
    {
        "Character": "芩",
        "Pinyin": "qín"
    },
    {
        "Pinyin": "salt marsh plant"
    },
    {
        "Character": "蹛",
        "Pinyin": "dài"
    },
    {
        "Character": "玑",
        "Pinyin": "jī"
    },
    {
        "Pinyin": "pearl that is not quite round"
    },
    {
        "Character": "鹫",
        "Pinyin": "jiù"
    },
    {
        "Pinyin": "condor, vulture"
    },
    {
        "Character": "豊",
        "Pinyin": "lǐ"
    },
    {
        "Pinyin": "abundant, lush, bountiful, plenty"
    },
    {
        "Character": "倜",
        "Pinyin": "tì"
    },
    {
        "Pinyin": "raise high; unrestrained"
    },
    {
        "Character": "蹴",
        "Pinyin": "cù"
    },
    {
        "Pinyin": "kick; tread on; leap; solemn"
    },
    {
        "Character": "镂",
        "Pinyin": "lòu"
    },
    {
        "Pinyin": "carve, inlay, engrave, tattoo"
    },
    {
        "Character": "丘",
        "Pinyin": "qiū"
    },
    {
        "Pinyin": "hill; elder; empty; a name"
    },
    {
        "Character": "腓",
        "Pinyin": "féi"
    },
    {
        "Pinyin": "calf; avoid; be ill; wither"
    },
    {
        "Character": "邸",
        "Pinyin": "dǐ"
    },
    {
        "Pinyin": "official residence, residence of"
    },
    {
        "Character": "脯",
        "Pinyin": "fǔ"
    },
    {
        "Pinyin": "dried meat; preserved fruits"
    },
    {
        "Character": "毁",
        "Pinyin": "huǐ"
    },
    {
        "Pinyin": "destroy, ruin, injure; slander"
    },
    {
        "Character": "菀",
        "Pinyin": "wǎn"
    },
    {
        "Pinyin": "luxuriance of growth"
    },
    {
        "Character": "犊",
        "Pinyin": "dú"
    },
    {
        "Pinyin": "calf; victim of sacrifice"
    },
    {
        "Character": "珂",
        "Pinyin": "kē"
    },
    {
        "Pinyin": "inferior kind of jade"
    },
    {
        "Character": "盅",
        "Pinyin": "zhōng"
    },
    {
        "Pinyin": "small cup or bowl"
    },
    {
        "Character": "挹",
        "Pinyin": "yì"
    },
    {
        "Pinyin": "to bale out; to decant liquids"
    },
    {
        "Character": "烩",
        "Pinyin": "huì"
    },
    {
        "Pinyin": "ragout, cook, braise"
    },
    {
        "Character": "锜",
        "Pinyin": "qí"
    },
    {
        "Pinyin": "a kind of pen; a kind of chisel"
    },
    {
        "Character": "胳",
        "Pinyin": "gē"
    },
    {
        "Pinyin": "armpit, arms"
    },
    {
        "Character": "叼",
        "Pinyin": "diāo"
    },
    {
        "Pinyin": "holding in mouth"
    },
    {
        "Character": "馄",
        "Pinyin": "hún"
    },
    {
        "Pinyin": "dumpling soup, wonton"
    },
    {
        "Character": "猝",
        "Pinyin": "cù"
    },
    {
        "Pinyin": "abruptly, suddenly; abrupt"
    },
    {
        "Character": "谀",
        "Pinyin": "yú"
    },
    {
        "Pinyin": "flatter, truckle"
    },
    {
        "Character": "卞",
        "Pinyin": "biàn"
    },
    {
        "Pinyin": "to be impatient, in a hurry; excitable"
    },
    {
        "Character": "俦",
        "Pinyin": "chóu"
    },
    {
        "Pinyin": "companion, mate, colleague"
    },
    {
        "Character": "雎",
        "Pinyin": "jū"
    },
    {
        "Pinyin": "osprey, fishhawk; hold back"
    },
    {
        "Character": "菫",
        "Pinyin": "jǐn"
    },
    {
        "Pinyin": "celery, aconite"
    },
    {
        "Character": "炘",
        "Pinyin": "xīn"
    },
    {
        "Pinyin": "brilliant, shining, bright"
    },
    {
        "Character": "鹄",
        "Pinyin": "hú"
    },
    {
        "Pinyin": "target"
    },
    {
        "Character": "酮",
        "Pinyin": "tóng"
    },
    {
        "Pinyin": "ketones"
    },
    {
        "Character": "氟",
        "Pinyin": "fú"
    },
    {
        "Pinyin": "fluorine"
    },
    {
        "Character": "桀",
        "Pinyin": "jié"
    },
    {
        "Pinyin": "chicken roost; ancient emperor"
    },
    {
        "Character": "帚",
        "Pinyin": "zhǒu"
    },
    {
        "Pinyin": "broom, broomstick"
    },
    {
        "Character": "荔",
        "Pinyin": "lì"
    },
    {
        "Pinyin": "lichee"
    },
    {
        "Character": "洱",
        "Pinyin": "ěr"
    },
    {
        "Pinyin": "a lake in Yunnan"
    },
    {
        "Character": "窖",
        "Pinyin": "jiào"
    },
    {
        "Pinyin": "pit, cellar"
    },
    {
        "Character": "薮",
        "Pinyin": "sǒu"
    },
    {
        "Pinyin": "marsh, swamp; wild country; clump of trees or bushes"
    },
    {
        "Character": "蔻",
        "Pinyin": "kòu"
    },
    {
        "Character": "捂",
        "Pinyin": "wǔ"
    },
    {
        "Pinyin": "resist"
    },
    {
        "Character": "锾",
        "Pinyin": "huán"
    },
    {
        "Pinyin": "measure; money, coins"
    },
    {
        "Character": "苳",
        "Pinyin": "dōng"
    },
    {
        "Character": "夤",
        "Pinyin": "yín"
    },
    {
        "Pinyin": "distant place; remote; deep"
    },
    {
        "Character": "璐",
        "Pinyin": "lù"
    },
    {
        "Pinyin": "beautiful variety of jade"
    },
    {
        "Character": "恚",
        "Pinyin": "huì"
    },
    {
        "Pinyin": "anger, rage"
    },
    {
        "Character": "沝",
        "Pinyin": "zhuǐ"
    },
    {
        "Character": "氦",
        "Pinyin": "hài"
    },
    {
        "Pinyin": "fluorine"
    },
    {
        "Character": "颚",
        "Pinyin": "è"
    },
    {
        "Pinyin": "jaw"
    },
    {
        "Character": "遢",
        "Pinyin": "tà"
    },
    {
        "Pinyin": "careless, negligent, slipshod"
    },
    {
        "Character": "渤",
        "Pinyin": "bó"
    },
    {
        "Pinyin": "swelling; name of a sea gulf"
    },
    {
        "Character": "舀",
        "Pinyin": "yǎo"
    },
    {
        "Pinyin": "dip, ladle; ladle"
    },
    {
        "Character": "猕",
        "Pinyin": "mí"
    },
    {
        "Pinyin": "macacus monkey"
    },
    {
        "Character": "碉",
        "Pinyin": "diāo"
    },
    {
        "Pinyin": "room made of stone; watchtower"
    },
    {
        "Character": "呣",
        "Pinyin": "m"
    },
    {
        "Character": "矬",
        "Pinyin": "cuó"
    },
    {
        "Pinyin": "a dwarf"
    },
    {
        "Character": "菈",
        "Pinyin": "lā"
    },
    {
        "Character": "氰",
        "Pinyin": "qīng"
    },
    {
        "Pinyin": "cyanogen; ethane dinitrile"
    },
    {
        "Character": "韭",
        "Pinyin": "jiǔ"
    },
    {
        "Pinyin": "scallion, leek; radical 179"
    },
    {
        "Character": "帘",
        "Pinyin": "lián"
    },
    {
        "Pinyin": "a blind, screen, curtain"
    },
    {
        "Character": "谒",
        "Pinyin": "yè"
    },
    {
        "Pinyin": "visit, pay respects to"
    },
    {
        "Character": "噤",
        "Pinyin": "jìn"
    },
    {
        "Pinyin": "close; be silent, be unable speak"
    },
    {
        "Character": "蓑",
        "Pinyin": "suō"
    },
    {
        "Pinyin": "rain coat made of straw, coir, etc."
    },
    {
        "Character": "蹼",
        "Pinyin": "pú"
    },
    {
        "Pinyin": "webbed feet of waterfowl"
    },
    {
        "Character": "棹",
        "Pinyin": "zhuō"
    },
    {
        "Pinyin": "oar; boat"
    },
    {
        "Character": "焢",
        "Pinyin": "hōng"
    },
    {
        "Character": "拧",
        "Pinyin": "níng"
    },
    {
        "Pinyin": "pinch; twist, wring; determined"
    },
    {
        "Character": "臾",
        "Pinyin": "yú"
    },
    {
        "Pinyin": "moment, instant, short while"
    },
    {
        "Character": "疝",
        "Pinyin": "shàn"
    },
    {
        "Pinyin": "hernia, rupture"
    },
    {
        "Character": "蛭",
        "Pinyin": "zhì"
    },
    {
        "Pinyin": "leech"
    },
    {
        "Character": "捀",
        "Pinyin": "fēng"
    },
    {
        "Character": "烊",
        "Pinyin": "yáng"
    },
    {
        "Pinyin": "to smelt; to melt"
    },
    {
        "Character": "绁",
        "Pinyin": "xiè"
    },
    {
        "Pinyin": "bridle; halter"
    },
    {
        "Character": "只",
        "Pinyin": "qí"
    },
    {
        "Pinyin": "only, merely, but"
    },
    {
        "Character": "邈",
        "Pinyin": "miǎo"
    },
    {
        "Pinyin": "far, distant, remote; slight"
    },
    {
        "Character": "踽",
        "Pinyin": "jǔ"
    },
    {
        "Pinyin": "to walk alone; self-reliant"
    },
    {
        "Character": "尻",
        "Pinyin": "kāo"
    },
    {
        "Pinyin": "end of spine; buttocks, sacrum"
    },
    {
        "Character": "淙",
        "Pinyin": "cóng"
    },
    {
        "Pinyin": "gurgling sound of water"
    },
    {
        "Character": "銂",
        "Pinyin": "zhōu"
    },
    {
        "Character": "嘹",
        "Pinyin": "liáo"
    },
    {
        "Pinyin": "used describe clarity of voice; resonant"
    },
    {
        "Character": "夆",
        "Pinyin": "fēng"
    },
    {
        "Pinyin": "resist"
    },
    {
        "Character": "涪",
        "Pinyin": "fú"
    },
    {
        "Pinyin": "river in Sichuan province"
    },
    {
        "Character": "肓",
        "Pinyin": "huāng"
    },
    {
        "Pinyin": "region between heart and diaphragm"
    },
    {
        "Character": "刮",
        "Pinyin": "guā"
    },
    {
        "Pinyin": "to blow"
    },
    {
        "Character": "庖",
        "Pinyin": "páo"
    },
    {
        "Pinyin": "kitchen; cooking, cuisine"
    },
    {
        "Character": "鸢",
        "Pinyin": "yuān"
    },
    {
        "Pinyin": "kite; Milvus species (various)"
    },
    {
        "Character": "炤",
        "Pinyin": "zhào"
    },
    {
        "Pinyin": "illumine, light up; reflect"
    },
    {
        "Character": "跺",
        "Pinyin": "duò"
    },
    {
        "Pinyin": "stamp feet, step"
    },
    {
        "Character": "愍",
        "Pinyin": "mǐn"
    },
    {
        "Pinyin": "pity, sympathize with"
    },
    {
        "Character": "啷",
        "Pinyin": "lāng"
    },
    {
        "Character": "讴",
        "Pinyin": "ōu"
    },
    {
        "Pinyin": "to sing; songs"
    },
    {
        "Character": "壑",
        "Pinyin": "hè"
    },
    {
        "Pinyin": "bed of torrent, narrow ravine"
    },
    {
        "Character": "辘",
        "Pinyin": "lù"
    },
    {
        "Pinyin": "windlass, pulley, capstan; wheel"
    },
    {
        "Character": "胛",
        "Pinyin": "jiǎ"
    },
    {
        "Pinyin": "the shoulder, shoulder blade"
    },
    {
        "Character": "绛",
        "Pinyin": "jiàng"
    },
    {
        "Pinyin": "deep red; river in Shanxi provinc"
    },
    {
        "Character": "匾",
        "Pinyin": "biǎn"
    },
    {
        "Pinyin": "flat, round split-bamboo contain"
    },
    {
        "Character": "臊",
        "Pinyin": "sāo"
    },
    {
        "Pinyin": "rank; rancid; frowzy, fetid; bashful"
    },
    {
        "Character": "壅",
        "Pinyin": "yōng"
    },
    {
        "Pinyin": "to obstruct"
    },
    {
        "Character": "睇",
        "Pinyin": "dì"
    },
    {
        "Pinyin": "look at, glance at; stare at"
    },
    {
        "Character": "忉",
        "Pinyin": "dāo"
    },
    {
        "Pinyin": "grieved; distressed in mind"
    },
    {
        "Character": "刈",
        "Pinyin": "yì"
    },
    {
        "Pinyin": "cut off, reap, mow; sickle"
    },
    {
        "Character": "蹙",
        "Pinyin": "cù"
    },
    {
        "Pinyin": "urgent, suddenly; grieve, lament"
    },
    {
        "Character": "泵",
        "Pinyin": "bèng"
    },
    {
        "Pinyin": "pump"
    },
    {
        "Character": "珣",
        "Pinyin": "xún"
    },
    {
        "Pinyin": "name of a kind of jade"
    },
    {
        "Character": "孃",
        "Pinyin": "niáng"
    },
    {
        "Pinyin": "troubled, oppressed; fat; mother"
    },
    {
        "Character": "畦",
        "Pinyin": "qí"
    },
    {
        "Pinyin": "sections in vegetable farm"
    },
    {
        "Character": "蠋",
        "Pinyin": "zhú"
    },
    {
        "Pinyin": "caterpillar"
    },
    {
        "Character": "戍",
        "Pinyin": "shù"
    },
    {
        "Pinyin": "defend borders, guard frontiers"
    },
    {
        "Character": "蝎",
        "Pinyin": "hé"
    },
    {
        "Pinyin": "scorpion"
    },
    {
        "Character": "羡",
        "Pinyin": "xiàn"
    },
    {
        "Pinyin": "envy, admire; praise; covet"
    },
    {
        "Character": "兀",
        "Pinyin": "wù"
    },
    {
        "Pinyin": "duplicate of Big Five A461"
    },
    {
        "Character": "靳",
        "Pinyin": "jìn"
    },
    {
        "Pinyin": "strap on a horse's breast"
    },
    {
        "Character": "殁",
        "Pinyin": "mò"
    },
    {
        "Pinyin": "die; death; dead"
    },
    {
        "Character": "伕",
        "Pinyin": "fū"
    },
    {
        "Pinyin": "common laborer"
    },
    {
        "Character": "蹒",
        "Pinyin": "mán"
    },
    {
        "Pinyin": "to jump over; to limp"
    },
    {
        "Character": "佚",
        "Pinyin": "yì"
    },
    {
        "Pinyin": "indulge in pleasures; flee"
    },
    {
        "Character": "囱",
        "Pinyin": "cōng"
    },
    {
        "Pinyin": "chimney, funnel"
    },
    {
        "Character": "嘤",
        "Pinyin": "yīng"
    },
    {
        "Pinyin": "seek friends; also used in names; the call of a bird"
    },
    {
        "Character": "趺",
        "Pinyin": "fū"
    },
    {
        "Pinyin": "sit cross-legged; back of the foo"
    },
    {
        "Character": "贀",
        "Pinyin": "wèi"
    },
    {
        "Character": "脩",
        "Pinyin": "xiū"
    },
    {
        "Pinyin": "dried meat (used as teachers payment in ancient times)"
    },
    {
        "Character": "砾",
        "Pinyin": "lì"
    },
    {
        "Pinyin": "gravel, pebbles, potsherds"
    },
    {
        "Character": "臬",
        "Pinyin": "niè"
    },
    {
        "Pinyin": "law, rule; door post"
    },
    {
        "Character": "罄",
        "Pinyin": "qìng"
    },
    {
        "Pinyin": "exhaust, run out, use up; empty"
    },
    {
        "Character": "艋",
        "Pinyin": "měng"
    },
    {
        "Pinyin": "small boat"
    },
    {
        "Character": "邬",
        "Pinyin": "wū"
    },
    {
        "Pinyin": "various place names; surname; transliteration of Sanskrit 'u'"
    },
    {
        "Character": "掣",
        "Pinyin": "chè"
    },
    {
        "Pinyin": "drag, pull; hinder by pulling back"
    },
    {
        "Character": "钨",
        "Pinyin": "wù"
    },
    {
        "Pinyin": "tungsten, wolfram"
    },
    {
        "Character": "缭",
        "Pinyin": "liáo"
    },
    {
        "Pinyin": "wind round, rap around, bind"
    },
    {
        "Character": "糟",
        "Pinyin": "zāo"
    },
    {
        "Pinyin": "sediment, dregs; pickle"
    },
    {
        "Character": "撬",
        "Pinyin": "qiào"
    },
    {
        "Pinyin": "lift, raise; pry open"
    },
    {
        "Character": "噪",
        "Pinyin": "zào"
    },
    {
        "Pinyin": "be noisy; chirp loudly"
    },
    {
        "Character": "矕",
        "Pinyin": "mǎn"
    },
    {
        "Pinyin": "to see, witness, inspect"
    },
    {
        "Character": "哆",
        "Pinyin": "chǐ"
    },
    {
        "Pinyin": "tremble, shiver, shudder, quiver"
    },
    {
        "Character": "脍",
        "Pinyin": "kuài"
    },
    {
        "Pinyin": "minced meat or fish"
    },
    {
        "Character": "粼",
        "Pinyin": "lín"
    },
    {
        "Character": "孑",
        "Pinyin": "jié"
    },
    {
        "Pinyin": "remaining, left-over; lonely"
    },
    {
        "Character": "氐",
        "Pinyin": "dǐ"
    },
    {
        "Pinyin": "name of an ancient tribe"
    },
    {
        "Character": "嗄",
        "Pinyin": "á"
    },
    {
        "Pinyin": "hoarse of voice"
    },
    {
        "Character": "痉",
        "Pinyin": "jìng"
    },
    {
        "Pinyin": "convulsions, fits"
    },
    {
        "Character": "赣",
        "Pinyin": "gàn"
    },
    {
        "Pinyin": "Jiangxi province; places therein"
    },
    {
        "Character": "揩",
        "Pinyin": "kāi"
    },
    {
        "Pinyin": "rub and wipe, dust, clean"
    },
    {
        "Character": "芊",
        "Pinyin": "qiān"
    },
    {
        "Pinyin": "exuberant and vigorous foliage"
    },
    {
        "Character": "昝",
        "Pinyin": "zǎn"
    },
    {
        "Pinyin": "a dual pronoun, I, you and me, we two"
    },
    {
        "Character": "蹑",
        "Pinyin": "niè"
    },
    {
        "Pinyin": "tread, step on; follow, track"
    },
    {
        "Character": "鼬",
        "Pinyin": "yòu"
    },
    {
        "Pinyin": "weasel, mustela itatis"
    },
    {
        "Character": "甥",
        "Pinyin": "shēng"
    },
    {
        "Pinyin": "sister's child"
    },
    {
        "Character": "拄",
        "Pinyin": "zhǔ"
    },
    {
        "Pinyin": "lean on; post; prod; ridicule"
    },
    {
        "Character": "荧",
        "Pinyin": "yíng"
    },
    {
        "Pinyin": "shine, shimmer; shining, dazzling"
    },
    {
        "Character": "狰",
        "Pinyin": "zhēng"
    },
    {
        "Pinyin": "fierce-looking, ferocious"
    },
    {
        "Character": "鲛",
        "Pinyin": "jiǎo"
    },
    {
        "Pinyin": "shark"
    },
    {
        "Character": "跶",
        "Pinyin": "tà"
    },
    {
        "Pinyin": "stumble, slip"
    },
    {
        "Character": "謢"
    },
    {
        "Character": "陛",
        "Pinyin": "bì"
    },
    {
        "Pinyin": "steps leading throne; throne"
    },
    {
        "Character": "诎",
        "Pinyin": "qù"
    },
    {
        "Pinyin": "bend, stoop, crouch; to yield"
    },
    {
        "Character": "苹",
        "Pinyin": "pín"
    },
    {
        "Pinyin": "apple"
    },
    {
        "Character": "拺",
        "Pinyin": "cè"
    },
    {
        "Character": "趐",
        "Pinyin": "xuè"
    },
    {
        "Character": "靼",
        "Pinyin": "dá"
    },
    {
        "Pinyin": "tartars"
    },
    {
        "Character": "愔",
        "Pinyin": "yīn"
    },
    {
        "Pinyin": "comfortable, contented, peaceful"
    },
    {
        "Character": "捩",
        "Pinyin": "liè"
    },
    {
        "Pinyin": "twist with hands; snap, tear"
    },
    {
        "Character": "硐",
        "Pinyin": "tóng"
    },
    {
        "Character": "稹",
        "Pinyin": "zhěn"
    },
    {
        "Character": "淩",
        "Pinyin": "líng"
    },
    {
        "Pinyin": "pass over, cross, traverse"
    },
    {
        "Character": "顸",
        "Pinyin": "hān"
    },
    {
        "Pinyin": "large face, flat face; stupid"
    },
    {
        "Character": "桎",
        "Pinyin": "zhí"
    },
    {
        "Pinyin": "fetters, shackles, handcuffs"
    },
    {
        "Character": "刎",
        "Pinyin": "wěn"
    },
    {
        "Pinyin": "behead, cut throat"
    },
    {
        "Character": "榭",
        "Pinyin": "xiè"
    },
    {
        "Pinyin": "kiosk, pavilion"
    },
    {
        "Character": "蠕",
        "Pinyin": "ruǎn"
    },
    {
        "Pinyin": "eumenes polifomis, kind of wasp"
    },
    {
        "Character": "埂",
        "Pinyin": "gěng"
    },
    {
        "Pinyin": "ditches for irrigation; hole"
    },
    {
        "Character": "迵",
        "Pinyin": "tóng"
    },
    {
        "Character": "罡",
        "Pinyin": "gāng"
    },
    {
        "Pinyin": "the name of a certain stars; the god who is supposed to live in them"
    },
    {
        "Character": "颢",
        "Pinyin": "hào"
    },
    {
        "Pinyin": "luminous; white, hoary"
    },
    {
        "Character": "圜",
        "Pinyin": "yuán"
    },
    {
        "Pinyin": "circle, surround; encircle"
    },
    {
        "Character": "赁",
        "Pinyin": "rèn"
    },
    {
        "Pinyin": "rent, hire; hired person"
    },
    {
        "Character": "墬",
        "Pinyin": "dì"
    },
    {
        "Character": "纔",
        "Pinyin": "cái"
    },
    {
        "Pinyin": "talent, ability; just, only"
    },
    {
        "Character": "刨",
        "Pinyin": "bào"
    },
    {
        "Pinyin": "carpenter's plane; plane, level"
    },
    {
        "Character": "筊",
        "Pinyin": "jiǎo"
    },
    {
        "Pinyin": "bamboo rope; bamboo object used"
    },
    {
        "Character": "彊",
        "Pinyin": "qiáng"
    },
    {
        "Pinyin": "stubborn, uncompromising"
    },
    {
        "Character": "筌",
        "Pinyin": "quán"
    },
    {
        "Pinyin": "bamboo fish trap"
    },
    {
        "Character": "葄",
        "Pinyin": "zuò"
    },
    {
        "Pinyin": "mat"
    },
    {
        "Character": "蹊",
        "Pinyin": "xī"
    },
    {
        "Pinyin": "footpath, trail; track"
    },
    {
        "Character": "壸",
        "Pinyin": "kǔn"
    },
    {
        "Pinyin": "palace corridor or passageway"
    },
    {
        "Character": "欉",
        "Pinyin": "còng"
    },
    {
        "Character": "谖",
        "Pinyin": "xuān"
    },
    {
        "Pinyin": "forget; lie, cheat, deceive"
    },
    {
        "Character": "胫",
        "Pinyin": "jìng"
    },
    {
        "Pinyin": "shinbone; calf of leg"
    },
    {
        "Character": "宕",
        "Pinyin": "dàng"
    },
    {
        "Pinyin": "stone quarry; cave dwelling"
    },
    {
        "Character": "珪",
        "Pinyin": "guī"
    },
    {
        "Pinyin": "a jade table conferred upon feudal princes by the emperor as a symbol of dignity and authority"
    },
    {
        "Character": "椆",
        "Pinyin": "chóu"
    },
    {
        "Character": "揶",
        "Pinyin": "yé"
    },
    {
        "Pinyin": "make fun of, ridicule"
    },
    {
        "Character": "蓼",
        "Pinyin": "liǎo"
    },
    {
        "Pinyin": "smartweed, polygonum"
    },
    {
        "Character": "赀",
        "Pinyin": "zī"
    },
    {
        "Pinyin": "property; wealth; to count"
    },
    {
        "Character": "屄",
        "Pinyin": "bī"
    },
    {
        "Pinyin": "the vagina"
    },
    {
        "Character": "觎",
        "Pinyin": "yú"
    },
    {
        "Pinyin": "desire strongly, covet, long for"
    },
    {
        "Character": "鹧",
        "Pinyin": "zhè"
    },
    {
        "Pinyin": "partridge"
    },
    {
        "Character": "雕",
        "Pinyin": "diāo"
    },
    {
        "Pinyin": "engrave, inlay, carve; exhaust; used for U+9D70 鵰 an eagle, vulture"
    },
    {
        "Character": "掴",
        "Pinyin": "guó"
    },
    {
        "Pinyin": "box one's ears, slap"
    },
    {
        "Character": "賸",
        "Pinyin": "shèng"
    },
    {
        "Pinyin": "leftovers, residue, remains"
    },
    {
        "Character": "扈",
        "Pinyin": "hù"
    },
    {
        "Pinyin": "escort, retinue; insolent"
    },
    {
        "Character": "淬",
        "Pinyin": "cuì"
    },
    {
        "Pinyin": "temper; dye; soak; change, alter"
    },
    {
        "Character": "贲",
        "Pinyin": "bì"
    },
    {
        "Pinyin": "forge ahead; energetic; surname"
    },
    {
        "Character": "蝣",
        "Pinyin": "yóu"
    },
    {
        "Pinyin": "mayfly, emphemera strigata"
    },
    {
        "Character": "綑",
        "Pinyin": "kǔn"
    },
    {
        "Pinyin": "coil, roll, bundle, tie up"
    },
    {
        "Character": "潸",
        "Pinyin": "shān"
    },
    {
        "Pinyin": "weep; tears flowing"
    },
    {
        "Character": "瘐",
        "Pinyin": "yǔ"
    },
    {
        "Pinyin": "to die in prison from cold and hunger; to treat with cruelty"
    },
    {
        "Character": "玎",
        "Pinyin": "dīng"
    },
    {
        "Pinyin": "jingling, tinkling"
    },
    {
        "Character": "辍",
        "Pinyin": "chuò"
    },
    {
        "Pinyin": "stop, suspend, halt"
    },
    {
        "Character": "赈",
        "Pinyin": "zhèn"
    },
    {
        "Pinyin": "relieve, aid distressed; rich"
    },
    {
        "Character": "鸲",
        "Pinyin": "qú"
    },
    {
        "Pinyin": "mynah; Erithacus species (various)"
    },
    {
        "Character": "嘀",
        "Pinyin": "dí"
    },
    {
        "Pinyin": "backbite"
    },
    {
        "Character": "昃",
        "Pinyin": "zè"
    },
    {
        "Pinyin": "afternoon; the sun in the afternoon sky; to decline"
    },
    {
        "Character": "婬",
        "Pinyin": "yín"
    },
    {
        "Pinyin": "obscene, licentious, lewd"
    },
    {
        "Character": "囿",
        "Pinyin": "yòu"
    },
    {
        "Pinyin": "pen up; limit, constrain"
    },
    {
        "Character": "坳",
        "Pinyin": "ào"
    },
    {
        "Pinyin": "a hollow in the ground, a cavity, depression; undulating, depressed"
    },
    {
        "Character": "滮",
        "Pinyin": "biāo"
    },
    {
        "Pinyin": "flow; (Cant.) to ooze; to spurt"
    },
    {
        "Character": "蔘",
        "Pinyin": "sēn"
    },
    {
        "Pinyin": "ginseng; huge"
    },
    {
        "Character": "饨",
        "Pinyin": "tún"
    },
    {
        "Pinyin": "stuffed dumplings"
    },
    {
        "Character": "雹",
        "Pinyin": "báo"
    },
    {
        "Pinyin": "hail"
    },
    {
        "Character": "畀",
        "Pinyin": "bì"
    },
    {
        "Pinyin": "to give"
    },
    {
        "Character": "渭",
        "Pinyin": "wèi"
    },
    {
        "Pinyin": "name of a river in Shanxi"
    },
    {
        "Character": "掔",
        "Pinyin": "qiān"
    },
    {
        "Pinyin": "sturdy"
    },
    {
        "Character": "綩",
        "Pinyin": "wǎn"
    },
    {
        "Character": "胝",
        "Pinyin": "zhī"
    },
    {
        "Pinyin": "callous, corn"
    },
    {
        "Character": "搾",
        "Pinyin": "zhà"
    },
    {
        "Pinyin": "to crush with the hand, press, squeeze, extract"
    },
    {
        "Character": "軂",
        "Pinyin": "lào"
    },
    {
        "Character": "觊",
        "Pinyin": "jì"
    },
    {
        "Pinyin": "covet, long for, desire"
    },
    {
        "Character": "崽",
        "Pinyin": "zǎi"
    },
    {
        "Pinyin": "a child, a servant; a diminutive"
    },
    {
        "Character": "沓",
        "Pinyin": "tà"
    },
    {
        "Pinyin": "connected, joined; repeated"
    },
    {
        "Character": "褛",
        "Pinyin": "lǚ"
    },
    {
        "Pinyin": "lapel, collar; tattered, threadbare"
    },
    {
        "Character": "衮",
        "Pinyin": "gǔn"
    },
    {
        "Pinyin": "ceremonial dress worn by the emperor"
    },
    {
        "Character": "傩",
        "Pinyin": "nuó"
    },
    {
        "Pinyin": "rich"
    },
    {
        "Character": "虌",
        "Pinyin": "biē"
    },
    {
        "Character": "嗲",
        "Pinyin": "dia3"
    },
    {
        "Pinyin": "(Cant.) saliva; intensifying particle; inviting, coquettish; 嗲哋. 'daddy'"
    },
    {
        "Character": "柰",
        "Pinyin": "nài"
    },
    {
        "Pinyin": "crab-apple tree; endure, bear"
    },
    {
        "Character": "鏖",
        "Pinyin": "áo"
    },
    {
        "Pinyin": "to fight to the end, engage in a fierce battle"
    },
    {
        "Character": "崴",
        "Pinyin": "wēi"
    },
    {
        "Pinyin": "high, lofty; precipitous"
    },
    {
        "Character": "濠",
        "Pinyin": "háo"
    },
    {
        "Pinyin": "moat, trench, ditch"
    },
    {
        "Character": "鹜",
        "Pinyin": "mù"
    },
    {
        "Pinyin": "duck"
    },
    {
        "Character": "忒",
        "Pinyin": "tè"
    },
    {
        "Pinyin": "excessive; too; very-usually of objectionable things; to err; to mistake; changeable"
    },
    {
        "Character": "揄",
        "Pinyin": "yú"
    },
    {
        "Pinyin": "lift, raise; praise; hang; flap"
    },
    {
        "Character": "挛",
        "Pinyin": "lván"
    },
    {
        "Pinyin": "tangled; entwined; crooked"
    },
    {
        "Character": "缰",
        "Pinyin": "jiāng"
    },
    {
        "Pinyin": "reins, halter; bridle"
    },
    {
        "Character": "锉",
        "Pinyin": "cuò"
    },
    {
        "Pinyin": "carpenter's file, file smooth"
    },
    {
        "Character": "筵",
        "Pinyin": "yán"
    },
    {
        "Pinyin": "bamboo mat; feast, banquet"
    },
    {
        "Character": "鸪",
        "Pinyin": "gū"
    },
    {
        "Pinyin": "species of Taiwan pigeon"
    },
    {
        "Character": "糠",
        "Pinyin": "kāng"
    },
    {
        "Pinyin": "chaff, bran, husks; poor"
    },
    {
        "Character": "礴",
        "Pinyin": "bó"
    },
    {
        "Pinyin": "fill, extend"
    },
    {
        "Character": "亳",
        "Pinyin": "bó"
    },
    {
        "Pinyin": "name of district in Anhui; capital of Yin"
    },
    {
        "Character": "幔",
        "Pinyin": "màn"
    },
    {
        "Pinyin": "curtain, screen, tent"
    },
    {
        "Character": "宓",
        "Pinyin": "mì"
    },
    {
        "Pinyin": "quiet, silent; in good health"
    },
    {
        "Character": "瓒",
        "Pinyin": "zàn"
    },
    {
        "Pinyin": "ceremonial libation cup"
    },
    {
        "Character": "陕",
        "Pinyin": "shǎn"
    },
    {
        "Pinyin": "mountain pass; Shaanxi province"
    },
    {
        "Character": "腱",
        "Pinyin": "jiàn"
    },
    {
        "Pinyin": "tendons"
    },
    {
        "Character": "誏",
        "Pinyin": "lǎng"
    },
    {
        "Character": "忾",
        "Pinyin": "kài"
    },
    {
        "Pinyin": "anger, wrath, hatred, enmity"
    },
    {
        "Character": "鳌",
        "Pinyin": "áo"
    },
    {
        "Pinyin": "huge sea turtle"
    },
    {
        "Character": "玷",
        "Pinyin": "diàn"
    },
    {
        "Pinyin": "flaw in gem; flaw in character"
    },
    {
        "Character": "谗",
        "Pinyin": "chán"
    },
    {
        "Pinyin": "slander, defame, misrepresent"
    },
    {
        "Character": "鬟",
        "Pinyin": "huán"
    },
    {
        "Pinyin": "dress hair in coiled knot; maid"
    },
    {
        "Character": "栲",
        "Pinyin": "kǎo"
    },
    {
        "Pinyin": "mangrove"
    },
    {
        "Character": "篓",
        "Pinyin": "lǒu"
    },
    {
        "Pinyin": "bamboo basket"
    },
    {
        "Character": "旌",
        "Pinyin": "jīng"
    },
    {
        "Pinyin": "banner or flag adorned with feathers; to signal"
    },
    {
        "Character": "幄",
        "Pinyin": "wò"
    },
    {
        "Pinyin": "tent; mosquito net"
    },
    {
        "Character": "翳",
        "Pinyin": "yì"
    },
    {
        "Pinyin": "shade, screen; to hide, screen"
    },
    {
        "Character": "棻",
        "Pinyin": "fén"
    },
    {
        "Pinyin": "kind of wood from which perfume"
    },
    {
        "Character": "荞",
        "Pinyin": "qiáo"
    },
    {
        "Pinyin": "buckwheat"
    },
    {
        "Character": "靛",
        "Pinyin": "diàn"
    },
    {
        "Pinyin": "indigo; any blue dye"
    },
    {
        "Character": "铛",
        "Pinyin": "dāng"
    },
    {
        "Pinyin": "frying pan; warming vessel"
    },
    {
        "Character": "唅",
        "Pinyin": "hān"
    },
    {
        "Pinyin": "a sound; to put in the mouth; (Cant.) to grunt, grumble"
    },
    {
        "Character": "轭",
        "Pinyin": "è"
    },
    {
        "Pinyin": "yoke, collar; to restrain"
    },
    {
        "Character": "壕",
        "Pinyin": "háo"
    },
    {
        "Pinyin": "trench, ditch, channel, moat"
    },
    {
        "Character": "褟",
        "Pinyin": "dá"
    },
    {
        "Pinyin": "inner shirt or singlet"
    },
    {
        "Character": "羌",
        "Pinyin": "qiāng"
    },
    {
        "Pinyin": "Qiang nationality; surname"
    },
    {
        "Character": "撂",
        "Pinyin": "lvè"
    },
    {
        "Pinyin": "put down, put aside; drop"
    },
    {
        "Character": "犷",
        "Pinyin": "guǎng"
    },
    {
        "Pinyin": "fierce, rude, uncivilized"
    },
    {
        "Character": "讫",
        "Pinyin": "qì"
    },
    {
        "Pinyin": "finish; conclude, stop; exhaust"
    },
    {
        "Character": "洵",
        "Pinyin": "xún"
    },
    {
        "Pinyin": "true, real, truly, really"
    },
    {
        "Character": "锭",
        "Pinyin": "dìng"
    },
    {
        "Pinyin": "spindle, slab, cake, tablet"
    },
    {
        "Character": "髻",
        "Pinyin": "jì"
    },
    {
        "Pinyin": "hair rolled up in a bun, topknot"
    },
    {
        "Character": "齰",
        "Pinyin": "cuò"
    },
    {
        "Pinyin": "to bite"
    },
    {
        "Character": "胼",
        "Pinyin": "pián"
    },
    {
        "Pinyin": "callus, calluses"
    },
    {
        "Character": "桹",
        "Pinyin": "láng"
    },
    {
        "Pinyin": "palm"
    },
    {
        "Character": "砝",
        "Pinyin": "fá"
    },
    {
        "Pinyin": "balance weights"
    },
    {
        "Character": "涔",
        "Pinyin": "cén"
    },
    {
        "Pinyin": "river in Shaanxi; murky torrent"
    },
    {
        "Character": "仃",
        "Pinyin": "dīng"
    },
    {
        "Pinyin": "lonely, solitary"
    },
    {
        "Character": "黔",
        "Pinyin": "qián"
    },
    {
        "Pinyin": "black; Guizhou"
    },
    {
        "Character": "昂",
        "Pinyin": "áng"
    },
    {
        "Pinyin": "rise, raise; proud, bold; upright"
    },
    {
        "Character": "涸",
        "Pinyin": "hé"
    },
    {
        "Pinyin": "dried up; exhausted, tired; dry"
    },
    {
        "Character": "婀",
        "Pinyin": "ē"
    },
    {
        "Pinyin": "be beautiful, be graceful"
    },
    {
        "Character": "搀",
        "Pinyin": "chān"
    },
    {
        "Pinyin": "to give a helping hand; to support, hold up"
    },
    {
        "Character": "梏",
        "Pinyin": "gù"
    },
    {
        "Pinyin": "handcuffs, manacles, fetters"
    },
    {
        "Character": "蛔",
        "Pinyin": "huí"
    },
    {
        "Pinyin": "tapeworm"
    },
    {
        "Character": "偆",
        "Pinyin": "chǔn"
    },
    {
        "Character": "纂",
        "Pinyin": "zuǎn"
    },
    {
        "Pinyin": "edit, compile; topknot, chignon"
    },
    {
        "Character": "堀",
        "Pinyin": "kū"
    },
    {
        "Pinyin": "cave, hole"
    },
    {
        "Character": "倬",
        "Pinyin": "zhuō"
    },
    {
        "Pinyin": "noticeable, large; clear, distinct"
    },
    {
        "Character": "晟",
        "Pinyin": "chéng"
    },
    {
        "Pinyin": "clear, bright; splendor, brightness"
    },
    {
        "Character": "纮",
        "Pinyin": "hóng"
    },
    {
        "Pinyin": "string; vast, expansive"
    },
    {
        "Character": "锒",
        "Pinyin": "láng"
    },
    {
        "Pinyin": "lock lanthanum"
    },
    {
        "Character": "琱",
        "Pinyin": "diāo"
    },
    {
        "Pinyin": "engrave, inlay, carve; exhaust"
    },
    {
        "Character": "玹",
        "Pinyin": "xuán"
    },
    {
        "Character": "凊",
        "Pinyin": "qìng"
    },
    {
        "Pinyin": "surname"
    },
    {
        "Character": "寤",
        "Pinyin": "wù"
    },
    {
        "Pinyin": "few, scarce; empty, deserted"
    },
    {
        "Character": "鲔",
        "Pinyin": "wěi"
    },
    {
        "Pinyin": "kind of sturgeon, tuna"
    },
    {
        "Character": "囥",
        "Pinyin": "kàng"
    },
    {
        "Pinyin": "hide"
    },
    {
        "Character": "珞",
        "Pinyin": "luò"
    },
    {
        "Pinyin": "kind of necklace"
    },
    {
        "Character": "蚜",
        "Pinyin": "yá"
    },
    {
        "Pinyin": "plant louse, aphids"
    },
    {
        "Character": "豋",
        "Pinyin": "dēng"
    },
    {
        "Pinyin": "ceremonial vessel"
    },
    {
        "Character": "揾",
        "Pinyin": "wèn"
    },
    {
        "Pinyin": "wipe off; press down with knuckle; to immerse; (Cant.) to search, look for"
    },
    {
        "Character": "倨",
        "Pinyin": "jù"
    },
    {
        "Pinyin": "arrogant, haughty, rude"
    },
    {
        "Character": "皕",
        "Pinyin": "bī"
    },
    {
        "Character": "戡",
        "Pinyin": "kān"
    },
    {
        "Pinyin": "subjugate, subdue, quell; kill"
    },
    {
        "Character": "迤",
        "Pinyin": "yǐ"
    },
    {
        "Pinyin": "wind; walk out of straight path"
    },
    {
        "Character": "埼",
        "Pinyin": "qí"
    },
    {
        "Pinyin": "headland"
    },
    {
        "Character": "膑",
        "Pinyin": "bìn"
    },
    {
        "Pinyin": "the kneecap"
    },
    {
        "Character": "儆",
        "Pinyin": "jǐng"
    },
    {
        "Pinyin": "warn; warning"
    },
    {
        "Character": "擤",
        "Pinyin": "xǐng"
    },
    {
        "Pinyin": "to blow the nose with fingers"
    },
    {
        "Character": "纨",
        "Pinyin": "wán"
    },
    {
        "Pinyin": "white silk, fine silk; gauze"
    },
    {
        "Character": "忻",
        "Pinyin": "xīn"
    },
    {
        "Pinyin": "delightful, joyful, pleasant"
    },
    {
        "Character": "蠔",
        "Pinyin": "háo"
    },
    {
        "Pinyin": "oyster"
    },
    {
        "Character": "熇",
        "Pinyin": "hè"
    },
    {
        "Pinyin": "bake"
    },
    {
        "Character": "囍",
        "Pinyin": "xǐ"
    },
    {
        "Pinyin": "double happiness"
    },
    {
        "Character": "毐",
        "Pinyin": "ǎi"
    },
    {
        "Character": "瓯",
        "Pinyin": "ōu"
    },
    {
        "Pinyin": "bowl, cup; small tray"
    },
    {
        "Character": "祚",
        "Pinyin": "zuò"
    },
    {
        "Pinyin": "throne; bless; blessing, happiness"
    },
    {
        "Character": "蜉",
        "Pinyin": "fú"
    },
    {
        "Pinyin": "mayfly; kind of large insect"
    },
    {
        "Character": "骈",
        "Pinyin": "pián"
    },
    {
        "Pinyin": "team of horses; associate, join"
    },
    {
        "Character": "怼",
        "Pinyin": "duì"
    },
    {
        "Pinyin": "hate, abhor; hatred, resentment"
    },
    {
        "Character": "褊",
        "Pinyin": "biǎn"
    },
    {
        "Pinyin": "cramped, narrow, crowded; mean"
    },
    {
        "Character": "镑",
        "Pinyin": "bàng"
    },
    {
        "Pinyin": "pound sterling"
    },
    {
        "Character": "熏",
        "Pinyin": "xūn"
    },
    {
        "Pinyin": "smoke, fog, vapor; smoke, cure"
    },
    {
        "Character": "俚",
        "Pinyin": "lǐ"
    },
    {
        "Pinyin": "rustic, vulgar, unpolished; mean"
    },
    {
        "Character": "恪",
        "Pinyin": "kè"
    },
    {
        "Pinyin": "respectful, reverent"
    },
    {
        "Character": "觔",
        "Pinyin": "jīn"
    },
    {
        "Pinyin": "catty"
    },
    {
        "Character": "鎯",
        "Pinyin": "luǒ"
    },
    {
        "Character": "踫",
        "Pinyin": "pèng"
    },
    {
        "Pinyin": "collide, bump into"
    },
    {
        "Character": "弁",
        "Pinyin": "biàn"
    },
    {
        "Pinyin": "conical cap worn during Zhou dynasty"
    },
    {
        "Character": "啣",
        "Pinyin": "xián"
    },
    {
        "Pinyin": "hold in mouth; harbor, cherish"
    },
    {
        "Character": "锟",
        "Pinyin": "kūn"
    },
    {
        "Pinyin": "ancient treasured sword"
    },
    {
        "Character": "芍",
        "Pinyin": "shuò"
    },
    {
        "Pinyin": "peony; water chestnuts"
    },
    {
        "Character": "荨",
        "Pinyin": "xún"
    },
    {
        "Pinyin": "nettle"
    },
    {
        "Character": "擢",
        "Pinyin": "zhuó"
    },
    {
        "Pinyin": "pull up, draw up; select"
    },
    {
        "Character": "盹",
        "Pinyin": "dùn"
    },
    {
        "Pinyin": "to doze; to nap; to nod"
    },
    {
        "Character": "听",
        "Pinyin": "tīng"
    },
    {
        "Pinyin": "hear, listen; understand; obey"
    },
    {
        "Character": "旸",
        "Pinyin": "yáng"
    },
    {
        "Pinyin": "rising sun; sunshine"
    },
    {
        "Character": "斡",
        "Pinyin": "wò"
    },
    {
        "Pinyin": "revolve, rotate, turn"
    },
    {
        "Character": "痍",
        "Pinyin": "yí"
    },
    {
        "Pinyin": "wound, bruise, sore"
    },
    {
        "Character": "忸",
        "Pinyin": "niǔ"
    },
    {
        "Pinyin": "blush, be bashful, be ashamed"
    },
    {
        "Character": "轾",
        "Pinyin": "zhì"
    },
    {
        "Pinyin": "low rear portion of cart"
    },

    //////////// Added ////////////
    {
        "Character": "纫",
        "Pinyin": "rèn"
    },
    {
        "Character": "三",
        "Pinyin": "sān"
    },
    {
        "Character": "茨",
        "Pinyin": "cí"
    },
    {
        "Character": "著",
        "Pinyin": "zhe"
    },
    {
        "Character": "覆",
        "Pinyin": "fù"
    }
];