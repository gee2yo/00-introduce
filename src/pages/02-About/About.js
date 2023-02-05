import React from "react";
import Title from "../../components/molecule/Title";
import "./About.scss";

export default function About() {
  return (
    <div className="about">
      <div className="about-contents">
        <div className="about-contents-photo">
          <div className="about-contents-photo-back" />
        </div>
        <div className="about-contents-texts">
          <div className="about-contents-texts-about">
            <Title title="ABOUT" align="left" />
            <span>CHOI JIEE</span>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim
              quisque leo dictum quis turpis. Felis eget porta sem leo ornare
              nunc lacus.{" "}
            </p>
          </div>
          <div className="about-contents-texts-skills">
            <Title title="SKILLS" align="left" />
            <ul className="about-contents-texts-skills-lists">
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
