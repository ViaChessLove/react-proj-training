import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import About from './pages/About';
import Contacts from './pages/Contacts';
import HomePage from './pages/HomePage';
import Portfolio from './pages/Portfolio';
import Skills from './pages/Skills';
import { ClimbingBoxLoader } from 'react-spinners';
import { css } from '@emotion/react';
import Context from './Context';

const override = css`
  margin: 0;
  padding: 0;
  background-color: #fff;
  display:flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

const App = () => {
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() =>{
      setLoading(false)
    }, 3000);
  }, [])
  
  return (
    <div className="App">
      {
        loading ? 
        (
        <>
          <ClimbingBoxLoader
            size={30}
            color={'#070707'}
            css={override}
            loading={loading}
          />
        </>
        )
        :
        (<BrowserRouter>
          <Context>
            <Header/>
            <Routes>
              <Route index element={<HomePage/>}/>
              <Route path='/about' element={<About/>}/>
              <Route path='/skills' element={<Skills/>}/>
              <Route path='/portfolio' element={<Portfolio/>}/>
              <Route path='/contacts' element={<Contacts/>}/> 
            </Routes>
            <Footer/>
          </Context>
        </BrowserRouter>)
      }
    </div>
  );
}

export default App;
