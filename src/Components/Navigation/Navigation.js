import React from "react";
import { NavLink } from "react-router-dom";
import './Navigation.scss';

const Navigation = ({isLogged, setIsLogged}) => {
  //console.log({isLogged, setIsLogged})

  const logout = () => {
    setIsLogged(false);
    localStorage.removeItem("token");
  }

  return (
    <div className="navigation">

      <ul>
        <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
          <li>Accueil</li>
        </NavLink>

        {!isLogged &&
        <NavLink to="/register" className={(nav) => (nav.isActive ? "nav-active" : "")} > 
          <li>S'inscrire</li>
        </NavLink>}

        {!isLogged &&
        <NavLink to="/login" className={(nav) => (nav.isActive ? "nav-active" : "")} >   
          <li>Se connecter</li>
        </NavLink> }

        {isLogged &&
        <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")} >   
          <li onClick={() => logout()}>Déconnexion</li>
        </NavLink> }

        {/* A SUPPRIMER A LA FIN, c'est pour pouvoir bosser sur la parcelle */}
        {!isLogged &&
        <NavLink to="/parcelle" className={(nav) => (nav.isActive ? "nav-active" : "")} >
          <li>Parcelle</li>
        </NavLink> }
        
        
      </ul>

    </div>
  );
};

export default Navigation;