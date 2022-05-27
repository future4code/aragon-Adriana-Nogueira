import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import styled from "styled-components"
import { useNavigate } from 'react-router-dom';
import { goToAdminPage } from '../Rotas/coordenadas';
import useRequestData from '../Hooks/useRequestData';
import TripCard from '../Header/TripCard';
import {countries} from "../urls/countries"
import { useForm } from "../Hooks/useForm";
import {sendApplication} from "../servicos/Request"


const Container = styled.section`
padding: 10px;
font-family: Arial, Helvetica, sans-serif;
`

function HomePage () {
    const [tripId, setTripId] = useState("")
  const navigate = useNavigate()

  const [tripsData] = useRequestData("trips", {})
  
  const { form, onChange, clear } = useForm({ name: "", age: "", aplicationText: "", profession: "", cidades: "" })
  useEffect(() =>{
      if (localStorage.getItem("token")){
          goToAdminPage(navigate)
      }
  }, [])
  const onChangeTrip = (event) => {
      setTripId(event.target.value)
  }
  const onClickSend = (event) => {
      event.preventDefault()
      sendApplication(form,tripId, clear)
  }
  const tripsOptions = tripsData.trips && tripsData.trips.map((trip) => {
      return <option key={trip.id} value={trip.id}>{trip.name}</option>
  })

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
<h1>Inscreva-se numa nova Viagem!!!</h1>
<form onSubmit={(onClickSend)}>
<label htmlFor="trip">Viagem</label>
<select>
<input id={"trip"}
            defaultValue={""}
            onChange={onChangeTrip}
            required/>
            <option 
            value={""}
            disabled>Escolha uma viagem</option>
{tripsOptions}
</select>
<label htmlFor={'name'}>Name</label>
<input
id  ={"name"}
name={"name"}
value={"form.name"}
onChange={onChange}
pattern={"^.{3,}$"}
title={"O nome deve ter no minimo  3 caracteres"}
required/>
<label htmlFor='age'>Idade</label>
<input
id={"age"}
name={"age"}
type={"number"}
value={form.age}
onChange={onChange}
min={18}
required
/>
<label htmlFor='application-text'>Texto da Candidatura</label>
<input
id={"application-text"} 
name={"application-text"}
value={form.applicationText}
onChange={onChange}
pattern={"^.{30,}$"}
title={"O texto deve ter no minimo 30 caracteres"}
required
/>
<label htmlFor='profession'>Profissao</label>
<input
id={"profession"} 
name={"profession"}
value={form.profession}
onChange={onChange}
pattern={"^.{3,}$"}
title={"A profissão deve ter no minimo 3 caracteres"}
required
/>
<label htmlFor='country'>Pais de Origem</label>
<select><input
id={"country"} 
name={"country"}
value={form.country}
onChange={onChange}
required
/>
<option 
value={""}
disabled>Escolha uma cidade</option>
 {countries.map((country) => {

return<option value={country} key={country}>{country}</option>
})}
</select>
<button type={"submit"}>Enviar Candidatura</button>
</form>
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