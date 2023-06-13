import React, { useEffect, useState } from "react";
import PopularInstructor from "../../Components/PopularInstructor";

function PopularInstructors() {
  const [instructor, setInstructor] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/popular")
      .then((res) => res.json())
      .then((result) => setInstructor(result));
  }, []);
  return (
    <div className="container w-3/4 mx-auto">
      <h2 className="text-4xl mt-16 mb-6 text-center">Popular Instructors</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {instructor.map((person, index) => (
          <PopularInstructor key={index} person={person} />
        ))}
      </div>
    </div>
  );
}

export default PopularInstructors;
