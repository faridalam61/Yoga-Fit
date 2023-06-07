import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Components/Shared/Header/Header'
import Footer from '../Components/Shared/Footer/Footer'

function Dashboard() {
  return (
    <div>
        <Header/>
        <div className="drawer lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col items-center justify-center">
    <Outlet/>
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Menu</label>
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 h-full bg-blue-600 text-white">
      {/* Sidebar content here */}
      <li><a>Sidebar Item 1</a></li>
      <li><a>Sidebar Item 2</a></li>
    </ul>
  
  </div>
</div>
        <Footer/>
    </div>
  )
}

export default Dashboard