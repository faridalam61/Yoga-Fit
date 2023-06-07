import React from 'react'
import PopularInstructor from '../../Components/PopularInstructor'

function PopularInstructors() {
    return (
        <div className='container w-3/4 mx-auto'>
            <h2 className='text-4xl mt-16 mb-6 text-center'>Popular Instructors</h2>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
                <PopularInstructor/>
                <PopularInstructor/>
                <PopularInstructor/>
                <PopularInstructor/>
                <PopularInstructor/>
                <PopularInstructor/>
            </div>
        </div>
      )
}

export default PopularInstructors