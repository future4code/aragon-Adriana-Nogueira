
import Header from "../Header/Header";
import styled from "styled-components"

const Container = styled.section`
padding: 10px;
font-family: Arial, Helvetica, sans-serif;
`

function AdminPage () {
   
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