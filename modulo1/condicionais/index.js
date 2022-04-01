//Exercicios de interpretação de código:

// Ele fala se  o resultado da resposta do usuario se ele passou no teste ou não.

//b) quando o numero for par ele informa que passou no teste 

//c) quando o número for impar ele informa que não passou no teste.

// Exercício 2

//a) Serve para informar o preços das frutas.

//b) Informa que o preço da fruta maçã é R$2.25

//c) A mensagem impressa será. O preço da fruta, perã, é R$ 5.
// retirando o break  não iria mudar pois esta com o resultado do 
//default


// Exercicio  3

//a) Esta recebendo um numero do usuario

//b) Segue a mesnagem esse número passou no teste. Quando informa -10 e 
// apresenta erro.

// havera pois não foi informado a outra condição somente a variavel


// Exercicios de escrita de código

//1)
const idadeUsuario = Number(prompt("Qual a sua idade?"))
if(idadeUsuario > 18) {
    console.log("Você pode dirigir")
}
else { 
    console.log("Você não pode dirigir")
    }

//2)



const horarioAluno = prompt("Digite o horario que você estuda , M(matutino) ou V(vespertino) ou N(noturno")
if (horarioAluno === "m"){
    console.log("Bom dia")
}
else if(horarioAluno === "v"){
console.log("Boa Tarde")
}
else {
    console.log("Boa noite")
}

//3)
let horarioAula  
switch (horarioAluno) {
    case "m":
        console.log("Bom dia")
        break;
    case "v":
        console.log("Boa tarde")    
        break;
    case "n":
        console.log("Boa noite")       
        break
    default:
        break;
}

//4) e desafio

let generoFilme = prompt("Qual o genero você quer assistir?")
let valorCinema = Number(prompt("Qual o valor do ingresso?"))
let pedirLanche = prompt("Qual lanche você quer?")

if (generoFilme === "fantasia"){
 } if (valorCinema < 15){
    console.log("Bom filme")
 }
    else { 
console.log("Escolha outro filme")
    }
console.log(`Aproveite a sua ${pedirLanche}`)

// DESAFIOS

//2)

const nomeUsuario = prompt("Nome completo")
const tipoJogo = prompt("Qual tipo do jogo, IN(Internacional), DO(Domestico)")
const  etapaJogo = ("Indique SM(Semi-final); DT(Decisão terceiro lugar); e FI(Final)")
const categoriaJogo = Number( prompt("Digite a opção de categoria 1,2,3 ou 4"))
const quantidadeIngressos = Number (prompt("Digite quantos ingressos"))
 console.log(`Nome completo: ${nomeUsuario}`)   
if (tipoJogo === "in"){
    console.log("Tipo de Jogo: Nacional")
    }
    else if (tipoJogo === "do"){
        console.log("Etapa do Jogo: Domestico")
    }
    else{
    }
    switch(categoriaJogo){
        case '1':
        console.log('Categoria: 1')
        break
        case'2':
        console.log('Categoria: 2')
        break
        case'3':
        console.log('Categoria: 3')
        break
        case'4':
        console.log('Categoria: 4')
        break
        default:
        break
}

