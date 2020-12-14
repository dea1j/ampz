import { Link } from 'gatsby';
import React from 'react';
import '../assets/header.css';
import { Navbar, Nav } from 'react-bootstrap';
import logo from '../img/ampz_logo.png';

const Header = () => (
  <Navbar expand="md" className="nav">
  <div>
  <Navbar.Brand>
      <Link to="/">
        <img className="logo" src={logo} alt="logo" />
      </Link>
    </Navbar.Brand>
  </div>
    <div>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto mr-2 all-nav">
        <Link
          to="/"
          activeStyle={{ fontWeight: 700 }}
          className="nav-link ml-2 mr-2"
          id="nav-link"
          style={{ marginLeft: '0 !important' }}
        >
          Home
        </Link>
        <Link
          to="/about-us"
          activeStyle={{ fontWeight: 700 }}
          className="nav-link mr-2"
          id="nav-link"
        >
          About us
        </Link>
        <Link
          to="/products"
          activeStyle={{ fontWeight: 700 }}
          className="nav-link mr-2 mb-1"
          id="nav-link"
        >
          Products
        </Link>
        <Link to="/get-started" className=" mr-2">
          <button>Get Started</button>
        </Link>
      </Nav>
    </Navbar.Collapse>
    </div>
  </Navbar>
);

export default Header;
