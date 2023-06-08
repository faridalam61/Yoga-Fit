import React from 'react'
import {FaTrash} from 'react-icons/fa'

function EnrolledCourse() {
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
        <th>Price</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        <th> 1
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">Hart Hagerty</div>
            </div>
          </div>
        </td>
        <td>Purple</td>
        <th>
          <button className="p-2 rounded-full bg-red-400 text-white hover:bg-red-600"><FaTrash/> </button>
          <button className="bg-blue-500 hover:bg-blue-600 ms-4 font-normal text-white py-1 rounded-md px-4">Pay Now</button>
        </th>
      </tr>
    </tbody>
    
  </table>
</div>
    </div>
  )
}

export default EnrolledCourse