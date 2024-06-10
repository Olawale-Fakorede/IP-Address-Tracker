
import React from 'react'
import { useState } from 'react'
import myImg from './images/icon-arrow.svg'

const Search = () => {

  const [ipAddress, setIpAddress] = useState('');

  const handleClick = () => {};

  return (
    <div className='w-full h-10 relative top-7 left-96 pl-28 pt-2 flex'>

      <input
        type="text"
        placeholder="Enter the IP Address here.."
        className='rounded-l-lg w-80 h-7 outline-white py-2 pl-2 text-xs font-san font-bold'
        onChange={(e) => setIpAddress(e.target.value)}
      />

      <span className='w-7 h-7 bg-black rounded-r-lg'
      onClick={handleClick}>
        <img src={myImg} className='w-2 h-2 relative top-2 left-2' alt="arrow" />
      </span>
      <br />
      {/* <div className='h-40 w-96 bg-white'></div> */}
    </div>
  )
}

export default Search