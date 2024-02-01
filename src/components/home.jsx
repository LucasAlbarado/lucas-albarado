import React from "react";
import "./home.css";
import UncontrolledExample from "./carrousel.jsx";
import { FaTruck } from "react-icons/fa";

const Home = () => {
  return (
    <div className="body">
      <div className="envio w-100 bg-dark">
        <h1 className="text-white">
          <FaTruck />
          Envios gratis a todo el pais con compra superior a $70.000{" "}
        </h1>
      </div>
      <UncontrolledExample />
    </div>
  );
};

export default Home;
