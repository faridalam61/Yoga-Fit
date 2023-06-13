import React, { useEffect, useState } from "react";
import PageTitle from "../../Components/Shared/PageTitle";
import cover from "../../assets/2.jpg";
import ClassesCard from "../../Components/ClassesCard";
import { Helmet } from "react-helmet";

function Classes() {
  const [classes, setClasses] = useState([]);
  useEffect(() => {
    fetch(
      "https://b7a12-summer-camp-server-side-faridalam61.vercel.app/classes"
    )
      .then((res) => res.json())
      .then((result) => setClasses(result));
  }, []);
  console.log(classes);
  return (
    <div>
      <Helmet>
        <title>Classes | Yoga Fit</title>
      </Helmet>

      <PageTitle title="Classes" image={cover} />
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 w-full lg:w-3/4 my-10 px-6 lg:px-0 mx-auto">
        {classes.map((item, index) => (
          <ClassesCard key={index} item={item} />
        ))}
      </div>
    </div>
  );
}

export default Classes;
