import React, { useContext, useEffect } from 'react';
import Button from '../components/Button';
import Fader from '../components/Fader';
import Socials from '../components/Socials';
import Modal from '../components/Modal';
import {useState} from 'react';
import {ImCross} from 'react-icons/im';
import './styles.css';
import { CurrentPage } from '../Context';

const Contacts = () => {

        const [modalActive, setModalActive] = useState<boolean>(false);
        const [adaptivnost, setAdaptivnost] = useState<boolean>(false);
        useEffect(() => {
          window.addEventListener('resize', () =>{
                  if (window.innerWidth < 940){
                        setAdaptivnost(true);
                  } else {
                          setAdaptivnost(false);
                  }
          })
        }, [])
        const {currentPage, setCurrentPage} = useContext(CurrentPage);
        setCurrentPage('contacts');
        return (
                <div className="contacts_wrapper">
                        <Fader delay={500}>       
                                <div style={{fontWeight: '600', fontSize: '34px', marginBottom:'20px'}}>
                                        Contacts
                                        {adaptivnost? 'hui': undefined}
                                </div>
                        </Fader>
                        <Fader delay={800}>     
                                <div style={{maxWidth:'270px', margin:'0 auto', marginBottom:'30px', fontSize: '18px'}}>
                                        Want to know more or just chat? You are welcome!
                                </div>
                        </Fader>
                        <Fader delay={850}>
                                <Button content="Send message" onClick={() => setModalActive(true)}/>
                        </Fader>
                        <Fader delay={1000}>
                                <Socials/>
                        </Fader>
                        <Fader delay={1100}>
                                <div style={{paddingTop:'45px', color:'#828282'}}>
                                        Like me on <br/>LinkedIn, Instagram, Behance, Dribble
                                </div>
                        </Fader>
                        <Modal active={modalActive} setActive={setModalActive}>
                                <ImCross style={{display:'flex', alignItems:'flex-start', justifyContent: 'flex-end', cursor: 'pointer'}} onClick={() => setModalActive(false)}/>
                                <form action="submit" onSubmit={(e) => e.preventDefault()} style={{
                                        maxWidth: '300px',
                                        margin: '0 auto',
                                        display:'flex', flexDirection: 'column'
                                        }}>
                                        <div style={{display:'flex', justifyContent:'flex-start', marginTop:'50px', fontWeight:'bold'}}>
                                                E-mail
                                        </div>
                                        <input type="text"  style={{border: 'none', borderBottom: '1px solid',marginTop:'10px', marginBottom:'20px'}}/>
                                        <div style={{display:'flex', justifyContent:'flex-start', marginTop:'50px', fontWeight:'bold'}}>
                                                Message
                                        </div>
                                        <input type="text" style={{border: 'none', borderBottom: '1px solid', marginTop:'10px', marginBottom:'80px', height: '100px'}}/>
                                        <Button content='Submit'/>
                                </form>
                        </Modal>
                </div>
        );
};

export default Contacts;