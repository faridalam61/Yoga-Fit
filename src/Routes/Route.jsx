import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Homepage/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SingUp/SignUp";
import Instructors from "../Pages/Instructors/Instructors";
import Classes from "../Pages/Classes/Classes";
import Dashboard from "../Layouts/Dashboard";
import SelectedCourses from "../Pages/Dashboard/StudentDashboard/SelectedCourses";
import EnrolledCourses from "../Pages/Dashboard/StudentDashboard/EnrolledCourses";
import PaymentHistory from "../Pages/Dashboard/StudentDashboard/PaymentHistory";
import AddClass from "../Pages/Dashboard/InstructorDashboard/AddClass";
import MyClasses from "../Pages/Dashboard/InstructorDashboard/MyClasses";
import ManageClasses from "../Pages/Dashboard/AdminDashboard/ManageClasses";
import ManageUsers from "../Pages/Dashboard/AdminDashboard/ManageUsers";
import PrivateRoute from "./PrivateRoute";
import EditClass from "../Pages/Dashboard/InstructorDashboard/EditClass";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/sign-up",
        element: <SignUp />,
      },
      {
        path: "/instructors",
        element: <Instructors />,
      },
      {
        path: "/classes",
        element: <Classes />,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    children: [
      {
        path: "selected-courses",
        element: <SelectedCourses />,
      },
      {
        path: "enrolled-courses",
        element: <EnrolledCourses />,
      },
      {
        path: "payment-history",
        element: <PaymentHistory />,
      },
      {
        path: "add-a-class",
        element: <AddClass />,
      },
      {
        path: "my-classes",
        element: <MyClasses />,
      },
      {
        path: "manage-classes",
        element: <ManageClasses />,
      },
      {
        path: "manage-users",
        element: <ManageUsers />,
      },
    {
      path:'edit-class/:id',
      element:<EditClass/>
    }
    ],
  },
]);

export default router;
