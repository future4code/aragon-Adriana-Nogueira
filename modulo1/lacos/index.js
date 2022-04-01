//Exercico de interpretação de codigo:
//1
// A variavel  inicia em 0 o laço ele faz a condição de parar quando numero e menor que 5
 //e efetua a soma da variavel + 1, assim imprimindo no final o valor final 10 
//2
// e impresso um loop com os numeros ( 19 ,21,23,25,27,30)

// Sim pode ser usado


//PERGUNTE AO USUARIO QUANTOS BICHINHOS DE ESTIMAÇÃO ELE TEM E GUARDE ESSE DADO EM UMA VARIAVEL
//  SE A QUANTIDADE FOR 0, IMPRIMA NO CONSOLE! QUE PENA VOCÊ PODE ADOTAR UM PET"
// SE A QUANTIDADE FOR MAIOR QUE 0, SOLICITE QUE O USUARIO DIGITE OS NOMES DELES, UM POR UM E GUARDE ESSES NOMES
//EM UM ARRAY 
// IMPRIMIR O ARRAY COM OS NOMES DOS BICHINHOS NO CONSOLE

let numBichinhos = Number(prompt("Quantos bichinhos você tem?"))
let quantBichinhos = numBichinhos === 0
let valorBichinhos = numBichinhos > 0
let arrayBichinhos = []

if (quantBichinhos){
    console.log("Que pena!Vocẽ pode adotar um pet!");
}else if (valorBichinhos) {
}for (let i = 0; i < numBichinhos; i++){   
arrayBichinhos.push(prompt("Diga o nome dos seus bichinhos"))    
}

console.log(arrayBichinhos)

// EXERCICO 3

// Este array será usado para exemplificar as respostas de todos os itens
const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
for (let i = 0; i < arrayOriginal.length; i++){
    console.log(`${arrayOriginal[i]}`)
}
function devolveArray(arrayNovo){
    console.log(arrayNovo)
}

arrayOriginal.forEach(devolverNovaArray)
function devolverNovaArray(arrrayPares){
    console.log(arrrayPares / 10)
}
 function arrayPares(valorArrayPar){
 if(valorArrayPar % 2 == 0)
 return valorArrayPar
 }
 if(arrayOriginal > 9 ){

 }
 for(i = 0; i <= arrayOriginal.length; i++){
console.log(`O elemento do index ${[i]} é ${arrayOriginal[i]}`)
 }
maiorvalor = arrayOriginal[i]
menorValor = arrayOriginal[i+1]
if(menorValor < maiorvalor){
    menor = menorValor
}
else {

}
console.log(`O maior valor é ${maiorvalor} é o menor ${menorValor}`)
