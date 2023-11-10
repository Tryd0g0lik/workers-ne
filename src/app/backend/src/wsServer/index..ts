const db = require('../db/news.json');

function appWebsockets(wss: any) {
	return wss.on('connection', function (ws: any, req: any) {
		console.log('[serve: WebSocket CODE]', ws.readyState);
		ws.on('open', () => console.log('WebSocket oppened!'));
		try {
			ws.on('message', (mes: any) => {
				const message = JSON.parse(mes);
				console.log('[serve: WebSockwt got the message]: ', message);
				const dbString = JSON.stringify(db);
				console.log('[serve: make a db:string for a sending]');

				Array.from(wss.clients).forEach((client: any) => client.send(dbString));

			});
		} catch (e: any) {
			console.error('Error Server: ', e);
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
