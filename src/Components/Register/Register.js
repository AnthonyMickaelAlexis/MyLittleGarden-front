import { useState } from 'react';
import { Button, Form } from 'semantic-ui-react'
import './registerPage.scss';
import PropTypes from 'prop-types';
import axios from 'axios';
import Validation from '../Validation/validation';
// import image from "../../assets/images/image1.jpg";
import '../../../src/index.css';


export default function Register(){
  const url = "https://oclock-my-little-garden.herokuapp.com/register";
  //const url = "http://localhost:8080/register";

  const [user_name, setUserName] = useState('');
  const [firstname, setfirstname] = useState('');
  const [lastname, setlastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // States for checking the errors
  
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState(false);

  //handleSubmit pour tout changement de state
  function handleSubmit(e) {
    e.preventDefault();

    setErrors(Validation(user_name, password, firstname, lastname, email));

    axios.post(url, 
      {user_name:user_name, firstname:firstname, lastname:lastname, email:email, password:password}
    )     
    .then((response) => {
      console.log('reponse :', response);
      console.log(response.data)
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
//         <div className='ui message success'>Success</div>

    return(
      // <div style={{ backgroundImage: `url(${image})`, backgroundRepeat:"no-repeat", 
      //       backgroundSize:"cover", backgroundPosition: "center", height: '100vh', position:'relative'}}>
      <div className='registerForm'>
       
        <h1 className='connectionTitle'>Inscription</h1>
          <Form 
            onSubmit={handleSubmit} // gere à la fois le "entré" sur l'input et le click sur le bouton 
          >
          <Form.Field>
            <label htmlFor='name' className="field-label">Nom d'utilisateur</label>
            <input
              name='name' 
              value={user_name}
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
              value={lastname} 
              className="field-input" 
              onChange={(e) => setlastname(e.target.value)}
              type="text" 
              placeholder="Nom" 
            />
            </Form.Field>

            {errors.lastname &&<p className='error'>{errors.lastname}</p>}

            <Form.Field> 
            <label htmlFor='name'className="field-label">Prenom </label>
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
            <label htmlFor='email'>Adresse mail</label>
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
<<<<<<< HEAD
           
=======
            "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."

            "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."


>>>>>>> origin/06-17-Alexandra
        </div>
        // </div>
    )
}

Form.propTypes = {
  className: PropTypes.string,
};
