import React from "react";
import Line from "../../components/atom/Line";
import Title from "../../components/molecule/Title";
import "./Work.scss";

export default function Work() {
  return (
    <div className="work">
      <div className="work-wrap">
        <div className="work-contents">
          <Title align="center" title="WORK" />
          <div className="work-contents-menu">
            <ul>
              <li>
                ALL
                <Line width="46px" bgColor="#FFB800" />
              </li>
              <li>FRONT-END</li>
              <li>BACK-END</li>
              <li>React</li>
            </ul>
          </div>
          <div className="work-contents-lists">
            <ul>
              <li />
              <li />
              {/* {list.map((list, idx) => (
                <li key={idx}>{list}</li>
              ))}
              <li /> */}
              {/* 슬라이드 방식으로 구현할 것 */}
            </ul>
          </div>
          <div className="work-contents-slide">
            <div className="work-contents-slide-circles circle01" />
            <div className="work-contents-slide-circles 02" />
            <div className="work-contents-slide-circles 03" />
          </div>
        </div>
      </div>
    </div>
  );
}
