import axios from "axios";
import PokeCard from "./components/PokeCard";

import { useState, useEffect } from "react";

function App(props) {
  // Passo 3b
  // Implemente suas variáveis de estado aqui.
const [pokeList, setPokeList] = useState([])
const [pokeName, setPokeName] = useState("")
  // Passo 3c
  // componentDidMount = () => {
  //   axios
  //     .get("https://pokeapi.co/api/v2/pokemon/?limit=151")
  //     .then((res) => {
  //       this.setState({ pokeList: res.data.results });
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

useEffect(() => {
  axios 
  .get("https://pokeapi.co/api/v2/pokemon/?limit=151")
  .then((res) => { 
    setPokeList(res.data.results)
  })
  .catch((err) => {
    console.error( "Erro ao buscar Pokemon")
  })
},[])



  // Passo 3a
  const changePokeName = (event) => {
    setPokeName(event.target.value)
    // Passo 3d
    // Implementa a função aqui.
  };

  // Passo 3e
  // const pokeOptions = this.state.pokeList.map(pokemon => {
  //   return (
  //     <option key={pokemon.name} value={pokemon.name}>
  //       {pokemon.name}
  //     </option>
  //   );
  // });
const pokeOptions = pokeList.map(pokemon => {
  return (
<option key={pokemon.name}>{pokemon.name}</option>
  )
})




  // Passo 4a
  const pokemon = pokeName && <PokeCard pokeName={pokeName} />;

  return (
    <>
      <header>
        <h1>Exibir Pokémon</h1>
      </header>
      <hr />
      <nav>
        <label htmlFor={"select-pokemon"}>Selecione um pokemon: </label>
         {/* Passo 3a */}
        <select  onChange={changePokeName} >
          <option key = {pokemon.name}value={""}>Nenhum</option>
          {/* Passo 3e */}
          {pokeOptions}
        </select>
      </nav>
      <main>
        {pokemon}
      </main>
    </>
  );
};

export default App;
