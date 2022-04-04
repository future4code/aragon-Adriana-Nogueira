// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()



// EXERCÍCIO 01
function retornaTamanhoArray(array) {
    return array.length
    }
    console.log(retornaTamanhoArray)
    // EXERCÍCIO 02
    
    function retornaArrayInvertido(array) {
        return array.reverse()
      
    }
    console.log(retornaArrayInvertido)
    // EXERCÍCIO 03
    function retornaArrayOrdenado(array) {
    array.sort((a,b) => a-b)
    return array
    
    }
    
    console.log(retornaArrayOrdenado)
    // EXERCÍCIO 04
    
    function retornaNumerosPares(array) {
    const novaArray = array.filter(array => array % 2 ===0)    
    return novaArray
    
    }
    console.log(retornaNumerosPares)
    
    // EXERCÍCIO 05
    function retornaNumerosParesElevadosADois(array) {
        const novaArrayPares = array.filter((numero)  => {
            return numero % 2 ===0
        } )   
    const novaListaElevada = novaArrayPares.map((numero) => {
    return numero * numero
    
    })
    return novaListaElevada
    
    }
    
        // EXERCÍCIO 06
    function retornaMaiorNumero(array) {
        
        let maior = -Infinity
        for(let i = 0;i < array.length; i++ ){
            if (array[i] > maior){
                maior = array[i]
            }
        }
        return maior
    }
    console.log(retornaMaiorNumero)
    
    // EXERCÍCIO 07
    function retornaObjetoEntreDoisNumeros(num1, num2) {
    const maiorNumero = []
    if (num1 > num2){
    
    }
    }
    
    // EXERCÍCIO 08
    function retornaNPrimeirosPares(n) {
       let numerosPares = []
       for(let i = 0; numerosPares.length < n; i++){
           if (i % 2 ==0){
               numerosPares.push(i)
           }
       }
       return numerosPares
    }
    console.log(retornaNPrimeirosPares(5))
    
    // EXERCÍCIO 09
    function classificaTriangulo(ladoA, ladoB, ladoC) {
    const lateralA =  ladoA
    const lateral2 = ladoB
    const lateral3 = ladoC
    if (lateralA < (lateral2 + lateral3) && lateral2 < (lateralA+lateral3) && lateral3  < (lateralA+lateral2)){
        if(lateralA == lateral2 && lateral2 == lateral3){
            return 'Equilátero';
    }else if(lateralA==lateral2 || lateralA == lateral3 || lateral3 == lateral2){
        return'Isósceles'
    }else{
        return 'Escaleno'
    }
    }
    }
    
    // EXERCÍCIO 10
    function retornaSegundoMaiorESegundoMenor(array) {
      
    
    }
    
    // EXERCÍCIO 11
    function retornaChamadaDeFilme(filme) {
        
         
       
    }
    
    // EXERCÍCIO 12
    function retornaPessoaAnonimizada(pessoa) {
       
    }
    
    // EXERCÍCIO 13A
    function retornaPessoasAutorizadas(pessoas) {
       
    }
    
    // EXERCÍCIO 13B
    function retornaPessoasNaoAutorizadas(pessoas) {
      
    }
    
    // EXERCÍCIO 14
    function retornaContasComSaldoAtualizado(contas) {
    
    }
    
    // EXERCÍCIO 15A
    function retornaArrayOrdenadoAlfabeticamente(consultas) {
      
    }
    
    // EXERCÍCIO 15B
    function retornaArrayOrdenadoPorData(consultas) {
       
    }