import React from 'react'
import background from '../assets/image.jpg'
import { Link } from 'react-router-dom'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function Signup() {
  return (
    <div style={{ backgroundImage: `url(${background})` }} className="h-screen w-full bg-cover bg-center">
      <div className='h-screen w-full bg-black/60' >
        <div className='flex items-center justify-between py-4 px-10 lg:px-36 '>
        <h1 className='text-3xl lg:text-5xl text-red-600 font-extrabold font-sans'>KAYFLIX</h1>
        <Link to="/"><button className='text-white font-semibold bg-red-600 p-2 rounded-md'>Sign In</button></Link>
        </div>

        <div className='text-center mx-auto mt-[100px] md:my-[200px] text-white space-y-5 px-8'>
            <h1 className='text-5xl font-medium md:font-extrabold'>Unlimited movies, TV shows, and more</h1>
            <p className='text-2xl'>Watch anywhere. Cancel anytime</p>
            <p className='text-xl'>Ready to watch? Enter your email or mobile number to create or restart your membership.</p>
            <div className='flex flex-col justify-center items-center gap-2 md:flex-row md:items-center'>
                <input id='email' type='text/email' placeholder='Username or Email' className='bg-black/35 rounded-md border-white/40 border-[0.2px] px-3 py-4 w-3/5 md:w-1/3 placeholder-white placeholder:text-base placeholder:font-extralight'/>
                <button className='bg-red-600 rounded-md w-[140px] md:w-[180px] py-4 px-3 text-sm md:text-xl font-medium '>
                Get Started<span><ArrowForwardIosIcon /></span>
              </button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Signup
