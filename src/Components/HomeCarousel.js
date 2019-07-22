import React from "react";
import { Carousel } from 'react-bootstrap';

function HomeCarousel() {
    return (
      <Carousel>
        <Carousel.Item>
          <img
            className="img-fluid"
            src="../../images/home/slider1.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="img-fluid"
            src="../../images/home/slider2.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="img-fluid"
            src="../../images/home/slider3.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="img-fluid"
            src="../../images/home/slider4.jpg"
            alt="Forth slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="img-fluid"
            src="../../images/home/slider5.jpg"
            alt="Fifth slide"
          />
        </Carousel.Item>
      </Carousel>
    );
}

export default HomeCarousel;