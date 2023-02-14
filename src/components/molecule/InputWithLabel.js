/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import "./InputWithLabel.scss";

export default function InputWithLabel({ label, input, width, height }) {
  return (
    <div>
      <Styledlabel htmlFor={input.id}>{label}</Styledlabel>
      <StyledInput
        style={{ width: `${width}`, height: `${height}` }}
        {...input}
        required
      />
    </div>
  );
}

const Styledlabel = styled.label`
  label {
  }
`;

const StyledInput = styled.input`
  input {
    width: ${(props) => `${props.width}px`};
    height: ${(props) => `${props.height}px`};
    font-family: ${(props) => props.theme.sansSerif};
    font-size: 16px;
    &::placeholder {
      font-family: ${(props) => props.theme.sansSerif};
      font-size: 16px;
    }
    &:focus {
      outline: 2px solid ${(props) => props.theme.yellow};
    }
  }
`;

InputWithLabel.propTypes = {
  label: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  input: PropTypes.objectOf(PropTypes.string.isRequired).isRequired,
};
