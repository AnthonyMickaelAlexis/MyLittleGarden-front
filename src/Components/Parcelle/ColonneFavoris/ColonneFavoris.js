import { useState } from 'react';
import './ColonneFavoris.scss';
// import PropTypes from 'prop-types';


// Imports images
import courgetteIcon from '../../../assets/images/imagesLegumes/courgette.png';
import tomateIcon from '../../../assets/images/imagesLegumes/tomate.png';
import aubergineIcon from '../../../assets/images/imagesLegumes/aubergine.png';


function ColonneFavoris({ infos }) {
    
    const [show, setShow] = useState(true);
    const addToFav = () => {
        alert('test');
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
                    <div className="vegetableSection">
                        <li className="vegetable" >Courgettes</li>
                        <img src={tomateIcon} className="vegetableIcon" alt="Icone tomate" />
                        <button className="addToFav">Ajouter aux favoris</button>
                        <button className="deleteFromFav">Supprimer des favoris</button>
                    </div>                        
                    <div className="vegetableSection">
                        <li className="vegetable" >Aubergine</li>
                        <img src={aubergineIcon} className="vegetableIcon" alt="Icone aubergine" />
                        <button className="addToFav">Ajouter aux favoris</button>
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
//     - Faire fonctionner la recherche
//     - Hover sur les légumes pour les infos
//     - Adapter le texte du bouton afficher/masquer
//     - Rendre dynamique la liste des légumes (BDD)
