import React from 'react'
import { borabora,borabora2, keywest, maldives, maldives2,maldives3} from '../assets'
import {SelectsCard} from '../components'
function Selects() {
  return (
        <div className='max-w-[1240px] mx-auto px-4 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4'>
           <SelectsCard img={maldives} location={'Maldives'}/> 
           <SelectsCard img={borabora} location={'Bora Bora'}/>
           <SelectsCard img={maldives2} location={'Cozumel'}/>
           <SelectsCard img={maldives3} location={'Jamaica'}/>
           <SelectsCard img={borabora2} location={'Antigua'}/>
           <SelectsCard img={keywest} location={'Key West'}/>

        </div>
  )
}

export default Selects