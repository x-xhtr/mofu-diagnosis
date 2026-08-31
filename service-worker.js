const CACHE='mofu-v0.8.1-beta';
const ASSETS=[
  './','./index.html','./prompts.html','./rules.html','./styles.css','./app.js','./prompts.js','./manifest.webmanifest',
  './icons/icon-192.png','./icons/icon-512.png',
  './assets/mascots/user.webp','./assets/mascots/ai.webp','./assets/mascots/pair.webp',
  './assets/branding/hero-seaside.webp','./assets/branding/ai-icon.webp','./assets/social/mofu-card.jpg',
  ...Array.from({length:16},(_,i)=>`./assets/cards/${String(i+1).padStart(2,'0')}.webp`),
  ...Array.from({length:16},(_,i)=>`./assets/originals/${String(i+1).padStart(2,'0')}.webp`)
];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>{
  if(e.request.method!=='GET') return;
  e.respondWith(caches.match(e.request).then(hit=>hit||fetch(e.request).then(res=>{
    const copy=res.clone(); caches.open(CACHE).then(c=>c.put(e.request,copy)); return res;
  }).catch(()=>caches.match('./index.html'))));
});
