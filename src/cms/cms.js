import CMS from "netlify-cms";
import "netlify-cms/dist/cms.css";

import AboutPagePreview from "./preview-templates/AboutPagePreview";
import ServicesHomePagePreview from "./preview-templates/ServicesHomePagePreview";
import BlogPostPreview from "./preview-templates/BlogPostPreview";
import ProductPagePreview from "./preview-templates/ProductPagePreview";

CMS.registerPreviewStyle("/styles.css");
CMS.registerPreviewTemplate("about-us", AboutPagePreview);
CMS.registerPreviewTemplate("services-home", ServicesHomePagePreview);
CMS.registerPreviewTemplate("products", ProductPagePreview);
CMS.registerPreviewTemplate("blog", BlogPostPreview);
