import React, { Fragment } from "react";
import styled from "styled-components";
import { hideVisually } from "polished";

const Heading = styled.h1`
  font-size: 1rem;
`;

const SubTitle = styled.small`
  display: block;
  text-transform: uppercase;
`;

const Concatenator = styled.span`
  ${hideVisually};
`;

const Title = styled.span`
  display: block;
  margin-top: 1em;
  font-size: 2em;
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
