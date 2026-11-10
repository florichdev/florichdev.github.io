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
  nav_contacts: "fa-solid fa-paper-plane",
  translate: "fa-solid fa-language",
  settings: "fa-solid fa-wand-magic-sparkles"
};

var techIcons = {
  "HTML5": "fa-brands fa-html5",
  "CSS3": "fa-brands fa-css3-alt",
  "Tailwind CSS": "fa-solid fa-wind",
  "JavaScript": "fa-brands fa-js",
  "TypeScript": "fa-solid fa-code",
  "React": "fa-brands fa-react",
  "Vite": "fa-solid fa-bolt",
  "Next.js": "fa-solid fa-n",
  "Python": "fa-brands fa-python",
  "Node.js": "fa-brands fa-node-js",
  "PHP": "fa-brands fa-php",
  "Django": "fa-solid fa-d",
  "FastAPI": "fa-solid fa-rocket",
  "Flask": "fa-solid fa-flask",
  "Asyncio": "fa-solid fa-bolt",
  "aiogram": "fa-brands fa-telegram",
  "MySQL": "fa-solid fa-database",
  "PostgreSQL": "fa-solid fa-database",
  "SQLite": "fa-solid fa-database",
  "Redis": "fa-solid fa-database",
  "Docker": "fa-brands fa-docker",
  "Git": "fa-brands fa-git-alt",
  "Nginx": "fa-solid fa-server",
  "Figma": "fa-brands fa-figma"
};

var TG_PERSONAL = "https://t.me/vflorich";
var TG_CHANNEL = "https://t.me/florichdev";
var LANG_KEY = "florichdev-lang";
var IS_HTTP = typeof window !== "undefined" && window.location && /^https?:$/.test(window.location.protocol);
var IS_TOUCH = typeof window !== "undefined" && window.matchMedia && window.matchMedia("(hover: none), (pointer: coarse)").matches;
var TRAIL_SETTINGS = { inactivityTimeout: 4500 };

var TECH_CHIPS = [
  "Python", "FastAPI", "Asyncio", "aiogram", "PostgreSQL", "SQLite", "Redis",
  "Docker", "Nginx", "Git", "Flask", "TypeScript", "React", "Node.js", "Tailwind CSS", "HTML5", "CSS3"
];

var serviceItems = [
  {
    id: "tg-bots", icon: "bot",
    ru: { title: "Telegram-боты под ключ", desc: "Автоворонки, прием оплат (Crypto, ЮKassa, Stripe), FSM, платные подписки, реферальные системы и админ-панели под ключ.", price: "от 10 000 ₽" },
    en: { title: "Telegram Bots Turnkey", desc: "Sales funnels, payment gateways (Crypto, Stripe), FSM, subscriptions, referral engines, and custom admin dashboards.", price: "from $150" }
  },
  {
    id: "tg-miniapps", icon: "web",
    ru: { title: "Telegram Mini Apps (Web)", desc: "Интерактивные веб-приложения внутри Telegram на React/TS: каталоги товаров, корзины, личные кабинеты и бронирование.", price: "от 15 000 ₽" },
    en: { title: "Telegram Mini Apps", desc: "Rich web applications inside Telegram (React/TS): e-commerce catalogs, carts, member portals, and booking systems.", price: "from $200" }
  },
  {
    id: "api", icon: "api",
    ru: { title: "REST API & Бэкенд", desc: "Высокопроизводительные серверные сервисы на FastAPI / Flask. Авторизация (JWT, OAuth2), фоновые задачи, валидация и кэш.", price: "от 15 000 ₽" },
    en: { title: "REST API & Backend", desc: "Scalable backend services using FastAPI / Flask. Authentication (JWT, OAuth2), background queues, and caching.", price: "from $200" }
  },
  {
    id: "parsing", icon: "web",
    ru: { title: "Парсинг & Автоматизация", desc: "Отказоустойчивый сбор данных с сайтов и маркетплейсов, обход антибот-систем, экспорт в Excel / Google Sheets / БД.", price: "от 8 000 ₽" },
    en: { title: "Scraping & Automation", desc: "Resilient data scraping systems, anti-blocking measures, background task queues, and DB/Excel exports.", price: "from $120" }
  },
  {
    id: "databases", icon: "api",
    ru: { title: "Базы данных & Оптимизация", desc: "Проектирование архитектуры БД (PostgreSQL, SQLite, Redis), миграции Alembic, оптимизация запросов и кэширование.", price: "от 10 000 ₽" },
    en: { title: "Databases & Optimization", desc: "Database schema design (PostgreSQL, SQLite), Alembic migrations, Redis caching, and query optimization.", price: "from $150" }
  },
  {
    id: "integrations", icon: "api",
    ru: { title: "Интеграции & Платежи", desc: "Связка внешних API, платежных систем (Crypto, ЮKassa, Stripe), CRM и сторонних сервисов с защитой от сбоев.", price: "от 8 000 ₽" },
    en: { title: "Integrations & Payments", desc: "Connecting 3rd-party APIs, payment gateways (Crypto, Stripe), CRMs, and fail-safe webhook pipelines.", price: "from $120" }
  }
];

var portfolioItems = [
  {
    id: "standoff2-market", icon: "bot",
    stack: "Python · FastAPI · Aiogram 3 · PostgreSQL · SQLAlchemy 2.0 · Docker · Pytest",
    tags: ["P2P Market", "FastAPI Hub", "Telegram Stars", "Clean Architecture"],
    demoUrl: "https://t.me/vflorich?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%20%D0%98%D0%BD%D1%82%D0%B5%D1%80%D0%B5%D1%81%D1%83%D0%B5%D1%82%20Standoff%202%20Market%20Hub",
    githubUrl: "https://github.com/florichdev/standoff2-sticker-market",
    shots: [
      "./assets/images/portfolio/secretvapeshop/04-web-auth.png",
      "./assets/images/portfolio/secretvapeshop/05-web-main.png"
    ],
    ru: {
      name: "Standoff 2 Sticker Market & Hub",
      desc: "P2P-платформа обмена игровыми скинами с анонимным чатом сделок, монетизацией через Telegram Stars, веб-админкой на FastAPI и 65 тестами Pytest.",
      price: "Архитектурный кейс"
    },
    en: {
      name: "Standoff 2 Sticker Market & Hub",
      desc: "High-performance P2P trading platform with anonymous deal chat, Telegram Stars monetization, FastAPI hub, and 65 automated Pytest tests.",
      price: "Architecture case"
    }
  },
  {
    id: "secret-vape", icon: "bot",
    stack: "Python · Aiogram 3 · SQLAlchemy · Flask · SQLite",
    tags: ["E-commerce", "Admin Panel", "Payments"],
    demoUrl: "https://t.me/vflorich?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%20%D0%A5%D0%BE%D1%87%D1%83%20%D1%83%D0%B7%D0%BD%D0%B0%D1%82%D1%8C%20%D0%BF%D0%BE%D0%B4%D1%80%D0%BE%D0%B1%D0%BD%D0%B5%D0%B5%20%D0%BE%20%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D0%B5%20Ecommerce%20Platform",
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
      name: "Telegram E-Commerce & Admin Platform",
      desc: "Telegram e-commerce магазин с Flask-бэкендом и админ-панелью. Проектирование схемы БД, транзакции заказов, вебхуки оплат и ролевой доступ.",
      price: "Коммерческий кейс"
    },
    en: {
      name: "Telegram E-Commerce & Admin Platform",
      desc: "Telegram e-commerce store with Flask backend & web admin dashboard. Database architecture, order transactions, payment webhooks, and RBAC.",
      price: "Commercial case"
    }
  },
  {
    id: "cryptopay", icon: "web",
    stack: "Python · Flask · Aiogram · Solana · SQLite",
    tags: ["Crypto", "Web App", "Payments"],
    demoUrl: "https://t.me/vflorich?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%20%D0%A5%D0%BE%D1%87%D1%83%20%D1%83%D0%B7%D0%BD%D0%B0%D1%82%D1%8C%20%D0%BF%D0%BE%D0%B4%D1%80%D0%BE%D0%B1%D0%BD%D0%B5%D0%B5%20%D0%BE%20%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D0%B5%20CryptoPay",
    shots: [
      "./assets/images/portfolio/cryptopay/web1.png",
      "./assets/images/portfolio/cryptopay/web2.png",
      "./assets/images/portfolio/cryptopay/tg1.png",
      "./assets/images/portfolio/cryptopay/tg2.png"
    ],
    ru: {
      name: "CryptoPay",
      desc: "Шлюз криптовалютных платежей с Telegram-ботом. Архитектура обработки транзакций Solana, расчет комиссий, вебхуки и защита от повторных списаний.",
      price: "Коммерческий кейс"
    },
    en: {
      name: "CryptoPay",
      desc: "Crypto payment gateway with Telegram bot. Solana transaction processing architecture, fee calculation, webhooks, and idempotency protection.",
      price: "Commercial case"
    }
  },
  {
    id: "happs", icon: "bot",
    stack: "Python · Aiogram · SQLite · Flask · PDF",
    tags: ["Health", "Booking", "Admin"],
    demoUrl: "https://t.me/happshealthbot",
    shots: [
      "./assets/images/portfolio/@happshealthbot/tg1.png",
      "./assets/images/portfolio/@happshealthbot/tg2.png",
      "./assets/images/portfolio/@happshealthbot/tg3.png"
    ],
    ru: {
      name: "@happshealthbot",
      desc: "Wellness-бот в Telegram: алгоритм генерации сравнительных отчетов, интеграция фоновой генерации PDF и асинхронное хранение медиаданных.",
      price: "Коммерческий кейс"
    },
    en: {
      name: "@happshealthbot",
      desc: "Telegram wellness service: progress comparison report engine, asynchronous PDF rendering pipeline, and media file management.",
      price: "Commercial case"
    }
  },
  {
    id: "botsmax", icon: "bot",
    stack: "Python · MAX API · Flask · SQLite",
    tags: ["MAX", "Admin", "Giveaways"],
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
      desc: "Отказоустойчивая система из двух ботов для MAX с Flask-бэкендом: параллельная обработка запросов, фоновые загрузки видео и админ-панель.",
      price: "Коммерческий кейс"
    },
    en: {
      name: "Randomizer & Saver",
      desc: "Resilient system of two MAX messenger bots with Flask backend: concurrent request handling, background video processing, and admin dashboard.",
      price: "Commercial case"
    }
  },
  {
    id: "botstaro", icon: "bot",
    stack: "Python · MAX API · Telegram API · Flask · SQLite",
    tags: ["MAX", "Telegram", "Integration"],
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
      desc: "Кросс-платформенный сервис (MAX + Telegram) с централизованным Flask API и единой базой данных. Управление сессиями и контентом.",
      price: "Коммерческий кейс"
    },
    en: {
      name: "Tarot Bot",
      desc: "Cross-platform service (MAX + Telegram) powered by a centralized Flask API and unified database. Session and content management.",
      price: "Commercial case"
    }
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

const texts = {
  ru: {
    ui: {
      effectsOn: "Выключить эффекты",
      effectsOff: "Включить эффекты",
      effects: "Эффекты",
      language: "Сменить язык",
      menu: "Меню",
      backToTop: "Наверх",
      close: "Закрыть",
      contact: "Связаться",
      openBot: "Запустить бота",
      discussCase: "Заказать похожий",
      prevShot: "Предыдущее фото",
      nextShot: "Следующее фото",
      workingHours: "График работы: 8:00 – 22:00 (МСК)",
      skipLink: "К основному содержимому"
    },
    nav: { services: "Услуги", portfolio: "Портфолио", contact: "Контакты" },
    hero: {
      hello: "Привет, я",
      name: "Вадим",
      role: "Python Backend & Telegram Bot Developer",
      pitch: "Telegram-боты, Mini Apps, надежные REST API и парсеры под ключ для бизнеса",
      ctaTelegram: "Написать в Telegram",
      ctaPortfolio: "Смотреть кейсы",
      exp: "15+ проектов",
      speed: "100% сдача в срок",
      full: "Под ключ",
      fullDesc: "Бот + Админка + Деплой"
    },
    about: {
      title: "Обо мне",
      note: "",
      text: "Создаю отказоустойчивые Telegram-боты, Mini Apps и бэкенд-системы на Python (FastAPI, Asyncio, aiogram 3). 15+ коммерческих проектов в продакшене с безупречной статистикой: 100% сдача в срок и рейтинг 5.0. Проектирую чистую архитектуру, подключаю платежи (Crypto, ЮKassa, Stripe), настраиваю базы данных (PostgreSQL, Redis) и деплой на VPS в Docker. Благодаря уверенному владению React и TypeScript создаю комплексные решения с современными веб-админками."
    },
    services: { title: "Услуги", hint: "Что я предлагаю бизнесу" },
    portfolio: { title: "Портфолио", hint: "Реализованные кейсы в проде" },
    contacts: {
      title: "Контакты",
      hint: "Обсудим вашу задачу",
      tg: "Telegram",
      tgChannel: "Канал",
      gh: "GitHub",
      mail: "Почта",
      kwork: "Kwork",
      prompt: "Открыт к новым проектам и сотрудничеству"
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
    nav: { services: "Services", portfolio: "Portfolio", contact: "Contacts" },
    hero: {
      hello: "Hi, I'm",
      name: "Vadim",
      role: "Python Backend & Telegram Bot Developer",
      pitch: "High-performance Telegram bots, Mini Apps, scalable REST APIs & automation pipelines",
      ctaTelegram: "Chat in Telegram",
      ctaPortfolio: "View Cases",
      exp: "15+ projects",
      speed: "100% on-time delivery",
      full: "Turnkey delivery",
      fullDesc: "Bot + Admin Panel + Deploy"
    },
    about: {
      title: "About me",
      note: "",
      text: "I build reliable Telegram bots, Mini Apps, and backend systems on Python (FastAPI, Asyncio, aiogram 3). 15+ commercial projects launched in production with a flawless track record: 100% on-time delivery and a 5.0 client rating. I architect clean code, integrate payment gateways (Crypto, Stripe), optimize databases (PostgreSQL, Redis), and deploy containerized apps on Linux VPS via Docker."
    },
    services: { title: "Services", hint: "What I offer" },
    portfolio: { title: "Portfolio", hint: "Production cases" },
    contacts: {
      title: "Contacts",
      hint: "Let's build something great",
      tg: "Telegram",
      tgChannel: "Channel",
      gh: "GitHub",
      mail: "Email",
      kwork: "Kwork",
      prompt: "Open to new projects and collaboration"
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
    about: Object.assign({}, base.about, { chips: TECH_CHIPS }),
    services: Object.assign({}, base.services, { list: mapLocalized(serviceItems, lang) }),
    portfolio: Object.assign({}, base.portfolio, { list: mapLocalized(portfolioItems, lang) }),
    contacts: base.contacts,
    footer: base.footer
  };
}

const h = React.createElement;

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
  return h("section", { className: "hero", id: "top" }, [
    h("div", { className: "hero-card animate-left", "data-animate": "left" }, [
      h("div", { className: "tagline" }, props.data.hero.hello + " " + props.data.hero.name),
      h("h1", null, [
        props.data.hero.role,
        h("br"),
        h("span", null, props.data.hero.pitch)
      ]),
      h("div", { className: "hero-actions" }, [
        h("a", { className: "btn primary", href: TG_PERSONAL, target: "_blank", rel: "noreferrer noopener" }, [
          h("i", { className: "fa-brands fa-telegram", style: { marginRight: "8px" }, "aria-hidden": "true" }),
          props.data.hero.ctaTelegram
        ]),
        h("a", { className: "btn", href: "#portfolio", onClick: function (e) { e.preventDefault(); props.onScroll("portfolio"); } }, props.data.hero.ctaPortfolio)
      ]),
      h("div", { className: "stats" }, [
        h("div", { className: "stat" }, [
          h("strong", null, props.data.hero.exp),
          h("span", null, props.data.hero.speed)
        ]),
        h("div", { className: "stat" }, [
          h("strong", null, props.data.hero.full),
          h("span", null, props.data.hero.fullDesc)
        ])
      ])
    ]),
    h("div", { className: "panel floating animate-right", "data-animate": "right" }, [
      h("div", { className: "title-line" }, [
        h("h2", null, props.data.about.title),
        h("span", null, props.data.about.note)
      ]),
      h("p", { className: "text" }, props.data.about.text),
      h("div", { className: "badge-row" },
        props.data.about.chips.map(function (item) {
          return h("div", { className: "badge", key: item }, [
            techIcons[item] ? h("i", { className: techIcons[item], style: { marginRight: "6px" }, "aria-hidden": "true" }) : null,
            item
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

function renderContactLinks(data) {
  return [
    h("a", { className: "contact-circle", href: TG_PERSONAL, target: "_blank", rel: "noreferrer noopener", title: data.tg, "aria-label": data.tg }, h("i", { className: icons.contact_tg, "aria-hidden": "true" })),
    h("a", { className: "contact-circle", href: TG_CHANNEL, target: "_blank", rel: "noreferrer noopener", title: data.tgChannel, "aria-label": data.tgChannel }, h("i", { className: icons.contact_channel, "aria-hidden": "true" })),
    h("a", { className: "contact-circle", href: "https://github.com/florichdev", target: "_blank", rel: "noreferrer noopener", title: data.gh, "aria-label": data.gh }, h("i", { className: icons.contact_gh, "aria-hidden": "true" })),
    h("a", { className: "contact-circle", href: "https://vk.com/florichdev", target: "_blank", rel: "noreferrer noopener", title: "VK", "aria-label": "VK" }, h("i", { className: icons.contact_vk, "aria-hidden": "true" })),
    h("a", { className: "contact-circle", href: "mailto:florichdev@gmail.com", title: data.mail, "aria-label": data.mail }, h("i", { className: icons.contact_mail, "aria-hidden": "true" })),
    h("a", { className: "contact-circle", href: "https://kwork.ru/user/florichdev", target: "_blank", rel: "noreferrer noopener", title: data.kwork, "aria-label": data.kwork }, h("i", { className: icons.contact_kwork, "aria-hidden": "true" }))
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
  if (!props.item) return null;
  var ui = props.ui;
  var shots = props.item.shots || [];
  var image = shots[props.index] || shots[0];
  var title = props.item.name;
  var total = shots.length;
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
        h("div", { className: "gallery" }, [
          h("img", { src: image, alt: title, loading: "lazy", decoding: "async" }),
          total > 1 ? h("div", { className: "gallery-controls" }, [
            h("button", { className: "gallery-btn", onClick: function (e) { e.stopPropagation(); props.onPrev(); }, "aria-label": ui.prevShot },
              h("i", { className: icons.back, "aria-hidden": "true" })
            ),
            h("button", { className: "gallery-btn", onClick: function (e) { e.stopPropagation(); props.onNext(); }, "aria-label": ui.nextShot },
              h("i", { className: icons.forward, "aria-hidden": "true" })
            )
          ]) : null
        ]),
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

  // Восстанавливаем URL после SPA-редиректа через 404.html
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
    if (!effectsOn || IS_TOUCH) return undefined;
    var dot = document.querySelector(".cursor-dot");
    if (!dot) return undefined;
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
      // Пропускаем кадры в скрытой вкладке для экономии батареи
      if (document.visibilityState === "hidden") return;
      if (timestamp - lastFrameTime < frameInterval) return;
      lastFrameTime = timestamp;
      ctx.fillStyle = "rgba(10, 10, 15, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "rgba(215, 38, 61, 0.5)";
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
      if (window.innerWidth > 720) setNavOpen(false);
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
    if (!modalItem || !modalItem.shots) return;
    setShotIndex(function (prev) {
      return prev === 0 ? modalItem.shots.length - 1 : prev - 1;
    });
  }

  function handleNextShot() {
    if (!modalItem || !modalItem.shots) return;
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
      h(Hero, { key: "hero", data: data, onScroll: scrollToSection }),
      h(Services, { key: "services", data: data }),
      h(Portfolio, { key: "portfolio", data: data, onOpen: handleOpenModal }),
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
