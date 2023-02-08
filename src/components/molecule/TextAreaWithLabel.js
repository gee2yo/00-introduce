/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

export default function TextAreaWithLabel({ txtAreaId, label, ...rest }) {
  return (
    <StyledTextAreaWithLabel className="textAreaWithLabel">
      <label htmlFor={txtAreaId}>{label}</label>
      <StyledTextArea id={txtAreaId} {...rest} />
    </StyledTextAreaWithLabel>
  );
}

const StyledTextAreaWithLabel = styled.div`
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

const StyledTextArea = styled.textarea`
  font-family: ${(props) => props.theme.sansSerif};
  font-size: 25.16px;
  line-height: 1.5;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  padding: 32.04px;
  border-radius: 10px;
  background-color: rgb(255, 255, 255, 0.25);
  resize: none;

  &:focus {
    outline: 5px solid ${(props) => props.theme.yellow};
  }
  &::placeholder {
    font-family: ${(props) => props.theme.sansSerif};
    font-size: 25.16px;
  }
`;

TextAreaWithLabel.propTypes = {
  txtAreaId: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};
