const tempVal = document.getElementById('value');
const condition = document.getElementById('condition');
const city = document.getElementById('city');
const cardWiki = document.getElementById('cardWiki');
const cardSnippet = document.getElementById('snippet');
const cardTitle = document.getElementById('cityName');
const toggle = document.getElementById('switch');

const unitSwap = (val) => ((val * 9) / 5 + 32).toFixed(1);

const getWeather = async (place) => {
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${place}&APPID=17bb7e6ff8637be739a2a23e2ccf12e9`, { mode: 'cors' });
    const weatherInfo = await response.json();
    const clima = weatherInfo.weather[0].main;
    const temp = (weatherInfo.main.temp - 273.15).toFixed(1);

    toggle.checked === true ? tempVal.textContent = `${unitSwap(temp)}` + '°F' : tempVal.textContent = `${temp}` + '°C';
    tempVal.className = 'text-5xl font-bold font-mono';
    city.innerHTML = place;
    condition.textContent = clima;
    condition.className = 'italic';

    toggle.addEventListener('input', async (e) => {
      e.preventDefault();
      toggle.checked === true ? tempVal.textContent = `${unitSwap(temp)}` + '°F' : tempVal.textContent = `${temp}` + '°C';
    });
  } catch (error) {
    tempVal.textContent = '404';
    city.textContent = 'City not Found';
  }
};

const getWiki = async (place) => {
  try {
    const response = await fetch(`https://en.wikipedia.org/w/api.php?action=query&origin=*&format=json&list=search&namespace=0&limit=5&srsearch=${place}`, { mode: 'cors' });
    const cityInfo = await response.json();
    const cardSnip = cityInfo.query.search[0].snippet;
    cardWiki.classList.remove('hidden');
    cardTitle.innerText = `${place}`;
    cardSnippet.innerHTML = cardSnip;
  } catch (error) {
    cardTitle.textContent = 'No Article Found';
    cardSnippet.textContent = 'Unfortunately we could not find a matching article.';
  }
};

const form = document.getElementById('locForm');

form.addEventListener('click', async (e) => {
  e.preventDefault();
  const cityName = form[0].value;
  getWeather(cityName);
  getWiki(cityName);
});
