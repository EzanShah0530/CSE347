import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import Login from "./Pages/Login.jsx";
import Register from "./Pages/Reg.jsx";
import Slider from "./Slider.jsx";

const router = createBrowserRouter([
  { path: "/", element: <App/> },
  { path: "/login", element: <Login/> },
  { path: "/register", element: <Register/> },
  { path: "/s", element:<Slider/> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);