/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import "./InputWithLabel.scss";

export default function InputWithLabel({
  inputId,
  label,
  width,
  height,
  ...rest
}) {
  return (
    <div className="inputWithLabel">
      <label htmlFor={inputId}>{label}</label>
      <StyledInput
        type="text"
        id={inputId}
        width={width}
        height={height}
        {...rest}
      />
    </div>
  );
}

const StyledInput = styled.input`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;

  &:focus {
    outline: 2px solid ${(props) => props.theme.yellow};
  }
`;

InputWithLabel.propTypes = {
  inputId: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
};
