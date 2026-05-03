document.addEventListener('DOMContentLoaded', () => {
    // 0. 刷新页面自动回顶部
    window.scrollTo(0, 0);
    if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual';
    }

    // 1. 多语言字典 (外贸独立站专业版)
    const i18n = {
        zh: {
            nav_home: "首页",
            nav_products: "产品中心",
            nav_about: "关于我们",
            nav_contact: "联系我们",
            nav_quote: "获取报价",
            hero_badge: "赋掣机械",
            hero_title_1: "矿山装备专家 值得信赖伙伴",
            hero_title_2: "赋掣机械：专业可靠 携手共赢",
            hero_badge_2: "质量保障",
            hero_subtitle: "专业矿山设备制造商，二十年匠心铸就，以领先技术和可靠品质，助力全球矿山高效开采、稳定运行。",
            hero_subtitle_2: "成立于2005年，深耕矿山设备二十载，我们以卓越品质与可靠性能，为全球矿业客户提供高效率、高耐用的一站式装备解决方案。",
            hero_btn: "查看产品",
            hero_more: "了解更多 →",
            trust_text: "深受 200 多个国家/地区的 500 多家企业的信赖",
            feat_header: "为什么选择我们",
            feat_subheader: "专业、可靠、高效",
            feat1_title: "极速物流",
            feat1_desc: "集成全球供应链，确保产品安全、快速送达。",
            feat2_title: "质量控制",
            feat2_desc: "严格的多级检验流程，确保 100% 产品品质。",
            feat3_title: "定制化服务",
            feat3_desc: "专业的 OEM/ODM 解决方案，满足您的品牌个性化需求。",
            prod_title: "产品展示",
            prod_subtitle: "发现适合您的矿山装备，提升开采效率与收益。",
            filter_all: "全部",
            filter_elec: "电子产品",
            filter_home: "家居用品",
            filter_ind: "工业用品",
            btn_details: "查看详情",
            cat_ele: "电子类",
            cat_acc: "配饰类",
            cat_ind: "工业类",
            cat_hom: "家居类",
            cat_cru: "破碎机",
            cat_mil: "球磨机",
            cat_sep: "分级设备",
            cat_wet: "湿碾机",
            btn_more: "更多 +",
            about_title: "赋掣机械是一家领先的设备制造与国际贸易的企业",
            about_subtitle: "成立于2005年，深耕矿山机械领域二十载",
            about_p1: "赋掣机械是一家领先的国际贸易与制造企业，致力于提供高品质的采矿、破碎和筛分设备。公司总部占地面积超过50,000平方米，拥有现代化的生产线和专业的研发团队。",
            about_p2: "凭借先进的技术和严格的质量控制体系，我们的年产能已达到10,000台。产品已成功出口至中亚、中东、非洲等多个国家和地区，深受全球客户信赖。",

            // 新增关于我们内容
            vision_title: "企业愿景与使命",
            vision_text: "成为全球领先的矿山机械解决方案提供商，通过技术创新和卓越服务为客户创造持久价值。",
            mission_title: "我们的使命",
            mission_text: "坚持品质至上，推动行业进步，助力全球基础设施建设与资源开发。",

            history_title: "发展历程",
            hist_2005_h: "扬帆起航",
            hist_2005_d: "公司正式成立，进军矿山机械外贸领域。",
            hist_2012_h: "规模扩张",
            hist_2012_d: "现代化工厂落成，占地面积突破 50,000 平方米。",
            hist_2018_h: "技术突破",
            hist_2018_d: "自主研发团队成立，年产能达到 10,000 台。",
            hist_2026_h: "全球布局",
            hist_2026_d: "产品遍布全球 50+ 国家，建立完善的服务网络。",

            strength_title: "核心实力",
            strength_1_h: "制造规模",
            strength_1_d: "50,000+ 平方米现代化工厂",
            strength_2_h: "研发能力",
            strength_2_d: "专业团队驱动技术创新",
            strength_3_h: "年产能",
            strength_3_d: "年产 10,000 台精密设备",
            strength_4_h: "品质保障",
            strength_4_d: "多重国际认证与严格质检",

            global_title: "全球布局",
            global_desc: "产品远销中亚、中东及非洲市场",
            market_asia: "中亚市场",
            market_me: "中东地区",
            market_africa: "非洲市场",
            market_sa: "南美市场",

            years_exp: "20年行业经验",
            stat1_num: "2005",
            stat1_text: "成立年份",
            stat2_num: "50,000+",
            stat2_text: "工厂面积 (m²)",
            contact_title: "开启您的合作伙伴关系",
            contact_desc: "准备好扩展您的业务了吗？立即联系我们的采购专家。",
            label_addr: "办公地址",
            val_addr: "中国 河南 郑州",
            label_email: "邮件支持",
            label_whatsapp: "WhatsApp",
            form_name: "您的姓名",
            form_email: "您的邮箱",
            form_subject: "主题",
            form_msg: "您的信息",
            form_btn: "发送信息",
            footer_desc: "您值得信赖的矿业专家，矿山设备出口全球。",
            footer_quick: "快速链接",
            footer_rights: "保留所有权利。",
            contact_badge: "联系我们",
            label_hours: "营业时间",
            val_hours: "周一至周五: 9:00 AM - 6:00 PM (GMT+8)",
            stat_support: "24/7",
            stat_support_text: "在线支持",
            why_contact_title: "全球海运网络",
            why_contact_desc: "我们在全球各国取得了进口认证，满足全球各国清关标准，可发往世界任意国家，拥有成熟完善的全球海运运输渠道。",
            footer_contact: "联系信息",
            footer_newsletter: "订阅动态",
            newsletter_text: "订阅以获取最新的产品动态和贸易新闻。",
            footer_privacy: "隐私政策",
            footer_terms: "服务条款",
            search_placeholder: "搜索产品...",
            price_inquiry: "询价",
            recom_title: "产品推荐",
            recom_subtitle: "公司生产的产品有矿用磨机、管磨机、回转窑、冷却机、转筒烘干机、磁选机、浮选机、浓缩机、破碎机九大系列设备。",
            prod_ball_mill: "球磨机",
            prod_rotary_kiln: "回转窑",
            prod_mag_sep: "磁选机",
            prod_sand_maker: "制砂机",
            btn_consult: "产品咨询",
            desc_ball_mill: "高效研磨，结构稳固，广泛应用于水泥、硅酸盐制品及新型建筑材料。",
            desc_rotary_kiln: "高温煅烧设备，运行平稳，热效率高，是水泥生产的核心设备。",
            desc_mag_sep: "强磁场选矿，分选效果好，适用于磁铁矿、赤铁矿等多种矿石。",
            desc_sand_maker: "高产低耗，成品粒型优异，满足高标准建筑用砂需求。"
        },
        en: {
            nav_home: "Home",
            nav_products: "Products",
            nav_about: "About Us",
            nav_contact: "Contact",
            nav_quote: "Get a Quote",
            hero_badge: "FUCHE MACHINERY",
            hero_title_1: "Mining Equipment Expert, Trusted Partner",
            hero_title_2: "FUCHE Machinery: Professional, Reliable, Win-Win",
            hero_badge_2: "QUALITY ASSURANCE",
            hero_subtitle: "Professional mining equipment manufacturer with 20 years of craftsmanship, empowering global mines with leading technology and reliable quality.",
            hero_subtitle_2: "Founded in 2005, with two decades in mining machinery, we provide efficient and durable one-stop equipment solutions for global mining clients.",
            hero_btn: "View Products",
            hero_more: "Learn More →",
            trust_text: "Trusted by 500+ Enterprises across 200+ Countries",
            feat_header: "Why Choose Us",
            feat_subheader: "Professional, Reliable, and Efficient",
            feat1_title: "Fast Logistics",
            feat1_desc: "Integrated global supply chain ensuring safe and rapid delivery.",
            feat2_title: "Quality Control",
            feat2_desc: "Strict multi-level inspection process for 100% product quality.",
            feat3_title: "Customized Service",
            feat3_desc: "Expert OEM/ODM solutions tailored to your brand's unique needs.",
            prod_title: "Product Showcase",
            prod_subtitle: "Discover the right mining equipment for you to improve mining efficiency and returns.",
            filter_all: "All",
            filter_elec: "Electronics",
            filter_home: "Home",
            filter_ind: "Industrial",
            btn_details: "Details",
            cat_ele: "Electronics",
            cat_acc: "Accessories",
            cat_ind: "Industrial",
            cat_hom: "Home",
            cat_cru: "Crushers",
            cat_mil: "Milling Machines",
            cat_sep: "Separation Equipment",
            cat_wet: "Wet Pan Mill",
            btn_more: "More +",
            about_title: "FUCHE Machinery: A Leading Enterprise in Equipment Manufacturing and International Trade",
            about_subtitle: "Established in 2005, Two Decades of Expertise in Mining Machinery",
            about_p1: "FUCHE Machinery is a leading international trade and manufacturing enterprise dedicated to providing high-quality mining extraction, crushing, and screening equipment. Our headquarters covers over 50,000 square meters with modern production lines and a professional R&D team.",
            about_p2: "With advanced technology and strict quality control systems, our annual capacity has reached 10,000 units. Our products have been successfully exported to multiple countries and regions in Central Asia, the Middle East, and Africa, earning the trust of global clients.",
            
            // New About Us Content
            vision_title: "Vision & Mission",
            vision_text: "To become a global leader in mining machinery solutions, creating lasting value for customers through innovation and service excellence.",
            mission_title: "Our Mission",
            mission_text: "Commit to quality, drive industry progress, and support global infrastructure and resource development.",
            
            history_title: "Our Journey",
            hist_2005_h: "The Beginning",
            hist_2005_d: "Company established, entering the global mining machinery trade.",
            hist_2012_h: "Scale Expansion",
            hist_2012_d: "Modern factory completed, exceeding 50,000 square meters.",
            hist_2018_h: "Tech Breakthrough",
            hist_2018_d: "R&D team formed, reaching an annual capacity of 10,000 units.",
            hist_2026_h: "Global Presence",
            hist_2026_d: "Products in 50+ countries with a comprehensive service network.",

            strength_title: "Core Strengths",
            strength_1_h: "Manufacturing Scale",
            strength_1_d: "50,000+ SQM Modern Factory",
            strength_2_h: "R&D Capabilities",
            strength_2_d: "Professional Team Driving Innovation",
            strength_3_h: "Annual Capacity",
            strength_3_d: "10,000 Units of Precision Equipment",
            strength_4_h: "Quality Assurance",
            strength_4_d: "International Certifications & Strict QC",

            global_title: "Global Presence",
            global_desc: "Exporting to Central Asia, Middle East, and Africa",
            market_asia: "Central Asia",
            market_me: "Middle East",
            market_africa: "Africa",
            market_sa: "South America",

            years_exp: " 20Years Experience",
            stat1_num: "2005",
            stat1_text: "Established Year",
            stat2_num: "50,000+",
            stat2_text: "Factory Area (m²)",
            contact_title: "Start Your Partnership",
            contact_desc: "Ready to scale your business? Get in touch with our sourcing experts today.",
            label_addr: "Office Address",
            val_addr: "Zhengzhou, Henan, China",
            label_email: "Email Support",
            label_whatsapp: "WhatsApp",
            form_name: "Name",
            form_email: "Email",
            form_subject: "Subject",
            form_msg: "Message",
            form_btn: "Send Message",
            footer_desc: "Your trusted mining expert, exporting mining equipment worldwide.",
            footer_quick: "Quick Links",
            footer_rights: "All Rights Reserved.",
            contact_badge: "GET IN TOUCH",
            label_hours: "Business Hours",
            val_hours: "Mon - Fri: 9:00 AM - 6:00 PM (GMT+8)",
            stat_support: "24/7",
            stat_support_text: "Online Support",
            why_contact_title: "Global Shipping Network",
            why_contact_desc: "We have obtained import certifications in various countries worldwide, meeting global customs clearance standards. We can ship to any country in the world with mature and well-established global shipping channels.",
            footer_contact: "Contact Info",
            footer_newsletter: "Newsletter",
            newsletter_text: "Subscribe to get the latest product updates and trade news.",
            footer_privacy: "Privacy Policy",
            footer_terms: "Terms of Service",
            search_placeholder: "Search products...",
            price_inquiry: "Inquire",
            recom_title: "Product Recommendation",
            recom_subtitle: "Our products include nine series: mining mills, tube mills, rotary kilns, coolers, rotary dryers, magnetic separators, flotation machines, thickeners, and crushers.",
            prod_ball_mill: "Ball Mill",
            prod_rotary_kiln: "Rotary Kiln",
            prod_mag_sep: "Magnetic Separator",
            prod_sand_maker: "Sand Making Machine",
            btn_consult: "Consultation",
            desc_ball_mill: "High-efficiency grinding, stable structure, widely used in cement and silicate products.",
            desc_rotary_kiln: "High-temperature calcination equipment, smooth operation, high thermal efficiency.",
            desc_mag_sep: "Strong magnetic field, excellent separation effect for various ores.",
            desc_sand_maker: "High output, low consumption, excellent final product shape for construction."
        },
        ar: {
            nav_home: "الصفحة الرئيسية",
            nav_products: "المنتجات",
            nav_about: "من نحن",
            nav_contact: "اتصل بنا",
            nav_quote: "احصل على عرض سعر",
            hero_badge: "فوتشي للآلات",
            hero_title_1: "خبير معدات التعدين، شريكك الموثوق",
            hero_title_2: "فوتشي للآلات: احترافية، موثوقية، نجاح مشترك",
            hero_badge_2: "جودة مضمونة",
            hero_subtitle: "مصنع محترف لمعدات التعدين بخبرة عشرين عاماً من الحرفية، ندعم المناجم العالمية بتقنيات رائدة وجودة موثوقة.",
            hero_subtitle_2: "تأسست في عام 2005، مع عقدين من الخبرة العميقة في آلات التعدين، نقدم حلولاً متكاملة وفعالة ودائمة لعملاء التعدين في العالم.",
            hero_btn: "عرض المنتجات",
            hero_more: "أعرف أكثر ←",
            trust_text: "موثوق به من قبل أكثر من 500 شركة في أكثر من 200 دولة",
            feat_header: "لماذا تختارنا",
            feat_subheader: "الاحتراف والموثوقية والكفاءة",
            feat1_title: "خدمات لوجستية سريعة",
            feat1_desc: "سلسلة توريد عالمية متكاملة تضمن توصيلاً آمناً وسريعاً.",
            feat2_title: "مراقبة الجودة",
            feat2_desc: "عملية تفتيش صارمة متعددة المستويات لضمان جودة المنتج بنسبة 100%.",
            feat3_title: "خدمة مخصصة",
            feat3_desc: "حلول OEM/ODM خبيرة مصممة خصيصاً لاحتياجات علامتك التجارية الفريدة.",
            prod_title: "عرض المنتجات",
            prod_subtitle: "استكشف مجموعتنا المختارة من المعدات الصناعية ومعدات التعدين لتحسين كفاءة التعدين وعوائده.",
            filter_all: "الكل",
            filter_elec: "إلكترونيات",
            filter_home: "منزل",
            filter_ind: "صناعي",
            btn_details: "تفاصيل",
            cat_ele: "إلكترونيات",
            cat_acc: "إكسسوارات",
            cat_ind: "صناعي",
            cat_hom: "منزل",
            cat_cru: "كسارات",
            cat_mil: "مطاحن",
            cat_sep: "معدات التصنيف",
            cat_wet: "مطحنة الرطب",
            btn_more: "المزيد +",
            about_title: "فوتشي للآلات هي مؤسسة رائدة في تصنيع المعدات والتجارة الدولية",
            about_subtitle: "تأسست في عام 2005، عقدان من الخبرة في آلات التعدين",
            about_p1: "فوتشي للآلات هي مؤسسة رائدة في التجارة الدولية والتصنيع مكرسة لتوفير معدات استخراج وتكسير وغربلة التعدين عالية الجودة. يغطي مقرنا الرئيسي أكثر من 50000 متر مربع مع خطوط إنتاج حديثة وفريق بحث وتطوير محترف.",
            about_p2: "بفضل التكنولوجيا المتقدمة وأنظمة مراقبة الجودة الصارمة، وصلت قدرتنا السنوية إلى 10000 وحدة. تم تصدير منتجاتنا بنجاح إلى العديد من البلدان والمناطق في آسيا الوسطى والشرق الأوسط وأفريقيا، مما كسب ثقة العملاء العالميين.",
            vision_title: "الرؤية والمهمة",
            vision_text: "أن نصبح رائدًا عالميًا في حلول آلات التعدين، وخلق قيمة دائمة للعملاء من خلال الابتكار والتميز في الخدمة.",
            mission_title: "مهمتنا",
            mission_text: "الالتزام بالجودة، ودفع عجلة التقدم في الصناعة، ودعم البنية التحتية العالمية وتطوير الموارد.",
            history_title: "رحلتنا",
            hist_2005_h: "البداية",
            hist_2005_d: "تأسست الشركة ودخلت تجارة آلات التعدين العالمية.",
            hist_2012_h: "توسيع النطاق",
            hist_2012_d: "اكتمل المصنع الحديث، وتجاوزت مساحته 50000 متر مربع.",
            hist_2018_h: "طفرة تقنية",
            hist_2018_d: "تم تشكيل فريق البحث والتطوير، ووصلت القدرة السنوية إلى 10000 وحدة.",
            hist_2026_h: "التواجد العالمي",
            hist_2026_d: "منتجاتنا في أكثر من 50 دولة مع شبكة خدمة شاملة.",
            strength_title: "نقاط القوة الأساسية",
            strength_1_h: "نطاق التصنيع",
            strength_1_d: "مصنع حديث بمساحة 50000+ متر مربع",
            strength_2_h: "قدرات البحث والتطوير",
            strength_2_d: "فريق محترف يقود الابتكار",
            strength_3_h: "القدرة السنوية",
            strength_3_d: "10000 وحدة من المعدات الدقيقة",
            strength_4_h: "ضمان الجودة",
            strength_4_d: "شهادات دولية ومراقبة جودة صارمة",
            global_title: "التواجد العالمي",
            global_desc: "التصدير إلى آسيا الوسطى والشرق الأوسط وأفريقيا",
            market_asia: "آسيا الوسطى",
            market_me: "الشرق الأوسط",
            market_africa: "أفريقيا",
            market_sa: "أمريكا الجنوبية",
            years_exp: "20 عاماً من الخبرة",
            stat1_num: "2005",
            stat1_text: "سنة التأسيس",
            stat2_num: "50,000+",
            stat2_text: "مساحة المصنع (م²)",
            contact_title: "ابدأ شراكتك",
            contact_desc: "هل أنت مستعد لتوسيع نطاق عملك؟ تواصل مع خبراء التوريد لدينا اليوم.",
            label_addr: "عنوان المكتب",
            val_addr: "تشنغتشو، خنان، الصين",
            label_email: "دعم البريد الإلكتروني",
            label_whatsapp: "واتساب",
            form_name: "الاسم",
            form_email: "البريد الإلكتروني",
            form_subject: "الموضوع",
            form_msg: "الرسالة",
            form_btn: "إرسال الرسالة",
            footer_desc: "خبير التعدين الموثوق به، نقوم بتصدير معدات التعدين إلى جميع أنحاء العالم.",
            footer_quick: "روابط سريعة",
            footer_rights: "جميع الحقوق محفوظة.",
            contact_badge: "تواصل معنا",
            label_hours: "ساعات العمل",
            val_hours: "الإثنين - الجمعة: 9:00 صباحًا - 6:00 مساءً (GMT+8)",
            stat_support: "24/7",
            stat_support_text: "الدعم عبر الإنترنت",
            why_contact_title: "شبكة الشحن العالمية",
            why_contact_desc: "لقد حصلنا على شهادات استيراد في مختلف بلدان العالم، ونلبي معايير التخليص الجمركي العالمية. يمكننا الشحن إلى أي بلد في العالم من خلال قنوات شحن عالمية ناضجة وراسخة.",
            footer_contact: "معلومات الاتصال",
            footer_newsletter: "النشرة الإخبارية",
            newsletter_text: "اشترك للحصول على آخر تحديثات المنتج وأخبار التجارة.",
            footer_privacy: "Privacy Policy",
            footer_terms: "Terms of Service",
            search_placeholder: "البحث عن المنتجات...",
            price_inquiry: "استفسار",
            recom_title: "توصية المنتج",
            recom_subtitle: "تنتج الشركة تسع سلاسل من المعدات بما في ذلك مطاحن التعدين، والمطاحن الأنبوبية، والأفران الدوارة، والمبردات، والمجففات الدوارة، والفواصل المغناطيسية، وآلات التعويم، والمكثفات، والكسارات.",
            prod_ball_mill: "مطحنة الكرة",
            prod_rotary_kiln: "فرن دوار",
            prod_mag_sep: "فاصل مغناطيسي",
            prod_sand_maker: "آلة صنع الرمل",
            btn_consult: "استشارة",
            desc_ball_mill: "طحن عالي الكفاءة، هيكل مستقر، يستخدم على نطاق واسع في منتجات الأسمنت والسيليكات.",
            desc_rotary_kiln: "معدات التكليس بدرجة حرارة عالية، تشغيل سلس، كفاءة حرارية عالية.",
            desc_mag_sep: "مجال مغناطيسي قوي، تأثير فصل ممتاز لمختلف الخامات.",
            desc_sand_maker: "إنتاجية عالية، استهلاك منخفض، شكل منتج نهائي ممتاز للبناء."
        }
    };

    // 2. 状态管理
    window.currentLang = localStorage.getItem('site_lang') || 'zh';
    const state = {
        currentPage: 1,
        itemsPerPage: 6,
        searchQuery: '',
        currentFilter: 'all',
        heroIndex: 0,
        isTyping: false,
        typewriterTimeout: null
    };

    const elements = {
        langOptions: document.querySelectorAll('.lang-option'),
        currentLangTexts: document.querySelectorAll('.current-lang-text'),
        mobileMenuBtn: document.getElementById('mobile-menu-btn'),
        navLinks: document.getElementById('nav-links'),
        navItems: document.querySelectorAll('.nav-item'),
        productGrid: document.getElementById('product-grid-dynamic'),
        pagination: document.getElementById('pagination'),
        searchInput: document.getElementById('product-search'),
        filterBtns: document.querySelectorAll('.filter-btn'),
        heroSlides: document.querySelectorAll('.carousel-slide'),
        heroDots: document.querySelectorAll('.dot'),
        heroPrev: document.getElementById('hero-prev'),
        heroNext: document.getElementById('hero-next'),
        recomGrid: document.getElementById('recom-grid-dynamic'),
        successSection: document.getElementById('success-section-dynamic')
    };

    // 3. 轮播图与打字机逻辑
    let heroTimer = null;

    function typeWriter(text, elementId, callback) {
        const element = document.getElementById(elementId);
        if (!element) return;

        // 取消之前的打字机任务
        if (state.typewriterTimeout) {
            clearTimeout(state.typewriterTimeout);
        }

        let i = 0;
        element.innerHTML = '';
        state.isTyping = true;

        function type() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                state.typewriterTimeout = setTimeout(type, 50);
            } else {
                state.isTyping = false;
                state.typewriterTimeout = null;
                if (callback) callback();
            }
        }
        type();
    }

    function switchHero(index, force = false) {
        if (state.isTyping && !force) return;

        // 切换前先停止当前的打字机
        if (state.typewriterTimeout) {
            clearTimeout(state.typewriterTimeout);
        }

        elements.heroSlides.forEach(slide => slide.classList.remove('active'));
        elements.heroDots.forEach(dot => dot.classList.remove('active'));

        if (elements.heroSlides[index]) elements.heroSlides[index].classList.add('active');
        if (elements.heroDots[index]) elements.heroDots[index].classList.add('active');
        state.heroIndex = index;

        // 启动打字机
        const titleKey = `hero_title_${index + 1}`;
        const text = i18n[window.currentLang][titleKey];
        if (text) typeWriter(text, `typewriter-text-${index + 1}`);

        // 切换后重置定时器
        startHeroAutoPlay();
    }

    function startHeroAutoPlay() {
        if (heroTimer) clearInterval(heroTimer);
        heroTimer = setInterval(() => {
            if (elements.heroSlides.length > 0) {
                let next = (state.heroIndex + 1) % elements.heroSlides.length;
                switchHero(next);
            }
        }, 8000);
    }

    // 初始化轮播
    if (elements.heroSlides.length > 0) {
        switchHero(0);

        elements.heroDots.forEach((dot, idx) => {
            dot.addEventListener('click', () => switchHero(idx, true));
        });

        if (elements.heroPrev) {
            elements.heroPrev.addEventListener('click', () => {
                let prev = (state.heroIndex - 1 + elements.heroSlides.length) % elements.heroSlides.length;
                switchHero(prev, true);
            });
        }

        if (elements.heroNext) {
            elements.heroNext.addEventListener('click', () => {
                let next = (state.heroIndex + 1) % elements.heroSlides.length;
                switchHero(next, true);
            });
        }
    }

    // 4. 产品渲染与分页逻辑
    function renderProducts() {
        if (!elements.productGrid) return;

        const urlParams = new URLSearchParams(window.location.search);
        const urlCategory = urlParams.get('category');

        // 更新过滤器按钮状态
        elements.filterBtns.forEach(btn => {
            if ((urlCategory && btn.dataset.filter === urlCategory) || (!urlCategory && btn.dataset.filter === 'all')) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });

        if (urlCategory && window.productCategories[urlCategory]) {
            renderFilteredProducts(urlCategory);
        } else {
            renderGroupedProducts();
        }
    }

    function renderFilteredProducts(category) {
        const catInfo = window.productCategories[category];
        const products = (window.allProducts || []).filter(p => p.category === category);

        // 更新页面头部
        const headerHtml = `
            <div class="filtered-header reveal">
                <div class="container">
                    <h1>${catInfo.name[window.currentLang]}</h1>
                    <p>${catInfo.desc[window.currentLang]}</p>
                </div>
            </div>
        `;

        // 隐藏原有的 section-header 和 controls
        const section = document.getElementById('products');
        const originalHeader = section.querySelector('.section-header');
        const controls = section.querySelector('.product-controls');
        const pagination = document.getElementById('pagination');

        if (originalHeader) originalHeader.style.display = 'none';
        if (controls) controls.style.display = 'none';
        if (pagination) pagination.style.display = 'none';

        // 渲染产品网格
        const gridHtml = `
            <div class="product-grid">
                ${products.map(p => renderProductCard(p)).join('')}
            </div>
        `;

        // 仅在动态容器内渲染，不破坏外层结构
        elements.productGrid.innerHTML = headerHtml + gridHtml;

        // 重新观察 reveal
        document.querySelectorAll('.reveal').forEach(el => {
            if (window.revealObserver) window.revealObserver.observe(el);
        });
    }

    function renderGroupedProducts() {
        const categories = Object.keys(window.productCategories);
        let html = '';

        categories.forEach(catId => {
            const catInfo = window.productCategories[catId];
            const products = (window.allProducts || []).filter(p => p.category === catId).slice(0, 3);

            if (products.length === 0) return;

            html += `
                <div class="category-section reveal">
                    <div class="category-header">
                        <h2>${catInfo.name[window.currentLang]}</h2>
                        <a href="products.html?category=${catId}" class="btn-more">
                            ${i18n[window.currentLang].btn_more}
                        </a>
                    </div>
                    <div class="product-grid">
                        ${products.map(p => renderProductCard(p)).join('')}
                    </div>
                </div>
            `;
        });

        elements.productGrid.innerHTML = html;

        // 重新观察 reveal
        document.querySelectorAll('.reveal').forEach(el => {
            if (window.revealObserver) window.revealObserver.observe(el);
        });
    }

    function renderProductCard(p) {
        return `
            <div class="product-card reveal">
                <div class="product-img-wrapper">
                    <img src="${p.image}" alt="${p.name[window.currentLang]} - FC Machinery" loading="lazy">
                    <div class="product-overlay">
                        <a href="https://wa.me/8619969633305" target="_blank" class="btn-view">${i18n[window.currentLang].btn_consult || 'Consult'}</a>
                    </div>
                </div>
                <div class="product-info">
                    <h3>${p.name[window.currentLang]}</h3>
                </div>
            </div>
        `;
    }

    function renderRecommendedProducts() {
        if (!elements.recomGrid || !window.recommendationSection) return;

        // 渲染板块标题和副标题 (如果 HTML 中有对应的 ID)
        const titleEl = document.querySelector('.recom-section .section-header h2');
        const subtitleEl = document.querySelector('.recom-section .section-header .recom-subtitle');

        if (titleEl) titleEl.innerText = window.recommendationSection.title[window.currentLang];
        if (subtitleEl) subtitleEl.innerText = window.recommendationSection.subtitle[window.currentLang];

        elements.recomGrid.innerHTML = window.recommendationSection.products.map(p => `
            <div class="recom-card reveal">
                <div class="recom-img">
                    <img src="${p.image}" alt="${p.name[window.currentLang]} - FC Machinery Recommendation" loading="lazy">
                </div>
                <div class="recom-info">
                    <h3>${p.name[window.currentLang]}</h3>
                    <p class="recom-desc">${p.desc[window.currentLang]}</p>
                    <div class="recom-btns">
                        <a href="https://wa.me/8619969633305" target="_blank" class="btn-recom primary" data-i18n="btn_consult">${i18n[window.currentLang].btn_consult}</a>
                    </div>
                </div>
            </div>
        `).join('');

        // 重新观察新生成的 reveal 元素
        elements.recomGrid.querySelectorAll('.reveal').forEach(el => {
            if (window.revealObserver) window.revealObserver.observe(el);
        });
    }

    function renderSuccessSection() {
        if (!elements.successSection || !window.successSection) return;

        const { title, subtitle, cards } = window.successSection;

        // 渲染标题和副标题
        const headerHtml = `
            <div class="section-header center light">
                <h2>${title[window.currentLang]}</h2>
                <p class="section-subtitle">${subtitle[window.currentLang]}</p>
            </div>
        `;

        // 渲染卡片
        const cardsHtml = `
            <div class="success-grid">
                <div class="success-left">
                    ${cards.filter(c => c.type === 'large').map(c => `
                        <div class="success-card large reveal" style="background-image: url('${c.image}')" role="img" aria-label="${c.title[window.currentLang]} - FC Machinery Success Case">
                            <div class="card-overlay"></div>
                            <div class="card-content">
                                <h3>${c.title[window.currentLang]}</h3>
                                <p>${c.desc[window.currentLang]}</p>
                            </div>
                        </div>
                    `).join('')}
                </div>
                <div class="success-right">
                    ${cards.filter(c => c.type === 'small').map(c => `
                        <div class="success-card small reveal" style="background-image: url('${c.image}')" role="img" aria-label="${c.title[window.currentLang]} - FC Machinery Service">
                            <div class="card-overlay"></div>
                            <div class="card-content">
                                <h3>${c.title[window.currentLang]}</h3>
                                <p>${c.desc[window.currentLang]}</p>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;

        elements.successSection.innerHTML = headerHtml + cardsHtml;

        // 重新观察 reveal 元素
        elements.successSection.querySelectorAll('.reveal').forEach(el => {
            if (window.revealObserver) window.revealObserver.observe(el);
        });
    }

    function renderPagination(totalPages) {
        if (!elements.pagination) return;

        if (totalPages <= 1) {
            elements.pagination.innerHTML = '';
            return;
        }

        let buttons = '';
        for (let i = 1; i <= totalPages; i++) {
            buttons += `
                <button class="page-btn ${i === state.currentPage ? 'active' : ''}" data-page="${i}">
                    ${i}
                </button>
            `;
        }
        elements.pagination.innerHTML = buttons;

        elements.pagination.querySelectorAll('.page-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                state.currentPage = parseInt(btn.dataset.page);
                renderProducts();
                elements.productGrid.scrollIntoView({ behavior: 'smooth' });
            });
        });
    }

    if (elements.searchInput) {
        elements.searchInput.addEventListener('input', (e) => {
            state.searchQuery = e.target.value;
            state.currentPage = 1;
            renderProducts();
        });
    }

    elements.filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const category = btn.dataset.filter;
            if (category === 'all') {
                window.location.href = 'products.html';
            } else {
                window.location.href = `products.html?category=${category}`;
            }
        });
    });

    // 5. 语言切换逻辑
    function updatePageLanguage(lang) {
        window.currentLang = lang;
        localStorage.setItem('site_lang', lang);
        document.documentElement.lang = lang;

        // 处理 RTL 布局
        if (lang === 'ar') {
            document.documentElement.dir = 'rtl';
            document.body.classList.add('rtl');
        } else {
            document.documentElement.dir = 'ltr';
            document.body.classList.remove('rtl');
        }

        // 同步所有语言选项的激活状态
        elements.langOptions.forEach(opt => {
            opt.classList.toggle('active', opt.dataset.value === lang);
        });

        // 重新渲染动态内容 (产品中心、推荐板块、成功板块)
        renderProducts();
        renderRecommendedProducts();
        renderSuccessSection();

        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (i18n[lang][key]) el.innerText = i18n[lang][key];
        });

        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            if (i18n[lang][key]) el.placeholder = i18n[lang][key];
        });

        // 更新当前语言文字
        const langMap = { 'zh': '简体中文', 'en': 'English', 'ar': 'العربية' };
        if (elements.currentLangTexts) {
            elements.currentLangTexts.forEach(el => {
                el.innerText = langMap[lang];
            });
        }
        elements.langOptions.forEach(opt => {
            opt.classList.toggle('active', opt.dataset.value === lang);
        });

        // 重新触发当前轮播图的打字机文字，确保语言同步
        if (elements.heroSlides && elements.heroSlides.length > 0) {
            switchHero(state.heroIndex, true);
        }

        renderProducts();
        renderRecommendedProducts();
        renderSuccessSection();
    }

    elements.langOptions.forEach(opt => {
        opt.addEventListener('click', () => {
            updatePageLanguage(opt.dataset.value);
        });
    });

    // 6. 移动端菜单
    if (elements.mobileMenuBtn) {
        elements.mobileMenuBtn.addEventListener('click', () => {
            elements.mobileMenuBtn.classList.toggle('active');
            elements.navLinks.classList.toggle('active');
            // 禁止背景滚动
            document.body.style.overflow = elements.navLinks.classList.contains('active') ? 'hidden' : '';
        });

        // 点击空余地方关闭菜单栏
        elements.navLinks.addEventListener('click', (e) => {
            // 如果点击的是 nav-links 本身（即背景空白区域），则关闭菜单
            if (e.target === elements.navLinks) {
                elements.mobileMenuBtn.classList.remove('active');
                elements.navLinks.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }

    // 点击链接后自动关闭移动端菜单
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            if (elements.navLinks.classList.contains('active')) {
                elements.mobileMenuBtn.classList.remove('active');
                elements.navLinks.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    });

    // 7. 滚动交互
    const handleNavbar = () => {
        const nav = document.querySelector('.navbar');
        if (!nav) return;
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            // 如果是在子页面（带有 .sub-page 类），则保持 scrolled 状态
            if (!document.body.classList.contains('sub-page')) {
                nav.classList.remove('scrolled');
            }
        }
    };

    window.addEventListener('scroll', handleNavbar);
    handleNavbar();

    // 8. 全局滚动揭示动画
    window.revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
            } else {
                entry.target.classList.remove('revealed');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    document.querySelectorAll('.reveal').forEach(el => {
        window.revealObserver.observe(el);
    });

    // 初始化
    updatePageLanguage(window.currentLang);
});
