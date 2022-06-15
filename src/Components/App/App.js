import React from 'react';

// Components imports
import { Routes, Route } from "react-router-dom";
import Team from '../Team/Team';
import Inscription from '../Inscription/Inscription'
import LoginPage from '../LoginPage/LoginPage';
//import Header from '../Header/Header';
import Error from '../404/404';
import axios from 'axios';
import ContactForm from '../Contact/Contact';
import CGU from '../CGU/CGU';

import HomePage from '../HomePage/HomePage';

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
    <div className="app">
      <Routes>
        <Route path="/" element={<HomePage />} /> 
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<Inscription />} />
        {/* <Route path="/reference" element={<MentionsLegales />} /> */}
        <Route path="/team" element={<Team />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/conditions" element={<CGU />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
    
  );
}

export default App;
