// src\app\serwiceWorker\src\index.ts
// стратегии кеша
const cf = require('./cache-then-fetch');
const fetchCache = require('./fetch-then-cache')
const CACHE_PRIORITY_URLS = ['/frontend.js'];
const FETCH_PRIORITY_URLS = ['/index.html', '/main.css', '/pic/bg_buggy.png']


// serwiceWorker - прописать конфики для tsc


self.addEventListener('install', (ev: any) => {
	function fun() {
		console.log("[news-public: Genereter cache beginning to working]");
		caches.open('v1') // Создаём кеш с именем "cache-page"
			.then((cache: any) => {
				return cache.addAll([ // передаем те url которые хотим закешировать
					'./',
					'./index.html',
					'./main.css',
					'./pic/bg_buggy.png',
				])
			})
			.finally(() => {
				console.log("[news-public: v1 cache was completed]")
			});

		caches.open('v2') // Создаём кеш который меняется редко с именем "cache-page"
			.then((cache: any) => {
				return cache.add('/frontend.js')
			})
			.finally(() => {
				console.log('[news-public: v2 cache was completed]');
			});
	}

	ev.waitUntil(
		fun()

	)
});

self.addEventListener('activate', (ev: any) => { console.log('Activated') });

self.addEventListener('fetch', (ev: any) => {
	console.log('[news-public: It is an Event Fetch]');
	console.log('[news-public: ev.request.url]: ', ev.request.url);
	const url = new URL(ev.request.url);
	console.log('[news-public: It is an CACHE_PRIORITY_URLS]: ', CACHE_PRIORITY_URLS.includes(url.pathname));

	if (CACHE_PRIORITY_URLS.includes(url.pathname)) {
		console.log("[news-public: It is a CACHE_PRIORITY_URLS]")

		ev.respondWith(cf.cachePriorityThenFethc(ev));
		return
	}

	console.log('[news-public: It is an FETCH_PRIORITY_URLS]: ', FETCH_PRIORITY_URLS.includes(ev.request.url));
	if (FETCH_PRIORITY_URLS.includes(ev.request.url)) {
		console.log("[news-public: It is a FETCH_PRIORITY_URLS]")
		ev.respondWith(fetchCache.fetchPriorityThenCache(ev));
		return
	}
});

self.addEventListener('message', (ev: any) => {

})


