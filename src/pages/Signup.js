import React from 'react'
import signupimg from '../assets/registerimg.png'
import {Link} from 'react-router-dom'
const Signup = () => {
  return (
    <div className='h-[100vh] bg-[#E9E6FD] flex justify-center items-center'>
      <div className='p-10 bg-white  flex items-center rounded-md'>
        {/* LEFT */}
        <div className=''>
          <img src={signupimg} alt="img"  className='h-96'/>
        </div>

        {/* RIGHT */}
        <div className='pl-10'>
          <h2 className='text-[#5A4BDA] font-bold text-3xl'>Register</h2>
          <p className='pb-10'>Already a member? <Link to="/login" className='font-bold'>Login</Link></p>

          <div className='flex flex-col space-y-5'>
            <input type="number" className='border border-black w-[300px] h-8' placeholder='+91 7766556677'/>
          </div>


          <button className='mt-10 bg-[#5A4BDA] w-full py-2 text-white font-bold'>Send OTP</button>
        </div>
      </div>
    </div>
  )
}

export default Signup