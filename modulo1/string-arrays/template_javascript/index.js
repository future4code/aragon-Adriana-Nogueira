//Exercícios de Interpretação
//Exercćio  1 

//A primeira variavel não informamos uma string.
// a. undefined
// a segunda informa a string e null como resposta a variavel
// b. null
// a terceira a array informa a string e o tamalho da lista
// c. 11
// a letra d  mostra o numero que esta na posição do indice 
// d. 3
//a quarta esta acessa o o valor da array pelo sua posição e adiciona + junta o numero da variavel na lista na posição 1 ,primeiro temos o valor que temos na lista e 
//e. 11
// a proxima e a posição da array informada pelo indice  na lista  solicitada na variavel
// f. 9

//Exercicios  2 
// Será impresso: 
// SUBI NUM ÔNIBUS EM MARROCOS. Subi num ônibus em MIrrocos 27


//Exercicio de Inscrita de código

//1 --------------------

const nomedoUsuario = prompt("Qual é o seu usuario?")
const nomedoemail = prompt("Qual é o seu e-mail?")

//  com +

const frase1 = " O e-mail " + nomedoemail + " foi cadastrado com sucesso. Seja bem-vindo(o) " + nomedoUsuario + "!"
console.log(frase1)

//  com crase ``

const frase2 = `O e-mail ${nomedoemail} foi cadastrado com sucesso. Seja bem vindo(a)  ${nomedoUsuario}!`
console.log(frase2)

//2 --------------------------------

let pratospreferidos = ["pizza"," Frango assado","Arroz a grega","strognoff","tutu de feijão"]
console.log("Essas são as minhas comidas preferidas")
console.log(`   ${pratospreferidos [0]}
${pratospreferidos [1]}
${pratospreferidos [2]}
${pratospreferidos [3]}
${pratospreferidos [4]}`)

const pratosUsuario = prompt(" Diga qual o seu prato favorito")


pratospreferidos[1] = pratosUsuario


console.log(pratospreferidos)

// 3 ----------------------------

listaDeTarefas = []
const tarefa1 = prompt("Cite primeira tarefa realizada" )
const tarefa2 = prompt("Cite segunda tarefa realizada")
const tarefa3 = prompt("Cite terceira tarefa realizada")

const primeiraTarefa = listaDeTarefas.push(tarefa1)
const segundaTarefa = listaDeTarefas.push(tarefa2)
const terceiraTarefa = listaDeTarefas.push(tarefa3)
console.log(listaDeTarefas)
const indice = Number (prompt(" Digite a tarefa que ja realizou 0,1,2?"))
listaDeTarefas.splice(indice)
console.log(listaDeTarefas)

console.log("Só percebemos o valor da água depois que perdemos")

frasePopular = [ "Só" , "percebemos", "o" , "valor" , "depois", "que", "perdemos"]
console.log(frasePopular)


frutas = ["Banana","Morango","Abacaxi","Laranja","Ameixa"]
const frutasindice = frutas[2]
console.log(frutas.length , frutasindice)


// desafio

1.

// const minhaFrase = "Eu amo Javascript!"
// const minhaFraseArray = minhaFrase.split(" ")
// console.log(minhaFraseArray)

// 2.

const frutas = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"];

const indexAbabaxi = frutas.indexOf("Abacaxi");
const tamanhoArray = frutas.length;

console.log("Index abacaxi: ", indexAbabaxi, "tamanho do array:", tamanhoArray);
