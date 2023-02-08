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
    <StyledInputWithLabel className="inputWithLabel">
      <label htmlFor={inputId}>{label}</label>
      <StyledInput
        type="text"
        id={inputId}
        width={width}
        height={height}
        {...rest}
        required
      />
    </StyledInputWithLabel>
  );
}

const StyledInputWithLabel = styled.div`
  display: flex;
  flex-direction: column;

  label {
    font-family: ${(props) => props.theme.sansSerif};
    font-size: 25.16px;
    color: #fff;
    line-height: 1.5;
    margin-bottom: 13.68px;
  }
`;

const StyledInput = styled.input`
  font-family: ${(props) => props.theme.sansSerif};
  font-size: 25.16px;
  line-height: 1.5;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  padding: 32.04px;
  border-radius: 10px;
  background-color: rgb(255, 255, 255, 0.25);

  &:focus {
    outline: 5px solid ${(props) => props.theme.yellow};
  }
  &::placeholder {
    font-family: ${(props) => props.theme.sansSerif};
    font-size: 25.16px;
  }
`;

InputWithLabel.propTypes = {
  inputId: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
};
