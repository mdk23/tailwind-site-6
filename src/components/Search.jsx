import React from 'react'
import { SupportIcon,GlobeIcon } from '../assets/Icons'


function Search() {
  return (
    <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-4 px-4 py-16'>

        <div className=' lg:col-span-2 flex flex-col justify-evenly'>
            <div>
                <h2>Luxury Included Vacations for Two People</h2>
                <p>
                    Come experience the pinnacle of luxury Caribbean all-inclusive
                    vacations for couples at Beaches Resorts.Our luxury beach resorts,set along the most gorgeous tropical settings and exquisite Beaches
                    in Saint Lucia, Jamaica, Antigua, The Bahamas,Grenada, Barbados and Curaçao, feature unlimited gourmet dining, unique bars serving
                    premium liquors and wines, and every land and water sport, including complimentary green fees at our golf resorts and certified scuba
                    diving at most resorts. If you are planning a wedding, 
                    <span className='font-bold italic text-lg'> Beaches </span> is the leader in Caribbean destination weddings and honeymoon packages.
                </p>
            </div>
        
            <div className='grid sm:grid-cols-2 gap-8 py-4'>
                
                <div className='flex flex-col lg:flex-row items-center text-center'>
                    <button className='p-4'> <SupportIcon/> </button>
                    <div> 
                        <h3>Leading Service </h3>
                        <p >All Inclusive Company for 20 years In-A-Row</p>
                    </div>
                </div>

                    
                <div className='flex flex-col lg:flex-row items-center text-center'>
                    <button className='p-4'> <GlobeIcon/> </button>
                    <div className='ml-1'>
                        <h3 >Automated Bookings </h3>
                        <p>Simplifying your journey with us</p>
                    </div>
                </div>

            </div>    
        </div>
        
        <div>
            
            <div className='border-2 border-gray-2  00 border-solid text-center p-2'>
                <p className='pt-2'>Get An Additional 10%</p> 
                <p className='py-4'> Off 12 Hours Left</p>
                <p className='bg-gray-800 text-gray-200 py-2'> Book now and Save</p>
            </div>
            
            <form className='w-full'>

                <div className='flex flex-col my-2'>
                    <label> Destination</label>
                    <select className='border rounded-md p-2 '>
                        <option>Grand Antigua</option>
                        <option>Key West</option>
                        <option>Maldives</option>
                        <option>Saint Lucia</option>
                    </select>
                </div>
                
                <div className='flex flex-col my-3'>
                    <label> Check-In</label>
                    <input className='border rounded-md p-2' type="date" />
                </div>
                
                <div className='flex flex-col my-2'>
                    <label> Check-Out</label>
                    <input className='border rounded-md p-2' type="date" />
                </div>

                
                <button className='w-full my-4'>Rates & Availabilities </button>
                

            </form>


        </div>

        
    </div>
  )
}

export default Search