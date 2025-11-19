const CACHE_NAME = 'modelsim-cache-v1';

// Lista de archivos y librerías externas que tu app necesita para funcionar offline
const urlsToCache = [
  './', // Alias para index.html
  './index.html', // O el nombre de tu archivo html actual
  './manifest.json',
  './assets/icon-192.png',
  './assets/icon-512.png',
  // CDNs que usa tu HTML (Extraídos de tu código)
  'https://cdn.tailwindcss.com/',
  'https://cdn.jsdelivr.net/npm/chart.js',
  'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap',
  'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined'
];

// 1. Instalación: Descarga y guarda los archivos en caché
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Abriendo caché y guardando recursos');
        return cache.addAll(urlsToCache);
      })
  );
});

// 2. Activación: Limpia cachés antiguas si actualizas la versión
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// 3. Interceptación de peticiones (Fetch):
// Intenta servir desde caché primero, si no está, va a internet.
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Si el recurso está en caché, lo devuelve
        if (response) {
          return response;
        }
        // Si no, hace la petición a la red
        return fetch(event.request).then(
          (networkResponse) => {
            // Opcional: Podríamos guardar dinámicamente nuevas peticiones aquí
            return networkResponse;
          }
        );
      })
  );
});