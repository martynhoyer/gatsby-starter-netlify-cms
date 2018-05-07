import React from 'react'
import Link from 'gatsby-link'
import ContactItem from '../components/ContactItem'
import styled, { css } from 'styled-components'
import media from '../tokens/breakpoints'
import { hideVisually } from 'polished'
import { ReactComponent as Logo } from '../svg/logo.svg'

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
`

const SiteNav = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media (${media.md}) {
    display: block;
    border-bottom: 1px solid ${props => props.theme.palette.greyLight};
  }
`

const StyledLink = styled(Link)`
  flex-basis: 25%;

  display: block;
  border-bottom: none;
  color: ${props => props.theme.palette.grey};

  &:hover,
  &:focus {
    background-color: ${props => props.theme.palette.greyDarker};
    color: ${props => props.theme.palette.white};
    outline: none;
  }

  @media (${media.md}) {
    border-top: 1px solid ${props => props.theme.palette.greyLight};
    color: ${props => props.theme.palette.white};
  }
`

const isLinkActive = ({ isCurrentPage }) =>
  isCurrentPage
    ? css`
        border-bottom: 0.25rem solid ${props => props.theme.palette.yellow};

        @media (${media.md}) {
          border-bottom: 0;
          border-left: 0.25rem solid ${props => props.theme.palette.yellow};
        }

        @media (${media.lg}) {
          border-left: 0.5rem solid ${props => props.theme.palette.yellow};
        }
      `
    : css`
        border-bottom: 0.25rem solid transparent;

        @media (${media.md}) {
          border-bottom: 0;
          border-left: 0.25rem solid transparent;
        }

        @media (${media.lg}) {
          border-left: 0.5rem solid transparent;
        }
      `

const LinkWrapper = styled.span`
  ${isLinkActive};

  display: block;
  padding: 1em 0;
  line-height: 1.2;
  text-align: center;

  @media (${media.md}) {
    padding: 1rem 0.5rem 1rem 0.25rem;
    text-align: left;
    color: ${props => props.theme.palette.white};
  }

  @media (${media.lg}) {
    padding: 1rem 1rem 1rem 0.5rem;
  }
`

const StyledLinkHome = StyledLink.extend`
  flex-basis: 100%;
`

const StyledLogo = styled(Logo)`
  display: block;
  width: 100%;
  max-width: 160px;
  height: auto;
  max-height: 80px;
  margin: 0 auto;

  & .concierge__i__flame {
    fill: ${props => props.theme.palette.yellow};
  }
`

const HomeText = styled.span`
  ${hideVisually};
`

const SubTitle = styled.span`
  @media (${media.xl}) {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 0.65em;
    text-transform: uppercase;
  }
`

const Concatenator = styled.span`
  ${hideVisually};
`

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
`

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
`

const Navbar = ({ navLinks = [], social = [], topLevelPath, className }) => {
  const formattedTopLevelPath = `/${topLevelPath}/`

  const isActive = (currentPage, menuItemSlug) =>
    currentPage === menuItemSlug ? true : false
  return (
    <nav className={className}>
      <Container>
        <SiteNav>
          <StyledLinkHome to="/">
            <LinkWrapper>
              <StyledLogo />
              <HomeText>Home</HomeText>
            </LinkWrapper>
          </StyledLinkHome>
          {(navLinks || navLinks.length) &&
            navLinks.map(({ node: link }) => {
              return (
                <StyledLink key={link.fields.slug} to={link.fields.slug}>
                  <LinkWrapper
                    isCurrentPage={isActive(
                      formattedTopLevelPath,
                      link.fields.slug
                    )}
                  >
                    <SubTitle>{link.frontmatter.subtitle}</SubTitle>{' '}
                    <Concatenator>or</Concatenator>{' '}
                    <Title>{link.frontmatter.title}</Title>
                  </LinkWrapper>
                </StyledLink>
              )
            })}
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
  )
}

export default Navbar
