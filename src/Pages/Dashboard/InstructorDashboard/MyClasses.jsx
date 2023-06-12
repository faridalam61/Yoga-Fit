import React, { useContext, useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import { Link } from "react-router-dom";

function MyClasses() {
  const [myclass, setMyclass] = useState([]);
  const { user } = useContext(AuthContext);
  useEffect(() => {
    fetch(`http://localhost:3000/class?email=${user.email}`)
      .then((res) => res.json())
      .then((result) => setMyclass(result));
  }, []);

  return (
    <div className="overflow-x-auto">
      <h2 className="text-2xl mb-7">My Classes</h2>
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Price</th>
            <th>Total Enrolled</th>
            <th>Status</th>
            <th>Feedback</th>
            <th>Update</th>
          </tr>
        </thead>
        <tbody>
          {myclass.map((item, index) => (
            <tr key={index}>
              <th>{index + 1}</th>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={item.image} alt="Cover photo" />
                    </div>
                  </div>
                  <div>
                    <div className="font-normal">{item.name}</div>
                  </div>
                </div>
              </td>
              <td>${item.price}</td>
              <td>{item.enrolled}</td>
              <td>{item.status}</td>
              <td>No Feedback</td>
              <th>
                <Link to={`/dashboard/edit-class/${item._id}`}
                  
                  className="bg-green-500 hover:bg-green-600 text-sm font-normal text-white rounded-md py-1 px-2 flex gap-2 items-center"
                >
                  <FaEdit />
                  Edit
                </Link>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
      
    </div>
  );
}

export default MyClasses;
