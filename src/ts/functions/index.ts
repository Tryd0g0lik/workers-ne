

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
		console.log('News: ', 1);
		// debugger;
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

const cachingData = async (datas: any) => {
	console.log('/---------CACHE-data News-below-----------------/')
	// console.log('[CACHE-type News]: ', typeof datas, '[keys]:', Object.keys(datas));

	try {
		const jsonString = JSON.stringify(datas);
		// debugger;
		const myOptions = {
			status: 200,
			type: 'basic',
			url: 'http://localhost:8080/'
		}
		const response = new Response(jsonString, myOptions);
		// console.log('[CACHE-Response]:', response);
		// debugger;
		const request = new Request('http://localhost:8080/news', { mode: 'same-origin' });
		const cache = await caches.open('cache-news-v1');
		// await cache.addAll([
		// 	'./',
		// 	'./indes.html'
		// ])
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
