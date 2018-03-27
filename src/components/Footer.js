import React from "react";
import Link from "gatsby-link";
import styled from "styled-components";
import ContactItem from "../components/ContactItem";
import media from "../tokens/breakpoints";

const StyledFooter = styled.footer`
  padding: 0 1rem 1rem;
  text-align: center;
  background-color: ${props => props.theme.palette.greyDarkest};
  color: ${props => props.theme.palette.greyLightest};

  @media (${media.md}) {
    padding: 0 4rem;
    font-size: 0.9em;
    text-align: left;
  }

  @media (${media.xl}) {
    display: flex;

    padding: 0 2rem;
  }

  .page-home & {
    background-color: #000;
  }
`;

const FooterItem = styled.div`
  padding: 1rem 0;

  @media (${media.md}) {
    padding: 1.2rem 0;
  }

  @media (${media.xl}) {
    align-self: flex-end;
    flex-basis: calc(100% / 2);

    padding: 1.6rem 2rem;
  }
`;

const FooterList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

const FooterListItem = styled.li``;

const StyledLink = styled(Link)`
  color: ${props => props.theme.palette.white};
`;

const CompanyNumber = styled.p`
  margin: 0;
`;

const VatNumber = styled.p`
  margin: 0;
`;

const FooterSocial = styled.dl`
  display: flex;
  justify-content: center;

  @media (${media.md}) {
    display: none;
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
      <FooterItem>
        {fullCompanyName && (
          <p>
            &copy; {new Date().getFullYear()} {fullCompanyName}
          </p>
        )}
        {companyNumber && (
          <CompanyNumber>Company number: {companyNumber}</CompanyNumber>
        )}
        {vatNumber && <VatNumber>VAT number: {vatNumber}</VatNumber>}
      </FooterItem>
      {legalLinks.length > 0 && (
        <FooterItem>
          <FooterList>
            {legalLinks.map(({ node: link }) => (
              <FooterListItem key={link.fields.slug}>
                <StyledLink to={link.fields.slug}>
                  {link.frontmatter.title}
                </StyledLink>
              </FooterListItem>
            ))}
          </FooterList>
        </FooterItem>
      )}
      {social.length > 0 && (
        <FooterSocial>
          {social.map(profile => (
            <ContactItem key={profile.providerName} {...profile} iconOnly />
          ))}
        </FooterSocial>
      )}
    </StyledFooter>
  );
};

export default Footer;
