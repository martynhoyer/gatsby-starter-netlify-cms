import React from "react";
import { ServicesHomePageTemplate } from "../../templates/services-home";

const ServicesHomePagePreview = ({ entry, widgetFor }) => (
  <ServicesHomePageTemplate
    title={entry.getIn(["data", "title"])}
    content={widgetFor("body")}
  />
);

export default ServicesHomePagePreview;
