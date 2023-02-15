import React from 'react'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Info from '../components/Info'
import Navbar from '../components/Navbar'
import Program from '../components/Program'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Info />
      <Program />
      <Footer />
    </div>
  )
}

export default Home