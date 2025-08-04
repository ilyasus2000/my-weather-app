import { useState } from 'react'
import './App.css'
import WeatherCard from './WeatherCard'

const App = () => {
  const [city, setCity] = useState('')
  const [weatherData, setWeatherData] = useState(null)

  const apiKey = 'cabaf4e530574a1deda59c64ba255aa1'
  const apiUrl =
    'https://api.openweathermap.org/data/2.5/weather?units=metric&q='

  const checkWeather = async city => {
    try {
      const response = await fetch(apiUrl + city + `&appid=${apiKey}`)
      const data = await response.json()
      if (response.ok) {
        setWeatherData(data)
      } else {
        alert('City not found!')
      }
    } catch (error) {
      alert('Error fetching weather data. Please try again.')
    }
  }

  return (
    <div className='app'>
      <WeatherCard checkWeather={checkWeather} weatherData={weatherData} />
    </div>
  )
}

export default App
