import Carousel from "react-bootstrap/Carousel";
import "./carrousel.css";
import nikeRetroC from "../images/nike-retro-celestes.jpg";
import foto2 from "../images/foto2.jpg";
import vansRetro from "../images/vans-retro.jpg";
import converseBotitas from "../images/Converse-botitas.jpg";

function DarkVariantExample() {
  return (
    <div className="d-flex justify-content-center align-items-center w-100">
      <Carousel data-bs-theme="dark">
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100 image-carrousel img-fluid"
            src={nikeRetroC}
            alt="First slide"
          />
          <Carousel.Caption>
            <h5>Nike Retro Celestes</h5>
            <p>
              Buscas algo que se pueda usar con todo? aqui esta lo que estas
              buscando.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 image-carrousel"
            src={foto2}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h5>Nike AIR MAX blancas con rojo</h5>
            <p>Comodas y deportivas.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 image-carrousel"
            src={vansRetro}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h5>Vans Retro</h5>
            <p>Literalmente, para todo andar</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 image-carrousel"
            src={converseBotitas}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h5>Converse Botitas</h5>
            <p>Que elegancia la de francia</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default DarkVariantExample;
