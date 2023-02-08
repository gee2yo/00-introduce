import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Line from "../atom/Line";
import "./Title.scss";

export default function Title({
  align,
  title,
  width,
  height,
  bgColor,
  fontSize,
}) {
  return (
    <div className={`title ${align}`}>
      <StyledH1 fontSize={fontSize}>{title}</StyledH1>
      <Line width={width} height={height} bgColor={bgColor} />
    </div>
  );
}

const StyledH1 = styled.h1`
  font-size: ${(props) => props.fontSize};
  font-family: $sansSerif;
  line-height: 1.5;
  color: #fff;
  display: inline-block;
  margin-right: 29px;
`;

Title.propTypes = {
  title: PropTypes.string.isRequired,
  align: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  bgColor: PropTypes.string,
  fontSize: PropTypes.string,
};

Title.defaultProps = {
  align: "center",
  width: "110.06px",
  height: "4.72px",
  bgColor: "#fff",
  fontSize: "37.73px",
};
