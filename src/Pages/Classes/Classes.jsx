import React from 'react'
import PageTitle from '../../Components/Shared/PageTitle'
import cover from '../../assets/2.jpg'
import ClassesCard from '../../Components/ClassesCard'

function Classes() {
  return (
    <div>
    <PageTitle title="Classes" image={cover}/>
    <div className='grid grid-cols-1 lg:grid-cols-4 gap-6 w-full lg:w-3/4 my-10 px-6 lg:px-0 mx-auto'>
        <ClassesCard/>
        <ClassesCard/>
        <ClassesCard/>
        <ClassesCard/>
        <ClassesCard/>
        <ClassesCard/>
    </div>
</div>
  )
}

export default Classes