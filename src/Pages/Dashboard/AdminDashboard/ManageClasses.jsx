import React from "react";
import ClassList from "./ClassList";

function ManageClasses() {
  return (
    <div className="mx-6">
      <h2 className="text-3xl font-semibold mb-6"> All Classes</h2>
      <ClassList />
    </div>
  );
}

export default ManageClasses;
