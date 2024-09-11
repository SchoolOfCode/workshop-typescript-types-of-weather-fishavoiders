import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <h1>Fish avoiding weather app</h1>
      </header>
      <main>
        <form>
          <input name="query" />
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
