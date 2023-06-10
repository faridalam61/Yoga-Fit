import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

function AddNewClass() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const newClass = { ...data, status: "pending", enrolled: 0 };
    fetch("http://localhost:3000/classes", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newClass),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          alert("Product added");
        }
      });
  };
  return (
    <div className="w-96 mt-10 mx-auto shadow-md p-6">
      <h2 className="mb-4 text-2xl font-bold">Add New Class</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Class Name"
          className="input input-bordered my-3 w-full"
          {...register("name", { required: true })}
        />
        {errors.name && (
          <span className="text-red-500 my-2">Class Name is required</span>
        )}
        <input
          type="text"
          placeholder="Class image"
          className="input input-bordered my-3 w-full"
          {...register("image", { required: true })}
        />
        {errors.image && (
          <span className="text-red-500 my-2">Class Name is required</span>
        )}
        <input
          type="text"
          placeholder="Instructor"
          className="input input-bordered my-3 w-full"
          {...register("instructor", { required: true })}
        />
        <input
          type="email"
          placeholder="Instructor Email"
          className="input input-bordered my-3 w-full"
          {...register("instructorEmail", { required: true })}
        />
        <input
          type="text"
          placeholder="Available Seats"
          className="input input-bordered my-3 w-full"
          {...register("availableSeats", { required: true })}
        />
        {errors.availableSeats && (
          <span className="text-red-500 my-2">Avilable seat is required</span>
        )}
        <input
          type="text"
          placeholder="Price"
          className="input input-bordered my-3 w-full"
          {...register("price", { required: true })}
        />
        {errors.availableSeats && (
          <span className="text-red-500 my-2">Price is required</span>
        )}

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
