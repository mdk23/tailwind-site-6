import React, { useState } from 'react'

import { ArrowLeftIcon, ArrowRightIcon } from '../assets/Icons';
import {sliderData} from '../data';
function Carousel() {
  const [slide,setSlide]=useState(0);
  const length_Slider=sliderData.length;

  console.log(length_Slider);

  const prevSlide=()=>{
      setSlide(slide===length_Slider-1 ? 0 : slide+1);
  } 
  
  const nextSlide=()=>{
    setSlide(slide===0 ? length_Slider-1 : slide-1);
  }

  return (
    <section className='max-w-[1240px] max-h-[100vh] mx-auto px-4 py-16 relative flex justify-center items-center '>
          
          <div className='p-2 m-2 text-white bg-slate-500 rounded-md ' onClick={()=>prevSlide()}>
           <ArrowLeftIcon className='absolute top-[50%] left-8'/>
          </div>
          {
            sliderData.map((image,index)=>(
                <div className={index===slide ? 'opacity-100' : 'opacity-0' }>
                  {
                    index===slide && (<img className='w-full h-[50vh] object-cover rounded-md' src={image.url} key={index} alt='/'/>)
                  }
                </div>
            ))
          }

        <div className='p-2 m-2 text-white bg-slate-500 rounded-md' onClick={()=>nextSlide()}>
          <ArrowRightIcon className='absolute top-[50%] right-8'/>
        </div>
          
    </section>
  )
}

export default Carousel