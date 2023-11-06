// serwiceWorker\src\some-best-cache\index.ts

const { priorityStaticFiles: cacher } = require('./cacher');
const CACHE_PRIORITY_URLS = ['/frontend.js', '/index.html', '/main.css', '/pic/bg_buggy.png', '/'];



self.addEventListener('install', (ev: any) => {
	console.log(`[some-best-cache]: INSTALL`);
	ev.waitUntil(cacher());
});

self.addEventListener('activate', (ev: any) => {
	console.log('Activated');


});

self.addEventListener('fetch', async (ev: any) => {
	console.log(`[some-best-cache]: Static files BEGINNING; It is an Event Fetch; ev.REQUEST: ${ev.request}`);
	const url = new URL(ev.request.url);
	if (CACHE_PRIORITY_URLS.includes(url.pathname)) {

		ev.respondWith(
			caches.match(ev.request)
			.then((matching: any) => {
				console.log(`[some-best-cache]: MATCH: ${matching}`);
				return matching
			})
		);
	}
	console.log('[some-best-cache]: Static files COMPLETED; caches.MATCH');

});

self.addEventListener('message', (ev: any) => {
	console.log(`[some-best-cache]: test MESSAGE;`);
})
