
//
//             const cadastraCliente = (clientes) => {
//                if ( users.id !== users.id){
//                    return clientes.push(users)

//                }else {
//                    console.log(`Erro. Parâmetro inválido ${users.id} `)
//                }
               
//             }
//             cadastraCliente(5,"fulano")
const usuario = [
	{ id: 1, nome:"Fulano" },
	{ id: 2, nome: "Beltrano" },
	{ id: 3, nome: "Ciclano" },
	{ id: 4, nome: "Fulana" }
]
function cadastraUsuario(cadastro){
  const newUser = [...usuario, cadastro]
  if(newUser !== usuario){
      return newUser

  }else { 
      console.log(`Erro. Parâmetro inválido ${users.id} `)
  }
}
cadastraUsuario(({ id: 5, nome: "Fulano" }) )