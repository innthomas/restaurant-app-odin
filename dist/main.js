/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ contact)\n/* harmony export */ });\nfunction contact(){\n    const container = document.getElementById('content');\n    const restaurant = document.getElementById('restaurant');\n    if(restaurant){\n     container.removeChild(restaurant)\n    }\n    const mainEle = document.createElement('main');\n    mainEle.setAttribute('id','restaurant')\n    const h1Ele = document.createElement('h1');\n    h1Ele.innerHTML = 'Contact Us';\n    \n    const contactDiv = document.createElement('div');\n    const h3Ele = document.createElement('h3');\n    const para1 = document.createElement('p');\n    const para2= document.createElement('p');\n    const para3 = document.createElement('p');\n    h3Ele.textContent = 'Inn Thomas';\n    para1.textContent = 'chef';\n    para2.textContent = '555-555-5554';\n    para3.textContent = 'totallyRealEmail@notFake.com';\n    contactDiv.appendChild(h3Ele);\n    contactDiv.appendChild(para1);\n    contactDiv.appendChild(para2);\n    contactDiv.appendChild(para3);\n    mainEle.appendChild(h1Ele);\n    mainEle.appendChild(contactDiv);\n    container.appendChild(mainEle);\n}\n\n//# sourceURL=webpack://restaurant-app-odin/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ home)\n/* harmony export */ });\nfunction home(){\n    const container = document.getElementById('content');\n    const restaurant = document.getElementById('restaurant');\n    if(restaurant){\n     container.removeChild(restaurant)\n    }\n    const mainEle = document.createElement('main');\n    mainEle.setAttribute('id','restaurant')\n    const h1Ele = document.createElement('h1');\n    h1Ele.innerHTML = 'Idara\\'s Kitchen';\n    const para = document.createElement('p');\n    para.innerHTML = \"Idara's kitchen has the best porridge! The atmosphere and customer service make you feel like you are sitting in the middle of the woods, eating like a bear! This is exactly the kind of place that I like to return to again and again.\"\n    const h3Ele = document.createElement('h3');\n    h3Ele.innerHTML= 'Hours available:'\n    const ulEle = document.createElement('ul');\n    let listItem1 = document.createElement('li');\n    let listItem2 = document.createElement('li');\n    let listItem3 = document.createElement('li');\n    let listItem4 = document.createElement('li');\n    let listItem5 = document.createElement('li');\n    let listItem6 = document.createElement('li');\n    let listItem7 = document.createElement('li');\n    listItem1.textContent = 'Sunday: 8am - 8pm';\n    listItem2.textContent = 'Monday: 6am - 6pm';\n    listItem3.textContent = 'Tuesday: 6am - 6pm';\n    listItem4.textContent = 'Wednesday: 6am - 6pm';\n    listItem5.textContent = 'Thursday: 6am - 10pm';\n    listItem6.textContent = 'Friday: 6am - 10pm';\n    listItem7.textContent = 'Saturday: 8am - 10pm';\n    ulEle.appendChild(listItem1);\n    ulEle.appendChild(listItem2);\n    ulEle.appendChild(listItem3);\n    ulEle.appendChild(listItem4);\n    ulEle.appendChild(listItem5);\n    ulEle.appendChild(listItem6);\n    ulEle.appendChild(listItem7);\n\n    let location = document.createElement('h3')\n    let locationContent = document.createElement('p')\n    location.innerHTML ='Location';\n    locationContent.textContent = '123 Forest Drive, Forestville, Maine.'\n    \n    mainEle.appendChild(h1Ele);\n    mainEle.appendChild(para);\n    mainEle.appendChild(h3Ele);\n    mainEle.appendChild(ulEle);\n    mainEle.appendChild(location);\n    mainEle.appendChild(locationContent);\n    container.appendChild(mainEle);\n}\n\n//# sourceURL=webpack://restaurant-app-odin/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n\n\n\n\nconst container = document.getElementById('content');\nconst header = document.createElement('header');\n\nconst nav = document.createElement('nav');\nconst homeDiv = document.createElement('button');\nhomeDiv.setAttribute('class', 'homeNav');\nconst menuDiv = document.createElement('button');\nmenuDiv.setAttribute('class', 'menuNav');\nconst contactDiv = document.createElement('button');\nconst mainElement = document.createElement('main');\nmainElement.setAttribute('id', 'restaurant');\ncontactDiv.setAttribute('class', 'contactNav');\n\nnav.appendChild(homeDiv);\nnav.appendChild(menuDiv);\nnav.appendChild(contactDiv);\nheader.appendChild(nav)\ncontainer.appendChild(header);\n\ncontainer.appendChild(mainElement);\n\nhomeDiv.innerHTML = 'home';\nmenuDiv.innerHTML = 'menu';\ncontactDiv.innerHTML = 'contact';\nhomeDiv.addEventListener('click',_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\nmenuDiv.addEventListener('click',_menu__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\ncontactDiv.addEventListener('click',_contact__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n(0,_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\n\n//# sourceURL=webpack://restaurant-app-odin/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ menu)\n/* harmony export */ });\nfunction menu(){\n    const container = document.getElementById('content');\n    const restaurant = document.getElementById('restaurant');\n    if(restaurant){\n     container.removeChild(restaurant)\n    }\n    const mainEle = document.createElement('main');\n    mainEle.setAttribute('id','restaurant')\n    const h1Ele = document.createElement('h1');\n    h1Ele.innerHTML = 'Menu';\n\n    const h2Ele = document.createElement('h1');\n    h2Ele.innerHTML = 'Beverages';\n    const beverageDiv = document.createElement('div');\n    const honeyTea = document.createElement('h4');\n    honeyTea.innerHTML = 'Honey Tea';\n    const honeyPara = document.createElement('p');\n    honeyPara.textContent = 'A warm, sweet tea made with the highest quality honey and a bit of lemon to start your day off right!';\n    const price = document.createElement('h5');\n    price.innerHTML = '$2';\n    beverageDiv.appendChild(honeyTea);\n    beverageDiv.appendChild(honeyPara);\n    beverageDiv.appendChild(price);\n    mainEle.appendChild(h1Ele);\n    mainEle.appendChild(h2Ele);\n    mainEle.appendChild(beverageDiv);\n    container.appendChild(mainEle);\n}\n\n//# sourceURL=webpack://restaurant-app-odin/./src/menu.js?");

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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
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