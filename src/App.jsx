import { useState } from "react";
import Header from "./components/Header.jsx";
import SearchBar from "./components/SearchBar.jsx";
import WeatherCard from "./components/WeatherCard.jsx";

function App() {
  const [message, setMessage] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState("");

  // Called when the search button is pressed in SearchBar
  const handleSearch = (searchedCity) => {
    setMessage(`You searched for: ${searchedCity}`);

    // Dummy data for now; real API will replace this later
    setWeatherData({
      city: searchedCity,
      temp: "--",
      condition: "Loading..."
    });

    setError(""); // clear previous error
  };

  // Dummy refresh function
  const handleRefresh = () => {
    setMessage("Refreshing...");
    // You can call API here later
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      {/* Header */}
      <Header />

      {/* Search input & button from your SearchBar.jsx */}
      <SearchBar onSearch={handleSearch} />

      {/* Display a search message */}
      {message && <p>{message}</p>}

      {/* Weather card */}
      <WeatherCard
        weatherData={weatherData}
        error={error}
        onRefresh={handleRefresh}
      />
    </div>
  );
}

export default App;
