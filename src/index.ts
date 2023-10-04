
function nowTime() {
	let now = new Date();
	return now;
}
self.addEventListener("install", async (ev: any) => {
	// const { corrective } = require('../../frontend/src/ts/functions/index.ts');
	console.log('Установлен!')
	// https://developer.mozilla.org/ru/docs/Web/API/Service_Worker_API/Using_Service_Workers#установка_и_активация_заполнение_кеша

	ev.waitUntil(
		caches.open("my-first-cech")
			.then((cache: any) => {
				return cache.addAll([
					'./main.css',
					'./pic/bg_buggy.png'
				])
			})
	);

});

self.addEventListener('activate', (ev: any) => {
	console.log('Активирован!')
	function func() {
		// const delay = (ms: any) => new Promise((resolve: any) => setTimeout(resolve, ms));
		// await delay(0);

		return caches.open("my-second-cech")
			.then((cache: any) => {
				cache.addAll([
					'./',
					'./index.html'
				])
			})
	}
	ev.waitUntil(func())

});

self.addEventListener('fetch', (ev: any) => {
	console.log('Запрос на сервер!')
	// файлы для частого обновления


	// self.addEventListener('message')
	console.log('EV : ', ev.request);
	ev
		.respondWith(caches.match(ev.request)
			.then((response: any) => {
				// смотрим в кеш Если там ни чего нет делаем запрос  на сервер
				console.log('RESPONSEЖ ', response)
				// response != undefined ? response :
				const result = undefined ? response : fetch('http://localhost:8080/')

				return result

			})
			.then(async (response: any) => {
				const timer = (ms: any) => new Promise((resolve: any) => setTimeout(resolve, ms));
				await timer(20000);

				console.log('RESPONSE.Text: ', response.text());
				return caches.open("my-second-cech-new")
					.then((cahce: any) => {

						cahce.put(ev.request, response.text());
						return response;
					})
			})
	)
})
console.log('SELF SELF: ', self);
self.addEventListener('message', (ev: any) => {
	caches.open('my-second-cech-new')
		.then((cache: any) => {
			debugger;
			cache.add('./', ev.data['page'].slice(0,))
			return ev
		})

})
