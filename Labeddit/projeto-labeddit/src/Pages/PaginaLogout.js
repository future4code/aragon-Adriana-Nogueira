import Header from "../componentes/Header";
import { useNavigate } from "react-router-dom";
import { goToLogin } from "../routes/coordenadas";
import useForm from "../hooks/useForm";
import { requestLogout } from "../serviços/requests";
import useUnprotectedPage from "../hooks/useUnprotectedPage";
import styled from "styled-components"
import GlobalStyle from "../Theme/GlobalStyle";
const Body = styled.body `
font-family: Arial, Helvetica, sans-serif`


const Botao = styled.button`
 background-color: white;
  color: black;
  border: 2px solid #e7e7e7;
  padding: 2px;
  width: 10%;
  height: 30px;
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

function PaginaLogout() {
    useUnprotectedPage()
  const navigate = useNavigate()
    const { form, onChange, clear } = useForm({ name: "", email: "", password: "" });

const logout = (e) => {
    e.preventDefault()
    requestLogout(form, clear, navigate)
}

return (
    <Body>
    <GlobalStyle>
        <Header 
        isProtected={false}/>

        <main>
            <h1>Cadastro de Novo usuario</h1>
            <form onSubmit={logout}>
                <label htmlFor={"name"}>Nome:</label>
                <Input id={"name"}
                    name={"name"}
                    value={form.name}
                    onChange={onChange}
                    pattern={"^.{3,}$"}
                    title={"O nome deve ter no mínimo 3 caracteres"}
                    required
                />
                <br />
                <label htmlFor={"email"}>Email:</label>
                <Input id={"email"}
                type={"email"}
                    name={"email"}
                    value={form.email}
                    onChange={onChange}
                    required />
                <br />
                <label htmlFor={"password"}>Senha:</label>
                <Input id={"password"}
                    name={"password"}
                    type={"password"}
                    value={form.password}
                    onChange={onChange}
                    pattern={"^.{8,30}$"}
                    title={"O nome deve ter no mínimo 8 e no máximo 30 caracteres"}
                    required />
                <br />
                <Botao type={"submit"} >Cadastrar usuário</Botao>
            </form>
            <Botao onClick={() => goToLogin(navigate)}>Voltar</Botao>
        </main>

    </GlobalStyle>
    </Body>
)
}
export default PaginaLogout