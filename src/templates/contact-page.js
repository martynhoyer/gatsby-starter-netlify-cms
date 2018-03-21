import React from "react";
import graphql from "graphql";
import PageHeader from "../components/PageHeader";
import ContactForm from "../components/ContactForm";
import ContactItem from "../components/ContactItem";
import AddressBlock from "../components/AddressBlock";
import settings from "../../_data/settings.json";

const ContactPage = ({ data }) => {
  const { markdownRemark: page } = data;
  return (
    <main>
      <PageHeader
        subtitle={page.frontmatter.subtitle}
        title={page.frontmatter.title}
      />
      <h2>Talk to us</h2>
      <ContactItem
        providerName={`email`}
        url={`mailto:${settings.contact.email}`}
        providerDisplayName={`Email`}
        profileDisplayName={settings.contact.email}
      />
      {settings.contact.social.map(profile => (
        <ContactItem key={profile.providerName} {...profile} />
      ))}
      <h2>Leave a message</h2>
      <ContactForm />
      <h2>Registered office address</h2>
      <AddressBlock {...settings.contact.address} />
      <p>Company number: {settings.contact.companyNumber}</p>
      <p>VAT number: {settings.contact.vatNumber}</p>
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
