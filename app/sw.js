const CACHE_STACTIC_NAME = "static-v5";
const CACHE_DYNAMIC_NAME = "dynamic-v5";

self.addEventListener("install", function (event) {
  console.log("Service Worker installing.", event);
  event.waitUntil(
    caches.open(CACHE_STACTIC_NAME).then((cache) => {
      console.log("Service Worker caching static data.");
      cache.addAll([
        "/",
        "/index.html",
        "/manifest.json",
        "/main.bundle.js",
        "/main.css",
        "/assets/TimerPWA-logos_transparent.png",
        "/assets/estandar_italic.woff2",
        "/assets/estandar.woff2",
        "/assets/handmade.woff2",
        "/assets/fairy.mp3",
      ]);
    })
  );
});

self.addEventListener("activate", function (event) {
  console.log("Service Worker activating.", event);

  event.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(
        keyList.map((key) => {
          if (key !== CACHE_STACTIC_NAME && key !== CACHE_DYNAMIC_NAME) {
            console.log("Service Worker removing old cache.", key);
            return caches.delete(key);
          }
        })
      );
    })
  );

  return self.clients.claim();
});

self.addEventListener("fetch", function (event) {
  event.respondWith(
    caches.match(event.request).then((response) => {
      if (response) {
        return response;
      } else {
        return fetch(event.request).then((response) => {
          caches
            .open(CACHE_DYNAMIC_NAME)
            .then((cache) => {
              cache.put(event.request.url, response.clone());
              return response;
            })
            .catch((err) => console.log(err));
        });
      }
    })
  );
});
