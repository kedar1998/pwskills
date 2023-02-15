import React from 'react'
import heroimg from '../assets/heroimg.png'

const Hero = () => {
  return (
    <div className='bg-[#7E72E3] h-[90vh]'>
        <section className='max-w-7xl mx-auto flex flex-col md:flex-row h-full'>
           {/* LEFT SECTION */}
           <div className='w-full md:w-1/2 flex flex-col justify-center items-start'>
            <h1 className='text-6xl font-bold text-white'>The Industry required advance skills.</h1>
            <h2 className='text-6xl py-2 text-white'>Get it the smart way.</h2>
            <button className='mt-8 border border-white px-5 py-2 text-white font-semibold'>Explore courses</button>
           </div>

           {/* RIGHT SECTION */}
           <div className='w-full md:w-1/2 flex items-end justify-center h-full'>
                <img src={heroimg} alt="heroimg" />
           </div>
        </section>
    </div>
  )
}

export default Hero