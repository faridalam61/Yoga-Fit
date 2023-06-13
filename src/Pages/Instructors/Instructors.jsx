import React, { useEffect, useState } from "react";
import PageTitle from "../../Components/Shared/PageTitle";
import cover from "../../assets/1.jpg";
import InstructorCard from "../../Components/InstructorCard";
import { Helmet } from "react-helmet";

function Instructors() {
  const [instructors, setInstructors] = useState([]);
  useEffect(() => {
    fetch(
      "https://b7a12-summer-camp-server-side-faridalam61.vercel.app/instructor"
    )
      .then((res) => res.json())
      .then((result) => setInstructors(result));
  }, []);
  return (
    <div>
      <Helmet>
        <title>Instructors | Yoga Fit</title>
      </Helmet>
      <PageTitle title="Instructors" image={cover} />
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 w-full lg:w-3/4 my-10 px-6 lg:px-0 mx-auto">
        {instructors.map((insturctor, index) => (
          <InstructorCard key={insturctor} instructor={insturctor} />
        ))}
      </div>
    </div>
  );
}

export default Instructors;
