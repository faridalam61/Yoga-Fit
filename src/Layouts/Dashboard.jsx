import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import logo from "../assets/logo.png";
import {
  FaHome,
  FaRegFolder,
  FaHistory,
  FaPlusCircle,
  FaUsers,
} from "react-icons/fa";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Helmet } from "react-helmet";

function Dashboard() {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <Helmet>
        <title>Dashboard | Yoga Fit</title>
      </Helmet>
      <div className="drawer lg:drawer-open w-full">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          <Outlet />
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Menu
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 h-full bg-blue-600 text-white">
            <img src={logo} className="mx-auto w-36 mb-10" />

            <li>
              {user && (
                <span className="text-lg mb-6">
                  Welcome {user.displayName}!{" "}
                </span>
              )}
            </li>
            <li>
              <Link to="/">
                <FaHome /> Home
              </Link>
            </li>
            <div>
              <li>
                <Link to="selected-courses">
                  <FaRegFolder /> Selected Courses
                </Link>
              </li>
              <li>
                <Link to="enrolled-courses">
                  <FaRegFolder /> Enrolled Courses
                </Link>
              </li>
              <li>
                <Link to="payment-history">
                  <FaHistory /> Payment History
                </Link>
              </li>
            </div>
            <div>
              <li>
                <Link to="add-a-class">
                  <FaPlusCircle /> Add a Class
                </Link>
              </li>
              <li>
                <Link to="my-classes">
                  <FaRegFolder /> My Classes
                </Link>
              </li>
            </div>
            <div>
              <li>
                <Link to="manage-classes">
                  <FaRegFolder /> Manage Classes
                </Link>
              </li>
              <li>
                <Link to="manage-users">
                  <FaUsers /> Manage Users
                </Link>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
