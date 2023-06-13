import React from "react";
import AddNewClass from "../../../Components/Dashboard/AddNewClass";
import { Helmet } from "react-helmet";

function AddClass() {
  return (
    <div>
      <Helmet>
        <title>Add New Class | Yoga Fit</title>
      </Helmet>
      <AddNewClass />
    </div>
  );
}

export default AddClass;
