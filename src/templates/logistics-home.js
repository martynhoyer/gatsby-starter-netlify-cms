import React from "react";
import graphql from "graphql";
import Link from "gatsby-link";
import Content, { HTMLContent } from "../components/Content";
import SeoTitle from "../components/SeoTitle";
import styled from "styled-components";

const LogisticsGrid = styled.div`
  display: grid;
  grid-gap: 16px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`;

export const LogisticsHomePageTemplate = ({
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
      <LogisticsHomePageTemplate
        contentComponent={HTMLContent}
        title={page.frontmatter.title}
        content={page.html}
      />
      {page.frontmatter.snippets.length && (
        <LogisticsGrid>
          {page.frontmatter.snippets.map(snippet => (
            <div key={snippet.title}>
              <h2>{snippet.title}</h2>
              {snippet.sections.map(section => (
                <div key={section.id}>
                  <h3>{section.heading}</h3>
                  {section.paragraphs.map(para => (
                    <p key={para.id}>{para.text}</p>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </LogisticsGrid>
      )}
    </main>
  );
};

export const logisticsHomePageQuery = graphql`
  query LogisticsHomePage {
    markdownRemark(frontmatter: { templateKey: { eq: "logistics-home" } }) {
      frontmatter {
        title
        path
        subtitle
        snippets {
          title
          sections {
            id
            heading
            paragraphs {
              id
              text
            }
          }
        }
      }
      html
    }
  }
`;
