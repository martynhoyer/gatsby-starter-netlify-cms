import React from "react";
import graphql from "graphql";
import Content, { HTMLContent } from "../components/Content";
import SeoTitle from "../components/SeoTitle";
import Person from "../components/Person";
import styled from "styled-components";

const PeopleGrid = styled.div`
  display: grid;
  grid-gap: 16px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`;

export const AboutPageTemplate = ({ content, contentComponent }) => {
  const PageContent = contentComponent || Content;

  return (
    <div>
      <PageContent className="content" content={content} />
    </div>
  );
};

function findNode(images, key) {
  let l = "";
  images.forEach((el, index) => {
    let originalName = `/img/${images[index].node.sizes.originalName}`;
    if (originalName === `${key}`) {
      l = images[index].node;
    }
  });

  return l;
}

export default ({ data }) => {
  const { markdownRemark: page } = data;
  const images = data.allImageSharp.edges;
  return (
    <main>
      <SeoTitle
        subtitle={page.frontmatter.subtitle}
        title={page.frontmatter.title}
      />
      {page.frontmatter.people.length && (
        <PeopleGrid>
          {page.frontmatter.people.map(person => {
            let img = findNode(images, person.image);
            return <Person key={person.name} img={img} person={person} />;
          })}
        </PeopleGrid>
      )}
      <div>
        <h2>{page.frontmatter.whyus.title}</h2>
        <ul>
          {page.frontmatter.whyus.reasons.map(reason => (
            <li key={reason.id}>{reason.text}</li>
          ))}
        </ul>
      </div>
      <AboutPageTemplate contentComponent={HTMLContent} content={page.html} />
    </main>
  );
};

export const aboutPageQuery = graphql`
  query AboutPage {
    markdownRemark(frontmatter: { templateKey: { eq: "about-page" } }) {
      frontmatter {
        title
        path
        subtitle
        people {
          image
          jobtitle
          name
          paragraphs {
            id
            text
          }
        }
        whyus {
          title
          reasons {
            id
            text
          }
        }
      }
      html
    }
    allImageSharp {
      edges {
        node {
          id
          sizes(maxWidth: 560) {
            base64
            aspectRatio
            src
            srcSet
            srcWebp
            srcSetWebp
            sizes
            originalName
          }
        }
      }
    }
  }
`;
