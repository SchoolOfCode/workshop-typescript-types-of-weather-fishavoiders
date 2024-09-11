import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [fishSearch, setFishSearch] = useState("")

  function handleFishChange(event) {
    setFishSearch(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target.value);
  }

  return (
    <>
      <header>
        <h1>Fish avoiding weather app</h1>
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
          <p>dt_txt</p>
          <p>weather.main</p>
          <p>weather.description</p>
          <p>main.sea_level</p>
        </section>
      </main>
      <footer>
        <h1>🦶🐟🦶</h1>
      </footer>
    </>
  )
}

export default App
