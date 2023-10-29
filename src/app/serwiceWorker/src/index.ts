// src\app\serwiceWorker\src\index.ts
// стратегии кеша

const CACHE_PRIORITY_URLS = ['/frontend.js'];
const FETCH_PRIORITY_URLS = ['/', '/index.html', '/main.css', '/pic/bg_buggy.png']

async function cachePriorityThenFeth(ev: any) {
	let response: any;
	const cacheResponse = await caches.match(ev.request);

	if (cacheResponse) {
		return cacheResponse
	}
	try {
		response = await fetch(ev.request);

	} catch (err: any) {
		return
	}

	const cache = await caches.open('v1');
	cache.put(ev.request, response.clone());

	return response
}

async function fetchPriorityThenCache(ev: any) {
	let response: any;

	try {
		response = await fetch(ev.request);

	} catch (err: any) {
		const cacheResponse = await caches.match(ev.request);
		if (cacheResponse) { return cacheResponse }
	}


	const cache = await caches.open('v2');
	cache.put(ev.request, response.clone());
	return response
}


self.addEventListener('install', (ev: any) => {
	function fun() {
		caches.open('v1') // Создаём кеш с именем "cache-page"
			.then((cache: any) => {
				return cache.addAll([ // передаем те url которые хотим закешировать
					'./',
					'./index.html',
					'./main.css',
					'./pic/bg_buggy.png'
				])
			});
		caches.open('v2') // Создаём кеш который меняется редко с именем "cache-page"
			.then((cache: any) => {
				return cache.add('/frontend.js')
			})
	}

	ev.waitUntil(
		fun()
	)
});

self.addEventListener('activate', (ev: any) => { console.log('Activated') });

self.addEventListener('fetch', (ev: any) => {
	console.log('[Request to the server]');

	const url = new URL(ev.request.url);

	if (CACHE_PRIORITY_URLS.includes(url.pathname)) {
		ev.respondWith(cachePriorityThenFeth(ev));
		return
	}
	if (FETCH_PRIORITY_URLS.includes(ev.request.url)) {
		ev.respondWith(fetchPriorityThenCache(ev));
		return
	}
});

self.addEventListener('message', (ev: any) => {

})


