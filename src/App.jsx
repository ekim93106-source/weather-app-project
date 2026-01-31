import { useState } from "react";

function App() {
  const [city, setCity] = useState("");
  const [message, setMessage] = useState("");

  const handleSearch = () => {
    setMessage(`You searched for: ${city}`);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Weather App</h1>

      <input
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />

      <button onClick={handleSearch}>Search</button>

      {message && <p>{message}</p>}
    </div>
  );
}

export default App;