import Header from '../Header/Header';
import errorLogo from '../../assets/images/404.gif';
import Navigation from '../Navigation/Navigation';
import './404.scss';

import { Link } from 'react-router-dom';


function Error () {
    return (
        <div className="errorPage">
            <Navigation/>
            <Header/>
            <h2 className="pageTitle">Erreur 404</h2>
            <img src={errorLogo} className="gifError" alt="Gif erreur 404" />
            <Link to="/home">
                <button className="backToHomePage">
                Revenir à l'accueil
                </button>
            </Link>
       </div>
    );
  }

export default Error;