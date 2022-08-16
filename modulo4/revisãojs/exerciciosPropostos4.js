

const contas = [
	{
		email: "astrodev@labenu.com",
		password: "abc123"
	},
	{
		email: "bananinha@gmail.com",
		password: "bananinha"
	}
]
const loginUsuario = (usuario,senha) =>{
  if(usuario.includes("@") == senha.length>=6){
      for(let i=0; i<=contas.length;i++){
          const validaUsuario = contas[i].usuario === usuario
          const validaSenha = contas[i].senha === senha
          const valida = validaUsuario && validaSenha 
          if(valida) {
              return "logado com sucesso!"
          }else
              return "email ou senha incorretos!"
          }
    
  }else {
      return "usuario invalido ou senha com menos de 6 caracteres"
  }
}

 console.log(loginUsuario('astrodev@labenu.com', 'abc123'))

 console.log(loginUsuario('adriv@email.com', '123Mudar'))
