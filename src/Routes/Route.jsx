import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Homepage/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SingUp/SignUp";
import Instructors from "../Pages/Instructors/Instructors";
import Classes from "../Pages/Classes/Classes";

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
        path:'/instructors',
        element:<Instructors/>
      },
      {
        path:'/classes',
        element:<Classes/>
      }
    ],
  },
]);

export default router;
