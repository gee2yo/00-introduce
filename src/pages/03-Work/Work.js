import React from "react";
import Line from "../../components/atom/Line";
import Title from "../../components/molecule/Title";
import "./Work.scss";

export default function Work() {
  return (
    <StyledWork>
      <section className="wrap">
        <header>
          <Title align="center" title="WORK" />
          <nav className="contents-menu">
            <ul>
              <li>
                ALL
                <Line width="46px" bgColor="#FFB800" />
              </li>
              <li>FRONT-END</li>
              <li>BACK-END</li>
              <li>React</li>
            </ul>
          </nav>
        </header>
        <section className="contents">
          <ul className="contents-list">
            <li />
            <li />
            {/* {list.map((list, idx) => (
                <li key={idx}>{list}</li>
              ))}
              <li /> */}
            {/* 슬라이드 방식으로 구현할 것 */}
          </ul>
          <div className="work-contents-slide">
            <div className="work-contents-slide-circles circle01" />
            <div className="work-contents-slide-circles 02" />
            <div className="work-contents-slide-circles 03" />
          </div>
        </section>
      </section>
    </StyledWork>
  );
}

const StyledWork = styled.main`
  width: 100vw;
  height: 100vh;
  background-color: #020202;

  section.wrap {
    max-width: 960px;
    margin: 0 auto;
  }
`;
