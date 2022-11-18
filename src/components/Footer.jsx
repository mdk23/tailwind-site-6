import React from 'react'

function Footer() {
  return (
    <div className='w-full bg-gray-100 py-16'>
        <div className='max-w-[1240px] mx-auto flex flex-col px-4'>

            <div className='sm:flex justify-between items-center'>
                <h1>BEACHES.</h1>
            </div> 


            <div className='flex justify-between'>
                <ul className='lg:flex'>
                    <li>About</li>
                    <li>Partnerships</li>
                    <li>Carrers</li>
                    <li>Newsroom</li>
                    <li>Advertising</li>
                </ul>

                <ul className='text-right lg:flex'>
                    <li>Home</li>
                    <li>Destinations</li>
                    <li>Travel</li>
                    <li>View</li>
                    <li>Book</li>
                </ul>

            </div>
        </div>
    </div>
  )
}

export default Footer