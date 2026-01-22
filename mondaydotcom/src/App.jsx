import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Nav from './scenes/Navbar.jsx'
import './index.css'
import Hero from './scenes/Hero.jsx'
import Explore from './scenes/Explore.jsx'
import Trusted from './scenes/Trusted.jsx'
import Accelerate from './scenes/Accelerate.jsx'
import AccelerateBusiness from './scenes/AccelerateBusiness.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav/>
      <Hero/>
      <Explore/>
      <Trusted/>
      <Accelerate/>
      <AccelerateBusiness/>
    </>
  )
}

export default App
