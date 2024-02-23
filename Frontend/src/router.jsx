import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./Pages/Login.jsx";
import Register from "./Pages/Reg.jsx";


const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/alogin", element: <Login/> },
  { path: "/areg", element: <Register/> },

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);