import { useNavigate } from "react-router-dom"
import {goToFeed} from "../routes/coordenadas"
import styled from "styled-components"
import GlobalStyle from "../Theme/GlobalStyle"
const Botao = styled.button`
 background-color: white;
  color: black;
  border: 2px solid #e7e7e7;
  padding: 2px;
  width: 10%;
  height: 30px;
  `

 function ErrorPage() {
    const navigate = useNavigate()
    return(
        <GlobalStyle>
          <h1>  Error ao entrar na pagina</h1>
          <Botao onClick={() => goToFeed(navigate)}>Ir para feed</Botao>
        </GlobalStyle>

    )
}export default ErrorPage