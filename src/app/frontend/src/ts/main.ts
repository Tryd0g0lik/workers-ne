/** Создать эмулятор ошибки на сервере
 *
*/
const newsPublic = require('./functions/news-public');

const { LoadPage } = require('./functions/server-event/index.ts');

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
})
