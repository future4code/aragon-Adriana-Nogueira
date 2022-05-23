import { useNavigate } from "react-router-dom";
import { goToAdminPage, goToHomePage } from "../Rotas/coordenadas"
import styled from "styled-components"

const Container = styled.div `
padding: 10px;
border-bottom: 2px solid black;
`
const Botao = styled.button `
pointer-events: auto;
cursor: pointer;
background: #e7e7e7;
border: none;
padding: 1.5rem 3rem;
margin: 0;
position: relative;
display: inline-block;
font-family: Arial, Helvetica, sans-serif;


`

function Header(props) {
    const navigate = useNavigate()



    const renderizaHeader = () => {
        switch(props.paginaAtual){
            case "home-page":
                return(
                    <Botao onClick={() => goToAdminPage(navigate)}>
                    Ir para pagina Inicial
                </Botao>

                )
                case "admin-page":
                    return(
                        <Botao onClick={() => goToHomePage(navigate)}>
                Ir Para Pagina Final
            </Botao>
                    )
                    default: 
                    return
        }
    }

    return (
        <Container>
            <h1> LabeX</h1>
            {renderizaHeader()}
        </Container>
    );
}


export default Header;