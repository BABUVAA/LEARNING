import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
       <Navbar.Brand>E-gaming </Navbar.Brand>
       <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link >Home</Nav.Link>
          <Nav.Link >Tournaments</Nav.Link>
          <Nav.Link >Profile</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;


/*
import { Link } from 'react-router-dom';

// src/components/Header.js
import React from 'react';
 <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand as={Link} to="/">Repeat.gg Clone</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/tournaments">Tournaments</Nav.Link>
          <Nav.Link as={Link} to="/profile">Profile</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
*/