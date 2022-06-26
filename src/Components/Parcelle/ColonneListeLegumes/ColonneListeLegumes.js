import {  useState } from 'react';
import './ColonneListeLegumes.scss';
import jwtDecode from 'jwt-decode';

import axios from 'axios';


function ColonneListeLegumes({ crops }) {
    
    // Button show/hide vegetable list
    const [show, setShow] = useState(true);
    
    const addToFav = async (cropId) => {
        // const cropToFind = crops.find((crop) => id === crop.id)
        // console.log(cropToFind);
        // let cropsFav = [];
        // console.log(cropsFav);
        try {
            const token = localStorage.getItem('token');
        const jwtDecoded = jwtDecode(token);

            console.log(token);
            const axiosInstance = axios.create({baseURL: 'https://oclock-my-little-garden.herokuapp.com'})
            axiosInstance.defaults.headers.authorization = `bearer ${token}`
            const axiosRequest = await axiosInstance.post(`/${cropId}/${jwtDecoded.id}`)
            console.log(axiosRequest);
        } catch (error) {
            console.log(error);
        }

    };
    
    
    return (
        <div className="favoris">
            <button onClick={() => setShow(!show)} className="favButton"> 

                Afficher/Masquer la liste des légumes
            </button>
            {
                show?<div className="colonneFav">
                    <h3 className="favTittle">Liste des légumes</h3>
                    <input
                        type="text"
                        className="searchVegetable"
                        placeholder="Rechercher un légume"
                    />
                    <ul className="vegetableList">
                
                    {crops && crops.map((crop) => {
                        return ( 
                            <li key={crop.id} className="vegetableSection">
                                <p className="vegetable">{crop.name}</p>
                                <img src={crop.crop_img} className="vegetableIcon" alt={`Icone ${crop.name}`}/>
                                <button className="addToFav" onClick={() => addToFav(crop.id)}>Ajouter aux favoris</button>
                            </li>
                        )                   
                    })}
                    </ul>
                </div>:null
            }
        </div>
    )
};

export default ColonneListeLegumes;
// A faire : 
//     - Faire fonctionner la recherche
//     - Hover sur les légumes pour les infos
//     - Adapter le texte du bouton afficher/masquer
//     - Rendre dynamique la liste des légumes (BDD)