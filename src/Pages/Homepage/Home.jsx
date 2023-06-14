import React from "react";
import Slider from "./Slider";
import PopularClasses from "./PopularClasses";
import PopularInstructors from "./PopularInstructors";
import YogaShop from "./YogaShop";
import { Helmet } from "react-helmet";

function Home() {
  return (
    <div className="mb-10">
      <Helmet>
        <title>Home | Yoga Fit</title>
      </Helmet>
      <Slider />
      <PopularClasses />
      <PopularInstructors />
      <YogaShop />
    </div>
  );
}

export default Home;
