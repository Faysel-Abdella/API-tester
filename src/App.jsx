import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { useContext } from "react";

import "./App.css";

import Login from "./pages/login";
import Completelogin from "./pages/completelogin";
import Dashbord from "./pages/Dashbord";
import LoginWithGoogle from "./pages/LoginWithGoogle";
import AdminLogin from "./pages/AdminLogin";

import { action as loginAction } from "./pages/Login";
import { action as adminLogin } from "./pages/AdminLogin";

// import { loader as dashboardPageLoader } from "./pages/dashboardLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginWithGoogle />,
  },
  {
    path: "/login-second",
    element: <Login />,
    action: loginAction,
  },
  {
    path: "/admin-login",
    element: <AdminLogin />,
    action: adminLogin,
  },
  {
    path: "/dashboard",
    element: <Dashbord />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
