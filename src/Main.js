import React, { useEffect, useState } from "react";
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
  // 마운트 여부를 state로 관리
  const [isMount, setIsMount] = useState(false);
  // useEffect()로 state를 변경
  useEffect(() => {
    setTimeout(() => {
      setIsMount(true);
    }, 300);
    return () => setIsMount(false);
  }, []);

  return (
    <>
      <GlobalStyle />
      <PreLoader isMount={isMount} />
      <Header />
      <Sidebar />
      <Outlet />
      {/* <Footer /> */}
    </>
  );
}

export default Main;
