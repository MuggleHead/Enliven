import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './section/Hero'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
    <Navbar/>
    <Hero/>
    </div>
  )
}

export default App