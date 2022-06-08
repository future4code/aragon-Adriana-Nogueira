import Header from "../componentes/Header";
import { useNavigate } from "react-router-dom";
import { goToLogin } from "../routes/coordenadas";
import useForm from "../hooks/useForm";
import { requestLogout } from "../serviços/requests";
import useUnprotectedPage from "../hooks/useUnprotectedPage";


function PaginaLogout() {
    useUnprotectedPage()
  const navigate = useNavigate()
    const { form, onChange, clear } = useForm({ name: "", email: "", password: "" });

const logout = (e) => {
    e.preventDefault()
    requestLogout(form, clear, navigate)
}

return (
    <>
        <Header 
        isProtected={false}/>

        <main>
            <h1>Cadastro de Novo usuario</h1>
            <form onSubmit={logout}>
                <label htmlFor={"name"}>Nome:</label>
                <input id={"name"}
                    name={"name"}
                    value={form.name}
                    onChange={onChange}
                    pattern={"^.{3,}$"}
                    title={"O nome deve ter no mínimo 3 caracteres"}
                    required
                />
                <br />
                <label htmlFor={"email"}>Email:</label>
                <input id={"email"}
                    name={"email"}
                    value={form.email}
                    onChange={onChange}
                    required />
                <br />
                <label htmlFor={"password"}>Senha:</label>
                <input id={"password"}
                    name={"password"}
                    value={form.password}
                    onChange={onChange}
                    pattern={"^.{8,30}$"}
                    title={"O nome deve ter no mínimo 8 e no máximo 30 caracteres"}
                    required />
                <br />
                <button type={"submit"} >Cadastrar</button>
            </form>
            <button onClick={() => goToLogin(navigate)}>Voltar</button>
        </main>

    </>

)
}
export default PaginaLogout