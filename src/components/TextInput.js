import React from "react";
import styled from "styled-components";

const Input = styled.input`
  display: block;
  width: 100%;
  padding: 0.5rem;
  border: 1px solid ${props => props.theme.palette.greyLighter};
  font-size: inherit;
  background-color: ${props => props.theme.palette.white};

  &:focus {
    border-color: ${props => props.theme.palette.purple};
    outline: none;
  }
`;

const TextInput = ({ name, placeholder, value, handleBlur, handleChange }) => (
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

export default TextInput;
