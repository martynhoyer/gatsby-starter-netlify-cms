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

  svg {
    fill: currentColor;
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
  const { edges: legalLinks } = data.legalLinks;
  const { edges: navLinks } = data.navData;

  return (
    <div>
      <Helmet title={siteTitle}>
        <html lang="en" />
        <meta name="description" content={siteDescription} />
      </Helmet>
      <Navbar navLinks={navLinks} social={settings.contact.social} />
      <div>{children()}</div>
      <Footer
        legalLinks={legalLinks}
        {...footerSettings}
        social={settings.contact.social}
      />
    </div>
  );
};

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;

export const templateDataQuery = graphql`
  query templateData {
    legalLinks: allMarkdownRemark(
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
    navData: allMarkdownRemark(
      filter: { frontmatter: { mainNav: { eq: true } } }
    ) {
      edges {
        node {
          frontmatter {
            title
            subtitle
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;
