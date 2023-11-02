// src\app\serwiceWorker\src\some-best-cache\cache-then-fetch\index.ts

async function cachePriorityThenFethc(ev: any) {
	console.log('[csche-then-fetch: a cachePriorityThenFeth is begining]');

	let response: any;
	const requests = ev.request;
	console.log('[csche-then-fetch: requests]: ', requests);
	response = await caches.match(requests);

	if (response) {
		console.log('[csche-then-fetch: a cacheResponse variable is true]');
		return response
	}

	try {
		response = await fetch(requests);
		response
			.then(async (resp: any) => {
				console.log('[CACHE-NEWS: resp]: ', resp);

				console.log('[csche-then-fetch: It is cachePriorityThenFeth has an Fetch]');
				return response
			});

		console.log('[csche-then-fetch: cachePriorityThenFeth; caches.open("v1")]');
		const cache = await caches.open('v1');
		cache.put(requests, response.clone());
	} catch (err: any) {
		console.log('[csche-then-fetch: It is cachePriorityThenFeth has an error]');
		return
	}


}
