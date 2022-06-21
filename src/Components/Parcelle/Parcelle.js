<<<<<<< HEAD
import data from "../../data/data";
=======
//import axios from 'axios';
import './Parcelle.scss';
>>>>>>> fed3e3baef09a0ee5a2e3d0ab1e4a208d900e624
import Grille from "../Parcelle/Grille/Grille";
import ColonneFavoris from "./ColonneFavoris/ColonneFavoris";
import "./Parcelle.scss";


//const url = "https://oclock-my-little-garden.herokuapp.com/profil/users";

//axios.get("https://oclock-my-little-garden.herokuapp.com/profil/users", {
//  headers: {
//    Authorization: `bearer ${token}`
//  },
//})



function Parcelle(props) {
console.log(props.token)

      return (
        <div className="ParcellePage">
            <ColonneFavoris infos={data.infos}/>
            <Grille />
        </div>
      );
    };
  
  export default Parcelle;