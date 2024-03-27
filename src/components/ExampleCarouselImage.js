import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import "bootstrap/dist/css/bootstrap.min.css";
import img1 from "../images/econmetrics.jpg";
import img2 from "../images/bitcoin.jpg";
import img3 from "../images/devfront.png";
import { Link } from 'react-router-dom';

function CarouselFadeExample() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <Link to='/help'>
          <img
            className='pic'
            src={img1}
            alt="first"
            width="300px" // Adjust width of image
          />
        </Link>
        <Carousel.Caption className="carousel-caption-bottom">
          <h3 className="caption-text">Econometrics</h3>
          <p className="caption-text"> Using data to make business better.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Link to='/help'>
          <img
            className='pic'
            src={img2}
            alt="two"
            width="300px" // Adjust width of image
          />
        </Link>
        <Carousel.Caption className="carousel-caption-bottom">
          <h3 className="caption-text">Blockchain</h3>
          <p className="caption-text">Specializing in blockchain integration</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Link to='/help'>
          <img
            className='pic'
            src={img3}
            alt="third"
            width="300px" // Adjust width of image
          />
        </Link>
        <Carousel.Caption className="carousel-caption-bottom">
  <h3 className="caption-text">Content Marketing</h3>
  <p className="caption-text">Got an idea you want people to see? We can shoot all your content.</p>
</Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFadeExample;
