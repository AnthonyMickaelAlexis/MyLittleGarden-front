
export default function Validation(user_name, password, passwordconfirmed, email, emailNotValid, firstname, lastname, passwordconfirmedempty) {

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
  }//else if(emailNotValid!== !/\S+@\.\S+/.test(email))/*/^[a-zA-Z0-9_-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,3}$/)*/{/**/
    //errors.emailNotValid= "Votre email est invalide"
  if(!password){
    errors.password = "Votre mot de passe est nécessaire."
  }else if(password.length < 3){
    errors.passwordLength = "Votre mot de passe doit contenir au moins 3 caractères"
  }if(!passwordconfirmed === password){
    errors.passwordconfirmed = "Le nouveau mot de passe et le mot de passe de confirmation ne correspondent pas."
  }else if(passwordconfirmedempty){
    errors.passwordconfirmedempty = "Votre mot de passe de confirmation est nécessaire"
  }
  return errors;
}
  