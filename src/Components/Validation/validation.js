
export default function Validation(user_name, password, email, fristname, lastname) {

  let errors={};

  if(!user_name){
    errors.user_name = "Votre Nom d'utilisateur est nécessaire."
  }
  if(!fristname){
    errors.fristname = "Votre Prenom est nécessaire."
  }
  if(!lastname){
    errors.lastname = "Votre Nom est nécessaire."
  }
  if(!email){
    errors.email = "Votre email est nécessaire."
  }else if(!/\S+@\.\S+/.test(email)){
    errors.email= "Votre email est invalide"
  }if(!password){
    errors.password = "Votre mot de passe est nécessaire."
  }else if(password.length < 3){
    errors.password = "Votre mot de passe doit contenir au moins 3 caractères"
  }


  return errors;
}

