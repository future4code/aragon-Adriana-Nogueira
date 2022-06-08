
import { useNavigate } from "react-router-dom";
import Header from "../componentes/Header";
import { goToPaginaLogout } from "../routes/coordenadas";
import { requestLogin } from "../serviços/requests";
import useForm from "../hooks/useForm";
import useUnprotectedPage from "../hooks/useUnprotectedPage";

export default function PaginaLoggin() {
    useUnprotectedPage()
    const navigate= useNavigate()
const {form, onChange, clear}  = useForm({email:"", password:""})

const login = (e) =>{
    e.preventDefault()

    requestLogin(form, clear,navigate)
}

    return (
        <>
            <Header 
            isProtected={false}/>
            
            <main>
                <section>
                <h1>Login</h1>
                <form onSubmit={login}>
                <label htmlFor={"email"}>Email:</label>
                <input id={"email"}
                name={"email"}
                value={form.email}
                onChange={onChange}
               />
                <br/>
                <label htmlFor={"password"}>Senha: </label>
                    <input
                        id={"password"}
                        type={"password"}
                        name={"password"}
                        value={form.password}
                        onChange={onChange}
                    ></input>
                 <br/>
                <button type={"submit"} >Entrar</button>
                </form>
                </section>
                <hr/>
                <section>
                    <h3>Não tem cadastro? Clique no botão seguir para se cadastrar:</h3>
                    <button onClick={() => goToPaginaLogout(navigate)}>Ir para cadastro</button>
                </section>
                
            </main>

        </>

    )
}