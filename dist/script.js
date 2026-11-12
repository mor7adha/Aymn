(() => {
  'use strict';
  document.querySelectorAll('svg.icon').forEach(icon => {
    icon.setAttribute('aria-hidden', 'true');
    icon.setAttribute('focusable', 'false');
  });
  const translations = {
    ar: {
      skip: 'انتقل إلى المحتوى', navigation: 'التنقل الرئيسي', menu: 'فتح القائمة',
      navAbout: 'نبذة عني', navExpertise: 'تخصصاتي', navExperience: 'الخبرة', navEducation: 'التعليم', navContact: 'لنتواصل',
      heroEyebrow: 'دعم فني. أنظمة. شبكات.', heroIntro: 'مرحبًا، أنا أيمن قحطان', heroTitle1: 'أُبسّط التقنية.', heroTitle2: 'وأصلها بأعمالك.',
      heroDescription: 'مهندس دعم فني وصيانة أنظمة. أساعد على حل المشكلات التقنية، وصيانة الشبكات، وتشغيل الأنظمة المحاسبية والإدارية بكفاءة منذ 2023.',
      heroCta: 'لنتحدث عن احتياجك', cv: 'عرض السيرة الذاتية', newTab: ' — يفتح في نافذة جديدة', location: 'صنعاء، اليمن', supportMode: 'دعم حضوري وعن بُعد', discover: 'اكتشف المزيد', fields: 'مجالات العمل',
      aboutLabel: 'خلف كل حل، فهم.', aboutTitle1: 'أهتم بالتفاصيل التقنية،', aboutTitle2: 'لتتفرغ أنت لأعمالك.',
      aboutText: 'أنا أيمن قحطان، أعمل في الدعم الفني وصيانة الأنظمة والشبكات منذ 2023. تشمل خبرتي تثبيت الأنظمة المحاسبية والإدارية، وتشخيص الأعطال، وتحديث الأنظمة، وحماية بيانات العمل بالنسخ الاحتياطي.',
      aboutText2: 'أجمع بين الخبرة العملية ودراستي لتقنية المعلومات في جامعة صنعاء، وأؤمن بأن الحل الجيد يبدأ بفهم المشكلة والتواصل الواضح مع المستخدم.',
      since: 'بداية الخبرة العملية', onsiteRemote: 'حضوري + عن بُعد', supportApproach: 'دعم يناسب احتياج العمل',
      expertiseLabel: 'ما أستطيع مساعدتك به', expertiseTitle: 'خبرة قريبة من احتياجك.', expertiseAside: 'من تثبيت النظام إلى حل المشكلة، دعم تقني يهتم باستمرارية العمل.',
      service1Title: 'الأنظمة والصيانة', service1Text: 'تثبيت وصيانة الأنظمة المحاسبية والإدارية، وتحديثها، وتنفيذ النسخ الاحتياطي لبيانات المخزون والسجلات المالية.',
      service2Title: 'الشبكات والاتصال', service2Text: 'صيانة شبكات LAN/WAN ومعالجة مشكلات الاتصال والطابعات ومشاركة الموارد، للحفاظ على ترابط بيئة العمل.',
      service3Title: 'الدعم وحل المشكلات', service3Text: 'تشخيص المشكلات وتقديم الدعم للمستخدمين حضوريًا وعن بُعد باستخدام AnyDesk وRustDesk، مع تواصل واضح ومتابعة للحل.',
      tagSystems: 'أنظمة محاسبية', tagBackups: 'نسخ احتياطي', tagConnectivity: 'اتصال ومشاركة',
      experienceLabel: 'خبرة على أرض الواقع', experienceTitle1: 'تعلّم مستمر.', experienceTitle2: 'وأثر عملي.', experienceIntro: 'العمل اليومي مع الأنظمة والمستخدمين هو ما يصنع الفارق في فهم المشكلة والوصول إلى الحل.', fullCv: 'اطّلع على سيرتي الكاملة',
      jobDate: 'أكتوبر 2023 — حتى الآن', jobTitle: 'مسؤول الصيانة والدعم الفني والشبكات', jobSummary: 'دعم الأنظمة المحاسبية والإدارية وصيانة بيئة العمل التقنية.',
      job1: 'تثبيت الأنظمة وصيانتها وتشخيص الأعطال التقنية.', job2: 'تحديث الأنظمة والنسخ الاحتياطي لبيانات المخزون والسجلات المالية.', job3: 'صيانة الشبكات وحل مشكلات الاتصال والطابعات ومشاركة الموارد.', job4: 'تقديم الدعم الحضوري وعن بُعد عبر AnyDesk وRustDesk.', job5: 'دعم عمليات الجرد والتسويات المالية وإجراءات نهاية العام.',
      assignmentDuration: 'مهمة لمدة 3 أشهر', assignmentTitle: 'مهمة دعم فني', assignmentText: 'إتمام مهمة دعم فني لمدة ثلاثة أشهر لدى Ayat Solution ضمن الخبرة العملية.',
      skillsLabel: 'مجموعة أدواتي', skillsTitle1: 'مهارات تقنية.', skillsTitle2: 'وحسّ إنساني.', skillsAside: 'معرفة بالأدوات، واهتمام بالشخص الذي يستخدمها.',
      skillGroup1: 'الدعم والأنظمة', skillGroup1Text: 'الدعم الفني وتشخيص الأعطال · الأنظمة المحاسبية والإدارية · تحديث الأنظمة والنسخ الاحتياطي',
      skillGroup2: 'الشبكات وبيئة العمل', skillGroup2Text: 'صيانة شبكات LAN/WAN · Windows وMicrosoft Office · الدعم عن بُعد',
      skillGroup3: 'التواصل والتطوير', skillGroup3Text: 'خدمة العملاء وحل المشكلات · العمل الجماعي والعمل تحت الضغط · أدوات وتطبيقات الذكاء الاصطناعي', toolkitText: 'الأداة المناسبة، للمشكلة المناسبة.',
      educationLabel: 'المعرفة تتطور', educationTitle: 'أتعلم اليوم. لأقدّم أفضل غدًا.', inProgress: 'قيد الدراسة', degree: 'بكالوريوس تقنية المعلومات', university: 'جامعة صنعاء — كلية الحاسوب وتكنولوجيا المعلومات', studyYear: 'المستوى الثالث', graduation: 'التخرج المتوقع: 2027–2028', trainingTitle: 'دورات وتدريب', training1: 'دورات متخصصة في أنظمة آيات', training2: 'التصميم والتسويق الرقمي', training3: 'أساسيات الذكاء الاصطناعي', languages: 'اللغات', arabic: 'العربية', native: 'اللغة الأم', english: 'الإنجليزية', good: 'جيد',
      contactLabel: 'لنبدأ بمحادثة', contactTitle1: 'لديك تحدٍ تقني؟', contactTitle2: 'يسعدني أن أساعدك.', contactText: 'للتواصل حول الدعم الفني أو فرص العمل والتعاون، تواصل معي مباشرة.', sendEmail: 'راسلني عبر البريد', email: 'البريد الإلكتروني', phone: 'رقم الهاتف', basedIn: 'الموقع', copyEmail: 'نسخ البريد الإلكتروني', copied: 'تم نسخ البريد الإلكتروني', copyFailed: 'تعذّر النسخ تلقائيًا. يمكنك تحديد البريد ونسخه يدويًا.', copyright: 'أيمن قحطان. جميع الحقوق محفوظة.', backTop: 'إلى الأعلى', title: 'أيمن قحطان | دعم فني وصيانة أنظمة', description: 'أيمن قحطان — مهندس دعم فني وصيانة أنظمة في صنعاء، اليمن. خبرة منذ 2023 في الأنظمة المحاسبية والشبكات والدعم عن بُعد.'
    },
    en: {
      skip: 'Skip to content', navigation: 'Main navigation', menu: 'Open navigation menu',
      navAbout: 'About', navExpertise: 'Expertise', navExperience: 'Experience', navEducation: 'Education', navContact: 'Let’s talk',
      heroEyebrow: 'IT SUPPORT. SYSTEMS. NETWORKS.', heroIntro: 'Hi, I’m Aymn Qahtan', heroTitle1: 'Making tech simple.', heroTitle2: 'Keeping you connected.',
      heroDescription: 'Technical Support & Systems Maintenance Engineer. Solving technical issues, maintaining networks, and supporting accounting and administrative systems since 2023.',
      heroCta: 'Let’s talk about your needs', cv: 'View my résumé', newTab: ' — opens in a new tab', location: 'Sana’a, Yemen', supportMode: 'On-site & remote support', discover: 'Explore more', fields: 'Areas of expertise',
      aboutLabel: 'Understanding comes first.', aboutTitle1: 'I handle the technical details.', aboutTitle2: 'You focus on your work.',
      aboutText: 'I’m Aymn Qahtan, working in technical support, systems maintenance, and networks since 2023. My experience includes installing accounting and administrative systems, troubleshooting, system updates, and protecting business data through backups.',
      aboutText2: 'I combine hands-on experience with my Information Technology studies at Sana’a University. I believe a good solution starts with understanding the problem and communicating clearly with the user.',
      since: 'Hands-on experience since', onsiteRemote: 'On-site + remote', supportApproach: 'Support that fits the work',
      expertiseLabel: 'How I can help', expertiseTitle: 'Practical expertise. Real needs.', expertiseAside: 'From installing a system to solving a problem, technical support that helps keep work moving.',
      service1Title: 'Systems & maintenance', service1Text: 'Installing, maintaining, and updating accounting and administrative systems. Backing up inventory data and financial records.',
      service2Title: 'Networks & connectivity', service2Text: 'Maintaining LAN/WAN networks and resolving connection, printer, and resource-sharing issues to keep the workplace connected.',
      service3Title: 'Support & troubleshooting', service3Text: 'Diagnosing issues and helping users on-site and remotely through AnyDesk and RustDesk, with clear communication and follow-through.',
      tagSystems: 'Accounting systems', tagBackups: 'Data backups', tagConnectivity: 'Connectivity',
      experienceLabel: 'Hands-on experience', experienceTitle1: 'Always learning.', experienceTitle2: 'Always applying.', experienceIntro: 'Working with systems and their users every day makes the difference in understanding a problem and finding a practical solution.', fullCv: 'Explore my full résumé',
      jobDate: 'Oct 2023 — Present', jobTitle: 'Maintenance, Technical Support & Networks Officer', jobSummary: 'Supporting accounting and administrative systems and maintaining the technical work environment.',
      job1: 'Install, maintain, and troubleshoot accounting and administrative systems.', job2: 'Perform system updates and backups for inventory and financial records.', job3: 'Maintain networks and resolve connectivity, printer, and resource-sharing issues.', job4: 'Provide on-site and remote technical support using AnyDesk and RustDesk.', job5: 'Support inventory operations, financial reconciliations, and year-end processes.',
      assignmentDuration: '3-month assignment', assignmentTitle: 'Technical support assignment', assignmentText: 'Completed a three-month technical support assignment at Ayat Solution as part of my professional experience.',
      skillsLabel: 'What I work with', skillsTitle1: 'Technical skills.', skillsTitle2: 'A human approach.', skillsAside: 'Knowing the tools. Understanding the people who use them.',
      skillGroup1: 'Support & systems', skillGroup1Text: 'Technical support & troubleshooting · Accounting & administrative systems · System updates & data backups',
      skillGroup2: 'Networks & workplace tools', skillGroup2Text: 'LAN/WAN network maintenance · Windows & Microsoft Office · Remote support',
      skillGroup3: 'People & development', skillGroup3Text: 'Customer service & problem solving · Teamwork & working under pressure · AI tools & applications', toolkitText: 'The right tool for the right problem.',
      educationLabel: 'Always building knowledge', educationTitle: 'Learning today. Doing better tomorrow.', inProgress: 'In progress', degree: 'Bachelor’s in Information Technology', university: 'Sana’a University — Faculty of Computer and Information Technology', studyYear: 'Third-year student', graduation: 'Expected graduation: 2027–2028', trainingTitle: 'Training & courses', training1: 'Specialized Ayat Systems courses', training2: 'Design & digital marketing', training3: 'Artificial intelligence fundamentals', languages: 'Languages', arabic: 'Arabic', native: 'Native', english: 'English', good: 'Good',
      contactLabel: 'It starts with a conversation', contactTitle1: 'A technical challenge?', contactTitle2: 'Let’s work through it.', contactText: 'For technical support, job opportunities, or collaboration, get in touch directly.', sendEmail: 'Send me an email', email: 'Email address', phone: 'Phone number', basedIn: 'Based in', copyEmail: 'Copy email address', copied: 'Email address copied', copyFailed: 'Automatic copying is unavailable. Select the email address to copy it manually.', copyright: 'Aymn Qahtan. All rights reserved.', backTop: 'Back to top', title: 'AYMN QAHTAN | Technical Support & Systems Maintenance', description: 'Aymn Qahtan — Technical Support & Systems Maintenance Engineer based in Sana’a, Yemen. Hands-on experience with accounting systems, networks, and remote support since 2023.'
    }
  };

  let language = 'ar';
  let toastTimer;
  const menuToggle = document.getElementById('menu-toggle');
  const navigation = document.getElementById('navigation');
  const languageToggle = document.getElementById('language-toggle');
  const toast = document.getElementById('toast');

  function closeMenu(returnFocus = false) {
    navigation.dataset.open = 'false';
    menuToggle.setAttribute('aria-expanded', 'false');
    if (returnFocus) menuToggle.focus();
  }

  function setLanguage(next) {
    language = next === 'en' ? 'en' : 'ar';
    const dictionary = translations[language];
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.querySelectorAll('[data-i18n]').forEach(element => {
      const value = dictionary[element.dataset.i18n];
      if (value !== undefined) element.textContent = value;
    });
    document.querySelectorAll('[data-i18n-aria]').forEach(element => {
      const value = dictionary[element.dataset.i18nAria];
      if (value !== undefined) element.setAttribute('aria-label', value);
    });
    const languageLabel = document.getElementById('language-label');
    languageLabel.textContent = language === 'ar' ? 'EN' : 'عربي';
    languageLabel.lang = language === 'ar' ? 'en' : 'ar';
    languageToggle.setAttribute('aria-label', language === 'ar' ? 'Switch to English' : 'التبديل إلى العربية');
    document.title = dictionary.title;
    document.querySelector('meta[name="description"]').content = dictionary.description;
    document.querySelector('meta[property="og:title"]').content = dictionary.title;
    document.querySelector('meta[property="og:description"]').content = dictionary.description;
    closeMenu();
    toast.classList.remove('visible');
    try { localStorage.setItem('aymn-language', language); } catch { /* Browsing without storage is supported. */ }
  }

  try {
    const savedLanguage = localStorage.getItem('aymn-language');
    if (savedLanguage === 'en') setLanguage('en');
  } catch { /* Keep the fully rendered Arabic default. */ }

  languageToggle.addEventListener('click', () => setLanguage(language === 'ar' ? 'en' : 'ar'));
  menuToggle.addEventListener('click', () => {
    const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
    navigation.dataset.open = String(!isOpen);
    menuToggle.setAttribute('aria-expanded', String(!isOpen));
  });
  navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', () => closeMenu()));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && menuToggle.getAttribute('aria-expanded') === 'true') closeMenu(true);
  });
  document.addEventListener('click', event => {
    if (menuToggle.getAttribute('aria-expanded') === 'true' && !event.target.closest('.site-header')) closeMenu();
  });
  const desktopMedia = window.matchMedia('(min-width: 901px)');
  if (desktopMedia.addEventListener) desktopMedia.addEventListener('change', () => closeMenu());

  const header = document.querySelector('.site-header');
  const updateHeader = () => header.classList.toggle('scrolled', window.scrollY > 10);
  window.addEventListener('scroll', updateHeader, { passive: true });
  updateHeader();
  document.getElementById('year').textContent = String(new Date().getFullYear());

  document.getElementById('copy-email').addEventListener('click', async () => {
    let success = false;
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText('aymanqahton2004@gmail.com');
        success = true;
      } else {
        const input = document.createElement('textarea');
        input.value = 'aymanqahton2004@gmail.com';
        input.setAttribute('readonly', '');
        input.style.cssText = 'position:fixed;left:-9999px;top:0';
        document.body.appendChild(input);
        try {
          input.select();
          success = document.execCommand('copy');
        } finally {
          input.remove();
          document.getElementById('copy-email').focus({ preventScroll: true });
        }
      }
    } catch { success = false; }
    toast.textContent = translations[language][success ? 'copied' : 'copyFailed'];
    toast.classList.add('visible');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('visible'), success ? 3000 : 6500);
  });

  if ('IntersectionObserver' in window) {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!reduceMotion) {
      document.documentElement.classList.add('motion-ready');
      const revealObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            revealObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.08, rootMargin: '0px 0px -15px 0px' });
      document.querySelectorAll('.reveal').forEach(element => revealObserver.observe(element));
    }
    const navLinks = [...navigation.querySelectorAll('a[href^="#"]')];
    const sectionObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        navLinks.forEach(link => {
          if (link.hash === `#${entry.target.id}`) link.setAttribute('aria-current', 'location');
          else link.removeAttribute('aria-current');
        });
      });
    }, { rootMargin: '-18% 0px -60% 0px', threshold: 0 });
    document.querySelectorAll('main section[id]').forEach(section => sectionObserver.observe(section));
  }
})();
