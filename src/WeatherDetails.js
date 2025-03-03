import React from "react";

const WeatherDetails = ({ data }) => {
  return (
    <div className="details">
      <div className="col">
        <img src="images/humidity.png" alt="Humidity" />
        <div>
          <p className="humidity">{data.main.humidity}%</p>
          <p>Humidity</p>
        </div>
      </div>

      <div className="col">
        <img src="images/wind.png" alt="Wind Speed" />
        <div>
          <p className="wind">{data.wind.speed} km/h</p>
          <p>Wind Speed</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherDetails;