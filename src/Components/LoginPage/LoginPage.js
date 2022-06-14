import React from 'react'
import { Button, Form } from 'semantic-ui-react'
import './LoginPage.scss';

const LoginPage = () => (
    <div className="loginForm">
        <h2 className="connectionTitle">Connexion</h2>
        <Form>
            <Form.Field>
            <label>Nom d'utilisateur</label>
            <input placeholder="Nom d'utilisateur" />
            </Form.Field>
            <Form.Field>
            <label>Mot de passe</label>
            <input type="password" placeholder="Mot de passe" />
            </Form.Field>
            <Button type='submit'>Se connecter</Button>
        </Form>
  </div>
)

export default LoginPage;