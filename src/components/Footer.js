import React from "react";
import Link from "gatsby-link";
import styled from "styled-components";

const StyledFooter = styled.footer`
  display: flex;
  background-color: #424242;
  color: #f1f1f1;

  & a {
    color: #f1f1f1;
  }
`;

const Footer = ({
  legalLinks = [],
  fullCompanyName,
  companyNumber,
  vatNumber
}) => {
  return (
    <StyledFooter>
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
    </StyledFooter>
  );
};

export default Footer;
