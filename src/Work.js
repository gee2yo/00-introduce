import React from "react";
import "./Work.scss";

export default function Work() {
  return (
    <div className="work">
      <div className="work-wrap">
        <div className="work-contents">
          <div className="work-contents-tit">
            <h1>WORK</h1>
          </div>
          <div className="work-contents-menu">
            <ul>
              <li>ALL</li>
              <li>FRONT-END</li>
            </ul>
          </div>
          <div className="work-contents-lists">
            <ul>
              <li />
              <li />
              {/* 슬라이드 방식으로 구현할 것 */}
            </ul>
          </div>
          <div className="work-contents-slide" />
        </div>
      </div>
    </div>
  );
}
