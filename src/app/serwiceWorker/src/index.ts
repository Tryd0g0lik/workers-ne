self.addEventListener('install', (ev: any) => {
	function fun() {
		caches.open('cache-page') // Создаём кеш с именем "cache-page"
			.then((cache: any) => {
				return cache.addAll([ // передаем те url которые хотим закешировать
					'./',
					'./index.html'
				])
			});
		caches.open('cache-static') // Создаём кеш который меняется редко с именем "cache-page"
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
	ev.respondWith( // вытаскиваем кеш и пользуемся
		caches.match(ev.request)
			.then((response: any) => {
				if (!response) return
				return response || fetch(ev.request)// тут пишем стратегию
				/* В данном случае проверяем кеш "response". Если Там ни чего нет, то идем по url-у запроса */
			})
	)
});

self.addEventListener('message', (ev: any) => {

})


