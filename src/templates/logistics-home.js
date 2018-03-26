import React from "react";
import graphql from "graphql";
import PageHeader from "../components/PageHeader";
import { GridParent, GridItem } from "../components/Grid";

const LogisticsHomePage = ({ data }) => {
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
              {snippet.sections.map(section => (
                <div key={section.id}>
                  <h3>{section.heading}</h3>
                  {section.paragraphs.map(para => (
                    <p key={para.id}>{para.text}</p>
                  ))}
                </div>
              ))}
            </GridItem>
          ))}
        </GridParent>
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
