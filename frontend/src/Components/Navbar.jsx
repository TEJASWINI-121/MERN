import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const navStyle = {
    backgroundColor: 'green',
    padding: '1rem 0',
    textAlign: 'center',
    width: '100%',
    position: 'relative',
    top: 0,
    left: 0,
  };

  const ulStyle = {
    listStyleType: 'none',
    margin: 0,
    padding: 0,
    display: 'flex',
    justifyContent: 'center',
    gap: '2rem',
  };

  const linkStyle = {
    textDecoration: 'underline',
    color: 'white',
    fontWeight: 'bold',
    fontSize: '1.1rem',
  };

  return (
    <nav style={navStyle}>
      <ul style={ulStyle}>
        <li>
          <Link to="/" style={linkStyle}>Home</Link>
        </li>
        <li>
          <Link to="/about" style={linkStyle}>About</Link>
        </li>
        <li>
          <Link to="/services" style={linkStyle}>Services</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;