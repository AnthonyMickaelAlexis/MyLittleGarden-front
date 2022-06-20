import PropTypes from 'prop-types';
import './ColonneFavoris.scss';

function ColonneFavoris({ open, toggle }) {

    const cssClassNames = open ? 'toggler toggler--open' : 'toggler';

    return (
        <div className="colonneFav">
        <button className={cssClassNames} type="button" onClick={toggle}>
            Afficher/Cacher
        </button>
        </div>
    );
};

ColonneFavoris.propTypes = {
    open: PropTypes.bool.isRequired,
    toggle: PropTypes.func.isRequired,
  };

export default ColonneFavoris;