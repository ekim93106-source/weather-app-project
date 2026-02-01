const API_KEY = "YOUR_API_KEY_HERE";
const [weatherData, setWeatherData] = useState(null);
const [error, setError] = useState("");
const [loading, setLoading] = useState(false);
const handleSearch = async (searchedCity) => {
  setLoading(true);
  setError("");

  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${searchedCity}&units=metric&appid=${API_KEY}`
    );

    if (!response.ok) {
      throw new Error("City not found");
    }

    const data = await response.json();

    setWeatherData({
      city: data.name,
      temp: data.main.temp,
      condition: data.weather[0].description,
    });
  } catch (err) {
    setError(err.message);
    setWeatherData(null);
  } finally {
    setLoading(false);
  }
};