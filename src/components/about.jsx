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
              <FaLinkedin />
              <FaFacebookSquare />
              <FaTwitterSquare />
              <FaGithubSquare />
            </Figure.Caption>
          </div>
          <div className="texto-about m-2">
            <span>
              Mi nombre es Lucas Miguel Albarado, este es mi proyecto para
              programacion III de la carrera Tecnicatura Universitaria en
              programacion, mi pagina web consiste en
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
