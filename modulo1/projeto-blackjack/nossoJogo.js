/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
console.log("Boa vindas ao jogo Blackjack!")

const iniciarRodada = confirm("Quer iniciar uma nova rodada")
if (iniciarRodada == true){
   
}
else {
console.log("O jogo acabou")
}




const cartas = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
const naipes = ["♦️", "♥️", "♣️", "♠️"]


const valorUsuario = comprarCarta()
const valorUsuario1 =  comprarCarta()
const valorComputador = comprarCarta()
const valorComputador1 = comprarCarta()

const valorPontosUsuario = valorUsuario.valor + valorUsuario1.valor  
const valorPontoComputador = valorComputador.valor + valorComputador1.valor 

console.log(`Ùsuário - cartas: ${valorUsuario.texto} ${valorUsuario1.texto} - pontuação ${valorPontosUsuario}`)
console.log(`Computador - cartas: ${valorComputador.texto} ${valorComputador1.texto} - pontuação ${valorPontoComputador}`)
if (valorPontosUsuario > valorPontoComputador){
   console.log('O usuário ganhou!')
}
   else if (valorPontoComputador > valorPontosUsuario){      
      console.log('O computador ganhou!')

   }
   else if (valorPontoComputador === valorPontosUsuario){
      console.log('Empate!')
   }

else {
   
}