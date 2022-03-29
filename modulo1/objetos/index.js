const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
}

console.log(filme.elenco[0])
console.log(filme.elenco[filme.elenco.length - 1])
console.log(filme.transmissoesHoje[2])

// ira imprimir Matheus Nachtergaele
 // ira imprimir Virgina Cavendish
  // ira imprimir canal globo e 14h


const cachorro = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}

const gato = {...cachorro, nome: "Juba"}

const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

console.log(cachorro)
console.log(gato)
console.log(tartaruga)

// sera impresso o objeto do cachorro - nome Juca, idade 3, raca  SRD.
// ira imprimir nome Juba, idade 3, raca SRD
// ira imprimir nome Jubo, idade 3, raca SRD
// ela copia toda a propriedade de um objeto  serve para manipular as propriedades da maneira que quisermos.

function minhaFuncao(objeto, propriedade) {
	return objeto[propriedade]
}

const pessoa = {
  nome: "Caio", 
  idade: 23, 
  backender: false
}

console.log(minhaFuncao(pessoa, "backender"))
console.log(minhaFuncao(pessoa, "altura"))


// ira imprimir False
// ira imprimir Undefined

// e chamada a função onde mostra a propriedade do objeto  com boleano, e na outra impressaão e chamada a funçao e impresso Undefined pois não e apresentado essa propriedade não gerando valor.

// exercicio de escrita de código

const filmes ={
filme1: "filme1",
filme2: "filme2",
filme3: "filme3"

}
const nomesFilmes = `O nome dela e ${filmes.filme1}, ela tem ${filmes.filme2} e gosta muito de ${filmes.filme3}`


console.log(nomesFilmes)

// Exemplo de entrada
const adrianaNome = {
    nomeVerdade: "Amanda", 
    apelidos: ["Amandinha", "Mandinha", "Mandi"]
}


 function entradaObjeto (objeto1){

   
   return `Eu sou e ${adrianaNome.nomeVerdade} mas podde me chamar de ${adrianaNome.apelidos[0,1]} ou ${adrianaNome.apelidos[2]}.`
     
    }

const frasecompleta1 = entradaObjeto()

console.log(frasecompleta1)


//b)

const novoObjeto = {
...adrianaNome,
apelidos:["Adri", "Dri", "Drica"]
}
const frase2 = `Eu sou e ${novoObjeto.nomeVerdade} mas podde me chamar de ${novoObjeto.apelidos[0,1]} ou ${novoObjeto.apelidos[2]}.`

console.log(frase2)
    


//Exercicio b



//2 a)

const objeton1 = {
nomeN1: "Adriana",
idaden1: 42,
profissaon1: "estudante"

}
function dadosAdri(){
return [ `${objeton1.nomeN1}, 5 ,${objeton1.idaden1}, "Instrutor", ${objeton1.profissaon1}`]



}
console.log(dadosAdri(objeton1))


//Exercicio 3
//a)
const carrinho = [];

 const array1 = {
nome:"Mamão",
disponibilidade: true
    }

const array = {
    nome:"Morango",
    disponibilidade: true
}
const array3 = {
    nome:"Banana",
    disponibilidade: true
}
function recebendoFruta(compra){

carrinho.push(array)
carrinho.push(array1)
carrinho.push(array3)
return compra

}

console.log(recebendoFruta(carrinho))

//Desafio 1 

function inserirNome(){
const nomeObjeto = {
nome: prompt("Qual e o seu nome"),
idade: Number(prompt("Qual a sua idade")),
profissão: prompt("Qual a sua profissão"),

}

console.log(nomeObjeto)
}
 inserirNome( )

// Desafio 2
