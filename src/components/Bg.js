
import React from 'react'
import images from './images/pattern-bg-desktop.png'
import Search from './Search'

const Bg = () => {
  return (
    <div className='w-full h-40'
    style={{backgroundImage: `url(${images})`}}>
        
        <h1 className='text-serif text-2xl text-white relative top-4 font-semibold text-center '>IP Address Tracker</h1>

      <Search/>
    </div>
  )
}

export default Bg