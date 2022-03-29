// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
const altura = Number(prompt("Diga o tamanho da altura"))
const largura = Number(prompt("Diga o tamanho da largura"))
console.log(altura  * largura)
}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  const anoAtual = Number(prompt("Diga o ano atual"))
  const anoAniversario = Number(prompt("Diga o ano do aniversario"))
 console.log(anoAtual - anoAniversario) 
}

// EXERCÍCIO 03

function calculaIMC(peso, altura) {
// implemente sua lógica aqui

return peso / (altura * altura)
}
const peso1 = Number(prompt("Digite valor do peso"))
const altura1 = Number(prompt("Digite valor da altura"))
const valorIMC = calculaIMC(85,1.8)



// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  const nome = (prompt("Digite seu nome"))
  const idade = Number(prompt("Digite sua idade"))
  const email = (prompt("Digite seu email"))
console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)

}



// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  const cor1 = prompt("Digite uma cor")
  const cor2 = prompt("Digite outra cor")
  const cor3 = prompt("Digite a terceira cor")
  const cores = [ cor1, cor2, cor3]
  console.log(cores)

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  return string.toUpperCase()
}
const stringFrase = prompt("Digite uma palavra")
const StringPalavra = retornaStringEmMaiuscula("bAnAnA")
// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
return custo / valorIngresso
}
calculaIngressosEspetaculo(3000,10)

// EXERCÍCIO 08

const nomeString1 = prompt("Digite uma string")
const nomeString2 = prompt("Digite a segunda string")
function checaStringsMesmoTamanho(string1, string2) {
 // implemente sua lógica aqui

console.log(nomeString1.length === nomeString2.length)
return string1.length === string2.length

}
checaStringsMesmoTamanho("Olá","abc")


// EXERCÍCIO 09

function retornaPrimeiroElemento(array) {
 // implemente sua lógica 
return array [0]

}
const NovaArrray  = [1,2,3]
console.log(retornaPrimeiroElemento(NovaArrray))


// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
return array.pop()
}
const NovaArray2 = [1,2,3,4,5]
console.log(retornaUltimoElemento(NovaArray2))


// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
// implemente sua lógica aqui

}
 
