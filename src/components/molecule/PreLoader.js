import React, { useEffect, useState } from "react";
import "./PreLoader.scss";
import styled, { css, keyframes } from "styled-components";

export default function PreLoader() {
  // 마운트 여부를 state로 관리
  const [isMount, setIsMount] = useState(false);
  // useEffect()로 state를 변경
  useEffect(() => {
    setTimeout(() => {
      setIsMount(true);
    }, 300);
    return () => setIsMount(false);
  }, []); // [] 안 하면 1번 실행 후 다시 처음 상태로(100) 돌아옴

  return (
    <StyledPreLoader isMount={isMount}>
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
    transform: scale(1);
  }
`;

const StyledPreLoader = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #111; // 연회색
  z-index: 111111;
  transform-origin: bottom;
  ${(props) =>
    props.isMount &&
    css`
      animation: ${preLoaderSlide} 0.5s ease-in-out 0s 1 reverse both;
      // 실행 전: to(100) -> 실행 후: from(0)
      // 위 -> 아래로 1번 작아진다
    `}
  // 

  .preLoader-point {
    position: absolute; // div 끝 따라다님
    top: 0;
    width: 100vw;
    height: 3px;
    background-color: #ffc41f;
  }

  .blackWall {
    height: 100%;
    background-color: #222;
    transform-origin: top;
    animation: ${preLoaderSlide} 0.5s ease-in-out 0s 1 normal both;
    // 실행 전: from(0) -> 실행 후: to(100)
    // 위 -> 아래로 1번 커진다
  }
`;
