import React, { lazy, Suspense, useContext, useEffect, useLayoutEffect } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import './styles.css';
import Fader from './../components/Fader'
import { CurrentPage } from '../Context';

const AppCarousel = lazy(() => import('../components/AppCarousel'));


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
                        <Suspense fallback={<div>Loading...</div>}>
                                <Fader delay={450}>
                                        <AppCarousel/>
                                </Fader>
                        </Suspense>
                        
                </>
        );
};

export default HomePage;
