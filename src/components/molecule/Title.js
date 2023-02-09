/* eslint-disable react/no-unknown-property */
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Line from "../atom/Line";

export default function Title({
  align,
  gap,
  fontFamily,
  fontSize,
  fontColor,
  title,
  lineWidth,
  lineHeight,
  lineColor,
}) {
  return (
    <StyledTitle className="title" align={align} gap={gap}>
      <h1 fontFamily={fontFamily} fontSize={fontSize} fontColor={fontColor}>
        {title}
      </h1>
      <Line
        lineWidth={lineWidth}
        lineHeight={lineHeight}
        lineColor={lineColor}
      />
    </StyledTitle>
  );
}

const StyledTitle = styled.div`
  display: flex; // 좌우 나열
  align-items: center; // 수직 정렬
  justify-content: ${(props) => props.align};
  gap: ${(props) => props.gap};

  h1 {
    display: inline-block; // 좌우 나열해야하니까
    font-family: ${(props) => props.fontFamily};
    font-size: ${(props) => props.fontSize};
    color: ${(props) => props.fontColor};
    line-height: 1.5;
  }
`;

Title.defaultProps = {
  align: "center", // <div> flex-start, center, flex-end
  gap: "20.95px",
  fontFamily: `"Poppins", sans-serif`,
  fontSize: "24px", // <h1>
  fontColor: "#fff",
  lineWidth: "70px", // <Line>
  lineHeight: "3px",
  lineColor: "#fff",
};

Title.propTypes = {
  align: PropTypes.string,
  gap: PropTypes.string,
  fontFamily: PropTypes.string,
  fontSize: PropTypes.string,
  fontColor: PropTypes.string,
  title: PropTypes.string.isRequired,
  lineColor: PropTypes.string,
  lineWidth: PropTypes.string,
  lineHeight: PropTypes.string,
};
