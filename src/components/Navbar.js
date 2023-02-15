import React from 'react'
import logo from '../assets/logo.png'
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='my-5'>
        <section className='max-w-7xl mx-auto'>
            <nav className='flex items-center justify-between'>
                {/* LEFT SECTION */}
                <div className='flex items-center'>
                    <div>
                        <img src={logo} alt="logo" className='h-10'/>
                    </div>
                    <div className='w-2xl'>
                        <input type="text" className='ml-5 border border-black h-8 w-80' placeholder='What do you want to learn?'/>
                    </div>
                </div>

                {/* RIGHT SECTION */}
                <div>
                    <ul className='flex items-center gap-10'>
                        <li><a href="https://pwskills.com/">Courses</a></li>
                        <li><a href="https://pwskills.com/">Job Portal</a></li>
                        <li><a href="https://pwskills.com/">Experience Portal</a></li>
                        <li><a href="https://pwskills.com/">More</a></li>
                        <li><Link to="login" className='bg-[#5A4BDA] px-4 py-2 text-white font-semi
                        '>Login / Sign up</Link></li>
                    </ul>
                </div>
            </nav>
        </section>
    </div>
  )
}

export default Navbar