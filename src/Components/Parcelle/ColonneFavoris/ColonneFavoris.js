import { useState } from 'react';
import './ColonneFavoris.scss';

function ColonneFavoris() {

    const [show, setShow] = useState(true)

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
                        <li className="vegetable">Tomates</li>
                        <li className="vegetable">Courgettes</li>
                        <li className="vegetable">Haricots verts</li>
                    </ul>
                </div>:null
            }
        </div>
    )
};

export default ColonneFavoris;


// A faire : 
//     - Faire fonctionner la recherche
//     - Adapter le texte du bouton afficher/masquer
//     - Rendre dynamique la liste des légumes (BDD)
