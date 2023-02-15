import React from 'react'
import Card from './Card'
import cardimg from '../assets/cardimg.png'

const Program = () => {
  return (
    <div className='bg-[#F3F7FF]'>
        <section className='max-w-7xl mx-auto flex flex-col md:flex-row justify-between py-20'>
            {/* LEFT */}
            <div className='w-full md:w-1/3 '>
                <h2 className='text-[#5A4BDA] text-4xl '>Checkout our <span className='font-bold'>Popular Programs</span></h2>
                <p className='py-4'>Most in demand and watched by people.</p>
                <button className='text-[#5A4BDA] border-2 border-[#5A4BDA] px-5 py-2 rounded-md'>Explore More Courses</button>
            </div>
            {/* RIGHT */}
            <div className='w-full md:w-2/3 flex space-x-5'>
                <Card img={cardimg} course="Data Science Masters" author="Krish Naik" price="3500" />
                <Card img={cardimg} course="Web Development" author="hitesh choudhary" price="5500" />
            </div>
        </section>
    </div>
  )
}

export default Program