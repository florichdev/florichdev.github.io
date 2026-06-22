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
var IS_TOUCH = typeof window !== "undefined" && ("ontouchstart" in window || navigator.maxTouchPoints > 0);
var TRAIL_SETTINGS = { inactivityTimeout: 4500 };

var TECH_CHIPS = [
  "HTML5", "CSS3", "Tailwind CSS", "JavaScript", "TypeScript", "React", "Vite", "Next.js",
  "Python", "Node.js", "PHP", "Django", "FastAPI", "Flask", "MySQL", "PostgreSQL",
  "SQLite", "Redis", "Docker", "Git", "Nginx", "Figma"
];

var serviceItems = [
  {
    id: "tg-bots", icon: "bot",
    ru: { title: "Чат-боты Telegram", desc: "Приём заявок, ответы на вопросы, уведомления менеджеру. Быстрая разработка под ключ.", price: "от 5000 ₽" },
    en: { title: "Telegram bots", desc: "Leads intake, FAQ, manager alerts. Fast end-to-end development.", price: "from $100" }
  },
  {
    id: "max-bots", icon: "bot",
    ru: { title: "Боты для MAX", desc: "Разработка ботов для мессенджера MAX: чат-боты, магазины, интеграции с API.", price: "от 5000 ₽" },
    en: { title: "MAX bots", desc: "Custom bots for MAX messenger: chat-bots, shops, API integrations.", price: "from $200" }
  },
  {
    id: "shop-bot", icon: "bot",
    ru: { title: "Бот-магазин", desc: "Каталог товаров, корзина, оплата и статусы заказов прямо в Telegram/MAX.", price: "от 15000 ₽" },
    en: { title: "Shop bot", desc: "Product catalog, cart, payment and order statuses inside Telegram/MAX.", price: "from $100" }
  },
  {
    id: "landing", icon: "web",
    ru: { title: "Сайт / лендинг", desc: "Страница с оффером, аналитикой и быстрым запуском.", price: "от 5000 ₽" },
    en: { title: "Landing / site", desc: "Offer page with analytics and quick launch.", price: "from $100" }
  },
  {
    id: "admin", icon: "web",
    ru: { title: "Админ-панель", desc: "Веб-панель для управления: заявки, контент, роли, статистика.", price: "от 5000 ₽" },
    en: { title: "Admin panel", desc: "Web dashboard for management: requests, content, roles, stats.", price: "from $100" }
  },
  {
    id: "api", icon: "api",
    ru: { title: "Интеграции и API", desc: "Связка с CRM, платежными системами, вебхуками. Автоматизация процессов.", price: "от 5000 ₽" },
    en: { title: "Integrations & API", desc: "Connect with CRM, payments, webhooks. Process automation.", price: "from $100" }
  }
];

var portfolioItems = [
  {
    id: "secret-vape", icon: "bot",
    stack: "Python · Aiogram 3 · SQLAlchemy · Flask · SQLite",
    tags: ["E-commerce", "Admin Panel", "Payments"],
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
      desc: "Полнофункциональный интернет-магазин в Telegram с веб-админ панелью. Каталог, корзина, заказы, платежи, статистика и управление пользователями.",
      price: "Коммерческий проект"
    },
    en: {
      name: "Secret Vape Shop",
      desc: "Full-featured e-commerce store in Telegram with web admin panel. Catalog, cart, orders, payments, stats and user management.",
      price: "Commercial project"
    }
  },
  {
    id: "cryptopay", icon: "web",
    stack: "Python · Flask · Aiogram · Solana · SQLite",
    tags: ["Crypto", "Web App", "Payments"],
    shots: [
      "./assets/images/portfolio/cryptopay/web1.png",
      "./assets/images/portfolio/cryptopay/web2.png",
      "./assets/images/portfolio/cryptopay/tg1.png",
      "./assets/images/portfolio/cryptopay/tg2.png"
    ],
    ru: {
      name: "CryptoPay",
      desc: "Веб-приложение для приёма криптовалютных платежей с Telegram ботом. QR-коды, Solana, таймеры, комиссии и админ-панель в боте.",
      price: "Коммерческий проект"
    },
    en: {
      name: "CryptoPay",
      desc: "Web app for crypto payments with Telegram bot. QR codes, Solana processing, timers, commissions and admin panel in bot.",
      price: "Commercial project"
    }
  },
  {
    id: "happs", icon: "bot",
    stack: "Python · Aiogram · SQLite · Flask · PDF",
    tags: ["Health", "Booking", "Admin"],
    shots: [
      "./assets/images/portfolio/@happshealthbot/tg1.png",
      "./assets/images/portfolio/@happshealthbot/tg2.png",
      "./assets/images/portfolio/@happshealthbot/tg3.png"
    ],
    ru: {
      name: "@happshealthbot",
      desc: "Wellness-бот для просмотра прогресса роста волос с функцией сравнения результатов до и после.",
      price: "Коммерческий проект"
    },
    en: {
      name: "@happshealthbot",
      desc: "Wellness bot for tracking hair growth progress with before and after comparison.",
      price: "Commercial project"
    }
  },
  {
    id: "botsmax", icon: "bot",
    stack: "Python · MAX API · Flask · SQLite",
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
    ],
    ru: {
      name: "Рандомайзер & Сэйвер",
      desc: "Комплексная система из двух ботов для MAX с админ-панелью: розыгрыши и скачивание видео.",
      price: "Коммерческий проект"
    },
    en: {
      name: "Randomizer & Saver",
      desc: "Two MAX bots with admin panel: giveaways and video downloading.",
      price: "Commercial project"
    }
  },
  {
    id: "botstaro", icon: "bot",
    stack: "Python · MAX API · Telegram API · Flask · SQLite",
    tags: ["MAX", "Telegram", "Integration"],
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
      desc: "Бот для MAX и Telegram с таро-раскладами и консультациями. Веб-админ панель на Flask.",
      price: "Коммерческий проект"
    },
    en: {
      name: "Tarot Bot",
      desc: "Bot for MAX and Telegram with tarot readings and consultations. Flask web admin panel.",
      price: "Commercial project"
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
      prevShot: "Предыдущее фото",
      nextShot: "Следующее фото",
      workingHours: "График работы: 8:00 – 22:00",
      skipLink: "К основному содержимому"
    },
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
      text: "Разрабатываю решения, которые закрывают бизнес-задачи через Telegram, MAX и веб. Беру на себя архитектуру, разработку, настройку хостинга и поддержку. Люблю понятные интерфейсы и стабильные интеграции."
    },
    services: { title: "Услуги", hint: "Что я предлагаю" },
    portfolio: { title: "Портфолио", hint: "Реализованные проекты" },
    contacts: {
      title: "Контакты",
      hint: "Свяжитесь со мной",
      tg: "Telegram",
      tgChannel: "Канал",
      gh: "GitHub",
      mail: "Почта",
      kwork: "Kwork",
      prompt: "Открыт к сотрудничеству"
    },
    footer: "Создано для себя и клиентов"
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
      prevShot: "Previous image",
      nextShot: "Next image",
      workingHours: "Working hours: 8:00 AM – 10:00 PM",
      skipLink: "Skip to main content"
    },
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
      text: "I build solutions that solve business tasks via Telegram, MAX and the web. I own architecture, development, hosting setup, and support. I care about clear UX and stable integrations."
    },
    services: { title: "Services", hint: "What I offer" },
    portfolio: { title: "Portfolio", hint: "Completed projects" },
    contacts: {
      title: "Contacts",
      hint: "Get in touch",
      tg: "Telegram",
      tgChannel: "Channel",
      gh: "GitHub",
      mail: "Email",
      kwork: "Kwork",
      prompt: "Open to collaborate"
    },
    footer: "Built for myself and clients"
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
        h("a", { className: "btn primary", href: "#services", onClick: function (e) { e.preventDefault(); props.onScroll("services"); } }, props.data.hero.ctaServices),
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
          h("a", { className: "btn primary", href: TG_PERSONAL, target: "_blank", rel: "noreferrer noopener" }, ui.contact),
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
    var fontSize = IS_TOUCH || window.innerWidth < 768 ? 18 : 14;
    var frameMs = IS_TOUCH || window.innerWidth < 768 ? 90 : 50;
    var drops = [];

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      var columns = Math.floor(canvas.width / fontSize);
      if (IS_TOUCH || window.innerWidth < 768) {
        columns = Math.max(8, Math.floor(columns * 0.45));
      }
      drops = [];
      for (var i = 0; i < columns; i++) drops[i] = Math.random() * -100;
      return columns;
    }

    var columns = resize();

    function draw() {
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

    var interval = setInterval(draw, frameMs);
    var onResize = function () { columns = resize(); };
    window.addEventListener("resize", onResize);
    return function () {
      clearInterval(interval);
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

  var data = getData(lang);
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
