import axios from 'axios';
import { API_CLIENT,BASE_URL } from '../urls/urls';
import { useEffect,useState } from 'react';
import styled from "styled-components"

const EstiloCard = styled.div`
padding: 10px;


`
const Card = styled.img`
 box-shadow:5px 10px 30px ;
`
const Container = styled.p`
color: blueviolet;
font-size: large;

`
const Botao = styled.button`
font-family: Arial, Helvetica, sans-serif;
font-size: 14px;
font-weight: 700;
text-transform: uppercase;
border-radius: 10px;
border:0;
border: none;
outline:none;
padding: 1.25em 2 em;
transform-style: preserve-3d;
transition: all 150ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
cursor:pointer;



&:hover {
    background: purple;
    box-shadow: 0 5px 01 #670167;
    color: #fff
}

`


function PerfilUsuario () {
 const [profile, setPerfil] = useState(undefined)

 useEffect(() => {
    getPerfil();
}, []);
console.log(PerfilUsuario)

const getPerfil = () => {
    const url = `${BASE_URL}/${API_CLIENT} /person`
    axios.get(url)
    .then((res)=>{
        setPerfil(res.data.profile)
    })
    .catch((err) => {
        console.log(err.response)
    })
}


const escolherPerfil = (profileId, choice) =>{
    const url = `${BASE_URL}/${API_CLIENT}/choose-person`
    const body ={
        id: profileId,
        choice: choice
    }
    axios.post(url,body)
    .then((res) =>{
        if (body.choice && res.data.isMatch){
            alert("Deu Match!!!")
        }
        getPerfil()

    })
    .catch((err) => {
        console.log(err.message)

    })
}
const resetarPerfil = () => {
    const url = `${BASE_URL}/${API_CLIENT}/clear`
    axios.put(url)
    .then (() => {
        alert("Perfis resetados com sucesso")
        getPerfil()
    })
    .catch((err) => {
        console.log(err.message)
    })
}


const perfilCartao = profile ? (

    <figure>
        < Card src={profile.photo} alt={profile["photo_alt"]}height={"270"}/>
        
     
        <p>{profile.name}, {profile.age}</p>
       
    
        <p>{profile.bio}</p>
       
        <Botao onClick={() => escolherPerfil(profile.id, true)}>Like</Botao>
        <Botao onClick={() => escolherPerfil(profile.id, false)}>Dislike</Botao>

        </figure>
):(
   <div>
       <h4> Matches acabaram" Clique em Resetar Perfil para reiniciar!</h4>
       <Botao onClick={() => resetarPerfil()}>Reseta Perfil</Botao>
   </div>

)

        return (
            <EstiloCard>
             <h2>Perfil</h2>   
             {perfilCartao}
          
            </EstiloCard>
        );
    }


export default PerfilUsuario;