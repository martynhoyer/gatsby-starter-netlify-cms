import React, { Fragment } from "react";
import styled, { css } from "styled-components";
import { hideVisually } from "polished";
import Facebook from "../svg/facebook.svg";
import Twitter from "../svg/twitter.svg";
import Instagram from "../svg/instagram.svg";

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
`;

export const Icon = styled.span`
  display: block;
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
    instagram: <Instagram />
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
