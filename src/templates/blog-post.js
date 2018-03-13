import React from "react";
import graphql from "graphql";
import Helmet from "react-helmet";
import Content, { HTMLContent } from "../components/Content";

export const BlogPostTemplate = ({
  content,
  contentComponent,
  description,
  title,
  helmet
}) => {
  const PostContent = contentComponent || Content;

  return (
    <section className="section">
      {helmet || ""}
      <h1>{title}</h1>
      <p>{description}</p>
      <PostContent content={content} />
    </section>
  );
};

export default ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <BlogPostTemplate
      content={post.html}
      contentComponent={HTMLContent}
      description={post.frontmatter.description}
      helmet={<Helmet title={`Blog | ${post.frontmatter.title}`} />}
      title={post.frontmatter.title}
    />
  );
};

export const pageQuery = graphql`
  query BlogPostById($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
