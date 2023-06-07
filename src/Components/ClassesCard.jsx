import React from 'react'
import photo from '../assets/class.jpg'
import { Link } from 'react-router-dom'

function ClassesCard() {
  return (
    <div className='text-center'>
    <img src={photo} className='mx-auto rounded-md'/>
    <h2 className='text-xl mt-4'>Class Name</h2>
    <h2 className=''>Instructor Name</h2>
    <p className='mb-4'>Available Seat</p>
    <p className='mb-4'>$200</p>
    <Link to='/' className="bg-black text-white py-2 px-6 rounded-md text-sm">Select Course</Link>
</div>
  )
}

export default ClassesCard