import React from 'react';
import Button from '../components/Button';
import Fader from '../components/Fader';
import Socials from '../components/Socials';

const Contacts = () => {
        return (
                <div className="contacts_wrapper">
                        <Fader delay={500}>       
                                <div style={{fontWeight: '600', fontSize: '34px', marginBottom:'20px'}}>
                                        Contacts
                                </div>
                        </Fader>
                        <Fader delay={800}>     
                                <div style={{maxWidth:'270px', margin:'0 auto', marginBottom:'30px', fontSize: '18px'}}>
                                        Want to know more or just chat? You are welcome!
                                </div>
                        </Fader>
                        <Fader delay={850}>
                                <Button content="Send message" />
                                <button>
                                        content)
                                </button>
                        </Fader>
                        <Fader delay={1000}>
                                <Socials/>
                        </Fader>
                        <Fader delay={1100}>
                                <div style={{paddingTop:'45px', color:'#828282'}}>
                                        Like me on <br/>LinkedIn, Instagram, Behance, Dribble
                                </div>
                        </Fader>
                </div>
        );
};

export default Contacts;