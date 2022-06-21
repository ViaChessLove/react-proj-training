import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import './styles.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const AppCarousel = () => {
  return (
        <div className="carousel__wrapper">
                
                <Carousel className="main-slide" autoPlay={true} interval={2000} infiniteLoop={true}>
                        <div>
                                <img src="/images/Asian.svg" alt="" height='300px' width='200px' />
                        </div>
                        <div>
                                <img src="/images/Sad.svg" alt="" height='300px' width='200px'/>
                        </div>
                        <div>
                                <img src="/images/Naverh.svg" alt="" height='300px' width='200px'/>
                        </div> 
                </Carousel>
        </div>
  )
}

export default AppCarousel