import "./Grille.scss";
import Row from "./Row/Row";

//Parcel size : each square represents a vegetable
// Vertical axix (number of vertical boxes)
const verticalSquaresWanted = Array(5).fill(".");
// y = horizontal axix ((number of horizontal boxes))
// const horizontalSquaresWanted = 5;

// A faire par la suite : laisser le choix de la taille à l'utilisateur

function Grille({cropsToParcel, setCropsToParcel, isCropSelected, setIsCropSelected}) {
  return (
    <div className="parcelBoard">
      {
        // x = index
        verticalSquaresWanted.map((boite, y) => {
          return <Row  cropsToParcel={cropsToParcel} setCropsToParcel={setCropsToParcel} y={y} isCropSelected={isCropSelected} setIsCropSelected={setIsCropSelected} />;
        })
      }
    </div>
  );
}

export default Grille;
