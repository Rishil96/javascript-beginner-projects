// API

// Query selectors
const userLocation = document.querySelector(".location");
const btn = document.querySelector(".btn");

// Event listener
btn.addEventListener("click", () => {
    navigator.geolocation.getCurrentPosition(showPosition);
})

// Get latitude and longitude
function showPosition(position) {
    userLocation.innerHTML = `Latitude: ${position.coords.latitude} <br>
                            Longitude: ${position.coords.longitude}`
}

// https://www.latlong.net/