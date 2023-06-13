import React, { useEffect, useState } from 'react'
import PopularClass from '../../Components/Shared/PopularClass'

function PopularClasses() {
  const [classes,setClasses] = useState([])
  useEffect(()=>{
    fetch('http://localhost:3000/popular')
    .then(res => res.json())
    .then(result => setClasses(result))
  },[])
  console.log(classes)
  return (
    <div className='container w-3/4 mx-auto'>
        <h2 className='text-4xl mt-10 mb-6 text-center'>Popular Classes</h2>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
            {
              classes.map((item,index)=><PopularClass key={index} item={item}/>)
            }
  
        </div>
    </div>
  )
}

export default PopularClasses