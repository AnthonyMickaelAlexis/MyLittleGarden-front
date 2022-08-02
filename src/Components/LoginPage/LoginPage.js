import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { Button, Form, Label } from "semantic-ui-react";
import Validation from "../Validation/validation";
import "./LoginPage.scss";
import axios from "axios";
import "../../../src/index.css";

function LoginPage({ isLogged, setIsLogged }) {
  const url = "https://oclock-my-little-garden.herokuapp.com/login";
  // const url = "http://localhost:8080/login";

  // Mes states pour controller et mettre a jour mon state de départ
  const [user_name, setUserName] = useState("");
  // ('') correspond au state de base (c'est-à-dire que l'utilisateur n'a pas encore écrit son mot de passe)
  // Une fois qu'il l' écrit, il clique sur valider, ce qui active setPassword
  // Après setPassword, password ne contient plus une chaine de caractère vide, mais a été rempli
  // avec ce que l'utilisateur a écrit
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  function handleSubmit(e) {
    e.preventDefault();
    setErrors(Validation(user_name, password));
    axios
      .post(url, { user_name: user_name, password: password })
      .then((response) => {
        // console.log('reponse :', response);
        localStorage.setItem("token", response.data.access_token);
        setIsLogged(true);
        // window.localStorage.setItem('isLogged',true);
        console.log(isLogged);
      })
      .catch((error) => {
        console.error("error :", error);
      });
    setUserName(e.target.user_name);
    setPassword(e.target.password);

    if (user_name && password) {
      // on envoie le user_name, password... au composant parent, on fait remonter l'evenement du onSubmit
      setUserName(""); //on reset les inputs
      setPassword("");
    }
    else {
      // on envoie le user_name, password... au composant parent, on fait remonter l'evenement du onSubmit
      setUserName(""); //on reset les inputs
      setPassword("");
    }
  }
  if (isLogged) {
    return <Navigate to="/parcelle" />;
  } else {
    return (
      <div className="container">
        <div className="loginForm">
          <h1 className="connectionTitle">Connexion</h1>
          <Form
            className="ui fluid form"
            onSubmit={handleSubmit} // gere à la fois le "entré" sur l'input et le click sur le bouton
          >
            <Form.Field>
              <label htmlFor="user_name">
                {errors.user_name && (
                  // Pointing="below" --> renvoie un message d'erreur sous le champs 
                  // "nom d'utilisateur" en cas de problème
                  <Label pointing="below" className="error">
                    {errors.user_name}
                  </Label>
                )}
              </label>
              <input
                name="user_name"
                value={user_name}
                onChange={(e) => setUserName(e.target.value)}
                placeholder="Nom d'utilisateur"
              />
            </Form.Field>

            <Form.Field>
              <label htmlFor="password">
                {errors.password && (
                  <Label pointing="below" className="error">
                    {errors.password}
                  </Label>
                )}
              </label>
              <input
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Mot de passe"
                type="password"
              />
            </Form.Field>

            <Button type="submit">Se connecter</Button>
          </Form>
        </div>
      </div>
    );
  }
}

export default React.memo(LoginPage);
