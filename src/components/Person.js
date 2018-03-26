import React from "react";
import styled from "styled-components";
import Img from "gatsby-image";
import media from "../tokens/breakpoints";
import { transparentize } from "polished";

const Container = styled.div``;

const Intro = styled.div`
  position: relative;
  margin: 0 -1rem;

  @media (${media.md}) {
    margin: 0 0 0 -4rem;
  }

  @media (${media.xl}) {
    margin: 0 -2rem;
  }
`;

const StyledImg = styled(Img)``;

const NameAndJobTitle = styled.h2`
  margin: 0.5em 1rem 0;
  font-size: 1.5em;
  line-height: 1.4;
  color: ${props => props.theme.palette.purple};

  @media (${media.sm}) {
    position: absolute;
    bottom: 0.5rem;
    z-index: 2;
  }

  @media (${media.md}) {
    margin: 0 4rem;
  }

  @media (${media.xl}) {
    position: static;
    margin: -1.55em 2rem 0;
  }

  @media (${media.x2}) {
    position: absolute;
    margin: 0 2rem;
  }
`;

const Name = styled.span`
  position: relative;

  @media (${media.sm}) {
    outline-width: 0.5rem;
    outline-style: solid;
    outline-color: ${props => transparentize(0.2, props.theme.palette.white)};
    background-color: ${props =>
      transparentize(0.2, props.theme.palette.white)};
  }
`;

const JobTitle = styled.small`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 0.65em;
  font-weight: normal;
  text-transform: uppercase;

  @media (${media.sm}) {
    outline-width: 0.5rem;
    outline-style: solid;
    outline-color: ${props => transparentize(0.2, props.theme.palette.white)};
    background-color: ${props =>
      transparentize(0.2, props.theme.palette.white)};
  }
`;

const Para = styled.p`
  margin: 1em 0 0;
`;

const Person = ({ person, img }) => (
  <Container>
    <Intro>
      <StyledImg sizes={img.sizes} />
      <NameAndJobTitle>
        <Name>{person.name}</Name> <br />
        <JobTitle>{person.jobtitle}</JobTitle>
      </NameAndJobTitle>
    </Intro>
    {person.paragraphs.map(para => <Para key={para.id}>{para.text}</Para>)}
  </Container>
);

export default Person;
