const http = require('http');
const Koa = require('koa');
const logger = require('koa-logger');
const { koaBody } = require('koa-body');

const WS = require('ws');
const app = new Koa();
app.use(logger());
const server = new http.createServer(app.callback);
const wss = new WS.Server({ server });
const db = require('./db/news.json');
const PORT = process.env.PORT || 7070;

console.log('D_B: ', db['gaz'][10]);

app.use(async function (ctx: any, next: any) {
	ctx.set('Access-Control-Allow-Origin', '*');
	ctx.set('Access-Control-Allow-Headers', 'origin, x-requested-with, content-type');
	ctx.set('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
	await next();
});

wss.on('connection', function (ws: any, req: any) {


	// req['statusCode'] = 500
	// Выяснить как отправлять данный.Почему сейчас отправляю не через "req" Cмю Стр. 1738
	// и https://github.com/websockets/ws#external-https-server
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
		console.error('Error Server: ', e)
	}

	ws.on('close', (e: any) => console.log('[serve: WebSocked was closed]', e));

	ws.on('error', (err: any) => console.log('[serve: WebSocket return error]: ', err));
});




console.log('[serve: server]: ', Object.keys(server));
server.listen(PORT, (e: any) => console.log('[serve: Server has been started.] '));

// const { Server } = require('mock-socket')


// const mockServer = new Server('ws://https://workers-ne.onrender.com/');


// mockServer.emit('error', new Error('Server error'));
