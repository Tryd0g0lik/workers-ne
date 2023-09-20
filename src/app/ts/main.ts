/** Из файла псевдо db - news.json прочитать данные
 * Отправить на главну
 * разместить новости на гланой
 *
*/

function LoadPage() {
	const { WSocket } = require('./modules/websockets');
	let ws: any;
	console.log('Start!')
	if (!ws
		|| (ws
			&& (ws.readyState < 1 || ws.readyState > 1))) {
		ws = new WSocket("ws://localhost:7070");
		console.log('WSOCKET: making a connection');
	}
	let news = JSON.stringify({ news: [] });
	console.log('NEWS MOCK: making a mock', news)
	ws.sends(news);
	console.log('SEND MOCK!');
	ws.onOpen();
	console.log('OPEN')

	console.log('/*------------------\\')
}
document.addEventListener('DOMContentLoaded', () => LoadPage());

