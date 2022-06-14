import React from 'react';
import Team from '../Team/Team';
import Header from '../Header/Header';
import Inscription from '../Inscription/Inscription'
import LoginPage from '../LoginPage/LoginPage';
import Error from '../404/404';

function App() {
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
