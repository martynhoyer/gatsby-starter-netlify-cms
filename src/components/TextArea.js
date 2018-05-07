import React from 'react'
import styled, { css } from 'styled-components'

const isErroring = ({ error }) =>
  error
    ? css`
        border: 1px solid #cc0000;
      `
    : css`
        border: 1px solid ${props => props.theme.palette.greyLighter};
      `

const Input = styled.textarea`
  ${isErroring};

  display: block;
  width: 100%;
  height: 6em;
  padding: 0.5rem;
  font-size: inherit;
  background-color: ${props => props.theme.palette.white};

  &:focus {
    border-color: ${props => props.theme.palette.purple};
    outline: none;
  }
`

const TextArea = ({
  name,
  placeholder,
  value,
  handleBlur,
  handleChange,
  error,
}) => (
  <Input
    id={name}
    name={name}
    placeholder={placeholder}
    type="text"
    value={value}
    onBlur={handleBlur}
    onChange={handleChange}
    error={error}
  />
)

export default TextArea
