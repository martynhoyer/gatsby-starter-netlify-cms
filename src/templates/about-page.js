import React from "react";
import graphql from "graphql";
import Content, { HTMLContent } from "../components/Content";

export const AboutPageTemplate = ({ title, content, contentComponent }) => {
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
      {page.frontmatter.people.map(person => (
        <div key={person.name}>
          <h2>{person.name}</h2>
          <h3>{person.jobtitle}</h3>
          {person.paragraphs.map(para => <p key={para.id}>{para.text}</p>)}
        </div>
      ))}
      <div>
        <h2>{page.frontmatter.whyus.title}</h2>
        <ul>
          {page.frontmatter.whyus.reasons.map(reason => (
            <li key={reason.id}>{reason.text}</li>
          ))}
        </ul>
      </div>
      <AboutPageTemplate
        contentComponent={HTMLContent}
        title={page.frontmatter.title}
        content={page.html}
      />
    </div>
  );
};

export const aboutPageQuery = graphql`
  query AboutPage {
    markdownRemark(frontmatter: { templateKey: { eq: "about-page" } }) {
      frontmatter {
        title
        path
        subtitle
        people {
          image
          jobtitle
          name
          paragraphs {
            id
            text
          }
        }
        whyus {
          title
          reasons {
            id
            text
          }
        }
      }
      html
    }
  }
`;
