import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

export default function Line({ lineWidth, lineHeight, lineColor }) {
  return (
    <StyledLine
      className="line"
      lineWidth={lineWidth}
      lineHeight={lineHeight}
      lineColor={lineColor}
    />
  );
}

const StyledLine = styled.div`
  width: ${(props) => props.lineWidth};
  height: ${(props) => props.lineHeight};
  background-color: ${(props) => props.lineColor};
`;

Line.propTypes = {
  lineWidth: PropTypes.string,
  lineHeight: PropTypes.string,
  lineColor: PropTypes.string,
};

Line.defaultProps = {
  lineWidth: "70px",
  lineHeight: "3px",
  lineColor: "#fff",
};
