function collectorNewsArr(): any {

	const newBox = document.getElementsByClassName('news');
	if (newBox) {
		return newBox as HTMLCollectionOf<HTMLElement>
	}
	return []
}



self.addEventListener("install", (ev: any) => {
	// const { corrective } = require('../../frontend/src/ts/functions/index.ts');

	console.log('Установлен!')
	debugger;
	// basicLengthNewsArr = collectorNewsArr().length
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
	);

});

self.addEventListener('activate', (ev: any) => {
	console.log('Активирован!')

});

self.addEventListener('fetch', (ev: any) => {
	console.log('Запрос на сервер!')
	// файлы для частого обновления


	// self.addEventListener('message')
	ev
		.respondWith(caches.match(ev.request)
			.then((response: any) => {
				// смотрим в кеш Если там ни чего нет делаем запрос  на сервер

				/**
				 * Базовый код из лекции.
				 * 'fetch(ev.request)' - отрпавляем по урлу запроса на СЕРВЕР.
				 * Но, сервер у нас на ДРУГОМ ПОРТУ.
				 */
				return response
					|| fetch(ev.request)
						.then((response: any) => {

							return caches.open("my-first-cech").then((cahce: any) => {
								cahce.put(ev.request, response.clone());
								return response;
							})
						})
			})
		)


})
console.log('SELF SELF: ', self)
