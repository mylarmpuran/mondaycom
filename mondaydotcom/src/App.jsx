import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Nav from './scenes/Navbar.jsx'
import './index.css'
import Hero from './scenes/Hero.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav/>
      <Hero/>
    </>
  )
}

export default App
