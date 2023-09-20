// // Server
const http = require('http');
const db = require('./db/news.json');

const Koa = require('koa');
const logger = require('koa-logger');
const { koaBody } = require('koa-body');
const Router = require('koa-better-router');

const WS = require('ws');

const router = new Router();
const app = new Koa();
const server = new http.createServer(app.callback);
const wss = new WS.Server({ server });

console.log('D_B: ', db['gaz'][10]);
try {
	wss.on('connection', (ws: any, req: any, client: any) => {
		console.log('WebSocket connection!', Array.from(wss.clients).length)
		console.log('WebSocket CODE', ws.readyState);
		ws.on('open', (e: any) => { console.log('WebSocket oppened!') });
		ws.on('message', (mes: any, req: any) => {
			const message = JSON.parse(mes);
			console.log('WebSockwt got the message: ', message);
			console.log('WebSockwt got the client: ', client);
			const dbString = JSON.stringify(db);
			console.log('make a db:string for a sending');
			Array.from(wss.clients).forEach((client: any) => {

				client.send(dbString);

			});

		});

		ws.on('close', (e: any) => {
			console.log('WebSocked was closed', e);
		});



		ws.on('error', (err: any) => {
			console.log('WebSocket return error: ', err);
		});
	});
} catch (er: any) { console.error('Server CONNECTION - That a something a wrong!', er) }

server.listen(7070, (e: any) => { console.log('Server has been started. Listen post: 7070 ') });
// Server
