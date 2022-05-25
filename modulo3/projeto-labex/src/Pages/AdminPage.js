
import Header from "../Header/Header";
import { useEffect } from "react"
import styled from "styled-components"
import { useNavigate } from "react-router-dom";
import { goToHomePage } from "../Rotas/coordenadas";

const Container = styled.section`
padding: 10px;
font-family: Arial, Helvetica, sans-serif;
`

function AdminPage() {
    const navigate = useNavigate()

    useEffect(() => {
        if (!localStorage.getItem("token")) {
            goToHomePage(navigate)
        }
    }, [])

    return (
        <div>
            <Header
                paginaAtual={"admin-page"}
            />

            <main>
                <Container>
                    Monte sua viagem
                </Container>
                <Container>
                    Encontre sua viagem
                </Container>
            </main>
        </div>
    );
}


export default AdminPage;