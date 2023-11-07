// src\app\frontend\src\ts\functions\server-event\index.ts

/**
 * There function is simply
  * @param callback
 */
export function LoadPage(callback: any) {
	const { WSocket } = require('../../modules/websockets/index.ts');
	let ws: any;
	console.log('[server-event: It is a LoadPage is starting]');
	if (!ws
		|| (ws
			&& (ws.readyState < 1 || ws.readyState > 1))) {
		ws = new WSocket("ws://localhost:7070");
		console.log('[server-event - WSOCKET: making a connection]')
	}
	let news = JSON.stringify({ news: [] });
	console.log('[server-event - NEWS MOCK: making a mock]: ', news);
	ws.sends(news);
	ws.onMessage = (e: any) => { callback(e.data) };
	console.log('[server-event: SEND MOCK]');
	ws.onOpen();
	console.log('[server-event: OPEN]');
}
