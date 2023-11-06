// serwiceWorker/src/some-best-cache/cacher/priority-data

/**
 * At the entrance data-string - "{....}"
 * for import:
 * 		"const { priorityData: csd } = require('@priority-data');"
 * @param datas : type is 'object'|| JSON. It's datas for cacher. Example:  "{'gaz':[...]}" - it is the listed news.
 * @returns Promis<object|false>:  If geting an object this's a responce. - it's saving datas for a cache. If no object it's error.
 */
const priorityData = async (datas: object): Promise<object | boolean> => {
	let cache: any;
	let result: any;

	console.log('[priority-data]: cacher for a data');
	try {
		const jsonString = JSON.stringify(datas);
		const myOptions = {
			status: 200,
			type: 'basic',
			url: 'http://localhost:8080/'
		};
		const response = new Response(jsonString, myOptions);
		const request = new Request('http://localhost:8080/news', { mode: 'same-origin' });
		console.log('[priority-data]: cacher for a data; OPEN');
		cache = await caches.open('cache-news');
		if (!result) { await cache.add('./news') }

		console.log('[priority-data]: cacher for a data; cache.PUT');
		await cache
			.put(request.url, response.clone()) // вынести в стратегию
		console.log('[priority-data]: cacher for a data; True END');
		return response

	} catch (err: any) {
		console.log('[priority-data]: cacher for a data; ERROR', `err: ${err}`);
		return false
	}
}
module.exports = { priorityData }
