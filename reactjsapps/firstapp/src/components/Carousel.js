import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel'
import Image1 from '../Images/image1.jpeg';
import Image2 from '../Images/image2.jpeg';
import Image3 from '../Images/image3.jpeg';
const Carousels = () => {
    return (
        <div>
          <Carousel>
      <Carousel.Item>
        <img src={Image1} width="1500px" height="400px"/>
      </Carousel.Item>
      <Carousel.Item>
      <img src={Image2} width="1500px" height="400px"/>
    </Carousel.Item>
      <Carousel.Item>
      <img src={Image3} width="1500px" height="400px"/>
      </Carousel.Item>
    </Carousel>
</div>
       
    );
};


export default Carousels;