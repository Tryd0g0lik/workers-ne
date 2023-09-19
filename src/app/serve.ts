// Server
const http = require('http');
const Koa = require('koa');
const logger = require('koa-logger');
const { koaBody } = require('koa-body');
const Router = require('koa-better-router');

const WS = require('ws');

const router = new Router();
const app = new Koa();
const server = new http.createServer(app.callback);
const wss = new WS.Server({ server });


wss.on('connection', (ws: any, req: any, client: any) => {
	ws.on('open', (e: any) => { console.log('WebSocket oppened!') });
	ws.on('message', (mes: any, req: any) => {
		const message = JSON.parse(mes);
		console.log('WebSockwt got the message: ', message);
		console.log('WebSockwt got the client: ', client);

	});

	ws.on('close', () => {
		console.log('WebSocked was closed');
	});



	ws.on('error', (err: any) => {
		console.log('WebSocket return error: ', err);
	});
});

server.listen(7070, (e: any) => { console.log('Server has been started. Listen post: 7070 ') });
// Server
