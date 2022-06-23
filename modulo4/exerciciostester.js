const primeiraLista = [
	{
		nome: "Banana"
	},
	{
		nome: "Laranja"
	}
]

const segundaLista= [
	{
		nome: "Laranja"
	},
	{
		nome: "Cebola"
	}
]
const gerarItem = (lista1, lista2) => {
    const listaConcat = lista1.concat(lista2)
    const novoresultado  = []
    for (let itemNovoresultado of listaConcat){
        const itemresultado = novoresultado.find((item) =>  item.nome === itemNovoresultado.nome)
        if (!itemresultado){
            novoresultado.push(itemNovoresultado)
        }
    }return novoresultado
}
 console.log(gerarItem(primeiraLista,segundaLista))