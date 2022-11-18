import React from 'react'
import { borabora,borabora2, keywest, maldives, maldives2,maldives3} from '../assets'
function Destinations() {
  return (

        <div className='max-w-[1240px] mx-auto py-16 px-4 text-center'>
            <h1>All-Inclusive Resorts</h1>
            <p className='py-4'>On the Caribbean's Best Beaches</p>

            <div className='grid grid-rows-none md:grid-cols-5 py-5 gap-2 md:gap-4'>
                <img className='w-full h-full object-cover col-span-2  row-span-2 md:col-span-3' src={borabora} alt=''/>
                <img className='w-full h-full object-cover' src={borabora2} alt=''/>
                <img className='w-full h-full object-cover' src={maldives} alt=''/>
                <img className='w-full h-full object-cover' src={maldives2} alt=''/>
                <img className='w-full h-full object-cover' src={keywest} alt=''/>
                
            </div>
        </div>

  )
}

export default Destinations