const newsPublic = require('../../functions/news-public');
interface handlersType {
	open: any[],
	close: any[],
	data: any[]
}

// const cacheNewsPublic = async (callback: any, ev: any) => {
// 	const cache = await caches.open('cache-news')
// 	const response = await cache.match('./news') // указываем ключ
// 	if (response !== undefined) {
// 		response.json().then(data => {
// 			console.log(data);
// 			if (!data) return
// 			newsPublic.publicNews(JSON.stringify(data)) // Размещаем данные на странице
// 		});
// 	};
// 	callback(ev);

// }

/**
 * MDN: http://developer.mozilla.org/ru/docs/Web/API/WebSocket
 *
 * interface WebSocket
var WebSocket: {
		new (url: string | URL, protocols?: string | string[] | undefined): WebSocket;
		prototype: WebSocket;
		readonly CONNECTING: 0;
		readonly OPEN: 1;
		readonly CLOSING: 2;
		readonly CLOSED: 3;
}
 */
/**
 * Класс для работы с "WebSocket" протоколом.
 * Запускает прослушку событий:
 * - 'open';
 * - 'message';
 * -'close'.
 *  Каждое событие запускает фукцию по умолчанию.
 * Каждую функцию можно переписать под свои условия.
 *
 *  Есть фунция зкрытия соединения.
 *  Она возвращает команду - закрыть соединение.
 */
export class WSocket {
	socket: WebSocket;
	handlers: handlersType;

	constructor(url: string) {
		this.socket = new WebSocket(url);
		this.socket.addEventListener('open', (e: any) => { console.log('OPEN') });
		this.socket.addEventListener('message', async (e: any) => {

			console.log("[WebSocket]: message-URL: ", e.target.url, e.code);
			console.log('[WebSocket]: : ', e);

			document.querySelector('link[href="style-serve-error.css"]')?.remove();
			console.log('[WebSocket]: closed Event: ', e['message']);
			/* кэш вытаскиваем */
			// cacheNewsPublic(this.onMessage, e);
			this.onMessage(e)
		});

		this.socket.addEventListener('close', (e: any) => {
			if (e.wasClean) console.log('[WebSocket]: connection closed clean!')
			else console.log('[WebSocket]: connection closed aborted!');
			console.log('[WebSocket]: closed Event: ', e['message']);
			this.onError(e)

		});
		this.socket.addEventListener('error', (e: any) => {
			console.log('[WebSocket]: Error Event: ', e);
			// cacheNewsPublic(this.onMessage, e);
			this.onError(e)

		});

		this.handlers = {
			open: [],
			close: [],
			data: []
		};
	}
	/**
	 * Getin datas for to sends.
	 * @param datas:string Ti's JSON.stryngify(data);
	 */
	sends(datas: string) {
		this.handlers.data.push(datas)
	};

	/**
	 * The connection opens here
	 * @returns void
	 */
	async onOpen() {
		let data: string = '';
		if (this.handlers.data.length > 0) {
			data = this.handlers.data[0];
			// debugger
			if (this.readyState === 1) {
				console.log('[WebSocket]: connection opened!');
				this.socket.send(data);
				this.handlers.data.pop();
				return
			} else { // } else if (!this.readyState || this.readyState < 1) {
				setTimeout(() => {
					// document.querySelector('link[href="style-serve-error.css"]')?.remove();

				this.onOpen()
				}, 1500)
			};
		}
		else if (this.readyState > 1) {
			data = this.handlers.data[0];
			this.socket.send(data);
			this.handlers.data.pop();
		}
		else {
			console.error('[WebSocket]: Not datas for a Sehding');
			this.handlers.data.pop();
		}
	};

	get readyState() {
		return this.socket.readyState
	}

	onMessage = (e: any) => {
		console.log('[WebSocket]: message Event: ', e.data)
	};

	onClose() {
		console.log('[WebSocket]: close Event: here is your handler');
		return this.socket.close()
	};

	/**
	 * Here's the empty method. The mothod's body is only a mock.
	 * Your code for your needs
	 * @param e: It's an  event from the addEventlistener.
	 */
	closing = (e: any) => {
		console.log('[WebSocket]: here is your handler');
	};

	/**
 * Here's the empty method. The mothod's body is only a mock.
 * Your code for your needs
 * It's called in to `this.socket.addEventListener('error')`
 * @param e: It's an  event from the addEventlistener.
 */
	// onError = (e: any) => {
	// 	console.log('[WebSocket]: error: ', e)
	// };
	async onError(e: any) {
		console.log('[WebSocket]: error: ', e)
		const errorMasage = document.createElement('div');
		errorMasage.style.width = "376px";
		errorMasage.style.minHeight = "224px";
		errorMasage.style.border = "2px solid red";
		errorMasage.style.borderRadius = "5px";
		errorMasage.style.background = "rgba(84,96,122,.88)";
		errorMasage.style.color = "#ffebcd";
		errorMasage.style.fontSize = 18 + "px";

		errorMasage.style.display = "inline-block";
		errorMasage.style.position = "absolute";
		errorMasage.style.boxSizing = "border-box";
		errorMasage.style.paddingTop = "30px";
		errorMasage.style.top = window.innerHeight / 2 - 264.1 + "px";
		errorMasage.style.left = window.innerWidth / 2 - 142 + "px";
		errorMasage.innerHTML = `<div style="margin: auto; min-width: 180px; height: auto; width: min-content">Проблемы с сервером
			<br> пробуйте в другой раз или
			<br> перезагрузите </div>`;
		errorMasage.style.zIndex = "3";
		return document.body
			.appendChild(errorMasage);

	}
}

// WebSocets
