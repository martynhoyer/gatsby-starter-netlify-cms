import React from 'react'
import graphql from 'graphql'
import Link from 'gatsby-link'
import { Main } from '../components/Main'
import PageHeader from '../components/PageHeader'
import styled from 'styled-components'
import { GridParent, GridItem } from '../components/Grid'

const StyledGridItem = styled(GridItem)`
  flex-basis: 75%;

  max-width: 60ch;
  padding-top: 1rem;
`

const StyledLink = styled(Link)`
  display: inline-block;
  margin-top: 1em;
`

const ServicesPage = ({ data }) => {
  const { markdownRemark: page } = data
  return (
    <Main>
      <PageHeader
        title={page.frontmatter.title}
        subtitle={page.frontmatter.subtitle}
        intro={page.frontmatter.intro}
      />
      <GridParent>
        <StyledGridItem>
          <div dangerouslySetInnerHTML={{ __html: page.html }} />
          <StyledLink to="/services">&larr; Back to our services</StyledLink>
        </StyledGridItem>
      </GridParent>
    </Main>
  )
}

export default ServicesPage

export const servicesPageQuery = graphql`
  query ServicesPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        intro
      }
      html
    }
  }
`
