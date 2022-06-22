function convertTemp (temp, unidade) {
if (unidade === "F"){
    const conversaoF =(temp *9/5) +32
    
    return console.log(`${temp}Celsius é equivalente a ${conversaoF} Farenheit `)
    
}else if (unidade === "K"){
const  conversaoK =  temp + 273.15
    return console.log(`${temp} Celsius é equivalente a ${conversaoK} Kelsius `)
} else {
    console.log( `Erro. Parâmetro inválido ${temp} ,${unidade}`)
}


}
console.log(convertTemp(30,"K"))