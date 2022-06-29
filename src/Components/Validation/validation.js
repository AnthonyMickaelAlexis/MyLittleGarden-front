
export default function Validation(user_name, password, confirm_password, email, firstname, lastname) {

  let errors={};

  if(!user_name){
    errors.user_name = "Votre Nom d'utilisateur est nécessaire."
  }
  if(!firstname){
    errors.firstname = "Votre Prenom est nécessaire."
  }
  if(!lastname){
    errors.lastname = "Votre Nom est nécessaire."
  }
  if(!email){
    errors.email = "Votre email est nécessaire."
  }
  else if(email!== /^[a-zA-Z0-9_-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,3}$/){ //!/\S+@\.\S+/.test(email)){
    errors.email= "Votre email est invalide."
  }
  if(!password){
    errors.password = "Votre mot de passe est nécessaire."
  }
  else if(password.length < 3){
    errors.password = "Votre mot de passe doit contenir au moins 3 caractères."
  }
  if(confirm_password !== password){
    errors.confirm_password  = "Le nouveau mot de passe et le mot de passe de confirmation ne correspondent pas."
  }
  else if(!confirm_password ){
    errors.confirm_password  = "Votre mot de passe de confirmation est nécessaire."
  }


  return errors;
}
  