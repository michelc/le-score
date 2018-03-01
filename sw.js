// sw.js
self.addEventListener('install', e => {
  e.waitUntil(
    // Après l'installation du service worker,
    // ouvre un nouveau cache
    caches.open('ls-cache-pwa').then(cache => {
      // Ajoute toutes les URLs des éléments à mettre en cache
      return cache.addAll([
        '/',
        '/index.html',
        '/normalize.css',
        '/le-score.css',
        '/favicon.ico',
        '/icons/apple-touch-icon.png',
        '/icons/favicon-32x32.png',
        '/icons/favicon-16x16.png',
        '/icons/safari-pinned-tab.svg',
        '/icons/browserconfig.xml',
        '/icons/android-chrome-192x192.png',
        '/icons/android-chrome-512x512.png',
        '/rk.js',
      ]);
    })
  );
});
