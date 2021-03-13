/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const weatherCard = document.getElementById('card');\nconst tempVal = document.getElementById('value');\nconst condition = document.getElementById('condition')\nconst city = document.getElementById('city');\n\n\nconst unitSwap = (val) => ((val * 9) / 5 + 32).toFixed(1);\n\n\nconst getWeather = async (place) => {\n        try {\n                const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${place}&APPID=17bb7e6ff8637be739a2a23e2ccf12e9`, { mode: 'cors' });\n                const weatherInfo = await response.json();\n                const clima = weatherInfo.weather[0].main;\n                const temp = (weatherInfo.main.temp - 273.15).toFixed(1);\n\n                tempVal.textContent = `${temp}` + '°C';\n                city.innerHTML = place;\n                condition.textContent = clima;\n\n                const toggle = document.getElementById('switch')\n\n                toggle.addEventListener('input', async (e) => {\n                        e.preventDefault();\n                        toggle.checked === true ? tempVal.textContent = `${unitSwap(temp)}` + '°F' : tempVal.textContent = `${temp}` + '°C';\n                })\n\n\n\n        } catch (error) {\n                console.log(error);\n        }\n};\n\n\nconst form = document.getElementById('locForm');\n\nform.addEventListener('click', async (e) => {\n        e.preventDefault();\n        const cityName = form[0].value;\n        getWeather(cityName);\n        \n}) \n\n\n\n\n//# sourceURL=webpack://Weather-Cast/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;