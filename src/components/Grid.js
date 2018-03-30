import styled, { css } from "styled-components";
import media from "../tokens/breakpoints";

export const GridParent = styled.div`
  padding-right: 1rem;
  padding-left: 1rem;

  @media (${media.md}) {
    padding-right: 4rem;
    padding-left: 4rem;
  }

  @media (${media.xl}) {
    display: flex;
    flex-wrap: wrap;

    padding-right: 2rem;
    padding-left: 2rem;
  }
`;

const stripes = ({ stripy }) =>
  stripy &&
  css`
    &:nth-child(2n) {
      background-color: ${props => props.theme.palette.greyLightest};
    }
  `;

export const GridItem = styled.div`
  ${stripes};

  margin: 0 -1rem;
  padding: 1.5rem 1rem;

  @media (${media.md}) {
    margin-right: -4rem;
    margin-left: -4rem;
    padding-right: 20%;
    padding-left: 4rem;
  }

  @media (${media.xl}) {
    flex-basis: calc(50% - 4rem);
    margin: 0 auto 4rem;
    padding: 2rem;
    box-shadow: 0 0 1.5em 0 ${props => props.theme.shadows.default};
    background-color: ${props => props.theme.palette.greyLightest};
    color: ${props => props.theme.palette.greDdark};

    &:nth-child(1),
    &:nth-child(2) {
      margin-top: -10rem;
    }
  }
`;
