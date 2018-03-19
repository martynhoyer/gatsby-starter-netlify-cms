import React from "react";
import styled from "styled-components";
import SeoTitle from "./SeoTitle";
import { HTMLContent } from "../components/Content";

const StyledPageHeader = styled.header`
  padding-top: 2rem;
  padding-right: 1rem;
  padding-bottom: 2rem;
  padding-left: 1rem;
  background-color: purple;
  color: #fff;

  & a {
    color: #fff;
  }

  @media (min-width: 720px) {
    padding-right: 2em;
    padding-left: 2rem;
  }
`;

const PageHeader = ({ title, subtitle, text = null }) => {
  return (
    <StyledPageHeader>
      <SeoTitle title={title} subtitle={subtitle} />
      {text && <HTMLContent content={text} />}
    </StyledPageHeader>
  );
};

export default PageHeader;
