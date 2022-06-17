import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Team from '../Team/Team';
import Inscription from '../Inscription/Inscription'
import LoginPage from '../LoginPage/LoginPage';
import Error from '../404/404';
import HomePage from '../HomePage/HomePage';
import Header from '../Header/Header';
import CGU from '../Cgu/CGU';
import Footer from '../Footer/Footer';

function App() {
  return (
    
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/inscription" element={<Inscription />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/team" element={<Team />} />
      <Route path="/cgu" element={<CGU/>} />
      {/* path="*" fonctionne si jamais l'url ne correspond à rien de déclaré au dessus */}
      <Route path="*" element={<Error />} />
    </Routes>
    <Footer/>
  </BrowserRouter>
    
  );
}

export default App;
