import React from 'react'
import Link from 'gatsby-link'

const Navbar = () => (
  <nav>
    <Link to="/">Home</Link>
    <Link to="/about-us">About</Link>
    <Link to="/services">Services</Link>
    <Link to="/logistics">Logistics</Link>
    <Link to="/contact">Contact</Link>
  </nav>
)

export default Navbar
