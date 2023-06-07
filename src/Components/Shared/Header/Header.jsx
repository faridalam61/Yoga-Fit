import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../AuthProvider/AuthProvider";

function Header() {
  const {user,logOut} = useContext(AuthContext)
  const navigate = useNavigate()
  const handleLogout =()=>{
logOut()
.then(()=>navigate('/login'))
.catch(error => alert(error.message))
  }
  const navItems = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/instructors">Instructors</NavLink>
      </li>
      <li>
        <NavLink to="/classes">Classes</NavLink>
      </li>
      {
        user && <li>
        <NavLink to="/dashboard"> Dashboard</NavLink> 
        </li>
      }
     
    </>
  );
  return (
    <div className="navbar sticky bg-blue-600 text-white z-30">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-blue-600 rounded-box w-52"
          >
            {navItems}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">Yoga Fit</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navItems}</ul>
      </div>
      <div className="navbar-end">
        {
          user ? <><img src={user.photoURL} className="w-10 rounded-full"/> <button onClick={handleLogout} className="mx-4">Logout</button></> : <><NavLink to="/login" className="bg-black py-2 px-4 rounded-md cursor-pointer"> Login </NavLink></>
        }
      </div>
    </div>
  );
}

export default Header;
