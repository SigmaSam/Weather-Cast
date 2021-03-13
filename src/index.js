const weatherCard = document.getElementById('card');
const tempVal = document.getElementById('value');
const condition = document.getElementById('condition')
const city = document.getElementById('city');

const unitSwap = (val) => ((val * 9) / 5 + 32).toFixed(1);


const getWeather = async (place) => {
        try {
                const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${place}&APPID=17bb7e6ff8637be739a2a23e2ccf12e9`, { mode: 'cors' });
                const weatherInfo = await response.json();
                const clima = weatherInfo.weather[0].main;
                const temp = (weatherInfo.main.temp - 273.15).toFixed(1);

                value.textContent = `${temp}`;
                city.innerHTML = place;
                condition.textContent = clima;

        } catch (error) {
                console.log(error);
        }
};


const form = document.getElementById('locForm');

form.addEventListener('click', (e) => {
        e.preventDefault();
        const cityName = form[0].value;
        getWeather(cityName);
        
}) 

const toggle = document.getElementById('switch')

toggle.addEventListener('click', (e) => {
        e.preventDefault
        if (toggle.value) {
                unitSwap(tempVal);
        }
})