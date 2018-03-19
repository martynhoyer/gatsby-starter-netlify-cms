import React from "react";
import graphql from "graphql";
import PageHeader from "../components/PageHeader";
import ContactForm from "../components/ContactForm";
import styled from "styled-components";

import settings from "../../_data/settings.json";

export default ({ data }) => {
  const { markdownRemark: page } = data;
  return (
    <main>
      <PageHeader
        subtitle={page.frontmatter.subtitle}
        title={page.frontmatter.title}
      />
      {settings.contact.social.map(profile => (
        <a key={profile.providerName} href={profile.url}>
          <span>{profile.providerDisplayName}</span>
          <span>{profile.profileDisplayName}</span>
        </a>
      ))}
      <ContactForm />
    </main>
  );
};

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
