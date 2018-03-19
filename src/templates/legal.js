import React from "react";
import graphql from "graphql";
import PageHeader from "../components/PageHeader";

const LegalPage = ({ data }) => {
  const { markdownRemark: page } = data;
  return (
    <main>
      <PageHeader title={page.frontmatter.title} />
      <div dangerouslySetInnerHTML={{ __html: page.html }} />
    </main>
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
