import axios from "axios";
import { useEffect,useState } from "react";

function PokeCard(props) {
 const [pokemon, setPokemonEscolhido] = useState ({})





  useEffect(() => {
  pegaPokemon(props.pokemon)
  },[])
 
useEffect(() => {
  pegaPokemon (props.pokemon)
},[props.pokemon])

const pegaPokemon = pokeName =>{
  axios
  .get(`https://pokeapi.co/api/v2/pokemon/ ${ pokeName } `)
  .then(response => {
    setPokemonEscolhido(response.data)
  })
  .catch ((err) => {
    console.log(err)
  })
}
    


//   // Passo 4b
//   // Implementa suas variáveis de estado aqui.]
//   const [pokemons, pegaPokemon] = useState({})

//   // Passo 4c
//   // componentDidMount() {
//   //   this.pegaPokemon(this.props.pokeName);
//   // };

//   // Passo 4c
//   // componentDidUpdate(prevProps) {
//   //   if (prevProps.pokeName !== this.props.pokeName) {
//   //     this.pegaPokemon(this.props.pokeName);
//   //   };
//   // };

   

    

  // Passo 4c
  // pegaPokemon = (pokeName) => {
  //   axios
  //     .get()
  //     .then((res) => {
  //       this.setState({ pokemon: res.data });
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

   
  return (
    <figure>
       <p>{pokemon.name}</p>
        <p>Peso :{pokemon.weight} Kg</p>
       <p>Tipo {pokemon.types && pokemon.types[0].type.name}</p>
        {pokemon.sprites && (
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      )}
    </figure>
  );
};

export default PokeCard;
