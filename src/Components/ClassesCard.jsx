import React, { useContext } from "react";
import photo from "../assets/class.jpg";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

function ClassesCard({ item }) {
  const {
    _id,
    image,
    availableSeats,
    instructor,
    name,
    price,
    status,
    enrolled,
  } = item;
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSelect = (id) => {
    if (!user) {
      Swal.fire({
        title: "You must login first",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login");
        }
      });
    } else {
      const selctedItem = {
        classId: _id,
        image,
        availableSeats,
        instructor,
        name,
        price,
        status,
        enrolled,
        email: user.email,
        paymentStatus: "Unpaid",
      };
      fetch("http://localhost:3000/selected", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(selctedItem),
      })
        .then((res) => res.json())
        .then((result) => {
          if (result.insertedId) {
            Swal.fire({
              position: "top-center",
              icon: "success",
              title: "Successfully added to selection list",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    }
  };

  return (
    <div className="text-center">
      <img src={image} className="mx-auto rounded-md" />
      <h2 className="text-xl mt-4">{name}</h2>
      <h2 className="">Instructor: {instructor}</h2>
      <p className="mb-4">Available Seat: {availableSeats}</p>
      <p className="mb-4">Price: ${price}</p>
      <button
        onClick={() => handleSelect(_id)}
        className="bg-black text-white py-2 px-6 rounded-md text-sm"
      >
        Select Course
      </button>
    </div>
  );
}

export default ClassesCard;
