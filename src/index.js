import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// 컴포넌트 임포트
import ErrorPage from "./ErrorPage";
import Main from "./Main";
import Home from "./Home";
import About from "./About";
import Work from "./Work";
import Contact from "./Contact";

import "./index.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/work",
        element: <Work />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/contact",
        element: <Contact />,
        errorElement: <ErrorPage />,
      },
    ],
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
