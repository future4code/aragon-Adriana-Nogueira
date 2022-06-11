
import { useNavigate } from "react-router-dom";
import Header from "../componentes/Header";
import { goToPaginaLogout } from "../routes/coordenadas";
import { requestLogin } from "../serviços/requests";
import useForm from "../hooks/useForm";
import useUnprotectedPage from "../hooks/useUnprotectedPage";
import styled from "styled-components"
const Body = styled.body `
font-family: Arial, Helvetica, sans-serif`

const Section = styled.section`
position: relative;
width: 200px;

`
const Input = styled.input`
font-family: Poppins-Regular;
    font-size: 15px;
    color: #555555;
    line-height: 1.2;
    display: block;
    width: 100%;
    height: 45px;
    background: transparent;
    padding: 0 5px;

`
const Botao = styled.button`
 background-color: white;
  color: black;
  border: 2px solid #e7e7e7;
  padding: 2px;
  width: 50%;
  height: 50px;
  `

export default function PaginaLoggin() {
    useUnprotectedPage()
    const navigate= useNavigate()
const {form, onChange, clear}  = useForm({email:"", password:""})

const login = (e) =>{
    e.preventDefault()

    requestLogin(form, clear,navigate)
}

    return (
        <Body>
        
            <Header 
            isProtected={false}/>
            
            <main>
                <Section>
                <h1>Login</h1>
                <form onSubmit={login}>
                <label htmlFor={"email"}>Email:</label>
                <Input id={"email"}
                name={"email"}
                value={form.email}
                onChange={onChange}
               />
                <br/>
                <label htmlFor={"password"}>Senha: </label>
                    <Input
                        id={"password"}
                        type={"password"}
                        name={"password"}
                        value={form.password}
                        onChange={onChange}
                    ></Input>
                 <br/>
                <Botao type={"submit"} >Entrar</Botao>
                </form>
                </Section>
                <hr/>
                <section>
                    <h3>Não tem cadastro? Clique no botão seguir para se cadastrar:</h3>
                    <Botao onClick={() => goToPaginaLogout(navigate)}>Ir para cadastro</Botao>
                </section>
                
            </main>

        </Body>

    )
}