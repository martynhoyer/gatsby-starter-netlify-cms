import React, { Fragment } from "react";
import styled, { css } from "styled-components";
import { hideVisually } from "polished";
import Facebook from "../svg/facebook.svg";
import Twitter from "../svg/twitter.svg";
import Instagram from "../svg/instagram.svg";
import Envelope from "../svg/envelope.svg";
import media from "../tokens/breakpoints";

const iconOnly = props =>
  props.iconOnly
    ? css`
        ${hideVisually};
      `
    : null;

export const DefinitionTitle = styled.dt`
  ${iconOnly};
`;

export const DefinitionData = styled.dd`
  margin: 0;
`;

export const Link = styled.a`
  display: block;
  width: 32px;
  height: 32px;
  margin-top: 1em;
  margin-right: 1em;
  margin-left: 1em;
  border-bottom: none;
  color: ${props => props.theme.palette.greyLightest};

  &:hover,
  &:focus {
    background-color: ${props => props.theme.palette.yellow};
    outline-color: ${props => props.theme.palette.yellow};
    color: ${props => props.theme.palette.white};
  }

  @media (${media.md}) {
    width: 48px;
    height: 48px;
    margin: 1em auto 0;
    padding: 5%;
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
        <Link href={url}>
          {icons[providerName]}
          <DisplayName iconOnly={iconOnly}>{profileDisplayName}</DisplayName>
        </Link>
      </DefinitionData>
    </Fragment>
  );
};

export default Content;
