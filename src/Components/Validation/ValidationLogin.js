export default function ValidationLogin(
    user_name,
    password,
  ) {
    let errors = {};
  
    if (!user_name) {
      errors.user_name = "Votre Nom d'utilisateur est nécessaire.";
    }

    //else if(!/\S+@\.\S+/.test(email)){
    //  errors.email= "Votre email est invalide."}
    if (!password) {
      errors.password = "Votre mot de passe est nécessaire.";
    } else if (password.length < 3) {
      errors.password = "Votre mot de passe doit contenir au moins 3 caractères.";
    }
  
    return errors;
  }