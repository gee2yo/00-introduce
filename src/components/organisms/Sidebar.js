import React from "react";
import Line from "../atom/Line";
import "./Sidebar.scss";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-wrap">
        <div className="sidebar-wrap-scroll">
          <span>SCROLL DOWN</span>
          <Line height="1px" />
        </div>
        <div className="sidebar-wrap-sns">
          <div className="sidebar-wrap-sns-item" />
          <div className="sidebar-wrap-sns-item" />
          <div className="sidebar-wrap-sns-item" />
          <div className="sidebar-wrap-sns-item" />
          <div className="sidebar-wrap-sns-item" />
        </div>
      </div>
    </div>
  );
}
