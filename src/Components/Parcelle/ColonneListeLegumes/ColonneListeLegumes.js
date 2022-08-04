import {  useState } from 'react';
import './ColonneListeLegumes.scss';
import jwtDecode from 'jwt-decode';


import axios from 'axios';


function ColonneListeLegumes({ crops, images }) {
    
    // Button show/hide vegetable list
    const [show, setShow] = useState(true);
    // const [search, setSearch] = useState('react');
    
    const addToFav = async (cropId) => {
        try {
            const token = localStorage.getItem('token');
            const jwtDecoded = jwtDecode(token);

            const axiosInstance = axios.create({baseURL: 'https://oclock-my-little-garden.herokuapp.com'})
            axiosInstance.defaults.headers.authorization = `bearer ${token}`
            const axiosRequest = await axiosInstance.post(`/${cropId}/${jwtDecoded.id}`)
            console.log('-------> post ajout favoris : ', axiosRequest)
        } catch (error) {
            console.log(error);
        }

        window.location.reload(false)

    };
    
    
    return (
        <div className="favoris">
            
            {
                show?<div className="colonneFav">
                    <h3 className="favTittle">Liste des légumes</h3>
                    {/* <input
                        type="text"
                        className="searchVegetable"
                        placeholder="Rechercher un légume"
                    /> */}
                    {/* <button className="addToFav" onClick={() => addToFav(crop.id)}>Ajouter aux favoris</button> */}

                    <ul className="vegetableList">
                
                    {crops && crops.map((crop) => {
                        {/* console.log(crop.id, crop.name); */}
                        return ( 
                            <li key={crop.id} className="vegetableSection">
                                <p className="vegetable">{crop.name}</p>
                                <img src={images[crop.id - 1].path} className="vegetableIcon" alt={`Icone ${crop.name}`}/>
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
