
import React from 'react'
import images from './images/pattern-bg-desktop.png'
import Search from './Search'
import Maparea from './Maparea'
import Displays from './Displays'

const Bg = () => {
  return (
    <div className='w-full h-52'
    style={{backgroundImage: `url(${images})`}}>
        
        <h1 className='text-serif text-2xl text-white relative top-4 font-bold text-center '>
          IP Address Tracker
        </h1>

      <Search/>
      <Displays/>
      <Maparea/>
    </div>
  )
}

export default Bg