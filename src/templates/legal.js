import React from "react";
import graphql from "graphql";
import Link from "gatsby-link";
import SeoTitle from "../components/SeoTitle";
import PageHeader from "../components/PageHeader";

export default ({ data }) => {
  const { markdownRemark: page } = data;
  return (
    <main>
      <PageHeader title={page.frontmatter.title} />
      <div dangerouslySetInnerHTML={{ __html: page.html }} />
    </main>
  );
};

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
