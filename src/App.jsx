
// ===============================
// MAIN APP CONTROLLER (Team Lead)
// ===============================

import { useState } from "react";
import "./App.css";

// ===============================
// UI COMPONENTS (UI Member)
// ===============================
import Header from "./components/Header.jsx";
import SearchBar from "./components/SearchBar.jsx";
import WeatherCard from "./components/WeatherCard.jsx";

// ===============================
// WEATHER API KEY (Extra Features)
// ===============================
const API_KEY = "51ab99c032c4dc88c31942f84ce22000";

function App() {
  // ===============================
  // STATE MANAGEMENT (Team Lead)
  // ===============================
  const [message, setMessage] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // ===============================
  // EXTRA FEATURE: TEMPERATURE UNIT
  // (Extra Features Member)
  // ===============================
  const [isCelsius, setIsCelsius] = useState(true);

  // ===============================
  // WEATHER API LOGIC (Extra Features)
  // ===============================
  const handleSearch = async (searchedCity) => {
    setMessage(`You searched for: ${searchedCity}`);
    setError("");
    setLoading(true);

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${searchedCity}&units=metric&appid=${API_KEY}`
      );

      if (!response.ok) {
        throw new Error("City not found");
      }

      const data = await response.json();

      // Save API data
      setWeatherData({
        city: data.name,
        temp: data.main.temp, // Celsius from API
        condition: data.weather[0].description,
      });
    } catch (err) {
      setError(err.message);
      setWeatherData(null);
    } finally {
      setLoading(false);
    }
  };

  // ===============================
  // EXTRA FEATURE: TEMPERATURE
  // CONVERSION LOGIC (°C ⇄ °F)
  // ===============================
  const convertedTemp =
    weatherData && weatherData.temp !== null
      ? isCelsius
        ? weatherData.temp
        : (weatherData.temp * 9) / 5 + 32
      : null;

  // ===============================
  // EXTRA FEATURE: TOGGLE BUTTON
  // ===============================
  const toggleTemperatureUnit = () => {
    setIsCelsius(!isCelsius);
  };

  // ===============================
  // REFRESH LOGIC (Extra Features)
  // ===============================
  const handleRefresh = () => {
    setMessage("Refreshing...");
    setWeatherData(null);
  };

  // ===============================
  // RENDER UI (UI Member)
  // ===============================
  return (
    <div className="app-container">
      <div className="app-card">
        <Header />

        <SearchBar onSearch={handleSearch} />

        {message && <p className="message">{message}</p>}
        {loading && <p className="message">Loading weather...</p>}

        {/* EXTRA FEATURE BUTTON */}
        {weatherData && (
          <button onClick={toggleTemperatureUnit}>
            Switch to °{isCelsius ? "F" : "C"}
          </button>
        )}

        <WeatherCard
          weatherData={
            weatherData
              ? {
                  ...weatherData,
                  temp: convertedTemp,
                  unit: isCelsius ? "°C" : "°F",
                }
              : null
          }
          error={error}
          onRefresh={handleRefresh}
        />
      </div>
    </div>
  );
}

export default App;

