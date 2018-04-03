import React from "react";
import graphql from "graphql";
import PageHeader from "../components/PageHeader";
import styled from "styled-components";
import { Main } from "../components/Main";
import { GridParent, GridItem } from "../components/Grid";
import { headingLevel3 } from "../tokens/typography";

const StyledGridItem = styled(GridItem)`
  flex-basis: 75%;

  max-width: 60ch;
  padding-top: 1rem;
`;

const Content = styled.div`
  & > h2 {
    ${headingLevel3};
  }

  & table {
    width: 100%;
    margin-top: 1em;
    border: 1px solid ${props => props.theme.palette.greyLighter};
    border-collapse: collapse;

    & th,
    & td {
      padding: 0.25em;
      border: 1px solid ${props => props.theme.palette.greyLighter};
    }

    & th {
      text-align: left;
    }
  }
`;

const LegalPage = ({ data }) => {
  const { markdownRemark: page } = data;
  return (
    <Main>
      <PageHeader title={page.frontmatter.title} />
      <GridParent>
        <StyledGridItem>
          <Content dangerouslySetInnerHTML={{ __html: page.html }} />
        </StyledGridItem>
      </GridParent>
    </Main>
  );
};

export default LegalPage;

export const legalPageQuery = graphql`
  query LegalPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
      }
      html
    }
  }
`;
