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
  
  const obj3 =Object.assign(primeiraLista, ...segundaLista);
  console.log(obj3);
  