import React from 'react';
import {AiOutlineBehance, AiOutlineDribbble, AiOutlineInstagram, AiOutlineLinkedin} from 'react-icons/ai';

const Socials = () => {
        return (
                <div style={{marginTop:'86px'}} className="socials__wrapper">
                        <a href="https://github.com/ViaChessLove" target="_blank" style={{textDecoration: 'none', color:'black'}}>
                                <AiOutlineLinkedin style={{fontSize:'40px', color:'#black'}} href='https://github.com/ViaChessLove'/>
                        </a>
                        <a href="https://github.com/ViaChessLove" target="_blank" style={{textDecoration: 'none', color:'black'}}> 
                                <AiOutlineInstagram style={{fontSize:'40px', color:'#black'}} href='https://github.com/ViaChessLove'/>
                        </a>
                        <a href="https://github.com/ViaChessLove" target="_blank" style={{textDecoration: 'none', color:'black'}}> 
                                <AiOutlineBehance style={{fontSize:'40px', color:'#black'}} href='https://github.com/ViaChessLove'/>
                        </a>
                        <a href="https://github.com/ViaChessLove" target="_blank" style={{textDecoration: 'none', color:'black'}}>
                                <AiOutlineDribbble style={{fontSize:'40px', color:'#black'}} href='https://github.com/ViaChessLove'/>
                        </a>
                </div>
        );
};

export default Socials;