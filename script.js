// Weather API

const geoAPI = {
    key: "YOUR-API-KEY",
    base: "http://api.openweathermap.org/geo/1.0/"
}

const weatherAPI = {
    key: "YOUR-API-KEY",
    base: "https://api.openweathermap.org/data/2.5/"
}

const search = document.querySelector(".search");
const btn = document.querySelector(".btn");

btn.addEventListener("click", getInput);

function getInput(event) {
    event.preventDefault();
    if (event.type == "click") {
        getLatitudeAndLongitude(search.value);
        console.log(search.value);
    }
}

// Get weather data
function getLatitudeAndLongitude() {
    // API call to get latitude and longitude of requested city
    fetch(`${geoAPI.base}direct?q=${search.value}&limit=1&appid=${geoAPI.key}`)
        .then(response => {
            if (response.cod === "404") {
                const error = document.querySelector(".error");
                error.textContent = "Please enter a valid city.";
                search.value = "";
            }
            else {                
                console.log(response);
                return response.json();
            }
        })
        .then(displayWeatherData)
}

function displayWeatherData(response) {
    // Receive lat and long from geoAPI call
    const lat = response[0].lat;
    const long = response[0].lon;
    
    // Use lat and long to get weather data by second API call
    fetch(`${weatherAPI.base}weather?lat=${lat}&lon=${long}&appid=${weatherAPI.key}`)
        .then(response => {
            return response.json();
        })
        .then((response) => {
            console.log(response);

            if (response.cod === "404") {
                const error = document.querySelector(".error");
                error.textContent = "Please enter a valid city.";
                search.value = "";
            }
            else {
                // Update city in frontend
                const city = document.querySelector(".city");
                city.innerText = `${response.name}, ${response.sys.country}`
                
                // Update today's date in frontend
                const date = document.querySelector(".date");
                date.innerText = dateFunction();
            
                // Update temp in frontend (Convert from Kelvin to Celcius)
                const temp = document.querySelector(".temp");
                temp.innerHTML = `Temp: ${Math.round(response.main.temp - 273.15)} <span>°C</span>`;

                // Update weather info in frontend
                const weather = document.querySelector(".weather");
                weather.innerText = `Weather: ${response.weather[0].main}`;
                
                // Update temp range in frontend
                const tempRange = document.querySelector(".temp-range");
                tempRange.innerText = `Temp Range: ${Math.round(response.main.temp_min - 273.15)}°C / ${Math.round(response.main.temp_max - 273.15)}°C`;
            
                // Change weather icon
                const weatherIcon = document.querySelector(".weather-icon");
                const iconURL = "https://openweathermap.org/img/w/";
                weatherIcon.src = iconURL + response.weather[0].icon + ".png";
            
                search.value = "";
            }
        })
}


// Format the date to be displayed on screen
function dateFunction() {
    let months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const today = new Date();

    let day = days[today.getDay()];
    let date = today.getDate();
    let month = months[today.getMonth()];
    let year = today.getFullYear();

    return `${day}, ${date} ${month} ${year} `
}
