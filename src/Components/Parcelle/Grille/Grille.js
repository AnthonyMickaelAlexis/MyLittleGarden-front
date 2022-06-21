import './Grille.scss';

//Parcel size : each square represents a vegetable
// Vertical axix (number of vertical boxes)
const verticalSquaresWanted = 8;
// y = horizontal axix ((number of horizontal boxes))
const horizontalSquaresWanted = 5;

// A faire par la suite : laisser le choix de la taille à l'utilisateur

function Grille() {

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
};

export default Grille;