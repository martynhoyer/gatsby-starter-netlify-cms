import React from "react";
import graphql from "graphql";
import PageHeader from "../components/PageHeader";
import Person from "../components/Person";
import { GridParent, GridItem } from "../components/Grid";
import styled from "styled-components";
import media from "../tokens/breakpoints";
import { headingLevel3 } from "../tokens/typography";

const PeopleGridParent = styled(GridParent)``;

const PeopleGridItem = styled(GridItem)`
  padding-top: 0;
`;

const WhyUs = styled.div`
  padding-top: 4rem;
  padding-right: 1rem;
  padding-bottom: 4rem;
  padding-left: 1rem;
  background-color: ${props => props.theme.palette.greyLightest};

  @media (${media.md}) {
    padding-right: 12.5%;
    padding-left: 4rem;
  }

  @media (${media.xl}) {
    padding-right: 30%;
  }

  @media (${media.x2}) {
    padding-right: 40%;
  }
`;

const WhyUsTitle = styled.h2`
  ${headingLevel3};

  &:first-child {
    margin-top: 0;
  }
`;

const Origin = styled.div`
  padding-top: 4rem;
  padding-right: 1rem;
  padding-bottom: 4rem;
  padding-left: 1rem;

  @media (${media.md}) {
    padding-right: 12.5%;
    padding-left: 4rem;
  }

  @media (${media.xl}) {
    padding-right: 30%;
  }

  @media (${media.x2}) {
    padding-right: 40%;
  }

  & > h2 {
    ${headingLevel3};

    &:first-child {
      margin-top: 0;
    }
  }
`;

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

const AboutPage = ({ data }) => {
  const { markdownRemark: page } = data;
  const images = data.allImageSharp.edges;
  return (
    <main>
      <PageHeader
        title={page.frontmatter.title}
        subtitle={page.frontmatter.subtitle}
      />
      {page.frontmatter.people.length > 0 && (
        <PeopleGridParent>
          {page.frontmatter.people.map(person => {
            let img = findNode(images, person.image);
            return (
              <PeopleGridItem key={person.name}>
                <Person img={img} person={person} />
              </PeopleGridItem>
            );
          })}
        </PeopleGridParent>
      )}
      <WhyUs>
        <WhyUsTitle>{page.frontmatter.whyus.title}</WhyUsTitle>
        <ul>
          {page.frontmatter.whyus.reasons.map(reason => (
            <li key={reason.id}>{reason.text}</li>
          ))}
        </ul>
      </WhyUs>
      <Origin dangerouslySetInnerHTML={{ __html: page.html }} />
    </main>
  );
};

export default AboutPage;

export const aboutPageQuery = graphql`
  query AboutPage {
    markdownRemark(frontmatter: { templateKey: { eq: "about-page" } }) {
      frontmatter {
        title
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
