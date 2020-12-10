import { Link } from "gatsby";
// import PropTypes from "prop-types"
import React from "react";
import "../assets/header.css";
import { Navbar, Nav, Button } from "react-bootstrap";
import logo from "../img/ampz_logo.png";

const Header = () => (
  // <div style={{ position: "fixed", zIndex: "1000", width: "100%" }}>
  <Navbar
    // style={{ position: "fixed", zIndex: "1000", width: "100%" }}
    expand="md"
    className="nav"
  >
    <Navbar.Brand href="#home">
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        <Link to="/" className="nav-link ml-2 mr-2" id="nav-link">
          Home
        </Link>
        <Link to="/about-us" className="nav-link mr-2" id="nav-link">
          About Us
        </Link>
        <Link to="/products" className="nav-link mr-2" id="nav-link">
          Products
        </Link>
        <Link to="/get-started" className=" mr-2">
          <button>Get Started</button>
        </Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
  // </div>
);

export default Header;
