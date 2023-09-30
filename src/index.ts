self.addEventListener("install", (ev: any) => {
	console.log('Установлен!')
	// https://developer.mozilla.org/ru/docs/Web/API/Service_Worker_API/Using_Service_Workers#установка_и_активация_заполнение_кеша
	ev.waitUntil(
		caches.open("my-first-cech")
			.then((cache) => {
				return cache.addAll([
					'./',
					'./index.html',
					'./main.css',
					'./pic/bg_buggy.png'

				])
			})
	)
});
self.addEventListener('activate', (ev: any) => {
	console.log('Активирован!')
});
self.addEventListener('fetch', (ev: any) => {
	console.log('Запрос на сервер!')
	ev
		.respondWith(caches.match(ev.request))
})
