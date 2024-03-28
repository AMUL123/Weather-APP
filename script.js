document.addEventListener('DOMContentLoaded', () => {

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '7a2c2ad3dfmsh92943cc848999b0p1bb433jsncc64b8b13402',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
const getWeather = async (city)=>{
	cityName.innerHTML=city
	const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`;

    try {
        const response = await fetch(url, options);
        const data = await response.json(); // Parse JSON response

        // Accessing properties from parsed JSON data
        
        document.getElementById('temp').innerHTML = data.temp;
		document.getElementById('temp2').innerHTML = data.temp;
        document.getElementById('feels_like').innerHTML = data.feels_like;
        document.getElementById('humidity').innerHTML = data.humidity;
		document.getElementById('humidity2').innerHTML = data.humidity;
        document.getElementById('min_temp').innerHTML = data.min_temp;
        document.getElementById('max_temp').innerHTML = data.max_temp;
        document.getElementById('wind_speed').innerHTML = data.wind_speed;
		document.getElementById('wind_speed2').innerHTML = data.wind_speed;
        document.getElementById('wind_degrees').innerHTML = data.wind_degrees;
        document.getElementById('sunrise').innerHTML = data.sunrise;
        document.getElementById('sunset').innerHTML = data.sunset;
    } catch (error) {
        console.error(error);
    }
}
const Submit = document.getElementById('submit'); // Get the submit button element
const cityName = document.getElementById('cityName'); // Assuming you have an element with ID 'cityName'

if (Submit && cityName) {
	Submit.addEventListener("click", (e) => {
		e.preventDefault();
		const cityInput = document.getElementById('city');
		if (cityInput) {
			const city = cityInput.value; // Get the value from input field with ID 'city'
			getWeather(city);
		} else {
			console.error("Element with ID 'city' not found.");
		}
	});
} else {
	console.error("Submit button or cityName element not found.");
}

getWeather('sri lanka');
});