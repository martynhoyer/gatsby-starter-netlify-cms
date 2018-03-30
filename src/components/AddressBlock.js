import React, { Fragment } from "react";

const AddressBlock = ({
  line1 = null,
  line2 = null,
  town = null,
  county = null,
  country = null,
  postcode = null,
  className
}) => (
  <address className={className}>
    {line1 && <Fragment>{line1}</Fragment>}
    {line2 && (
      <Fragment>
        <br />
        {line2}
      </Fragment>
    )}
    {town && (
      <Fragment>
        <br />
        {town}
      </Fragment>
    )}
    {county && (
      <Fragment>
        <br />
        {county}
      </Fragment>
    )}
    {country && (
      <Fragment>
        <br />
        {country}
      </Fragment>
    )}
    {postcode && (
      <Fragment>
        <br />
        {postcode}
      </Fragment>
    )}
  </address>
);

export default AddressBlock;
