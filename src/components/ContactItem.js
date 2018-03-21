import React, { Fragment } from "react";

const Content = ({
  url,
  providerDisplayName,
  profileDisplayName,
  providerName
}) => (
  <Fragment>
    <dt>{providerDisplayName}</dt>
    <dd>
      {providerName}
      <a href={url}>{profileDisplayName}</a>
    </dd>
  </Fragment>
);

export default Content;
