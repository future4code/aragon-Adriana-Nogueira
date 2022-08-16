import { useNavigate } from "react-router-dom"
import {goToTripDetailsPage} from "../Rotas/coordenadas"
import styled from "styled-components"

const Botao = styled.button`
cursor: pointer;
background: black;
color:white;
box-shadow: #094c66 4px 4px 0px;
border-radius: 8px;
transition: transform 200mx, box-shadow;
margin:0.5rem;

button:active{
    transform: translateY(4px) translateX(4px);
    box-shadow: #094c66 0px 0px 0px;
}
`



function TripCard (props){

    const navigate = useNavigate()

const {id, name, description, planet, durationInDay, date} = props.trip

const token = localStorage.getItem("token")

return (
<div>
<p><b>Nome: </b>{name}</p>
<p><b>Descrição: </b>{description}</p>
<p><b>Planeta: </b>{planet}</p>
<p><b>Duração da Viagem: </b>{durationInDay}</p>
<p><b>Data: </b>{date}</p>

{ token && (
<div>
<Botao onClick={() => goToTripDetailsPage(navigate, id)}>Exibir detalhes</Botao>
<Botao  onClick={() => props.removeTrip(id)}> Excluir viagem</Botao>
</div>
)}


</div>

)
}
export default TripCard
