import React from "react";
import { Link } from "react-router-dom";
import Line from "../atom/Line";
import "./Header.scss";

export default function Header() {
  return (
    <header className="header">
      <nav className="header-wrap">
        <ul className="header-lists">
          <li className="header-lists-item">
            <Link to="/">HOME</Link>
            <Line width="46" bgColor="#FFB800" />
          </li>
          <li className="header-lists-item">
            <Link to="/about">ABOUT</Link>
          </li>
          <li className="header-lists-item">
            <Link to="/work">WORK</Link>
          </li>
          <li className="header-lists-item">
            <Link to="/contact">CONTACT</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
