importScripts('/cache-polyfill.js');

self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('restaurants').then(function(cache) {
     return cache.addAll([
       '/index.html',
       '/css/styles.css',
       '/css/styles_override.css',
       '/js/main.js',
       '/js/restaurant_info.js',
       '/js/dbhelper.js'
     ]);
   })
 );
});

self.addEventListener('fetch', function(event) {
 event.respondWith(
   caches.match(event.request).then(function(response) {
     return response || fetch(event.request);
   })
 );
});
