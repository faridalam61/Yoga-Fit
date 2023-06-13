import React from "react";

function PopularInstructor({ person }) {
  const { instructorImage, instructor, enrolled } = person;
  return (
    <div className="text-center">
      <img src={instructorImage} className="mx-auto rounded-md" />
      <h2 className="text-xl mt-4">{instructor}</h2>
      <h2 className="text-xl">{enrolled} Sales</h2>
    </div>
  );
}

export default PopularInstructor;
