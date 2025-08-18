// sw.js — minimal pour activer l'installabilité
self.addEventListener('install', evt => self.skipWaiting());
self.addEventListener('activate', evt => evt.waitUntil(clients.claim()));

self.addEventListener('fetch', event => {
  event.respondWith(
    fetch(event.request).catch(() => new Response('Hors ligne.'))
  );
});
