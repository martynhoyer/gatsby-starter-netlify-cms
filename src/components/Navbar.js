import React from "react";
import Link from "gatsby-link";
import ContactItem from "../components/ContactItem";
import styled from "styled-components";
import media from "../tokens/breakpoints";
import { hideVisually } from "polished";

const Container = styled.div`
  @media (${media.md}) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    position: fixed;
    width: 15%;
    height: 100%;
    padding-bottom: 1rem;
    overflow-y: auto;
    overflow-x: visible;
    background-color: ${props => props.theme.palette.grey};
    color: ${props => props.theme.palette.white};
  }

  @media (${media.xl}) {
    padding-bottom: 1.4rem;
  }
`;

const SiteNav = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media (${media.md}) {
    display: block;
    border-bottom: 1px solid ${props => props.theme.palette.greyLight};
  }
`;

const StyledLink = styled(Link)`
  flex-basis: 25%;

  display: block;
  padding: 1em 0;
  border-bottom: none;
  line-height: 1.2;
  text-align: center;
  color: ${props => props.theme.palette.grey};

  &:hover,
  &:focus {
    background-color: ${props => props.theme.palette.greyDarker};
    color: ${props => props.theme.palette.white};
    outline: none;
  }

  @media (${media.md}) {
    padding: 1rem 0.5rem;
    border-top: 1px solid ${props => props.theme.palette.greyLight};
    text-align: left;
    color: ${props => props.theme.palette.white};
  }

  @media (${media.lg}) {
    padding: 1rem;
  }

  @media (${media.xl}) {
    padding: 1rem;
  }
`;

const StyledLinkHome = StyledLink.extend`
  flex-basis: 100%;

  padding: 0.5em 20%;

  @media (${media.md}) {
    padding: 1rem 0.5rem;
  }

  @media (${media.lg}) {
    padding: 1rem;
  }

  @media (${media.xl}) {
    padding: 1rem;
  }
`;

const SubTitle = styled.span`
  @media (${media.xl}) {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 0.65em;
    text-transform: uppercase;
  }
`;

const Concatenator = styled.span`
  ${hideVisually};
`;

const Title = styled.span`
  ${hideVisually};

  @media (${media.xl}) {
    position: inherit;
    display: block;
    width: inherit;
    height: inherit;
    margin: inherit;
    overflow: inherit;
    clip: inherit;
    clip-path: inherit;
    white-space: inherit;
  }
`;

const ContactItemsList = styled.dl`
  display: none;

  @media (${media.md}) {
    display: flex;
    flex-shrink: 0;
    justify-content: center;
    flex-direction: column;

    position: static;
    margin: 0;
    padding-right: 0;
    padding-left: 0;
  }

  @media (${media.lg}) {
    flex-direction: row;
    justify-content: space-around;
  }
`;

const Navbar = ({ navLinks = [], social = [], className }) => (
  <nav className={className}>
    <Container>
      <SiteNav>
        <StyledLinkHome to="/">Home</StyledLinkHome>
        {(navLinks || navLinks.length) &&
          navLinks.map(({ node: link }) => (
            <StyledLink key={link.fields.slug} to={link.fields.slug}>
              <SubTitle>{link.frontmatter.subtitle}</SubTitle>{" "}
              <Concatenator>or</Concatenator>{" "}
              <Title>{link.frontmatter.title}</Title>
            </StyledLink>
          ))}
      </SiteNav>
      {social.length > 0 && (
        <ContactItemsList>
          {social.map(profile => (
            <ContactItem key={profile.providerName} {...profile} iconOnly />
          ))}
        </ContactItemsList>
      )}
    </Container>
  </nav>
);

export default Navbar;
