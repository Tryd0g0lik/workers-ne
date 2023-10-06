/** Создать эмулятор ошибки на сервере
 *
*/
const { publicNews } = require('./functions/index.ts');
const { LoadPage } = require('./functions/serverEvent/index.ts');

// let observer: any;
// let sw = () => {
// 	if ("serviceWorker" in navigator) {
// 		// Регистрация service worker-а, расположенного в корне сайта
// 		// за счёт использования дефолтного scope (не указывая его)
// 		console.log('SERVICEwORKER: stepped the CHECK!')
// 		navigator.serviceWorker
// 			.register("./serwiceWorker.js")
// 			.then((registration) => {

// 				console.log("Service worker зарегистрирован:", registration);
// 			})
// 			.catch((error) => {
// 				console.log("Ошибка при регистрации service worker-а:", error);
// 			});

// 		console.log('SERVICEwORKER: stepped the navigator!')

// 	} else {
// 		// Текущий браузер не поддерживает service worker-ы.
// 		console.log("Текущий браузер не поддерживает service worker-ы");
// 	}
// }
// window.addEventListener('offline', async (ev: any) => {
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
// });

document.addEventListener('DOMContentLoaded', () => {
	console.log('DOM IS!', navigator.onLine);
	if (navigator && navigator.onLine && navigator.onLine === true) {
		console.log('-----------------------------------')
		LoadPage(publicNews);
		return
	}

	news();

})
