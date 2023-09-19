/**
 * Вставим парсер новостей
 */

const puppeteer = require('puppeteer');
// import puppeteer from 'puppeteer';
// async function scraper() {
// 	let browser;
// 	let page;

// 	// try {
// 	browser = await puppeteer.launch({
// 		headless: false,
// 		slowMo: 100,
// 		pipe: true,
// 		devtools: true
// 	});

// 	page = browser.newPage();
// 	await page.goto('https://ria.ru/organization_Gazprom/');

// 	await page.awaitForTimeout(3000);
// 	// } catch (er) {

// 	console.log("Puppeteer return Error", er);
// 	// }

// }
// scraper()
