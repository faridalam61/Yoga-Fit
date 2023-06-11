import React, { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

function PrivateRoute({ children }) {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return (
      <h2 className="text-center text-[#ff6899] my-6 text-xl">Loading...</h2>
    );
  }
  if (user) {
    return children;
  } else {
    return <Navigate state={{ from: location }} to="/login"></Navigate>;
  }
}

export default PrivateRoute;
