import './ColonneFavoris.scss';
// import PropTypes from 'prop-types';

// Imports images
import courgetteIcon from '../../../assets/images/imagesLegumes/courgette.png';

function ColonneFavoris() {
    
    return (
        <div className="colonneLegume">
            <h3 className="favTittle">Liste des légumes</h3>
            <ul className="listeLegumes">
            <img src={courgetteIcon} className="vegetableIcon" alt="Icone courgette" />
            <img src={courgetteIcon} className="vegetableIcon" alt="Icone courgette" />
            <img src={courgetteIcon} className="vegetableIcon" alt="Icone courgette" />
            <img src={courgetteIcon} className="vegetableIcon" alt="Icone courgette" />
            <img src={courgetteIcon} className="vegetableIcon" alt="Icone courgette" />
            <img src={courgetteIcon} className="vegetableIcon" alt="Icone courgette" />
            <img src={courgetteIcon} className="vegetableIcon" alt="Icone courgette" />
            <img src={courgetteIcon} className="vegetableIcon" alt="Icone courgette" />
            <img src={courgetteIcon} className="vegetableIcon" alt="Icone courgette" />
            <img src={courgetteIcon} className="vegetableIcon" alt="Icone courgette" />
            </ul>
        </div>
    )
};

export default ColonneFavoris;