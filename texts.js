const headerText = {
  en: {
    home: "Home",
    projects: "Projects",
    education: "Education"
  },
  fa: {
    home: "خانه",
    projects: "پروژه‌ها",
    education: "تحصیلات"
  },
  de: {
    home: "Startseite",
    projects: "Projekte",
    education: "Bildung"
  }
};
const footerText = {
  en: "© 2025 Amir Shygun | All rights reserved.",
  fa: "© ۲۰۲۵ امیر شایگان | کلیه حقوق محفوظ است.",
  de: "© 2025 Amir Shygun | Alle Rechte vorbehalten."
};
const introTexts = {
  en: {
    openToWork: "Open to work",
    hiName: "Hi, I'm",
    name: "Amir Shygun",
    description: "Frontend Developer by day & Data Engineer by night. I enjoy tweaking numbers, be it margins and paddings or machine learning hyper-parameters.",
    location: "Based in Iran, Rasht",
    resumeText: "Resume",
    linkedin: "LinkedIn",
    github: "Github",
    email: "Email",
    telegram: "Telegram"
  },
  fa: {
    openToWork: "آماده به کار",
    hiName: "سلام، من",
    name: "امیر شایگان",
    description: "توسعه‌دهنده فرانت‌اند در  روز و مهندس داده در  شب. من از تنظیم اعداد لذت می‌برم، چه حاشیه‌ها و فاصله‌ها باشد چه ابرپارامترهای یادگیری ماشین.",
    location: "ساکن ایران، رشت",
    resumeText: "رزومه",
    linkedin: "لینکدین",
    github: "گیت‌هاب",
    email: "ایمیل",
    telegram: "تلگرام"
  },
  de: {
    openToWork: "Offen für Arbeit",
    hiName: "Hallo, ich bin",
    name: "Amir Shygun",
    description: "Frontend-Entwickler tagsüber & Dateningenieur nachts. Ich genieße es, Zahlen zu optimieren, sei es Margins und Padding oder Machine-Learning-Hyperparameter.",
    location: "Ansässig in Iran, Rasht",
    resumeText: "Lebenslauf",
    linkedin: "LinkedIn",
    github: "Github",
    email: "Email",
    telegram: "Telegram"
  }
};
const webTechs = [
    { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", url: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
    { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", url: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
    { name: "jQuery", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg", url: "https://jquery.com/" },
    { name: "Flask", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg", url: "https://flask.palletsprojects.com/" },
    { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", url: "https://www.mysql.com/" },
    { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg", url: "https://tailwindcss.com/" },
    { name: "Linux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg", url: "https://www.kernel.org/" },
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", url: "https://git-scm.com/" },
];
const dataTechs = [
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", url: "https://www.python.org/" },
    { name: "Pandas", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg", url: "https://pandas.pydata.org/" },
    { name: "NumPy", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg", url: "https://numpy.org/" },
    { name: "Matplotlib", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matplotlib/matplotlib-original.svg", url: "https://matplotlib.org/" },
    { name: "Seaborn", icon: "https://img.icons8.com/?size=512&id=90519&format=png", url: "https://seaborn.pydata.org/" },
    { name: "Scikit-Learn", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg", url: "https://scikit-learn.org/" },
    { name: "TensorFlow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg", url: "https://www.tensorflow.org/" },
    { name: "Keras", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/keras/keras-original.svg", url: "https://keras.io/" },
    { name: "Jupyter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg", url: "https://jupyter.org/" },
];
const techTexts = {
  en: {
    web: {
      title: "Web Development",
      description: "2 Years of experience building responsive web applications. Interested in:",
      interestedIn: "Interested in",
      topics: ["Glassmorphism", "Neobrutalism", "Skewmorphism"]
    },
    data: {
      title: "Data Sciences",
      description: "EDA, Modeling, and Deployment for real world usecases. Interested in:",
      topics: ["Data Visualization", "Recommender Systems", "Model Training"]
    }
  },
  fa: {
    web: {
      title: "توسعه وب",
      description: "۲ سال تجربه در ساخت برانمه های وب واکنش گرا. علاقه مند به :",
      interestedIn: "علاقه‌مند به",
      topics: ["گلس‌مورفیسم", "نئوبرتالیزم", "اسکیومورفیسم"]
    },
    data: {
      title: "علوم داده",
      description: "تحلی اکتشافی، مدلسازی، و استقرار برای کاربردهای واقعی. علاقه مند به: ",
      topics: ["تصویری‌سازی داده", "سیستم‌های پیشنهاددهنده", "آموزش مدل"]
    }
  },
  de: {
    web: {
      title: "Webentwicklung",
      description: "2 Jahre Erfahrung im Erstellen responsiver Webanwendungen. Interessiert an:",
      interestedIn: "Interessiert an",
      topics: ["Glassmorphismus", "Neobrutalismus", "Skewmorphismus"]
    },
    data: {
      title: "Datenwissenschaften",
      description: "EDA, Modellierung und Bereitstellung für reale Anwendungsfälle. Interessiert an:",
      topics: ["Datenvisualisierung", "Empfehlungssysteme", "Modelltraining"]
    }
  }
};
const projectsData = [
  {
    title: "Portfolio",
    description: "Responsive personal website built with HTML, CSS, and JavaScript. Features multiple sections (about, projects, contact), light/dark theme toggle, and smooth animations. Designed as a central hub to showcase my skills, projects, and background.",
    images: [
      "./images/projects/portfolio1.png",
      "./images/projects/portfolio2.png",
      "./images/projects/portfolio3.png"
    ],
    link: "https://shygun.com",
    techs: [
      { name: "HTML", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
      { name: "JS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" }
    ]
  },
  {
    title: "Playlistr",
    description: "Full-stack Spotify playlist app with Flask backend and JavaScript frontend. Lets users generate smart playlists from their Spotify library, explore stats (top tracks, artists, genres), and visualize listening trends. Uses Spotify API with user authentication.",
    images: [
      "./images/projects/playlistr1.png",
      "./images/projects/playlistr2.png",
      "./images/projects/playlistr3.png"
    ],
    link: "https://playlistr.shygun.com",
    techs: [
      { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "JS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "Matplotlib", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matplotlib/matplotlib-original.svg" }
    ]
  },
  {
    title: "Flowfetch",
    description: "FlowFetch is a terminal-based system info and ASCII art display, inspired by Neofetch & Cmatrix.",
    images: [
      "./images/projects/flowfetch1.png",
    ],
    link: "https://github.com/a-shygun/flowfetch",
    techs: [
      { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "YAML", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/yaml/yaml-original.svg" },
      { name: "Bash", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg" }
    ]
  }
];
const eduTexts = {
  en: {
    ceMajor: "CE Major",
    degree: "Degree",
    institute: "Institute",
    duration: "Duration",

    languages: "Languages",
    persian: "Persian",
    english: "English",
    german: "German",

    persianLevel: "Native",
    englishLevel: "Professional Proficiency",
    germanLevel: "Intermediate",

    ceValue: "Bachelor's Degree",
    instituteValue: "Azad University of Gilan",
    durationValue: "2020-2025"
  },
  fa: {
    ceMajor: "رشته مهندسی کامپیوتر",
    degree: "مدرک",
    institute: "دانشگاه",
    duration: "مدت زمان",

    languages: "زبان‌ها",
    persian: "فارسی",
    english: "انگلیسی",
    german: "آلمانی",

    persianLevel: "زبان مادری",
    englishLevel: "تسلط حرفه‌ای",
    germanLevel: "متوسط",

    ceValue: "لیسانس",
    instituteValue: "دانشگاه آزاد رشت",
    durationValue: "۲۰۲۰-۲۰۲۵"
  },
  de: {
    ceMajor: "CE Fachbereich",
    degree: "Abschluss",
    institute: "Institut",
    duration: "Dauer",

    languages: "Sprachen",
    persian: "Persisch",
    english: "Englisch",
    german: "Deutsch",

    persianLevel: "Muttersprache",
    englishLevel: "Berufliche Kenntnisse",
    germanLevel: "Mittelstufe",

    ceValue: "Bachelorabschluss",
    instituteValue: "Azad Universität Gilan",
    durationValue: "2020-2025"
  }
};
const certs = {
  en: [
    {
      name: "Advanced Python Programming",
      place: "MFT",
      date: "February - April 2025",
      techs: ["Socket Programming", "Design Patterns", "Multi Threading", "NoSQL Databases"],
      image: "./certs/eng/mft_python2.jpeg"
    },
    {
      name: "Programming with Python",
      place: "MFT",
      date: "December 2023 – April 2024",
      techs: ["Python", "Functional Programming", "OOP Concepts"],
      image: "./certs/eng/mft_python1.jpeg"
    },
    {
      name: "Web Design Pack",
      place: "MFT",
      date: "May – December 2024",
      techs: ["HTML", "CSS", "JavaScript", "JQuery", "Flask", "MySQL"],
      image: "./certs/eng/mft_webpack.jpeg"
    },
    {
      name: "Wordpress & WooCommerce",
      place: "MFT",
      date: "May – July 2024",
      techs: ["WordPress", "CMS", "Elementor"],
      image: "./certs/eng/mft_wordpress.jpeg"
    },
    {
      name: "Security+",
      place: "MFT",
      date: "May - July 2025",
      techs: ["Firewalls", "VPNs", "IDS/IPS", "Policies & Procedures"],
      image: "./certs/eng/mft_security.jpeg"
    },
    {
      name: "Data Analysis with Python",
      place: "MFT",
      date: "May - July 2025",
      techs: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Jupyter"],
      image: "./certs/eng/mft_data_analysis.jpeg"
    },
    {
      name: "Machine Learning with Python",
      place: "MFT",
      date: "July - September 2025",
      techs: ["scikit-learn", "TensorFlow", "Keras"],
      image: "./certs/eng/mft_machine_learning.jpeg"
    },
    {
      name: "Network+",
      place: "MFT",
      date: "August - October 2024",
      techs: ["OSI Model", "TCP/IP", "Subnetting"],
      image: "./certs/eng/mft_network.jpeg"
    },
  ],
  de: [
    {
      name: "Fortgeschrittene Python-Programmierung",
      place: "MFT",
      date: "Februar - April 2025",
      techs: ["Socket-Programmierung", "Entwurfsmuster", "Multithreading", "NoSQL-Datenbanken"],
      image: "./certs/eng/mft_python2.jpeg"
    },
    {
      name: "Programmieren mit Python",
      place: "MFT",
      date: "Dezember 2023 – April 2024",
      techs: ["Python", "Funktionale Programmierung", "OOP-Konzepte"],
      image: "./certs/eng/mft_python1.jpeg"
    },
    {
      name: "Webdesign-Paket",
      place: "MFT",
      date: "Mai – Dezember 2024",
      techs: ["HTML", "CSS", "JavaScript", "JQuery", "Flask", "MySQL"],
      image: "./certs/eng/mft_webpack.jpeg"
    },
    {
      name: "WordPress & WooCommerce",
      place: "MFT",
      date: "Mai – Juli 2024",
      techs: ["WordPress", "CMS", "Elementor"],
      image: "./certs/eng/mft_wordpress.jpeg"
    },
    {
      name: "Security+",
      place: "MFT",
      date: "Mai - Juli 2025",
      techs: ["Firewalls", "VPNs", "IDS/IPS", "Richtlinien & Verfahren"],
      image: "./certs/eng/mft_security.jpeg"
    },
    {
      name: "Datenanalyse mit Python",
      place: "MFT",
      date: "Mai - Juli 2025",
      techs: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Jupyter"],
      image: "./certs/eng/mft_data_analysis.jpeg"
    },
    {
      name: "Maschinelles Lernen mit Python",
      place: "MFT",
      date: "Juli - September 2025",
      techs: ["scikit-learn", "TensorFlow", "Keras"],
      image: "./certs/eng/mft_machine_learning.jpeg"
    },
    {
      name: "Network+",
      place: "MFT",
      date: "August - Oktober 2024",
      techs: ["OSI-Modell", "TCP/IP", "Subnetting"],
      image: "./certs/eng/mft_network.jpeg"
    },
  ],
  fa: [
    {
      name: "برنامه‌نویسی پیشرفته پایتون",
      place: "مجتمع ",
      date: "فوریه - آوریل ۲۰۲۵",
      techs: ["برنامه‌نویسی سوکت", "الگوهای طراحی", "چندریسمانی", "پایگاه‌های داده NoSQL"],
      image: "./certs/fa/mft_python2.jpeg"
    },
    {
      name: "برنامه‌نویسی با پایتون",
      place: "مجتمع ",
      date: "دسامبر ۲۰۲۳ – آوریل ۲۰۲۴",
      techs: ["پایتون", "برنامه‌نویسی تابعی", "مفاهیم شیءگرایی"],
      image: "./certs/fa/mft_python1.jpeg"
    },
    {
      name: "پکیج طراحی وب",
      place: "مجتمع ",
      date: "می - دسامبر ۲۰۲۴",
      techs: ["HTML", "CSS", "JavaScript", "JQuery", "Flask", "MySQL"],
      image: "./certs/fa/mft_webpack.jpeg"
    },
    {
      name: "وردپرس و ووکامرس",
      place: "مجتمع ",
      date: "می – جولای ۲۰۲۴",
      techs: ["WordPress", "CMS", "Elementor"],
      image: "./certs/fa/mft_wordpress.jpeg"
    },
    {
      name: "Security+",
      place: "مجتمع ",
      date: "می - جولای ۲۰۲۵",
      techs: ["فایروال‌ها", "VPN", "IDS/IPS", "سیاست‌ها و رویه‌ها"],
      image: "./certs/fa/mft_security.jpeg"
    },
    {
      name: "تحلیل داده با پایتون",
      place: "مجتمع ",
      date: "می - جولای ۲۰۲۵",
      techs: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Jupyter"],
      image: "./certs/fa/mft_data_analysis.jpeg"
    },
    {
      name: "یادگیری ماشین با پایتون",
      place: "مجتمع ",
      date: "جولای - سپتامبر ۲۰۲۵",
      techs: ["scikit-learn", "TensorFlow", "Keras"],
      image: "./certs/fa/mft_machine_learning.jpeg"
    },
    {
      name: "Network+",
      place: "مجتمع ",
      date: "اوت - اکتبر ۲۰۲۴",
      techs: ["مدل OSI", "TCP/IP", "Subnetting"],
      image: "./certs/fa/mft_network.jpeg"
    },
  ]
};