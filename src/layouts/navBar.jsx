import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./navBar.css";

const NavBarExample = () => {
  return (
    <>
      <Navbar expand="lg" className="header" data-bs-theme="dark">
        <Container className="container">
          <Navbar.Brand as={Link} to="/">
            React-Bootstrap
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="flex-grow-0 ">
            <Nav className="me-auto nav-bar">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/About">
                About
              </Nav.Link>
              <Nav.Link as={Link} to="/Contact">
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBarExample;
