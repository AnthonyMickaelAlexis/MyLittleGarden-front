import { useState } from 'react';
import { Button, Form } from 'semantic-ui-react'
import './InscriptionPage.scss';
import PropTypes from 'prop-types';



export default function Inscription(){
  
  const [userNickname, setUserNickname] = useState('');
  const [userFirstName, setUserFirstName] = useState('');
  const [userLastName, setUserLastName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');



  function handleSubmit(e) {
    e.preventDefault();
    setUserNickname(e.target.userNickname);
    setUserLastName(e.target.userLastName);
    setUserFirstName(e.target.userFirstName);
    setUserEmail(e.target.UserEmail);
    setUserPassword(e.target.userPassword)

    console.log({userNickname},{userFirstName},{userLastName}, {userEmail}, {userPassword});

    // si notre input à une valeur, on envoie le submit au parent
    if (userNickname && userFirstName && userLastName && userEmail &&userPassword ) {
      // on envoie le userNickname, userFirstName... au composant parent, on fait remonter l'evenement du onSubmit
      setUserNickname('');//on reset les inputs
      setUserLastName('');
      setUserFirstName('');
      setUserEmail('');
      setUserPassword('');
    }
  }

    return(
      
      <div className='inscriptionForm'>
        <div className='ui message success'>Success</div>
        <h1 className='connectionTitle'>Inscription</h1>
          <Form 
            onSubmit={handleSubmit} // gere à la fois le "entré" sur l'input et le click sur le bouton 
          >
          <Form.Field>
            <label className="field-label">Nom d'utilisateur</label>
            <input 
              value={userNickname }
              onChange={(e) => setUserNickname(e.target.value)}
              className="field-input" 
              type="text" 
              placeholder="Nom d'utilisateur"
            />
          </Form.Field>
          <Form.Field>   
            <label htmlFor='name' className="field-label">Nom </label>
            <input 
              value={userLastName} 
              className="field-input" 
              onChange={(e) => setUserLastName(e.target.value)}
              type="text" 
              placeholder="Nom" 
            />
            </Form.Field>
            <Form.Field> 
            <label className="field-label">Prenom </label>
            <input 
              value={userFirstName}
              className="field-input"
              onChange={(e) => setUserFirstName(e.target.value)}
              type="text" 
              placeholder="Prenom"/> 
            </Form.Field>
            <Form.Field>
            <label>Adresse mail </label>
            <input 
              className="field-input" 
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
              type="text" 
              placeholder="Adresse mail"/>
            </Form.Field>
            <Form.Field> 
            <label className="field-label">Nouveau mot de passe </label>
            <input 
              className="field-input"
              value={userPassword}
              onChange={(e) => setUserPassword(e.target.value)}
              name="password" 
              type="password" 
              placeholder="Nouveau mot de passe" />
            </Form.Field>

            <Button className="form-submit" type="submit">Valider</Button>
            </Form>
        </div>
    )
}

Form.propTypes = {
  className: PropTypes.string,
};
