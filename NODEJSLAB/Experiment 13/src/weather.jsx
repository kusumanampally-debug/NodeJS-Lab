import { useState } from 'react';
import axios from 'axios';

function Weather() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState('');

  const fetchData = async (e) => {
    e.preventDefault();
    setError('');
    setWeatherData(null);

    try {
      const apiKey = 'YOUR_API_KEY';
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
      );
      setWeatherData(response.data);
    } catch {
      setError('Unable to fetch weather. Check the city and API key.');
    }
  };

  return (
    <div>
      <form onSubmit={fetchData}>
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          required
        />
        <button type="submit">Get Weather</button>
      </form>

      {error && <p>{error}</p>}

      {weatherData && (
        <div>
          <h2>{weatherData.name}</h2>
          <p>Temperature: {weatherData.main.temp} °C</p>
          <p>Description: {weatherData.weather[0].description}</p>
          <p>Feels like: {weatherData.main.feels_like} °C</p>
          <p>Humidity: {weatherData.main.humidity}%</p>
          <p>Pressure: {weatherData.main.pressure} hPa</p>
          <p>Wind speed: {weatherData.wind.speed} m/s</p>
        </div>
      )}
    </div>
  );
}

export default Weather;