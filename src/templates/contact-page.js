import React from "react";
import graphql from "graphql";
import Content, { HTMLContent } from "../components/Content";
import PageHeader from "../components/PageHeader";
import ContactForm from "../components/ContactForm";
import styled from "styled-components";

export default ({ data }) => {
  const { markdownRemark: page } = data;
  return (
    <main>
      <PageHeader
        subtitle={page.frontmatter.subtitle}
        title={page.frontmatter.title}
      />
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
