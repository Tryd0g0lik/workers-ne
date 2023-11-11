interface handlersType {
	open: any[],
	close: any[],
	data: any[]
}

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
		this.socket.addEventListener('message', (e: any) => {

			console.log("[WS message-URL]: ", e.target.url, e.code);
			console.log('[WS]: ', e);

			this.onMessage(e);
		});

		this.socket.addEventListener('close', (e: any) => {
			if (e.wasClean) console.log('WebSocket connection closed clean!')
			else console.log('WebSocket connection closed aborted!');
			console.log('WS closed Event: ', e['message']);

		});
		this.socket.addEventListener('error', (e: any) => {
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
	onOpen() {
		let data: string = '';
		if (this.handlers.data.length > 0) {
			data = this.handlers.data[0];
			// debugger
			if (this.readyState === 1) {
				console.log('WebSocket connection opened!');
				this.socket.send(data);
				this.handlers.data.pop();
				return
			} else { // } else if (!this.readyState || this.readyState < 1) {
				setTimeout(() => {
					document.querySelector('link[href="style-serve-error.css"]')?.remove();

				this.onOpen()
				}, 5000)
			};
		}
		else if (this.readyState > 1) {
			data = this.handlers.data[0];
			this.socket.send(data);
			this.handlers.data.pop();
		}
		else {
			console.error('Not datas for a Sehding');
			this.handlers.data.pop();
		}
	};

	get readyState() {
		return this.socket.readyState
	}

	onMessage = (e: any) => {
		console.log('WebSocket Received message: ', e.data)
	};

	onClose() {
		return this.socket.close()
	};

	/**
	 * Here's the empty method. The mothod's body is only a mock.
	 * Your code for your needs
	 * @param e: It's an  event from the addEventlistener.
	 */
	closing = (e: any) => {
		console.log('here is your handler');
	};

	/**
 * Here's the empty method. The mothod's body is only a mock.
 * Your code for your needs
 * It's called in to `this.socket.addEventListener('error')`
 * @param e: It's an  event from the addEventlistener.
 */
	onError(e: any) {
		console.log('WebSocket error: ', e)
	};
}

// WebSocets
