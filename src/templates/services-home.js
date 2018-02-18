import React from "react";
import graphql from "graphql";
import Link from "gatsby-link";
import Content, { HTMLContent } from "../components/Content";

export const ServicesHomePageTemplate = ({
  title,
  content,
  contentComponent
}) => {
  const PageContent = contentComponent || Content;

  return (
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                {title}
              </h2>
              <PageContent className="content" content={content} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ({ data }) => {
  const { markdownRemark: page } = data;
  return (
    <div>
      <ServicesHomePageTemplate
        contentComponent={HTMLContent}
        title={page.frontmatter.title}
        content={page.html}
      />
      {page.frontmatter.snippets.map(snippet => (
        <div key={snippet.title}>
          <h2>{snippet.title}</h2>
          {snippet.bullets.map(bullet => <p key={bullet.id}>{bullet.text}</p>)}
          {snippet.linkText &&
            snippet.linkUrl && (
              <p>
                <Link to={snippet.linkUrl}>{snippet.linkText}</Link>
              </p>
            )}
        </div>
      ))}
    </div>
  );
};

export const servicesHomePageQuery = graphql`
  query ServicesHomePage {
    markdownRemark(frontmatter: { templateKey: { eq: "services-home" } }) {
      frontmatter {
        title
        path
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
