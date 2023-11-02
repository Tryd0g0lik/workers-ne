const http = require('http');
const Koa = require('koa');
const logger = require('koa-logger');
const { koaBody } = require('koa-body');
const slow = require('koa-slow');
// const Router = require('koa-better-router');

const WS = require('ws');

// const router = new Router();
const app = new Koa();
app.use(logger());
const server = new http.createServer(app.callback);
const wss = new WS.Server({ server });
const db = require('./db/news.json');


console.log('D_B: ', db['gaz'][10]);

// try {
wss.on('connection', (ws: any, req: any) => {
	console.log('/*-----------------------------------------------*/')
	console.log('[serve: ws]: ', Object.keys(ws))
	console.log('[serve: red]: ', Object.keys(req))
	console.log('[serve: WSS]: ', Object.keys(wss))
	console.log('/*------------------FINISHED--------------------*/')

	console.log('[serve: WebSocket connection]: ', Array.from(wss.clients).length)
	// req['statusCode'] = 500
	// Выяснить как отправлять данный.Почему сейчас отправляю не через "req" Cмю Стр. 1738
	// и
	https://github.com/websockets/ws#external-https-server
	console.log('[serve: WebSocket CODE]', ws.readyState);
	ws.on('open', () => console.log('WebSocket oppened!'));
	try {
		ws.on('message', (mes: any) => {
			const message = JSON.parse(mes);
			console.log('[serve: WebSockwt got the message]: ', message);
			// console.log('WebSockwt got the client: ', client);
			const dbString = JSON.stringify(db);
			console.log('[serve: make a db:string for a sending]');


			Array.from(wss.clients).forEach((client: any) => client.send(dbString));

		});
	} catch (e: any) { console.error('Error Server: ', e) }

	ws.on('close', (e: any) => console.log('[serve: WebSocked was closed]', e));

	ws.on('error', (err: any) => console.log('[serve: WebSocket return error]: ', err));
});

// app.use(slow({
// 	url: /\.(json||js)$/i,
// 	delay: 10000
// }));

console.log('[serve: server]: ', Object.keys(server));
server.listen(7070, (e: any) => console.log('[serve: Server has been started. Listen post: 7070] '));

// const { Server } = require('mock-socket')


// const mockServer = new Server('ws://localhost:8080');


// mockServer.emit('error', new Error('Server error'));
