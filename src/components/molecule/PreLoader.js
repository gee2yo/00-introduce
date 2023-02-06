import React from "react";
import "./PreLoader.scss";
import styled, { keyframes, css } from "styled-components";

export default function PreLoader() {
  return (
    <StyledPreLoader>
      <div className="blackWall" />
      <div className="preLoader-point" />
    </StyledPreLoader>
  );
}

const preLoaderSlide = keyframes`
  from {
    transform: scaleY(0)
  }
  to {
    transform: scaleY(1)
  }
`;

const StyledPreLoader = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: red;
  z-index: 111111;
  transform-origin: bottom;
  ${(props) =>
    props.isMount &&
    css`
      animation: ${preLoaderSlide} 0.5s ease-in-out 0s 1 reverse both;
    `};
  // 1(꽉 찬 상태) -> 0(아래로 사라지게) = 없는 상태로 유지

  .preLoader-point {
    position: absolute;
    top: 0;
    width: 100vw;
    height: 3px;
    right: 0;
    left: 0;
    margin: auto;
    border-radius: 2px;
    background-color: #ffc41f;
  }

  .blackWall {
    height: 100%;
    background-color: blue;
    transform-origin: top;
    animation: ${preLoaderSlide} 0.5s ease-in-out 0s 1 normal both;
    // 0(없는 상태) -> 1(아래로 꽉 차게) = 꽉 찬 상태로 유지
  }
`;

// PreLoader.propTypes = {
//   isMount: PropTypes.boolean.isRequired,
// }
