// src\app\frontend\src\ts\functions\index.ts

// const newCache = require('../news-cache');
const newCache = require('@priority-data');


/**
 *  Here is function for 2 actions:
 * 	1 - news sent for cache to the function "newCache": "newCache.cachingData(...)"
 *  2 - news's posts publications in view an html-box.
 *
 * @param news This is data formvat a strimg "{ here-is-your-one-news}"
 * @returns
 */
function publicNews(news: string) {
	const newsBox = document.querySelector('.news-feed');
	const newsJson = JSON.parse(news);

	if (!newsJson || typeof newsJson !== 'object') { return }
	console.log('[news-public: NEWS before insert]: ', newsJson);

	/* ----------caсhe---------- */
	newCache.priorityNews(newsJson);
	/* -------------------- */

	(newsBox as HTMLElement).innerHTML = '';
	for (let i = 0; i < newsJson['gaz'].length; i++) {
		const oneNews = newsJson['gaz'];
		const tenpleteNews = `<div class="news">
				<div class="data-news">
					<div class="news-datetime">${oneNews[i]['time']}</div>
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


module.exports = { publicNews }
