import React, { useContext, useEffect, useReducer, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { CurrentPage } from '../Context';
import './styles.css';

const Header = () => {
        const [headerScrolled, setHeaderScrolled] = useState(false);
        const {currentPage, setCurrentPage} = useContext(CurrentPage);
        setCurrentPage('home');
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
                        <Outlet/>
                        <nav className="header__wrapper">
                                        
                                        <Link to="/" style={{ textDecoration: 'none', color: '#828282'}}>
                                                <li style={currentPage=='home'? {color:'black',borderBottom: '2px solid black'}: undefined}>
                                                        Home
                                                </li>
                                        </Link>
                                        <Link to="/about" style={{ textDecoration: 'none', color: '#828282'}}>
                                                <li style={currentPage=='about'? {color:'black',borderBottom: '2px solid black'}: undefined}>
                                                        About me
                                                </li>
                                        </Link>
                                        <Link to="skills" style={{ textDecoration: 'none', color: '#828282'}}>
                                                <li style={currentPage=='skills'? {color:'black',borderBottom: '2px solid black'}: undefined}>
                                                        Skills
                                                </li>
                                        </Link>
                                        <Link to="portfolio" style={{ textDecoration: 'none', color: '#828282'}}>
                                                <li style={currentPage=='portfolio'? {color:'black',borderBottom: '2px solid black'}: undefined}>
                                                        Portfolio
                                                </li>
                                        </Link>
                                        <Link to="/contacts" style={{ textDecoration: 'none', color: '#828282'}}>
                                                <li style={currentPage=='contacts'? {color:'black',borderBottom: '2px solid black'}: undefined}>
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