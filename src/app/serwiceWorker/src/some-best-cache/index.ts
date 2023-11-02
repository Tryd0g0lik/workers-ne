// src\app\serwiceWorker\src\index.ts

// стратегии кеша
const cf = require('./cache-then-fetch');
const fetchCache = require('./fetch-then-cache')
const { fun: cacher } = require('./cacher');
const CACHE_PRIORITY_URLS = ['/frontend.js', '/index.html', '/main.css', '/pic/bg_buggy.png', '/'];

self.addEventListener('install', (ev: any) => {
	ev.waitUntil(cacher());
});

self.addEventListener('activate', (ev: any) => { console.log('Activated') });

self.addEventListener('fetch', (ev: any) => {

	console.log('[some-best-cache: It is an Event Fetch]');
	const url = new URL(ev.request.url);
	console.log('[some-best-cache: It is an CACHE_PRIORITY_URLS]: ', CACHE_PRIORITY_URLS.includes(url.pathname), 'url.pathname: ', url.pathname);

	if (CACHE_PRIORITY_URLS.includes(url.pathname)) {
		console.log("[some-best-cache: It is a CACHE_PRIORITY_URLS]")

		ev.respondWith(cf.cachePriorityThenFethc(ev));
		return
	}
});

self.addEventListener('message', (ev: any) => {

})


