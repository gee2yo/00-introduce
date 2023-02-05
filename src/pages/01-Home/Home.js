import React from "react";
import "./Home.scss";

export default function Home() {
  return (
    <div className="home">
      <div className="home-wrap">
        <div className="home-profile">
          <div className="home-profile-photo" />
          <div className="home-profile-text">
            <h1>CHOI JIEE</h1>
            <p>I am a Frontend Developer</p>
            {/* <p>I am a Web Designer</p>
            <p>I am a Photographer</p> */}
            {/* 이부분 글자 계속 바뀌게 애니메이션 줄 것 */}
          </div>
        </div>
      </div>
    </div>
  );
}
