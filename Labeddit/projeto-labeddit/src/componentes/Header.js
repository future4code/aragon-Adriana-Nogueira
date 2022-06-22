import { useNavigate } from "react-router-dom"
import { goToLogin } from "../routes/coordenadas"
import styled from "styled-components"
const Nav = styled.div`
   width: 100%;
  height: 130px;
  background-repeat: no-repeat;
  background-size: cover;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;

  @media #{$BREAKPOINT-DESK} {
    height: 260px;
  }
 
`;
const Botao = styled.button`
 background-color: white;
  color: black;
  border: 2px solid #e7e7e7;
  padding: 2px;
  width: 50%;
  height: 50px;
  `

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
        <Nav>
        <header>
        <h1>Labbedit</h1>    
        {props.isProtected && (
            <>
            <h3> Bem-vindo, {localStorage.getItem("userEmail")}!</h3>
            <Botao onClick={logout}>Logout</Botao>
            </>
        )}
        </header >
        </Nav>
    )
}
export default Header