import React from "react";
import EnrolledCourse from "../../../Components/Dashboard/EnrolledCourse";
import { Helmet } from "react-helmet";

function EnrolledCourses() {
  return (
    <div>
      <Helmet>
        <title>Enrolled Classes | Yoga Fit</title>
      </Helmet>
      <EnrolledCourse />
    </div>
  );
}

export default EnrolledCourses;
