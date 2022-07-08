import axios from "axios";
import jwtDecode from "jwt-decode";
import { useEffect } from "react";

function Row({
  cropsToParcel,
  setCropsToParcel,
  y,
  isCropSelected,
  setIsCropSelected,
  images,
  setCropToDelete
}) {
  const token = localStorage.getItem("token");
  const jwtDecoded = jwtDecode(token);

  useEffect(() => {}, []);

  // y = horizontal axix ((number of horizontal boxes))
  const horizontalSquaresWanted = Array(8).fill(".");

  return (
    <div className="row">
      {horizontalSquaresWanted.map((boite, x) => {
  

        const squareClick = async () => {

          const test = cropsToParcel.map((boite, index) => {
            if (cropsToParcel.length - 1 === index) {
              return {
                user_id: jwtDecoded.id,
                crop_id: cropsToParcel[cropsToParcel.length - 1].cropId,
                parcel_id: jwtDecoded.id,
                position_x: x,
                position_y: y,
              };
            }
            return {
                user_id: jwtDecoded.id,
                crop_id: cropsToParcel[index].id,
                parcel_id: jwtDecoded.id,
                position_x: boite.position_x,
                position_y: boite.position_y,
            }
          });

          const baseURL = `https://oclock-my-little-garden.herokuapp.com/profil/${jwtDecoded.id}/parcel`; //${token.user.id}

          await axios
            .patch(baseURL, test, {
              headers: {
                Authorization: `bearer ${token}`,
              },
            })
            .then((response) => {
              console.log("-----> patch dans parcel :", response);
              // setFavoris(response.data);
            })
            .catch((error) => {
              console.error("error :", error);
            });

          setIsCropSelected(false);
          window.location.reload(false)
        };

        const handleClickImage = (x, y, cropId) => {
          console.log(x, y, cropId)
          const cropToDelete = {}
          cropToDelete.position_x = x;
          cropToDelete.position_y = y;
          cropToDelete.user_id = jwtDecoded.id;
          cropToDelete.crop_id = cropId;
          cropToDelete.token = token;
          console.log(cropToDelete)
          setCropToDelete(cropToDelete);
        }

        return (
          <div
            className="square"
            onClick={() => isCropSelected && squareClick()}
          >
            {cropsToParcel.map((boite, index) => {
              if (
                y === cropsToParcel[index].position_y &&
                x === cropsToParcel[index].position_x
              ) {
                return (
                  <img src={images[boite.id - 1].path} alt="Icone légume" onClick={() => {
                    handleClickImage(x, y, boite.id)
                  }}/>
                );
              }
            })}
          </div>
        );
      })}
    </div>
  );
}

export default Row;
