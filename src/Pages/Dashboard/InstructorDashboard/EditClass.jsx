import React, { useContext, useEffect, useState } from "react";

import Swal from "sweetalert2";
import { useParams } from 'react-router-dom';
import { AuthContext } from "../../../AuthProvider/AuthProvider";


function EditClass() {
  const { user } = useContext(AuthContext);
const editId = useParams().id;
const [classData, setClassdata] = useState([])
useEffect(()=>{
    fetch(`http://localhost:3000/classes/${editId}`)
    .then(res => res.json())
    .then(result => setClassdata(result))
},[])
console.log(classData.name)
  const handleEditClass = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const image = form.image.value;
    const price = parseFloat(form.price.value);
    const availableSeats = form.seats.value;

    const newClass = {
      name,
      image,
      price,
      availableSeats
    };
   

    fetch(`http://localhost:3000/classes/edit/${editId}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newClass),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.modifiedCount >0) {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Class updated successfully',
            showConfirmButton: false,
            timer: 1500
          })
         
        }
      });
  };
  return (
    <div className="w-96 mt-10 mx-auto shadow-md p-6">
      <h2 className="mb-4 text-2xl font-bold">Update Class</h2>
      <form onSubmit={handleEditClass}>
        <label>Class Name</label>
        <input
          type="text"
          placeholder="Class Name"
          className="input input-bordered my-3 w-full"
          name="name"
          required
          defaultValue={classData.name}
        />
 <label>Class Image</label>
        <input
          type="text"
          placeholder="Class image"
          className="input input-bordered my-3 w-full"
          name="image"
          defaultValue={classData.image}
          required
        />

<label>Available Seats</label>
        <input
          type="text"
          placeholder="Available Seats"
          className="input input-bordered my-3 w-full"
          name="seats"
          defaultValue={classData.availableSeats}
          required
        />
        <label>Price</label>
        <input
          type="text"
          placeholder="Price"
          className="input input-bordered my-3 w-full"
          name="price"
          defaultValue={classData.price}
          required
        />

        <input
          type="submit"
          value="Updated"
          className="bg-black block w-full cursor-pointer mt-3 rounded-md text-white py-3 px-6"
        />
      </form>
    </div>
  );
}

export default EditClass;
