import ReactDOM from "react-dom/client";
import React from "react";
import "./index.css";
import Home from "./components/Home/Home.jsx";
import About from "./components/Home/About/About.jsx";
import Contact from "./components/Contact/Contact.jsx";
import App from "./App.jsx";
import Users from "./components/Users/Users.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/users",
        loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
        element: <Users></Users>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
