import React from 'react'
import YogaShopCard from '../../Components/YogaShopCard'

function YogaShop() {
  return (
    <div className='container w-3/4 mx-auto'>
        <h2 className='text-4xl mt-20 mb-6 text-center'>Yoga Shop</h2>
        <div className='grid grid-cols-1 lg:grid-cols-4 gap-6'>
            <YogaShopCard/>
            <YogaShopCard/>
            <YogaShopCard/>
            <YogaShopCard/>
        </div>
    </div>
  )
}

export default YogaShop