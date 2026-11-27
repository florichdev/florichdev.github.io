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
  shield: "fa-solid fa-shield-halved",
  copy: "fa-solid fa-copy",
  check: "fa-solid fa-check",
  images: "fa-solid fa-images",
  resume: "fa-solid fa-file-lines",
  clock: "fa-solid fa-clock"
};

var techIcons = {
  "Python": "fa-brands fa-python",
  "FastAPI": "fa-solid fa-bolt",
  "Asyncio": "fa-solid fa-bolt",
  "Flask": "fa-solid fa-flask",
  "SQL": "fa-solid fa-database",
  "JavaScript": "fa-brands fa-js",
  "Aiogram 3": "fa-brands fa-telegram",
  "Telegram Mini Apps (TWA)": "fa-solid fa-mobile-screen",
  "MAX API": "fa-solid fa-robot",
  "Pyrogram / Telethon": "fa-solid fa-paper-plane",
  "React": "fa-brands fa-react",
  "HTML5": "fa-brands fa-html5",
  "CSS3": "fa-brands fa-css3-alt",
  "Flet": "fa-solid fa-laptop-code",
  "PostgreSQL": "fa-solid fa-database",
  "SQLite": "fa-solid fa-database",
  "SQLAlchemy": "fa-solid fa-cubes",
  "BeautifulSoup4": "fa-solid fa-spider",
  "Playwright": "fa-solid fa-robot",
  "Aiohttp": "fa-solid fa-network-wired",
  "Httpx": "fa-solid fa-globe",
  "Pytest": "fa-solid fa-check",
  "Docker": "fa-brands fa-docker",
  "Systemd": "fa-solid fa-server",
  "Linux / VPS": "fa-brands fa-linux",
  "Git": "fa-brands fa-git-alt"
};

var TG_PERSONAL = "https://t.me/vflorich";
var TG_CHANNEL = "https://t.me/florichdev";
var KWORK_URL = "https://kwork.ru/user/florichdev";
var HH_RESUME_URL = "https://hh.ru/resume/0301fc2dff0ddb6ba00039ed1f76626272454c";
var EMAIL_ADDR = "florichdev@gmail.com";
var TG_HANDLE = "@vflorich";
var LANG_KEY = "florichdev-lang";
var EFFECTS_KEY = "florichdev-effects";
var IS_HTTP = typeof window !== "undefined" && window.location && /^https?:$/.test(window.location.protocol);
var IS_TOUCH = typeof window !== "undefined" && window.matchMedia && window.matchMedia("(hover: none), (pointer: coarse)").matches;
var TRAIL_SETTINGS = { inactivityTimeout: 4500 };

function detectEffects() {
  try {
    var saved = localStorage.getItem(EFFECTS_KEY);
    if (saved === "0") return false;
    if (saved === "1") return true;
  } catch (e) {}
  if (typeof window !== "undefined" && window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return false;
  }
  return true;
}

var TECH_GROUPS = [
  {
    categoryRu: "Backend & Языки",
    categoryEn: "Backend & Languages",
    items: ["Python", "FastAPI", "Asyncio", "Flask", "SQL", "JavaScript"]
  },
  {
    categoryRu: "Боты & Мессенджеры",
    categoryEn: "Bots & Messengers",
    items: ["Aiogram 3", "Telegram Mini Apps (TWA)", "MAX API", "Pyrogram / Telethon"]
  },
  {
    categoryRu: "Web & Desktop",
    categoryEn: "Web & Desktop",
    items: ["HTML5", "CSS3", "React", "Flet"]
  },
  {
    categoryRu: "Базы данных & ORM",
    categoryEn: "Databases & ORM",
    items: ["PostgreSQL", "SQLite", "SQLAlchemy"]
  },
  {
    categoryRu: "Парсинг & Тестирование",
    categoryEn: "Scraping & Testing",
    items: ["BeautifulSoup4", "Playwright", "Httpx", "Aiohttp", "Pytest"]
  },
  {
    categoryRu: "DevOps & Инфраструктура",
    categoryEn: "DevOps & Infrastructure",
    items: ["Linux / VPS", "Systemd", "Docker", "Git"]
  }
];

var TYPEWRITER_PHRASES = {
  ru: [
    "Python Backend Developer",
    "Telegram Bot & Mini Apps Developer",
    "Web & API Developer",
    "Разработка парсеров и скриптов",
    "Автоматизация и разработка ПО"
  ],
  en: [
    "Python Backend Developer",
    "Telegram Bot & Mini Apps Developer",
    "Web & API Developer",
    "Web Scraping & Automation Scripts",
    "Software Development & Automation"
  ]
};

var serviceItems = [
  {
    id: "tg-bots", icon: "bot",
    ru: { title: "Telegram-боты под ключ", desc: "Автоворонки, прием оплат (CryptoBot, ЮKassa, Telegram Stars), диалоговые FSM-сценарии, платные подписки, реферальные системы и веб-админки.", price: "от 5 000 ₽" },
    en: { title: "Telegram Bots Turnkey", desc: "Automated sales funnels, payment gateways (CryptoBot, Telegram Stars), conversational FSM scenarios, subscriptions, and custom admin dashboards.", price: "from $60" }
  },
  {
    id: "tg-miniapps", icon: "web",
    ru: { title: "Telegram Mini Apps & Сайты", desc: "Интерактивные веб-интерфейсы и лендинги на HTML/CSS/JS и React: каталоги товаров, онлайн-корзины, веб-админки и личные кабинеты.", price: "от 10 000 ₽" },
    en: { title: "Telegram Mini Apps & Web", desc: "Interactive web interfaces and landing pages (HTML/CSS/JS, React): e-commerce catalogs, online carts, admin dashboards, and portals.", price: "from $120" }
  },
  {
    id: "api", icon: "api",
    ru: { title: "REST API & Бэкенд", desc: "Серверные сервисы на FastAPI и Flask: проектирование REST API, авторизация, валидация Pydantic, фоновые задачи и интеграция с ботами.", price: "от 15 000 ₽" },
    en: { title: "REST API & Backend", desc: "Backend services using FastAPI and Flask: REST API design, authentication, Pydantic validation, background tasks, and bot integrations.", price: "from $200" }
  },
  {
    id: "parsing", icon: "web",
    ru: { title: "Парсинг & Автоматизация", desc: "Асинхронный сбор открытых данных с сайтов и каталогов, мониторинг изменений, уведомления и экспорт в Excel, Google Sheets или базы данных.", price: "от 8 000 ₽" },
    en: { title: "Scraping & Automation", desc: "Asynchronous open-data collection from websites and catalogs, change monitoring, alerts, and exports to Excel, Google Sheets, or databases.", price: "from $120" }
  },
  {
    id: "databases", icon: "api",
    ru: { title: "Базы данных & ORM", desc: "Проектирование реляционных схем БД (PostgreSQL, SQLite), работа через SQLAlchemy, миграции и оптимизация SQL-запросов.", price: "от 10 000 ₽" },
    en: { title: "Databases & ORM", desc: "Relational database schema design (PostgreSQL, SQLite), SQLAlchemy ORM, schema migrations, and SQL query optimization.", price: "from $150" }
  },
  {
    id: "integrations", icon: "api",
    ru: { title: "Интеграции & Платежи", desc: "Связка внешних REST API, платёжных провайдеров (CryptoBot, ЮKassa, Telegram Stars), Google Sheets и защита вебхуков от дублей.", price: "от 8 000 ₽" },
    en: { title: "Integrations & Payments", desc: "Connecting external REST APIs, payment gateways (CryptoBot, Telegram Stars), Google Sheets, and idempotent webhook pipelines.", price: "from $120" }
  }
];

var portfolioItems = [
  {
    id: "standoff2-market", icon: "bot",
    categories: ["bots", "web"],
    stack: "Python · FastAPI · Aiogram 3 · PostgreSQL · SQLAlchemy 2.0 · Docker · Pytest",
    tags: ["P2P Market", "FastAPI Hub", "Telegram Stars", "Clean Architecture"],
    demoUrl: "https://t.me/vflorich?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%20%D0%98%D0%BD%D1%82%D0%B5%D1%80%D0%B5%D1%81%D1%83%D0%B5%D1%82%20Standsticker",
    githubUrl: "https://github.com/florichdev/standoff2-sticker-market",
    shots: [],
    ru: {
      name: "Standsticker",
      desc: "Высоконагруженная P2P-платформа обмена игровыми предметами с приватным чатом сделок, монетизацией через Telegram Stars и веб-панелью управления на FastAPI.",
      task: "Спроектировать безопасную P2P-площадку внутри Telegram с модерацией сделок, анонимным чатом и биллингом без сторонних платёжных посредников.",
      solution: "Разделена архитектура: бот на Aiogram 3 + веб-хаб на FastAPI + PostgreSQL (SQLAlchemy 2.0 async), нативная оплата через Telegram Stars, покрытие критических сценариев Pytest и деплой в Docker.",
      result: "Отказоустойчивое ядро сделок с прозрачным жизненным циклом ордеров и полностью автоматизированной монетизацией.",
      price: "Архитектурный кейс"
    },
    en: {
      name: "Standsticker",
      desc: "High-performance P2P game asset trading platform featuring anonymous deal chats, Telegram Stars monetization, and a FastAPI web dashboard.",
      task: "Design a secure in-Telegram P2P marketplace with moderated deals, anonymous chats, and built-in billing.",
      solution: "Decoupled Clean Architecture: Aiogram 3 bot + FastAPI admin hub + async PostgreSQL (SQLAlchemy 2.0), native Telegram Stars payments, Pytest coverage, and Docker deployment.",
      result: "Fault-tolerant deal lifecycle engine with automated monetization and clean modular codebase.",
      price: "Architecture case"
    }
  },
  {
    id: "secret-vape", icon: "bot",
    categories: ["bots", "web"],
    stack: "Python · Aiogram 3 · SQLAlchemy · Flask · SQLite",
    tags: ["E-commerce", "Admin Panel", "Payments", "Telegram Bot"],
    demoUrl: "https://t.me/vflorich?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%20%D0%A5%D0%BE%D1%87%D1%83%20%D1%83%D0%B7%D0%BD%D0%B0%D1%82%D1%8C%20%D0%BF%D0%BE%D0%B4%D1%80%D0%BE%D0%B1%D0%BD%D0%B5%D0%B5%20%D0%BE%20%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D0%B5%20Secret%20Vape%20Shop",
    githubUrl: "https://github.com/florichdev/telegram-ecommerce-flask-admin",
    shots: [
      "./assets/images/portfolio/secretvapeshop/01-bot-main-menu.webp",
      "./assets/images/portfolio/secretvapeshop/02-bot-shop.webp",
      "./assets/images/portfolio/secretvapeshop/03-bot-shop-section.webp",
      "./assets/images/portfolio/secretvapeshop/04-web-auth.webp",
      "./assets/images/portfolio/secretvapeshop/05-web-main.webp",
      "./assets/images/portfolio/secretvapeshop/06-web-products.webp",
      "./assets/images/portfolio/secretvapeshop/07-web-orders.webp",
      "./assets/images/portfolio/secretvapeshop/08-web-users.webp",
      "./assets/images/portfolio/secretvapeshop/09-web-mobile.webp"
    ],
    ru: {
      name: "Secret Vape Shop",
      desc: "Полноценный интернет-магазин внутри Telegram с адаптивной веб-панелью управления каталогом, заказами и ролями менеджеров.",
      task: "Автоматизировать приём заказов в Telegram и убрать ручную обработку в личных сообщениях, дав владельцу удобную админку с телефона и ПК.",
      solution: "Бот-витрина на Aiogram 3 с корзиной и проверкой оплат + веб-панель на Flask/SQLAlchemy для CRUD товаров, статусов заказов и ролей доступа.",
      result: "Сокращение времени обработки заказа в 3 раза, единый учёт остатков и прозрачная аналитика продаж.",
      price: "Коммерческий кейс"
    },
    en: {
      name: "Secret Vape Shop",
      desc: "Full-featured Telegram e-commerce store with a responsive web admin dashboard for managing catalog, orders, and staff roles.",
      task: "Automate Telegram store checkout and eliminate manual DM order handling with a mobile-friendly admin panel.",
      solution: "Aiogram 3 storefront bot with cart & payment verification paired with a Flask/SQLAlchemy dashboard for catalog CRUD, order statuses, and RBAC.",
      result: "3x faster order processing, centralized inventory tracking, and clear sales reporting.",
      price: "Commercial case"
    }
  },
  {
    id: "cryptopay", icon: "web",
    categories: ["bots", "web"],
    stack: "Python · Flask · Aiogram · Solana · SQLite",
    tags: ["Crypto", "Web App", "Payments", "Solana"],
    demoUrl: "https://t.me/vflorich?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%20%D0%A5%D0%BE%D1%87%D1%83%20%D1%83%D0%B7%D0%BD%D0%B0%D1%82%D1%8C%20%D0%BF%D0%BE%D0%B4%D1%80%D0%BE%D0%B1%D0%BD%D0%B5%D0%B5%20%D0%BE%20%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D0%B5%20CryptoPay",
    shots: [
      "./assets/images/portfolio/cryptopay/web1.webp",
      "./assets/images/portfolio/cryptopay/web2.webp",
      "./assets/images/portfolio/cryptopay/tg1.webp",
      "./assets/images/portfolio/cryptopay/tg2.webp"
    ],
    ru: {
      name: "CryptoPay",
      desc: "Автоматизированный шлюз приёма криптовалютных платежей в сети Solana с мгновенной валидацией транзакций и ботом уведомлений в Telegram.",
      task: "Обеспечить автоматическую проверку крипто-оплат без ручной сверки хешей и защитить шлюз от дублей.",
      solution: "Веб-страница оплаты с генерацией QR и отслеживанием блокчейна Solana + идемпотентные вебхуки + мгновенные уведомления в Telegram.",
      result: "Подтверждение платежей за секунды, нулевой риск двойного зачисления и полная автономность расчётов.",
      price: "Коммерческий кейс"
    },
    en: {
      name: "CryptoPay",
      desc: "Automated Solana crypto payment gateway with instant transaction verification and Telegram alerting bot.",
      task: "Automate crypto checkout verification without manual hash checks while preventing double-spend bugs.",
      solution: "QR checkout web interface monitoring Solana on-chain transfers + idempotent webhook dispatching + instant Telegram alerts.",
      result: "Seconds-fast payment confirmation, zero duplicate credits, and hands-free settlement.",
      price: "Commercial case"
    }
  },
  {
    id: "happs", icon: "bot",
    categories: ["bots"],
    stack: "Python · Aiogram · SQLite · Flask · PDF",
    tags: ["Health", "Booking", "Admin", "PDF Engine"],
    demoUrl: "https://t.me/happshealthbot",
    shots: [
      "./assets/images/portfolio/@happshealthbot/tg1.webp",
      "./assets/images/portfolio/@happshealthbot/tg2.webp",
      "./assets/images/portfolio/@happshealthbot/tg3.webp"
    ],
    ru: {
      name: "Happs",
      desc: "Сервис мониторинга здоровья и привычек в Telegram с формированием сравнительных PDF-отчётов динамики пользователя.",
      task: "Запустить живой сервис ведения клиентов в Telegram с регулярным сбором метрик и красивыми персональными отчётами.",
      solution: "Асинхронный бот на Aiogram, модуль сравнения прогресса по периодам и фоновая генерация персонализированных PDF-документов.",
      result: "Работающий продакшен-бот (@happshealthbot) с автоматической генерацией отчётов без участия менеджера.",
      price: "Коммерческий кейс"
    },
    en: {
      name: "Happs",
      desc: "Telegram health & wellness coaching service with automated comparative PDF progress reports.",
      task: "Launch a production Telegram coaching service with recurring metric check-ins and personalized reports.",
      solution: "Async Aiogram bot, period-over-period comparison engine, and background PDF report generator.",
      result: "Live production bot (@happshealthbot) delivering automated client reports hands-free.",
      price: "Commercial case"
    }
  },
  {
    id: "botsmax", icon: "bot",
    categories: ["bots", "web"],
    stack: "Python · MAX API · Flask · SQLite",
    tags: ["MAX", "Admin", "Giveaways", "High-load"],
    demoUrl: "https://t.me/vflorich?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%20%D0%98%D0%BD%D1%82%D0%B5%D1%80%D0%B5%D1%81%D1%83%D1%8E%D1%82%20%D0%B1%D0%BE%D1%82%D1%8B%20%D0%B4%D0%BB%D1%8F%20MAX",
    shots: [
      "./assets/images/portfolio/botsmax/max1.webp",
      "./assets/images/portfolio/botsmax/max2.webp",
      "./assets/images/portfolio/botsmax/max3.webp",
      "./assets/images/portfolio/botsmax/max4.webp",
      "./assets/images/portfolio/botsmax/max5.webp",
      "./assets/images/portfolio/botsmax/max6.webp",
      "./assets/images/portfolio/botsmax/web1.webp",
      "./assets/images/portfolio/botsmax/web2.webp",
      "./assets/images/portfolio/botsmax/web3.webp",
      "./assets/images/portfolio/botsmax/web4.webp",
      "./assets/images/portfolio/botsmax/web5.webp",
      "./assets/images/portfolio/botsmax/web6.webp",
      "./assets/images/portfolio/botsmax/web7.webp"
    ],
    ru: {
      name: "Рандомайзер & Сэйвер",
      desc: "Экосистема из двух высоконагруженных ботов для мессенджера MAX с единой веб-панелью администрирования на Flask.",
      task: "Создать стабильный набор утилит для аудитории MAX (проведение розыгрышей и скачивание медиа) с централизованным управлением.",
      solution: "Асинхронная очередь фоновой загрузки/конвертации медиа + движок честных розыгрышей + единая Flask-админка со статистикой и уведомлениями.",
      result: "Стабильная работа под пиковыми всплесками тысяч пользователей и удобный контроль всех метрик в одном окне.",
      price: "Коммерческий кейс"
    },
    en: {
      name: "Randomizer & Saver",
      desc: "High-load ecosystem of two MAX messenger bots with a unified Flask administrative dashboard.",
      task: "Build a reliable utility suite for MAX messenger (giveaways & media downloads) with centralized administration.",
      solution: "Background media download/conversion queue + verifiable giveaway engine + unified Flask dashboard with analytics and notifications.",
      result: "Smooth performance under multi-thousand user traffic spikes with single-pane management.",
      price: "Commercial case"
    }
  },
  {
    id: "botstaro", icon: "bot",
    categories: ["bots", "web"],
    stack: "Python · MAX API · Telegram API · Flask · SQLite",
    tags: ["MAX", "Telegram", "Integration", "Storytelling"],
    demoUrl: "https://t.me/vflorich?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%20%D0%98%D0%BD%D1%82%D0%B5%D1%80%D0%B5%D1%81%D1%83%D0%B5%D1%82%20%D0%BA%D1%80%D0%BE%D1%81%D1%81%D0%BF%D0%BB%D0%B0%D1%82%D1%84%D0%BE%D1%80%D0%BC%D0%B5%D0%BD%D0%BD%D1%8B%D0%B9%20%D0%B1%D0%BE%D1%82",
    shots: [
      "./assets/images/portfolio/botstaro/max1.webp",
      "./assets/images/portfolio/botstaro/max2.webp",
      "./assets/images/portfolio/botstaro/max3.webp",
      "./assets/images/portfolio/botstaro/max4.webp",
      "./assets/images/portfolio/botstaro/max5.webp",
      "./assets/images/portfolio/botstaro/tgweb.webp",
      "./assets/images/portfolio/botstaro/web1.webp",
      "./assets/images/portfolio/botstaro/web2.webp",
      "./assets/images/portfolio/botstaro/web3.webp",
      "./assets/images/portfolio/botstaro/web4.webp",
      "./assets/images/portfolio/botstaro/web5.webp",
      "./assets/images/portfolio/botstaro/web6.webp"
    ],
    ru: {
      name: "Бот Таролог",
      desc: "Кросс-платформенный интерактивный сервис (MAX + Telegram) с общим бэкендом, единой БД и CMS-панелью редактирования контента.",
      task: "Запустить единый контентный сервис сразу в двух мессенджерах без дублирования логики и базы пользователей.",
      solution: "Общее ядро на Flask + адаптеры под MAX API и Telegram API + веб-редактор сценариев, раскладов и пользовательских сессий.",
      result: "Мгновенная синхронизация контента на обе площадки и удобное масштабирование на новые мессенджеры.",
      price: "Коммерческий кейс"
    },
    en: {
      name: "Tarot Bot",
      desc: "Cross-platform interactive bot service (MAX + Telegram) backed by a unified Flask API, shared DB, and CMS panel.",
      task: "Launch a single interactive content product across two messengers without duplicating business logic or user data.",
      solution: "Shared Flask backend + MAX & Telegram adapters + web CMS for editing readings, scenarios, and live user sessions.",
      result: "Instant content sync across both platforms and clean extensibility to new channels.",
      price: "Commercial case"
    }
  },
  {
    id: "kwork-monitor", icon: "api",
    categories: ["scripts", "bots"],
    stack: "Python · Asyncio · httpx · BeautifulSoup4 · Aiogram · LLM API · SQLite",
    tags: ["Automation", "Monitoring", "LLM API", "VPS 24/7"],
    demoUrl: "https://t.me/vflorich?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%20%D0%98%D0%BD%D1%82%D0%B5%D1%80%D0%B5%D1%81%D1%83%D0%B5%D1%82%20%D1%81%D0%BA%D1%80%D0%B8%D0%BF%D1%82%20%D0%BC%D0%BE%D0%BD%D0%B8%D1%82%D0%BE%D1%80%D0%B8%D0%BD%D0%B3%D0%B0",
    shots: [],
    ru: {
      name: "Мониторинг заказов & AI-ассистент",
      desc: "Асинхронный скрипт мониторинга открытых IT-проектов с умной фильтрацией по стеку и бюджету, мгновенными уведомлениями в Telegram и черновиками через LLM API.",
      task: "Автоматизировать отслеживание релевантных заказов без ручного обновления страниц и отсекать неподходящие заявки по стоп-словам и метрикам.",
      solution: "Фоновый сборщик на httpx + BeautifulSoup4, дедупликация в SQLite, гибкий фильтр по категориям и генерация структурированного черновика через OpenRouter/LLM API на VPS (systemd).",
      result: "Мгновенные уведомления в течение 1–2 минут после публикации и полная автоматизация первичного отбора задач.",
      price: "Собственный проект"
    },
    en: {
      name: "Order Monitor & AI Assistant",
      desc: "Async open-listings monitoring script with smart stack/budget filtering, instant Telegram alerts, and automated response drafting via LLM API.",
      task: "Automate tracking of relevant freelance projects without manual polling while filtering out noisy listings.",
      solution: "Background httpx + BeautifulSoup4 collector, SQLite deduplication, configurable keyword & threshold filters, and LLM API draft generation running 24/7 on Linux VPS (systemd).",
      result: "Alerts within 1–2 minutes of publication and zero time wasted scanning irrelevant feeds.",
      price: "In-house product"
    }
  },
  {
    id: "ocr-screen-translator", icon: "web",
    categories: ["software"],
    stack: "Python · Flet GUI · EasyOCR · Google Translate API · Pillow",
    tags: ["Desktop App", "OCR", "Material UI", "Open Source"],
    demoUrl: "https://t.me/vflorich?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%20%D0%98%D0%BD%D1%82%D0%B5%D1%80%D0%B5%D1%81%D1%83%D0%B5%D1%82%20%D1%80%D0%B0%D0%B7%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%BA%D0%B0%20%D0%B4%D0%B5%D1%81%D0%BA%D1%82%D0%BE%D0%BF%D0%BD%D0%BE%D0%B3%D0%BE%20%D0%9F%D0%9E",
    githubUrl: "https://github.com/florichdev/OCR-Screen-Translator",
    shots: [],
    ru: {
      name: "OCR Screen Translator",
      desc: "Десктопное приложение для распознавания и мгновенного перевода текста с выделенной области экрана, скриншотов и буфера обмена.",
      task: "Переработать старый прототип на tkinter в современное и удобное десктопное ПО с точным распознаванием текста и адаптивным интерфейсом.",
      solution: "Полный рефакторинг UI на Flet (Material Design), интерактивный захват области экрана, предобработка изображений для EasyOCR и интеграция Google Translate API.",
      result: "Кроссплатформенная утилита с открытым исходным кодом на GitHub для быстрого перевода текста прямо с экрана.",
      price: "Open Source"
    },
    en: {
      name: "OCR Screen Translator",
      desc: "Desktop application for capturing any screen area or clipboard image, extracting text via OCR, and translating it in real time.",
      task: "Rebuild a legacy tkinter prototype into a clean, responsive desktop app with accurate OCR and modern UX.",
      solution: "Complete UI rewrite on Flet (Material Design), interactive screen-area capture, image preprocessing for EasyOCR, and Google Translate API integration.",
      result: "Open-source desktop utility on GitHub enabling instant on-screen text translation.",
      price: "Open Source"
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
    dateRu: "15 дней назад",
    dateEn: "15 days ago",
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
    dateRu: "2 месяца назад",
    dateEn: "2 months ago",
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
    dateRu: "7 месяцев назад",
    dateEn: "7 months ago",
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
    dateRu: "8 месяцев назад",
    dateEn: "8 months ago",
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
    dateRu: "9 месяцев назад",
    dateEn: "9 months ago",
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
    dateRu: "10 месяцев назад",
    dateEn: "10 months ago",
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
    dateRu: "10 месяцев назад",
    dateEn: "10 months ago",
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
    dateRu: "11 месяцев назад",
    dateEn: "11 months ago",
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
    dateRu: "11 месяцев назад",
    dateEn: "11 months ago",
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
    dateRu: "11 месяцев назад",
    dateEn: "11 months ago",
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
    dateRu: "1 год назад",
    dateEn: "1 year ago",
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
    dateRu: "1 год назад",
    dateEn: "1 year ago",
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
      categories: item.categories || [],
      stack: item.stack,
      tags: item.tags,
      shots: item.shots,
      demoUrl: item.demoUrl,
      githubUrl: item.githubUrl,
      name: loc.name || loc.title,
      title: loc.title,
      desc: loc.desc,
      task: loc.task,
      solution: loc.solution,
      result: loc.result,
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

var PORTFOLIO_FILTERS = {
  ru: [
    { id: "all", label: "Все" },
    { id: "bots", label: "Боты" },
    { id: "web", label: "Сайты & Web" },
    { id: "scripts", label: "Скрипты" },
    { id: "software", label: "ПО" }
  ],
  en: [
    { id: "all", label: "All" },
    { id: "bots", label: "Bots" },
    { id: "web", label: "Web & Sites" },
    { id: "scripts", label: "Scripts" },
    { id: "software", label: "Software" }
  ]
};

var REVIEW_DATE_EN = {
  "15 дней назад": "15 days ago",
  "2 месяца назад": "2 months ago",
  "7 месяцев назад": "7 months ago",
  "8 месяцев назад": "8 months ago",
  "9 месяцев назад": "9 months ago",
  "10 месяцев назад": "10 months ago",
  "11 месяцев назад": "11 months ago",
  "1 год назад": "1 year ago"
};

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
      discussService: "Обсудить",
      serviceOrderPrefix: "Здравствуйте! Интересует услуга: ",
      prevShot: "Предыдущее фото",
      nextShot: "Следующее фото",
      workingHours: "График работы: 8:00 – 22:00 (МСК)",
      skipLink: "К основному содержимому",
      copied: "Скопировано: ",
      copyHint: "Нажмите, чтобы скопировать",
      photosWord: "фото",
      architectureBadge: "Схема архитектуры",
      openCase: "Подробнее",
      taskLabel: "Задача",
      solutionLabel: "Решение",
      resultLabel: "Результат"
    },
    nav: { services: "Услуги", portfolio: "Портфолио", reviews: "Отзывы", contact: "Контакты" },
    hero: {
      hello: "Привет, я",
      name: "Вадим",
      status: "Открыт к проектам",
      pitch: "Telegram-боты, Mini Apps, отказоустойчивые REST API и автоматизация под ключ для бизнеса",
      ctaContact: "Написать",
      ctaPortfolio: "Портфолио",
      stats: [
        { value: "20+", label: "проектов в проде" },
        { value: "5.0 ★", label: "рейтинг Kwork" },
        { value: "100%", label: "сдача в срок" }
      ]
    },
    about: {
      title: "Обо мне",
      note: "Коммерческий опыт",
      text: "Разрабатываю веб-сервисы, Telegram и MAX-боты, скрипты автоматизации и десктопное ПО на Python. Более 20 реализованных коммерческих и собственных проектов (рейтинг 5.0 на Kwork, 100% сдача в срок). Проектирую понятную архитектуру, подключаю платёжные шлюзы и внешние API, работаю с PostgreSQL/SQLite и настраиваю стабильный запуск 24/7 на Linux VPS (systemd / Docker).",
      facts: ["UTC+3 (МСК)", "Ответ ~15 мин", "Под ключ & NDA", "Linux VPS 24/7"],
      resumeLabel: "Резюме на HH"
    },
    services: {
      title: "Услуги",
      hint: "Что я предлагаю",
      briefPrompt: "Нужна точная оценка сроков и бюджета? Соберите короткий бриф за 30 секунд.",
      briefCta: "Собрать ТЗ"
    },
    process: {
      title: "Как я работаю",
      hint: "Прозрачный процесс от идеи до прода",
      steps: [
        { num: "01", title: "Бриф и оценка", desc: "Разбираем задачу, уточняем детали и фиксируем понятные сроки и бюджет за 15 минут." },
        { num: "02", title: "Прототип / ТЗ", desc: "Проектирую схему архитектуры, а для сложных ботов могу показать прототип до старта." },
        { num: "03", title: "Разработка и тесты", desc: "Пишу чистый асинхронный код, подключаю БД/оплаты и показываю промежуточные демо." },
        { num: "04", title: "Деплой и поддержка", desc: "Разворачиваю проект на вашем Linux VPS (systemd / Docker), передаю исходники, инструкцию и 14 дней гарантии." }
      ]
    },
    faq: {
      title: "Частые вопросы",
      hint: "Ответы до старта работы",
      items: [
        { q: "Как проходит оплата и есть ли безопасная сделка?", a: "Работаю через безопасную сделку на Kwork (гарантия платформы) либо поэтапно 50/50 напрямую с чеком самозанятого. Для сложных проектов возможен показ рабочего прототипа до старта." },
        { q: "Помогаете ли с покупкой сервера и запуском?", a: "Да, помогаю подобрать Linux VPS, настраиваю окружение с нуля (systemd / Docker) с автоперезапуском 24/7 и передаю краткую инструкцию по управлению." },
        { q: "Даёте ли гарантию после сдачи проекта?", a: "Да, 14 дней бесплатной технической поддержки и оперативного исправления любых багов после передачи. Далее возможна доработка и сопровождение." },
        { q: "Работаете ли под NDA?", a: "Да, без проблем подписываю NDA — не публикую код, скриншоты и любые упоминания о вашем проекте в открытом портфолио." },
        { q: "Что нужно от меня, чтобы начать?", a: "Достаточно описать идею своими словами в Telegram или собрать короткий бриф через кнопку на сайте — я сам задам нужные вопросы и помогу оформить ТЗ." }
      ]
    },
    brief: {
      title: "Быстрый бриф проекта",
      subtitle: "Отметьте нужные пункты — сформируется готовое сообщение для Telegram или Kwork",
      typeLabel: "1. Что нужно разработать?",
      modulesLabel: "2. Дополнительные модули",
      speedLabel: "3. Желаемые сроки",
      noteLabel: "4. Кратко о задаче (необязательно)",
      notePlaceholder: "Например: нужен бот-магазин с каталогом, корзиной и оплатой через ЮKassa...",
      estimateLabel: "Ориентир:",
      sendTg: "Отправить в Telegram",
      copyBrief: "Скопировать ТЗ",
      copiedNotice: "Бриф скопирован",
      types: [
        { id: "bot", label: "Telegram-бот", rub: 5000, usd: 60, days: [2, 5] },
        { id: "tma", label: "Сайт / Mini App", rub: 10000, usd: 120, days: [4, 10] },
        { id: "api", label: "REST API / Бэкенд", rub: 15000, usd: 200, days: [5, 12] },
        { id: "parser", label: "Парсер / Скрипт", rub: 8000, usd: 120, days: [2, 5] },
        { id: "desktop", label: "Десктопное ПО", rub: 8000, usd: 120, days: [3, 7] },
        { id: "max", label: "Бот для MAX", rub: 6000, usd: 80, days: [2, 5] },
        { id: "fix", label: "Доработка / Фикс", rub: 3000, usd: 40, days: [1, 3] }
      ],
      modules: [
        { id: "pay", label: "Оплаты (ЮKassa / CryptoBot / Stars)", rub: 3000, usd: 40, days: 1 },
        { id: "admin", label: "Веб-админка", rub: 5000, usd: 60, days: 2 },
        { id: "db", label: "База данных (PostgreSQL)", rub: 2000, usd: 30, days: 1 },
        { id: "api_ext", label: "Интеграция API / Google Sheets", rub: 3000, usd: 40, days: 1 },
        { id: "vps", label: "Деплой на Linux VPS", rub: 2000, usd: 25, days: 0 },
        { id: "nda", label: "Под NDA", rub: 0, usd: 0, days: 0 }
      ],
      speeds: [
        { id: "urgent", label: "Срочно (1–3 дня)" },
        { id: "normal", label: "Стандартно (4–10 дней)" },
        { id: "flex", label: "Не горит / обсудим" }
      ],
      daysUnit: "дн."
    },
    metaDesc: "Разработка Telegram-ботов под ключ, Mini Apps, масштабируемых REST API и парсинг-систем на Python.",
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
      ctaTg: "Написать в Telegram",
      ctaKwork: "Безопасная сделка Kwork",
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
      discussService: "Discuss",
      serviceOrderPrefix: "Hi! I'm interested in: ",
      prevShot: "Previous image",
      nextShot: "Next image",
      workingHours: "Working hours: 8:00 AM – 10:00 PM (UTC+3)",
      skipLink: "Skip to main content",
      copied: "Copied: ",
      copyHint: "Click to copy",
      photosWord: "shots",
      architectureBadge: "Architecture",
      openCase: "View case",
      taskLabel: "Challenge",
      solutionLabel: "Solution",
      resultLabel: "Outcome"
    },
    nav: { services: "Services", portfolio: "Portfolio", reviews: "Reviews", contact: "Contacts" },
    hero: {
      hello: "Hi, I'm",
      name: "Vadim",
      status: "Available for work",
      pitch: "High-performance Telegram bots, Mini Apps, scalable REST APIs & automation pipelines for business",
      ctaContact: "Contact",
      ctaPortfolio: "Portfolio",
      stats: [
        { value: "20+", label: "production projects" },
        { value: "5.0 ★", label: "Kwork rating" },
        { value: "100%", label: "on-time delivery" }
      ]
    },
    about: {
      title: "About me",
      note: "Commercial experience",
      text: "I build web services, Telegram & MAX bots, automation scripts, and desktop software in Python. 20+ commercial and in-house projects delivered (5.0 Kwork rating, 100% on-time delivery). I design clean architecture, integrate payment gateways and external APIs, work with PostgreSQL/SQLite, and deploy reliable 24/7 services on Linux VPS (systemd / Docker).",
      facts: ["UTC+3", "Reply ~15 min", "Turnkey & NDA", "Linux VPS 24/7"],
      resumeLabel: "CV on HH"
    },
    services: {
      title: "Services",
      hint: "What I offer",
      briefPrompt: "Need a clear estimate on timeline & budget? Build a quick project brief in 30 seconds.",
      briefCta: "Quick Brief"
    },
    process: {
      title: "How I Work",
      hint: "Transparent workflow from idea to production",
      steps: [
        { num: "01", title: "Brief & Estimate", desc: "We clarify requirements and lock in a realistic timeline and budget within 15 minutes." },
        { num: "02", title: "Prototype / Spec", desc: "I design the system architecture and can demo a working prototype before full kickoff." },
        { num: "03", title: "Build & Testing", desc: "Clean async Python code, database/payment integrations, and regular milestone demos." },
        { num: "04", title: "Deploy & Support", desc: "Deployment on your Linux VPS (systemd / Docker), full source handover, docs, and 14-day warranty." }
      ]
    },
    faq: {
      title: "FAQ",
      hint: "Common questions before kickoff",
      items: [
        { q: "How does payment work? Is escrow available?", a: "We can work via Kwork escrow protection or split 50/50 milestones directly with official self-employed receipts. For complex bots, I can build an initial demo prototype before order confirmation." },
        { q: "Do you help with VPS setup and deployment?", a: "Yes — I help pick a Linux VPS, set up the environment from scratch (systemd / Docker) with 24/7 auto-restart, and provide a concise handover guide." },
        { q: "Do you provide a warranty after delivery?", a: "Yes, 14 days of free bug-fix support after project handover, with optional ongoing maintenance afterwards." },
        { q: "Do you work under NDA?", a: "Absolutely. I sign NDAs and never disclose your code, screenshots, or project details in public portfolios." },
        { q: "What do you need from me to get started?", a: "Just describe your idea in plain words on Telegram or click Quick Brief on this page — I will ask the right technical questions and help finalize the spec." }
      ]
    },
    brief: {
      title: "Quick Project Brief",
      subtitle: "Pick your requirements to generate a ready-to-send message for Telegram or Kwork",
      typeLabel: "1. What do you need to build?",
      modulesLabel: "2. Optional modules",
      speedLabel: "3. Target timeline",
      noteLabel: "4. Short description (optional)",
      notePlaceholder: "E.g.: Telegram storefront bot with catalog, cart, and CryptoBot/Stars checkout...",
      estimateLabel: "Estimate:",
      sendTg: "Send to Telegram",
      copyBrief: "Copy Brief",
      copiedNotice: "Brief copied",
      types: [
        { id: "bot", label: "Telegram Bot", rub: 5000, usd: 60, days: [2, 5] },
        { id: "tma", label: "Website / Mini App", rub: 10000, usd: 120, days: [4, 10] },
        { id: "api", label: "REST API / Backend", rub: 15000, usd: 200, days: [5, 12] },
        { id: "parser", label: "Scraper / Automation", rub: 8000, usd: 120, days: [2, 5] },
        { id: "desktop", label: "Desktop Software", rub: 8000, usd: 120, days: [3, 7] },
        { id: "max", label: "MAX Messenger Bot", rub: 6000, usd: 80, days: [2, 5] },
        { id: "fix", label: "Fix / Enhancement", rub: 3000, usd: 40, days: [1, 3] }
      ],
      modules: [
        { id: "pay", label: "Payments (CryptoBot / Telegram Stars)", rub: 3000, usd: 40, days: 1 },
        { id: "admin", label: "Web Admin Dashboard", rub: 5000, usd: 60, days: 2 },
        { id: "db", label: "Database (PostgreSQL)", rub: 2000, usd: 30, days: 1 },
        { id: "api_ext", label: "3rd-party API / Google Sheets", rub: 3000, usd: 40, days: 1 },
        { id: "vps", label: "Linux VPS Deploy", rub: 2000, usd: 25, days: 0 },
        { id: "nda", label: "Under NDA", rub: 0, usd: 0, days: 0 }
      ],
      speeds: [
        { id: "urgent", label: "Urgent (1–3 days)" },
        { id: "normal", label: "Standard (4–10 days)" },
        { id: "flex", label: "Flexible / TBD" }
      ],
      daysUnit: "days"
    },
    metaDesc: "Turnkey Telegram bots, Mini Apps, scalable FastAPI REST APIs, and resilient Python automation systems.",
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
      ctaTg: "Message on Telegram",
      ctaKwork: "Order via Kwork Escrow",
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
    metaDesc: base.metaDesc,
    hero: base.hero,
    about: Object.assign({}, base.about, { techGroups: TECH_GROUPS }),
    services: Object.assign({}, base.services, { list: mapLocalized(serviceItems, lang) }),
    process: base.process,
    portfolio: Object.assign({}, base.portfolio, { list: mapLocalized(portfolioItems, lang) }),
    reviews: base.reviews,
    faq: base.faq,
    brief: base.brief,
    contacts: base.contacts,
    footer: base.footer
  };
}

var h = React.createElement;

function renderIcon(name, style, key) {
  var entry = typeof SVG_ICONS !== "undefined" && SVG_ICONS[name];
  if (!entry) return null;
  var vb = entry[0];
  var d = entry[1];
  var paths = Array.isArray(d)
    ? d.map(function (p, idx) { return h("path", { key: idx, fill: "currentColor", d: p }); })
    : h("path", { fill: "currentColor", d: d });
  var props = {
    className: "fa-svg",
    viewBox: vb,
    "aria-hidden": "true",
    focusable: "false"
  };
  if (style) props.style = style;
  if (key !== undefined) props.key = key;
  return h("svg", props, paths);
}

function Typewriter(props) {
  var words = props.words || [];
  var effectsOn = props.effectsOn !== false;
  var _state = React.useState({ wordIndex: 0, text: "", isDeleting: false });
  var state = _state[0];
  var setState = _state[1];

  React.useEffect(function () {
    setState({ wordIndex: 0, text: "", isDeleting: false });
  }, [props.lang]);

  React.useEffect(function () {
    if (!effectsOn || !words.length) return undefined;
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
  }, [state, words, effectsOn]);

  if (!effectsOn) {
    return h("span", { className: "typewriter-container" }, words[0] || "");
  }

  return h("span", { className: "typewriter-container" }, [
    state.text,
    h("span", { className: "typewriter-cursor", "aria-hidden": "true" })
  ]);
}

function ProjectArchDiagram(props) {
  var isRu = props.lang === "ru";
  var itemId = props.itemId || "standoff2-market";
  var suffix = (props.suffix || "card") + "-" + itemId;
  var gridId = "archGrid-" + suffix;
  var glowId = "archGlow-" + suffix;

  var presets = {
    "standoff2-market": {
      aria: isRu ? "Архитектура Standsticker" : "Standsticker Architecture",
      footer: "CLEAN ARCHITECTURE · P2P DEAL ENGINE",
      tl: ["Aiogram 3 Bot", isRu ? "P2P Чат · Сделки" : "P2P Chat · Deals"],
      bl: ["Telegram Stars", isRu ? "Биллинг · Эскроу" : "Billing · Escrow"],
      center: ["FastAPI Hub", "Domain · UseCases", "Admin API · Auth"],
      tr: ["PostgreSQL", "SQLAlchemy 2.0"],
      br: ["Docker · Pytest", "Async Tests · VPS"]
    },
    "kwork-monitor": {
      aria: isRu ? "Архитектура мониторинга заказов" : "Order Monitor Architecture",
      footer: "ASYNC COLLECTOR · SMART FILTER · LLM DRAFTS",
      tl: ["HTTPX Parser", isRu ? "Сбор лент · BS4" : "Feed Scan · BS4"],
      bl: ["Smart Filter", isRu ? "Бюджет · Конкуренция" : "Budget · Offers"],
      center: ["Async Core", "SQLite Dedup", "Linux VPS 24/7"],
      tr: ["Telegram Push", isRu ? "Мгновенный алерт" : "Instant Alerts"],
      br: ["LLM API", isRu ? "Черновик отклика" : "AI Draft Reply"]
    },
    "ocr-screen-translator": {
      aria: isRu ? "Архитектура OCR Screen Translator" : "OCR Screen Translator Architecture",
      footer: "DESKTOP GUI · REAL-TIME OCR TRANSLATOR",
      tl: ["Screen Capture", isRu ? "Область · Экран" : "Area · Fullscreen"],
      bl: ["Clipboard", isRu ? "Буфер обмена" : "Paste Image"],
      center: ["Flet GUI", "Material Design", "Pillow Preproc"],
      tr: ["EasyOCR", isRu ? "Распознавание текста" : "Text Extraction"],
      br: ["Translate API", isRu ? "Мгновенный перевод" : "Instant Output"]
    }
  };

  var cfg = presets[itemId] || presets["standoff2-market"];

  return h("svg", {
    className: "arch-diagram",
    viewBox: "0 0 640 360",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    role: "img",
    "aria-label": cfg.aria
  }, [
    h("defs", { key: "defs" }, [
      h("pattern", { id: gridId, width: "24", height: "24", patternUnits: "userSpaceOnUse", key: "grid" },
        h("path", { d: "M 24 0 L 0 0 0 24", fill: "none", stroke: "rgba(255,255,255,0.04)", strokeWidth: "1" })
      ),
      h("linearGradient", { id: glowId, x1: "0", y1: "0", x2: "640", y2: "360", gradientUnits: "userSpaceOnUse", key: "glow" }, [
        h("stop", { offset: "0%", stopColor: "#141418", key: "s1" }),
        h("stop", { offset: "100%", stopColor: "#0a0a0c", key: "s2" })
      ])
    ]),
    h("rect", { width: "640", height: "360", fill: "url(#" + glowId + ")", key: "bg" }),
    h("rect", { width: "640", height: "360", fill: "url(#" + gridId + ")", key: "gridbg" }),
    h("g", { key: "header" }, [
      h("circle", { cx: "32", cy: "332", r: "4", fill: "#10b981", key: "dot" }),
      h("text", { x: "44", y: "336", fill: "#a1a1aa", fontSize: "11", fontFamily: "monospace", letterSpacing: "1", key: "lbl" }, cfg.footer)
    ]),
    h("g", { stroke: "rgba(255,255,255,0.22)", strokeWidth: "1.5", key: "edges" }, [
      h("line", { x1: "184", y1: "120", x2: "240", y2: "165", key: "e1" }),
      h("line", { x1: "184", y1: "240", x2: "240", y2: "195", key: "e2" }),
      h("line", { x1: "400", y1: "165", x2: "456", y2: "120", key: "e3" }),
      h("line", { x1: "400", y1: "195", x2: "456", y2: "240", key: "e4" })
    ]),
    h("g", { key: "node-tl" }, [
      h("rect", { x: "30", y: "82", width: "154", height: "76", rx: "10", fill: "#16161a", stroke: "#333338", strokeWidth: "1.2", key: "r" }),
      h("text", { x: "107", y: "115", textAnchor: "middle", fill: "#ffffff", fontSize: "13", fontWeight: "600", fontFamily: "Montserrat, sans-serif", key: "t1" }, cfg.tl[0]),
      h("text", { x: "107", y: "136", textAnchor: "middle", fill: "#71717a", fontSize: "11", fontFamily: "monospace", key: "t2" }, cfg.tl[1])
    ]),
    h("g", { key: "node-bl" }, [
      h("rect", { x: "30", y: "202", width: "154", height: "76", rx: "10", fill: "#16161a", stroke: "#333338", strokeWidth: "1.2", key: "r" }),
      h("text", { x: "107", y: "235", textAnchor: "middle", fill: "#ffffff", fontSize: "13", fontWeight: "600", fontFamily: "Montserrat, sans-serif", key: "t1" }, cfg.bl[0]),
      h("text", { x: "107", y: "256", textAnchor: "middle", fill: "#10b981", fontSize: "11", fontFamily: "monospace", key: "t2" }, cfg.bl[1])
    ]),
    h("g", { key: "node-center" }, [
      h("rect", { x: "240", y: "124", width: "160", height: "112", rx: "12", fill: "#1c1c22", stroke: "rgba(255,255,255,0.45)", strokeWidth: "1.5", key: "r" }),
      h("text", { x: "320", y: "162", textAnchor: "middle", fill: "#ffffff", fontSize: "15", fontWeight: "700", fontFamily: "Unbounded, sans-serif", key: "t1" }, cfg.center[0]),
      h("text", { x: "320", y: "186", textAnchor: "middle", fill: "#a1a1aa", fontSize: "11", fontFamily: "monospace", key: "t2" }, cfg.center[1]),
      h("text", { x: "320", y: "206", textAnchor: "middle", fill: "#71717a", fontSize: "11", fontFamily: "monospace", key: "t3" }, cfg.center[2])
    ]),
    h("g", { key: "node-tr" }, [
      h("rect", { x: "456", y: "82", width: "154", height: "76", rx: "10", fill: "#16161a", stroke: "#333338", strokeWidth: "1.2", key: "r" }),
      h("text", { x: "533", y: "115", textAnchor: "middle", fill: "#ffffff", fontSize: "13", fontWeight: "600", fontFamily: "Montserrat, sans-serif", key: "t1" }, cfg.tr[0]),
      h("text", { x: "533", y: "136", textAnchor: "middle", fill: "#71717a", fontSize: "11", fontFamily: "monospace", key: "t2" }, cfg.tr[1])
    ]),
    h("g", { key: "node-br" }, [
      h("rect", { x: "456", y: "202", width: "154", height: "76", rx: "10", fill: "#16161a", stroke: "#333338", strokeWidth: "1.2", key: "r" }),
      h("text", { x: "533", y: "235", textAnchor: "middle", fill: "#ffffff", fontSize: "13", fontWeight: "600", fontFamily: "Montserrat, sans-serif", key: "t1" }, cfg.br[0]),
      h("text", { x: "533", y: "256", textAnchor: "middle", fill: "#71717a", fontSize: "11", fontFamily: "monospace", key: "t2" }, cfg.br[1])
    ])
  ]);
}

function Header(props) {
  var ui = props.ui;
  var navClass = "nav-links" + (props.navOpen ? " show" : "");
  var navItems = [
    { id: "services", label: props.labels.services, icon: icons.nav_services },
    { id: "portfolio", label: props.labels.portfolio, icon: icons.nav_portfolio },
    { id: "reviews", label: props.labels.reviews, icon: icons.nav_reviews },
    { id: "contacts", label: props.labels.contact, icon: icons.nav_contacts }
  ];

  return h("header", null,
    h("div", { className: "nav" }, [
      h("a", { className: "logo", href: "#top", onClick: function (e) { props.onNavigate(e, "top"); } }, [
        h("img", { src: "./assets/images/logo-icon.svg", alt: "FlorichDev", width: "38", height: "38", key: "img" }),
        h("span", { className: "logo-text", key: "txt" }, "FlorichDev")
      ]),
      h("nav", { className: navClass, "aria-label": ui.menu }, [
        navItems.map(function (item) {
          var isActive = props.activeSection === item.id;
          return h("a", {
            href: "#" + item.id,
            key: item.id,
            className: "nav-link" + (isActive ? " active" : ""),
            onClick: function (e) { props.onNavigate(e, item.id); },
            "aria-current": isActive ? "location" : undefined
          }, [
            renderIcon(item.icon, null, "ic"),
            h("span", { key: "lb" }, item.label)
          ]);
        }),
        h("div", { className: "nav-divider", "aria-hidden": "true", key: "div" }),
        h("button", {
          className: "icon-btn" + (props.effectsOn ? " is-active" : ""),
          key: "effects",
          onClick: props.onToggleEffects,
          title: props.effectsOn ? ui.effectsOn : ui.effectsOff,
          "aria-label": props.effectsOn ? ui.effectsOn : ui.effectsOff,
          "aria-pressed": props.effectsOn
        }, [
          renderIcon(icons.settings, null, "ic"),
          h("span", { className: "mobile-only-label", key: "ml" }, props.effectsOn ? ui.effectsOn : ui.effectsOff)
        ]),
        h("button", {
          className: "lang",
          key: "lang",
          onClick: props.onLang,
          title: ui.language,
          "aria-label": ui.language
        }, [
          renderIcon(icons.translate, null, "ic"),
          h("span", { className: "lang-code", key: "lc" }, props.lang.toUpperCase())
        ]),
        h("a", {
          className: "nav-cta",
          key: "cta",
          href: TG_PERSONAL,
          target: "_blank",
          rel: "noreferrer noopener"
        }, [
          renderIcon(icons.contact_tg, null, "ic"),
          h("span", { key: "lb" }, "Telegram")
        ])
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
        h("div", { className: "tagline" }, [
          h("span", { className: "status-dot", "aria-hidden": "true", key: "dot" }),
          h("span", { key: "txt" }, props.data.hero.hello + " " + props.data.hero.name + " · " + props.data.hero.status)
        ]),
        h("h1", null, [
          h(Typewriter, { words: phrases, lang: props.lang, effectsOn: props.effectsOn }),
          h("span", { className: "pitch" }, props.data.hero.pitch)
        ]),
        h("div", { className: "hero-actions" }, [
          h("a", { className: "btn primary", href: TG_PERSONAL, target: "_blank", rel: "noreferrer noopener" }, [
            renderIcon("fa-brands fa-telegram", { marginRight: "8px" }),
            props.data.hero.ctaContact
          ]),
          h("a", { className: "btn", href: "#portfolio", onClick: function (e) { e.preventDefault(); props.onScroll("portfolio"); } }, props.data.hero.ctaPortfolio)
        ]),
        h("div", { className: "stats" },
          props.data.hero.stats.map(function (st) {
            return h("div", { className: "stat", key: st.label }, [
              h("strong", null, st.value),
              h("span", null, st.label)
            ]);
          })
        )
      ]),
      h("div", { className: "panel about-card animate-right", "data-animate": "right" }, [
        h("div", { className: "title-line" }, [
          h("h2", null, props.data.about.title),
          h("span", null, props.data.about.note)
        ]),
        h("p", { className: "text" }, props.data.about.text),
        h("div", { className: "about-footer" }, [
          h("div", { className: "about-facts" },
            props.data.about.facts.map(function (fact) {
              return h("span", { className: "about-fact", key: fact }, fact);
            })
          ),
          h("a", {
            className: "about-resume-link",
            href: HH_RESUME_URL,
            target: "_blank",
            rel: "noreferrer noopener"
          }, [
            renderIcon(icons.resume, { marginRight: "6px" }),
            props.data.about.resumeLabel
          ])
        ])
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
                  icon ? renderIcon(icon, { marginRight: "6px" }) : null,
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
        var orderHref = TG_PERSONAL + "?text=" + encodeURIComponent(props.data.ui.serviceOrderPrefix + item.title);
        return h("div", { className: "card service-card", key: item.id }, [
          item.icon ? h("div", { className: "card-icon" }, renderIcon(icons[item.icon])) : null,
          h("h3", { className: "project-title" }, item.title),
          h("p", { className: "text" }, item.desc),
          h("div", { className: "service-footer" }, [
            h("div", { className: "badge price-badge" }, item.price),
            h("a", {
              className: "service-cta",
              href: orderHref,
              target: "_blank",
              rel: "noreferrer noopener"
            }, [
              h("span", { key: "lb" }, props.data.ui.discussService),
              renderIcon(icons.forward, null, "ic")
            ])
          ])
        ]);
      })
    ),
    h("div", { className: "brief-callout" }, [
      h("p", { className: "text" }, props.data.services.briefPrompt),
      h("button", {
        type: "button",
        className: "btn primary",
        onClick: function (e) { props.onOpenBrief(e.currentTarget); }
      }, [
        renderIcon(icons.resume, { marginRight: "8px" }),
        props.data.services.briefCta
      ])
    ])
  ]);
}

function Process(props) {
  return h("section", { id: "process", className: "panel animate-right", "data-animate": "right" }, [
    h("div", { className: "title-line" }, [
      h("h2", null, props.data.process.title),
      h("span", null, props.data.process.hint)
    ]),
    h("div", { className: "process-grid" },
      props.data.process.steps.map(function (step) {
        return h("div", { className: "card process-card", key: step.num }, [
          h("div", { className: "process-num" }, step.num),
          h("h3", { className: "project-title" }, step.title),
          h("p", { className: "text" }, step.desc)
        ]);
      })
    )
  ]);
}

function Portfolio(props) {
  var filters = PORTFOLIO_FILTERS[props.lang] || PORTFOLIO_FILTERS.ru;
  var activeFilter = props.activeFilter || "all";
  var items = props.data.portfolio.list.filter(function (item) {
    if (activeFilter === "all") return true;
    return item.categories && item.categories.indexOf(activeFilter) !== -1;
  });

  return h("section", { id: "portfolio", className: "panel animate-right", "data-animate": "right" }, [
    h("div", { className: "title-line" }, [
      h("h2", null, props.data.portfolio.title),
      h("span", null, props.data.portfolio.hint)
    ]),
    h("div", { className: "nda-banner" }, [
      renderIcon(icons.shield),
      h("span", null, props.data.portfolio.ndaNote)
    ]),
    h("div", { className: "portfolio-filters", role: "tablist", "aria-label": props.data.portfolio.title },
      filters.map(function (f) {
        var count = f.id === "all"
          ? props.data.portfolio.list.length
          : props.data.portfolio.list.filter(function (it) { return it.categories && it.categories.indexOf(f.id) !== -1; }).length;
        var isActive = activeFilter === f.id;
        return h("button", {
          key: f.id,
          type: "button",
          role: "tab",
          "aria-selected": isActive,
          className: "filter-pill" + (isActive ? " active" : ""),
          onClick: function () { props.onFilterChange(f.id); }
        }, [
          h("span", { key: "l" }, f.label),
          h("span", { className: "filter-count", key: "c" }, count)
        ]);
      })
    ),
    h("div", { className: "projects-grid" },
      items.map(function (item) {
        var hasShots = item.shots && item.shots.length > 0;
        return h("div", {
          className: "card portfolio-card",
          key: item.id,
          role: "button",
          tabIndex: 0,
          "aria-label": item.name,
          onClick: function (e) { props.onOpen(item, e.currentTarget); },
          onKeyDown: function (e) {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              props.onOpen(item, e.currentTarget);
            }
          }
        }, [
          h("div", { className: "portfolio-cover" }, [
            hasShots
              ? h("img", { src: item.shots[0], alt: item.name, loading: "lazy", decoding: "async" })
              : h(ProjectArchDiagram, { itemId: item.id, lang: props.lang, suffix: "card" }),
            h("div", { className: "cover-badges" }, [
              hasShots
                ? h("span", { className: "cover-badge", key: "cnt" }, [
                    renderIcon(icons.images, { marginRight: "5px" }),
                    item.shots.length + " " + props.data.ui.photosWord
                  ])
                : h("span", { className: "cover-badge", key: "arch" }, props.data.ui.architectureBadge),
              item.githubUrl ? h("span", { className: "cover-badge cover-badge-gh", key: "gh" }, [
                renderIcon(icons.contact_gh, { marginRight: "5px" }),
                "GitHub"
              ]) : null
            ])
          ]),
          h("div", { className: "portfolio-content" }, [
            h("h3", { className: "project-title" }, item.name),
            h("p", { className: "text" }, item.desc),
            h("div", { className: "project-stack" }, item.stack),
            h("div", { className: "chip-list" },
              item.tags.map(function (tag) {
                return h("span", { className: "chip", key: tag }, tag);
              })
            ),
            h("div", { className: "divider" }),
            h("div", { className: "portfolio-footer" }, [
              h("div", { className: "badge" }, item.price),
              h("span", { className: "portfolio-open-hint" }, [
                h("span", { key: "lb" }, props.data.ui.openCase),
                renderIcon(icons.forward, null, "ic")
              ])
            ])
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

  var touchStartX = React.useRef(null);

  React.useEffect(function () {
    fetch("./assets/data/reviews.json")
      .then(function (res) { return res.json(); })
      .then(function (data) {
        if (Array.isArray(data) && data.length > 0) {
          var mapped = data.map(function (r) {
            var dateRu = r.date || r.dateRu || "";
            return {
              id: r.id,
              name: r.name,
              initials: r.initials,
              projectRu: r.project || r.projectRu,
              projectEn: r.projectEn || r.project,
              dateRu: dateRu,
              dateEn: r.dateEn || REVIEW_DATE_EN[dateRu] || dateRu,
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

  React.useEffect(function () {
    setCurrentIndex(function (prev) { return Math.min(prev, maxIndex); });
  }, [maxIndex]);

  function prevSlide() {
    setCurrentIndex(function (prev) { return Math.max(0, prev - 1); });
  }

  function nextSlide() {
    setCurrentIndex(function (prev) { return Math.min(maxIndex, prev + 1); });
  }

  function onTouchStart(e) {
    if (e.touches && e.touches.length === 1) {
      touchStartX.current = e.touches[0].clientX;
    }
  }

  function onTouchEnd(e) {
    if (touchStartX.current === null || !e.changedTouches || !e.changedTouches.length) return;
    var dx = e.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;
    if (Math.abs(dx) < 40) return;
    if (dx < 0) nextSlide();
    else prevSlide();
  }

  var gapPx = 18;
  var trackOffset = "calc(-" + currentIndex + " * ((100% - " + ((visibleCount - 1) * gapPx) + "px) / " + visibleCount + " + " + gapPx + "px))";

  return h("section", { id: "reviews", className: "panel reviews-section animate-left", "data-animate": "left" }, [
    h("div", { className: "title-line" }, [
      h("h2", null, props.data.reviews.title),
      h("span", null, props.data.reviews.hint)
    ]),
    h("div", {
      className: "reviews-carousel-wrap",
      onTouchStart: onTouchStart,
      onTouchEnd: onTouchEnd
    },
      h("div", {
        className: "reviews-track",
        style: { transform: "translateX(" + trackOffset + ")" }
      },
        reviews.map(function (rev) {
          var project = props.lang === "ru" ? rev.projectRu : rev.projectEn;
          var text = props.lang === "ru" ? rev.textRu : rev.textEn;
          var dateLabel = props.lang === "ru" ? rev.dateRu : rev.dateEn;
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
              renderIcon(icons.star, null, "s1"),
              renderIcon(icons.star, null, "s2"),
              renderIcon(icons.star, null, "s3"),
              renderIcon(icons.star, null, "s4"),
              renderIcon(icons.star, null, "s5")
            ]),
            h("p", { className: "review-text" }, text),
            h("div", { className: "review-footer" }, [
              h("a", {
                className: "review-kwork-badge",
                href: KWORK_URL,
                target: "_blank",
                rel: "noreferrer noopener"
              }, [
                renderIcon(icons.contact_kwork),
                "Kwork"
              ]),
              dateLabel ? h("span", { className: "review-date" }, dateLabel) : null
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
        }, renderIcon(icons.back)),
        h("button", {
          className: "reviews-btn",
          onClick: nextSlide,
          disabled: currentIndex >= maxIndex,
          "aria-label": props.data.reviews.nextReview
        }, renderIcon(icons.forward))
      ])
    ])
  ]);
}

function Faq(props) {
  var _open = React.useState(0);
  var openIdx = _open[0];
  var setOpenIdx = _open[1];

  return h("section", { id: "faq", className: "panel animate-right", "data-animate": "right" }, [
    h("div", { className: "title-line" }, [
      h("h2", null, props.data.faq.title),
      h("span", null, props.data.faq.hint)
    ]),
    h("div", { className: "faq-list" },
      props.data.faq.items.map(function (item, idx) {
        var isOpen = openIdx === idx;
        return h("div", { className: "faq-item" + (isOpen ? " open" : ""), key: idx }, [
          h("button", {
            type: "button",
            className: "faq-q",
            "aria-expanded": isOpen,
            onClick: function () { setOpenIdx(isOpen ? -1 : idx); }
          }, [
            h("span", { key: "t" }, item.q),
            h("span", { className: "faq-plus", "aria-hidden": "true", key: "p" }, isOpen ? "−" : "+")
          ]),
          isOpen ? h("div", { className: "faq-a" }, h("p", { className: "text" }, item.a)) : null
        ]);
      })
    )
  ]);
}

function renderContactLinks(data) {
  return [
    h("a", { className: "contact-circle", key: "tg", href: TG_PERSONAL, target: "_blank", rel: "noreferrer noopener", title: data.tg, "aria-label": data.tg }, renderIcon(icons.contact_tg)),
    h("a", { className: "contact-circle", key: "ch", href: TG_CHANNEL, target: "_blank", rel: "noreferrer noopener", title: data.tgChannel, "aria-label": data.tgChannel }, renderIcon(icons.contact_channel)),
    h("a", { className: "contact-circle", key: "gh", href: "https://github.com/florichdev", target: "_blank", rel: "noreferrer noopener", title: data.gh, "aria-label": data.gh }, renderIcon(icons.contact_gh)),
    h("a", { className: "contact-circle", key: "vk", href: "https://vk.com/florichdev", target: "_blank", rel: "noreferrer noopener", title: "VK", "aria-label": "VK" }, renderIcon(icons.contact_vk)),
    h("a", { className: "contact-circle", key: "mail", href: "mailto:" + EMAIL_ADDR, title: data.mail, "aria-label": data.mail }, renderIcon(icons.contact_mail)),
    h("a", { className: "contact-circle", key: "kw", href: KWORK_URL, target: "_blank", rel: "noreferrer noopener", title: data.kwork, "aria-label": data.kwork }, renderIcon(icons.contact_kwork))
  ];
}

function Contacts(props) {
  var copiedKey = props.copiedKey;
  return h("section", { id: "contacts", className: "panel contacts animate-left", "data-animate": "left" }, [
    h("div", { className: "contacts-head" }, [
      h("h2", null, props.data.contacts.title),
      h("p", { className: "text" }, props.data.contacts.hint)
    ]),
    h("div", { className: "contact-card" }, [
      h("div", { className: "contact-cta-row" }, [
        h("a", { className: "btn primary", href: TG_PERSONAL, target: "_blank", rel: "noreferrer noopener" }, [
          renderIcon(icons.contact_tg, { marginRight: "8px" }),
          props.data.contacts.ctaTg
        ]),
        h("a", { className: "btn", href: KWORK_URL, target: "_blank", rel: "noreferrer noopener" }, [
          renderIcon(icons.contact_kwork, { marginRight: "8px" }),
          props.data.contacts.ctaKwork
        ])
      ]),
      h("div", { className: "copy-chips" }, [
        h("button", {
          type: "button",
          className: "copy-chip" + (copiedKey === TG_HANDLE ? " is-copied" : ""),
          onClick: function () { props.onCopy(TG_HANDLE); },
          title: props.data.ui.copyHint
        }, [
          renderIcon(icons.contact_tg, null, "ic"),
          h("span", { key: "val" }, TG_HANDLE),
          renderIcon(copiedKey === TG_HANDLE ? icons.check : icons.copy, { opacity: 0.7 }, "cp")
        ]),
        h("button", {
          type: "button",
          className: "copy-chip" + (copiedKey === EMAIL_ADDR ? " is-copied" : ""),
          onClick: function () { props.onCopy(EMAIL_ADDR); },
          title: props.data.ui.copyHint
        }, [
          renderIcon(icons.contact_mail, null, "ic"),
          h("span", { key: "val" }, EMAIL_ADDR),
          renderIcon(copiedKey === EMAIL_ADDR ? icons.check : icons.copy, { opacity: 0.7 }, "cp")
        ])
      ]),
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
    h("div", null, "FlorichDev · " + new Date().getFullYear()),
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
  var touchStartX = React.useRef(null);
  var item = props.item;
  var shots = item && item.shots ? item.shots : [];
  var total = shots.length;

  React.useEffect(function () {
    if (!total || total < 2) return;
    var nextIdx = (props.index + 1) % total;
    var prevIdx = (props.index - 1 + total) % total;
    [shots[nextIdx], shots[prevIdx]].forEach(function (src) {
      if (src) {
        var img = new Image();
        img.src = src;
      }
    });
  }, [item, props.index, total]);

  if (!item) return null;
  var ui = props.ui;
  var image = total > 0 ? (shots[props.index] || shots[0]) : null;
  var title = item.name;

  function onTouchStart(e) {
    if (e.touches && e.touches.length === 1) touchStartX.current = e.touches[0].clientX;
  }

  function onTouchEnd(e) {
    if (touchStartX.current === null || !e.changedTouches || !e.changedTouches.length) return;
    var dx = e.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;
    if (Math.abs(dx) < 40 || total < 2) return;
    if (dx < 0) props.onNext();
    else props.onPrev();
  }

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
        total > 0 && image
          ? h("div", { className: "gallery-block" }, [
              h("div", { className: "gallery", onTouchStart: onTouchStart, onTouchEnd: onTouchEnd }, [
                h("img", { src: image, alt: title, decoding: "async" }),
                total > 1 ? h("div", { className: "gallery-controls" }, [
                  h("button", { className: "gallery-btn", onClick: function (e) { e.stopPropagation(); props.onPrev(); }, "aria-label": ui.prevShot },
                    renderIcon(icons.back)
                  ),
                  h("button", { className: "gallery-btn", onClick: function (e) { e.stopPropagation(); props.onNext(); }, "aria-label": ui.nextShot },
                    renderIcon(icons.forward)
                  )
                ]) : null
              ]),
              total > 1 ? h("div", { className: "gallery-thumbs" },
                shots.map(function (shot, idx) {
                  return h("button", {
                    key: shot,
                    type: "button",
                    className: "gallery-thumb" + (idx === props.index ? " active" : ""),
                    onClick: function () { props.onSelectShot(idx); },
                    "aria-label": title + " " + (idx + 1)
                  }, h("img", { src: shot, alt: "", loading: "lazy", decoding: "async" }));
                })
              ) : null
            ])
          : h("div", { className: "gallery gallery-arch" }, h(ProjectArchDiagram, { itemId: item.id, lang: props.lang, suffix: "modal" })),
        h("div", { className: "modal-meta" }, [
          (item.task || item.solution || item.result)
            ? h("div", { className: "case-breakdown" }, [
                item.task ? h("div", { className: "case-step", key: "t" }, [
                  h("span", { className: "case-step-label" }, ui.taskLabel),
                  h("p", { className: "text" }, item.task)
                ]) : null,
                item.solution ? h("div", { className: "case-step", key: "s" }, [
                  h("span", { className: "case-step-label" }, ui.solutionLabel),
                  h("p", { className: "text" }, item.solution)
                ]) : null,
                item.result ? h("div", { className: "case-step", key: "r" }, [
                  h("span", { className: "case-step-label" }, ui.resultLabel),
                  h("p", { className: "text" }, item.result)
                ]) : null
              ])
            : (item.desc ? h("p", { className: "text" }, item.desc) : null),
          item.stack ? h("div", { className: "project-stack" }, item.stack) : null,
          item.tags ? h("div", { className: "chip-list" },
            item.tags.map(function (tag) {
              return h("span", { className: "chip", key: tag }, tag);
            })
          ) : null,
          item.price ? h("div", { className: "badge-row" }, [
            h("div", { className: "badge" }, item.price)
          ]) : null
        ]),
        h("div", { className: "modal-actions" }, [
          item.githubUrl ? h("a", { className: "btn primary", href: item.githubUrl, target: "_blank", rel: "noreferrer noopener" }, [
            renderIcon("fa-brands fa-github", { marginRight: "8px" }),
            "GitHub Code"
          ]) : null,
          item.demoUrl ? h("a", { className: "btn" + (item.githubUrl ? "" : " primary"), href: item.demoUrl, target: "_blank", rel: "noreferrer noopener" }, [
            renderIcon("fa-solid fa-arrow-up-right-from-square", { marginRight: "8px" }),
            item.id === "happs" ? ui.openBot : ui.discussCase
          ]) : null,
          h("a", { className: "btn", href: TG_PERSONAL, target: "_blank", rel: "noreferrer noopener" }, ui.contact),
          h("button", { className: "btn", onClick: props.onClose }, ui.close)
        ])
      ])
    ])
  );
}

function trapModalFocus(e, containerEl) {
  if (e.key !== "Tab" || !containerEl) return;
  var focusable = containerEl.querySelectorAll("a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex='-1'])");
  if (!focusable.length) return;
  var first = focusable[0];
  var last = focusable[focusable.length - 1];
  if (e.shiftKey) {
    if (document.activeElement === first || document.activeElement === containerEl) {
      e.preventDefault();
      last.focus();
    }
  } else {
    if (document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  }
}

function BriefModal(props) {
  var brief = props.brief;
  var lang = props.lang;
  var _type = React.useState(brief.types[0].id);
  var typeId = _type[0];
  var setTypeId = _type[1];
  var _mods = React.useState([]);
  var modIds = _mods[0];
  var setModIds = _mods[1];
  var _speed = React.useState("normal");
  var speedId = _speed[0];
  var setSpeedId = _speed[1];
  var _note = React.useState("");
  var note = _note[0];
  var setNote = _note[1];

  if (!props.open) return null;

  var selectedType = brief.types.filter(function (t) { return t.id === typeId; })[0] || brief.types[0];
  var selectedMods = brief.modules.filter(function (m) { return modIds.indexOf(m.id) !== -1; });
  var selectedSpeed = brief.speeds.filter(function (s) { return s.id === speedId; })[0] || brief.speeds[1];

  var totalRub = selectedType.rub;
  var totalUsd = selectedType.usd;
  var minDays = selectedType.days[0];
  var maxDays = selectedType.days[1];
  selectedMods.forEach(function (m) {
    totalRub += m.rub;
    totalUsd += m.usd;
    minDays += m.days;
    maxDays += m.days;
  });
  var estimateText = lang === "ru"
    ? "от " + totalRub.toLocaleString("ru-RU") + " ₽ · ~" + minDays + "–" + maxDays + " " + brief.daysUnit
    : "from $" + totalUsd + " · ~" + minDays + "–" + maxDays + " " + brief.daysUnit;

  function toggleMod(id) {
    setModIds(function (prev) {
      return prev.indexOf(id) !== -1
        ? prev.filter(function (x) { return x !== id; })
        : prev.concat([id]);
    });
  }

  var lines = lang === "ru"
    ? [
        "Здравствуйте! Собрал краткий бриф с сайта FlorichDev:",
        "• Тип проекта: " + selectedType.label,
        selectedMods.length ? "• Модули: " + selectedMods.map(function (m) { return m.label; }).join(", ") : null,
        "• Сроки: " + selectedSpeed.label,
        note.trim() ? "• Комментарий: " + note.trim() : null
      ]
    : [
        "Hi! Quick project brief from FlorichDev:",
        "• Project type: " + selectedType.label,
        selectedMods.length ? "• Modules: " + selectedMods.map(function (m) { return m.label; }).join(", ") : null,
        "• Timeline: " + selectedSpeed.label,
        note.trim() ? "• Details: " + note.trim() : null
      ];
  var message = lines.filter(Boolean).join("\n");
  var tgHref = TG_PERSONAL + "?text=" + encodeURIComponent(message);

  return h("div", { className: "modal-backdrop", onClick: props.onClose, role: "presentation" },
    h("div", {
      className: "modal brief-modal",
      role: "dialog",
      "aria-modal": "true",
      "aria-labelledby": "brief-title",
      tabIndex: -1,
      onClick: function (e) { e.stopPropagation(); },
      ref: props.modalRef
    }, [
      h("div", { className: "modal-head" }, [
        h("div", { className: "modal-title", id: "brief-title" }, brief.title),
        h("button", { className: "modal-close", onClick: props.onClose, "aria-label": props.ui.close }, "✕")
      ]),
      h("div", { className: "modal-body" }, [
        h("p", { className: "text brief-sub" }, brief.subtitle),
        h("div", { className: "brief-group" }, [
          h("label", { className: "brief-label" }, brief.typeLabel),
          h("div", { className: "brief-pills" },
            brief.types.map(function (t) {
              return h("button", {
                key: t.id,
                type: "button",
                className: "filter-pill" + (t.id === typeId ? " active" : ""),
                onClick: function () { setTypeId(t.id); }
              }, t.label);
            })
          )
        ]),
        h("div", { className: "brief-group" }, [
          h("label", { className: "brief-label" }, brief.modulesLabel),
          h("div", { className: "brief-pills" },
            brief.modules.map(function (m) {
              var active = modIds.indexOf(m.id) !== -1;
              return h("button", {
                key: m.id,
                type: "button",
                className: "filter-pill" + (active ? " active" : ""),
                onClick: function () { toggleMod(m.id); }
              }, m.label);
            })
          )
        ]),
        h("div", { className: "brief-group" }, [
          h("label", { className: "brief-label" }, brief.speedLabel),
          h("div", { className: "brief-pills" },
            brief.speeds.map(function (s) {
              return h("button", {
                key: s.id,
                type: "button",
                className: "filter-pill" + (s.id === speedId ? " active" : ""),
                onClick: function () { setSpeedId(s.id); }
              }, s.label);
            })
          )
        ]),
        h("div", { className: "brief-group" }, [
          h("label", { className: "brief-label", htmlFor: "brief-note" }, brief.noteLabel),
          h("textarea", {
            id: "brief-note",
            className: "brief-textarea",
            rows: 3,
            value: note,
            placeholder: brief.notePlaceholder,
            onChange: function (e) { setNote(e.target.value); }
          })
        ]),
        h("div", { className: "brief-estimate" }, [
          h("span", { className: "brief-estimate-label" }, brief.estimateLabel),
          h("strong", { className: "brief-estimate-val" }, estimateText)
        ]),
        h("div", { className: "modal-actions" }, [
          h("a", { className: "btn primary", href: tgHref, target: "_blank", rel: "noreferrer noopener" }, [
            renderIcon(icons.contact_tg, { marginRight: "8px" }),
            brief.sendTg
          ]),
          h("button", {
            type: "button",
            className: "btn",
            onClick: function () { props.onCopy(message, brief.copiedNotice); }
          }, [
            renderIcon(icons.copy, { marginRight: "8px" }),
            brief.copyBrief
          ]),
          h("button", { type: "button", className: "btn", onClick: props.onClose }, props.ui.close)
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
  var _effects = React.useState(detectEffects);
  var effectsOn = _effects[0];
  var setEffectsOn = _effects[1];
  var _activeSec = React.useState("top");
  var activeSection = _activeSec[0];
  var setActiveSection = _activeSec[1];
  var _filter = React.useState("all");
  var activeFilter = _filter[0];
  var setActiveFilter = _filter[1];
  var _toast = React.useState(null);
  var toastMsg = _toast[0];
  var setToastMsg = _toast[1];
  var _copied = React.useState(null);
  var copiedKey = _copied[0];
  var setCopiedKey = _copied[1];
  var _brief = React.useState(false);
  var briefOpen = _brief[0];
  var setBriefOpen = _brief[1];
  var modalRef = React.useRef(null);
  var briefRef = React.useRef(null);
  var lastTriggerRef = React.useRef(null);
  var toastTimerRef = React.useRef(null);

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
            if (el) {
              el.classList.add("visible");
              el.scrollIntoView({ behavior: "auto", block: "start" });
            }
          }, 50);
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
    var descMeta = document.querySelector('meta[name="description"]');
    if (descMeta && texts[lang] && texts[lang].metaDesc) {
      descMeta.setAttribute("content", texts[lang].metaDesc);
    }
  }, [lang]);

  React.useEffect(function () {
    var hash = window.location.hash.replace("#", "");
    if (!hash || hash === "top") return;
    var timer = setTimeout(function () {
      var el = document.getElementById(hash);
      if (el) {
        el.classList.add("visible");
        el.scrollIntoView({ behavior: "auto", block: "start" });
      }
    }, 50);
    return function () { clearTimeout(timer); };
  }, []);

  React.useEffect(function () {
    var sectionIds = ["services", "portfolio", "reviews", "contacts"];
    var handler = function () {
      var sy = window.scrollY;
      setShowTop(sy > 240);
      var current = "top";
      var offset = 180;
      for (var i = 0; i < sectionIds.length; i++) {
        var el = document.getElementById(sectionIds[i]);
        if (el && el.getBoundingClientRect().top <= offset) {
          current = sectionIds[i];
        }
      }
      if (window.innerHeight + sy >= document.documentElement.scrollHeight - 40) {
        current = "contacts";
      }
      setActiveSection(current);
    };
    handler();
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
    var anyModal = !!modalItem || briefOpen;
    document.body.classList.toggle("modal-open", anyModal);
    if (modalItem && modalRef.current) {
      modalRef.current.focus();
    } else if (briefOpen && briefRef.current) {
      briefRef.current.focus();
    } else if (!anyModal && lastTriggerRef.current) {
      try { lastTriggerRef.current.focus(); } catch (e) {}
      lastTriggerRef.current = null;
    }
  }, [modalItem, briefOpen]);

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
        setBriefOpen(false);
        setNavOpen(false);
        return;
      }
      if (e.key === "Tab") {
        if (modalItem && modalRef.current) {
          trapModalFocus(e, modalRef.current);
        } else if (briefOpen && briefRef.current) {
          trapModalFocus(e, briefRef.current);
        }
        return;
      }
      if (!modalItem || !modalItem.shots || modalItem.shots.length < 2) return;
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
  }, [modalItem, briefOpen]);

  React.useEffect(function () {
    function onResize() {
      if (window.innerWidth > 900) setNavOpen(false);
    }
    window.addEventListener("resize", onResize);
    return function () { window.removeEventListener("resize", onResize); };
  }, []);

  React.useEffect(function () {
    var els = document.querySelectorAll("[data-animate]");
    if (!effectsOn || typeof IntersectionObserver === "undefined") {
      els.forEach(function (el) { el.classList.add("visible"); });
      return undefined;
    }
    var revealVisible = function () {
      var vh = window.innerHeight || 800;
      els.forEach(function (el) {
        var r = el.getBoundingClientRect();
        if (r.top < vh + 80 && r.bottom > -80) {
          el.classList.add("visible");
        }
      });
    };
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.01, rootMargin: "80px 0px 80px 0px" });
    els.forEach(function (el) { observer.observe(el); });
    revealVisible();
    var t = setTimeout(revealVisible, 120);
    return function () {
      clearTimeout(t);
      observer.disconnect();
    };
  }, [effectsOn, lang]);

  React.useEffect(function () {
    document.body.classList.toggle("animations-off", !effectsOn);
    try { localStorage.setItem(EFFECTS_KEY, effectsOn ? "1" : "0"); } catch (e) {}
  }, [effectsOn]);

  React.useEffect(function () {
    if (!effectsOn || IS_TOUCH) return undefined;
    var cards = document.querySelectorAll(".hero-card, .about-card, .stack-card, .service-card, .process-card, .portfolio-card, .review-card");

    function handlePointerMove(e) {
      var card = this;
      var clientX = e.clientX;
      var clientY = e.clientY;
      if (card._tiltRaf) cancelAnimationFrame(card._tiltRaf);
      card._tiltRaf = requestAnimationFrame(function () {
        card._tiltRaf = null;
        var rect = card.getBoundingClientRect();
        if (!rect.width || !rect.height) return;
        var x = clientX - rect.left;
        var y = clientY - rect.top;
        var cx = rect.width / 2;
        var cy = rect.height / 2;
        var maxTilt = rect.width > 500 ? 3.5 : 6;
        var rotX = -((y - cy) / cy) * maxTilt;
        var rotY = ((x - cx) / cx) * maxTilt;
        var glareX = (x / rect.width) * 100;
        var glareY = (y / rect.height) * 100;
        card.style.transform = "perspective(900px) rotateX(" + rotX.toFixed(2) + "deg) rotateY(" + rotY.toFixed(2) + "deg) translateZ(4px)";
        card.style.setProperty("--glare-x", glareX.toFixed(1) + "%");
        card.style.setProperty("--glare-y", glareY.toFixed(1) + "%");
        card.style.setProperty("--glare-opacity", "1");
      });
    }

    function handlePointerLeave() {
      if (this._tiltRaf) {
        cancelAnimationFrame(this._tiltRaf);
        this._tiltRaf = null;
      }
      this.style.transform = "";
      this.style.setProperty("--glare-opacity", "0");
    }

    cards.forEach(function (card) {
      card.addEventListener("pointermove", handlePointerMove);
      card.addEventListener("pointerleave", handlePointerLeave);
    });

    return function () {
      cards.forEach(function (card) {
        if (card._tiltRaf) {
          cancelAnimationFrame(card._tiltRaf);
          card._tiltRaf = null;
        }
        card.removeEventListener("pointermove", handlePointerMove);
        card.removeEventListener("pointerleave", handlePointerLeave);
        card.style.transform = "";
        card.style.removeProperty("--glare-opacity");
      });
    };
  }, [effectsOn, lang, activeFilter]);

  var data = React.useMemo(function () { return getData(lang); }, [lang]);
  var behavior = scrollBehavior(effectsOn);

  function scrollToSection(section) {
    var el = document.getElementById(section);
    if (el) {
      el.classList.add("visible");
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

  function handleOpenModal(item, triggerEl) {
    lastTriggerRef.current = triggerEl || document.activeElement;
    setModalItem(item);
    setShotIndex(0);
  }

  function handleOpenBrief(triggerEl) {
    lastTriggerRef.current = triggerEl || document.activeElement;
    setBriefOpen(true);
  }

  function handleCopy(text, customToast) {
    function onDone() {
      setCopiedKey(text);
      setToastMsg(customToast || (data.ui.copied + text));
      if (toastTimerRef.current) clearTimeout(toastTimerRef.current);
      toastTimerRef.current = setTimeout(function () {
        setToastMsg(null);
        setCopiedKey(null);
      }, 2200);
    }
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(onDone).catch(function () {
        fallbackCopy(text, onDone);
      });
    } else {
      fallbackCopy(text, onDone);
    }
  }

  function fallbackCopy(text, cb) {
    try {
      var ta = document.createElement("textarea");
      ta.value = text;
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
      cb();
    } catch (e) {}
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
      lang: lang,
      activeSection: activeSection,
      navOpen: navOpen,
      effectsOn: effectsOn,
      onBurger: function () { setNavOpen(!navOpen); },
      onNavigate: handleNavigate,
      onLang: handleLang,
      onToggleEffects: function () { setEffectsOn(!effectsOn); }
    }),
    h("main", { className: "shell", id: "main" }, [
      h(Hero, { key: "hero", data: data, lang: lang, effectsOn: effectsOn, onScroll: scrollToSection }),
      h(Services, { key: "services", data: data, onOpenBrief: handleOpenBrief }),
      h(Process, { key: "process", data: data }),
      h(Portfolio, {
        key: "portfolio",
        data: data,
        lang: lang,
        activeFilter: activeFilter,
        onFilterChange: setActiveFilter,
        onOpen: handleOpenModal
      }),
      h(Reviews, { key: "reviews", data: data, lang: lang }),
      h(Faq, { key: "faq", data: data }),
      h(Contacts, { key: "contacts", data: data, copiedKey: copiedKey, onCopy: handleCopy })
    ]),
    h(Footer, { key: "footer", data: data }),
    h(BackToTop, { key: "backtotop", show: showTop, label: data.ui.backToTop, onClick: function () {
      window.scrollTo({ top: 0, behavior: behavior });
      if (IS_HTTP) window.history.replaceState(null, "", "#top");
    } }),
    toastMsg ? h("div", { className: "toast", role: "status", "aria-live": "polite", key: "toast" }, [
      renderIcon(icons.check, { color: "var(--accent-green)", marginRight: "8px" }),
      toastMsg
    ]) : null,
    briefOpen ? h(BriefModal, {
      key: "brief",
      open: briefOpen,
      lang: lang,
      brief: data.brief,
      ui: data.ui,
      modalRef: briefRef,
      onCopy: handleCopy,
      onClose: function () { setBriefOpen(false); }
    }) : null,
    modalItem ? h(Modal, {
      key: "modal",
      item: modalItem,
      index: shotIndex,
      lang: lang,
      ui: data.ui,
      modalRef: modalRef,
      onClose: function () { setModalItem(null); },
      onPrev: handlePrevShot,
      onNext: handleNextShot,
      onSelectShot: setShotIndex
    }) : null
  ]);
}

var root = ReactDOM.createRoot(document.getElementById("root"));
root.render(h(App));
