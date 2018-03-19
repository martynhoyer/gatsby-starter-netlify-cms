import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import graphql from "graphql";

import settings from "../../_data/settings.json";
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
    font-size: 18px;
  }

  body {
    margin: 0;
  }
`;

const { siteTitle, seo, contact } = settings;
const { siteDescription } = seo;
const { fullCompanyName, companyNumber, vatNumber } = contact;
const footerSettings = {
  fullCompanyName,
  companyNumber,
  vatNumber
};

const TemplateWrapper = ({ children, data }) => {
  const { edges: legalLinks } = data.allMarkdownRemark;
  return (
    <div>
      <Helmet title={siteTitle}>
        <html lang="en" />
        <meta name="description" content={siteDescription} />
      </Helmet>
      <Navbar />
      <div>{children()}</div>
      <Footer legalLinks={legalLinks} {...footerSettings} />
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
