import React, { useEffect, useState } from 'react';
import '../App.css';

interface FaderProps{
        children?: JSX.Element | JSX.Element[];
        delay: number;
}

const Fader: React.FC<FaderProps> = ({children, delay}) => {
        const [fadeProp, setFadeProp] = useState({
                fade: 'fade-out',
        });

        useEffect(() => {
                const timeout = setInterval(() =>{
                        if (fadeProp.fade === 'fade-out') {
                                setFadeProp({
                                    fade: 'fade-in'
                                })
                        }

                }, delay);

        }, [fadeProp])

        return (
                <div className={fadeProp.fade}>
                     {children}   
                </div>
        );
};

export default Fader;