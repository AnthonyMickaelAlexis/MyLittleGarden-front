import axios from "axios";
import jwtDecode from "jwt-decode";


function Row({ y }) {
  const result = [
    {
      user_id: 1,
      crop_id: 1,
      parcel_id: 1,
      position_x: 5,
      position_y: 2,
    },
    {
      user_id: 1,
      crop_id: 3,
      parcel_id: 1,
      position_x: 3,
      position_y: 1,
    },
    {
        user_id: 1,
        crop_id: 5,
        parcel_id: 1,
        position_x: 0,
        position_y: 2,
      },
  ];

  const token = localStorage.getItem("token");
    const jwtDecoded = jwtDecode(token);

    const baseURL = `https://oclock-my-little-garden.herokuapp.com/profil/${jwtDecoded.id}/parcel`; //${token.user.id}

    axios.get(baseURL, {
        headers: {
          Authorization: `bearer ${token}`,
        },
      })
      .then((response) => {
        // console.log("reponse :", response);
      })
      .catch((error) => {
        console.error("error :", error);
      });
      
      
      // y = horizontal axix ((number of horizontal boxes))
      const horizontalSquaresWanted = Array(8).fill(".");
      
      return (
          <div className="row">
      {horizontalSquaresWanted.map((boite, x) => {
        {/* console.log(x, y); */}
        return (
          <div className="square">
            {/* {
                        y === result[0].position_y && x === result[0].position_x && 'A'
                    }
                    {
                        y === result[1].position_y && x === result[1].position_x && 'B'
                    } */}
            {result.map((boite, index) => {
              {
                /* return y === result[index].position_y 
                                && x === result[index].position_x 
                                && result[index].crop_id */
              }
              if (
                y === result[index].position_y &&
                x === result[index].position_x
              ) {
                return result[index].crop_id;
              }
            })}
          </div>
        );
      })}
    </div>
  );
}

export default Row;
