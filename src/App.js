import axios from "axios";
import "./App.css";
import { useState } from "react";
  
function App() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [error,setError]=useState("")

  const handleSearch = async () => {
    console.log("searching weather for city ", city);
    try {
      const api_key = "4660ae956dbc31b141875c686aeb2fab";
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`
      );
      setWeatherData(response.data);
      setError("")
    } catch (err) {
      console.log("city not found");
      setError("City Not found")
      setWeatherData(null);
    }
  };
  return (
    <div className="dfdfdfd" style={{ width: "400px", margin: "100px auto" }}>
      <div style={{ display: "flex",justifyContent:"center" ,gap:"10px"}}>
        <input
          type="text"
          placeholder="enter city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          style={{
            padding: "10px",
            border: "1px solid #aaa",
            fontSize: "16px",
            borderRadius: "5px",
          }}
        />
        <button
          onClick={handleSearch}
          style={{
            padding: "10px 15px",
            border: "none",
            borderRadius:"5px",
            fontSize: "16px",
            cursor: "pointer",
            color: "white",
            backgroundColor: "#4CAF50",
          }}
        >
          Get Weather
        </button>
      </div>

      {weatherData && (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "15px",
            border: "1px solid #ddd ",
            marginTop: "20px",
            borderRadius: "10px",
            padding: "10px",
            backgroundColor: "#b6e7dc",
            maxWidth: "400px",
            boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
          }}
        >
          <img
            src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
            alt={weatherData.weather[0].description}
          />
          <div>
            <h3>City: {`${weatherData.name},${weatherData.sys.country}`}</h3>
            <p>Temperature: {weatherData.main.temp}</p>
            <p>Humidity: {weatherData.main.humidity}</p>
            <p>Pressure: {weatherData.main.pressure}</p>
            <p>
              Weather:  {weatherData.weather[0].main}(
              {weatherData.weather[0].description})
            </p>
          </div>
        </div>
      )}
      {error && (
  <div
    style={{
      marginTop: "15px",
      padding: "10px",
      backgroundColor: "#ffcccc",
      color: "#cc0000",
      borderRadius: "5px",
      textAlign: "center",
      fontWeight: "bold",
      boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
    }}
  >
    {error}
  </div>
)}

    </div>
  );
}
//////////////////////////////////////////////

//To align items horizontally, use justify-content

//To align items vertically, use align-items (when using flex-direction: row)

export default App;
