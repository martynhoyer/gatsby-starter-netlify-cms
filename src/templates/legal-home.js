import React from 'react'
import graphql from 'graphql'
import Link from 'gatsby-link'
import PageHeader from '../components/PageHeader'
import styled from 'styled-components'
import { Main } from '../components/Main'
import { GridParent, GridItem } from '../components/Grid'
import { headingLevel3 } from '../tokens/typography'

const StyledGridItem = styled(GridItem)`
  flex-basis: 75%;

  max-width: 60ch;
  padding-top: 1rem;
`

const Content = styled.div`
  & > h2 {
    ${headingLevel3};
  }
`

const LegalHomePage = ({ data }) => {
  const { markdownRemark: page } = data
  const { edges: childPages } = data.allMarkdownRemark

  return (
    <Main>
      <PageHeader title={page.frontmatter.title} />
      <GridParent>
        <StyledGridItem>
          {page.html && (
            <Content dangerouslySetInnerHTML={{ __html: page.html }} />
          )}
          <ul>
            {childPages.map(({ node: page }) => (
              <li key={page.fields.slug}>
                <Link to={page.fields.slug}>{page.frontmatter.title}</Link>
              </li>
            ))}
          </ul>
        </StyledGridItem>
      </GridParent>
    </Main>
  )
}

export default LegalHomePage

export const legalHomePageQuery = graphql`
  query LegalHomePage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
      }
      html
    }
    allMarkdownRemark(
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
  }
`
