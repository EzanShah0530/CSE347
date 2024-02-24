import { createBrowserRouter } from "react-router-dom";
import App from "../App.jsx";
import Login from "../Pages/Login.jsx";
import Register from "../Pages/Register.jsx";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/alogin", element: <Login /> },
  { path: "/areg", element: <Register /> },
]);

export default router;