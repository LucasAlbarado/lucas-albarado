import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import "./footer.css"
import { Link } from "react-router-dom";
import { FaGoogle, FaLinkedinIn, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="justify-content-center">
          <Col md={12} className="text-center">
            <h2 className="footer-heading"><Link to="#" className="logo">Venta de Zapatillas</Link></h2>
            <p className="menu">
            <Link to="/">Home</Link>
              <Link to="/productos">Productos</Link>
              <Link to="/acerca">Acerca de nosotros</Link>
              <Link to="/contacto">Contacto</Link>
            </p>
            <ul className="icons-footer p-0">
              <li className='icons'>
                <Link to="/Error404">
                  <FaGoogle className="bx bxl-google bx-flashing" />
                </Link>
                </li>
                <li className='icons'>
                <Link to="/Error404">
                  <FaGithub className="bx bxl-github bx-flashing" />
                </Link>
                </li>
                <li className='icons'>
                <Link to="/Error404">
                  <FaLinkedinIn className="bx bxl-linkedin bx-flashing" />
                </Link>
                </li>
                
            </ul>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col md={12} className="text-center">
            <p className="copyright">
              © {new Date().getFullYear()} Venta de Zapatillas. Todos los derechos reservados | Este sitio web está hecho por Lucas Albarado
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;