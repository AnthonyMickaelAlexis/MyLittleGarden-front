import "./Grille.scss";
import Row from "./Row/Row";

//Parcel size : each square represents a vegetable
// Vertical axix (number of vertical boxes)
const verticalSquaresWanted = Array(5).fill(".");
// y = horizontal axix ((number of horizontal boxes))
// const horizontalSquaresWanted = 5;

// A faire par la suite : laisser le choix de la taille à l'utilisateur

function Grille({
  cropsToParcel,
  setCropsToParcel,
  isCropSelected,
  setIsCropSelected,
}) {
  return (
    <div className="container">
      <h1 className="parcelTitle">Ma parcelle</h1>
      <div className="explanationSection">
      <p className="explanation"><span className="step">Etape 1 :</span>
         cliquez sur l'image de votre légume favoris
      </p>
      <p className="explanation"><span className="step">
        Etape 2 :</span> cliquez sur le morceau de parcelle de votre choix
      </p>
      <p className="explanation"><span className="step">Etape 3 :</span> Recommencez</p>
</div>
      <div className="parcelBoard">
        {
          // x = index
          verticalSquaresWanted.map((boite, y) => {
            return (
              <Row
                cropsToParcel={cropsToParcel}
                setCropsToParcel={setCropsToParcel}
                y={y}
                isCropSelected={isCropSelected}
                setIsCropSelected={setIsCropSelected}
              />
            );
          })
        }
      <button type="button" className="saveParcel">Sauvegarder ma parcelle</button>
      </div>
    </div>
  );
}

export default Grille;