import { useNavigate } from "react-router-dom";
import { goToHomePage } from "../Rotas/coordenadas";
import styled from "styled-components";
import { requestLogin } from "../servicos/Request";
import { useState } from "react";

const Container = styled.div`
padding: 10px;
border-bottom: 2px solid black;
`
const Botao = styled.button`
pointer-events: auto;
cursor: pointer;
background: #e7e7e7;
border: none;
padding: 0.5rem 2rem;
margin: 0;
position: relative;
display: inline-block;
font-family: Arial, Helvetica, sans-serif;

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
         <Botao onClick={logout}>Logout</Botao>
     ):(
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
     )

   
    return (




        <Container>
            <h1> LabeX</h1>
           
            {renderPage}
        </Container>
    );
}


export default Header;