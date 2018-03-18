import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { injectGlobal } from "styled-components";

injectGlobal`
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  html {
    box-sizing: border-box;
  }

  body {
    margin: 0;
  }
`;

const TemplateWrapper = ({ children, data }) => {
  const { edges: legalLinks } = data.allMarkdownRemark;
  return (
    <div>
      <Helmet title="Corse Concierge">
        <html lang="en" />
        <meta
          name="description"
          content="Commercial support for fast-moving motorsport and technology companies."
        />
      </Helmet>
      <Navbar />
      <div>{children()}</div>
      <Footer legalLinks={legalLinks} />
    </div>
  );
};

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;

export const templateDataQuery = graphql`
  query TemplateData {
    allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "legal" } } }
    ) {
      edges {
        node {
          frontmatter {
            title
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;
