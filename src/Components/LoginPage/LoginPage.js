import React, { useState } from 'react';
import { Button, Form } from 'semantic-ui-react'
import './LoginPage.scss';
import PropTypes from 'prop-types';


function LoginPage(){

    const [userNickname, setUserNickname] = useState('');
    const [userPassword, setUserPassword] = useState('');

    function handleSubmit(e) {
        setUserNickname(e.target.userNickname);
        setUserPassword(e.target.userPassword);

        if (userNickname && userPassword)
        setUserNickname('');//on reset les inputs
        setUserPassword('');
    }
    return(

    <div className="loginForm">
        <h1 className="connectionTitle">Connexion</h1>
        <Form onSubmit={handleSubmit} // gere à la fois le "entré" sur l'input et le click sur le bouton 
>
            <Form.Field>
            <label>Nom d'utilisateur</label>
            <input 
            value={userNickname}
            onChange={(e) => setUserNickname(e.target.value)}
            placeholder="Nom d'utilisateur" />
            </Form.Field>
            <Form.Field>
            <label>Mot de passe</label>
            <input
            value={userPassword}              
            onChange={(e) => setUserPassword(e.target.value)}
            placeholder="Mot de passe" 
            type='password' />
            </Form.Field>
            <Button type='submit'>Se connecter</Button>
        </Form>
  </div>
    )
};

Form.propTypes = {
    className: PropTypes.string,
  };
  
export default LoginPage;