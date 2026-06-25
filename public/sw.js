// Very small service worker - caches basic assets. Replace with Workbox or next-pwa for production.
const CACHE_NAME = 'photolab-edu-v1'
const urlsToCache = ['/', '/favicon.ico', '/manifest.json']

self.addEventListener('install', (event) => {
  // @ts-ignore
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache)
    })
  )
})

self.addEventListener('fetch', (event) => {
  // @ts-ignore
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request)
    })
  )
})
