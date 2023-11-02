// src\app\serwiceWorker\src\index.ts

// стратегии кеша
const cf = require('./cache-then-fetch');
const fetchCache = require('./fetch-then-cache')

const CACHE_PRIORITY_URLS = ['./', '/frontend.js', '/index.html', '/main.css', '/pic/bg_buggy.png'];
// const FETCH_PRIORITY_URLS = []

// E:\Netologe\NetologeJavaScript3\workers-ne\src\app\serwiceWorker\src\index.ts
// E:\Netologe\NetologeJavaScript3\workers-ne\src\app\serwiceWorker\src\some-best-cache\index.ts

// serwiceWorker - прописать конфики для tsc


self.addEventListener('install', (ev: any) => {
	function fun() {
		console.log("[some-best-cache: Genereter cache beginning to working]");
		caches.open('v1') // Создаём кеш с именем "cache-page"
			.then((cache: any) => {
				return cache.addAll([ // передаем те url которые хотим закешировать
					'./',
					'./index.html',
					'./main.css',
					'./pic/bg_buggy.png',
					'/frontend.js'
				])
			})
			.finally(() => {
				console.log("[some-best-cache: v1 cache was completed]")
			});

		// caches.open('v2') // Создаём кеш который меняется редко с именем "cache-page"
		// 	.then((cache: any) => {
		// 		return cache.add('')
		// 	})
		// 	.finally(() => {
		// 		console.log('[some-best-cache: v2 cache was completed]');
		// 	});
	}

	ev.waitUntil(
		fun()

	)
});

self.addEventListener('activate', (ev: any) => { console.log('Activated') });

self.addEventListener('fetch', (ev: any) => {
	console.log('[some-best-cache: It is an Event Fetch]');
	// console.log('[some-best-cache: ev.request.url]: ', ev.request.url);
	const url = new URL(ev.request.url);
	console.log('[some-best-cache: It is an CACHE_PRIORITY_URLS]: ', CACHE_PRIORITY_URLS.includes(url.pathname), 'url.pathname: ', url.pathname);

	if (CACHE_PRIORITY_URLS.includes(url.pathname)) {
		console.log("[some-best-cache: It is a CACHE_PRIORITY_URLS]")

		ev.respondWith(cf.cachePriorityThenFethc(ev));
		return
	}
	/* проблемная */
	// console.log('[some-best-cache: It is an FETCH_PRIORITY_URLS]: ', FETCH_PRIORITY_URLS.includes(ev.request.url));
	// if (FETCH_PRIORITY_URLS.includes(ev.request.url)) {
	// 	console.log("[some-best-cache: It is a FETCH_PRIORITY_URLS]")
	// 	ev.respondWith(fetchCache.fetchPriorityThenCache(ev));
	// 	return
	// }
});

self.addEventListener('message', (ev: any) => {

})


