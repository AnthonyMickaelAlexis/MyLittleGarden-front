import axios from 'axios';
import './Parcelle.scss';

//Parcel size : each square represents a vegetable
// Vertical axix (number of vertical boxes)
const verticalSquaresWanted = 8;
// y = horizontal axix ((number of horizontal boxes))
const horizontalSquaresWanted = 5;

// A faire par la suite : laisser le choix de la taille à l'utilisateur

//const url = "https://oclock-my-little-garden.herokuapp.com/profil/users";

//axios.get("https://oclock-my-little-garden.herokuapp.com/profil/users", {
//  headers: {
//    Authorization: `bearer ${token}`
//  },
//})



function Parcelle(props) {
console.log(props.token)

    let parcelle = [];

    // Boucle : 
    for (let j = verticalSquaresWanted - 1; j >=0; j--) {
        for (let i = 0; i < horizontalSquaresWanted; i++) {
            parcelle.push(
                <div className="square"></div>
            );
        }
    }

    return (
        <div className="parcelBoard">
           {parcelle}
        </div>
    );
  }

export default Parcelle;