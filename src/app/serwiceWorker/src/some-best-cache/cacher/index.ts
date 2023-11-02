export function fun() {
	console.log("[some-best-cache: Genereter cache beginning to working]");
	return caches.open('v1') // Создаём кеш с именем "cache-page"
		.then((cache: any) => {
			return cache.addAll([ // передаем те url которые хотим закешировать
				'./',
				'./index.html',
				'./main.css',
				'./pic/bg_buggy.png',
				'/frontend.js'
			])
		})
		.finally(() => {
			console.log("[some-best-cache: v1 cache was completed]")
		});
}
