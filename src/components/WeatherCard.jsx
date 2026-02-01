import React from 'react';
import './WeatherCard.css';

function WeatherCard({ weatherData, error, onRefresh }) {
  if (error) {
    return (
      <div className="weather-card error">
        <p>{error}</p>
      </div>
    );
  }

  if (!weatherData) {
    return (
      <div className="weather-card">
        <p>Enter a city and search to see weather data.</p>
      </div>
    );
  }

  return (
    <div className="weather-card">
      <h2>{weatherData.city}</h2>
      <p>Temperature: {weatherData.temp}°C</p>
      <p>Condition: {weatherData.condition}</p>
      <button onClick={onRefresh}>Refresh</button>
    </div>
  );
}

export default WeatherCard;