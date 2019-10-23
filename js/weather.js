class Weather {
  constructor(city, state) {
    this.apiKey = '2420cd3fba0943fbad3a08019a32b3e3';
    this.city = city;
    this.state = state;
  }

  // Fetch weather from API
  async getWeather(city) {
    const url = `https://api.weatherbit.io/v2.0/current?city=${this.city}&key=${this.apiKey}`;
    const weatherResponse = await fetch(url);
    const weatherData = await weatherResponse.json();
    return weatherData.data[0];
  }

  changeLocation(city, state) {
    this.city = city;
    this.state = state;
  }
}