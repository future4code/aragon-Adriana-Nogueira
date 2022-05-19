import axios from 'axios';
import { API_CLIENT,BASE_URL } from '../urls/urls';
import {useState, useEffect} from "react"


function PerfilUsuario () {
 const [profile, setPerfil] = useState(undefined)

 useEffect(() => {
     getPerfil()
 },[])

const getPerfil = () => {
    const url = `${BASE_URL}/${API_CLIENT} /person`
    axios.get(url)
    .then((res)=>{
        setPerfil(res.data.profile)
    })
    .catch((err) => {
        console.log(err.message)
    })
}
const perfilCartao = profile && (

    <figure>
        <img src={profile.photo} alt={profile["photo_alt"]}height={"270"}/>
        <p>{profile.name}, {profile.age}</p>
        <p>{profile.bio}</p>
        <button onClick={() => getPerfil()}>Proximo Perfil</button>
     


    </figure>
)


        return (
            <div>
             <h2>Perfil</h2>   
             {perfilCartao}
            </div>
        );
    }


export default PerfilUsuario;