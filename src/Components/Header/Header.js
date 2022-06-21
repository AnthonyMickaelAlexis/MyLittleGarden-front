import logo from '../../assets/images/logo.png';
import Navigation from '../Navigation/Navigation';
import './Header.scss';
function Header() {
    return (
        <div className="headerBar">
            <img src={logo} className="logo" alt="Logo My Little Garden" />
            {/* <div className="buttonSection"> */}
                {/* <button className="button">S'inscrire</button>
                <button className="button">Se connecter</button> */}
                <Navigation />
            {/* </div> */}
        </div>
    );
  }
export default Header;