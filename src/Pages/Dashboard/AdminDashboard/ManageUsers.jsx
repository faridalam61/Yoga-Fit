import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Helmet } from "react-helmet";

function ManageUsers() {
  const { data: users = [], refetch } = useQuery(["users"], {
    queryFn: () =>
      fetch(
        "https://b7a12-summer-camp-server-side-faridalam61.vercel.app/users"
      ).then((res) => res.json()),
  });

  console.log(users);

  const changeRole = (userId, newRole) => {
    const newUserRole = { role: newRole };
    fetch(
      `https://b7a12-summer-camp-server-side-faridalam61.vercel.app/users/${userId}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUserRole),
      }
    ).then(() => refetch());
  };

  return (
    <div className="overflow-x-auto">
      <Helmet>
        <title>Manage Users | Yoga Fit</title>
      </Helmet>
      <h2 className="text-2xl mb-6">All Users</h2>
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <th>{index + 1}</th>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={user.photo} alt="User Photo" />
                    </div>
                  </div>
                  <div>
                    <div className="">{user.name}</div>
                  </div>
                </div>
              </td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <th>
                <button
                  disabled={user?.role === "Admin"}
                  className="bg-red-500 text-white py-1 px-2 mx-1 text-sm font-normal rounded-md"
                  onClick={() => changeRole(user._id, "Admin")}
                >
                  Make Admin
                </button>
                <button
                  disabled={user?.role === "Instructor"}
                  className="bg-orange-500 text-white py-1 px-2 mx-1 text-sm font-normal rounded-md"
                  onClick={() => changeRole(user._id, "Instructor")}
                >
                  Make Instructor
                </button>
                <button
                  disabled={user?.role === "Student"}
                  className="bg-green-500 text-white py-1 px-2 mx-1 text-sm font-normal rounded-md"
                  onClick={() => changeRole(user._id, "Student")}
                >
                  Make Student
                </button>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ManageUsers;
