import React from "react";
import styled from "styled-components";
import SeoTitle from "./SeoTitle";
import { HTMLContent } from "../components/Content";
import media from "../tokens/breakpoints";

const StyledPageHeader = styled.header`
  padding: 2rem 1rem 3rem;
  font-size: 1.2em;
  text-shadow: 0 0 1em ${props => props.theme.palette.purple};
  background-color: ${props => props.theme.palette.purple};
  background-size: 5px, cover;
  background-repeat: repeat, no-repeat;
  background-position: 0 0, 50% 100%;
  color: ${props => props.theme.palette.white};

  @media (${media.md}) {
    padding-right: 4rem;
    padding-left: 4rem;
  }

  @media (${media.xl}) {
    padding-right: 2rem;
    padding-bottom: 14rem;
    padding-left: 2rem;
    text-align: center;
  }

  & a {
    color: ${props => props.theme.palette.yellow};

    &:hover,
    &:focus {
      text-shadow: none;
      color: ${props => props.theme.palette.purple};
    }
  }
`;

const Intro = styled.div`
  @media (${media.xl}) {
    padding: 0 15%;
  }

  @media (${media.x2}) {
    padding: 0 20%;
  }
`;

const PageHeader = ({ title, subtitle, text = null }) => {
  return (
    <StyledPageHeader>
      <SeoTitle title={title} subtitle={subtitle} />
      {text && (
        <Intro>
          <HTMLContent content={text} />
        </Intro>
      )}
    </StyledPageHeader>
  );
};

export default PageHeader;
