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

	console.log('/---------CACHE-data News-below-----------------/')
	try {
		const jsonString = JSON.stringify(datas);
		// const jsonString = datas;
		const myOptions = {
			status: 200,
			type: 'basic',
			url: 'http://localhost:8080/'
		};
		const response = new Response(jsonString, myOptions);
		const request = new Request('http://localhost:8080/news', { mode: 'same-origin' });

		// result = await caches
		// 	.match(request);

		cache = await caches.open('cache-news');
		if (!result) { await cache.add('./news') }

		await cache
			.put(request.url, response.clone()) // вынести в стратегию

		console.log('[priority-data: CACHE - True END]:', true);
		console.log('/---------CACHE-data News-above-----------------/')
		return response
	} catch (err: any) {
		console.log('[priority-data: CACHE - Catch END]:', false, err);
		console.log('/---------CACHE-data News-above-----------------/')
		return false
	}
}
module.exports = { priorityData }
