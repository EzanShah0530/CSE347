import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Home.jsx";
import Login from "./Pages/Login.jsx";
import Reg from "./Pages/Reg.jsx";

const router = createBrowserRouter([
  { path: "/", element: <Home/> },
  { path: "/login", element: <Login/> },
  { path: "/regster", element: <Reg/> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);