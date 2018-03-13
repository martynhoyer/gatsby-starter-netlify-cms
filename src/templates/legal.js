import React from "react";
import graphql from "graphql";
import Link from "gatsby-link";
import Content, { HTMLContent } from "../components/Content";
import SeoTitle from "../components/SeoTitle";

export const LegalPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content;

  return (
    <div>
      <PageContent className="content" content={content} />
    </div>
  );
};

export default ({ data }) => {
  const { markdownRemark: page } = data;
  return (
    <main>
      <SeoTitle title={page.frontmatter.title} />
      <LegalPageTemplate
        contentComponent={HTMLContent}
        title={page.frontmatter.title}
        content={page.html}
      />
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
