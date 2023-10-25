const http = require('http');
const Koa = require('koa');
const logger = require('koa-logger');
const { koaBody } = require('koa-body');
// const Router = require('koa-better-router');

const WS = require('ws');

// const router = new Router();
const app = new Koa();
const server = new http.createServer(app.callback);
const wss = new WS.Server({ server });
const db = require('./db/news.json');


console.log('D_B: ', db['gaz'][10]);

// try {
wss.on('connection', (ws: any, req: any) => {
	console.log('/*-----------------------------------------------*/')
	console.log('[ws]: ', Object.keys(ws))
	console.log('[red]: ', Object.keys(req))
	console.log('[WSS]: ', Object.keys(wss))
	console.log('/*------------------FINISHED--------------------*/')

	console.log('WebSocket connection!', Array.from(wss.clients).length)
	// req['statusCode'] = 500
	// Выяснить как отправлять данный.Почему сейчас отправляю не через "req" Cмю Стр. 1738
	// и
	https://github.com/websockets/ws#external-https-server
	console.log('WebSocket CODE', ws.readyState);
	ws.on('open', () => console.log('WebSocket oppened!'));
	try {
		ws.on('message', (mes: any) => {
			const message = JSON.parse(mes);
			console.log('WebSockwt got the message: ', message);
			// console.log('WebSockwt got the client: ', client);
			const dbString = JSON.stringify(db);
			console.log('make a db:string for a sending');


			Array.from(wss.clients).forEach((client: any) => client.send(dbString));

		});
	} catch (e: any) { console.error('Error Server: ', e) }

	ws.on('close', (e: any) => console.log('WebSocked was closed', e));

	ws.on('error', (err: any) => console.log('WebSocket return error: ', err));
})
// } catch (er: any) { console.error('Server CONNECTION - That a something a wrong!', er) }

// app.use(async (ctx: any, next: any) => {
// 	console.log('[MODULATOR]: it is a 500 model err');
// 	ctx.statusCode = 500;
// 	ctx.body = 'Internal Server Error';
// 	await next();
// });
console.log('[server]: ', Object.keys(server))
server.listen(7070, (e: any) => console.log('Server has been started. Listen post: 7070 '));

// const { Server } = require('mock-socket')


// const mockServer = new Server('ws://localhost:8080');


// mockServer.emit('error', new Error('Server error'));
