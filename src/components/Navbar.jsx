import React, { useState } from 'react'
import  {MenuIcon, PersonIcon, SearchIcon,CloseIcon} from '../assets/Icons';

function Navbar() {
  
    const[open,setOpen]=useState(false);
 
    return (
    <div className='flex w-full justify-between items-center h-20  mt-4 absolute z-10 text-white'>
      <div>
            <h1 className={`${!open ? 'block' : 'hidden'} md:block  ml-4`}>
                Beaches. 
            </h1>
      </div>

      <div className='hidden md:flex '>
        <ul className='flex'>
            <li>Home</li>
            <li>Destinations</li>
            <li>Travel</li>
            <li>View</li>
            <li>Book</li>
        </ul>
      </div>

       <div className='hidden md:flex mr-6 gap-2'>
         <SearchIcon/>
         <PersonIcon/>    
       </div> 

  
        <div className='md:hidden z-10  ' onClick={()=>setOpen( (prev)=>!prev)}>
            {  
              !open ? <MenuIcon/> : <CloseIcon/>
            }
        </div>

        {/***** DROP DOWN MENU *****/}
      <div className={ open ? 'flex text-black flex-col absolute top-0 left-0 w-full bg-gray-200/90 md:hidden' :'hidden'}
         onClick={()=>setOpen( (prev)=>!prev)}>
            <ul className='flex flex-col gap-2'>
                <li className='border-b-2 border-gray-300'>Home</li>
                <li className='border-b-2 border-gray-300'>Destinations</li>
                <li className='border-b-2 border-gray-300'>Travel</li>
                <li className='border-b-2 border-gray-300'>View</li>
                <li className='border-b-2 border-gray-300'>Book</li>
            </ul>
            
            <div className='flex flex-col'>
                <button className='font-bold my-4'> Search</button>
                <button className='font-bold'> Account</button>
            </div>
            
            <div>
                {/**icons */}
            </div>
      </div>

    </div>
  )
}

export default Navbar
