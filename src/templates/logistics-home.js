import React from 'react'
import graphql from 'graphql'
import Link from 'gatsby-link'
import Content, { HTMLContent } from '../components/Content'

export const LogisticsHomePageTemplate = ({
  title,
  content,
  contentComponent,
}) => {
  const PageContent = contentComponent || Content

  return (
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                {title}
              </h2>
              <PageContent className="content" content={content} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ({ data }) => {
  const { markdownRemark: page } = data
  return (
    <div>
      <LogisticsHomePageTemplate
        contentComponent={HTMLContent}
        title={page.frontmatter.title}
        content={page.html}
      />
      {page.frontmatter.snippets.map(snippet => (
        <div key={snippet.title}>
          <h2>{snippet.title}</h2>
          {snippet.sections.map(section => (
            <div key={section.id}>
              <h3>{section.heading}</h3>
              {section.paragraphs.map(para => <p key={para.id}>{para.text}</p>)}
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

export const logisticsHomePageQuery = graphql`
  query LogisticsHomePage {
    markdownRemark(frontmatter: { templateKey: { eq: "logistics-home" } }) {
      frontmatter {
        title
        path
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
