import { number } from "yargs";

const db = require('../db/news.json');

function* randomIntegerGenerator() {
	while (true) {
		yield Math.floor(Math.random() + Number.MAX_SAFE_INTEGER);
	}
}

function appWebsockets(wss: any) {
	const generator: Generator<number, void, unknown> = randomIntegerGenerator();
	return wss.on('connection', function (ws: any, req: any) {
		console.log('[serve: WebSocket CODE]', ws.readyState);
		ws.on('open', () => console.log('WebSocket oppened!'));
		try {
			// Simulate a server error

			ws.on('message', (mes: any) => {
				const message = JSON.parse(mes);
				console.log('[serve: WebSockwt got the message]: ', message);
				const dbString = JSON.stringify(db);
				console.log('[serve: make a db:string for a sending]');

				Array.from(wss.clients).forEach((client: any) => client.send(dbString));

			});

			if (<number>generator.next().value % 2 === 0) {

				ws.emit('error', new TypeError("TypeServer is error to the WS from a wsServer/index.ts"));
			}

		} catch (e: any) {
			console.error('Error Server: ', e);
			Array.from(wss.clients).forEach((client: any) => client.send(e));
		};

		ws.on('close', (e: any) => {
			console.log('[serve: WebSocked was closed]', e);
		});

		ws.on('error', (err: any) => {
			console.log('[serve: WebSocket return error]: ', err);
		});
	});
}

module.exports = { appWebsockets }
