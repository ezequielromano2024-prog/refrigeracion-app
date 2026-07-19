// Service worker mínimo, solo para habilitar la instalación como PWA.
// No cachea nada: el Panel Madre siempre necesita conexión para Firestore.
self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  self.clients.claim();
});

self.addEventListener('fetch', (e) => {
  // Sin cache: dejamos pasar todo tal cual a la red.
});
