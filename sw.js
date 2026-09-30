const CACHE="color-clash-v7";
self.addEventListener("install",e=>{self.skipWaiting()});
self.addEventListener("activate",e=>{
  e.waitUntil(
    caches.keys()
      .then(keys=>Promise.all(keys.filter(k=>k.startsWith("color-clash-")).map(k=>caches.delete(k))))
      .then(()=>self.clients.claim())
  )
});
// Intentionally no fetch handler: always use the network for the app shell.
// This prevents an installed iOS PWA from being trapped on an old HTML/JS build.
