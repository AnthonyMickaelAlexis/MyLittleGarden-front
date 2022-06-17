import React from 'react'
import { Button, Form } from 'semantic-ui-react';
import './LoginPage.scss';
import image from "../../assets/images/image1.jpg";


const LoginPage = () => (
    <div style={{ backgroundImage: `url(${image})`, backgroundRepeat:"no-repeat", 
            backgroundSize:"cover", backgroundPosition: "center", height: '100vh', position:'relative'}}>
    <div className='container'>

    <div className="loginForm">
        
        <h2 className="connectionTitle">Connexion</h2>
        <Form>
            <Form.Field>
            <label>Nom d'utilisateur</label>
            <input placeholder="Nom d'utilisateur" />
            </Form.Field>
            <Form.Field>
            <label>Mot de passe</label>
            <input placeholder="Mot de passe" />
            </Form.Field>
            <Button type='submit'>Se connecter</Button>
        </Form>
    </div>
    </div>
    </div>
)

export default LoginPage;