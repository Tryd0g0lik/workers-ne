// serwiceWorker\src\some-best-cache\index.ts

// стратегии кеша
// const cf = require('./cache-then-fetch');
// const fetchThenCache = require('@strategy-FetchThenCache');

const { priorityStaticFiles: cacher } = require('./cacher');
const CACHE_PRIORITY_URLS = ['/frontend.js', '/index.html', '/main.css', '/pic/bg_buggy.png', '/'];

self.addEventListener('install', (ev: any) => {
	ev.waitUntil(cacher());
});

self.addEventListener('activate', (ev: any) => { console.log('Activated') });

self.addEventListener('fetch', async (ev: any) => {

	// 'ev.respondWith' - для ответа , чаще всего это кэшом
	console.log('[some-best-cache]: It is an Event Fetch');
	ev.respondWith(
		caches.match(ev.request)
	);
	// !matching ?? console.log(`[some-best-cache]: cache.match(ev.request); It worked; no-matching`);
	// console.log(`[some-best-cache]: cache.match(ev.request); It worked; matching: ${matching}`);



	// const url = new URL(ev.request.url);
	// console.log('[some-best-cache: It is an CACHE_PRIORITY_URLS]: ', CACHE_PRIORITY_URLS.includes(url.pathname), 'url.pathname: ', url.pathname);

	// if (CACHE_PRIORITY_URLS.includes(url.pathname)) {
	// 	console.log("[some-best-cache: It is a CACHE_PRIORITY_URLS]")
	// fetchThenCache.fetchPriorityThenCache(ev);
	// ev.respondWith(cf.cachePriorityThenFethc(ev));
	// return
	// }
});

self.addEventListener('message', (ev: any) => {

})


