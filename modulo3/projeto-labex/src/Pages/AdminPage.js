
import Header from "../Header/Header";
import { useEffect } from "react"
import styled from "styled-components"
import { useNavigate } from "react-router-dom";
import { goToHomePage } from "../Rotas/coordenadas";
import useRequestData from "../Hooks/useRequestData";
import { deleteTrip } from "../servicos/Request";
import TripCard from "../Header/TripCard";

const Container = styled.section`
padding: 10px;
font-family: Arial, Helvetica, sans-serif;
`

function AdminPage() {
    const navigate = useNavigate()

    const [tripsData, getTripsData] = useRequestData('trips', {})

    useEffect(() => {
        if (!localStorage.getItem("token")) {
            goToHomePage(navigate)
        }
    }, [])

    const removeTrip = (tripId) => {
        if (window.confirm("Tem certeza que deseja remover ?")){
            deleteTrip(tripId, getTripsData)
        }
    }
    const tripsList = tripsData.trips ? tripsData.trips.map((trip) =>{
        return (
            <TripCard 
            key={trip.id}
            trip={trip}
            removeTrip={removeTrip}/>

        )
    }) : (<p> Carregando...</p>)

    return (
        <div>
            <Header
                
            />

            <main>
                <Container>
                    Monte sua viagem
                </Container>
                <Container>
                    Encontre sua viagem
                    {tripsList}
                </Container>
                {tripsList}
            </main>
        </div>
    );
}


export default AdminPage;