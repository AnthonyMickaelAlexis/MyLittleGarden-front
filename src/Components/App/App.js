import React from 'react';

// Components imports
import { Routes, Route } from "react-router-dom";
import Team from '../Team/Team';
import Register from '../Register/Register';
import LoginPage from '../LoginPage/LoginPage';
import Error from '../404/404';
import axios from 'axios';
//import ContactForm from '../Contact/Contact';
import CGU from '../CGU/CGU';

import HomePage from '../HomePage/HomePage';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function App() {

   axios.get('/', {
    baseURL: "https://oclock-my-little-garden.herokuapp.com",
  })
    .then((response) => {
      console.log('reponse :', response);
    })
    .catch((error) => {
      console.error('error :', error);
    });
  
  return (
   <>
    <Header/>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/team" element={<Team />} />
      <Route path="/cgu" element={<CGU/>} />
      {/* path="*" fonctionne si jamais l'url ne correspond à rien de déclaré au dessus */}
      <Route path="*" element={<Error />} />
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
