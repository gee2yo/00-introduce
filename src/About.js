import React from "react";
import "./About.scss";

export default function About() {
  return (
    <div className="about">
      <div className="about-contents">
        <div className="about-contents-photo">
          <img src="" alt="" />
          <div className="about-contents-photo-back" />
        </div>
        <div className="about-contents-texts">
          <div className="about-contents-texts-about">
            <h1>ABOUT</h1>
            <span>CHOI JIEE</span>
            <p>DESCRIPTION</p>
          </div>
          <div className="about-contents-texts-skills">
            <h2 className="about-contents-texts-skills-tit">SKILLS</h2>
            <ul className="about-contents-texts-skills-list">
              <li>HTML</li>
              <li>JavaScript</li>
              <li>React JS</li>
              <li>Node JS</li>
              <li>CSS</li>
              <li>SCSS</li>
              <li>styled-component</li>
              <li>Bootstrap</li>
              <li>Figma</li>
              <li>mySQL</li>
              <li>GIT/Github</li>
              {/* <li>Photoshop</li>
              <li>Preimeire</li>
              <li>AfterEffetcs</li> */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
