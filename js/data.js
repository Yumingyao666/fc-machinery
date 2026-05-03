// --- 1. 产品数据分分类存储 ---

// 1.1 破碎机 (Crushing)
const crushingProducts = [
    {
        id: 1,
        name: { zh: "颚式破碎机", en: "Jaw Crusher", ar: "كسارة فكية" },
        category: "crushing",
        price: "询价",
        image: "./css/主页破碎机.jpg",
        desc: { zh: "高性能破碎，适用于硬质岩石和矿石的粗碎。", en: "High-performance crushing, suitable for coarse crushing of hard rocks and ores.", ar: "سحق عالي الأداء، مناسب للسحق الخشن للصخور الصلبة والخامات." }
    },
    {
        id: 2,
        name: { zh: "锤式破碎机", en: "Hammer Crusher", ar: "كسارة مطرقية" },
        category: "crushing",
        price: "询价",
        image: "./css/锤式破碎机.jpg",
        desc: { zh: "经典可靠，模块化设计，易于维护。", en: "Classic reliability, modular design, easy to maintain.", ar: "موثوقية كلاسيكية، تصميم معياري، سهل الصيانة." }
    },
    {
        id: 3,
        name: { zh: "箱式破碎机", en: "Box Crusher", ar: "كسارة صندوقية" },
        category: "crushing",
        price: "询价",
        image: "./css/箱式破碎机.jpg",
        desc: { zh: "紧凑便携，适用于实验室和小型加工厂。", en: "Compact and portable, suitable for laboratories and small processing plants.", ar: "مدمجة ومحمولة، مناسبة للمختبرات ومصانع المعالجة الصغيرة." }
    },
     {
        id: 4,
        name: { zh: "对辊式破碎机", en: "Double Roll Crusher", ar: "كسارة مزدوجة الأسطوانة" },
        category: "crushing",
        price: "询价",
        image: "./css/对辊式破碎机.jpg",
        desc: { zh: "适用于中硬和软矿石的中、细碎作业。", en: "Suitable for medium and fine crushing of medium-hard and soft ores.", ar: "مناسب للسحق المتوسط والناعم للخامات متوسطة الصلابة واللينة." }
    },
   
];

// 1.2 球磨机 (Milling)
const millingProducts = [
    {
        id: 1,
        name: { zh: "900×1800型球磨机", en: "Model 900×1800 Ball Mill", ar: "مطحنة كرات موديل 900×1800" },
        category: "milling",
        price: "询价",
        image: "./css/900×1800球磨机.jpg",
        desc: { zh: "细磨关键设备，运行成本低。", en: "Key equipment for fine grinding, low operating cost.", ar: "معدات رئيسية للطحن الناعم، تكلفة تشغيل منخفضة." }
    },
    {
        id: 2,
        name: { zh: "900×3000型球磨机", en: "Model 900×3000 Ball Mill", ar: "مطحنة كرات موديل 900×3000" },
        category: "milling",
        price: "询价",
        image: "./css/900×3000球磨机.jpg",
        desc: { zh: "强制排矿，产能高，适用于粗磨。", en: "Forced discharge, high capacity, suitable for coarse grinding.", ar: "تفريغ قسري، سعة عالية، مناسبة للطحن الخشن." }
    },
    {
        id: 3,
        name: { zh: "1200×4500型球磨机", en: "Model 1200×4500 Ball Mill", ar: "مطحنة كرات موديل 1200×4500" },
        category: "milling",
        price: "询价",
        image: "./css/1200×4500球磨机.jpg",
        desc: { zh: "强制排矿，产能高，适用于粗磨。", en: "Forced discharge, high capacity, suitable for coarse grinding.", ar: "تفريغ قسري، سعة عالية، مناسبة للطحن الخشن." }
    },
      {
        id: 4,
        name: { zh: "1500×4500型球磨机", en: "Model 1500×4500 Ball Mill", ar: "مطحنة كرات موديل 1500×4500" },
        category: "milling",
        price: "询价",
        image: "./css/1500×4500球磨机.jpg",
        desc: { zh: "强制排矿，产能高，适用于粗磨。", en: "Forced discharge, high capacity, suitable for coarse grinding.", ar: "تفريغ قسري، سعة عالية، مناسبة للطحن الخشن." }
    }
];

// 1.3 分级设备 (Separation)
const separationProducts = [
    {
        id: 1,
        name: { zh: "振动筛", en: "Vibrating Screen", ar: "غربال اهتزازي" },
        category: "separation",
        price: "询价",
        image: "./css/振动筛.jpg",
        desc: { zh: "高频振动筛分，适用于各种矿石的粒度分级。", en: "High-frequency vibrating screening, suitable for particle size grading of various ores.", ar: "غربلة اهتزازية عالية التردد، مناسبة لتصنيف حجم الجسيمات لمختلف الخامات." }
    },
    {
        id: 2,
        name: { zh: "螺旋分级机", en: "Spiral Classifier", ar: "مصنف حلزوني" },
        category: "separation",
        price: "询价",
        image: "./css/螺旋分级机.jpg",
        desc: { zh: "借助固体颗粒比重不同在液体中沉淀速度不同的原理进行分级。", en: "Classification based on different sedimentation rates of solid particles in liquid.", ar: "التصنيف على أساس اختلاف معدلات ترسيب الجسيمات الصلبة في السائل." }
    },
    {
        id: 3,
        name: { zh: "磁选机", en: "Magnetic Separator", ar: "فاصل مغناطيسي" },
        category: "separation",
        price: "询价",
        image: "./css/磁选机.jpg",
        desc: { zh: "利用矿物之间的磁性差异进行分选，回收率高。", en: "Separation using magnetic differences between minerals, high recovery rate.", ar: "الفصل باستخدام الاختلافات المغناطيسية بين المعادن، معدل استرداد مرتفع." }
    },
    
];

// 1.4 湿碾机 (Wet Pan Mill)
const wetPanProducts = [
    {
        id: 1,
        name: { zh: "1100型湿碾机", en: "Model 1100 Wet Pan Mill", ar: "مطحنة الرطب موديل 1100" },
        category: "wet_pan_mill",
        image: "./css/1100型湿碾机.jpg"
    },
    {
        id: 2,
        name: { zh: "1200型湿碾机", en: "Model 1200 Wet Pan Mill", ar: "مطحنة الرطب موديل 1200" },
        category: "wet_pan_mill",
        image: "./css/1200型湿碾机.jpg"
    },
    {
        id: 3,
        name: { zh: "1400型湿碾机", en: "Model 1400 Wet Pan Mill", ar: "مطحنة الرطب موديل 1400" },
        category: "wet_pan_mill",
        image: "./css/1400型湿碾机.jpg"
    }
];

// --- 2. 汇总导出数据 ---
window.allProducts = [
    ...crushingProducts,
    ...millingProducts,
    ...separationProducts,
    ...wetPanProducts
];

// 分类信息 (用于页面标题和描述)
window.productCategories = {
    wet_pan_mill: {
        id: "wet_pan_mill",
        name: { zh: "湿碾机", en: "Wet Pan Mill", ar: "مطحنة الرطب" },
        desc: {
            zh: "湿碾机 高效湿磨，结构坚固耐用，专为金矿及其他贵金属矿设计，研磨与浸出同步进行，操作简单，能耗低。",
            en: "Wet pan mill: High-efficiency wet grinding, durable structure, specially designed for gold and other precious metal mines, simultaneous grinding and leaching, simple operation, low energy consumption.",
            ar: "مطحنة الرطب: طحن رطب عالي الكفاءة، هيكل متين، مصممة خصيصاً لمناجم الذهب والمعادن الثمينة الأخرى، طحن وترشيح متزامن، تشغيل بسيط، استهلاك منخفض للطاقة."
        }
    },
    crushing: {
        id: "crushing",
        name: { zh: "破碎机", en: "Crushers", ar: "كسارات" },
        desc: {
            zh: "包括多种结种类的破碎机，适用于各种硬质矿石的粗碎，中细碎作业，设备可靠耐用，破碎效率高。",
            en: "Including various types of crushers, suitable for coarse, medium, and fine crushing of various hard ores. The equipment is reliable, durable, and has high crushing efficiency.",
            ar: "بما في ذلك أنواع مختلفة من الكسارات، مناسبة للسحق الخشن والمتوسط والناعم لمختلف الخامات الصلبة. المعدات موثوقة ومتينة وتتميز بكفاءة سحق عالية."
        }
    },
    milling: {
        id: "milling",
        name: { zh: "球磨机", en: "Milling Machines", ar: "مطاحن" },
        desc: {
            zh: "高效研磨，结构稳固，节能效果显著，广泛适用于各种金属矿与非金属矿的细磨作业。",
            en: "High-efficiency grinding, stable structure, significant energy-saving effect, widely applicable to fine grinding of various metallic and non-metallic ores.",
            ar: "طحن عالي الكفاءة، هيكل مستقر، تأثير كبير في توفير الطاقة، قابل للتطبيق على نطاق واسع في الطحن الناعم لمختلف الخامات المعدنية وغير المعدنية."
        }
    },
    separation: {
        id: "separation",
        name: { zh: "分级设备", en: "Separation Equipment", ar: "معدات التصنيف" },
        desc: {
            zh: "通过振动筛，分级机，磁选机等设备，实现对矿石精准分级，对矿浆粒度分级以及磁性矿物的分选等作业，具有结构合理、筛分效率高、维护简便的特点。是矿石分级的必备设备。",
            en: "Through equipment such as vibrating screens, classifiers, and magnetic separators, it achieves precise ore grading, pulp particle size grading, and magnetic mineral separation. It features reasonable structure, high screening efficiency, and easy maintenance. It is essential equipment for ore grading.",
            ar: "من خلال معدات مثل الغرابيل الاهتزازية والمصنفات والفواصل المغناطيسية، فإنه يحقق تصنيفاً دقيقاً للخام وتصنيفاً لحجم جسيمات اللب وفصل المعادن المغناطيسية. يتميز بهيكل معقول وكفاءة غربلة عالية وصيانة سهلة. إنه معدات أساسية لتصنيف الخام."
        }
    }
};

// --- 3. 首页特定板块数据 ---

// 首页推荐产品数据
window.recommendationSection = {
    title: { zh: "产品推荐", en: "Product Recommendation", ar: "توصية المنتج" },
    subtitle: {
        zh: "公司生产的产品有矿用球磨机、金矿专用湿碾机，各种破碎机、磁选机、浮选机、等矿业系列设备。",
        en: "Our products include mining ball mills, specialized wet pan mills for gold mines, and various series of mining equipment such as crushers, magnetic separators, and flotation machines.",
        ar: "تشمل منتجاتنا مطاحن الكرات التعدينية، ومطاحن الرطب المتخصصة لمناجم الذهب، ومجموعات متنوعة من معدات التعدين مثل الكسارات والفواصل المغناطيسية وآلات التعويم."
    },
    products: [
        {
            id: "recom_1",
            name: { zh: "湿碾机", en: "Wet Pan Mill", ar: "مطحنة الرطب" },
            desc: {
                zh: "高效湿磨，结构坚固耐用，专为金矿及其他贵金属矿设计，研磨与浸出同步进行，操作简单，能耗低。",
                en: "High-efficiency wet grinding, durable structure, specially designed for gold and precious metal mines, simultaneous grinding and leaching.",
                ar: "طحن رطب عالي الكفاءة، هيكل متين، مصمم خصيصاً لمناجم الذهب والمعادن الثمينة، طحن وترشيح متزامن."
            },
            image: "./css/主页湿碾机.png ",
            watermark: "FCM"
        },
        {
            id: "recom_2",
            name: { zh: "球磨机", en: "Ball Mill", ar: "مطحنة الكرات" },
            desc: {
                zh: "高效研磨，结构稳固，节能效果显著，广泛适用于各种金属矿与非金属矿的细磨作业。",
                en: "High-efficiency grinding, stable structure, significant energy saving, suitable for fine grinding of various ores.",
                ar: "طحن عالي الكفاءة، هيكل مستقر، توفير كبير في الطاقة، مناسب للطحن الناعم لمختلف الخامات."
            },
            image: "./css/主页球磨机.jpg ",
            watermark: "FCM"
        },
        {
            id: "recom_3",
            name: { zh: "破碎机", en: "Crusher", ar: "كسارة" },
            desc: {
                zh: "包括锷式破碎机，锤式破碎机，对辊破碎机等，适用于各种硬质矿石的粗碎，细碎。",
                en: "Including jaw crushers, hammer crushers, and roll crushers, suitable for coarse and fine crushing of hard ores.",
                ar: "بما في ذلك الكسارات الفكية والكسارات المطرقة والكسارات الأسطوانية، مناسبة للسحق الخشن والناعم للخامات الصلبة."
            },
            image: "./css/主页破碎机.jpg ",

            watermark: "FCM"
        },
        {
            id: "recom_4",
            name: { zh: "分级设备", en: "Separation Equipment", ar: "معدات التصنيف" },
            desc: {
                zh: "包括振动筛，浮选机，磁选机等对矿石进行筛分，分级实效率高，回收率好，是选矿的核心设备。",
                en: "Including vibrating screens, flotation machines, and magnetic separators for ore screening and grading with high efficiency.",
                ar: "بما في ذلك الغرابيل الاهتزازية وآلات التعويم والفواصل المغناطيسية لغربلة وتصنيف الخام بكفاءة عالية."
            },
            image: "./css/主页分级设备.jpg ",

            watermark: "FCM"
        }
    ]
};

// 首页“成功从选择赋掣机械开始”板块数据
window.successSection = {
    title: { zh: "成功从选择赋掣机械开始", en: "Success Begins with Choosing FUCHE Machinery", ar: "النجاح يبدأ باختيار فوتشي للآلات" },
    subtitle: {
        zh: "二十年来，赋掣机械秉承“专业可靠，合作共赢”的理念，生产的破碎机，湿碾机，球磨机，分级设备等设备，历经磨练，确立了中东，非洲乃至全球矿业装备制造的知名品牌地位。",
        en: "For twenty years, FUCHE Machinery has adhered to the philosophy of 'Professional, Reliable, and Win-Win Cooperation'. Our equipment, including crushers, wet pan mills, ball mills, and separation equipment, has established a well-known brand position in the Middle East, Africa, and global mining equipment manufacturing.",
        ar: "على مدى عشرين عاماً، التزمت فوتشي للآلات بفلسفة 'الاحتراف والموثوقية والتعاون المربح للجانبين'. لقد أثبتت معداتنا، بما في ذلك الكسارات ومطاحن الرطب ومطاحن الكرات ومعدات التصنيف، مكانة علامة تجارية معروفة في الشرق الأوسط وأفريقيا وتصنيع معدات التعدين العالمية."
    },
    cards: [
        {
            type: "large",
            title: { zh: "专业专注", en: "Professional Focus", ar: "التركيز المهني" },
            desc: { zh: "科技缔造高品质，对技术永不止步的革新", en: "Technology creates high quality, non-stop innovation in technology", ar: "التكنولوجيا تخلق جودة عالية، ابتكار لا يتوقف في التكنولوجيا" },
            image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80"
        },
        {
            type: "small",
            title: { zh: "客户服务", en: "Customer Service", ar: "خدمة العملاء" },
            desc: { zh: "一次交道 永远朋友", en: "One interaction, friends forever", ar: "تعامل واحد، أصدقاء للأبد" },
            image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80"
        },
        {
            type: "small",
            title: { zh: "售后服务", en: "After-sales Service", ar: "خدمة ما بعد البيع" },
            desc: { zh: "7*24h在线为您提供专业 贴心服务", en: "7*24h online to provide you with professional and attentive service", ar: "متواجدون على مدار الساعة طوال أيام الأسبوع لنقدم لك خدمة احترافية ومتميزة" },
            image: "./css/cpxx.png"
        }
    ]
};
