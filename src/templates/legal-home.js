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
  const { edges: childPages } = data.allMarkdownRemark;

  return (
    <main>
      <SeoTitle title={page.frontmatter.title} />
      <LegalPageTemplate
        contentComponent={HTMLContent}
        title={page.frontmatter.title}
        content={page.html}
      />
      <ul>
        {childPages.map(({ node: page }) => (
          <li>
            <Link to={page.fields.slug}>{page.frontmatter.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
};

export const legalHomePageQuery = graphql`
  query LegalHomePage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
      }
      html
    }
    allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "legal" } } }
    ) {
      edges {
        node {
          frontmatter {
            title
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;
