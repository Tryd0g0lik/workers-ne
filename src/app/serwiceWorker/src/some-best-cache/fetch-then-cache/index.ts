// serwiceWorker\src\some-best-cache\fetch-then-cache\index.ts

const { priorityData: csd } = require('@priority-data');

/**
 * It's only strategy for an  Event or datas.
 * @param ev: It's an event. here a reguest is geting need -  'ev.request'
 * @param datas: type is 'object'|| JSON. It's datas for cacher. Example:  "{'gaz':[...]}" - it is the listed news.
 * @param datasName: it's a key to geting the datas
 * @returns 'Promise<object | void>'
 */
async function fetchPriorityThenCache(ev?: any, datas?: object, datasName?: string): Promise<object | void> {
	let responce: any;
	let cache: any;

	if (datas) {
		csd(datas);
		return datas

	} else if (ev) {
		try {
			console.log("[serwiceWorker\src\some-best-cache\fetch-then-cache\index.ts]: is starting works for the fetch");

			responce = await fetch(ev.request);
			responce
				.then((resp: any) => {
					const result = resp.clone();
					const dataJson = JSON.parse(result[(datasName as string)]);
					/* Below's the line for cache. It's a cache sending for news */
					csd(dataJson);
					/* ----------end---------- */
					return resp
				});
			return responce
		} catch (err: any) {
			console.log('[news-public: it is fetchPriorityThenCache has an error]');
			cache = await caches.match(ev.request);


			if (cache) {
				responce = cache.open('cache-news');
				return responce
			}
		}
	}
}

module.exports = { fetchPriorityThenCache }
