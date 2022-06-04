import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';

const Footer = () => {
        const [time, setTime] = useState<string>(Date.now().toString());
        useEffect(() => {
                const myInterval = setInterval(() => {
                        setTime(new Date().toLocaleTimeString());
                }, 1000);
        }, [])
        return (
                <div className="footer">
                        <Outlet/>
                        <div className="footer__text">
                                <div>
                                        The web page was made by Nemtsev Vyacheslav - 
                                        <a href="https://github.com/ViaChessLove" target="_blank" rel="noreferrer">
                                                https://github.com/ViaChessLove
                                        </a>
                                </div>
                                <div>   
                                        {time}
                                </div>
                        </div>
                </div>
        );
};

export default Footer;