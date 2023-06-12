import React, { useContext, useEffect, useState } from 'react'
import {FaTrash} from 'react-icons/fa'
import { AuthContext } from '../../AuthProvider/AuthProvider';

function EnrolledCourse() {
  const {user} = useContext(AuthContext)
  const [enrolled,setEnrolled] = useState([])
  useEffect(()=>{
    fetch(`http://localhost:3000/enrolled?email=${user.email}`)
    .then(res => res.json())
    .then(result => setEnrolled(result))
  },[]);
  console.log(enrolled)
  return (
    <div>
        <h2 className='text-3xl mb-6'>Enrolled Courses</h2>
        <div className="overflow-x-auto w-full">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
         <th>#</th>
         <th>Course Name</th>
          <th>Instructor Name</th>
          <th>Price</th>
      </tr>
    </thead>
    <tbody>
      {
        enrolled.map((item,index)=> <tr key={index}>
        <th> {index+1}
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div>
              <div className="">{item.name}</div>
            </div>
          </div>
        </td>
        <td>{item.instructor}</td>
        <td>{item.price}</td>
      </tr> )
      }
      
    </tbody>
    
  </table>
</div>
    </div>
  )
}

export default EnrolledCourse