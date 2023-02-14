import React from "react";
import { Outlet } from "react-router-dom";
import reset from "styled-reset";
import { createGlobalStyle } from "styled-components";

import PreLoader from "./components/molecule/PreLoader";
import Header from "./components/organisms/Header";
import Sidebar from "./components/organisms/Sidebar";
// import Footer from "./Footer";

const GlobalStyle = createGlobalStyle`
  ${reset}
`;

function Main() {
  return (
    <>
      <GlobalStyle />
      <PreLoader />
      {/* 얘가 밑에 있으면 제일 위로 가서 다른 것들이 클릭이 안 됨 */}
      <Header />
      <Sidebar />
      <Outlet />
      {/* <Footer /> */}
    </>
  );
}

export default Main;
