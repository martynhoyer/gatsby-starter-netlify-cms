import React from "react";
import styled, { css, keyframes } from "styled-components";
import { transparentize } from "polished";

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const buttonIsLoading = ({ isLoading }) =>
  isLoading &&
  css`
    position: relative;
    background-color: ${props => props.theme.palette.purple};

    &::before {
      content: "";
      display: block;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
    }

    &::after {
      content: "";
      display: block;
      position: absolute;
      top: 50%;
      left: 50%;
      width: 2em;
      height: 2em;
      margin-top: -1em;
      margin-left: -1em;
      border-color: ${props => transparentize(0.8, props.theme.palette.yellow)};
      border-left-color: ${props => props.theme.palette.yellow};
      border-width: 4px;
      border-style: solid;
      border-radius: 50%;
      animation: ${spin} 0.35s linear infinite;
      z-index: 2;
    }
  `;

const Button = styled.button`
  ${buttonIsLoading};
  display: block;
  width: 100%;
  margin-top: 1.5rem;
  padding: 1rem 0.5rem;
  font-size: inherit;
  background-color: ${props => props.theme.palette.purple};
  color: ${props => props.theme.palette.white};

  &:hover,
  &:focus {
    box-shadow: 0 0 2em 0 ${props => props.theme.palette.purple};
    background-color: ${props => props.theme.palette.purple};
    outline: none;
  }
`;

const Submit = ({ isSubmitting }) => (
  <Button type="submit" disabled={isSubmitting} isLoading={isSubmitting}>
    Send
  </Button>
);

export default Submit;
