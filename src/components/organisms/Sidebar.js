import React from "react";
import Line from "../atom/Line";
import "./Sidebar.scss";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-wrap">
        <div className="sidebar-scroll">
          <span>SCROLL DOWN</span>
          <Line height="1px" />
        </div>
        <div className="sidebar-sns">
          <div />
          <div />
          <div />
          <div />
          <div />
        </div>
      </div>
    </div>
  );
}
