
import React, { useEffect } from 'react';
import { Animator, batch, Fade, FadeOut, Move, ScrollContainer, ScrollContainerContext, ScrollPage, Sticky, Zoom, ZoomIn, ZoomOut } from 'react-scroll-motion';
import Fader from './../components/Fader';


const Portfolio = () => {
        return (
                <div className="portfolio__container">
                        <div className="portfolio__page">
                                <Fader delay={400}>
                                        <div className="portfolio__text" style={{fontWeight: '600'}}>
                                                Portfolio
                                        </div>
                                </Fader>
                                <Fader delay={800}>
                                        <ScrollContainer>
                                                <ScrollPage page={0}>
                                                        <Animator animation={batch( ZoomIn(0.7, 1), ZoomOut(1, 0.7))}>
                                                                <img className="portfolio__item" src="/images/FashionStore.svg" alt="FashionStore" />
                                                        </Animator>
                                                        <Animator animation={Fade(0, 1)}>
                                                                <div className="portfolio__case">
                                                                                Online fashion store - Homepage
                                                                </div>
                                                        </Animator>
                                                </ScrollPage>
                                                <ScrollPage page={1}>
                                                        <Animator animation={batch( ZoomIn(0.7, 1), ZoomOut(1, 0.7))}>
                                                                <img className="portfolio__item" src="/images/Reebok.svg" alt="ReebokConcept" />
                                                        </Animator>
                                                        <Animator animation={Fade(0, 1)}>
                                                                <div className="portfolio__case">
                                                                        Reebok store - Concept
                                                                </div>
                                                        </Animator>
                                                </ScrollPage>
                                                <ScrollPage page={2}>
                                                        <Animator animation={batch( ZoomIn(0.7, 1), ZoomOut(1, 0.7))}>
                                                                <img className="portfolio__item" src="/images/reebok_web.svg" alt="BrAun" />
                                                        </Animator>
                                                        <Animator animation={Fade(0, 1)}>
                                                                <div className="portfolio__case">
                                                                        Braun Landing Page - Concept
                                                                </div>
                                                        </Animator>
                                                </ScrollPage>
                                        </ScrollContainer>
                                </Fader>

                        </div>
                </div>
                
        );
};

export default Portfolio;