!function(){"use strict";const e=1627301319109,t=`cache${e}`,n=["/client/client.b42c9420.js","/client/inject_styles.5607aec6.js","/client/index.25fa7d5c.js","/client/Subscriptions.4abf3132.js","/client/PageNotFound.25e71a95.js","/client/Explore.73ca55f8.js","/client/Player.a9bd2fa1.js","/client/index_.1509174a.js","/client/Video.888655d2.js","/client/about.24553dfb.js","/client/index.36547903.js","/client/[slug].edc643dc.js"].concat(["/service-worker-index.html","/favicon.png","/global.css","/logo-192.png","/logo-512.png","/manifest.json"]),s=new Set(n);self.addEventListener("install",(e=>{e.waitUntil(caches.open(t).then((e=>e.addAll(n))).then((()=>{self.skipWaiting()})))})),self.addEventListener("activate",(e=>{e.waitUntil(caches.keys().then((async e=>{for(const n of e)n!==t&&await caches.delete(n);self.clients.claim()})))})),self.addEventListener("fetch",(t=>{if("GET"!==t.request.method||t.request.headers.has("range"))return;const n=new URL(t.request.url),c=n.protocol.startsWith("http"),a=n.hostname===self.location.hostname&&n.port!==self.location.port,i=n.host===self.location.host&&s.has(n.pathname),o="only-if-cached"===t.request.cache&&!i;!c||a||o||t.respondWith((async()=>i&&await caches.match(t.request)||async function(t){const n=await caches.open(`offline${e}`);try{const e=await fetch(t);return n.put(t,e.clone()),e}catch(e){const s=await n.match(t);if(s)return s;throw e}}(t.request))())}))}();
