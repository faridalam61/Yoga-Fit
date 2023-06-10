import React, { useEffect, useState } from "react";

function ClassList() {
  const [classes, setClasses] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/classes")
      .then((res) => res.json())
      .then((result) => setClasses(result));
  }, []);

  const handleStatus = (status, id) => {
    fetch(`http://localhost:3000/classes/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status }),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.modifiedCount > 0) {
          alert("Status Changed");
        }
      });
  };
  return (
    <div className="overflow-x-auto">
      <table className="table text-sm">
        {/* head */}
        <thead>
          <tr>
            <th># </th>
            <th>Class Name</th>
            <th>Instructor</th>
            <th>Instructor Email</th>
            <th>Price</th>
            <th>Available Seats</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {classes.map((list, index) => (
            <tr key={index}>
              <th>{index + 1}</th>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={list?.image} />
                    </div>
                  </div>
                  <div>
                    <div className="text-sm">{list?.name}</div>
                  </div>
                </div>
              </td>
              <td>{list?.instructor}</td>
              <td>{list?.instructorEmail}</td>
              <td>{list?.price}</td>
              <td>{list?.availableSeats}</td>
              <td>{list?.status}</td>
              <td>
                <button
                  onClick={() => handleStatus("Approved", list._id)}
                  className="text-sm py-1 px-2 bg-green-500 text-white rounded-md m-1"
                >
                  Approve
                </button>
                <button
                  onClick={() => handleStatus("Denied", list._id)}
                  className="text-sm py-1 px-2 bg-red-500 text-white rounded-md m-1"
                >
                  Deny
                </button>
                <button
                  onClick={() => handleStatus("feedback", list._id)}
                  className="text-sm py-1 px-2 bg-orange-500 text-white rounded-md m-1"
                >
                  Send Feedback
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ClassList;
