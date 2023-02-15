import React from 'react'
import Hero from '../components/Hero'
import Info from '../components/Info'
import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Info />
    </div>
  )
}

export default Home