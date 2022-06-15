import React, { useState } from 'react';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import './style.css';



export default function Inscription(){
  
  const [userNickname, setUserNickname] = useState('');
  const [userFirstName, setUserFirstName] = useState('');
  const [userLastName, setUserLastName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');



  function handleSubmit(e) {
    e.preventDefault();
    setUserNickname(e.target.userNickname);
    setUserLastName(e.target.userLastName);
    setUserFirstName(e.target.userFirstName);
    setUserEmail(e.target.UserEmail);
    setUserPassword(e.target.userPassword)

    console.log({userNickname},{userFirstName},{userLastName}, {userEmail}, {userPassword});

  }
    return(
      <>
      <h1>Inscription</h1>
        <div id='container-form'>
          <div>
          </div>
          <form 
            onSubmit={handleSubmit} // gere à la fois le "entré" sur l'input et le click sur le bouton 
          >
            <label className="field-label">Nom d'utilisateur</label>
            <input 
              value={userNickname }
              onChange={(e) => setUserNickname(e.target.value)}
              className="field-input" 
              type="text" 
              placeholder="LaFourche65"
            />   
            <label htmlFor='name' className="field-label">Nom </label>
            <input 
              value={userLastName} 
              className="field-input" 
              onChange={(e) => setUserLastName(e.target.value)}
              type="text" 
              placeholder="Tuche" 
            /> 
            <label className="field-label">Prenom </label>
            <input 
              value={userFirstName}
              className="field-input"
              onChange={(e) => setUserFirstName(e.target.value)}
              type="text" 
              placeholder="Jeremy"/> 
            <label>Adresse mail </label>
            <input 
              className="field-input" 
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
              type="text" 
              placeholder="LaFourche65"/> 
            <label className="field-label">Nouveau mot de passe </label>
            <input 
              className="field-input"
              value={userPassword}
              onChange={(e) => setUserPassword(e.target.value)}
              name="password" 
              type="password" 
              placeholder="Password" />

            <button className="form-submit" type="submit">Valider</button>
            </form>
        </div>
        </>
    )
}

