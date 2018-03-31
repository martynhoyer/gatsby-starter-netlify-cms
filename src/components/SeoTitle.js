import React, { Fragment } from "react";
import styled from "styled-components";
import { hideVisually } from "polished";
import media from "../tokens/breakpoints";
import { headingLevel1 } from "../tokens/typography";

const Heading = styled.h1`
  margin: 0;
  font-size: 2.2em;
  color: ${props => props.theme.palette.yellow};

  @media (${media.lg}) {
    /* display: flex; */
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;
  }
`;

const SubTitle = styled.small`
  display: block;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 0.3em;
  font-weight: normal;
  text-transform: uppercase;
  opacity: 0.6;
`;

const Concatenator = styled.span`
  ${hideVisually};
`;

const Title = styled.span`
  ${headingLevel1} display: block;
  margin-top: 1em;
`;

const SeoTitle = ({ title, subtitle = null }) => (
  <Heading>
    {subtitle && (
      <Fragment>
        <SubTitle>{subtitle}</SubTitle> <Concatenator>or</Concatenator>{" "}
      </Fragment>
    )}
    <Title>{title}</Title>
  </Heading>
);

export default SeoTitle;
