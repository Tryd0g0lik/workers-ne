export function LoadPage(callback: any) {
	const { WSocket } = require('../../modules/websockets/index.ts');
	let ws: any;
	console.log('Start!');
	if (!ws
		|| (ws
			&& (ws.readyState < 1 || ws.readyState > 1))) {
		ws = new WSocket("ws://localhost:7070");
		console.log('WSOCKET: making a connection')
	}
	let news = JSON.stringify({ news: [] });
	console.log('NEWS MOCK: making a mock', news);
	ws.sends(news);
	ws.onMessage = (e: any) => { callback(e.data) };
	console.log('SEND MOCK!');
	ws.onOpen();
	console.log('OPEN');

	console.log('/*------------------\\')
}
