import React, { useState } from 'react';
import Fader from './../components/Fader';

const About = () => {
        return (
                <div className="portfolio__container">
                        <div className="about__page">
                                <Fader delay={500}>
                                        <div className="about__title-wrap">
                                                <h3 className="about__title">
                                                        About me
                                                </h3>
                                        </div>
                                </Fader>
                                <Fader delay={1200}>
                                        <div className="about__text">
                                                Hi, I'm Denis – UX/UI designer from Minsk.
                                        </div>
                                        <div className="">
                                                I'm interested in design and everything connected with it.
                                        </div>
                                        <p>
                                                <div>
                                                        I'm studying at courses "Web and mobile design 
                                                </div>
                                                <div>
                                                        interfaces" in IT-Academy.
                                                </div>
                                        </p>
                                        <p>
                                                <div>
                                                        Ready to implement excellent projects
                                                </div>
                                                <div>
                                                        with wonderful people.
                                                </div>
                                        </p>
                                </Fader>
                        </div>
                </div>
                
        );
};

export default About;