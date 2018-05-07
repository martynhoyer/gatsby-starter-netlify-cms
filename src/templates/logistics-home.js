import React from 'react'
import graphql from 'graphql'
import PageHeader from '../components/PageHeader'
import { GridParent, GridItem } from '../components/Grid'
import styled from 'styled-components'
import { Main } from '../components/Main'
import { headingLevel3, headingLevel2 } from '../tokens/typography'
import media from '../tokens/breakpoints'

const Title = styled.h2`
  ${headingLevel2};

  @media (${media.xl}) {
    margin: -2rem -2rem 0;
    padding: 1rem 2rem;
    background-color: ${props => props.theme.palette.yellow};
  }
`

const SubTitle = styled.h2`
  ${headingLevel3};
`

const LogisticsHomePage = ({ data }) => {
  const { markdownRemark: page } = data
  return (
    <Main>
      <PageHeader
        title={page.frontmatter.title}
        subtitle={page.frontmatter.subtitle}
        text={page.html}
      />
      {page.frontmatter.snippets.length > 0 && (
        <GridParent>
          {page.frontmatter.snippets.map(snippet => (
            <GridItem stripy key={snippet.title}>
              <Title>{snippet.title}</Title>
              {snippet.sections.map(section => (
                <div key={section.id}>
                  <SubTitle>{section.heading}</SubTitle>
                  {section.paragraphs.map(para => (
                    <p key={para.id}>{para.text}</p>
                  ))}
                </div>
              ))}
            </GridItem>
          ))}
        </GridParent>
      )}
    </Main>
  )
}

export default LogisticsHomePage

export const logisticsHomePageQuery = graphql`
  query LogisticsHomePage {
    markdownRemark(frontmatter: { templateKey: { eq: "logistics-home" } }) {
      frontmatter {
        title
        subtitle
        snippets {
          title
          sections {
            id
            heading
            paragraphs {
              id
              text
            }
          }
        }
      }
      html
    }
  }
`
