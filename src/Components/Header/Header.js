import logo from '../../assets/images/logo.png';
import './Header.scss';

function Header() {
    return (
        <div className="header">
            
            <img src={logo} className="logo" alt="Logo My Little Garden" />
            <h1 className="title">My Little Garden</h1>
            <div className="buttonSection">
                <button className="button">S'inscrire</button>
                <button className="button">Se connecter</button>
            </div>
        </div>
    );
  }

export default Header;