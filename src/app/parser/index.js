/**
 * Получаем данные в db через парсер новостей
 */

const puppeteer = require('puppeteer');
const fs = require('fs');
async function scraper() {

	let browser;
	let page;
	console.log('=============')
	browser = await puppeteer.launch({
		headless: false,
		slowMo: 700,
		pipe: true,
		devtools: true
	});

	page = await browser.newPage();
	await page.goto(url = 'https://ria.ru/organization_Gazprom/');
	await page.waitForSelector('body'); // .list-item__content

	const jsonNews = await page.evaluate(() => {
		const list = document.querySelectorAll('.rubric-list');



		try {
			if (list) {
				console.log('LIST: ', list);
				let ind = 0;
				const newsList = list[0].querySelectorAll('.list-item');

				let news = [];
				for (let i = 0; i < newsList.length; i++) {
					console.log(newsList[i]);
					const result = newsList[i].querySelector('.list-item__content a:last-of-type');
					console.log(result.textContent);
					const datesNews = newsList[i].querySelector('.list-item__info .list-item__date');

					let dates = '';
					let dateTimes = "";
					let titles = '';
					if (result.textContent.length > 2) { titles = result.textContent; }
					console.log(result.textContent);
					console.log('DATES: ', datesNews);
					if (datesNews.textContent.length > 2) {
						dateTimes = datesNews.textContent.split(', ')[0],
							dates = datesNews.textContent.split(', ')[1];
					};
					console.log(datesNews.textContent);
					const content = {
						id: ind,
						title: titles,
						time: dateTimes,
						date: dates
					};
					console.log('CONTENT:', content);
					news.push(content);
					console.log('NEWS: ', news);
					ind++
				}
				const jsonNews = JSON.stringify({ gaz: news });
				return jsonNews
			}

			console.log("Puppeteer return NEWS", jsonNews);
		} catch (e) { console.log('Error: ', e) };
	});

	fs.writeFile('src/app/db/news.json', jsonNews, (err) => {
		if (err) throw err;
		console.log('Data written to file', err);
	});
	browser.close();

}

scraper();
