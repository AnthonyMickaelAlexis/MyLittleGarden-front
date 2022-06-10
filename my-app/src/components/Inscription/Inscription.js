import { Form } from "semantic-ui-react";

export default function Inscription(){
    return(
        <div id='container'>
            <h1>Inscription</h1>

            <Form id='login-inscription' action="/inscription" method="post">
            <label className="field-label">
              Nom d'utilisateur
               
            </label>
            <input className="field-input" name="name" type="text" placeholder="LaFourche65"/>   
            <label className="field-label">
              Nom  
            </label>
            <input className="field-input" name="name" type="text" placeholder="Tuche"/> 
            <label className="field-label">
              Prenom  
            </label>
            <input className="field-input"name="prenom" type="text" placeholder="Jeremy"/> 
            <label>
              Adresse mail 
            </label>
            <input className="field-input" name="name" type="text" placeholder="LaFourche65"/> 
            <label className="field-label">
              Nouveau mot de passe 
            </label>
            <input className="field-input" name="password" class="text password" type="password" placeholder="Password" />
            <input className="field-input" class="submit" type="submit" name="submit" value="Valider"/>             
            </Form>
        </div>
    )
}