import axios from "axios";

const API_URL = "https://oclock-my-little-garden.herokuapp.com/";

class AuthService {
  login(user_name, password) {
    return axios
      .post(API_URL + "login", {
        user_name,
        password
      })
      .then(response => {
        if (response.data.access_token) {
            localStorage.setItem("token", response.data.access_token);
        }
        return response.data;
      });
  }
  logout() {
    localStorage.removeItem("token");
  }
  register(user_name, email, firstname, lastname, password) {
    return axios.post(API_URL + "register", {
      user_name,
      email,
      password,
      firstname, 
      lastname
    });
  }
  getCurrentUser() {
    return JSON.parse(localStorage.getItem('token'));;
  }
}
export default new AuthService();