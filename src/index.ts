self.addEventListener('install', (ev: any) => {
	function fun() {
		caches.open('cache-page')
			.then((cache: any) => {
				return cache.addAll([
					'./',
					'./index.html'
				])
			});
		caches.open('cache-static')
			.then((cache: any) => {
				return cache.addAll([
					'./main.css',
					'./frontend.js'
				])
			})
	}
	ev.waitUntil(
		fun()
	)
});

self.addEventListener('activate', (ev: any) => { console.log('Activated') });

self.addEventListener('fetch', (ev: any) => {
	ev.respondWith(
		caches.match(ev.request)
			.then((response: any) => {
				if (!response) return
				return response
			})
	)
});

self.addEventListener('message', (ev: any) => {

})


