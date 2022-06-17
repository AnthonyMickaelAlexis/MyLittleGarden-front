import logo from '../../assets/images/logo.png';
import Navigation from '../Navigation/Navigation';
import './Header.scss';

function Header() {
    return (
        <div className="header"> 
            <img src={logo} className="logo" alt="Logo My Little Garden" /> 
            <Navigation/> 
        </div>
    );
  }

export default Header;