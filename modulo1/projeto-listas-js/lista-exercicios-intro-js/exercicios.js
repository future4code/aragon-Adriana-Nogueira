// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {

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



function calculaAreaRetangulo(altura, largura){
//implmente sua lógica aqui
const largura1 = Number(prompt("Digite o valor largura"))
const altura1 = Number(prompt("Digite o valor altura"))
console.log(largura1*altura1)
return largura1 * altura1



}

const multiplica = calculaAreaRetangulo()

 

// EXERCÍCIO 02
 
function imprimeIdade(ano1, ano2) {
  const anoaAtual = Number (prompt("Digite o ano do aniversario"))
  const anoAniversario = Number (prompt("Digite o ano do aniversario"))  
  console.log(anoaAtual - anoAniversario)

}

  
// EXERCÍCIO 03

const valorPeso =  Number (prompt("Digite o valor peso"))
const ValorAltura =  Number(prompt("Digite o valor altura"))
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
 return peso / (altura * altura)
  
}

calculaIMC(85,1.8)


// EXERCÍCIO 04

function imprimeInformacoesUsuario(){
  
  
 const nome1 = prompt("Digite o  nome")
 const idade2 = Number(prompt("Digite idade"))
 const email3 = prompt("DIgite email")
 console.log(`Meu nome é ${nome1}, tenho ${idade2} anos, e o meu email é ${email3}.`)
}

imprimeInformacoesUsuario("Alice", 28, "alice@gmail.com")

imprimeInformacoesUsuario("João", 25, "joao@gmail.com")


// EXERCÍCIO 05


//function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
//const cores1 = prompt([" Qual a sua cor favorita?" ])
//const cores2 = prompt(["Digite outra cor favorita"])
//const cores3 = prompt([" Digita mais uma cor favorita"])
//const listaCores = []
//listaCores.push(cores1, cores2, cores3)
//return listaCores


//}

//console.log(imprimeTresCoresFavoritas())



// EXERCÍCIO 06
 function imprimeNomeString (string) {
// implemente sua lógica aqui
const nomeString = prompt("Digite a string")
return nomeString.toUpperCase()

  }
imprimeNomeString()


// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui

}

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