import React from "react";
import { NavLink } from "react-router-dom";
import './NavigationFooter.scss';

const Navigation = () => {
  return (
    <div className="navigation">
      <ul>
        <NavLink
          to="/cgu"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li>Conditions générales d'utilisation</li>
        </NavLink>
        <NavLink
          to="/team"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li>L'équipe</li>
        </NavLink> 
      </ul>
    </div>
  );
};

export default Navigation;