import React, { Fragment } from "react";
import styled from "styled-components";
import Img from "gatsby-image";

const Container = styled.div`
  padding: 1rem;
  background-color: #ccc;
`;

const Intro = styled.div`
  position: relative;
`;

const StyledImg = styled(Img)`
  margin: -1rem -1rem 0;
  ${"" /* opacity: 0.05; */};
`;

const Name = styled.h2`
  position: absolute;
  bottom: 1rem;
  margin: 0;
  font-size: 2rem;
`;

const JobTitle = styled.small`
  display: block;
`;

const Para = styled.p`
  margin: 1em 0 0;
`;

const Person = ({ person, img }) => (
  <Container>
    <Intro>
      <StyledImg sizes={img.sizes} />
      <Name>
        {person.name} <JobTitle>{person.jobtitle}</JobTitle>
      </Name>
    </Intro>
    {person.paragraphs.map(para => <Para key={para.id}>{para.text}</Para>)}
  </Container>
);

export default Person;
