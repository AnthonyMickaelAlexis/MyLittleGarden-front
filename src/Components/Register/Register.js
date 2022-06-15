import { useState } from 'react';
import { Button, Form } from 'semantic-ui-react'
import './registerPage.scss';
import PropTypes from 'prop-types';
import axios from 'axios';
import Validation from '../Validation/validation';


export default function Register(){
  const url = "https://oclock-my-little-garden.herokuapp.com/register";
  const [user_name, setUserName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // States for checking the errors
  //const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState(false);

  //handleSubmit pour tout changement de state
  function handleSubmit(e) {
    e.preventDefault();
    setErrors(Validation(user_name, password, firstName, lastName, email))
    axios.post(url, 
      {user_name, firstName, lastName, email, password}
    )     
    .then((response) => {
      console.log('reponse :', response);
    })
    .catch((error) => {
      console.error('error :', error);
    });

    setUserName(e.target.user_name);
    setFirstName(e.target.firsName);
    setLastName(e.target.lastName);
    setEmail(e.target.email);
    setPassword(e.target.password);
  
    
    console.log({user_name},{firstName},{lastName}, {email}, {password});

    // si notre input à une valeur, on envoie le submit au parent
    if (user_name && firstName && lastName && email &&password ) {
      // on envoie le userNickname, userFirstName... au composant parent, on fait remonter l'evenement du onSubmit
      setUserName('');//on reset les inputs
      setFirstName('');
      setLastName('');
      setEmail('');
      setPassword('');
    }
  }
//         <div className='ui message success'>Success</div>

    return(
      
      <div className='registerForm'>
       
        <h1 className='connectionTitle'>Inscription</h1>
          <Form 
            onSubmit={handleSubmit} // gere à la fois le "entré" sur l'input et le click sur le bouton 
          >
          <Form.Field>
            <label htmlFor='name' className="field-label">Nom d'utilisateur</label>
            <input
              name='name' 
              value={user_name }
              onChange={(e) => setUserName(e.target.value)}
              className="field-input" 
              type="text" 
              placeholder="Nom d'utilisateur"
            />
          </Form.Field>

          {errors.user_name &&<p className='error'>{errors.user_name}</p>}

          <Form.Field>   
            <label htmlFor='name' className="field-label">Nom </label>
            <input 
              name='name'
              value={lastName} 
              className="field-input" 
              onChange={(e) => setLastName(e.target.value)}
              type="text" 
              placeholder="Nom" 
            />
            </Form.Field>

            {errors.lastName &&<p className='error'>{errors.lastName}</p>}

            <Form.Field> 
            <label htmlFor='name'className="field-label">Prenom </label>
            <input
              name='name' 
              value={firstName}
              className="field-input"
              onChange={(e) => setFirstName(e.target.value)}
              type="text" 
              placeholder="Prenom"/> 
            </Form.Field>
            {errors.firsName &&<p className='error'>{errors.firsName}</p>}

            <Form.Field>
            <label htmlFor='email'>Adresse mail </label>
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
        </div>
    )
}

Form.propTypes = {
  className: PropTypes.string,
};
