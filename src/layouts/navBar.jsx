import React, {useEffect} from "react";
import { Outlet, Link  } from "react-router-dom";
import { Container, Nav, Navbar, NavDropdown  } from "react-bootstrap";
import "./navBar.css";
import logo1 from "../images/logo1.png";

const NavBarExample = ({ isAuthenticated, userName  }) => {

  const handleLogout = () => {
    // Limpiar la sesión en el cliente
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("userName");
    window.location.href = "/"; // Cambia la URL según sea necesario
  };
  const setUserName = () => {};
  useEffect(() => {
    // Verificar si hay un userName almacenado en localStorage al cargar el componente
    const storedUserName = localStorage.getItem("userName");
    if (storedUserName) {
      setUserName(storedUserName);
    }
  }, []);

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
            <NavDropdown title="Mi Cuenta" id="basic-nav-dropdown">
            <NavDropdown.Item>Hola, {userName}</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
            Editar perfil
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item onClick={handleLogout} as="button" href="#action/3.4">
              Cerrar sesion
            </NavDropdown.Item>
          </NavDropdown>
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
