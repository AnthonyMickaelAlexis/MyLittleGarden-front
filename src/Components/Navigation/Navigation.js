import React from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.scss";

const Navigation = ({ isLogged, setIsLogged }) => {
  console.log(`isLogged : ${isLogged}`);
  const logout = () => {
    setIsLogged(false);
    localStorage.removeItem("token");
  };

  return (
    <div className="navigation">
      <ul>
        <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
          <li>Accueil</li>
        </NavLink>

        {!isLogged && (
          <NavLink
            to="/register"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            <li>Inscription</li>
          </NavLink>
        )}

        {!isLogged && (
          <NavLink
            to="/login"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            <li>Connexion</li>
          </NavLink>
        )}
        
        {isLogged && (
          <NavLink
            to="/profil"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            <li>Mon profil</li>
          </NavLink>
        )}

        {isLogged && (
          <NavLink
            to="/"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            <li onClick={() => logout()}>Déconnexion</li>
          </NavLink>
        )}

        {isLogged && (
          <NavLink
            to="/parcelle"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            <li>Parcelle</li>
          </NavLink>
        )}
      </ul>
    </div>
  );
};

export default Navigation;
