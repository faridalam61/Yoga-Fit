import React from "react";
import SelectedCourse from "../../../Components/Dashboard/SelectedCourse";
import { Helmet } from "react-helmet";

function SelectedCourses() {
  return (
    <div>
      <Helmet>
        <title>Selected Courses | Yoga Fit</title>
      </Helmet>
      <SelectedCourse />
    </div>
  );
}

export default SelectedCourses;
