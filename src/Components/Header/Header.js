import logo from '../../assets/images/logo.png';
import { Link } from 'react-router-dom';
import './Header.scss';

function Header() {
    return (
        <div className="headerBar">
            <img src={logo} className="logo" alt="Logo My Little Garden" />
            <h1 className="title">My Little Garden</h1>
            <div className="buttonSection">
                <Link to="/register">
                    <button className="button">
                    S'inscrire
                    </button>
                </Link>
                <Link to="/login">
                    <button className="button">
                    Se connecter
                    </button>
                </Link>
            </div>
        </div>
    );
  }

export default Header;