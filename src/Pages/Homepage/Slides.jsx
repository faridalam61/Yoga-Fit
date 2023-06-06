import React from "react";

function Slides({ image, heading }) {
  return (
    <div
      className="flex flex-col text-center p-4 lg:p-0 justify-center items-center h-3/4 lg:h-screen"
      style={{
        background: `linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${image})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <h2 className="text-white mt-20 font-thin text-4xl lg:text-7xl">
        {heading}
      </h2>
      <h2 className="text-white mt-10 font-thin text-xl lg:text-3xl">
        Do yoga today For a better tomorrow
      </h2>

      <button className="bg-transparent text-white hover:bg-white hover:text-black border border-white py-3 px-10 rounded-sm text-xl mt-10 mb-20">
        Book Now
      </button>
    </div>
  );
}

export default Slides;
