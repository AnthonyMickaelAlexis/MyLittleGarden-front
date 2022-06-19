import { useState } from 'react';
import { Button, Form } from 'semantic-ui-react';
import Validation from '../Validation/validation';
import './LoginPage.scss';
import PropTypes from 'prop-types';
import axios from 'axios';
//import image from "../../assets/images/image1.jpg";
import '../../../src/index.css';


function LoginPage(){
    const test ={
        pseudo:'test',
        mdp:'test'
    }
   
    const url = "https://oclock-my-little-garden.herokuapp.com/login";
   // const url = "http://localhost:8080/login";

    const [user_name, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    //const [isSubmitted, setIsSubmitted] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();
        setErrors(Validation(user_name, password))
        //setIsSubmitted(true);

       
          axios.post(url, {user_name:user_name, password:password})     
          .then((response) => {
            console.log('reponse :', response);
            console.log(response.data)
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
<<<<<<< HEAD
=======
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui expedita quis vitae nostrum, sint animi repellendus eaque voluptate consequuntur ipsa! Iusto sapiente itaque dignissimos quasi, autem eius maxime. Cum, deserunt harum necessitatibus nobis dolores voluptatem tenetur. Nam ad, dolores autem, obcaecati accusamus ratione quisquam sed hic officia ipsa quaerat, excepturi delectus. Iste expedita architecto vitae odio natus. Asperiores commodi dicta dolore, vel sed eaque nostrum in tenetur explicabo perferendis consequuntur laborum porro esse veritatis, sunt expedita, hic qui! Laborum quis, repellendus sint architecto officia adipisci Lorem i lorem1000 psum dolor sit amet consectetur adipisicing elit. Ipsum libero minima laborum non magni aut recusandae nobis expedita voluptatum nostrum accusantium. lorem1000 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui expedita quis vitae nostrum, sint animi repellendus eaque voluptate consequuntur ipsa! Iusto sapiente itaque dignissimos quasi, autem eius maxime. Cum, deserunt harum necessitatibus nobis dolores voluptatem tenetur. Nam ad, dolores autem, obcaecati accusamus ratione quisquam sed hic officia ipsa quaerat, excepturi delectus. Iste expedita architecto vitae odio natus. Asperiores commodi dicta dolore, vel sed eaque nostrum in tenetur explicabo perferendis consequuntur laborum porro esse veritatis, sunt expedita, hic qui! Laborum quis, repellendus sint architecto officia adipisci Lorem i lorem1000 psum dolor sit amet consectetur adipisicing elit. Ipsum libero minima laborum non magni aut recusandae nobis expedita voluptatum nostrum accusantium. lorem1000 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui expedita quis vitae nostrum, sint animi repellendus eaque voluptate consequuntur ipsa! Iusto sapiente itaque dignissimos quasi, autem eius maxime. Cum, deserunt harum necessitatibus nobis dolores voluptatem tenetur. Nam ad, dolores autem, obcaecati accusamus ratione quisquam sed hic officia ipsa quaerat, excepturi delectus. Iste expedita architecto vitae odio natus. Asperiores commodi dicta dolore, vel sed eaque nostrum in tenetur explicabo perferendis consequuntur laborum porro esse veritatis, sunt expedita, hic qui! Laborum quis, repellendus sint architecto officia adipisci Lorem i lorem1000 psum dolor sit amet consectetur adipisicing elit. Ipsum libero minima laborum non magni aut recusandae nobis expedita voluptatum nostrum accusantium. lorem1000

>>>>>>> origin/06-17-Alexandra

  </div>
  // </div>
    )
};

Form.propTypes = {
    className: PropTypes.string,
  };
  
export default LoginPage;