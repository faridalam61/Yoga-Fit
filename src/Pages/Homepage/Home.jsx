import React from "react";
import Slider from "./Slider";
import PopularClasses from "./PopularClasses";
import PopularInstructors from "./PopularInstructors";
import YogaShop from "./YogaShop";

function Home() {
  return (
    <div>
      <Slider />
      <PopularClasses/>
      <PopularInstructors/>
      <YogaShop/>
    </div>
  );
}

export default Home;
