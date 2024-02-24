import React from "react";
import ReactDOM from "react-dom";
import { RouterProvider } from "react-router-dom";
import router from "./Route/router.jsx";

const Root = () => (
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

ReactDOM.createRoot(document.getElementById("root")).render(<Root />);
