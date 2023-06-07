import React from 'react'
import photo from '../assets/class.jpg'
import { Link } from 'react-router-dom'

function InstructorCard() {
  return (
    <div className='text-center'>
        <img src={photo} className='mx-auto rounded-md'/>
        <h2 className='text-xl mt-4'>Instructor Name</h2>
        <p className='mb-4'>contact@gmail.com</p>
        <Link to='/' className="bg-black text-white py-2 px-6 rounded-md text-sm">View Classes</Link>
    </div>

  )
}

export default InstructorCard