type Pessoa = {
	nome: string,
	quantidades: number,
	valorUnitario:number | string
}
const produtos: Pessoa[] =
[
	{ nome: "MacMugffin", quantidades: 37, valorUnitario: 51.040},
	{ nome: "Vassoura voadora", quantidades: 56, valorUnitario: 210.0},
	{ nome: "Laço da verdade", quantidades: 32, valorUnitario: 571.5},
	{ nome: "O precioso", quantidades: 1, valorUnitario: 9181.923},
	{ nome: "Caneta de 250 cores", quantidades: 123, valorUnitario: 17},
	{ nome: "Plumbus", quantidades: 13, valorUnitario: 140.44},
	{ nome: "Pokebola", quantidades: 200, valorUnitario: 99.9915}
]


function filtrarValorEstoque(estoque:Pessoa[]):Pessoa[] {

let estoqueAtualizado = 0
for (let quantidade of quantidades){
estoqueAtualizado +- quantidade
}
const produtosAtualizados: Pessoa = {
	nome: produtos.nome,
	quantidades: produtos.quantidades + estoqueAtualizado,
	valorUnitario:produtos.valorUnitario
	
}
return produtosAtualizados

}
const ajustaPreco = (preco :number): string => {
	const valorAjustado: string = preco.toFixed(2).replace('.', ',')
	return "R$ "+valorAjustado
}
return ajustaPreco

	}
	console.log(filtrarValorEstoque(produtos))
	
	
	
	




