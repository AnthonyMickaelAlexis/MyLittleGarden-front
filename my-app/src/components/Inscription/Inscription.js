import './style.css';

export default function Inscription(){
    return(
      <>
      <h1>Inscription</h1>
        <div id='container-form'>
          <form id='login-inscription' action="/inscription" method="post">
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
            <input className="field-input" name="password" type="password" placeholder="Password" />
            <button className="field-input" type="submit">Valider</button>
            </form>
        </div>
        </>
    )
}