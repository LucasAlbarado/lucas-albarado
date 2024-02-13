import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, ListGroup } from "react-bootstrap";
import "./menu.css";

const Menu = () => {
  const [sneakers, setSneakers] = useState([]);
  const apiKey = "fe784038e6msh3b90f32f9cbe1fcp1a09cdjsn4270846f00ba";
  const apiUrl =
    "https://the-sneaker-database-api-your-ultimate-sneaker-encyclopedia.p.rapidapi.com/search";

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: "GET",
        url: apiUrl,
        params: { query: "adidas" },
        headers: {
          "X-RapidAPI-Key": apiKey,
          "X-RapidAPI-Host":
            "the-sneaker-database-api-your-ultimate-sneaker-encyclopedia.p.rapidapi.com",
        },
      };

      try {
        const response = await axios.request(options);
        if (response.data && response.data.hits) {
          setSneakers(response.data.hits);
        } else {
          console.error(
            "La respuesta de la API no tiene el formato esperado:",
            response.data
          );
        }
      } catch (error) {
        console.error("Error al obtener los datos:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <div className="header-m"></div>
      <div className="Title-menu">
        <h1>Catálogo de Zapatillas</h1>
      </div>
      <div className="layout">
        <div className="catalog">
          <ul>
            <li>adidas</li>
            <li>Nike</li>
            <li>Yeezy</li>
          </ul>
        </div>
        <div className="Container-catalog ">
          <ul>
            {sneakers &&
              sneakers.map((sneaker, index) => (
                <li key={index}>
                  <Card
                    className="border border-black border- rounded"
                    style={{ width: "18rem" }}
                  >
                    <Card.Img
                      variant="top"
                      src={sneaker.image}
                      alt={sneaker.title}
                    />
                    <Card.Body>
                      <Card.Title>{sneaker.title}</Card.Title>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                      <ListGroup.Item>
                        {sneaker.base_price} {sneaker.currency}
                      </ListGroup.Item>
                      <ListGroup.Item>Genero: {sneaker.gender}</ListGroup.Item>
                    </ListGroup>
                    <Card.Body>
                      <Card.Link href={sneaker.link}>Detalles</Card.Link>
                    </Card.Body>
                  </Card>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Menu;
