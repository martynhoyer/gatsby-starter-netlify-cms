import React from "react";
import graphql from "graphql";
import Link from "gatsby-link";
import PageHeader from "../components/PageHeader";
import { GridParent, GridItem } from "../components/Grid";

// const ServicesGrid = styled.div`
//   display: grid;
//   grid-gap: 16px;

//   margin-right: 1rem;
//   margin-left: 1rem;

//   @media (min-width: 720px) {
//     grid-template-columns: repeat(2, 1fr);

//     margin-right: 2em;
//     margin-left: 2rem;
//   }
// `;

const ServicesHomePage = ({ data }) => {
  const { markdownRemark: page } = data;
  return (
    <main>
      <PageHeader
        title={page.frontmatter.title}
        subtitle={page.frontmatter.subtitle}
        text={page.html}
      />
      {page.frontmatter.snippets.length > 0 && (
        <GridParent>
          {page.frontmatter.snippets.map(snippet => (
            <GridItem key={snippet.title}>
              <h2>{snippet.title}</h2>
              {snippet.bullets.map(bullet => (
                <p key={bullet.id}>{bullet.text}</p>
              ))}
              {snippet.linkText &&
                snippet.linkUrl && (
                  <p>
                    <Link to={snippet.linkUrl}>{snippet.linkText}</Link>
                  </p>
                )}
            </GridItem>
          ))}
        </GridParent>
      )}
    </main>
  );
};

export default ServicesHomePage;

export const servicesHomePageQuery = graphql`
  query ServicesHomePage {
    markdownRemark(frontmatter: { templateKey: { eq: "services-home" } }) {
      frontmatter {
        title
        subtitle
        snippets {
          title
          linkUrl
          linkText
          bullets {
            id
            text
          }
        }
      }
      html
    }
  }
`;
