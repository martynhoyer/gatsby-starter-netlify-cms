import React from "react";
import PageHeader from "../components/PageHeader";
import styled from "styled-components";
import { Main } from "../components/Main";
import { GridParent, GridItem } from "../components/Grid";

const StyledGridItem = styled(GridItem)`
  flex-basis: 75%;

  max-width: 60ch;
  padding-top: 1rem;
`;

const NotFoundPage = () => {
  return (
    <Main>
      <PageHeader title="Page not found" />
      <GridParent>
        <StyledGridItem>
          <div>You just hit a page that doesn&apos;t exist.</div>
        </StyledGridItem>
      </GridParent>
    </Main>
  );
};

export default NotFoundPage;
