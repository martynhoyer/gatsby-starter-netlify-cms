import React from "react";
import Link from "gatsby-link";
import ContactItem from "../components/ContactItem";

const Navbar = ({ navLinks = [], social = [] }) => (
  <nav>
    <Link to="/">Home</Link>
    {(navLinks || navLinks.length) &&
      navLinks.map(({ node: link }) => (
        <Link key={link.fields.slug} to={link.fields.slug}>
          {link.frontmatter.subtitle} or {link.frontmatter.title}
        </Link>
      ))}
    {social.length > 0 && (
      <dl>
        {social.map(profile => (
          <ContactItem key={profile.providerName} {...profile} iconOnly />
        ))}
      </dl>
    )}
  </nav>
);

export default Navbar;
