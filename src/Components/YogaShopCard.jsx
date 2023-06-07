import React from 'react'
import banner from '../assets/shop.jpg'

function YogaShopCard() {
  return (
    <div className='text-center'>
        <img src={banner} className='mx-auto rounded-md'/>
        <h2 className='text-xl mt-4'>Private & Group Lessons</h2>
        <h2 className='text-xl'>$20</h2>
    </div>
  )
}

export default YogaShopCard