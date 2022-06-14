import React from 'react';
import Team from '../Team/Team';
import Header from '../Header/Header';
import Inscription from '../Inscription/Inscription'
import LoginPage from '../LoginPage/LoginPage';
import Error from '../404/404';
import axios from 'axios';

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
      <Team />
      <Inscription />
      <LoginPage />
      <Error />
    </div>
  );
}

export default App;
