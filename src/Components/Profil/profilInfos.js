import React from "react";
import './profilInfosStyle.scss';

const ProfilInfos =({user_name, firstname, lastname, email})=>{
return(
    
    <div className="container-profil">
      <h1 className="profil-title">Mon profil</h1>
    <p className="user_name"><span className="step">Nom d'utilisateur: {user_name}</span></p>
    <p className="user_name"><span className="step">Nom:{lastname} </span></p>
    <p className="user_name"><span className="step">Prenom: {firstname}</span></p>
    <p className="user_name"><span className="step">Adresse email: {email}</span></p>
    </div>

)
}

export default React.memo(ProfilInfos)