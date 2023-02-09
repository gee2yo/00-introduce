import React from "react";
import Title from "../../components/molecule/Title";
import "./About.scss";

export default function About() {
  return (
    <div className="about">
      <div className="about-wrap">
        {/* 1. left */}
        <div className="about-wrap-left">
          <div className="about-wrap-left-photo">
            <img
              className="about-wrap-left-photo-img"
              src={`${process.env.PUBLIC_URL}/images/profile.jpg`}
              alt="profile"
            />
          </div>
          <div className="about-wrap-left-shadow" />
        </div>
        {/* 2. right */}
        <div className="about-wrap-right">
          {/* 2-1. about */}
          <div className="about-wrap-right-about">
            <Title title="ABOUT" align="left" />
            <span>CHOI JIEE</span>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim
              quisque leo dictum quis turpis. Felis eget porta sem leo ornare
              nunc lacus.{" "}
            </p>
          </div>
          {/* 2-2. skills */}
          <div className="about-wrap-right-skills">
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
