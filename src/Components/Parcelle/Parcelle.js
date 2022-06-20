import Grille from "../Parcelle/Grille/Grille";
import ColonneFavoris from "./ColonneFavoris/ColonneFavoris";
import "./Parcelle.scss";


function Parcelle() {

      return (
        <div className="ParcellePage">
            <ColonneFavoris />
            <Grille />
        </div>
      );
    };
  
  export default Parcelle;