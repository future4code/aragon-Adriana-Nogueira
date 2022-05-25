import React, { useEffect } from 'react';
import Header from '../Header/Header';
import styled from "styled-components"
import { useNavigate } from 'react-router-dom';
import { goToAdminPage } from '../Rotas/coordenadas';
import useRequestData from '../Hooks/useRequestData';
import TripCard from '../Header/TripCard';

const Container = styled.section`
padding: 10px;
font-family: Arial, Helvetica, sans-serif;
`

function HomePage () {
  const navigate = useNavigate()

  const [tripsData] = useRequestData("trips", {})

  useEffect(() =>{
      if (localStorage.getItem("token")){
          goToAdminPage(navigate)
      }
  }, [])

  const tripsLista = tripsData.trips ? tripsData.trips.map((trip) => {
      return (
          <TripCard
          key={trip.id}
          trip={trip}/>
      )
  }) :(<p>Carregando ...</p>)
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
                   {tripsLista}
               </main>
            </div>
        );
    }


export default HomePage;