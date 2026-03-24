function shot(label) {
  var txt = encodeURIComponent(label);
  return "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='1200' height='720'><defs><linearGradient id='g' x1='0%' y1='0%' x2='100%' y2='100%'><stop offset='0%' stop-color='%23d7263d'/><stop offset='100%' stop-color='%238c1c2c'/></linearGradient></defs><rect width='1200' height='720' fill='url(%23g)'/><text x='50%' y='50%' font-size='60' fill='white' font-family='RFDewi, Montserrat, Arial' text-anchor='middle' dominant-baseline='middle' opacity='0.9'>" + txt + "</text></svg>";
}

function shots(label) {
  return [shot(label + " · 1"), shot(label + " · 2"), shot(label + " · 3")];
}

function makeIcon(path) {
  var p = encodeURIComponent(path);
  return "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='64' height='64' viewBox='0 0 24 24' fill='none' stroke='%23ffffff' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round'><path d='" + p + "'/></svg>";
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
  back: "fa-solid fa-arrow-left",
  forward: "fa-solid fa-arrow-right",
  nav_services: "fa-solid fa-briefcase",
  nav_packages: "fa-solid fa-box",
  nav_projects: "fa-solid fa-layer-group",
  nav_contacts: "fa-solid fa-paper-plane",
  translate: "fa-solid fa-language",
  settings: "fa-solid fa-wand-magic-sparkles"
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
    nav: { services: "Услуги", packages: "Продукты", projects: "Проекты", contact: "Контакты" },
    hero: {
      hello: "Привет, я",
      name: "FlorichDev",
      role: "Фуллстек-разработчик",
      pitch: "Создаю ботов для Telegram и MAX, веб-приложения",
      ctaServices: "Мои услуги",
      ctaProjects: "Мои проекты",
      exp: "Опыт 3+ года",
      speed: "Быстро и качественно",
      full: "Полный цикл: идея → запуск"
    },
    about: {
      title: "Обо мне",
      note: "19 лет, Вадим",
      text: "Разрабатываю решения, которые закрывают бизнес-задачи через Telegram, MAX и веб. Беру на себя архитектуру, разработку, настройку хостинга и поддержку. Люблю понятные интерфейсы и стабильные интеграции.",
      chips: ["Python", "Flask", "Aiogram", "PHP", "SQL", "React", "HTML/CSS", "JavaScript", "Git", "Figma", "C#"]
    },
    services: {
      title: "Чем занимаюсь",
      hint: "Просто, понятно, под ключ",
      list: [
        { title: "Чат-боты Telegram под ключ", icon: "bot", desc: "Приём заявок, ответы на вопросы, уведомления менеджеру.", stack: "Заявки · Ответы · Уведомления", tags: ["Telegram", "Leads"], shots: shots("Чат-боты Telegram") },
        { title: "Боты для MAX", icon: "bot", desc: "Разработка ботов для мессенджера MAX: чат-боты, магазины, интеграции.", stack: "MAX API · Боты · Интеграции", tags: ["MAX", "Bots"], shots: shots("MAX боты") },
        { title: "Бот-магазин", icon: "bot", desc: "Каталог, корзина, оплата и статусы заказов прямо в Telegram.", stack: "Каталог · Оплата · Статусы", tags: ["Shop", "Payments"], shots: shots("Бот-магазин") },
        { title: "Сайт / лендинг", icon: "web", desc: "Страница с оффером, формой и аналитикой. Быстрый запуск.", stack: "Лендинг · Форма · Аналитика", tags: ["Site", "Leads"], shots: shots("Сайт") },
        { title: "Панель для менеджера", icon: "web", desc: "Простая веб-панель: заявки, статусы, уведомления.", stack: "Заявки · Роли · Оповещения", tags: ["Dashboard", "Ops"], shots: shots("Панель") },
        { title: "Интеграции и автоматизация", icon: "automation", desc: "Связать формы, чат-бота и почту/CRM. Авто-отчёты и выгрузки.", stack: "Формы · CRM · Отчёты", tags: ["Automation", "API"], shots: shots("Интеграции") },
        { title: "Оплата и деплой", icon: "api", desc: "Подключаю оплату, домен, SSL, размещаю и проверяю работу.", stack: "Домен · SSL · Оплата", tags: ["Deploy", "Payments"], shots: shots("Деплой") }
      ]
    },
    packages: {
      title: "Пакеты",
      hint: "Выбирайте и дополняйте",
      list: [
        { title: "Быстрый бот Telegram", icon: "bot", desc: "Заявки + уведомления в Telegram за 2-3 дня.", price: "от 12 000 ₽", tags: ["Telegram", "Leads"], shots: shots("Быстрый бот") },
        { title: "Бот для MAX", icon: "bot", desc: "Разработка бота для мессенджера MAX под ваши задачи.", price: "от 15 000 ₽", tags: ["MAX", "Custom"], shots: shots("MAX бот") },
        { title: "Бот-магазин", icon: "bot", desc: "Каталог, оплата, статусы заказов, выгрузки.", price: "от 25 000 ₽", tags: ["Payments", "CRM"], shots: shots("Бот-магазин") },
        { title: "Сайт + домен + SSL", icon: "web", desc: "Лендинг/магазин, домен, SSL, хостинг настройка.", price: "от 18 000 ₽", tags: ["Deploy", "Domain"], shots: shots("Сайт и домен") },
        { title: "Админ-панель", icon: "web", desc: "Панель контента/ролей с аналитикой.", price: "от 18 000 ₽", tags: ["Dashboard", "Access"], shots: shots("Админ-панель") },
        { title: "Интеграции и API", icon: "api", desc: "Связка с CRM, платежами, вебхуками, отчётами.", price: "от 15 000 ₽", tags: ["API", "Automation"], shots: shots("Интеграции") }
      ]
    },
    projects: {
      title: "Проекты и направления",
      hint: "Примеры задач",
      list: [
        { name: "Саппорт-бот", icon: "bot", task: "Приём заявок, очередь, напоминания менеджеру.", stack: "Заявки · Очередь · Оповещения", role: "Построение сценариев, сборка, развертывание.", tags: ["Support", "Leads"], shots: shots("Саппорт бот") },
        { name: "Бот-магазин", icon: "bot", task: "Каталог, корзина, оплата, статусы заказов.", stack: "Каталог · Оплата · Статусы", role: "Проектирование, настройка оплат, аналитика.", tags: ["Shop", "Payments"], shots: shots("Бот-магазин проект") },
        { name: "Веб-панель", icon: "web", task: "Заявки, роли, уведомления в одном месте.", stack: "Роли · Заявки · Уведомления", role: "Структура данных, интерфейс, запуск.", tags: ["Dashboard", "Ops"], shots: shots("Админ панель контента") },
        { name: "Лендинг + домен", icon: "web", task: "Страница оффера с формой, домен, SSL и мониторинг.", stack: "Лендинг · Домен · SSL", role: "Сборка, подключение домена, проверка форм.", tags: ["Site", "Deploy"], shots: shots("Интернет магазин проект") }
      ],
      link: "Код и демо доступны по запросу"
    },
    contacts: {
      title: "Контакты",
      tg: "Telegram",
      gh: "GitHub",
      mail: "Почта",
      prompt: "Открыт к сотрудничеству"
    },
    stack: {
      title: "Стек",
      sub: "Backend · Frontend · Tools",
      chips: ["Python", "Flask", "Aiogram", "PHP", "SQL", "React", "HTML/CSS", "JavaScript", "Git", "Figma", "C#"],
      focus: ["Боты и API", "Парсинг", "Деплой на Linux", "Платежи", "Админ-панели"]
    },
    footer: "Создано для себя и клиентов",
    langToggle: "EN"
  },
  en: {
    nav: { services: "Services", packages: "Products", projects: "Projects", contact: "Contacts" },
    hero: {
      hello: "Hi, I'm",
      name: "FlorichDev",
      role: "Fullstack Developer",
      pitch: "I build bots for Telegram & MAX, and web apps end-to-end",
      ctaServices: "Services",
      ctaProjects: "Projects",
      exp: "3+ years experience",
      speed: "Fast and precise",
      full: "Full cycle: idea → launch"
    },
    about: {
      title: "About me",
      note: "19 y.o., Vadim",
      text: "I build solutions that solve business tasks via Telegram, MAX and the web. I own architecture, development, hosting setup, and support. I care about clear UX and stable integrations.",
      chips: ["Python", "Flask", "Aiogram", "PHP", "SQL", "React", "HTML/CSS", "JavaScript", "Git", "Figma", "C#"]
    },
    services: {
      title: "Services",
      hint: "Plain, fast, end-to-end",
      list: [
        { title: "Telegram bots", icon: "bot", desc: "Leads, FAQ, manager alerts — no extra complexity.", stack: "Leads · FAQ · Alerts", tags: ["Telegram", "Leads"], shots: shots("Telegram bots") },
        { title: "MAX bots", icon: "bot", desc: "Custom bots for MAX messenger: chat-bots, shops, integrations.", stack: "MAX API · Bots · Integrations", tags: ["MAX", "Bots"], shots: shots("MAX bots") },
        { title: "Shop bot", icon: "bot", desc: "Catalog, cart, payment and order statuses inside Telegram.", stack: "Catalog · Payment · Statuses", tags: ["Shop", "Payments"], shots: shots("Shop bot") },
        { title: "Landing / site", icon: "web", desc: "Offer page with form, analytics and quick edits.", stack: "Landing · Form · Analytics", tags: ["Site", "Leads"], shots: shots("Landing") },
        { title: "Manager dashboard", icon: "web", desc: "Simple web panel for requests, roles and notifications.", stack: "Requests · Roles · Alerts", tags: ["Dashboard", "Ops"], shots: shots("Dashboard") },
        { title: "Integrations & automation", icon: "automation", desc: "Connect forms, bot and email/CRM. Auto reports and exports.", stack: "Forms · CRM · Reports", tags: ["Automation", "API"], shots: shots("Integrations") },
        { title: "Payments & deploy", icon: "api", desc: "Payment hookup, domain, SSL, hosting and smoke tests.", stack: "Domain · SSL · Payment", tags: ["Deploy", "Payments"], shots: shots("Deploy") }
      ]
    },
    packages: {
      title: "Products and bundles",
      hint: "Add or edit blocks fast",
      list: [
        { title: "Telegram starter bot", icon: "bot", desc: "Leads intake, buttons, channel alerts.", price: "from $130", tags: ["Telegram", "Quick"], shots: shots("Starter bot") },
        { title: "MAX bot", icon: "bot", desc: "Custom bot for MAX messenger tailored to your needs.", price: "from $160", tags: ["MAX", "Custom"], shots: shots("MAX bot") },
        { title: "Shop bot", icon: "bot", desc: "Catalog, checkout, payment, manager alerts.", price: "from $270", tags: ["Payments", "CRM"], shots: shots("Shop bot") },
        { title: "Admin panel", icon: "web", desc: "Web dashboard for content, roles, analytics.", price: "from $190", tags: ["Dashboard", "React"], shots: shots("Admin panel") },
        { title: "Integrations/API", icon: "api", desc: "CRM links, payments, webhooks, reports.", price: "from $160", tags: ["API", "Automation"], shots: shots("Integrations") }
      ]
    },
    projects: {
      title: "Projects and focus",
      hint: "Sample tasks",
      list: [
        { name: "Support bot", icon: "bot", task: "Intake, queue and reminders for managers.", stack: "Intake · Queue · Alerts", role: "Flows, build, deploy.", tags: ["Support", "Leads"], shots: shots("Support chatbot") },
        { name: "Shop bot", icon: "bot", task: "Catalog, cart, payment, order statuses.", stack: "Catalog · Payment · Statuses", role: "Flow, payments, analytics.", tags: ["E-commerce", "Payments"], shots: shots("Shop bot") },
        { name: "Web dashboard", icon: "web", task: "Requests, roles and notifications in one place.", stack: "Roles · Requests · Alerts", role: "Data, UI, launch.", tags: ["Dashboard", "Ops"], shots: shots("Admin panel") },
        { name: "Landing + domain", icon: "web", task: "Offer page with form, domain, SSL and monitoring.", stack: "Landing · Domain · SSL", role: "Build, domain hookup, form checks.", tags: ["Site", "Deploy"], shots: shots("E-commerce site") }
      ],
      link: "Code and demos available on request"
    },
    contacts: {
      title: "Contacts",
      hint: "Choose any channel",
      tg: "Telegram",
      gh: "GitHub",
      mail: "Email",
      prompt: "Open to collaborate"
    },
    stack: {
      title: "Stack",
      sub: "Backend · Frontend · Tools",
      chips: ["Python", "Flask", "Aiogram", "PHP", "SQL", "React", "HTML/CSS", "JavaScript", "Git", "Figma", "C#"],
      focus: ["Bots and API", "Parsing", "Linux deploy", "Payments", "Admin panels"]
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
          }, title: props.labels.nav.services, "aria-label": props.labels.nav.services }, h("i", { className: icons.nav_services })),
        h("a", { href: "#packages", key: "packages", onClick: function onClick(e) {
            return props.onNavigate(e, "packages");
          }, title: props.labels.nav.packages, "aria-label": props.labels.nav.packages }, h("i", { className: icons.nav_packages })),
        h("a", { href: "#projects", key: "projects", onClick: function onClick(e) {
            return props.onNavigate(e, "projects");
          }, title: props.labels.nav.projects, "aria-label": props.labels.nav.projects }, h("i", { className: icons.nav_projects })),
        h("a", { href: "#contacts", key: "contacts", onClick: function onClick(e) {
            return props.onNavigate(e, "contacts");
          }, title: props.labels.nav.contact, "aria-label": props.labels.nav.contact }, h("i", { className: icons.nav_contacts })),
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
        " ",
        h("span", null, props.data.hero.pitch)
      ]),
      h("p", null, props.data.about.text),
      h("div", { className: "hero-actions" }, [
        h("a", { className: "btn primary", href: "#services", onClick: function onClick(e) {
            e.preventDefault();
            props.onScroll("services");
          } }, props.data.hero.ctaServices),
        h("a", { className: "btn", href: "#projects", onClick: function onClick(e) {
            e.preventDefault();
            props.onScroll("projects");
          } }, props.data.hero.ctaProjects)
      ]),
      h("div", { className: "stats" }, [
        h("div", { className: "stat" }, [
          h("strong", null, props.data.hero.exp),
          h("span", null, props.data.hero.speed)
        ]),
        h("div", { className: "stat" }, [
          h("strong", null, "FlorichDev"),
          h("span", null, props.data.hero.full)
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
          return h("div", { className: "badge", key: item }, item);
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
        return h("div", { className: "card", key: item.title, onClick: function onClick() {
          return props.onOpen(item);
        } }, [
          item.icon ? h("div", { className: "card-icon" }, h("i", { className: icons[item.icon] })) : null,
          h("h3", { className: "project-title" }, item.title),
          h("p", { className: "text" }, item.desc),
          h("div", { className: "chip-list" },
            item.tags.map(function (tag) {
              return h("span", { className: "chip", key: tag }, tag);
            })
          ),
          h("div", { className: "badge-row" },
            item.stack.split(",").map(function (el) {
              return h("div", { className: "badge", key: el }, el.trim());
            })
          )
        ]);
      })
    )
  ]);
}

function Packages(props) {
  return h("section", { id: "packages", className: "panel animate-right", "data-animate": "right" }, [
    h("div", { className: "title-line" }, [
      h("h2", null, props.data.packages.title),
      h("span", null, props.data.packages.hint)
    ]),
    h("div", { className: "grid two" },
      props.data.packages.list.map(function (item) {
        return h("div", { className: "card", key: item.title, onClick: function onClick() {
          return props.onOpen(item);
        } }, [
          item.icon ? h("div", { className: "card-icon" }, h("i", { className: icons[item.icon] })) : null,
          h("h3", { className: "project-title" }, item.title),
          h("p", { className: "text" }, item.desc),
          h("div", { className: "chip-list" },
            item.tags.map(function (tag) {
              return h("span", { className: "chip", key: tag }, tag);
            })
          ),
          h("div", { className: "badge-row" }, [
            h("div", { className: "badge" }, item.price)
          ])
        ]);
      })
    )
  ]);
}

function Projects(props) {
  return h("section", { id: "projects", className: "panel animate-left", "data-animate": "left" }, [
    h("div", { className: "title-line" }, [
      h("h2", null, props.data.projects.title),
      h("span", null, props.data.projects.hint)
    ]),
    h("div", { className: "projects-grid" },
      props.data.projects.list.map(function (item) {
        return h("div", { className: "card", key: item.name, onClick: function onClick() {
          return props.onOpen(item);
        } }, [
          item.icon ? h("div", { className: "card-icon" }, h("i", { className: icons[item.icon] })) : null,
          h("h3", { className: "project-title" }, item.name),
          h("p", { className: "project-meta" }, item.task),
          h("div", { className: "project-stack" }, item.stack),
          h("p", { className: "text" }, item.role),
          h("div", { className: "chip-list" },
            item.tags.map(function (tag) {
              return h("span", { className: "chip", key: tag }, tag);
            })
          ),
          h("div", { className: "divider" }),
          h("div", { className: "link-btn" }, [
            h("span", null, "↗"),
            h("span", null, props.data.projects.link)
          ])
        ]);
      })
    )
  ]);
}

function Contacts(props) {
  return h("section", { id: "contacts", className: "panel contacts animate-right", "data-animate": "right" }, [
    h("div", { className: "contact-card" }, [
      h("div", { className: "title-line" }, [
        h("h2", null, props.data.contacts.title),
        h("span", null, props.data.contacts.hint)
      ]),
      h("div", { className: "contact-icons" }, [
        h("a", { className: "contact-circle", href: "https://t.me/florichdev", target: "_blank", rel: "noreferrer", title: "Telegram", "aria-label": "Telegram" }, h("i", { className: icons.contact_tg })),
        h("a", { className: "contact-circle", href: "https://github.com/florichdev", target: "_blank", rel: "noreferrer", title: "GitHub", "aria-label": "GitHub" }, h("i", { className: icons.contact_gh })),
        h("a", { className: "contact-circle", href: "mailto:florichdev@gmail.com", title: "Email", "aria-label": "Email" }, h("i", { className: icons.contact_mail })),
        h("a", { className: "contact-circle", href: "https://kwork.ru/user/florichdev", target: "_blank", rel: "noreferrer", title: "Kwork", "aria-label": "Kwork" }, h("i", { className: icons.contact_kwork }))
      ]),
      h("div", { className: "form-actions", style: { marginTop: 12 } }, [
        h("p", { className: "text" }, props.data.contacts.prompt)
      ])
    ]),
    h("div", { className: "panel floating", style: { minHeight: "100%" } }, [
      h("form", { className: "form-grid", onSubmit: props.onSubmit }, [
        h("div", { className: "field" }, [
          h("label", null, props.lang === "ru" ? "Имя" : "Name"),
          h("input", { type: "text", value: props.formData.name, onChange: function onChange(e) {
              return props.onChange("name", e.target.value);
            }, placeholder: props.lang === "ru" ? "Ваше имя" : "Your name", autoComplete: "name" })
        ]),
        h("div", { className: "field" }, [
          h("label", null, props.lang === "ru" ? "Контакт" : "Contact"),
          h("input", { type: "text", value: props.formData.contact, onChange: function onChange(e) {
              return props.onChange("contact", e.target.value);
            }, placeholder: props.lang === "ru" ? "Телеграм или email" : "Telegram or email", autoComplete: "email" })
        ]),
        h("div", { className: "field" }, [
          h("label", null, props.lang === "ru" ? "Описание проекта" : "Project description"),
          h("textarea", { rows: 4, value: props.formData.desc, onChange: function onChange(e) {
              return props.onChange("desc", e.target.value);
            }, placeholder: props.lang === "ru" ? "Кратко о задаче" : "Describe your project" })
        ]),
        h("div", { className: "field" }, [
          h("label", null, props.lang === "ru" ? "Капча" : "Captcha"),
          h("div", { className: "captcha-row" }, [
            h("span", { className: "badge" }, props.captcha.question),
            h("input", {
              type: "text",
              inputMode: "numeric",
              value: props.captchaInput,
              onChange: function onChange(e) {
                return props.onCaptchaInput(e.target.value);
              },
              placeholder: props.lang === "ru" ? "Ответ" : "Answer",
              "aria-label": props.lang === "ru" ? "Ответ на капчу" : "Captcha answer"
            }),
            h("button", { className: "btn", type: "button", onClick: props.onRefreshCaptcha }, props.lang === "ru" ? "Обновить" : "Refresh")
          ])
        ]),
        h("div", { className: "form-actions" }, [
          h("button", { className: "btn primary", type: "submit", disabled: props.sending }, props.sending ? (props.lang === "ru" ? "Отправка..." : "Sending...") : (props.lang === "ru" ? "Отправить" : "Send")),
          props.formStatus ? h("span", { className: "status" }, props.formStatus) : null
        ])
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
  var title = props.item.title || props.item.name;
  var desc = props.item.desc || props.item.task || "";
  var role = props.item.role || "";
  var stack = props.item.stack || "";
  var closeLabel = props.lang === "ru" ? "Закрыть" : "Close";
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
          role ? h("p", { className: "text" }, role) : null,
          stack ? h("div", { className: "chip-list" },
            stack.split(",").map(function (el) {
              return h("div", { className: "badge", key: el }, el.trim());
            })
          ) : null,
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
          h("a", { className: "btn primary", href: TG_CONTACT_LINK, target: "_blank", rel: "noreferrer" }, props.contactLabel),
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
    var dot = document.querySelector(".cursor-dot");
    var single = document.querySelector(".cursor-trail");
    if (!single) {
      single = document.createElement("div");
      single.className = "cursor-trail";
      document.body.appendChild(single);
    }
    var inactivityTimer = null;

    function scheduleFade() {
      if (inactivityTimer) {
        clearTimeout(inactivityTimer);
      }
      inactivityTimer = setTimeout(function () {
        if (single) single.style.opacity = "0";
      }, TRAIL_SETTINGS.inactivityTimeout);
    }

    var move = function move(e) {
      if (e.pointerType && e.pointerType !== "mouse") {
        if (dot) dot.style.opacity = "0";
        if (single) single.style.opacity = "0";
        return;
      }
      if (!effectsOn) {
        if (dot) dot.style.opacity = "0";
        if (single) single.style.opacity = "0";
        return;
      }
      if (dot) {
        dot.style.opacity = "1";
        dot.style.transform = "translate(".concat(e.clientX, "px, ").concat(e.clientY, "px)");
      }
      if (single) {
        var size = TRAIL_SETTINGS.size;
        single.style.opacity = "1";
        single.style.width = "".concat(size, "px");
        single.style.height = "".concat(size, "px");
        single.style.left = "".concat(e.clientX - size / 2, "px");
        single.style.top = "".concat(e.clientY - size / 2, "px");
      }
      scheduleFade();
    };

    window.addEventListener("pointermove", move);
    window.addEventListener("mousemove", move);
    if (dot) dot.style.opacity = effectsOn ? "1" : "0";
    if (single) single.style.opacity = effectsOn ? "1" : "0";

    return function () {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("mousemove", move);
      if (inactivityTimer) {
        clearTimeout(inactivityTimer);
      }
      if (single) {
        single.remove();
      }
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
    var timer2;
    if (pre) {
      timer = setTimeout(function () {
        pre.classList.add("hidden");
      }, 700);
      timer2 = setTimeout(function () {
        pre.style.display = "none";
      }, 1300);
    }
    return function () {
      if (timer) clearTimeout(timer);
      if (timer2) clearTimeout(timer2);
    };
  }, []);

  React.useEffect(function () {
    var canvas = document.getElementById("matrix");
    if (!canvas) return undefined;
    var ctx = canvas.getContext("2d");
    var w = 0;
    var hgt = 0;
    var cols = 0;
    var drops = [];
    var chars = "10100111001";
    var fontSize = 16;
    var id;
    function resize() {
      w = canvas.width = window.innerWidth;
      hgt = canvas.height = window.innerHeight;
      cols = Math.floor(w / fontSize);
      drops = Array(cols).fill(0).map(function () {
        return Math.random() * (hgt / fontSize);
      });
    }
    function draw() {
      if (!effectsOn) {
        ctx.clearRect(0, 0, w, hgt);
        return;
      }
      ctx.fillStyle = "rgba(9, 8, 13, 0.12)";
      ctx.fillRect(0, 0, w, hgt);
      ctx.fillStyle = "rgba(215, 38, 61, 0.6)";
      ctx.font = fontSize + "px RFDewi, Montserrat, sans-serif";
      drops.forEach(function (y, i) {
        var text = chars[Math.floor(Math.random() * chars.length)];
        var x = i * fontSize;
        ctx.fillText(text, x, y * fontSize);
        if (y * fontSize > hgt && Math.random() > 0.995) {
          drops[i] = 0;
        } else {
          drops[i] = y + 0.25;
        }
      });
    }
    function loop() {
      draw();
      id = requestAnimationFrame(loop);
    }
    resize();
    loop();
    window.addEventListener("resize", resize);
    return function () {
      cancelAnimationFrame(id);
      window.removeEventListener("resize", resize);
      ctx.clearRect(0, 0, w, hgt);
    };
  }, [effectsOn]);

  React.useEffect(function () {
    var esc = function esc(e) {
      if (e.key === "Escape") {
        setModalItem(null);
      }
    };
    window.addEventListener("keydown", esc);
    return function () {
      window.removeEventListener("keydown", esc);
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
        } else {
          entry.target.classList.remove("visible");
        }
      });
    }, { threshold: 0.25, rootMargin: "0px 0px -10% 0px" });
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
  var contactLabel = lang === "ru" ? "Связаться" : "Contact";

  function scrollToId(id) {
    if (!id) return;
    var el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    if (IS_HTTP && window && window.history && window.location) {
      var cleanUrl = window.location.pathname + window.location.search;
      window.history.replaceState(null, "", cleanUrl);
    }
  }

  function openItem(item) {
    setModalItem(item);
    setShotIndex(0);
    setNavOpen(false);
  }

  function nextShot() {
    if (!modalItem || !modalItem.shots) {
      return;
    }
    setShotIndex(function (prev) {
      var len = modalItem.shots.length;
      return (prev + 1) % len;
    });
  }

  function prevShot() {
    if (!modalItem || !modalItem.shots) {
      return;
    }
    setShotIndex(function (prev) {
      var len = modalItem.shots.length;
      return (prev - 1 + len) % len;
    });
  }

  function toggleNav() {
    setNavOpen(function (p) {
      return !p;
    });
  }

  function onNavigate(e, id) {
    if (e && e.preventDefault) e.preventDefault();
    setNavOpen(false);
    var targetId = id || (e && e.currentTarget && e.currentTarget.getAttribute("href") ? e.currentTarget.getAttribute("href").replace("#", "") : "");
    scrollToId(targetId);
  }

  function onToggleEffects() {
    setEffectsOn(function (prev) {
      return !prev;
    });
  }

  function onFormChange(field, value) {
    setFormData(function (prev) {
      var next = Object.assign({}, prev);
      next[field] = value;
      return next;
    });
  }

  function refreshCaptcha() {
    setCaptcha(generateCaptcha());
    setCaptchaInput("");
  }

  function onFormSubmit(e) {
    e.preventDefault();
    setFormStatus("");
    var name = formData.name.trim();
    var contact = formData.contact.trim();
    var desc = formData.desc.trim();

    if (!name || !contact || !desc) {
      setFormStatus(lang === "ru" ? "Заполните все поля" : "Fill all fields");
      return;
    }
    if (name.length > MAX_NAME_LEN) {
      setFormStatus(lang === "ru" ? "Имя слишком длинное" : "Name is too long");
      return;
    }
    if (contact.length > MAX_CONTACT_LEN) {
      setFormStatus(lang === "ru" ? "Контакт слишком длинный" : "Contact is too long");
      return;
    }
    if (desc.length > MAX_DESC_LEN) {
      setFormStatus(lang === "ru" ? "Описание слишком длинное" : "Description too long");
      return;
    }
    var isTg = CONTACT_REGEX.test(contact);
    var isEmail = EMAIL_REGEX.test(contact);
    if (!isTg && !isEmail) {
      setFormStatus(lang === "ru" ? "Укажите @username или почту" : "Use @username or email");
      return;
    }
    if (parseInt(captchaInput, 10) !== captcha.answer) {
      setFormStatus(lang === "ru" ? "Неверная капча" : "Captcha is incorrect");
      refreshCaptcha();
      return;
    }
    if (TG_TOKEN.indexOf("REPLACE") !== -1 || TG_CHAT_ID.indexOf("REPLACE") !== -1) {
      setFormStatus(lang === "ru" ? "Укажите TG токен и chat_id в app.js" : "Set TG token and chat_id in app.js");
      return;
    }
    setSending(true);
    var text = "Имя: " + name + "\nКонтакт: " + contact + "\nОписание: " + desc;
    fetch("https://api.telegram.org/bot" + TG_TOKEN + "/sendMessage", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: TG_CHAT_ID, text: text, parse_mode: "HTML" })
    }).then(function (res) {
      if (!res.ok) {
        throw new Error("Failed");
      }
      setFormStatus(lang === "ru" ? "Отправлено" : "Sent");
      setFormData({ name: "", contact: "", desc: "" });
      refreshCaptcha();
      setCaptchaInput("");
    }).catch(function () {
      setFormStatus(lang === "ru" ? "Ошибка отправки" : "Send error");
    }).finally(function () {
      setSending(false);
    });
  }

  return h("div", { className: "page" }, [
    h("div", { className: "glow" }),
    h(Header, {
      lang: lang,
      onLang: function onLang() {
        return setLang(lang === "ru" ? "en" : "ru");
      },
      labels: data,
      navOpen: navOpen,
      onBurger: toggleNav,
      onNavigate: onNavigate,
      onToggleEffects: onToggleEffects,
      effectsOn: effectsOn
    }),
    h("main", { className: "shell" }, [
      h(Hero, { data: data, onScroll: scrollToId }),
      h("div", { className: "divider" }),
      h(Services, { data: data, onOpen: openItem }),
      h("div", { className: "divider" }),
      h(Packages, { data: data, onOpen: openItem }),
      h("div", { className: "divider" }),
      h(Projects, { data: data, onOpen: openItem }),
      h("div", { className: "divider" }),
      h(Contacts, {
        data: data,
        lang: lang,
        formData: formData,
        onChange: onFormChange,
        onSubmit: onFormSubmit,
        sending: sending,
        formStatus: formStatus,
        captcha: captcha,
        captchaInput: captchaInput,
        onCaptchaInput: setCaptchaInput,
        onRefreshCaptcha: refreshCaptcha
      })
    ]),
    h(Footer, { data: data }),
    h(BackToTop, { show: showTop, onClick: function onClick() {
        return window.scrollTo({ top: 0, behavior: "smooth" });
      } }),
    h(Modal, {
      item: modalItem,
      index: shotIndex,
      lang: lang,
      onClose: function onClose() {
        return setModalItem(null);
      },
      onNext: nextShot,
      onPrev: prevShot,
      contactLabel: contactLabel
    })
  ]);
}

var root = ReactDOM.createRoot(document.getElementById("root"));
root.render(h(App));

