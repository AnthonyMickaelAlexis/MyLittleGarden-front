import { useState } from 'react';
import { Button, Form, Header } from 'semantic-ui-react';
import Validation from '../Validation/validation';
import './LoginPage.scss';
import PropTypes from 'prop-types';
import axios from 'axios';
import image from "../../assets/images/image1.jpg";
import '../../../src/index.css';


function LoginPage(){
    const test ={
        pseudo:'test',
        mdp:'test'
    }
   
    const url = "https://oclock-my-little-garden.herokuapp.com/login";
    const [user_name, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});

    function handleSubmit(e) {
        e.preventDefault();
        setErrors(Validation(user_name, password))
        console.log(user_name);
        axios.post(url, 
            {user_name, password}
          ) 
          .then((response) => {
            console.log('reponse :', response);
          })
          .catch((error) => {
            console.error('error :', error);
          });

        setUserName(e.target.user_name);
        setPassword(e.target.password);
        if(user_name === test.pseudo && password === test.mdp){
            console.log("Vous pouvez vous loguer")
        }else{
            console.log('Veuillez recommencer')
        }
    console.log(user_name, password)


        if (user_name && password){
        setPassword('');//on reset les inputs
        setUserName('');
    }
    }
    return(
        // <div 
        //   style={{ backgroundImage: `url(${image})`, backgroundRepeat:"no-repeat", 
        //   backgroundSize:"cover", backgroundPosition: "center", height: '100vh', position:'relative'}}>
      
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
            {errors.user_name &&<p className='error'>{errors.user_name}</p>}
            <Form.Field>
            <label htmlFor='password'>Mot de passe</label>
            <input
            name='password'
            value={password}              
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Mot de passe" 
            type='password' />
            </Form.Field>
            {errors.password &&<p className='error'>{errors.password}</p>}

            <Button type='submit'>Se connecter</Button>
        </Form>

  </div>
  // </div>
    )
};

Form.propTypes = {
    className: PropTypes.string,
  };
  
export default LoginPage;