
import Header from "../Header/Header";
import { useEffect } from "react"
import styled from "styled-components"
import { useNavigate } from "react-router-dom";
import { goToHomePage } from "../Rotas/coordenadas";
import useRequestData from "../Hooks/useRequestData";
import { deleteTrip } from "../servicos/Request";
import TripCard from "../Header/TripCard";
import { useForm } from "../Hooks/useForm";
import { createTrip } from "../servicos/Request"
import { planets } from "../urls/planets";
import actualDate from "../utils/actualDate";


const Container = styled.section`
padding: 10px;
font-family: Arial, Helvetica, sans-serif;
`

function AdminPage() {
    const navigate = useNavigate()


    const [tripsData, getTripsData] = useRequestData('trips', {})

    const { form, onChange, clear } = useForm({ name: "", planet: "", date: "", description: "", durationInDays: "" })

    useEffect(() => {
        if (!localStorage.getItem("token")) {
            goToHomePage(navigate)
        }
    }, [])

    const onClickCreate = (event) => {
        event.preventDefault();

        createTrip(form, clear, getTripsData)

    }
    const removeTrip = (tripId) => {
        if (window.confirm("Tem certeza que deseja remover ?")) {
            deleteTrip(tripId, getTripsData)
        }
    }
    const tripsList = tripsData.trips ? tripsData.trips.map((trip) => {
        return (
            <TripCard
                key={trip.id}
                trip={trip}
                removeTrip={removeTrip} />

        )
    }) : (<p> Carregando...</p>)

    return (
        <div>
            <Header

            />

            <main>
                <Container>
                    <form onSubmit={onClickCreate}>
                        <label htmlFor={"name"}>Nome:</label>
                        <input

                            name={"name"}
                            value={form.name}
                            onChange={onChange}
                            pattern={"^.{5,}$"}
                            title={"O nome da viagem deve ter no mínimo 5 caracteres"}
                            required />
                        <br />
                        <label htmlFor="planet">Planet:</label>
                        <select
                            name={"planet"}
                            id={"planet"}
                            value={form.planet}
                            onChange={onChange}
                            required>

                            <option value={""} disabled>Escolha um planeta</option>

                            {planets.map((planet) => {
                                return <option value={planet} key={planet}>{planet}</option>
                            })}</select>
                        <label htmlFor={"date"}>Data da Viagem:</label>
                        <input
                            id={'date'}
                            type={"date"}
                            name={"date"}
                            value={form.date}
                            onChange={onChange}
                            min={actualDate()}

                            required />
                        <label htmlFor={"description"}>Descrição:</label>
                        <input
                            id={"description"}
                            name={"description"}
                            value={form.description}
                            onChange={onChange}
                            pattern={"^.{20,}$"}
                            title={"O nome deve conter no minimo  20 caracteres"}
                            required />
                        <label htmlFor={"duration"}>Duração:</label>
                        <input

                        id={"duration"}
                        type={"number"}
                        name={"durationInDays"}
                        value={form.durationInDays}
                        onChange={onChange}
                        min={30}
                         required/>
                    <button type={"submit"}>Criar</button>

                    </form>
                </Container>
                <Container>
                    Lista de viagem
                    {tripsList}
                </Container>
                {tripsList}
            </main>
        </div>
    );
}


export default AdminPage;