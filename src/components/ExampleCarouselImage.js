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
          <div style={{ position: 'relative' }}>
            <img
              className='pic'
              src={img1}
              alt="first"
              width="300px" // Adjust width of image
              style={{ display: 'block', margin: '0 auto' }} // Center the image horizontally
            />
            <div className="carousel-caption" >
              <h3 className="caption-text">Econometrics</h3>
              <p className="caption-text">Using data to make business better.</p>
            </div>
          </div>
        </Link>
      </Carousel.Item>
      <Carousel.Item>
        <Link to='/help'>
          <div style={{ position: 'relative' }}>
            <img
              className='pic'
              src={img2}
              alt="two"
              width="300px" // Adjust width of image
              style={{ display: 'block', margin: '0 auto' }} // Center the image horizontally
            />
            <div className="carousel-caption">
              <h3 className="caption-text">Blockchain</h3>
              <p className="caption-text">Specializing in blockchain integration</p>
            </div>
          </div>
        </Link>
      </Carousel.Item>
      <Carousel.Item>
        <Link to='/help'>
          <div style={{ position: 'relative' }}>
            <img
              className='pic'
              src={img3}
              alt="third"
              width="300px" // Adjust width of image
              style={{ display: 'block', margin: '0 auto' }} // Center the image horizontally
            />
            <div className="carousel-caption" >
              <h3 className="caption-text">Content Marketing</h3>
              <p className="caption-text">We deliver content to connect messages to client needs</p>
            </div>
          </div>
        </Link>
      </Carousel.Item>
    </Carousel>
  );
}


export default CarouselFadeExample;
