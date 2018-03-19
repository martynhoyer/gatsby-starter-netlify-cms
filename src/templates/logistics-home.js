import React from "react";
import graphql from "graphql";
import PageHeader from "../components/PageHeader";
import styled from "styled-components";

const LogisticsGrid = styled.div`
  display: grid;
  grid-gap: 16px;
  grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));

  margin-right: 1rem;
  margin-left: 1rem;

  @media (min-width: 720px) {
    margin-right: 2em;
    margin-left: 2rem;
  }
`;

const LogisticsHomePage = ({ data }) => {
  const { markdownRemark: page } = data;
  return (
    <main>
      <PageHeader
        title={page.frontmatter.title}
        subtitle={page.frontmatter.subtitle}
        text={page.html}
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

export default LogisticsHomePage;

export const logisticsHomePageQuery = graphql`
  query LogisticsHomePage {
    markdownRemark(frontmatter: { templateKey: { eq: "logistics-home" } }) {
      frontmatter {
        title
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
