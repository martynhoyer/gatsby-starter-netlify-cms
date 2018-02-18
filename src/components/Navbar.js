import React from "react";
import Link from "gatsby-link";

const Navbar = () => (
  <nav className="navbar is-transparent">
    <div className="container">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          Home
        </Link>
      </div>
      <div className="navbar-start">
        <Link className="navbar-item" to="/about-us">
          About
        </Link>
        <Link className="navbar-item" to="/services">
          Services
        </Link>
        <Link className="navbar-item" to="/logistics">
          Logistics
        </Link>
        <Link className="navbar-item" to="/contact">
          Contact
        </Link>
      </div>
    </div>
  </nav>
);

export default Navbar;
