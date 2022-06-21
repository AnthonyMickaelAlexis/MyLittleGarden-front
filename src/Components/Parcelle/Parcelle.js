//import axios from 'axios';
import './Parcelle.scss';
import Grille from "../Parcelle/Grille/Grille";
import ColonneListeLegume from "./ColonneListeLegumes/ColonneListeLegumes";
import ColonneFavoris from './ColonneFavoris/ColonneFavoris';
import "./Parcelle.scss";


//const url = "https://oclock-my-little-garden.herokuapp.com/profil/users";

//axios.get("https://oclock-my-little-garden.herokuapp.com/profil/users", {
//  headers: {
//    Authorization: `bearer ${token}`
//  },
//})



function Parcelle(props) {
console.log(props.crops);

      return (
        <div className="ParcellePage">
            <ColonneListeLegume crops = {props.crops}/>
            <Grille />
            <ColonneFavoris />
        </div>
      );
    };
  
  export default Parcelle;