/* eslint-disable import/prefer-default-export */
import axios from 'axios';

// on créer une instance de axios avec des parametres par defaut
// comme ca, à chaque futur requete on a pas besoin de repeter certaine info
const axiosInstance = axios.create({
  baseURL: 'https://oclock-my-little-garden.herokuapp.com',
});

export async function requestAll() {
  const response = await axiosInstance.get('/');
  return response.data;
}

export async function requestLogin(user, password) {
  // on utilise notre instance personnalisé de axios, donc on a pas besoin
  // de preciser la baseURL ("http://localhost:3001")
  const response = await axiosInstance.post('/login', {
    user, password,
  });
  return response.data;
}

export async function requestRegister(user_name, firstname, lastname, email, password) {
    // on utilise notre instance personnalisé de axios, donc on a pas besoin
    // de preciser la baseURL ("http://localhost:3001")
    const response = await axiosInstance.post('/register', {
        user_name, firstname, lastname, email, password
    });
    return response.data;
  }

  
