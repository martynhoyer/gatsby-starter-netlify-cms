import React from "react";
import Link from "gatsby-link";

const Footer = ({
  legalLinks = [],
  fullCompanyName,
  companyNumber,
  vatNumber
}) => {
  return (
    <footer>
      <div>
        {fullCompanyName && (
          <p>
            &copy; {new Date().getFullYear()} {fullCompanyName}
          </p>
        )}
        {companyNumber && <p>Company number: {companyNumber}</p>}
        {vatNumber && <p>VAT number: {vatNumber}</p>}
      </div>
      {(legalLinks || legalLinks.length) && (
        <div>
          {legalLinks.map(({ node: link }) => (
            <div key={link.fields.slug}>
              <Link to={link.fields.slug}>{link.frontmatter.title}</Link>
            </div>
          ))}
        </div>
      )}
    </footer>
  );
};

export default Footer;
