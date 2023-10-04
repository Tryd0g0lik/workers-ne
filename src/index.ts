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
})
self.addEventListener('activate', (ev: any) => {
	console.log('Activated');
})
self.addEventListener('fetch', (ev: any) => {
	ev.respondWith(
		caches.match(ev.request)
			.then((response: any) => {
				return response || fetch(ev.request)
					.then((resolve: any) => {
						if (ev.request && resolve) resolve.put(ev.request, response.clone())
					})
			})
	)
})
self.addEventListener('message', (ev: any) => {
	if (ev.data && ev.data['page']) {
		// ev.waitUntil(
		caches.open('cache-page')
			.then((cache: any) => {

				const pages = ['./', './index.html'];
				for (let i = 0; i < pages.length; i++) {

					cache.delete(pages[i])
						.then((result: any) => {
							debugger;

							cache.put(pages[i], new Response(`<!DOCTYPE html><html>` + ev.data['page'] + `</html>`))
						})
				}

			})
		// )

	}
})
