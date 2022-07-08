import logo from '../../assets/images/logo.png';
import Navigation from '../Navigation/Navigation';
import { NavLink } from "react-router-dom";

import './Header.scss';

// Dans Header, on n'a pas directement besoin de isLogged et setIsLogged. 
// Par contre, on en a besoin dans <Navigation /> (ligne 16), donc il faut les importer pour pouvoir y acceder 
function Header({isLogged, setIsLogged}) {
    return (
        <div className="headerBar">
            <NavLink to="/" >
                <img src={logo} className="logo" alt="Logo My Little Garden" />
            </NavLink>
                {/* Comme on a importé isLogged et setIsLogged dans Header, on y a désormais accès 
                ici pour les importer dans <Navigation /> */}
                <Navigation isLogged={isLogged} setIsLogged={setIsLogged}/>
        </div>
    );
  }
export default Header;


