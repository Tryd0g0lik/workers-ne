const http = require('http');
const Koa = require('koa');
const logger = require('koa-logger');
const { koaBody } = require('koa-body');
const WS = require('ws');
const { appWebsockets: wsServer } = require('./wsServer');

const app = new Koa();
const server = new http.createServer(app.callback());
const wss = new WS.Server({ server });

const PORT = process.env.PORT || 7070;

app.use(logger());
app.use(async function (ctx: any, next: any) {
	ctx.set('Access-Control-Allow-Origin', '*');
	ctx.set('Access-Control-Allow-Headers', 'origin, x-requested-with, content-type');
	ctx.set('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
	await next();
});

wsServer(wss);



server.listen(PORT, () => {
	console.log('[serve: Server has been started.] ')
});

// const { Server } = require('mock-socket')


// const mockServer = new Server('ws://https://workers-ne.onrender.com/');


// mockServer.emit('error', new Error('Server error'));
