import { useState } from "react";
import "./App.css";

import Header from "./components/Header.jsx";
import SearchBar from "./components/SearchBar.jsx";
import WeatherCard from "./components/WeatherCard.jsx";

function App() {
  const [message, setMessage] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState("");

  const handleSearch = (searchedCity) => {
    setMessage(`You searched for: ${searchedCity}`);

    setWeatherData({
      city: searchedCity,
      temp: "--",
      condition: "Loading...",
    });

    setError("");
  };

  const handleRefresh = () => {
    setMessage("Refreshing...");
  };

  return (
    <div className="app-container">
      <div className="app-card">
        <Header />
        <SearchBar onSearch={handleSearch} />
        {message && <p className="message">{message}</p>}
        <WeatherCard
          weatherData={weatherData}
          error={error}
          onRefresh={handleRefresh}
        />
      </div>
    </div>
  );
}

export default App;