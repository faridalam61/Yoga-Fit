import React, { useEffect, useState } from "react";
import PopularClass from "../../Components/Shared/PopularClass";
import { Helmet } from "react-helmet";

function PopularClasses() {
  const [classes, setClasses] = useState([]);
  useEffect(() => {
    fetch(
      "https://b7a12-summer-camp-server-side-faridalam61.vercel.app/popular"
    )
      .then((res) => res.json())
      .then((result) => setClasses(result));
  }, []);

  return (
    <div className="container w-3/4 mx-auto">
      <h2 className="text-4xl mt-10 mb-6 text-center">Popular Classes</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {classes.map((item, index) => (
          <PopularClass key={index} item={item} />
        ))}
      </div>
    </div>
  );
}

export default PopularClasses;
