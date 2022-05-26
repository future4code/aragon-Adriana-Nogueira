import axios from "axios";
import { goToAdminPage } from "../Rotas/coordenadas";
import {BASE_URL, API_CLIENT} from "../urls/url"


export const requestLogin = (email, password,navigate) =>  {
   const body ={
       email:email,
       password: password
   }
  

   axios.post(`${BASE_URL}/${API_CLIENT}/login`, body)
   
   .then((res) => {
       localStorage.setItem("token", res.data.token)
   
       alert("login realizado com sucesso");
       goToAdminPage(navigate)
   })
   .catch ((err) => {
       alert("Tente novamente")
       console.log(err.response)
   })
}
     
export const createTrip = (body, clear, getTripsData) => {
    const header= {
        headers:{
            auth: localStorage.getItem("token")
        }
    }
    axios.post(`${BASE_URL}/${API_CLIENT}/trips`, body,header)
    .then(() => {
        alert("Viagem criada com sucesso!")
        clear()
        getTripsData()

})
.catch((err) => {
    alert(err.message)
})
}
export const deleteTrip = (tripId, getTripsData) => {
const header = {
    headers: {
        auth: localStorage.getItem("token")
    }
}
axios.delete(`${BASE_URL}/${API_CLIENT}/trips/${tripId}`, header)
.then(() =>{
    alert("Viagem removida com sucesso!")
    getTripsData()
})
.catch((err) => {
    alert(err.message)
})

}
