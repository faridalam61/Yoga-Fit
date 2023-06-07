import React from 'react'
import banner from '../assets/class.jpg'

function PopularInstructor() {
  return (
    <div className='text-center'>
        <img src={banner} className='mx-auto rounded-md'/>
        <h2 className='text-xl mt-4'>Private & Group Lessons</h2>
        <h2 className='text-xl'>300 Students</h2>
    </div>
  )
}

export default PopularInstructor