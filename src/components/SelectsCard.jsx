import React from 'react'

function SelectsCard({img,location}) {
  return (
     
        <div className='relative'>
            <img src={img} alt='/' className='w-full h-full object-cover'/>
            <div className='bg-gray-900/30 absolute top-0 left-0 w-full h-full'>
                <p className='left-4 bottom-4 font-bold text-white absolute'>{location}</p>
            </div>
        </div>
     
  )
}

export default SelectsCard