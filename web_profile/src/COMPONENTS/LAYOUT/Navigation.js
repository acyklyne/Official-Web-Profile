import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';
import Button from '../SHARED/Button';

const Navigation = ({ darkMode, toggleDarkMode }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar 
      expand="lg" 
      expanded={expanded}
      className="custom-navbar fixed w-full z-50"
    >
      <Container>
        <Navbar.Brand as={Link} to="/" className="text-secondary font-bold">
          YourName
        </Navbar.Brand>
        <Navbar.Toggle 
          aria-controls="basic-navbar-nav" 
          onClick={() => setExpanded(!expanded)}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link 
              as={Link} 
              to="/" 
              className="text-textPrimary"
              onClick={() => setExpanded(false)}
            >
              Home
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/about" 
              className="text-textPrimary"
              onClick={() => setExpanded(false)}
            >
              About
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/portfolio" 
              className="text-textPrimary"
              onClick={() => setExpanded(false)}
            >
              Portfolio
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              className="text-textPrimary"
              onClick={() => setExpanded(false)}
            >
              Contact
            </Nav.Link>
            <Button className="ml-4">Resume</Button>
            <button className="theme-switch-button ml-4" onClick={toggleDarkMode}>
              {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            </button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
