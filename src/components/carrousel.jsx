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
            <h5 className=" text-xl text-sm text-xs">Nike Retro Celestes</h5>
            <p className="parrafo-carousel text-xl text-sm text-xs">
              Elegancia vintage con toque moderno
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
            <h5 className=" text-xl text-sm text-xs">
              Nike AIR MAX blancas con rojo
            </h5>
            <p className="parrafo-carousel text-xl text-sm text-xs">
              Comodidad y rendimiento excepcionales
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 image-carrousel"
            src={vansRetro}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h5 className="text-sm text-xl">Vans Retro</h5>
            <p className="parrafo-carousel text-xl text-sm text-xs text-xxs">
              Elegancia informal y autenticidad moderna
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 image-carrousel"
            src={converseBotitas}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h5 className=" text-xl text-sm text-xs">Converse Botitas</h5>
            <p className="parrafo-carousel text-xl text-sm text-xs">
              Diseño clásico y versátil
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default DarkVariantExample;
