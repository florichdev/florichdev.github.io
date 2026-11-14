var icons = {
  bot: "fa-solid fa-robot",
  web: "fa-solid fa-laptop-code",
  api: "fa-solid fa-diagram-project",
  contact_tg: "fa-brands fa-telegram",
  contact_gh: "fa-brands fa-github",
  contact_mail: "fa-solid fa-envelope",
  contact_kwork: "fa-solid fa-briefcase",
  contact_vk: "fa-brands fa-vk",
  contact_channel: "fa-solid fa-bullhorn",
  back: "fa-solid fa-arrow-left",
  forward: "fa-solid fa-arrow-right",
  nav_services: "fa-solid fa-briefcase",
  nav_portfolio: "fa-solid fa-layer-group",
  nav_reviews: "fa-solid fa-star",
  nav_contacts: "fa-solid fa-paper-plane",
  translate: "fa-solid fa-language",
  settings: "fa-solid fa-wand-magic-sparkles",
  star: "fa-solid fa-star",
  info: "fa-solid fa-circle-info",
  shield: "fa-solid fa-shield-halved"
};

var techIcons = {
  "Python": "fa-brands fa-python",
  "FastAPI": "fa-solid fa-bolt",
  "Asyncio": "fa-solid fa-bolt",
  "Flask": "fa-solid fa-flask",
  "SQL": "fa-solid fa-database",
  "Node.js": "fa-brands fa-node-js",
  "TypeScript": "fa-solid fa-code",
  "JavaScript": "fa-brands fa-js",
  "Aiogram 3": "fa-brands fa-telegram",
  "Telegram Mini Apps (TWA)": "fa-solid fa-mobile-screen",
  "Pyrogram / Telethon": "fa-solid fa-paper-plane",
  "React": "fa-brands fa-react",
  "HTML5": "fa-brands fa-html5",
  "CSS3": "fa-brands fa-css3-alt",
  "Tailwind CSS": "fa-solid fa-wind",
  "PostgreSQL": "fa-solid fa-database",
  "SQLite": "fa-solid fa-database",
  "Redis": "fa-solid fa-server",
  "SQLAlchemy": "fa-solid fa-cubes",
  "Alembic": "fa-solid fa-timeline",
  "BeautifulSoup4": "fa-solid fa-spider",
  "Playwright / Selenium": "fa-solid fa-robot",
  "Aiohttp": "fa-solid fa-network-wired",
  "Httpx": "fa-solid fa-globe",
  "Docker": "fa-brands fa-docker",
  "Docker Compose": "fa-solid fa-layer-group",
  "Nginx": "fa-solid fa-server",
  "Linux / VPS": "fa-brands fa-linux",
  "Git": "fa-brands fa-git-alt",
  "GitHub Actions": "fa-brands fa-github"
};

var TG_PERSONAL = "https://t.me/vflorich";
var TG_CHANNEL = "https://t.me/florichdev";
var KWORK_URL = "https://kwork.ru/user/florichdev";
var LANG_KEY = "florichdev-lang";
var IS_HTTP = typeof window !== "undefined" && window.location && /^https?:$/.test(window.location.protocol);
var IS_TOUCH = typeof window !== "undefined" && window.matchMedia && window.matchMedia("(hover: none), (pointer: coarse)").matches;
var TRAIL_SETTINGS = { inactivityTimeout: 4500 };

var TECH_GROUPS = [
  {
    categoryRu: "Backend & Языки",
    categoryEn: "Backend & Languages",
    items: ["Python", "FastAPI", "Asyncio", "Flask", "SQL", "Node.js", "TypeScript", "JavaScript"]
  },
  {
    categoryRu: "Telegram & Боты",
    categoryEn: "Telegram & Bots",
    items: ["Aiogram 3", "Telegram Mini Apps (TWA)", "Pyrogram / Telethon"]
  },
  {
    categoryRu: "Frontend & Web",
    categoryEn: "Frontend & Web",
    items: ["React", "HTML5", "CSS3", "Tailwind CSS"]
  },
  {
    categoryRu: "Базы данных & ORM",
    categoryEn: "Databases & ORM",
    items: ["PostgreSQL", "SQLite", "Redis", "SQLAlchemy", "Alembic"]
  },
  {
    categoryRu: "Парсинг & Автоматизация",
    categoryEn: "Scraping & Automation",
    items: ["BeautifulSoup4", "Playwright / Selenium", "Aiohttp", "Httpx"]
  },
  {
    categoryRu: "DevOps & Инфраструктура",
    categoryEn: "DevOps & Infrastructure",
    items: ["Docker", "Docker Compose", "Nginx", "Linux / VPS", "Git", "GitHub Actions"]
  }
];

var TYPEWRITER_PHRASES = {
  ru: [
    "Python Backend Developer",
    "Telegram Bot & Mini Apps Developer",
    "Fullstack Web Developer",
    "Разработка парсеров и скриптов",
    "Автоматизация и разработка ПО"
  ],
  en: [
    "Python Backend Developer",
    "Telegram Bot & Mini Apps Developer",
    "Fullstack Web Developer",
    "Web Scraping & Automation Scripts",
    "Software Development & Automation"
  ]
};

var serviceItems = [
  {
    id: "tg-bots", icon: "bot",
    ru: { title: "Telegram-боты под ключ", desc: "Автоворонки, прием оплат (Crypto, ЮKassa, Stripe, Stars), диалоговые FSM-сценарии, платные подписки, реферальные системы и веб-админки.", price: "от 5 000 ₽" },
    en: { title: "Telegram Bots Turnkey", desc: "Automated sales funnels, payment gateways (Crypto, Stripe, Stars), conversational FSM scenarios, subscriptions, and custom admin dashboards.", price: "from $60" }
  },
  {
    id: "tg-miniapps", icon: "web",
    ru: { title: "Telegram Mini Apps (Web)", desc: "Интерактивные веб-приложения внутри Telegram на React/TS: каталоги товаров, онлайн-корзины, бронирование услуг и личные кабинеты.", price: "от 10 000 ₽" },
    en: { title: "Telegram Mini Apps", desc: "Rich interactive web applications inside Telegram (React/TS): e-commerce catalogs, online carts, booking systems, and member portals.", price: "from $120" }
  },
  {
    id: "api", icon: "api",
    ru: { title: "REST API & Бэкенд", desc: "Высокопроизводительные серверные сервисы на FastAPI и Flask. JWT/OAuth2 авторизация, фоновые очереди задач, валидация данных Pydantic v2 и кэширование.", price: "от 15 000 ₽" },
    en: { title: "REST API & Backend", desc: "Scalable backend services using FastAPI and Flask. JWT/OAuth2 authentication, background task queues, Pydantic v2 validation, and caching.", price: "from $200" }
  },
  {
    id: "parsing", icon: "web",
    ru: { title: "Парсинг & Автоматизация", desc: "Отказоустойчивый асинхронный сбор данных с сайтов и маркетплейсов, обход антибот-защиты, экспорт в Excel, Google Sheets или базы данных.", price: "от 8 000 ₽" },
    en: { title: "Scraping & Automation", desc: "Resilient asynchronous data scraping systems, anti-blocking measures, background task pipelines, and DB/Excel/Sheets exports.", price: "from $120" }
  },
  {
    id: "databases", icon: "api",
    ru: { title: "Базы данных & Оптимизация", desc: "Проектирование нормализованных схем БД (PostgreSQL, SQLite, Redis), версионирование миграций через Alembic, оптимизация сложных запросов.", price: "от 10 000 ₽" },
    en: { title: "Databases & Optimization", desc: "Relational database schema design (PostgreSQL, SQLite), Alembic versioning, Redis caching, and deep query optimization.", price: "from $150" }
  },
  {
    id: "integrations", icon: "api",
    ru: { title: "Интеграции & Платежи", desc: "Связка внешних API, платежных провайдеров (CryptoBot, ЮKassa, Stripe), CRM-систем (AmoCRM, Bitrix24) и защита вебхуков от повторных списаний.", price: "от 8 000 ₽" },
    en: { title: "Integrations & Payments", desc: "Connecting 3rd-party APIs, payment gateways (CryptoBot, Stripe), CRMs (AmoCRM, Bitrix24), and idempotent webhook pipelines.", price: "from $120" }
  }
];

var portfolioItems = [
  {
    id: "standoff2-market", icon: "bot",
    stack: "Python · FastAPI · Aiogram 3 · PostgreSQL · SQLAlchemy 2.0 · Docker · Pytest",
    tags: ["P2P Market", "FastAPI Hub", "Telegram Stars", "Clean Architecture"],
    demoUrl: "https://t.me/vflorich?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%20%D0%98%D0%BD%D1%82%D0%B5%D1%80%D0%B5%D1%81%D1%83%D0%B5%D1%82%20Standsticker",
    githubUrl: "https://github.com/florichdev/standoff2-sticker-market",
    shots: [],
    ru: {
      name: "Standsticker",
      desc: "Высоконагруженная P2P-платформа обмена игровыми предметами с приватным чатом сделок, монетизацией через Telegram Stars и веб-панелью управления на FastAPI. Обеспечивает безопасные расчеты между пользователями и автоматизацию процесса продаж.",
      price: "Архитектурный кейс"
    },
    en: {
      name: "Standsticker",
      desc: "High-performance P2P game asset trading platform featuring anonymous deal chats, Telegram Stars monetization, and a FastAPI web dashboard. Automates user transactions with enterprise-grade reliability.",
      price: "Architecture case"
    }
  },
  {
    id: "secret-vape", icon: "bot",
    stack: "Python · Aiogram 3 · SQLAlchemy · Flask · SQLite",
    tags: ["E-commerce", "Admin Panel", "Payments", "Telegram Bot"],
    demoUrl: "https://t.me/vflorich?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%20%D0%A5%D0%BE%D1%87%D1%83%20%D1%83%D0%B7%D0%BD%D0%B0%D1%82%D1%8C%20%D0%BF%D0%BE%D0%B4%D1%80%D0%BE%D0%B1%D0%BD%D0%B5%D0%B5%20%D0%BE%20%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D0%B5%20Secret%20Vape%20Shop",
    githubUrl: "https://github.com/florichdev/telegram-ecommerce-flask-admin",
    shots: [
      "./assets/images/portfolio/secretvapeshop/01-bot-main-menu.png",
      "./assets/images/portfolio/secretvapeshop/02-bot-shop.png",
      "./assets/images/portfolio/secretvapeshop/03-bot-shop-section.png",
      "./assets/images/portfolio/secretvapeshop/04-web-auth.png",
      "./assets/images/portfolio/secretvapeshop/05-web-main.png",
      "./assets/images/portfolio/secretvapeshop/06-web-products.png",
      "./assets/images/portfolio/secretvapeshop/07-web-orders.png",
      "./assets/images/portfolio/secretvapeshop/08-web-users.png",
      "./assets/images/portfolio/secretvapeshop/09-web-mobile.png"
    ],
    ru: {
      name: "Secret Vape Shop",
      desc: "Полноценный интернет-магазин внутри Telegram с удобной веб-панелью управления для владельца бизнеса. Надежная база данных, автоматический прием и проверка оплат, онлайн-корзина, управление каталогом товаров и разграничение прав доступа для менеджеров.",
      price: "Коммерческий кейс"
    },
    en: {
      name: "Secret Vape Shop",
      desc: "Full-featured Telegram e-commerce store with an intuitive web admin dashboard for business owners. Resilient database architecture, automated payment verification, cart checkout, product catalog management, and role-based staff access.",
      price: "Commercial case"
    }
  },
  {
    id: "cryptopay", icon: "web",
    stack: "Python · Flask · Aiogram · Solana · SQLite",
    tags: ["Crypto", "Web App", "Payments", "Solana"],
    demoUrl: "https://t.me/vflorich?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%20%D0%A5%D0%BE%D1%87%D1%83%20%D1%83%D0%B7%D0%BD%D0%B0%D1%82%D1%8C%20%D0%BF%D0%BE%D0%B4%D1%80%D0%BE%D0%B1%D0%BD%D0%B5%D0%B5%20%D0%BE%20%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D0%B5%20CryptoPay",
    shots: [
      "./assets/images/portfolio/cryptopay/web1.png",
      "./assets/images/portfolio/cryptopay/web2.png",
      "./assets/images/portfolio/cryptopay/tg1.png",
      "./assets/images/portfolio/cryptopay/tg2.png"
    ],
    ru: {
      name: "CryptoPay",
      desc: "Автоматизированный шлюз приема криптовалютных платежей с ботом оповещений в Telegram. Мгновенная обработка транзакций в сети Solana, автоматический расчет комиссий, надежные вебхуки и защита от повторных списаний средств.",
      price: "Коммерческий кейс"
    },
    en: {
      name: "CryptoPay",
      desc: "Automated crypto payment gateway with Telegram notification bot. Instant Solana transaction processing, dynamic fee calculation, resilient webhook dispatching, and double-spend protection.",
      price: "Commercial case"
    }
  },
  {
    id: "happs", icon: "bot",
    stack: "Python · Aiogram · SQLite · Flask · PDF",
    tags: ["Health", "Booking", "Admin", "PDF Engine"],
    demoUrl: "https://t.me/happshealthbot",
    shots: [
      "./assets/images/portfolio/@happshealthbot/tg1.png",
      "./assets/images/portfolio/@happshealthbot/tg2.png",
      "./assets/images/portfolio/@happshealthbot/tg3.png"
    ],
    ru: {
      name: "Happs",
      desc: "Сервис мониторинга здоровья и привычек в Telegram. Интеллектуальный алгоритм формирования сравнительных отчетов динамики пользователя, фоновая генерация персонализированных PDF-документов и безопасное облачное хранение данных.",
      price: "Коммерческий кейс"
    },
    en: {
      name: "Happs",
      desc: "Telegram health & wellness coaching service. Smart progress comparison engine, automated PDF report generation, and secure cloud media management.",
      price: "Commercial case"
    }
  },
  {
    id: "botsmax", icon: "bot",
    stack: "Python · MAX API · Flask · SQLite",
    tags: ["MAX", "Admin", "Giveaways", "High-load"],
    demoUrl: "https://t.me/vflorich?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%20%D0%98%D0%BD%D1%82%D0%B5%D1%80%D0%B5%D1%81%D1%83%D1%8E%D1%82%20%D0%B1%D0%BE%D1%82%D1%8B%20%D0%B4%D0%BB%D1%8F%20MAX",
    shots: [
      "./assets/images/portfolio/botsmax/max1.png",
      "./assets/images/portfolio/botsmax/max2.png",
      "./assets/images/portfolio/botsmax/max3.png",
      "./assets/images/portfolio/botsmax/max4.png",
      "./assets/images/portfolio/botsmax/max5.png",
      "./assets/images/portfolio/botsmax/max6.png",
      "./assets/images/portfolio/botsmax/web1.png",
      "./assets/images/portfolio/botsmax/web2.png",
      "./assets/images/portfolio/botsmax/web3.png",
      "./assets/images/portfolio/botsmax/web4.png",
      "./assets/images/portfolio/botsmax/web5.png",
      "./assets/images/portfolio/botsmax/web6.png",
      "./assets/images/portfolio/botsmax/web7.png"
    ],
    ru: {
      name: "Рандомайзер & Сэйвер",
      desc: "Экосистема из двух высоконагруженных ботов для мессенджера MAX с удобной панелью администрирования на Flask. Поддерживает одновременную обработку тысяч обращений, фоновую загрузку и конвертацию медиаконтента, а также проведение розыгрышей.",
      price: "Коммерческий кейс"
    },
    en: {
      name: "Randomizer & Saver",
      desc: "High-load ecosystem of two MAX messenger bots with a Flask administrative dashboard. Features concurrent processing for thousands of users, background video downloads, and automated giveaway management.",
      price: "Commercial case"
    }
  },
  {
    id: "botstaro", icon: "bot",
    stack: "Python · MAX API · Telegram API · Flask · SQLite",
    tags: ["MAX", "Telegram", "Integration", "Storytelling"],
    demoUrl: "https://t.me/vflorich?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%20%D0%98%D0%BD%D1%82%D0%B5%D1%80%D0%B5%D1%81%D1%83%D0%B5%D1%82%20%D0%BA%D1%80%D0%BE%D1%81%D1%81%D0%BF%D0%BB%D0%B0%D1%82%D1%84%D0%BE%D1%80%D0%BC%D0%B5%D0%BD%D0%BD%D1%8B%D0%B9%20%D0%B1%D0%BE%D1%82",
    shots: [
      "./assets/images/portfolio/botstaro/max1.png",
      "./assets/images/portfolio/botstaro/max2.png",
      "./assets/images/portfolio/botstaro/max3.png",
      "./assets/images/portfolio/botstaro/max4.png",
      "./assets/images/portfolio/botstaro/max5.png",
      "./assets/images/portfolio/botstaro/tgweb.png",
      "./assets/images/portfolio/botstaro/web1.png",
      "./assets/images/portfolio/botstaro/web2.png",
      "./assets/images/portfolio/botstaro/web3.png",
      "./assets/images/portfolio/botstaro/web4.png",
      "./assets/images/portfolio/botstaro/web5.png",
      "./assets/images/portfolio/botstaro/web6.png"
    ],
    ru: {
      name: "Бот Таролог",
      desc: "Интерактивный кросс-платформенный сервис (MAX + Telegram) с централизованным бэкендом и единой базой данных. Персонализированный интерактивный контент, гибкое управление пользовательскими сессиями и панель редактирования материалов.",
      price: "Коммерческий кейс"
    },
    en: {
      name: "Tarot Bot",
      desc: "Cross-platform interactive bot service (MAX + Telegram) backed by a unified Flask API and centralized database. Real-time session management, rich interactive storytelling, and a content administration panel.",
      price: "Commercial case"
    }
  }
];

var STATIC_REVIEWS = [
  {
    id: 1,
    name: "El2010032",
    initials: "EL",
    projectRu: "Разработка Telegram бота",
    projectEn: "Telegram Bot Development",
    rating: 5,
    textRu: "Отличный результат, я всем доволен. Советую",
    textEn: "Excellent result, I'm completely satisfied. Highly recommended."
  },
  {
    id: 2,
    name: "webcod2011",
    initials: "WC",
    projectRu: "Создам лендинг под ключ",
    projectEn: "Turnkey Landing Page Development",
    rating: 5,
    textRu: "Огромное спасибо за оперативность и качество выполнения. Работа была выполнена в полном объеме, раньше оговоренных сроков без потери качества. Однозначно рекомендую к сотрудничеству.",
    textEn: "Huge thanks for the speed and quality of execution. The work was completed in full, ahead of the agreed deadline without any loss of quality. Definitely recommend for collaboration."
  },
  {
    id: 3,
    name: "tyn44",
    initials: "TY",
    projectRu: "Разработка Telegram бота",
    projectEn: "Telegram Bot Development",
    rating: 5,
    textRu: "Обратились к Вадиму за помощью для разработки бота для клуба по интересам, хочу отметить главные положительные моменты: быстрота и профессиональность в выполнении заказа. По тех заданию учел все наши пожелания и требования по работе бота, выполнил в кратчайшие сроки, по итогу без учета моей проверки бота заняло около дня. Правки были маленькие и то это я не прописала в тех задании, быстро все поправил и даже направил гайд чтобы я знала как что поменять. Однозначно 10/10, всем рекомендую!",
    textEn: "Reached out to Vadim for help building a community club bot. Key highlights: speed and professionalism. Followed all requirements, completed in the shortest timeframe (under a day excluding testing). Minor tweaks were handled instantly, plus he provided a clear guide. 10/10, highly recommend!"
  },
  {
    id: 4,
    name: "Workoutfriend",
    initials: "WF",
    projectRu: "Разработка бота для MAX",
    projectEn: "MAX Messenger Bot Development",
    rating: 5,
    textRu: "Очень качественная и внимательно выполненная работа по ТЗ! Исполнитель большой молодец!",
    textEn: "Very high quality and attentive execution strictly according to specs! The developer did a great job!"
  },
  {
    id: 5,
    name: "povarovave",
    initials: "PO",
    projectRu: "Разработка бота для MAX",
    projectEn: "MAX Messenger Bot Development",
    rating: 5,
    textRu: "Очень крутой специалист) сделал все за день) день, Карл! !)",
    textEn: "Really awesome specialist) built everything in just one day) one day, Carl! !)"
  },
  {
    id: 6,
    name: "samch5",
    initials: "S5",
    projectRu: "Разработка Telegram бота",
    projectEn: "Telegram Bot Development",
    rating: 5,
    textRu: "Спасибо большое Вадиму за доработки, большая благодарность, смело можно обращаться к исполнителю.",
    textEn: "Thank you very much to Vadim for the enhancements, huge gratitude, can confidently recommend this developer."
  },
  {
    id: 7,
    name: "samch5",
    initials: "S5",
    projectRu: "Разработка Telegram бота",
    projectEn: "Telegram Bot Development",
    rating: 5,
    textRu: "Выбирал исполнителя из большого количества вариантов. Вадим еще до оформления заказа сделал бота по ТЗ, показал, как все работает, и только после этого я принял решение. Работа выполнена полностью, все четко, без лишних вопросов и затягиваний. Спасибо большое, рекомендую.",
    textEn: "I chose a developer from a large number of candidates. Vadim built a prototype bot according to the specs even before the order was placed, demonstrated how everything worked, and only then did I make a decision. The work was fully delivered, clear, without unnecessary questions or delays. Thank you very much, highly recommended."
  },
  {
    id: 8,
    name: "d7038999",
    initials: "D7",
    projectRu: "Компьютерная помощь, оптимизация и настройка",
    projectEn: "Computer Help, Optimization & Setup",
    rating: 5,
    textRu: "Все очень быстро сделали, грамотно объяснили.",
    textEn: "Everything was done very quickly and explained competently."
  },
  {
    id: 9,
    name: "kononenkonikita",
    initials: "KN",
    projectRu: "Разработка Telegram бота",
    projectEn: "Telegram Bot Development",
    rating: 5,
    textRu: "Нужно было доработать бота. Все было быстро и качественно.",
    textEn: "Needed to refine an existing bot. Everything was fast and high quality."
  },
  {
    id: 10,
    name: "kononenkonikita",
    initials: "KN",
    projectRu: "Разработка Telegram бота",
    projectEn: "Telegram Bot Development",
    rating: 5,
    textRu: "Нужно было разработать телеграм бота с нуля для размещения информации на тг канале. Все было сделано быстро и качественно. Исполнитель учел все мои просьбы и замечания и сделал даже больше, чем планировалось. Всем советую. Все отлично.",
    textEn: "Needed to develop a Telegram bot from scratch to publish information to a Telegram channel. Everything was done quickly and with high quality. The developer considered all my requests and did even more than planned. Highly recommend to everyone. All great."
  },
  {
    id: 11,
    name: "9162584496",
    initials: "91",
    projectRu: "Напишу скрипт на Python, JS, PHP",
    projectEn: "Python, JS, PHP Script Development",
    rating: 5,
    textRu: "Задача со скриптом была выполнена на отлично и по срокам сделана быстро! Рекомендую данного исполнителя к работе. Будем дальше сотрудничать.",
    textEn: "The script task was executed excellently and delivered quickly on time! Highly recommend this developer. Will continue cooperating."
  },
  {
    id: 12,
    name: "rambo707",
    initials: "R7",
    projectRu: "Создание Telegram бота на Python",
    projectEn: "Telegram Bot Development in Python",
    rating: 5,
    textRu: "Спасибо Вадиму за создание тг бота! Работу выполнил на все 100%. Все четко и профессионально.",
    textEn: "Thanks to Vadim for creating the TG bot! Delivered the job 100%. Everything clear and professional."
  }
];

function mapLocalized(items, lang) {
  return items.map(function (item) {
    var loc = item[lang];
    return {
      id: item.id,
      icon: item.icon,
      stack: item.stack,
      tags: item.tags,
      shots: item.shots,
      demoUrl: item.demoUrl,
      githubUrl: item.githubUrl,
      name: loc.name || loc.title,
      title: loc.title,
      desc: loc.desc,
      price: loc.price
    };
  });
}

function detectLang() {
  try {
    var saved = localStorage.getItem(LANG_KEY);
    if (saved === "ru" || saved === "en") return saved;
  } catch (e) {}
  var nav = (navigator.language || "").toLowerCase();
  return nav.indexOf("ru") === 0 ? "ru" : "en";
}

function scrollBehavior(effectsOn) {
  return effectsOn ? "smooth" : "auto";
}

var texts = {
  ru: {
    ui: {
      effectsOn: "Выключить эффекты",
      effectsOff: "Включить эффекты",
      effects: "Эффекты",
      language: "Сменить язык",
      menu: "Меню",
      backToTop: "Наверх",
      close: "Закрыть",
      contact: "Написать",
      openBot: "Запустить бота",
      discussCase: "Заказать похожий",
      prevShot: "Предыдущее фото",
      nextShot: "Следующее фото",
      workingHours: "График работы: 8:00 – 22:00 (МСК)",
      skipLink: "К основному содержимому"
    },
    nav: { services: "Услуги", portfolio: "Портфолио", reviews: "Отзывы", contact: "Контакты" },
    hero: {
      hello: "Привет, я",
      name: "Вадим",
      pitch: "Telegram-боты, Mini Apps, отказоустойчивые REST API и автоматизация под ключ для бизнеса",
      ctaContact: "Написать",
      ctaPortfolio: "Портфолио",
      exp: "30+ проектов",
      speed: "100% сдача в срок"
    },
    about: {
      title: "Обо мне",
      note: "Коммерческий опыт & Стек",
      text: "Создаю масштабируемые и отказоустойчивые веб-сервисы, Telegram-боты, Mini Apps и бэкенд-системы на Python. Более 30 коммерческих проектов успешно работают в продакшене: от парсеров данных и скриптов автоматизации до полноценных веб-приложений и ботов под ключ со 100% сдачей в срок и рейтингом 5.0. Проектирую чистую архитектуру, подключаю платежные шлюзы, оптимизирую базы данных и настраиваю деплой в Docker на Linux VPS."
    },
    services: { title: "Услуги", hint: "Что я предлагаю" },
    portfolio: {
      title: "Портфолио",
      hint: "Реализованные кейсы",
      ndaNote: "Здесь представлена лишь часть реализованных проектов, так как многие коммерческие заказы находятся под NDA (соглашением о неразглашении) по просьбе клиентов."
    },
    reviews: {
      title: "Отзывы клиентов",
      hint: "Подтвержденная репутация",
      allKwork: "Все отзывы на Kwork",
      prevReview: "Предыдущий отзыв",
      nextReview: "Следующий отзыв"
    },
    contacts: {
      title: "Контакты",
      hint: "Обсудим вашу задачу",
      tg: "Telegram",
      tgChannel: "Канал",
      gh: "GitHub",
      mail: "Почта",
      kwork: "Kwork",
      prompt: "Открыт к новым проектам и долгосрочному сотрудничеству"
    },
    footer: "Создано для клиентов и долгосрочных партнерств"
  },
  en: {
    ui: {
      effectsOn: "Disable effects",
      effectsOff: "Enable effects",
      effects: "Effects",
      language: "Change language",
      menu: "Menu",
      backToTop: "Back to top",
      close: "Close",
      contact: "Contact",
      openBot: "Launch Bot",
      discussCase: "Order Similar",
      prevShot: "Previous image",
      nextShot: "Next image",
      workingHours: "Working hours: 8:00 AM – 10:00 PM (UTC+3)",
      skipLink: "Skip to main content"
    },
    nav: { services: "Services", portfolio: "Portfolio", reviews: "Reviews", contact: "Contacts" },
    hero: {
      hello: "Hi, I'm",
      name: "Vadim",
      pitch: "High-performance Telegram bots, Mini Apps, scalable REST APIs & automation pipelines for business",
      ctaContact: "Contact",
      ctaPortfolio: "Portfolio",
      exp: "30+ projects",
      speed: "100% on-time delivery"
    },
    about: {
      title: "About me",
      note: "Commercial experience & Stack",
      text: "I build resilient and scalable web services, Telegram bots, Mini Apps, and backend systems on Python. 30+ commercial projects successfully launched in production: from data scrapers and automation scripts to fullstack web applications and turnkey bots with a 100% on-time delivery record and 5.0 client rating. I design clean architecture, integrate payment gateways, optimize databases, and configure Docker deployment on Linux VPS."
    },
    services: { title: "Services", hint: "What I offer" },
    portfolio: {
      title: "Portfolio",
      hint: "Production cases",
      ndaNote: "A curated selection of cases is presented here, as many commercial projects are protected by NDA upon clients' request."
    },
    reviews: {
      title: "Client Reviews",
      hint: "Verified track record",
      allKwork: "All reviews on Kwork",
      prevReview: "Previous review",
      nextReview: "Next review"
    },
    contacts: {
      title: "Contacts",
      hint: "Let's build something great",
      tg: "Telegram",
      tgChannel: "Channel",
      gh: "GitHub",
      mail: "Email",
      kwork: "Kwork",
      prompt: "Open to new projects and long-term collaboration"
    },
    footer: "Built for clients and long-term partnerships"
  }
};

function getData(lang) {
  var base = texts[lang];
  return {
    ui: base.ui,
    nav: base.nav,
    hero: base.hero,
    about: Object.assign({}, base.about, { techGroups: TECH_GROUPS }),
    services: Object.assign({}, base.services, { list: mapLocalized(serviceItems, lang) }),
    portfolio: Object.assign({}, base.portfolio, { list: mapLocalized(portfolioItems, lang) }),
    reviews: base.reviews,
    contacts: base.contacts,
    footer: base.footer
  };
}

var h = React.createElement;

function Typewriter(props) {
  var words = props.words || [];
  var _state = React.useState({ wordIndex: 0, text: "", isDeleting: false });
  var state = _state[0];
  var setState = _state[1];

  React.useEffect(function () {
    if (!words.length) return undefined;
    var currentWord = words[state.wordIndex % words.length];
    var speed = state.isDeleting ? 35 : 75;

    if (!state.isDeleting && state.text === currentWord) {
      var pauseTimer = setTimeout(function () {
        setState(function (prev) {
          return { wordIndex: prev.wordIndex, text: prev.text, isDeleting: true };
        });
      }, 2200);
      return function () { clearTimeout(pauseTimer); };
    }

    if (state.isDeleting && state.text === "") {
      setState(function (prev) {
        return {
          wordIndex: (prev.wordIndex + 1) % words.length,
          text: "",
          isDeleting: false
        };
      });
      return undefined;
    }

    var timer = setTimeout(function () {
      setState(function (prev) {
        var next = prev.isDeleting
          ? currentWord.substring(0, prev.text.length - 1)
          : currentWord.substring(0, prev.text.length + 1);
        return {
          wordIndex: prev.wordIndex,
          text: next,
          isDeleting: prev.isDeleting
        };
      });
    }, speed);

    return function () { clearTimeout(timer); };
  }, [state, words]);

  return h("span", { className: "typewriter-container" }, [
    state.text,
    h("span", { className: "typewriter-cursor", "aria-hidden": "true" })
  ]);
}

function Header(props) {
  var ui = props.ui;
  var navClass = "nav-links" + (props.navOpen ? " show" : "");
  return h("header", null,
    h("div", { className: "nav" }, [
      h("a", { className: "logo", href: "#top", onClick: function (e) { props.onNavigate(e, "top"); } },
        h("img", { src: "./assets/images/logo-icon.svg", alt: "FlorichDev", width: "40", height: "40" })
      ),
      h("div", { className: navClass }, [
        h("a", { href: "#services", key: "services", onClick: function (e) { props.onNavigate(e, "services"); }, title: props.labels.services, "aria-label": props.labels.services },
          h("i", { className: icons.nav_services, "aria-hidden": "true" })
        ),
        h("a", { href: "#portfolio", key: "portfolio", onClick: function (e) { props.onNavigate(e, "portfolio"); }, title: props.labels.portfolio, "aria-label": props.labels.portfolio },
          h("i", { className: icons.nav_portfolio, "aria-hidden": "true" })
        ),
        h("a", { href: "#reviews", key: "reviews", onClick: function (e) { props.onNavigate(e, "reviews"); }, title: props.labels.reviews, "aria-label": props.labels.reviews },
          h("i", { className: icons.nav_reviews, "aria-hidden": "true" })
        ),
        h("a", { href: "#contacts", key: "contacts", onClick: function (e) { props.onNavigate(e, "contacts"); }, title: props.labels.contact, "aria-label": props.labels.contact },
          h("i", { className: icons.nav_contacts, "aria-hidden": "true" })
        ),
        h("button", {
          className: "icon-btn",
          onClick: props.onToggleEffects,
          title: props.effectsOn ? ui.effectsOn : ui.effectsOff,
          "aria-label": ui.effects,
          "aria-pressed": props.effectsOn
        }, h("i", { className: icons.settings, "aria-hidden": "true" })),
        h("button", {
          className: "lang",
          onClick: props.onLang,
          title: ui.language,
          "aria-label": ui.language
        }, h("i", { className: icons.translate, "aria-hidden": "true" }))
      ]),
      h("button", {
        className: "burger" + (props.navOpen ? " open" : ""),
        onClick: props.onBurger,
        "aria-label": ui.menu,
        "aria-expanded": props.navOpen
      }, h("span", null))
    ])
  );
}

function Hero(props) {
  var phrases = TYPEWRITER_PHRASES[props.lang] || TYPEWRITER_PHRASES.ru;
  return h("section", { className: "hero", id: "top" }, [
    h("div", { className: "hero-top-row" }, [
      h("div", { className: "panel hero-card animate-left", "data-animate": "left" }, [
        h("div", { className: "tagline" }, props.data.hero.hello + " " + props.data.hero.name),
        h("h1", null, [
          h(Typewriter, { words: phrases, lang: props.lang }),
          h("span", { className: "pitch" }, props.data.hero.pitch)
        ]),
        h("div", { className: "hero-actions" }, [
          h("a", { className: "btn primary", href: TG_PERSONAL, target: "_blank", rel: "noreferrer noopener" }, [
            h("i", { className: "fa-brands fa-telegram", style: { marginRight: "8px" }, "aria-hidden": "true" }),
            props.data.hero.ctaContact
          ]),
          h("a", { className: "btn", href: "#portfolio", onClick: function (e) { e.preventDefault(); props.onScroll("portfolio"); } }, props.data.hero.ctaPortfolio)
        ]),
        h("div", { className: "stats" }, [
          h("div", { className: "stat" }, [
            h("strong", null, props.data.hero.exp),
            h("span", null, props.data.hero.speed)
          ])
        ])
      ]),
      h("div", { className: "panel about-card animate-right", "data-animate": "right" }, [
        h("div", { className: "title-line" }, [
          h("h2", null, props.data.about.title),
          h("span", null, props.data.about.note)
        ]),
        h("p", { className: "text" }, props.data.about.text)
      ])
    ]),
    h("div", { className: "panel stack-card animate-left", "data-animate": "left" }, [
      h("div", { className: "title-line" }, [
        h("h2", null, props.lang === "ru" ? "Технологический стек" : "Technology Stack"),
        h("span", null, props.lang === "ru" ? "Инструменты & стек разработки" : "Core tools & technologies")
      ]),
      h("div", { className: "stack-grid" },
        props.data.about.techGroups.map(function (grp) {
          var title = props.lang === "ru" ? grp.categoryRu : grp.categoryEn;
          return h("div", { className: "stack-group", key: grp.categoryRu }, [
            h("div", { className: "stack-group-title" }, title),
            h("div", { className: "badge-row" },
              grp.items.map(function (item) {
                var icon = techIcons[item];
                return h("div", { className: "badge", key: item }, [
                  icon ? h("i", { className: icon, style: { marginRight: "6px" }, "aria-hidden": "true" }) : null,
                  item
                ]);
              })
            )
          ]);
        })
      )
    ])
  ]);
}

function Services(props) {
  return h("section", { id: "services", className: "panel animate-left", "data-animate": "left" }, [
    h("div", { className: "title-line" }, [
      h("h2", null, props.data.services.title),
      h("span", null, props.data.services.hint)
    ]),
    h("div", { className: "grid two" },
      props.data.services.list.map(function (item) {
        return h("div", { className: "card service-card", key: item.id }, [
          item.icon ? h("div", { className: "card-icon" }, h("i", { className: icons[item.icon], "aria-hidden": "true" })) : null,
          h("h3", { className: "project-title" }, item.title),
          h("p", { className: "text" }, item.desc),
          h("div", { className: "badge-row" }, [
            h("div", { className: "badge price-badge" }, item.price)
          ])
        ]);
      })
    )
  ]);
}

function Portfolio(props) {
  return h("section", { id: "portfolio", className: "panel animate-right", "data-animate": "right" }, [
    h("div", { className: "title-line" }, [
      h("h2", null, props.data.portfolio.title),
      h("span", null, props.data.portfolio.hint)
    ]),
    h("div", { className: "nda-banner" }, [
      h("i", { className: icons.shield, "aria-hidden": "true" }),
      h("span", null, props.data.portfolio.ndaNote)
    ]),
    h("div", { className: "projects-grid" },
      props.data.portfolio.list.map(function (item) {
        return h("div", {
          className: "card portfolio-card",
          key: item.id,
          role: "button",
          tabIndex: 0,
          "aria-label": item.name,
          onClick: function () { props.onOpen(item); },
          onKeyDown: function (e) {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              props.onOpen(item);
            }
          }
        }, [
          item.icon ? h("div", { className: "card-icon" }, h("i", { className: icons[item.icon], "aria-hidden": "true" })) : null,
          h("h3", { className: "project-title" }, item.name),
          h("p", { className: "text" }, item.desc),
          h("div", { className: "project-stack" }, item.stack),
          h("div", { className: "chip-list" },
            item.tags.map(function (tag) {
              return h("span", { className: "chip", key: tag }, tag);
            })
          ),
          h("div", { className: "divider" }),
          h("div", { className: "badge-row" }, [
            h("div", { className: "badge" }, item.price)
          ])
        ]);
      })
    )
  ]);
}

function Reviews(props) {
  var _items = React.useState(STATIC_REVIEWS);
  var reviews = _items[0];
  var setReviews = _items[1];

  var _idx = React.useState(0);
  var currentIndex = _idx[0];
  var setCurrentIndex = _idx[1];

  var _visible = React.useState(3);
  var visibleCount = _visible[0];
  var setVisibleCount = _visible[1];

  React.useEffect(function () {
    fetch("./assets/data/reviews.json")
      .then(function (res) { return res.json(); })
      .then(function (data) {
        if (Array.isArray(data) && data.length > 0) {
          var mapped = data.map(function (r) {
            return {
              id: r.id,
              name: r.name,
              initials: r.initials,
              projectRu: r.project || r.projectRu,
              projectEn: r.projectEn || r.project,
              rating: r.rating || 5,
              textRu: r.text || r.textRu,
              textEn: r.textEn || r.text
            };
          });
          setReviews(mapped);
        }
      })
      .catch(function () {});
  }, []);

  React.useEffect(function () {
    function updateVisible() {
      if (window.innerWidth < 640) {
        setVisibleCount(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    }
    updateVisible();
    window.addEventListener("resize", updateVisible);
    return function () { window.removeEventListener("resize", updateVisible); };
  }, []);

  var maxIndex = Math.max(0, reviews.length - visibleCount);

  function prevSlide() {
    setCurrentIndex(function (prev) { return Math.max(0, prev - 1); });
  }

  function nextSlide() {
    setCurrentIndex(function (prev) { return Math.min(maxIndex, prev + 1); });
  }

  var gapPx = 18;
  var trackOffset = "calc(-" + currentIndex + " * ((100% - " + ((visibleCount - 1) * gapPx) + "px) / " + visibleCount + " + " + gapPx + "px))";

  return h("section", { id: "reviews", className: "panel reviews-section animate-left", "data-animate": "left" }, [
    h("div", { className: "title-line" }, [
      h("h2", null, props.data.reviews.title),
      h("span", null, props.data.reviews.hint)
    ]),
    h("div", { className: "reviews-carousel-wrap" },
      h("div", {
        className: "reviews-track",
        style: { transform: "translateX(" + trackOffset + ")" }
      },
        reviews.map(function (rev) {
          var project = props.lang === "ru" ? rev.projectRu : rev.projectEn;
          var text = props.lang === "ru" ? rev.textRu : rev.textEn;
          var cardWidth = "calc((100% - " + ((visibleCount - 1) * gapPx) + "px) / " + visibleCount + ")";
          return h("div", {
            className: "review-card",
            key: rev.id,
            style: { width: cardWidth, minWidth: cardWidth }
          }, [
            h("div", { className: "review-header" }, [
              h("div", { className: "review-avatar" }, rev.initials),
              h("div", { className: "review-client-info" }, [
                h("div", { className: "review-name" }, rev.name),
                h("div", { className: "review-project" }, project)
              ])
            ]),
            h("div", { className: "review-stars" }, [
              h("i", { className: icons.star, key: "s1", "aria-hidden": "true" }),
              h("i", { className: icons.star, key: "s2", "aria-hidden": "true" }),
              h("i", { className: icons.star, key: "s3", "aria-hidden": "true" }),
              h("i", { className: icons.star, key: "s4", "aria-hidden": "true" }),
              h("i", { className: icons.star, key: "s5", "aria-hidden": "true" })
            ]),
            h("p", { className: "review-text" }, text),
            h("div", { className: "review-footer" }, [
              h("a", {
                className: "review-kwork-badge",
                href: KWORK_URL,
                target: "_blank",
                rel: "noreferrer noopener"
              }, [
                h("i", { className: icons.contact_kwork, "aria-hidden": "true" }),
                props.data.reviews.allKwork
              ])
            ])
          ]);
        })
      )
    ),
    h("div", { className: "reviews-nav" }, [
      h("div", { className: "reviews-dots" },
        Array.from({ length: maxIndex + 1 }).map(function (_, i) {
          return h("button", {
            key: i,
            className: "reviews-dot" + (i === currentIndex ? " active" : ""),
            onClick: function () { setCurrentIndex(i); },
            "aria-label": "Slide " + (i + 1)
          });
        })
      ),
      h("div", { className: "reviews-controls" }, [
        h("button", {
          className: "reviews-btn",
          onClick: prevSlide,
          disabled: currentIndex === 0,
          "aria-label": props.data.reviews.prevReview
        }, h("i", { className: icons.back, "aria-hidden": "true" })),
        h("button", {
          className: "reviews-btn",
          onClick: nextSlide,
          disabled: currentIndex >= maxIndex,
          "aria-label": props.data.reviews.nextReview
        }, h("i", { className: icons.forward, "aria-hidden": "true" }))
      ])
    ])
  ]);
}

function renderContactLinks(data) {
  return [
    h("a", { className: "contact-circle", href: TG_PERSONAL, target: "_blank", rel: "noreferrer noopener", title: data.tg, "aria-label": data.tg }, h("i", { className: icons.contact_tg, "aria-hidden": "true" })),
    h("a", { className: "contact-circle", href: TG_CHANNEL, target: "_blank", rel: "noreferrer noopener", title: data.tgChannel, "aria-label": data.tgChannel }, h("i", { className: icons.contact_channel, "aria-hidden": "true" })),
    h("a", { className: "contact-circle", href: "https://github.com/florichdev", target: "_blank", rel: "noreferrer noopener", title: data.gh, "aria-label": data.gh }, h("i", { className: icons.contact_gh, "aria-hidden": "true" })),
    h("a", { className: "contact-circle", href: "https://vk.com/florichdev", target: "_blank", rel: "noreferrer noopener", title: "VK", "aria-label": "VK" }, h("i", { className: icons.contact_vk, "aria-hidden": "true" })),
    h("a", { className: "contact-circle", href: "mailto:florichdev@gmail.com", title: data.mail, "aria-label": data.mail }, h("i", { className: icons.contact_mail, "aria-hidden": "true" })),
    h("a", { className: "contact-circle", href: KWORK_URL, target: "_blank", rel: "noreferrer noopener", title: data.kwork, "aria-label": data.kwork }, h("i", { className: icons.contact_kwork, "aria-hidden": "true" }))
  ];
}

function Contacts(props) {
  return h("section", { id: "contacts", className: "panel contacts animate-left", "data-animate": "left" }, [
    h("div", { className: "contacts-head" }, [
      h("h2", null, props.data.contacts.title),
      h("p", { className: "text" }, props.data.contacts.hint)
    ]),
    h("div", { className: "contact-card" }, [
      h("div", { className: "contact-icons" }, renderContactLinks(props.data.contacts)),
      h("div", { className: "contact-meta" }, [
        h("p", { className: "text" }, props.data.contacts.prompt),
        h("p", { className: "text contact-hours" }, props.data.ui.workingHours)
      ])
    ])
  ]);
}

function Footer(props) {
  return h("footer", { className: "footer" }, [
    h("div", null, "FlorichDev · 2027"),
    h("div", { className: "footer-note" }, props.data.footer),
    h("div", { className: "contact-links" }, renderContactLinks(props.data.contacts))
  ]);
}

function BackToTop(props) {
  return h("button", {
    className: "back-to-top " + (props.show ? "show" : ""),
    onClick: props.onClick,
    "aria-label": props.label
  }, "↑");
}

function Modal(props) {
  if (!props.item) return null;
  var ui = props.ui;
  var shots = props.item.shots || [];
  var total = shots.length;
  var image = total > 0 ? (shots[props.index] || shots[0]) : null;
  var title = props.item.name;

  return h("div", { className: "modal-backdrop", onClick: props.onClose, role: "presentation" },
    h("div", {
      className: "modal",
      role: "dialog",
      "aria-modal": "true",
      "aria-labelledby": "modal-title",
      tabIndex: -1,
      onClick: function (e) { e.stopPropagation(); },
      ref: props.modalRef
    }, [
      h("div", { className: "modal-head" }, [
        h("div", { className: "modal-title", id: "modal-title" }, title),
        total > 1 ? h("span", { className: "gallery-counter" }, (props.index + 1) + " / " + total) : null,
        h("button", { className: "modal-close", onClick: props.onClose, "aria-label": ui.close }, "✕")
      ]),
      h("div", { className: "modal-body" }, [
        total > 0 && image ? h("div", { className: "gallery" }, [
          h("img", { src: image, alt: title, loading: "lazy", decoding: "async" }),
          total > 1 ? h("div", { className: "gallery-controls" }, [
            h("button", { className: "gallery-btn", onClick: function (e) { e.stopPropagation(); props.onPrev(); }, "aria-label": ui.prevShot },
              h("i", { className: icons.back, "aria-hidden": "true" })
            ),
            h("button", { className: "gallery-btn", onClick: function (e) { e.stopPropagation(); props.onNext(); }, "aria-label": ui.nextShot },
              h("i", { className: icons.forward, "aria-hidden": "true" })
            )
          ]) : null
        ]) : null,
        h("div", { className: "modal-meta" }, [
          props.item.desc ? h("p", { className: "text" }, props.item.desc) : null,
          props.item.stack ? h("div", { className: "project-stack" }, props.item.stack) : null,
          props.item.tags ? h("div", { className: "chip-list" },
            props.item.tags.map(function (tag) {
              return h("span", { className: "chip", key: tag }, tag);
            })
          ) : null,
          props.item.price ? h("div", { className: "badge-row" }, [
            h("div", { className: "badge" }, props.item.price)
          ]) : null
        ]),
        h("div", { className: "modal-actions" }, [
          props.item.githubUrl ? h("a", { className: "btn primary", href: props.item.githubUrl, target: "_blank", rel: "noreferrer noopener" }, [
            h("i", { className: "fa-brands fa-github", style: { marginRight: "8px" }, "aria-hidden": "true" }),
            "GitHub Code"
          ]) : null,
          props.item.demoUrl ? h("a", { className: "btn", href: props.item.demoUrl, target: "_blank", rel: "noreferrer noopener" }, [
            h("i", { className: "fa-solid fa-arrow-up-right-from-square", style: { marginRight: "8px" }, "aria-hidden": "true" }),
            props.item.id === "happs" ? ui.openBot : ui.discussCase
          ]) : null,
          h("a", { className: "btn", href: TG_PERSONAL, target: "_blank", rel: "noreferrer noopener" }, ui.contact),
          h("button", { className: "btn", onClick: props.onClose }, ui.close)
        ])
      ])
    ])
  );
}

function App() {
  var _lang = React.useState(detectLang);
  var lang = _lang[0];
  var setLang = _lang[1];
  var _showTop = React.useState(false);
  var showTop = _showTop[0];
  var setShowTop = _showTop[1];
  var _modal = React.useState(null);
  var modalItem = _modal[0];
  var setModalItem = _modal[1];
  var _shot = React.useState(0);
  var shotIndex = _shot[0];
  var setShotIndex = _shot[1];
  var _nav = React.useState(false);
  var navOpen = _nav[0];
  var setNavOpen = _nav[1];
  var _effects = React.useState(true);
  var effectsOn = _effects[0];
  var setEffectsOn = _effects[1];
  var modalRef = React.useRef(null);

  React.useEffect(function () {
    if (!IS_HTTP || !window.history) return;
    var path = window.location.pathname.replace(/index\.html?$/i, "");
    var clean = path || "/";
    var target = clean + window.location.search + window.location.hash;
    if (target !== window.location.pathname + window.location.search + window.location.hash) {
      window.history.replaceState(null, "", target);
    }
  }, []);

  React.useEffect(function () {
    try {
      var redirect = sessionStorage.redirect;
      if (redirect) {
        delete sessionStorage.redirect;
        var hash = redirect.split("#")[1];
        if (IS_HTTP) window.history.replaceState(null, "", redirect);
        if (hash) {
          var timer = setTimeout(function () {
            var el = document.getElementById(hash);
            if (el) el.scrollIntoView({ behavior: "auto", block: "start" });
          }, 900);
          return function () { clearTimeout(timer); };
        }
      }
    } catch (e) {}
  }, []);

  React.useEffect(function () {
    document.documentElement.lang = lang;
    try { localStorage.setItem(LANG_KEY, lang); } catch (e) {}
    var skip = document.querySelector(".skip-link");
    if (skip && texts[lang]) skip.textContent = texts[lang].ui.skipLink;
  }, [lang]);

  React.useEffect(function () {
    var hash = window.location.hash.replace("#", "");
    if (!hash || hash === "top") return;
    var timer = setTimeout(function () {
      var el = document.getElementById(hash);
      if (el) el.scrollIntoView({ behavior: "auto", block: "start" });
    }, 900);
    return function () { clearTimeout(timer); };
  }, []);

  React.useEffect(function () {
    var handler = function () { setShowTop(window.scrollY > 240); };
    window.addEventListener("scroll", handler, { passive: true });
    return function () { window.removeEventListener("scroll", handler); };
  }, []);

  React.useEffect(function () {
    var dot = document.querySelector(".cursor-dot");
    if (!dot) return undefined;
    if (!effectsOn || IS_TOUCH) {
      dot.style.opacity = "0";
      dot.style.display = "none";
      return undefined;
    }
    dot.style.display = "";
    var lastTime = Date.now();
    var handler = function (e) {
      lastTime = Date.now();
      dot.style.left = e.clientX + "px";
      dot.style.top = e.clientY + "px";
      dot.style.opacity = "1";
    };
    var checkInactive = function () {
      if (Date.now() - lastTime > TRAIL_SETTINGS.inactivityTimeout) {
        dot.style.opacity = "0";
      }
    };
    var interval = setInterval(checkInactive, 500);
    document.addEventListener("mousemove", handler);
    return function () {
      document.removeEventListener("mousemove", handler);
      clearInterval(interval);
    };
  }, [effectsOn]);

  React.useEffect(function () {
    document.body.classList.toggle("modal-open", !!modalItem);
    if (modalItem && modalRef.current) {
      modalRef.current.focus();
    }
  }, [modalItem]);

  React.useEffect(function () {
    var pre = document.getElementById("preloader");
    if (!pre) return undefined;
    var timer = setTimeout(function () {
      pre.style.opacity = "0";
      setTimeout(function () { pre.style.display = "none"; }, 300);
    }, 800);
    return function () { clearTimeout(timer); };
  }, []);

  React.useEffect(function () {
    if (!effectsOn) return undefined;
    var canvas = document.getElementById("matrix");
    if (!canvas) return undefined;
    var ctx = canvas.getContext("2d");
    var isMobile = IS_TOUCH || window.innerWidth < 768;
    var fontSize = isMobile ? 18 : 14;
    var frameInterval = isMobile ? 90 : 50;
    var drops = [];
    var lastFrameTime = 0;
    var rafId;

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      var columns = Math.floor(canvas.width / fontSize);
      if (isMobile) columns = Math.max(8, Math.floor(columns * 0.45));
      drops = [];
      for (var i = 0; i < columns; i++) drops[i] = Math.random() * -100;
    }

    resize();

    function draw(timestamp) {
      rafId = requestAnimationFrame(draw);
      if (document.visibilityState === "hidden") return;
      if (timestamp - lastFrameTime < frameInterval) return;
      lastFrameTime = timestamp;
      ctx.fillStyle = "rgba(10, 10, 10, 0.08)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "rgba(255, 255, 255, 0.18)";
      ctx.font = fontSize + "px monospace";
      for (var i = 0; i < drops.length; i++) {
        ctx.fillText(Math.random() > 0.5 ? "1" : "0", i * fontSize, drops[i] * fontSize);
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) drops[i] = 0;
        drops[i]++;
      }
    }

    rafId = requestAnimationFrame(draw);
    var onResize = function () { isMobile = IS_TOUCH || window.innerWidth < 768; fontSize = isMobile ? 18 : 14; frameInterval = isMobile ? 90 : 50; resize(); };
    window.addEventListener("resize", onResize);
    return function () {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", onResize);
    };
  }, [effectsOn]);

  React.useEffect(function () {
    function onKey(e) {
      if (e.key === "Escape") {
        setModalItem(null);
        setNavOpen(false);
        return;
      }
      if (!modalItem) return;
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        setShotIndex(function (prev) {
          return prev === 0 ? modalItem.shots.length - 1 : prev - 1;
        });
      }
      if (e.key === "ArrowRight") {
        e.preventDefault();
        setShotIndex(function (prev) {
          return prev === modalItem.shots.length - 1 ? 0 : prev + 1;
        });
      }
    }
    document.addEventListener("keydown", onKey);
    return function () { document.removeEventListener("keydown", onKey); };
  }, [modalItem]);

  React.useEffect(function () {
    function onResize() {
      if (window.innerWidth > 768) setNavOpen(false);
    }
    window.addEventListener("resize", onResize);
    return function () { window.removeEventListener("resize", onResize); };
  }, []);

  React.useEffect(function () {
    var els = document.querySelectorAll("[data-animate]");
    if (!effectsOn) {
      els.forEach(function (el) { el.classList.add("visible"); });
      return;
    }
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) entry.target.classList.add("visible");
      });
    }, { threshold: 0.1 });
    els.forEach(function (el) { observer.observe(el); });
    return function () { observer.disconnect(); };
  }, [effectsOn, lang]);

  React.useEffect(function () {
    document.body.classList.toggle("animations-off", !effectsOn);
  }, [effectsOn]);

  React.useEffect(function () {
    if (!effectsOn || IS_TOUCH) return;
    var cards = document.querySelectorAll(".card, .panel, .hero-card, .about-card, .stack-card, .service-card, .project-card, .review-card");

    function handlePointerMove(e) {
      var rect = this.getBoundingClientRect();
      var x = e.clientX - rect.left;
      var y = e.clientY - rect.top;
      var cx = rect.width / 2;
      var cy = rect.height / 2;
      var rotX = -((y - cy) / cy) * 6;
      var rotY = ((x - cx) / cx) * 6;
      var glareX = (x / rect.width) * 100;
      var glareY = (y / rect.height) * 100;
      this.style.transform = "perspective(900px) rotateX(" + rotX.toFixed(2) + "deg) rotateY(" + rotY.toFixed(2) + "deg) translateZ(4px)";
      this.style.setProperty("--glare-x", glareX.toFixed(1) + "%");
      this.style.setProperty("--glare-y", glareY.toFixed(1) + "%");
      this.style.setProperty("--glare-opacity", "1");
    }

    function handlePointerLeave() {
      this.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg) translateZ(0px)";
      this.style.setProperty("--glare-opacity", "0");
    }

    cards.forEach(function (card) {
      card.addEventListener("pointermove", handlePointerMove);
      card.addEventListener("pointerleave", handlePointerLeave);
    });

    return function () {
      cards.forEach(function (card) {
        card.removeEventListener("pointermove", handlePointerMove);
        card.removeEventListener("pointerleave", handlePointerLeave);
        card.style.transform = "";
        card.style.removeProperty("--glare-opacity");
      });
    };
  }, [effectsOn, lang, modalItem]);

  var data = React.useMemo(function () { return getData(lang); }, [lang]);
  var behavior = scrollBehavior(effectsOn);

  function scrollToSection(section) {
    var el = document.getElementById(section);
    if (el) {
      el.scrollIntoView({ behavior: behavior, block: "start" });
      if (IS_HTTP) window.history.replaceState(null, "", "#" + section);
    } else {
      window.scrollTo({ top: 0, behavior: behavior });
      if (IS_HTTP) window.history.replaceState(null, "", "#top");
    }
  }

  function handleLang() {
    setLang(lang === "ru" ? "en" : "ru");
  }

  function handleNavigate(e, section) {
    e.preventDefault();
    setNavOpen(false);
    scrollToSection(section);
  }

  function handleOpenModal(item) {
    setModalItem(item);
    setShotIndex(0);
  }

  function handlePrevShot() {
    if (!modalItem || !modalItem.shots || modalItem.shots.length === 0) return;
    setShotIndex(function (prev) {
      return prev === 0 ? modalItem.shots.length - 1 : prev - 1;
    });
  }

  function handleNextShot() {
    if (!modalItem || !modalItem.shots || modalItem.shots.length === 0) return;
    setShotIndex(function (prev) {
      return prev === modalItem.shots.length - 1 ? 0 : prev + 1;
    });
  }

  return h("div", { className: "app" }, [
    h(Header, {
      key: "header",
      ui: data.ui,
      labels: data.nav,
      navOpen: navOpen,
      effectsOn: effectsOn,
      onBurger: function () { setNavOpen(!navOpen); },
      onNavigate: handleNavigate,
      onLang: handleLang,
      onToggleEffects: function () { setEffectsOn(!effectsOn); }
    }),
    h("main", { className: "shell", id: "main" }, [
      h(Hero, { key: "hero", data: data, lang: lang, onScroll: scrollToSection }),
      h(Services, { key: "services", data: data }),
      h(Portfolio, { key: "portfolio", data: data, onOpen: handleOpenModal }),
      h(Reviews, { key: "reviews", data: data, lang: lang }),
      h(Contacts, { key: "contacts", data: data })
    ]),
    h(Footer, { key: "footer", data: data }),
    h(BackToTop, { key: "backtotop", show: showTop, label: data.ui.backToTop, onClick: function () {
      window.scrollTo({ top: 0, behavior: behavior });
      if (IS_HTTP) window.history.replaceState(null, "", "#top");
    } }),
    modalItem ? h(Modal, {
      key: "modal",
      item: modalItem,
      index: shotIndex,
      ui: data.ui,
      modalRef: modalRef,
      onClose: function () { setModalItem(null); },
      onPrev: handlePrevShot,
      onNext: handleNextShot
    }) : null
  ]);
}

var root = ReactDOM.createRoot(document.getElementById("root"));
root.render(h(App));
