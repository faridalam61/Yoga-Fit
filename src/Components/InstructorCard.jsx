import React from "react";
import { Link } from "react-router-dom";

function InstructorCard({ instructor }) {
  const { name, email, role, photo } = instructor;
  return (
    <div className="text-center">
      <img src={photo} className="mx-auto rounded-md" />
      <h2 className="text-xl mt-4">{name}</h2>
      <p className="mb-4">{email}</p>
      <Link to="/" className="bg-black text-white py-2 px-6 rounded-md text-sm">
        View Classes
      </Link>
    </div>
  );
}

export default InstructorCard;
