import React from 'react'
import image from '../assets/image.jpg'
import Google from '../assets/google.png'
import '../components/Signin.css'
import { Link } from 'react-router-dom'


function Form() {
  return (

    
      <div className="h-screen w-full pb-12">
        <div className="bg-cover bg-center" >
        <div className='bg-black/40 pb-12'>
          <div>
            <h1 className='text-3xl md:text-5xl text-red-700 font-extrabold py-4 px-16 font-sans'>KAYFLIX</h1>
          </div>
          
          <div className='flex flex-col justify-center items-center gap-5 bg-black/80 rounded-md text-white transparent backdrop-blur-sm px-16 py-10 mx-auto my-10 w-[450px]'>
           
            <form className='w-full'>
              <h2 className='text-3xl font-bold mb-8'>Sign In</h2>
              <input id='email' type='text/email' placeholder='Username or Email' className='bg-transparent rounded-md border-white/40 border-[0.2px] px-3 py-3 w-full block placeholder-white placeholder:text-base placeholder:font-extralight'/>
              <input  type='password' placeholder='Password' className='bg-transparent rounded-md border-white/40 border-[0.2px] px-3 py-3 w-full block mt-4 placeholder-white placeholder:text-base placeholder:font-extralight '/>
              <button className='bg-red-700 rounded-md w-full mt-4 py-2'>
                Sign In
              </button>
              <p className='my-2 text-center font-xs'>OR</p>
              <button className='flex justify-center rounded-md bg-white text-black w-full py-2'>
                <img src={Google} className='w-5 h-5 mr-2' /> Sign In with Google
              </button>
              <p className='text-center hover:underline mt-4 text-sm font-xs'>Forgot Password?</p>
             
             <div className='space-x-2 mt-2'>
                <input type='checkbox' id='check' />
                <label for='check' className='font-thin'>Remember Me </label>
              </div>

              <div>
                <p className='mt-3 font-thin'>New to Kayflix? <Link to='/signup'> <span className='font-bold hover:underline'>Sign up now </span></Link></p>
              </div>
            </form>
          </div>
          </div>
        </div>
      </div>

      
    
  )
}

export default Form
