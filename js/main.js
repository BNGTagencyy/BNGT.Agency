// main interactions for BNGT glassy site
document.addEventListener('DOMContentLoaded', function(){
  // year fill
  document.querySelectorAll('[data-year]').forEach(el => el.textContent = new Date().getFullYear());

  // theme toggle
  const themeToggle = document.getElementById('theme-toggle-input');
  if(themeToggle){
    const savedTheme = localStorage.getItem('theme');
    if(savedTheme === 'dark'){
      document.body.classList.add('dark');
      themeToggle.checked = true;
    } else {
      document.body.classList.remove('dark');
      themeToggle.checked = false;
    }

    themeToggle.addEventListener('change', function(){
      document.body.classList.toggle('dark');
      const isDark = document.body.classList.contains('dark');
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });
  }

  const translations = {
    en: {
      'nav.home': 'Home',
      'nav.about': 'About',
      'nav.services': 'Services',
      'nav.portfolio': 'Portfolio',
      'nav.contact': 'Contact',
      'hero.title': 'We craft premium digital experiences — fast, beautiful, and effective.',
      'hero.lead': '<strong>BNGT | Bigfaine Next Gen Tech</strong>, founded by <strong>@SuNNNy_r</strong>, blends design, strategy and engineering to help brands grow online.',
      'hero.ctaStart': 'Start a project',
      'hero.ctaPortfolio': 'View portfolio'
    },
    fr: {
      'nav.home': 'Accueil',
      'nav.about': 'À propos',
      'nav.services': 'Services',
      'nav.portfolio': 'Portfolio',
      'nav.contact': 'Contact',
      'hero.title': 'Nous créons des expériences numériques premium — rapides, belles et efficaces.',
      'hero.lead': '<strong>BNGT | Bigfaine Next Gen Tech</strong>, fondée par <strong>@SuNNNy_r</strong>, allie design, stratégie et ingénierie pour aider les marques à grandir en ligne.',
      'hero.ctaStart': 'Commencer un projet',
      'hero.ctaPortfolio': 'Voir le portfolio'
    },
    ar: {
      'nav.home': 'الرئيسية',
      'nav.about': 'من نحن',
      'nav.services': 'الخدمات',
      'nav.portfolio': 'الأعمال',
      'nav.contact': 'تواصل',
      'hero.title': 'نصنع تجارب رقمية مميزة — سريعة وجميلة وفعّالة.',
      'hero.lead': '<strong>BNGT | Bigfaine Next Gen Tech</strong>، تأسست بواسطة <strong>@SuNNNy_r</strong>، تمزج التصميم والاستراتيجية والهندسة لمساعدة العلامات على النمو عبر الإنترنت.',
      'hero.ctaStart': 'ابدأ مشروعًا',
      'hero.ctaPortfolio': 'عرض الأعمال'
    },
    de: {
      'nav.home': 'Startseite',
      'nav.about': 'Über uns',
      'nav.services': 'Leistungen',
      'nav.portfolio': 'Portfolio',
      'nav.contact': 'Kontakt',
      'hero.title': 'Wir gestalten erstklassige digitale Erlebnisse — schnell, schön und effektiv.',
      'hero.lead': '<strong>BNGT | Bigfaine Next Gen Tech</strong>, gegründet von <strong>@SuNNNy_r</strong>, vereint Design, Strategie und Engineering, um Marken online zu stärken.',
      'hero.ctaStart': 'Projekt starten',
      'hero.ctaPortfolio': 'Portfolio ansehen'
    }
  };

  Object.assign(translations.en, {
    'home.services.details': 'Services Details',
    'home.services.web.title': 'Web Design & Development',
    'home.services.web.desc': 'Responsive, scalable web applications with modern frameworks like React, Angular, and Vue.js.',
    'home.services.uiux.title': 'UI/UX Design',
    'home.services.uiux.desc': 'Beautiful, intuitive interfaces designed to enhance user engagement and satisfaction.',
    'home.services.support.title': 'Maintenance & Support',
    'home.services.support.desc': 'Ongoing support, updates, and optimization to keep your digital products running smoothly.',
    'home.services.strategy.title': 'Digital Strategy',
    'home.services.strategy.desc': 'Comprehensive planning to align your digital products with business objectives and market needs.',
    'home.why.title': 'Why BNGT',
    'home.why.body': 'We combine clean design with engineering discipline to deliver measurable results.',
    'home.why.li1': 'Focus on performance',
    'home.why.li2': 'Accessible & SEO friendly',
    'home.why.li3': 'Design systems & components',
    'home.portfolio.title': 'portfolio',
    'home.portfolio.lead': 'A few projects showcasing design + results.',
    'home.portfolio.item1': 'Branding & web',
    'home.portfolio.item2': 'eCommerce',
    'home.portfolio.item3': 'Product launch',
    'home.about.title': 'About BNGT',
    'home.about.lead': 'We are a digital agency specializing in web design, branding, and marketing solutions.',
    'home.about.body': 'Founded by Amine Bigfaine, BNGT combines creative design with technical expertise to deliver exceptional digital experiences. Our mission is to help businesses thrive in the digital world through innovative solutions and strategic thinking.',
    'home.values.title': 'Our Values',
    'home.values.li1': 'Innovation',
    'home.values.li2': 'Quality',
    'home.values.li3': 'Collaboration',
    'home.values.li4': 'Results-driven',
    'home.process.title': 'Our Process',
    'home.process.lead': 'How we turn ideas into reality.',
    'home.process.step1.title': '01. Discovery',
    'home.process.step1.body': 'We start by understanding your business goals, target audience, and project requirements.',
    'home.process.step2.title': '02. Strategy',
    'home.process.step2.body': 'Develop a comprehensive plan with clear milestones and deliverables.',
    'home.process.step3.title': '03. Design',
    'home.process.step3.body': 'Create beautiful, user-friendly designs that align with your brand.',
    'home.process.step4.title': '04. Development',
    'home.process.step4.body': 'Build robust, scalable solutions using modern technologies.',
    'home.process.step5.title': '05. Launch',
    'home.process.step5.body': 'Deploy your project and ensure everything runs smoothly.',
    'home.process.step6.title': '06. Support',
    'home.process.step6.body': 'Provide ongoing maintenance and optimization services.',
    'home.team.title': 'Meet the Team',
    'home.team.lead': 'The creative minds behind BNGT.',
    'home.testimonial1': '"BNGT delivered a flawless website that lifted conversions."',
    'home.testimonial2': '"Creative, responsive and on time."',
    'home.news.title': 'Stay Updated',
    'home.news.lead': 'Subscribe to our newsletter for the latest insights and updates.',
    'home.news.placeholder': 'Your email address',
    'home.news.submit': 'Subscribe',
    'home.faq.title': 'Frequently Asked Questions',
    'home.faq.q1': 'How long does a project take?',
    'home.faq.a1': 'Project timelines vary depending on complexity, but most web projects are completed within 4-8 weeks.',
    'home.faq.q2': 'Do you provide ongoing support?',
    'home.faq.a2': 'Yes, we offer maintenance and support packages to keep your digital products running smoothly.',
    'home.faq.q3': 'What technologies do you use?',
    'home.faq.a3': 'We use modern technologies like React, Vue.js, Node.js, and cloud platforms for scalable solutions.',
    'home.faq.q4': 'How do you handle revisions?',
    'home.faq.a4': 'We include a set number of revisions in our packages and work collaboratively to achieve your vision.',
    'home.cta.title': 'Start your next project',
    'home.cta.lead': 'Tell us about your goals and we’ll build a plan that fits.',
    'home.cta.btn': 'Get in touch',
    'footer.copy': '© <span data-year></span> BNGT Agency — Crafted by SuNNNy_r.',
    'footer.copyShort': '© <span data-year></span> BNGT Agency',
    'services.title': 'Services',
    'services.lead': 'End-to-end digital services built to scale.',
    'services.pack.starter.title': 'BNGT Starter Pack',
    'services.pricePrefix': 'Starting at',
    'services.pack.price1': 'Starting at <span>1,500 MAD</span>',
    'services.pack.starter.li1': 'Landing Page Website (1 page, responsive)',
    'services.pack.starter.li2': 'Professional Logo Design',
    'services.pack.starter.li3': 'Contact Form / WhatsApp Integration',
    'services.pack.starter.li4': '1 Week Free Support',
    'services.pack.cta': 'Get Started',
    'services.pack.business.title': 'BNGT Business Pack',
    'services.pack.price2': 'Starting at <span>3,500 MAD</span>',
    'services.pack.business.li1': 'Business Website (5 Pages)',
    'services.pack.business.li2': 'Domain + Hosting (3 months)',
    'services.pack.business.li3': 'Branding Kit (Logo, Colors, Fonts)',
    'services.pack.business.li4': 'SEO Optimization (Basic)',
    'services.pack.business.li5': '1 Month Support & Updates',
    'services.pack.ecom.title': 'BNGT E-commerce Pack',
    'services.pack.price3': 'Starting at <span>5,000 MAD</span>',
    'services.pack.ecom.li1': 'Full E-commerce Website (Shop, Cart, Checkout)',
    'services.pack.ecom.li2': 'Domain + Hosting (3 months)',
    'services.pack.ecom.li3': 'Product Upload (Up to 20 products)',
    'services.pack.ecom.li4': 'Payment & WhatsApp Integration',
    'services.pack.ecom.li5': '1 Month Support & Training',
    'services.pack.custom.title': 'BNGT Custom Website Pack',
    'services.pack.price4': 'Starting at <span>15,000 MAD</span>',
    'services.pack.custom.li1': 'Tailored website/web app with custom features',
    'services.pack.custom.li2': 'Scalable & high-performance design',
    'services.pack.custom.li3': 'Complex backend (database, APIs)',
    'services.pack.custom.li4': 'Mobile-friendly & SEO optimized',
    'services.pack.custom.li5': 'Dedicated support & maintenance',
    'about.title': 'About BNGT Agency',
    'about.lead': 'At <strong>BNGT | Bigfaine Next Gen Tech</strong>, created by <strong>Amine Bigfaine</strong>, we specialize in creating cutting-edge digital solutions that empower businesses to grow and stand out in the modern online world.',
    'about.body': 'Our mission is to design and develop engaging websites, impactful branding, and innovative digital strategies that connect with users across all platforms. With a passion for creativity and a commitment to excellence, we turn ideas into digital experiences that captivate audiences and drive results.',
    'about.team.title': 'Our Team',
    'about.team.body': 'Small, talented group of designers & engineers operating remotely from Morocco.',
    'about.process.title': 'Process',
    'about.process.lead': 'Discovery → Design → Build → Launch → Support',
    'about.process.discovery.title': 'Discovery',
    'about.process.discovery.body': 'Workshops, goals, research, and KPIs.',
    'about.process.design.title': 'Design',
    'about.process.design.body': 'Wireframes, prototypes, visual systems.',
    'about.process.build.title': 'Build',
    'about.process.build.body': 'Development, QA, performance tuning.',
    'portfolio.title': 'Portfolio',
    'portfolio.lead': 'Case studies & projects.',
    'portfolio.item1': 'Branding & site',
    'portfolio.item2': 'eCommerce',
    'portfolio.item3': 'Product launch',
    'portfolio.ig.title': 'Latest Instagram Work',
    'portfolio.ig.lead': 'Automatically synced from @bngt.agency',
    'contact.title': 'Contact',
    'contact.lead': 'Tell us about your project — we\'ll reply within 48 hours.',
    'contact.form.title': 'Get in touch',
    'contact.form.name': 'Name',
    'contact.form.email': 'Email',
    'contact.form.message': 'Message',
    'contact.form.submit': 'Send message',
    'contact.testimonials.title': 'Testimonials',
    'contact.testimonials.t1': '"BNGT delivered a flawless website that lifted conversions."',
    'contact.testimonials.t2': '"Creative, responsive and on time."',
    'contact.info.title': 'Contact info',
    'contact.info.instagramLabel': 'Instagram',
    'contact.info.founderLabel': 'Founder',
    'contact.info.locationLabel': 'Location',
    'contact.follow.title': 'Follow us',
    'contact.news.title': 'Newsletter',
    'contact.news.lead': 'Subscribe for updates and insights.',
    'contact.news.placeholder': 'Your email',
    'contact.news.submit': 'Subscribe'
    , 'cookie.text': 'We use cookies to improve your experience.'
    , 'cookie.accept': 'Accept'
  });

  Object.assign(translations.fr, {
    'home.services.details': 'Détails des services',
    'home.services.web.title': 'Conception et développement web',
    'home.services.web.desc': 'Applications web réactives et évolutives avec des frameworks modernes comme React, Angular et Vue.js.',
    'home.services.uiux.title': 'Design UI/UX',
    'home.services.uiux.desc': 'Interfaces belles et intuitives pour améliorer l’engagement des utilisateurs.',
    'home.services.support.title': 'Maintenance et support',
    'home.services.support.desc': 'Support continu, mises à jour et optimisation pour des produits performants.',
    'home.services.strategy.title': 'Stratégie digitale',
    'home.services.strategy.desc': 'Planification complète alignée sur vos objectifs et le marché.',
    'home.why.title': 'Pourquoi BNGT',
    'home.why.body': 'Nous combinons un design soigné et une rigueur d’ingénierie pour des résultats mesurables.',
    'home.why.li1': 'Focus sur la performance',
    'home.why.li2': 'Accessible et optimisé SEO',
    'home.why.li3': 'Systèmes et composants de design',
    'home.portfolio.title': 'portfolio',
    'home.portfolio.lead': 'Quelques projets montrant design + résultats.',
    'home.portfolio.item1': 'Branding et site',
    'home.portfolio.item2': 'eCommerce',
    'home.portfolio.item3': 'Lancement de produit',
    'home.about.title': 'À propos de BNGT',
    'home.about.lead': 'Nous sommes une agence digitale spécialisée en web design, branding et marketing.',
    'home.about.body': 'Fondée par Amine Bigfaine, BNGT associe design créatif et expertise technique pour des expériences numériques exceptionnelles.',
    'home.values.title': 'Nos valeurs',
    'home.values.li1': 'Innovation',
    'home.values.li2': 'Qualité',
    'home.values.li3': 'Collaboration',
    'home.values.li4': 'Orienté résultats',
    'home.process.title': 'Notre processus',
    'home.process.lead': 'Comment nous transformons les idées en réalité.',
    'home.process.step1.title': '01. Découverte',
    'home.process.step1.body': 'Comprendre objectifs, audience et exigences.',
    'home.process.step2.title': '02. Stratégie',
    'home.process.step2.body': 'Plan complet avec jalons et livrables.',
    'home.process.step3.title': '03. Design',
    'home.process.step3.body': 'Création d\'interfaces belles et conviviales.',
    'home.process.step4.title': '04. Développement',
    'home.process.step4.body': 'Solutions robustes et évolutives avec des technologies modernes.',
    'home.process.step5.title': '05. Lancement',
    'home.process.step5.body': 'Déploiement et assurance du bon fonctionnement.',
    'home.process.step6.title': '06. Support',
    'home.process.step6.body': 'Maintenance et optimisation continues.',
    'home.team.title': 'Rencontrez l\'équipe',
    'home.team.lead': 'Les esprits créatifs derrière BNGT.',
    'home.testimonial1': '« BNGT a livré un site impeccable qui a augmenté les conversions. »',
    'home.testimonial2': '« Créatif, réactif et ponctuel. »',
    'home.news.title': 'Restez informé',
    'home.news.lead': 'Abonnez-vous à notre newsletter pour les dernières infos.',
    'home.news.placeholder': 'Votre adresse email',
    'home.news.submit': 'S\'abonner',
    'home.faq.title': 'Questions fréquentes',
    'home.faq.q1': 'Combien de temps dure un projet ?',
    'home.faq.a1': 'Selon la complexité : la plupart en 4 à 8 semaines.',
    'home.faq.q2': 'Fournissez-vous un support continu ?',
    'home.faq.a2': 'Oui, des forfaits de maintenance et support sont disponibles.',
    'home.faq.q3': 'Quelles technologies utilisez-vous ?',
    'home.faq.a3': 'React, Vue.js, Node.js et plateformes cloud pour l\'évolutivité.',
    'home.faq.q4': 'Comment gérez-vous les retours ?',
    'home.faq.a4': 'Un nombre de retours inclus et travail collaboratif.',
    'home.cta.title': 'Lancez votre prochain projet',
    'home.cta.lead': 'Parlez-nous de vos objectifs et nous bâtirons un plan adapté.',
    'home.cta.btn': 'Nous contacter',
    'footer.copy': '© <span data-year></span> BNGT Agency — Créé par SuNNNy_r.',
    'footer.copyShort': '© <span data-year></span> BNGT Agency',
    'services.title': 'Services',
    'services.lead': 'Services digitaux de bout en bout, prêts à l\'échelle.',
    'services.pack.starter.title': 'Pack BNGT Starter',
    'services.pack.price1': 'À partir de <span>1 500 MAD</span>',
    'services.pack.starter.li1': 'Site Landing Page (1 page, responsive)',
    'services.pack.starter.li2': 'Logo professionnel',
    'services.pack.starter.li3': 'Formulaire de contact / Intégration WhatsApp',
    'services.pack.starter.li4': '1 semaine de support gratuit',
    'services.pack.cta': 'Commencer',
    'services.pack.business.title': 'Pack BNGT Business',
    'services.pack.price2': 'À partir de <span>3 500 MAD</span>',
    'services.pack.business.li1': 'Site vitrine (5 pages)',
    'services.pack.business.li2': 'Domaine + Hébergement (3 mois)',
    'services.pack.business.li3': 'Kit de marque (Logo, Couleurs, Polices)',
    'services.pack.business.li4': 'Optimisation SEO (basique)',
    'services.pack.business.li5': '1 mois de support et mises à jour',
    'services.pack.ecom.title': 'Pack BNGT E-commerce',
    'services.pack.price3': 'À partir de <span>5 000 MAD</span>',
    'services.pack.ecom.li1': 'Site e-commerce complet (Boutique, Panier, Paiement)',
    'services.pack.ecom.li2': 'Domaine + Hébergement (3 mois)',
    'services.pack.ecom.li3': 'Ajout de produits (jusqu\'à 20)',
    'services.pack.ecom.li4': 'Intégration Paiement & WhatsApp',
    'services.pack.ecom.li5': '1 mois de support et formation',
    'services.pack.custom.title': 'Pack Site Web sur mesure',
    'services.pack.price4': 'À partir de <span>15 000 MAD</span>',
    'services.pack.custom.li1': 'Site/app web sur mesure avec fonctionnalités dédiées',
    'services.pack.custom.li2': 'Conception performante et évolutive',
    'services.pack.custom.li3': 'Back-end complexe (base de données, API)',
    'services.pack.custom.li4': 'Mobile-friendly & optimisé SEO',
    'services.pack.custom.li5': 'Support et maintenance dédiés',
    'about.title': 'À propos de BNGT Agency',
    'about.lead': 'Chez <strong>BNGT | Bigfaine Next Gen Tech</strong>, créé par <strong>Amine Bigfaine</strong>, nous créons des solutions digitales de pointe pour aider les entreprises à se développer et à se démarquer.',
    'about.body': 'Notre mission : concevoir des sites, des marques et des stratégies numériques qui engagent et performent.',
    'about.team.title': 'Notre équipe',
    'about.team.body': 'Petit groupe talentueux de designers et ingénieurs, basé au Maroc.',
    'about.process.title': 'Processus',
    'about.process.lead': 'Découverte → Design → Build → Lancement → Support',
    'about.process.discovery.title': 'Découverte',
    'about.process.discovery.body': 'Workshops, objectifs, recherche et KPIs.',
    'about.process.design.title': 'Design',
    'about.process.design.body': 'Wireframes, prototypes, systèmes visuels.',
    'about.process.build.title': 'Build',
    'about.process.build.body': 'Développement, QA, performance.',
    'portfolio.title': 'Portfolio',
    'portfolio.lead': 'Études de cas et projets.',
    'portfolio.item1': 'Branding et site',
    'portfolio.item2': 'eCommerce',
    'portfolio.item3': 'Lancement de produit',
    'portfolio.ig.title': 'Derniers travaux Instagram',
    'portfolio.ig.lead': 'Synchronisé automatiquement depuis @bngt.agency',
    'contact.title': 'Contact',
    'contact.lead': 'Parlez-nous de votre projet — réponse sous 48h.',
    'contact.form.title': 'Entrer en contact',
    'contact.form.name': 'Nom',
    'contact.form.email': 'Email',
    'contact.form.message': 'Message',
    'contact.form.submit': 'Envoyer',
    'contact.testimonials.title': 'Témoignages',
    'contact.testimonials.t1': '« BNGT a livré un site impeccable qui a augmenté les conversions. »',
    'contact.testimonials.t2': '« Créatif, réactif et ponctuel. »',
    'contact.info.title': 'Infos de contact',
    'contact.info.instagramLabel': 'Instagram',
    'contact.info.founderLabel': 'Fondateur',
    'contact.info.locationLabel': 'Localisation',
    'contact.follow.title': 'Suivez-nous',
    'contact.news.title': 'Newsletter',
    'contact.news.lead': 'Abonnez-vous pour des mises à jour et insights.',
    'contact.news.placeholder': 'Votre email',
    'contact.news.submit': 'S\'abonner'
    , 'cookie.text': 'Nous utilisons des cookies pour améliorer votre expérience.'
    , 'cookie.accept': 'Accepter'
  });

  Object.assign(translations.ar, {
    'home.services.details': 'تفاصيل الخدمات',
    'home.services.web.title': 'تصميم وتطوير المواقع',
    'home.services.web.desc': 'مواقع سريعة وقابلة للتوسّع باستخدام أطر حديثة مثل React وAngular وVue.js.',
    'home.services.uiux.title': 'تصميم واجهات وتجربة المستخدم',
    'home.services.uiux.desc': 'واجهات جميلة وبديهية لتعزيز تفاعل المستخدمين.',
    'home.services.support.title': 'الصيانة والدعم',
    'home.services.support.desc': 'دعم مستمر وتحديثات وتحسينات للحفاظ على الأداء.',
    'home.services.strategy.title': 'استراتيجية رقمية',
    'home.services.strategy.desc': 'تخطيط شامل ينسجم مع أهداف العمل واحتياجات السوق.',
    'home.why.title': 'لماذا BNGT',
    'home.why.body': 'نمزج التصميم النظيف مع الانضباط الهندسي لتحقيق نتائج ملموسة.',
    'home.why.li1': 'تركيز على الأداء',
    'home.why.li2': 'سهولة الوصول وتحسين SEO',
    'home.why.li3': 'أنظمة ومكوّنات تصميم',
    'home.portfolio.title': 'الأعمال',
    'home.portfolio.lead': 'مشاريع تُظهر التصميم والنتائج.',
    'home.portfolio.item1': 'الهوية والموقع',
    'home.portfolio.item2': 'متجر إلكتروني',
    'home.portfolio.item3': 'إطلاق منتج',
    'home.about.title': 'عن BNGT',
    'home.about.lead': 'نحن وكالة رقمية متخصّصة في تصميم المواقع والبراندينغ والحلول التسويقية.',
    'home.about.body': 'تأسست على يد أمين بيغفاين، تمزج BNGT الإبداع التقني مع التصميم لصنع تجارب رقمية مميزة.',
    'home.values.title': 'قيمنا',
    'home.values.li1': 'ابتكار',
    'home.values.li2': 'جودة',
    'home.values.li3': 'تعاون',
    'home.values.li4': 'نتائج',
    'home.process.title': 'آليتنا',
    'home.process.lead': 'كيف نحوّل الأفكار إلى واقع.',
    'home.process.step1.title': '01. الاستكشاف',
    'home.process.step1.body': 'نفهم أهداف عملك والجمهور والمتطلبات.',
    'home.process.step2.title': '02. الاستراتيجية',
    'home.process.step2.body': 'خطة شاملة مع معالم وتسليمات واضحة.',
    'home.process.step3.title': '03. التصميم',
    'home.process.step3.body': 'تصاميم جميلة وسهلة تتماشى مع هويتك.',
    'home.process.step4.title': '04. التطوير',
    'home.process.step4.body': 'حلول قوية وقابلة للتوسّع بتقنيات حديثة.',
    'home.process.step5.title': '05. الإطلاق',
    'home.process.step5.body': 'نشر المشروع وضمان السلاسة.',
    'home.process.step6.title': '06. الدعم',
    'home.process.step6.body': 'صيانة وتحسين مستمر.',
    'home.team.title': 'تعرف على الفريق',
    'home.team.lead': 'العقول الإبداعية خلف BNGT.',
    'home.testimonial1': '"قدمت BNGT موقعًا رائعًا رفع التحويلات."',
    'home.testimonial2': '"إبداعيون، متجاوبون وفي الوقت المحدد."',
    'home.news.title': 'كن على اطلاع',
    'home.news.lead': 'اشترك في النشرة لأحدث الأخبار والرؤى.',
    'home.news.placeholder': 'بريدك الإلكتروني',
    'home.news.submit': 'اشترك',
    'home.faq.title': 'الأسئلة الشائعة',
    'home.faq.q1': 'كم يستغرق تنفيذ المشروع؟',
    'home.faq.a1': 'حسب التعقيد؛ أغلب المواقع تُنجز خلال 4–8 أسابيع.',
    'home.faq.q2': 'هل تقدمون دعمًا مستمرًا؟',
    'home.faq.a2': 'نعم، نوفر باقات صيانة ودعم.',
    'home.faq.q3': 'ما التقنيات المستخدمة؟',
    'home.faq.a3': 'React وVue.js وNode.js ومنصات سحابية للحلول القابلة للتوسّع.',
    'home.faq.q4': 'كيف تتم المراجعات؟',
    'home.faq.a4': 'عدد مراجعات محدد والعمل بشكل تعاوني لتحقيق رؤيتك.',
    'home.cta.title': 'ابدأ مشروعك التالي',
    'home.cta.lead': 'أخبرنا بأهدافك وسنضع خطة مناسبة.',
    'home.cta.btn': 'تواصل معنا',
    'footer.copy': '© <span data-year></span> BNGT Agency — صُنع بواسطة SuNNNy_r.',
    'footer.copyShort': '© <span data-year></span> BNGT Agency',
    'services.title': 'الخدمات',
    'services.lead': 'خدمات رقمية شاملة قابلة للتوسّع.',
    'services.pack.starter.title': 'حزمة BNGT المبدئية',
    'services.pack.price1': 'ابتداءً من <span>1,500 MAD</span>',
    'services.pack.starter.li1': 'موقع صفحة هبوط (صفحة واحدة، متجاوب)',
    'services.pack.starter.li2': 'تصميم شعار احترافي',
    'services.pack.starter.li3': 'نموذج تواصل / دمج واتساب',
    'services.pack.starter.li4': 'أسبوع دعم مجاني',
    'services.pack.cta': 'ابدأ الآن',
    'services.pack.business.title': 'حزمة BNGT للأعمال',
    'services.pack.price2': 'ابتداءً من <span>3,500 MAD</span>',
    'services.pack.business.li1': 'موقع أعمال (5 صفحات)',
    'services.pack.business.li2': 'نطاق + استضافة (3 أشهر)',
    'services.pack.business.li3': 'حزمة هوية (شعار، ألوان، خطوط)',
    'services.pack.business.li4': 'تحسين SEO (أساسي)',
    'services.pack.business.li5': 'شهر دعم وتحديثات',
    'services.pack.ecom.title': 'حزمة BNGT للتجارة الإلكترونية',
    'services.pack.price3': 'ابتداءً من <span>5,000 MAD</span>',
    'services.pack.ecom.li1': 'موقع متجر كامل (متجر، سلة، دفع)',
    'services.pack.ecom.li2': 'نطاق + استضافة (3 أشهر)',
    'services.pack.ecom.li3': 'رفع المنتجات (حتى 20 منتجًا)',
    'services.pack.ecom.li4': 'دمج الدفع والواتساب',
    'services.pack.ecom.li5': 'شهر دعم وتدريب',
    'services.pack.custom.title': 'حزمة موقع مخصص',
    'services.pack.price4': 'ابتداءً من <span>15,000 MAD</span>',
    'services.pack.custom.li1': 'موقع/تطبيق ويب مخصص بميزات خاصة',
    'services.pack.custom.li2': 'تصميم عالي الأداء وقابل للتوسّع',
    'services.pack.custom.li3': 'خلفية معقّدة (قاعدة بيانات، APIs)',
    'services.pack.custom.li4': 'متوافق مع الجوال ومحسّن SEO',
    'services.pack.custom.li5': 'دعم وصيانة مخصصة',
    'about.title': 'عن BNGT Agency',
    'about.lead': 'في <strong>BNGT | Bigfaine Next Gen Tech</strong>، التي أنشأها <strong>أمين بيغفاين</strong>، نبتكر حلولًا رقمية حديثة لتميّز أعمالكم.',
    'about.body': 'هدفنا تصميم مواقع وهوية واستراتيجيات رقمية تربط المستخدمين وتحقق النتائج.',
    'about.team.title': 'فريقنا',
    'about.team.body': 'فريق صغير موهوب من المصممين والمهندسين يعمل عن بعد من المغرب.',
    'about.process.title': 'العملية',
    'about.process.lead': 'استكشاف → تصميم → بناء → إطلاق → دعم',
    'about.process.discovery.title': 'الاستكشاف',
    'about.process.discovery.body': 'ورش عمل، أهداف، بحث وقياسات الأداء.',
    'about.process.design.title': 'التصميم',
    'about.process.design.body': 'نماذج أولية، هياكل، أنظمة بصرية.',
    'about.process.build.title': 'البناء',
    'about.process.build.body': 'تطوير، ضمان الجودة، تحسين الأداء.',
    'portfolio.title': 'الأعمال',
    'portfolio.lead': 'دراسات حالة ومشاريع.',
    'portfolio.item1': 'الهوية والموقع',
    'portfolio.item2': 'متجر إلكتروني',
    'portfolio.item3': 'إطلاق منتج',
    'portfolio.ig.title': 'أحدث الأعمال على إنستغرام',
    'portfolio.ig.lead': 'متزامن تلقائيًا من @bngt.agency',
    'contact.title': 'تواصل',
    'contact.lead': 'أخبرنا عن مشروعك — سنرد خلال 48 ساعة.',
    'contact.form.title': 'تواصل معنا',
    'contact.form.name': 'الاسم',
    'contact.form.email': 'البريد الإلكتروني',
    'contact.form.message': 'الرسالة',
    'contact.form.submit': 'إرسال',
    'contact.testimonials.title': 'آراء العملاء',
    'contact.testimonials.t1': '"قدمت BNGT موقعًا رائعًا رفع التحويلات."',
    'contact.testimonials.t2': '"إبداعيون، متجاوبون وفي الوقت المحدد."',
    'contact.info.title': 'معلومات التواصل',
    'contact.info.instagramLabel': 'إنستغرام',
    'contact.info.founderLabel': 'المؤسس',
    'contact.info.locationLabel': 'الموقع',
    'contact.follow.title': 'تابعنا',
    'contact.news.title': 'النشرة البريدية',
    'contact.news.lead': 'اشترك للحصول على التحديثات والرؤى.',
    'contact.news.placeholder': 'بريدك الإلكتروني',
    'contact.news.submit': 'اشترك'
    , 'cookie.text': 'نستخدم ملفات تعريف الارتباط لتحسين تجربتك.'
    , 'cookie.accept': 'موافقة'
  });

  Object.assign(translations.de, {
    'home.services.details': 'Leistungsdetails',
    'home.services.web.title': 'Webdesign & Entwicklung',
    'home.services.web.desc': 'Responsiv und skalierbar mit modernen Frameworks wie React, Angular und Vue.js.',
    'home.services.uiux.title': 'UI/UX Design',
    'home.services.uiux.desc': 'Schöne, intuitive Interfaces zur Steigerung der Nutzerbindung.',
    'home.services.support.title': 'Wartung & Support',
    'home.services.support.desc': 'Laufender Support, Updates und Optimierung für reibungslose Produkte.',
    'home.services.strategy.title': 'Digitale Strategie',
    'home.services.strategy.desc': 'Umfassende Planung passend zu Zielen und Marktanforderungen.',
    'home.why.title': 'Warum BNGT',
    'home.why.body': 'Wir verbinden klares Design mit Ingenieursdisziplin für messbare Ergebnisse.',
    'home.why.li1': 'Fokus auf Performance',
    'home.why.li2': 'Barrierefrei & SEO‑freundlich',
    'home.why.li3': 'Designsysteme & Komponenten',
    'home.portfolio.title': 'portfolio',
    'home.portfolio.lead': 'Projekte, die Design und Ergebnisse zeigen.',
    'home.portfolio.item1': 'Branding & Web',
    'home.portfolio.item2': 'E‑Commerce',
    'home.portfolio.item3': 'Produktlaunch',
    'home.about.title': 'Über BNGT',
    'home.about.lead': 'Wir sind eine Digitalagentur für Webdesign, Branding und Marketing.',
    'home.about.body': 'Gegründet von Amine Bigfaine: kreatives Design + technische Exzellenz für starke digitale Erlebnisse.',
    'home.values.title': 'Unsere Werte',
    'home.values.li1': 'Innovation',
    'home.values.li2': 'Qualität',
    'home.values.li3': 'Zusammenarbeit',
    'home.values.li4': 'Ergebnisorientiert',
    'home.process.title': 'Unser Prozess',
    'home.process.lead': 'So verwandeln wir Ideen in Realität.',
    'home.process.step1.title': '01. Entdeckung',
    'home.process.step1.body': 'Ziele, Zielgruppe und Anforderungen verstehen.',
    'home.process.step2.title': '02. Strategie',
    'home.process.step2.body': 'Plan mit klaren Meilensteinen und Ergebnissen.',
    'home.process.step3.title': '03. Design',
    'home.process.step3.body': 'Schöne, benutzerfreundliche Designs im Einklang mit der Marke.',
    'home.process.step4.title': '04. Entwicklung',
    'home.process.step4.body': 'Robuste, skalierbare Lösungen mit modernen Technologien.',
    'home.process.step5.title': '05. Launch',
    'home.process.step5.body': 'Bereitstellen und sicherstellen, dass alles rund läuft.',
    'home.process.step6.title': '06. Support',
    'home.process.step6.body': 'Kontinuierliche Wartung und Optimierung.',
    'home.team.title': 'Team kennenlernen',
    'home.team.lead': 'Die kreativen Köpfe hinter BNGT.',
    'home.testimonial1': '„BNGT lieferte eine tadellose Website, die die Conversions steigerte.“',
    'home.testimonial2': '„Kreativ, reaktionsschnell und pünktlich.“',
    'home.news.title': 'Bleiben Sie informiert',
    'home.news.lead': 'Abonnieren Sie unseren Newsletter für aktuelle Einblicke.',
    'home.news.placeholder': 'Ihre E‑Mail‑Adresse',
    'home.news.submit': 'Abonnieren',
    'home.faq.title': 'Häufige Fragen',
    'home.faq.q1': 'Wie lange dauert ein Projekt?',
    'home.faq.a1': 'Je nach Komplexität: meist 4–8 Wochen.',
    'home.faq.q2': 'Bieten Sie laufenden Support?',
    'home.faq.a2': 'Ja, Wartungs- und Supportpakete sind verfügbar.',
    'home.faq.q3': 'Welche Technologien nutzen Sie?',
    'home.faq.a3': 'React, Vue.js, Node.js und Cloudplattformen für Skalierung.',
    'home.faq.q4': 'Wie laufen Überarbeitungen ab?',
    'home.faq.a4': 'Festes Kontingent an Revisionen, Zusammenarbeit für Ihre Vision.',
    'home.cta.title': 'Starten Sie Ihr nächstes Projekt',
    'home.cta.lead': 'Teilen Sie Ihre Ziele – wir erstellen einen passenden Plan.',
    'home.cta.btn': 'Kontakt aufnehmen',
    'footer.copy': '© <span data-year></span> BNGT Agency — Erstellt von SuNNNy_r.',
    'footer.copyShort': '© <span data-year></span> BNGT Agency',
    'services.title': 'Leistungen',
    'services.lead': 'End‑to‑End‑Services, skalierbar und leistungsfähig.',
    'services.pack.starter.title': 'BNGT Starter‑Paket',
    'services.pack.price1': 'Ab <span>1.500 MAD</span>',
    'services.pack.starter.li1': 'Landing‑Page‑Website (1 Seite, responsiv)',
    'services.pack.starter.li2': 'Professionelles Logo‑Design',
    'services.pack.starter.li3': 'Kontaktformular / WhatsApp‑Integration',
    'services.pack.starter.li4': '1 Woche kostenloser Support',
    'services.pack.cta': 'Jetzt starten',
    'services.pack.business.title': 'BNGT Business‑Paket',
    'services.pack.price2': 'Ab <span>3.500 MAD</span>',
    'services.pack.business.li1': 'Business‑Website (5 Seiten)',
    'services.pack.business.li2': 'Domain + Hosting (3 Monate)',
    'services.pack.business.li3': 'Branding‑Kit (Logo, Farben, Schriften)',
    'services.pack.business.li4': 'SEO‑Optimierung (Basis)',
    'services.pack.business.li5': '1 Monat Support & Updates',
    'services.pack.ecom.title': 'BNGT E‑Commerce‑Paket',
    'services.pack.price3': 'Ab <span>5.000 MAD</span>',
    'services.pack.ecom.li1': 'Komplette Shop‑Website (Shop, Warenkorb, Checkout)',
    'services.pack.ecom.li2': 'Domain + Hosting (3 Monate)',
    'services.pack.ecom.li3': 'Produktpflege (bis zu 20 Produkte)',
    'services.pack.ecom.li4': 'Zahlungs- & WhatsApp‑Integration',
    'services.pack.ecom.li5': '1 Monat Support & Schulung',
    'services.pack.custom.title': 'BNGT Individuelles Website‑Paket',
    'services.pack.price4': 'Ab <span>15.000 MAD</span>',
    'services.pack.custom.li1': 'Individuelle Website/Web‑App mit speziellen Features',
    'services.pack.custom.li2': 'Skalierbares, leistungsstarkes Design',
    'services.pack.custom.li3': 'Komplexes Backend (Datenbank, APIs)',
    'services.pack.custom.li4': 'Mobilfreundlich & SEO‑optimiert',
    'services.pack.custom.li5': 'Dedizierter Support & Wartung',
    'about.title': 'Über BNGT Agency',
    'about.lead': 'Bei <strong>BNGT | Bigfaine Next Gen Tech</strong>, gegründet von <strong>Amine Bigfaine</strong>, entwickeln wir digitale Lösungen, die Unternehmen wachsen lassen.',
    'about.body': 'Unsere Mission: Websites, Branding und digitale Strategien, die Nutzer verbinden und Ergebnisse liefern.',
    'about.team.title': 'Unser Team',
    'about.team.body': 'Kleines, talentiertes Team aus Designern & Ingenieuren, remote in Marokko.',
    'about.process.title': 'Prozess',
    'about.process.lead': 'Entdeckung → Design → Build → Launch → Support',
    'about.process.discovery.title': 'Entdeckung',
    'about.process.discovery.body': 'Workshops, Ziele, Recherche und KPIs.',
    'about.process.design.title': 'Design',
    'about.process.design.body': 'Wireframes, Prototypen, visuelle Systeme.',
    'about.process.build.title': 'Build',
    'about.process.build.body': 'Entwicklung, QA, Performance‑Optimierung.',
    'portfolio.title': 'Portfolio',
    'portfolio.lead': 'Case Studies & Projekte.',
    'portfolio.item1': 'Branding & Website',
    'portfolio.item2': 'E‑Commerce',
    'portfolio.item3': 'Produktlaunch',
    'portfolio.ig.title': 'Neueste Instagram‑Arbeiten',
    'portfolio.ig.lead': 'Automatisch synchronisiert von @bngt.agency',
    'contact.title': 'Kontakt',
    'contact.lead': 'Erzählen Sie uns von Ihrem Projekt — Antwort innerhalb von 48 Stunden.',
    'contact.form.title': 'Kontakt aufnehmen',
    'contact.form.name': 'Name',
    'contact.form.email': 'E‑Mail',
    'contact.form.message': 'Nachricht',
    'contact.form.submit': 'Senden',
    'contact.testimonials.title': 'Referenzen',
    'contact.testimonials.t1': '„BNGT lieferte eine tadellose Website, die die Conversions steigerte.“',
    'contact.testimonials.t2': '„Kreativ, reaktionsschnell und pünktlich.“',
    'contact.info.title': 'Kontaktinfo',
    'contact.info.instagramLabel': 'Instagram',
    'contact.info.founderLabel': 'Gründer',
    'contact.info.locationLabel': 'Standort',
    'contact.follow.title': 'Folgen Sie uns',
    'contact.news.title': 'Newsletter',
    'contact.news.lead': 'Abonnieren Sie für Updates und Einblicke.',
    'contact.news.placeholder': 'Ihre E‑Mail',
    'contact.news.submit': 'Abonnieren'
    , 'cookie.text': 'Wir verwenden Cookies, um Ihre Erfahrung zu verbessern.'
    , 'cookie.accept': 'Akzeptieren'
  });

  function applyLanguage(lang) {
    const dict = translations[lang] || translations.en;
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const val = dict[key];
      if(val) el.innerHTML = val;
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      const val = dict[key];
      if(val) el.setAttribute('placeholder', el.tagName === 'INPUT' ? val : val);
    });
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }

  const langSelect = document.getElementById('lang-select');
  if(langSelect){
    const savedLang = localStorage.getItem('lang') || 'en';
    langSelect.value = savedLang;
    applyLanguage(savedLang);
    langSelect.addEventListener('change', function(){
      const lang = langSelect.value;
      localStorage.setItem('lang', lang);
      applyLanguage(lang);
      const currentCurrency = (document.getElementById('currency-select') && document.getElementById('currency-select').value) || localStorage.getItem('currency') || 'MAD';
      if (typeof applyCurrency === 'function') applyCurrency(currentCurrency);
    });
  }

  const currencyRates = { MAD: 1, USD: 0.10, EUR: 0.093 };
  const currencySymbols = { MAD: 'MAD', USD: 'USD', EUR: 'EUR' };
  function applyCurrency(cur){
    const rate = currencyRates[cur] || 1;
    document.querySelectorAll('.price[data-amount-mad]').forEach(p => {
      const base = parseFloat(p.getAttribute('data-amount-mad')) || 0;
      const converted = Math.round(base * rate);
      const formatted = converted.toLocaleString(document.documentElement.lang || 'en');
      const symbol = currencySymbols[cur] || 'MAD';
      const valEl = p.querySelector('.price-value');
      if(valEl) valEl.textContent = formatted + ' ' + symbol;
    });
  }
  const currencySelect = document.getElementById('currency-select');
  if(currencySelect){
    const savedCur = localStorage.getItem('currency') || 'MAD';
    currencySelect.value = savedCur;
    applyCurrency(savedCur);
    currencySelect.addEventListener('change', function(){
      const cur = currencySelect.value;
      localStorage.setItem('currency', cur);
      applyCurrency(cur);
    });
  }

  const cookieBanner = document.getElementById('cookieBanner');
  const cookieAccept = document.getElementById('cookieAccept');
  if(cookieBanner && cookieAccept){
    const consent = localStorage.getItem('cookieConsent');
    if(consent !== 'accepted'){ cookieBanner.style.display = 'flex'; }
    cookieAccept.addEventListener('click', function(){
      localStorage.setItem('cookieConsent', 'accepted');
      cookieBanner.style.display = 'none';
    });
  }

  const backToTop = document.getElementById('backToTop');
  if(backToTop){
    window.addEventListener('scroll', function(){
      const show = window.scrollY > 300;
      backToTop.classList.toggle('show', show);
    });
    backToTop.addEventListener('click', function(){
      window.scrollTo({top:0, behavior:'smooth'});
    });
  }

  // simple testimonials rotation
  const slides = Array.from(document.querySelectorAll('.testimonial'));
  if(slides.length > 1){
    let idx = 0;
    slides.forEach((s,i)=> s.style.display = (i===0? 'block':'none'));
    setInterval(()=>{
      slides.forEach((s,i)=> s.style.display = (i===idx? 'block':'none'));
      idx = (idx+1) % slides.length;
    }, 4500);
  }

  // portfolio tilt (pointer move parallax)
  document.querySelectorAll('.p-item').forEach(item => {
    item.addEventListener('mousemove', (e)=>{
      const r = item.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      item.style.transform = `perspective(900px) rotateX(${y * 4}deg) rotateY(${x * -6}deg)`;
    });
    item.addEventListener('mouseleave', ()=> item.style.transform = 'none');
  });
});

//responsive nav
document.addEventListener('DOMContentLoaded', function() {
  const navToggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.nav');
  navToggle.addEventListener('click', function() {
    nav.classList.toggle('active');
  });
});
