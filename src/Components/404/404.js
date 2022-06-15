import errorLogo from '../../assets/images/404.gif';
import './404.scss';

function Error () {
    return (
        <div className="errorPage">
            
            <h2 className="pageTitle">Erreur 404</h2>
            <img src={errorLogo} className="gifError" alt="Gif erreur 404" />
            <button className="backToHomePage">Revenir à l'accueil</button>
        </div>
    );
  }

export default Error;