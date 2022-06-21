import axios from 'axios';
import './Parcelle.scss';
import Grille from "../Parcelle/Grille/Grille";
import ColonneFavoris from "./ColonneFavoris/ColonneFavoris";
import "./Parcelle.scss";
import {token} from '../LoginPage/LoginPage';

console.log(token)
//Ma requete pour les favoris du user
const baseURL = `https://oclock-my-little-garden.herokuapp.com/:userid/favori`;//${token.user.id}
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
        </div>
      );
    };
  
  export default Parcelle;