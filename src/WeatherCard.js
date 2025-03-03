
import SearchBar from "./SearchBar";
import WeatherDetails from "./WeatherDetails";


const WeatherCard = ({ checkWeather, weatherData }) => {
  return (
    <div className="card">
      <SearchBar checkWeather={checkWeather} />
      {weatherData ? (
        <div className="weather">
          <img
            src={`images/${weatherData.weather[0].main.toLowerCase()}.png`}
            alt="Weather Icon"
            className="weather-icon"
          />
          <h1 className="temp">{Math.round(weatherData.main.temp)}°C</h1>
          <h2 className="city">{weatherData.name}</h2>
          <WeatherDetails data={weatherData} />
        </div>
      ) : (
        <p>Enter city to get weather info</p>
      )}
    </div>
  );
};

export default WeatherCard;