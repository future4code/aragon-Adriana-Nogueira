

// a) 10
//    50
// b) Executa o retorno da minhaFuncao porém nada aconteceu no console mas não foi solicitado impreessão.

//Exercicio 2

//a) A variavel atribuiu a funçao um booleanos para a pergunta do prompt.
// todas as entradas são true

//Exercício escrita de  Código


//function imprimirFrase(){
//console.log "Eu sou Adriana, tenho 42 anos, moro em São Jose do Rio Pardo e sou estudante.")
//}

//imprimirFrase()
// EXERCICIO 2 

function frase2(nome,idade, endereco, profissao){
const dados = `Eu sou ${nome}, tenho ${idade}, moro em ${endereco} e sou ${profissao}`
console.log(dados)

return dados



}

frase2("Adriana", 42,"São Jose do Rio Pardo", "Estudante")
//EXERCICIO 3
//A)

function somaDois(n1, n2) {
     const somaN = n1 + n2
    return somaN 
}
    console.log(somaDois(15,5))
     const valoresRetorno = somaDois(15,5)
     console.log(valoresRetorno)

//B)
function doisNumeros(num1, num2) {
    const soma1 = num1 >= num2
    return soma1
}
 
console.log(doisNumeros(25,15))
const valorRetorno1 = (doisNumeros(25,15))
console.log(valorRetorno1)

//C) 
function numeroPareseImpares(n){
const valorresultado = n % 2  
return valorresultado === 0
}


console.log(numeroPareseImpares(6))
numeroPareseImpares(6)

//D)  
// Não consegui fazer

// Exercicio 3




