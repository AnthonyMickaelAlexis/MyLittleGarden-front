
export default function Validation(user_name, password, passwordconfirmed, email, firstname, lastname) {

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
  }else if(!/\S+@\.\S+/.test(email)){
    errors.emailNotValid= "Votre email est invalide"
  }if(!password){
    errors.password = "Votre mot de passe est nécessaire."
  }else if(password.length < 3){
    errors.passwordLength = "Votre mot de passe doit contenir au moins 3 caractères"
  }if(!passwordconfirmed === password){
    errors.passwordconfirmed = "Le nouveau mot de passe et le mot de passe de confirmation ne correspondent pas."
  }else if(!passwordconfirmed){
    errors.passwordconfirmedempty = "Votre mot de passe de confirmation est nécessaire"
  }



  return errors;
}

