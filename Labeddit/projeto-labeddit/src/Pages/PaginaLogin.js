import { useNavigate } from "react-router-dom"
import { useState } from "react/cjs/react.production.min"
import Header from "../componentes/Header"
import { goToLogin } from "../routes/coordenadas"

export default function PaginaLoggin() {
    const [email, setEmail ] = useState("")
    const onChange = () => {
        e.preventDefault()
    }
    const navigate = useNavigate()
    return(
        <>
      <Header/>
      <h1>Login</h1>
      <form >
          <label htmlFor="email">   email </label>
              <input id="email"
              type={"email"}
              value={""}
              onChange={onChange} >
              </input>
      
          <button onClick={() => goToLogin(navigate)}>Logar</button>
      </form>

      </>
    )
}