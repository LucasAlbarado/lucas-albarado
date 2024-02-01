import React from "react";
import Figure from "react-bootstrap/Figure";
import "./about.css";
import fotolucas from "../images/foto-lucas.png";
import {
  FaLinkedin,
  FaFacebookSquare,
  FaTwitterSquare,
  FaGithubSquare,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <div className="container-about">
        <div className="title-about">
          <h1>SOBRE NOSOTROS</h1>
        </div>
        <div className="Container-card m-4 p-2">
          <div className="imagen-about ">
            <Figure className=" image m-0">
              <Figure.Image
                className="m-0 imagen"
                width={440}
                height={440}
                alt="Foto del creador de la pagina"
                src={fotolucas}
              />
            </Figure>
            <Figure.Caption className="icons text-white">
              <a href="https://www.linkedin.com/in/lucasalbarado/">
                <FaLinkedin />
              </a>
              <Link to="/Error404">
                <FaFacebookSquare />
              </Link>
              <Link to="/Error404">
                <FaTwitterSquare />
              </Link>
              <a href="https://github.com/LucasAlbarado">
                <FaGithubSquare />
              </a>
            </Figure.Caption>
          </div>
          <div className="texto-about m-2">
            <h5>Nuestra Historia</h5>
            <span>
              KICKSMART nació de la pasión compartida por los sneakers y la moda
              urbana. Desde nuestros humildes comienzos, hemos evolucionado para
              convertirnos en un destino líder para los entusiastas del calzado
              de todo el mundo. Fundada en 2023, nuestra empresa se ha dedicado
              a proporcionar una experiencia única y satisfactoria a cada uno de
              nuestros clientes.
            </span>
            <br />
            <h5>Nuestra Misión</h5>
            <span>
              En KICKSMART, nuestra misión es ofrecer una selección excepcional
              de sneakers de las mejores marcas, junto con un servicio al
              cliente impecable. Nos esforzamos por ser el destino definitivo
              para aquellos que buscan estilo, comodidad y calidad en cada paso
              que dan. Trabajamos incansablemente para asegurarnos de que cada
              cliente se sienta valorado y satisfecho con su experiencia de
              compra. Nuestro Compromiso con la Calidad Nos enorgullecemos de
              ofrecer solo los productos de la más alta calidad en nuestra
              tienda en línea. Trabajamos en estrecha colaboración con las
              marcas más prestigiosas del mundo para asegurarnos de que cada par
              de sneakers que vendemos cumpla con nuestros estándares exigentes.
              Desde los materiales hasta la artesanía, cada detalle se cuida
              meticulosamente para garantizar que nuestros clientes reciban solo
              lo mejor.
            </span>
            <h5>Nuestro Equipo </h5>
            <span>
              Detrás de KICKSMART hay un equipo apasionado y dedicado que
              trabaja arduamente para hacer realidad nuestra visión. Desde
              nuestros expertos en moda hasta nuestro equipo de servicio al
              cliente, cada miembro desempeña un papel fundamental en el éxito
              de nuestra empresa. Nos comprometemos a trabajar juntos para
              superar las expectativas de nuestros clientes en cada interacción.
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
