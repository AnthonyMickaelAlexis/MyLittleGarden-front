import React from "react";
// On peut utiliser NavLink car on a mis notre App dans une balise <BrowserRouter /> (dans index.js)
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
          <li>CGU</li>
        </NavLink>
        <NavLink
          to="/contact"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li>Contact</li>
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
