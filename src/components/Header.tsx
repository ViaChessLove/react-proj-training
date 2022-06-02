import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const Header = () => {
        const [headerScrolled, setHeaderScrolled] = useState(false);
        useEffect(() => {
                window.addEventListener('scroll', (event) =>{
                        if (window.scrollY > 180){        
                                setHeaderScrolled(true);
                        } else {
                                setHeaderScrolled(false);
                        }
                })
        }, []);
        return (
                <div className={headerScrolled ? 'fixd' : ''}>
                        
                        <nav className="header__wrapper">
                                        
                                        <Link to="/" style={{ textDecoration: 'none', color: '#828282'}}>
                                                <li>
                                                        Home
                                                </li>
                                        </Link>
                                        <Link to="/about" style={{ textDecoration: 'none', color: '#828282'}}>
                                                <li>
                                                        About me
                                                </li>
                                        </Link>
                                        <Link to="skills" style={{ textDecoration: 'none', color: '#828282'}}>
                                                <li>
                                                        Skills
                                                </li>
                                        </Link>
                                        <Link to="portfolio" style={{ textDecoration: 'none', color: '#828282'}}>
                                                <li>
                                                        Portfolio
                                                </li>
                                        </Link>
                                        <Link to="/contacts" style={{ textDecoration: 'none', color: '#828282'}}>
                                                <li>
                                                        Contacts
                                                </li>
                                        </Link>
                                        
                        </nav>
                        <div className="underline">

                        </div>
                </div>
                
        );
};

export default Header;