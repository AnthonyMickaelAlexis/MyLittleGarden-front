import logo from '../../assets/images/logo.png';
import Navigation from '../Navigation/Navigation';
import './Header.scss';

function Header() {
    return (
<<<<<<< HEAD
        <div className="header"> 
            <img src={logo} className="logo" alt="Logo My Little Garden" /> 
            <Navigation/> 
=======
        <div className="headerBar">
            <img src={logo} className="logo" alt="Logo My Little Garden" />
            <div className="buttonSection">
                {/* <button className="button">S'inscrire</button>
                <button className="button">Se connecter</button> */}
                <Navigation />
            </div>
>>>>>>> 55cacd8a92d2ea206ea8887b067058ad9c50817e
        </div>
    );
  }

export default Header;