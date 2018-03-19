import React from "react";
import graphql from "graphql";
import Link from "gatsby-link";
import PageHeader from "../components/PageHeader";

export default ({ data }) => {
  const { markdownRemark: page } = data;
  const { edges: childPages } = data.allMarkdownRemark;

  return (
    <main>
      <PageHeader title={page.frontmatter.title} />
      {page.html && <div dangerouslySetInnerHTML={{ __html: page.html }} />}
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
