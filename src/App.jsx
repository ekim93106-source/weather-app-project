import { useState } from 'react';

function App() {
  const temperature = 22;

  // State for the temperature toggle
  const [isCelsius, setIsCelsius] = useState(true);

  // State for a potential error message
  const [error, setError] = useState("City not found. Please try again.");

  // State for the list of recent cities
  const [recentCities, setRecentCities] = useState(["Paris", "Tokyo", "New York"]);

  const handleToggle = () => {
    setIsCelsius(!isCelsius);
  };

  return (
    <div>
      <h1>Weather App</h1>
      
      <div>
        <h2>London</h2>
        <p>Condition: Cloudy</p>
        
        { // Temperature Display with Toggle //
        }
        <p>
          Temperature: {isCelsius ? temperature : (temperature * 9/5) + 32}°{isCelsius ? 'C' : 'F'}
        </p>
        <button onClick={handleToggle}>
          Switch to °{isCelsius ? 'F' : 'C'}
        </button>
      </div>

      {//Error Message Display//   
      }
      {error && <p style={{ color: 'red' }}>{error}</p>}

      { //Recent Cities List // 
      }
      <div>
        <h3>Recent Searches</h3>
        <ul>
          {recentCities.map((city, index) => (
            <li key={index}>{city}</li>
          ))}
        </ul>
      </div>

    </div>
  );
}

export default App;