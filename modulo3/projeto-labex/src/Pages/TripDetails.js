import { useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import useRequestData from "../Hooks/useRequestData"
import { goToAdminPage, goToHomePage } from "../Rotas/coordenadas"
import {decideCandidate} from "../servicos/Request"
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



function TripDetails(){

    const navigate = useNavigate()
    const params = useParams()
    const [detailsData, getTripsDetail] = useRequestData(`trip/${params.tripId}`, {});

    useEffect(() => {
        if (!localStorage.getItem("token")) {
            goToHomePage(navigate)
        }
        },[])
        const decide = (candidateId,decision) => {
        
            decideCandidate(params.tripId, candidateId, decision, getTripsDetail)
        }
    const candidatesList = detailsData.trip && detailsData.trip.candidates.map((candidate) => {



return(

    <div key ={candidate.id}>
        <span><b>Nome:</b>{candidate.name}</span>
        <span><b>Profissao:</b>{candidate.profession}</span>
        <span><b>Idade:</b>{candidate.age}</span>
        <span><b>Pais:</b>{candidate.country}</span>
        <span><b>Texto de Candidatura:</b>{candidate.applicationText}</span>
        <Botao onClick={() => decide(candidate.id, true)}>Aprovar </Botao>
        <Botao onClick={() => decide(candidate.id, false)}>Reprovar</Botao>


    </div>
)

})
const approvedList = detailsData.trip && detailsData.trip.approved.map((participant) => {
    return <li key={(participant.id)}> {participant.name}</li>
})
return (


    <div>


        <Botao onClick={() => goToAdminPage(navigate)}>Sair </Botao>
        <h1>Viagem: {detailsData.trip && detailsData.trip.name}</h1>
        <h3>Lista de Candidatos</h3>
        {candidatesList}
        <h3> Lista de Aprovados</h3>
        {approvedList}
    </div>
)

}

export default TripDetails