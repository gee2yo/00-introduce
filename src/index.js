import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import "./index.scss";

// 컴포넌트 임포트
import ErrorPage from "./ErrorPage";
import Main from "./Main";
import Home from "./pages/01-Home/Home";
import About from "./pages/02-About/About";
import Work from "./pages/03-Work/Work";
import Contact from "./pages/04-Contact/Contact";
import theme from "./styles/theme";

const LineContext = createContext();

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
    <ThemeProvider theme={theme}>
      <LineContext.Provider value="">
        <RouterProvider router={router} />
      </LineContext.Provider>
    </ThemeProvider>
  </React.StrictMode>
);
