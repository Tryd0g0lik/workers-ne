

export function publicNews(news: string) {
	const newsBox = document.querySelector('.news-feed');
	// const newsBoxDateTimeHTML = newsBox[0].querySelector('.news-datetime');
	// const newsBoxDateHTML = newsBox[0].querySelector('.news-date');
	// const

	const newsJson = JSON.parse(news);
	console.log('NEWS before insert: ', newsJson);

	(newsBox as HTMLElement).innerHTML = '';
	for (let i = 0; i < newsJson['gaz'].length; i++) {
		const oneNews = newsJson['gaz'];
		console.log('News: ', 1);
		// debugger;
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
