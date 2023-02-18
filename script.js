const input = document.querySelector('input');
const btn = document.querySelector('button');

const cityName = document.querySelector('.city-name');
const warining = document.querySelector('.warning');
const photo = document.querySelector('.photo');

const weather = document.querySelector('.weather');
const temperature = document.querySelector('.temp');
const humidity = document.querySelector('.humidity');

const apiLink = 'https://api.openweathermap.org/data/2.5/weather?q=';

const apiKey = '&APPID=7ca7aed6a2f78125dcf120cb988d74e4';
const units = '&units=metric';

let city;
let url;

const getWeather = () => {
	city = !input.value ? 'New York' : input.value;
	url = apiLink + city + apiKey + units;

	axios.get(url).then((res) => {
		const temp = res.data.main.temp;
		const hum = res.data.main.humidity;
		const status = Object.assign({}, ...res.data.weather);

		cityName.textContent = res.data.main;
		weather.textContent = status.main;
		temperature.textContent = Math.floor(temp) + '°C';
		humidity.textContent = hum + '%';

		warining.textContent = '';
		input.value = '';

		if (status.id >= 200 && status.id < 300) {
			photo.setAttribute('src', 'images/CloudRainThunder.png');
		} else if (status.id >= 300 && status.id < 400) {
			photo.setAttribute('src', 'images/FreezingDrizzle.png');
		} else if (status.id >= 500 && status.id < 600) {
			photo.setAttribute('src', 'images/ModRain.png');
		} else if (status.id >= 600 && status.id < 700) {
			photo.setAttribute('src', 'images/ModSnow.png');
		} else if (status.id >= 700 && status.id < 800) {
			photo.setAttribute('src', 'images/Mist.png');
		} else if (status.id === 800) {
			photo.setAttribute('src', 'images/Sunny.png');
		} else if (status.id > 800 && status.id < 900) {
			photo.setAttribute('src', 'images/Cloudy.png');
		} else {
			photo.setAttribute('src', 'images/PartlyCloudyDay.png');
		}
	});
};

getWeather();
btn.addEventListener('click', getWeather);
