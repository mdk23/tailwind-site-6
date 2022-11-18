import React from 'react'
import {beachVid} from '../assets';
import  {SearchIcon} from '../assets/Icons';

function Hero() {
  return (
    <div className='w-full h-screen relative'>
      
      <video src={beachVid} className='w-full h-full object-cover' autoPlay loop muted/>
      <div className='absolute w-full h-full top-0 left-0 bg-gray-900/30'> </div>
    
       <div className='absolute top-0 w-full h-full flex flex-col justify-center text-center text-white p-4 '>
            <h1>First Class Travel</h1>
            <h2 className='py-2'>Top 1% Locations Worldwide </h2> 
            
            <form className='flex justify-between items-center max-w-[700px] mx-auto w-full m-4 border p-1 rounded-md text-black bg-gray-100/90'>
                <div>
                    <input className='bg-transparent w-[300px] sm:w-[600px] font-[Poppins] p-3 focus:outline-none '  type='text' placeholder='Search destinations' />
                </div>

                <div>
                    <button><SearchIcon size={'20px'} className='icon'  /> </button>
                </div>

            </form>

       </div> 
    </div>
  )
}

export default Hero
