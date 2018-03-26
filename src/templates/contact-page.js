import React from "react";
import graphql from "graphql";
import PageHeader from "../components/PageHeader";
import ContactForm from "../components/ContactForm";
import ContactItem from "../components/ContactItem";
import AddressBlock from "../components/AddressBlock";
import settings from "../../_data/settings.json";
import styled from "styled-components";
import { GridParent, GridItem } from "../components/Grid";

const ContactItemsList = styled.dl``;

const ContactPage = ({ data }) => {
  const { markdownRemark: page } = data;
  return (
    <main>
      <PageHeader
        subtitle={page.frontmatter.subtitle}
        title={page.frontmatter.title}
      />
      <GridParent>
        <GridItem>
          <h2>Talk to us</h2>
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
        <GridItem>
          <h2>Leave a message</h2>
          <ContactForm />
        </GridItem>
        <GridItem>
          <h2>Registered office address</h2>
          <AddressBlock {...settings.contact.address} />
          <p>Company number: {settings.contact.companyNumber}</p>
          <p>VAT number: {settings.contact.vatNumber}</p>
        </GridItem>
      </GridParent>
    </main>
  );
};

export default ContactPage;

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
`;
