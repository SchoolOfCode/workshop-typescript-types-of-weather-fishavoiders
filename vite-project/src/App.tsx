import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [fishSearch, setFishSearch] = useState("")
  const [seaLevel, setSeaLevel] = useState("")
  const [dateTime, setDateTime] = useState("")
  const [weatherMain, setWeatherMain] = useState("")
  const [weatherDesc, setWeatherDesc] = useState("")

  function handleFishChange(event: any) {
    setFishSearch(event.target.value);
  }

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    //console.log(fishSearch);
    let cityData = await getCity(fishSearch);
    //console.log(cityData);
    let weatherData = await getWeather(cityData[0].lat, cityData[0].lon);
    setSeaLevel(weatherData.list[0].main.sea_level);
  }

  async function getCity(query:string) {
    try {
      const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=1&appid=70bba6d533205abf96963d03760d52e6`, {
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('There was a problem fetching the city:', error);
    }
  }

  async function getWeather(lat:number, lon:number) {
    try {
      const response = await fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=70bba6d533205abf96963d03760d52e6`, {
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('There was a problem fetching the weather:', error);
    }
  }

  return (
    <>
      <header>
        <h1>Fish avoiding app</h1>
      </header>
      <main>
        <form onSubmit={handleSubmit}>
          <input 
              value={fishSearch}
              name="query"
              onChange={(event) => handleFishChange(event)}/>
          <button type="submit">Avoid</button>
        </form>
        <section id="content">
          <p>dt_txt {seaLevel}</p>
          <p>weather.main {seaLevel}</p>
          <p>weather.description {seaLevel}</p>
          <p>Main sea level: {seaLevel}</p>
          <p>{parseInt(seaLevel) < 1010 ? `Fantastic, sea level is low - you won't be in contact with any fish` : `Bad news, sea level is high - you may come in contact with with fish`}</p>
        </section>
      </main>
      <footer>
        <h1>🦶🐟🦶</h1>
      </footer>
    </>
  )
}

export default App
