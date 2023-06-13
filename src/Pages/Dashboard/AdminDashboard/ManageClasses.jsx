import React from "react";
import ClassList from "./ClassList";
import { Helmet } from "react-helmet";

function ManageClasses() {
  return (
    <div className="mx-6">
      <Helmet>
        <title>Manage Classes | Yoga Fit</title>
      </Helmet>
      <h2 className="text-3xl font-semibold mb-6"> All Classes</h2>
      <ClassList />
    </div>
  );
}

export default ManageClasses;
