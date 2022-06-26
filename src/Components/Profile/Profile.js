import React, { useState } from "react";
import { Button, Form } from 'semantic-ui-react';
import Validation from '../Validation/validation';


export default function Profile (){
  const [user_name, setUserName] = useState('');
  const [firstname, setfirstname] = useState('');
  const [lastname, setlastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // States for checking the errors
  const [errors, setErrors] = useState(false);

  //const [newSubmit, setNewSubmit] = useState(false);
  function handleSubmit(e) {
    e.preventDefault();
  setErrors(Validation(user_name, password))
 //    axios.post(url, {user_name:user_name, password:password})     
 //    .then((response) => {
 //      console.log('reponse :', response);
 //      localStorage.setItem("token", response.data.access_token);
 //      setIsLogged(true);
 //    })
 //    .catch((error) => {
 //      console.error('error :', error);
 //    });
 //  setUserName(e.target.user_name);
 //  setPassword(e.target.password);
 //  

 //  if (user_name && password ) {
 //    // on envoie le user_name, password... au composant parent, on fait remonter l'evenement du onSubmit
 //    setUserName('');//on reset les inputs
 //    setPassword('');
    }

  return(
   
    <div className='registerForm'>
       
    <h1 className='connectionTitle'>Profile</h1>
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
        <Button className="form-submit" type="submit">Suprimer mon compte</Button>

        </Form>
       
    </div>
    );
}