import React, { useState } from "react";

const SearchBar = ({ checkWeather }) => {
  const [city, setCity] = useState("");

  const handleChange = (event) => {
    setCity(event.target.value);
  };

  const handleSearch = () => {
    checkWeather(city);
  };

  return (
    <div className="search">
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={handleChange}
        onKeyPress={(e) => {
          if (e.key === "Enter") handleSearch();
        }}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;