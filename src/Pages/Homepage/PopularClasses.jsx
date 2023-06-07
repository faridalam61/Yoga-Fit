import React from 'react'
import PopularClass from '../../Components/Shared/PopularClass'

function PopularClasses() {
  return (
    <div className='container w-3/4 mx-auto'>
        <h2 className='text-4xl mt-10 mb-6 text-center'>Popular Classes</h2>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
            <PopularClass/>
            <PopularClass/>
            <PopularClass/>
            <PopularClass/>
            <PopularClass/>
            <PopularClass/>
        </div>
    </div>
  )
}

export default PopularClasses