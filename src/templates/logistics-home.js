import React from "react";
import graphql from "graphql";
import Link from "gatsby-link";
import Content, { HTMLContent } from "../components/Content";

export const LogisticsHomePageTemplate = ({
  title,
  content,
  contentComponent
}) => {
  const PageContent = contentComponent || Content;

  return (
    <div>
      <h1>{title}</h1>
      <PageContent className="content" content={content} />
    </div>
  );
};

export default ({ data }) => {
  const { markdownRemark: page } = data;
  return (
    <div>
      <LogisticsHomePageTemplate
        contentComponent={HTMLContent}
        title={page.frontmatter.title}
        content={page.html}
      />
      {page.frontmatter.snippets.map(snippet => (
        <div key={snippet.title}>
          <h2>{snippet.title}</h2>
          {snippet.sections.map(section => (
            <div key={section.id}>
              <h3>{section.heading}</h3>
              {section.paragraphs.map(para => <p key={para.id}>{para.text}</p>)}
            </div>
          ))}
        </div>
      ))}
    </div>
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
