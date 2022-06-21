import { useEffect, useState } from 'react';
import './ColonneFavoris.scss';
// import PropTypes from 'prop-types';


// Imports images
import courgetteIcon from '../../../assets/images/imagesLegumes/courgette.png';
import axios from 'axios';
// import tomateIcon from '../../../assets/images/imagesLegumes/tomate.png';
// import aubergineIcon from '../../../assets/images/imagesLegumes/aubergine.png';


function ColonneFavoris() {
    
    // Button show/hide vegetable list
    const [show, setShow] = useState(true);
    
    const addToFav = () => {
        console.log('ça marche');
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
                    <div className="vegetableSection">
                        <li className="vegetable" >Tomates</li>
                        <img src={courgetteIcon} className="vegetableIcon" alt="Icone courgette" />
                        <button className="addToFav" onClick={() => addToFav()}>Ajouter aux favoris</button>
                        <button className="deleteFromFav">Supprimer des favoris</button>
                    </div>
                    </ul>
                </div>:null
            }
        </div>
    )
};

export default ColonneFavoris;


// A faire : 
//     - Ajouter aux favoris
//     - Supprimer des favoris
//     - Faire fonctionner la recherche
//     - Hover sur les légumes pour les infos
//     - Adapter le texte du bouton afficher/masquer
//     - Rendre dynamique la liste des légumes (BDD)
