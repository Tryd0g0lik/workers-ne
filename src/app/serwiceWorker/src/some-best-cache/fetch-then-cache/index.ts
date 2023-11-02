// src\app\serwiceWorker\src\some-best-cache\fetch-then-cache\index.ts

/* проблемная */
async function fetchPriorityThenCache(ev: any) {
	let response: any;

	try {
		response = await fetch(ev.request);
		if (response) {

			const cache = await caches.open('cache-news');
			cache.put(ev.request, response.clone())
			return response
		}

	} catch (err: any) {
		console.log('[news-public: it is fetchPriorityThenCache has an error]');
		const cacheResponse = await caches.match(ev.request);
		if (cacheResponse) { return cacheResponse }
	}
}

module.exports = { fetchPriorityThenCache }
