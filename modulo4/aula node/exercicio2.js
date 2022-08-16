// Crie uma aplicação Node que recebe uma string representando uma operação matemática e dois valores numéricos. O retorno deverá ser o resultado da operação selecionada utilizando os 2 valores fornecidos.
const number1 = Number(process.argv[2])
const number2 = Number(process.argv[3])
const add = number1 + number2
const sub = number1 - number2
const mult = number1 * number2
const div = number1 / number2


// console.log(`A soma dos numeros é  ${add}! `)
// console.log(`A subtração dos numeros é  ${sub}! `)
// console.log(`A multiplicação dos numeros é  ${mult}! `)
// console.log(`A divisão dos numeros é  ${div}! `)
    
let executarOperacao = process.argv[4]

switch(executarOperacao){
    case "add": 
    console.log(`A soma dos numeros é  ${add}! `)
    break
    case "sub":
    console.log(`A subtração dos numeros é  ${sub}! `)
    break
    case "mult": 
    console.log(`A multiplicação dos numeros é  ${mult}! `)
    break
    case "div": 
    console.log(`A divisão dos numeros é  ${div}! `)
    break
    default:
}

