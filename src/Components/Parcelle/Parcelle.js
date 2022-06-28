import axios from 'axios';
import { useState, useEffect } from 'react';
import jwtDecode from 'jwt-decode';
import Grille from "../Parcelle/Grille/Grille";
import ColonneListeLegume from "./ColonneListeLegumes/ColonneListeLegumes";
import ColonneFavoris from './ColonneFavoris/ColonneFavoris';
import "./Parcelle.scss";

function Parcelle({crops}) {

  const [favoris, setFavoris]= useState([]);
  const [cropsToParcel, setCropsToParcel] = useState([]);
  const [isCropSelected, setIsCropSelected] = useState(false);

  useEffect (() => {
  //Ma requete pour les favoris du user
  const token = localStorage.getItem('token');
  const jwtDecoded = jwtDecode(token);
  console.log(jwtDecoded.id)
  const baseURL = `https://oclock-my-little-garden.herokuapp.com/${jwtDecoded.id}/favori`;//${token.user.id}
  axios.get(baseURL, {
              headers: {
              Authorization: `bearer ${token}`
              },
            })
            .then((response) => {
              console.log('reponse :', response);
              setFavoris(response.data)
            })
            .catch((error) => {
              console.error('error :', error);
            });
          }, [])

          console.log(favoris)
  console.log({crops});
  

  // const token = localStorage.getItem('token');
  // const jwtDecoded = jwtDecode(token);
  // const url = `https://oclock-my-little-garden.herokuapp.com/home/profil/${jwtDecoded.id}/parcelsave`
  // axios.post(url, {cropsToParcel})     
  // .then((response) => {
  //   console.log('reponse :', response);
  //   localStorage.setItem("token", response.data.access_token);
  // })
  // .catch((error) => {
  //   console.error('error :', error);
  // });

  useEffect(() => {
    console.log(cropsToParcel);
  });

        return (
          <div className="ParcellePage">
              <ColonneListeLegume crops={crops} />
              <Grille cropsToParcel={cropsToParcel} setCropsToParcel={setCropsToParcel} isCropSelected={isCropSelected} setIsCropSelected={setIsCropSelected}/>
              <ColonneFavoris crops={crops} favoris={favoris} setFavoris={setFavoris} cropsToParcel={cropsToParcel} setCropsToParcel={setCropsToParcel} isCropSelected={isCropSelected} setIsCropSelected={setIsCropSelected} />
          </div>
        );
      };
    export default Parcelle;