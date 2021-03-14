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

eval("const icon = document.getElementById('icon');\nconst tempVal = document.getElementById('value');\nconst condition = document.getElementById('condition');\nconst city = document.getElementById('city');\nconst cardWiki = document.getElementById('cardWiki');\nconst cardSnippet = document.getElementById('snippet');\nconst cardTitle = document.getElementById('cityName');\nconst toggle = document.getElementById('switch');\n\nconst unitSwap = (val) => ((val * 9) / 5 + 32).toFixed(1);\n\nconst backColor = async (arg) => {\n  if (arg === 'Clouds') {\n    document.body.style.backgroundColor = '#D0D5D9';\n    icon.className = 'fas fa-cloud fa-2x  mx-2';\n  } else if (arg === 'Clear') {\n    document.body.style.backgroundColor = '#6EFDFD';\n    icon.className = 'far fa-sun fa-2x mx-2';\n  } else if (arg === 'Rain') {\n    document.body.style.backgroundColor = '#0080FF';\n    icon.className = 'fas fa-cloud-showers-heavy fa-2x mx-2';\n  } else if (arg === 'Snow') {\n    document.body.style.backgroundColor = '#FFFFFF';\n    icon.className = 'fas fa-snowflake fa-2x mx-2';\n  } else if (arg === 'Thunderstorm') {\n    document.body.style.backgroundColor = '#FFA500';\n    icon.className = 'fas fa-bolt fa-2x mx-2';\n  }\n};\n\nconst getWeather = async (place) => {\n  try {\n    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${place}&APPID=17bb7e6ff8637be739a2a23e2ccf12e9`, { mode: 'cors' });\n    const weatherInfo = await response.json();\n    const clima = weatherInfo.weather[0].main;\n    const temp = (weatherInfo.main.temp - 273.15).toFixed(1);\n\n    backColor(clima);\n    toggle.checked === true ? tempVal.textContent = `${unitSwap(temp)}` + '°F' : tempVal.textContent = `${temp}` + '°C';\n    tempVal.className = 'text-5xl font-bold font-mono';\n    city.innerHTML = place;\n    condition.textContent = clima;\n    condition.className = 'italic';\n\n\n    toggle.addEventListener('input', async (e) => {\n      e.preventDefault();\n      toggle.checked === true ? tempVal.textContent = `${unitSwap(temp)}` + '°F' : tempVal.textContent = `${temp}` + '°C';\n    });\n  } catch (error) {\n    tempVal.textContent = '404';\n    city.textContent = 'City not Found';\n  }\n};\n\nconst getWiki = async (place) => {\n  try {\n    const response = await fetch(`https://en.wikipedia.org/w/api.php?action=query&origin=*&format=json&list=search&namespace=0&limit=5&srsearch=${place}`, { mode: 'cors' });\n    const cityInfo = await response.json();\n    const cardSnip = cityInfo.query.search[0].snippet;\n    cardWiki.classList.remove('hidden');\n    cardTitle.innerText = `${place}`;\n    cardSnippet.innerHTML = cardSnip;\n  } catch (error) {\n    cardTitle.textContent = 'No Article Found';\n    cardSnippet.textContent = 'Unfortunately we could not find a matching article.';\n  }\n};\n\nconst form = document.getElementById('locForm');\n\nform.addEventListener('click', async (e) => {\n  e.preventDefault();\n  const cityName = form[0].value;\n  getWeather(cityName);\n  getWiki(cityName);\n});\n\n\n//# sourceURL=webpack://Weather-Cast/./src/index.js?");

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