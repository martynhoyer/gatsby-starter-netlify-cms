import React from 'react'
import graphql from 'graphql'
import PageHeader from '../components/PageHeader'
import ContactForm from '../components/FormikContactForm'
import ContactItem from '../components/ContactItem'
import AddressBlock from '../components/AddressBlock'
import settings from '../../_data/settings.json'
import styled from 'styled-components'
import { Main } from '../components/Main'
import { GridParent, GridItem } from '../components/Grid'
import { headingLevel3 } from '../tokens/typography'

const ContactItemsList = styled.dl`
  position: relative;
  padding-left: 2em;
  font-size: 1.35em;
`

const Title = styled.h2`
  ${headingLevel3};

  &:first-child {
    margin-top: 0;
  }
`

const StyledAddressBlock = styled(AddressBlock)`
  margin-top: 1em;
  font-style: normal;
`

const ContactPage = ({ data }) => {
  const { markdownRemark: page } = data
  return (
    <Main>
      <PageHeader
        subtitle={page.frontmatter.subtitle}
        title={page.frontmatter.title}
      />
      <GridParent>
        <GridItem stripy>
          <Title>Talk to us</Title>
          <ContactItemsList>
            <ContactItem
              providerName={`email`}
              url={`mailto:${settings.contact.email}`}
              providerDisplayName={`Email`}
              profileDisplayName={settings.contact.email}
            />
            {settings.contact.social.map(profile => (
              <ContactItem key={profile.providerName} {...profile} />
            ))}
          </ContactItemsList>
        </GridItem>
        <GridItem stripy>
          <Title>Leave a message</Title>
          <ContactForm />
        </GridItem>
        <GridItem stripy>
          <Title>Registered office address</Title>
          <StyledAddressBlock {...settings.contact.address} />
          <p>Company number: {settings.contact.companyNumber}</p>
          <p>VAT number: {settings.contact.vatNumber}</p>
        </GridItem>
      </GridParent>
    </Main>
  )
}

export default ContactPage

export const contactPageQuery = graphql`
  query ContactPage {
    markdownRemark(frontmatter: { templateKey: { eq: "contact-page" } }) {
      frontmatter {
        title
        subtitle
      }
      html
    }
  }
`
