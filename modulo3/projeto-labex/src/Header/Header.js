import { useNavigate } from "react-router-dom";
import { goToHomePage } from "../Rotas/coordenadas";
import styled from "styled-components";
import { requestLogin } from "../servicos/Request";
import { useState } from "react";

const Container = styled.div`
padding: 10px;
background: linear-gradient(70deg, blue, white);
color: white;
display: flex;
flex-wrap: wrap;
justify-content: space-between;
margin: 2px;
`
const Container1 = styled.div `
background-color: lightsteelblue;
color: white;
display: flex;
flex-wrap: wrap;
justify-content: space-between;
margin: 2px;
padding: 10px;
border-radius: 2px solid black
;

`
const Botao = styled.button`
cursor: pointer;
background: black;
color:white;
box-shadow: #094c66 4px 4px 0px;
border-radius: 8px;
transition: transform 200mx, box-shadow;
margin:0.5rem;

button:active{
    transform: translateY(4px) translateX(4px);
    box-shadow: #094c66 0px 0px 0px;
}

`
const Botao1 = styled.button`
height:2rem;
width: 5rem;
justify-items: center;
cursor: pointer;
background: black;
color:white;
box-shadow: #094c66 4px 4px 0px;
border-radius: 8px;
transition: transform 200mx, box-shadow;
margin:0.5rem;

button:active{
    transform: translateY(4px) translateX(4px);
    box-shadow: #094c66 0px 0px 0px;
}


`


function Header() {
    const navigate = useNavigate()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleInputValor = (event) => {
        switch (event.target.name){
            case "email":
                return setEmail(event.target.value)
            case "password":
                return setPassword(event.target.value)
                default:
                    return  
        }
    }

    const login = (event) => {
        event.preventDefault();

        requestLogin(email, password, navigate)
    }
    const logout  = () => {
        localStorage.removeItem("token")

        goToHomePage(navigate)
    }
     const renderPage = 
     localStorage.getItem('token') ?
     (
         <Botao1 onClick={logout}>Logout</Botao1>
     ):(
         <Container1>
         <form onSubmit={login}>
             
                <label htmlFor={"email"}>Email:</label>
                <input 
                name={"email"} 
                id={"email"}
                value={email}
                onChange={handleInputValor} />
                <br/>
                <label htmlFor="password">Password:</label>
                <input 
                name={"password"} 
                id={"password"}
                value={password}
                onChange={handleInputValor}/>
                <br/>
                <Botao type={'submit'}>Login</Botao>
           
         </form>
         </Container1>
     )

   
    return (




        <Container>
            <h1> LabeX</h1>
           
            {renderPage}
        </Container>
    );
}


export default Header;