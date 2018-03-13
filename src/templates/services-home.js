import React from "react";
import graphql from "graphql";
import Link from "gatsby-link";
import Content, { HTMLContent } from "../components/Content";
import SeoTitle from "../components/SeoTitle";
import styled from "styled-components";

const ServicesGrid = styled.div`
  display: grid;
  grid-gap: 16px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`;

export const ServicesHomePageTemplate = ({
  title,
  content,
  contentComponent
}) => {
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
      <SeoTitle
        subtitle={page.frontmatter.subtitle}
        title={page.frontmatter.title}
      />
      <ServicesHomePageTemplate
        contentComponent={HTMLContent}
        title={page.frontmatter.title}
        content={page.html}
      />
      {page.frontmatter.snippets.length && (
        <ServicesGrid>
          {page.frontmatter.snippets.map(snippet => (
            <div key={snippet.title}>
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
            </div>
          ))}
        </ServicesGrid>
      )}
    </main>
  );
};

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
