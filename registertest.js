import React, { useState } from 'react';
import { Button, Form } from 'semantic-ui-react'
import './InscriptionPage.scss';
import PropTypes from 'prop-types';
//import Navigation from '../Navigation/Navigation';




export default function Inscription(){
  
const initialValues = {userNickname:"", userFirstName:"", userLastName:"",  userEmail:"", userPassword:"" }

  const [formValues, setFormValues]=useState(initialValues);
  //const [userNickname, setUserNickname] = useState('');
  //const [userFirstName, setUserFirstName] = useState('');
  //const [userLastName, setUserLastName] = useState('');
  //const [userEmail, setUserEmail] = useState('');
  //const [userPassword, setUserPassword] = useState('');

  function handleChange(e){
    const {name, value} = e.target;
    setFormValues({...formValues, [name]:value});
  }

  function handleSubmit(e) {
    e.preventDefault();
    setFormValues(e.target);
    //setUserLastName(e.target.userLastName);
    //setUserFirstName(e.target.userFirstName);
    //setUserEmail(e.target.UserEmail);
    //setUserPassword(e.target.userPassword)

    console.log(formValues);

    // si notre input à une valeur, on envoie le submit au parent
    if (setFormValues) {
      // on envoie le userNickname, userFirstName... au composant parent, on fait remonter l'evenement du onSubmit
      setFormValues('')
      //setUserNickname('');//on reset les inputs
      //setUserLastName('');
      //setUserFirstName('');
     // setUserEmail('');
     // setUserPassword('');
    }
  }
    return(
      <div className='inscriptionForm'>
        <h1 className='connectionTitle'>Inscription pour {formValues}</h1>
          <Form 
            onSubmit={handleSubmit} // gere à la fois le "entré" sur l'input et le click sur le bouton 
          >
          <Form.Field>
            <label className="field-label">Nom d'utilisateur</label>
            <input 
              value={formValues.userNickname}
              name="userName"
              onChange={handleChange}
              className="field-input" 
              type="text" 
              placeholder="Votre pseudo"
            />
          </Form.Field>
          <Form.Field>   
            <label htmlFor='name' className="field-label">Nom </label>
            <input 
              value={formValues.userFirstName} 
              name='Votre Nom'
              className="field-input" 
              onChange={handleChange}
              type="text" 
              placeholder="Tuche" 
            />
            </Form.Field>
            <Form.Field> 
            <label className="field-label">Prenom </label>
            <input 
              value={formValues.userLastName}
              name='prenom'
              className="field-input"
              onChange={handleChange}
              type="text" 
              placeholder="Jeremy"/> 
            </Form.Field>
            <Form.Field>
            <label>Adresse mail </label>
            <input 
              className="field-input" 
              value={formValues.UserEmail}
              name='email'
              onChange={handleChange}
              type="text" 
              placeholder="codeur65@gmail.com"/>
            </Form.Field>
            <Form.Field> 
            <label className="field-label">Nouveau mot de passe </label>
            <input 
              className="field-input"
              value={formValues.userPassword}
              onChange={handleChange}
              name="password" 
              type="password" 
              placeholder="Votre mot de passe" />
            </Form.Field>

            <Button className="form-submit" type="submit">Valider</Button>
            </Form>
        </div>
    )
}

Form.propTypes = {
  className: PropTypes.string,
};
