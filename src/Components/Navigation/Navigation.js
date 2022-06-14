import React from "react";
import { NavLink } from "react-router-dom";
import './Navigation.scss';

const Navigation = () => {
  return (
    <div className="navigation">
      <ul>
        <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
          <li>Accueil</li>
        </NavLink>
        <NavLink
          to="/inscription"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li>Inscription</li>
        </NavLink>
        <NavLink
          to="/login"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li>Login</li>
        </NavLink>
        <NavLink
          to="/team"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li>Team</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navigation;
