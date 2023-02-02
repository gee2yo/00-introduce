import React from "react";
import { Outlet } from "react-router-dom";
import reset from "styled-reset";
import { createGlobalStyle } from "styled-components";

import Header from "./Header";
import Sidebar from "./Sidebar";
// import Footer from "./Footer";

const GlobalStyle = createGlobalStyle`
  ${reset}
`;

function Main() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Sidebar />
      <Outlet />
      {/* <Footer /> */}
    </>
  );
}

export default Main;
