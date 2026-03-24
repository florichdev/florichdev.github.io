function shot(label) {
  var txt = encodeURIComponent(label);
  return "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='1200' height='720'><defs><linearGradient id='g' x1='0%' y1='0%' x2='100%' y2='100%'><stop offset='0%' stop-color='%23d7263d'/><stop offset='100%' stop-color='%238c1c2c'/></linearGradient></defs><rect width='1200' height='720' fill='url(%23g)'/><text x='50%' y='50%' font-size='60' fill='white' font-family='RFDewi, Montserrat, Arial' text-anchor='middle' dominant-baseline='middle' opacity='0.9'>" + txt + "</text></svg>";
}

function shots(label) {
  return [shot(label + " · 1"), shot(label + " · 2"), shot(label + " · 3")];
}

var icons = {
  bot: "fa-solid fa-robot",
  web: "fa-solid fa-laptop-code",
  api: "fa-solid fa-diagram-project",
  automation: "fa-solid fa-gear",
  contact_tg: "fa-brands fa-telegram",
  contact_gh: "fa-brands fa-github",
  contact_mail: "fa-solid fa-envelope",
  contact_kwork: "fa-solid fa-briefcase",
  contact_vk: "fa-brands fa-vk",
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
  "MySQL": "fa-solid fa-database",
  "PostgreSQL": "fa-solid fa-database",
  "SQLite": "fa-solid fa-database",
  "Redis": "fa-solid fa-database",
  "Docker": "fa-brands fa-docker",
  "Git": "fa-brands fa-git-alt",
  "Nginx": "fa-solid fa-server",
  "Figma": "fa-brands fa-figma"
};

var TG_TOKEN = "8314709318:AAF524Ac7LoFOjO0CQ3YduBJOoxMEp2OTsc";
var TG_CHAT_ID = "-1003484417837";
var TG_CONTACT_LINK = "https://t.me/vflorich";
var CONTACT_REGEX = /^@?[a-zA-Z0-9_]{5,32}$/;
var EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
var MAX_NAME_LEN = 80;
var MAX_CONTACT_LEN = 64;
var MAX_DESC_LEN = 800;
var PREFERS_REDUCE_MOTION = typeof window !== "undefined" && window.matchMedia ? window.matchMedia("(prefers-reduced-motion: reduce)").matches : false;
var IS_HTTP = typeof window !== "undefined" && window.location && /^https?:$/.test(window.location.protocol);
var TRAIL_SETTINGS = {
  color: "rgba(215, 38, 61, 0.38)",
  size: 16,
  inactivityTimeout: 4500
};

function generateCaptcha() {
  var a = Math.floor(2 + Math.random() * 8);
  var b = Math.floor(1 + Math.random() * 7);
  var question = a + " + " + b + " = ?";
  return { question: question, answer: a + b };
}

const texts = {
  ru: {
    nav: { services: "Услуги", portfolio: "Портфолио", contact: "Контакты" },
    hero: {
      hello: "Привет, я",
      name: "Вадим",
      role: "Фуллстек-разработчик",
      pitch: "Создаю ботов для Telegram и MAX, веб-сайты и приложения",
      ctaServices: "Мои услуги",
      ctaPortfolio: "Портфолио",
      exp: "Опыт 3+ года",
      speed: "Быстро и качественно",
      full: "Полный цикл",
      fullDesc: "Идея → запуск"
    },
    about: {
      title: "Обо мне",
      note: "",
      text: "Разрабатываю решения, которые закрывают бизнес-задачи через Telegram, MAX и веб. Беру на себя архитектуру, разработку, настройку хостинга и поддержку. Люблю понятные интерфейсы и стабильные интеграции.",
      chips: ["HTML5", "CSS3", "Tailwind CSS", "JavaScript", "TypeScript", "React", "Vite", "Next.js", "Python", "Node.js", "PHP", "Django", "FastAPI", "Flask", "MySQL", "PostgreSQL", "SQLite", "Redis", "Docker", "Git", "Nginx", "Figma"]
    },
    services: {
      title: "Услуги",
      hint: "Что я предлагаю",
      list: [
        { title: "Чат-боты Telegram", icon: "bot", desc: "Приём заявок, ответы на вопросы, уведомления менеджеру. Быстрая разработка под ключ.", price: "от 5000 ₽" },
        { title: "Боты для MAX", icon: "bot", desc: "Разработка ботов для мессенджера MAX: чат-боты, магазины, интеграции с API.", price: "от 5000 ₽" },
        { title: "Бот-магазин", icon: "bot", desc: "Каталог товаров, корзина, оплата и статусы заказов прямо в Telegram/MAX.", price: "от 15000 ₽" },
        { title: "Сайт / лендинг", icon: "web", desc: "Страница с оффером, формой обратной связи и аналитикой. Быстрый запуск.", price: "от 5000 ₽" },
        { title: "Админ-панель", icon: "web", desc: "Веб-панель для управления: заявки, контент, роли, статистика.", price: "от 5000 ₽" },
        { title: "Интеграции и API", icon: "api", desc: "Связка с CRM, платежными системами, вебхуками. Автоматизация процессов.", price: "от 5000 ₽" }
      ]
    },
    portfolio: {
      title: "Портфолио",
      hint: "Реализованные проекты",
      list: [
        { 
          name: "Secret Vape Shop", 
          icon: "bot", 
          desc: "Полнофункциональный интернет-магазин в Telegram с веб-админ панелью. Включает каталог товаров с категориями, корзину, систему заказов, интеграцию платежей, статистику продаж и управление пользователями.",
          stack: "Python · Aiogram 3 · SQLAlchemy · Flask · SQLite",
          price: "Коммерческий проект",
          tags: ["E-commerce", "Admin Panel", "Payments"],
          shots: [
            "./assets/images/portfolio/secretvapeshop/ГлавноеМенюБота.png",
            "./assets/images/portfolio/secretvapeshop/МагазинБота.png",
            "./assets/images/portfolio/secretvapeshop/РазделМагазинаБота.png",
            "./assets/images/portfolio/secretvapeshop/Авторизация.png",
            "./assets/images/portfolio/secretvapeshop/Главная.png",
            "./assets/images/portfolio/secretvapeshop/Товары.png",
            "./assets/images/portfolio/secretvapeshop/Заказы.png",
            "./assets/images/portfolio/secretvapeshop/Пользователи.png",
            "./assets/images/portfolio/secretvapeshop/Мобильная адаптация.png"
          ]
        },
        { 
          name: "CryptoPay", 
          icon: "web", 
          desc: "Веб-приложение для приёма криптовалютных платежей с Telegram ботом. Генерация QR-кодов, автоматическая обработка транзакций в Solana, система таймеров и комиссий, админ-панель в Telegram боте.",
          stack: "Python · Flask · Aiogram · Solana · SQLite",
          price: "Коммерческий проект",
          tags: ["Crypto", "Web App", "Payments"],
          shots: [
            "./assets/images/portfolio/cryptopay/web1.png",
            "./assets/images/portfolio/cryptopay/web2.png",
            "./assets/images/portfolio/cryptopay/tg1.png",
            "./assets/images/portfolio/cryptopay/tg2.png"
          ]
        },
        { 
          name: "@happshealthbot", 
          icon: "bot", 
          desc: "Wellness-бот для просмотра прогресса роста волос с функцией сравнения результатов до и после.",
          stack: "Python · Aiogram · SQLite · Flask · PDF",
          price: "Коммерческий проект",
          tags: ["Health", "Booking", "Admin"],
          shots: [
            "./assets/images/portfolio/@happshealthbot/tg1.png",
            "./assets/images/portfolio/@happshealthbot/tg2.png",
            "./assets/images/portfolio/@happshealthbot/tg3.png"
          ]
        },
        { 
          name: "Рандомайзер & Сэйвер", 
          icon: "bot", 
          desc: "Комплексная система из двух ботов для MAX мессенджера с админ-панелью, боты для создания розыгрышей и скачивания видео.",
          stack: "Python · MAX API · Flask · SQLite",
          price: "Коммерческий проект",
          tags: ["MAX", "Admin", "Giveaways"],
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
          ]
        },
        { 
          name: "Бот Таролог", 
          icon: "bot", 
          desc: "Бот для MAX и Telegram с функциями таро-раскладов и консультаций. Веб-админ панель на Flask.",
          stack: "Python · MAX API · Telegram API · Flask · SQLite",
          price: "Коммерческий проект",
          tags: ["MAX", "Telegram", "Integration"],
          shots: [
            "./assets/images/portfolio/BotsTaro/max1.png",
            "./assets/images/portfolio/BotsTaro/max2.png",
            "./assets/images/portfolio/BotsTaro/max3.png",
            "./assets/images/portfolio/BotsTaro/max4.png",
            "./assets/images/portfolio/BotsTaro/max5.png",
            "./assets/images/portfolio/BotsTaro/tgweb.png",
            "./assets/images/portfolio/BotsTaro/web1.png",
            "./assets/images/portfolio/BotsTaro/web2.png",
            "./assets/images/portfolio/BotsTaro/web3.png",
            "./assets/images/portfolio/BotsTaro/web4.png",
            "./assets/images/portfolio/BotsTaro/web5.png",
            "./assets/images/portfolio/BotsTaro/web6.png"
          ]
        },

      ]
    },
    contacts: {
      title: "Контакты",
      hint: "Свяжитесь со мной",
      tg: "Telegram",
      gh: "GitHub",
      mail: "Почта",
      kwork: "Kwork",
      prompt: "Открыт к сотрудничеству"
    },
    footer: "Создано для себя и клиентов",
    langToggle: "EN"
  },
  en: {
    nav: { services: "Services", portfolio: "Portfolio", contact: "Contacts" },
    hero: {
      hello: "Hi, I'm",
      name: "Vadim",
      role: "Fullstack Developer",
      pitch: "I build bots for Telegram & MAX, and web apps end-to-end",
      ctaServices: "Services",
      ctaPortfolio: "Portfolio",
      exp: "3+ years experience",
      speed: "Fast and precise",
      full: "Full cycle",
      fullDesc: "Idea → launch"
    },
    about: {
      title: "About me",
      note: "",
      text: "I build solutions that solve business tasks via Telegram, MAX and the web. I own architecture, development, hosting setup, and support. I care about clear UX and stable integrations.",
      chips: ["HTML5", "CSS3", "Tailwind CSS", "JavaScript", "TypeScript", "React", "Vite", "Next.js", "Python", "Node.js", "PHP", "Django", "FastAPI", "Flask", "MySQL", "PostgreSQL", "SQLite", "Redis", "Docker", "Git", "Nginx", "Figma"]
    },
    services: {
      title: "Services",
      hint: "What I offer",
      list: [
        { title: "Telegram bots", icon: "bot", desc: "Leads intake, FAQ, manager alerts. Fast end-to-end development.", price: "from $100" },
        { title: "MAX bots", icon: "bot", desc: "Custom bots for MAX messenger: chat-bots, shops, API integrations.", price: "from $200" },
        { title: "Shop bot", icon: "bot", desc: "Product catalog, cart, payment and order statuses inside Telegram/MAX.", price: "from $100" },
        { title: "Landing / site", icon: "web", desc: "Offer page with form, analytics and quick launch.", price: "from $100" },
        { title: "Admin panel", icon: "web", desc: "Web dashboard for management: requests, content, roles, stats.", price: "from $100" },
        { title: "Integrations & API", icon: "api", desc: "Connect with CRM, payments, webhooks. Process automation.", price: "from $100" }
      ]
    },
    portfolio: {
      title: "Portfolio",
      hint: "Completed projects",
      list: [
        { 
          name: "Secret Vape Shop", 
          icon: "bot", 
          desc: "Full-featured e-commerce store in Telegram with web admin panel. Includes product catalog with categories, shopping cart, order system, payment integration, sales statistics and user management.",
          stack: "Python · Aiogram 3 · SQLAlchemy · Flask · SQLite",
          price: "Commercial project",
          tags: ["E-commerce", "Admin Panel", "Payments"],
          shots: [
            "./assets/images/portfolio/secretvapeshop/ГлавноеМенюБота.png",
            "./assets/images/portfolio/secretvapeshop/МагазинБота.png",
            "./assets/images/portfolio/secretvapeshop/РазделМагазинаБота.png",
            "./assets/images/portfolio/secretvapeshop/Авторизация.png",
            "./assets/images/portfolio/secretvapeshop/Главная.png",
            "./assets/images/portfolio/secretvapeshop/Товары.png",
            "./assets/images/portfolio/secretvapeshop/Заказы.png",
            "./assets/images/portfolio/secretvapeshop/Пользователи.png",
            "./assets/images/portfolio/secretvapeshop/Мобильная адаптация.png"
          ]
        },
        { 
          name: "CryptoPay", 
          icon: "web", 
          desc: "Web application for accepting cryptocurrency payments with Telegram bot. QR code generation, automatic Solana transaction processing, timer and commission system, admin panel in Telegram bot.",
          stack: "Python · Flask · Aiogram · Solana · SQLite",
          price: "Commercial project",
          tags: ["Crypto", "Web App", "Payments"],
          shots: [
            "./assets/images/portfolio/cryptopay/web1.png",
            "./assets/images/portfolio/cryptopay/web2.png",
            "./assets/images/portfolio/cryptopay/tg1.png",
            "./assets/images/portfolio/cryptopay/tg2.png"
          ]
        },
        { 
          name: "@happshealthbot", 
          icon: "bot", 
          desc: "Wellness bot for tracking hair growth progress with before and after comparison feature.",
          stack: "Python · Aiogram · SQLite · Flask · PDF",
          price: "Commercial project",
          tags: ["Health", "Booking", "Admin"],
          shots: [
            "./assets/images/portfolio/@happshealthbot/tg1.png",
            "./assets/images/portfolio/@happshealthbot/tg2.png",
            "./assets/images/portfolio/@happshealthbot/tg3.png"
          ]
        },
        { 
          name: "Randomizer & Saver", 
          icon: "bot", 
          desc: "Complex system of two bots for MAX messenger with admin panel, bots for creating giveaways and downloading videos.",
          stack: "Python · MAX API · Flask · SQLite",
          price: "Commercial project",
          tags: ["MAX", "Admin", "Giveaways"],
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
          ]
        },
        { 
          name: "Tarot Bot", 
          icon: "bot", 
          desc: "Bot for MAX and Telegram with tarot reading features and consultations. Flask web admin panel.",
          stack: "Python · MAX API · Telegram API · Flask · SQLite",
          price: "Commercial project",
          tags: ["MAX", "Telegram", "Integration"],
          shots: [
            "./assets/images/portfolio/BotsTaro/max1.png",
            "./assets/images/portfolio/BotsTaro/max2.png",
            "./assets/images/portfolio/BotsTaro/max3.png",
            "./assets/images/portfolio/BotsTaro/max4.png",
            "./assets/images/portfolio/BotsTaro/max5.png",
            "./assets/images/portfolio/BotsTaro/tgweb.png",
            "./assets/images/portfolio/BotsTaro/web1.png",
            "./assets/images/portfolio/BotsTaro/web2.png",
            "./assets/images/portfolio/BotsTaro/web3.png",
            "./assets/images/portfolio/BotsTaro/web4.png",
            "./assets/images/portfolio/BotsTaro/web5.png",
            "./assets/images/portfolio/BotsTaro/web6.png"
          ]
        },

      ]
    },
    contacts: {
      title: "Contacts",
      hint: "Get in touch",
      tg: "Telegram",
      gh: "GitHub",
      mail: "Email",
      kwork: "Kwork",
      prompt: "Open to collaborate"
    },
    footer: "Built for myself and clients",
    langToggle: "RU"
  }
};

const h = React.createElement;

function Header(props) {
  var navClass = "nav-links" + (props.navOpen ? " show" : "");
  return h("header", null,
    h("div", { className: "nav" }, [
      h("a", { className: "logo", href: "#top", onClick: function onClick(e) {
        return props.onNavigate(e, "top");
      } }, h("img", { src: "./assets/images/logo-icon.svg", alt: "FlorichDev", width: "40", height: "40" })),
      h("div", { className: navClass }, [
        h("a", { href: "#services", key: "services", onClick: function onClick(e) {
            return props.onNavigate(e, "services");
          }, title: props.labels.services, "aria-label": props.labels.services }, h("i", { className: icons.nav_services })),
        h("a", { href: "#portfolio", key: "portfolio", onClick: function onClick(e) {
            return props.onNavigate(e, "portfolio");
          }, title: props.labels.portfolio, "aria-label": props.labels.portfolio }, h("i", { className: icons.nav_portfolio })),
        h("a", { href: "#contacts", key: "contacts", onClick: function onClick(e) {
            return props.onNavigate(e, "contacts");
          }, title: props.labels.contact, "aria-label": props.labels.contact }, h("i", { className: icons.nav_contacts })),
        h("button", { className: "icon-btn", onClick: props.onToggleEffects, title: props.effectsOn ? "Выключить эффекты" : "Включить эффекты", "aria-label": "Эффекты" }, h("i", { className: icons.settings })),
        h("button", { className: "lang", onClick: props.onLang, title: "Language", "aria-label": "Language" }, h("i", { className: icons.translate }))
      ]),
      h("button", { className: "burger" + (props.navOpen ? " open" : ""), onClick: props.onBurger }, h("span", null))
    ])
  );
}

function Hero(props) {
  return h("section", { className: "hero", id: "top" }, [
    h("div", { className: "hero-card animate-left", "data-animate": "left" }, [
      h("div", { className: "tagline" }, `${props.data.hero.hello} ${props.data.hero.name}`),
      h("h1", null, [
        props.data.hero.role,
        h("br"),
        h("span", null, props.data.hero.pitch)
      ]),
      h("p", null, props.data.about.text),
      h("div", { className: "hero-actions" }, [
        h("a", { className: "btn primary", href: "#services", onClick: function onClick(e) {
            e.preventDefault();
            props.onScroll("services");
          } }, props.data.hero.ctaServices),
        h("a", { className: "btn", href: "#portfolio", onClick: function onClick(e) {
            e.preventDefault();
            props.onScroll("portfolio");
          } }, props.data.hero.ctaPortfolio)
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
            techIcons[item] ? h("i", { className: techIcons[item], style: { marginRight: "6px" } }) : null,
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
        return h("div", { className: "card service-card", key: item.title }, [
          item.icon ? h("div", { className: "card-icon" }, h("i", { className: icons[item.icon] })) : null,
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
        return h("div", { className: "card portfolio-card", key: item.name, onClick: function onClick() {
          return props.onOpen(item);
        } }, [
          item.icon ? h("div", { className: "card-icon" }, h("i", { className: icons[item.icon] })) : null,
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

function Contacts(props) {
  return h("section", { id: "contacts", className: "panel contacts animate-left", "data-animate": "left", style: { display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" } }, [
    h("div", { style: { textAlign: "center", marginBottom: "32px" } }, [
      h("h2", null, props.data.contacts.title)
    ]),
    h("div", { className: "contact-card", style: { maxWidth: "600px", width: "100%" } }, [
      h("div", { className: "contact-icons", style: { justifyContent: "center" } }, [
        h("a", { className: "contact-circle", href: "https://t.me/florichdev", target: "_blank", rel: "noreferrer", title: "Telegram", "aria-label": "Telegram" }, h("i", { className: icons.contact_tg })),
        h("a", { className: "contact-circle", href: "https://github.com/florichdev", target: "_blank", rel: "noreferrer", title: "GitHub", "aria-label": "GitHub" }, h("i", { className: icons.contact_gh })),
        h("a", { className: "contact-circle", href: "https://vk.com/florichdev", target: "_blank", rel: "noreferrer", title: "VK", "aria-label": "VK" }, h("i", { className: icons.contact_vk })),
        h("a", { className: "contact-circle", href: "mailto:florichdev@gmail.com", title: "Email", "aria-label": "Email" }, h("i", { className: icons.contact_mail })),
        h("a", { className: "contact-circle", href: "https://kwork.ru/user/florichdev", target: "_blank", rel: "noreferrer", title: "Kwork", "aria-label": "Kwork" }, h("i", { className: icons.contact_kwork }))
      ]),
      h("div", { style: { marginTop: "24px", display: "flex", flexDirection: "column", gap: "8px", alignItems: "center" } }, [
        h("p", { className: "text", style: { textAlign: "center" } }, props.data.contacts.prompt),
        h("p", { className: "text", style: { textAlign: "center", fontSize: "14px", opacity: 0.8 } }, props.lang === "ru" ? "График работы: 8:00 - 22:00" : "Working hours: 8:00 AM - 10:00 PM")
      ])
    ])
  ]);
}

function Footer(props) {
  return h("footer", { className: "footer" }, [
    h("div", null, "FlorichDev · " + new Date().getFullYear()),
    h("div", { className: "footer-note" }, props.data.footer),
    h("div", { className: "contact-links" }, [
      h("a", { href: "https://t.me/florichdev", target: "_blank", rel: "noreferrer", title: "Telegram", "aria-label": "Telegram" }, h("i", { className: icons.contact_tg })),
      h("a", { href: "https://github.com/florichdev", target: "_blank", rel: "noreferrer", title: "GitHub", "aria-label": "GitHub" }, h("i", { className: icons.contact_gh })),
      h("a", { href: "https://vk.com/florichdev", target: "_blank", rel: "noreferrer", title: "VK", "aria-label": "VK" }, h("i", { className: icons.contact_vk })),
      h("a", { href: "mailto:florichdev@gmail.com", title: "Email", "aria-label": "Email" }, h("i", { className: icons.contact_mail })),
      h("a", { href: "https://kwork.ru/user/florichdev", target: "_blank", rel: "noreferrer", title: "Kwork", "aria-label": "Kwork" }, h("i", { className: icons.contact_kwork }))
    ])
  ]);
}

function BackToTop(props) {
  return h("button", {
    className: "back-to-top " + (props.show ? "show" : ""),
    onClick: props.onClick,
    "aria-label": "Наверх"
  }, "↑");
}

function Modal(props) {
  if (!props.item) {
    return null;
  }
  var image = props.item.shots[props.index] || props.item.shots[0];
  var title = props.item.name;
  var desc = props.item.desc || "";
  var stack = props.item.stack || "";
  var price = props.item.price || "";
  var closeLabel = props.lang === "ru" ? "Закрыть" : "Close";
  var contactLabel = props.lang === "ru" ? "Связаться" : "Contact";
  return h("div", { className: "modal-backdrop", onClick: props.onClose },
    h("div", { className: "modal", onClick: function onClick(e) {
      return e.stopPropagation();
    }, onWheel: function onWheel(e) {
      e.stopPropagation();
    } }, [
      h("div", { className: "modal-head" }, [
        h("div", { className: "modal-title" }, title),
        h("button", { className: "modal-close", onClick: props.onClose }, "✕")
      ]),
      h("div", { className: "modal-body" }, [
        h("div", { className: "gallery" }, [
          h("img", { src: image, alt: title }),
          h("div", { className: "gallery-controls" }, [
              h("button", { className: "gallery-btn", onClick: function onClick(e) {
                e.stopPropagation();
                props.onPrev();
              } }, h("i", { className: icons.back })),
              h("button", { className: "gallery-btn", onClick: function onClick(e) {
                e.stopPropagation();
                props.onNext();
              } }, h("i", { className: icons.forward }))
          ])
        ]),
        h("div", { className: "modal-meta" }, [
          desc ? h("p", { className: "text" }, desc) : null,
          stack ? h("div", { className: "project-stack" }, stack) : null,
          props.item.tags ? h("div", { className: "chip-list" },
            props.item.tags.map(function (tag) {
              return h("span", { className: "chip", key: tag }, tag);
            })
          ) : null,
          price ? h("div", { className: "badge-row" }, [
            h("div", { className: "badge" }, price)
          ]) : null
        ]),
        h("div", { className: "modal-actions" }, [
          h("a", { className: "btn primary", href: TG_CONTACT_LINK, target: "_blank", rel: "noreferrer" }, contactLabel),
          h("button", { className: "btn", onClick: props.onClose }, closeLabel)
        ])
      ])
    ]));
}

function App() {
  var _React$useState = React.useState("ru"),
    lang = _React$useState[0],
    setLang = _React$useState[1];
  var _React$useState2 = React.useState(false),
    showTop = _React$useState2[0],
    setShowTop = _React$useState2[1];
  var _React$useState3 = React.useState(null),
    modalItem = _React$useState3[0],
    setModalItem = _React$useState3[1];
  var _React$useState4 = React.useState(0),
    shotIndex = _React$useState4[0],
    setShotIndex = _React$useState4[1];
  var _React$useState5 = React.useState(false),
    navOpen = _React$useState5[0],
    setNavOpen = _React$useState5[1];
  var _React$useState6 = React.useState({ name: "", contact: "", desc: "" }),
    formData = _React$useState6[0],
    setFormData = _React$useState6[1];
  var _React$useState7 = React.useState(""),
    formStatus = _React$useState7[0],
    setFormStatus = _React$useState7[1];
  var _React$useState8 = React.useState(false),
    sending = _React$useState8[0],
    setSending = _React$useState8[1];
  var _React$useState9 = React.useState(generateCaptcha()),
    captcha = _React$useState9[0],
    setCaptcha = _React$useState9[1];
  var _React$useState10 = React.useState(""),
    captchaInput = _React$useState10[0],
    setCaptchaInput = _React$useState10[1];
  var _React$useState11 = React.useState(true),
    effectsOn = _React$useState11[0],
    setEffectsOn = _React$useState11[1];

  React.useEffect(function () {
    if (!IS_HTTP || !(window && window.location && window.history)) {
      return;
    }
    var path = window.location.pathname.replace(/index\.html?$/i, "");
    var clean = path || "/";
    var cleanUrl = clean + window.location.search;
    if (cleanUrl !== window.location.pathname + window.location.search) {
      window.history.replaceState(null, "", cleanUrl);
    }
    if (window.location.hash) {
      window.history.replaceState(null, "", cleanUrl);
    }
  }, []);

  React.useEffect(function () {
    document.documentElement.lang = lang;
  }, [lang]);

  React.useEffect(function () {
    var handler = function handler() {
      setShowTop(window.scrollY > 240);
    };
    window.addEventListener("scroll", handler);
    return function () {
      window.removeEventListener("scroll", handler);
    };
  }, []);

  React.useEffect(function () {
    if (!effectsOn) return undefined;
    var dot = document.querySelector(".cursor-dot");
    var single = document.querySelector(".cursor-trail");
    if (!dot) return undefined;
    var lastX = 0;
    var lastY = 0;
    var lastTime = Date.now();
    var handler = function handler(e) {
      lastX = e.clientX;
      lastY = e.clientY;
      lastTime = Date.now();
      dot.style.left = e.clientX + "px";
      dot.style.top = e.clientY + "px";
      dot.style.opacity = "1";
      if (single) {
        single.style.left = e.clientX + "px";
        single.style.top = e.clientY + "px";
        single.style.opacity = "0.6";
      }
    };
    var checkInactive = function checkInactive() {
      if (Date.now() - lastTime > TRAIL_SETTINGS.inactivityTimeout) {
        dot.style.opacity = "0";
        if (single) single.style.opacity = "0";
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
    if (modalItem) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
  }, [modalItem]);

  React.useEffect(function () {
    var pre = document.getElementById("preloader");
    var timer;
    if (pre) {
      timer = setTimeout(function () {
        pre.style.opacity = "0";
        setTimeout(function () {
          pre.style.display = "none";
        }, 300);
      }, 800);
    }
    return function () {
      clearTimeout(timer);
    };
  }, []);

  React.useEffect(function () {
    if (!effectsOn) return undefined;
    var canvas = document.getElementById("matrix");
    if (!canvas) return undefined;
    var ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    var chars = "01";
    var fontSize = 14;
    var columns = Math.floor(canvas.width / fontSize);
    var drops = [];
    for (var i = 0; i < columns; i++) {
      drops[i] = Math.random() * -100;
    }
    function draw() {
      ctx.fillStyle = "rgba(10, 10, 15, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "rgba(215, 38, 61, 0.5)";
      ctx.font = fontSize + "px monospace";
      for (var i = 0; i < drops.length; i++) {
        var text = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    }
    var interval = setInterval(draw, 50);
    var onResize = function onResize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      columns = Math.floor(canvas.width / fontSize);
      drops = [];
      for (var i = 0; i < columns; i++) {
        drops[i] = Math.random() * -100;
      }
    };
    window.addEventListener("resize", onResize);
    return function () {
      clearInterval(interval);
      window.removeEventListener("resize", onResize);
    };
  }, [effectsOn]);

  React.useEffect(function () {
    var esc = function esc(e) {
      if (e.key === "Escape") {
        setModalItem(null);
        setNavOpen(false);
      }
    };
    document.addEventListener("keydown", esc);
    return function () {
      document.removeEventListener("keydown", esc);
    };
  }, []);

  React.useEffect(function () {
    var onResize = function onResize() {
      if (window.innerWidth > 720) {
        setNavOpen(false);
      }
    };
    window.addEventListener("resize", onResize);
    return function () {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  React.useEffect(function () {
    var els = document.querySelectorAll("[data-animate]");
    if (!effectsOn) {
      els.forEach(function (el) {
        el.classList.add("visible");
      });
      return;
    }
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, { threshold: 0.1 });
    els.forEach(function (el) {
      observer.observe(el);
    });
    return function () {
      observer.disconnect();
    };
  }, [effectsOn]);

  React.useEffect(function () {
    if (effectsOn) {
      document.body.classList.remove("animations-off");
    } else {
      document.body.classList.add("animations-off");
    }
  }, [effectsOn]);

  var data = texts[lang];

  var handleLang = function handleLang() {
    setLang(lang === "ru" ? "en" : "ru");
  };

  var handleBurger = function handleBurger() {
    setNavOpen(!navOpen);
  };

  var handleNavigate = function handleNavigate(e, section) {
    e.preventDefault();
    setNavOpen(false);
    var el = document.getElementById(section);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  var handleScroll = function handleScroll(section) {
    var el = document.getElementById(section);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  var handleOpenModal = function handleOpenModal(item) {
    setModalItem(item);
    setShotIndex(0);
  };

  var handleCloseModal = function handleCloseModal() {
    setModalItem(null);
  };

  var handlePrevShot = function handlePrevShot() {
    if (!modalItem || !modalItem.shots) return;
    setShotIndex(function (prev) {
      return prev === 0 ? modalItem.shots.length - 1 : prev - 1;
    });
  };

  var handleNextShot = function handleNextShot() {
    if (!modalItem || !modalItem.shots) return;
    setShotIndex(function (prev) {
      return prev === modalItem.shots.length - 1 ? 0 : prev + 1;
    });
  };

  var handleFormChange = function handleFormChange(field, value) {
    setFormData(function (prev) {
      var next = {};
      for (var k in prev) next[k] = prev[k];
      next[field] = value;
      return next;
    });
  };

  var handleCaptchaInput = function handleCaptchaInput(value) {
    setCaptchaInput(value);
  };

  var handleRefreshCaptcha = function handleRefreshCaptcha() {
    setCaptcha(generateCaptcha());
    setCaptchaInput("");
  };

  var handleFormSubmit = function handleFormSubmit(e) {
    e.preventDefault();
    var name = formData.name.trim();
    var contact = formData.contact.trim();
    var desc = formData.desc.trim();
    var userAnswer = parseInt(captchaInput.trim(), 10);
    if (!name || name.length > MAX_NAME_LEN) {
      setFormStatus(lang === "ru" ? "Введите корректное имя" : "Enter valid name");
      return;
    }
    if (!contact || contact.length > MAX_CONTACT_LEN) {
      setFormStatus(lang === "ru" ? "Введите контакт" : "Enter contact");
      return;
    }
    if (!CONTACT_REGEX.test(contact) && !EMAIL_REGEX.test(contact)) {
      setFormStatus(lang === "ru" ? "Неверный формат контакта" : "Invalid contact format");
      return;
    }
    if (!desc || desc.length > MAX_DESC_LEN) {
      setFormStatus(lang === "ru" ? "Опишите проект" : "Describe project");
      return;
    }
    if (userAnswer !== captcha.answer) {
      setFormStatus(lang === "ru" ? "Неверный ответ на капчу" : "Wrong captcha answer");
      return;
    }
    setSending(true);
    setFormStatus("");
    var text = "🔔 Новая заявка с сайта\n\n👤 Имя: " + name + "\n📞 Контакт: " + contact + "\n📝 Описание:\n" + desc;
    var url = "https://api.telegram.org/bot" + TG_TOKEN + "/sendMessage";
    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: TG_CHAT_ID, text: text, parse_mode: "HTML" })
    }).then(function (res) {
      return res.json();
    }).then(function (data) {
      if (data.ok) {
        setFormStatus(lang === "ru" ? "✓ Отправлено!" : "✓ Sent!");
        setFormData({ name: "", contact: "", desc: "" });
        setCaptchaInput("");
        handleRefreshCaptcha();
      } else {
        setFormStatus(lang === "ru" ? "Ошибка отправки" : "Send error");
      }
    }).catch(function () {
      setFormStatus(lang === "ru" ? "Ошибка сети" : "Network error");
    }).finally(function () {
      setSending(false);
    });
  };

  var handleToggleEffects = function handleToggleEffects() {
    setEffectsOn(!effectsOn);
  };

  var handleBackToTop = function handleBackToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return h("div", { className: "app" }, [
    h(Header, {
      key: "header",
      labels: data.nav,
      navOpen: navOpen,
      effectsOn: effectsOn,
      onBurger: handleBurger,
      onNavigate: handleNavigate,
      onLang: handleLang,
      onToggleEffects: handleToggleEffects
    }),
    h("main", { className: "shell" }, [
      h(Hero, { key: "hero", data: data, onScroll: handleScroll }),
      h(Services, { key: "services", data: data }),
      h(Portfolio, { key: "portfolio", data: data, onOpen: handleOpenModal }),
      h(Contacts, {
        key: "contacts",
        data: data,
        lang: lang,
        formData: formData,
        formStatus: formStatus,
        sending: sending,
        captcha: captcha,
        captchaInput: captchaInput,
      onChange: handleFormChange,
      onCaptchaInput: handleCaptchaInput,
      onRefreshCaptcha: handleRefreshCaptcha,
      onSubmit: handleFormSubmit
    })
    ]),
    h(Footer, { key: "footer", data: data }),
    h(BackToTop, { key: "backtotop", show: showTop, onClick: handleBackToTop }),
    modalItem ? h(Modal, {
      key: "modal",
      item: modalItem,
      index: shotIndex,
      lang: lang,
      contactLabel: lang === "ru" ? "Связаться" : "Contact",
      onClose: handleCloseModal,
      onPrev: handlePrevShot,
      onNext: handleNextShot
    }) : null
  ]);
}

var root = ReactDOM.createRoot(document.getElementById("root"));
root.render(h(App));
