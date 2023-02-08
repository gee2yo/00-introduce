import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

export default function Line({ width, height, bgColor }) {
  return (
    <div>
      <StyledLine
        className="line"
        width={width}
        height={height}
        bgColor={bgColor}
      />
    </div>
  );
}

const StyledLine = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: ${(props) => props.bgColor};
`;

Line.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  bgColor: PropTypes.string,
};

Line.defaultProps = {
  width: "110.06px",
  height: "4.72px",
  bgColor: "#fff",
};
