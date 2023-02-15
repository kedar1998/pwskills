import React from 'react'
import loginimg from '../assets/loginimg.png'
import {Link} from 'react-router-dom'

const Logincomp = () => {
  return (
    <div className='h-[100vh] bg-[#E9E6FD] flex justify-center items-center'>
      <div className='p-10 bg-white  flex items-center rounded-md'>
        {/* LEFT */}
        <div className=''>
          <img src={loginimg} alt="img"  className='h-96'/>
        </div>

        {/* RIGHT */}
        <div className='pl-10'>
          <h2 className='text-[#5A4BDA] font-bold text-3xl'>LOGIN</h2>
          <p className='pb-10'>New to PW Skills? <Link to="/signup" className='font-bold'>Register</Link></p>

          <div className='flex flex-col space-y-5'>
            <input type="email" className='border border-black w-[300px] h-8' placeholder='Email'/>
            <input type="password" className='border border-black w-[300px] h-8' placeholder='Password'/>
          </div>

          <p className='text-right cursor-pointer'>Forgot Password?</p>

          <button className='mt-10 bg-[#5A4BDA] w-full py-2 text-white font-bold'>Login</button>
        </div>
      </div>
    </div>
  )
}

export default Logincomp