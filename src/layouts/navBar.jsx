import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Outlet, Link } from "react-router-dom";
import "./navBar.css";
import logo1 from "../images/logo1.png";

const NavBarExample = () => {
  return (
    <>
      <Navbar expand="lg" className="header p-0" data-bs-theme="dark">
        <Container className="container p-0 ">
          <Navbar.Brand as={Link} to="/" className="p-0">
            <img src={logo1} alt="" className="imagen-logo" />
            KickSmart
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
              <Nav.Link as={Link} to="/login">
                Register
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <section>
        <Outlet></Outlet>
      </section>
    </>
  );
};

export default NavBarExample;
