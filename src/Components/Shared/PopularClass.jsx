import React from 'react'

function PopularClass({item}) {
  const {name,enrolled,image} = item;
  return (
    <div className='text-center'>
        <img src={image} className='mx-auto rounded-md'/>
        <h2 className='text-xl mt-4'>{name}</h2>
        <h2 className='text-xl'>{enrolled} Students</h2>
    </div>
  )
}

export default PopularClass