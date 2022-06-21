import React from 'react';

// Components imports
import { Routes, Route } from "react-router-dom";
import Team from '../Team/Team';
import Register from '../Register/Register';
import LoginPage from '../LoginPage/LoginPage';
import Error from '../404/404';
//import axios from 'axios';
import Contact from '../Contact/Contact';
import CGU from '../CGU/CGU';
import Parcelle from '../Parcelle/Parcelle';

import HomePage from '../HomePage/HomePage';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
//import Register2 from '../Register2/Register2';
//import Login2 from '../Login2/Login2';
import Profile from '../Profile/Profile';
function App() {



  return (
   <>
    <Header/>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/register" element={<Register />} />
      {/*<Route path="/register2" element={<Register2 />} /> */}
      {/*<Route path="/login2" element={<Login2 />} /> */}

      <Route path="/parcelle" element={<Parcelle />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/contact" element={<Contact />} />
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
