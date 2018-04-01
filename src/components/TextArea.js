import React from 'react'
import styled from 'styled-components'

const Input = styled.textarea`
  background-color: var(--nord1);
  border-radius: 4px;
  color: var(--nord6);
  height: 12rem;
  padding: 0.65rem;
  resize: none;
  width: 100%;
  &:focus {
    box-shadow: inset 0 1px 2px var(--nord1), 0 0 0 4px var(--nord2);
    outline: none;
  }
  &::placeholder {
    color: var(--nord3);
  }
`

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
)

export default TextArea
