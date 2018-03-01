// sw.js
self.addEventListener('install', e => {
  e.waitUntil(
    // Après l'installation du service worker,
    // ouvre un nouveau cache
    caches.open('ls-cache-pwa').then(cache => {
      // Ajoute toutes les URLs des éléments à mettre en cache
      return cache.addAll([
        '/le-score/index.html',
        'normalize.css',
        'le-score.css',
        '/le-score/favicon.ico',
        '/le-score/icons/apple-touch-icon.png',
        '/le-score/icons/favicon-32x32.png',
        '/le-score/icons/favicon-16x16.png',
        '/le-score/icons/safari-pinned-tab.svg',
        '/le-score/icons/browserconfig.xml',
        '/le-score/icons/android-chrome-192x192.png',
        '/le-score/icons/android-chrome-512x512.png',
        '/le-score/rk.js',
      ]);
    })
  );
});
