import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";

import Navbar from "../components/Navbar";
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

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="Home | Gatsby + Netlify CMS">
      <html lang="en" />
      <meta
        name="description"
        content="Commercial support for fast-moving motorsport and technology companies."
      />
    </Helmet>
    <Navbar />
    <div>{children()}</div>
    <p>&copy; {new Date().getFullYear()} Corse Concierge Ltd</p>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
