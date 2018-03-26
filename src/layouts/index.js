import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import graphql from "graphql";

import settings from "../../_data/settings.json";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styled, { injectGlobal, ThemeProvider } from "styled-components";
import media from "../tokens/breakpoints";
import CC from "../tokens/colours";

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

const Layout = styled.div`
  display: flex;
  flex-direction: column;

  position: relative;
  min-height: 100vh;
  font-family: "Philosopher", -apple-system, BlinkMacSystemFont, "Segoe UI",
    "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
    "Helvetica Neue", sans-serif;
  font-size: 16px;
  line-height: 1.618;
  background-color: var(--cc-white);
  color: var(--cc-grey);

  @media (${media.md}) {
    flex-direction: row;
    font-size: 18px;
  }
`;

const StyledNavbar = styled(Navbar)`
  background-color: var(--cc-white);

  @media (${media.md}) {
    flex-basis: 15%;

    width: 15%;
  }
`;

const MainWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;

  @media (${media.md}) {
    flex-basis: 85%;

    width: 85%;
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
    <ThemeProvider theme={CC}>
      <Layout>
        <Helmet title={siteTitle}>
          <html lang="en" />
          <meta name="description" content={siteDescription} />
        </Helmet>
        <StyledNavbar navLinks={navLinks} social={settings.contact.social} />
        <MainWrapper>
          {children()}
          <Footer
            legalLinks={legalLinks}
            {...footerSettings}
            social={settings.contact.social}
          />
        </MainWrapper>
      </Layout>
    </ThemeProvider>
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
