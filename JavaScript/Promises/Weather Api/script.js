document.getElementById('fetch-button').addEventListener('click', fetchWeather);

function fetchWeather() {
    const apiKey = 'e3b5a97390759503828af0337c087168'; 
    const city = document.getElementById('city-input').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('City not found or network response was not ok.');
            }
            return response.json(); // Parse the JSON
        })
        .then(data => {
            displayWeather(data);
        })
        .catch(error => {
            console.error('Fetch error:', error);
            document.getElementById('weather-container').innerText = 'Failed to load weather data.';
        });
}

function displayWeather(data) {
    const container = document.getElementById('weather-container');
    const { name, main, weather } = data;

    container.innerHTML = `
        <div class="weather">
            <h2>Weather in ${name}</h2>
            <p>Temperature: ${main.temp} °C</p>
            <p>Condition: ${weather[0].description}</p>
            <p>Humidity: ${main.humidity}%</p>
            <img src="https://openweathermap.org/img/w/${weather[0].icon}.png" alt="${weather[0].description}">
        </div>
    `;
}

