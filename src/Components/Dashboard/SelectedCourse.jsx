import React, { useContext } from "react";
import { FaTrash } from "react-icons/fa";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

function SelectedCourse() {
  const { user } = useContext(AuthContext);
  const queryClient = useQueryClient();

  const { data: classes, isLoading } = useQuery(
    ["selectedCourses"],
    async () => {
      const response = await fetch(
        `https://b7a12-summer-camp-server-side-faridalam61.vercel.app/selected?email=${user.email}`
      );
      const data = await response.json();
      return data;
    }
  );

  const payNowMutation = useMutation(
    (item) =>
      fetch(
        `https://b7a12-summer-camp-server-side-faridalam61.vercel.app/enrolled/${item.classId}`,
        {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({ newEnrolled: item.enrolled + 1 }),
        }
      )
        .then((res) => res.json())
        .then((result) => {
          if (result) {
            const enrolledClass = {
              classId: item.classId,
              name: item.name,
              instructor: item.instructor,
              email: item.email,
              price: item.price,
            };
            return fetch(
              "https://b7a12-summer-camp-server-side-faridalam61.vercel.app/enrolled",
              {
                method: "POST",
                headers: {
                  "content-type": "application/json",
                },
                body: JSON.stringify(enrolledClass),
              }
            )
              .then((res) => res.json())
              .then(() => {
                const newStatus = { paymentStatus: "Paid" };
                return fetch(
                  `https://b7a12-summer-camp-server-side-faridalam61.vercel.app/selected/${item._id}`,
                  {
                    method: "PATCH",
                    headers: {
                      "content-type": "application/json",
                    },
                    body: JSON.stringify(newStatus),
                  }
                ).then((res) => res.json());
              });
          }
        }),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("selectedCourses");
        alert("Success");
      },
    }
  );

  const handlePayNow = (item) => {
    payNowMutation.mutate(item);
  };

  const handleDelete = (itemId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://b7a12-summer-camp-server-side-faridalam61.vercel.app/selected/${itemId}`,
          {
            method: "DELETE",
            headers: {
              "content-type": "application/json",
            },
          }
        )
          .then((res) => res.json())
          .then((result) => {
            Swal.fire("Deleted!", "Successfuly deleted", "success");
          });
        // After deletion, invalidate the query to refetch the data
        queryClient.invalidateQueries("selectedCourses");
      }
    });
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

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
                        <img src={item.image} alt="Course image" />
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
                  <button
                    className="p-2 rounded-full bg-red-400 text-white hover:bg-red-600"
                    onClick={() => handleDelete(item._id)}
                  >
                    <FaTrash />
                  </button>
                  <button
                    disabled={item?.paymentStatus == "Paid"}
                    onClick={() => handlePayNow(item)}
                    className="bg-blue-500 hover:bg-blue-600 ms-4 font-normal text-white py-1 rounded-md px-4"
                  >
                    {item.paymentStatus == "Paid" ? "Paid" : "Pay Now"}
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
