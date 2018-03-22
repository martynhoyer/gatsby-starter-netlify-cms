import React from "react";
import Link from "gatsby-link";
import Script from "react-load-script";
import graphql from "graphql";

export default class IndexPage extends React.Component {
  handleScriptLoad() {
    if (typeof window !== `undefined` && window.netlifyIdentity) {
      window.netlifyIdentity.on("init", user => {
        if (!user) {
          window.netlifyIdentity.on("login", () => {
            document.location.href = "/admin/";
          });
        }
      });
    }
    window.netlifyIdentity.init();
  }

  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    return (
      <section>
        <Script
          url="https://identity.netlify.com/v1/netlify-identity-widget.js"
          onLoad={() => this.handleScriptLoad()}
        />
        {posts
          .filter(post => post.node.frontmatter.templateKey === "blog-post")
          .map(({ node: post }) => (
            <div key={post.id}>
              <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>
              <small>{post.frontmatter.date}</small>
              {post.excerpt}
              <Link to={post.frontmatter.path}>Keep Reading →</Link>
            </div>
          ))}
      </section>
    );
  }
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          frontmatter {
            title
            templateKey
          }
        }
      }
    }
  }
`;
