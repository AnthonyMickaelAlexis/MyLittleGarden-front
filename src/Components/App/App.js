import React from 'react';
import { Route, Routes } from 'react-router-dom';

// Components imports
import Team from '../Team/Team';
import Header from '../Header/Header';
import Inscription from '../Inscription/Inscription'
import LoginPage from '../LoginPage/LoginPage';
import Error from '../404/404';
//import axios from 'axios';
import ContactForm from '../Contact/Contact';
import CGU from '../CGU/CGU';


function App() {
  
  return (
    <div className="app">
      <Header />
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
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
