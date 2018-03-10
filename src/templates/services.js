import React from "react";
import graphql from "graphql";
import Link from "gatsby-link";
import Content, { HTMLContent } from "../components/Content";
import SeoTitle from "../components/SeoTitle";

export const ServicesPageTemplate = ({ title, content, contentComponent }) => {
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
      <SeoTitle subtitle="services" title={page.frontmatter.title} />
      <ServicesPageTemplate
        contentComponent={HTMLContent}
        title={page.frontmatter.title}
        content={page.html}
      />
      <Link to="/services">Back to our services</Link>
    </main>
  );
};

export const servicesPageQuery = graphql`
  query ServicesPage($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      frontmatter {
        title
        path
      }
      html
    }
  }
`;
