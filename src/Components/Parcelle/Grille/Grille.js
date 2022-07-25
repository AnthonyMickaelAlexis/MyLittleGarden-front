import { useState } from "react";
import "./Grille.scss";
import Row from "./Row/Row";
import axios from 'axios';

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
  images,
  parcelId
}) {

  const [cropToDelete, setCropToDelete] = useState({});

  const handleClickDelete = async () => {
    const baseURL = `https://oclock-my-little-garden.herokuapp.com/${cropToDelete.user_id}/${cropToDelete.crop_id}/parcel`; //${token.user.id}
    
    await axios
    .delete(baseURL,  {
      headers: {
        Authorization: `bearer ${cropToDelete.token}`,
      }, data: {
        position_x: cropToDelete.position_x,
        position_y: cropToDelete.position_y,
      }
    })
    .then((response) => {
      // console.log("reponse :", response);
      })
      .catch((error) => {
        console.error("error :", error);
      });

    window.location.reload(false)
  }

  return (
    <div className="container">
      <h1 className="parcelTitle">Ma parcelle</h1>
      <div className="explanationSection">
      <p className="explanation"><span className="step">Etape 1 :</span>
         cliquez sur l'image de votre légume favori
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
                images={images}
                setCropToDelete={setCropToDelete}
                parcelId={parcelId}
              />
            );
          })
        }
      <button type="button" className="saveParcel" onClick={handleClickDelete}>Supprimer le légume sélectionné</button>
      </div>
    </div>
  );
}

export default Grille;