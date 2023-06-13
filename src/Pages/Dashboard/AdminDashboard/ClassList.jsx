import { useQueryClient, useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { Helmet } from "react-helmet";

function ClassList() {
  const queryClient = useQueryClient();

  const { data: classes = [], refetch } = useQuery(["classes"], async () => {
    const response = await axios.get(
      "https://b7a12-summer-camp-server-side-faridalam61.vercel.app/classes"
    );
    return response.data;
  });

  const { mutate: updateStatus } = useMutation((payload) =>
    axios.patch(
      `https://b7a12-summer-camp-server-side-faridalam61.vercel.app/classes/${payload.id}`,
      payload.data
    )
  );

  const handleStatus = async (status, id) => {
    try {
      const response = await axios.patch(
        `https://b7a12-summer-camp-server-side-faridalam61.vercel.app/classes/${id}`,
        { status }
      );
      if (response.data.modifiedCount > 0) {
        alert("Status Changed");
        refetch();
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="overflow-x-auto">
      <Helmet>
        <title>Class List | Yoga Fit</title>
      </Helmet>
      <table className="table text-sm">
        {/* head */}
        <thead>
          <tr>
            <th>#</th>
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
                      <img src={list.image} alt="Class Image" />
                    </div>
                  </div>
                  <div>
                    <div className="text-sm">{list.name}</div>
                  </div>
                </div>
              </td>
              <td>{list.instructor}</td>
              <td>{list.instructorEmail}</td>
              <td>{list.price}</td>
              <td>{list.availableSeats}</td>
              <td>{list.status}</td>
              <td>
                <button
                  disabled={list.status !== "Pending"}
                  onClick={() => handleStatus("Approved", list._id)}
                  className="text-sm py-1 px-2 bg-green-500 text-white rounded-md m-1"
                >
                  Approve
                </button>
                <button
                  disabled={list.status !== "Pending"}
                  onClick={() => handleStatus("Denied", list._id)}
                  className="text-sm py-1 px-2 bg-red-500 text-white rounded-md m-1"
                >
                  Deny
                </button>
                <button
                  disabled={list.status !== "Pending"}
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
