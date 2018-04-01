import React from "react";
import styled from "styled-components";

const Input = styled.textarea`
  display: block;
  width: 100%;
  height: 6em;
  padding: 0.5rem;
  border: 1px solid ${props => props.theme.palette.greyLighter};
  font-size: inherit;
  background-color: ${props => props.theme.palette.white};

  &:focus {
    border-color: ${props => props.theme.palette.purple};
    outline: none;
  }
`;

const TextArea = ({ name, placeholder, value, handleBlur, handleChange }) => (
  <Input
    id={name}
    name={name}
    placeholder={placeholder}
    type="text"
    value={value}
    onBlur={handleBlur}
    onChange={handleChange}
  />
);

export default TextArea;
