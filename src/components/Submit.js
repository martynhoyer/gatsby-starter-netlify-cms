import React from "react";
// import styled from "styled-components";

const Submit = ({ isSubmitting }) => (
  <button id="submit" type="submit" disabled={isSubmitting}>
    Send
  </button>
);

export default Submit;
