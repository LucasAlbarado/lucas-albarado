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
            <img src={logo1} alt="" className="imagen-logo-nav" />
            KickSmart
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="flex-grow-0 ">
            <Nav className="me-auto nav-bar">
              <Nav.Link as={Link} to="/">
                Inicio
              </Nav.Link>
              <Nav.Link as={Link} to="/menu">
                Catalogo
              </Nav.Link>
              <Nav.Link as={Link} to="/About">
                Nosotros
              </Nav.Link>
              <Nav.Link as={Link} to="/Contact">
                Contacto
              </Nav.Link>
              <Nav.Link as={Link} to="/login">
                Registrarse/Iniciar Sesion
              </Nav.Link>
              <Nav.Link as={Link}>Hola {}</Nav.Link>
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
