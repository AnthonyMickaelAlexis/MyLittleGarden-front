import React from 'react';
import { NavLink } from "react-router-dom";

import Background from '../Background/Background';
import './HomePage.scss' 



const HomePage = () => {
    return (
        <div className='homepage'>
         
              <Background/>
              <NavLink to="/register" >
                <button className="registerButton">Démarrer l'expérience</button>
            </NavLink>
        </div>
    )
};

export default HomePage;