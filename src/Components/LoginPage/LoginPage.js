import { useState } from 'react';
import {Navigate} from 'react-router-dom';
import { Button, Form } from 'semantic-ui-react';
import Validation from '../Validation/validation';
import './LoginPage.scss';
//import PropTypes from 'prop-types';
import axios from 'axios';
//import image from "../../assets/images/image1.jpg";
import '../../../src/index.css';



function LoginPage(){
  
    const url = "https://oclock-my-little-garden.herokuapp.com/login";
   // const url = "http://localhost:8080/login";

// Mes states pour controller et mettre a jour mon state de départ
    const [user_name, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    const [isLogged, setIsLogged] = useState(false);
 

    function handleSubmit(e) {
        e.preventDefault();
        setErrors(Validation(user_name, password))
          axios.post(url, {user_name:user_name, password:password})     
          .then((response) => {
            console.log('reponse :', response);
            localStorage.setItem("token", response.data.access_token);
            setIsLogged(true);
          })
          .catch((error) => {
            console.error('error :', error);
          });
        
        setUserName(e.target.user_name);
        setPassword(e.target.password);
        

        if (user_name && password ) {
          // on envoie le user_name, password... au composant parent, on fait remonter l'evenement du onSubmit
          setUserName('');//on reset les inputs
          setPassword('');
        }
    }
    if (isLogged) {
      return <Navigate to='/parcelle' />
     }else{
      
    return(
      
       <div className="loginForm">

        <h1 className="connectionTitle">Connexion</h1>
        <Form onSubmit={handleSubmit} // gere à la fois le "entré" sur l'input et le click sur le bouton 
>
            <Form.Field>
            <label htmlFor='user_name'>Nom d'utilisateur</label>
            <input 
            name='user_name'
            value={user_name}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="Nom d'utilisateur" />
            </Form.Field>
            {errors.user_name && <p className='error'>{errors.user_name}</p>}
            <Form.Field>
            <label htmlFor='password'>Mot de passe</label>
            <input
            name='password'
            value={password}              
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Mot de passe" 
            type='password' />
            </Form.Field>
            {errors.password && <p className='error'>{errors.password}</p>}

            <Button type='submit'>Se connecter</Button>
        </Form>

        
  </div>
    )
}};



export default LoginPage;