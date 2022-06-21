//import axios from 'axios';
import './Parcelle.scss';
import Grille from "../Parcelle/Grille/Grille";
import ColonneFavoris from "./ColonneFavoris/ColonneFavoris";
import ColonneLegumes from './ColonneLegumes/ColonneLegumes';
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
            <ColonneFavoris crops = {props.crops}/>
            <Grille />
            <ColonneLegumes />
        </div>
      );
    };
  
  export default Parcelle;