import React from "react";
import Link from "gatsby-link";
import styled from "styled-components";
import ContactItem from "../components/ContactItem";

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
  vatNumber,
  social = []
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
      {legalLinks.length > 0 && (
        <div>
          {legalLinks.map(({ node: link }) => (
            <div key={link.fields.slug}>
              <Link to={link.fields.slug}>{link.frontmatter.title}</Link>
            </div>
          ))}
        </div>
      )}
      {social.length > 0 && (
        <dl>
          {social.map(profile => (
            <ContactItem key={profile.providerName} {...profile} iconOnly />
          ))}
        </dl>
      )}
    </StyledFooter>
  );
};

export default Footer;
