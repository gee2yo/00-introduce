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
      <Input type="text" id={inputId} {...rest} />
    </div>
  );
}

InputWithLabel.propTypes = {
  inputId: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
};

const Input = styled.input`
  width: ${(props) => props.width}px;
  height: ${(props) => props.hegiht}px;

  &:focus {
    outline-color: #ffb800;
  }
`;
