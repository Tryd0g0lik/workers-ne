/** Создать эмулятор ошибки на сервере
 *
*/
const { publicNews } = require('./functions/index.ts');
const { LoadPage } = require('./functions/serverEvent/index.ts');

async function news() {
	const cache = await caches.open('cache-news-v1')
	const response = await cache.match('./news')
	if (response) {
		response.json().then(data => {
			console.log(data);
			if (!data) return
			publicNews(JSON.stringify(data))
		});
	} else {
		console.log('Data not found in cache');
	}
}

document.addEventListener('DOMContentLoaded', () => {
	console.log('DOM IS!', navigator.onLine);
	if (navigator && navigator.onLine && navigator.onLine === true) {
		console.log('-----------------------------------')
		LoadPage(publicNews);
		return
	}

	news();

})
