import { useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import useRequestData from "../Hooks/useRequestData"
import { goToAdminPage, goToHomePage } from "../Rotas/coordenadas"




function TripDetails(){

    const navigate = useNavigate()
    const params = useParams()
    const [detailsData] = useRequestData(`trip/${params.tripId}`, {});

    useEffect(() => {
        if (!localStorage.getItem("token")) {
            goToHomePage(navigate)
        }
        },[])
    const candidatesList = detailsData.trip && detailsData.trip.candidates.map((candidate) => {



return(

    <div key ={candidate.id}>
        <span><b>Nome:</b>{candidate.name}</span>
        <span><b>Profissao:</b>{candidate.profession}</span>
        <span><b>Idade:</b>{candidate.age}</span>
        <span><b>Pais:</b>{candidate.country}</span>
        <span><b>Texto de Candidatura:</b>{candidate.applicationText}</span>
        <button>Aprovar </button>
        <button>Reprovar</button>


    </div>
)

})
return (


    <div>


        <button onClick={() => goToAdminPage(navigate)}>Sair </button>
        <h1>Viagem: {detailsData.trip && detailsData.trip.name}</h1>
        <h3>Lista de Candidatos</h3>
        {candidatesList}
        <h3> Lista de Aprovados</h3>
    </div>
)

}

export default TripDetails