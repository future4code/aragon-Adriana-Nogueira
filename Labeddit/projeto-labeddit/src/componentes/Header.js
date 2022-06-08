import { useNavigate } from "react-router-dom"
import { goToLogin } from "../routes/coordenadas"







function Header(props){
    const navigate = useNavigate()
  const logout = () => {
      if(window.confirm("Tem certeza de que deseja sair ?")){
          localStorage.removeItem("token")
          localStorage.removeItem("userEmail")
          goToLogin(navigate)
          alert("Logout com sucesso!")
      }
  }

    return(
        <header>
        <h1>Labbedit</h1>    
        {props.isProtected && (
            <>
            <h3> Bem-vindo, {localStorage.getItem("useEmail")}</h3>
            <button onClick={logout}>Logout</button>
            </>
        )}
        </header>

    )
}
export default Header