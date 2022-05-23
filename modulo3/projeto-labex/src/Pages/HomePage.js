import React from 'react';
import Header from '../Header/Header';
import styled from "styled-components"

const Container = styled.section`
padding: 10px;
font-family: Arial, Helvetica, sans-serif;
`

function HomePage () {
  
        return (
            
           
            <div>
                <Header
                paginaAtual={"home-page"}/>

               <main>
                   <Container>
Cadastre  a viagem de sua preferencia
                   </Container>
                   <Container>
Veja as Opçoes de Viagens
                   </Container>
               </main>
            </div>
        );
    }


export default HomePage;