import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Team from '../Team/Team';
import Inscription from '../Inscription/Inscription'
import LoginPage from '../LoginPage/LoginPage';
import Error from '../404/404';
import HomePage from '../HomePage/HomePage';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/inscription" element={<Inscription />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/team" element={<Team />} />
      {/* path="*" fonctionne si jamais l'url ne correspond à rien de déclaré au dessus */}
      <Route path="*" element={<Error />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
