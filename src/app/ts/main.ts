/** Из файла псевдо db - news.json прочитать данные
 * Отправить на главну
 * разместить новости на гланой
 *
*/
const { publicNews } = require('./functions/index');
const { LoadPage } = require('./functions/serverEvent');

document.addEventListener('DOMContentLoaded', () => {

	LoadPage(publicNews);
});

