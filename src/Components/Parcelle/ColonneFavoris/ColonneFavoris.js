import axios from 'axios';
import React from 'react';
import './ColonneFavoris.scss';
import jwtDecode from 'jwt-decode';
// import PropTypes from 'prop-types';
// Imports images
//import courgetteIcon from '../../../assets/images/imagesLegumes/courgette.png';
export default function ColonneFavoris({favoris, setFavoris}) {
    const deleteFav = (cropId) => {
        const newFavoriteList = favoris.filter((crop) => crop.id !== cropId);
        setFavoris(newFavoriteList)
        console.log(newFavoriteList);
            //Ma requete pour les favoris du user
            const token = localStorage.getItem('token');
            const jwtDecoded = jwtDecode(token);
            const baseURL = `https://oclock-my-little-garden.herokuapp.com/${jwtDecoded.id}/${cropId}`;//${token.user.id}
            axios.delete(baseURL, {
                        headers: {
                        Authorization: `bearer ${token}`
                        },
                      })
                      .then((response) => {
                        console.log('reponse :', response);
                      })
                      .catch((error) => {
                        console.error('error :', error);
                      });
          
        //const cropToDelete = favoris.find((crop) => id === crop.id)
        //console.log(cropToDelete);
    };    return (
        <div className="colonneLegume">
            <h3 className="favTittle">Liste des favoris</h3>
            <ul className="listeLegumes">
            {favoris && favoris.map((crop, id) => {
            return (
                <li key={crop.id} className="vegetableSection">
                    <p className="vegetable">{crop.name}</p>
                    <img src={crop.crop_img} className="vegetableIcon" alt={`Icone ${crop.name}`}/>
                    <button className="deleteFromFav" onClick={() => deleteFav(crop.id)}>supprimer des favoris</button>
                </li>
            )
        })}
        </ul>
        </div>
    )}