export function publicNews(news: string) {
	const newsBox = document.querySelector('.news-feed');
	const newsJson = JSON.parse(news);

	if (!newsJson || typeof newsJson !== 'object') { return }
	console.log('NEWS before insert: ', newsJson);

	/* ----------cahe---------- */
	cachingData(newsJson);
	/* -------------------- */

	(newsBox as HTMLElement).innerHTML = '';
	for (let i = 0; i < newsJson['gaz'].length; i++) {
		const oneNews = newsJson['gaz'];
		const tenpleteNews = `<div class="news">
				<div class="data-news">
					<div class="news-dateешьу">${oneNews[i]['time']}</div>
					<div class="news-date">${oneNews[i]['date']}</div>
				</div>
				<div class="new-content">
					<div class="news-content-preview">
						<img src="./pic/bg_buggy.png" alt="" class="picturies">
					</div>
					<div>
						<p>${oneNews[i]['title']}</p>
					</div>
				</div>
			</div>` as any;

		(newsBox as HTMLElement).insertAdjacentHTML('beforeend', (tenpleteNews as any))
	}
}

/**
 * Функция в которой принимаем данные.
 * Данные поступают из сервера - "{'gaz':[...]}" - объект списка новостей.
 *
 * @param datas : type is 'object'|| JSON
 * @returns true/false:  Если "true" - данные попали в кеш, иначе ошибка.
 */
const cachingData = async (datas: any) => {
	console.log('/---------CACHE-data News-below-----------------/')
	try {
		const jsonString = JSON.stringify(datas);
		const myOptions = {
			status: 200,
			type: 'basic',
			url: 'http://localhost:8080/'
		};
		const response = new Response(jsonString, myOptions);
		const request = new Request('http://localhost:8080/news', { mode: 'same-origin' });
		const cache = await caches.open('cache-news-v1');
		await cache.add('./news');
		await cache.put(request.url, response)

		console.log('[CACHE - True END]:', true);
		console.log('/---------CACHE-data News-above-----------------/')
		return true
	} catch (err: any) {
		console.log('[CACHE - Catch END]:', false, err);
		console.log('/---------CACHE-data News-above-----------------/')
		return false
	}
}
