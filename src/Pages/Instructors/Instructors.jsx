import React from 'react'
import PageTitle from '../../Components/Shared/PageTitle'
import cover from '../../assets/1.jpg'
import InstructorCard from '../../Components/InstructorCard'

function Instructors() {
  return (
    <div>
        <PageTitle title="Instructors" image={cover}/>
        <div className='grid grid-cols-1 lg:grid-cols-4 gap-6 w-full lg:w-3/4 my-10 px-6 lg:px-0 mx-auto'>
            <InstructorCard/>
            <InstructorCard/>
            <InstructorCard/>
            <InstructorCard/>
            <InstructorCard/>
            <InstructorCard/>
        </div>
    </div>
  )
}

export default Instructors