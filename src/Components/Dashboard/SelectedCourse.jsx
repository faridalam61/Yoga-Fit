import React, { useContext, useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";
import { AuthContext } from "../../AuthProvider/AuthProvider";

function SelectedCourse() {
  const [classes, setCalsses] = useState([]);
  const { user } = useContext(AuthContext);
  useEffect(() => {
    fetch(`http://localhost:3000/selected?email=${user.email}`)
      .then((res) => res.json())
      .then((result) => setCalsses(result));
  }, []);
  const handlePayNow = (id, enrolled) => {
    // Update course
    const totalEnrolled = enrolled + 1;
    const updateEnrolement = { newEnrolled: totalEnrolled };
    fetch(`http://localhost:3000/enrolled/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateEnrolement),
    })
      .then((res) => res.json)
      .then((result) => {
        if (result) {
          // Save to enrolled course
          // fetch();
          console.log(result);
          alert("success");
        }
      });
  };
  return (
    <div>
      <h2 className="text-3xl mb-6">Selected Courses</h2>
      <div className="overflow-x-auto w-full">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Course Name</th>
              <th>Instructor Name</th>
              <th>Price</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {classes.map((item, index) => (
              <tr key={index}>
                <th> {index + 1}</th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={item.image} alt="Couse image" />
                      </div>
                    </div>
                    <div>
                      <div className="font-normal">{item.name}</div>
                    </div>
                  </div>
                </td>
                <td>{item.instructor}</td>
                <td>{item.price}</td>
                <td>{item?.paymentStatus}</td>
                <th>
                  <button className="p-2 rounded-full bg-red-400 text-white hover:bg-red-600">
                    <FaTrash />{" "}
                  </button>
                  <button
                    onClick={() => handlePayNow(item._id, item.enrolled)}
                    className="bg-blue-500 hover:bg-blue-600 ms-4 font-normal text-white py-1 rounded-md px-4"
                  >
                    Pay Now
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default SelectedCourse;
