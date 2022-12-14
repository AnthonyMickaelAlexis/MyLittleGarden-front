import  React, { useState } from 'react';
import { Button, Form, Label } from 'semantic-ui-react'
import {Navigate} from 'react-router-dom';
import './RegisterPage.scss';
import '../../../src/index.css';
import axios from 'axios';
import ValidationRegister from '../Validation/ValidationRegister';


function Register(){
  const url = "https://oclock-my-little-garden.herokuapp.com/register";
  //const url = "http://localhost:8080/register";

  const [user_name, setUserName] = useState('');
  const [firstname, setfirstname] = useState('');
  const [lastname, setlastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm_password, setConfirm_password] = useState('');

  // States for checking the errors
  const [errors, setErrors] = useState(false);

  const [submitted, setSubmitted] = useState(false);

  //handleSubmit pour tout changement de state
  function handleSubmit(e) {
    e.preventDefault();
    //si il y a une erreur un message s'affichera en bas de l'input pour avertir le user.
    setErrors(ValidationRegister(user_name, lastname, firstname, email, password, confirm_password));

    //je fais une requete post en envoyant mon formulaire avec les 5 infos demandées. 
    // si tout est ok le formulaire est envoyé et le state de la soumission du formulaire est mis a jour.
    axios.post(url, 
    {user_name:user_name, lastname:lastname, firstname:firstname, email:email, password:password, confirm_password:confirm_password}
    )     
    .then((response) => {
      console.log('reponse :', response);
      console.log(response.data)
      // De base, on fait aucune action, donc le submitted est à false (false = on n'a pas soumis le formulaire). Une fois qu'on a cliqué sur le boutton soumettre, on a fait 
      // une action, donc setSubmitted fait passer submitted à true (en cliquant, on a soumis le formulaire, donc submitted est true)
      setSubmitted(true)
    })
    .catch((error) => {
      console.error('error :', error);
    });

    setUserName(e.target.user_name);
    setfirstname(e.target.firsName);
    setlastname(e.target.lastname);
    setEmail(e.target.email);
    setPassword(e.target.password);
    setConfirm_password(e.target.confirm_password)
  
    
    console.log(user_name,firstname,lastname, email, password, confirm_password);

    // si notre input à une valeur, on envoie le submit au parent
    if (user_name && firstname && lastname && email && password && confirm_password ) {
      // on envoie le username, userfirstname... au composant parent, on fait remonter l'evenement du onSubmit
      setUserName('');//on reset les inputs
      setfirstname('');
      setlastname('');
      setEmail('');
      setPassword('');
      setConfirm_password('');
    }

    else {

      setUserName('');//on reset les inputs
      setfirstname('');
      setlastname('');
      setEmail('');
      setPassword('');
      setConfirm_password('');
    }
  }
    if (submitted) {
      return <Navigate to='/login' />
     }else{
  
    return(
      
      <div className='registerForm'>
       
        <h1 className='connectionTitle'>Inscription</h1>
          <Form 
            onSubmit={handleSubmit} // gere à la fois le "entré" sur l'input et le click sur le bouton 
          >
          <Form.Field>
            <label htmlFor='name' className="field-label">{errors.user_name && <Label pointing='below' className='error'>{errors.user_name}</Label>}</label>
            <input
              name='name' 
              value={user_name}
              onChange={(e) => setUserName(e.target.value)}
              className="field-input" 
              type="text" 
              placeholder="Nom d'utilisateur"
            />
          </Form.Field>

          <Form.Field>   
            <label htmlFor='name' className="field-label">{errors.lastname && <Label pointing='below' className='error'>{errors.lastname}</Label>} </label>
            <input 
              name='name'
              value={lastname} 
              className="field-input" 
              onChange={(e) => setlastname(e.target.value)}
              type="text" 
              placeholder="Nom" 
            />
            </Form.Field>

            <Form.Field> 
            <label htmlFor='name' className="field-label">{errors.firstname && <Label pointing='below' className='error'>{errors.firstname}</Label>} </label>
            <input
              name='name' 
              value={firstname}
              className="field-input"
              onChange={(e) => setfirstname(e.target.value)}
              type="text" 
              placeholder="Prenom"/> 
            </Form.Field>

            <Form.Field>
            <label htmlFor='email' className="field-label">
              {errors.email && <Label pointing='below' className='error'>{errors.email}</Label>}
              </label>
            <input
              name='email' 
              type='email'
              className="field-input" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Adresse mail"/>
            </Form.Field>

            <Form.Field> 
            <label htmlFor='password'className="field-label">
            {errors.password && <Label pointing='below' className='error'>{errors.password}</Label>}
            </label>
            <input 
              className="field-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              name="password" 
              type="password" 
              placeholder="Nouveau mot de passe" />
            </Form.Field>

            <Form.Field> 
            <label htmlFor='confirm_password' className="field-label">
            {errors.confirm_password && <Label pointing='below' className='error'>{errors.confirm_password}</Label>}
            </label>
            <input 
              className="field-input"
              value={confirm_password}
              onChange={(e) => setConfirm_password(e.target.value)}
              name="confirm_password" 
              type="password" 
              placeholder="Confirmer votre mot de passe" />
            </Form.Field>

            <Button className="form-submit" type="submit">Valider</Button>
            </Form>
           
        </div>
    )
  }
}

export default React.memo(Register)