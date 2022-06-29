import errorLogo from '../../assets/images/404.gif';
import './404.scss';

function Error () {
    return (
        <div className="errorPage">
            <h2 className="pageTitle">Erreur 404</h2>
            <img src={errorLogo} className="gifError" alt="Gif erreur 404" />
       </div>
    );
  }

export default Error;