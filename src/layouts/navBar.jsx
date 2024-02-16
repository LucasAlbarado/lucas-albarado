import React, { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Outlet, Link } from "react-router-dom";
import "./navBar.css";
import logo1 from "../images/logo1.png";

const NavBarExample = () => {
  // Define el estado para almacenar si el usuario está registrado y su nombre de usuario
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState("");

  // Función para manejar el cierre de sesión
  const handleLogout = () => {
    // Aquí colocarías la lógica para cerrar la sesión del usuario
    setIsAuthenticated(false);
    setUsername("");
  };

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
              {/* Renderizado condicional para mostrar diferentes enlaces según el estado de autenticación */}
              {isAuthenticated ? (
                <>
                  <Nav.Link>{`Hola ${username}`}</Nav.Link>
                  <Nav.Link onClick={handleLogout}>Cerrar sesión</Nav.Link>
                </>
              ) : (
                <Nav.Link as={Link} to="/login">
                  Iniciar sesión
                </Nav.Link>
              )}
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
