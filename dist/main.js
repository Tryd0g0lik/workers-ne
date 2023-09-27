/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.scss */ \"./src/styles/style.scss\");\n/* harmony import */ var _ts_main_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ts/main.ts */ \"./src/ts/main.ts\");\n/* harmony import */ var _ts_main_ts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ts_main_ts__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\n//# sourceURL=webpack://my-webpack-frontend/./src/index.js?");

/***/ }),

/***/ "./src/styles/style.scss":
/*!*******************************!*\
  !*** ./src/styles/style.scss ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://my-webpack-frontend/./src/styles/style.scss?");

/***/ }),

/***/ "./src/ts/functions/index.ts":
/*!***********************************!*\
  !*** ./src/ts/functions/index.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   publicNews: function() { return /* binding */ publicNews; }\n/* harmony export */ });\nfunction publicNews(news) {\n    const newsBox = document.querySelector('.news-feed');\n    // const newsBoxDateTimeHTML = newsBox[0].querySelector('.news-datetime');\n    // const newsBoxDateHTML = newsBox[0].querySelector('.news-date');\n    // const\n    const newsJson = JSON.parse(news);\n    console.log('NEWS before insert: ', newsJson);\n    newsBox.innerHTML = '';\n    for (let i = 0; i < newsJson['gaz'].length; i++) {\n        const oneNews = newsJson['gaz'];\n        console.log('News: ', 1);\n        // debugger;\n        const tenpleteNews = `<div class=\"news\">\n\t\t\t\t<div class=\"data-news\">\n\t\t\t\t\t<div class=\"news-datetime\">${oneNews[i]['time']}</div>\n\t\t\t\t\t<div class=\"news-date\">${oneNews[i]['date']}</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"new-content\">\n\t\t\t\t\t<div class=\"news-content-preview\">\n\t\t\t\t\t\t<img src=\"./pic/bg_buggy.png\" alt=\"\" class=\"picturies\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<p>${oneNews[i]['title']}</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>`;\n        newsBox.insertAdjacentHTML('beforeend', tenpleteNews);\n    }\n}\n\n\n//# sourceURL=webpack://my-webpack-frontend/./src/ts/functions/index.ts?");

/***/ }),

/***/ "./src/ts/functions/serverEvent/index.ts":
/*!***********************************************!*\
  !*** ./src/ts/functions/serverEvent/index.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   LoadPage: function() { return /* binding */ LoadPage; }\n/* harmony export */ });\nfunction LoadPage(callback) {\n    const { WSocket } = __webpack_require__(/*! ../../modules/websockets/index.ts */ \"./src/ts/modules/websockets/index.ts\");\n    let ws;\n    console.log('Start!');\n    if (!ws\n        || (ws\n            && (ws.readyState < 1 || ws.readyState > 1))) {\n        ws = new WSocket(\"ws://localhost:7070\");\n        console.log('WSOCKET: making a connection');\n    }\n    let news = JSON.stringify({ news: [] });\n    console.log('NEWS MOCK: making a mock', news);\n    ws.sends(news);\n    ws.onMessage = (e) => { callback(e.data); };\n    console.log('SEND MOCK!');\n    ws.onOpen();\n    console.log('OPEN');\n    console.log('/*------------------\\\\');\n}\n\n\n//# sourceURL=webpack://my-webpack-frontend/./src/ts/functions/serverEvent/index.ts?");

/***/ }),

/***/ "./src/ts/main.ts":
/*!************************!*\
  !*** ./src/ts/main.ts ***!
  \************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("\n/** Создать эмулятор ошибки на сервере\n *\n*/\nconst { publicNews } = __webpack_require__(/*! ./functions/index.ts */ \"./src/ts/functions/index.ts\");\nconst { LoadPage } = __webpack_require__(/*! ./functions/serverEvent/index.ts */ \"./src/ts/functions/serverEvent/index.ts\");\ndocument.addEventListener('DOMContentLoaded', () => {\n    // if (\"serviceWorker\" in navigator) {\n    // \tnavigator.serviceWorker\n    // \t\t.register(\"/sw.js\")\n    // \t\t.then(function (registration) {\n    // \t\t\tregistration.addEventListener(\"updatefound\", function () {\n    // \t\t\t\t// If updatefound is fired, it means that there's\n    // \t\t\t\t// a new service worker being installed.\n    // \t\t\t\tvar installingWorker = registration.installing;\n    // \t\t\t\tconsole.log(\n    // \t\t\t\t\t\"A new service worker is being installed:\",\n    // \t\t\t\t\tinstallingWorker,\n    // \t\t\t\t);\n    // \t\t\t\t// You can listen for changes to the installing service worker's\n    // \t\t\t\t// state via installingWorker.onstatechange\n    // \t\t\t});\n    // \t\t})\n    // \t\t.catch(function (error) {\n    // \t\t\tconsole.log(\"Service worker registration failed:\", error);\n    // \t\t});\n    // } else {\n    // \tconsole.log(\"Service workers are not supported.\");\n    // }\n    LoadPage(publicNews);\n});\n\n\n//# sourceURL=webpack://my-webpack-frontend/./src/ts/main.ts?");

/***/ }),

/***/ "./src/ts/modules/websockets/index.ts":
/*!********************************************!*\
  !*** ./src/ts/modules/websockets/index.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   WSocket: function() { return /* binding */ WSocket; }\n/* harmony export */ });\n/**\n * Класс для работы с \"WebSocket\" протоколом.\n * Запускает прослушку событий:\n * - 'open';\n * - 'message';\n * -'close'.\n *  Каждое событие запускает фукцию по умолчанию.\n * Каждую функцию можно переписать под свои условия.\n *\n *  Есть фунция зкрытия соединения.\n *  Она возвращает соманду - закрыть соединение.\n */\nclass WSocket {\n    // url: string;\n    constructor(url) {\n        this.onMessage = (e) => { console.log('WebSocket Received message: ', e.data); };\n        this.closing = (e) => { console.log('here is your handler'); };\n        this.socket = new WebSocket(url);\n        this.socket.addEventListener('open', (e) => { console.log('OPEN'); });\n        this.socket.addEventListener('message', (e) => {\n            console.log(\"WS message-URL: \", e.target.url, e.code);\n            this.onMessage(e);\n        });\n        this.socket.addEventListener('close', (e) => {\n            if (e.wasClean) {\n                console.log('WebSocket connection closed clean!');\n            }\n            else {\n                console.log('WebSocket connection closed aborted!');\n            }\n            ;\n            console.log('WS closed Event: ', e['message']);\n        });\n        this.socket.addEventListener('error', (e) => { this.onError(e); });\n        this.handlers = {\n            open: [],\n            close: [],\n            data: []\n        };\n    }\n    /**\n     * Getin datas for to sends.\n     * @param datas:string Ti's JSON.stryngify(data);\n     */\n    sends(datas) { this.handlers.data.push(datas); }\n    ;\n    onOpen() {\n        let data = '';\n        if (this.handlers.data.length > 0) {\n            data = this.handlers.data[0];\n            // debugger\n            if (this.readyState === 1) {\n                console.log('WebSocket connection opened!');\n                this.socket.send(data);\n                this.handlers.data.pop();\n                return;\n            }\n            else\n                setTimeout(() => this.onOpen(), 1000);\n        }\n        else if (this.readyState > 1) {\n            data = this.handlers.data[0];\n            this.socket.send(data);\n            this.handlers.data.pop();\n        }\n        else {\n            console.error('Not datas for a Sehding');\n            this.handlers.data.pop();\n        }\n    }\n    ;\n    get readyState() { return this.socket.readyState; }\n    onClose() { return this.socket.close(); }\n    ;\n    onError(e) { console.log('WebSocket error: ', e); }\n    ;\n}\n// WebSocets\n\n\n//# sourceURL=webpack://my-webpack-frontend/./src/ts/modules/websockets/index.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;