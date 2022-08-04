// import du hook useState
import React, { useState } from 'react';

import { useEffect} from 'react';
// On peut utiliser Routes, Route et Navigate car on a mis notre App dans une balise <BrowserRouter /> 
// (dans index.js)
import { Routes, Route, Navigate } from "react-router-dom";

// Components imports
import Team from '../Team/Team';
import Register from '../Register/Register';
import LoginPage from '../LoginPage/LoginPage';
import Error from '../404/404';
import Contact from '../Contact/Contact';
import CGU from '../CGU/CGU';
import Parcelle from '../Parcelle/Parcelle';
import HomePage from '../HomePage/HomePage';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Profil from '../Profil/Profil';

// Dans App, on défini le squelette de notre application
function App() {

  // isLogged = fonction pour se connecter, setIsLogged = fonction pour mettre à jour la fonction isLogged
  const [isLogged, setIsLogged] = useState(false);
  
  

useEffect (() => { 
  // On vérifie si l'utilisateur est loggé ou non
  let loggedOk = window.localStorage.getItem(isLogged);
  console.log(loggedOk)
  // On récupère le token
  const token = localStorage.getItem('token');
  console.log(`mon token: ${token}`);
  
}, []) 

// Return = ce qui s'affiche sur la page

return (
  <>
    {/* Dans le composant <Header />, on passe les fonctions isLogged et setIsLogged pour pouvoir 
    les utiliser dans le composant (idem pour les autres fonctions dans les autres composants) */}
    <Header isLogged={isLogged} setIsLogged={setIsLogged}/>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/register" element={<Register />} />
      {/* crops est définit à la ligne 26, on veut l'envoyer dans le composant 
      Parcelle */}
      <Route path="/parcelle" element={<Parcelle isLogged={isLogged} setIsLogged={setIsLogged}/>} />
      <Route path="/login" element={<LoginPage isLogged={isLogged} setIsLogged={setIsLogged} />} />
      {!isLogged && <Route path="/profil" element={<Navigate to="/" />} />} 
      <Route path="/profil" element={<Profil isLogged={isLogged} setIsLogged={setIsLogged} />} />
      <Route path="/team" element={<Team />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/cgu" element={<CGU/>} />

      {/* path="*" fonctionne si jamais l'url ne correspond à rien de déclaré au dessus */}
      <Route path="*" element={<Error />} />
    </Routes>
    <Footer/>
    

    </>
  );
}

export default App;