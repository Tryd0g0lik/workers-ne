/** Создать эмулятор ошибки на сервере
 *
*/
const newsPublic = require('./functions/news-public');

const { LoadPage } = require('./functions/server-event/index.ts');

async function news() {
	// const cache = await caches.open('cache-news') ????
	// const response = await cache.match('./news')
	// if (response) {
	// 	response.json().then(data => {
	// 		console.log(data);
	// 		if (!data) return
	// 		newsPublic.publicNews(JSON.stringify(data))
	// 	});
	// } else {
	// 	console.log('[main: Data not found in cache]');
	// }
}

document.addEventListener('DOMContentLoaded', () => {
	console.log('DOM IS!', navigator.onLine);
	// if (navigator && navigator.onLine && navigator.onLine === true) {
	if (navigator && navigator.onLine) {
		console.log('----------------------------------');
		/* below's a 'publicNews' function for a public news */
		LoadPage(newsPublic.publicNews);
		/* ----------end---------- */

		return
	}

	news();

})
