import React, { useState } from 'react';
import { useEffect} from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// Components imports
import Team from '../Team/Team';
import Register from '../Register/Register';
import LoginPage from '../LoginPage/LoginPage';
import Error from '../404/404';
import axios from 'axios';
import Contact from '../Contact/Contact';
import CGU from '../CGU/CGU';
import Parcelle from '../Parcelle/Parcelle';
import HomePage from '../HomePage/HomePage';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Profil from '../Profil/Profil';


function App() {

  const [isLogged, setIsLogged] = useState(false);
  const [crops, setCrops] = useState();
  

useEffect (() => { 
  let loggedOk = window.localStorage.getItem(isLogged);
  console.log(loggedOk)
  const token = localStorage.getItem('token');
  console.log(`mon token: ${token}`);
  const axiosInstance = axios.create({baseURL: 'https://oclock-my-little-garden.herokuapp.com'})
  token ? setIsLogged(true) : setIsLogged(false);
  if (token) axiosInstance.defaults.headers.authorization = `bearer ${token}`
  const getCrop = async () => {
    const axiosRequest = await axiosInstance.get('/crops')
    setCrops(axiosRequest.data); 
  } 

  getCrop();
}, [isLogged]) 

console.log(isLogged)

  return (
   <>
    <Header isLogged={isLogged} setIsLogged={setIsLogged}/>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/register" element={<Register />} />
      <Route path="/parcelle" element={<Parcelle crops = {crops}/>} />
      <Route path="/login" element={<LoginPage isLogged={isLogged} setIsLogged={setIsLogged} />} />
      {!isLogged && <Route path="/profil" element={<Navigate to="/" />} />} 
      <Route path="/profil" element={<Profil isLogged={isLogged} setIsLogged={setIsLogged} />} />
      <Route path="/profil" element={<Navigate to="/" />} />  
      <Route path="/register" element={<Navigate replace to="/login" />} />  
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