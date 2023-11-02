// src\app\serwiceWorker\src\some-best-cache\cache-then-fetch\index.ts

async function cachePriorityThenFethc(ev: any) {
	console.log('[csche-then-fetch: a cachePriorityThenFeth is beginning]');
	let response: any;
	const cacheResponse = await caches.match(ev.request);

	if (cacheResponse) {
		console.log('[csche-then-fetch: a cacheResponse variable is true]');
		return cacheResponse
	}

	try {
		response = await fetch(ev.request);

	} catch (err: any) {
		console.log('[csche-then-fetch: It is cachePriorityThenFeth has an error]');
		return
	}

	const cache = await caches.open('v1');
	cache.put(ev.request, response.clone());

	return response
}


module.exports = { cachePriorityThenFethc }
