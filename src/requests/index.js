/* eslint-disable import/prefer-default-export */
//import axios from 'axios';

//Requetes GET------------------------------------

// on créer une instance de axios avec des parametres par defaut
// comme ca, à chaque futur requete on a pas besoin de repeter certaine info
//const axiosInstance = axios.create({
//  baseURL: 'https://oclock-my-little-garden.herokuapp.com',
//});
////on créer une requete pour tout les users sur herokuapp.com
//export async function requestAll() {
//  const response = await axiosInstance.get('/profile/users');
//  return response.data;
//}
//
//export async function requestFavorite() {
//  const response = await axiosInstance.get('/:userid/favori');
//  return response.data;
//}
//
//export async function requestUserCropid() {
//  const response = await axiosInstance.get('/:cropid/userid');
//  return response.data;
//}

//Requetes POST------------------------------------
//
////on créer une requete POST pour se loguer
//export async function requestLogin(user_name, password) {
//  // on utilise notre instance personnalisé de axios, donc on a pas besoin
//  // de preciser la baseURL ("http://localhost:3001")
//  const response = await axiosInstance.post('/login', {
//    user_name, password,
//  });
//  return response.data;
//}
//
////on créer une requete POST pour s'inscrire
//export async function requestRegister(user_name, firstname, lastname, email, password) {
//    
//    const response = await axiosInstance.post('/register', {
//        user_name, firstname, lastname, email, password
//    });
//    return response.data;
//  }

  
