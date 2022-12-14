import React from "react";

import axios from "axios";

import "./ColonneFavoris.scss";
import jwtDecode from "jwt-decode";

export default function ColonneFavoris({ favoris, setFavoris, cropsToParcel, setCropsToParcel, isCropSelected, setIsCropSelected, images }) {
  
  
  const deleteFav = (cropId) => {
    // Ici, on filter l'id du plant qu'on veut supprimer pour créer une nouvelle liste sans l'id du filter qu'on supprime
    const newFavoriteList = favoris.filter((crop) => crop.id !== cropId);
    
    // console.log(newFavoriteList);
    //Ma requete pour les favoris du user
    const token = localStorage.getItem("token");
    const jwtDecoded = jwtDecode(token);
    setFavoris(newFavoriteList);
    
    const baseURL = `https://oclock-my-little-garden.herokuapp.com/${jwtDecoded.id}/${cropId}`; //${token.user.id}
    
    axios
    .delete(baseURL, {
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
    };

    
    const selectFavoriteCrop = (cropId, cropImg) => {
      setCropsToParcel([...cropsToParcel, {cropId, cropImg}]);
      setIsCropSelected(true);
    };
    

  return (
    <div className="colonneLegume">
      <h3 className="favTittle">Liste des favoris</h3>
      <ul className="vegetableList">
        {favoris.map((crop) => {
          {/* console.log(crop.id); */}
          return (
            <li key={crop.id} className="vegetableSection">
              <p className="vegetable">{crop.name}</p>
              <img
                src={images[crop.id - 1].path}
                className="vegetableIcon"
                alt={`Icone ${crop.name}`}
                onClick={() => !isCropSelected && selectFavoriteCrop(crop.id)}
                // onClick={() => isCropSelected ? null : selectFavoriteCrop(crop.id)}
              />
              <button
                className="deleteFromFav"
                onClick={() => deleteFav(crop.id)}
              >
                Supprimer des favoris
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}