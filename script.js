const input = document.querySelector('input');
const btn = document.querySelector('button');

const cityName = document.querySelector('.city-name');
const warining = document.querySelector('.warning');
const photo = document.querySelector('.photo');

const wather = document.querySelector('.wather');
const temperature = document.querySelector('.temp');
const humidity = document.querySelector('.humidity');

const apiLink = 'https://api.openweathermap.org/data/2.5/weather?q=';

const apiKey = '&APPID=7ca7aed6a2f78125dcf120cb988d74e4';
const units = '&units=metric';

let city;
let url;
