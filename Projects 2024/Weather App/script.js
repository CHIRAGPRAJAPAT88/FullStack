let API_KEY = `e3b5a97390759503828af0337c087168`;
let form = document.querySelector("form")
let search = document.querySelector("#search")
let weather = document.querySelector("#weather")

let getWeather = async(city) => {
    weather.innerHTML = `<h2> Loading... <h2>`
    // let  url = `https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid={API key}&units=metric`
    let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
    let data = await response.json()
    return showWeather(data)
}

let showWeather = (data) => {
    if (data.cod == "404") {
        weather.innerHTML = `<h2> City Not Found <h2>`
        return;
    }
    weather.innerHTML = `
        <div>
            <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
        </div>
        <div>
            <h2>${data.main.temp} ℃</h2>
            <h4>${data.weather[0].main}</h4>
        </div>
    `
}

form.addEventListener(
    "submit",
    function(event) {
        getWeather(search.value)
        event.preventDefault();
    }
)
