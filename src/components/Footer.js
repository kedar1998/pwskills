import React from 'react'
import logowhite from '../assets/logo-white.png'
import youtube from '../assets/youtube.png'
import facebook from '../assets/facebook.png'
import instagram from '../assets/instagram.png'
import twitter from '../assets/twitter.png'

const Footer = () => {
  return (
    <div className='bg-[#2D3748] py-20'>
        <section className='max-w-7xl mx-auto flex justify-between items-center text-white'>
            {/* LEFT */}
            <div>
                <div>
                    <img src={logowhite} alt="logo" />
                </div>
                <p>Email us: support@pwskills.com</p>
                <div className='flex space-x-5 mt-5'>
                    <img src={youtube} alt="youtube" />
                    <img src={facebook} alt="youtube" />
                    <img src={instagram} alt="youtube" />
                    <img src={twitter} alt="youtube" />
                </div>
            </div>

            {/* RIGHT */}
            <div className='flex space-x-20'>
                {/* section one */}
                <div>
                    <h2 className='border-b pr-20 pb-2 text-xl'>PW Skills</h2>
                    <div className='flex space-x-10 pt-5'>
                        {/* col one */}
                        <div>
                            <p>About us</p>
                            <p>FAQs</p>
                            <p>Privacy policy</p>
                        </div>

                        {/* col two */}
                        <div>
                            <p>Contact Us</p>
                            <p>About us</p>
                            <p>Support</p>
                            <p>Careers</p>
                        </div>
                    </div>
                </div>

                {/* section two */}
                <div>
                    <h2 className='border-b pr-20 pb-2 text-xl'>Products</h2>
                    <div className='flex space-x-10 pt-5'>
                        {/* col one */}
                        <div>
                            <p>PW Skills Lab</p>
                            <p>Job Portal</p>
                            <p>Experience portal</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Footer