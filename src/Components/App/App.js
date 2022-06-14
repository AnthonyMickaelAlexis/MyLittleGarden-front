import React from 'react';
import { Route, Routes } from 'react-router-dom';

// Components imports
import Team from '../Team/Team';
import Header from '../Header/Header';
import Inscription from '../Inscription/Inscription'
import LoginPage from '../LoginPage/LoginPage';
import Error from '../404/404';
<<<<<<< HEAD
import axios from 'axios';
=======
import ContactForm from '../Contact/Contact';
import CGU from '../CGU/CGU';

>>>>>>> origin/06-14-Alexandra

function App() {
  
  axios.get('/home', {
    baseURL: "https://oclock-my-little-garden.herokuapp.com/home",
  })
    .then((response) => {
      console.log('reponse :', response);
    })
    .catch((error) => {
      console.error('error :', error);
    });
  
    

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
