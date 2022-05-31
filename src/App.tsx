import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import About from './pages/About';
import Contacts from './pages/Contacts';
import HomePage from './pages/HomePage';
import Portfolio from './pages/Portfolio';
import Skills from './pages/Skills';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route index element={<HomePage/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/skills' element={<Skills/>}/>
          <Route path='/portfolio' element={<Portfolio/>}/>
          <Route path='/contacts' element={<Contacts/>}/>
          
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
