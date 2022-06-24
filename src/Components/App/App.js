import React, { useState } from 'react';
import { useEffect} from 'react';

// Components imports
import { Routes, Route } from "react-router-dom";
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

//import Profile from '../Profile/Profile';
function App() {
  const [crops, setCrops] = useState();

useEffect (() => { 
  const token = localStorage.getItem('token');
  console.log(token);
  const axiosInstance = axios.create({baseURL: 'https://oclock-my-little-garden.herokuapp.com'})
  if (token) axiosInstance.defaults.headers.authorization = `bearer ${token}`
  const getCrop = async () => {
    const axiosRequest = await axiosInstance.get('/crops')
    setCrops(axiosRequest.data); 
  } 

  getCrop();
}, []) 


  return (
   <>
    <Header/>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/register" element={<Register />} />

      <Route path="/parcelle" element={<Parcelle crops = {crops}/>} />
      {/* <Route path="/profile" element={<Profile />} /> */}
      <Route path="/login" element={<LoginPage />} />
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
