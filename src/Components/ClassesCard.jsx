import React from "react";
import photo from "../assets/class.jpg";
import { Link } from "react-router-dom";

function ClassesCard({ item }) {
  const { _id, image, availableSeats, instructor, name, price, status } = item;
  return (
    <div className="text-center">
      <img src={image} className="mx-auto rounded-md" />
      <h2 className="text-xl mt-4">{name}</h2>
      <h2 className="">Instructor: {instructor}</h2>
      <p className="mb-4">Available Seat: {availableSeats}</p>
      <p className="mb-4">Price: ${price}</p>
      <Link to="/" className="bg-black text-white py-2 px-6 rounded-md text-sm">
        Select Course
      </Link>
    </div>
  );
}

export default ClassesCard;
