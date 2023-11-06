// serwiceWorker\src\some-best-cache\fetch-then-cache\index.ts

const { priorityData: priority } = require('@priority-data');

/**
 * for a import to another page it's the name '@strategy-FetchThenCache'.
 * Ещ еру утекфтсу It's only strategy for an  Event or datas.
 * @param ev: It's an event. here a reguest is geting need -  'ev.request'
 * @param datas: type is 'object'|| JSON. It's datas for cacher. Example:  "{'gaz':[...]}" - it is the listed news.
 * @param datasName: it's a key ('datas[datasName]') to geting the datas OR a path  from the ev.requiest.
 * 		here a path is inserting It is the key for the datas from the cache.
 * @returns 'Promise<object | void>'
 */
async function fetchPriorityThenCache(ev?: any, datas?: object, datasName?: string): Promise<object | void> {

	console.log(`[fetch-then-cache]:
		ev?: ${Object.entries(ev)},

		datas?: ${typeof datas},
		 datasName: ${datasName}
	`);
	let responce: any;
	let cache: any;

	if (datas as object) {
		priority(datas);
		return datas

	}
	// else if (Object.entries(ev)) {
	// if (ev.request) {
	// void
	// }

	// try {
	// 	console.log(`[serwiceWorker\src\some-best-cache\fetch-then-cache\index.ts]: ev: ${ev} ev.keys: ${ev.keys()}, ev.request: ${ev.request}`);
	// 	responce = await fetch(ev.request);
	// 	responce
	// 		.then((resp: any) => {
	// 			const result = resp.clone();
	// 			const dataJson = JSON.parse(result[(datasName as string)]);
	// 			/* Below's the line for cache. It's a cache sending for news */
	// 			csd(dataJson);
	// 			/* ----------end---------- */
	// 			return resp
	// 		});
	// 	return responce
	// } catch (err: any) {
	// 	console.log('[serwiceWorker\src\some-best-cache\fetch-then-cache\index.ts]: it is fetchPriorityThenCache has an error');
	// 	cache = await caches.match(ev.request);


	// 	if (cache) {
	// 		responce = cache.open('cache-news');
	// 		return responce
	// 	}
	// }
	// } else if (!ev && !datas) {
	// 	console.log('[serwiceWorker\src\some-best-cache\fetch-then-cache\index.ts]: Here is a "else if (!ev && !datas)". Answered - "responce" ');
	// 	responce = undefined
	// 	responce = await caches.match(datasName as string);
	// 	console.log(`[serwiceWorker\src\some-best-cache\fetch-then-cache\index.ts]:  responce: ${responce}`);
	// 	if (!responce) { return }
	// 	console.log('[serwiceWorker\src\some-best-cache\fetch-then-cache\index.ts]: Here is a "else if (!ev && !datas)". Answered - "responce" ', responce);
	// 	return responce

	// }
}

module.exports = { fetchPriorityThenCache }
