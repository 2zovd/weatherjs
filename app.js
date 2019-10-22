// Init storage
const storage = new Storage();

// Get stored location data
const weatherLocation = storage.getLocation();

// Init weather object
const weather = new Weather(weatherLocation.city);

// Init UI object
const ui = new UI();

// Get location on load
document.addEventListener('DOMContentLoaded', getWeather);

// Change location event
document.getElementById('w-change-button').addEventListener('click', (e) => {
  const city = document.getElementById('city').value;
  if (city !== '') {
    // Set new city
    weather.changeLocation(city);

    // Set LS 
    storage.setLocation(city);

    // Get and display weather
    getWeather();
    
    $('#location-modal').modal('hide');
  }
});

function getWeather() {
  weather.getWeather()
    .then(result => ui.paint(result))
    .catch(error => console.log(error));
}