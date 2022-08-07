import axios from "axios";
import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import jwtDecode from "jwt-decode";
import Grille from "../Parcelle/Grille/Grille";
import ColonneListeLegume from "./ColonneListeLegumes/ColonneListeLegumes";
import ColonneFavoris from "./ColonneFavoris/ColonneFavoris";
import "./Parcelle.scss";

function Parcelle( {isLogged, setIsLogged} ) {
  const [favoris, setFavoris] = useState([]);
  const [cropsToParcel, setCropsToParcel] = useState([]);
  const [isCropSelected, setIsCropSelected] = useState(false);
  const [crops, setCrops] = useState([]);

  useEffect(() => {
    //Ma requete pour les favoris du user
    const token = localStorage.getItem("token");
    const jwtDecoded = jwtDecode(token);
    setIsLogged(true);
    
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
        const baseURL3 = `https://oclock-my-little-garden.herokuapp.com/crops`; //${token.user.id}
        axios.get(baseURL3, {
              headers: {
                Authorization: `bearer ${token}`,
              },
            })
            .then((response) => {
              console.log("Get crops :", response);
              setCrops(response.data)
            })
            .catch((error) => {
              console.error("error :", error);
            });




      }, []);


  useEffect(() => {
    console.log(cropsToParcel);
  });

  // Fonction qui sert à importer les images pour les afficher sur notre site
  function importAll(r) {
    console.log("r =", r);
    const images = r.keys().map((item, index) => {
      console.log("item:", item, "index:", index);
      return {
        path: r(item),
        name: item.replace(".png", "").replace("./", ""),
        id: +item.replace(/(.*)/, index + 1),
      };
    });
    console.log("images =", images);
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

  imagesFiltered.filter((image) => image?.id);

  // console.log(imagesFiltered);

  let imagesToSquare = images.map((image) => {
    console.log(image);
    const favImage = cropsToParcel.find(
      (cropInParcel) => cropInParcel.id === image.id
    );
    if (favImage) {
      return image;
    } else {
      return undefined;
    }
  });

  imagesToSquare.filter((image) => image?.id);

  // let parcelId = cropsToParcel.find(
  //   (cropInParcel) => {
  //     return cropInParcel.parcel_id;
  //   }
  // );
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