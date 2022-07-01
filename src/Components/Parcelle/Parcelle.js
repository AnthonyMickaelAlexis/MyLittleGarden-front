import axios from "axios";
import { useState, useEffect } from "react";
import jwtDecode from "jwt-decode";
import Grille from "../Parcelle/Grille/Grille";
import ColonneListeLegume from "./ColonneListeLegumes/ColonneListeLegumes";
import ColonneFavoris from "./ColonneFavoris/ColonneFavoris";
import "./Parcelle.scss";

function Parcelle({ crops }) {
  const [favoris, setFavoris] = useState([]);
  const [cropsToParcel, setCropsToParcel] = useState([]);
  const [isCropSelected, setIsCropSelected] = useState(false);

  useEffect(() => {
    //Ma requete pour les favoris du user
    const token = localStorage.getItem("token");
    const jwtDecoded = jwtDecode(token);
    // console.log(jwtDecoded.id)
    // const baseURL = `https://oclock-my-little-garden.herokuapp.com/profil/${jwtDecoded.id}/parcel`; //${token.user.id}
    
    // axios
    //   .patch(baseURL, 
    //   {
    //     headers: {
    //       Authorization: `bearer ${token}`,
    //     },
    //   })
    //   .then((response) => {
    //     console.log("reponse :", response);
    //     // setFavoris(response.data);
    //   })
    //   .catch((error) => {
    //     console.error("error :", error);
    //   });

    const baseURL2 = `https://oclock-my-little-garden.herokuapp.com/${jwtDecoded.id}/favori`; //${token.user.id}
    axios
      .get(baseURL2, {
        headers: {
          Authorization: `bearer ${token}`,
        },
      })
      .then((response) => {
        console.log("reponse :", response);
        setFavoris(response.data);
      })
      .catch((error) => {
        console.error("error :", error);
      });

      const baseURL = `https://oclock-my-little-garden.herokuapp.com/profil/${jwtDecoded.id}/parcel`; //${token.user.id}
    axios.get(baseURL, {
          headers: {
            Authorization: `bearer ${token}`,
          },
        })
        .then((response) => {
          console.log("Get parcel :", response);
          setCropsToParcel(response.data)
        })
        .catch((error) => {
          console.error("error :", error);
        });

    //   const baseURL3 = `https://oclock-my-little-garden.herokuapp.com/profil/${jwtDecoded.id}/parcel`; //${token.user.id}
    // axios
    //   .get(baseURL3, {
    //     headers: {
    //       Authorization: `bearer ${token}`,
    //     },
    //   })
    //   .then((response) => {
    //     console.log("Get parcel :", response);
    //     setCropsToParcel(response.data);
    //   })
    //   .catch((error) => {
    //     console.error("error :", error);
    //   });
  }, []);

  // console.log(favoris)
  // console.log({crops});

  // const token = localStorage.getItem('token');
  // const jwtDecoded = jwtDecode(token);
  // const url = `https://oclock-my-little-garden.herokuapp.com/home/profil/${jwtDecoded.id}/parcelsave`
  // axios.post(url, {cropsToParcel})
  // .then((response) => {
  //   console.log('reponse :', response);
  //   localStorage.setItem("token", response.data.access_token);
  // })
  // .catch((error) => {
  //   console.error('error :', error);
  // });

  useEffect(() => {
    console.log(cropsToParcel);
  });

  function importAll(r) {
    const images = r.keys().map((item, index) => {
      return {
        path: r(item),
        name: item.replace(".png", "").replace("./", ""),
        id: +item.replace(/(.*)/, index + 1),
      };
    });
    return images;
  }

  const images = importAll(
    require.context(
      "../../assets/images/imagesLegumes",
      false,
      /\.(png|jpe?g|svg)$/
    )
  );

  // console.log(images)

  // Map, puis find, puis if et filter
  let imagesFiltered = images.map((image) => {
    const favImage = favoris.find((favori) => favori.id === image.id);
    if (favImage) {
      return image;
    } else {
      return undefined;
    }
  });

  imagesFiltered = imagesFiltered.filter((image) => image?.id);

  // console.log(imagesFiltered);

  let imagesToSquare = images.map((image) => {
    const favImage = cropsToParcel.find(
      (cropInParcel) => cropInParcel.id === image.id
    );
    if (favImage) {
      return image;
    } else {
      return undefined;
    }
  });

  imagesToSquare = imagesToSquare.filter((image) => image?.id);

  // console.log(imagesToSquare);

  return (
    <div className="ParcellePage">
      <ColonneListeLegume crops={crops} images={images} />
      <Grille
        cropsToParcel={cropsToParcel}
        setCropsToParcel={setCropsToParcel}
        isCropSelected={isCropSelected}
        setIsCropSelected={setIsCropSelected}
        images={images}
      />
      <ColonneFavoris
        crops={crops}
        favoris={favoris}
        setFavoris={setFavoris}
        cropsToParcel={cropsToParcel}
        setCropsToParcel={setCropsToParcel}
        isCropSelected={isCropSelected}
        setIsCropSelected={setIsCropSelected}
        images={images}
      />
    </div>
  );
}
export default Parcelle;
