import axios from "axios";
import { goToAdminPage } from "../Rotas/coordenadas";
import {BASE_URL, API_CLIENT} from "../urls/url"


export const requestLogin = (inputAcesso, inputPassword,navigate) =>  {
   const body ={
       email:inputAcesso,
       password: inputPassword
   }
   axios.post(`${BASE_URL}/ ${API_CLIENT}/login`, body)
   .then((res) => {
       localStorage.setItem("token", res.data.token)
       alert("login realizado com sucesso");
       goToAdminPage(navigate)
   })
   .catch ((err) => {
       alert("Tente novamente")
       console.log(err.message)
   })
     

}