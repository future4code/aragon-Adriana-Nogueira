import React, { useEffect } from 'react';
import Header from '../Header/Header';
import styled from "styled-components"
import { useNavigate } from 'react-router-dom';
import { goToAdminPage } from '../Rotas/coordenadas';

const Container = styled.section`
padding: 10px;
font-family: Arial, Helvetica, sans-serif;
`

function HomePage () {
  const navigate = useNavigate()

  useEffect(() =>{
      if (localStorage.getItem("token")){
          goToAdminPage(navigate)
      }
  }, [])
        return (
            
           
            <div>
                <Header/>
               

               <main>
                   <Container>
Cadastre  a viagem de sua preferencia
                   </Container>
                   <br/>
                   <Container>
Veja as Opçoes de Viagens
                   </Container>
               </main>
            </div>
        );
    }


export default HomePage;