import React from 'react';
import Team from '../Team/Team';
import Header from '../Header/Header';
import Inscription from '../Inscription/Inscription'
import LoginPage from '../LoginPage/LoginPage';
import Error from '../404/404';
import HomePage from '../HomePage/HomePage';
import Footer from '../Footer/Footer';

function App() {
  return (
    <div className="app">
      <HomePage/>
      <Header />
      <Team />
      <Inscription />
      <LoginPage />
      <Error />
      <Footer/>
    </div>
  );
}

export default App;
