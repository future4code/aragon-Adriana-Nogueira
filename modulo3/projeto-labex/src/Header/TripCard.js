

function TripCard (props){
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
<button> Exibir detalhes</button>
<button  onClick={() => props.removeTrip(id)}> Excluir viagem</button>
</div>
)}


</div>

)
}
export default TripCard
