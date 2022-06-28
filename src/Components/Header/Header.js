import logo from '../../assets/images/logo.png';
import Navigation from '../Navigation/Navigation';
import { NavLink } from "react-router-dom";

import './Header.scss';

function Header() {
    return (
        <div className="headerBar">
            <NavLink to="/" >
                <img src={logo} className="logo" alt="Logo My Little Garden" />
            </NavLink>
            {/* <div className="buttonSection"> */}
                {/* <button className="button">S'inscrire</button>
                <button className="button">Se connecter</button> */}
                <Navigation />
            {/* </div> */}
        </div>
    );
  }
export default Header;