import React, { Suspense, useContext, useEffect, useLayoutEffect } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import './styles.css';
import Fader from './../components/Fader'
import { CurrentPage } from '../Context';


const HomePage = () => {
        const {currentPage, setCurrentPage} = useContext(CurrentPage);
        setCurrentPage('home');
        return (
                <>
                        <Fader delay={200}>
                                <div className='home__page'>
                                        <h3 className="home__title">Denis Novik</h3>
                                        <div className="home__info" style={{display: 'flex', flexWrap:'wrap'}}>
                                                <div>UI | UX designer</div>
                                                <div>24 years old, Minsk</div>
                                        </div>
                                </div>

                        </Fader>
                        <Suspense fallback={<div></div>}>
                                <Fader delay={450}>
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
                                </Fader>
                        </Suspense>
                        
                </>
        );
};

export default HomePage;
