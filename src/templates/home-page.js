import React, { Fragment } from "react";
import Link from "gatsby-link";
import Script from "react-load-script";
import graphql from "graphql";
import Img from "gatsby-image";
import styled from "styled-components";
import { Main } from "../components/Main";
import { transparentize } from "polished";

const StyledImg = styled(Img)`
  & > img {
    object-position: 50% 100% !important;
  }

  &::before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    outline: 2px solid red;
    background-image: linear-gradient(
        to bottom,
        transparent 0%,
        ${props => transparentize(0.9, props.theme.palette.black)} 90%,
        ${props => props.theme.palette.black} 100%
      ),
      url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCI+CiAgICA8ZyBmaWxsPSJyZ2JhKDExMCw2NCwxNDEsLjI1KSI+CiAgICAgICAgPHJlY3Qgd2lkdGg9IjI1IiBoZWlnaHQ9IjI1IiAvPgogICAgICAgIDxyZWN0IHg9IjI1IiB5PSIyNSIgd2lkdGg9IjI1IiBoZWlnaHQ9IjI1IiAvPgogICAgPC9nPgo8L3N2Zz4=");
    background-size: cover, 4px;
    background-repeat: no-repeat, repeat;
    background-position: 0 0, 0 0;
    z-index: 1;
  }
`;

const Intro = styled.div`
  position: relative;
  max-width: 60ch;
  margin: 1rem;
  padding: 2rem;
  text-shadow: 0 0 1em ${props => props.theme.palette.purple};
  background-color: ${props => transparentize(0.5, props.theme.palette.purple)};
  color: ${props => props.theme.palette.white};
  z-index: 1;
`;

const Definitions = styled.dl`
  margin: 0;
`;

const DefinitionTitle = styled.dt`
  margin-top: 0.5em;
  font-size: 1.4em;

  &:first-child {
    margin-top: 0;
  }
`;

const Pronunciation = styled.small`
  display: inline-block;
  font-size: 0.6em;
`;

const DefinitionDescription = styled.dd`
  margin: 0;
  padding: 0;
`;

const PageTitle = styled.h1`
  font-size: 2em;
  color: ${props => props.theme.palette.yellow};
`;

const Links = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledLink = styled(Link)`
  display: inline-block;
  margin-top: 1em;
  color: ${props => props.theme.palette.white};
`;

export default class IndexPage extends React.Component {
  handleScriptLoad() {
    if (typeof window !== `undefined` && window.netlifyIdentity) {
      window.netlifyIdentity.on("init", user => {
        if (!user) {
          window.netlifyIdentity.on("login", () => {
            document.location.href = "/admin/";
          });
        }
      });
    }
    window.netlifyIdentity.init();
  }

  render() {
    const { data } = this.props;
    // const { edges: posts } = data.latestBlogs;
    const posts = data.latestBlogs && data.latestBlogs.edges;

    const { pageContent } = data;

    return (
      <Main isHome>
        <Script
          url="https://identity.netlify.com/v1/netlify-identity-widget.js"
          onLoad={() => this.handleScriptLoad()}
        />
        <StyledImg
          sizes={{
            ...data.backgroundImage.childImageSharp.sizes,
            base64: data.backgroundImage.childImageSharp.sqip.dataURI,
          }}
          style={{
            position: "absolute",
            width: "100%",
            height: "100%"
          }}
        />
        <Intro>
          <Definitions>
          <img src={data.backgroundImage.childImageSharp.sqip.dataURI} alt="" />
            {pageContent.frontmatter.definition &&
              pageContent.frontmatter.definition.map(
                ({ title, pronunciation, description }) => (
                  <Fragment key={title}>
                    <DefinitionTitle>
                      {title}{" "}
                      <Pronunciation aria-hidden="true">
                        {pronunciation}
                      </Pronunciation>
                    </DefinitionTitle>
                    <DefinitionDescription>{description}</DefinitionDescription>
                  </Fragment>
                )
              )}
          </Definitions>
          <PageTitle>{pageContent.frontmatter.strapline}</PageTitle>
          <p>{pageContent.frontmatter.introPara}</p>
          {pageContent.frontmatter.links && (
            <Links>
              {pageContent.frontmatter.links.map(
                ({ id, linkText, linkUrl }) => (
                  <StyledLink key={id} to={linkUrl}>
                    {linkText} &rarr;
                  </StyledLink>
                )
              )}
            </Links>
          )}
        </Intro>
        {posts &&
          posts.map(({ node: post }) => (
            <div key={post.id}>
              <Link to={post.fields.slug}>{post.frontmatter.title}</Link>
              <small>{post.frontmatter.date}</small>
              {post.excerpt}
              <Link to={post.fields.slug}>Keep Reading →</Link>
            </div>
          ))}
      </Main>
    );
  }
}

export const pageQuery = graphql`
  query IndexQuery($id: String!) {
    latestBlogs: allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          frontmatter {
            title
            templateKey
          }
          fields {
            slug
          }
        }
      }
    }
    backgroundImage: file(relativePath: { eq: "spa.jpg" }) {
      childImageSharp {
        sizes(maxWidth: 4000) {
          ...GatsbyImageSharpSizes_noBase64
        }
        sqip(numberOfPrimitives: 100, blur: 0, mode: 1) {
          dataURI
        }
      }
    }
    pageContent: markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        definition {
          title
          pronunciation
          description
        }
        strapline
        introPara
        links {
          id
          linkText
          linkUrl
        }
      }
    }
  }
`;
