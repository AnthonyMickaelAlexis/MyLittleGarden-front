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
}) {
  const token = localStorage.getItem("token");
  const jwtDecoded = jwtDecode(token);

  useEffect(() => {}, []);

  // y = horizontal axix ((number of horizontal boxes))
  const horizontalSquaresWanted = Array(8).fill(".");

  return (
    <div className="row">
      {horizontalSquaresWanted.map((boite, x) => {
        {
          /* console.log(x, y); */
        }

        const squareClick = () => {
          console.log(cropsToParcel);
          {
            /* cropsToParcel[cropsToParcel.length - 1] = {
            crop_id:cropsToParcel[cropsToParcel.length - 1].cropId, 
            crop_img: cropsToParcel[cropsToParcel.length - 1].cropImg,
            position_x: x, 
            position_y: y,
            user_id: jwtDecoded.id,
            parcel_id: 2
          } */
          }
          console.log("test", cropsToParcel[0].id)
          const test = cropsToParcel.map((boite, index) => {
            console.log(boite)
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
          console.log("c'est lui", test)
          {
            /* setCropsToParcel([...cropsToParcel]); */
          }

          const baseURL = `https://oclock-my-little-garden.herokuapp.com/profil/${jwtDecoded.id}/parcel`; //${token.user.id}

          axios
            .patch(baseURL, test, {
              headers: {
                Authorization: `bearer ${token}`,
              },
            })
            .then((response) => {
              console.log("reponse :", response);
              // setFavoris(response.data);
            })
            .catch((error) => {
              console.error("error :", error);
            });

          setIsCropSelected(false);
        };

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
                {
                  /* console.log(images[cropsToParcel[index].crop_id - 1]) */
                }
                console.log(images[boite.id - 1].path);
                return (
                  <img src={images[boite.id - 1].path} alt="Icone légume" />
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
