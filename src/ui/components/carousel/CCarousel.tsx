// import 'styles/carousel.css';

import Carousel from "react-bootstrap/Carousel";

import bolo1 from "ui/image/bolo-1.jpg";
import bolo2 from "ui/image/bolo-2.jpg";
import bolo3 from "ui/image/bolo-3.jpg";

const CCarousel = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src={bolo1}
            alt="First slide"
            width="800px"
            height="400px"
          />
          <Carousel.Caption>
            <h3>Lorem ipsum dolor sit amet.</h3>
            <p>
              Quer um bolo simples, mas supergostoso e fofinho para o café da
              tarde.
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            src={bolo2}
            alt="Second slide"
            width="800px"
            height="400px"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>
              Quer um bolo simples, mas supergostoso e fofinho para o café da
              tarde.
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            src={bolo3}
            alt="Third slide"
            width="800px"
            height="400px"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Quer um bolo simples, mas supergostoso e fofinho para o café da
              tarde.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default CCarousel;
