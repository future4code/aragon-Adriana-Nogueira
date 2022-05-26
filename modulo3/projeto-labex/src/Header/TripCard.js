import { useNavigate } from "react-router-dom"
import {goToTripDetailsPage} from "../Rotas/coordenadas"

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
<button onClick={() => goToTripDetailsPage(navigate, id)}>Exibir detalhes</button>
<button  onClick={() => props.removeTrip(id)}> Excluir viagem</button>
</div>
)}


</div>

)
}
export default TripCard
