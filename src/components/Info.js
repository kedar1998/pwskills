import React from 'react'

const Info = () => {
  return (
    <div>
        <section className='max-w-7xl mx-auto py-14 text-center'>
            <h2 className='text-[#5A4BDA] text-4xl font-bold'>"Pure Hardword, No Shortcuts!"</h2>
            <p className='max-w-lg mx-auto mt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
            <div className='flex justify-center mt-5 '>
                <div className='px-5 border-r border-black'>
                    <p className='font-bold'>600+</p>
                    <p>Different Courses</p>
                </div>
                <div className='px-5 border-r border-black'>
                    <p className='font-bold'>700000+</p>
                    <p>Students Enrolled</p>
                </div>
                <div className='px-5'>
                    <p className='font-bold'>1000+</p>
                    <p>Successful Transition</p>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Info