/** Создать эмулятор ошибки на сервере
 *
*/
const newsPublic = require('./functions/news-public');
const { LoadPage } = require('./functions/server-event/index.ts');

document.addEventListener('DOMContentLoaded', () => {
	console.log('DOM IS!', navigator.onLine);
	if (navigator && navigator.onLine) {
		console.log('[main]: Dinamic DATA BEGINNING; navigator.onLine;');
		/* below's a 'publicNews' function for a public news */
		LoadPage(newsPublic.publicNews);
		/* ----------end---------- */
		return
	};

	console.log('[main]: Dinamic DATA BEGINNING; navigator.offline;');
	async function news() {
		const cache = await caches.open('cache-news') //  Открываем кеш
		const response = await cache.match('./news') // указываем ключ
		if (response) {
			response.json().then(data => {
				console.log(data);
				if (!data) return
				newsPublic.publicNews(JSON.stringify(data)) // Размещаем данные на странице
			});
		} else {
			console.log('Data not found in cache');
		}
	};
	news()
})
