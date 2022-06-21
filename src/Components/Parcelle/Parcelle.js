import axios from 'axios';
import jwtDecode from 'jwt-decode';
import './Parcelle.scss';
import Grille from "../Parcelle/Grille/Grille";
import ColonneFavoris from "./ColonneFavoris/ColonneFavoris";
import ColonneLegumes from './ColonneLegumes/ColonneLegumes';
import "./Parcelle.scss";

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
          })
          .catch((error) => {
            console.error('error :', error);
          });

function Parcelle(props) {
//console.log(props.token)

      return (
        <div className="ParcellePage">
            <ColonneFavoris />
            <Grille />
            <ColonneLegumes />
        </div>
      );
    };
  
  export default Parcelle;