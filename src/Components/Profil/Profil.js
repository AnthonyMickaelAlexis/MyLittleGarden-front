import React, { useState, useEffect } from "react";
import { Button, Form } from 'semantic-ui-react';
import jwtDecode from 'jwt-decode';
import Validation from '../Validation/validation';
import axios from "axios";



const Profile = ({isLogged, setIsLogged})=> {
  const [data, setData] = useState({});

  const token = localStorage.getItem('token');
  const jwtDecoded = jwtDecode(token);

  const baseURL = `https://oclock-my-little-garden.herokuapp.com/home/profil/${jwtDecoded.id}`;//${token.user.id}
  console.log(isLogged)
  
    //Ma requete pour avoir les données du user.
    useEffect (() => { 
  axios.get(baseURL, {
                headers: {
                Authorization: `bearer ${token}`
                },
              })   
              .then((response) => {
                console.log('reponse :', response); 
              setData(response.data)      
              })
              .catch((error) => {
                console.error('error :', error);
              });
            },[])
            
       
            
console.log(data)
           
  const [user_name, setUserName] = useState(data.user_name);
  const [firstname, setfirstname] = useState(data.firsname);
  const [lastname, setlastname] = useState(data.lastname);
  const [email, setEmail] = useState(data.email);
  const [password, setPassword] = useState(data.password);
  // States for checking the errors
  const [errors, setErrors] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    //si il y a une erreur un message s'affichera en bas de l'input pour avertir le user.
    setErrors(Validation(user_name, password, firstname, lastname, email));

    //je fais une requete patch en envoyant mon formulaire avec les 5 infos demandées. 
    // si tout est ok le formulaire est envoyé et le state de la soumission du formulaire est mis a jour. 
    axios.patch(baseURL, `${jwtDecoded.id}`, {user_name:user_name, firstname:firstname, lastname:lastname, email:email, password:password},
      {
      headers: {
      Authorization: `bearer ${token}`
      }, 
    })    
    .then((response) => {
      console.log('reponse :', response);
      console.log(response.data)
    })
    .catch((error) => {
      console.error('error :', error);
    });

    setUserName(e.target.user_name);
    setfirstname(e.target.firsName);
    setlastname(e.target.lastname);
    setEmail(e.target.email);
    setPassword(e.target.password);
  
    
    console.log(user_name,firstname,lastname, email, password);

    // si notre input à une valeur, on envoie le submit au parent
    if (user_name && firstname && lastname && email &&password ) {
      // on envoie le userNickname, userfirstname... au composant parent, on fait remonter l'evenement du onSubmit
      setUserName('');//on reset les inputs
      setfirstname('');
      setlastname('');
      setEmail('');
      setPassword('');
    }
   
  }
  function handleDeleteUser(){
  
  console.log('êtes vous sur de vouloire supprimer votre compte?')
    }

  return(
   
    <div className='registerForm'>
       
    <h1 className='connectionTitle'>Profil</h1>
      <Form 
        onSubmit={handleSubmit} // gere à la fois le "entré" sur l'input et le click sur le bouton 
      >
      <Form.Field>
        <label htmlFor='name' className="field-label">Nouveau Nom d'utilisateur</label>
        <input
          name='name' 
          value={user_name}
          onChange={(e) => setUserName(e.target.value)}
          className="field-input" 
          type="text" 
          placeholder="Nouveau Nom d'utilisateur"
        />
      </Form.Field>

      {errors.user_name &&<p className='error'>{errors.user_name}</p>}

      <Form.Field>   
        <label htmlFor='name' className="field-label">Modifier votre Nom </label>
        <input 
          name='name'
          value={lastname} 
          className="field-input" 
          onChange={(e) => setlastname(e.target.value)}
          type="text" 
          placeholder="Nom" 
        />
        </Form.Field>

        {errors.lastname &&<p className='error'>{errors.lastname}</p>}

        <Form.Field> 
        <label htmlFor='name'className="field-label">Modifier votre Prenom </label>
        <input
          name='name' 
          value={firstname}
          className="field-input"
          onChange={(e) => setfirstname(e.target.value)}
          type="text" 
          placeholder="Prenom"/> 
        </Form.Field>
        {errors.firstname &&<p className='error'>{errors.firstname}</p>}

        <Form.Field>
        <label htmlFor='email'>Nouvelle adresse mail</label>
        <input
          name='email' 
          className="field-input" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="text" 
          placeholder="Adresse mail"/>
        </Form.Field>
        {errors.email &&<p className='error'>{errors.email}</p>}

        <Form.Field> 
        <label htmlFor='password'className="field-label">Nouveau mot de passe </label>
        <input 
          className="field-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          name="password" 
          type="password" 
          placeholder="Nouveau mot de passe" />
        </Form.Field>
        {errors.password &&<p className='error'>{errors.password}</p>}

        <Button className="form-submit" type="submit">Valider</Button>
        </Form>
        <Button className="form-submit" type="onClick" onClick={handleDeleteUser()}>Suprimer mon compte</Button>
       
    </div>
    );
}

export default Profile;