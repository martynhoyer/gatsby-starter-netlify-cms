import React from "react";
import graphql from "graphql";
import Img from "gatsby-image";
import Content, { HTMLContent } from "../components/Content";
import SeoTitle from "../components/SeoTitle";

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
    let oName = `/img/${images[index].node.sizes.originalName}`;
    if (oName === `${key}`) {
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
      {page.frontmatter.people.map(person => {
        let img = findNode(images, person.image);
        return (
          <div key={person.name}>
            <Img sizes={img.sizes} />
            <h2>{person.name}</h2>
            <h3>{person.jobtitle}</h3>
            {person.paragraphs.map(para => <p key={para.id}>{para.text}</p>)}
          </div>
        );
      })}
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
