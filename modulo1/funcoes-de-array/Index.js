
// Exercico 1




// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" }
//   ]
  
//   const novoArrayA = usuarios.map((item, index, array) => {
//      console.log(item, index, array)
//   })

//o map solicita os objetos  com o numero do indice e uma lista de array 

//Exercicio 2

// a programação devolve o nome dos  objetos da array.

// Exercico  3 

// ela imprime os apelidos menos "Chijo"

// Exercicio de escrita 

const pets = [
   { nome: "Lupin", raca: "Salsicha"},
   { nome: "Polly", raca: "Lhasa Apso"},
   { nome: "Madame", raca: "Poodle"},
   { nome: "Quentinho", raca: "Salsicha"},
   { nome: "Fluffy", raca: "Poodle"},
   { nome: "Caramelo", raca: "Vira-lata"},
]

let dogs = pets.map((pets, indice,array) => {
return pets.nome

})
console.log(dogs)

//b)
let novoDogs = pets.filter((pets, indice, array) => {
   return pets.raca === "Salsicha"
})
console.log(novoDogs)


let dogsDesconto  = pets.filter((pets) =>  {
   return pets.raca === "Poodle"

})

console.log(dogsDesconto)
const novoDesconto = dogsDesconto.map((pets) => {
   return pets.nome
})
console.log(`Você ganhou um cupom de desconto de 10% para tosar 0/a ${novoDesconto[0]}`)
console.log(`Você ganhou um cupom de desconto de 10% para tosar 0/a ${novoDesconto[1]}`)


// Exercicio 2

const produtos = [
   { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
   { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
   { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
   { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
   { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
   { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
   { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
   { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
   { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
   { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
]
//a)

let supermercadoIte = produtos.map((produto, indice, array) => {
   return produto.nome
})
console.log(supermercadoIte)

//b)
 
 const novaListaSuper = produtos.filter((produto, indice, array) => {
  return produtos.nome + produtos.preco !== produtos.categoria
})

 
console.log(novaListaSuper)

//c) 
const outraLista = produtos.filter((produto, indice,array) => {
return produto.categoria === 'Bebidas'

})
console.log(outraLista)

//d) 

const nomeYpe = produtos.filter(produto => produto.nome.includes("Ypê") )


console.log(nomeYpe)
//e)
// const fraseYpepreço = produtos.map((produto, indice, array) => {
// return produto.nome.includes('Ypê')


// })

// console.log(`Compre Detergente ${nome} por ${preco}`)
//Desafio 

const pokemons = [
   { nome: "Bulbasaur", tipo: "grama" },
   { nome: "Bellsprout", tipo: "grama" },
   { nome: "Charmander", tipo: "fogo" },
   { nome: "Vulpix", tipo: "fogo" },
   { nome: "Squirtle", tipo: "água" },
   { nome: "Psyduck", tipo: "água" },
]
const nomesPokemons = pokemons.map((pokemon, indice, array) => {
return pokemon.nome

})


console.log(nomesPokemons.sort())


//b)

