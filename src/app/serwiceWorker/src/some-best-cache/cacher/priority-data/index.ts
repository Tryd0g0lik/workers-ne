/**
 * At the entrance data-string - "{....}"
 *
 * @param datas : type is 'object'|| JSON. It's data entrance from server - "{'gaz':[...]}" - it is the listed news.
 * @returns true/false:  If "true" - then it's data saved in a cache. If not 'true' then it's error.
 */
const priorityNews = async (datas: any) => {
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
		let cache: any;
		// waitUntil
		// cache = await caches.open('cache-news');
		// await cache.add('./news');
		// await cache.put(request.url, response)

		console.log('[priority-data: CACHE - True END]:', true);
		console.log('/---------CACHE-data News-above-----------------/')
		return true
	} catch (err: any) {
		console.log('[priority-data: CACHE - Catch END]:', false, err);
		console.log('/---------CACHE-data News-above-----------------/')
		return false
	}
}
module.exports = { priorityNews }
