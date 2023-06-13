import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

function AddNewClass() {
  const { user } = useContext(AuthContext);

  const handleAddClass = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const image = form.image.value;
    const instructorEmail = form.instructorEmail.value;
    const instructor = form.instructorName.value;
    const price = parseFloat(form.price.value);
    const availableSeats = form.seats.value;

    const newClass = {
      name,
      image,
      instructorEmail,
      instructor,
      price,
      availableSeats,
      instructorImage: user.photoURL,
      status: "Pending",
      enrolled: 0,
    };

    fetch(
      "https://b7a12-summer-camp-server-side-faridalam61.vercel.app/classes",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newClass),
      }
    )
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Class added successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          form.reset();
        }
      });
  };
  return (
    <div className="w-96 mt-10 mx-auto shadow-md p-6">
      <h2 className="mb-4 text-2xl font-bold">Add New Class</h2>
      <form onSubmit={handleAddClass}>
        <input
          type="text"
          placeholder="Class Name"
          className="input input-bordered my-3 w-full"
          name="name"
          required
        />

        <input
          type="text"
          placeholder="Class image"
          className="input input-bordered my-3 w-full"
          name="image"
          required
        />

        <input
          type="text"
          placeholder="Instructor"
          defaultValue={user.displayName}
          className="input input-bordered my-3 w-full"
          name="instructorName"
          disabled
        />
        <input
          type="email"
          placeholder="Instructor Email"
          defaultValue={user.email}
          className="input input-bordered my-3 w-full"
          name="instructorEmail"
          disabled
        />
        <input
          type="text"
          placeholder="Available Seats"
          className="input input-bordered my-3 w-full"
          name="seats"
          required
        />

        <input
          type="text"
          placeholder="Price"
          className="input input-bordered my-3 w-full"
          name="price"
          required
        />

        <input
          type="submit"
          value="Add Class"
          className="bg-black block w-full cursor-pointer mt-3 rounded-md text-white py-3 px-6"
        />
      </form>
    </div>
  );
}

export default AddNewClass;
