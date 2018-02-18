import CMS from "netlify-cms";
import "netlify-cms/dist/cms.css";

import AboutPagePreview from "./preview-templates/AboutPagePreview";
import ServicesHomePagePreview from "./preview-templates/ServicesHomePagePreview";
import BlogPostPreview from "./preview-templates/BlogPostPreview";

CMS.registerPreviewStyle("/styles.css");
CMS.registerPreviewTemplate("about-us", AboutPagePreview);
CMS.registerPreviewTemplate("services-home", ServicesHomePagePreview);
CMS.registerPreviewTemplate("blog", BlogPostPreview);
