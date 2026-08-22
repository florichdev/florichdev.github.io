var CACHE = "florichdev-v2";
var ASSETS = [
  "./",
  "./index.html",
  "./assets/style.css",
  "./assets/app.js",
  "./assets/images/logo-icon.svg",
  "./favicon.svg",
  "./manifest.json"
];

self.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open(CACHE).then(function (cache) {
      return cache.addAll(ASSETS);
    })
  );
  self.skipWaiting();
});

self.addEventListener("activate", function (event) {
  event.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(
        keys.filter(function (key) { return key !== CACHE; }).map(function (key) {
          return caches.delete(key);
        })
      );
    })
  );
  self.clients.claim();
});

self.addEventListener("fetch", function (event) {
  if (event.request.method !== "GET") return;
  event.respondWith(
    caches.match(event.request).then(function (cached) {
      if (cached) return cached;
      return fetch(event.request).then(function (response) {
        // Кэшируем успешные и opaque (cross-origin без CORS) ответы
        if (!response || (response.status !== 200 && response.type !== "opaque")) {
          return response;
        }
        var copy = response.clone();
        caches.open(CACHE).then(function (cache) {
          cache.put(event.request, copy);
        });
        return response;
      }).catch(function () {
        // Офлайн-фоллбэк: для навигационных запросов отдаём кэшированный index.html
        if (event.request.mode === "navigate") {
          return caches.match("./index.html");
        }
      });
    })
  );
});
