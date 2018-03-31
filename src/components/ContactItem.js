import React, { Fragment } from "react";
import styled, { css } from "styled-components";
import { hideVisually } from "polished";
import { ReactComponent as Facebook } from "../svg/facebook.svg";
import { ReactComponent as Twitter } from "../svg/twitter.svg";
import { ReactComponent as Instagram } from "../svg/instagram.svg";
import { ReactComponent as Envelope } from "../svg/envelope.svg";
import media from "../tokens/breakpoints";

const iconOnly = props =>
  props.iconOnly
    ? css`
        ${hideVisually};
      `
    : css`
        margin-top: 1.5em;
      `;

export const DefinitionTitle = styled.dt`
  ${iconOnly};

  font-size: 0.65em;
  text-transform: uppercase;
`;

export const DefinitionData = styled.dd`
  margin: 0;
`;

const iconOnlyLink = ({ iconOnly }) =>
  iconOnly
    ? css`
        display: block;
        width: 48px;
        height: 48px;
        margin-top: 1em;
        margin-right: 1em;
        margin-left: 1em;
        padding: 5%;
        border-bottom: none;
        color: ${props => props.theme.palette.greyLightest};

        &:hover,
        &:focus {
          background-color: ${props => props.theme.palette.yellow};
          outline-color: ${props => props.theme.palette.yellow};
          color: ${props => props.theme.palette.purple};
        }

        @media (${media.md}) {
          width: 48px;
          height: 48px;
          margin: 1em auto 0;
        }

        @media (${media.lg}) {
          width: 32px;
          height: 32px;
          padding: 10%;
        }

        @media (${media.xl}) {
          width: 48px;
          height: 48px;
          padding: 15%;
        }

        & > svg {
          display: block;
          width: 100%;
          height: 100%;
          fill: currentColor;
        }
      `
    : css`
        & > svg {
          position: absolute;
          left: 0;
          width: 1.6em;
          height: 1.6em;
        }
      `;

export const Link = styled.a`
  ${iconOnlyLink};
`;

export const DisplayName = styled.span`
  ${iconOnly};
`;

const Content = ({
  url,
  providerDisplayName,
  profileDisplayName,
  providerName,
  iconOnly = false
}) => {
  const icons = {
    facebook: <Facebook />,
    twitter: <Twitter />,
    instagram: <Instagram />,
    email: <Envelope />
  };
  return (
    <Fragment>
      <DefinitionTitle iconOnly={iconOnly}>
        {providerDisplayName}
      </DefinitionTitle>
      <DefinitionData>
        <Link href={url} iconOnly={iconOnly}>
          {icons[providerName]}
          <DisplayName iconOnly={iconOnly}>{profileDisplayName}</DisplayName>
        </Link>
      </DefinitionData>
    </Fragment>
  );
};

export default Content;
