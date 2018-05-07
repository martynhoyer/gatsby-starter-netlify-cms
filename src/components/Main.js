import styled, { css } from 'styled-components'

const homeBg = ({ isHome }) =>
  isHome &&
  css`
    background-color: ${props => props.theme.palette.black};
  `

export const Main = styled.main`
  ${homeBg};

  flex-grow: 1;

  position: relative;
`
