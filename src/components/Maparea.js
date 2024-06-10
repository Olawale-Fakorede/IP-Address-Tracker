import React from 'react'
import { useState, useEffect } from 'react'

const Maparea = () => {

    const [mapData, setMapData] = useState(null)

    useEffect(() =>
     {fetch('https://leafletjs.com/')
        .then(res => res.json())
        .then(json => setMapData(json))
     }, [])
    
    // fetch('https://leafletjs.com')
    //     .then(res => res.json())
    //     .then(json => console.log(json))

  return (
    <div>
        {/* {<img src={mapData.img}/>} */}

        {}
    </div>
  )
}

export default Maparea