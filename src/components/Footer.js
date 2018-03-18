import React from "react";
import Link from "gatsby-link";

const Footer = ({ legalLinks = [] }) => {
  return (
    <footer>
      <div>
        <p>&copy; {new Date().getFullYear()} Corse Concierge Ltd</p>
        <p>Company number: 10447192</p>
        <p>VAT number: GB259 2102 16</p>
      </div>
      {(legalLinks || legalLinks.length) && (
        <div>
          {legalLinks.map(({ node: link }) => (
            <div key={link.frontmatter.slug}>
              <Link to={link.frontmatter.slug}>{link.frontmatter.title}</Link>
            </div>
          ))}
        </div>
      )}
    </footer>
  );
};

export default Footer;
